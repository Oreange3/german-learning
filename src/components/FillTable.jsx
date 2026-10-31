import { useMemo, useState } from 'react'
import { answersMatch } from '../lib/text.js'
import { answersFor, isBlankCell } from '../lib/drill.js'

export default function FillTable({ caption, help, headers, rows }) {
  const blanks = useMemo(() => {
    const keys = []
    rows.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (isBlankCell(cell)) keys.push(`${r}-${c}`)
      })
    })
    return keys
  }, [rows])

  const [values, setValues] = useState({})
  const [checked, setChecked] = useState(false)
  const [revealed, setRevealed] = useState(false)

  function setValue(key, value) {
    setValues((prev) => ({ ...prev, [key]: value }))
    setChecked(false)
    setRevealed(false)
  }

  function check() {
    setChecked(true)
  }

  function reveal() {
    const next = { ...values }
    rows.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (isBlankCell(cell)) {
          const [first] = answersFor(cell)
          next[`${r}-${c}`] = first
        }
      })
    })
    setValues(next)
    setRevealed(true)
    setChecked(true)
  }

  function reset() {
    setValues({})
    setChecked(false)
    setRevealed(false)
  }

  let right = 0
  if (checked) {
    rows.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (isBlankCell(cell) && answersMatch(values[`${r}-${c}`] || '', answersFor(cell))) {
          right += 1
        }
      })
    })
  }

  return (
    <div className="drill-block">
      {caption && <h3>{caption}</h3>}
      {help && <p className="hint">{help}</p>}
      <table className="grid-table drill-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={`r-${r}`}>
              {row.map((cell, c) => {
                if (!isBlankCell(cell)) {
                  return <td key={`${r}-${c}`}>{cell}</td>
                }
                const key = `${r}-${c}`
                const guess = values[key] || ''
                const ok = answersMatch(guess, answersFor(cell))
                let cls = 'fill-wrap'
                if (checked && guess) cls += ok ? ' cell-ok' : ' cell-bad'
                if (checked && !guess) cls += ' cell-bad'
                return (
                  <td key={key} className={cls}>
                    <input
                      className="fill-input"
                      value={guess}
                      onChange={(event) => setValue(key, event.target.value)}
                      aria-label={`${headers[c] || 'answer'} row ${r + 1}`}
                      autoComplete="off"
                      autoCapitalize="off"
                    />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="form-actions">
        <button className="btn btn-gold" type="button" onClick={check}>
          Check table
        </button>
        <button className="btn" type="button" onClick={reveal}>
          Show answers
        </button>
        <button className="btn" type="button" onClick={reset}>
          Clear
        </button>
      </p>
      {checked && (
        <p className={right === blanks.length ? 'quiz-ok' : 'quiz-bad'}>
          {revealed
            ? 'Answers filled in. Copy them into your head, then clear and try again.'
            : `${right} / ${blanks.length} blanks right.`}
        </p>
      )}
    </div>
  )
}
