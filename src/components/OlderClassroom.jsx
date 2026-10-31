import { useState } from 'react'
import { Link } from 'react-router-dom'
import { courseBands, getCourseLesson } from '../data/courseBook.js'

const shelves = [
  { to: '/archive', title: 'Hallo Kurs book', text: 'The A1–B2 lessons already saved in this project.' },
  { to: '/study', title: 'Study lab', text: 'Extra grammar and skill pages.' },
  { to: '/practice', title: 'Older drills', text: 'Article, case, and translation practice.' },
  { to: '/exam', title: 'Exam papers', text: 'Practice papers and answer keys.' },
  { to: '/levels', title: 'A1–B2 maps', text: 'Can-dos, exam notes, and topic lists.' },
  { to: '/programs', title: 'Tracks', text: 'Short paths across those pages.' },
  { to: '/dictionary', title: 'Word lists', text: 'The classroom dictionary.' },
  { to: '/notes', title: 'Notes', text: 'Notes saved in this browser.' },
]

function LessonRead({ lesson, onBack }) {
  return (
    <article className="panel">
      <p className="kicker">
        {lesson.level} · L{lesson.number}
      </p>
      <h3>
        {lesson.title} {lesson.de ? <span className="muted">{lesson.de}</span> : null}
      </h3>
      {lesson.teaser ? <p>{lesson.teaser}</p> : null}
      {lesson.canDo?.length ? (
        <ul>
          {lesson.canDo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {lesson.points?.map((point) => (
        <p key={point}>{point}</p>
      ))}
      {lesson.tables?.map((table) => (
        <div className="table-wrap" key={table.caption}>
          <p className="hint">{table.caption}</p>
          <table className="grid-table">
            <thead>
              <tr>
                {table.headers.map((header, index) => (
                  <th key={`${header}-${index}`}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      {lesson.words?.length ? (
        <div className="table-wrap">
          <table className="grid-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              {lesson.words.map((pair, index) => (
                <tr key={`${pair[0]}-${index}`}>
                  <td lang="de">{pair[0]}</td>
                  <td>{pair[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {lesson.start?.de ? <pre className="dialogue">{lesson.start.de}</pre> : null}
      {lesson.speak ? (
        <p>
          <strong>Sprechen: </strong>
          {lesson.speak}
        </p>
      ) : null}
      {lesson.write ? (
        <p>
          <strong>Schreiben: </strong>
          {lesson.write}
        </p>
      ) : null}
      <p>
        <button type="button" className="btn" onClick={onBack}>
          Back to the list
        </button>
      </p>
    </article>
  )
}

export default function OlderClassroom() {
  const [lessonId, setLessonId] = useState(null)
  const lesson = lessonId ? getCourseLesson(lessonId) : null

  return (
    <section className="panel">
      <h2>Older classroom</h2>
      <p>These pages were already in the project. They open only after you choose them here.</p>
      {lesson ? <LessonRead lesson={lesson} onBack={() => setLessonId(null)} /> : null}
      <ul className="lesson-list">
        {shelves.map((item) => (
          <li key={item.to} className="lesson-card">
            <div>
              <h3>
                <Link to={item.to}>{item.title}</Link>
              </h3>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
      {courseBands.map((band) => (
        <div key={band.id}>
          <h3>
            <span className="level-pill">{band.code}</span> {band.title}
          </h3>
          <p>{band.blurb}</p>
          {band.modules.map((mod) => (
            <div key={mod.id}>
              <p>
                <strong>
                  Modul {mod.number}: {mod.title}
                </strong>
              </p>
              <ul>
                {mod.lessonIds.map((id) => {
                  const item = getCourseLesson(id)
                  if (!item) return null
                  return (
                    <li key={id}>
                      <button type="button" className="linkish" onClick={() => setLessonId(id)}>
                        L{item.number} {item.title}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}
