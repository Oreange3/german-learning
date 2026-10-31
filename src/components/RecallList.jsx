import { useState } from 'react'

function RecallBody({ caption, rows, revealLabel }) {
  const [open, setOpen] = useState(false)

  if (!rows?.length) return null

  return (
    <div className="table-wrap">
      {caption ? <h3>{caption}</h3> : null}
      <p>
        <button type="button" className="btn" onClick={() => setOpen((value) => !value)}>
          {open ? 'Hide meanings' : revealLabel}
        </button>
      </p>
      <table className="grid-table">
        <thead>
          <tr>
            <th>Deutsch</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`}>
              <td>
                <strong>{row[0]}</strong>
              </td>
              <td>{open ? row[1] : <span className="recall-blank">covered</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function RecallList({ resetKey, ...rest }) {
  return <RecallBody key={resetKey || 'recall'} {...rest} />
}
