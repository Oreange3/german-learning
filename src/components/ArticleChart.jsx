import { useId, useState } from 'react'
import chart from '../assets/article-cases.jpg'
import { caseNotes, chartCaption, chartSource } from '../data/caseNotes.js'

const CHART_ALT =
  'German article chart. Columns M, F, N, and PL. Nominative the: der, die, das, die. Nominative a: ein, eine, ein, meine. Accusative the: den, die, das, die. Accusative a: einen, eine, ein, meine. Dative the: dem, der, dem, den. Dative a: einem, einer, einem, meinen. Genitive the: des, der, des, der. Genitive a: eines, einer, eines, meiner. Colored letters mark the endings.'

export default function ArticleChart({ withNotes = false }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  function onKeyDown(event) {
    if (event.key === 'Escape') setOpen(false)
  }

  return (
    <div className="chart-drop" onKeyDown={onKeyDown}>
      <button
        type="button"
        className={open ? 'btn btn-gold' : 'btn'}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Article chart ▾' : 'Article chart ▸'}
      </button>
      {open ? (
        <div className="chart-drop-panel" id={panelId} role="region" aria-label="Article chart">
          <img src={chart} alt={CHART_ALT} />
          <p className="chart-caption">{chartCaption}</p>
          {withNotes
            ? caseNotes.map((note) => (
                <p key={note} className="chart-note">
                  {note}
                </p>
              ))
            : null}
          {withNotes ? <p className="chart-caption">{chartSource}</p> : null}
        </div>
      ) : null}
    </div>
  )
}
