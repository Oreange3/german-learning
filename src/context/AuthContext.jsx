import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const SESSION_KEY = 'goc_session'
const ADMIN_NAME = 'Oreange3'
const ADMIN_PASSWORD = 'MyDad'

function readSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed.username !== 'string') return null
    const username = parsed.username
    if (!username) return null
    const admin = username === ADMIN_NAME && parsed.admin === true
    return { username, admin }
  } catch {
    return null
  }
}

function storeSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ username: session.username, admin: session.admin }))
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readSession)

  const login = useCallback((username, password) => {
    const name = typeof username === 'string' ? username.trim() : ''
    if (!name) return { ok: false, error: 'Type a username.' }

    if (name === ADMIN_NAME) {
      if (password !== ADMIN_PASSWORD) {
        return { ok: false, error: 'Wrong password.' }
      }
      const session = { username: name, admin: true }
      try {
        storeSession(session)
      } catch {
        return { ok: false, error: 'This browser could not save the login.' }
      }
      setUser(session)
      return { ok: true }
    }

    const session = { username: name, admin: false }
    try {
      storeSession(session)
    } catch {
      return { ok: false, error: 'This browser could not save the login.' }
    }
    setUser(session)
    return { ok: true }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      user,
      isGuest: !user,
      isAdmin: Boolean(user && user.username === ADMIN_NAME && user.admin),
      login,
      logout,
    }),
    [user, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
