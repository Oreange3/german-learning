import { genderNouns } from '../data/genderNouns.js'

const POS = new Set([
  'Noun',
  'Verb',
  'Adjective',
  'Adverb',
  'Pronoun',
  'Article',
  'Preposition',
  'Conjunction',
  'Participle',
  'Determiner',
  'Numeral',
  'Interjection',
])

const GENDER_NAME = { m: 'masculine', f: 'feminine', n: 'neuter' }
const ARTICLE = { m: 'der', f: 'die', n: 'das' }

const cache = new Map()
let nounIndex

function indexNouns() {
  if (nounIndex) return nounIndex
  nounIndex = new Map()
  const add = (form, noun, note, en) => {
    const key = form.toLocaleLowerCase('de')
    if (!key || nounIndex.has(key)) return
    nounIndex.set(key, { noun, note, en })
  }
  for (const noun of genderNouns) {
    add(noun.singular, noun, '', noun.en)
    add(noun.genitive, noun, 'genitive', noun.en)
    add(noun.plural, noun, 'plural', noun.enPl)
    if (noun.plDat !== noun.plural) add(noun.plDat, noun, 'dative plural', noun.enPl)
  }
  return nounIndex
}

export function cleanLookup(raw) {
  return String(raw || '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^[^A-Za-zÄÖÜäöüß0-9]+|[^A-Za-zÄÖÜäöüß0-9.?!]+$/g, '')
    .slice(0, 180)
}

export function articleFor(gender) {
  return ARTICLE[gender] || ''
}

function germanSection(extract) {
  const start = extract.indexOf('\n== German ==')
  if (start < 0) return ''
  const section = extract.slice(start)
  const next = section.slice(12).search(/\n== [^=]/)
  return next < 0 ? section : section.slice(0, next + 12)
}

export function parseGermanExtract(extract) {
  const section = germanSection(extract)
  if (!section) return null
  const lines = section
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  let pos = ''
  let gender = ''
  let plural = ''
  let gloss = ''
  let lemma = ''
  let formNote = ''

  for (const line of lines) {
    if (line.startsWith('=')) {
      const heading = line.replace(/=/g, '').trim()
      if (!pos && POS.has(heading)) pos = heading
      continue
    }
    if (/^(IPA|Hyphenation|Rhymes|Homophone|From |Cognate )/.test(line)) continue
    if (/^\d{4},/.test(line)) continue

    const nounLine = line.match(/^(\S+)\s+(m|f|n)\b/)
    if (nounLine && !gender) {
      gender = nounLine[2]
      const pluralMatch = line.match(/plural\s+([^,)]+)/)
      if (pluralMatch && !/no plural/i.test(pluralMatch[1])) plural = pluralMatch[1].trim()
      continue
    }

    const ofMatch = line.match(/\bof\s+([A-Za-zÄÖÜäöüß][A-Za-zÄÖÜäöüß-]*)\s*$/)
    if (ofMatch && !formNote) {
      formNote = line
      lemma = ofMatch[1]
      continue
    }

    if (!gloss && !/^[A-Za-zÄÖÜäöüß-]+$/.test(line)) {
      gloss = line.replace(/\s+/g, ' ').slice(0, 220)
    }
  }

  if (!pos && !gender && !gloss && !lemma) return null
  return { pos, gender, plural, gloss, lemma, formNote }
}

function fromClassList(word) {
  const hit = indexNouns().get(word.toLocaleLowerCase('de'))
  if (!hit) return null
  const lemma = hit.note ? hit.noun.singular : ''
  return {
    query: word,
    kind: 'word',
    translation: hit.en,
    article: articleFor(hit.noun.gender),
    genderLabel: GENDER_NAME[hit.noun.gender] || '',
    pos: 'Noun',
    lemma,
    formNote: hit.note && lemma ? `${hit.note} of ${lemma}` : '',
    plural: hit.note ? '' : hit.noun.plural,
    source: 'class list',
  }
}

export function previewLookup(raw) {
  const text = cleanLookup(raw)
  if (!text || text.includes(' ')) return null
  return fromClassList(text)
}

