import {
  a1Books,
  a1Chunks,
  a1Grammar,
  a1Mistakes,
  a1Overview,
  a1Pronunciation,
  a1Ready,
  a1Skills,
  a1Themes,
} from './a1.js'
import {
  a2Books,
  a2Chunks,
  a2Grammar,
  a2Mistakes,
  a2Overview,
  a2Pronunciation,
  a2Ready,
  a2Skills,
  a2Themes,
} from './a2.js'
import {
  b1Books,
  b1Chunks,
  b1Grammar,
  b1Mistakes,
  b1Overview,
  b1Pronunciation,
  b1Ready,
  b1Skills,
  b1Themes,
} from './b1.js'
import {
  b2Books,
  b2Chunks,
  b2Grammar,
  b2Mistakes,
  b2Overview,
  b2Pronunciation,
  b2Ready,
  b2Skills,
  b2Themes,
} from './b2.js'
import { GRADE_SCALE, examsByLevel } from './exams.js'
import { levelSegments } from './segments.js'
import { sources } from './sources.js'

export { GRADE_SCALE, examsByLevel, levelSegments, sources }

function pack(id, code, title, de, blurb, parts) {
  return {
    id,
    code,
    title,
    de,
    blurb,
    hours: parts.overview.hours,
    overview: parts.overview,
    pronunciation: parts.pronunciation,
    grammar: parts.grammar,
    themes: parts.themes,
    skills: parts.skills,
    chunks: parts.chunks,
    mistakes: parts.mistakes,
    books: parts.books,
    ready: parts.ready,
    exams: examsByLevel[id],
  }
}

export const levels = [
  pack('a1', 'A1', 'A1 · Breakthrough', 'Elementare Sprachverwendung', 'Survive greetings, shopping, travel, forms, and a short personal note.', {
    overview: a1Overview,
    pronunciation: a1Pronunciation,
    grammar: a1Grammar,
    themes: a1Themes,
    skills: a1Skills,
    chunks: a1Chunks,
    mistakes: a1Mistakes,
    books: a1Books,
    ready: a1Ready,
  }),
  pack('a2', 'A2', 'A2 · Waystage', 'Elementare Sprachverwendung', 'Routine life: housing, work, health, travel, Perfekt stories, short messages.', {
    overview: a2Overview,
    pronunciation: a2Pronunciation,
    grammar: a2Grammar,
    themes: a2Themes,
    skills: a2Skills,
    chunks: a2Chunks,
    mistakes: a2Mistakes,
    books: a2Books,
    ready: a2Ready,
  }),
  pack('b1', 'B1', 'B1 · Threshold', 'Selbstständige Sprachverwendung', 'Independent travel talk, reasons, emails, forum posts, and the modular B1 exam.', {
    overview: b1Overview,
    pronunciation: b1Pronunciation,
    grammar: b1Grammar,
    themes: b1Themes,
    skills: b1Skills,
    chunks: b1Chunks,
    mistakes: b1Mistakes,
    books: b1Books,
    ready: b1Ready,
  }),
  pack('b2', 'B2', 'B2 · Vantage', 'Selbstständige Sprachverwendung', 'Fluent discussion, argumentative writing, lectures, and register control.', {
    overview: b2Overview,
    pronunciation: b2Pronunciation,
    grammar: b2Grammar,
    themes: b2Themes,
    skills: b2Skills,
    chunks: b2Chunks,
    mistakes: b2Mistakes,
    books: b2Books,
    ready: b2Ready,
  }),
]

export function getLevel(id) {
  return levels.find((level) => level.id === id) || null
}

export function getSources(ids) {
  return (ids || []).map((id) => sources.find((item) => item.id === id)).filter(Boolean)
}

export function levelSourceIds(level) {
  const ids = new Set([...(level.overview.sourceIds || [])])
  for (const exam of level.exams) {
    for (const id of exam.sourceIds || []) ids.add(id)
  }
  return [...ids]
}

export function grammarGroups(grammar) {
  const order = []
  const map = new Map()
  for (const item of grammar) {
    if (!map.has(item.group)) {
      map.set(item.group, [])
      order.push(item.group)
    }
    map.get(item.group).push(item)
  }
  return order.map((name) => ({ name, items: map.get(name) }))
}

export function levelNeighbors(id) {
  const index = levels.findIndex((level) => level.id === id)
  return {
    prev: index > 0 ? levels[index - 1] : null,
    next: index >= 0 && index < levels.length - 1 ? levels[index + 1] : null,
  }
}

export function countItems(level) {
  return {
    grammar: level.grammar.length,
    themes: level.themes.length,
    vocab: level.themes.reduce(
      (sum, theme) => sum + theme.clusters.reduce((inner, cluster) => inner + cluster.words.length, 0),
      0,
    ),
    chunks: level.chunks.length,
    exams: level.exams.length,
  }
}
