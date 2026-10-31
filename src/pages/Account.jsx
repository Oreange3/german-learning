import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Account() {
  const { user, isGuest, logout } = useAuth()

  if (isGuest) {
    return (
      <section className="panel">
        <h2>No account yet</h2>
        <p>You are a guest. Log on or register to see this page.</p>
        <p>
          <Link className="btn btn-gold" to="/login">
            Log on
          </Link>
          <Link className="btn btn-red" to="/register">
            Register
          </Link>
        </p>
      </section>
    )
  }

  return (
    <section className="panel">
      <h2>My account</h2>
      <table className="grid-table">
        <tbody>
          <tr>
            <th>Username</th>
            <td>{user.username}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>Member (this browser)</td>
          </tr>
          <tr>
            <th>Notes</th>
            <td>
              Shared on this PC — <Link to="/notes">open Notes</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <button type="button" className="btn btn-red" onClick={logout}>
          Log off
        </button>
      </p>
    </section>
  )
}
