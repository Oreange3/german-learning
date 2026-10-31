export default function DataTable({ caption, headers, rows, className = '' }) {
  if (!headers?.length || !rows?.length) return null
  return (
    <div className={`table-wrap ${className}`.trim()}>
      {caption ? <h3>{caption}</h3> : null}
      <table className="grid-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, index) => (
                <td key={`${rowIndex}-${index}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
