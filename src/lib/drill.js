export function answersFor(cell) {
  if (!cell || typeof cell !== 'object') return []
  const list = Array.isArray(cell.answer) ? cell.answer : [cell.answer]
  return list.filter(Boolean)
}

export function isBlankCell(cell) {
  return Boolean(cell && typeof cell === 'object' && 'answer' in cell)
}

/** Put a missed card a few items ahead, at most twice. Mutates `counts`. */
export function requeueMiss(deck, index, item, counts, limit = 2) {
  const key = item.id || item.de || String(index)
  const seen = counts[key] || 0
  if (seen >= limit) return deck
  counts[key] = seen + 1
  const copy = deck.slice()
  const at = Math.min(copy.length, index + 4)
  copy.splice(at, 0, item)
  return copy
}
