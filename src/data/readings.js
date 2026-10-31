/**
 * Original B1/B2 reading practice written for this site.
 * The shape (a short text, then multiple choice or true/false) follows
 * public exam layouts only. These passages, questions, and answers are
 * not Goethe-Institut materials and are not copied from any exam or website.
 */

export const readings = [
  {
    id: 'b1-bakery',
    level: 'B1',
    title: 'Neue Zeiten in der Bäckerei',
    text: 'Die Bäckerei Sommer ändert die Öffnungszeiten. Ab Montag macht der Laden um 7 Uhr auf und um 18 Uhr zu. Samstags ist nur bis 12 Uhr geöffnet. Sonntags bleibt die Bäckerei geschlossen. Brötchen kann man schon ab 6:30 Uhr an der Seitentür kaufen.',
    questions: [
      {
        id: 'b1-bakery-1',
        prompt: 'Ab wann gelten die neuen Zeiten?',
        choices: ['Ab Montag', 'Ab sofort', 'Nur im Dezember'],
        answer: 'Ab Montag',
      },
      {
        id: 'b1-bakery-2',
        prompt: 'Sonntags ist die Bäckerei geöffnet.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Falsch',
      },
      {
        id: 'b1-bakery-3',
        prompt: 'Bis wann hat der Laden samstags auf?',
        choices: ['Bis 12 Uhr', 'Bis 18 Uhr', 'Bis 7 Uhr'],
        answer: 'Bis 12 Uhr',
      },
      {
        id: 'b1-bakery-4',
        prompt: 'Wo kann man früh Brötchen kaufen?',
        choices: ['An der Seitentür', 'Im Supermarkt', 'Am Bahnhof'],
        answer: 'An der Seitentür',
      },
    ],
  },
  {
    id: 'b1-picnic',
    level: 'B1',
    title: 'Mail von Tim',
    text: 'Hallo Lena, am Samstag machen wir ein Picknick im Stadtpark. Wir treffen uns um 14 Uhr am Springbrunnen. Bitte bring einen Kuchen oder etwas zu trinken mit. Wenn es regnet, gehen wir in das Café am Park. Sag mir bitte bis Freitag Bescheid. Liebe Grüße, Tim',
    questions: [
      {
        id: 'b1-picnic-1',
        prompt: 'Wo ist das Picknick?',
        choices: ['Im Stadtpark', 'Bei Lena zu Hause', 'Am Bahnhof'],
        answer: 'Im Stadtpark',
      },
      {
        id: 'b1-picnic-2',
        prompt: 'Der Treffpunkt ist der Springbrunnen.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Richtig',
      },
      {
        id: 'b1-picnic-3',
        prompt: 'Was soll Lena mitbringen?',
        choices: ['Kuchen oder etwas zu trinken', 'Einen Regenschirm und Stühle', 'Das Geschirr vom Café'],
        answer: 'Kuchen oder etwas zu trinken',
      },
      {
        id: 'b1-picnic-4',
        prompt: 'Was passiert, wenn es regnet?',
        choices: ['Sie gehen ins Café am Park', 'Sie bleiben zu Hause', 'Sie treffen sich um 10 Uhr'],
        answer: 'Sie gehen ins Café am Park',
      },
    ],
  },
  {
    id: 'b1-bike',
    level: 'B1',
    title: 'Fahrradkeller',
    text: 'Am Donnerstag repariert der Fahrradkeller kostenlos kleine Schäden. Die Werkstatt ist in der Schulstraße 4, im Hof. Bitte kommt zwischen 16 und 19 Uhr. Wer ein Rad abgibt, bekommt eine Nummer. Die Reparatur dauert etwa 20 Minuten. Neue Reifen muss man selbst bezahlen.',
    questions: [
      {
        id: 'b1-bike-1',
        prompt: 'Wann ist die Werkstatt offen?',
        choices: ['Donnerstag, 16 bis 19 Uhr', 'Jeden Morgen', 'Nur am Sonntag'],
        answer: 'Donnerstag, 16 bis 19 Uhr',
      },
      {
        id: 'b1-bike-2',
        prompt: 'Die Adresse ist Schulstraße 4.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Richtig',
      },
      {
        id: 'b1-bike-3',
        prompt: 'Was ist kostenlos?',
        choices: ['Kleine Schäden', 'Ein neues Rad', 'Neue Reifen'],
        answer: 'Kleine Schäden',
      },
      {
        id: 'b1-bike-4',
        prompt: 'Wie lange dauert die Reparatur ungefähr?',
        choices: ['20 Minuten', 'Zwei Stunden', 'Den ganzen Tag'],
        answer: '20 Minuten',
      },
    ],
  },
  {
    id: 'b1-film',
    level: 'B1',
    title: 'Filmabend',
    text: 'Morgen zeigt der Deutschkurs den Film „Sommer in Köln“. Der Film beginnt um 18:15 Uhr im Raum 2. Der Eintritt ist frei, aber es gibt nur 25 Plätze. Wer kommen will, schreibt seinen Namen an die Liste neben der Tür. Nach dem Film sprechen wir 15 Minuten über die Geschichte. Getränke stehen im Flur.',
    questions: [
      {
        id: 'b1-film-1',
        prompt: 'Wo läuft der Film?',
        choices: ['Im Raum 2', 'Im Kino in der Stadt', 'Im Flur'],
        answer: 'Im Raum 2',
      },
      {
        id: 'b1-film-2',
        prompt: 'Der Eintritt kostet 5 Euro.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Falsch',
      },
      {
        id: 'b1-film-3',
        prompt: 'Wie viele Plätze gibt es?',
        choices: ['25', '15', '18'],
        answer: '25',
      },
      {
        id: 'b1-film-4',
        prompt: 'Was macht man nach dem Film?',
        choices: ['15 Minuten über die Geschichte sprechen', 'Sofort nach Hause gehen', 'Einen Test schreiben'],
        answer: '15 Minuten über die Geschichte sprechen',
      },
    ],
  },
  {
    id: 'b2-home',
    level: 'B2',
    title: 'Zwei Tage zu Hause',
    text: 'Viele Firmen lassen ihre Mitarbeiter an zwei Tagen pro Woche zu Hause arbeiten. Der Weg ins Büro fällt dann weg, und die Leute sparen Zeit. Manche vermissen aber das Gespräch in der Kaffeeküche. Das Team sollte gemeinsam festlegen, an welchen Tagen alle im Büro sind. Wer zu Hause bleibt, muss erreichbar sein und Aufgaben klar übergeben. Sonst wird aus Freiheit schnell Chaos.',
    questions: [
      {
        id: 'b2-home-1',
        prompt: 'Wie oft bleiben viele Mitarbeiter zu Hause?',
        choices: ['An zwei Tagen pro Woche', 'Den ganzen Monat', 'Nur am Wochenende'],
        answer: 'An zwei Tagen pro Woche',
      },
      {
        id: 'b2-home-2',
        prompt: 'Alle finden Heimarbeit nur positiv.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Falsch',
      },
      {
        id: 'b2-home-3',
        prompt: 'Was soll das Team gemeinsam festlegen?',
        choices: ['An welchen Tagen alle im Büro sind', 'Wer die Kaffeeküche putzt', 'Das Gehalt für zu Hause'],
        answer: 'An welchen Tagen alle im Büro sind',
      },
      {
        id: 'b2-home-4',
        prompt: 'Was wird aus Freiheit, wenn Aufgaben unklar bleiben?',
        choices: ['Schnell Chaos', 'Automatisch mehr Geld', 'Ein freier Montag'],
        answer: 'Schnell Chaos',
      },
    ],
  },
  {
    id: 'b2-park',
    level: 'B2',
    title: 'Spielplatz an der Lindenstraße',
    text: 'Die Anwohner der Lindenstraße haben am Dienstag über den neuen Spielplatz gesprochen. Die meisten wollen die alten Bänke behalten und nur die Schaukeln erneuern. Eine kleine Gruppe bittet um mehr Licht am Abend, weil der Weg dunkel ist. Die Stadt prüft die Kosten bis Ende Mai. Bis dahin kann jeder einen Vorschlag schriftlich im Bürgerbüro abgeben. Ein endgültiger Plan liegt noch nicht vor.',
    questions: [
      {
        id: 'b2-park-1',
        prompt: 'Was wollen die meisten Anwohner?',
        choices: ['Die Bänke behalten und die Schaukeln erneuern', 'Den Spielplatz schließen', 'Alle Bänke sofort entfernen'],
        answer: 'Die Bänke behalten und die Schaukeln erneuern',
      },
      {
        id: 'b2-park-2',
        prompt: 'Warum wünscht eine Gruppe mehr Licht?',
        choices: ['Weil der Weg abends dunkel ist', 'Weil die Schaukeln zu laut sind', 'Weil das Bürgerbüro umzieht'],
        answer: 'Weil der Weg abends dunkel ist',
      },
      {
        id: 'b2-park-3',
        prompt: 'Der endgültige Plan ist schon fertig.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Falsch',
      },
      {
        id: 'b2-park-4',
        prompt: 'Bis wann prüft die Stadt die Kosten?',
        choices: ['Bis Ende Mai', 'Bis Dienstag', 'Bis nächste Woche'],
        answer: 'Bis Ende Mai',
      },
    ],
  },
  {
    id: 'b2-train',
    level: 'B2',
    title: 'Verspätung nach Hamburg',
    text: 'Der Regionalzug nach Hamburg hatte gestern vierzig Minuten Verspätung. Ein defektes Signal zwischen Lüneburg und Harburg war der Grund. Die Bahn bot keine Taxis an, weil der nächste Zug schon im Bahnhof wartete. Fahrgäste mit einer Reservierung für einen Anschlusszug können die Fahrkarte einen Tag länger nutzen. Wer eine Bescheinigung braucht, findet ein Formular am Schalter.',
    questions: [
      {
        id: 'b2-train-1',
        prompt: 'Warum kam der Zug zu spät?',
        choices: ['Wegen eines defekten Signals', 'Wegen eines Streiks', 'Wegen Schnees in Hamburg'],
        answer: 'Wegen eines defekten Signals',
      },
      {
        id: 'b2-train-2',
        prompt: 'Die Bahn hat Taxis bezahlt.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Falsch',
      },
      {
        id: 'b2-train-3',
        prompt: 'Wie lange dürfen manche die Fahrkarte noch nutzen?',
        choices: ['Einen Tag länger', 'Einen Monat', 'Nur bis gestern Abend'],
        answer: 'Einen Tag länger',
      },
      {
        id: 'b2-train-4',
        prompt: 'Wo gibt es das Formular für eine Bescheinigung?',
        choices: ['Am Schalter', 'Nur im Taxi', 'Im Zug nach Lüneburg'],
        answer: 'Am Schalter',
      },
    ],
  },
  {
    id: 'b2-learn',
    level: 'B2',
    title: 'Sprache als Erwachsener',
    text: 'Erwachsene lernen eine Sprache anders als Kinder. Sie vergleichen oft mit ihrer Muttersprache und wollen jede Regel sofort verstehen. Das hilft manchmal, bremst aber, wenn man nur noch übersetzt und nicht mehr spricht. Kurze tägliche Wiederholung bringt mehr als ein langer Abend einmal in der Woche. Wer einen Fehler laut sagt und ihn danach korrigiert, merkt sich die Form besser. Am Anfang muss der Satz nicht perfekt sein.',
    questions: [
      {
        id: 'b2-learn-1',
        prompt: 'Was machen Erwachsene oft beim Lernen?',
        choices: ['Sie vergleichen mit der Muttersprache', 'Sie lernen nur wie kleine Kinder', 'Sie vermeiden jede Regel'],
        answer: 'Sie vergleichen mit der Muttersprache',
      },
      {
        id: 'b2-learn-2',
        prompt: 'Was bringt der Text mehr als einen langen Abend pro Woche?',
        choices: ['Kurze tägliche Wiederholung', 'Einen perfekten ersten Satz', 'Nur schriftliche Übersetzungen'],
        answer: 'Kurze tägliche Wiederholung',
      },
      {
        id: 'b2-learn-3',
        prompt: 'Am Anfang muss jeder Satz perfekt sein.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Falsch',
      },
      {
        id: 'b2-learn-4',
        prompt: 'Wie merkt man sich eine Form besser?',
        choices: ['Den Fehler laut sagen und danach korrigieren', 'Das Wort nur still lesen', 'Die Muttersprache nie benutzen'],
        answer: 'Den Fehler laut sagen und danach korrigieren',
      },
    ],
  },
]

export function readingsFor(level) {
  return readings.filter((item) => item.level === level)
}
