export function foldGerman(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/ß/g, 'ss')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/^(the|a|an|to)\s+/, '')
    .replace(/[^\p{L}\p{N}]+/gu, '')
}

export function slugify(value) {
  return foldGerman(value).replace(/\s+/g, '-')
}

export function answersMatch(input, accepted) {
  const guess = foldGerman(input)
  if (!guess) return false
  return accepted.some((item) => foldGerman(item) === guess)
}

export function shuffle(list) {
  const copy = [...list]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}
