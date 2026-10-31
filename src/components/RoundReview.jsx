import { useEffect, useState } from 'react'

export default function RoundReview({ slides, onNewRound }) {
  const [index, setIndex] = useState(0)
  const last = Math.max(0, slides.length - 1)
  const safe = Math.min(index, last)
  const slide = slides[safe]

  useEffect(() => {
    function onKey(event) {
      const tag = event.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || event.target?.isContentEditable) return
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setIndex((current) => Math.max(0, current - 1))
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        setIndex((current) => Math.min(last, current + 1))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [last])

  if (!slide) return null

  const tone = slide.skipped ? 'is-skipped' : slide.correct ? 'is-right' : 'is-wrong'

  return (
    <section className={`flash review-slide ${tone}`} aria-label="Review">
      <p className="review-count">
        card {safe + 1} of {slides.length}
      </p>
      {slide.kicker ? <p className="flash-kicker">{slide.kicker}</p> : null}
      <p className="flash-word" lang="de">
        {slide.prompt}
      </p>
      {slide.skipped ? (
        <>
          <p className="review-line">Skipped</p>
          <p className="review-line">
            Your action: <strong>Unsure</strong>
          </p>
          <p className="review-line">
            Right answer: <strong lang="de">{slide.answer}</strong>
          </p>
          {slide.translation ? <p className="review-line review-translation">Translation: {slide.translation}</p> : null}
        </>
      ) : (
        <>
          <p className="review-line">
            Your answer: <strong lang="de">{slide.picked}</strong>
          </p>
          <p className="review-line">
            Right answer: <strong lang="de">{slide.answer}</strong>
          </p>
        </>
      )}
      <div className="review-nav">
        <button
          type="button"
          className="btn"
          disabled={safe === 0}
          onClick={() => setIndex(safe - 1)}
          aria-label="Previous card"
        >
          ←
        </button>
        <button
          type="button"
          className="btn"
          disabled={safe === last}
          onClick={() => setIndex(safe + 1)}
          aria-label="Next card"
        >
          →
        </button>
      </div>
      {onNewRound ? (
        <p>
          <button type="button" className="btn btn-gold" onClick={onNewRound}>
            New round
          </button>
        </p>
      ) : null}
    </section>
  )
}
