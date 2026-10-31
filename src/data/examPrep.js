/**
 * Exam loops for Goethe, telc, and ÖSD.
 * Each phase exists because that task is scored on its own, under a clock,
 * with a pass floor. After the timed paper, repeat only the phase that lost points.
 */
export const examPrograms = [
  {
    id: 'exam-a1',
    title: 'A1 exam loop',
    level: 'A1',
    blurb: 'Start Deutsch 1 shape: Goethe and telc. Form, 30-word note, announcements heard once, three speaking tasks with no prep.',
    why:
      'Goethe A1 and telc A1 grew from the same Start Deutsch 1 exam. They do not grade “how much A1 you know.” They grade a form, short true/false texts, ads, announcements, a message of about 30 words, and three speaking tasks in roughly 15 minutes with no preparation. Speaking is 25 of 100 points, so a quiet oral can fail a good written paper. ÖSD A1 gives you preparation time and minimum scores inside the written module. This loop follows the Goethe/telc clock. The first lesson says what to change if your centre is ÖSD.',
    loop:
      'After the Hallo A1 paper, mark the Teil that lost points. Repeat only that phase, then sit the official Goethe or telc PDF. Do not restart greetings if the misses were announcements.',
    phases: [
      {
        title: 'See the mark scheme',
        why: 'You cannot train a task you have not seen. Five minutes here saves a week of the wrong homework.',
        steps: [
          { kind: 'lesson', id: 'exam-how-a1', title: 'How A1 points are given' },
          { kind: 'level', id: 'a1', segment: 'exams', title: 'Goethe, telc, and ÖSD A1 side by side' },
        ],
      },
      {
        title: 'Lesen',
        why: 'Teil 1 is one fact per sentence. A wrong day or a wrong time is the whole item. Teil 2 is matching a situation to a notice, and one notice is often unused.',
        steps: [
          { kind: 'lesson', id: 'a1-read-notes', title: 'Notes and emails: richtig / falsch' },
          { kind: 'lesson', id: 'a1-read-ads', title: 'Ads and signs' },
        ],
      },
      {
        title: 'Hören',
        why: 'Announcements are played once. Dialogues are played twice. The answer is a price, a clock time, a platform, or a place. Write that down. Do not try to remember the whole sentence.',
        steps: [
          { kind: 'lesson', id: 'a1-listen-announcements', title: 'Announcements, heard once' },
          { kind: 'lesson', id: 'a1-listen-dialogues', title: 'Short dialogues' },
          { kind: 'lesson', id: 'numbers-time', title: 'Numbers and clock time' },
        ],
      },
      {
        title: 'Schreiben',
        why: 'Teil 1 is personal data in the correct box, including digits. Teil 2 is scored on content points first. Cover every bullet in the prompt inside about 30 words, then add greeting and close.',
        steps: [
          { kind: 'lesson', id: 'a1-write-form', title: 'Fill in a form' },
          { kind: 'lesson', id: 'a1-write-note', title: 'A 30-word note' },
          { kind: 'course', id: 'kb-a1-01', title: 'Kurs L1: name, country, Wie geht’s' },
        ],
      },
      {
        title: 'Sprechen',
        why: 'No prep time. telc weights the introduction at 3 points and the question task and the request task at 6 each. Practice asking, answering, and Kannst du…? out loud, not only on paper.',
        steps: [
          { kind: 'lesson', id: 'phrases-greetings', title: 'Greetings, du and Sie' },
          { kind: 'lesson', id: 'a1-speak-introduce', title: 'Introduce yourself' },
          { kind: 'lesson', id: 'a1-speak-requests', title: 'Ask, answer, request' },
        ],
      },
      {
        title: 'Grammar that makes a right idea unscorable',
        why: 'At A1 the losses are mechanical: wrong article on the form, age with haben, nicht where kein belongs, verb not in position 2. Fix those. Leave Konjunktiv II for later.',
        steps: [
          { kind: 'lesson', id: 'nouns-gender', title: 'der / die / das' },
          { kind: 'lesson', id: 'nouns-plurals', title: 'Plurals' },
          { kind: 'lesson', id: 'verbs-sein-haben', title: 'sein and haben' },
          { kind: 'lesson', id: 'articles-akkusativ', title: 'Nominative and accusative' },
          { kind: 'practice', id: 'articles', title: 'Article drill' },
        ],
      },
      {
        title: 'Timed paper, then the loop',
        why: 'One untimed read-through does not show which Teil collapses at the clock. The Hallo paper is original, in the Start Deutsch 1 shape. The official PDF is the second sitting.',
        steps: [
          { kind: 'exam', id: 'a1-practice', title: 'Hallo A1 paper, timed' },
          { kind: 'level', id: 'a1', segment: 'ready', title: 'A1 ready-when checklist' },
        ],
      },
    ],
  },
  {
    id: 'exam-a2',
    title: 'A2 exam loop',
    level: 'A2',
    blurb: 'Goethe’s 45-written and 15-oral floor, plus the telc email where you choose 3 of 4 bullets.',
    why:
      'Most A2 fails are not “A2 grammar was too hard.” Goethe A2 needs 60 overall and also 45 of 75 written and 15 of 25 oral. Drop under either floor and the total does not save you. telc A2 cannot be retaken in parts; the practice test passes at 36 of 60. The email task is choose three bullets out of four. Speaking Teil 3 is agreeing a plan, with könnte and a time. This loop trains those floors before it trains more vocabulary.',
    loop:
      'If the paper dies on writing, repeat the email phase. If the total is fine but speaking is under 15, repeat only the plan-something phase. If weil keeps the verb in the middle, repeat the grammar phase.',
    phases: [
      {
        title: 'See the floor',
        why: 'Training “more German” does not fix a 14-point oral. You need to know which number failed.',
        steps: [
          { kind: 'lesson', id: 'exam-how-a2', title: 'The 45 and 15 rule' },
          { kind: 'level', id: 'a2', segment: 'exams', title: 'Goethe, telc, and ÖSD A2' },
        ],
      },
      {
        title: 'Lesen',
        why: 'A2 reading is emails, ads, and notice boards, four Goethe parts or three telc parts. You are matching a person to a text, or a detail to a line. Read the question before the text.',
        steps: [
          { kind: 'lesson', id: 'a2-read-email', title: 'Longer emails' },
          { kind: 'lesson', id: 'a2-read-notices', title: 'Notice boards' },
        ],
      },
      {
        title: 'Hören',
        why: 'Phone messages and short radio or interview items. Write the time, the place, and the reason. Reasons are often a weil-clause spoken quickly.',
        steps: [
          { kind: 'lesson', id: 'a2-listen-phone', title: 'Phone messages' },
          { kind: 'lesson', id: 'a2-listen-radio', title: 'Radio and interviews' },
        ],
      },
      {
        title: 'Schreiben',
        why: 'Pick three of four bullets and write one or two sentences each. A fourth bullet you add out of guilt is worth less than a missing bullet you were supposed to choose. weil goes at the point where you give the reason, with the verb last.',
        steps: [
          { kind: 'lesson', id: 'a2-write-email', title: 'A short email' },
          { kind: 'course', id: 'kb-a2-09', title: 'Kurs: weil at work' },
          { kind: 'course', id: 'kb-a2-12', title: 'Kurs: wenn and word order' },
        ],
      },
      {
        title: 'Sprechen',
        why: 'Teil 3 is the expensive part on telc (6 points) and on Goethe (8 points, shared with the life talk). You need a suggestion, a preference, a time, and Einverstanden. Say it with a partner or out loud alone.',
        steps: [
          { kind: 'lesson', id: 'a2-speak-daily', title: 'Everyday talk' },
          { kind: 'lesson', id: 'a2-speak-plan', title: 'Plan something' },
          { kind: 'course', id: 'kb-a2-07', title: 'Kurs: könnten and solltest' },
        ],
      },
      {
        title: 'Grammar the email and the plan need',
        why: 'Perfekt with the right haben/sein, two-way prepositions (ins Kino / im Kino), and verb-final after weil, dass, and wenn. Other A2 grammar can wait until these are stable in a timed email.',
        steps: [
          { kind: 'lesson', id: 'a2-perfekt', title: 'Perfekt stories' },
          { kind: 'lesson', id: 'a2-weil-dass', title: 'weil, dass, word order' },
          { kind: 'practice', id: 'cases', title: 'Case tables' },
        ],
      },
      {
        title: 'Timed paper, then the loop',
        why: 'Check three numbers, not one: overall, written, oral. Then go back to the phase that missed its floor.',
        steps: [
          { kind: 'exam', id: 'a2-practice', title: 'Hallo A2 paper, timed' },
          { kind: 'level', id: 'a2', segment: 'ready', title: 'A2 ready-when checklist' },
        ],
      },
    ],
  },
  {
    id: 'exam-b1',
    title: 'B1 exam loop',
    level: 'B1',
    blurb: 'Goethe/ÖSD modules at 60% each. telc written-and-oral floors, plus the Sprachbausteine cloze.',
    why:
      'Goethe B1 and ÖSD B1 are one modular exam: Lesen, Hören, Schreiben, and Sprechen are each passed at 60 percent, and a failed module can be retaken alone. telc Deutsch B1 is not that exam. It needs 60 percent written and 60 percent oral separately, and the written paper includes Sprachbausteine. The integration-course DTZ can award A2 or B1 from one sitting. This loop is built for the Goethe/ÖSD modules, with one phase that exists only because telc candidates lose written points on the cloze.',
    loop:
      'Booked one module? Run the mark-scheme phase, that skill’s phase, the grammar that skill needs, then a timed sitting of that module. Failed Lesen Teil 3 (ads)? Repeat Lesen only. Do not rewrite the forum post.',
    phases: [
      {
        title: 'Pick the exam',
        why: 'The tasks look similar and the pass rules do not. Training the wrong clock is a wasted month.',
        steps: [
          { kind: 'lesson', id: 'exam-how-b1', title: 'Modules, telc, and DTZ' },
          { kind: 'level', id: 'b1', segment: 'exams', title: 'B1 exam map' },
        ],
      },
      {
        title: 'Lesen',
        why: 'Five Goethe parts. The ad match has a spare notice. Forum comments are stance (yes/no), not a summary. Rules and Hausordnung are detail questions. Read the statement, then hunt that fact.',
        steps: [
          { kind: 'lesson', id: 'b1-read-article', title: 'A short article' },
          { kind: 'lesson', id: 'b1-read-forum', title: 'Forum comments: for or against' },
          { kind: 'course', id: 'kb-b1-20', title: 'Kurs: Hausordnung' },
        ],
      },
      {
        title: 'Hören',
        why: 'About 40 minutes, then a few minutes to copy answers. Items move from announcements to a conversation to a discussion. Note who holds which opinion. Global questions are the topic, not a single number.',
        steps: [
          { kind: 'lesson', id: 'b1-listen-interview', title: 'Interviews' },
          { kind: 'course', id: 'kb-b1-18', title: 'Kurs: opinion language' },
        ],
      },
      {
        title: 'Schreiben',
        why: 'Three tasks in 60 minutes. Personal email, forum opinion (view, two reasons, example, close), short formal email with Anrede and Gruß. Content points are the marks. Connectors do not replace a missing reason.',
        steps: [
          { kind: 'lesson', id: 'b1-write-forum', title: 'A forum post' },
          { kind: 'lesson', id: 'b1-write-formal', title: 'A formal email' },
          { kind: 'lesson', id: 'b1-opinions', title: 'Opinion chunks' },
          { kind: 'course', id: 'kb-b1-04', title: 'Kurs: Reklamation, obwohl / trotzdem' },
        ],
      },
      {
        title: 'Sprechen',
        why: 'You get 15 minutes of prep. Use it for a six-word plan. Teil 1 is planning together for about three minutes. Teil 2 is a three-minute talk. Teil 3 is a short comment on your partner, not a second speech.',
        steps: [
          { kind: 'lesson', id: 'b1-speak-present', title: 'Present a topic' },
          { kind: 'lesson', id: 'b1-speak-discuss', title: 'Comment and discuss' },
          { kind: 'course', id: 'kb-b1-06', title: 'Kurs: invitations and falls' },
        ],
      },
      {
        title: 'telc only: Sprachbausteine',
        why: 'Goethe has no cloze module. telc folds grammar gaps into the written 60 percent. Skip this phase if you are not sitting telc.',
        steps: [{ kind: 'lesson', id: 'exam-how-telc-cloze', title: 'How to do the cloze' }],
      },
      {
        title: 'Grammar the modules actually punish',
        why: 'Konjunktiv II (wäre, hätte, könnte, würde) in polite mail and in “what I would do.” Relatives and verb-plus-preposition in speaking. obwohl versus trotzdem, weil versus deshalb. Passive is needed for rules, not for the email greeting.',
        steps: [
          { kind: 'lesson', id: 'b1-konjunktiv2', title: 'Konjunktiv II' },
          { kind: 'lesson', id: 'b1-relativ', title: 'Relative clauses' },
          { kind: 'lesson', id: 'b1-passiv', title: 'Passiv' },
          { kind: 'course', id: 'kb-b1-10', title: 'Kurs: hätte / wäre' },
          { kind: 'course', id: 'kb-b1-21', title: 'Kurs: modal passive' },
        ],
      },
      {
        title: 'Timed paper, then the loop',
        why: 'Score each module against 60, not the average. Repeat the module under 60.',
        steps: [
          { kind: 'exam', id: 'b1-practice', title: 'Hallo B1 paper, timed' },
          { kind: 'level', id: 'b1', segment: 'ready', title: 'B1 ready-when checklist' },
        ],
      },
    ],
  },
  {
    id: 'exam-b2',
    title: 'B2 exam loop',
    level: 'B2',
    blurb: 'Goethe’s four modules: 150-word forum, 100-word Sie-email, once-only listening, a prepared talk. ÖSD uses a longer written clock.',
    why:
      'Goethe B2 passes each module at 60 percent. The writing module is 75 minutes for two texts: a forum contribution of about 150 words that must touch four bullets, and a workplace email of about 100 words in Sie. Listening plays two of the four parts only once. Speaking gives 15 minutes of prep for a structured talk and a discussion. ÖSD B2 is two modules and a longer written sitting (reading 90, writing 90). telc B2 adds a cloze and a separate oral floor. This loop follows the Goethe tasks and names the clock to switch if you booked ÖSD or telc. There is no original B2 paper on this site yet, so the last phase sends you to the official model set.',
    loop:
      'After a model set, sort misses into Lesen, Hören, the 150-word text, the Sie-email, or the talk. Repeat that phase. A nominalisation drill does not repair a skipped bullet.',
    phases: [
      {
        title: 'See which B2 you booked',
        why: 'Goethe 65/40/75, ÖSD 90/30/90, telc with Sprachbausteine. Same level name, three clocks.',
        steps: [
          { kind: 'lesson', id: 'exam-how-b2', title: '150 words, 100 words, the talk' },
          { kind: 'level', id: 'b2', segment: 'exams', title: 'Goethe, telc, and ÖSD B2' },
        ],
      },
      {
        title: 'Lesen',
        why: 'Five parts: people matched to statements, a gapped article with two spare sentences, a long press text, comments matched to headings, regulations matched to headings. The spare sentence and the unused heading are traps. Leave them unused.',
        steps: [
          { kind: 'level', id: 'b2', segment: 'skills', title: 'B2 reading task types' },
          { kind: 'course', id: 'kb-b2-04', title: 'Kurs: Medienkritik' },
          { kind: 'course', id: 'kb-b2-10', title: 'Kurs: study and structure words' },
        ],
      },
      {
        title: 'Hören',
        why: 'Short conversations and the multi-speaker “who says what” are once. The interview and the lecture are twice. On a once-only item, answer while it plays. On the lecture, listen first for the three-part structure, second time for details.',
        steps: [
          { kind: 'course', id: 'kb-b2-02', title: 'Kurs: reported speech, for lectures' },
          { kind: 'level', id: 'b2', segment: 'skills', title: 'B2 listening task types' },
        ],
      },
      {
        title: 'Schreiben',
        why: 'Four bullets, an introduction, and a close, in about 150 words. Then a Sie-email: problem, understanding, proposal, greeting, in about 100 words. Register mixing (Hallo inside a work mail) costs the language mark even when the content is complete.',
        steps: [
          { kind: 'lesson', id: 'b2-write-forum', title: 'A 150-word argument' },
          { kind: 'lesson', id: 'b2-register', title: 'Formal and informal pairs' },
          { kind: 'course', id: 'kb-b2-03', title: 'Kurs: in the company' },
          { kind: 'course', id: 'kb-b2-11', title: 'Kurs: complaint' },
        ],
      },
      {
        title: 'Sprechen',
        why: 'Prep time is for a four-line plan, not a translated essay. Teil 1 is the talk plus questions. Teil 2 is exchanging arguments. If you read a script, the question part collapses.',
        steps: [
          { kind: 'lesson', id: 'b1-speak-present', title: 'Talk shape (reuse, then lengthen)' },
          { kind: 'course', id: 'kb-b2-01', title: 'Kurs: stance and register' },
          { kind: 'level', id: 'b2', segment: 'chunks', title: 'B2 Redemittel' },
        ],
      },
      {
        title: 'telc only: Sprachbausteine',
        why: 'Same cloze idea as telc B1, on harder connectors and prepositional verbs. Skip it for a Goethe or ÖSD booking.',
        steps: [{ kind: 'lesson', id: 'exam-how-telc-cloze', title: 'Cloze method' }],
      },
      {
        title: 'Grammar the two texts and the talk need',
        why: 'Markers notice verb-final, obwohl versus trotzdem, and Sie-nominal style (bitten um, aufgrund). Konjunktiv I is for reporting what someone said, which shows up in reading and in the talk, not in every email. State passive versus process passive matters when you describe results. You do not need all 88 chapters of a B2 grammar book before the first model set.',
        steps: [
          { kind: 'lesson', id: 'b2-kj1', title: 'Konjunktiv I' },
          { kind: 'lesson', id: 'b2-nominal', title: 'Nominalisierung' },
          { kind: 'lesson', id: 'b2-passiv-arten', title: 'Process and state passive' },
          { kind: 'course', id: 'kb-b2-08', title: 'Kurs: turning connectors' },
        ],
      },
      {
        title: 'Official model set, then the loop',
        why: 'This site has original papers through B1 only. B2 timing has to be the Goethe Modellsatz, or the telc or ÖSD set for the exam you booked. Then repeat the phase that missed 60 percent.',
        steps: [
          { kind: 'level', id: 'b2', segment: 'exams', title: 'Open the official B2 model set' },
          { kind: 'level', id: 'b2', segment: 'ready', title: 'B2 ready-when checklist' },
        ],
      },
    ],
  },
]

export function examStepCount(program) {
  return program.phases.reduce((sum, phase) => sum + phase.steps.length, 0)
}
