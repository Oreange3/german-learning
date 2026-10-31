import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

const STORAGE_KEY = 'goc_comments'
const MAX_COMMENTS = 40
const PHOTO_SIZE = 280

function cropCenterSquare(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const side = Math.min(img.naturalWidth, img.naturalHeight)
      if (!side) {
        URL.revokeObjectURL(url)
        reject(new Error('empty'))
        return
      }
      const sx = Math.floor((img.naturalWidth - side) / 2)
      const sy = Math.floor((img.naturalHeight - side) / 2)
      const canvas = document.createElement('canvas')
      canvas.width = PHOTO_SIZE
      canvas.height = PHOTO_SIZE
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, sx, sy, side, side, 0, 0, PHOTO_SIZE, PHOTO_SIZE)
      URL.revokeObjectURL(url)
      resolve(canvas.toDataURL('image/jpeg', 0.82))
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('image'))
    }
    img.src = url
  })
}

function readComments() {
  try {
    const rows = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (!Array.isArray(rows)) return []
    return rows.filter(
      (item) =>
        item &&
        typeof item.name === 'string' &&
        (typeof item.text === 'string' || typeof item.image === 'string'),
    )
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
  const [photo, setPhoto] = useState('')
  const [error, setError] = useState('')
  const fileRef = useRef(null)

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

  async function onPicture(event) {
    const file = event.target.files?.[0]
    if (!file) {
      setPhoto('')
      return
    }
    if (!file.type.startsWith('image/')) {
      setError('Choose an image file.')
      event.target.value = ''
      return
    }
    try {
      setPhoto(await cropCenterSquare(file))
      setError('')
    } catch {
      setPhoto('')
      setError('That picture could not be cropped.')
      event.target.value = ''
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const author = name.trim()
    const body = text.trim()
    if (!author || (!body && !photo)) {
      setError('Write a name, and a comment or a picture.')
      return
    }
    setError('')
    const entry = {
      id: newId(),
      name: author.slice(0, 40),
      text: body.slice(0, 500),
      at: Date.now(),
    }
    if (photo) entry.image = photo
    publish([entry, ...comments].slice(0, MAX_COMMENTS))
    setText('')
    setPhoto('')
    if (fileRef.current) fileRef.current.value = ''
  }

  function remove(id) {
    publish(comments.filter((item) => item.id !== id))
  }

  return (
    <section className="panel" aria-labelledby="comments-title">
      <h2 id="comments-title">Comments</h2>
      <p>Notes from anyone on this computer. They stay in this browser. A picture is cropped to the square in the middle.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={(event) => setName(event.target.value)} maxLength={40} />
        </label>
        <label>
          Comment
          <input value={text} onChange={(event) => setText(event.target.value)} maxLength={500} />
        </label>
        <label>
          Picture
          <input ref={fileRef} type="file" accept="image/*" onChange={onPicture} />
        </label>
        {photo ? <img className="comment-photo" src={photo} alt="" /> : null}
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
              {item.image ? <img className="comment-photo" src={item.image} alt="" /> : null}
              {item.text ? <p>{item.text}</p> : null}
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
