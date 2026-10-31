import { caseCategory, caseLessons } from './cases.js'
import { examPrograms } from './examPrep.js'
import { extraLessons } from './extraLessons.js'

export const courseTree = [
  {
    id: 'pruefung',
    title: 'Exam loop',
    de: 'Prüfung',
    subgroups: [
      {
        id: 'pruefung-method',
        title: 'How the papers are marked',
        de: 'Bewertung',
        lessons: [
          { id: 'exam-how-a1', title: 'A1: form, 30 words, three talks' },
          { id: 'exam-how-a2', title: 'A2: the 45 and 15 floor' },
          { id: 'exam-how-b1', title: 'B1: one module at a time' },
          { id: 'exam-how-b2', title: 'B2: 150 words, 100 words, a talk' },
          { id: 'exam-how-telc-cloze', title: 'telc Sprachbausteine' },
        ],
      },
    ],
  },
  {
    id: 'a1',
    title: 'A1 · Breakthrough',
    de: 'Anfänger',
    subgroups: [
      {
        id: 'a1-grammar',
        title: 'Grammar',
        de: 'Grammatik',
        lessons: [
          { id: 'nouns-gender', title: 'Gender: der / die / das' },
          { id: 'nouns-plurals', title: 'Plurals' },
          { id: 'verbs-sein-haben', title: 'sein & haben' },
          { id: 'verbs-present', title: 'Present tense' },
          { id: 'verbs-modals', title: 'Modal verbs' },
          { id: 'verbs-separable', title: 'Separable verbs' },
          { id: 'articles-definite', title: 'der, die, das, ein' },
          { id: 'articles-akkusativ', title: 'Nominative vs accusative' },
          { id: 'articles-dative', title: 'Dative articles' },
          { id: 'pronouns', title: 'Pronouns (quick)' },
          { id: 'prepositions', title: 'Prepositions' },
          { id: 'adj-basics', title: 'Describing things' },
        ],
      },
      {
        id: 'a1-vocab',
        title: 'Vocabulary',
        de: 'Wortschatz',
        lessons: [
          { id: 'nouns-people', title: 'People & family' },
          { id: 'nouns-home', title: 'Home & places' },
          { id: 'nouns-things', title: 'Food, travel, things' },
          { id: 'adj-colors', title: 'Colors' },
          { id: 'numbers-time', title: 'Numbers & time' },
          { id: 'days-weather', title: 'Days & weather' },
        ],
      },
      {
        id: 'a1-listening',
        title: 'Listening',
        de: 'Hören',
        lessons: [
          { id: 'a1-listen-announcements', title: 'Announcements' },
          { id: 'a1-listen-dialogues', title: 'Short dialogues' },
        ],
      },
      {
        id: 'a1-reading',
        title: 'Reading',
        de: 'Lesen',
        lessons: [
          { id: 'a1-read-notes', title: 'Notes and emails' },
          { id: 'a1-read-ads', title: 'Ads and signs' },
        ],
      },
      {
        id: 'a1-speaking',
        title: 'Speaking',
        de: 'Sprechen',
        lessons: [
          { id: 'phrases-greetings', title: 'Greetings' },
          { id: 'a1-speak-introduce', title: 'Introduce yourself' },
          { id: 'a1-speak-requests', title: 'Ask and answer' },
        ],
      },
      {
        id: 'a1-writing',
        title: 'Writing',
        de: 'Schreiben',
        lessons: [
          { id: 'a1-write-form', title: 'Fill in a form' },
          { id: 'a1-write-note', title: 'A 30-word note' },
        ],
      },
    ],
  },
  {
    id: 'a2',
    title: 'A2 · Waystage',
    de: 'Grundlagen',
    subgroups: [
      {
        id: 'a2-grammar',
        title: 'Grammar',
        de: 'Grammatik',
        lessons: [
          ...caseCategory.lessons,
          { id: 'a2-perfekt', title: 'Perfekt stories' },
          { id: 'a2-weil-dass', title: 'weil, dass, word order' },
          { id: 'a2-adj-endings', title: 'Adjective endings' },
        ],
      },
      {
        id: 'a2-vocab',
        title: 'Vocabulary',
        de: 'Wortschatz',
        lessons: [
          { id: 'a2-housing', title: 'Housing' },
          { id: 'a2-health', title: 'Health' },
          { id: 'a2-work', title: 'Work and office' },
        ],
      },
      {
        id: 'a2-listening',
        title: 'Listening',
        de: 'Hören',
        lessons: [
          { id: 'a2-listen-phone', title: 'Phone messages' },
          { id: 'a2-listen-radio', title: 'Radio and interviews' },
        ],
      },
      {
        id: 'a2-reading',
        title: 'Reading',
        de: 'Lesen',
        lessons: [
          { id: 'a2-read-email', title: 'Longer emails' },
          { id: 'a2-read-notices', title: 'Notice boards' },
        ],
      },
      {
        id: 'a2-speaking',
        title: 'Speaking',
        de: 'Sprechen',
        lessons: [
          { id: 'a2-speak-daily', title: 'Everyday talk' },
          { id: 'a2-speak-plan', title: 'Plan something' },
        ],
      },
      {
        id: 'a2-writing',
        title: 'Writing',
        de: 'Schreiben',
        lessons: [{ id: 'a2-write-email', title: 'A short email' }],
      },
    ],
  },
  {
    id: 'b1',
    title: 'B1 · Threshold',
    de: 'Selbstständig',
    subgroups: [
      {
        id: 'b1-grammar',
        title: 'Grammar',
        de: 'Grammatik',
        lessons: [
          { id: 'b1-konjunktiv2', title: 'Konjunktiv II' },
          { id: 'b1-relativ', title: 'Relative clauses' },
          { id: 'b1-passiv', title: 'Passiv' },
        ],
      },
      {
        id: 'b1-vocab',
        title: 'Vocabulary',
        de: 'Wortschatz',
        lessons: [
          { id: 'b1-opinions', title: 'Opinions and reasons' },
          { id: 'b1-media', title: 'News and internet' },
        ],
      },
      {
        id: 'b1-listening',
        title: 'Listening',
        de: 'Hören',
        lessons: [{ id: 'b1-listen-interview', title: 'Interviews' }],
      },
      {
        id: 'b1-reading',
        title: 'Reading',
        de: 'Lesen',
        lessons: [
          { id: 'b1-read-forum', title: 'Forum comments' },
          { id: 'b1-read-article', title: 'A short article' },
        ],
      },
      {
        id: 'b1-speaking',
        title: 'Speaking',
        de: 'Sprechen',
        lessons: [
          { id: 'b1-speak-present', title: 'Present a topic' },
          { id: 'b1-speak-discuss', title: 'Comment and discuss' },
        ],
      },
      {
        id: 'b1-writing',
        title: 'Writing',
        de: 'Schreiben',
        lessons: [
          { id: 'b1-write-forum', title: 'A forum post' },
          { id: 'b1-write-formal', title: 'A formal email' },
        ],
      },
    ],
  },
  {
    id: 'b2',
    title: 'B2 · Vantage',
    de: 'Fortgeschritten',
    subgroups: [
      {
        id: 'b2-grammar',
        title: 'Grammar',
        de: 'Grammatik',
        lessons: [
          { id: 'b2-kj1', title: 'Konjunktiv I' },
          { id: 'b2-passiv-arten', title: 'Two passives' },
          { id: 'b2-nominal', title: 'Nominalisierung' },
        ],
      },
      {
        id: 'b2-vocab',
        title: 'Vocabulary',
        de: 'Wortschatz',
        lessons: [{ id: 'b2-register', title: 'Formal vs informal' }],
      },
      {
        id: 'b2-writing',
        title: 'Writing',
        de: 'Schreiben',
        lessons: [{ id: 'b2-write-forum', title: 'A 150-word argument' }],
      },
    ],
  },
]

