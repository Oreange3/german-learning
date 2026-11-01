const b = (...answer) => ({ answer: answer.length === 1 ? answer[0] : answer })

export const sentenceCategory = {
  id: 'satz',
  title: 'Sentence structure',
  de: 'Satzbau',
  subgroups: [
    {
      id: 'satz-frame',
      title: 'The frame',
      de: 'Der Rahmen',
      lessons: [
        { id: 'satz-verb-second', title: 'The verb stands second' },
        { id: 'satz-questions', title: 'Questions and commands' },
        { id: 'satz-bracket', title: 'The verb bracket' },
        { id: 'satz-first', title: 'Something else comes first' },
      ],
    },
    {
      id: 'satz-middle',
      title: 'The middle of the sentence',
      de: 'Das Mittelfeld',
      lessons: [
        { id: 'satz-tekamolo', title: 'TeKaMoLo' },
        { id: 'satz-objects', title: 'Pronouns and nouns in the middle' },
        { id: 'satz-nicht', title: 'Where nicht goes' },
      ],
    },
    {
      id: 'satz-clauses',
      title: 'More than one clause',
      de: 'Nebensätze',
      lessons: [
        { id: 'satz-und', title: 'und, aber, denn, sondern' },
        { id: 'satz-nebensatz', title: 'The verb goes to the end' },
        { id: 'satz-zu', title: 'um … zu' },
        { id: 'satz-relativ-order', title: 'Relative clauses and the verb' },
      ],
    },
  ],
}

