import { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Comments from './Comments.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const SITE_TITLE = 'German Orange Class For Cool People'

export default function Layout() {
  const { user, isGuest, isAdmin, logout } = useAuth()

  useEffect(() => {
    document.title = SITE_TITLE
  }, [])

  const tabs = [
    { to: '/', label: 'Gender', end: true },
    { to: '/lesen', label: 'Lesen' },
    { to: '/pronouns', label: 'Pronouns' },
  ]
  if (isAdmin) tabs.push({ to: '/course', label: 'Course' })

  return (
    <div className="page">
      <div className="flag-bar" aria-hidden="true">
        <span className="stripe black" />
        <span className="stripe red" />
        <span className="stripe gold" />
      </div>

      <div className="site">
        <header className="masthead">
          <div className="brand">
            <div className="flag-badge" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <p className="brand-kicker">DAILY PRACTICE · THIS BROWSER</p>
              <h1 className="brand-title">{SITE_TITLE}</h1>
              <p className="brand-tag">Gender, reading, and pronouns are open. The course is for the admin.</p>
            </div>
          </div>

          <div className="user-box">
            {isGuest ? (
              <>
                <p className="user-status">
                  Status: <strong>Guest</strong>
                </p>
                <p className="user-links">
                  <NavLink to="/login">Log on</NavLink>
                </p>
              </>
            ) : (
              <>
                <p className="user-status">
                  Logged in as <strong>{user.username}</strong>
                  {isAdmin ? ' (admin)' : ''}
                </p>
                <p className="user-links">
                  <button type="button" className="linkish" onClick={logout}>
                    Log off
                  </button>
                </p>
              </>
            )}
          </div>
        </header>

        <nav className="main-nav" aria-label="Main">
          {tabs.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? 'nav-tab active' : 'nav-tab')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {isGuest ? (
          <div className="guest-banner">Games and comments are open. The course stays closed until an admin logs on.</div>
        ) : null}

        <div className="body-grid" style={{ gridTemplateColumns: '1fr' }}>
          <main className="content">
            <Outlet />
            <Comments />
          </main>
        </div>

        <footer className="site-foot">
          <div className="flag-bar thin" aria-hidden="true">
            <span className="stripe black" />
            <span className="stripe red" />
            <span className="stripe gold" />
          </div>
          <p>{SITE_TITLE}</p>
          <p className="hint">
            <NavLink to="/notes">Notes</NavLink>
            {' · '}
            <NavLink to="/about">About</NavLink>
            {' · '}
            <NavLink to="/login">Log on</NavLink>
          </p>
        </footer>
      </div>
    </div>
  )
}
