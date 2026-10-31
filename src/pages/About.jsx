export default function About() {
  return (
    <section className="panel">
      <h2>About this site</h2>
      <p>
        Hallo Deutsch is a small German classroom in the browser. The main path is{' '}
        <strong>Hallo Kurs</strong>: A1–B1 follow Menschen (8 modules × 3 lessons each);
        B2 is a shorter 12-lesson Aspekte/Sicher-style starter. Same page shape every
        time: Einstieg → Wortfeld → Grammatik → Redemittel → Abschluss. Extra grammar
        lives in the Study lab. Practice drills and original exam PDFs sit in their own
        tabs.
      </p>
      <p>
        Anyone can browse as a guest. Notes and course ticks stay on this computer
        (localStorage only). Level maps cite Goethe, telc, and ÖSD plus publisher TOCs
        (Menschen, Schritte, Netzwerk, studio [21], Aspekte neu).
      </p>
    </section>
  )
}
