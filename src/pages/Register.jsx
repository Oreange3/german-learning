import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Register() {
  const { register, continueAsGuest, user } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    setBusy(true)
    const result = await register(username, password)
    setBusy(false)
    if (!result.ok) {
      setError(result.error)
      return
    }
    navigate('/')
  }

  if (user) {
    return (
      <section className="panel">
        <h2>Already registered</h2>
        <p>
          You are logged in as <strong>{user.username}</strong>.
        </p>
        <Link className="btn btn-gold" to="/">
          Back to home
        </Link>
      </section>
    )
  }

  return (
    <section className="panel">
      <h2>Create a free account</h2>
      <p>
        Optional. Guests can use the whole site. An account only saves your name in this
        browser for now.
      </p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Username
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            autoComplete="username"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
            required
          />
        </label>
        <label>
          Confirm password
          <input
            type="password"
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
            autoComplete="new-password"
            required
          />
        </label>
        {error && <p className="form-error">{error}</p>}
        <p className="form-actions">
          <button className="btn btn-gold" type="submit" disabled={busy}>
            {busy ? 'Saving…' : 'Register'}
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => {
              continueAsGuest()
              navigate('/')
            }}
          >
            Stay a guest
          </button>
        </p>
      </form>

      <p className="hint">
        Already have a name here? <Link to="/login">Log on</Link>.
      </p>
    </section>
  )
}
