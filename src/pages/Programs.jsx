import { Link, useParams } from 'react-router-dom'
import { getLesson, programs } from '../data/courses.js'
import { examStepCount } from '../data/examPrep.js'

function stepTo(step) {
  if (step.kind === 'course') return `/course/${step.id}`
  if (step.kind === 'lesson') return `/study/${step.id}`
  if (step.kind === 'practice') return `/practice/${step.id}`
  if (step.kind === 'list') return `/dictionary/${step.id}`
  if (step.kind === 'exam') return `/exam/${step.id}`
  if (step.kind === 'level') {
    return step.segment ? `/levels/${step.id}/${step.segment}` : `/levels/${step.id}`
  }
  return '/course'
}

function stepLabel(step) {
  if (step.title) return step.title
  if (step.kind === 'lesson') return getLesson(step.id)?.title || step.id
  return step.id
}

export default function Programs() {
  const { programId } = useParams()
  const selected = programs.find((item) => item.id === programId) || null

  if (programId && !selected) {
    return (
      <section className="panel">
        <h2>Program not found</h2>
        <p>That track is not in this binder.</p>
        <Link className="btn btn-gold" to="/programs">
          Back to Programs
        </Link>
      </section>
    )
  }

  if (selected) {
    return (
      <section className="panel">
        <p className="crumb">
          <Link to="/programs">Programs</Link> » {selected.title}
        </p>
        <h2>{selected.title}</h2>
        <p>
          <span className="level-pill">{selected.level}</span> {selected.blurb}
        </p>
        {selected.why ? <p>{selected.why}</p> : null}
        {selected.loop ? (
          <p className="phase-why">
            <strong>The loop. </strong>
            {selected.loop}
          </p>
        ) : null}
        {selected.phases ? (
          selected.phases.map((phase, phaseIndex) => (
            <section key={phase.title} className="phase-block">
              <h3>
                {phaseIndex + 1}. {phase.title}
              </h3>
              <p className="phase-why">{phase.why}</p>
              <ol className="program-steps">
                {phase.steps.map((step) => (
                  <li key={`${phase.title}-${step.kind}-${step.id}`}>
                    <Link to={stepTo(step)}>{stepLabel(step)}</Link>
                  </li>
                ))}
              </ol>
            </section>
          ))
        ) : (
          <ol className="program-steps">
            {selected.steps.map((step, index) => (
              <li key={`${step.kind}-${step.id}-${index}`}>
                <span className="step-num">{index + 1}.</span>{' '}
                <Link to={stepTo(step)}>{stepLabel(step)}</Link>
              </li>
            ))}
          </ol>
        )}
        <p>
          <Link
            className="btn btn-gold"
            to={stepTo(selected.phases ? selected.phases[0].steps[0] : selected.steps[0])}
          >
            Start step 1
          </Link>
        </p>
      </section>
    )
  }

  return (
    <section className="panel">
      <h2>Programs</h2>
      <p>
        The exam loops follow the tasks Goethe, telc, and ÖSD actually mark. The shorter tracks
        below are grammar and vocabulary routes.
      </p>
      <ul className="program-grid">
        {programs.map((program) => (
          <li key={program.id} className="program-card">
            <h3>
              <Link to={`/programs/${program.id}`}>{program.title}</Link>
            </h3>
            <p>
              <span className="level-pill">{program.level}</span>{' '}
              {program.phases
                ? `${program.phases.length} phases · ${examStepCount(program)} steps`
                : `${program.steps.length} steps`}
            </p>
            <p>{program.blurb}</p>
            <Link className="btn btn-gold" to={`/programs/${program.id}`}>
              Open track
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
