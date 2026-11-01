import { useEffect, useRef, useState } from 'react'
import { lookupGerman, previewLookup } from '../lib/lookup.js'

function wordAt(event) {
  const range = document.caretRangeFromPoint?.(event.clientX, event.clientY)
  const node = range?.startContainer
  if (!node || node.nodeType !== Node.TEXT_NODE) return ''
  const text = node.textContent || ''
  let index = range.startOffset
  const letter = /[A-Za-zÄÖÜäöüß]/
  if (!letter.test(text[index] || '') && index > 0) index -= 1
  if (!letter.test(text[index] || '')) return ''
  let start = index
  let end = index + 1
  while (start > 0 && letter.test(text[start - 1])) start -= 1
  while (end < text.length && letter.test(text[end])) end += 1
  return text.slice(start, end)
}

function targetText(event) {
  const selected = window.getSelection()?.toString().replace(/\s+/g, ' ').trim() || ''
  if (selected.length >= 2 && selected.length <= 180) return selected
  const control = event.target.closest?.('button, a')
  if (control && !control.closest('[data-lookup]')) {
    const label = control.textContent.replace(/\s+/g, ' ').trim().split('·')[0].trim()
    if (/^[A-Za-zÄÖÜäöüß-]{2,32}$/.test(label)) return label
  }
  return wordAt(event)
}

export default function Lookup() {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [result, setResult] = useState(null)
  const [status, setStatus] = useState('idle')
  const [menu, setMenu] = useState(null)
  const abortRef = useRef(null)

  function run(raw) {
    const text = String(raw || '').trim()
    abortRef.current?.abort()
    if (!text) {
      setResult(null)
      setStatus('idle')
      return
    }
    const preview = previewLookup(text)
    setResult(preview)
    setStatus('loading')
    const controller = new AbortController()
    abortRef.current = controller
    const timer = window.setTimeout(() => controller.abort(), 7000)
    lookupGerman(text, controller.signal)
      .then((entry) => {
        if (controller.signal.aborted) return
        setResult(entry || preview)
        setStatus(entry || preview ? 'ready' : 'error')
      })
      .catch((error) => {
        if (error?.name === 'AbortError' && abortRef.current !== controller) return
        if (preview) {
          setResult(preview)
          setStatus('ready')
          return
        }
        setStatus('error')
      })
      .finally(() => window.clearTimeout(timer))
  }

  function openWith(text) {
    setOpen(true)
    setDraft(text)
    setMenu(null)
    run(text)
  }

  useEffect(() => {
    function onContext(event) {
      if (event.shiftKey) return
      if (event.target.closest?.('[data-lookup]')) return
      if (event.target.closest?.('input, textarea')) return
      const text = targetText(event)
      if (!text || text.length < 2) return
      event.preventDefault()
      const left = Math.min(event.clientX, window.innerWidth - 230)
      const top = Math.min(event.clientY, window.innerHeight - 88)
      setMenu({ text, left, top })
    }
    function closeMenu() {
      setMenu(null)
    }
    function onKey(event) {
      if (event.key === 'Escape') {
        setMenu(null)
        setOpen(false)
      }
    }
    document.addEventListener('contextmenu', onContext)
    document.addEventListener('click', closeMenu)
    window.addEventListener('scroll', closeMenu, true)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('contextmenu', onContext)
      document.removeEventListener('click', closeMenu)
      window.removeEventListener('scroll', closeMenu, true)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const sourceLine =
    result?.source === 'machine'
      ? 'Machine translation of the German. A phrase has no single gender.'
      : result?.source === 'class list'
        ? 'From this class list. The dictionary did not add more.'
        : result?.source === 'Wiktionary'
          ? 'Wiktionary. Gender is the dictionary gender, not a full sentence case.'
          : ''

  return (
    <>
      <button
        type="button"
        className={open ? 'nav-tab active' : 'nav-tab'}
        data-lookup="true"
        onClick={() => setOpen((value) => !value)}
      >
        Look up
      </button>
      {menu ? (
        <div className="lookup-menu" data-lookup="true" style={{ left: menu.left, top: menu.top }}>
          <button
            type="button"
            onClick={() => openWith(menu.text)}
          >
            Look up “{menu.text}”
          </button>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard?.writeText(menu.text).catch(() => {})
              setMenu(null)
            }}
          >
            Copy
          </button>
        </div>
      ) : null}
      {open ? (
        <aside className="lookup-panel" data-lookup="true">
          <div className="lookup-head">
            <h2>Look up</h2>
            <button type="button" className="btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <p className="hint">Right-click a word. Shift+right-click keeps the normal menu.</p>
          <form
            className="lookup-form"
            onSubmit={(event) => {
              event.preventDefault()
              run(draft)
            }}
          >
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="German word or phrase"
              aria-label="German word or phrase"
              lang="de"
            />
            <button type="button" className="btn btn-gold" onClick={() => run(draft)}>
              Look up
            </button>
          </form>
          {status === 'loading' ? <p className="hint">Looking up…</p> : null}
          {status === 'error' ? <p className="hint">No translation came back. Try another word.</p> : null}
          {result ? (
            <div className="lookup-result">
              <p className="lookup-word" lang="de">
                {result.article ? `${result.article} ` : ''}
                {result.query}
              </p>
              {result.genderLabel ? <p>{result.genderLabel}{result.pos ? ` · ${result.pos}` : ''}</p> : null}
              {!result.genderLabel && result.pos ? <p>{result.pos}</p> : null}
              {result.lemma ? (
                <p>
                  Base word: <span lang="de">{result.lemma}</span>
                </p>
              ) : null}
              {result.formNote ? <p lang="de">{result.formNote}</p> : null}
              {result.plural ? (
                <p>
                  Plural: <span lang="de">{result.plural}</span>
                </p>
              ) : null}
              {result.translation ? <p className="lookup-en">{result.translation}</p> : null}
              {sourceLine ? <p className="hint">{sourceLine}</p> : null}
            </div>
          ) : null}
        </aside>
      ) : null}
    </>
  )
}
