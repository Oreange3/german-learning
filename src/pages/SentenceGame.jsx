import { useEffect, useMemo, useRef, useState } from 'react'
import { acceptedFor, promptFor, sentenceLevels, sentencesFor } from '../data/translateSentences.js'
import { localDateKey, readDailyProgress, seededShuffle, writeDailyProgress } from '../lib/daily.js'
import { gradeSentence } from '../lib/sentenceDiff.js'
import { playResult, primeAudio } from '../lib/sound.js'

const DAILY_COUNT = 6

const LEVELS = [
  ...sentenceLevels.map((id) => ({ id, label: id })),
  { id: 'all', label: 'All' },
]

function progressKey(level, direction) {
  return `sentences-${level}-${direction}`
}

function dealPractice(level, avoidId) {
  const pool = sentencesFor(level)
  if (!pool.length) return null
  let card = pool[Math.floor(Math.random() * pool.length)]
  let guard = 0
  while (card && card.id === avoidId && pool.length > 1 && guard < 12) {
    card = pool[Math.floor(Math.random() * pool.length)]
    guard += 1
  }
  return card
}

function MarkedWords({ tokens }) {
  return tokens.map((token, index) => (
    <span key={`${token.text}-${index}`}>
      {index > 0 ? ' ' : null}
      <span className={`mark-word is-${token.status}`}>
        {token.text}
        <span className="sr-only">{token.status === 'right' ? ', right' : ', wrong'}</span>
      </span>
    </span>
  ))
}

function WordMarks({ grade, answerLang }) {
  return (
    <div className="marked-result">
      <p className="marked-label">What you wrote</p>
      <p className="marked-line" lang={answerLang}>
        <MarkedWords tokens={grade.guess} />
      </p>
      {grade.correct ? (
        <p className="marked-note">Every word is right.</p>
      ) : (
        <>
          <p className="marked-label">The right sentence</p>
          <p className="marked-line" lang={answerLang}>
            <MarkedWords tokens={grade.answer} />
          </p>
          <p className="marked-note">
            A gold word is right. A red word is wrong. In the right sentence, red is the word you missed or wrote
            differently.
          </p>
        </>
      )}
    </div>
  )
}

