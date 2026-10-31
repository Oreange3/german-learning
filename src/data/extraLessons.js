export const extraLessons = {
  'a1-listen-announcements': {
    category: 'a1-listening',
    level: 'A1',
    title: 'Announcements',
    teaser: 'Train, shop, and loudspeaker German — the Hören Teil 2 style.',
    wordIds: ['zug', 'bahnhof', 'bus', 'uhr', 'minute', 'ticket', 'bitte'],
    points: [
      'Exam announcements are short. Listen for place, time, Gleis (platform), and whether something is cancelled (fällt aus) or late (hat Verspätung).',
      'Numbers matter: Gleis 4, zehn Minuten, um 16.20 Uhr. Write them down; do not try to remember the whole sentence.',
      'This site has no audio file. Read the text out loud once, then cover it and answer. In a real exam you hear it once.',
    ],
    examples: [
      { de: 'Der Zug nach Hamburg auf Gleis 4 hat zehn Minuten Verspätung.', en: 'The train to Hamburg on platform 4 is ten minutes late.' },
      { de: 'Die Bäckerei schließt heute um 18 Uhr.', en: 'The bakery closes today at 6 p.m.' },
      { de: 'Der Bus nach Köln fällt heute aus.', en: 'The bus to Cologne is cancelled today.' },
    ],
    tables: [
      {
        caption: 'Announcement words',
        headers: ['Deutsch', 'English'],
        rows: [
          ['das Gleis', 'platform / track'],
          ['die Verspätung', 'delay'],
          ['fällt aus', 'is cancelled'],
          ['hat Verspätung', 'is running late'],
        ],
      },
    ],
  },
  'a1-listen-dialogues': {
    category: 'a1-listening',
    level: 'A1',
    title: 'Short dialogues',
    teaser: 'Prices, times, food, and meeting points.',
    wordIds: ['kaffee', 'euro', 'uhr', 'bahnhof', 'bitte', 'danke', 'zwei'],
    points: [
      'A1 dialogues are two speakers and one job: a price, a time, a place, or a food order.',
      'Question words: Wie viel? Wann? Wo? Was? The answer is usually a number, a clock time, or a place name.',
      'Practice by covering the second line and saying it yourself, then checking.',
    ],
    examples: [
      { de: 'A: Was kostet der Kaffee? — B: Zwei Euro fünfzig.', en: 'A: How much is the coffee? — B: Two euros fifty.' },
      { de: 'A: Wann kommen wir an? — B: Um drei Uhr am Bahnhof.', en: 'A: When do we arrive? — B: At three o’clock at the station.' },
      { de: 'A: Wo treffen wir uns? — B: Vor dem Kino.', en: 'A: Where shall we meet? — B: In front of the cinema.' },
    ],
    tables: [
      {
        caption: 'Listen for one fact',
        headers: ['Question', 'Typical answer'],
        rows: [
          ['Was kostet …?', 'a price'],
          ['Wann …?', 'a clock time'],
          ['Wo …?', 'a place'],
        ],
      },
    ],
  },
  'a1-read-notes': {
    category: 'a1-reading',
    level: 'A1',
    title: 'Notes and emails',
    teaser: 'Short messages: richtig or falsch.',
    wordIds: ['heute', 'morgen', 'schule', 'zeit', 'freund', 'kommen'],
    points: [
      'A1 Lesen Teil 1 is a short email or note. Each statement is richtig or falsch. One fact per sentence.',
      'Watch names, days, and times. “Dienstag, 10 Uhr” is not the same as “Donnerstag, 10 Uhr.”',
      'Hallo / Liebe / Lieber + name opens a personal note. Viele Grüße closes it.',
    ],
    examples: [
      {
        de: 'Hallo Lea, ich komme heute nicht zur Schule. Ich bin krank. Bis morgen, Tim.',
        en: 'Hi Lea, I am not coming to school today. I am ill. See you tomorrow, Tim.',
      },
      { de: 'Liebe Anna, hast du am Freitag Zeit? Wir können um 16 Uhr Kaffee trinken. Mira', en: 'Dear Anna, are you free on Friday? We can have coffee at 4 p.m. Mira' },
    ],
    tables: [
      {
        caption: 'Note shape',
        headers: ['Part', 'Example'],
        rows: [
          ['open', 'Hallo / Liebe + name'],
          ['why', 'ich kann nicht …'],
          ['new plan', 'Gehen wir morgen …?'],
          ['close', 'Liebe Grüße + name'],
        ],
      },
    ],
  },
  'a1-read-ads': {
    category: 'a1-reading',
    level: 'A1',
    title: 'Ads and signs',
    teaser: 'Match a situation to a notice.',
    wordIds: ['laden', 'preis', 'euro', 'zimmer', 'wohnung', 'schule'],
    points: [
      'A1 Lesen Teil 2 is matching: who needs what? One extra ad is unused.',
      'Scan for the need first (cheap room, German course, open on Sunday), then hunt that word on the notices.',
      'Useful sign words: geöffnet / geschlossen, zu vermieten, gesucht, Eintritt frei, nur bar.',
    ],
    examples: [
      { de: 'Wohnung zu vermieten: 2 Zimmer, 450 €, ab 1. Mai.', en: 'Flat to let: 2 rooms, €450, from 1 May.' },
      { de: 'Deutschkurs A1, montags 18–20 Uhr, Schule am Park.', en: 'German A1 course, Mondays 6–8 p.m., school by the park.' },
      { de: 'Supermarkt geöffnet: Mo–Sa 8–20 Uhr. Sonntag geschlossen.', en: 'Supermarket open Mon–Sat 8 a.m.–8 p.m. Closed Sunday.' },
    ],
    tables: [
      {
        caption: 'Sign words',
        headers: ['Deutsch', 'English'],
        rows: [
          ['geöffnet / geschlossen', 'open / closed'],
          ['zu vermieten', 'to let'],
          ['gesucht', 'wanted'],
          ['Eintritt frei', 'free entry'],
        ],
      },
    ],
  },
  'a1-speak-introduce': {
    category: 'a1-speaking',
    level: 'A1',
    title: 'Introduce yourself',
    teaser: 'Name, country, job, languages — Sprechen Teil 1.',
    wordIds: ['heissen', 'wohnen', 'kommen', 'sprechen', 'arbeiten', 'name', 'land'],
    points: [
      'In the group exam you introduce yourself. Keep it to five or six sentences. Do not tell your life story.',
      'Set: Ich heiße … Ich komme aus … Ich wohne in … Ich bin … (job / student). Ich spreche … Ich lerne Deutsch, weil …',
      'Sie is safer with people you do not know. du only if the examiner or the group is clearly informal.',
    ],
    examples: [
      { de: 'Ich heiße Samir. Ich komme aus Spanien und wohne in Köln.', en: 'My name is Samir. I come from Spain and live in Cologne.' },
      { de: 'Ich bin Student / ich arbeite im Büro. Ich spreche Spanisch und ein bisschen Deutsch.', en: 'I am a student / I work in an office. I speak Spanish and a little German.' },
    ],
    tables: [
      {
        caption: 'Teil 1 set',
        headers: ['Say', 'Chunk'],
        rows: [
          ['name', 'Ich heiße …'],
          ['origin', 'Ich komme aus …'],
          ['home', 'Ich wohne in …'],
          ['job', 'Ich bin … / Ich arbeite als …'],
          ['languages', 'Ich spreche …'],
        ],
      },
    ],
  },
  'a1-speak-requests': {
    category: 'a1-speaking',
    level: 'A1',
    title: 'Ask and answer',
    teaser: 'Everyday requests — Sprechen Teil 2 and 3.',
    wordIds: ['bitte', 'danke', 'helfen', 'koennen', 'wo', 'was'],
    points: [
      'Teil 2: ask for information and give it. Wo ist …? Was kostet …? Wann öffnet …? Wie komme ich zu …?',
      'Teil 3: a small request. Kannst du mir bitte helfen? — Ja, gerne. / Tut mir leid, ich habe keine Zeit.',
      'Always react. Silence loses points. A short Ja, klar or Nein, danke is enough.',
    ],
    examples: [
      { de: 'Entschuldigung, wo ist der Bahnhof? — Geradeaus, dann links.', en: 'Excuse me, where is the station? — Straight on, then left.' },
      { de: 'Kannst du bitte das Fenster zumachen? — Ja, gerne.', en: 'Can you please close the window? — Yes, gladly.' },
      { de: 'Hast du einen Stift für mich? — Tut mir leid, nein.', en: 'Do you have a pen for me? — Sorry, no.' },
    ],
    tables: [
      {
        caption: 'Request and react',
        headers: ['Ask', 'Answer'],
        rows: [
          ['Kannst du mir helfen?', 'Ja, gerne. / Tut mir leid, ich habe keine Zeit.'],
          ['Wo ist …?', 'Geradeaus, dann links.'],
          ['Hast du … für mich?', 'Ja. / Nein, danke. / Tut mir leid, nein.'],
        ],
      },
    ],
  },
  'a1-write-form': {
    category: 'a1-writing',
    level: 'A1',
    title: 'Fill in a form',
    teaser: 'Name, address, nationality — Schreiben Teil 1.',
    wordIds: ['name', 'land', 'stadt', 'strasse', 'wohnen'],
    points: [
      'Forms want: Nachname, Vorname, Adresse, PLZ / Ort, Land / Staatsangehörigkeit, Beruf, Telefon, E-Mail, Geburtsdatum.',
      'Dates in Germany: Tag.Monat.Jahr — 05.09.1998. Phone: +49 …',
      'Write clearly. Spelling of your own name must be exact. Numbers are checked more strictly than fancy words.',
    ],
    tables: [
      {
        caption: 'Form words',
        headers: ['German', 'English'],
        rows: [
          ['Nachname / Familienname', 'surname'],
          ['Vorname', 'first name'],
          ['Geburtsdatum', 'date of birth'],
          ['Staatsangehörigkeit', 'nationality'],
          ['Beruf', 'job'],
          ['Unterschrift', 'signature'],
        ],
      },
    ],
  },
  'a1-write-note': {
    category: 'a1-writing',
    level: 'A1',
    title: 'A 30-word note',
    teaser: 'A short personal message, about 30 words.',
    wordIds: ['heute', 'morgen', 'zeit', 'kommen', 'danke', 'bitte'],
    points: [
      'Schreiben Teil 2 is a note or SMS-length email. Cover every bullet in the task (why, when, what next).',
      'Shape: Hallo + name / reason / new plan / Viele Grüße + your name. Aim for about 30 words, not 80.',
      'Present tense is enough. Ich kann nicht kommen. Gehen wir morgen? Ruf mich an!',
    ],
    examples: [
      {
        de: 'Hallo Anna, ich bin krank und kann heute nicht kommen. Gehen wir morgen um 16 Uhr Kaffee trinken? Liebe Grüße, Lea',
        en: 'Hi Anna, I am ill and cannot come today. Shall we have coffee tomorrow at 4? Best, Lea',
      },
    ],
    tables: [
      {
        caption: '30-word checklist',
        headers: ['Need', 'Example'],
        rows: [
          ['why', 'ich bin krank'],
          ['when', 'heute / morgen um 16 Uhr'],
          ['next step', 'Gehen wir …? Ruf mich an!'],
        ],
      },
    ],
  },
  'a2-perfekt': {
    category: 'a2-grammar',
    level: 'A2',
    title: 'Perfekt stories',
    teaser: 'What you did: haben / sein + Partizip II.',
    wordIds: ['haben', 'sein', 'gehen', 'fahren', 'machen', 'sehen', 'kommen'],
    points: [
      'A2 exams love weekend stories in the Perfekt. Ich habe Pizza gegessen. Wir sind nach Berlin gefahren.',
      'Most verbs take haben. Movement / change of state take sein: gehen, fahren, kommen, fliegen, aufstehen, einschlafen, werden.',
      'Partizip II: ge- + stem + -t (gemacht) or ge- + stem + -en (gesehen). Separable: aufgestanden. -ieren verbs: fotografiert (no ge-).',
    ],
    tables: [
      {
        caption: 'haben or sein',
        headers: ['Sentence', 'Why'],
        rows: [
          ['Ich habe Fußball gespielt.', 'activity — haben'],
          ['Sie hat einen Film gesehen.', 'sehen — haben'],
          ['Wir sind nach Hause gegangen.', 'movement — sein'],
          ['Er ist um sieben aufgestanden.', 'change of state — sein'],
        ],
      },
    ],
    examples: [
      { de: 'Gestern habe ich meine Freundin besucht. Wir sind ins Kino gegangen.', en: 'Yesterday I visited my friend. We went to the cinema.' },
    ],
  },
  'a2-weil-dass': {
    category: 'a2-grammar',
    level: 'A2',
    title: 'weil, dass, word order',
    teaser: 'The verb waits at the end of the clause.',
    wordIds: ['weil', 'dass', 'arbeiten', 'lernen', 'heute'],
    points: [
      'Main clause: verb in position two. Ich bleibe zu Hause.',
      'weil and dass open a Nebensatz. The conjugated verb goes last: Ich bleibe zu Hause, weil ich krank bin.',
      'dass reports a fact: Ich weiß, dass der Zug Verspätung hat. Comma before weil / dass.',
    ],
    examples: [
      { de: 'Ich lerne Deutsch, weil ich in Deutschland arbeite.', en: 'I am learning German because I work in Germany.' },
      { de: 'Sie sagt, dass sie um acht kommt.', en: 'She says that she is coming at eight.' },
      { de: 'Heute bleibe ich zu Hause, weil das Wetter schlecht ist.', en: 'Today I am staying home because the weather is bad.' },
    ],
    tables: [
      {
        caption: 'weil / dass / denn',
        headers: ['Word', 'Verb', 'Example'],
        rows: [
          ['weil', 'end of the clause', 'Ich lerne, weil ich hier arbeite.'],
          ['dass', 'end of the clause', 'Ich weiß, dass der Zug Verspätung hat.'],
          ['denn', 'position 2 (main clause)', 'Ich lerne, denn ich arbeite hier.'],
        ],
      },
    ],
  },
  'a2-adj-endings': {
    category: 'a2-grammar',
    level: 'A2',
    title: 'Adjective endings',
    teaser: 'der gute Kaffee, ein gutes Buch.',
    wordIds: ['gut', 'neu', 'gross', 'klein', 'alt', 'schoen'],
    points: [
      'After der / die / das / die (plural), the adjective takes -e or -en: der gute Kaffee, die neue Wohnung, das kleine Kind, die alten Häuser.',
      'After ein / eine / kein, masculine nominative is -er (ein guter Film), neuter nominative/accusative is -es (ein gutes Buch), feminine is -e (eine schöne Stadt).',
      'After sein with no noun, no ending: Der Kaffee ist gut. Learn the der-word row first; it covers most exam items.',
    ],
    tables: [
      {
        caption: 'After der / die / das',
        headers: ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
        rows: [
          ['Nominative', 'der gute', 'die gute', 'das gute', 'die guten'],
          ['Accusative', 'den guten', 'die gute', 'das gute', 'die guten'],
          ['Dative', 'dem guten', 'der guten', 'dem guten', 'den guten'],
        ],
      },
      {
        caption: 'After ein / eine / kein',
        headers: ['Case', 'masc.', 'fem.', 'neut.', 'plural (keine)'],
        rows: [
          ['Nominative', 'ein guter', 'eine gute', 'ein gutes', 'keine guten'],
          ['Accusative', 'einen guten', 'eine gute', 'ein gutes', 'keine guten'],
          ['Dative', 'einem guten', 'einer guten', 'einem guten', 'keinen guten'],
        ],
      },
    ],
  },
  'a2-housing': {
    category: 'a2-vocab',
    level: 'A2',
    title: 'Housing',
    teaser: 'Flat ads, rent, neighbours, furniture.',
    wordIds: ['wohnung', 'miete', 'zimmer', 'nachbar', 'kueche', 'bad', 'moebel'],
    points: [
      'die Miete is the rent. die Nebenkosten are extras (heating, water). eine möblierte Wohnung comes with furniture.',
      'Ad words: hell, ruhig, zentral, zu vermieten, Kaution (deposit), ab sofort.',
      'Ich suche eine Zweizimmerwohnung. Die Miete ist zu hoch. Der Nachbar ist nett.',
    ],
    examples: [
      { de: 'Die Wohnung hat 55 Quadratmeter und einen Balkon.', en: 'The flat is 55 square metres and has a balcony.' },
      { de: 'Die Miete beträgt 620 Euro plus Nebenkosten.', en: 'The rent is €620 plus bills.' },
    ],
    tables: [
      {
        caption: 'Housing words',
        headers: ['Deutsch', 'English'],
        rows: [
          ['die Wohnung', 'flat'],
          ['die Miete', 'rent'],
          ['die Nebenkosten', 'service charges'],
          ['die Kaution', 'deposit'],
          ['der Balkon', 'balcony'],
          ['zu vermieten', 'to let'],
        ],
      },
    ],
  },
  'a2-health': {
    category: 'a2-vocab',
    level: 'A2',
    title: 'Health',
    teaser: 'Doctor, appointment, what hurts.',
    wordIds: ['arzt', 'termin', 'krank', 'kopf', 'krankenhaus', 'hilfe'],
    points: [
      'Ich habe Kopfschmerzen / Halsschmerzen / Fieber. Mein Bauch tut weh.',
      'Ich möchte einen Termin. Haben Sie heute noch einen Termin frei? Die Sprechstunde ist von 8 bis 12 Uhr.',
      'das Rezept is the prescription. die Apotheke is the chemist. Not the same as der Arzt.',
    ],
    examples: [
      { de: 'Ich bin krank und brauche einen Termin beim Arzt.', en: 'I am ill and need a doctor’s appointment.' },
      { de: 'Nehmen Sie das Medikament dreimal am Tag.', en: 'Take the medicine three times a day.' },
    ],
    tables: [
      {
        caption: 'At the doctor',
        headers: ['Deutsch', 'English'],
        rows: [
          ['der Termin', 'appointment'],
          ['das Fieber', 'fever'],
          ['der Husten', 'cough'],
          ['das Rezept', 'prescription'],
          ['die Apotheke', 'pharmacy'],
          ['der Arzt / die Ärztin', 'doctor'],
        ],
      },
    ],
  },
  'a2-work': {
    category: 'a2-vocab',
    level: 'A2',
    title: 'Work and office',
    teaser: 'Job, hours, colleagues, a simple CV line.',
    wordIds: ['arbeit', 'arbeiten', 'buero', 'kollege', 'chef', 'kurs'],
    points: [
      'Ich arbeite als … (Kellner / Verkäuferin / Mechaniker). Ich arbeite bei Siemens / in einem Büro / im Krankenhaus.',
      'die Kollegin / der Kollege, der Chef / die Chefin. Überstunden, Teilzeit, Vollzeit, Schicht.',
      'A2 Schreiben often wants: job + days + a problem (I cannot come on Friday).',
    ],
    examples: [
      { de: 'Ich arbeite montags bis freitags von 9 bis 17 Uhr.', en: 'I work Monday to Friday from 9 to 5.' },
      { de: 'Kann ich am Freitag frei haben? Ich habe einen Arzttermin.', en: 'Can I have Friday off? I have a doctor’s appointment.' },
    ],
    tables: [
      {
        caption: 'Work words',
        headers: ['Deutsch', 'English'],
        rows: [
          ['die Vollzeit / die Teilzeit', 'full time / part time'],
          ['die Überstunden', 'overtime'],
          ['die Schicht', 'shift'],
          ['der Kollege / die Kollegin', 'colleague'],
          ['Ich arbeite als …', 'I work as …'],
          ['Ich arbeite bei …', 'I work at (company) …'],
        ],
      },
    ],
  },
  'a2-listen-phone': {
    category: 'a2-listening',
    level: 'A2',
    title: 'Phone messages',
    teaser: 'Answering-machine German: who, why, callback.',
    wordIds: ['anrufen', 'termin', 'heute', 'morgen', 'name', 'nummer'],
    points: [
      'A2 Hören often uses a mailbox. Write: name, number, day, reason.',
      'Phrases: Hier ist … Bitte rufen Sie mich zurück. Meine Nummer ist … Der Termin fällt aus.',
      'Listen twice in the real exam for some parts. First pass: gist. Second: the number.',
    ],
    examples: [
      {
        de: 'Guten Tag, hier ist Frau Berger vom Amt. Ihr Termin am Dienstag fällt aus. Bitte rufen Sie zurück: 030 55 12 80.',
        en: 'Hello, this is Ms Berger from the office. Your Tuesday appointment is cancelled. Please call back: 030 55 12 80.',
      },
    ],
    tables: [
      {
        caption: 'Mailbox — write these four',
        headers: ['Listen for', 'Example'],
        rows: [
          ['Name', 'Frau Berger'],
          ['Grund', 'Termin fällt aus'],
          ['Tag', 'Dienstag'],
          ['Nummer', '030 55 12 80'],
        ],
      },
    ],
  },
  'a2-listen-radio': {
    category: 'a2-listening',
    level: 'A2',
    title: 'Radio and interviews',
    teaser: 'A short clip: topic, opinion, one number.',
    wordIds: ['hoeren', 'wetter', 'stadt', 'heute', 'mehr'],
    points: [
      'Radio items are a bit longer than A1. First decide the topic (weather, event, interview), then hunt one detail.',
      'Opinion words: ich finde, meiner Meinung nach, es ist wichtig, dass …',
      'Weather and event notices still love numbers: 12 Grad, Eintritt 8 Euro, Beginn 19 Uhr.',
    ],
    examples: [
      { de: 'Heute Nachmittag gibt es Regen, am Abend 12 Grad.', en: 'Rain this afternoon, 12 degrees in the evening.' },
      { de: 'Das Stadtfest beginnt um 19 Uhr. Eintritt frei.', en: 'The town festival starts at 7 p.m. Free entry.' },
    ],
    tables: [
      {
        caption: 'Radio — first pass / second pass',
        headers: ['Pass', 'Hunt'],
        rows: [
          ['1', 'topic: weather / event / interview'],
          ['2', 'one number: Grad, Euro, Uhr'],
        ],
      },
    ],
  },
  'a2-read-email': {
    category: 'a2-reading',
    level: 'A2',
    title: 'Longer emails',
    teaser: 'A personal email with three or four facts.',
    wordIds: ['schreiben', 'kommen', 'zeit', 'woche', 'freundin'],
    points: [
      'A2 emails pack several facts: who is coming, when, what to bring, a problem. Questions often mix them up.',
      'Liebe/r + first name is personal. Sehr geehrte/r is formal (more B1).',
      'Underline dates and names before you answer. That is the whole game.',
    ],
    examples: [
      {
        de: 'Liebe Mira, am Samstag komme ich um 11 Uhr mit dem Zug. Bringst du bitte eine Jacke mit? Es soll kalt werden. Bis bald, Jonas',
        en: 'Dear Mira, I arrive by train at 11 on Saturday. Please bring a jacket? It is supposed to get cold. See you soon, Jonas',
      },
    ],
    tables: [
      {
        caption: 'Underline before you answer',
        headers: ['Fact type', 'In the sample'],
        rows: [
          ['who', 'Jonas → Mira'],
          ['when', 'Samstag, 11 Uhr'],
          ['how', 'mit dem Zug'],
          ['request', 'Jacke mitbringen'],
        ],
      },
    ],
  },
  'a2-read-notices': {
    category: 'a2-reading',
    level: 'A2',
    title: 'Notice boards',
    teaser: 'Ads, rules, and “who needs this?”',
    wordIds: ['wohnung', 'kurs', 'schule', 'arbeit', 'gesucht'],
    points: [
      'Same matching idea as A1, but ads are denser: hours, price, who it is for (Familien / Studenten / ab 18).',
      'Hausordnung bits appear: Bitte nach 22 Uhr leise sein. Fahrräder nicht im Flur.',
      'One ad is leftover. Do not force a match.',
    ],
    examples: [
      { de: 'Babysitter gesucht, zwei Abende pro Woche, 12 €/Stunde.', en: 'Babysitter wanted, two evenings a week, €12/hour.' },
      { de: 'Bitte den Müll dienstags vor die Tür stellen.', en: 'Please put the rubbish out on Tuesday.' },
    ],
    tables: [
      {
        caption: 'Dense ads',
        headers: ['Look for', 'Example'],
        rows: [
          ['who for', 'Familien / Studenten / ab 18'],
          ['pay', '12 €/Stunde'],
          ['rule', 'nach 22 Uhr leise'],
        ],
      },
    ],
  },
  'a2-speak-plan': {
    category: 'a2-speaking',
    level: 'A2',
    title: 'Plan something',
    teaser: 'Agree a day, a place, and a job each.',
    wordIds: ['treffen', 'zeit', 'wo', 'koennen', 'sollen'],
    points: [
      'A2 Sprechen Teil 3: negotiate. Wann? Wo? Was bringen wir mit? Wer kauft die Tickets?',
      'Phrases: Wollen wir …? Wie wäre es mit …? Das ist gut. Für mich ist Dienstag besser. Einverstanden.',
      'Do not monologue. Ask your partner at least two questions.',
    ],
    examples: [
      { de: 'Wollen wir am Samstag ins Museum gehen?', en: 'Shall we go to the museum on Saturday?' },
      { de: 'Für mich ist 15 Uhr besser. Und du?', en: '3 p.m. is better for me. And you?' },
      { de: 'Gut, dann treffe ich dich vor dem Eingang.', en: 'Good, then I will meet you in front of the entrance.' },
    ],
    tables: [
      {
        caption: 'Planning chunks',
        headers: ['Deutsch', 'English'],
        rows: [
          ['Wollen wir …?', 'Shall we …?'],
          ['Wie wäre es mit …?', 'How about …?'],
          ['Für mich ist X besser.', 'X is better for me.'],
          ['Einverstanden.', 'Agreed.'],
        ],
      },
    ],
  },
  'a2-speak-daily': {
    category: 'a2-speaking',
    level: 'A2',
    title: 'Everyday talk',
    teaser: 'Your day, your flat, your last weekend.',
    wordIds: ['wohnen', 'arbeiten', 'familie', 'woche', 'wetter'],
    points: [
      'Teil 2 is a short talk about your life: housing, work, free time, last weekend (Perfekt).',
      'Aim for 8–10 sentences. Mix present and Perfekt: Ich wohne … Gestern habe ich …',
      'If you freeze, restart with a chunk: Also, ich erzähle von meinem Wochenende.',
    ],
    examples: [
      { de: 'Ich wohne in einer kleinen Wohnung in der Stadt. Am Wochenende habe ich Freunde getroffen.', en: 'I live in a small flat in town. At the weekend I met friends.' },
    ],
    tables: [
      {
        caption: 'Everyday talk mix',
        headers: ['Tense', 'Use'],
        rows: [
          ['Präsens', 'Ich wohne … Ich arbeite …'],
          ['Perfekt', 'Am Wochenende habe ich …'],
          ['restart', 'Also, ich erzähle von …'],
        ],
      },
    ],
  },
  'a2-write-email': {
    category: 'a2-writing',
    level: 'A2',
    title: 'A short email',
    teaser: 'Three bullets, one or two sentences each.',
    wordIds: ['schreiben', 'termin', 'kommen', 'danke', 'bitte'],
    points: [
      'telc A2 Schreiben Teil 2: choose 3 of 4 bullets. One or two sentences each. Do not skip a chosen bullet.',
      'Open and close: Liebe/r … / Viele Grüße. Formal: Sehr geehrte Damen und Herren / Mit freundlichen Grüßen.',
      'Cover reason + new suggestion + a question. That is usually enough for the points.',
    ],
    examples: [
      {
        de: 'Liebe Frau Keller, ich kann am Mittwoch nicht zum Kurs kommen, weil ich einen Arzttermin habe. Kann ich die Hausaufgaben per E-Mail bekommen? Viele Grüße, Omar Said',
        en: 'Dear Ms Keller, I cannot come to class on Wednesday because I have a doctor’s appointment. Can I get the homework by email? Best wishes, Omar Said',
      },
    ],
    tables: [
      {
        caption: 'A2 email',
        headers: ['Part', 'Personal', 'Formal'],
        rows: [
          ['open', 'Liebe/r …', 'Sehr geehrte Damen und Herren'],
          ['close', 'Viele Grüße', 'Mit freundlichen Grüßen'],
          ['job', 'reason + new plan + question', 'same three bullets'],
        ],
      },
    ],
  },
  'b1-konjunktiv2': {
    category: 'b1-grammar',
    level: 'B1',
    title: 'Konjunktiv II',
    teaser: 'would, could, should — polite and unreal.',
    wordIds: ['werden', 'haben', 'sein', 'koennen', 'sollen'],
    points: [
      'Polite requests: Könnten Sie mir helfen? Ich hätte gern einen Termin. Das wäre schön.',
      'Unreal now: Wenn ich Zeit hätte, würde ich kommen. Wenn das Wetter besser wäre, gingen wir spazieren.',
      'Common forms: würde + infinitive; hätte / wäre; könnte / müsste / sollte. Exams love the wenn-clause + würde pair.',
    ],
    tables: [
      {
        caption: 'High-frequency forms',
        headers: ['Use', 'German'],
        rows: [
          ['I would …', 'ich würde …'],
          ['I would have …', 'ich hätte …'],
          ['I would be …', 'ich wäre …'],
          ['Could you …?', 'Könnten Sie …?'],
          ['I would like …', 'Ich hätte gern …'],
        ],
      },
    ],
    examples: [
      { de: 'Wenn ich mehr Geld hätte, würde ich eine größere Wohnung mieten.', en: 'If I had more money, I would rent a bigger flat.' },
    ],
  },
  'b1-relativ': {
    category: 'b1-grammar',
    level: 'B1',
    title: 'Relative clauses',
    teaser: 'der Mann, der … — extra info in a comma pair.',
    wordIds: ['der', 'die', 'das', 'wo', 'wohnen'],
    points: [
      'der / die / das / die match the noun’s gender and the case inside the relative clause: der Mann, den ich kenne; die Frau, der ich helfe.',
      'wo for places: die Stadt, wo ich wohne. whose: dessen (masc/neut), deren (fem/plural).',
      'Comma before the relative clause. Verb last: Das ist der Kurs, den ich suche.',
    ],
    examples: [
      { de: 'Das ist die Kollegin, die gestern angerufen hat.', en: 'That is the colleague who called yesterday.' },
      { de: 'Ich habe einen Freund, dem ich oft schreibe.', en: 'I have a friend I often write to (dative).' },
      { de: 'Köln ist die Stadt, wo ich zum ersten Mal Deutsch gelernt habe.', en: 'Cologne is the city where I first learned German.' },
    ],
    tables: [
      {
        caption: 'Relative pronouns',
        headers: ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
        rows: [
          ['Nominative', 'der', 'die', 'das', 'die'],
          ['Accusative', 'den', 'die', 'das', 'die'],
          ['Dative', 'dem', 'der', 'dem', 'denen'],
          ['Genitive', 'dessen', 'deren', 'dessen', 'deren'],
        ],
      },
    ],
  },
  'b1-passiv': {
    category: 'b1-grammar',
    level: 'B1',
    title: 'Passiv',
    teaser: 'werden + Partizip II — the thing is done.',
    wordIds: ['werden', 'machen', 'schreiben', 'sprechen'],
    points: [
      'Present: Das Formular wird ausgefüllt. Perfekt: Das Formular ist ausgefüllt worden.',
      'Use it for processes and rules: Hier wird Deutsch gesprochen. Die Prüfung wird um 9 Uhr begonnen.',
      'If you need the person, add von: Der Brief wird von der Chefin unterschrieben.',
    ],
    examples: [
      { de: 'Die E-Mails werden jeden Morgen gelesen.', en: 'The emails are read every morning.' },
      { de: 'Das Fenster ist gestern repariert worden.', en: 'The window was repaired yesterday.' },
    ],
    tables: [
      {
        caption: 'Passive tenses',
        headers: ['Tense', 'Form', 'Example'],
        rows: [
          ['Present', 'wird + Partizip', 'Das Formular wird ausgefüllt.'],
          ['Präteritum', 'wurde + Partizip', 'Das Formular wurde ausgefüllt.'],
          ['Perfekt', 'ist + Partizip + worden', 'Das Formular ist ausgefüllt worden.'],
          ['+ modal', 'modal + Partizip + werden', 'Das muss ausgefüllt werden.'],
        ],
      },
    ],
  },
  'b1-opinions': {
    category: 'b1-vocab',
    level: 'B1',
    title: 'Opinions and reasons',
    teaser: 'Meiner Meinung nach … weil …',
    wordIds: ['meinung', 'grund', 'finden', 'glauben', 'wichtig'],
    points: [
      'Forum and speaking tasks need a stance plus a reason. Ich finde, dass … Ein Grund dafür ist … Außerdem … Deshalb …',
      'Soften: Ich bin nicht sicher, aber … Einerseits … andererseits …',
      'Disagree politely: Das sehe ich anders. Da bin ich anderer Meinung.',
    ],
    examples: [
      { de: 'Meiner Meinung nach sollte man weniger Auto fahren, weil die Stadt dann leiser ist.', en: 'In my opinion people should drive less because the city is then quieter.' },
      { de: 'Ein weiterer Grund ist, dass das Fahrrad oft schneller ist.', en: 'Another reason is that the bike is often faster.' },
    ],
    tables: [
      {
        caption: 'Opinion scaffold',
        headers: ['Job', 'Chunk'],
        rows: [
          ['stance', 'Meiner Meinung nach … / Ich finde, dass …'],
          ['reason', 'Ein Grund dafür ist, dass …'],
          ['add', 'Außerdem …'],
          ['soft disagree', 'Das sehe ich anders.'],
          ['close', 'Deshalb …'],
        ],
      },
    ],
  },
  'b1-media': {
    category: 'b1-vocab',
    level: 'B1',
    title: 'News and internet',
    teaser: 'Zeitung, Nachrichten, online comments.',
    wordIds: ['zeitung', 'nachricht', 'internet', 'film', 'finden'],
    points: [
      'B1 Lesen uses press texts and forum comments. Words: die Nachricht, der Bericht, die Umfrage, der Leserbrief, teilen, liken, kommentieren.',
      'Ich informiere mich online / in der Zeitung. Die Schlagzeile, der Artikel, die Quelle.',
      'Be ready to say whether a comment is dafür or dagegen.',
    ],
    examples: [
      { de: 'Ich lese die Nachrichten meistens auf dem Handy.', en: 'I usually read the news on my phone.' },
      { de: 'In dem Forum sind die meisten Kommentare dagegen.', en: 'In the forum most comments are against it.' },
    ],
    tables: [
      {
        caption: 'Media words',
        headers: ['Deutsch', 'English'],
        rows: [
          ['die Nachrichten', 'news'],
          ['der Kommentar', 'comment'],
          ['das Forum', 'forum'],
          ['dafür / dagegen', 'in favour / against'],
        ],
      },
    ],
  },
  'b1-listen-interview': {
    category: 'b1-listening',
    level: 'B1',
    title: 'Interviews',
    teaser: 'A radio guest: job, opinion, one surprise.',
    wordIds: ['arbeiten', 'meinung', 'finden', 'wichtig', 'leben'],
    points: [
      'B1 Hören has interviews and discussions. First speaker vs second speaker: who wants what?',
      'Listen for attitude: begeistert, skeptisch, unsicher, dagegen.',
      'A number or a year often sits in the middle. Do not write the first number you hear if the question asks for something else.',
    ],
    examples: [
      {
        de: 'Ich arbeite seit 2019 in einem Museum. Am Anfang war ich unsicher, aber jetzt finde ich den Kontakt mit Besuchern wichtig.',
        en: 'I have worked in a museum since 2019. At first I was unsure, but now I find contact with visitors important.',
      },
    ],
    tables: [
      {
        caption: 'Interview listen-fors',
        headers: ['Hunt', 'Example'],
        rows: [
          ['since when', 'seit 2019'],
          ['then vs now', 'am Anfang … jetzt'],
          ['why it matters', 'Kontakt mit Besuchern'],
        ],
      },
    ],
  },
  'b1-read-forum': {
    category: 'b1-reading',
    level: 'B1',
    title: 'Forum comments',
    teaser: 'Who is for, who is against, who is in between.',
    wordIds: ['meinung', 'finden', 'aber', 'deshalb', 'nachricht'],
    points: [
      'Goethe B1 Lesen Teil 4: reader comments. Match a stance to a person. One unused.',
      'Mark dafür / dagegen / jein in the margin before you look at the questions.',
      'Words that flip a comment: allerdings, trotzdem, ich bin nicht sicher, es kommt darauf an.',
    ],
    examples: [
      { de: 'Klar bin ich dafür. Homeoffice spart Zeit. Allerdings fehlt mir das Team.', en: 'I am clearly in favour. Working from home saves time. Still, I miss the team.' },
      { de: 'Das sehe ich anders. Ohne Büro verliert man den Kontakt.', en: 'I see it differently. Without an office you lose contact.' },
    ],
    tables: [
      {
        caption: 'Forum stance words',
        headers: ['Deutsch', 'English'],
        rows: [
          ['dafür / dagegen', 'for / against'],
          ['allerdings', 'however'],
          ['Das sehe ich anders.', 'I see it differently.'],
        ],
      },
    ],
  },
  'b1-read-article': {
    category: 'b1-reading',
    level: 'B1',
    title: 'A short article',
    teaser: 'Press text: heading, gist, one detail.',
    wordIds: ['zeitung', 'stadt', 'leute', 'mehr', 'problem'],
    points: [
      'Teil 2 style: a newspaper paragraph and a/b/c questions. Read the question first, then the paragraph.',
      'The wrong options often reuse a word from the text but change the meaning (alle / einige, immer / oft).',
      'Ignore unknown nouns if the verb and the number are clear.',
    ],
    examples: [
      {
        de: 'Immer mehr Städte machen die Innenstadt autofrei. Nicht alle Händler sind zufrieden, aber die Zahl der Fußgänger steigt.',
        en: 'More and more cities are making the centre car-free. Not all shopkeepers are happy, but pedestrian numbers are rising.',
      },
    ],
    tables: [
      {
        caption: 'Article reading',
        headers: ['Look for', 'In the sample'],
        rows: [
          ['trend', 'Immer mehr Städte'],
          ['who is unhappy', 'nicht alle Händler'],
          ['result', 'mehr Fußgänger'],
        ],
      },
    ],
  },
  'b1-speak-present': {
    category: 'b1-speaking',
    level: 'B1',
    title: 'Present a topic',
    teaser: 'Three minutes from prompts — Sprechen Teil 2.',
    wordIds: ['meinung', 'beispiel', 'wichtig', 'deshalb'],
    points: [
      'You get slides or bullets. Structure: Einleitung — zwei Punkte mit Beispiel — kurzes Ende. About three minutes.',
      'Chunks: Ich möchte über … sprechen. Ein Vorteil ist … Zum Beispiel … Zusammenfassend kann man sagen …',
      '15 minutes prep in the real exam. Write three cue words, not a speech.',
    ],
    examples: [
      { de: 'Ich möchte über das Thema “Sport im Alltag” sprechen.', en: 'I would like to talk about sport in everyday life.' },
      { de: 'Ein Vorteil ist, dass man sich besser konzentrieren kann. Zum Beispiel nach einem Spaziergang.', en: 'One advantage is that you can concentrate better. For example after a walk.' },
    ],
    tables: [
      {
        caption: 'Talk shape',
        headers: ['Part', 'Chunk'],
        rows: [
          ['open', 'Ich möchte über … sprechen.'],
          ['point', 'Ein Vorteil / Nachteil ist, dass …'],
          ['example', 'Zum Beispiel …'],
          ['close', 'Zusammenfassend kann man sagen, …'],
        ],
      },
    ],
  },
  'b1-speak-discuss': {
    category: 'b1-speaking',
    level: 'B1',
    title: 'Comment and discuss',
    teaser: 'React to your partner, then plan together.',
    wordIds: ['finden', 'meinung', 'aber', 'gut'],
    points: [
      'Teil 3: comment on the partner’s talk. Das fand ich interessant, weil … Eine Frage dazu: …',
      'Teil 1 is often a joint plan. Offer, reject with a reason, suggest a third way.',
      'Do not steamroll. Invite: Was meinst du? Sollen wir …?',
    ],
    examples: [
      { de: 'Das sehe ich ähnlich. Allerdings würde ich eher am Abend trainieren.', en: 'I see it similarly. I would rather train in the evening, though.' },
      { de: 'Einverstanden. Dann treffen wir uns um 18 Uhr vor der Halle.', en: 'Agreed. Then we meet at 6 in front of the hall.' },
    ],
    tables: [
      {
        caption: 'Discussion moves',
        headers: ['Job', 'Chunk'],
        rows: [
          ['agree', 'Das sehe ich ähnlich.'],
          ['limit', 'Allerdings würde ich …'],
          ['ask', 'Was meinst du?'],
          ['close a plan', 'Einverstanden. Dann …'],
        ],
      },
    ],
  },
  'b1-write-forum': {
    category: 'b1-writing',
    level: 'B1',
    title: 'A forum post',
    teaser: 'Opinion + reasons — Schreiben Aufgabe 2.',
    wordIds: ['meinung', 'grund', 'finden', 'deshalb', 'schreiben'],
    points: [
      'A Diskussionsbeitrag: say if you agree, give two reasons, maybe a counter-thought, close. About 80–100 words in classroom practice.',
      'No “Hallo Mama.” This is public. Neutral opening: Ich habe den Text gelesen und bin der Meinung, dass …',
      'Mark the content bullets. Missing a bullet costs more than a grammar slip.',
    ],
    examples: [
      {
        de: 'Ich bin dafür, dass Geschäfte sonntags öffnen. Ein Grund ist, dass viele unter der Woche arbeiten. Allerdings brauchen auch die Verkäufer frei. Deshalb könnte man nur bis 14 Uhr öffnen.',
        en: 'I am in favour of shops opening on Sunday. One reason is that many people work on weekdays. Staff still need time off, though. So one could open only until 2 p.m.',
      },
    ],
    tables: [
      {
        caption: 'Forum post',
        headers: ['Move', 'Chunk'],
        rows: [
          ['open', 'Ich habe den Text gelesen und bin der Meinung, dass …'],
          ['reason', 'Ein Grund ist, dass …'],
          ['limit', 'Allerdings …'],
          ['close', 'Deshalb …'],
        ],
      },
    ],
  },
  'b1-write-formal': {
    category: 'b1-writing',
    level: 'B1',
    title: 'A formal email',
    teaser: 'Enquiry, apology, or complaint with all the points.',
    wordIds: ['schreiben', 'termin', 'bitte', 'danke', 'problem'],
    points: [
      'Sehr geehrte Damen und Herren, / Sehr geehrte Frau Keller, — then the reason in sentence one.',
      'Cover every content point. Close: Ich bitte um eine kurze Rückmeldung. Mit freundlichen Grüßen + full name.',
      'Register: no Hi, no emojis, no ich will. Prefer ich möchte / ich würde gern / leider muss ich …',
    ],
    examples: [
      {
        de: 'Sehr geehrte Frau Lang, leider muss ich den Kurs am 12. März absagen, weil ich im Krankenhaus bin. Bitte sagen Sie mir, ob ich den Platz im April behalten kann. Mit freundlichen Grüßen, Nora Klein',
        en: 'Dear Ms Lang, I unfortunately have to cancel the 12 March course because I am in hospital. Please tell me whether I can keep the April place. Yours sincerely, Nora Klein',
      },
    ],
    tables: [
      {
        caption: 'Formal mail',
        headers: ['Part', 'Write'],
        rows: [
          ['open', 'Sehr geehrte Damen und Herren, / Sehr geehrte Frau …,'],
          ['reason first', 'hiermit … / leider muss ich …'],
          ['ask', 'Ich bitte um eine kurze Rückmeldung.'],
          ['close', 'Mit freundlichen Grüßen'],
        ],
      },
    ],
  },
  'b2-kj1': {
    category: 'b2-grammar',
    level: 'B2',
    title: 'Konjunktiv I',
    teaser: 'Reported speech: er habe, sie seien.',
    wordIds: ['sagen', 'werden', 'haben', 'sein'],
    points: [
      'News and minutes: Er sagte, er habe keine Zeit. Sie erklärte, die Zahlen seien gestiegen.',
      'If Konjunktiv I looks like the indicative, use Konjunktiv II: sie haben → sie hätten.',
      'Full classroom page with tables: Course L2 Indirekte Rede.',
    ],
    tables: [
      {
        caption: 'K I core',
        headers: ['Person', 'haben', 'sein'],
        rows: [
          ['ich', 'habe', 'sei'],
          ['er / sie / es', 'habe', 'sei'],
          ['wir / sie', 'haben → hätten', 'seien'],
        ],
      },
    ],
    examples: [
      { de: 'Die Sprecherin erklärte, die Zahlen seien gestiegen.', en: 'The speaker explained that the figures had risen.' },
    ],
  },
  'b2-passiv-arten': {
    category: 'b2-grammar',
    level: 'B2',
    title: 'Two passives',
    teaser: 'wird geöffnet vs ist geöffnet.',
    wordIds: ['werden', 'sein', 'machen'],
    points: [
      'Process: werden + Partizip (action happening). State: sein + Partizip (result sitting there).',
      'worden is the passive helper in Perfekt. geworden means became.',
    ],
    tables: [
      {
        caption: 'Do not mix',
        headers: ['German', 'Reading'],
        rows: [
          ['Die Tür wird geöffnet.', 'someone is opening it'],
          ['Die Tür ist geöffnet.', 'it is in the open state'],
          ['Die Tür ist geöffnet worden.', 'the opening happened (process, past)'],
          ['Es ist kalt geworden.', 'it became cold (not passive)'],
        ],
      },
    ],
  },
  'b2-nominal': {
    category: 'b2-grammar',
    level: 'B2',
    title: 'Nominalisierung',
    teaser: 'Turn a clause into a noun for office German.',
    wordIds: ['schreiben', 'kommen', 'arbeit'],
    points: [
      'Bitte rufen Sie zurück → Wir bitten um einen Rückruf. weil wir prüfen → aufgrund der Prüfung.',
    ],
    tables: [
      {
        caption: 'Clause → noun',
        headers: ['Spoken', 'Written'],
        rows: [
          ['Bitte rufen Sie zurück.', 'Wir bitten um einen Rückruf.'],
          ['weil er krank ist', 'aufgrund seiner Krankheit'],
          ['nachdem wir ankamen', 'nach der Ankunft'],
        ],
      },
    ],
  },
  'b2-register': {
    category: 'b2-vocab',
    level: 'B2',
    title: 'Formal vs informal',
    teaser: 'Same idea, two jackets.',
    wordIds: ['bitte', 'danke', 'schreiben'],
    points: [
      'Forum can be ich finde. Work mail wants das halte ich für / hiermit / anbei.',
    ],
    tables: [
      {
        caption: 'Pairs',
        headers: ['Informal', 'Formal'],
        rows: [
          ['Hi / Hallo', 'Sehr geehrte …'],
          ['Ich will', 'ich möchte / ich würde gern'],
          ['kriegen', 'erhalten'],
          ['Tschüss', 'Mit freundlichen Grüßen'],
        ],
      },
    ],
  },
  'b2-write-forum': {
    category: 'b2-writing',
    level: 'B2',
    title: 'A 150-word argument',
    teaser: 'Goethe B2 Schreiben Teil 1 shape.',
    wordIds: ['meinung', 'grund', 'deshalb', 'wichtig'],
    points: [
      'Define, give two reasons, one counter-view, close. About 150 words. No greeting to a friend.',
    ],
    tables: [
      {
        caption: 'Scaffold',
        headers: ['Move', 'Chunk'],
        rows: [
          ['define', 'Unter … verstehe ich …'],
          ['pro', 'Ein zentrales Argument ist, dass …'],
          ['contra', 'Allerdings darf man nicht vergessen, dass …'],
          ['close', 'Alles in allem plädiere ich für …'],
        ],
      },
    ],
    examples: [
      {
        de: 'Unter Heimat verstehe ich eher Menschen als Orte. Ein Grund ist, dass man umziehen kann, Bindungen aber mitnimmt. Allerdings brauchen viele auch einen konkreten Platz. Alles in allem ist Heimat für mich Sprache und Alltag.',
        en: 'By home I mean people more than places. One reason is that you can move and still keep ties. Many people still need a concrete place, though. All in all, home for me is language and everyday life.',
      },
    ],
  },
  'exam-how-a1': {
    category: 'pruefung-method',
    level: 'A1',
    title: 'A1 paper: form, 30 words, three talks',
    teaser: 'How Goethe and telc Start Deutsch 1 actually give points.',
    points: [
      'Goethe A1 is one exam, not modules. Written work is 75 of 100 points (about 65 minutes). Speaking is 25 points in about 15 minutes, with no preparation, usually in a group of up to four.',
      'Pass is 60 of 100, and you must sit every part. A strong reading score does not replace a silent speaking part.',
      'telc A1 is the same task family. On the telc speaking sheet the introduction is worth 3 points and the other two tasks are worth 6 each. Spend your practice on asking, answering, and requests.',
      'Listening Teil 2 (announcements) is played once. Dialogues are played twice. Write the number, time, or place on the first hearing. Use the second hearing only to check.',
      'Writing Teil 2 is about 30 words. Markers score the content points in the prompt first (Can you come? Why not? New time?). A correct verb that ignores the prompt does not get that point.',
      'ÖSD A1 is the odd one out: you get about 10 minutes to prepare the oral, and the written module has minimum scores inside Lesen, Hören, and the short text. If your centre is ÖSD, practice with that prep time. If it is Goethe or telc, practice with none.',
    ],
    examples: [
      {
        de: 'Liebe Anna, ich kann am Samstag nicht kommen. Ich muss arbeiten. Ich bin erst abends frei. Hast du am Sonntag um 15 Uhr Zeit? Wir können dann Kaffee trinken. Bis dann. Liebe Grüße Tim',
        en: 'About 30 words in the message. It hits three content points: cannot come, reason, new time and a question.',
      },
    ],
    tables: [
      {
        caption: 'Speaking, no notes in front of you',
        headers: ['Teil', 'What you say', 'Shape'],
        rows: [
          ['1 Introduce', 'name, country, city, job or study, one hobby, one language', 'Six short sentences. Sie only if the card says Sie.'],
          ['2 Ask and answer', 'cards about shopping, time, family, food', 'One question, then a full answer, then one more question.'],
          ['3 Request', 'ask for something small and react to a partner’s request', 'Kannst du …? / Können Sie …? Ja, klar. or Tut mir leid, ich kann nicht.'],
        ],
      },
      {
        caption: 'Form Teil 1 — write it, do not translate it',
        headers: ['Field', 'What they want'],
        rows: [
          ['Name / Vorname', 'family name and given name in the right boxes'],
          ['Adresse / PLZ / Ort', 'street, postcode, town'],
          ['Land / Nationalität', 'Deutschland, Spanien… / deutsch, spanisch'],
          ['Telefon / Geburtsdatum', 'digits exactly; date as TT.MM.JJJJ'],
        ],
      },
    ],
  },
  'exam-how-a2': {
    category: 'pruefung-method',
    level: 'A2',
    title: 'A2 paper: the 45 and 15 floor',
    teaser: 'Goethe A2 can fail you at 60 overall if writing+reading+listening or speaking is too low.',
    points: [
      'Goethe A2 pass is 60 of 100 overall, and at least 45 of the 75 written points, and at least 15 of the 25 oral points. 70 overall with 14 oral is still a fail. Train speaking even when reading feels fine.',
      'telc A2 is one exam as well (no module retake). The official practice test passes at 36 of 60 raw points, which is 60 percent. The email is: choose 3 of the 4 bullets and write one or two sentences on each.',
      'A bullet you skip is a content point you cannot get back with nicer grammar. Pick three bullets, mark them, write them, then stop.',
      'weil sends the verb to the end. deshalb keeps verb-second. Examiners hear the difference in the “plan something” task and see it in the email.',
      'Speaking has no prep on Goethe A2. Teil 1 is questions about you. Teil 2 is a short talk about your own life. Teil 3 is agreeing a plan with a partner. telc gives the most points to everyday talk and to negotiating (6 and 6), not to the introduction (3).',
    ],
    examples: [
      {
        de: 'Liebe Sara, danke für die Einladung. Am Freitag kann ich leider nicht kommen, weil ich arbeiten muss. Hast du am Samstag um 18 Uhr Zeit? Ich bringe einen Kuchen mit. Liebe Grüße, Tim',
        en: 'Three bullets: thanks and a no, a reason with weil, a new time. The fourth bullet (what to bring) is the one left out on purpose.',
      },
    ],
    tables: [
      {
        caption: 'Plan something (Sprechen Teil 3)',
        headers: ['Move', 'Say this'],
        rows: [
          ['Suggest', 'Wir könnten am Samstag ins Kino gehen.'],
          ['Prefer', 'Ich würde lieber spazieren gehen.'],
          ['Agree', 'Einverstanden. Um wie viel Uhr?'],
          ['Close', 'Gut, dann treffen wir uns um 16 Uhr am Kino.'],
        ],
      },
    ],
  },
  'exam-how-b1': {
    category: 'pruefung-method',
    level: 'B1',
    title: 'B1 paper: one module at a time',
    teaser: 'Goethe and ÖSD B1 are four separate modules. telc B1 is written plus oral, with a grammar cloze Goethe does not have.',
    points: [
      'Goethe-Zertifikat B1 and ÖSD Zertifikat B1 are the same modular exam. Each of Lesen, Hören, Schreiben, and Sprechen is 100 points. You pass a module at 60. You can retake one module. A failed Lesen does not cancel a passed Schreiben.',
      'So the course is four short loops, not one long grammar review. Sit the module you booked. On a full day the written modules run about 165 minutes with no break, in the order the centre prints.',
      'Lesen has five parts: a personal email (true/false), a press text (a/b/c), ads matched to people, forum comments (for or against), and a set of rules. The ad task always has a spare ad. “No ad fits” is a real answer. Do not force a match.',
      'Schreiben is three tasks in 60 minutes: a personal email, a forum opinion, and a short formal email. Hit every bullet. Opinion needs a view, two reasons, and a close. The formal email needs Sehr geehrte … and Mit freundlichen Grüßen.',
      'Sprechen gives you 15 minutes alone with the paper before a pair exam of about 15 minutes. Use that prep to write six prompt words for the talk (intro, three points, example, close), not a full script. Teil 1 is planning together. Teil 2 is your talk. Teil 3 is a comment on your partner.',
      'telc Deutsch B1 is a different paper. You need 60 percent on the written exam and 60 percent on the oral exam separately. The written paper includes Sprachbausteine, a grammar-and-word cloze. DTZ (the integration-course exam) is another format again: one sitting can come out as A2 or B1. Do not train DTZ with a Goethe B1 book.',
    ],
    examples: [
      {
        de: 'Ich bin dafür, dass der Kurs am Abend bleibt. Erstens arbeiten viele erst um 17 Uhr fertig. Zweitens ist der Raum morgens oft belegt. Ein Kollege von mir konnte den Morgenkurs nie besuchen. Deshalb sollte der Abendkurs bleiben.',
        en: 'Forum shape: stance, two reasons, one example, a close. That is the B1 opinion task.',
      },
    ],
    tables: [
      {
        caption: 'Which B1 exam you are sitting',
        headers: ['Exam', 'How you pass', 'Extra task'],
        rows: [
          ['Goethe / ÖSD B1', '60% on each module you take', 'No separate grammar cloze'],
          ['telc Deutsch B1', '60% written and 60% oral', 'Sprachbausteine cloze'],
          ['DTZ / telc A2·B1', 'Scaled result: A2 or B1', 'Everyday Germany topics; not four Goethe modules'],
        ],
      },
    ],
  },
  'exam-how-b2': {
    category: 'pruefung-method',
    level: 'B2',
    title: 'B2 paper: 150 words, 100 words, a talk',
    teaser: 'Goethe B2 modules, and why ÖSD B2 is a longer clock.',
    points: [
      'Goethe B2 is modular, like B1. Pass a module at 60 of 100. Lesen is 65 minutes (five parts). Hören is about 40 minutes. Schreiben is 75 minutes. Speaking is about 15 minutes in a pair, after 15 minutes of preparation.',
      'Schreiben Teil 1 is a forum post of about 150 words. The prompt has four content bullets. Write an introduction, one short block per bullet, and a close. A beautiful paragraph that skips a bullet loses that bullet.',
      'Schreiben Teil 2 is a work email of about 100 words, often with about 25 minutes left if you spent 50 on the forum. It needs a real Anrede, the problem, a sign that you understood the other person, a concrete proposal, and Mit freundlichen Grüßen. Stay in Sie.',
      'Hören Teil 1 and Teil 3 are played once (short conversations, and who-said-what). The interview and the short lecture are played twice. On a once-only part, decide during the audio. Do not wait for a second play that will not come.',
      'Sprechen Teil 1: you choose one of two topics, give a structured talk, then take questions. Teil 2 is a discussion. In the 15-minute prep, write a four-line plan and three chunks (einerseits, andererseits, allerdings). Do not write every sentence. Reading a script aloud is obvious and leaves you nothing for the question.',
      'ÖSD B2 is two modules, not four, and the written time is longer (reading 90, listening about 30, writing 90). telc B2 adds Sprachbausteine and wants 60 percent written and 60 percent oral. Practice the clock of the certificate you booked.',
    ],
    examples: [
      {
        de: 'Sehr geehrte Frau Keller, leider kann ich am Dienstag nicht an der Besprechung teilnehmen, weil ich zu einem Kundentermin muss. Ich verstehe, dass die Unterlagen bis Mittwoch gebraucht werden. Ich schicke Ihnen den Entwurf bis Montag, 16 Uhr. Mit freundlichen Grüßen Tim Berger',
        en: 'Formal B2 email: problem, understanding, a concrete proposal, greeting. About the length of Teil 2 once you add two more sentences.',
      },
    ],
    tables: [
      {
        caption: '150-word forum — time box for 50 minutes',
        headers: ['Minutes', 'Do this'],
        rows: [
          ['0–5', 'Underline the four bullets. Write a German keyword beside each.'],
          ['5–40', 'Intro, four short paragraphs, close. One connector each: deshalb, obwohl, außerdem, allerdings.'],
          ['40–50', 'Count words. Add a missing bullet. Check verb-final after weil, dass, obwohl.'],
        ],
      },
      {
        caption: 'Talk plan you may glance at',
        headers: ['Line', 'Function'],
        rows: [
          ['Thema + Meinung', 'one sentence'],
          ['Punkt 1 + Beispiel', 'work or study'],
          ['Punkt 2 + Gegenpunkt', 'allerdings'],
          ['Fazit', 'zusammenfassend'],
        ],
      },
    ],
  },
  'exam-how-telc-cloze': {
    category: 'pruefung-method',
    level: 'B1',
    title: 'telc Sprachbausteine',
    teaser: 'The cloze on telc B1 and B2. Goethe papers do not have this part.',
    points: [
      'Sprachbausteine is grammar and vocabulary in a real text. One part is usually a choice of three words. Another is a bank of words, with extras that do not fit. It sits in the written exam, so it counts toward the 60 percent written floor.',
      'Read the whole text once before you fill anything. The word before the gap often decides the answer: a preposition (auf, für, mit), an article that must match case, or a connector (weil, obwohl, dass) that forces verb-final in the next clause.',
      'If two options are the same part of speech, test them in the sentence out loud. The one that breaks a fixed verb (warten auf, sich freuen über, sich interessieren für) is wrong even when the English meaning feels close.',
      'Leave a gap you cannot solve and return after the easier ones. A wrong forced answer can spoil the following clause. Goethe candidates can skip this page. telc candidates cannot.',
    ],
    tables: [
      {
        caption: 'What the gap is usually testing',
        headers: ['Clue in the sentence', 'You choose'],
        rows: [
          ['verb + ___ + noun', 'the preposition that belongs to that verb'],
          ['___ + adjective + noun', 'der/die/das or ein in the right case'],
          ['comma, then a subject', 'weil / dass / obwohl / wenn, and the verb goes last'],
          ['two similar verbs', 'the one that fits the object: machen vs tun, kennen vs wissen'],
        ],
      },
    ],
    drills: [
      {
        caption: 'Which word fits?',
        help: 'Type the missing word. These are the patterns Sprachbausteine repeats.',
        headers: ['Sentence', 'Gap'],
        rows: [
          ['Ich warte ___ den Bus.', { answer: 'auf' }],
          ['Sie freut sich ___ das Wochenende.', { answer: 'auf' }],
          ['Er bleibt zu Hause, ___ er krank ist.', { answer: 'weil' }],
          ['___ interessierst du dich?', { answer: ['Wofür', 'wofür'] }],
        ],
      },
    ],
  },
}
