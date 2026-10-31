import { useRef, useState } from 'react'

const MAX_IMAGES = 6
const MAX_IMAGE_EDGE = 900
const IMAGE_QUALITY = 0.72
const SHARED_KEY = 'hallodeutsch_notes'
const LEGACY_PREFIX = 'hallodeutsch_notes_'

function migrateLegacyNotes() {
  const collected = []
  const seen = new Set()
  const keys = []
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i)
    if (key && (key === SHARED_KEY || key.startsWith(LEGACY_PREFIX))) keys.push(key)
  }
  for (const key of keys) {
    for (const note of loadNotes(key)) {
      if (!note?.id || seen.has(note.id)) continue
      seen.add(note.id)
      collected.push(note)
    }
  }
  collected.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
  return collected
}

function loadNotes(key) {
  try {
    const rows = JSON.parse(localStorage.getItem(key))
    return Array.isArray(rows) ? rows : []
  } catch {
    return []
  }
}

function saveNotes(key, notes) {
  try {
    localStorage.setItem(key, JSON.stringify(notes))
    return true
  } catch {
    return false
  }
}

function formatWhen(stamp) {
  try {
    return new Date(stamp).toLocaleString()
  } catch {
    return ''
  }
}

function previewText(body) {
  const text = body.replace(/\s+/g, ' ').trim()
  if (!text) return 'No text yet.'
  return text.length > 140 ? `${text.slice(0, 140)}…` : text
}

