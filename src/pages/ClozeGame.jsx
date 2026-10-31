import { useEffect, useMemo, useState } from 'react'
import { clozeBlanks, clozePool, clozesFor } from '../data/textBank.js'
import { dailyPick, localDateKey, readDailyProgress, seededShuffle, writeDailyProgress } from '../lib/daily.js'
import { playResult, primeAudio } from '../lib/sound.js'

function progressKey(level) {
  return `cloze-${level}`
}

function dealPractice(level, avoidId) {
  const pool = clozesFor(level)
  let item = pool[Math.floor(Math.random() * pool.length)]
  let guard = 0
  while (item && item.id === avoidId && pool.length > 1 && guard < 8) {
    item = pool[Math.floor(Math.random() * pool.length)]
    guard += 1
  }
  return item
}

function ClozeBoard({ item, chips, startFilled, onFinished }) {
  const blanks = clozeBlanks(item)
  const [placed, setPlaced] = useState(() => {
    if (!startFilled) return {}
    const next = {}
    blanks.forEach((blank, index) => {
      next[blank.id] = { key: `done-${index}`, word: blank.answer }
    })
    return next
  })
  const [selected, setSelected] = useState(null)
  const [wrongId, setWrongId] = useState(null)
  const [finished, setFinished] = useState(startFilled)

  const used = new Set(Object.values(placed).map((chip) => chip.key))
  const available = chips.filter((chip) => !used.has(chip.key))

  function place(blankId, chip) {
    if (!chip || placed[blankId] || finished) return
    const blank = blanks.find((entry) => entry.id === blankId)
    if (!blank) return
    primeAudio()
    if (chip.word === blank.answer) {
      const next = { ...placed, [blankId]: chip }
      setPlaced(next)
      setSelected(null)
      setWrongId(null)
      playResult(true)
      if (blanks.every((entry) => next[entry.id])) {
        setFinished(true)
        onFinished()
      }
      return
    }
    setSelected(null)
    setWrongId(blankId)
    playResult(false)
    window.setTimeout(() => {
      setWrongId((current) => (current === blankId ? null : current))
    }, 700)
  }

  function onDrop(event, blankId) {
    event.preventDefault()
    const key = event.dataTransfer.getData('text/plain')
    const chip = chips.find((entry) => entry.key === key)
    if (!chip || used.has(chip.key)) return
    place(blankId, chip)
  }

  const filledCount = Object.keys(placed).length

  return (
    <div className={`flash cloze-card${finished ? ' is-right' : ''}`}>
      <p className="flash-kicker">
        {item.level} · {blanks.length} gaps
      </p>
      <h3 className="cloze-title" lang="de">
        {item.title}
      </h3>
      <p className="cloze-text" lang="de">
        {item.parts.map((part, index) => {
          if (!Array.isArray(part)) return <span key={`t-${index}`}>{part}</span>
          const [, id] = part
          const filled = placed[id]
          const wrong = wrongId === id
          return (
            <button
              key={id}
              type="button"
              className={`cloze-blank${filled ? ' is-filled' : ''}${wrong ? ' is-wrong' : ''}${
                selected && !filled ? ' is-ready' : ''
              }`}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => onDrop(event, id)}
              onClick={() => place(id, available.find((chip) => chip.key === selected))}
            >
              {filled ? filled.word : '\u00a0'}
            </button>
          )
        })}
      </p>
      {finished ? (
        <p className="flash-hint">Every gap is filled.</p>
      ) : (
        <>
          <div className="cloze-pool" aria-label="Word pool">
            {available.map((chip) => (
              <button
                key={chip.key}
                type="button"
                className={`cloze-chip${selected === chip.key ? ' is-selected' : ''}`}
                draggable
                aria-pressed={selected === chip.key}
                onDragStart={(event) => {
                  event.dataTransfer.setData('text/plain', chip.key)
                  event.dataTransfer.effectAllowed = 'move'
                  setSelected(chip.key)
                }}
                onClick={() => {
                  primeAudio()
                  setSelected((current) => (current === chip.key ? null : chip.key))
                }}
              >
                {chip.word}
              </button>
            ))}
          </div>
          <p className="flash-hint">
            {filledCount} of {blanks.length} gaps. {available.length} words are left, and some do not belong. Click a
            word, then a gap, or drag it.
          </p>
        </>
      )}
    </div>
  )
}