async function fetchExtract(title, signal) {
  const url = `https://en.wiktionary.org/w/api.php?action=query&prop=extracts&explaintext=1&exlimit=1&redirects=1&titles=${encodeURIComponent(title)}&format=json&origin=*`
  const response = await fetch(url, { signal })
  const raw = await response.text()
  if (!response.ok || raw.startsWith('You are')) throw new Error('busy')
  const json = JSON.parse(raw)
  const page = Object.values(json.query?.pages || {})[0]
  if (!page || page.missing) return ''
  return page.extract || ''
}

async function machineTranslation(text, signal) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=de|en`
  const response = await fetch(url, { signal })
  if (!response.ok) throw new Error('translate')
  const json = await response.json()
  const translated = json.responseData?.translatedText || ''
  if (!translated || /MYMEMORY WARNING/i.test(translated) || json.responseStatus !== 200) {
    throw new Error('translate')
  }
  return translated
}

function packWord(query, parsed, source) {
  return {
    query,
    kind: 'word',
    translation: parsed.gloss || '',
    article: articleFor(parsed.gender),
    genderLabel: GENDER_NAME[parsed.gender] || '',
    pos: parsed.pos || '',
    lemma: parsed.lemma && parsed.lemma.toLocaleLowerCase('de') !== query.toLocaleLowerCase('de') ? parsed.lemma : '',
    formNote: parsed.formNote || '',
    plural: parsed.plural || '',
    source,
  }
}

function mergeEntry(base, extra) {
  if (!base) return extra
  if (!extra) return base
  return {
    ...base,
    translation: extra.translation || base.translation,
    article: extra.article || base.article,
    genderLabel: extra.genderLabel || base.genderLabel,
    pos: extra.pos || base.pos,
    lemma: extra.lemma || base.lemma,
    formNote: extra.formNote || base.formNote,
    plural: extra.plural || base.plural,
    source: extra.source || base.source,
  }
}

async function dictionaryEntry(word, signal) {
  const titled = word.charAt(0).toLocaleUpperCase('de') + word.slice(1)
  const titles = word === titled ? [word] : [word, titled]
  for (const title of titles) {
    const extract = await fetchExtract(title, signal)
    const parsed = parseGermanExtract(extract)
    if (!parsed) continue
    let entry = packWord(word, parsed, 'Wiktionary')
    if (entry.lemma && !entry.translation) {
      const baseExtract = await fetchExtract(entry.lemma, signal)
      const base = parseGermanExtract(baseExtract)
      if (base) {
        entry = mergeEntry(entry, {
          ...packWord(entry.lemma, base, 'Wiktionary'),
          query: word,
          lemma: entry.lemma,
          formNote: entry.formNote,
        })
      }
    }
    return entry
  }
  return null
}

export async function lookupGerman(raw, signal) {
  const text = cleanLookup(raw)
  if (!text) return null
  const key = text.toLocaleLowerCase('de')
  if (cache.has(key)) return cache.get(key)

  const local = text.includes(' ') ? null : fromClassList(text)
  let result = null

  if (text.includes(' ')) {
    const translation = await machineTranslation(text, signal)
    result = {
      query: text,
      kind: 'phrase',
      translation,
      article: '',
      genderLabel: '',
      pos: '',
      lemma: '',
      formNote: '',
      plural: '',
      source: 'machine',
    }
  } else {
    try {
      result = await dictionaryEntry(text, signal)
    } catch (error) {
      if (error?.name === 'AbortError') throw error
      result = null
    }
    result = mergeEntry(result, local)
    if (result && !result.translation) {
      try {
        result = { ...result, translation: await machineTranslation(text, signal), source: result.source || 'machine' }
      } catch (error) {
        if (error?.name === 'AbortError') throw error
      }
    }
    if (!result) {
      const translation = await machineTranslation(text, signal)
      result = {
        query: text,
        kind: 'word',
        translation,
        article: '',
        genderLabel: '',
        pos: '',
        lemma: '',
        formNote: '',
        plural: '',
        source: 'machine',
      }
    }
  }

  if (result?.translation || result?.article) cache.set(key, result)
  return result
}
