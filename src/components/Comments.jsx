import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

const STORAGE_KEY = 'goc_comments'
const MAX_COMMENTS = 40

function readComments() {
  try {
    const rows = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (!Array.isArray(rows)) return []
    return rows.filter((item) => item && typeof item.text === 'string' && typeof item.name === 'string')
  } catch {
    return []
  }
}

function newId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID()
  return `c-${Date.now()}`
}

export default function Comments() {
  const { user } = useAuth()
  const [comments, setComments] = useState(readComments)
  const [name, setName] = useState(() => user?.username || '')
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (user?.username) {
      setName((prev) => prev || user.username)
    }
  }, [user])

  function publish(next) {
    setComments(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      setError('This browser could not save the comment.')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const author = name.trim()
    const body = text.trim()
    if (!author || !body) {
      setError('Write a name and a comment.')
      return
    }
    setError('')
    const entry = { id: newId(), name: author.slice(0, 40), text: body.slice(0, 500), at: Date.now() }
    publish([entry, ...comments].slice(0, MAX_COMMENTS))
    setText('')
  }

  function remove(id) {
    publish(comments.filter((item) => item.id !== id))
  }

  return (
    <section className="panel" aria-labelledby="comments-title">
      <h2 id="comments-title">Comments</h2>
      <p>Notes from anyone on this computer. They stay in this browser.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={(event) => setName(event.target.value)} maxLength={40} />
        </label>
        <label>
          Comment
          <input value={text} onChange={(event) => setText(event.target.value)} maxLength={500} />
        </label>
        {error ? <p className="form-error">{error}</p> : null}
        <p className="form-actions">
          <button className="btn btn-gold" type="submit">
            Post comment
          </button>
        </p>
      </form>
      {comments.length === 0 ? <p className="hint">No comments yet.</p> : null}
      <ul className="lesson-list">
        {comments.map((item) => (
          <li key={item.id} className="lesson-card">
            <div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <p className="hint">
                {item.at ? new Date(item.at).toLocaleString() : ''}{' '}
                <button type="button" className="linkish" onClick={() => remove(item.id)}>
                  Remove
                </button>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
