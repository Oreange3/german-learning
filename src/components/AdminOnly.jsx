import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function AdminOnly({ load }) {
  const { isAdmin } = useAuth()
  const [Page, setPage] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!isAdmin) {
      setPage(null)
      setFailed(false)
      return undefined
    }

    let live = true
    setFailed(false)
    setPage(null)
    load()
      .then((mod) => {
        if (live) setPage(() => mod.default)
      })
      .catch(() => {
        if (live) setFailed(true)
      })
    return () => {
      live = false
    }
  }, [isAdmin, load])

  if (!isAdmin) {
    return (
      <section className="panel">
        <h2>Course</h2>
        <p>This course is private. Log in as admin to open it.</p>
        <p>
          <Link className="btn btn-gold" to="/login">
            Log on
          </Link>
        </p>
      </section>
    )
  }

  if (failed) {
    return (
      <section className="panel">
        <h2>Course</h2>
        <p>The course page did not open.</p>
      </section>
    )
  }

  if (!Page) {
    return (
      <section className="panel">
        <p>Opening the course…</p>
      </section>
    )
  }

  return <Page />
}
