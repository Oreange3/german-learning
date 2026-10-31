import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { courseBands, getCourseLesson } from '../data/courseBook.js'

const STORAGE = 'hallodeutsch_kurs_open'

function loadOpen() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE)) || { a1: true, 'a1-m1': true }
  } catch {
    return { a1: true, 'a1-m1': true }
  }
}

export default function CourseNav() {
  const location = useLocation()
  const [open, setOpen] = useState(loadOpen)

  function toggle(id) {
    setOpen((prev) => {
      const next = { ...prev, [id]: !prev[id] }
      sessionStorage.setItem(STORAGE, JSON.stringify(next))
      return next
    })
  }

  return (
    <section className="panel course-panel">
      <h2>Hallo Kurs</h2>
      <p className="tree-tools">
        <NavLink to="/course" end>
          All modules
        </NavLink>
      </p>
      <ul className="course-tree">
        {courseBands.map((band) => {
          const bandOpen = Boolean(open[band.id])
          return (
            <li key={band.id} className="tree-group">
              <button type="button" className="tree-toggle" aria-expanded={bandOpen} onClick={() => toggle(band.id)}>
                <span className="tree-mark">{bandOpen ? '−' : '+'}</span>
                {band.title}
              </button>
              {bandOpen && (
                <ul className="tree-subgroups">
                  {band.modules.map((mod) => {
                    const modOpen = Boolean(open[mod.id])
                    return (
                      <li key={mod.id} className="tree-subgroup">
                        <button
                          type="button"
                          className="tree-toggle tree-subtoggle"
                          aria-expanded={modOpen}
                          onClick={() => toggle(mod.id)}
                        >
                          <span className="tree-mark">{modOpen ? '−' : '+'}</span>
                          M{mod.number} {mod.title}
                        </button>
                        {modOpen && (
                          <ul className="tree-lessons">
                            {mod.lessonIds.map((id) => {
                              const lesson = getCourseLesson(id)
                              if (!lesson) return null
                              return (
                                <li key={id}>
                                  <NavLink
                                    to={`/course/${id}`}
                                    className={({ isActive }) =>
                                      isActive || location.pathname === `/course/${id}`
                                        ? 'tree-link active'
                                        : 'tree-link'
                                    }
                                  >
                                    L{lesson.number} {lesson.title}
                                  </NavLink>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>

      <h2>Also here</h2>
      <ul className="course-tree">
        <li>
          <NavLink to="/exam" className={({ isActive }) => (isActive ? 'tree-link active' : 'tree-link')}>
            Exam papers
          </NavLink>
        </li>
        <li>
          <NavLink to="/practice" className={({ isActive }) => (isActive ? 'tree-link active' : 'tree-link')}>
            Drills
          </NavLink>
        </li>
        <li>
          <NavLink to="/study" className={({ isActive }) => (isActive ? 'tree-link active' : 'tree-link')}>
            Grammar lab
          </NavLink>
        </li>
        <li>
          <NavLink to="/levels" className={({ isActive }) => (isActive ? 'tree-link active' : 'tree-link')}>
            CEFR maps
          </NavLink>
        </li>
      </ul>
    </section>
  )
}
