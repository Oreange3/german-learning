const COOKIE = 'goc_browser'
const PROFILES_KEY = 'goc_profiles'
const YEAR = 60 * 60 * 24 * 400

function readCookie(name) {
  const parts = document.cookie ? document.cookie.split('; ') : []
  const row = parts.find((part) => part.startsWith(`${name}=`))
  if (!row) return ''
  try {
    return decodeURIComponent(row.slice(name.length + 1))
  } catch {
    return ''
  }
}

function writeCookie(name, value) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${YEAR}; SameSite=Lax`
}

function rememberToken(token) {
  writeCookie(COOKIE, token)
  try {
    localStorage.setItem(COOKIE, token)
  } catch {
    // The cookie is the copy that matters. Storage can be full.
  }
}

export function browserToken() {
  const fromCookie = readCookie(COOKIE)
  if (/^[a-f0-9]{32}$/.test(fromCookie)) return fromCookie

  let stored = ''
  try {
    stored = localStorage.getItem(COOKIE) || ''
  } catch {
    stored = ''
  }
  if (/^[a-f0-9]{32}$/.test(stored)) {
    writeCookie(COOKIE, stored)
    return stored
  }

  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  const token = [...bytes].map((byte) => byte.toString(16).padStart(2, '0')).join('')
  rememberToken(token)
  return token
}

export function hashCode(value) {
  let hash = 0x811c9dc5
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193)
  }
  return (hash >>> 0).toString(16).padStart(8, '0')
}

export function currentIdentity(username) {
  const name = typeof username === 'string' ? username.trim() : ''
  if (name) return { key: `user:${name}`, label: name, guest: false }
  const token = browserToken()
  return { key: `browser:${token}`, label: `#${hashCode(token)}`, guest: true }
}

export function loadProfiles() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PROFILES_KEY))
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {}
    return parsed
  } catch {
    return {}
  }
}

export function saveProfileImage(key, image) {
  const profiles = loadProfiles()
  if (image) profiles[key] = { image }
  else delete profiles[key]
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles))
  return profiles
}
