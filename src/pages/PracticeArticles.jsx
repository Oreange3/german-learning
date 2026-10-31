import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { displayHeadword, nounsWithGender } from '../data/words.js'
import { requeueMiss } from '../lib/drill.js'
import { shuffle } from '../lib/text.js'

function nextDeck() {
  return shuffle(nounsWithGender)
}

export default function PracticeArticles() {
  const [deck, setDeck] = useState(nextDeck)
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState('')
  const [correct, setCorrect] = useState(0)
  const [asked, setAsked] = useState(0)
  const misses = useRef({})

  const word = deck[index] || nounsWithGender[0]
  const locked = Boolean(picked)
  const isRight = picked && picked === word.article

  function choose(article) {
    if (locked) return
    setPicked(article)
    setAsked((n) => n + 1)
    if (article === word.article) setCorrect((n) => n + 1)
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
    setPicked('')
  }

  return (
    <section className="panel">
      <p className="crumb">
        <Link to="/practice">Practice</Link> » der / die / das
      </p>
      <h2>Pick the article</h2>
      <p>
        Score: <strong>{correct}</strong> / {asked}
        {asked > 0 ? ` (${Math.round((correct / asked) * 100)}%)` : ''} · word {index + 1} of{' '}
        {deck.length}
      </p>

      <div className="quiz-stage">
        <p className="quiz-word">{word.de}</p>
        <p className="quiz-hint">
          {locked ? `English: ${word.en[0]}` : 'Article first. English after you answer.'}
        </p>
        {locked && word.note ? <p className="hint">{word.note}</p> : null}
      </div>

      <div className="article-row">
        {['der', 'die', 'das'].map((article) => {
          let extra = ''
          if (locked) {
            if (article === word.article) extra = ' right'
            else if (article === picked) extra = ' wrong'
          }
          return (
            <button
              key={article}
              type="button"
              className={`article-btn ${article}${extra}`}
              onClick={() => choose(article)}
              disabled={locked}
            >
              {article}
            </button>
          )
        })}
      </div>

      {locked && (
        <p className={isRight ? 'quiz-ok' : 'quiz-bad'}>
          {isRight ? 'Richtig!' : `Falsch — it is ${displayHeadword(word)}.`}
        </p>
      )}

      <p className="form-actions">
        <button className="btn btn-gold" type="button" onClick={goNext} disabled={!locked}>
          Next word
        </button>
        <Link className="btn" to={`/dictionary?q=${encodeURIComponent(word.de)}`}>
          Open in dictionary
        </Link>
      </p>
    </section>
  )
}
