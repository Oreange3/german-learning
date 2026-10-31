export const officialSampleLinks = [
  {
    title: 'Goethe-Institut — exams A1–C2',
    url: 'https://www.goethe.de/de/spr/prf.html',
  },
  {
    title: 'Goethe A1 Start Deutsch 1 — official Modellsatz (PDF)',
    url: 'https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_modellsatz.pdf',
  },
  {
    title: 'Goethe / ÖSD B1 — official practice set (PDF)',
    url: 'https://www.goethe.de/pro/relaunch/prf/materialien/B1/B1_Uebungssatz_Erwachsene.pdf',
  },
  {
    title: 'Goethe B2 — official Modellsatz Erwachsene (PDF)',
    url: 'https://www.goethe.de/pro/relaunch/prf/materialien/B2/b2_modellsatz_erwachsene.pdf',
  },
  {
    title: 'telc — Deutsch exams and Übungstests',
    url: 'https://www.telc.net/pruefungen/pruefungen.html',
  },
]

const publicFile = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const practiceExams = [
  {
    id: 'a1-practice',
    level: 'A1',
    title: 'Hallo Deutsch A1 Practice',
    style: 'Start Deutsch 1 style · original classroom paper',
    duration: 'about 65 min written + 15 min speaking',
    pdf: publicFile('/exams/hallo-a1-practice.pdf'),
    intro:
      'An original A1 paper in the Goethe / telc Start Deutsch 1 shape: Lesen, Hören (transcript), Schreiben, Sprechen, plus a short grammar box. Not an official paper.',
    sections: [
      {
        skill: 'Lesen',
        time: '25 min',
        instructions: 'Read the texts. Mark richtig or falsch, or choose a, b, or c.',
        items: [
          {
            id: 'A1-L1',
            kind: 'passage',
            title: 'Teil 1 — Email',
            text: 'Hallo Max,\nich komme am Freitag nicht zum Fußball. Ich bin krank und bleibe zu Hause. Spielst du am Samstag um 15 Uhr? Ruf mich bitte an.\nLiebe Grüße\nJonas',
          },
          {
            id: 'A1-L2',
            kind: 'tf',
            prompt: 'Jonas spielt am Freitag Fußball.',
            options: ['richtig', 'falsch'],
            answer: 'falsch',
            note: 'He writes he is not coming on Friday; he is ill.',
          },
          {
            id: 'A1-L3',
            kind: 'tf',
            prompt: 'Jonas möchte am Samstag um 15 Uhr spielen.',
            options: ['richtig', 'falsch'],
            answer: 'richtig',
            note: 'He asks: Spielst du am Samstag um 15 Uhr?',
          },
          {
            id: 'A1-L4',
            kind: 'tf',
            prompt: 'Jonas bittet Max, ihn anzurufen.',
            options: ['richtig', 'falsch'],
            answer: 'richtig',
            note: 'Ruf mich bitte an.',
          },
          {
            id: 'A1-L5',
            kind: 'passage',
            title: 'Teil 2 — Notices',
            text: 'A) Bäckerei Sonnenschein — Mo–Sa 7–18 Uhr, So geschlossen.\nB) Deutschkurs A1 — dienstags 18–20 Uhr, Volkshochschule, 80 € / Monat.\nC) Fahrrad zu verkaufen — 90 €, nur bar, Tel. 0176 334 221.',
          },
          {
            id: 'A1-L6',
            kind: 'mc',
            prompt: 'Mira braucht Brot am Sonntag. Wohin kann sie gehen?',
            options: ['A', 'B', 'C', 'keine Anzeige'],
            answer: 'keine Anzeige',
            note: 'The bakery is closed on Sunday. No matching notice.',
          },
          {
            id: 'A1-L7',
            kind: 'mc',
            prompt: 'Omar möchte abends Deutsch lernen.',
            options: ['A', 'B', 'C'],
            answer: 'B',
            note: 'The A1 course is Tuesdays 18–20.',
          },
        ],
      },
      {
        skill: 'Hören',
        time: 'ca. 20 min',
        instructions:
          'In a real exam this is audio (some texts twice). Here, read the transcript once, cover it, then answer.',
        items: [
          {
            id: 'A1-H0',
            kind: 'transcript',
            title: 'Durchsage am Bahnhof',
            text: 'Achtung am Gleis 3: Der Zug nach Hamburg, planmäßig 14.10 Uhr, hat heute zwölf Minuten Verspätung. Bitte warten Sie am Gleis 3. Der Zug nach Köln auf Gleis 5 fährt pünktlich.',
          },
          {
            id: 'A1-H1',
            kind: 'mc',
            prompt: 'Der Zug nach Hamburg fährt von Gleis …',
            options: ['3', '5', '12'],
            answer: '3',
          },
          {
            id: 'A1-H2',
            kind: 'mc',
            prompt: 'Der Hamburg-Zug hat … Verspätung.',
            options: ['10 Minuten', '12 Minuten', 'keine'],
            answer: '12 Minuten',
          },
          {
            id: 'A1-H3',
            kind: 'tf',
            prompt: 'Der Zug nach Köln fährt pünktlich.',
            options: ['richtig', 'falsch'],
            answer: 'richtig',
          },
          {
            id: 'A1-H4',
            kind: 'transcript',
            title: 'Im Café',
            text: 'A: Was darf es sein?\nB: Einen Kaffee und ein Stück Kuchen bitte.\nA: Der Kaffee kostet 2,40 Euro, der Kuchen 3,10. Zusammen 5,50 Euro.\nB: Hier, 6 Euro.\nA: 50 Cent zurück. Danke!',
          },
          {
            id: 'A1-H5',
            kind: 'mc',
            prompt: 'Was kostet alles zusammen?',
            options: ['2,40 €', '5,50 €', '6,00 €'],
            answer: '5,50 €',
          },
        ],
      },
      {
        skill: 'Schreiben',
        time: '20 min',
        instructions: 'Teil 1: fill the form. Teil 2: write about 30 words.',
        items: [
          {
            id: 'A1-S1',
            kind: 'form',
            prompt: 'Teil 1 — You are Lea Hofmann, born 12.03.1999, from Austria, living at Parkstraße 8, 50667 Köln. Job: Studentin. Fill:',
            fields: [
              { label: 'Nachname', answer: 'Hofmann' },
              { label: 'Vorname', answer: 'Lea' },
              { label: 'Geburtsdatum', answer: '12.03.1999' },
              { label: 'Land / Staatsangehörigkeit', answer: 'Österreich / Austria' },
              { label: 'Adresse', answer: 'Parkstraße 8, 50667 Köln' },
              { label: 'Beruf', answer: 'Studentin' },
            ],
          },
          {
            id: 'A1-S2',
            kind: 'write',
            prompt:
              'Teil 2 — Write to your friend Anna. You cannot come to the cinema today. Say why. Suggest tomorrow at 17 Uhr. About 30 words.',
            model:
              'Hallo Anna, ich kann heute nicht ins Kino kommen. Ich muss arbeiten. Gehen wir morgen um 17 Uhr? Liebe Grüße, Lea',
            note: 'Must include: cannot come, a reason, a new time. Opening and closing greetings help.',
          },
        ],
      },
      {
        skill: 'Sprechen',
        time: '15 min · group',
        instructions: 'Practise out loud. No written answers in the real exam.',
        items: [
          {
            id: 'A1-SP1',
            kind: 'speak',
            prompt: 'Teil 1 — Introduce yourself: name, country, city, job or studies, languages.',
            model: 'Ich heiße Lea Hofmann. Ich komme aus Österreich und wohne in Köln. Ich bin Studentin. Ich spreche Deutsch und Englisch.',
          },
          {
            id: 'A1-SP2',
            kind: 'speak',
            prompt: 'Teil 2 — Ask a partner: price of a ticket / opening time of a shop / where the toilet is.',
            model: 'Was kostet das Ticket? / Wann öffnet der Laden? / Entschuldigung, wo ist die Toilette?',
          },
          {
            id: 'A1-SP3',
            kind: 'speak',
            prompt: 'Teil 3 — Make a request and react to one: open the window / lend a pen.',
            model: 'Kannst du bitte das Fenster aufmachen? — Ja, gerne. / Hast du einen Stift? — Tut mir leid, nein.',
          },
        ],
      },
      {
        skill: 'Grammar & vocab',
        time: '10 min extra',
        instructions: 'Classroom add-on (not a separate Goethe paper).',
        items: [
          {
            id: 'A1-G1',
            kind: 'gap',
            prompt: 'Ich sehe ___ Mann. (der Mann, accusative)',
            answer: 'den',
          },
          {
            id: 'A1-G2',
            kind: 'gap',
            prompt: 'Wir ___ aus Spanien. (sein)',
            answer: 'sind',
          },
          {
            id: 'A1-G3',
            kind: 'gap',
            prompt: '___ Katze schläft. (article)',
            answer: 'Die',
            note: 'die Katze',
          },
          {
            id: 'A1-G4',
            kind: 'mc',
            prompt: 'Ich ___ Kaffee trinken.',
            options: ['will', 'wille', 'willst'],
            answer: 'will',
          },
        ],
      },
    ],
  },
  {
    id: 'a2-practice',
    level: 'A2',
    title: 'Hallo Deutsch A2 Practice',
    style: 'Goethe-Zertifikat A2 / telc A2 style · original',
    duration: 'about 90 min written + 15 min speaking',
    pdf: publicFile('/exams/hallo-a2-practice.pdf'),
    intro:
      'Original A2 tasks: a denser email, notice matching, a phone message, Perfekt, a three-bullet email, and a planning dialogue.',
    sections: [
      {
        skill: 'Lesen',
        time: '30 min',
        instructions: 'Read carefully. Times and names are there to trick you.',
        items: [
          {
            id: 'A2-L1',
            kind: 'passage',
            title: 'Email from Nadia',
            text: 'Liebe Tessa,\nvielen Dank für deine Nachricht. Am Samstag kann ich leider nicht zum Flohmarkt kommen, weil ich bis 14 Uhr arbeite. Am Sonntag habe ich Zeit. Wollen wir uns um 11 Uhr am Bahnhof treffen? Ich bringe Kuchen mit. Kannst du Teller mitbringen?\nLiebe Grüße\nNadia',
          },
          {
            id: 'A2-L2',
            kind: 'mc',
            prompt: 'Warum kommt Nadia am Samstag nicht?',
            options: ['Sie ist krank.', 'Sie arbeitet bis 14 Uhr.', 'Der Flohmarkt ist zu.', 'Sie fährt in den Urlaub.'],
            answer: 'Sie arbeitet bis 14 Uhr.',
          },
          {
            id: 'A2-L3',
            kind: 'tf',
            prompt: 'Nadia möchte Teller mitbringen.',
            options: ['richtig', 'falsch'],
            answer: 'falsch',
            note: 'She brings cake and asks Tessa to bring plates.',
          },
          {
            id: 'A2-L4',
            kind: 'passage',
            title: 'Notices',
            text: '1) Zimmer in WG, 320 € + NK, Raucher unerwünscht, ab 1. Juni.\n2) Volkshochschule: Erste Hilfe, Samstag 9–16 Uhr, 35 €, Anmeldung bis Freitag.\n3) Fundbüro Rathaus: Jacke gefunden, Abholung Mo–Mi 10–12 Uhr, Ausweis mitbringen.',
          },
          {
            id: 'A2-L5',
            kind: 'mc',
            prompt: 'Piotr hat am Samstag frei und will einen Kurs machen.',
            options: ['1', '2', '3'],
            answer: '2',
          },
          {
            id: 'A2-L6',
            kind: 'mc',
            prompt: 'Mara hat ihre Jacke verloren.',
            options: ['1', '2', '3'],
            answer: '3',
          },
        ],
      },
      {
        skill: 'Hören',
        time: 'ca. 30 min',
        instructions: 'Read the mailbox once, then answer. In the real exam this is audio.',
        items: [
          {
            id: 'A2-H0',
            kind: 'transcript',
            title: 'Anrufbeantworter',
            text: 'Guten Tag, Frau Silva, hier ist Herr Krüger von der Autowerkstatt Meier. Ihr Auto ist fertig. Sie können es morgen zwischen 8 und 12 Uhr abholen. Bitte bringen Sie den Werkstatt-Schein mit. Die Rechnung ist 186 Euro. Bei Fragen: 0221 88 40 12. Auf Wiederhören.',
          },
          {
            id: 'A2-H1',
            kind: 'mc',
            prompt: 'Wann kann Frau Silva das Auto holen?',
            options: ['heute 8–12 Uhr', 'morgen 8–12 Uhr', 'morgen nach 12 Uhr'],
            answer: 'morgen 8–12 Uhr',
          },
          {
            id: 'A2-H2',
            kind: 'gap',
            prompt: 'Die Rechnung ist ___ Euro.',
            answer: '186',
          },
          {
            id: 'A2-H3',
            kind: 'tf',
            prompt: 'Sie soll den Werkstatt-Schein mitbringen.',
            options: ['richtig', 'falsch'],
            answer: 'richtig',
          },
        ],
      },
      {
        skill: 'Schreiben',
        time: '30 min',
        instructions: 'Write a short email. Cover all three bullets.',
        items: [
          {
            id: 'A2-W1',
            kind: 'write',
            prompt:
              'You cannot come to the German course on Wednesday. Write to your teacher, Frau Berg. 1) Say you cannot come and why (Arzttermin). 2) Ask for the homework. 3) Ask if you can come on Friday instead.',
            model:
              'Liebe Frau Berg, ich kann am Mittwoch nicht zum Kurs kommen, weil ich einen Arzttermin habe. Können Sie mir bitte die Hausaufgaben per E-Mail schicken? Darf ich am Freitag in den anderen Kurs kommen? Viele Grüße, Carlos Silva',
            note: 'One or two sentences per bullet. Opening and closing required.',
          },
        ],
      },
      {
        skill: 'Sprechen',
        time: '15 min · pair',
        instructions: 'Talk with a partner. Perfekt is welcome for last weekend.',
        items: [
          {
            id: 'A2-SP1',
            kind: 'speak',
            prompt: 'Teil 1 — Ask and answer: Where do you live? What do you do? What did you do last weekend?',
            model: 'Ich wohne in einer Zweizimmerwohnung. Ich arbeite im Büro. Am Wochenende habe ich meine Familie besucht.',
          },
          {
            id: 'A2-SP2',
            kind: 'speak',
            prompt: 'Teil 3 — Plan a museum visit: day, time, who buys tickets, where you meet.',
            model: 'Wollen wir am Samstag ins Museum? Um 15 Uhr ist besser für mich. Ich kaufe die Tickets online. Wir treffen uns vor dem Eingang.',
          },
        ],
      },
      {
        skill: 'Grammar & vocab',
        time: '10 min extra',
        items: [
          {
            id: 'A2-G1',
            kind: 'gap',
            prompt: 'Gestern ___ wir nach Bonn ___ . (fahren, Perfekt)',
            answer: 'sind, gefahren',
            note: 'sind … gefahren',
          },
          {
            id: 'A2-G2',
            kind: 'gap',
            prompt: 'Ich bleibe zu Hause, ___ ich krank bin.',
            answer: 'weil',
          },
          {
            id: 'A2-G3',
            kind: 'mc',
            prompt: 'Das ist ___ gute Idee. (ein)',
            options: ['ein', 'eine', 'einen'],
            answer: 'eine',
            note: 'die Idee → eine gute Idee',
          },
        ],
      },
    ],
  },
  {
    id: 'b1-practice',
    level: 'B1',
    title: 'Hallo Deutsch B1 Practice',
    style: 'Goethe / ÖSD B1 module mix · original',
    duration: 'about 65 min Lesen sample + 60 min Schreiben sample + speaking',
    pdf: publicFile('/exams/hallo-b1-practice.pdf'),
    intro:
      'Original B1-style tasks: a press paragraph, forum stances, a formal email, a forum opinion, and speaking prompts. Modular like Goethe B1 — practise one skill at a time if you like.',
    sections: [
      {
        skill: 'Lesen',
        time: '35 min sample',
        instructions: 'Choose the best answer. One comment is unused in Teil B.',
        items: [
          {
            id: 'B1-L1',
            kind: 'passage',
            title: 'Teil A — Short article',
            text: 'Immer mehr Städte in Deutschland testen autofreie Sonntage in der Innenstadt. Eine Umfrage in Freiburg zeigt: 62 Prozent der Befragten finden die Aktion gut, weil die Straßen leiser sind und mehr Familien in die Cafés kommen. Händler in den Seitenstraßen sind skeptischer. Sie berichten von weniger Kunden am Vormittag. Die Stadt will das Projekt trotzdem ein Jahr lang weiterführen und im Herbst erneut zählen.',
          },
          {
            id: 'B1-L2',
            kind: 'mc',
            prompt: 'Was ist das Hauptziel des Textes?',
            options: [
              'Er erklärt, wie man in Freiburg parkt.',
              'Er berichtet über einen Test mit autofreien Sonntagen und die Reaktionen.',
              'Er wirbt für ein neues Café.',
            ],
            answer: 'Er berichtet über einen Test mit autofreien Sonntagen und die Reaktionen.',
          },
          {
            id: 'B1-L3',
            kind: 'mc',
            prompt: 'Wie stehen viele Händler in den Seitenstraßen dazu?',
            options: ['Sie sind begeistert.', 'Sie sind skeptisch wegen weniger Kunden am Vormittag.', 'Sie schließen sonntags.'],
            answer: 'Sie sind skeptisch wegen weniger Kunden am Vormittag.',
          },
          {
            id: 'B1-L4',
            kind: 'passage',
            title: 'Teil B — Forum: “Sollte Homeoffice Pflicht sein, wenn der Job es erlaubt?”',
            text: 'Alex: Ich bin klar dafür. Ich spare zwei Stunden Bahn und kann nachmittags mein Kind abholen.\nBella: Das sehe ich anders. Ohne Büro verliert man Ideen. Meetings online sind langsam.\nCem: Es kommt darauf an. Drei Tage zu Hause, zwei im Büro — das wäre für mich ideal.\nDana: Ich arbeite im Krankenhaus. Homeoffice ist bei uns kein Thema.',
          },
          {
            id: 'B1-L5',
            kind: 'mc',
            prompt: 'Wer schlägt einen Kompromiss vor?',
            options: ['Alex', 'Bella', 'Cem', 'Dana'],
            answer: 'Cem',
          },
          {
            id: 'B1-L6',
            kind: 'mc',
            prompt: 'Wer ist klar dagegen, weil die Zusammenarbeit leidet?',
            options: ['Alex', 'Bella', 'Cem', 'Dana'],
            answer: 'Bella',
          },
        ],
      },
      {
        skill: 'Hören',
        time: 'sample · transcript',
        instructions: 'Interview gist. Cover the transcript after one reading.',
        items: [
          {
            id: 'B1-H0',
            kind: 'transcript',
            title: 'Radiointerview mit einer Bibliothekarin',
            text: 'Moderator: Frau Oswald, Ihre Stadtbibliothek hat sonntags geöffnet. Warum?\nOswald: Viele Leute arbeiten unter der Woche. Sonntag ist der ruhigste Lerntag. Seit 2022 kommen sonntags etwa 400 Besucher, vor allem Schüler und Familien.\nModerator: Und die Kosten?\nOswald: Zwei Extra-Schichten. Die Stadt zahlt das. Ich wäre dafür, das in mehr Städten zu machen. Nicht jeder hat zu Hause einen ruhigen Platz.',
          },
          {
            id: 'B1-H1',
            kind: 'mc',
            prompt: 'Warum ist Sonntag wichtig für Frau Oswald?',
            options: [
              'Die Bibliothek ist dann leer und sie kann putzen.',
              'Viele haben unter der Woche keine Zeit und brauchen einen ruhigen Platz.',
              'Sonntag ist gesetzlich Pflicht.',
            ],
            answer: 'Viele haben unter der Woche keine Zeit und brauchen einen ruhigen Platz.',
          },
          {
            id: 'B1-H2',
            kind: 'gap',
            prompt: 'Seit 2022 kommen sonntags etwa ___ Besucher.',
            answer: '400',
          },
        ],
      },
      {
        skill: 'Schreiben',
        time: '60 min if you do both',
        instructions: 'Aufgabe 1 formal email. Aufgabe 2 forum post. Cover every bullet.',
        items: [
          {
            id: 'B1-W1',
            kind: 'write',
            prompt:
              'Aufgabe 1 — Write to Volkshochschule Köln, Kurs “Deutsch B1 Abend”. You must miss two lessons (12. and 19. March) because you are in hospital. Ask whether you can get the materials and whether you may sit the practice test in April. Formal register.',
            model:
              'Sehr geehrte Damen und Herren, ich bin Teilnehmer im Kurs “Deutsch B1 Abend” und muss die Termine am 12. und 19. März leider absagen, weil ich im Krankenhaus bin. Bitte teilen Sie mir mit, ob ich die Materialien per E-Mail bekommen kann. Außerdem möchte ich fragen, ob ich den Übungstest im April nachholen darf. Vielen Dank und mit freundlichen Grüßen, Jonas Weber',
          },
          {
            id: 'B1-W2',
            kind: 'write',
            prompt:
              'Aufgabe 2 — Forum: “Sollten Geschäfte sonntags öffnen?” Write 80–100 words. Say your opinion, give two reasons, mention one problem for staff, suggest a compromise.',
            model:
              'Ich habe die Diskussion gelesen und bin nur teilweise dafür. Ein Grund für offene Geschäfte ist, dass viele unter der Woche arbeiten und sonntags in Ruhe einkaufen möchten. Außerdem sind Innenstädte dann lebendiger. Allerdings brauchen auch Verkäuferinnen und Verkäufer einen freien Tag mit der Familie. Deshalb wäre ein Kompromiss gut: Öffnung nur bis 14 Uhr, und nicht jede Woche. So bleibt der Sonntag zum größten Teil ruhig.',
          },
        ],
      },
      {
        skill: 'Sprechen',
        time: '15 min + 15 min prep',
        items: [
          {
            id: 'B1-SP1',
            kind: 'speak',
            prompt: 'Teil 1 — Plan a class party with your partner: date, food, music, who brings what.',
            model: 'Wollen wir am Freitagabend feiern? Ich bringe Salat mit. Kannst du die Musik machen? Einverstanden.',
          },
          {
            id: 'B1-SP2',
            kind: 'speak',
            prompt: 'Teil 2 — Present “Sport im Alltag” for about 3 minutes: why it matters, one problem, one tip.',
            model: 'Ich möchte über Sport im Alltag sprechen. Ein Vorteil ist die Konzentration. Ein Problem ist die Zeit. Mein Tipp: zehn Minuten zu Fuß zum Bahnhof.',
          },
          {
            id: 'B1-SP3',
            kind: 'speak',
            prompt: 'Teil 3 — Comment on your partner’s talk. Ask one question. Say if you agree.',
            model: 'Das fand ich interessant, weil … Eine Frage: Wann machst du Sport? Ich sehe das ähnlich / anders, weil …',
          },
        ],
      },
      {
        skill: 'Grammar & vocab',
        time: '10 min extra',
        items: [
          {
            id: 'B1-G1',
            kind: 'gap',
            prompt: 'Wenn ich Zeit ___, ___ ich dich anrufen. (haben / würde)',
            answer: 'hätte, würde',
            note: 'hätte … würde',
          },
          {
            id: 'B1-G2',
            kind: 'gap',
            prompt: 'Das ist der Kurs, ___ ich suche. (relative, masculine accusative)',
            answer: 'den',
          },
          {
            id: 'B1-G3',
            kind: 'gap',
            prompt: 'Die E-Mails ___ jeden Morgen ___ . (Passiv, lesen)',
            answer: 'werden, gelesen',
            note: 'werden … gelesen',
          },
        ],
      },
    ],
  },
  {
    id: 'a1-grammar-quiz',
    level: 'A1',
    title: 'A1 Grammar & Vocab Quiz',
    style: 'Classroom quiz · articles, verbs, everyday words',
    duration: '20 min',
    pdf: publicFile('/exams/hallo-a1-grammar-quiz.pdf'),
    intro: 'A short original quiz if you want a timed paper without the full four skills.',
    sections: [
      {
        skill: 'Articles',
        time: '5 min',
        items: [
          { id: 'Q1', kind: 'gap', prompt: '___ Haus ist alt.', answer: 'Das' },
          { id: 'Q2', kind: 'gap', prompt: 'Ich habe ___ Hund. (ein, masculine accusative)', answer: 'einen' },
          { id: 'Q3', kind: 'gap', prompt: 'Wir fahren mit ___ Bus. (dative)', answer: 'dem' },
        ],
      },
      {
        skill: 'Verbs',
        time: '5 min',
        items: [
          { id: 'Q4', kind: 'gap', prompt: 'du ___ (sein)', answer: 'bist' },
          { id: 'Q5', kind: 'gap', prompt: 'er ___ (haben)', answer: 'hat' },
          { id: 'Q6', kind: 'mc', prompt: 'Ich ___ um sieben auf.', options: ['stehe', 'aufstehe', 'stehen'], answer: 'stehe' },
        ],
      },
      {
        skill: 'Everyday',
        time: '5 min',
        items: [
          { id: 'Q7', kind: 'mc', prompt: 'How do you greet someone formally at 15:00?', options: ['Gute Nacht', 'Guten Tag', 'Tschüss'], answer: 'Guten Tag' },
          { id: 'Q8', kind: 'gap', prompt: 'Am ___ arbeite ich nicht. (Sunday)', answer: 'Sonntag' },
          { id: 'Q9', kind: 'tf', prompt: 'bitte can mean “please” and “you’re welcome”.', options: ['richtig', 'falsch'], answer: 'richtig' },
        ],
      },
    ],
  },
]

export function getPracticeExam(id) {
  return practiceExams.find((exam) => exam.id === id) || null
}

export function collectAnswers(exam) {
  const rows = []
  for (const section of exam.sections) {
    for (const item of section.items) {
      if (item.kind === 'passage' || item.kind === 'transcript') continue
      rows.push({
        id: item.id,
        skill: section.skill,
        prompt: item.prompt,
        answer: item.answer || item.model || (item.fields || []).map((f) => `${f.label}: ${f.answer}`).join('; '),
        note: item.note || '',
      })
    }
  }
  return rows
}
