import { useEffect, useRef, useState } from 'react'
import { playResult, primeAudio } from '../lib/sound.js'

export default function FlashCard({
  kicker,
  prompt,
  translation,
  choices,
  answer,
  nextLabel,
  onAnswered,
  onNext,
}) {
  const [picked, setPicked] = useState(null)
  const [unsure, setUnsure] = useState(false)
  const [showTranslation, setShowTranslation] = useState(false)
  const revealed = picked !== null || unsure
  const right = picked === answer
  const onNextRef = useRef(onNext)

  useEffect(() => {
    onNextRef.current = onNext
  }, [onNext])

  useEffect(() => {
    if (!unsure) return undefined
    const timer = setTimeout(() => onNextRef.current?.(true), 900)
    return () => clearTimeout(timer)
  }, [unsure])

  function choose(choice) {
    if (revealed) return
    primeAudio()
    setPicked(choice)
    const correct = choice === answer
    playResult(correct)
    onAnswered?.({ correct, picked: choice, skipped: false })
  }

  function markUnsure() {
    if (revealed) return
    setUnsure(true)
    onAnswered?.({ correct: false, picked: 'Unsure', skipped: true })
  }

  const tone = unsure ? ' is-skipped' : revealed ? (right ? ' is-right' : ' is-wrong') : ''

  return (
    <article className={`flash${tone}`}>
      {kicker ? <p className="flash-kicker">{kicker}</p> : null}
      <p className="flash-word" lang="de">
        {prompt}
      </p>
      <div className="flash-choices" role="group" aria-label="Answers">
        {choices.map((choice) => {
          let mark = ''
          if (!unsure && revealed && choice === answer) mark = ' · correct'
          else if (!unsure && revealed && choice === picked) mark = ' · your pick'
          const showRight = !unsure && revealed && choice === answer
          const showWrong = !unsure && revealed && choice === picked && choice !== answer
          const showAnswer = unsure && choice === answer
          return (
            <button
              key={choice}
              type="button"
              className={`choice-btn${showRight ? ' choice-right' : ''}${showWrong ? ' choice-wrong' : ''}${
                showAnswer ? ' choice-shown' : ''
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
      {showTranslation && translation ? <p className="flash-translation">{translation}</p> : null}
      <p className="flash-actions">
        <button type="button" className="btn" onClick={() => setShowTranslation((open) => !open)}>
          Show translation
        </button>
        {revealed ? null : (
          <button type="button" className="btn" onClick={markUnsure}>
            Unsure
          </button>
        )}
      </p>
      {revealed ? (
        <p className="flash-result" role="status">
          {unsure ? (
            <>
              Unsure. The answer is <strong lang="de">{answer}</strong>.
            </>
          ) : (
            <>
              {right ? 'Right.' : 'Not quite.'} The answer is <strong lang="de">{answer}</strong>.
            </>
          )}
        </p>
      ) : null}
      {revealed && !unsure && onNext ? (
        <p>
          <button type="button" className="btn btn-gold" onClick={() => onNext(false)}>
            {nextLabel || 'Next'}
          </button>
        </p>
      ) : null}
    </article>
  )
}
