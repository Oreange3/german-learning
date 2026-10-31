import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { displayHeadword, translatable } from '../data/words.js'
import { requeueMiss } from '../lib/drill.js'
import { answersMatch, shuffle } from '../lib/text.js'

function nextDeck() {
  return shuffle(translatable)
}

function promptFor(word, direction) {
  return direction === 'de-en' ? displayHeadword(word) : word.en[0]
}

function accepted(word, direction) {
  if (direction === 'de-en') return word.en
  const forms = [word.de]
  if (word.article) forms.push(`${word.article} ${word.de}`)
  return forms
}

export default function PracticeTranslate() {
  const [direction, setDirection] = useState('de-en')
  const [deck, setDeck] = useState(nextDeck)
  const [index, setIndex] = useState(0)
  const [guess, setGuess] = useState('')
  const [verdict, setVerdict] = useState('')
  const [correct, setCorrect] = useState(0)
  const [asked, setAsked] = useState(0)
  const misses = useRef({})

  const word = deck[index] || translatable[0]
  const locked = Boolean(verdict)

  function check(event) {
    event.preventDefault()
    if (locked) return
    const ok = answersMatch(guess, accepted(word, direction))
    setVerdict(ok ? 'right' : 'wrong')
    setAsked((n) => n + 1)
    if (ok) setCorrect((n) => n + 1)
    else setDeck((prev) => requeueMiss(prev, index, word, misses.current))
  }

  function goNext() {
    const nextIndex = index + 1
    if (nextIndex >= deck.length) {
      setDeck(nextDeck())
      setIndex(0)
    } else {
      setIndex(nextIndex)
    }
    setGuess('')
    setVerdict('')
  }

  function flip(next) {
    setDirection(next)
    setGuess('')
    setVerdict('')
  }

  const answerText =
    direction === 'de-en' ? word.en.join(' / ') : displayHeadword(word)

  return (
    <section className="panel">
      <p className="crumb">
        <Link to="/practice">Practice</Link> » Translate
      </p>
      <h2>Translate the word</h2>
      <p>
        Score: <strong>{correct}</strong> / {asked}
        {asked > 0 ? ` (${Math.round((correct / asked) * 100)}%)` : ''}
      </p>
      <p>
        <button
          type="button"
          className={direction === 'de-en' ? 'btn btn-gold' : 'btn'}
          onClick={() => flip('de-en')}
        >
          German → English
        </button>
        <button
          type="button"
          className={direction === 'en-de' ? 'btn btn-gold' : 'btn'}
          onClick={() => flip('en-de')}
        >
          English → German
        </button>
      </p>

      <div className="quiz-stage">
        <p className="quiz-word">{promptFor(word, direction)}</p>
        <p className="quiz-hint">{word.pos}{word.note ? ` · ${word.note}` : ''}</p>
      </div>

      <form className="auth-form" onSubmit={check}>
        <label>
          Your translation
          <input
            value={guess}
            onChange={(event) => setGuess(event.target.value)}
            disabled={locked}
            autoComplete="off"
            autoCapitalize="off"
          />
        </label>
        {verdict === 'right' && <p className="quiz-ok">Richtig!</p>}
        {verdict === 'wrong' && (
          <p className="quiz-bad">
            Not quite. Answer: <strong>{answerText}</strong>
          </p>
        )}
        <p className="form-actions">
          <button className="btn btn-gold" type="submit" disabled={locked || !guess.trim()}>
            Check
          </button>
          <button className="btn" type="button" onClick={goNext} disabled={!locked}>
            Next word
          </button>
          <Link className="btn" to={`/dictionary?q=${encodeURIComponent(word.de)}`}>
            Dictionary
          </Link>
        </p>
      </form>
    </section>
  )
}
