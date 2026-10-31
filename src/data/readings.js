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
    en: 'The Sommer bakery is changing its opening hours. From Monday the shop opens at 7 and closes at 18. On Saturday it is only open until 12. On Sunday the bakery stays closed. You can buy rolls at the side door from 6:30.',
    questions: [
      {
        id: 'b1-bakery-1',
        prompt: 'Ab wann gelten die neuen Zeiten?',
        en: 'From when do the new hours apply?',
        choices: ['Ab Montag', 'Ab sofort', 'Nur im Dezember'],
        answer: 'Ab Montag',
      },
      {
        id: 'b1-bakery-2',
        prompt: 'Sonntags ist die Bäckerei geöffnet.',
        en: 'The bakery is open on Sunday.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Falsch',
      },
      {
        id: 'b1-bakery-3',
        prompt: 'Bis wann hat der Laden samstags auf?',
        en: 'Until when is the shop open on Saturday?',
        choices: ['Bis 12 Uhr', 'Bis 18 Uhr', 'Bis 7 Uhr'],
        answer: 'Bis 12 Uhr',
      },
      {
        id: 'b1-bakery-4',
        prompt: 'Wo kann man früh Brötchen kaufen?',
        en: 'Where can you buy rolls early?',
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
    en: 'Hello Lena, on Saturday we are having a picnic in the city park. We will meet at 14:00 by the fountain. Please bring a cake or something to drink. If it rains, we will go to the cafe by the park. Please tell me by Friday. Love, Tim',
    questions: [
      {
        id: 'b1-picnic-1',
        prompt: 'Wo ist das Picknick?',
        en: 'Where is the picnic?',
        choices: ['Im Stadtpark', 'Bei Lena zu Hause', 'Am Bahnhof'],
        answer: 'Im Stadtpark',
      },
      {
        id: 'b1-picnic-2',
        prompt: 'Der Treffpunkt ist der Springbrunnen.',
        en: 'The meeting place is the fountain.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Richtig',
      },
      {
        id: 'b1-picnic-3',
        prompt: 'Was soll Lena mitbringen?',
        en: 'What should Lena bring?',
        choices: ['Kuchen oder etwas zu trinken', 'Einen Regenschirm und Stühle', 'Das Geschirr vom Café'],
        answer: 'Kuchen oder etwas zu trinken',
      },
      {
        id: 'b1-picnic-4',
        prompt: 'Was passiert, wenn es regnet?',
        en: 'What happens if it rains?',
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
    en: 'On Thursday the bike cellar repairs small problems for free. The workshop is at Schulstraße 4, in the courtyard. Please come between 16:00 and 19:00. If you leave a bike, you get a number. The repair takes about 20 minutes. You have to pay for new tires yourself.',
    questions: [
      {
        id: 'b1-bike-1',
        prompt: 'Wann ist die Werkstatt offen?',
        en: 'When is the workshop open?',
        choices: ['Donnerstag, 16 bis 19 Uhr', 'Jeden Morgen', 'Nur am Sonntag'],
        answer: 'Donnerstag, 16 bis 19 Uhr',
      },
      {
        id: 'b1-bike-2',
        prompt: 'Die Adresse ist Schulstraße 4.',
        en: 'The address is Schulstraße 4.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Richtig',
      },
      {
        id: 'b1-bike-3',
        prompt: 'Was ist kostenlos?',
        en: 'What is free?',
        choices: ['Kleine Schäden', 'Ein neues Rad', 'Neue Reifen'],
        answer: 'Kleine Schäden',
      },
      {
        id: 'b1-bike-4',
        prompt: 'Wie lange dauert die Reparatur ungefähr?',
        en: 'About how long does the repair take?',
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
    en: 'Tomorrow the German class is showing the film "Summer in Cologne". The film starts at 18:15 in room 2. Entry is free, but there are only 25 seats. Anyone who wants to come writes their name on the list by the door. After the film we talk for 15 minutes about the story. Drinks are in the hallway.',
    questions: [
      {
        id: 'b1-film-1',
        prompt: 'Wo läuft der Film?',
        en: 'Where is the film showing?',
        choices: ['Im Raum 2', 'Im Kino in der Stadt', 'Im Flur'],
        answer: 'Im Raum 2',
      },
      {
        id: 'b1-film-2',
        prompt: 'Der Eintritt kostet 5 Euro.',
        en: 'Entry costs 5 euros.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Falsch',
      },
      {
        id: 'b1-film-3',
        prompt: 'Wie viele Plätze gibt es?',
        en: 'How many seats are there?',
        choices: ['25', '15', '18'],
        answer: '25',
      },
      {
        id: 'b1-film-4',
        prompt: 'Was macht man nach dem Film?',
        en: 'What do you do after the film?',
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
    en: 'Many companies let their staff work at home two days a week. The trip to the office drops away, and people save time. Some of them miss the conversation in the coffee kitchen, though. The team should decide together which days everyone is in the office. Anyone who stays home must be reachable and hand work over clearly. Otherwise freedom quickly turns into chaos.',
    questions: [
      {
        id: 'b2-home-1',
        prompt: 'Wie oft bleiben viele Mitarbeiter zu Hause?',
        en: 'How often do many employees stay home?',
        choices: ['An zwei Tagen pro Woche', 'Den ganzen Monat', 'Nur am Wochenende'],
        answer: 'An zwei Tagen pro Woche',
      },
      {
        id: 'b2-home-2',
        prompt: 'Alle finden Heimarbeit nur positiv.',
        en: 'Everyone finds working from home only positive.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Falsch',
      },
      {
        id: 'b2-home-3',
        prompt: 'Was soll das Team gemeinsam festlegen?',
        en: 'What should the team decide together?',
        choices: ['An welchen Tagen alle im Büro sind', 'Wer die Kaffeeküche putzt', 'Das Gehalt für zu Hause'],
        answer: 'An welchen Tagen alle im Büro sind',
      },
      {
        id: 'b2-home-4',
        prompt: 'Was wird aus Freiheit, wenn Aufgaben unklar bleiben?',
        en: 'What does freedom turn into if tasks stay unclear?',
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
    en: 'On Tuesday the residents of Lindenstraße talked about the new playground. Most of them want to keep the old benches and only replace the swings. A small group is asking for more light in the evening, because the path is dark. The city is checking the cost until the end of May. Until then anyone can hand in a written suggestion at the citizens office. A final plan is not ready yet.',
    questions: [
      {
        id: 'b2-park-1',
        prompt: 'Was wollen die meisten Anwohner?',
        en: 'What do most residents want?',
        choices: ['Die Bänke behalten und die Schaukeln erneuern', 'Den Spielplatz schließen', 'Alle Bänke sofort entfernen'],
        answer: 'Die Bänke behalten und die Schaukeln erneuern',
      },
      {
        id: 'b2-park-2',
        prompt: 'Warum wünscht eine Gruppe mehr Licht?',
        en: 'Why does one group want more light?',
        choices: ['Weil der Weg abends dunkel ist', 'Weil die Schaukeln zu laut sind', 'Weil das Bürgerbüro umzieht'],
        answer: 'Weil der Weg abends dunkel ist',
      },
      {
        id: 'b2-park-3',
        prompt: 'Der endgültige Plan ist schon fertig.',
        en: 'The final plan is already finished.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Falsch',
      },
      {
        id: 'b2-park-4',
        prompt: 'Bis wann prüft die Stadt die Kosten?',
        en: 'Until when is the city checking the cost?',
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
    en: 'The regional train to Hamburg was forty minutes late yesterday. A broken signal between Lüneburg and Harburg was the reason. The railway did not offer taxis, because the next train was already waiting at the station. Passengers with a reservation for a connecting train can use the ticket for one more day. Anyone who needs a confirmation will find a form at the counter.',
    questions: [
      {
        id: 'b2-train-1',
        prompt: 'Warum kam der Zug zu spät?',
        en: 'Why was the train late?',
        choices: ['Wegen eines defekten Signals', 'Wegen eines Streiks', 'Wegen Schnees in Hamburg'],
        answer: 'Wegen eines defekten Signals',
      },
      {
        id: 'b2-train-2',
        prompt: 'Die Bahn hat Taxis bezahlt.',
        en: 'The railway paid for taxis.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Falsch',
      },
      {
        id: 'b2-train-3',
        prompt: 'Wie lange dürfen manche die Fahrkarte noch nutzen?',
        en: 'How much longer may some people use the ticket?',
        choices: ['Einen Tag länger', 'Einen Monat', 'Nur bis gestern Abend'],
        answer: 'Einen Tag länger',
      },
      {
        id: 'b2-train-4',
        prompt: 'Wo gibt es das Formular für eine Bescheinigung?',
        en: 'Where is the form for a confirmation?',
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
    en: 'Adults learn a language differently from children. They often compare it with their first language and want to understand every rule at once. That sometimes helps, but it slows you down if you only translate and no longer speak. A short review every day does more than one long evening a week. If you say a mistake out loud and then correct it, you remember the form better. At the beginning the sentence does not have to be perfect.',
    questions: [
      {
        id: 'b2-learn-1',
        prompt: 'Was machen Erwachsene oft beim Lernen?',
        en: 'What do adults often do when they are learning?',
        choices: ['Sie vergleichen mit der Muttersprache', 'Sie lernen nur wie kleine Kinder', 'Sie vermeiden jede Regel'],
        answer: 'Sie vergleichen mit der Muttersprache',
      },
      {
        id: 'b2-learn-2',
        prompt: 'Was bringt der Text mehr als einen langen Abend pro Woche?',
        en: 'What does the text say does more than one long evening a week?',
        choices: ['Kurze tägliche Wiederholung', 'Einen perfekten ersten Satz', 'Nur schriftliche Übersetzungen'],
        answer: 'Kurze tägliche Wiederholung',
      },
      {
        id: 'b2-learn-3',
        prompt: 'Am Anfang muss jeder Satz perfekt sein.',
        en: 'At the beginning every sentence has to be perfect.',
        choices: ['Richtig', 'Falsch'],
        answer: 'Falsch',
      },
      {
        id: 'b2-learn-4',
        prompt: 'Wie merkt man sich eine Form besser?',
        en: 'How do you remember a form better?',
        choices: ['Den Fehler laut sagen und danach korrigieren', 'Das Wort nur still lesen', 'Die Muttersprache nie benutzen'],
        answer: 'Den Fehler laut sagen und danach korrigieren',
      },
    ],
  },
]

export function readingsFor(level) {
  return readings.filter((item) => item.level === level)
}
