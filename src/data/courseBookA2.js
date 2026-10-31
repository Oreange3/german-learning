function L(spec) {
  return spec
}

export const a2Modules = [
  { id: 'a2-m1', number: 1, title: 'Familie und Wohnen', de: 'Präteritum · Wechselpräpositionen', lessonIds: ['kb-a2-01', 'kb-a2-02', 'kb-a2-03'] },
  { id: 'a2-m2', number: 2, title: 'Stadt und Freizeit', de: 'Einkaufen · Stadt · Kultur', lessonIds: ['kb-a2-04', 'kb-a2-05', 'kb-a2-06'] },
  { id: 'a2-m3', number: 3, title: 'Körper und Arbeit', de: 'Sport · Gesundheit · Job', lessonIds: ['kb-a2-07', 'kb-a2-08', 'kb-a2-09'] },
  { id: 'a2-m4', number: 4, title: 'Essen und wenn', de: 'Restaurant · Freude · Ernährung', lessonIds: ['kb-a2-10', 'kb-a2-11', 'kb-a2-12'] },
  { id: 'a2-m5', number: 5, title: 'Lernen und Medien', de: 'Sprache · Post · Medien', lessonIds: ['kb-a2-13', 'kb-a2-14', 'kb-a2-15'] },
  { id: 'a2-m6', number: 6, title: 'Reisen', de: 'Hotel · Verkehr · Wetter', lessonIds: ['kb-a2-16', 'kb-a2-17', 'kb-a2-18'] },
  { id: 'a2-m7', number: 7, title: 'Gesellschaft', de: 'Kultur · Bücher · Amt', lessonIds: ['kb-a2-19', 'kb-a2-20', 'kb-a2-21'] },
  { id: 'a2-m8', number: 8, title: 'Mobilität und Beruf', de: 'seit · Relativsatz · Alltag', lessonIds: ['kb-a2-22', 'kb-a2-23', 'kb-a2-24'] },
]

