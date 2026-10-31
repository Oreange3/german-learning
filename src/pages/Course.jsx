import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DataTable from '../components/DataTable.jsx'
import RecallList from '../components/RecallList.jsx'
import { getLesson } from '../data/courses.js'
import {
  courseBands,
  courseMeta,
  courseNeighbors,
  coursePlace,
  courseProgress,
  getCourseLesson,
  reviewWords,
} from '../data/courseBook.js'

const DONE_KEY = 'hallodeutsch_kurs_done'

function loadDone() {
  try {
    return JSON.parse(localStorage.getItem(DONE_KEY)) || {}
  } catch {
    return {}
  }
}

function LessonView({ lesson }) {
  const place = coursePlace(lesson.id)
  const { prev, next } = courseNeighbors(lesson.id)
  const [done, setDone] = useState(loadDone)
  const [showStartEn, setShowStartEn] = useState(false)
  const checked = Boolean(done[lesson.id])
  const review = reviewWords(lesson.id)

  function toggleDone() {
    setDone((prevDone) => {
      const nextDone = { ...prevDone, [lesson.id]: !prevDone[lesson.id] }
      localStorage.setItem(DONE_KEY, JSON.stringify(nextDone))
      return nextDone
    })
  }

  return (
    <>
      <section className="panel page-head">
        <p className="crumb">
          <Link to="/course">Course</Link>
          {' » '}
          {place ? (
            <>
              <Link to={`/course#${place.module.id}`}>{place.band.code} · {place.module.title}</Link>
              {' » '}
            </>
          ) : null}
          L{lesson.number}
        </p>
        <p className="kicker">
          {lesson.level} · Lektion {lesson.number}
          {place ? ` · Modul ${place.module.number}` : ''}
        </p>
        <h2>
          {lesson.title} <span className="muted">{lesson.de}</span>
        </h2>
        <p className="lead">{lesson.teaser}</p>
        <label className="done-toggle">
          <input type="checkbox" checked={checked} onChange={toggleDone} />
          Done on this PC
        </label>
      </section>

      {lesson.canDo?.length ? (
        <section className="panel">
          <h2>Ich kann …</h2>
          <ul className="cando-list">
            {lesson.canDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {lesson.grammar?.length ? (
            <p className="muted">Grammar in this lesson: {lesson.grammar.join(' · ')}</p>
          ) : null}
        </section>
      ) : null}

      {review.length ? (
        <section className="panel">
          <h2>Wiederholung</h2>
          <p className="muted">
            Say the English, then uncover it. These lines are from one, three, and seven lessons
            back. Coursebooks recycle a word on that kind of gap, because a second meeting is what
            makes it stick.
          </p>
          <RecallList
            resetKey={lesson.id}
            revealLabel="Show the review"
            rows={review.map((item) => [`${item.from} · ${item.de}`, item.en])}
          />
        </section>
      ) : null}

      {lesson.start ? (
        <section className="panel">
          <h2>1. Einstieg</h2>
          <p className="muted">Read the German first. The English is the key, not the starting point.</p>
          <pre className="dialogue">{lesson.start.de}</pre>
          <p>
            <button type="button" className="btn" onClick={() => setShowStartEn((value) => !value)}>
              {showStartEn ? 'Hide English' : 'Show English'}
            </button>
          </p>
          {showStartEn ? <p className="muted">{lesson.start.en}</p> : null}
        </section>
      ) : null}

      {lesson.words?.length ? (
        <section className="panel">
          <h2>2. Wortfeld</h2>
          <p className="muted">Cover the English. Recall, then check. That is the glossary drill in the workbook.</p>
          <RecallList resetKey={`${lesson.id}-words`} rows={lesson.words} />
        </section>
      ) : null}

      <section className="panel">
        <h2>3. Grammatik</h2>
        {lesson.points?.map((point) => (
          <p key={point}>{point}</p>
        ))}
        {lesson.tables?.map((table) => (
          <DataTable key={table.caption} caption={table.caption} headers={table.headers} rows={table.rows} />
        ))}
      </section>

      {lesson.phrases?.length ? (
        <section className="panel">
          <h2>4. Redemittel</h2>
          <RecallList resetKey={`${lesson.id}-phrases`} rows={lesson.phrases} revealLabel="Show the lines" />
        </section>
      ) : null}

      <section className="panel">
        <h2>5. Abschluss</h2>
        {lesson.speak ? (
          <p>
            <strong>Sprechen:</strong> {lesson.speak}
          </p>
        ) : null}
        {lesson.write ? (
          <p>
            <strong>Schreiben:</strong> {lesson.write}
          </p>
        ) : null}
        {lesson.studyIds?.length ? (
          <p>
            Extra drills:{' '}
            {lesson.studyIds.map((id, index) => {
              const extra = getCourseLesson(id) || getLesson(id)
              const href = id.startsWith('kb-') ? `/course/${id}` : `/study/${id}`
              return (
                <span key={id}>
                  {index > 0 ? ' · ' : ''}
                  <Link to={href}>{extra?.title || id}</Link>
                </span>
              )
            })}
          </p>
        ) : null}
        <p className="form-actions">
          {prev ? (
            <Link className="btn" to={`/course/${prev.id}`}>
              « L{prev.number} {prev.title}
            </Link>
          ) : null}
          {next ? (
            <Link className="btn btn-gold" to={`/course/${next.id}`}>
              L{next.number} {next.title} »
            </Link>
          ) : (
            <Link className="btn btn-gold" to="/exam">
              Sit a practice exam »
            </Link>
          )}
        </p>
      </section>
    </>
  )
}

function CourseIndex() {
  const [done, setDone] = useState(loadDone)
  const stats = courseProgress(done)

  useEffect(() => {
    setDone(loadDone())
  }, [])

  return (
    <>
      <section className="panel page-head">
        <p className="kicker">Structured course</p>
        <h2>{courseMeta.title}</h2>
        <p className="lead">
          {courseMeta.subtitle}. Modelled on <strong>Menschen</strong> ({courseMeta.inspiredBy}): A1–B1
          are eight modules of three lessons; B2 is four. Every lesson uses the same page: a short
          review, the situation, a covered word field, grammar tables, covered lines, then a
          speak/write task.
        </p>
        <p className="muted">{courseMeta.note}</p>
        <p>
          Progress on this PC: <strong>{stats.finished}</strong> / {stats.total} lessons ({stats.percent}
          %).
        </p>
        <div className="progress-track" aria-hidden="true">
          <span style={{ width: `${stats.percent}%` }} />
        </div>
      </section>

      {courseBands.map((band) => (
        <section className="panel" key={band.id}>
          <h2>
            <span className="level-pill">{band.code}</span> {band.title}{' '}
            <span className="muted">{band.de}</span>
          </h2>
          <p>{band.blurb}</p>
          <div className="module-grid">
            {band.modules.map((mod) => (
              <article className="module-card" key={mod.id} id={mod.id}>
                <p className="kicker">Modul {mod.number}</p>
                <h3>{mod.title}</h3>
                <p className="muted">{mod.de}</p>
                <ol className="module-lessons">
                  {mod.lessonIds.map((id) => {
                    const lesson = getCourseLesson(id)
                    if (!lesson) return null
                    return (
                      <li key={id}>
                        <Link to={`/course/${id}`}>
                          L{lesson.number} {lesson.title}
                        </Link>
                        {done[id] ? <span className="chip">done</span> : null}
                      </li>
                    )
                  })}
                </ol>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="panel">
        <h2>How this sits with the rest of the site</h2>
        <table className="grid-table">
          <thead>
            <tr>
              <th>Tab</th>
              <th>Use it for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/course">Course</Link>
              </td>
              <td>The book path. Start here and go in order.</td>
            </tr>
            <tr>
              <td>
                <Link to="/study">Study</Link>
              </td>
              <td>Grammar and skill extras if you want more on one topic.</td>
            </tr>
            <tr>
              <td>
                <Link to="/practice">Practice</Link>
              </td>
              <td>Timed drills: articles, cases, translation.</td>
            </tr>
            <tr>
              <td>
                <Link to="/exam">Exam</Link>
              </td>
              <td>Full practice papers with PDFs and answers.</td>
            </tr>
            <tr>
              <td>
                <Link to="/levels">Level maps</Link>
              </td>
              <td>CEFR can-dos, official exam timings, textbook TOCs.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}

export default function Course() {
  const { lessonId } = useParams()

  if (!lessonId) return <CourseIndex />

  const lesson = getCourseLesson(lessonId)
  if (!lesson) {
    return (
      <section className="panel">
        <h2>Lesson not found</h2>
        <p>That course page is not in the book.</p>
        <Link className="btn btn-gold" to="/course">
          Back to Course
        </Link>
      </section>
    )
  }

  return <LessonView key={lesson.id} lesson={lesson} />
}