const coreLessons = {
  'nouns-gender': {
    category: 'nouns',
    level: 'A1',
    title: 'Gender: der / die / das',
    teaser: 'Every German noun has a gender. Learn it with the word.',
    wordIds: ['mann', 'frau', 'kind', 'maedchen', 'tisch', 'tuer', 'fenster', 'hund', 'katze', 'auto'],
    points: [
      'English has one “the.” German has three: der (masculine), die (feminine), das (neuter).',
      'Gender belongs to the word, not to the object. der Löffel (spoon) is masculine; die Gabel (fork) is feminine.',
      'A few endings help: -ung / -heit / -keit / -tion → usually die. -chen / -lein → das (das Mädchen). Days, months, seasons → der.',
      'When there is no pattern, memorize the article with the noun: always “das Haus,” never just “Haus.”',
    ],
    tables: [
      {
        caption: 'The three “the”s',
        headers: ['Article', 'Gender', 'Example'],
        rows: [
          ['der', 'masculine', 'der Mann, der Tag, der Hund'],
          ['die', 'feminine', 'die Frau, die Zeit, die Katze'],
          ['das', 'neuter', 'das Kind, das Haus, das Buch'],
        ],
      },
    ],
  },
  'nouns-people': {
    category: 'nouns',
    level: 'A1',
    title: 'People & family',
    teaser: 'Names for the people around you.',
    wordIds: ['mann', 'frau', 'kind', 'familie', 'mutter', 'vater', 'bruder', 'schwester', 'freund', 'freundin', 'junge', 'maedchen', 'lehrer', 'eltern', 'leute'],
    points: [
      'Many job and family words have a male and a female form: der Lehrer / die Lehrerin, der Freund / die Freundin.',
      'das Mädchen is neuter because of the -chen ending, even though it means “girl.”',
      'die Eltern and die Leute are plural. You still say die.',
    ],
  },
  'nouns-home': {
    category: 'nouns',
    level: 'A1',
    title: 'Home & places',
    teaser: 'Rooms, streets, and the city.',
    wordIds: ['haus', 'wohnung', 'zimmer', 'tisch', 'stuhl', 'tuer', 'fenster', 'bett', 'kueche', 'bad', 'stadt', 'strasse', 'park', 'platz', 'schule'],
    points: [
      'das Haus is the building. die Wohnung is the flat inside it.',
      'In German you often use accusative after “in” when you go somewhere: Ich gehe in die Stadt.',
      'der Platz can mean a town square or a seat. Context tells you which.',
    ],
  },
  'nouns-things': {
    category: 'nouns',
    level: 'A1',
    title: 'Food, travel, things',
    teaser: 'What you eat, ride, and carry.',
    wordIds: ['brot', 'milch', 'kaffee', 'tee', 'apfel', 'banane', 'essen-n', 'wasser', 'zug', 'bus', 'auto', 'bahnhof', 'ticket', 'tasche', 'handy'],
    points: [
      'Food words are mixed: das Brot, die Milch, der Kaffee. Learn the article with each one.',
      'der Zug, der Bus, das Auto, das Fahrrad — vehicles are a good article drill set.',
      'das Handy is everyday German for a mobile phone. Handy does not mean “useful.”',
    ],
  },
  'nouns-plurals': {
    category: 'nouns',
    level: 'A1',
    title: 'Plurals',
    teaser: 'German plurals are messy. Collect them as you go.',
    wordIds: ['tag', 'jahr', 'buch', 'haus', 'kind', 'frau', 'apfel', 'stadt'],
    points: [
      'The plural article is always die, no matter the gender: die Männer, die Frauen, die Kinder.',
      'Common patterns: -e (der Tag → die Tage), -er + umlaut (das Buch → die Bücher), -n/-en (die Frau → die Frauen), no change (das Mädchen → die Mädchen).',
      'Umlauts often appear in the plural: der Apfel → die Äpfel, die Stadt → die Städte.',
    ],
    tables: [
      {
        caption: 'Singular → plural',
        headers: ['Singular', 'Plural'],
        rows: [
          ['der Tag', 'die Tage'],
          ['das Buch', 'die Bücher'],
          ['die Frau', 'die Frauen'],
          ['das Kind', 'die Kinder'],
          ['der Apfel', 'die Äpfel'],
        ],
      },
    ],
  },
  'verbs-sein-haben': {
    category: 'verbs',
    level: 'A1',
    title: 'sein & haben',
    teaser: 'The two verbs you will use every day.',
    wordIds: ['sein', 'haben', 'ich', 'du', 'er', 'wir', 'sie'],
    points: [
      'sein (to be) and haben (to have) are irregular. Drill the forms until they are automatic.',
      'Use sein for identity, origin, and location: Ich bin Mira. Ich bin aus Spanien. Ich bin in Berlin.',
      'Use haben for possession and availability: Ich habe ein Buch. Ich habe Zeit. Age uses sein: Ich bin 24 Jahre alt.',
    ],
    tables: [
      {
        caption: 'sein — present',
        headers: ['Person', 'Form', 'English'],
        rows: [
          ['ich', 'bin', 'I am'],
          ['du', 'bist', 'you are'],
          ['er / sie / es', 'ist', 'he / she / it is'],
          ['wir', 'sind', 'we are'],
          ['ihr', 'seid', 'you (pl.) are'],
          ['sie / Sie', 'sind', 'they / you are'],
        ],
      },
      {
        caption: 'haben — present',
        headers: ['Person', 'Form', 'English'],
        rows: [
          ['ich', 'habe', 'I have'],
          ['du', 'hast', 'you have'],
          ['er / sie / es', 'hat', 'he / she / it has'],
          ['wir', 'haben', 'we have'],
          ['ihr', 'habt', 'you (pl.) have'],
          ['sie / Sie', 'haben', 'they / you have'],
        ],
      },
    ],
  },
  'verbs-present': {
    category: 'verbs',
    level: 'A1',
    title: 'Present tense',
    teaser: 'Regular verbs take neat endings.',
    wordIds: ['machen', 'lernen', 'wohnen', 'arbeiten', 'spielen', 'kaufen', 'fragen'],
    points: [
      'Take the stem (machen → mach-) and add: -e, -st, -t, -en, -t, -en.',
      'ich mache, du machst, er/sie/es macht, wir machen, ihr macht, sie machen.',
      'The verb sits in second position in a statement: Ich lerne Deutsch. Heute lerne ich Deutsch.',
    ],
    tables: [
      {
        caption: 'machen — regular present',
        headers: ['Person', 'Form', 'Note'],
        rows: [
          ['ich', 'mache', 'stem + e'],
          ['du', 'machst', 'stem + st'],
          ['er / sie / es', 'macht', 'stem + t'],
          ['wir', 'machen', 'infinitive'],
          ['ihr', 'macht', 'stem + t'],
          ['sie / Sie', 'machen', 'infinitive'],
        ],
      },
      {
        caption: 'Stem extras',
        headers: ['Verb', 'du / er', 'Why'],
        rows: [
          ['arbeiten', 'arbeitest / arbeitet', '-t/-d stem needs -e-'],
          ['heißen', 'heißt / heißt', 's/ß/x/z: no extra s on du'],
          ['fahren', 'fährst / fährt', 'a → ä on du/er only'],
          ['lesen', 'liest / liest', 'e → ie on du/er only'],
          ['sprechen', 'sprichst / spricht', 'e → i on du/er only'],
        ],
      },
    ],
  },
  'verbs-modals': {
    category: 'verbs',
    level: 'A1',
    title: 'Modal verbs',
    teaser: 'can, must, want, should, may.',
    wordIds: ['koennen', 'muessen', 'wollen', 'sollen', 'duerfen', 'moegen'],
    points: [
      'A modal goes in position two. The other verb waits at the end in the infinitive: Ich will Kaffee trinken.',
      'können = can / be able to. müssen = must. wollen = want. sollen = should. dürfen = may / be allowed. mögen = like.',
      'ich kann, du kannst, er kann — the ich and er forms often look alike.',
    ],
    tables: [
      {
        caption: 'ich / du / er forms',
        headers: ['Infinitive', 'ich', 'du', 'er/sie/es'],
        rows: [
          ['können', 'kann', 'kannst', 'kann'],
          ['müssen', 'muss', 'musst', 'muss'],
          ['wollen', 'will', 'willst', 'will'],
          ['sollen', 'soll', 'sollst', 'soll'],
          ['dürfen', 'darf', 'darfst', 'darf'],
          ['mögen', 'mag', 'magst', 'mag'],
        ],
      },
    ],
  },
  'verbs-separable': {
    category: 'verbs',
    level: 'A1',
    title: 'Separable verbs',
    teaser: 'The prefix jumps to the end.',
    wordIds: ['aufstehen', 'ankommen'],
    points: [
      'Many German verbs split: aufstehen → Ich stehe um sieben auf.',
      'The prefix (auf-, an-, aus-, ein-, mit-) is stressed and parks at the end of the clause.',
      'In the infinitive they stay together: Ich will um sieben aufstehen.',
    ],
  },
  'articles-definite': {
    category: 'articles',
    level: 'A1',
    title: 'der, die, das, ein',
    teaser: '“The” and “a” change with gender.',
    wordIds: ['der', 'die', 'das', 'ein', 'kein', 'mann', 'frau', 'kind'],
    points: [
      'ein is used with masculine and neuter: ein Mann, ein Kind. Feminine takes eine: eine Frau.',
      'kein / keine is the negative: Ich habe kein Geld. Ich habe keine Zeit.',
      'Practice this in the Articles drill under Practice. Guessing der/die/das is the fastest way to lock genders in.',
    ],
    tables: [
      {
        caption: 'a / an',
        headers: ['Gender', 'a / an', 'not a'],
        rows: [
          ['masculine', 'ein', 'kein'],
          ['feminine', 'eine', 'keine'],
          ['neuter', 'ein', 'kein'],
        ],
      },
    ],
  },
  'articles-akkusativ': {
    category: 'articles',
    level: 'A1',
    title: 'Nominative vs accusative',
    teaser: 'Only masculine “the” changes in the simple object case.',
    wordIds: ['der', 'die', 'das', 'mann', 'frau', 'buch', 'sehen', 'haben'],
    points: [
      'Nominative is the subject: Der Mann liest. Accusative is the direct object: Ich sehe den Mann.',
      'In accusative, der → den. die and das stay the same. ein → einen for masculine.',
      'Ich habe einen Hund. Ich sehe die Frau. Ich lese das Buch.',
    ],
    tables: [
      {
        caption: 'the — nominative / accusative',
        headers: ['Gender', 'Nominative', 'Accusative'],
        rows: [
          ['masculine', 'der', 'den'],
          ['feminine', 'die', 'die'],
          ['neuter', 'das', 'das'],
          ['plural', 'die', 'die'],
        ],
      },
    ],
    examples: [
      { de: 'Der Mann sieht den Hund.', en: 'The man sees the dog.' },
      { de: 'Ich habe einen Bruder.', en: 'I have a brother. — einen, masculine accusative.' },
    ],
  },
  'articles-dative': {
    category: 'articles',
    level: 'A1',
    title: 'Dative articles',
    teaser: 'dem, der, dem, den — the receiver forms.',
    wordIds: ['der', 'die', 'das', 'mit', 'zu', 'von', 'helfen', 'geben'],
    points: [
      'Dative articles: masculine dem, feminine der, neuter dem, plural den.',
      'Ich gebe dem Mann das Buch. Wir helfen der Frau. Das gehört dem Kind. Sie dankt den Kindern.',
      'The full four-case article grid lives under Cases. Drill he/she/it/they there too.',
    ],
    tables: [
      {
        caption: 'the — four cases',
        headers: ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
        rows: [
          ['Nominative', 'der', 'die', 'das', 'die'],
          ['Accusative', 'den', 'die', 'das', 'die'],
          ['Dative', 'dem', 'der', 'dem', 'den'],
          ['Genitive', 'des', 'der', 'des', 'der'],
        ],
      },
    ],
    examples: [
      { de: 'Ich fahre mit dem Bus.', en: 'I go by bus. — mit + dative.' },
      { de: 'Das Buch gehört der Lehrerin.', en: 'The book belongs to the teacher.' },
    ],
  },
  'adj-basics': {
    category: 'adjectives',
    level: 'A1',
    title: 'Describing things',
    teaser: 'After sein, adjectives stay simple.',
    wordIds: ['gut', 'neu', 'gross', 'klein', 'alt', 'jung', 'schoen', 'langsam', 'schnell', 'teuer', 'billig', 'warm', 'kalt'],
    points: [
      'After sein, the adjective does not take a fancy ending: Das Haus ist groß. Der Kaffee ist gut.',
      'In front of a noun, endings appear later (A2). For now, learn the base words.',
      'gut can mean good or well: Das ist gut. Ich schlafe gut.',
    ],
  },
  'adj-colors': {
    category: 'adjectives',
    level: 'A1',
    title: 'Colors',
    teaser: 'rot, blau, grün, schwarz, weiß.',
    wordIds: ['rot', 'blau', 'gruen', 'schwarz', 'weiss', 'farbe'],
    points: [
      'Colors behave like other adjectives: Das Auto ist rot.',
      'German flag colors are useful extras: schwarz, rot, gold.',
    ],
  },
  'pronouns': {
    category: 'function',
    level: 'A1',
    title: 'Pronouns',
    teaser: 'ich, du, er, sie, es — then open Cases for the full grid.',
    wordIds: ['ich', 'du', 'er', 'sie', 'es', 'wir', 'sie-formal', 'man'],
    points: [
      'du is informal singular. Sie (always capital) is formal. ihr is informal plural.',
      'sie can mean she, they, or (capitalized) you. Capital letters and the verb form help: sie ist / sie sind / Sie sind.',
      'man means “one / you” in general: Man sagt das so. Not the same as der Mann.',
      'The important work is in Cases: he/she/it/they in nominative, accusative, dative, genitive, plus his/her/that.',
    ],
    examples: [
      { de: 'Er gibt ihr das Buch. Sie gibt ihm das Buch.', en: 'He gives her the book. She gives him the book.' },
    ],
    tables: [
      {
        caption: 'Personal pronouns',
        headers: ['English', 'Nom.', 'Acc.', 'Dat.'],
        rows: [
          ['I', 'ich', 'mich', 'mir'],
          ['you (du)', 'du', 'dich', 'dir'],
          ['he', 'er', 'ihn', 'ihm'],
          ['she', 'sie', 'sie', 'ihr'],
          ['it', 'es', 'es', 'ihm'],
          ['we', 'wir', 'uns', 'uns'],
          ['you (ihr)', 'ihr', 'euch', 'euch'],
          ['they', 'sie', 'sie', 'ihnen'],
          ['you (Sie)', 'Sie', 'Sie', 'Ihnen'],
        ],
      },
    ],
  },
  'prepositions': {
    category: 'function',
    level: 'A1',
    title: 'Prepositions',
    teaser: 'Little words that glue sentences together.',
    wordIds: ['in', 'auf', 'mit', 'fuer', 'von', 'zu', 'an', 'bei', 'nach', 'aus', 'ueber', 'vor', 'durch', 'ohne'],
    points: [
      'mit, zu, von, bei, nach, aus usually take dative. für usually takes accusative.',
      'nach + city/country without an article: nach Berlin, nach Deutschland. But in die Stadt.',
      'Learn them in chunks: mit dir, für dich, aus Spanien, nach Hause.',
    ],
    tables: [
      {
        caption: 'Fixed-case prepositions',
        headers: ['Case', 'Prepositions', 'Example'],
        rows: [
          ['Accusative', 'für, durch, ohne, um, gegen, bis', 'Das Geschenk ist für dich.'],
          ['Dative', 'mit, zu, von, bei, nach, aus, seit, außer', 'Ich fahre mit dem Bus.'],
          ['Genitive (A2–B1 writing)', 'wegen, trotz, während, statt', 'wegen des Wetters'],
        ],
      },
      {
        caption: 'Wechselpräpositionen (Wo? dat. / Wohin? acc.)',
        headers: ['Prep.', 'Location (Wo?)', 'Movement (Wohin?)'],
        rows: [
          ['in', 'Ich bin in der Stadt.', 'Ich gehe in die Stadt.'],
          ['auf', 'Das Buch liegt auf dem Tisch.', 'Ich lege es auf den Tisch.'],
          ['an', 'Sie steht an der Ecke.', 'Wir gehen an die Ecke.'],
        ],
      },
    ],
  },
  'phrases-greetings': {
    category: 'everyday',
    level: 'A1',
    title: 'Greetings',
    teaser: 'Hallo, Guten Tag, Tschüss.',
    wordIds: ['hallo', 'gutentag', 'danke', 'bitte', 'tschuess', 'aufwiedersehen', 'entschuldigung', 'wiegehts', 'bitteschoen'],
    points: [
      'Hallo and Tschüss are informal. Guten Tag and Auf Wiedersehen are the safer public pair.',
      'Guten Morgen / Guten Tag / Guten Abend follow the clock. Gute Nacht is for going to bed.',
      'bitte means please and also “you’re welcome.” After danke, bitte schön is the classic reply.',
    ],
  },
  'numbers-time': {
    category: 'everyday',
    level: 'A1',
    title: 'Numbers & time',
    teaser: 'Count, then tell the hour.',
    wordIds: ['eins', 'zwei', 'drei', 'vier', 'fuenf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'uhr', 'stunde', 'minute', 'zeit'],
    points: [
      'eins becomes ein when it behaves like “a”: ein Buch, but the number name is eins.',
      'Clock time: Es ist drei Uhr. Um sechs Uhr. For 8:30 you will later learn halb neun (half to nine).',
      'die Uhr is the clock; Uhr after a number means o’clock.',
    ],
    tables: [
      {
        caption: 'Clock (Germany)',
        headers: ['Time', 'Official', 'Everyday'],
        rows: [
          ['8.00', 'acht Uhr', 'acht Uhr'],
          ['8.15', 'acht Uhr fünfzehn', 'Viertel nach acht'],
          ['8.30', 'acht Uhr dreißig', 'halb neun (half towards 9)'],
          ['8.45', 'acht Uhr fünfundvierzig', 'Viertel vor neun'],
        ],
      },
    ],
  },
  'days-weather': {
    category: 'everyday',
    level: 'A1',
    title: 'Days & weather',
    teaser: 'Days are der. Weather is small talk gold.',
    wordIds: ['montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'sonntag', 'wetter', 'sonne', 'regen', 'morgen', 'abend', 'nacht', 'woche', 'monat'],
    points: [
      'Days, months, and seasons take der: der Montag, der Juli, der Sommer.',
      'On a day: am Montag (an + dem).',
      'Weather: Die Sonne scheint. Es regnet. Das Wetter ist schön.',
    ],
  },
}

export const lessons = { ...coreLessons, ...caseLessons, ...extraLessons }

export function walkCourse() {
  const rows = []
  for (const group of courseTree) {
    for (const subgroup of group.subgroups || []) {
      for (const lesson of subgroup.lessons || []) {
        rows.push({ group, subgroup, lesson })
      }
    }
  }
  return rows
}

export function lessonPlace(id) {
  return walkCourse().find((row) => row.lesson.id === id) || null
}

export function getLesson(id) {
  return lessons[id] || null
}

export function lessonIds() {
  return walkCourse().map((row) => row.lesson.id)
}

export function lessonNeighbors(id) {
  const ids = lessonIds()
  const index = ids.indexOf(id)
  const prevId = index > 0 ? ids[index - 1] : null
  const nextId = index >= 0 && index < ids.length - 1 ? ids[index + 1] : null
  return {
    prev: prevId ? { id: prevId, title: getLesson(prevId)?.title || prevId } : null,
    next: nextId ? { id: nextId, title: getLesson(nextId)?.title || nextId } : null,
  }
}

export function allLessons() {
  return walkCourse().map(({ group, subgroup, lesson }) => ({
    ...lesson,
    categoryId: group.id,
    categoryTitle: group.title,
    subgroupId: subgroup.id,
    subgroupTitle: subgroup.title,
    subgroupDe: subgroup.de,
    ...lessons[lesson.id],
  }))
}

export const programs = [
  ...examPrograms,

  {
    id: 'hallo-kurs-a1',
    title: 'Hallo Kurs A1',
    level: 'A1',
    blurb: 'Menschen-style A1: 8 modules, L1–L24 in order.',
    steps: [
      { kind: 'course', id: 'kb-a1-01', title: 'L1 Hallo und Guten Tag' },
      { kind: 'course', id: 'kb-a1-05', title: 'L5 Was ist das?' },
      { kind: 'course', id: 'kb-a1-11', title: 'L11 Was hast du gemacht?' },
      { kind: 'course', id: 'kb-a1-24', title: 'L24 Feiern und würde gern' },
      { kind: 'practice', id: 'articles', title: 'Practice: der / die / das' },
    ],
  },
  {
    id: 'hallo-kurs-b1',
    title: 'Hallo Kurs B1',
    level: 'B1',
    blurb: 'Menschen-style B1: relatives, Konjunktiv II, Passiv, exam writing.',
    steps: [
      { kind: 'course', id: 'kb-b1-01', title: 'L1 Freunde und Nomen' },
      { kind: 'course', id: 'kb-b1-10', title: 'L10 Hätte ich das anders gemacht' },
      { kind: 'course', id: 'kb-b1-21', title: 'L21 Es muss geübt werden' },
      { kind: 'course', id: 'kb-b1-24', title: 'L24 Ziele und als ob' },
      { kind: 'practice', id: 'cases', title: 'Practice: case tables' },
    ],
  },
  {
    id: 'hallo-kurs-b2',
    title: 'Hallo Kurs B2',
    level: 'B2',
    blurb: 'Aspekte/Sicher starter: K I, office German, both passives, a 150-word argument.',
    steps: [
      { kind: 'course', id: 'kb-b2-01', title: 'L1 Heimat und Zugehörigkeit' },
      { kind: 'course', id: 'kb-b2-02', title: 'L2 Indirekte Rede' },
      { kind: 'course', id: 'kb-b2-03', title: 'L3 In der Firma' },
      { kind: 'course', id: 'kb-b2-10', title: 'L10 An der Uni' },
      { kind: 'lesson', id: 'b2-write-forum', title: 'A 150-word argument' },
    ],
  },
  {
    id: 'cefr-a1',
    title: 'CEFR A1 map',
    level: 'A1',
    blurb: 'Walk the A1 exam map: can-dos, Goethe/telc/ÖSD, grammar, Themen, then ready-when.',
    steps: [
      { kind: 'level', id: 'a1', segment: 'overview', title: 'A1 overview' },
      { kind: 'level', id: 'a1', segment: 'exams', title: 'A1 exams' },
      { kind: 'level', id: 'a1', segment: 'grammar', title: 'A1 grammar' },
      { kind: 'level', id: 'a1', segment: 'themes', title: 'A1 Themen' },
      { kind: 'level', id: 'a1', segment: 'ready', title: 'A1 ready when…' },
    ],
  },
  {
    id: 'cefr-a2',
    title: 'CEFR A2 map',
    level: 'A2',
    blurb: 'Dativ, Wechselpräpositionen, Perfekt stories, and the A2 written + oral exam.',
    steps: [
      { kind: 'level', id: 'a2', segment: 'overview', title: 'A2 overview' },
      { kind: 'level', id: 'a2', segment: 'exams', title: 'A2 exams' },
      { kind: 'level', id: 'a2', segment: 'grammar', title: 'A2 grammar' },
      { kind: 'level', id: 'a2', segment: 'themes', title: 'A2 Themen' },
      { kind: 'level', id: 'a2', segment: 'ready', title: 'A2 ready when…' },
    ],
  },
  {
    id: 'cefr-b1',
    title: 'CEFR B1 map',
    level: 'B1',
    blurb: 'Modular Goethe/ÖSD B1 plus telc B1 / DTZ note: Konjunktiv II, Passiv, Relativsätze.',
    steps: [
      { kind: 'level', id: 'b1', segment: 'overview', title: 'B1 overview' },
      { kind: 'level', id: 'b1', segment: 'exams', title: 'B1 exams' },
      { kind: 'level', id: 'b1', segment: 'grammar', title: 'B1 grammar' },
      { kind: 'level', id: 'b1', segment: 'skills', title: 'B1 skills' },
      { kind: 'level', id: 'b1', segment: 'ready', title: 'B1 ready when…' },
    ],
  },
  {
    id: 'cefr-b2',
    title: 'CEFR B2 map',
    level: 'B2',
    blurb: 'Konjunktiv I, Nominalisierung, argumentative writing, Goethe vs ÖSD timings.',
    steps: [
      { kind: 'level', id: 'b2', segment: 'overview', title: 'B2 overview' },
      { kind: 'level', id: 'b2', segment: 'exams', title: 'B2 exams' },
      { kind: 'level', id: 'b2', segment: 'grammar', title: 'B2 grammar' },
      { kind: 'level', id: 'b2', segment: 'chunks', title: 'B2 Redemittel' },
      { kind: 'level', id: 'b2', segment: 'ready', title: 'B2 ready when…' },
    ],
  },
  {
    id: 'a1-starter',
    title: 'A1 Starter',
    level: 'A1',
    blurb: 'Greetings, gender, sein & haben, then a first article drill.',
    steps: [
      { kind: 'lesson', id: 'phrases-greetings' },
      { kind: 'lesson', id: 'nouns-gender' },
      { kind: 'lesson', id: 'verbs-sein-haben' },
      { kind: 'lesson', id: 'numbers-time' },
      { kind: 'practice', id: 'articles', title: 'Practice: der / die / das' },
    ],
  },
  {
    id: 'grammar-gym',
    title: 'Grammar gym',
    level: 'A1',
    blurb: 'Nouns, verbs, and the accusative, then translation reps.',
    steps: [
      { kind: 'lesson', id: 'nouns-people' },
      { kind: 'lesson', id: 'verbs-present' },
      { kind: 'lesson', id: 'verbs-modals' },
      { kind: 'lesson', id: 'articles-akkusativ' },
      { kind: 'practice', id: 'translate', title: 'Practice: translate' },
    ],
  },
  {
    id: 'cases-track',
    title: 'Cases & genitive',
    level: 'A2',
    blurb: 'He/she/it/they, his/her/that, then genitive verbs and prepositions.',
    steps: [
      { kind: 'lesson', id: 'cases-overview' },
      { kind: 'lesson', id: 'cases-pronouns' },
      { kind: 'lesson', id: 'cases-possessives' },
      { kind: 'lesson', id: 'cases-genitive' },
      { kind: 'lesson', id: 'cases-genitive-verbs' },
      { kind: 'practice', id: 'cases', title: 'Practice: case tables' },
    ],
  },
  {
    id: 'vocab-boost',
    title: 'Vocab boost',
    level: 'A1',
    blurb: 'Home, food, days — then the first 100 words and a mixed quiz.',
    steps: [
      { kind: 'lesson', id: 'nouns-home' },
      { kind: 'lesson', id: 'nouns-things' },
      { kind: 'lesson', id: 'days-weather' },
      { kind: 'list', id: '100', title: 'First 100 words' },
      { kind: 'practice', id: 'translate', title: 'Practice: translate' },
    ],
  },
]
