import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getLesson } from '../data/courses.js'
import {
  getLevel,
  getSources,
  grammarGroups,
  levelNeighbors,
  levelSegments,
  levelSourceIds,
} from '../data/curriculum/index.js'

function SourceList({ ids }) {
  const rows = getSources(ids)
  if (!rows.length) return null
  return (
    <ul className="source-list">
      {rows.map((item) => (
        <li key={item.id}>
          <a href={item.url} target="_blank" rel="noreferrer">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

function OverviewSegment({ level }) {
  return (
    <>
      <p>
        <strong>{level.overview.gerName}</strong>
      </p>
      <p>{level.overview.who}</p>
      <p>{level.overview.hours}</p>

      <h3>GER can-do (Council of Europe raster)</h3>
      <div className="table-wrap">
      <table className="grid-table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Deutsch</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {level.overview.canDo.map((row) => (
            <tr key={row.skill}>
              <td>
                <strong>{row.skill}</strong>
              </td>
              <td>{row.de}</td>
              <td>{row.en}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <h3>What the exams actually want</h3>
      <ul>
        {level.overview.goetheCan.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Pronunciation at this level</h3>
      <ul>
        {level.pronunciation.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Cited for this overview</h3>
      <SourceList ids={level.overview.sourceIds} />
    </>
  )
}

function ExamsSegment({ level }) {
  return (
    <>
      <p>
        Figures below come from current official pages and PDFs (Durchführungsbestimmungen,
        Modellsätze, telc.net, osd.at). Boards are not interchangeable — timings and pass rules
        differ.
      </p>
      {level.exams.map((exam) => (
        <article className="exam-board" key={exam.id}>
          <h3>
            <span className="level-pill">{exam.board}</span> {exam.name}
          </h3>
          <p>{exam.audience}</p>
          <p>
            <strong>Format:</strong> {exam.format}
          </p>
          {exam.hours && (
            <p>
              <strong>Hours:</strong> {exam.hours}
            </p>
          )}
          <h4>Timing</h4>
          <div className="table-wrap">
          <table className="grid-table">
            <thead>
              <tr>
                <th>Part</th>
                <th>Time</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {exam.timing.map((row) => (
                <tr key={`${exam.id}-${row[0]}-${row[1]}`}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <p>
            <strong>Pass:</strong> {exam.pass}
          </p>
          {exam.tasks.map((task) => (
            <div key={`${exam.id}-${task.skill}`}>
              <h4>{task.skill}</h4>
              <ul>
                {task.parts.map((part) => (
                  <li key={part}>{part}</li>
                ))}
              </ul>
            </div>
          ))}
          <p>{exam.skillsTested}</p>
          <SourceList ids={exam.sourceIds} />
        </article>
      ))}
    </>
  )
}

function GrammarSegment({ level }) {
  const groups = useMemo(() => grammarGroups(level.grammar), [level])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    setFilter('all')
  }, [level.id])

  const shown = filter === 'all' ? groups : groups.filter((group) => group.name === filter)

  return (
    <>
      <p>
        Each point has a German name, English gloss, when you use it, a short rule, examples, and
        exam relevance. Related Study bits open the older classroom lessons.
      </p>
      <p className="seg-filters">
        <button
          type="button"
          className={filter === 'all' ? 'btn btn-gold' : 'btn'}
          onClick={() => setFilter('all')}
        >
          All ({level.grammar.length})
        </button>
        {groups.map((group) => (
          <button
            type="button"
            key={group.name}
            className={filter === group.name ? 'btn btn-gold' : 'btn'}
            onClick={() => setFilter(group.name)}
          >
            {group.name} ({group.items.length})
          </button>
        ))}
      </p>
      {shown.map((group) => (
        <div key={group.name}>
          <h3>{group.name}</h3>
          {group.items.map((item) => (
            <article className="grammar-card" key={item.id} id={item.id}>
              <h4>
                {item.de} <span className="muted">— {item.en}</span>
              </h4>
              <p>
                <strong>When:</strong> {item.when}
              </p>
              <p>
                <strong>Rule:</strong> {item.rule}
              </p>
              <div className="table-wrap">
                <table className="grid-table">
                  <thead>
                    <tr>
                      <th>Deutsch</th>
                      <th>English</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.examples.map((row) => (
                      <tr key={row.de}>
                        <td>
                          <strong>{row.de}</strong>
                        </td>
                        <td>{row.en}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="exam-note">
                <strong>Exam:</strong> {item.exam}
              </p>
              {item.related?.length > 0 && (
                <p>
                  Study bits:{' '}
                  {item.related.map((id, index) => {
                    const lesson = getLesson(id)
                    return (
                      <span key={id}>
                        {index > 0 ? ' · ' : ''}
                        <Link to={`/study/${id}`}>{lesson?.title || id}</Link>
                      </span>
                    )
                  })}
                </p>
              )}
            </article>
          ))}
        </div>
      ))}
    </>
  )
}

function ThemesSegment({ level }) {
  return (
    <>
      <p>
        Alltagsthemen merged from Menschen, Schritte, Netzwerk, studio [21], Aspekte, and Sicher
        unit lists. Learn the clusters, not just the titles.
      </p>
      {level.themes.map((theme) => (
        <article className="theme-block" key={theme.id} id={theme.id}>
          <h3>
            {theme.title} <span className="muted">— {theme.de}</span>
          </h3>
          <p>{theme.why}</p>
          {theme.functions?.length > 0 && (
            <p>
              Functions:{' '}
              {theme.functions.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </p>
          )}
          {theme.books?.length > 0 && (
            <p className="muted">Books: {theme.books.join(' · ')}</p>
          )}
          {theme.clusters.map((cluster) => (
            <div className="vocab-cluster" key={`${theme.id}-${cluster.title}`}>
              <h4>{cluster.title}</h4>
              <div className="table-wrap">
                <table className="grid-table">
                  <thead>
                    <tr>
                      <th>Deutsch</th>
                      <th>English</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cluster.words.map((word) => (
                      <tr key={`${cluster.title}-${word.de}`}>
                        <td>
                          <strong>{word.de}</strong>
                          {word.extra ? ` · ${word.extra}` : ''}
                        </td>
                        <td>{word.en}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </article>
      ))}
    </>
  )
}

function SkillsSegment({ level }) {
  const labels = [
    ['lesen', 'Lesen'],
    ['hoeren', 'Hören'],
    ['schreiben', 'Schreiben'],
    ['sprechen', 'Sprechen'],
  ]
  return (
    <>
      {labels.map(([key, title]) => {
        const skill = level.skills[key]
        if (!skill) return null
        return (
          <article className="skill-block" key={key}>
            <h3>{title}</h3>
            <p>{skill.what}</p>
            <ul>
              {skill.tasks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {skill.tips && (
              <p>
                <strong>Tips:</strong> {skill.tips}
              </p>
            )}
            {skill.textTypes?.length > 0 && (
              <>
                <h4>Text types</h4>
                <ul>
                  {skill.textTypes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </article>
        )
      })}
    </>
  )
}

function ChunksSegment({ level }) {
  return (
    <div className="table-wrap">
    <table className="grid-table">
      <thead>
        <tr>
          <th>Deutsch</th>
          <th>English</th>
          <th>Use</th>
        </tr>
      </thead>
      <tbody>
        {level.chunks.map((item) => (
          <tr key={item.de}>
            <td>
              <strong>{item.de}</strong>
            </td>
            <td>{item.en}</td>
            <td>{item.use}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

function MistakesSegment({ level }) {
  return (
    <div className="table-wrap">
    <table className="grid-table">
      <thead>
        <tr>
          <th>Common slip</th>
          <th>Better</th>
          <th>Why</th>
        </tr>
      </thead>
      <tbody>
        {level.mistakes.map((item) => (
          <tr key={item.wrong}>
            <td className="mistake-wrong">{item.wrong}</td>
            <td>{item.right}</td>
            <td>{item.why}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

function BooksSegment({ level }) {
  return (
    <>
      <p>
        Unit titles are taken from publisher TOCs, Stoffverteilungspläne, or BlinkLearning
        contents. Where a title could not be verified, the note says so.
      </p>
      {level.books.map((row) => (
        <article className="book-block" key={row.book}>
          <h3>{row.book}</h3>
          <p>{row.note}</p>
          <ol className="book-units">
            {row.units.map((unit) => (
              <li key={unit}>{unit}</li>
            ))}
          </ol>
        </article>
      ))}
    </>
  )
}

function ReadySegment({ level }) {
  const storageKey = `hallodeutsch_ready_${level.id}`
  const [checked, setChecked] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    try {
      setChecked(JSON.parse(localStorage.getItem(storageKey)) || {})
    } catch {
      setChecked({})
    }
  }, [storageKey])

  function toggle(index) {
    setChecked((prev) => {
      const next = { ...prev, [index]: !prev[index] }
      localStorage.setItem(storageKey, JSON.stringify(next))
      return next
    })
  }

  const done = level.ready.filter((_, index) => checked[index]).length

  return (
    <>
      <p>
        Tick these only when they are true. {done} / {level.ready.length} on this computer
        (saved in the browser).
      </p>
      <ul className="ready-check">
        {level.ready.map((item, index) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                checked={Boolean(checked[index])}
                onChange={() => toggle(index)}
              />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  )
}

const segmentViews = {
  overview: OverviewSegment,
  exams: ExamsSegment,
  grammar: GrammarSegment,
  themes: ThemesSegment,
  skills: SkillsSegment,
  chunks: ChunksSegment,
  mistakes: MistakesSegment,
  books: BooksSegment,
  ready: ReadySegment,
}

export default function LevelPage() {
  const { levelId, segment } = useParams()
  const level = getLevel(levelId)
  const current = segment || 'overview'
  const known = levelSegments.some((item) => item.id === current)

  if (!level) {
    return (
      <section className="panel">
        <h2>Level not found</h2>
        <p>That CEFR map is not on this site.</p>
        <Link className="btn btn-gold" to="/levels">
          Back to levels
        </Link>
      </section>
    )
  }

  if (segment && !known) {
    return <Navigate to={`/levels/${level.id}`} replace />
  }

  const View = segmentViews[current]
  const { prev, next } = levelNeighbors(level.id)
  const allSources = levelSourceIds(level)

  return (
    <>
      <section className="panel">
        <p className="crumb">
          <Link to="/levels">Levels</Link> » {level.code}
          {current !== 'overview' ? ` » ${levelSegments.find((item) => item.id === current)?.label}` : ''}
        </p>
        <h2>{level.title}</h2>
        <p>
          <span className="level-pill">{level.code}</span> {level.de}
        </p>
        <p>{level.blurb}</p>
        <p className="muted">{level.hours}</p>
        <nav className="subtabs seg-nav" aria-label="Level segments">
          {levelSegments.map((item) => {
            const to = item.id === 'overview' ? `/levels/${level.id}` : `/levels/${level.id}/${item.id}`
            const active = current === item.id
            return (
              <Link key={item.id} className={active ? 'btn btn-gold' : 'btn'} to={to}>
                {item.label}
              </Link>
            )
          })}
        </nav>
        <p className="level-hop">
          {prev ? <Link to={`/levels/${prev.id}`}>« {prev.code}</Link> : <span>« —</span>}
          {' · '}
          <Link to="/levels">all maps</Link>
          {' · '}
          {next ? <Link to={`/levels/${next.id}`}>{next.code} »</Link> : <span>— »</span>}
        </p>
      </section>

      <section className="panel">
        <h2>{levelSegments.find((item) => item.id === current)?.label}</h2>
        <View level={level} />
      </section>

      {current === 'overview' && (
        <section className="panel">
          <h2>References on this map</h2>
          <SourceList ids={allSources} />
        </section>
      )}
    </>
  )
}
