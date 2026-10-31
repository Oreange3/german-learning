import { useEffect, useMemo, useState } from 'react'
import FlashCard from '../components/FlashCard.jsx'
import { pronounCards } from '../data/pronounCards.js'
import { localDateKey, readDailyProgress, seededShuffle, writeDailyProgress } from '../lib/daily.js'
import { primeAudio } from '../lib/sound.js'

const DAILY_COUNT = 8
const PROGRESS_KEY = 'pronouns'

function withChoices(card, seed) {
  return { ...card, choices: seededShuffle(card.choices, seed) }
}

export default function PronounGame() {
  const [mode, setMode] = useState('daily')
  const [holdId, setHoldId] = useState(null)
  const [practiceCard, setPracticeCard] = useState(null)
  const [session, setSession] = useState({ seen: 0, correct: 0 })
  const today = localDateKey()
  const [progress, setProgress] = useState(() => readDailyProgress(PROGRESS_KEY))

  const dailyDeck = useMemo(() => {
    return seededShuffle(pronounCards, `pronouns|${today}`)
      .slice(0, DAILY_COUNT)
      .map((card) => withChoices(card, `pronoun-choices|${today}|${card.id}`))
  }, [today])

  const answeredIds = new Set(progress.answers.map((item) => item.id))
  const held = holdId ? dailyDeck.find((card) => card.id === holdId) : null
  const dailyCard = held || dailyDeck.find((card) => !answeredIds.has(card.id)) || null
  const dailyDone = dailyDeck.filter((card) => answeredIds.has(card.id)).length
  const dailyCorrect = progress.answers.filter((item) => item.correct && dailyDeck.some((card) => card.id === item.id)).length

  useEffect(() => {
    if (mode !== 'practice') return
    const card = pronounCards[Math.floor(Math.random() * pronounCards.length)]
    setPracticeCard(withChoices(card, `pronoun-practice|${card.id}|${Math.random()}`))
    setSession({ seen: 0, correct: 0 })
  }, [mode])

  function pickPractice(avoidId) {
    let card = pronounCards[Math.floor(Math.random() * pronounCards.length)]
    let guard = 0
    while (card.id === avoidId && guard < 12) {
      card = pronounCards[Math.floor(Math.random() * pronounCards.length)]
      guard += 1
    }
    return withChoices(card, `pronoun-practice|${card.id}|${Math.random()}`)
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
      writeDailyProgress(PROGRESS_KEY, next)
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
      <h2>Pronouns</h2>
      <p>Fill the blank for ich, du, er, sie, or es. The form changes when the word is the object.</p>
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
          ? `Today (${todayLabel}): ${Math.min(dailyDone, DAILY_COUNT)} / ${DAILY_COUNT} · ${dailyCorrect} correct.`
          : `Practice: ${session.correct} correct out of ${session.seen}.`}
      </p>
      {mode === 'daily' && !card ? (
        <p className="flash-result" role="status">
          Today&apos;s pronoun set is done. {dailyCorrect} of {DAILY_COUNT} correct. It resets tomorrow.
        </p>
      ) : null}
      {card ? (
        <FlashCard
          key={`${mode}-${card.id}`}
          kicker="Pronoun"
          prompt={card.prompt}
          hint={card.hint}
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
