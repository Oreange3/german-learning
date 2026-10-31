import { Link } from 'react-router-dom'
import { allLessons, courseTree } from '../data/courses.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function Study() {
  const { isGuest } = useAuth()
  const lessons = allLessons()

  return (
    <>
      <section className="panel">
        <h2>Study lab</h2>
        <p>
          Extra grammar and skill pages, grouped A1–B2. The main path is the{' '}
          <Link to="/course">Course</Link> (A1–B1: L1–L24 each; B2: 12 starter lessons).
          Use this lab when you want more on one topic. Timed papers live under{' '}
          <Link to="/exam">Exam</Link>.
        </p>
        {isGuest && (
          <p className="note">Guests can study everything. Progress is not saved yet. Notes on this PC are shared.</p>
        )}
      </section>

      {courseTree.map((group) => (
        <section className="panel" key={group.id}>
          <h2>
            {group.title} <span className="muted">{group.de}</span>
          </h2>
          {(group.subgroups || []).map((sub) => {
            const items = lessons.filter((item) => item.subgroupId === sub.id)
            return (
              <div className="study-sub" key={sub.id} id={sub.id}>
                <h3>
                  {sub.title} <span className="muted">{sub.de}</span>
                </h3>
                {items.length === 0 ? (
                  <p className="empty-state">No lessons in this subgroup yet.</p>
                ) : (
                  <ul className="lesson-list">
                    {items.map((lesson) => (
                      <li key={lesson.id} className="lesson-card">
                        <span className="level-pill">{lesson.level}</span>
                        <div>
                          <h3>
                            <Link to={`/study/${lesson.id}`}>{lesson.title}</Link>
                          </h3>
                          <p>{lesson.teaser}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </section>
      ))}
    </>
  )
}
