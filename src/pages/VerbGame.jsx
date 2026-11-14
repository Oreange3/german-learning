import { useEffect, useMemo, useRef, useState } from 'react'
import { gallery } from '../data/gallery.js'
import { PRESENT_ENDINGS, verbCards } from '../data/verbForms.js'
import { dailyPick, localDateKey, readDailyProgress, writeDailyProgress } from '../lib/daily.js'
import { playResult, primeAudio } from '../lib/sound.js'
import { answersMatch } from '../lib/text.js'

const PROGRESS_KEY = 'verbs'

function pictureUrl(src) {
  return `${import.meta.env.BASE_URL}${src}`
}

function pickVerb(avoidId) {
  let verb = verbCards[Math.floor(Math.random() * verbCards.length)]
  let guard = 0
  while (verb && verb.id === avoidId && verbCards.length > 1 && guard < 12) {
    verb = verbCards[Math.floor(Math.random() * verbCards.length)]
    guard += 1
  }
  return verb
}

function pickImage(avoidSrc) {
  let image = gallery[Math.floor(Math.random() * gallery.length)]
  let guard = 0
  while (image && image.src === avoidSrc && gallery.length > 1 && guard < 8) {
    image = gallery[Math.floor(Math.random() * gallery.length)]
    guard += 1
  }
  return image
}

function fillBlank(scene) {
  return scene.de.replace('___', scene.answer)
}

function useDialog(open) {
  const ref = useRef(null)
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return undefined
    if (open) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
    return undefined
  }, [open])
  return ref
}

function PopDialog({ open, onClose, title, labelledBy, children, extraActions }) {
  const ref = useDialog(open)
  return (
    <dialog
      ref={ref}
      className="pop-dialog"
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose()
      }}
    >
      <h3 id={labelledBy}>{title}</h3>
      {open ? children : null}
      <p className="pop-actions">
        {extraActions}
        <button type="button" className="btn btn-gold" onClick={onClose}>
          Close
        </button>
      </p>
    </dialog>
  )
}

