import { useState } from 'react'
import ArticleChart from '../components/ArticleChart.jsx'
import { courseGroups, studyOrder } from '../data/orangeCourse.js'

function tidy(value) {
  return value.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.!?]+$/g, '')
}

function Check({ item }) {
  const [value, setValue] = useState('')
  const [state, setState] = useState('')

  function tryAnswer(event) {
    event.preventDefault()
    setState(tidy(value) === tidy(item.a) ? 'right' : 'wrong')
  }

  return (
    <form className="course-check" onSubmit={tryAnswer}>
      <label>
        {item.q}
        <input value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
      <button type="submit" className="btn">
        Check
      </button>
      {state === 'right' ? <p className="check-right">Right.</p> : null}
      {state === 'wrong' ? (
        <p className="check-wrong">
          Not quite. <strong>{item.a}</strong>
        </p>
      ) : null}
    </form>
  )
}

function LessonTable({ table }) {
  return (
    <div className="table-wrap">
      {table.caption ? <p className="hint">{table.caption}</p> : null}
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
  )
}

function Fold({ title, meta, children }) {
  return (
    <details className="course-fold">
      <summary>
        <span className="course-fold-title">{title}</span>
        {meta ? <span className="course-fold-meta">{meta}</span> : null}
      </summary>
      <div className="course-fold-body">{children}</div>
    </details>
  )
}

function LessonBlock({ lesson }) {
  if (lesson.kind === 'words') {
    return (
      <>
        <p>{lesson.text}</p>
        <div className="table-wrap">
          <table className="grid-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>English</th>
                {lesson.words.some((pair) => pair[2]) ? <th>Try</th> : null}
              </tr>
            </thead>
            <tbody>
              {lesson.words.map((pair) => (
                <tr key={pair[0]}>
                  <td lang="de">{pair[0]}</td>
                  <td>{pair[1]}</td>
                  {pair[2] ? <td lang="de">{pair[2]}</td> : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {lesson.line ? (
          <p>
            <span lang="de">{lesson.line.de}</span>
            {' — '}
            {lesson.line.en}
          </p>
        ) : null}
      </>
    )
  }

  if (lesson.kind === 'stub') {
    return <p>{lesson.text}</p>
  }

  return (
    <>
      <p>{lesson.idea}</p>
      {lesson.chart ? <ArticleChart /> : null}
      {lesson.notes?.map((note) => (
        <p key={note}>{note}</p>
      ))}
      {lesson.source ? <p className="hint">{lesson.source}</p> : null}
      <LessonTable table={lesson.table} />
      {lesson.moreTables?.map((table) => (
        <LessonTable key={table.caption || table.headers.join('|')} table={table} />
      ))}
      {lesson.examples.map((example) => (
        <p key={example.de}>
          <span lang="de">{example.de}</span>
          {' — '}
          {example.en}
        </p>
      ))}
      <p>
        <strong>Check yourself</strong>
      </p>
      {lesson.checks.map((item) => (
        <Check key={item.q} item={item} />
      ))}
    </>
  )
}

function OlderGate() {
  const [Reader, setReader] = useState(null)
  const [failed, setFailed] = useState(false)

  function openOlder() {
    setFailed(false)
    import('../components/OlderClassroom.jsx')
      .then((mod) => setReader(() => mod.default))
      .catch(() => setFailed(true))
  }

  if (!Reader) {
    return (
      <section className="panel">
        <h2>Older classroom</h2>
        <p>The earlier A1–B2 book, study lab, drills, maps, and papers are still in this project.</p>
        {failed ? <p className="form-error">The older lessons did not open.</p> : null}
        <button type="button" className="btn btn-gold" onClick={openOlder}>
          Open older materials
        </button>
      </section>
    )
  }

  return <Reader />
}

export default function OrangeCourse() {
  return (
    <>
      <section className="panel page-head">
        <h2>Course</h2>
        <p>
          Six groups: Grammar, Vocabulary, Spelling, Working with texts, Writing, and Pronunciation.
          The wording on this page was written for this class.
        </p>
      </section>

      <Fold title="Suggested study order">
        <ol>
          {studyOrder.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ol>
      </Fold>

      {courseGroups.map((group) => (
        <Fold key={group.id} title={group.title} meta={`${group.lessons.length} parts`}>
          <p>{group.blurb}</p>
          {group.lessons.map((lesson) => (
            <Fold key={lesson.id} title={lesson.title}>
              <LessonBlock lesson={lesson} />
            </Fold>
          ))}
        </Fold>
      ))}

      <OlderGate />
    </>
  )
}
