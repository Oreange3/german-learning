import { Link } from 'react-router-dom'
import FillTable from '../components/FillTable.jsx'
import { casePracticeDrills } from '../data/cases.js'

export default function PracticeCases() {
  return (
    <section className="panel">
      <p className="crumb">
        <Link to="/practice">Practice</Link> » Cases
      </p>
      <h2>Case tables</h2>
      <p>
        Fill he / she / it / they, then his / her, then that. These are the same blanks as in the
        Cases lessons. Check, show answers, clear, and do them again.
      </p>
      <p>
        <Link className="btn btn-gold" to="/study/cases-pronouns">
          Open the pronoun lesson
        </Link>
        <Link className="btn" to="/study/cases-genitive-verbs">
          Genitive verbs
        </Link>
      </p>

      {casePracticeDrills.map((drill) => (
        <FillTable
          key={drill.caption}
          caption={drill.caption}
          help={drill.help}
          headers={drill.headers}
          rows={drill.rows}
        />
      ))}
    </section>
  )
}