export default function ClozeGame() {
  const [level, setLevel] = useState('B1')
  const [mode, setMode] = useState('daily')
  const [practiceItem, setPracticeItem] = useState(null)
  const [deal, setDeal] = useState(0)
  const [finishedCount, setFinishedCount] = useState(0)
  const today = localDateKey()
  const key = progressKey(level)
  const [progress, setProgress] = useState(() => readDailyProgress(progressKey(level)))

  useEffect(() => {
    setProgress(readDailyProgress(key))
  }, [key])

  useEffect(() => {
    if (mode !== 'practice') return
    setPracticeItem(dealPractice(level, null))
    setDeal((value) => value + 1)
    setFinishedCount(0)
  }, [mode, level])

  const dailyItem = useMemo(() => dailyPick(clozesFor(level), `cloze|${level}`), [level, today])
  const item = mode === 'daily' ? dailyItem : practiceItem
  const dailyDone = Boolean(item && progress.answers.some((entry) => entry.id === item.id && entry.correct))

  const chips = useMemo(() => {
    if (!item) return []
    const seed = mode === 'daily' ? `cloze-words|${level}|${today}|${item.id}` : `cloze-words|${item.id}|${deal}`
    return seededShuffle(clozePool(item), seed).map((word, index) => ({ key: `${index}:${word}`, word }))
  }, [item, mode, level, today, deal])

  function markDailyDone() {
    if (!item || dailyDone) return
    const next = { answers: [...progress.answers, { id: item.id, correct: true }] }
    writeDailyProgress(key, next)
    setProgress(next)
  }

  function anotherText() {
    primeAudio()
    setPracticeItem(dealPractice(level, practiceItem?.id))
    setDeal((value) => value + 1)
  }

  const todayLabel = new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'short' })

  return (
    <section className="panel">
      <h2>Lücken</h2>
      <p>
        Drag a word into the gap, or click a word and then the gap. A right word stays and plays a ding. A wrong word
        turns the gap red and goes back. The pool has extra words that do not belong.
      </p>
      <div className="mode-row" role="group" aria-label="Level">
        {['B1', 'B2'].map((entry) => (
          <button
            key={entry}
            type="button"
            className={level === entry ? 'btn btn-red' : 'btn'}
            aria-pressed={level === entry}
            onClick={() => {
              primeAudio()
              setLevel(entry)
            }}
          >
            {entry}
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
          }}
        >
          Daily
        </button>
        <button
          type="button"
          className={mode === 'practice' ? 'btn btn-gold' : 'btn'}
          aria-pressed={mode === 'practice'}
          onClick={() => {
            primeAudio()
            setMode('practice')
          }}
        >
          Practice
        </button>
      </div>
      <p className="hint">
        {mode === 'daily'
          ? `Today (${todayLabel}), ${level}: ${dailyDone ? 'this text is done' : 'one text for today'}.`
          : `Practice: ${finishedCount} text${finishedCount === 1 ? '' : 's'} finished.`}
      </p>
      {item ? (
        <ClozeBoard
          key={`${mode}-${level}-${item.id}-${deal}`}
          item={item}
          chips={chips}
          startFilled={mode === 'daily' && dailyDone}
          onFinished={() => {
            if (mode === 'daily') markDailyDone()
            else setFinishedCount((count) => count + 1)
          }}
        />
      ) : null}
      {mode === 'practice' && item ? (
        <p>
          <button type="button" className="btn" onClick={anotherText}>
            Another text
          </button>
        </p>
      ) : null}
    </section>
  )
}
