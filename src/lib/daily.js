/** Local-calendar seeding for the daily sets. Practice mode does not use this. */

export function localDateKey(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function hashSeed(text) {
  let h = 2166136261
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function mulberry32(seed) {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function seededShuffle(items, seedText) {
  const rng = mulberry32(hashSeed(String(seedText)))
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1))
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  return arr
}

/** One item per local day, in a fixed order, so a text returns only after the whole set has been used. */
export function dailyPick(items, salt, date = new Date()) {
  if (!items.length) return null
  const order = seededShuffle(items, `${salt}|order`)
  const [year, month, day] = localDateKey(date).split('-').map(Number)
  const index = Math.floor(Date.UTC(year, month - 1, day) / 86400000)
  return order[index % order.length]
}

const PROGRESS_KEY = 'goc_daily_progress'

export function readDailyProgress(gameKey) {
  const today = localDateKey()
  try {
    const all = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}
    if (all.date !== today) return { answers: [] }
    return all.games?.[gameKey] || { answers: [] }
  } catch {
    return { answers: [] }
  }
}

export function writeDailyProgress(gameKey, progress) {
  const today = localDateKey()
  let all = { date: today, games: {} }
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY))
    if (saved?.date === today) all = { date: today, games: saved.games || {} }
  } catch {
    all = { date: today, games: {} }
  }
  all.games[gameKey] = progress
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(all))
}
