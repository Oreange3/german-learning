import { Link } from 'react-router-dom'
import { courseBands, courseMeta, getCourseLesson } from '../data/courseBook.js'
import { useAuth } from '../context/AuthContext.jsx'

const startLessons = ['kb-a1-01', 'kb-a1-02', 'kb-a1-03', 'kb-a1-04']

export default function Home() {
  const { isGuest, user } = useAuth()

  return (
    <>
      <section className="panel page-head">
        <p className="kicker">Willkommen{isGuest ? ', Gast' : `, ${user.username}`}</p>
        <h2>Learn in order, then test yourself</h2>
        <p className="lead">
          {courseMeta.title} is an A1–B2 path. A1–B1 follow Menschen (8×3). B2 is a shorter
          Aspekte/Sicher starter. Same page every time.
        </p>
        <ol className="path-steps">
          <li>
            <Link to="/course">Course</Link> — A1, then A2, B1, B2.
          </li>
          <li>
            <Link to="/practice">Practice</Link> — articles, cases, translation.
          </li>
          <li>
            <Link to="/programs/exam-a1">Exam loops</Link> — A1 to B2 tracks built around Goethe, telc, and ÖSD task types.
          </li>
          <li>
            <Link to="/exam">Exam</Link> — timed papers with PDFs and answers at the bottom.
          </li>
        </ol>
        <p>
          <Link className="btn btn-gold" to="/course">
            Open the course
          </Link>
          <Link className="btn btn-red" to="/course/kb-a1-01">
            Start L1
          </Link>
          <Link className="btn" to="/programs/exam-a1">
            A1 exam loop
          </Link>
          <Link className="btn" to="/exam">
            Exam papers
          </Link>
        </p>
      </section>

      <section className="panel">
        <h2>The course volumes</h2>
        <div className="table-wrap">
          <table className="grid-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>What you walk</th>
                <th>Open</th>
              </tr>
            </thead>
            <tbody>
              {courseBands.map((band) => (
                <tr key={band.id}>
                  <td>
                    <span className="level-pill">{band.code}</span>
                  </td>
                  <td>
                    <strong>{band.title}</strong>
                    <br />
                    {band.blurb} {band.modules.length} modules, {band.modules.length * 3} lessons.
                  </td>
                  <td>
                    <Link className="btn btn-gold" to="/course">
                      {band.code} modules
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel">
        <h2>First four lessons</h2>
        <div className="table-wrap">
          <table className="grid-table">
            <thead>
              <tr>
                <th>L</th>
                <th>Lesson</th>
                <th>You learn</th>
              </tr>
            </thead>
            <tbody>
              {startLessons.map((id) => {
                const lesson = getCourseLesson(id)
                return (
                  <tr key={id}>
                    <td>L{lesson.number}</td>
                    <td>
                      <Link to={`/course/${id}`}>{lesson.title}</Link>
                    </td>
                    <td>{lesson.teaser}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
