function L(spec) {
  return spec
}

export const b1Modules = [
  { id: 'b1-m1', number: 1, title: 'Leute und Beruf', de: 'n-Deklination · Präteritum · Relativ', lessonIds: ['kb-b1-01', 'kb-b1-02', 'kb-b1-03'] },
  { id: 'b1-m2', number: 2, title: 'Alltag und Zukunft', de: 'obwohl · Futur · falls', lessonIds: ['kb-b1-04', 'kb-b1-05', 'kb-b1-06'] },
  { id: 'b1-m3', number: 3, title: 'Hilfe und Gesundheit', de: 'zu · Temporalsätze · Vergleich', lessonIds: ['kb-b1-07', 'kb-b1-08', 'kb-b1-09'] },
  { id: 'b1-m4', number: 4, title: 'Vergangenheit', de: 'Konjunktiv II · Plusquamperfekt · Genitiv', lessonIds: ['kb-b1-10', 'kb-b1-11', 'kb-b1-12'] },
  { id: 'b1-m5', number: 5, title: 'Sprache und Bewerbung', de: 'deswegen · Partizip · Konnektoren', lessonIds: ['kb-b1-13', 'kb-b1-14', 'kb-b1-15'] },
  { id: 'b1-m6', number: 6, title: 'Jugend und Meinung', de: 'brauchen zu · es · entweder/oder', lessonIds: ['kb-b1-16', 'kb-b1-17', 'kb-b1-18'] },
  { id: 'b1-m7', number: 7, title: 'Regeln', de: 'je desto · Hausordnung · Passiv', lessonIds: ['kb-b1-19', 'kb-b1-20', 'kb-b1-21'] },
  { id: 'b1-m8', number: 8, title: 'Gesellschaft', de: 'Geschichte · Umwelt · damit', lessonIds: ['kb-b1-22', 'kb-b1-23', 'kb-b1-24'] },
]

