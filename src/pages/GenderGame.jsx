import { useEffect, useMemo, useState } from 'react'
import FlashCard from '../components/FlashCard.jsx'
import RoundReview from '../components/RoundReview.jsx'
import { allGenderCards, CASES } from '../data/genderNouns.js'
import { localDateKey, readDailyProgress, seededShuffle, writeDailyProgress } from '../lib/daily.js'
import { primeAudio } from '../lib/sound.js'

const DAILY_COUNT = 8

function withChoices(card, seed) {
  return { ...card, choices: seededShuffle(card.choices, seed) }
}

function readResult(result) {
  if (result && typeof result === 'object') {
    const skipped = Boolean(result.skipped)
    return { correct: skipped ? false : Boolean(result.correct), picked: result.picked || '', skipped }
  }
  return { correct: Boolean(result), picked: '', skipped: false }
}

function dealPractice(caseId, avoidId) {
  const all = allGenderCards(caseId)
  let card = all[Math.floor(Math.random() * all.length)]
  let guard = 0
  while (card && card.id === avoidId && guard < 12) {
    card = all[Math.floor(Math.random() * all.length)]
    guard += 1
  }
  return withChoices(card, `practice|${card.id}|${Math.random()}`)
}

export default function GenderGame() {
  const [mode, setMode] = useState('daily')
  const [caseId, setCaseId] = useState('nom')
  const [holdId, setHoldId] = useState(null)
  const [practiceCard, setPracticeCard] = useState(null)
  const [session, setSession] = useState({ seen: 0, correct: 0 })
  const [round, setRound] = useState([])
  const [reviewOn, setReviewOn] = useState(false)
  const today = localDateKey()
  const progressKey = `gender-${caseId}`
  const [progress, setProgress] = useState(() => readDailyProgress(`gender-${caseId}`))

  useEffect(() => {
    setProgress(readDailyProgress(progressKey))
    setHoldId(null)
    setReviewOn(false)
  }, [progressKey])

  const caseLabel = CASES.find((item) => item.id === caseId)?.label || ''

  const dailyDeck = useMemo(() => {
    const shuffled = seededShuffle(allGenderCards(caseId), `gender|${caseId}|${today}`)
    return shuffled.slice(0, DAILY_COUNT).map((card) => withChoices(card, `choices|${today}|${caseId}|${card.id}`))
  }, [caseId, today])

  const answeredIds = new Set(progress.answers.map((item) => item.id))
  const held = holdId ? dailyDeck.find((card) => card.id === holdId) : null
  const dailyCard = held || dailyDeck.find((card) => !answeredIds.has(card.id)) || null
  const dailyDone = dailyDeck.filter((card) => answeredIds.has(card.id)).length
  const dailyCorrect = progress.answers.filter((item) => item.correct && dailyDeck.some((card) => card.id === item.id)).length
  const dailyComplete = dailyDeck.length > 0 && dailyDone === dailyDeck.length

  const dailySlides = useMemo(() => {
    return progress.answers
      .map((item) => {
        const source = dailyDeck.find((card) => card.id === item.id)
        if (!source) return null
        return {
          id: item.id,
          kicker: `${caseLabel} · ${source.numberLabel}`,
          prompt: source.form,
          choices: source.choices,
          picked: item.skipped ? 'Unsure' : item.picked || (item.correct ? source.answer : '—'),
          answer: source.answer,
          correct: Boolean(item.correct) && !item.skipped,
          skipped: Boolean(item.skipped),
          translation: source.en,
        }
      })
      .filter(Boolean)
  }, [progress, dailyDeck, caseLabel])

  useEffect(() => {
    if (mode !== 'practice') return
    setPracticeCard(dealPractice(caseId, null))
    setSession({ seen: 0, correct: 0 })
    setRound([])
    setReviewOn(false)
  }, [mode, caseId])

  const card = mode === 'daily' ? dailyCard : practiceCard
  const todayLabel = new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'short' })
  const showReview = mode === 'daily' ? reviewOn || (dailyComplete && !holdId) : reviewOn
  const slides = mode === 'daily' ? dailySlides : round
  const unanswered = dailyDeck.filter((item) => !answeredIds.has(item.id))
  const onLastDaily = mode === 'daily' && Boolean(card) && unanswered.length === 0

  function onAnswered(result) {
    const { correct, picked, skipped } = readResult(result)
    if (mode === 'practice') {
      if (!card) return
      if (!skipped) {
        setSession((prev) => ({ seen: prev.seen + 1, correct: prev.correct + (correct ? 1 : 0) }))
      }
      setRound((prev) => [
        ...prev,
        {
          id: `${card.id}-${prev.length}`,
          kicker: `${caseLabel} · ${card.numberLabel}`,
          prompt: card.form,
          choices: card.choices,
          picked: skipped ? 'Unsure' : picked,
          answer: card.answer,
          correct: skipped ? false : correct,
          skipped,
          translation: card.en,
        },
      ])
      return
    }
    if (!card) return
    setHoldId(card.id)
    setProgress((prev) => {
      if (prev.answers.some((item) => item.id === card.id)) return prev
      const next = { answers: [...prev.answers, { id: card.id, correct, picked: skipped ? 'Unsure' : picked, skipped }] }
      writeDailyProgress(progressKey, next)
      return next
    })
  }

  function onNext(silent) {
    if (!silent) primeAudio()
    if (mode === 'practice') {
      setPracticeCard(dealPractice(caseId, card?.id))
      return
    }
    const finished = dailyDeck.every((item) => answeredIds.has(item.id) || item.id === card?.id)
    setHoldId(null)
    if (finished) setReviewOn(true)
  }

  function startPractice() {
    primeAudio()
    if (mode === 'practice') {
      setPracticeCard(dealPractice(caseId, null))
      setSession({ seen: 0, correct: 0 })
      setRound([])
      setReviewOn(false)
      return
    }
    setMode('practice')
  }

  function newRound() {
    primeAudio()
    setPracticeCard(dealPractice(caseId, null))
    setSession({ seen: 0, correct: 0 })
    setRound([])
    setReviewOn(false)
  }

  return (
    <section className="panel">
      <h2>Daily gender</h2>
      <p>
        A common noun is on the card. Choose its article for the case you picked. Plural uses die,
        der, den, or der, depending on the case.
      </p>
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
      <div className="mode-row" role="group" aria-label="Case">
        {CASES.map((item) => (
          <button
            key={item.id}
            type="button"
            className={caseId === item.id ? 'btn btn-red' : 'btn'}
            aria-pressed={caseId === item.id}
            onClick={() => {
              primeAudio()
              setCaseId(item.id)
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="hint">
        {mode === 'daily'
          ? `Today (${todayLabel}): ${Math.min(dailyDone, DAILY_COUNT)} / ${DAILY_COUNT} · ${dailyCorrect} correct. This set stays until tomorrow.`
          : `Practice: ${session.correct} correct out of ${session.seen}. End closes this round.`}
      </p>
      {showReview ? (
        <p className="hint">
          {mode === 'daily'
            ? `Today's ${caseLabel} set is done. ${dailyCorrect} correct.`
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
        key={`${mode}-${caseId}`}
        slides={slides}
        liveId={showReview ? null : card?.id}
        review={showReview}
        onNewRound={mode === 'practice' ? newRound : null}
      >
        {card ? (
          <FlashCard
            key={`${mode}-${caseId}-${card.id}`}
            kicker={`${caseLabel} · ${card.numberLabel}`}
            prompt={card.form}
            translation={card.en}
            choices={card.choices}
            answer={card.answer}
            nextLabel={mode === 'daily' ? (onLastDaily ? 'End' : 'Next') : 'New card'}
            onAnswered={onAnswered}
            onNext={onNext}
          />
        ) : null}
      </RoundReview>
    </section>
  )
}