export const sentenceLessons = {
  'satz-verb-second': {
    category: 'satz',
    level: 'A1',
    title: 'The verb stands second',
    teaser: 'A statement has one conjugated verb, and that verb is in slot two.',
    wordIds: ['gehen', 'kommen', 'heute', 'nicht'],
    points: [
      'A German statement has one conjugated verb, and that verb stands in position 2. Ich gehe zur Schule. Position 1 is ich. Position 2 is gehe.',
      'Position 1 is one slot, not one word. Nach der Schule is one slot. Heute Abend is one slot. The verb is the next slot.',
      'If position 1 is not the subject, the subject comes straight after the verb. Morgen gehe ich zur Schule. Not Morgen ich gehe.',
      'Only the conjugated verb takes position 2. A second verb, a participle, or a separable prefix waits at the end.',
    ],
    examples: [
      { de: 'Ich trinke morgens Kaffee.', en: 'I drink coffee in the morning. ich is position 1.' },
      { de: 'Morgens trinke ich Kaffee.', en: 'In the morning I drink coffee. The time took position 1, so ich moved behind the verb.' },
      { de: 'Nach der Schule trifft er seinen Freund.', en: 'After school he meets his friend. Nach der Schule is one slot.' },
    ],
    tables: [
      {
        caption: 'Count slots, not words',
        headers: ['Position 1', 'Verb', 'The rest'],
        rows: [
          ['Ich', 'trinke', 'morgens Kaffee.'],
          ['Morgens', 'trinke', 'ich Kaffee.'],
          ['Heute', 'kauft', 'sie Brot.'],
          ['Nach der Schule', 'trifft', 'er seinen Freund.'],
        ],
      },
    ],
    drills: [
      {
        caption: 'Put the verb in slot two',
        help: 'Rewrite the sentence. One slot in front of the verb.',
        headers: ['Broken', 'German'],
        rows: [
          ['Morgen ich gehe zur Schule.', b('Morgen gehe ich zur Schule.')],
          ['Heute sie kauft Brot.', b('Heute kauft sie Brot.')],
          ['Im Park das Kind spielt.', b('Im Park spielt das Kind.')],
        ],
      },
    ],
  },
  'satz-questions': {
    category: 'satz',
    level: 'A1',
    title: 'Questions and commands',
    teaser: 'Yes/no questions and commands start with the verb. A W-question starts with the question word.',
    wordIds: ['kommen', 'haben', 'gehen', 'heute'],
    points: [
      'A yes/no question starts with the conjugated verb. Kommst du mit? Hast du Zeit? The subject is the next slot.',
      'A W-question puts the question word in position 1 and the verb in position 2. Wo wohnst du? Wann beginnt der Kurs?',
      'A command starts with the verb. Komm! Kommt! Kommen Sie! The du form drops the -st ending: du kommst → Komm!',
      'A second verb still waits at the end. Kannst du morgen kommen? Hast du das Buch gelesen?',
    ],
    examples: [
      { de: 'Kommst du heute mit?', en: 'Are you coming along today?' },
      { de: 'Wo wohnst du?', en: 'Where do you live?' },
      { de: 'Kannst du morgen kommen?', en: 'Can you come tomorrow? kannst is early. kommen is at the end.' },
      { de: 'Kommen Sie bitte herein.', en: 'Please come in. The Sie command keeps the infinitive form.' },
    ],
    tables: [
      {
        caption: 'Three openings',
        headers: ['Kind', 'Opens with', 'Example'],
        rows: [
          ['statement', 'one slot, then the verb', 'Du kommst mit.'],
          ['yes/no', 'the verb', 'Kommst du mit?'],
          ['W-question', 'the question word, then the verb', 'Wann kommst du?'],
          ['command', 'the verb', 'Komm mit!'],
        ],
      },
    ],
  },
  'satz-bracket': {
    category: 'satz',
    level: 'A1–A2',
    title: 'The verb bracket',
    teaser: 'The conjugated verb opens the bracket. The other verb part closes it.',
    wordIds: ['gehen', 'fahren', 'haben', 'kommen'],
    points: [
      'Many sentences have two verb pieces. The conjugated piece stands in position 2. The other piece stands at the end. What is left sits in the middle.',
      'Separable verbs: Ich stehe um sieben Uhr auf. stehe is position 2. auf closes the bracket.',
      'Modals: Sie will heute Brot kaufen. will is position 2. kaufen closes it.',
      'Perfekt: Wir haben gestern Pizza gegessen. haben is position 2. gegessen closes it. Movement and change of state use sein: Er ist um sieben aufgestanden.',
      'Build the bracket first, then fill the middle. The middle is where TeKaMoLo and the objects live.',
    ],
    examples: [
      { de: 'Ich stehe um sieben Uhr auf.', en: 'I get up at seven. stehe … auf is the bracket.' },
      { de: 'Sie will heute Brot kaufen.', en: 'She wants to buy bread today.' },
      { de: 'Wir haben gestern Pizza gegessen.', en: 'We ate pizza yesterday.' },
      { de: 'Er ist um sieben aufgestanden.', en: 'He got up at seven. The prefix and the participle meet at the end.' },
    ],
    tables: [
      {
        caption: 'What closes the bracket',
        headers: ['Pattern', 'Position 2', 'Closes the bracket'],
        rows: [
          ['separable verb', 'stehe', 'auf'],
          ['modal + infinitive', 'will', 'kaufen'],
          ['Perfekt with haben', 'haben', 'gegessen'],
          ['Perfekt with sein', 'ist', 'aufgestanden'],
        ],
      },
    ],
  },
  'satz-first': {
    category: 'satz',
    level: 'A1–A2',
    title: 'Something else comes first',
    teaser: 'Time, place, or an object can take slot one. The verb stays second.',
    wordIds: ['heute', 'gehen', 'nicht', 'aber'],
    points: [
      'Putting a time or a place first is normal. Heute bleibe ich zu Hause. Im Park spielt das Kind.',
      'Only one constituent stands in front of the verb. Heute im Park spielt das Kind is not the neutral sentence. Pick one for position 1 and leave the other in the middle.',
      'The subject then sits immediately after the verb. Do not leave the subject in front as well.',
      'An object can take position 1. The case still shows the job: Den Apfel isst der Mann. den marks the apple as the object even though it is first.',
      'deshalb, dann, danach, and trotzdem like position 1. Deshalb bleibe ich zu Hause.',
    ],
    examples: [
      { de: 'Heute Abend bleibe ich zu Hause.', en: 'This evening I am staying home. Heute Abend is one slot.' },
      { de: 'Den Apfel isst der Mann.', en: 'The man eats the apple. The object is first, and den keeps the job clear.' },
      { de: 'Deshalb bleibe ich zu Hause.', en: 'That is why I am staying home.' },
    ],
    tables: [
      {
        caption: 'One slot, then the verb',
        headers: ['In position 1', 'Then', 'Not this'],
        rows: [
          ['Heute', 'Heute bleibe ich zu Hause.', 'Heute ich bleibe zu Hause.'],
          ['Im Park', 'Im Park spielt das Kind.', 'Im Park das Kind spielt.'],
          ['Den Apfel', 'Den Apfel isst der Mann.', 'Den Apfel der Mann isst.'],
        ],
      },
    ],
  },
  'satz-tekamolo': {
    category: 'satz',
    level: 'A2',
    title: 'TeKaMoLo',
    teaser: 'Time, reason, manner, place. That is the usual order of the extra pieces.',
    wordIds: ['heute', 'fahren', 'mit', 'nach', 'gehen'],
    points: [
      'When several adverbials sit in the middle, German lines them up: temporal, kausal, modal, lokal. The short name is TeKaMoLo.',
      'Te asks when: heute, morgen, um acht, im Sommer. Ka asks why: wegen des Streiks, aus Müdigkeit, vor Freude. Mo asks how: mit dem Bus, schnell, gern, allein. Lo asks where or where to: nach Berlin, zu Hause, im Park.',
      'The bracket does not move. TeKaMoLo fills the middle. Ich fahre morgen wegen des Streiks mit dem Bus nach Berlin.',
      'You rarely need all four. Two is the everyday case, and the same order holds: time, then manner, then place. Ich lerne abends in der Bibliothek.',
      'If you move one piece into position 1, the others stay in TeKaMoLo order behind the verb. Morgen fahre ich wegen des Streiks mit dem Bus nach Berlin.',
      'The subject is not part of TeKaMoLo. Neither is the object. TeKaMoLo orders the extra information, not the nouns that the verb requires.',
    ],
    examples: [
      { de: 'Ich fahre morgen wegen des Streiks mit dem Bus nach Berlin.', en: 'I am going to Berlin by bus tomorrow because of the strike.' },
      { de: 'Sie ist gestern aus Müdigkeit schnell nach Hause gegangen.', en: 'She went home quickly yesterday out of tiredness. gegangen closes the bracket.' },
      { de: 'Morgen fahre ich wegen des Streiks mit dem Bus nach Berlin.', en: 'Tomorrow is in position 1. Reason, manner, and place stay in order.' },
      { de: 'Ich lerne abends in der Bibliothek.', en: 'I study in the library in the evenings. Time, then place.' },
    ],
    tables: [
      {
        caption: 'The four letters',
        headers: ['Letter', 'Asks', 'Typical words', 'In the sample sentence'],
        rows: [
          ['Te', 'when?', 'heute, um acht, im Sommer', 'morgen'],
          ['Ka', 'why?', 'wegen, aus, vor', 'wegen des Streiks'],
          ['Mo', 'how?', 'mit, schnell, gern', 'mit dem Bus'],
          ['Lo', 'where?', 'nach, zu, in, im', 'nach Berlin'],
        ],
      },
      {
        caption: 'Build one sentence',
        headers: ['Add', 'Sentence'],
        rows: [
          ['time', 'Ich fahre morgen.'],
          ['time + manner', 'Ich fahre morgen mit dem Bus.'],
          ['time + manner + place', 'Ich fahre morgen mit dem Bus nach Berlin.'],
          ['time + reason + manner + place', 'Ich fahre morgen wegen des Streiks mit dem Bus nach Berlin.'],
        ],
      },
    ],
    drills: [
      {
        caption: 'Put the middle in TeKaMoLo order',
        help: 'Time, then reason if there is one, then manner, then place.',
        headers: ['Pieces', 'Sentence'],
        rows: [
          ['ich fahre / nach Berlin / morgen / mit dem Bus', b('Ich fahre morgen mit dem Bus nach Berlin.')],
          ['ich fahre / mit dem Bus / wegen des Streiks / morgen / nach Berlin', b('Ich fahre morgen wegen des Streiks mit dem Bus nach Berlin.')],
          ['sie geht / nach Hause / schnell / abends', b('Sie geht abends schnell nach Hause.')],
        ],
      },
    ],
  },
  'satz-objects': {
    category: 'satz',
    level: 'A2',
    title: 'Pronouns and nouns in the middle',
    teaser: 'Pronouns come before nouns. Two nouns: dative, then accusative.',
    wordIds: ['geben', 'nicht'],
    points: [
      'Objects sit in the middle, inside the bracket, and they have their own order on top of TeKaMoLo.',
      'A pronoun comes before a noun. Ich gebe ihm das Buch. Ich gebe es dem Mann.',
      'Two pronouns: accusative, then dative. Ich gebe es ihm.',
      'Two nouns: dative, then accusative. Ich gebe dem Mann das Buch.',
      'A pronoun points back at something already known, so it comes early. A full noun often brings new information, so it comes later.',
    ],
    examples: [
      { de: 'Ich gebe es ihm.', en: 'I give it to him. Both are pronouns: accusative es, then dative ihm.' },
      { de: 'Ich gebe ihm das Buch.', en: 'I give him the book. The pronoun ihm comes before the noun.' },
      { de: 'Ich gebe dem Mann das Buch.', en: 'I give the man the book. Both are nouns: dative, then accusative.' },
      { de: 'Ich gebe es dem Mann.', en: 'I give it to the man. The pronoun still comes first.' },
    ],
    tables: [
      {
        caption: 'Neutral order in the middle',
        headers: ['What you have', 'Order', 'Example'],
        rows: [
          ['two pronouns', 'accusative, then dative', 'Ich gebe es ihm.'],
          ['pronoun + noun', 'pronoun first', 'Ich gebe ihm das Buch.'],
          ['two nouns', 'dative, then accusative', 'Ich gebe dem Mann das Buch.'],
        ],
      },
    ],
    drills: [
      {
        caption: 'Order the two objects',
        help: 'Pronoun before noun. Two pronouns: es before ihm. Two nouns: dem Mann before das Buch.',
        headers: ['Cue', 'Sentence'],
        rows: [
          ['give / it / him', b('Ich gebe es ihm.')],
          ['give / him / the book', b('Ich gebe ihm das Buch.')],
          ['give / the man / the book', b('Ich gebe dem Mann das Buch.')],
        ],
      },
    ],
  },
  'satz-nicht': {
    category: 'satz',
    level: 'A2',
    title: 'Where nicht goes',
    teaser: 'nicht sits in front of the piece it cancels. At the end, it cancels the verb.',
    wordIds: ['nicht', 'heute', 'hier', 'kommen', 'gehen'],
    points: [
      'nicht at the end of a short sentence cancels the verb or the whole predicate. Ich weiß nicht. Das ist nicht gut. Er kommt nicht.',
      'If a time or a place is just extra information, nicht still likes the end: Ich komme heute nicht. Er arbeitet hier nicht.',
      'nicht moves in front of the one piece you want to cancel. Nicht heute means “not today.” Nicht hier means “not here.” Nicht mein Bruder means “not my brother.”',
      'Inside a bracket, nicht stands in front of the piece that closes it. Ich stehe morgen nicht auf. Sie hat das Buch nicht gelesen. Wir können heute nicht kommen.',
      'kein replaces ein, or a noun with no article. keine Zeit, kein Buch. Everyday German does not say nicht ein Buch.',
    ],
    examples: [
      { de: 'Ich komme heute nicht.', en: 'I am not coming today. The whole action is cancelled.' },
      { de: 'Ich komme nicht heute, sondern morgen.', en: 'I am not coming today, but tomorrow. Only heute is cancelled.' },
      { de: 'Sie hat das Buch nicht gelesen.', en: 'She has not read the book. nicht stands before the participle.' },
      { de: 'Ich habe keine Zeit.', en: 'I have no time. kein, not nicht ein.' },
    ],
    tables: [
      {
        caption: 'nicht versus kein',
        headers: ['You want to cancel', 'Use', 'Example'],
        rows: [
          ['the verb', 'nicht, late', 'Er kommt nicht.'],
          ['one word', 'nicht in front of it', 'nicht heute'],
          ['the end of the bracket', 'nicht in front of that piece', 'nicht gelesen / nicht auf'],
          ['a noun with ein, or with no article', 'kein', 'keine Zeit'],
        ],
      },
    ],
    drills: [
      {
        caption: 'Where does nicht go?',
        help: 'Write the whole sentence.',
        headers: ['Idea', 'Sentence'],
        rows: [
          ['She is not coming today. (the action)', b('Sie kommt heute nicht.')],
          ['I am not getting up tomorrow.', b('Ich stehe morgen nicht auf.')],
          ['We cannot come today.', b('Wir können heute nicht kommen.')],
          ['I have no time.', b('Ich habe keine Zeit.')],
        ],
      },
    ],
  },
  'satz-und': {
    category: 'satz',
    level: 'A2',
    title: 'und, aber, denn, sondern',
    teaser: 'These join main clauses. Each clause keeps the verb in second position.',
    wordIds: ['und', 'aber', 'oder', 'weil'],
    points: [
      'und, aber, oder, denn, and sondern are coordinating. They join two main clauses, and each clause keeps verb-second.',
      'The conjunction is position 0. It does not count as position 1. After und, the next clause starts its own count: Ich lerne Deutsch, und ich wohne in Wien.',
      'denn means because, and it keeps the verb in position 2. Ich bleibe, denn ich bin krank. weil means the same and sends the verb to the end.',
      'sondern corrects a negative. Ich trinke keinen Tee, sondern Kaffee. The positive piece is the one after sondern.',
      'Put a comma before aber, denn, and sondern. A comma before und is normal when a full clause follows.',
    ],
    examples: [
      { de: 'Ich lerne Deutsch, und ich wohne in Wien.', en: 'I am learning German, and I live in Vienna. wohne is still in position 2 of its clause.' },
      { de: 'Er ist nett, aber er spricht sehr laut.', en: 'He is nice, but he speaks very loudly.' },
      { de: 'Ich bleibe zu Hause, denn ich bin krank.', en: 'I am staying home, for I am ill. denn does not send bin to the end.' },
      { de: 'Ich trinke keinen Tee, sondern Kaffee.', en: 'I do not drink tea, but coffee.' },
    ],
    tables: [
      {
        caption: 'Position 0',
        headers: ['Word', 'English', 'Verb of the next clause'],
        rows: [
          ['und', 'and', 'stays second'],
          ['oder', 'or', 'stays second'],
          ['aber', 'but', 'stays second'],
          ['denn', 'because / for', 'stays second'],
          ['sondern', 'but rather', 'stays second'],
        ],
      },
    ],
  },
  'satz-nebensatz': {
    category: 'satz',
    level: 'A2–B1',
    title: 'The verb goes to the end',
    teaser: 'weil, dass, wenn, obwohl, and the rest send the conjugated verb to the end of their clause.',
    wordIds: ['weil', 'dass', 'wenn', 'obwohl', 'als'],
    points: [
      'A subordinating conjunction opens a clause whose conjugated verb is the last word. Ich bleibe zu Hause, weil ich krank bin.',
      'The common set: weil, dass, wenn, ob, obwohl, als, bevor, nachdem, während, bis, seit, damit. wenn is “if” or “when” for a repeated time. als is “when” for a single event in the past.',
      'denn is not in this set. denn keeps verb-second. weil sends the verb to the end. The meaning can be the same.',
      'A comma stands in front of the conjunction.',
      'If the subordinate clause comes first, the whole clause is position 1 of the main sentence. The main verb follows the comma at once. Weil ich krank bin, bleibe ich zu Hause. Not Weil ich krank bin, ich bleibe.',
      'With two verb pieces, the conjugated one is still last. weil ich das Buch gelesen habe. weil sie morgen kommen will. A separable verb joins up again: weil er früh aufsteht.',
    ],
    examples: [
      { de: 'Ich lerne Deutsch, weil ich in Deutschland arbeite.', en: 'I am learning German because I work in Germany.' },
      { de: 'Sie sagt, dass sie um acht kommt.', en: 'She says that she is coming at eight.' },
      { de: 'Weil ich krank bin, bleibe ich zu Hause.', en: 'Because I am ill, I am staying home. bleibe is the main verb and stands right after the comma.' },
      { de: 'Ich weiß, dass sie das Buch gelesen hat.', en: 'I know that she has read the book. hat is last.' },
      { de: 'Er bleibt im Bett, obwohl er früh aufstehen will.', en: 'He is staying in bed, although he wants to get up early.' },
    ],
    tables: [
      {
        caption: 'Same reason, two orders',
        headers: ['Word', 'Verb', 'Example'],
        rows: [
          ['denn', 'position 2', 'Ich bleibe, denn ich bin krank.'],
          ['weil', 'end of the clause', 'Ich bleibe, weil ich krank bin.'],
          ['weil first', 'main verb right after the comma', 'Weil ich krank bin, bleibe ich zu Hause.'],
        ],
      },
      {
        caption: 'The conjunction picks the meaning',
        headers: ['Word', 'English', 'Example'],
        rows: [
          ['dass', 'that', 'Ich weiß, dass du kommst.'],
          ['wenn', 'if / whenever', 'Wenn es regnet, bleibe ich.'],
          ['als', 'when (one past time)', 'Als ich ankam, war sie da.'],
          ['obwohl', 'although', 'Obwohl es regnet, gehen wir.'],
          ['ob', 'whether', 'Ich frage, ob du Zeit hast.'],
          ['damit', 'so that', 'Sprich laut, damit ich dich höre.'],
        ],
      },
    ],
    drills: [
      {
        caption: 'Send the verb to the end',
        help: 'Write the weil or dass clause, or the whole sentence when the clause comes first.',
        headers: ['Cue', 'German'],
        rows: [
          ['I stay because I am ill.', b('Ich bleibe, weil ich krank bin.')],
          ['Because I am ill, I stay home.', b('Weil ich krank bin, bleibe ich zu Hause.')],
          ['She says that she is coming at eight.', b('Sie sagt, dass sie um acht kommt.')],
          ['because she wants to come tomorrow', b('weil sie morgen kommen will')],
        ],
      },
    ],
  },
  'satz-zu': {
    category: 'satz',
    level: 'A2–B1',
    title: 'um … zu',
    teaser: 'A purpose clause with the same subject. zu and the infinitive close the sentence.',
    wordIds: ['gehen', 'kommen', 'fahren'],
    points: [
      'um … zu gives a purpose, and the subject of both parts is the same person. Ich lerne Deutsch, um in Wien zu arbeiten.',
      'zu plus the infinitive stands at the end. A separable verb hides zu in the middle: um früh aufzustehen.',
      'ohne … zu and (an)statt … zu use the same shape. Er geht, ohne ein Wort zu sagen. Statt zu arbeiten, sieht er fern.',
      'If the subjects are different, do not use um … zu. Use damit. Ich lerne laut, damit mein Bruder mich hört.',
      'After a modal there is no zu. Ich kann kommen. Not Ich kann zu kommen.',
    ],
    examples: [
      { de: 'Ich lerne Deutsch, um in Wien zu arbeiten.', en: 'I am learning German in order to work in Vienna.' },
      { de: 'Ich versuche, morgen früh aufzustehen.', en: 'I am trying to get up early tomorrow. The separable verb is one word, with zu in the middle.' },
      { de: 'Er geht, ohne ein Wort zu sagen.', en: 'He leaves without saying a word.' },
      { de: 'Ich spreche langsam, damit du mich verstehst.', en: 'I speak slowly so that you understand me. Two different subjects, so damit.' },
    ],
    tables: [
      {
        caption: 'zu or damit',
        headers: ['Pattern', 'When', 'Example'],
        rows: [
          ['um … zu', 'same subject, a purpose', 'um in Wien zu arbeiten'],
          ['ohne … zu', 'same subject, without', 'ohne ein Wort zu sagen'],
          ['(an)statt … zu', 'same subject, instead of', 'statt zu arbeiten'],
          ['damit', 'a different subject', 'damit du mich verstehst'],
          ['modal', 'no zu', 'Ich kann kommen.'],
        ],
      },
    ],
  },
  'satz-relativ-order': {
    category: 'satz',
    level: 'B1',
    title: 'Relative clauses and the verb',
    teaser: 'A relative clause is a subordinate clause. The verb goes to the end.',
    wordIds: ['dass', 'gehen', 'heute'],
    points: [
      'A relative clause adds a fact about a noun, and it behaves like a weil clause: the conjugated verb is last.',
      'The relative pronoun is the first slot of that clause. It matches the noun you are adding the fact to. der Mann, den ich gestern gesehen habe.',
      'In the Perfekt, habe or ist is the last word. das Buch, das ich gelesen habe.',
      'A comma opens the clause. A second comma closes it when the main sentence continues. Der Mann, der hier wohnt, heißt Tim.',
      'The pronoun table itself, der / den / dem / dessen, sits in the Cases lessons and in the relative-clause lesson. This page is only the order.',
    ],
    examples: [
      { de: 'Das ist der Film, den ich gestern gesehen habe.', en: 'That is the film that I saw yesterday. habe is last.' },
      { de: 'Die Frau, der ich helfe, wohnt hier.', en: 'The woman I am helping lives here. der is dative. wohnt is the main verb, outside the clause.' },
      { de: 'Der Mann, der hier wohnt, heißt Tim.', en: 'The man who lives here is called Tim.' },
    ],
    tables: [
      {
        caption: 'The clause is a bracket of its own',
        headers: ['Opens', 'Middle', 'Closes'],
        rows: [
          ['den', 'ich gestern gesehen', 'habe'],
          ['der', 'hier', 'wohnt'],
          ['der', 'ich', 'helfe'],
        ],
      },
    ],
  },
}
