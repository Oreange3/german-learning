import { Link, useParams } from 'react-router-dom'
import { getLesson, lessonNeighbors, lessonPlace } from '../data/courses.js'
import { displayHeadword, getWordsByIds } from '../data/words.js'
import FillTable from '../components/FillTable.jsx'
import DataTable from '../components/DataTable.jsx'

export default function Lesson() {
  const { lessonId } = useParams()
  const lesson = getLesson(lessonId)

  if (!lesson) {
    return (
      <section className="panel">
        <h2>Lesson not found</h2>
        <p>That page is missing from the binder.</p>
        <Link className="btn btn-gold" to="/study">
          Back to Study
        </Link>
      </section>
    )
  }

  const vocab = getWordsByIds(lesson.wordIds || [])
  const { prev, next } = lessonNeighbors(lessonId)
  const place = lessonPlace(lessonId)

  return (
    <section className="panel">
      <p className="crumb">
        <Link to="/study">Study</Link>
        {place ? (
          <>
            {' » '}
            <Link to={`/study#${place.subgroup.id}`}>{place.group.title}</Link>
            {' » '}
            {place.subgroup.title}
          </>
        ) : null}
        {' » '}
        {lesson.title}
      </p>
      <h2>{lesson.title}</h2>
      <p className="teaser">{lesson.teaser}</p>
      <p>
        <span className="level-pill">{lesson.level}</span>
      </p>

      {lesson.points?.map((point) => (
        <p key={point}>{point}</p>
      ))}

      {lesson.examples?.length > 0 && (
        <DataTable
          caption="Examples"
          headers={['Deutsch', 'English']}
          rows={lesson.examples.map((item) => [<strong key={item.de}>{item.de}</strong>, item.en])}
        />
      )}

      {lesson.tables?.map((table) => (
        <DataTable key={table.caption} caption={table.caption} headers={table.headers} rows={table.rows} />
      ))}

      {lesson.drills?.map((drill) => (
        <FillTable
          key={drill.caption}
          caption={drill.caption}
          help={drill.help}
          headers={drill.headers}
          rows={drill.rows}
        />
      ))}

      {vocab.length > 0 && (
        <>
          <h3>Words in this bit</h3>
          <div className="table-wrap">
            <table className="grid-table">
              <thead>
                <tr>
                  <th>Deutsch</th>
                  <th>English</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {vocab.map((word) => (
                  <tr key={word.id}>
                    <td>
                      <Link to={`/dictionary?q=${encodeURIComponent(word.de)}`}>
                        <strong>{displayHeadword(word)}</strong>
                      </Link>
                    </td>
                    <td>{word.en.join(', ')}</td>
                    <td>{word.pos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <p className="form-actions">
        {prev && (
          <Link className="btn" to={`/study/${prev.id}`}>
            « {prev.title}
          </Link>
        )}
        {next && (
          <Link className="btn btn-gold" to={`/study/${next.id}`}>
            {next.title} »
          </Link>
        )}
      </p>
      <p className="form-actions">
        <Link className="btn btn-gold" to="/practice/cases">
          Drill cases
        </Link>
        <Link className="btn" to="/practice/articles">
          Drill articles
        </Link>
        <Link className="btn" to="/practice/translate">
          Drill translation
        </Link>
      </p>
    </section>
  )
}
