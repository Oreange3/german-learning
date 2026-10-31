/** Common nouns with real genders. Articles below are the standard case forms. */

function n(id, gender, singular, genitive, plural, plDat, en, enPl) {
  return { id, gender, singular, genitive, plural, plDat, en, enPl }
}

export const genderNouns = [
  n('mann', 'm', 'Mann', 'Mannes', 'Männer', 'Männern', 'man', 'men'),
  n('tisch', 'm', 'Tisch', 'Tisches', 'Tische', 'Tischen', 'table', 'tables'),
  n('stuhl', 'm', 'Stuhl', 'Stuhls', 'Stühle', 'Stühlen', 'chair', 'chairs'),
  n('hund', 'm', 'Hund', 'Hundes', 'Hunde', 'Hunden', 'dog', 'dogs'),
  n('tag', 'm', 'Tag', 'Tages', 'Tage', 'Tagen', 'day', 'days'),
  n('apfel', 'm', 'Apfel', 'Apfels', 'Äpfel', 'Äpfeln', 'apple', 'apples'),
  n('baum', 'm', 'Baum', 'Baumes', 'Bäume', 'Bäumen', 'tree', 'trees'),
  n('zug', 'm', 'Zug', 'Zuges', 'Züge', 'Zügen', 'train', 'trains'),
  n('bruder', 'm', 'Bruder', 'Bruders', 'Brüder', 'Brüdern', 'brother', 'brothers'),
  n('vater', 'm', 'Vater', 'Vaters', 'Väter', 'Vätern', 'father', 'fathers'),
  n('loeffel', 'm', 'Löffel', 'Löffels', 'Löffel', 'Löffeln', 'spoon', 'spoons'),
  n('schluessel', 'm', 'Schlüssel', 'Schlüssels', 'Schlüssel', 'Schlüsseln', 'key', 'keys'),
  n('freund', 'm', 'Freund', 'Freundes', 'Freunde', 'Freunden', 'friend', 'friends'),
  n('monat', 'm', 'Monat', 'Monats', 'Monate', 'Monaten', 'month', 'months'),
  n('bahnhof', 'm', 'Bahnhof', 'Bahnhofs', 'Bahnhöfe', 'Bahnhöfen', 'station', 'stations'),
  n('park', 'm', 'Park', 'Parks', 'Parks', 'Parks', 'park', 'parks'),
  n('frau', 'f', 'Frau', 'Frau', 'Frauen', 'Frauen', 'woman', 'women'),
  n('tuer', 'f', 'Tür', 'Tür', 'Türen', 'Türen', 'door', 'doors'),
  n('schule', 'f', 'Schule', 'Schule', 'Schulen', 'Schulen', 'school', 'schools'),
  n('stadt', 'f', 'Stadt', 'Stadt', 'Städte', 'Städten', 'city', 'cities'),
  n('katze', 'f', 'Katze', 'Katze', 'Katzen', 'Katzen', 'cat', 'cats'),
  n('mutter', 'f', 'Mutter', 'Mutter', 'Mütter', 'Müttern', 'mother', 'mothers'),
  n('schwester', 'f', 'Schwester', 'Schwester', 'Schwestern', 'Schwestern', 'sister', 'sisters'),
  n('lampe', 'f', 'Lampe', 'Lampe', 'Lampen', 'Lampen', 'lamp', 'lamps'),
  n('strasse', 'f', 'Straße', 'Straße', 'Straßen', 'Straßen', 'street', 'streets'),
  n('uhr', 'f', 'Uhr', 'Uhr', 'Uhren', 'Uhren', 'clock', 'clocks'),
  n('blume', 'f', 'Blume', 'Blume', 'Blumen', 'Blumen', 'flower', 'flowers'),
  n('tasche', 'f', 'Tasche', 'Tasche', 'Taschen', 'Taschen', 'bag', 'bags'),
  n('frage', 'f', 'Frage', 'Frage', 'Fragen', 'Fragen', 'question', 'questions'),
  n('wohnung', 'f', 'Wohnung', 'Wohnung', 'Wohnungen', 'Wohnungen', 'apartment', 'apartments'),
  n('kind', 'n', 'Kind', 'Kindes', 'Kinder', 'Kindern', 'child', 'children'),
  n('haus', 'n', 'Haus', 'Hauses', 'Häuser', 'Häusern', 'house', 'houses'),
  n('buch', 'n', 'Buch', 'Buches', 'Bücher', 'Büchern', 'book', 'books'),
  n('auto', 'n', 'Auto', 'Autos', 'Autos', 'Autos', 'car', 'cars'),
  n('fenster', 'n', 'Fenster', 'Fensters', 'Fenster', 'Fenstern', 'window', 'windows'),
  n('maedchen', 'n', 'Mädchen', 'Mädchens', 'Mädchen', 'Mädchen', 'girl', 'girls'),
  n('glas', 'n', 'Glas', 'Glases', 'Gläser', 'Gläsern', 'glass', 'glasses'),
  n('zimmer', 'n', 'Zimmer', 'Zimmers', 'Zimmer', 'Zimmern', 'room', 'rooms'),
  n('bett', 'n', 'Bett', 'Bettes', 'Betten', 'Betten', 'bed', 'beds'),
  n('jahr', 'n', 'Jahr', 'Jahres', 'Jahre', 'Jahren', 'year', 'years'),
  n('handy', 'n', 'Handy', 'Handys', 'Handys', 'Handys', 'mobile phone', 'mobile phones'),
  n('fruehstueck', 'n', 'Frühstück', 'Frühstücks', 'Frühstücke', 'Frühstücken', 'breakfast', 'breakfasts'),
  n('museum', 'n', 'Museum', 'Museums', 'Museen', 'Museen', 'museum', 'museums'),
  n('brot', 'n', 'Brot', 'Brotes', 'Brote', 'Broten', 'bread', 'loaves of bread'),
  n('gespraech', 'n', 'Gespräch', 'Gesprächs', 'Gespräche', 'Gesprächen', 'conversation', 'conversations'),
]

