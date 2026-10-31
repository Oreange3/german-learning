function L(spec) {
  return spec
}

export const b2Modules = [
  { id: 'b2-m1', number: 1, title: 'Menschen und Arbeit', de: 'K I · Register · Firma', lessonIds: ['kb-b2-01', 'kb-b2-02', 'kb-b2-03'] },
  { id: 'b2-m2', number: 2, title: 'Medien und Lernen', de: 'Nominalisierung · Passivarten', lessonIds: ['kb-b2-04', 'kb-b2-05', 'kb-b2-06'] },
  { id: 'b2-m3', number: 3, title: 'Stadt und Beziehungen', de: 'Partizipialattribute · Konnektoren', lessonIds: ['kb-b2-07', 'kb-b2-08', 'kb-b2-09'] },
  { id: 'b2-m4', number: 4, title: 'Studium und Sprache', de: 'lassen · subjektive Modalverben', lessonIds: ['kb-b2-10', 'kb-b2-11', 'kb-b2-12'] },
]

export const b2Lessons = {
  'kb-b2-01': L({
    id: 'kb-b2-01',
    level: 'B2',
    number: 1,
    moduleId: 'b2-m1',
    title: 'Heimat und Zugehörigkeit',
    de: 'Argumentieren, Register',
    teaser: 'Talk about home without clichés, and shift register.',
    canDo: ['Give a nuanced definition of Heimat', 'Switch du / Sie / formal writing', 'Concede and then argue'],
    grammar: ['zwar … aber review', 'Register pairs'],
    start: {
      de: 'Mira: Heimat ist für mich kein Ort, sondern die Sprache, in der ich träume.\nTim: Das klingt gut. Allerdings würde ich Heimat eher als ein Netz von Leuten beschreiben.',
      en: 'B2 wants a stance plus a limit: allerdings, insofern, im Grunde.',
    },
    points: [
      'Exam writing: define, give an example, name a counter-view, close. Avoid “Heimat ist einfach Familie.”',
    ],
    tables: [
      {
        caption: 'Register pairs',
        headers: ['Informal', 'Neutral / formal'],
        rows: [
          ['Ich find das doof.', 'Das halte ich für problematisch.'],
          ['klar', 'offensichtlich / zweifellos'],
          ['Leute', 'Personen / Bürgerinnen und Bürger'],
          ['kriegen', 'erhalten / bekommen'],
        ],
      },
    ],
    words: [
      ['die Heimat', 'home / belonging'],
      ['die Zugehörigkeit', 'belonging'],
      ['allerdings', 'however / admittedly'],
    ],
    phrases: [
      ['Im Grunde …', 'Basically / at heart …'],
      ['Das würde ich differenzierter sehen.', 'I would see that in a more differentiated way.'],
    ],
    speak: 'Define Heimat in 90 seconds, then give one counter-argument.',
    write: 'A 150-word forum post: Is home a place or people?',
    studyIds: ['b1-write-forum'],
  }),

  'kb-b2-02': L({
    id: 'kb-b2-02',
    level: 'B2',
    number: 2,
    moduleId: 'b2-m1',
    title: 'Indirekte Rede',
    de: 'Konjunktiv I',
    teaser: 'Report what someone said: er habe, sie seien.',
    canDo: ['Form Konjunktiv I for common verbs', 'Fall back to K II when forms clash', 'Write a short news line'],
    grammar: ['Konjunktiv I', 'sage / berichte / behaupte + K I'],
    start: {
      de: 'Sprecherin: Die Zahlen seien gestiegen, erklärte die Ministerin. Ein Sprecher sagte, die Firma wolle keine Stellen streichen.',
      en: 'News German loves K I. If K I = indicative, use K II: sie haben → sie hätten.',
    },
    points: [
      'er habe, sie sei, wir seien, er komme, er könne. sie haben (K I = indicative) → sie hätten.',
    ],
    tables: [
      {
        caption: 'Konjunktiv I — useful set',
        headers: ['Indicative', 'K I', 'Fallback K II'],
        rows: [
          ['er hat', 'er habe', '—'],
          ['sie haben', 'sie haben (= ind.)', 'sie hätten'],
          ['er ist', 'er sei', '—'],
          ['sie sind', 'sie seien', '—'],
          ['er kommt', 'er komme', 'er käme if unclear'],
          ['er kann', 'er könne', 'er könnte'],
        ],
      },
    ],
    words: [
      ['behaupten', 'to claim'],
      ['erklären', 'to explain'],
      ['berichten', 'to report'],
    ],
    phrases: [
      ['Sie erklärte, die Zahlen seien gestiegen.', 'She explained that the figures had risen.'],
      ['Er sagte, er habe keine Zeit.', 'He said he had no time.'],
    ],
    speak: 'Retell a short news item using two K I verbs.',
    write: 'A 80-word report quoting two people (K I).',
    studyIds: [],
  }),

  'kb-b2-03': L({
    id: 'kb-b2-03',
    level: 'B2',
    number: 3,
    moduleId: 'b2-m1',
    title: 'In der Firma',
    de: 'Arbeitsmail und Nominalisierung',
    teaser: 'Turn verbs into nouns for a drier office style.',
    canDo: ['Nominalise a clause', 'Write a 100-word work mail', 'Use bitte um + noun'],
    grammar: ['Nominalisierung', 'bitte um'],
    start: {
      de: 'Anna: Statt „Können Sie uns morgen anrufen?“ schreiben wir: „Wir bitten um einen Rückruf.“\nLea: Die Bearbeitung Ihres Antrags erfolgt in zwei Wochen.',
      en: 'Verb → noun: anrufen → der Rückruf; bearbeiten → die Bearbeitung.',
    },
    points: [
      'weil wir das prüfen → aufgrund der Prüfung. nachdem wir angekommen sind → nach der Ankunft.',
    ],
    tables: [
      {
        caption: 'Clause → noun',
        headers: ['Spoken', 'Office'],
        rows: [
          ['Bitte rufen Sie zurück.', 'Wir bitten um einen Rückruf.'],
          ['Wir prüfen das.', 'Die Prüfung erfolgt …'],
          ['Nachdem wir angekommen sind', 'nach der Ankunft'],
          ['weil es regnet', 'wegen des Regens'],
        ],
      },
    ],
    words: [
      ['der Antrag', 'application / request'],
      ['erfolgen', 'to take place (formal)'],
      ['die Bearbeitung', 'processing'],
    ],
    phrases: [
      ['anbei sende ich …', 'please find attached …'],
      ['für Rückfragen stehe ich gern zur Verfügung', 'I am happy to answer queries'],
    ],
    speak: 'Turn three casual requests into office German.',
    write: 'A 100-word formal work message (Goethe B2 Schreiben Teil 2 shape).',
    studyIds: ['b1-write-formal'],
  }),

  'kb-b2-04': L({
    id: 'kb-b2-04',
    level: 'B2',
    number: 4,
    moduleId: 'b2-m2',
    title: 'Medienkritik',
    de: 'Vorgang vs Zustand',
    teaser: 'The article is being written vs the article is written.',
    canDo: ['Contrast werden- vs sein-passive', 'Discuss a media habit', 'Avoid mixing worden / geworden'],
    grammar: ['Vorgangspassiv', 'Zustandspassiv'],
    start: {
      de: 'Tim: Der Artikel wird gerade geschrieben. Um 18 Uhr ist er geschrieben und online.\nMira: Gestern ist er korrigiert worden. Das Netz ist voll von schnellen Texten.',
      en: 'wird = process. ist + participle = state. worden = passive perfect helper.',
    },
    points: [
      'Die Tür wird geöffnet (someone is opening it). Die Tür ist geöffnet (it is in the open state).',
    ],
    tables: [
      {
        caption: 'Two passives',
        headers: ['Type', 'Form', 'Example'],
        rows: [
          ['process', 'werden + Partizip', 'Der Text wird geprüft.'],
          ['state', 'sein + Partizip', 'Der Text ist geprüft.'],
          ['process past', 'wurde / ist … worden', 'Der Text ist geprüft worden.'],
          ['become (not passive)', 'ist … geworden', 'Es ist kalt geworden.'],
        ],
      },
    ],
    words: [
      ['die Medienkritik', 'media criticism'],
      ['prüfen', 'to check'],
      ['veröffentlichen', 'to publish'],
    ],
    phrases: [
      ['Der Beitrag ist schon veröffentlicht.', 'The post is already published. (state)'],
      ['Er wird noch geprüft.', 'It is still being checked.'],
    ],
    speak: 'Describe a newsroom timeline with both passives.',
    write: '80 words: how you check sources, one process and one state passive.',
    studyIds: ['b1-passiv', 'b1-media'],
  }),

  'kb-b2-05': L({
    id: 'kb-b2-05',
    level: 'B2',
    number: 5,
    moduleId: 'b2-m2',
    title: 'Nach der Schule',
    de: 'Ersatzpassiv man / lassen / sich lassen',
    teaser: 'Other ways to avoid naming the doer.',
    canDo: ['Rewrite a passive with man', 'Use sich lassen', 'Talk about study vs training'],
    grammar: ['man', 'lassen', 'sich lassen'],
    start: {
      de: 'Berater: Das Studium lässt sich mit einem Job verbinden. Man diskutiert oft über duale Ausbildung.\nTim: Die Formulare lassen sich online ausfüllen.',
      en: 'sich lassen + infinitive = can be done. lassen + person + infinitive = have something done.',
    },
    points: [
      'Ich lasse mir die Haare schneiden. Das Problem lässt sich lösen. Man sagt, …',
    ],
    tables: [
      {
        caption: 'Avoiding the doer',
        headers: ['Form', 'Example'],
        rows: [
          ['werden-passive', 'Die Formulare werden ausgefüllt.'],
          ['man', 'Man füllt die Formulare aus.'],
          ['sich lassen', 'Die Formulare lassen sich ausfüllen.'],
          ['lassen + infinitive', 'Ich lasse das Formular prüfen.'],
        ],
      },
    ],
    words: [
      ['die Ausbildung', 'vocational training'],
      ['das Studium', 'university studies'],
      ['dual', 'dual (study + work)'],
    ],
    phrases: [
      ['Das lässt sich machen.', 'That can be done.'],
      ['Ich lasse mir das erklären.', 'I have that explained to me.'],
    ],
    speak: 'Compare uni vs Ausbildung with two sich-lassen sentences.',
    write: 'A 120-word comment for a school leaver.',
    studyIds: [],
  }),

  'kb-b2-06': L({
    id: 'kb-b2-06',
    level: 'B2',
    number: 6,
    moduleId: 'b2-m2',
    title: 'Körper und Trends',
    de: 'subjektive Modalverben',
    teaser: 'muss / dürfte / kann as “probably / allegedly,” not obligation.',
    canDo: ['Read subjective modals in news', 'Paraphrase with wahrscheinlich', 'Discuss a health trend calmly'],
    grammar: ['subjektive Modalverben'],
    start: {
      de: 'Radio: Die Studie soll zeigen, dass Schlaf wichtiger ist als teure Shakes. Der Star will das Produkt nicht getestet haben.',
      en: 'soll = is said to. will = claims (often denying). dürfte = is probably. muss = must (inference).',
    },
    points: [
      'Er muss zu Hause sein (I infer). Er soll krank sein (people say). Er will nichts gesehen haben (he claims).',
    ],
    tables: [
      {
        caption: 'Subjective reading',
        headers: ['Modal', 'Meaning', 'Example'],
        rows: [
          ['muss', 'inference: surely', 'Das Licht brennt. Sie muss da sein.'],
          ['dürfte', 'probably', 'Das dürfte teuer werden.'],
          ['kann / könnte', 'possibility', 'Das kann ein Fehler sein.'],
          ['soll', 'is said to', 'Er soll umziehen.'],
          ['will', 'claims to', 'Er will nichts gewusst haben.'],
        ],
      },
    ],
    words: [
      ['die Studie', 'study'],
      ['angeblich', 'allegedly'],
      ['wahrscheinlich', 'probably'],
    ],
    phrases: [
      ['Das dürfte reichen.', 'That should be enough (probably).'],
      ['Sie soll Expertin sein.', 'She is said to be an expert.'],
    ],
    speak: 'Retell a celebrity health claim with soll and will.',
    write: '70 words: a product claim you doubt, using two subjective modals.',
    studyIds: ['verbs-modals'],
  }),

  'kb-b2-07': L({
    id: 'kb-b2-07',
    level: 'B2',
    number: 7,
    moduleId: 'b2-m3',
    title: 'Städte erleben',
    de: 'Partizipialattribute',
    teaser: 'die in Köln lebenden Studenten — a clause packed in front of the noun.',
    canDo: ['Read a participle attribute', 'Unpack it into a relative clause', 'Describe a city district'],
    grammar: ['Partizipialattribut'],
    start: {
      de: 'Guide: Die am Rhein gebauten Häuser sind teuer. Die dort lebenden Familien protestieren gegen den Verkehr.',
      en: 'Article + extra + participle + noun. Unpack: die Häuser, die am Rhein gebaut wurden.',
    },
    points: [
      'Partizip I = ongoing: die lachenden Kinder. Partizip II = finished/passive: die gebauten Häuser.',
    ],
    tables: [
      {
        caption: 'Unpack the attribute',
        headers: ['Compact', 'Relative clause'],
        rows: [
          ['die in Bonn wohnenden Studenten', 'die Studenten, die in Bonn wohnen'],
          ['die gestern veröffentlichte Studie', 'die Studie, die gestern veröffentlicht wurde'],
          ['ein am Markt gekauftes Brot', 'ein Brot, das am Markt gekauft wurde'],
        ],
      },
    ],
    words: [
      ['das Viertel', 'district'],
      ['protestieren', 'to protest'],
      ['der Verkehr', 'traffic'],
    ],
    phrases: [
      ['die neu eröffnete Bahn', 'the newly opened line'],
      ['ein weit verbreitetes Problem', 'a widespread problem'],
    ],
    speak: 'Describe your town with two unpacked relative clauses, then compact one of them.',
    write: 'A 90-word city portrait using one participle attribute.',
    studyIds: ['b1-relativ'],
  }),

  'kb-b2-08': L({
    id: 'kb-b2-08',
    level: 'B2',
    number: 8,
    moduleId: 'b2-m3',
    title: 'Beziehungen',
    de: 'Konnektoren umbauen',
    teaser: 'Same idea, different glue: weil ↔ aufgrund; obwohl ↔ trotz.',
    canDo: ['Swap clause connectors for noun connectors', 'Talk about a relationship conflict fairly', 'Keep tone adult'],
    grammar: ['Konnektoren-Umwandlung'],
    start: {
      de: 'Lea: Wir haben uns getrennt, weil die Zeit fehlte.\nAnna: Also aufgrund fehlender Zeit. Trotz der Distanz schreibt ihr noch.',
      en: 'Exam transformation tasks love this swap.',
    },
    points: [
      'weil + clause ↔ aufgrund + genitive noun. obwohl ↔ trotz. damit ↔ zwecks / um … zu. nachdem ↔ nach.',
    ],
    tables: [
      {
        caption: 'Swap kit',
        headers: ['Clause', 'Noun phrase'],
        rows: [
          ['weil er krank ist', 'aufgrund seiner Krankheit'],
          ['obwohl es regnet', 'trotz des Regens'],
          ['nachdem sie angekommen war', 'nach ihrer Ankunft'],
          ['bevor wir entscheiden', 'vor der Entscheidung'],
        ],
      },
    ],
    words: [
      ['die Beziehung', 'relationship'],
      ['die Distanz', 'distance'],
      ['sich trennen', 'to separate'],
    ],
    phrases: [
      ['aufgrund von …', 'due to …'],
      ['im Gegensatz zu …', 'in contrast to …'],
    ],
    speak: 'Tell a small conflict twice: weil-version, then aufgrund-version.',
    write: 'Rewrite three weil/obwohl sentences as trotz/aufgrund.',
    studyIds: ['kb-b1-04', 'kb-b1-13'],
  }),

  'kb-b2-09': L({
    id: 'kb-b2-09',
    level: 'B2',
    number: 9,
    moduleId: 'b2-m3',
    title: 'Ernährung und Werte',
    de: 'irrealer Vergleich als ob',
    teaser: 'Control als ob, and argue about food without preaching.',
    canDo: ['Use als ob + K II', 'Weigh two food systems', 'Stay polite in disagreement'],
    grammar: ['als ob + Konjunktiv II'],
    start: {
      de: 'Tim: Manche essen, als ob Fleisch nie ein Problem wäre.\nMira: Andere tun so, als hätten sie die perfekte Lösung.',
      en: 'als ob / als wenn / als + verb. Common: als ob + wäre / hätte / würde.',
    },
    points: [
      'Er tut so, als ob er schliefe. Short form: als schliefe er (verb right after als).',
    ],
    tables: [
      {
        caption: 'als ob',
        headers: ['Pattern', 'Example'],
        rows: [
          ['als ob + K II', 'Es sieht aus, als ob es regnete.'],
          ['als + K II (inverted)', 'Es sieht aus, als regnete es.'],
          ['fixed', 'als ob nichts gewesen wäre'],
        ],
      },
    ],
    words: [
      ['die Ernährung', 'diet'],
      ['nachhaltig', 'sustainable'],
      ['predigen', 'to preach'],
    ],
    phrases: [
      ['als ob das einfach wäre', 'as if that were simple'],
      ['Das sehe ich differenzierter.', 'I see that in a more nuanced way.'],
    ],
    speak: 'A food debate: one als ob about each side.',
    write: 'A 150-word balanced forum post on meat vs plant diets.',
    studyIds: ['kb-b1-24'],
  }),

  'kb-b2-10': L({
    id: 'kb-b2-10',
    level: 'B2',
    number: 10,
    moduleId: 'b2-m4',
    title: 'An der Uni',
    de: 'Vortrag strukturieren',
    teaser: 'A B2 speaking exam needs a planned talk, not a chat.',
    canDo: ['Signpost a 3-minute talk', 'Give pro and contra', 'Hand over to a partner'],
    grammar: ['erstens / darüber hinaus / abschließend'],
    start: {
      de: 'Lea: Ich spreche über Studiengebühren. Erstens die Kosten, zweitens die Chancen, abschließend meine Meinung.\nTim: Danke. Ich würde gern nachhaken.',
      en: 'Goethe B2: structured Vortrag + discussion. 15 min prep.',
    },
    points: [
      'Open: Ich möchte über … sprechen. Body: erstens, außerdem, ein weiterer Punkt. Close: Zusammenfassend … Was meint ihr?',
    ],
    tables: [
      {
        caption: 'Talk glue',
        headers: ['Job', 'Chunk'],
        rows: [
          ['open', 'Ich möchte das Thema … näher betrachten.'],
          ['first point', 'Erstens / Zunächst einmal …'],
          ['add', 'Darüber hinaus / Hinzu kommt, dass …'],
          ['contra', 'Dagegen spricht, dass …'],
          ['close', 'Abschließend lässt sich sagen, dass …'],
          ['pass', 'Wie siehst du das?'],
        ],
      },
    ],
    words: [
      ['der Vortrag', 'talk / presentation'],
      ['nachhaken', 'to follow up / probe'],
      ['die Studiengebühr', 'tuition fee'],
    ],
    phrases: [
      ['Lässt uns das genauer ansehen.', 'Let’s look at that more closely.'],
      ['Das würde ich unterstreichen.', 'I would underline that.'],
    ],
    speak: 'A 3-minute talk: should university be free? Then two questions to a partner.',
    write: 'Bullet cards for that talk (not a full essay).',
    studyIds: ['b1-speak-present'],
  }),

  'kb-b2-11': L({
    id: 'kb-b2-11',
    level: 'B2',
    number: 11,
    moduleId: 'b2-m4',
    title: 'Service und Beschwerde',
    de: 'höfliche Härte',
    teaser: 'Complain at B2: facts, deadline, legal-lite without shouting.',
    canDo: ['Write a firm complaint', 'Set a Frist', 'Offer a solution'],
    grammar: ['Passiv in complaints', 'sollte / müsste'],
    start: {
      de: 'Anna: Trotz zweier Mails wurde der Fehler nicht behoben. Ich setze eine Frist bis Freitag.\nFirma: Der Vorgang wird geprüft. Wir bitten um etwas Geduld.',
      en: 'wurde nicht behoben keeps you factual. Ich setze eine Frist is adult, not rude.',
    },
    points: [
      'Structure: Bezug + Sachverhalt + bisherige Schritte + Forderung + Frist + Gruß.',
    ],
    tables: [
      {
        caption: 'Complaint moves',
        headers: ['Move', 'Example'],
        rows: [
          ['reference', 'hiermit beziehe ich mich auf …'],
          ['fact', 'Die Lieferung erfolgte mit dreitägiger Verspätung.'],
          ['failed fix', 'Trotz meiner Mail wurde nichts unternommen.'],
          ['demand', 'Ich bitte um Ersatz bis zum 12.05.'],
          ['close', 'Andernfalls werde ich weitere Schritte prüfen.'],
        ],
      },
    ],
    words: [
      ['die Frist', 'deadline'],
      ['beheben', 'to fix / remedy'],
      ['der Vorgang', 'case / process'],
    ],
    phrases: [
      ['Ich setze eine Frist bis …', 'I set a deadline of …'],
      ['Der Fehler wurde nicht behoben.', 'The fault was not remedied.'],
    ],
    speak: 'Phone complaint: three facts, one demand, one thanks if they help.',
    write: 'A 120-word complaint email with a Friday deadline.',
    studyIds: ['kb-b1-04'],
  }),

  'kb-b2-12': L({
    id: 'kb-b2-12',
    level: 'B2',
    number: 12,
    moduleId: 'b2-m4',
    title: 'Sprache und Regionen',
    de: 'Varietäten und Ausblick',
    teaser: 'Hochdeutsch, Austria/Switzerland words, and what B2 still is not.',
    canDo: ['Name a few regional pairs', 'Explain why exams want standard German', 'Plan the next skill'],
    grammar: ['Standard vs regional lexemes (recognition)'],
    start: {
      de: 'Tim: In Wien sagt man oft Jänner, nicht Januar. In der Schweiz steht das ß selten.\nMira: In der Prüfung schreibe ich trotzdem Standard: ich gehe, nicht i gang.',
      en: 'Recognition is enough. Produce standard German in the exam.',
    },
    points: [
      'A few pairs: die Semmel / das Brötchen; Jänner / Januar; parkieren / parken; die Velo / das Fahrrad. Do not mix them in one formal text.',
    ],
    tables: [
      {
        caption: 'A few regional pairs (exam: use the left column for writing unless the task is local)',
        headers: ['Standard (D)', 'Also heard', 'English'],
        rows: [
          ['Januar', 'Jänner (AT)', 'January'],
          ['das Brötchen', 'die Semmel (AT/Süd)', 'roll'],
          ['parken', 'parkieren (CH)', 'to park'],
          ['das Fahrrad', 'das Velo (CH)', 'bicycle'],
          ['die Straßenbahn', 'das Tram (CH/AT)', 'tram'],
        ],
      },
    ],
    words: [
      ['die Varietät', 'variety (of a language)'],
      ['das Hochdeutsch', 'standard German'],
      ['die Region', 'region'],
    ],
    phrases: [
      ['In der Prüfung schreibe ich Standarddeutsch.', 'In the exam I write standard German.'],
      ['Das ist regional üblich.', 'That is regionally usual.'],
    ],
    speak: 'Explain two regional words you know and when you would not use them.',
    write: 'A 80-word note: your next German goal after this B2 starter (C1 is later).',
    studyIds: ['kb-b2-10'],
  }),
}
