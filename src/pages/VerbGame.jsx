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

function VerbCard({ verb, scene, index, total, showEn, onAnswered, onNext, nextLabel, settled }) {
  const [guess, setGuess] = useState('')
  const [revealedNow, setRevealed] = useState(false)
  const [skippedNow, setSkipped] = useState(false)
  const [rightNow, setRight] = useState(false)
  const inputRef = useRef(null)
  const revealed = Boolean(settled) || revealedNow
  const skipped = settled ? Boolean(settled.skipped) : skippedNow
  const right = settled ? Boolean(settled.correct) && !settled.skipped : rightNow
  const typed = settled ? settled.typed || '' : guess

  useEffect(() => {
    if (settled) return
    inputRef.current?.focus()
  }, [settled])

  function finish(result) {
    setRevealed(true)
    setSkipped(result.skipped)
    setRight(result.correct)
    onAnswered(result)
  }

  function check(event) {
    event.preventDefault()
    if (revealed) return
    const written = guess.trim()
    if (!written) return
    const correct = answersMatch(written, [scene.answer])
    primeAudio()
    playResult(correct)
    finish({ correct, typed: written, skipped: false })
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
          guess={typed}
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
                Not quite. You wrote <strong lang="de">{typed.trim() || '—'}</strong>. The form is{' '}
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
      {revealed && onNext ? (
        <p>
          <button type="button" className="btn btn-gold" onClick={() => onNext(false)}>
            {nextLabel}
          </button>
        </p>
      ) : null}
    </article>
  )
}

function FormArrows({ canBack, canForward, onBack, onForward, children }) {
  return (
    <div className="slide-row">
      <button type="button" className="slide-arrow" aria-label="Previous form" disabled={!canBack} onClick={onBack}>
        ←
      </button>
      <div className="slide-body">{children}</div>
      <button type="button" className="slide-arrow" aria-label="Next form" disabled={!canForward} onClick={onForward}>
        →
      </button>
    </div>
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
  const [lookAt, setLookAt] = useState(null)
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
  const answerPool = mode === 'daily' ? progress.answers : practiceAnswers
  const liveIndex = Math.max(0, scenes.findIndex((item) => item.id === scene?.id))
  const reviewIndex = lookAt === null ? Math.max(0, scenes.length - 1) : Math.min(Math.max(lookAt, 0), Math.max(0, scenes.length - 1))

  function answerAt(index) {
    const item = scenes[index]
    if (!verb || !item) return null
    return answerPool.find((row) => row.id === `${verb.id}:${item.id}`) || null
  }

  function earlierThan(from) {
    for (let index = from - 1; index >= 0; index -= 1) {
      if (answerAt(index)) return index
    }
    return null
  }

  const browsing = !showReview && lookAt !== null && lookAt !== liveIndex && Boolean(answerAt(lookAt))
  const viewedIndex = showReview ? reviewIndex : browsing ? lookAt : liveIndex
  const viewedScene = scenes[viewedIndex] || scene
  const canBack = showReview ? reviewIndex > 0 : earlierThan(browsing ? lookAt : liveIndex) !== null
  const canForward = showReview ? reviewIndex < scenes.length - 1 : browsing || Boolean(answerAt(liveIndex))

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
    setLookAt(null)
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
    setLookAt(null)
    setMode('practice')
  }

  function goBack() {
    primeAudio()
    closePops()
    if (showReview) {
      if (reviewIndex > 0) setLookAt(reviewIndex - 1)
      return
    }
    const next = earlierThan(browsing ? lookAt : liveIndex)
    if (next !== null) setLookAt(next)
  }

  function goForward() {
    if (showReview) {
      primeAudio()
      closePops()
      if (reviewIndex < scenes.length - 1) setLookAt(reviewIndex + 1)
      return
    }
    if (browsing) {
      primeAudio()
      closePops()
      let step = null
      for (let index = lookAt + 1; index < liveIndex; index += 1) {
        if (answerAt(index)) {
          step = index
          break
        }
      }
      setLookAt(step)
      return
    }
    if (answerAt(liveIndex)) onNext()
  }

  useEffect(() => {
    function onKey(event) {
      const tag = event.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || event.target?.isContentEditable) return
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goBack()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        goForward()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

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
            setLookAt(null)
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
          <FormArrows canBack={canBack} canForward={canForward} onBack={goBack} onForward={goForward}>
            <VerbCard
              key={`review-${verb.id}-${scenes[reviewIndex]?.id || 'none'}`}
              verb={verb}
              scene={scenes[reviewIndex]}
              index={reviewIndex}
              total={scenes.length}
              showEn={showEn}
              settled={answerAt(reviewIndex) || { correct: false, typed: '', skipped: true }}
            />
          </FormArrows>
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
        <FormArrows canBack={canBack} canForward={canForward} onBack={goBack} onForward={goForward}>
          {browsing ? (
            <VerbCard
              key={`back-${verb.id}-${scenes[lookAt].id}`}
              verb={verb}
              scene={scenes[lookAt]}
              index={lookAt}
              total={scenes.length}
              showEn={showEn}
              settled={answerAt(lookAt)}
            />
          ) : (
            <VerbCard
              key={`${mode}-${verb.id}-${scene.id}`}
              verb={verb}
              scene={scene}
              index={liveIndex}
              total={scenes.length}
              showEn={showEn}
              settled={answerAt(liveIndex)}
              onAnswered={onAnswered}
              onNext={onNext}
              nextLabel={onLast ? 'End' : 'Next form'}
            />
          )}
        </FormArrows>
      ) : null}
      {verb ? (
        <PopDialog open={hintOpen} onClose={() => setHintOpen(false)} title={`How to build ${verb.de}`} labelledBy="verb-hint-title">
          <HintChart verb={verb} scene={viewedScene} />
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
