import { Link } from 'react-router-dom'

export default function Practice() {
  return (
    <section className="panel">
      <p className="kicker">Drills</p>
      <h2>Practice</h2>
      <p>
        After a Course lesson, lock the forms here. A miss comes back a few cards later, twice at
        most — the same idea as a workbook that repeats the item you got wrong. Full timed papers
        are on <Link to="/exam">Exam</Link>.
      </p>
      <ul className="program-grid">
        <li className="program-card">
          <h3>der / die / das</h3>
          <p>
            You get a noun. Pick the article. This is the classic German headache, so it gets its
            own game.
          </p>
          <Link className="btn btn-gold" to="/practice/articles">
            Start articles
          </Link>
        </li>
        <li className="program-card">
          <h3>Cases — he / she / it / they</h3>
          <p>
            Fill nominative, accusative, dative, and genitive. Then his/her and that. This is the
            genitive gym.
          </p>
          <Link className="btn btn-gold" to="/practice/cases">
            Start case tables
          </Link>
        </li>
        <li className="program-card">
          <h3>Translate</h3>
          <p>
            A word from the classroom dictionary. Type the other language. Flip German → English
            or English → German.
          </p>
          <Link className="btn btn-gold" to="/practice/translate">
            Start translate
          </Link>
        </li>
      </ul>
    </section>
  )
}
