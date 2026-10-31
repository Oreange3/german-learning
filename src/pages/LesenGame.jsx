import { useEffect, useMemo, useState } from 'react'
import FlashCard from '../components/FlashCard.jsx'
import RoundReview from '../components/RoundReview.jsx'
import { readingsFor } from '../data/readings.js'
import { dailyPick, localDateKey, readDailyProgress, writeDailyProgress } from '../lib/daily.js'
import { primeAudio } from '../lib/sound.js'

function progressKey(level) {
  return `lesen-${level}`
}

function readResult(result) {
  if (result && typeof result === 'object') {
    const skipped = Boolean(result.skipped)
    return { correct: skipped ? false : Boolean(result.correct), picked: result.picked || '', skipped }
  }
  return { correct: Boolean(result), picked: '', skipped: false }
}

function readingTranslation(passage, question) {
  return [passage?.en, question?.en].filter(Boolean).join('\n\n')
}

function dealPractice(level) {
  const pool = readingsFor(level)
  const text = pool[Math.floor(Math.random() * pool.length)]
  const question = text.questions[Math.floor(Math.random() * text.questions.length)]
  return { text, question }
}

function nextPractice(level, current) {
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

export default function LesenGame() {
  const [level, setLevel] = useState('B1')
  const [mode, setMode] = useState('daily')
  const [holdId, setHoldId] = useState(null)
  const [practice, setPractice] = useState(null)
  const [session, setSession] = useState({ seen: 0, correct: 0 })
  const [round, setRound] = useState([])
  const [reviewOn, setReviewOn] = useState(false)
  const today = localDateKey()
  const key = progressKey(level)
  const [progress, setProgress] = useState(() => readDailyProgress(progressKey(level)))

  useEffect(() => {
    setProgress(readDailyProgress(key))
    setHoldId(null)
    setReviewOn(false)
  }, [key])

  const dailyText = useMemo(() => dailyPick(readingsFor(level), `lesen|${level}`), [level, today])

  const answeredIds = new Set(progress.answers.map((item) => item.id))
  const held = holdId ? dailyText.questions.find((item) => item.id === holdId) : null
  const dailyQuestion = held || dailyText.questions.find((item) => !answeredIds.has(item.id)) || null
  const dailyDone = dailyText.questions.filter((item) => answeredIds.has(item.id)).length
  const dailyCorrect = progress.answers.filter(
    (item) => item.correct && dailyText.questions.some((question) => question.id === item.id),
  ).length
  const dailyComplete = dailyText.questions.length > 0 && dailyDone === dailyText.questions.length

  const dailySlides = useMemo(() => {
    return progress.answers
      .map((item) => {
        const source = dailyText.questions.find((question) => question.id === item.id)
        if (!source) return null
        return {
          id: item.id,
          kicker: dailyText.title,
          prompt: source.prompt,
          choices: source.choices,
          passage: { title: dailyText.title, text: dailyText.text },
          picked: item.skipped ? 'Unsure' : item.picked || (item.correct ? source.answer : '—'),
          answer: source.answer,
          correct: Boolean(item.correct) && !item.skipped,
          skipped: Boolean(item.skipped),
          translation: readingTranslation(dailyText, source),
        }
      })
      .filter(Boolean)
  }, [progress, dailyText])

  useEffect(() => {
    if (mode !== 'practice') return
    setPractice(dealPractice(level))
    setSession({ seen: 0, correct: 0 })
    setRound([])
    setReviewOn(false)
  }, [mode, level])

  const text = mode === 'daily' ? dailyText : practice?.text
  const question = mode === 'daily' ? dailyQuestion : practice?.question
  const todayLabel = new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'short' })
  const showReview = mode === 'daily' ? reviewOn || (dailyComplete && !holdId) : reviewOn
  const slides = mode === 'daily' ? dailySlides : round
  const unanswered = dailyText.questions.filter((item) => !answeredIds.has(item.id))
  const onLastDaily = mode === 'daily' && Boolean(question) && unanswered.length === 0

  function onAnswered(result) {
    const { correct, picked, skipped } = readResult(result)
    if (mode === 'practice') {
      if (!question || !text) return
      if (!skipped) {
        setSession((prev) => ({ seen: prev.seen + 1, correct: prev.correct + (correct ? 1 : 0) }))
      }
      setRound((prev) => [
        ...prev,
        {
          id: `${question.id}-${prev.length}`,
          kicker: text.title,
          prompt: question.prompt,
          choices: question.choices,
          passage: { title: text.title, text: text.text },
          picked: skipped ? 'Unsure' : picked,
          answer: question.answer,
          correct: skipped ? false : correct,
          skipped,
          translation: readingTranslation(text, question),
        },
      ])
      return
    }
    if (!question) return
    setHoldId(question.id)
    setProgress((prev) => {
      if (prev.answers.some((item) => item.id === question.id)) return prev
      const next = {
        answers: [...prev.answers, { id: question.id, correct, picked: skipped ? 'Unsure' : picked, skipped }],
      }
      writeDailyProgress(key, next)
      return next
    })
  }

  function onNext(silent) {
    if (!silent) primeAudio()
    if (mode === 'practice') {
      setPractice(nextPractice(level, practice))
      return
    }
    const finished = dailyText.questions.every((item) => answeredIds.has(item.id) || item.id === question?.id)
    setHoldId(null)
    if (finished) setReviewOn(true)
  }

  function startPractice() {
    primeAudio()
    if (mode === 'practice') {
      setPractice(dealPractice(level))
      setSession({ seen: 0, correct: 0 })
      setRound([])
      setReviewOn(false)
      return
    }
    setMode('practice')
  }

  function newRound() {
    primeAudio()
    setPractice(dealPractice(level))
    setSession({ seen: 0, correct: 0 })
    setRound([])
    setReviewOn(false)
  }

  return (
    <section className="panel">
      <h2>Lesen B1/B2</h2>
      <p>
        Read the text, then answer. Each day uses the next passage from a large set, so the same text does not come back
        until the rest of that level has been used. These passages are original practice, written for this class.
      </p>
      <div className="mode-row" role="group" aria-label="Level">
        {['B1', 'B2'].map((item) => (
          <button
            key={item}
            type="button"
            className={level === item ? 'btn btn-red' : 'btn'}
            aria-pressed={level === item}
            onClick={() => {
              primeAudio()
              setLevel(item)
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mode-row" role="group" aria-label="Play mode">
        <button
          type="button"
          className={mode === 'daily' ? 'btn btn-gold' : 'btn'}
          aria-pressed={mode === 'daily'}
          onClick={() => {
            primeAudio()
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
          ? `Today (${todayLabel}), ${level}: ${dailyDone} / ${dailyText.questions.length} · ${dailyCorrect} correct.`
          : `Practice: ${session.correct} correct out of ${session.seen}. End closes this round.`}
      </p>
      {showReview ? (
        <p className="hint">
          {mode === 'daily'
            ? `Today's ${level} text is done. ${dailyCorrect} correct.`
            : `This round: ${session.correct} correct out of ${session.seen}.`}
        </p>
      ) : null}
      {mode === 'practice' && !showReview && round.length > 0 ? (
        <p>
          <button type="button" className="btn" onClick={() => setReviewOn(true)}>
            End
          </button>
        </p>
      ) : null}
      <RoundReview
        key={`${mode}-${level}`}
        slides={slides}
        liveId={showReview ? null : question?.id}
        review={showReview}
        onNewRound={mode === 'practice' ? newRound : null}
      >
        {text ? (
          <article className="passage">
            <h3 lang="de">{text.title}</h3>
            <p lang="de">{text.text}</p>
          </article>
        ) : null}
        {question ? (
          <FlashCard
            key={`${mode}-${level}-${question.id}`}
            kicker="Question"
            prompt={question.prompt}
            translation={readingTranslation(text, question)}
            choices={question.choices}
            answer={question.answer}
            nextLabel={mode === 'daily' ? (onLastDaily ? 'End' : 'Next question') : 'Next'}
            onAnswered={onAnswered}
            onNext={onNext}
          />
        ) : null}
      </RoundReview>
    </section>
  )
}