export default function SentenceGame() {
  const [mode, setMode] = useState('daily')
  const [level, setLevel] = useState('A1')
  const [direction, setDirection] = useState('en-de')
  const [holdId, setHoldId] = useState(null)
  const [practiceCard, setPracticeCard] = useState(null)
  const [session, setSession] = useState({ seen: 0, correct: 0 })
  const [guess, setGuess] = useState('')
  const [grade, setGrade] = useState(null)
  const today = localDateKey()
  const key = progressKey(level, direction)
  const [seenKey, setSeenKey] = useState(key)
  const [seenPracticeLevel, setSeenPracticeLevel] = useState('')
  const [progress, setProgress] = useState(() => readDailyProgress(key))
  const inputRef = useRef(null)
  const nextRef = useRef(null)

  if (seenKey !== key) {
    setSeenKey(key)
    setProgress(readDailyProgress(key))
    setHoldId(null)
    setGuess('')
    setGrade(null)
  }

  if (mode === 'practice' && seenPracticeLevel !== level) {
    setSeenPracticeLevel(level)
    setPracticeCard(dealPractice(level, null))
    setSession({ seen: 0, correct: 0 })
    setGuess('')
    setGrade(null)
  }

  const dailyDeck = useMemo(() => {
    const pool = sentencesFor(level)
    const count = Math.min(DAILY_COUNT, pool.length)
    return seededShuffle(pool, `sentences|${level}|${direction}|${today}`).slice(0, count)
  }, [level, direction, today])

  const answeredIds = new Set(progress.answers.map((item) => item.id))
  const held = holdId ? dailyDeck.find((card) => card.id === holdId) : null
  const dailyCard = held || dailyDeck.find((card) => !answeredIds.has(card.id)) || null
  const dailyDone = dailyDeck.filter((card) => answeredIds.has(card.id)).length
  const dailyCorrect = progress.answers.filter(
    (item) => item.correct && dailyDeck.some((card) => card.id === item.id),
  ).length
  const dailyComplete = dailyDeck.length > 0 && !dailyCard

  const card = mode === 'daily' ? dailyCard : practiceCard
  const locked = Boolean(grade)
  const answerLang = direction === 'en-de' ? 'de' : 'en'
  const promptLang = direction === 'en-de' ? 'en' : 'de'
  const todayLabel = new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'short' })

  useEffect(() => {
    if (!card) return
    if (grade) nextRef.current?.focus()
    else inputRef.current?.focus()
  }, [card, grade])

  function check(event) {
    event.preventDefault()
    if (!card || locked) return
    const text = guess.trim()
    if (!text) return
    primeAudio()
    const result = gradeSentence(text, acceptedFor(card, direction))
    setGrade(result)
    playResult(result.correct)
    if (mode === 'practice') {
      setSession((prev) => ({ seen: prev.seen + 1, correct: prev.correct + (result.correct ? 1 : 0) }))
      return
    }
    setHoldId(card.id)
    setProgress((prev) => {
      if (prev.answers.some((item) => item.id === card.id)) return prev
      const next = { answers: [...prev.answers, { id: card.id, correct: result.correct }] }
      writeDailyProgress(key, next)
      return next
    })
  }

  function goNext() {
    if (!locked) return
    primeAudio()
    if (mode === 'practice') setPracticeCard(dealPractice(level, card?.id))
    else setHoldId(null)
    setGuess('')
    setGrade(null)
  }

  function startPractice() {
    primeAudio()
    if (mode === 'practice') {
      setPracticeCard(dealPractice(level, null))
      setSession({ seen: 0, correct: 0 })
      setGuess('')
      setGrade(null)
      return
    }
    setMode('practice')
  }

  return (
    <section className="panel">
      <h2>Translate the sentence</h2>
      <p>
        Read the sentence and type it in the other language. Check looks at each word on its own. A{' '}
        <span className="mark-word is-right">gold word</span> is right. A <span className="mark-word is-wrong">red word</span>{' '}
        is wrong. Only that word changes color.
      </p>
      <p className="hint">The sentence counts when every word is gold. Enter checks it.</p>

      <div className="mode-row" role="group" aria-label="Play mode">
        <button
          type="button"
          className={mode === 'daily' ? 'btn btn-gold' : 'btn'}
          aria-pressed={mode === 'daily'}
          onClick={() => {
            primeAudio()
            setMode('daily')
            setHoldId(null)
            setGuess('')
            setGrade(null)
          }}
        >
          Daily
        </button>
        <button type="button" className={mode === 'practice' ? 'btn btn-gold' : 'btn'} aria-pressed={mode === 'practice'} onClick={startPractice}>
          Practice
        </button>
      </div>

      <div className="mode-row" role="group" aria-label="Level">
        {LEVELS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={level === item.id ? 'btn btn-red' : 'btn'}
            aria-pressed={level === item.id}
            onClick={() => {
              primeAudio()
              setLevel(item.id)
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mode-row" role="group" aria-label="Direction">
        <button
          type="button"
          className={direction === 'en-de' ? 'btn btn-gold' : 'btn'}
          aria-pressed={direction === 'en-de'}
          onClick={() => {
            primeAudio()
            setDirection('en-de')
          }}
        >
          English → German
        </button>
        <button
          type="button"
          className={direction === 'de-en' ? 'btn btn-gold' : 'btn'}
          aria-pressed={direction === 'de-en'}
          onClick={() => {
            primeAudio()
            setDirection('de-en')
          }}
        >
          German → English
        </button>
      </div>

      <p className="hint">
        {mode === 'daily'
          ? `Today (${todayLabel}): ${Math.min(dailyDone, dailyDeck.length)} / ${dailyDeck.length} · ${dailyCorrect} with every word right.`
          : `Practice: ${session.correct} with every word right, out of ${session.seen}.`}
      </p>

      {mode === 'daily' && dailyComplete ? (
        <>
          <div className="quiz-stage">
            <p className="quiz-word">Today’s sentences are done.</p>
            <p className="quiz-hint">
              {dailyCorrect} of {dailyDeck.length} had every word right. This set stays until tomorrow.
            </p>
          </div>
          <p>
            <button type="button" className="btn btn-gold" onClick={startPractice}>
              Keep practicing
            </button>
          </p>
        </>
      ) : null}

      {card ? (
        <>
          <div className="quiz-stage">
            <p className="quiz-hint">
              {card.level} · {direction === 'en-de' ? 'Write this in German' : 'Write this in English'}
            </p>
            <p className="quiz-word" lang={promptLang}>
              {promptFor(card, direction)}
            </p>
          </div>

          <form className="translate-form" onSubmit={check}>
            <label htmlFor="sentence-guess">
              Your translation
              <textarea
                id="sentence-guess"
                ref={inputRef}
                value={guess}
                onChange={(event) => setGuess(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault()
                    event.currentTarget.form?.requestSubmit()
                  }
                }}
                disabled={locked}
                rows={2}
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                lang={answerLang}
              />
            </label>
            {grade ? <WordMarks grade={grade} answerLang={answerLang} /> : null}
            <p className="form-actions">
              <button className="btn btn-gold" type="submit" disabled={locked || !guess.trim()}>
                Check
              </button>
              <button className="btn" type="button" ref={nextRef} onClick={goNext} disabled={!locked}>
                Next sentence
              </button>
            </p>
          </form>
        </>
      ) : null}
    </section>
  )
}
