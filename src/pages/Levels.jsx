import { Link } from 'react-router-dom'
import { countItems, levels } from '../data/curriculum/index.js'

export default function Levels() {
  return (
    <>
      <section className="panel">
        <h2>CEFR maps A1–B2</h2>
        <p>
          Four exam-ready study maps: can-do statements, Goethe / telc / ÖSD snapshots, grammar
          with examples, Themen with word clusters, skills, Redemittel, typical mistakes, and
          real textbook unit lists.           Walk the lessons in the Menschen-style <Link to="/course">Course</Link>. Extra
          grammar sits under <Link to="/study">Study</Link>. Timed papers are on{' '}
          <Link to="/exam">Exam</Link>.
        </p>
        <p>
          Sources are official exam PDFs and publisher TOCs — not invented tables of contents.
        </p>
      </section>

      <section className="panel">
        <h2>Pick a level</h2>
        <table className="grid-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>German name</th>
              <th>Map size</th>
              <th>Start</th>
            </tr>
          </thead>
          <tbody>
            {levels.map((level) => {
              const counts = countItems(level)
              return (
                <tr key={level.id}>
                  <td>
                    <span className="level-pill">{level.code}</span>
                  </td>
                  <td>
                    <Link to={`/levels/${level.id}`}>
                      <strong>{level.title}</strong>
                    </Link>
                    <br />
                    <span className="muted">{level.de}</span>
                    <br />
                    {level.blurb}
                  </td>
                  <td>
                    {counts.grammar} grammar · {counts.themes} Themen · {counts.vocab} vocab
                    items · {counts.exams} exam boards
                  </td>
                  <td>
                    <Link className="btn btn-gold" to={`/levels/${level.id}`}>
                      Open {level.code}
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>

      <section className="panel">
        <h2>How to use a map</h2>
        <ol className="program-steps">
          <li>Read Overview (GER can-dos) and Exams for the certificate you want.</li>
          <li>Work Grammar in teaching order; click through to Study bits where they exist.</li>
          <li>Learn Themen clusters out loud, then Redemittel for the skill you will sit.</li>
          <li>Tick Ready when… only after a timed Modellsatz / Übungstest.</li>
        </ol>
      </section>
    </>
  )
}
