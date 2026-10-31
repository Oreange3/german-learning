import { a1Lessons, a1Modules } from './courseBookA1.js'
import { a2Lessons, a2Modules } from './courseBookA2.js'
import { b1Lessons, b1Modules } from './courseBookB1.js'
import { b2Lessons, b2Modules } from './courseBookB2.js'

export const courseMeta = {
  title: 'Hallo Kurs',
  subtitle: 'A structured A1–B2 path',
  inspiredBy: 'Hueber Menschen (Evans / Pude / Specht)',
  note:
    'Original classroom lessons. A1–B1 follow Menschen (8×3). B2 is a shorter Aspekte/Sicher-style starter. Each page: Einstieg → Wortfeld → Grammatik → Redemittel → Abschluss. We do not copy book dialogues or titles.',
}

export const courseBands = [
  {
    id: 'a1',
    code: 'A1',
    title: 'A1 · Ankommen',
    de: '24 Lektionen · 8 Module',
    blurb: 'Greetings to invitations — the first volume.',
    modules: a1Modules,
  },
  {
    id: 'a2',
    code: 'A2',
    title: 'A2 · Alltag',
    de: '24 Lektionen · 8 Module',
    blurb: 'Stories, housing, travel, and weil / wenn.',
    modules: a2Modules,
  },
  {
    id: 'b1',
    code: 'B1',
    title: 'B1 · Selbstständig',
    de: '24 Lektionen · 8 Module',
    blurb: 'Opinions, relative clauses, Konjunktiv II, Passiv.',
    modules: b1Modules,
  },
  {
    id: 'b2',
    code: 'B2',
    title: 'B2 · Vantage',
    de: '12 Lektionen · 4 Module',
    blurb: 'Aspekte/Sicher-style starter: K I, Nominalisierung, Passivarten.',
    modules: b2Modules,
  },
]

const lessonMap = { ...a1Lessons, ...a2Lessons, ...b1Lessons, ...b2Lessons }

export function allCourseLessons() {
  const rows = []
  for (const band of courseBands) {
    for (const mod of band.modules) {
      for (const id of mod.lessonIds) {
        const lesson = lessonMap[id]
        if (lesson) rows.push({ band, module: mod, lesson })
      }
    }
  }
  return rows
}

export function getCourseLesson(id) {
  return lessonMap[id] || null
}

export function coursePlace(id) {
  return allCourseLessons().find((row) => row.lesson.id === id) || null
}

/** Words and phrases from 1, 3, and 7 lessons earlier — a short expanding review. */
export function reviewWords(id) {
  const rows = allCourseLessons()
  const index = rows.findIndex((row) => row.lesson.id === id)
  if (index <= 0) return []
  const items = []
  for (const lag of [1, 3, 7]) {
    const row = rows[index - lag]
    if (!row) continue
    const pool = [...(row.lesson.words || []), ...(row.lesson.phrases || [])]
    for (const pair of pool.slice(0, 2)) {
      items.push({
        lag,
        from: `L${row.lesson.number}`,
        de: pair[0],
        en: pair[1],
      })
    }
  }
  return items
}

export function courseNeighbors(id) {
  const ids = allCourseLessons().map((row) => row.lesson.id)
  const index = ids.indexOf(id)
  const prevId = index > 0 ? ids[index - 1] : null
  const nextId = index >= 0 && index < ids.length - 1 ? ids[index + 1] : null
  return {
    prev: prevId ? { id: prevId, title: lessonMap[prevId].title, number: lessonMap[prevId].number } : null,
    next: nextId ? { id: nextId, title: lessonMap[nextId].title, number: lessonMap[nextId].number } : null,
  }
}

export function courseProgress(done) {
  const rows = allCourseLessons()
  const total = rows.length
  const finished = rows.filter((row) => done[row.lesson.id]).length
  return { total, finished, percent: total ? Math.round((finished / total) * 100) : 0 }
}
