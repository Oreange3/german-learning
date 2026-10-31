export function ex(de, en) {
  return { de, en }
}

export function gp({ id, group, de, en, when, rule, examples, exam, related = [] }) {
  return { id, group, de, en, when, rule, examples, exam, related }
}

export function cluster(title, pairs) {
  return {
    title,
    words: pairs.map((row) => {
      if (typeof row === 'string') return { de: row, en: '' }
      const [de, en, extra] = row
      return extra ? { de, en, extra } : { de, en }
    }),
  }
}

export function theme({ id, title, de, why, clusters, functions = [], books = [] }) {
  return { id, title, de, why, clusters, functions, books }
}

export function chunk(de, en, use) {
  return { de, en, use }
}

export function mistake(wrong, right, why) {
  return { wrong, right, why }
}

export function bookRow(book, units, covers) {
  return { book, units, covers }
}
