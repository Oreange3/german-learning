import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { login, user } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setError('')
    const result = login(username, password)
    if (!result.ok) {
      setError(result.error)
      setPassword('')
      return
    }
    navigate('/')
  }

  return (
    <section className="panel">
      <h2>Log on</h2>
      <p>Type a username. A learner leaves the password blank. It is saved only in this browser.</p>
      {user && !user.admin ? (
        <p className="hint">
          You are logged in as <strong>{user.username}</strong>. Submitting the form switches the name.
        </p>
      ) : null}
      {user?.admin ? (
        <p>
          Signed in as <strong>{user.username}</strong>.{' '}
          <Link to="/course">Open the course</Link>.
        </p>
      ) : null}

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
            autoComplete="current-password"
          />
        </label>
        <p className="hint">Leave the password blank unless you are logging in as admin.</p>
        {error ? <p className="form-error">{error}</p> : null}
        <p className="form-actions">
          <button className="btn btn-gold" type="submit">
            Log on
          </button>
          <Link className="btn" to="/">
            Back to the games
          </Link>
        </p>
      </form>
    </section>
  )
}
