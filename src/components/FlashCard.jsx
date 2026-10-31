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
  settled,
}) {
  const [picked, setPicked] = useState(null)
  const [unsure, setUnsure] = useState(false)
  const [showTranslation, setShowTranslation] = useState(false)
  const shownPicked = settled ? (settled.skipped ? null : settled.picked) : picked
  const shownUnsure = settled ? Boolean(settled.skipped) : unsure
  const revealed = Boolean(settled) || shownPicked !== null || shownUnsure
  const right = shownPicked === answer
  const onNextRef = useRef(onNext)

  useEffect(() => {
    onNextRef.current = onNext
  }, [onNext])

  useEffect(() => {
    if (settled || !unsure) return undefined
    const timer = setTimeout(() => onNextRef.current?.(true), 900)
    return () => clearTimeout(timer)
  }, [settled, unsure])

  function choose(choice) {
    if (settled || revealed) return
    primeAudio()
    setPicked(choice)
    const correct = choice === answer
    playResult(correct)
    onAnswered?.({ correct, picked: choice, skipped: false })
  }

  function markUnsure() {
    if (settled || revealed) return
    setUnsure(true)
    onAnswered?.({ correct: false, picked: 'Unsure', skipped: true })
  }

  const tone = shownUnsure ? ' is-skipped' : revealed ? (right ? ' is-right' : ' is-wrong') : ''

  return (
    <article className={`flash${tone}`}>
      {kicker ? <p className="flash-kicker">{kicker}</p> : null}
      <p className="flash-word" lang="de">
        {String(prompt)
          .split('___')
          .map((bit, index, bits) => (
            <span key={`${bit}-${index}`}>
              {bit}
              {index < bits.length - 1 ? (
                <span className="article-gap" aria-label="article">
                  ___
                </span>
              ) : null}
            </span>
          ))}
      </p>
      <div className="flash-choices" role="group" aria-label="Answers">
        {choices.map((choice) => {
          let mark = ''
          if (!shownUnsure && revealed && choice === answer) mark = ' · correct'
          else if (!shownUnsure && revealed && choice === shownPicked) mark = ' · your pick'
          const showRight = !shownUnsure && revealed && choice === answer
          const showWrong = !shownUnsure && revealed && choice === shownPicked && choice !== answer
          const showAnswer = shownUnsure && choice === answer
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
        {revealed || settled ? null : (
          <button type="button" className="btn" onClick={markUnsure}>
            Unsure
          </button>
        )}
      </p>
      {revealed ? (
        <p className="flash-result" role="status">
          {shownUnsure ? (
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
      {revealed && !settled && !shownUnsure && onNext ? (
        <p>
          <button type="button" className="btn btn-gold" onClick={() => onNext(false)}>
            {nextLabel || 'Next'}
          </button>
        </p>
      ) : null}
    </article>
  )
}
