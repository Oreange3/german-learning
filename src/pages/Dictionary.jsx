import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {
  displayHeadword,
  lookupOnline,
  searchWords,
  top100,
  top250,
  top300,
  words,
} from '../data/words.js'

const lists = {
  100: { title: 'First 100 words', rows: top100 },
  250: { title: 'First 250 words', rows: top250 },
  300: { title: 'Classroom 300', rows: top300 },
}

function WordTable({ rows }) {
  return (
    <table className="grid-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Deutsch</th>
          <th>English</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((word) => (
          <tr key={word.id}>
            <td>{word.rank}</td>
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
  )
}

export default function Dictionary() {
  const { list } = useParams()
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const initialQuery = params.get('q') || ''
  const [query, setQuery] = useState(initialQuery)
  const [online, setOnline] = useState(null)
  const [onlineError, setOnlineError] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    setQuery(params.get('q') || '')
  }, [params])

  const localHits = useMemo(() => searchWords(query), [query])
  const selected = lists[list]
  const detail = localHits[0] && query.trim() ? localHits[0] : null

  function onSearch(event) {
    event.preventDefault()
    const next = query.trim()
    navigate(next ? `/dictionary?q=${encodeURIComponent(next)}` : '/dictionary')
    setOnline(null)
    setOnlineError('')
  }

  async function onOnline() {
    setBusy(true)
    setOnlineError('')
    setOnline(null)
    try {
      const result = await lookupOnline(query.trim() || detail?.de)
      setOnline(result)
    } catch (error) {
      setOnlineError(error.message || 'Lookup failed.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <section className="panel">
        <h2>Dictionary</h2>
        <p>
          Classroom list of {words.length} learner words, plus an online lookup if the local
          page is empty.
        </p>
        <p className="subtabs">
          <Link className={!list ? 'btn btn-gold' : 'btn'} to="/dictionary">
            Lookup
          </Link>
          <Link className={list === '100' ? 'btn btn-gold' : 'btn'} to="/dictionary/100">
            First 100
          </Link>
          <Link className={list === '250' ? 'btn btn-gold' : 'btn'} to="/dictionary/250">
            First 250
          </Link>
          <Link className={list === '300' ? 'btn btn-gold' : 'btn'} to="/dictionary/300">
            Classroom 300
          </Link>
        </p>
      </section>

      {selected ? (
        <section className="panel">
          <h2>{selected.title}</h2>
          <p>
            A study list, not a newspaper corpus. Nouns are shown with der / die / das. Click a
            word to look it up.
          </p>
          <div className="table-wrap">
            <WordTable rows={selected.rows} />
          </div>
        </section>
      ) : (
        <section className="panel">
          <h2>Look up a word</h2>
          <form className="auth-form dict-form" onSubmit={onSearch}>
            <label>
              German or English
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Haus, house, der…"
              />
            </label>
            <p className="form-actions">
              <button className="btn btn-gold" type="submit">
                Search local
              </button>
              <button className="btn" type="button" onClick={onOnline} disabled={busy}>
                {busy ? 'Looking up…' : 'Search online'}
              </button>
            </p>
          </form>

          {detail && (
            <div className="dict-card">
              <h3>{displayHeadword(detail)}</h3>
              <p>
                {detail.en.join(' · ')} <span className="hint">({detail.pos})</span>
              </p>
              {detail.plural && (
                <p>
                  Plural: <strong>{detail.article === 'die' && detail.plural ? 'die ' : ''}{detail.plural}</strong>
                </p>
              )}
              {detail.exampleDe && (
                <p>
                  {detail.exampleDe}
                  <br />
                  <span className="hint">{detail.exampleEn}</span>
                </p>
              )}
              {detail.note && <p className="note">{detail.note}</p>}
            </div>
          )}

          {!query.trim() ? (
            <p className="empty-state">Type a German or English word, or open the First 100 / First 250 lists.</p>
          ) : (
            <>
              <h3>Local hits ({localHits.length})</h3>
              {localHits.length === 0 ? (
                <p className="empty-state">Nothing in the classroom list. Try the online button.</p>
              ) : (
                <WordTable rows={localHits} />
              )}
            </>
          )}

          {onlineError && <p className="form-error">{onlineError}</p>}
          {online && (
            <div className="dict-card">
              <h3>Online · {online.source}</h3>
              <ul className="news">
                {online.meanings.slice(0, 8).map((item) => (
                  <li key={item.definition}>
                    <em>{item.pos}</em> {item.definition}
                    {item.example ? ` — ${item.example}` : ''}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}
    </>
  )
}