function HintChart({ verb, scene }) {
  return (
    <>
      <p>The highlighted row is this gap. The ending is what that row needs.</p>
      <table className="needs-table">
        <thead>
          <tr>
            <th>Gap</th>
            <th>Needs</th>
          </tr>
        </thead>
        <tbody>
          {verb.scenes.map((row) => (
            <tr key={row.id} className={scene?.id === row.id ? 'is-current' : undefined}>
              <td>{row.slot}</td>
              <td>{row.needs}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {scene ? (
        <p className="hint-callout">
          <strong>{scene.slot}</strong> needs {scene.needs}.
          {scene.extra ? ` ${scene.extra}` : ''}
        </p>
      ) : null}
      {scene?.build ? (
        <p>
          Put together: <strong lang="de">{scene.build}</strong>
        </p>
      ) : null}
      <p className="pop-kicker">Present endings, when the verb is regular</p>
      <table className="needs-table">
        <thead>
          <tr>
            <th>Person</th>
            <th>Needs</th>
          </tr>
        </thead>
        <tbody>
          {PRESENT_ENDINGS.map((row) => (
            <tr key={row.id} className={scene?.id === row.id || (scene?.id === 'sie' && row.id === 'wir') ? 'is-current' : undefined}>
              <td>{row.person}</td>
              <td lang="de">{row.ending}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="pop-note">A stem that ends in -t or -d needs -et for er, and -est for du.</p>
      {verb.presentNote ? <p className="pop-note">{verb.presentNote}</p> : null}
    </>
  )
}

function GermanGap({ scene, revealed, right, guess, onGuess, inputRef }) {
  const [before, after] = scene.de.split('___')
  return (
    <p className="verb-de" lang="de">
      {before}
      {revealed ? (
        <span className={`verb-filled${right ? ' is-right' : ''}`}>{scene.answer}</span>
      ) : (
        <input
          ref={inputRef}
          className="verb-input"
          value={guess}
          onChange={(event) => onGuess(event.target.value)}
          aria-label="Verb form"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          lang="de"
        />
      )}
      {after}
    </p>
  )
}

function VerbCard({ verb, scene, index, total, showEn, onAnswered, onNext, nextLabel }) {
  const [guess, setGuess] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [skipped, setSkipped] = useState(false)
  const [right, setRight] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function finish(result) {
    setRevealed(true)
    setSkipped(result.skipped)
    setRight(result.correct)
    onAnswered(result)
  }

  function check(event) {
    event.preventDefault()
    if (revealed) return
    const typed = guess.trim()
    if (!typed) return
    const correct = answersMatch(typed, [scene.answer])
    primeAudio()
    playResult(correct)
    finish({ correct, typed, skipped: false })
  }

  function markUnsure() {
    if (revealed) return
    finish({ correct: false, typed: guess.trim(), skipped: true })
  }

  const tone = !revealed ? '' : skipped ? ' is-skipped' : right ? ' is-right' : ' is-wrong'

  return (
    <article className={`flash${tone}`}>
      <p className="flash-kicker">Same verb · {index + 1} of {total}</p>
      <p className="flash-word" lang="de">
        {verb.de}
      </p>
      {showEn ? <p className="flash-translation verb-gloss">{verb.en}</p> : null}
      <p className="flash-kicker">
        {scene.label}
      </p>
      <p className="verb-en">{scene.en}</p>
      <form onSubmit={check}>
        <GermanGap
          scene={scene}
          revealed={revealed}
          right={right && !skipped}
          guess={guess}
          onGuess={setGuess}
          inputRef={inputRef}
        />
        {revealed ? (
          <p className="flash-result" role="status">
            {skipped ? (
              <>
                Unsure. The form is <strong lang="de">{scene.answer}</strong>.
              </>
            ) : right ? (
              <>
                Right. The form is <strong lang="de">{scene.answer}</strong>.
              </>
            ) : (
              <>
                Not quite. You wrote <strong lang="de">{guess.trim() || '—'}</strong>. The form is{' '}
                <strong lang="de">{scene.answer}</strong>.
              </>
            )}{' '}
            {scene.why}
          </p>
        ) : (
          <p className="flash-actions">
            <button className="btn btn-gold" type="submit" disabled={!guess.trim()}>
              Check
            </button>
            <button type="button" className="btn" onClick={markUnsure}>
              Unsure
            </button>
          </p>
        )}
      </form>
      {revealed ? (
        <p>
          <button type="button" className="btn btn-gold" onClick={() => onNext(false)}>
            {nextLabel}
          </button>
        </p>
      ) : null}
    </article>
  )
}

function RoundSummary({ verb, answers, showEn }) {
  const correct = answers.filter((item) => item.correct).length
  return (
    <article className="flash">
      <p className="flash-kicker">Same verb</p>
      <p className="flash-word" lang="de">
        {verb.de}
      </p>
      {showEn ? <p className="flash-translation verb-gloss">{verb.en}</p> : null}
      <p className="flash-hint">
        {correct} of {verb.scenes.length} forms were right.
      </p>
      <ul className="verb-review">
        {verb.scenes.map((scene) => {
          const row = answers.find((item) => item.id === `${verb.id}:${scene.id}`)
          const ok = Boolean(row?.correct)
          return (
            <li key={scene.id}>
              <p className="verb-en">{scene.en}</p>
              <p className="verb-de" lang="de">
                {fillBlank(scene)}
              </p>
              <p className="flash-hint">
                {ok ? 'Right.' : row?.skipped ? 'Unsure.' : 'Not quite.'}
                {!ok && row?.typed ? (
                  <>
                    {' '}
                    You wrote <strong lang="de">{row.typed}</strong>.
                  </>
                ) : null}
                {!ok ? (
                  <>
                    {' '}
                    The form is <strong lang="de">{scene.answer}</strong>.
                  </>
                ) : null}
              </p>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default function VerbGame() {
  const [mode, setMode] = useState('daily')
  const [showEn, setShowEn] = useState(false)
  const [hintOpen, setHintOpen] = useState(false)
  const [picture, setPicture] = useState(null)
  const [holdId, setHoldId] = useState(null)
  const [practiceVerb, setPracticeVerb] = useState(null)
  const [practiceIndex, setPracticeIndex] = useState(0)
  const [practiceAnswers, setPracticeAnswers] = useState([])
  const [session, setSession] = useState({ seen: 0, correct: 0 })
  const [reviewOn, setReviewOn] = useState(false)
  const today = localDateKey()
  const [progress, setProgress] = useState(() => readDailyProgress(PROGRESS_KEY))

  const dailyVerb = useMemo(() => dailyPick(verbCards, 'verb-forms', new Date(`${today}T12:00:00`)), [today])

  const verb = mode === 'daily' ? dailyVerb : practiceVerb
  const scenes = verb?.scenes || []
  const answeredIds = new Set(progress.answers.map((item) => item.id))
  const dailyKey = (scene) => (verb ? `${verb.id}:${scene.id}` : '')
  const held = holdId ? scenes.find((scene) => dailyKey(scene) === holdId) : null
  const dailyScene = held || scenes.find((scene) => !answeredIds.has(dailyKey(scene))) || null
  const practiceScene = scenes[practiceIndex] || null
  const scene = mode === 'daily' ? dailyScene : practiceScene
  const dailyDone = scenes.filter((item) => answeredIds.has(dailyKey(item))).length
  const dailyCorrect = progress.answers.filter((item) => item.correct && scenes.some((entry) => dailyKey(entry) === item.id)).length
  const dailyComplete = scenes.length > 0 && dailyDone === scenes.length
  const showReview = mode === 'daily' ? reviewOn || (dailyComplete && !holdId) : reviewOn
  const formsAfterThis = scenes.filter((item) => !answeredIds.has(dailyKey(item)) && dailyKey(item) !== scene?.id).length
  const onLast = mode === 'daily' ? formsAfterThis === 0 : practiceIndex >= scenes.length - 1
  const todayLabel = new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'short' })

  function closePops() {
    setHintOpen(false)
    setPicture(null)
  }

  function onAnswered(result) {
    if (!verb || !scene) return
    const row = { id: `${verb.id}:${scene.id}`, correct: result.correct, typed: result.typed, skipped: result.skipped }
    if (mode === 'practice') {
      setPracticeAnswers((prev) => [...prev, row])
      setSession((prev) => ({ seen: prev.seen + 1, correct: prev.correct + (result.correct ? 1 : 0) }))
      return
    }
    setHoldId(row.id)
    setProgress((prev) => {
      if (prev.answers.some((item) => item.id === row.id)) return prev
      const next = { answers: [...prev.answers, row] }
      writeDailyProgress(PROGRESS_KEY, next)
      return next
    })
  }

  function onNext() {
    primeAudio()
    closePops()
    if (mode === 'practice') {
      if (practiceIndex + 1 >= scenes.length) setReviewOn(true)
      else setPracticeIndex((value) => value + 1)
      return
    }
    const finished = scenes.every((item) => answeredIds.has(dailyKey(item)) || dailyKey(item) === scene?.id)
    setHoldId(null)
    if (finished) setReviewOn(true)
  }

  function startPractice() {
    primeAudio()
    closePops()
    setPracticeVerb(pickVerb(mode === 'practice' ? verb?.id : null))
    setPracticeIndex(0)
    setPracticeAnswers([])
    setSession({ seen: 0, correct: 0 })
    setReviewOn(false)
    setHoldId(null)
    setMode('practice')
  }

  function openHint() {
    primeAudio()
    setPicture(null)
    setHintOpen(true)
  }

  function openPicture() {
    primeAudio()
    setHintOpen(false)
    setPicture((current) => pickImage(current?.src))
  }

  const summaryAnswers = mode === 'daily' ? progress.answers : practiceAnswers

  return (
    <section className="panel">
      <h2>Daily verb</h2>
      <p>
        One verb for the whole set. Every form that verb has comes up: ich, du, er, wir, ihr, sie, then I will, I want
        to, the perfect, and the simple past. Type the form that belongs in the gap.
      </p>
      <div className="mode-row" role="group" aria-label="Play mode">
        <button
          type="button"
          className={mode === 'daily' ? 'btn btn-gold' : 'btn'}
          aria-pressed={mode === 'daily'}
          onClick={() => {
            primeAudio()
            closePops()
            setMode('daily')
            setHoldId(null)
            setReviewOn(false)
          }}
        >
          Daily
        </button>
        <button type="button" className={mode === 'practice' ? 'btn btn-gold' : 'btn'} aria-pressed={mode === 'practice'} onClick={startPractice}>
          Practice
        </button>
      </div>
      <p className="hint">
        {mode === 'daily'
          ? `Today (${todayLabel}): ${verb?.de || '—'} · ${Math.min(dailyDone, scenes.length)} / ${scenes.length} · ${dailyCorrect} correct. This verb stays until tomorrow.`
          : `This round: ${verb?.de || '—'} · ${session.correct} correct out of ${session.seen}. The verb stays for all ${scenes.length} forms.`}
      </p>
      {verb ? (
        <div className="mode-row" role="group" aria-label="Help">
          <button type="button" className="btn" aria-pressed={showEn} onClick={() => setShowEn((open) => !open)}>
            {showEn ? 'Hide translation' : 'Show translation'}
          </button>
          <button type="button" className="btn" onClick={openHint}>
            Hint
          </button>
          <button type="button" className="btn" onClick={openPicture}>
            Random picture
          </button>
        </div>
      ) : null}
      {showReview && verb ? (
        <>
          <p className="hint">
            {mode === 'daily'
              ? `Today's verb is done. ${dailyCorrect} of ${scenes.length} were right. Tomorrow brings a different verb.`
              : `This round of ${verb.de} is done. ${session.correct} of ${session.seen} were right.`}
          </p>
          <RoundSummary verb={verb} answers={summaryAnswers} showEn={showEn} />
          {mode === 'practice' ? (
            <p>
              <button type="button" className="btn btn-gold" onClick={startPractice}>
                Another verb
              </button>
            </p>
          ) : null}
        </>
      ) : null}
      {!showReview && verb && scene ? (
        <VerbCard
          key={`${mode}-${verb.id}-${scene.id}`}
          verb={verb}
          scene={scene}
          index={Math.max(0, scenes.findIndex((item) => item.id === scene.id))}
          total={scenes.length}
          showEn={showEn}
          onAnswered={onAnswered}
          onNext={onNext}
          nextLabel={onLast ? 'End' : 'Next form'}
        />
      ) : null}
      {verb ? (
        <PopDialog open={hintOpen} onClose={() => setHintOpen(false)} title={`How to build ${verb.de}`} labelledBy="verb-hint-title">
          <HintChart verb={verb} scene={showReview ? null : scene} />
        </PopDialog>
      ) : null}
      <PopDialog
        open={Boolean(picture)}
        onClose={() => setPicture(null)}
        title="Random picture"
        labelledBy="verb-picture-title"
        extraActions={
          <button type="button" className="btn" onClick={() => setPicture((current) => pickImage(current?.src))}>
            Another picture
          </button>
        }
      >
        {picture ? <img className="pop-photo" src={pictureUrl(picture.src)} alt={picture.alt} /> : null}
      </PopDialog>
    </section>
  )
}