function readImage(file) {
  return new Promise((resolve, reject) => {
    if (!file?.type?.startsWith('image/')) {
      reject(new Error('Pick a picture file (jpg, png, gif, webp).'))
      return
    }

    const reader = new FileReader()
    reader.onerror = () => reject(new Error('Could not read that file.'))
    reader.onload = () => {
      const img = new Image()
      img.onerror = () => reject(new Error('That picture would not load.'))
      img.onload = () => {
        const scale = Math.min(1, MAX_IMAGE_EDGE / Math.max(img.width, img.height))
        const canvas = document.createElement('canvas')
        canvas.width = Math.max(1, Math.round(img.width * scale))
        canvas.height = Math.max(1, Math.round(img.height * scale))
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        resolve(canvas.toDataURL('image/jpeg', IMAGE_QUALITY))
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  })
}

function emptyDraft() {
  return { title: '', body: '', images: [] }
}

export default function Notes() {
  const fileRef = useRef(null)
  const [notes, setNotes] = useState(() => {
    const shared = loadNotes(SHARED_KEY)
    if (shared.length) return shared
    const migrated = migrateLegacyNotes()
    if (migrated.length) saveNotes(SHARED_KEY, migrated)
    return migrated
  })
  const [editingId, setEditingId] = useState(null)
  const [draft, setDraft] = useState(emptyDraft)
  const [error, setError] = useState('')
  const [busyImage, setBusyImage] = useState(false)

  function persist(next) {
    const ok = saveNotes(SHARED_KEY, next)
    if (!ok) {
      setError('Could not save. Pictures take a lot of room — try fewer or smaller ones.')
      return false
    }
    setNotes(next)
    setError('')
    return true
  }

  function startNew() {
    setEditingId('new')
    setDraft(emptyDraft())
    setError('')
  }

  function openNote(note) {
    setEditingId(note.id)
    setDraft({ title: note.title, body: note.body, images: note.images || [] })
    setError('')
  }

  function cancelEdit() {
    setEditingId(null)
    setDraft(emptyDraft())
    setError('')
  }

  async function onPickImage(event) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (draft.images.length >= MAX_IMAGES) {
      setError(`Up to ${MAX_IMAGES} pictures per note.`)
      return
    }

    setBusyImage(true)
    setError('')
    try {
      const dataUrl = await readImage(file)
      setDraft((current) => ({ ...current, images: [...current.images, dataUrl] }))
    } catch (err) {
      setError(err.message || 'Could not add that picture.')
    } finally {
      setBusyImage(false)
    }
  }

  function removeImage(index) {
    setDraft((current) => ({
      ...current,
      images: current.images.filter((_, i) => i !== index),
    }))
  }

  function saveNote() {
    const title = draft.title.trim() || 'Untitled'
    const body = draft.body
    const images = draft.images
    if (!draft.title.trim() && !body.trim() && images.length === 0) {
      setError('Write a title, some words, or add a picture first.')
      return
    }

    const now = Date.now()
    if (editingId === 'new') {
      const note = {
        id: crypto.randomUUID(),
        title,
        body,
        images,
        createdAt: now,
        updatedAt: now,
      }
      if (!persist([note, ...notes])) return
    } else {
      const next = notes.map((note) =>
        note.id === editingId ? { ...note, title, body, images, updatedAt: now } : note,
      )
      if (!persist(next)) return
    }

    setEditingId(null)
    setDraft(emptyDraft())
  }

  function deleteNote() {
    if (editingId === 'new' || !editingId) {
      cancelEdit()
      return
    }
    if (!window.confirm('Delete this note?')) return
    persist(notes.filter((note) => note.id !== editingId))
    cancelEdit()
  }

  const isEditing = editingId !== null

  return (
    <>
      <section className="panel">
        <div className="notes-head">
          <h2>Notes</h2>
          <button type="button" className="notes-plus" onClick={startNew} aria-label="New note">
            +
          </button>
        </div>
        <p>
          A shared scratch pad on this computer. Anyone using this PC can open Notes — there is no
          login wall and nothing is stored in the cloud. Notes stay in this browser only.
        </p>
        <p className="hint">
          Press + for a new note. Title and words are the main thing. Pictures are optional — they
          are shrunk a bit so they fit in the browser.
        </p>
      </section>

      {isEditing && (
        <section className="panel">
          <h3>{editingId === 'new' ? 'New note' : 'Edit note'}</h3>
          {error ? <p className="form-error">{error}</p> : null}
          <label className="note-field">
            Title
            <input
              type="text"
              value={draft.title}
              onChange={(event) => setDraft((current) => ({ ...current, title: event.target.value }))}
              placeholder="e.g. Accusative endings"
              autoFocus
            />
          </label>
          <label className="note-field">
            Words
            <textarea
              rows={8}
              value={draft.body}
              onChange={(event) => setDraft((current) => ({ ...current, body: event.target.value }))}
              placeholder="Write whatever you like…"
            />
          </label>

          <div className="note-pics">
            {draft.images.map((src, index) => (
              <figure key={`${index}-${src.slice(-12)}`} className="note-pic">
                <img src={src} alt="" />
                <button type="button" className="linkish" onClick={() => removeImage(index)}>
                  Remove
                </button>
              </figure>
            ))}
          </div>

          <div className="form-actions">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={onPickImage}
            />
            <button
              type="button"
              className="btn"
              disabled={busyImage || draft.images.length >= MAX_IMAGES}
              onClick={() => fileRef.current?.click()}
            >
              {busyImage ? 'Adding picture…' : 'Add picture'}
            </button>
            <button type="button" className="btn btn-gold" onClick={saveNote}>
              Save
            </button>
            <button type="button" className="btn" onClick={cancelEdit}>
              Cancel
            </button>
            {editingId !== 'new' ? (
              <button type="button" className="btn btn-red" onClick={deleteNote}>
                Delete
              </button>
            ) : null}
          </div>
        </section>
      )}

      <section className="panel">
        <h3>{notes.length ? 'Notes on this PC' : 'Nothing yet'}</h3>
        {notes.length === 0 ? (
          <p className="empty-state">No notes on this computer yet. Hit the gold + above and jot something down.</p>
        ) : (
          <ul className="note-list">
            {notes.map((note) => (
              <li key={note.id}>
                <button
                  type="button"
                  className={`note-card${editingId === note.id ? ' selected' : ''}`}
                  onClick={() => openNote(note)}
                >
                  <strong>{note.title}</strong>
                  <span className="note-preview">{previewText(note.body)}</span>
                  <span className="hint">
                    {formatWhen(note.updatedAt)}
                    {note.images?.length ? ` · ${note.images.length} picture${note.images.length === 1 ? '' : 's'}` : ''}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