export const CASES = [
  { id: 'nom', label: 'Nominativ' },
  { id: 'akk', label: 'Akkusativ' },
  { id: 'dat', label: 'Dativ' },
  { id: 'gen', label: 'Genitiv' },
]

const ARTICLES = {
  nom: { m: 'der', f: 'die', n: 'das', pl: 'die' },
  akk: { m: 'den', f: 'die', n: 'das', pl: 'die' },
  dat: { m: 'dem', f: 'der', n: 'dem', pl: 'den' },
  gen: { m: 'des', f: 'der', n: 'des', pl: 'der' },
}

const CHOICES = {
  nom: ['der', 'die', 'das'],
  akk: ['den', 'die', 'das'],
  dat: ['dem', 'der', 'den'],
  gen: ['des', 'der'],
}

const FRAMES = {
  nom: {
    sg: [{ left: 'Hier ist', en: 'Here is' }],
    pl: [{ left: 'Hier sind', en: 'Here are' }],
  },
  akk: {
    sg: [
      { left: 'für', en: 'for' },
      { left: 'ohne', en: 'without' },
    ],
    pl: [
      { left: 'für', en: 'for' },
      { left: 'ohne', en: 'without' },
    ],
  },
  dat: {
    sg: [
      { left: 'von', en: 'from' },
      { left: 'zu', en: 'to' },
    ],
    pl: [
      { left: 'von', en: 'from' },
      { left: 'zu', en: 'to' },
    ],
  },
  gen: {
    sg: [
      { left: 'wegen', en: 'because of' },
      { left: 'trotz', en: 'despite' },
    ],
    pl: [
      { left: 'wegen', en: 'because of' },
      { left: 'trotz', en: 'despite' },
    ],
  },
}

function frameFor(noun, number, caseId) {
  const options = FRAMES[caseId][number]
  let hash = 0
  const key = `${noun.id}-${number}`
  for (let i = 0; i < key.length; i += 1) hash += key.charCodeAt(i)
  return options[hash % options.length]
}

export function makeGenderCard(noun, number, caseId) {
  const key = number === 'pl' ? 'pl' : noun.gender
  const form = number === 'pl' ? (caseId === 'dat' ? noun.plDat : noun.plural) : caseId === 'gen' ? noun.genitive : noun.singular
  const frame = frameFor(noun, number, caseId)
  const thing = number === 'pl' ? noun.enPl : noun.en
  return {
    id: `${noun.id}-${number}`,
    form,
    phrase: `${frame.left} ___ ${form}`,
    en: `${frame.en} the ${thing}`,
    numberLabel: number === 'pl' ? 'plural' : 'singular',
    answer: ARTICLES[caseId][key],
    choices: CHOICES[caseId],
  }
}

export function allGenderCards(caseId) {
  const cards = []
  for (const noun of genderNouns) {
    cards.push(makeGenderCard(noun, 'sg', caseId))
    cards.push(makeGenderCard(noun, 'pl', caseId))
  }
  return cards
}
