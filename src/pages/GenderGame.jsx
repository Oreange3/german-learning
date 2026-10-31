import { useEffect, useMemo, useState } from 'react'
import FlashCard from '../components/FlashCard.jsx'
import { allGenderCards, CASES } from '../data/genderNouns.js'
import { localDateKey, readDailyProgress, seededShuffle, writeDailyProgress } from '../lib/daily.js'
import { primeAudio } from '../lib/sound.js'

const DAILY_COUNT = 8

function withChoices(card, seed) {
  return { ...card, choices: seededShuffle(card.choices, seed) }
}

export default function GenderGame() {
  const [mode, setMode] = useState('daily')
  const [caseId, setCaseId] = useState('nom')
  const [holdId, setHoldId] = useState(null)
  const [practiceCard, setPracticeCard] = useState(null)
  const [session, setSession] = useState({ seen: 0, correct: 0 })
  const today = localDateKey()
  const progressKey = `gender-${caseId}`
  const [progress, setProgress] = useState(() => readDailyProgress(`gender-${caseId}`))

  useEffect(() => {
    setProgress(readDailyProgress(progressKey))
    setHoldId(null)
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

  useEffect(() => {
    if (mode !== 'practice') return
    const all = allGenderCards(caseId)
    const card = all[Math.floor(Math.random() * all.length)]
    setPracticeCard(withChoices(card, `practice|${card.id}|${Math.random()}`))
    setSession({ seen: 0, correct: 0 })
  }, [mode, caseId])

  function pickPractice(avoidId) {
    const all = allGenderCards(caseId)
    let card = all[Math.floor(Math.random() * all.length)]
    let guard = 0
    while (card.id === avoidId && guard < 12) {
      card = all[Math.floor(Math.random() * all.length)]
      guard += 1
    }
    return withChoices(card, `practice|${card.id}|${Math.random()}`)
  }

  const card = mode === 'daily' ? dailyCard : practiceCard
  const todayLabel = new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'short' })

  function onAnswered(correct) {
    if (mode === 'practice') {
      setSession((prev) => ({ seen: prev.seen + 1, correct: prev.correct + (correct ? 1 : 0) }))
      return
    }
    if (!card) return
    setHoldId(card.id)
    setProgress((prev) => {
      if (prev.answers.some((item) => item.id === card.id)) return prev
      const next = { answers: [...prev.answers, { id: card.id, correct }] }
      writeDailyProgress(progressKey, next)
      return next
    })
  }

  function onNext() {
    primeAudio()
    if (mode === 'practice') {
      setPracticeCard(pickPractice(card?.id))
      return
    }
    setHoldId(null)
  }

  return (
    <section className="panel">
      <h2>Daily gender</h2>
      <p>
        A common noun is on the card. Choose its article for the case you picked. Plural uses die,
        der, den, or der, depending on the case.
      </p>
      <div className="mode-row" role="group" aria-label="Play mode">
        <button type="button" className={mode === 'daily' ? 'btn btn-gold' : 'btn'} aria-pressed={mode === 'daily'} onClick={() => { primeAudio(); setMode('daily') }}>
          Daily
        </button>
        <button type="button" className={mode === 'practice' ? 'btn btn-gold' : 'btn'} aria-pressed={mode === 'practice'} onClick={() => { primeAudio(); setMode('practice') }}>
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
            onClick={() => { primeAudio(); setCaseId(item.id) }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="hint">
        {mode === 'daily'
          ? `Today (${todayLabel}): ${Math.min(dailyDone, DAILY_COUNT)} / ${DAILY_COUNT} · ${dailyCorrect} correct. This set stays until tomorrow.`
          : `Practice: ${session.correct} correct out of ${session.seen}. A new card every time.`}
      </p>
      {mode === 'daily' && !card ? (
        <p className="flash-result" role="status">
          Today&apos;s {caseLabel} set is done. {dailyCorrect} of {DAILY_COUNT} correct. Tomorrow brings a new set. Practice can keep going.
        </p>
      ) : null}
      {card ? (
        <FlashCard
          key={`${mode}-${caseId}-${card.id}`}
          kicker={`${caseLabel} · ${card.numberLabel}`}
          prompt={card.form}
          hint={card.en}
          choices={card.choices}
          answer={card.answer}
          nextLabel={mode === 'daily' ? 'Next' : 'New card'}
          onAnswered={onAnswered}
          onNext={onNext}
        />
      ) : null}
    </section>
  )
}