export const a2Lessons = {
  'kb-a2-01': L({
    id: 'kb-a2-01',
    level: 'A2',
    number: 1,
    moduleId: 'a2-m1',
    title: 'Früher und Familie',
    de: 'Präteritum sein / haben',
    teaser: 'Tell family-and-job stories with war and hatte.',
    canDo: ['Use war / hatte in speech', 'Talk about parents’ jobs', 'Use unser / euer'],
    grammar: ['Präteritum of sein and haben', 'Possessiv unser / euer'],
    start: {
      de: 'Lea: Mein Opa war Bäcker. Er hatte eine kleine Bäckerei.\nTim: Unsere Oma war Lehrerin. Sie hatte viel Geduld.',
      en: 'Spoken stories still use war / hatte, not ist gewesen, for these two verbs.',
    },
    points: [
      'sein and haben use Präteritum in normal speech: ich war, du warst, er war; ich hatte, du hattest, er hatte.',
      'Most other verbs stay in Perfekt when you talk: Ich habe in Berlin gewohnt.',
    ],
    tables: [
      {
        caption: 'sein / haben — Präteritum',
        headers: ['Person', 'sein', 'haben'],
        rows: [
          ['ich', 'war', 'hatte'],
          ['du', 'warst', 'hattest'],
          ['er / sie / es', 'war', 'hatte'],
          ['wir', 'waren', 'hatten'],
          ['ihr', 'wart', 'hattet'],
          ['sie / Sie', 'waren', 'hatten'],
        ],
      },
      {
        caption: 'unser / euer (like ein)',
        headers: ['', 'masc.', 'fem.', 'neut.', 'plural'],
        rows: [
          ['Nominative', 'unser Vater', 'unsere Mutter', 'unser Kind', 'unsere Kinder'],
          ['Accusative', 'unseren Vater', 'unsere Mutter', 'unser Kind', 'unsere Kinder'],
          ['Dative', 'unserem Vater', 'unserer Mutter', 'unserem Kind', 'unseren Kindern'],
        ],
      },
    ],
    words: [
      ['früher', 'in the past / formerly'],
      ['der Opa / die Oma', 'grandpa / grandma'],
      ['die Geduld', 'patience'],
    ],
    phrases: [
      ['Mein Vater war Koch.', 'My father was a cook.'],
      ['Wir hatten kein Auto.', 'We did not have a car.'],
      ['Unsere Familie war groß.', 'Our family was large.'],
    ],
    speak: 'Three sentences about your family in the past (war / hatte).',
    write: 'A 60-word family story. At least four war/hatte forms.',
    studyIds: ['verbs-sein-haben', 'cases-possessives'],
  }),

  'kb-a2-02': L({
    id: 'kb-a2-02',
    level: 'A2',
    number: 2,
    moduleId: 'a2-m1',
    title: 'Wohin mit dem Schrank?',
    de: 'Wechselpräpositionen',
    teaser: 'Location vs movement: Wo? dative, Wohin? accusative.',
    canDo: ['Choose case after in/an/auf/neben…', 'Put furniture in a room', 'Ask Wo? vs Wohin?'],
    grammar: ['Wechselpräpositionen'],
    start: {
      de: 'Anna: Wohin mit dem Schrank?\nLea: Stell ihn in das Wohnzimmer. Er steht dann neben dem Sofa.\nAnna: Und die Lampe?\nLea: Die kommt auf den Tisch.',
      en: 'Wohin? → in das Wohnzimmer (acc.). Wo? → neben dem Sofa (dat.).',
    },
    points: [
      'an, auf, hinter, in, neben, über, unter, vor, zwischen: Wo? + Dativ, Wohin? + Akkusativ.',
      'in das → ins. in dem → im. an das → ans. an dem → am.',
    ],
    tables: [
      {
        caption: 'Wo? vs Wohin?',
        headers: ['Question', 'Case', 'Example'],
        rows: [
          ['Wo ist der Schrank?', 'dative', 'Er steht in dem (im) Wohnzimmer.'],
          ['Wohin stellst du den Schrank?', 'accusative', 'Ich stelle ihn in das (ins) Wohnzimmer.'],
          ['Wo liegt das Buch?', 'dative', 'Es liegt auf dem Tisch.'],
          ['Wohin legst du das Buch?', 'accusative', 'Ich lege es auf den Tisch.'],
        ],
      },
      {
        caption: 'in / an / auf — articles',
        headers: ['', 'masc. acc. / dat.', 'fem. acc. / dat.', 'neut. acc. / dat.'],
        rows: [
          ['in', 'in den / in dem (im)', 'in die / in der', 'in das (ins) / in dem (im)'],
          ['an', 'an den / an dem (am)', 'an die / an der', 'an das (ans) / an dem (am)'],
          ['auf', 'auf den / auf dem', 'auf die / auf der', 'auf das / auf dem'],
        ],
      },
    ],
    words: [
      ['stellen (stehend)', 'to put upright'],
      ['legen (liegend)', 'to lay down'],
      ['hängen', 'to hang'],
      ['der Schrank', 'cupboard'],
    ],
    phrases: [
      ['Wohin mit dem Stuhl?', 'Where shall this chair go?'],
      ['Stell ihn neben das Fenster.', 'Put it next to the window. (movement)'],
      ['Er steht neben dem Fenster.', 'It stands next to the window. (location)'],
    ],
    speak: 'Move three objects around a room using Wohin? then say where they are (Wo?).',
    write: 'Six sentences: three Wo?, three Wohin?',
    studyIds: ['prepositions', 'articles-dative', 'articles-akkusativ'],
  }),

  'kb-a2-03': L({
    id: 'kb-a2-03',
    level: 'A2',
    number: 3,
    moduleId: 'a2-m1',
    title: 'Reisen und Vorlieben',
    de: 'Tourismus',
    teaser: 'Say what you like doing on holiday.',
    canDo: ['Talk about holiday preferences', 'Use gern / lieber / am liebsten', 'Read a short hotel blurb'],
    grammar: ['gern / lieber / am liebsten'],
    start: {
      de: 'Tim: Ich mache gern Urlaub am Meer. Und du?\nMira: Ich fahre lieber in die Berge. Am liebsten sehen wir uns Städte an.',
      en: 'gern → lieber → am liebsten.',
    },
    points: [
      'Ich schwimme gern. Ich schwimme lieber im See als im Meer. Am liebsten schwimme ich morgens.',
    ],
    tables: [
      {
        caption: 'Preference ladder',
        headers: ['Form', 'Use', 'Example'],
        rows: [
          ['gern', 'like', 'Ich reise gern.'],
          ['lieber', 'prefer', 'Ich reise lieber mit dem Zug.'],
          ['am liebsten', 'like most', 'Am liebsten reise ich allein.'],
        ],
      },
      {
        caption: 'Holiday words',
        headers: ['Deutsch', 'English'],
        rows: [
          ['der Urlaub', 'holiday'],
          ['das Meer', 'sea'],
          ['die Berge', 'mountains'],
          ['das Hotel', 'hotel'],
          ['die Ruhe', 'quiet / rest'],
        ],
      },
    ],
    words: [
      ['reisen', 'to travel'],
      ['sich erholen', 'to recover / relax'],
    ],
    phrases: [
      ['Ich mache gern Urlaub am Meer.', 'I like holidays by the sea.'],
      ['Hier findet man Ruhe.', 'You find peace and quiet here.'],
    ],
    speak: 'Your last holiday vs your ideal holiday (gern / lieber / am liebsten).',
    write: 'A 50-word hotel review: location, room, food, would you go again.',
    studyIds: ['a2-housing'],
  }),

  'kb-a2-04': L({
    id: 'kb-a2-04',
    level: 'A2',
    number: 4,
    moduleId: 'a2-m2',
    title: 'Einkaufen',
    de: 'Was darf es sein?',
    teaser: 'Shop talk: quantities, packing, and paying.',
    canDo: ['Ask for a quantity', 'Use dieser / diese / dieses', 'Pay and complain politely'],
    grammar: ['dieser-words', 'Quantities: ein Stück, ein Kilo'],
    start: {
      de: 'Verkäuferin: Was darf es sein?\nAnna: Ich hätte gern ein Kilo Äpfel und dieses Brot.\nVerkäuferin: Das macht vier Euro zwanzig.',
      en: 'dieser follows der/die/das endings.',
    },
    points: [
      'dieser Mann, diese Frau, dieses Brot; accusative diesen Mann.',
      'Ich hätte gern is another polite order (Konjunktiv shape, used as a set phrase).',
    ],
    tables: [
      {
        caption: 'dieser — like der',
        headers: ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
        rows: [
          ['Nominative', 'dieser', 'diese', 'dieses', 'diese'],
          ['Accusative', 'diesen', 'diese', 'dieses', 'diese'],
          ['Dative', 'diesem', 'dieser', 'diesem', 'diesen'],
        ],
      },
      {
        caption: 'Shop quantities',
        headers: ['Deutsch', 'English'],
        rows: [
          ['ein Stück Kuchen', 'a piece of cake'],
          ['ein Kilo Äpfel', 'a kilo of apples'],
          ['200 Gramm Käse', '200 grams of cheese'],
          ['eine Tüte', 'a bag'],
          ['bar / mit Karte', 'cash / by card'],
        ],
      },
    ],
    words: [
      ['einkaufen', 'to shop'],
      ['die Theke', 'counter'],
      ['der Preis', 'price'],
    ],
    phrases: [
      ['Was darf es sein?', 'What can I get you?'],
      ['Ich hätte gern …', 'I would like …'],
      ['Kann ich mit Karte zahlen?', 'Can I pay by card?'],
    ],
    speak: 'Buy three items with quantities and ask the price.',
    write: 'A shopping list in German with articles + a 3-line dialogue.',
    studyIds: ['nouns-things', 'cases-demonstratives'],
  }),

  'kb-a2-05': L({
    id: 'kb-a2-05',
    level: 'A2',
    number: 5,
    moduleId: 'a2-m2',
    title: 'Die Stadt zeigen',
    de: 'Stadtbesichtigung',
    teaser: 'Plan a city walk and write a short postcard.',
    canDo: ['Suggest a route', 'Name sights', 'Write a postcard / short email'],
    grammar: ['wollen / möchten for plans', 'an + dative for rivers/squares often'],
    start: {
      de: 'Mira: Schau mal, der Dom ist schön!\nTim: Wir können zuerst zum Markt gehen und dann an den Rhein.\nMira: Gut. Ich schreibe Anna eine Karte.',
      en: 'Planning a walk, then a short text.',
    },
    points: [
      'Many cities: der Dom, das Museum, der Markt, die Brücke, der Fluss.',
      'Postcard set: Liebe/r …, wir sind in …, das Wetter ist …, bis bald.',
    ],
    tables: [
      {
        caption: 'Sights',
        headers: ['Deutsch', 'English'],
        rows: [
          ['der Dom', 'cathedral'],
          ['das Museum', 'museum'],
          ['die Brücke', 'bridge'],
          ['der Marktplatz', 'market square'],
          ['das Rathaus', 'town hall'],
        ],
      },
    ],
    words: [
      ['besichtigen', 'to visit / sightsee'],
      ['die Karte', 'card / map / ticket (context)'],
      ['zuerst / dann / danach', 'first / then / after that'],
    ],
    phrases: [
      ['Wir können zuerst …', 'We can first …'],
      ['Schau mal!', 'Look!'],
      ['Liebe Grüße aus Köln', 'Love from Cologne'],
    ],
    speak: 'Plan a 4-stop city walk out loud.',
    write: 'A 40-word postcard from a German city.',
    studyIds: ['a1-write-note'],
  }),

  'kb-a2-06': L({
    id: 'kb-a2-06',
    level: 'A2',
    number: 6,
    moduleId: 'a2-m2',
    title: 'Kultur und Termine',
    de: 'Veranstaltungen',
    teaser: 'Talk about concerts, cinema, and favourite events.',
    canDo: ['Read a simple events notice', 'Say what you are interested in', 'Invite someone out'],
    grammar: ['sich interessieren für + Akk.', 'am + date'],
    start: {
      de: 'Anna: Interessierst du dich für Jazz?\nLea: Ja. Am Freitag ist ein Konzert im Park. Kommst du mit?',
      en: 'sich interessieren für takes accusative.',
    },
    points: [
      'Ich interessiere mich für Musik. für + accusative: für den Film, für die Band.',
    ],
    tables: [
      {
        caption: 'Events',
        headers: ['Deutsch', 'English'],
        rows: [
          ['das Konzert', 'concert'],
          ['der Film', 'film'],
          ['die Ausstellung', 'exhibition'],
          ['das Theater', 'theatre'],
          ['die Veranstaltung', 'event'],
        ],
      },
    ],
    words: [
      ['mitkommen', 'to come along'],
      ['die Karte (Eintrittskarte)', 'ticket'],
    ],
    phrases: [
      ['Interessierst du dich für …?', 'Are you interested in …?'],
      ['Kommst du mit?', 'Are you coming along?'],
      ['Wann fängt es an?', 'When does it start?'],
    ],
    speak: 'Invite someone to an event: what, when, where, price.',
    write: 'A notice-board ad for a club night or language Stammtisch.',
    studyIds: ['days-weather'],
  }),

  'kb-a2-07': L({
    id: 'kb-a2-07',
    level: 'A2',
    number: 7,
    moduleId: 'a2-m3',
    title: 'Sport und Vorschläge',
    de: 'könnte / sollte',
    teaser: 'Suggest sport with könnte and sollte — still not full B1 Konjunktiv.',
    canDo: ['Make a suggestion', 'Talk about sport habits', 'Accept or refuse politely'],
    grammar: ['Wir könnten …', 'Du solltest …'],
    start: {
      de: 'Tim: Wir könnten montags joggen gehen.\nMira: Gute Idee. Du solltest aber bessere Schuhe kaufen.',
      en: 'könnte = we could. sollte = you should.',
    },
    points: [
      'These are set polite forms. Full Konjunktiv II (wäre, hätte, würde) is a B1 topic.',
    ],
    tables: [
      {
        caption: 'Suggestions',
        headers: ['Deutsch', 'English'],
        rows: [
          ['Wir könnten schwimmen gehen.', 'We could go swimming.'],
          ['Du solltest mehr trinken.', 'You should drink more.'],
          ['Sollen wir um sieben treffen?', 'Shall we meet at seven?'],
          ['Lass uns morgen laufen.', 'Let’s run tomorrow.'],
        ],
      },
    ],
    words: [
      ['joggen', 'to jog'],
      ['das Training', 'training'],
      ['die Idee', 'idea'],
    ],
    phrases: [
      ['Gute Idee!', 'Good idea!'],
      ['Das schaffe ich nicht.', 'I cannot manage that.'],
      ['Nächste Woche besser.', 'Better next week.'],
    ],
    speak: 'Suggest a weekly sport plan and react to two excuses.',
    write: 'A message to a friend proposing two times and one backup.',
    studyIds: ['verbs-modals', 'b1-konjunktiv2'],
  }),

  'kb-a2-08': L({
    id: 'kb-a2-08',
    level: 'A2',
    number: 8,
    moduleId: 'a2-m3',
    title: 'Beim Arzt',
    de: 'Gesundheit',
    teaser: 'Symptoms, appointments, and body words.',
    canDo: ['Book a doctor appointment', 'Describe symptoms', 'Understand a simple advice line'],
    grammar: ['seit + dative time', 'Body + tut weh'],
    start: {
      de: 'Mira: Ich habe seit Montag Husten. Können Sie mir einen Termin geben?\nPraxis: Kommen Sie morgen um 9 Uhr.',
      en: 'seit + duration that is still true: seit Montag, seit zwei Tagen.',
    },
    points: [
      'seit takes dative: seit dem Montag is possible; everyday: seit Montag.',
      'Ich habe Fieber / Husten / Schnupfen. Der Rücken tut weh.',
    ],
    tables: [
      {
        caption: 'Symptoms',
        headers: ['Deutsch', 'English'],
        rows: [
          ['der Husten', 'cough'],
          ['der Schnupfen', 'cold (runny nose)'],
          ['das Fieber', 'fever'],
          ['der Schmerz', 'pain'],
          ['das Rezept', 'prescription'],
          ['die Tablette', 'tablet'],
        ],
      },
    ],
    words: [
      ['die Praxis', 'surgery / practice'],
      ['der Termin', 'appointment'],
    ],
    phrases: [
      ['Ich habe seit gestern Fieber.', 'I have had a fever since yesterday.'],
      ['Können Sie mir ein Rezept geben?', 'Can you give me a prescription?'],
    ],
    speak: 'Phone a practice: name, symptom + seit, ask for a slot.',
    write: 'A 40-word email cancelling a lesson because you are ill.',
    studyIds: ['a2-health', 'kb-a1-18'],
  }),

  'kb-a2-09': L({
    id: 'kb-a2-09',
    level: 'A2',
    number: 9,
    moduleId: 'a2-m3',
    title: 'Arbeitsleben',
    de: 'Job und Firma',
    teaser: 'Describe a workplace and a typical day at work.',
    canDo: ['Name workplace people', 'Describe tasks', 'Say what a company does'],
    grammar: ['weil + verb to the end (A2 core)', 'am Arbeitsplatz vocabulary'],
    start: {
      de: 'Anna: Warum arbeitest du dort?\nLea: Ich arbeite dort, weil die Kollegen nett sind und weil ich viel lerne.',
      en: 'weil sends the verb to the end.',
    },
    points: [
      'Main clause: verb second. weil-clause: verb last. Ich bleibe, weil ich die Arbeit mag.',
    ],
    tables: [
      {
        caption: 'weil vs denn',
        headers: ['Word', 'Verb', 'Example'],
        rows: [
          ['denn', 'position 2', 'Ich bleibe, denn ich bin müde.'],
          ['weil', 'end of the clause', 'Ich bleibe, weil ich müde bin.'],
        ],
      },
      {
        caption: 'Work words',
        headers: ['Deutsch', 'English'],
        rows: [
          ['der Kollege / die Kollegin', 'colleague'],
          ['die Firma', 'company'],
          ['der Chef / die Chefin', 'boss'],
          ['die Pause', 'break'],
          ['die Aufgabe', 'task'],
        ],
      },
    ],
    words: [
      ['die Arbeit', 'work'],
      ['verdienen', 'to earn'],
    ],
    phrases: [
      ['Ich arbeite bei einer Firma in Bonn.', 'I work at a company in Bonn.'],
      ['Ich arbeite dort, weil …', 'I work there because …'],
    ],
    speak: 'Your (or a dream) job: hours, colleagues, one weil reason.',
    write: 'A 70-word email to a friend about a new job.',
    studyIds: ['a2-weil-dass', 'a2-work'],
  }),

  'kb-a2-10': L({
    id: 'kb-a2-10',
    level: 'A2',
    number: 10,
    moduleId: 'a2-m4',
    title: 'Im Restaurant',
    de: 'Essen gehen',
    teaser: 'Reserve, order, and complain politely.',
    canDo: ['Book a table', 'Order a full meal', 'Send a dish back politely'],
    grammar: ['hätte gern', 'Adjektivendungen preview after der'],
    start: {
      de: 'Kellner: Haben Sie reserviert?\nTim: Ja, auf den Namen Berger, 19 Uhr.\nKellner: Bitte, der Fensterplatz ist frei.',
      en: 'Reservation + polite complaint later if needed.',
    },
    points: [
      'Vorspeise, Hauptgericht, Nachtisch. Das Steak ist kalt — Könnten Sie es noch einmal machen?',
    ],
    tables: [
      {
        caption: 'Restaurant',
        headers: ['Deutsch', 'English'],
        rows: [
          ['reservieren', 'to reserve'],
          ['die Speisekarte', 'menu'],
          ['das Hauptgericht', 'main course'],
          ['das Trinkgeld', 'tip'],
          ['Es war zu salzig.', 'It was too salty.'],
        ],
      },
    ],
    words: [
      ['bestellen', 'to order'],
      ['schmecken', 'to taste'],
    ],
    phrases: [
      ['Ich habe reserviert.', 'I booked.'],
      ['Die Rechnung, bitte.', 'The bill, please.'],
      ['Das schmeckt sehr gut.', 'That tastes very good.'],
    ],
    speak: 'Reserve for two, order, then one polite complaint.',
    write: 'A review: food, service, price, 50 words.',
    studyIds: ['kb-a1-09'],
  }),

  'kb-a2-11': L({
    id: 'kb-a2-11',
    level: 'A2',
    number: 11,
    moduleId: 'a2-m4',
    title: 'Freude und dass',
    de: 'Gefühle',
    teaser: 'Say how you feel and report with dass.',
    canDo: ['Name feelings', 'Use sich freuen auf / über', 'Build a dass-clause'],
    grammar: ['dass + verb to the end', 'sich freuen auf / über'],
    start: {
      de: 'Lea: Ich freue mich so, dass du kommst!\nAnna: Ich freue mich auf das Fest. Ich habe gehört, dass Mira Kuchen backt.',
      en: 'freuen auf = looking forward (future). freuen über = happy about (now/past).',
    },
    points: [
      'dass sends the verb to the end: Ich glaube, dass er recht hat.',
    ],
    tables: [
      {
        caption: 'freuen',
        headers: ['Phrase', 'When'],
        rows: [
          ['Ich freue mich auf Freitag.', 'future event'],
          ['Ich freue mich über deinen Brief.', 'a thing that already happened / is here'],
          ['Ich freue mich, dass du da bist.', 'dass-clause'],
        ],
      },
      {
        caption: 'dass',
        headers: ['Main clause', 'Subordinate'],
        rows: [
          ['Ich glaube,', 'dass das stimmt.'],
          ['Sie sagt,', 'dass sie keine Zeit hat.'],
          ['Es ist schön,', 'dass ihr kommt.'],
        ],
      },
    ],
    words: [
      ['die Freude', 'joy'],
      ['glauben', 'to believe'],
    ],
    phrases: [
      ['Ich freue mich auf …', 'I am looking forward to …'],
      ['Ich glaube, dass …', 'I think that …'],
    ],
    speak: 'Three feelings + one dass sentence each.',
    write: 'A message: you are happy that a friend is visiting (dass + auf).',
    studyIds: ['a2-weil-dass'],
  }),

  'kb-a2-12': L({
    id: 'kb-a2-12',
    level: 'A2',
    number: 12,
    moduleId: 'a2-m4',
    title: 'Essen und wenn',
    de: 'Ernährung',
    teaser: 'Habits with wenn, and food routines.',
    canDo: ['Build wenn-clauses', 'Talk about eating habits', 'Give simple food advice'],
    grammar: ['wenn + verb to the end', 'Word order when wenn is first'],
    start: {
      de: 'Tim: Wenn es warm ist, essen wir meist Salat.\nMira: Wenn ich Stress habe, esse ich zu schnell.',
      en: 'Wenn es warm ist, essen wir … — verb of the main clause comes next (V2 after the comma).',
    },
    points: [
      'wenn = if / whenever. wenn-clause: verb last. If it starts the sentence, the main clause starts with its verb: Wenn ich Zeit habe, koche ich.',
    ],
    tables: [
      {
        caption: 'wenn word order',
        headers: ['Pattern', 'Example'],
        rows: [
          ['main + wenn', 'Ich koche, wenn ich Zeit habe.'],
          ['wenn first', 'Wenn ich Zeit habe, koche ich.'],
          ['not *wenn ich habe Zeit', 'verb must be last inside wenn'],
        ],
      },
    ],
    words: [
      ['die Ernährung', 'diet / nutrition'],
      ['gesund', 'healthy'],
      ['meist', 'usually'],
    ],
    phrases: [
      ['Wenn ich Zeit habe, …', 'When I have time, …'],
      ['Ich esse gern Gemüse.', 'I like eating vegetables.'],
    ],
    speak: 'Four wenn-habits (morning, work, sport, evening).',
    write: 'A 60-word text: your eating week with three wenn-clauses.',
    studyIds: ['a2-weil-dass'],
  }),

  'kb-a2-13': L({
    id: 'kb-a2-13',
    level: 'A2',
    number: 13,
    moduleId: 'a2-m5',
    title: 'Sprachen lernen',
    de: 'Lerntipps',
    teaser: 'Talk about how you learn German.',
    canDo: ['Describe learning habits', 'Give a tip with man sollte', 'Compare two methods'],
    grammar: ['um … zu (same subject)', 'man'],
    start: {
      de: 'Anna: Wie lernst du Wörter?\nLea: Ich schreibe sie auf, um sie nicht zu vergessen. Man sollte jeden Tag 15 Minuten lernen.',
      en: 'um … zu = in order to, only if the subject stays the same.',
    },
    points: [
      'Ich lerne, um die Prüfung zu bestehen. Different subject → damit (B1 refresh).',
    ],
    tables: [
      {
        caption: 'Learning phrases',
        headers: ['Deutsch', 'English'],
        rows: [
          ['Vokabeln lernen', 'learn vocabulary'],
          ['wiederholen', 'revise / repeat'],
          ['Fehler machen', 'make mistakes'],
          ['um Deutsch zu lernen', 'in order to learn German'],
        ],
      },
    ],
    words: [
      ['die Sprache', 'language'],
      ['der Tipp', 'tip'],
    ],
    phrases: [
      ['Man sollte jeden Tag üben.', 'One should practise every day.'],
      ['Ich lerne, um die Prüfung zu bestehen.', 'I study in order to pass the exam.'],
    ],
    speak: 'Your method + one tip for the class.',
    write: 'Five tips beginning with Man sollte / Man kann.',
    studyIds: [],
  }),

  'kb-a2-14': L({
    id: 'kb-a2-14',
    level: 'A2',
    number: 14,
    moduleId: 'a2-m5',
    title: 'Post und Passiv (Blick)',
    de: 'Paket und werden + Partizip',
    teaser: 'Send a parcel and recognise a first passive line.',
    canDo: ['Fill a parcel form', 'Understand Es wird …', 'Ask about delivery'],
    grammar: ['werden + Partizip II (recognition)', 'Paket vocabulary'],
    start: {
      de: 'Schild: Hier werden Päckchen angenommen.\nTim: Wann wird das Paket geliefert?\nFrau: Morgen. Es wird ins Haus gebracht.',
      en: 'werden + participle. You only need to recognise it at A2.',
    },
    points: [
      'Active: Jemand liefert das Paket. Passive: Das Paket wird geliefert.',
      'Full Passiv control is B1. Here: spot wird + participle and say who does nothing (the packet).',
    ],
    tables: [
      {
        caption: 'Passive glimpse',
        headers: ['Active', 'Passive'],
        rows: [
          ['Sie packen die Kartons.', 'Die Kartons werden gepackt.'],
          ['Wir liefern das Paket.', 'Das Paket wird geliefert.'],
          ['Man spricht hier Deutsch.', 'Hier wird Deutsch gesprochen.'],
        ],
      },
    ],
    words: [
      ['das Paket / das Päckchen', 'parcel / small parcel'],
      ['die Briefmarke', 'stamp'],
      ['liefern', 'to deliver'],
    ],
    phrases: [
      ['Ich möchte dieses Paket schicken.', 'I would like to send this parcel.'],
      ['Wann kommt es an?', 'When does it arrive?'],
    ],
    speak: 'At the post office: send a packet to another city.',
    write: 'A note to a neighbour: a parcel will be delivered (wird geliefert) tomorrow.',
    studyIds: ['b1-passiv'],
  }),

  'kb-a2-15': L({
    id: 'kb-a2-15',
    level: 'A2',
    number: 15,
    moduleId: 'a2-m5',
    title: 'Medien',
    de: 'Nachrichten und Internet',
    teaser: 'Talk about news, phones, and what you click.',
    canDo: ['Name media', 'Say how often you use them', 'Give a short opinion of a show'],
    grammar: ['weil / dass review', 'Frequency: oft, selten, nie'],
    start: {
      de: 'Mira: Liest du noch Zeitung?\nTim: Selten. Ich lese Nachrichten auf dem Handy, weil es schneller ist.',
      en: 'Media habits.',
    },
    points: [
      'die Zeitung, das Radio, der Podcast, die Nachricht, das Video, die App.',
    ],
    tables: [
      {
        caption: 'Frequency',
        headers: ['Deutsch', 'English'],
        rows: [
          ['immer', 'always'],
          ['oft', 'often'],
          ['manchmal', 'sometimes'],
          ['selten', 'rarely'],
          ['nie', 'never'],
        ],
      },
    ],
    words: [
      ['die Nachrichten', 'news'],
      ['das Internet', 'internet'],
    ],
    phrases: [
      ['Ich gehe oft online.', 'I go online often.'],
      ['Der Film war spannend.', 'The film was exciting.'],
    ],
    speak: 'Your media week: three channels + two frequency words.',
    write: 'Forum post: Is the phone too important? 60 words, one weil.',
    studyIds: ['b1-media'],
  }),

  'kb-a2-16': L({
    id: 'kb-a2-16',
    level: 'A2',
    number: 16,
    moduleId: 'a2-m6',
    title: 'Im Hotel',
    de: 'Höflich fragen',
    teaser: 'Polite hotel questions, including ob.',
    canDo: ['Check in', 'Ask if a room is free', 'Complain about a room politely'],
    grammar: ['ob + verb to the end', 'Darf ich fragen, ob …?'],
    start: {
      de: 'Tim: Guten Abend. Darf ich fragen, ob das Zimmer noch frei ist?\nRezeption: Ja. Haben Sie reserviert?\nTim: Ja, auf Berger.',
      en: 'ob = whether / if (yes-no). Verb to the end.',
    },
    points: [
      'Ich weiß nicht, ob sie da ist. Not the same as wenn (when / whenever).',
    ],
    tables: [
      {
        caption: 'ob vs wenn vs dass',
        headers: ['Word', 'Job', 'Example'],
        rows: [
          ['dass', 'that (fact)', 'Ich weiß, dass sie da ist.'],
          ['ob', 'whether', 'Ich weiß nicht, ob sie da ist.'],
          ['wenn', 'if / when', 'Wenn sie da ist, rufe ich an.'],
        ],
      },
    ],
    words: [
      ['die Rezeption', 'reception'],
      ['die Reservierung', 'reservation'],
      ['das Einzelzimmer', 'single room'],
      ['das Doppelzimmer', 'double room'],
    ],
    phrases: [
      ['Darf ich fragen, ob …?', 'May I ask whether …?'],
      ['Das Zimmer ist zu laut.', 'The room is too loud.'],
      ['Können wir das Zimmer wechseln?', 'Can we change rooms?'],
    ],
    speak: 'Check in, then ask two extra questions with ob.',
    write: 'An email booking a room: dates, room type, one question with ob.',
    studyIds: ['a2-write-email'],
  }),

  'kb-a2-17': L({
    id: 'kb-a2-17',
    level: 'A2',
    number: 17,
    moduleId: 'a2-m6',
    title: 'Reisepläne',
    de: 'Verkehr',
    teaser: 'Plan a trip: tickets, changes, and reasons.',
    canDo: ['Compare train vs car', 'Use nach + city', 'Explain a route'],
    grammar: ['nach / in + cities and countries', 'weil reasons'],
    start: {
      de: 'Anna: Wir wollen nach Wien.\nLea: Fahren wir mit dem Zug? Ich fahre lieber mit dem Zug, weil ich lesen kann.',
      en: 'nach + city/country without article: nach Wien, nach Österreich. But in die Schweiz, in die Türkei, in die USA.',
    },
    points: [
      'Most countries: nach Deutschland, nach Spanien. Exceptions with article: in die Schweiz, in die Türkei, in den Iran, in die USA, in den Sudan.',
      'Cities: nach Berlin, nach Wien. But in die Stadt when you mean “into town.”',
    ],
    tables: [
      {
        caption: 'nach vs in',
        headers: ['Place', 'German'],
        rows: [
          ['Berlin (city)', 'nach Berlin'],
          ['Germany', 'nach Deutschland'],
          ['Switzerland', 'in die Schweiz'],
          ['USA', 'in die USA'],
          ['into town', 'in die Stadt'],
        ],
      },
    ],
    words: [
      ['die Reise', 'trip'],
      ['der Anschluss', 'connection'],
      ['buchen', 'to book'],
    ],
    phrases: [
      ['Wir wollen nach Wien fahren.', 'We want to go to Vienna.'],
      ['Ich fahre lieber mit dem Zug.', 'I prefer to go by train.'],
    ],
    speak: 'Plan a weekend: destination, transport, one weil.',
    write: 'An email to a friend: dates, how you travel, where you sleep.',
    studyIds: ['prepositions', 'kb-a1-10'],
  }),

  'kb-a2-18': L({
    id: 'kb-a2-18',
    level: 'A2',
    number: 18,
    moduleId: 'a2-m6',
    title: 'Wetter und Klima',
    de: 'Jahreszeiten',
    teaser: 'Seasons, forecasts, and packing.',
    canDo: ['Talk about seasons', 'Give a short forecast', 'Say what to pack'],
    grammar: ['im + season', 'werden for forecasts (es wird kalt)'],
    start: {
      de: 'Mira: Im Sommer wird es oft sehr heiß.\nTim: Nimm eine Jacke mit. Am Abend wird es kalt.',
      en: 'Seasons take der and im: der Sommer, im Sommer.',
    },
    points: [
      'im Frühling, im Sommer, im Herbst, im Winter. All seasons are masculine.',
    ],
    tables: [
      {
        caption: 'Seasons',
        headers: ['Deutsch', 'On / in'],
        rows: [
          ['der Frühling', 'im Frühling'],
          ['der Sommer', 'im Sommer'],
          ['der Herbst', 'im Herbst'],
          ['der Winter', 'im Winter'],
        ],
      },
    ],
    words: [
      ['das Klima', 'climate'],
      ['heiß / warm / kühl / kalt', 'hot / warm / cool / cold'],
    ],
    phrases: [
      ['Es wird kalt.', 'It is going to get cold.'],
      ['Nimm eine Jacke mit.', 'Take a jacket with you.'],
    ],
    speak: 'Your favourite season + what the weather does + what you wear.',
    write: 'A packing list for a friend arriving next week, with weather reasons.',
    studyIds: ['days-weather', 'kb-a1-23'],
  }),

  'kb-a2-19': L({
    id: 'kb-a2-19',
    level: 'A2',
    number: 19,
    moduleId: 'a2-m7',
    title: 'Wohin heute Abend?',
    de: 'Kultur vor Ort',
    teaser: 'Choose an evening out and ask Woher?',
    canDo: ['Suggest an evening', 'Ask where someone is from (region)', 'Compare two options'],
    grammar: ['Woher? + aus / von', 'lieber review'],
    start: {
      de: 'Lea: Wohin gehen wir heute?\nAnna: Ins Kino oder ins Theater? Ich komme aus Leipzig — dort gehe ich oft ins Theater.',
      en: 'Woher kommst du? — aus + city/country.',
    },
    points: [
      'aus der Stadt, aus Deutschland. von dem Bahnhof = from the station (starting point of a route).',
    ],
    tables: [
      {
        caption: 'Wo? / Wohin? / Woher?',
        headers: ['Question', 'Typical answer'],
        rows: [
          ['Wo bist du?', 'Ich bin in der Stadt. (dative)'],
          ['Wohin gehst du?', 'Ich gehe in die Stadt. (accusative)'],
          ['Woher kommst du?', 'Ich komme aus Leipzig. / vom Bahnhof.'],
        ],
      },
    ],
    words: [
      ['heute Abend', 'this evening'],
      ['die Vorstellung', 'performance / show'],
    ],
    phrases: [
      ['Wohin gehen wir heute?', 'Where shall we go today?'],
      ['Ich komme aus …', 'I come from …'],
    ],
    speak: 'Offer two evening options and decide with lieber.',
    write: 'A chat: three messages proposing a plan.',
    studyIds: ['prepositions'],
  }),

  'kb-a2-20': L({
    id: 'kb-a2-20',
    level: 'A2',
    number: 20,
    moduleId: 'a2-m7',
    title: 'Bücher und früher',
    de: 'Modalverben im Präteritum',
    teaser: 'What you were (not) allowed to do as a child.',
    canDo: ['Use durfte / musste / konnte', 'Talk about childhood rules', 'Recommend a book'],
    grammar: ['Modal Präteritum'],
    start: {
      de: 'Tim: Als Kind durfte ich keine Comics lesen.\nMira: Ich musste immer um acht im Bett sein. Lesen konnte ich schon mit fünf.',
      en: 'durfte = was allowed. musste = had to. konnte = was able to.',
    },
    points: [
      'ich durfte, du durftest, er durfte; ich musste; ich konnte; ich wollte; ich sollte.',
    ],
    tables: [
      {
        caption: 'Modals — Präteritum',
        headers: ['Infinitive', 'ich / er', 'du', 'wir / sie'],
        rows: [
          ['können', 'konnte', 'konntest', 'konnten'],
          ['müssen', 'musste', 'musstest', 'mussten'],
          ['dürfen', 'durfte', 'durftest', 'durften'],
          ['wollen', 'wollte', 'wolltest', 'wollten'],
          ['sollen', 'sollte', 'solltest', 'sollten'],
        ],
      },
    ],
    words: [
      ['das Buch', 'book'],
      ['der Comic', 'comic'],
      ['als Kind', 'as a child'],
    ],
    phrases: [
      ['Als Kind durfte ich das nicht.', 'As a child I was not allowed to do that.'],
      ['Ich musste früh aufstehen.', 'I had to get up early.'],
    ],
    speak: 'Three childhood rules (durfte / musste / konnte).',
    write: 'A 70-word text: books then and now.',
    studyIds: ['verbs-modals'],
  }),

  'kb-a2-21': L({
    id: 'kb-a2-21',
    level: 'A2',
    number: 21,
    moduleId: 'a2-m7',
    title: 'Auf dem Amt',
    de: 'Behörde',
    teaser: 'Forms, appointments, and pointing words.',
    canDo: ['Ask for a form', 'Point with den / die / das', 'Describe a simple official errand'],
    grammar: ['der as pointing word', 'höfliche Bitten'],
    start: {
      de: 'Beamter: Welches Formular meinen Sie?\nAnna: Ja genau, das meine ich. Das Formular für die Anmeldung.',
      en: 'der/die/das can mean “that one.”',
    },
    points: [
      'Meinen Sie den Mann dort? — Ja, den meine ich.',
    ],
    tables: [
      {
        caption: 'Office words',
        headers: ['Deutsch', 'English'],
        rows: [
          ['das Amt / die Behörde', 'office / authority'],
          ['das Formular', 'form'],
          ['die Anmeldung', 'registration (address)'],
          ['der Ausweis', 'ID'],
          ['die Nummer', 'number / ticket'],
        ],
      },
    ],
    words: [
      ['anmelden', 'to register'],
      ['unterschreiben', 'to sign'],
    ],
    phrases: [
      ['Ich brauche ein Formular.', 'I need a form.'],
      ['Ja genau, den meine ich.', 'Yes exactly, that’s the one I mean.'],
      ['Wo kann ich warten?', 'Where can I wait?'],
    ],
    speak: 'At Bürgeramt: you need to register an address.',
    write: 'A checklist of documents for Anmeldung.',
    studyIds: ['a1-write-form', 'cases-demonstratives'],
  }),

  'kb-a2-22': L({
    id: 'kb-a2-22',
    level: 'A2',
    number: 22,
    moduleId: 'a2-m8',
    title: 'Seit ich das Auto verkauft habe',
    de: 'seit + Nebensatz',
    teaser: 'seit as a conjunction: since I sold the car …',
    canDo: ['Build seit + clause', 'Talk about a change of habit', 'Compare then vs now'],
    grammar: ['seit + verb to the end'],
    start: {
      de: 'Lea: Seit ich meinen Wagen verkauft habe, fahre ich mit dem Rad.\nAnna: Seit wir hier wohnen, kaufen wir auf dem Markt ein.',
      en: 'seit + clause: verb last, like weil.',
    },
    points: [
      'seit dem Sommer (preposition + noun). seit ich hier wohne (conjunction + clause).',
    ],
    tables: [
      {
        caption: 'seit two ways',
        headers: ['Type', 'Example'],
        rows: [
          ['preposition', 'Ich lerne seit einem Jahr Deutsch.'],
          ['conjunction', 'Seit ich hier wohne, gehe ich zu Fuß.'],
        ],
      },
    ],
    words: [
      ['verkaufen', 'to sell'],
      ['das Fahrrad / der Wagen', 'bike / car (colloquial)'],
    ],
    phrases: [
      ['Seit ich … habe, …', 'Since I have …, …'],
      ['Früher …, jetzt …', 'In the past …, now …'],
    ],
    speak: 'Two life changes with seit + clause.',
    write: 'A 60-word text: a habit that changed after a move or sale.',
    studyIds: ['a2-weil-dass'],
  }),

  'kb-a2-23': L({
    id: 'kb-a2-23',
    level: 'A2',
    number: 23,
    moduleId: 'a2-m8',
    title: 'Der Beruf, der zu mir passt',
    de: 'Relativsatz (Nominativ)',
    teaser: 'First relative clauses: der / die / das as “who / that.”',
    canDo: ['Join two sentences with der/die/das', 'Describe a job that fits', 'Read a short ad with a relative clause'],
    grammar: ['Relativsatz in nominative'],
    start: {
      de: 'Tim: Das ist der Beruf, der zu mir passt.\nMira: Ich suche eine Stelle, die nicht so weit weg ist.',
      en: 'The relative pronoun matches the noun’s gender and the case inside the relative clause.',
    },
    points: [
      'Das ist der Mann, der dort steht. (der = who, nominative, because he stands).',
      'Das ist der Mann, den ich sehe. (den = whom I see — accusative). Accusative relatives are started here; dative/preposition relatives wait for B1.',
    ],
    tables: [
      {
        caption: 'Relative pronoun (der-word)',
        headers: ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
        rows: [
          ['Nominative', 'der', 'die', 'das', 'die'],
          ['Accusative', 'den', 'die', 'das', 'die'],
          ['Dative (B1)', 'dem', 'der', 'dem', 'denen'],
        ],
      },
      {
        caption: 'Examples',
        headers: ['Sentence', 'Why that form'],
        rows: [
          ['der Beruf, der zu mir passt', 'Beruf is masc.; he fits → nom.'],
          ['die Stelle, die ich suche', 'Stelle is fem.; I search it → acc. = die'],
          ['das Büro, das hier ist', 'Büro is neut.; it is here → nom.'],
        ],
      },
    ],
    words: [
      ['passen zu', 'to suit'],
      ['die Stelle', 'position / job opening'],
    ],
    phrases: [
      ['Ich suche einen Job, der Spaß macht.', 'I am looking for a job that is fun.'],
      ['Das ist die Firma, die ich meine.', 'That is the company I mean.'],
    ],
    speak: 'Describe your ideal job with two relative clauses.',
    write: 'A short ad: we seek a person who … (two relatives).',
    studyIds: ['b1-relativ'],
  }),

  'kb-a2-24': L({
    id: 'kb-a2-24',
    level: 'A2',
    number: 24,
    moduleId: 'a2-m8',
    title: 'Alltag früher',
    de: 'Präteritum-Fragen',
    teaser: 'Ask about the past and talk about working abroad.',
    canDo: ['Ask Wo warst du? / Was hattest du?', 'Compare then vs now', 'Tell a 90-word past story'],
    grammar: ['Präteritum questions with sein/haben', 'Perfekt for other verbs'],
    start: {
      de: 'Anna: Wie sah dein Alltag aus?\nLea: Ich war oft unterwegs. Ich hatte wenig Zeit. Abends habe ich nur gekocht und geschlafen.',
      en: 'sah is a bonus irregular — recognition is enough. Stay on war / hatte + Perfekt.',
    },
    points: [
      'Questions: Wo warst du? Was hattest du? Warum war das so?',
      'A2 writing exam likes a story: last holiday, first job, a move.',
    ],
    tables: [
      {
        caption: 'Past questions',
        headers: ['Question', 'Sample answer'],
        rows: [
          ['Wo warst du im Sommer?', 'Ich war in Wien.'],
          ['Was hattest du für einen Job?', 'Ich hatte einen Job im Café.'],
          ['Wie war das?', 'Es war anstrengend, aber nett.'],
          ['Was hast du dort gemacht?', 'Ich habe Kaffee gebracht.'],
        ],
      },
    ],
    words: [
      ['der Alltag', 'everyday life'],
      ['im Ausland', 'abroad'],
      ['anstrengend', 'tiring'],
    ],
    phrases: [
      ['Wie war dein Alltag?', 'What was your everyday life like?'],
      ['Ich war oft unterwegs.', 'I was often out and about.'],
    ],
    speak: 'Interview a partner: four past questions, then switch.',
    write: 'A 90-word text: a job or stay abroad. Mix war/hatte and Perfekt.',
    studyIds: ['a2-perfekt'],
  }),
}
