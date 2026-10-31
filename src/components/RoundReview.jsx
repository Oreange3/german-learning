import { useEffect, useState } from 'react'
import FlashCard from './FlashCard.jsx'

function earlierIndex(cursor, slides, liveId) {
  if (!slides.length) return null
  const last = slides.length - 1
  if (cursor === null) {
    if (slides[last]?.id === liveId) return last > 0 ? last - 1 : null
    return last
  }
  return cursor > 0 ? cursor - 1 : null
}

function laterIndex(cursor, slides, liveId, review) {
  if (cursor === null) return null
  const last = slides.length - 1
  if (cursor < last) {
    const next = cursor + 1
    if (!review && slides[next]?.id === liveId) return null
    return next
  }
  return review ? null : null
}

export default function RoundReview({ slides, liveId, review = true, onNewRound, children }) {
  const [cursor, setCursor] = useState(() => (review ? Math.max(0, slides.length - 1) : null))
  const last = Math.max(0, slides.length - 1)
  const safe = cursor === null ? null : Math.min(cursor, last)
  const slide = safe === null ? null : slides[safe]
  const canBack = earlierIndex(safe, slides, liveId) !== null
  const canForward = safe !== null && (laterIndex(safe, slides, liveId, review) !== null || !review)

  useEffect(() => {
    setCursor(review ? Math.max(0, slides.length - 1) : null)
  }, [review])

  useEffect(() => {
    function onKey(event) {
      const tag = event.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || event.target?.isContentEditable) return
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setCursor((current) => {
          const next = earlierIndex(current, slides, liveId)
          return next === null ? current : next
        })
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        setCursor((current) => {
          if (current === null) return null
          const next = laterIndex(current, slides, liveId, review)
          return next === null ? (review ? current : null) : next
        })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [liveId, review, slides])

  function goBack() {
    const next = earlierIndex(safe, slides, liveId)
    if (next !== null) setCursor(next)
  }

  function goForward() {
    if (safe === null) return
    const next = laterIndex(safe, slides, liveId, review)
    if (next === null && review) return
    setCursor(next)
  }

  const passage = slide?.passage
  const total = slides.length
  const count = total && safe !== null ? `card ${safe + 1} of ${total}` : null

  return (
    <div className="slide-row">
      <button type="button" className="slide-arrow" aria-label="Previous card" disabled={!canBack} onClick={goBack}>
        ←
      </button>
      <div className="slide-body">
        {passage ? (
          <article className="passage">
            <h3 lang="de">{passage.title}</h3>
            <p lang="de">{passage.text}</p>
          </article>
        ) : null}
        {count ? <p className="review-count">{count}</p> : null}
        {slide ? (
          <FlashCard
            key={slide.id}
            kicker={slide.kicker}
            prompt={slide.prompt}
            translation={slide.translation}
            choices={slide.choices || []}
            answer={slide.answer}
            settled={{ picked: slide.picked, skipped: slide.skipped }}
          />
        ) : (
          children
        )}
        {review && onNewRound ? (
          <p>
            <button type="button" className="btn btn-gold" onClick={onNewRound}>
              New round
            </button>
          </p>
        ) : null}
      </div>
      <button type="button" className="slide-arrow" aria-label="Next card" disabled={!canForward} onClick={goForward}>
        →
      </button>
    </div>
  )
}
