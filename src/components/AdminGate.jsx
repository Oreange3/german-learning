import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

/**
 * Learners never mount the child route, so course markup is not in the DOM.
 * The check is only in the browser. It is not real security.
 */
export default function AdminGate() {
  const { isAdmin } = useAuth()

  if (!isAdmin) {
    return (
      <section className="panel" aria-labelledby="course-lock-title">
        <h2 id="course-lock-title">Course</h2>
        <p>This course is private. Log in as admin to open it.</p>
      </section>
    )
  }

  return (
    <Suspense fallback={<p className="panel">Opening the course…</p>}>
      <Outlet />
    </Suspense>
  )
}
