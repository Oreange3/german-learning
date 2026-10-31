import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { collectAnswers, getPracticeExam, officialSampleLinks, practiceExams } from '../data/practiceExams.js'

function ItemBlock({ item }) {
  if (item.kind === 'passage' || item.kind === 'transcript') {
    return (
      <div className="exam-item">
        <h4>{item.title}</h4>
        <pre className="exam-passage">{item.text}</pre>
      </div>
    )
  }

  return (
    <div className="exam-item">
      <p>
        <span className="chip">{item.id}</span> {item.prompt}
      </p>
      {item.text ? <pre className="exam-passage">{item.text}</pre> : null}
      {item.options?.length ? (
        <ul className="exam-options">
          {item.options.map((opt) => (
            <li key={opt}>{opt}</li>
          ))}
        </ul>
      ) : null}
      {item.fields ? (
        <table className="grid-table">
          <tbody>
            {item.fields.map((field) => (
              <tr key={field.label}>
                <th>{field.label}</th>
                <td className="exam-blank"> </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      {item.kind === 'write' ? <p className="hint">Write on paper or in Notes. Model answer is at the bottom.</p> : null}
      {item.kind === 'speak' ? <p className="hint">Say this out loud. A model is in the answer key.</p> : null}
    </div>
  )
}

function ExamPaper({ exam }) {
  const answers = collectAnswers(exam)
  const [showKey, setShowKey] = useState(false)

  return (
    <>
      <section className="panel">
        <p className="crumb">
          <Link to="/exam">Exam</Link> » {exam.title}
        </p>
        <h2>{exam.title}</h2>
        <p>
          <span className="level-pill">{exam.level}</span> {exam.style}
        </p>
        <p>{exam.intro}</p>
        <p className="muted">Time guide: {exam.duration}</p>
        <p className="form-actions">
          <a className="btn btn-gold" href={exam.pdf} download>
            Download PDF
          </a>
          <a className="btn" href={exam.pdf} target="_blank" rel="noreferrer">
            Open PDF
          </a>
          <Link className="btn" to="/exam">
            All exams
          </Link>
        </p>
      </section>

      {exam.sections.map((section) => (
        <section className="panel" key={section.skill}>
          <h2>
            {section.skill}
            {section.time ? <span className="muted"> · {section.time}</span> : null}
          </h2>
          {section.instructions ? <p>{section.instructions}</p> : null}
          {section.items.map((item) => (
            <ItemBlock key={item.id} item={item} />
          ))}
        </section>
      ))}

      <section className="panel exam-answers" id="answers">
        <h2>Correct answers</h2>
        <p>
          The key stays closed until you finish, the way a coursebook prints solutions at the back. Writing and
          speaking lines are models. Other wording is fine if the content points are there.
        </p>
        <p>
          <button type="button" className="btn btn-gold" onClick={() => setShowKey((value) => !value)}>
            {showKey ? 'Hide the key' : 'I have finished — show the key'}
          </button>
        </p>
        {showKey ? (
        <div className="table-wrap">
          <table className="grid-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Part</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              {answers.map((row) => (
                <tr key={row.id}>
                  <td>
                    <strong>{row.id}</strong>
                  </td>
                  <td>{row.skill}</td>
                  <td>
                    {row.answer}
                    {row.note ? (
                      <>
                        <br />
                        <span className="hint">{row.note}</span>
                      </>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        ) : null}
      </section>
    </>
  )
}

export default function Exam() {
  const { examId } = useParams()

  if (examId) {
    const exam = getPracticeExam(examId)
    if (!exam) {
      return (
        <section className="panel">
          <h2>Exam not found</h2>
          <p>That practice paper is not in this binder.</p>
          <Link className="btn btn-gold" to="/exam">
            Back to Exam
          </Link>
        </section>
      )
    }
    return <ExamPaper key={exam.id} exam={exam} />
  }

  return (
    <>
      <section className="panel">
        <h2>Exam</h2>
        <p>
          Original classroom papers in the shape of Goethe / telc / ÖSD exams (A1–B1 on this
          site): Lesen, Hören (as a transcript), Schreiben, Sprechen, plus a grammar box.
          There is no Hallo B2 paper yet — use the official Goethe B2 Modellsatz below, plus
          the B2 map under Levels. Download a PDF, work the paper, then check the answer key
          at the bottom of each page.
        </p>
        <p className="note">
          These are not official test papers. Do not copy them into a real exam. For authentic Modellsätze, use the
          board links below.
        </p>
      </section>

      <section className="panel">
        <h2>Practice papers</h2>
        <ul className="program-grid">
          {practiceExams.map((exam) => (
            <li className="program-card" key={exam.id}>
              <h3>
                <Link to={`/exam/${exam.id}`}>{exam.title}</Link>
              </h3>
              <p>
                <span className="level-pill">{exam.level}</span> {exam.duration}
              </p>
              <p>{exam.intro}</p>
              <p className="form-actions">
                <Link className="btn btn-gold" to={`/exam/${exam.id}`}>
                  Open on this page
                </Link>
                <a className="btn" href={exam.pdf} download>
                  Download PDF
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h2>Official sample exams</h2>
        <p>Free papers from the boards. Open them in a new tab.</p>
        <ul className="source-list">
          {officialSampleLinks.map((item) => (
            <li key={item.url}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <p className="hint">
          Level maps with timings and pass rules live under <Link to="/levels">Levels</Link> → Exams.
        </p>
      </section>
    </>
  )
}
