import { useEffect, useMemo, useState } from 'react'
import FlashCard from '../components/FlashCard.jsx'
import { readingsFor } from '../data/readings.js'
import { localDateKey, readDailyProgress, seededShuffle, writeDailyProgress } from '../lib/daily.js'
import { primeAudio } from '../lib/sound.js'

function progressKey(level) {
  return `lesen-${level}`
}

export default function LesenGame() {
  const [level, setLevel] = useState('B1')
  const [mode, setMode] = useState('daily')
  const [holdId, setHoldId] = useState(null)
  const [practice, setPractice] = useState(null)
  const [session, setSession] = useState({ seen: 0, correct: 0 })
  const today = localDateKey()
  const key = progressKey(level)
  const [progress, setProgress] = useState(() => readDailyProgress(progressKey(level)))

  useEffect(() => {
    setProgress(readDailyProgress(key))
    setHoldId(null)
  }, [key])

  const dailyText = useMemo(() => {
    const pool = readingsFor(level)
    return seededShuffle(pool, `lesen|${level}|${today}`)[0]
  }, [level, today])

  const answeredIds = new Set(progress.answers.map((item) => item.id))
  const held = holdId ? dailyText.questions.find((item) => item.id === holdId) : null
  const dailyQuestion = held || dailyText.questions.find((item) => !answeredIds.has(item.id)) || null
  const dailyDone = dailyText.questions.filter((item) => answeredIds.has(item.id)).length
  const dailyCorrect = progress.answers.filter(
    (item) => item.correct && dailyText.questions.some((question) => question.id === item.id),
  ).length

  useEffect(() => {
    if (mode !== 'practice') return
    const pool = readingsFor(level)
    const text = pool[Math.floor(Math.random() * pool.length)]
    const question = text.questions[Math.floor(Math.random() * text.questions.length)]
    setPractice({ text, question })
    setSession({ seen: 0, correct: 0 })
  }, [mode, level])

  function nextPractice(current) {
    const pool = readingsFor(level)
    const same = current?.text
    if (same) {
      const index = same.questions.findIndex((item) => item.id === current.question.id)
      if (index >= 0 && index < same.questions.length - 1) {
        return { text: same, question: same.questions[index + 1] }
      }
    }
    let text = pool[Math.floor(Math.random() * pool.length)]
    let guard = 0
    while (text.id === same?.id && pool.length > 1 && guard < 8) {
      text = pool[Math.floor(Math.random() * pool.length)]
      guard += 1
    }
    return { text, question: text.questions[0] }
  }

  const text = mode === 'daily' ? dailyText : practice?.text
  const question = mode === 'daily' ? dailyQuestion : practice?.question
  const todayLabel = new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'short' })

  function onAnswered(correct) {
    if (mode === 'practice') {
      setSession((prev) => ({ seen: prev.seen + 1, correct: prev.correct + (correct ? 1 : 0) }))
      return
    }
    if (!question) return
    setHoldId(question.id)
    setProgress((prev) => {
      if (prev.answers.some((item) => item.id === question.id)) return prev
      const next = { answers: [...prev.answers, { id: question.id, correct }] }
      writeDailyProgress(key, next)
      return next
    })
  }

  function onNext() {
    primeAudio()
    if (mode === 'practice') {
      setPractice(nextPractice(practice))
      return
    }
    setHoldId(null)
  }

  return (
    <section className="panel">
      <h2>Lesen B1/B2</h2>
      <p>Read the short text, then answer. These passages are original practice, written for this class.</p>
      <div className="mode-row" role="group" aria-label="Level">
        {['B1', 'B2'].map((item) => (
          <button key={item} type="button" className={level === item ? 'btn btn-red' : 'btn'} aria-pressed={level === item} onClick={() => { primeAudio(); setLevel(item) }}>
            {item}
          </button>
        ))}
      </div>
      <div className="mode-row" role="group" aria-label="Play mode">
        <button type="button" className={mode === 'daily' ? 'btn btn-gold' : 'btn'} aria-pressed={mode === 'daily'} onClick={() => { primeAudio(); setMode('daily'); setHoldId(null) }}>
          Daily
        </button>
        <button type="button" className={mode === 'practice' ? 'btn btn-gold' : 'btn'} aria-pressed={mode === 'practice'} onClick={() => { primeAudio(); setMode('practice') }}>
          Practice
        </button>
      </div>
      <p className="hint">
        {mode === 'daily'
          ? `Today (${todayLabel}), ${level}: ${dailyDone} / ${dailyText.questions.length} · ${dailyCorrect} correct.`
          : `Practice: ${session.correct} correct out of ${session.seen}.`}
      </p>
      {text ? (
        <article className="passage">
          <h3 lang="de">{text.title}</h3>
          <p lang="de">{text.text}</p>
        </article>
      ) : null}
      {mode === 'daily' && !question ? (
        <p className="flash-result" role="status">
          Today&apos;s {level} text is done. {dailyCorrect} of {dailyText.questions.length} correct. A different text waits tomorrow.
        </p>
      ) : null}
      {question ? (
        <FlashCard
          key={`${mode}-${level}-${question.id}`}
          kicker="Question"
          prompt={question.prompt}
          choices={question.choices}
          answer={question.answer}
          nextLabel={mode === 'daily' ? 'Next question' : 'Next'}
          onAnswered={onAnswered}
          onNext={onNext}
        />
      ) : null}
    </section>
  )
}