export const b1Lessons = {
  'kb-b1-01': L({
    id: 'kb-b1-01',
    level: 'B1',
    number: 1,
    moduleId: 'b1-m1',
    title: 'Freunde und Nomen',
    de: 'Adjektive als Nomen, n-Deklination',
    teaser: 'Talk about friends and learn two noun traps: der Jugendliche, der Nachbar.',
    canDo: ['Use adjective-nouns (der Bekannte)', 'Decline weak masculines', 'Describe a friendship'],
    grammar: ['Adjektive als Nomen', 'n-Deklination'],
    start: {
      de: 'Lea: Die Bekannten von Mira sind wirklich nett.\nTim: Ja. Unser Nachbar hilft uns oft. Er ist ein guter Freund.',
      en: 'Bekannte behaves like an adjective. Nachbar takes -n in every case except nominative singular.',
    },
    points: [
      'Adjectives used as people-nouns keep adjective endings: der Jugendliche, eine Unbekannte, alles Gute, im Dunkeln.',
      'Weak masculines (n-Deklination): der Mensch, der Nachbar, der Herr, der Kollege, der Student, der Name, der Gedanke. All cases except nom. sg. add -n/-en: ich kenne den Nachbarn; mit dem Studenten.',
    ],
    tables: [
      {
        caption: 'n-Deklination (der Nachbar)',
        headers: ['Case', 'Singular', 'Plural'],
        rows: [
          ['Nominative', 'der Nachbar', 'die Nachbarn'],
          ['Accusative', 'den Nachbarn', 'die Nachbarn'],
          ['Dative', 'dem Nachbarn', 'den Nachbarn'],
          ['Genitive', 'des Nachbarn', 'der Nachbarn'],
        ],
      },
      {
        caption: 'Adjective as noun',
        headers: ['Phrase', 'English'],
        rows: [
          ['der / die Bekannte', 'the acquaintance'],
          ['ein Jugendlicher / eine Jugendliche', 'a young person'],
          ['alles Gute', 'all the best'],
          ['die Besten', 'the best (people)'],
        ],
      },
    ],
    words: [
      ['die Freundschaft', 'friendship'],
      ['der Nachbar', 'neighbour (weak masc.)'],
      ['der Mensch', 'human / person (weak)'],
    ],
    phrases: [
      ['Ihr seid die Besten!', 'You are the best!'],
      ['Ich kenne den Nachbarn gut.', 'I know the neighbour well.'],
      ['Alles Gute zum Geburtstag!', 'All the best for your birthday!'],
    ],
    speak: 'Describe two friends: one adjective-noun, one weak masculine.',
    write: 'A 80-word forum post: what makes a good friend. Use one n-noun and one adjective-noun.',
    studyIds: ['b1-opinions'],
  }),

  'kb-b1-02': L({
    id: 'kb-b1-02',
    level: 'B1',
    number: 2,
    moduleId: 'b1-m1',
    title: 'Ein Arbeitsbericht',
    de: 'Präteritum für Berichte',
    teaser: 'Written reports want Präteritum, not only Perfekt.',
    canDo: ['Write a short work report in Präteritum', 'Use common irregular past forms', 'Contrast speech vs writing'],
    grammar: ['Präteritum (irregular common set)', 'Bericht style'],
    start: {
      de: 'Lea: In der Schule schrieben wir: „Herr Berger erledigte seine Aufgaben zuverlässig.“\nTim: Aber mündlich sage ich: Er hat alles gemacht.',
      en: 'Speech: Perfekt. Formal writing / news / reports: Präteritum.',
    },
    points: [
      'Learn the high-frequency written set: war, hatte, gab, ging, kam, stand, lag, sah, sagte, machte, arbeitete.',
      'Modal verbs prefer Präteritum even in speech: konnte, musste, wollte, sollte, durfte.',
    ],
    tables: [
      {
        caption: 'Report verbs — ich / er',
        headers: ['Infinitive', 'Präteritum', 'Perfekt'],
        rows: [
          ['sein', 'war', 'ist gewesen'],
          ['haben', 'hatte', 'hat gehabt'],
          ['gehen', 'ging', 'ist gegangen'],
          ['kommen', 'kam', 'ist gekommen'],
          ['schreiben', 'schrieb', 'hat geschrieben'],
          ['sagen', 'sagte', 'hat gesagt'],
          ['arbeiten', 'arbeitete', 'hat gearbeitet'],
          ['geben', 'gab', 'hat gegeben'],
        ],
      },
    ],
    words: [
      ['erledigen', 'to carry out / finish'],
      ['zuverlässig', 'reliable'],
      ['der Bericht', 'report'],
    ],
    phrases: [
      ['Er erledigte die Aufgabe.', 'He carried out the task.'],
      ['Am Montag kam ein Kunde.', 'On Monday a customer came.'],
      ['Es gab ein Problem.', 'There was a problem.'],
    ],
    speak: 'Tell a work day twice: once Perfekt (talk), once Präteritum (as if writing).',
    write: 'A 90-word report: last week at work or school, mostly Präteritum.',
    studyIds: ['a2-perfekt', 'kb-a2-01'],
  }),

  'kb-b1-03': L({
    id: 'kb-b1-03',
    level: 'B1',
    number: 3,
    moduleId: 'b1-m1',
    title: 'Der Job, der zu mir passt',
    de: 'Relativsätze mit Dativ und Präposition',
    teaser: 'Relative clauses beyond nominative: dem, der, mit dem…',
    canDo: ['Build dative relatives', 'Use preposition + relative', 'Describe a job or flat precisely'],
    grammar: ['Relativpronomen Dativ', 'Präposition + Relativ'],
    start: {
      de: 'Mira: Das ist der Beruf, der zu mir passt.\nAnna: Und das ist die Kollegin, mit der ich gern arbeite. Das Büro, in dem wir sitzen, ist hell.',
      en: 'Gender from the noun; case from the job inside the relative clause.',
    },
    points: [
      'der Mann, dem ich helfe (helfen + dative). die Frau, der ich danke. das Kind, dem das Buch gehört.',
      'Preposition stays in front: der Freund, mit dem ich reise; die Stadt, in der ich wohne.',
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
      {
        caption: 'Examples',
        headers: ['Sentence', 'Why'],
        rows: [
          ['der Mann, dem ich helfe', 'helfen + dative'],
          ['die Frau, mit der ich spreche', 'mit + dative'],
          ['das Büro, in dem wir arbeiten', 'in + dative (location)'],
          ['die Leute, denen das gefällt', 'gefallen + dative, plural denen'],
        ],
      },
    ],
    words: [
      ['die Leidenschaft', 'passion'],
      ['passen zu', 'to suit'],
    ],
    phrases: [
      ['Das ist der Job, der mir gefällt.', 'That is the job I like.'],
      ['Die Stadt, in der ich wohne, ist klein.', 'The city I live in is small.'],
    ],
    speak: 'Describe your home and job with three relative clauses (nom / dat / prep).',
    write: 'A housing or job ad with two relative clauses.',
    studyIds: ['b1-relativ', 'kb-a2-23'],
  }),

  'kb-b1-04': L({
    id: 'kb-b1-04',
    level: 'B1',
    number: 4,
    moduleId: 'b1-m2',
    title: 'Reklamation',
    de: 'obwohl und trotzdem',
    teaser: 'Complain politely and concede with obwohl / trotzdem.',
    canDo: ['Write a complaint email', 'Contrast obwohl vs trotzdem', 'Stay polite'],
    grammar: ['obwohl + verb last', 'trotzdem + V2'],
    start: {
      de: 'Anna: Obwohl ich Ihnen das schon erklärt habe, kam keine Lösung.\nFirma: Trotzdem können wir das Gerät tauschen.',
      en: 'obwohl = although (subordinate). trotzdem = nevertheless (main clause).',
    },
    points: [
      'Obwohl das Wetter schlecht war, sind wir gegangen. Trotzdem sind wir gegangen — two main clauses, comma before trotzdem is common.',
    ],
    tables: [
      {
        caption: 'obwohl vs trotzdem',
        headers: ['Word', 'Clause type', 'Example'],
        rows: [
          ['obwohl', 'verb last', 'Obwohl ich müde bin, arbeite ich.'],
          ['trotzdem', 'verb second', 'Ich bin müde. Trotzdem arbeite ich.'],
        ],
      },
    ],
    words: [
      ['die Reklamation', 'complaint'],
      ['tauschen', 'to exchange'],
      ['die Lösung', 'solution'],
    ],
    phrases: [
      ['Leider muss ich mich beschweren.', 'Unfortunately I have to complain.'],
      ['Obwohl ich angerufen habe, …', 'Although I called, …'],
      ['Ich bitte um eine Lösung.', 'I ask for a solution.'],
    ],
    speak: 'Complain about a late delivery: fact + obwohl + request.',
    write: 'A formal email: Anrede, problem, obwohl, what you want, Gruß.',
    studyIds: ['b1-write-formal'],
  }),

  'kb-b1-05': L({
    id: 'kb-b1-05',
    level: 'B1',
    number: 5,
    moduleId: 'b1-m2',
    title: 'Die Zukunft',
    de: 'Futur I und Medien',
    teaser: 'werden + infinitive, and everyday future with present + time word.',
    canDo: ['Form Futur I', 'Talk about media in the future', 'Choose present vs werden'],
    grammar: ['Futur I', 'Present for planned future'],
    start: {
      de: 'Tim: Bald wird in jedem Haus ein Computer stehen — hat man früher gesagt.\nMira: Morgen lade ich das Update herunter. Ich werde das Handy weniger nutzen.',
      en: 'Plans: present + time. Predictions / promises: werden + infinitive.',
    },
    points: [
      'ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden + infinitive at the end.',
    ],
    tables: [
      {
        caption: 'werden — Futur I',
        headers: ['Person', 'werden', 'Example'],
        rows: [
          ['ich', 'werde', 'Ich werde Deutsch lernen.'],
          ['du', 'wirst', 'Du wirst das schaffen.'],
          ['er / sie', 'wird', 'Es wird regnen.'],
          ['wir / sie / Sie', 'werden', 'Wir werden uns treffen.'],
        ],
      },
    ],
    words: [
      ['die Zukunft', 'future'],
      ['herunterladen', 'to download'],
      ['das Update', 'update'],
    ],
    phrases: [
      ['Ich werde das machen.', 'I will do that.'],
      ['Morgen fahre ich nach Bonn.', 'I am going to Bonn tomorrow. (present)'],
    ],
    speak: 'Three predictions with werden and two plans with present + time.',
    write: 'A 80-word comment: phones in ten years.',
    studyIds: ['b1-media'],
  }),

  'kb-b1-06': L({
    id: 'kb-b1-06',
    level: 'B1',
    number: 6,
    moduleId: 'b1-m2',
    title: 'Einladungen',
    de: 'falls und Höflichkeit',
    teaser: 'Invite someone and set a condition with falls.',
    canDo: ['Write a warm invitation', 'Use falls for a real condition', 'Offer alternatives'],
    grammar: ['falls + verb last', 'Invitation register'],
    start: {
      de: 'Lea: Kommt doch vorbei! Fühlt euch wie zu Hause.\nAnna: Falls es regnet, bleiben wir einfach drinnen.',
      en: 'falls ≈ if (in case). More “in case” than wenn.',
    },
    points: [
      'Falls du Zeit hast, ruf an. wenn is still the default for habits and most ifs.',
    ],
    tables: [
      {
        caption: 'wenn / falls / ob',
        headers: ['Word', 'Use', 'Example'],
        rows: [
          ['wenn', 'when / whenever / if', 'Wenn ich Zeit habe, koche ich.'],
          ['falls', 'in case / if (condition)', 'Falls ich krank bin, sage ich Bescheid.'],
          ['ob', 'whether', 'Ich weiß nicht, ob sie kommt.'],
        ],
      },
    ],
    words: [
      ['die Einladung', 'invitation'],
      ['sich fühlen', 'to feel'],
      ['Bescheid sagen', 'to let someone know'],
    ],
    phrases: [
      ['Fühlen Sie sich wie zu Hause.', 'Make yourself at home.'],
      ['Falls du nicht kannst, schreib mir.', 'If you cannot make it, write to me.'],
    ],
    speak: 'Invite a classmate and give a falls backup plan.',
    write: 'An invitation email: what, when, where, falls it rains.',
    studyIds: ['kb-a1-24'],
  }),

  'kb-b1-07': L({
    id: 'kb-b1-07',
    level: 'B1',
    number: 7,
    moduleId: 'b1-m3',
    title: 'Beratung',
    de: 'Infinitiv mit zu',
    teaser: 'Help someone and park zu + infinitive at the end.',
    canDo: ['Give advice with es ist wichtig zu', 'Use verbs + zu', 'Offer help in a shop'],
    grammar: ['Infinitiv mit zu', 'um … zu review'],
    start: {
      de: 'Verkäuferin: Kann ich Ihnen helfen?\nTim: Ja. Ich versuche, ein günstiges Handy zu finden. Es ist wichtig, die Garantie zu lesen.',
      en: 'zu sits before the infinitive: ein Handy zu finden.',
    },
    points: [
      'planen zu, hoffen zu, vergessen zu, versuchen zu, sich freuen zu. Separable: anzurufen (zu in the middle).',
      'Same subject purpose: um … zu. Different subject: damit (L24).',
    ],
    tables: [
      {
        caption: 'zu + infinitive',
        headers: ['Pattern', 'Example'],
        rows: [
          ['verb + zu', 'Ich hoffe, bald zu kommen.'],
          ['separable', 'Ich versuche, dich anzurufen.'],
          ['es ist + adj. + zu', 'Es ist wichtig, das zu wissen.'],
          ['um … zu', 'Ich lerne, um die Prüfung zu bestehen.'],
        ],
      },
    ],
    words: [
      ['die Beratung', 'advice / consultation'],
      ['versuchen', 'to try'],
      ['die Garantie', 'guarantee / warranty'],
    ],
    phrases: [
      ['Kann ich Ihnen helfen?', 'Can I help you?'],
      ['Es ist wichtig, das zu prüfen.', 'It is important to check that.'],
    ],
    speak: 'Advise a friend buying a phone: three zu-sentences.',
    write: 'A 70-word tip list beginning with Man sollte versuchen, …',
    studyIds: ['kb-a2-13'],
  }),

  'kb-b1-08': L({
    id: 'kb-b1-08',
    level: 'B1',
    number: 8,
    moduleId: 'b1-m3',
    title: 'Bevor du entscheidest',
    de: 'da, während, bevor',
    teaser: 'Time and reason conjunctions for career talk.',
    canDo: ['Use bevor / während / nachdem contrast', 'Give a reason with da', 'Talk about choosing a job'],
    grammar: ['bevor', 'während', 'da'],
    start: {
      de: 'Anna: Bevor du dich entscheidest, solltest du Praktika machen.\nLea: Während andere lange nachdenken, fange ich einfach an. Da ich wenig Zeit habe, suche ich online.',
      en: 'All three send the verb to the end.',
    },
    points: [
      'bevor = before. während = while / during (also “whereas”). da = because (more written than weil).',
    ],
    tables: [
      {
        caption: 'Conjunctions',
        headers: ['Word', 'Meaning', 'Example'],
        rows: [
          ['bevor', 'before', 'Bevor ich komme, rufe ich an.'],
          ['während', 'while / whereas', 'Während ich koche, liest sie.'],
          ['da', 'because (written)', 'Da ich krank bin, bleibe ich zu Hause.'],
          ['nachdem', 'after (earlier past)', 'Nachdem ich gegessen hatte, ging ich. (L11)'],
        ],
      },
    ],
    words: [
      ['sich entscheiden', 'to decide'],
      ['das Praktikum', 'internship'],
      ['die Berufsfindung', 'finding a career'],
    ],
    phrases: [
      ['Bevor du sagst, denk nach.', 'Before you speak, think.'],
      ['Da ich Studentin bin, …', 'Since I am a student, …'],
    ],
    speak: 'Your job path: one bevor, one während, one da.',
    write: 'An 80-word email giving career advice with those three words.',
    studyIds: ['a2-weil-dass'],
  }),

  'kb-b1-09': L({
    id: 'kb-b1-09',
    level: 'B1',
    number: 9,
    moduleId: 'b1-m3',
    title: 'Gesünder leben',
    de: 'Komparativ und Superlativ',
    teaser: 'Compare sport and health properly, including irregulars.',
    canDo: ['Form regular comparatives', 'Use als / so … wie', 'Handle gut / viel / gern'],
    grammar: ['Komparativ', 'Superlativ', 'als vs so wie'],
    start: {
      de: 'Tim: Sport ist gesünder als stundenlanges Sitzen.\nMira: Joggen ist nicht so teuer wie ein Studio. Am besten ist Bewegung an der frischen Luft.',
      en: 'comparative + als. equality: so … wie. superlative: am + -sten or der/die/das + -ste.',
    },
    points: [
      'klein → kleiner → am kleinsten / der kleinste. Umlaut often: größer, jünger, älter.',
      'gut → besser → am besten. viel → mehr → am meisten. gern → lieber → am liebsten.',
    ],
    tables: [
      {
        caption: 'Comparison',
        headers: ['Base', 'Comparative', 'Superlative'],
        rows: [
          ['gesund', 'gesünder', 'am gesündesten'],
          ['groß', 'größer', 'am größten / der größte'],
          ['teuer', 'teurer', 'am teuersten'],
          ['gut', 'besser', 'am besten'],
          ['viel', 'mehr', 'am meisten'],
          ['gern', 'lieber', 'am liebsten'],
        ],
      },
    ],
    words: [
      ['das Wohlbefinden', 'well-being'],
      ['die Bewegung', 'movement / exercise'],
    ],
    phrases: [
      ['Das ist gesünder als …', 'That is healthier than …'],
      ['Ich laufe so oft wie möglich.', 'I run as often as possible.'],
    ],
    speak: 'Compare two sports with als, so wie, and am besten.',
    write: 'A 70-word tip: how to feel better this month. Three comparatives.',
    studyIds: ['kb-a1-22'],
  }),

  'kb-b1-10': L({
    id: 'kb-b1-10',
    level: 'B1',
    number: 10,
    moduleId: 'b1-m4',
    title: 'Hätte ich das anders gemacht',
    de: 'Konjunktiv II Vergangenheit',
    teaser: 'Regrets: wäre / hätte + participle.',
    canDo: ['Form past Konjunktiv II', 'Talk about a missed chance', 'Give unreal advice about the past'],
    grammar: ['hätte / wäre + Partizip II', 'würde review'],
    start: {
      de: 'Lea: Hätte ich das bloß anders gemacht!\nAnna: Wenn du früher gekommen wärst, hätten wir uns getroffen.',
      en: 'Present unreal: wäre/hätte/würde. Past unreal: wäre/hätte + participle.',
    },
    points: [
      'Ich hätte angerufen. Ich wäre gekommen. The participle stays at the end; hätte/wäre is the finite verb in position 2 or last in a wenn-clause.',
    ],
    tables: [
      {
        caption: 'Unreal past',
        headers: ['Real past', 'Unreal past'],
        rows: [
          ['Ich habe nicht angerufen.', 'Ich hätte angerufen.'],
          ['Ich bin nicht gekommen.', 'Ich wäre gekommen.'],
          ['Wir haben das nicht gewusst.', 'Wir hätten das gewusst.'],
        ],
      },
      {
        caption: 'Present unreal (review)',
        headers: ['Person', 'sein', 'haben', 'werden'],
        rows: [
          ['ich', 'wäre', 'hätte', 'würde'],
          ['du', 'wärst', 'hättest', 'würdest'],
          ['er / sie', 'wäre', 'hätte', 'würde'],
          ['wir / sie', 'wären', 'hätten', 'würden'],
        ],
      },
    ],
    words: [
      ['bloß', 'if only (particle)'],
      ['die Chance', 'chance'],
      ['bereuen', 'to regret'],
    ],
    phrases: [
      ['Hätte ich das gewusst!', 'If only I had known that!'],
      ['Ich würde das anders machen.', 'I would do that differently. (now)'],
    ],
    speak: 'Two regrets about last year (hätte/wäre) and one present wish (würde).',
    write: 'A 90-word story: a decision you would change.',
    studyIds: ['b1-konjunktiv2'],
  }),

  'kb-b1-11': L({
    id: 'kb-b1-11',
    level: 'B1',
    number: 11,
    moduleId: 'b1-m4',
    title: 'Nachdem wir Pech gehabt hatten',
    de: 'Plusquamperfekt',
    teaser: 'The earlier past: hatte / war + participle, often after nachdem.',
    canDo: ['Build Plusquamperfekt', 'Join with nachdem', 'Tell a two-step story'],
    grammar: ['Plusquamperfekt', 'nachdem'],
    start: {
      de: 'Tim: Nachdem wir jahrelang Pech gehabt hatten, hat endlich alles geklappt.\nMira: Nachdem sie angekommen war, haben wir gegessen.',
      en: 'nachdem + earlier past, then Perfekt or Präteritum for the later event.',
    },
    points: [
      'hatte gemacht / war gegangen. Same haben/sein split as Perfekt.',
    ],
    tables: [
      {
        caption: 'Three past layers',
        headers: ['Time', 'Form', 'Example'],
        rows: [
          ['later past (speech)', 'Perfekt', 'Ich habe gegessen.'],
          ['later past (writing)', 'Präteritum', 'Ich aß. / Ich aß zu Abend.'],
          ['earlier past', 'Plusquamperfekt', 'Nachdem ich gegessen hatte, ging ich.'],
        ],
      },
    ],
    words: [
      ['das Pech', 'bad luck'],
      ['klappen', 'to work out'],
      ['jahrelang', 'for years'],
    ],
    phrases: [
      ['Nachdem ich angekommen war, …', 'After I had arrived, …'],
      ['Endlich hat es geklappt.', 'It finally worked out.'],
    ],
    speak: 'A two-step story with nachdem + Plusquamperfekt.',
    write: 'A 90-word anecdote: bad luck, then a change.',
    studyIds: ['a2-perfekt'],
  }),

  'kb-b1-12': L({
    id: 'kb-b1-12',
    level: 'B1',
    number: 12,
    moduleId: 'b1-m4',
    title: 'Feste und Genitiv',
    de: 'Genitiv und trotz',
    teaser: 'Written “of” and trotz + genitive.',
    canDo: ['Form genitive articles', 'Use trotz / während / wegen', 'Describe a celebration'],
    grammar: ['Genitivartikel', 'trotz + Genitiv'],
    start: {
      de: 'Anna: Trotz des Regens war das Fest schön. Die Musik der Band war laut.\nLea: Wegen des Lärms haben sich Nachbarn beschwert.',
      en: 'des Mannes, der Frau, des Kindes, der Leute. Spoken German often uses von + dative instead.',
    },
    points: [
      'masc./neut. genitive article des + often -s on the noun: des Tages, des Kindes. Feminine/plural: der.',
    ],
    tables: [
      {
        caption: 'the — genitive',
        headers: ['', 'masc.', 'fem.', 'neut.', 'plural'],
        rows: [
          ['the', 'des', 'der', 'des', 'der'],
          ['a', 'eines', 'einer', 'eines', '—'],
          ['example', 'des Mannes', 'der Frau', 'des Kindes', 'der Kinder'],
        ],
      },
      {
        caption: 'Genitive prepositions',
        headers: ['Prep.', 'Example'],
        rows: [
          ['trotz', 'trotz des Wetters'],
          ['während', 'während der Pause'],
          ['wegen', 'wegen des Staus'],
          ['statt / anstatt', 'statt eines Geschenks'],
        ],
      },
    ],
    words: [
      ['das Fest', 'celebration'],
      ['der Lärm', 'noise'],
      ['sich beschweren', 'to complain'],
    ],
    phrases: [
      ['Trotz des Regens …', 'In spite of the rain …'],
      ['die Idee der Gruppe', 'the group’s idea'],
    ],
    speak: 'Describe a party using trotz and one genitive of-phrase.',
    write: 'A 80-word event report with two genitives.',
    studyIds: ['cases-genitive', 'cases-genitive-preps'],
  }),

  'kb-b1-13': L({
    id: 'kb-b1-13',
    level: 'B1',
    number: 13,
    moduleId: 'b1-m5',
    title: 'Missverständnisse',
    de: 'darum, deswegen, wegen',
    teaser: 'Give reasons without repeating weil every time.',
    canDo: ['Use darum / deshalb / deswegen', 'Contrast wegen + noun', 'Clear up a misunderstanding'],
    grammar: ['Result connectors', 'wegen + Genitiv'],
    start: {
      de: 'Tim: Aus diesem Grund gab es ein Missverständnis.\nMira: Ich hatte die Nachricht nicht gelesen. Deshalb habe ich nicht geantwortet.',
      en: 'darum / deshalb / deswegen = therefore (V2). wegen + noun = because of.',
    },
    points: [
      'Ich war krank. Deshalb bin ich zu Hause geblieben. wegen der Krankheit (noun, no verb).',
    ],
    tables: [
      {
        caption: 'Reason toolkit',
        headers: ['Form', 'Pattern', 'Example'],
        rows: [
          ['weil', 'verb last', 'Ich bleibe, weil ich krank bin.'],
          ['denn', 'V2', 'Ich bleibe, denn ich bin krank.'],
          ['deshalb / darum / deswegen', 'V2 in a new clause', 'Ich bin krank. Deshalb bleibe ich.'],
          ['wegen', 'genitive noun', 'wegen der Krankheit'],
        ],
      },
    ],
    words: [
      ['das Missverständnis', 'misunderstanding'],
      ['der Grund', 'reason'],
      ['deshalb', 'therefore'],
    ],
    phrases: [
      ['Aus diesem Grund …', 'For this reason …'],
      ['Das war ein Missverständnis.', 'That was a misunderstanding.'],
    ],
    speak: 'Explain a mix-up with deshalb and wegen.',
    write: 'A 70-word apology email using two different reason forms.',
    studyIds: ['a2-weil-dass'],
  }),

  'kb-b1-14': L({
    id: 'kb-b1-14',
    level: 'B1',
    number: 14,
    moduleId: 'b1-m5',
    title: 'Weiterbildung',
    de: 'Partizipien als Adjektive',
    teaser: 'die laufende Nummer, das geöffnete Fenster — participles in front of nouns.',
    canDo: ['Recognise present and past participles as adjectives', 'Read a course notice', 'Warn about risk language'],
    grammar: ['Partizip I / II as adjective'],
    start: {
      de: 'Schild: Die Teilnahme ist auf eigene Gefahr. Bitte die geschriebenen Regeln lesen.\nAnna: Die laufenden Kurse sind schon voll.',
      en: 'Partizip I = -end (running). Partizip II = ge- form (written). Then normal adjective endings.',
    },
    points: [
      'ein schlafendes Kind (sleeping). das geöffnete Fenster (opened). Full participle clauses are B2.',
    ],
    tables: [
      {
        caption: 'Participle adjectives',
        headers: ['Type', 'Form', 'Example'],
        rows: [
          ['Partizip I', 'infinitive + d', 'die laufende Nummer'],
          ['Partizip II', 'perfekt participle', 'die geschriebene Regel'],
          ['with ending', 'like any adjective', 'ein geöffnetes Fenster'],
        ],
      },
    ],
    words: [
      ['die Weiterbildung', 'further training'],
      ['die Teilnahme', 'participation'],
      ['die Gefahr', 'danger'],
    ],
    phrases: [
      ['auf eigene Gefahr', 'at your own risk'],
      ['die angebotenen Kurse', 'the courses on offer'],
    ],
    speak: 'Read a notice aloud and point to two participle adjectives.',
    write: 'A course poster with two participle adjectives.',
    studyIds: [],
  }),

  'kb-b1-15': L({
    id: 'kb-b1-15',
    level: 'B1',
    number: 15,
    moduleId: 'b1-m5',
    title: 'Bewerbung',
    de: 'nicht nur … sondern auch',
    teaser: 'Job letters and two-part connectors.',
    canDo: ['Write a short application paragraph', 'Use nicht nur … sondern auch', 'Open and close formally'],
    grammar: ['nicht nur … sondern auch', 'Formal letter bits'],
    start: {
      de: 'Lea: Schön, dass Sie da sind. Ich bringe nicht nur Erfahrung mit, sondern auch gute Deutschkenntnisse.',
      en: 'Both halves need a matching piece. sondern replaces a negated idea.',
    },
    points: [
      'Ich spreche nicht nur Deutsch, sondern auch Englisch. After a negative, sondern (not aber) introduces the replacement.',
    ],
    tables: [
      {
        caption: 'Application kit',
        headers: ['Deutsch', 'English'],
        rows: [
          ['Sehr geehrte Damen und Herren,', 'Dear Sir or Madam,'],
          ['hiermit bewerbe ich mich um …', 'I hereby apply for …'],
          ['nicht nur …, sondern auch …', 'not only … but also …'],
          ['Mit freundlichen Grüßen', 'Yours sincerely'],
        ],
      },
    ],
    words: [
      ['die Bewerbung', 'application'],
      ['die Erfahrung', 'experience'],
      ['die Stelle', 'position'],
    ],
    phrases: [
      ['Ich bewerbe mich um die Stelle als …', 'I am applying for the post of …'],
      ['Über eine Einladung würde ich mich freuen.', 'I would be glad of an invitation (to interview).'],
    ],
    speak: 'A 60-second pitch: not only X but also Y.',
    write: 'A 100-word application paragraph with nicht nur / sondern auch.',
    studyIds: ['b1-write-formal'],
  }),

  'kb-b1-16': L({
    id: 'kb-b1-16',
    level: 'B1',
    number: 16,
    moduleId: 'b1-m6',
    title: 'Jugend und brauchen',
    de: 'brauchen + zu / nicht brauchen',
    teaser: 'You need to / you need not — brauchen zu.',
    canDo: ['Use brauchen + zu', 'Say du brauchst nicht zu', 'Talk about growing up'],
    grammar: ['brauchen + zu', 'nicht brauchen = need not'],
    start: {
      de: 'Tim: Früher brauchten wir uns um nichts zu kümmern.\nMira: Heute brauchst du nicht zu warten. Du kannst gleich anfangen.',
      en: 'brauchen + zu is like müssen, but nicht brauchen = you do not have to (not “must not”).',
    },
    points: [
      'Du musst nicht / Du brauchst nicht zu kommen = no obligation. Du darfst nicht kommen = forbidden.',
    ],
    tables: [
      {
        caption: 'Obligation vs freedom',
        headers: ['German', 'English'],
        rows: [
          ['Du musst bleiben.', 'You have to stay.'],
          ['Du musst nicht bleiben.', 'You do not have to stay.'],
          ['Du brauchst nicht zu bleiben.', 'You need not stay.'],
          ['Du darfst nicht bleiben.', 'You are not allowed to stay.'],
        ],
      },
    ],
    words: [
      ['die Jugend', 'youth'],
      ['sich kümmern um', 'to take care of / deal with'],
    ],
    phrases: [
      ['Wir brauchten uns um nichts zu kümmern.', 'We did not have to worry about anything.'],
      ['Du brauchst nicht anzurufen.', 'You need not call.'],
    ],
    speak: 'Three things you need not do this week (brauchen nicht zu).',
    write: 'A 80-word text: childhood vs now, one brauchen zu.',
    studyIds: ['kb-a1-21'],
  }),

  'kb-b1-17': L({
    id: 'kb-b1-17',
    level: 'B1',
    number: 17,
    moduleId: 'b1-m6',
    title: 'Biografien',
    de: 'es-Ausdrücke',
    teaser: 'It is important / there is / I find it … — empty es.',
    canDo: ['Use es gibt / es ist / es fällt mir schwer', 'Write a short biography', 'Describe a photo'],
    grammar: ['es as placeholder'],
    start: {
      de: 'Anna: Guck mal! Das ist schön. Es ist wichtig, die Familie zu kennen.\nLea: Es fällt mir schwer, über früher zu sprechen. Es gibt viele Fotos.',
      en: 'es holds position 1 so the verb can stay second.',
    },
    points: [
      'es gibt + accusative. es ist + adjective + zu. es fällt mir schwer / leicht, zu …',
    ],
    tables: [
      {
        caption: 'es patterns',
        headers: ['Pattern', 'Example'],
        rows: [
          ['es gibt', 'Es gibt ein Foto von 1998.'],
          ['es ist + adj. + zu', 'Es ist schön, hier zu sein.'],
          ['es fällt mir schwer, zu', 'Es fällt mir schwer, das zu sagen.'],
          ['es geht um', 'Es geht um meine Großeltern.'],
        ],
      },
    ],
    words: [
      ['die Biografie', 'biography'],
      ['das Foto', 'photo'],
    ],
    phrases: [
      ['Es geht um …', 'It is about …'],
      ['Es fällt mir leicht, …', 'I find it easy to …'],
    ],
    speak: 'A 1-minute life story with two es-phrases.',
    write: 'An 80-word caption for a family photo.',
    studyIds: [],
  }),

  'kb-b1-18': L({
    id: 'kb-b1-18',
    level: 'B1',
    number: 18,
    moduleId: 'b1-m6',
    title: 'Meinung und Politik',
    de: 'entweder/oder, weder/noch, zwar/aber',
    teaser: 'Take a stance without a speech. Two-part connectors.',
    canDo: ['Give a balanced opinion', 'Use either/or and neither/nor', 'Concede with zwar … aber'],
    grammar: ['entweder … oder', 'weder … noch', 'zwar … aber'],
    start: {
      de: 'Tim: Davon halte ich nicht viel. Entweder wir diskutieren sachlich, oder wir hören auf.\nMira: Ich bin zwar unsicher, aber ich finde das Thema wichtig. Weder links noch rechts hat immer recht.',
      en: 'Paired connectors. Both parts stay in the sentence.',
    },
    points: [
      'Ich trinke entweder Tee oder Kaffee. Ich trinke weder Tee noch Kaffee. Das ist zwar teuer, aber gut.',
    ],
    tables: [
      {
        caption: 'Paired connectors',
        headers: ['Pair', 'English', 'Example'],
        rows: [
          ['entweder … oder', 'either … or', 'Entweder heute oder morgen.'],
          ['weder … noch', 'neither … nor', 'weder Zeit noch Geld'],
          ['zwar … aber', 'admittedly … but', 'Zwar klein, aber fein.'],
          ['nicht nur … sondern auch', 'not only … but also', 'nicht nur hier, sondern auch dort'],
        ],
      },
    ],
    words: [
      ['die Meinung', 'opinion'],
      ['sachlich', 'factual / objective'],
      ['halten von', 'to think of'],
    ],
    phrases: [
      ['Davon halte ich nicht viel.', 'I do not think much of that.'],
      ['Was meinst du?', 'What do you think?'],
    ],
    speak: 'A 90-second opinion on one local rule. Use zwar … aber and a question to the partner.',
    write: 'A Goethe-style forum post: opinion, two reasons, example, close.',
    studyIds: ['b1-opinions', 'b1-write-forum'],
  }),

  'kb-b1-19': L({
    id: 'kb-b1-19',
    level: 'B1',
    number: 19,
    moduleId: 'b1-m7',
    title: 'Je länger, desto besser',
    de: 'je … desto und Modalpartikeln',
    teaser: 'The longer the trip, the better — and small talk particles.',
    canDo: ['Build je … desto', 'Use doch / mal / ja lightly', 'Talk about travel habits with age'],
    grammar: ['je + comparative, desto + comparative', 'Modalpartikeln'],
    start: {
      de: 'Lea: Je älter ich wurde, desto mehr wollte ich reisen.\nAnna: Komm doch mal mit! Das ist ja einfach.',
      en: 'je-clause: verb last. desto-clause: verb after the comparative (V2 shape).',
    },
    points: [
      'Je mehr man übt, desto besser wird man. Particles: doch (come on / after all), mal (soften), ja (as you know), wohl (probably).',
    ],
    tables: [
      {
        caption: 'je … desto',
        headers: ['Pattern', 'Example'],
        rows: [
          ['je + comp. … desto + comp.', 'Je länger wir warten, desto später kommen wir an.'],
          ['je mehr … desto weniger', 'Je mehr ich arbeite, desto weniger Freizeit habe ich.'],
        ],
      },
      {
        caption: 'Particles (tone, not grammar marks)',
        headers: ['Word', 'Feel', 'Example'],
        rows: [
          ['doch', 'emphasis / come on', 'Komm doch mit!'],
          ['mal', 'soften a request', 'Sag mal, …'],
          ['ja', 'as you know', 'Das ist ja klar.'],
          ['wohl', 'probably', 'Er ist wohl krank.'],
        ],
      },
    ],
    words: [
      ['der Tourismus', 'tourism'],
      ['desto', 'the (in “the more … the”)'],
    ],
    phrases: [
      ['Je öfter ich fahre, desto ruhiger bin ich.', 'The more often I travel, the calmer I am.'],
      ['Komm doch mal vorbei.', 'Do drop by.'],
    ],
    speak: 'Two je-desto sentences about language learning plus one particle.',
    write: 'A 70-word travel comment with je desto.',
    studyIds: [],
  }),

  'kb-b1-20': L({
    id: 'kb-b1-20',
    level: 'B1',
    number: 20,
    moduleId: 'b1-m7',
    title: 'Hausordnung',
    de: 'Regeln erklären',
    teaser: 'Read and explain house rules without sounding rude.',
    canDo: ['Explain a rule and its reason', 'Use man / Sie in notices', 'Suggest a fair change'],
    grammar: ['man in rules', 'sollen / müssen review'],
    start: {
      de: 'Zettel: Nach 22 Uhr soll man leise sein. Die anderen werden es dir danken.\nTim: Das verstehe ich. Trotzdem ist die Küche oft laut.',
      en: 'Notices prefer man or infinitives: Bitte leise sein.',
    },
    points: [
      'Bitte die Tür schließen. Man darf hier nicht rauchen. Wir sollten das im Hausgespräch klären.',
    ],
    tables: [
      {
        caption: 'Rule language',
        headers: ['Deutsch', 'English'],
        rows: [
          ['Bitte leise sein.', 'Please be quiet.'],
          ['Es ist verboten, …', 'It is forbidden to …'],
          ['Man soll …', 'One should …'],
          ['Die Hausordnung steht im Flur.', 'The house rules are in the hallway.'],
        ],
      },
    ],
    words: [
      ['die Hausordnung', 'house rules'],
      ['leise', 'quiet'],
      ['danken', 'to thank'],
    ],
    phrases: [
      ['Die anderen werden es dir danken.', 'The others will thank you for it.'],
      ['Können wir das klären?', 'Can we sort that out?'],
    ],
    speak: 'Explain three house rules and one you would change (zwar … aber).',
    write: 'A polite notice for a shared kitchen.',
    studyIds: ['kb-a1-21'],
  }),

  'kb-b1-21': L({
    id: 'kb-b1-21',
    level: 'B1',
    number: 21,
    moduleId: 'b1-m7',
    title: 'Es muss geübt werden',
    de: 'Passiv mit Modalverb',
    teaser: 'werden + participle, and modal + worden? No: modal + participle + werden.',
    canDo: ['Form present passive', 'Add a modal: muss gemacht werden', 'Use innerhalb / außerhalb'],
    grammar: ['Vorgangspassiv Präsens', 'Modal + Passiv'],
    start: {
      de: 'Lehrerin: Vorher muss natürlich fleißig geübt werden.\nTim: Die Prüfung wird im Juli geschrieben. Innerhalb der Schule darf nicht gegessen werden.',
      en: 'Das Paket wird geliefert. Das Paket muss geliefert werden. (modal + participle + werden)',
    },
    points: [
      'werden conjugates; participle at the end. Modal sits in position 2: Es muss geübt werden.',
    ],
    tables: [
      {
        caption: 'Passive present',
        headers: ['Active', 'Passive'],
        rows: [
          ['Jemand übt die Formen.', 'Die Formen werden geübt.'],
          ['Man schreibt die Prüfung im Juli.', 'Die Prüfung wird im Juli geschrieben.'],
          ['Man muss das üben.', 'Das muss geübt werden.'],
          ['Man darf hier nicht essen.', 'Hier darf nicht gegessen werden.'],
        ],
      },
      {
        caption: 'innerhalb / außerhalb',
        headers: ['Phrase', 'English'],
        rows: [
          ['innerhalb der Stadt', 'inside the city'],
          ['außerhalb der Schule', 'outside the school'],
        ],
      },
    ],
    words: [
      ['üben', 'to practise'],
      ['innerhalb', 'inside / within'],
      ['außerhalb', 'outside'],
    ],
    phrases: [
      ['Das muss gemacht werden.', 'That has to be done.'],
      ['Hier wird Deutsch gesprochen.', 'German is spoken here.'],
    ],
    speak: 'Turn four school rules into passive (two with muss).',
    write: 'A 70-word course info sheet with three passives.',
    studyIds: ['b1-passiv'],
  }),

  'kb-b1-22': L({
    id: 'kb-b1-22',
    level: 'B1',
    number: 22,
    moduleId: 'b1-m8',
    title: 'Geschichte im Passiv',
    de: 'Passiv Präteritum und Perfekt',
    teaser: 'History texts: wurde gemacht, ist gemacht worden.',
    canDo: ['Form wurde + participle', 'Recognise ist … worden', 'Read a short history line'],
    grammar: ['Passiv Präteritum', 'Passiv Perfekt'],
    start: {
      de: 'Text: 1949 wurde die Bundesrepublik gegründet. Viele Gesetze sind später geändert worden.',
      en: 'Writing: wurde. Spoken result: ist … worden (worden, not geworden).',
    },
    points: [
      'worden is the participle of werden in the passive. geworden is “became”: Es ist kalt geworden.',
    ],
    tables: [
      {
        caption: 'Passive tenses',
        headers: ['Tense', 'Form', 'Example'],
        rows: [
          ['Present', 'wird + Partizip', 'Das Gesetz wird diskutiert.'],
          ['Präteritum', 'wurde + Partizip', 'Das Gesetz wurde beschlossen.'],
          ['Perfekt', 'ist + Partizip + worden', 'Das Gesetz ist beschlossen worden.'],
        ],
      },
    ],
    words: [
      ['gründen', 'to found'],
      ['das Gesetz', 'law'],
      ['ändern', 'to change'],
    ],
    phrases: [
      ['… wurde gegründet.', '… was founded.'],
      ['… ist geändert worden.', '… has been changed.'],
    ],
    speak: 'Three history facts in wurde-passive (your country or Germany).',
    write: 'An 80-word paragraph: one event, two wurde sentences, one worden.',
    studyIds: ['b1-passiv'],
  }),

  'kb-b1-23': L({
    id: 'kb-b1-23',
    level: 'B1',
    number: 23,
    moduleId: 'b1-m8',
    title: 'Umwelt',
    de: 'statt / ohne zu, statt dass',
    teaser: 'Talk about the environment with instead-of and without-doing.',
    canDo: ['Use ohne … zu / statt … zu', 'Switch to dass if subjects differ', 'Give a green tip'],
    grammar: ['ohne zu', 'statt zu', 'statt dass'],
    start: {
      de: 'Mira: Fahrradfahren ist in. Viele fahren mit dem Rad, statt das Auto zu nehmen.\nTim: Man kann nicht leben, ohne Energie zu brauchen. Aber wir können weniger fliegen.',
      en: 'Same subject: statt / ohne + zu. Different subject: statt dass / ohne dass.',
    },
    points: [
      'Ich gehe, ohne zu grüßen. Ich lerne, statt fernzusehen. Er geht, ohne dass sie es merkt.',
    ],
    tables: [
      {
        caption: 'statt / ohne',
        headers: ['Same subject', 'Different subject'],
        rows: [
          ['statt das Auto zu nehmen', 'statt dass wir das Auto nehmen'],
          ['ohne zu fragen', 'ohne dass jemand fragt'],
        ],
      },
    ],
    words: [
      ['die Umwelt', 'environment'],
      ['das Fahrradfahren', 'cycling (noun)'],
      ['fliegen', 'to fly'],
    ],
    phrases: [
      ['statt das Auto zu nehmen', 'instead of taking the car'],
      ['ohne zu fliegen', 'without flying'],
    ],
    speak: 'Three green swaps with statt zu.',
    write: 'A forum post on transport: opinion + statt zu + one reason.',
    studyIds: ['b1-opinions'],
  }),

  'kb-b1-24': L({
    id: 'kb-b1-24',
    level: 'B1',
    number: 24,
    moduleId: 'b1-m8',
    title: 'Ziele und als ob',
    de: 'damit, um zu, als ob',
    teaser: 'Purpose clauses and a first “as if.”',
    canDo: ['Choose um zu vs damit', 'State a purpose clearly', 'Recognise als ob'],
    grammar: ['um … zu', 'damit', 'als ob (recognition)'],
    start: {
      de: 'Anna: Ich lerne Deutsch, um in Köln zu arbeiten.\nLea: Ich erkläre das langsam, damit alle mitkommen. Manche tun so, als ob sie alles verstünden.',
      en: 'Same subject → um zu. New subject → damit (verb last). als ob often takes Konjunktiv (B1 recognition, B2 control).',
    },
    points: [
      'Ich spare, um ein Ticket zu kaufen. Ich spare, damit meine Schwester ein Ticket kaufen kann.',
    ],
    tables: [
      {
        caption: 'Purpose',
        headers: ['Tool', 'When', 'Example'],
        rows: [
          ['um … zu', 'same subject', 'Ich lerne, um die Prüfung zu bestehen.'],
          ['damit', 'new subject (or extra clarity)', 'Ich erkläre das, damit ihr es versteht.'],
          ['als ob', 'as if (often Konjunktiv)', 'Er tut so, als ob er schliefe.'],
        ],
      },
    ],
    words: [
      ['das Ziel', 'goal'],
      ['lösen', 'to solve'],
      ['tun so als ob', 'to act as if'],
    ],
    phrases: [
      ['Das löst mehrere Probleme.', 'That solves several problems.'],
      ['Ich sage das, damit es klar ist.', 'I say that so that it is clear.'],
    ],
    speak: 'Your German goal: one um zu and one damit.',
    write: 'A 100-word plan for the B1 exam: two purposes, one als ob you notice in others.',
    studyIds: ['kb-a2-13', 'b1-write-formal'],
  }),
}
