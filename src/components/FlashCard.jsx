import { useState } from 'react'
import { playResult, primeAudio } from '../lib/sound.js'

export default function FlashCard({
  kicker,
  prompt,
  hint,
  choices,
  answer,
  nextLabel,
  onAnswered,
  onNext,
}) {
  const [picked, setPicked] = useState(null)
  const revealed = picked !== null
  const right = picked === answer

  function choose(choice) {
    if (revealed) return
    primeAudio()
    setPicked(choice)
    const correct = choice === answer
    playResult(correct)
    onAnswered?.({ correct, picked: choice })
  }

  return (
    <article className={`flash${revealed ? (right ? ' is-right' : ' is-wrong') : ''}`}>
      {kicker ? <p className="flash-kicker">{kicker}</p> : null}
      <p className="flash-word" lang="de">
        {prompt}
      </p>
      {hint ? <p className="flash-hint">{hint}</p> : null}
      <div className="flash-choices" role="group" aria-label="Answers">
        {choices.map((choice) => {
          let mark = ''
          if (revealed && choice === answer) mark = ' · correct'
          else if (revealed && choice === picked) mark = ' · your pick'
          return (
            <button
              key={choice}
              type="button"
              className={`choice-btn${revealed && choice === answer ? ' choice-right' : ''}${
                revealed && choice === picked && choice !== answer ? ' choice-wrong' : ''
              }`}
              onClick={() => choose(choice)}
              disabled={revealed}
            >
              <span lang="de">{choice}</span>
              {mark}
            </button>
          )
        })}
      </div>
      {revealed ? (
        <p className="flash-result" role="status">
          {right ? 'Right.' : 'Not quite.'} The answer is <strong lang="de">{answer}</strong>.
        </p>
      ) : (
        <p className="hint">Choose an answer. A correct one plays a short ding.</p>
      )}
      {revealed && onNext ? (
        <p>
          <button type="button" className="btn btn-gold" onClick={onNext}>
            {nextLabel || 'Next'}
          </button>
        </p>
      ) : null}
    </article>
  )
}
