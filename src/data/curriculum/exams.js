const GRADE_SCALE = [
  ['100–90', 'sehr gut'],
  ['89–80', 'gut'],
  ['79–70', 'befriedigend'],
  ['69–60', 'ausreichend'],
  ['59–0', 'nicht bestanden'],
]

export const examsByLevel = {
  a1: [
    {
      id: 'goethe-a1',
      board: 'Goethe-Institut',
      name: 'Goethe-Zertifikat A1: Start Deutsch 1',
      audience: 'Adults (recommended from age 16). Fit in Deutsch 1 is the youth variant.',
      format: 'Gesamtprüfung: written group exam + oral group exam. All parts must be taken.',
      hours: 'Goethe estimates 80–200 teaching units of 45 minutes, depending on prior knowledge.',
      timing: [
        ['Hören', 'ca. 20 min', 'max. 15 points (then scaled into the written total)'],
        ['Lesen', '25 min', 'max. 15 points'],
        ['Schreiben', '20 min', 'form + short text'],
        ['Written total', '65 min, no break', '75 of 100 overall points'],
        ['Sprechen', '15 min, max. 4 candidates, no prep time', '25 of 100 overall points'],
      ],
      pass: 'At least 60 of 100 points, and every section must have been taken. Written 75 + oral 25. Scale: 90–100 sehr gut, 80–89 gut, 70–79 befriedigend, 60–69 ausreichend, 0–59 nicht bestanden.',
      tasks: [
        {
          skill: 'Hören',
          parts: [
            'Teil 1: short everyday dialogues (prices, times, food, directions). Multiple choice a/b/c. Each text twice.',
            'Teil 2: public announcements (station, shop, event). True/false. Each text once.',
            'Teil 3: slightly longer dialogues (phone, meeting point, appointment). Multiple choice. Each text twice.',
          ],
        },
        {
          skill: 'Lesen',
          parts: [
            'Teil 1: short emails / personal notes. True/false.',
            'Teil 2: notices, ads, websites, signs — match information to a situation.',
            'Teil 3: further short everyday texts (ads, notes, information). Multiple choice.',
          ],
        },
        {
          skill: 'Schreiben',
          parts: [
            'Teil 1: fill in a form (name, address, nationality, and similar personal data).',
            'Teil 2: write a short personal message (Modellsatz: about 30 words) to a given everyday situation.',
          ],
        },
        {
          skill: 'Sprechen',
          parts: [
            'Teil 1: Sich vorstellen — introduce yourself in the group.',
            'Teil 2: Um Informationen bitten und Informationen geben — two everyday topics (e.g. Einkaufen).',
            'Teil 3: Bitten formulieren und darauf reagieren — make a simple request and react to one.',
          ],
        },
      ],
      skillsTested:
        'Can handle short questions, announcements, answering-machine messages; pick facts from notes, signs and ads; name numbers, times and prices; fill forms; write a short personal note; introduce themselves; make and answer everyday requests. Developed jointly by the Goethe-Institut and telc.',
      sourceIds: ['goethe-a1-dfb', 'goethe-a1-model', 'goethe-a1-results', 'goethe-a1-us'],
    },
    {
      id: 'telc-a1',
      board: 'telc',
      name: 'Start Deutsch 1 / telc Deutsch A1',
      audience: 'General language. Paper-based. Cannot be taken as a Teilprüfung (no split retakes).',
      format: 'Written + oral as one overall exam.',
      hours: 'Same CEFR A1 target as Goethe Start Deutsch 1 (the two A1 exams share a common origin).',
      timing: [
        ['Formalitäten', '10 min', 'fill Antwortbogen S30 before the clock starts'],
        ['Hören', 'ca. 20 min', '3 parts, 15 raw points'],
        ['Lesen und Schreiben', '45 min', 'Lesen 3 parts + Schreiben 2 parts, 15 + 15 raw'],
        ['Sprechen', 'ca. 15 min', 'usually 4 candidates, no prep; 15 raw'],
      ],
      pass: 'Gesamtprüfung, 60 raw points (15+15+15+15). The Übungstest multiplies the total by 1.66 and rounds to a 100-point scale: 90–100 sehr gut, 80–89 gut, 70–79 befriedigend, 60–69 ausreichend, 0–59 teilgenommen. Pass from 60 scaled points. No Teilprüfung. (telc Start Deutsch 1 Übungstest, Bewertung.)',
      tasks: [
        {
          skill: 'Hören (15)',
          parts: [
            'Three parts of everyday dialogues, announcements and slightly longer exchanges (same family as Goethe A1 / Start Deutsch 1).',
          ],
        },
        {
          skill: 'Lesen (15) + Schreiben (15)',
          parts: [
            'Lesen: short notes, ads, signs — true/false and matching.',
            'Schreiben Teil 1: form (Lösungsschlüssel, +/−; spelling usually tolerated except numbers).',
            'Schreiben Teil 2: short message ca. 30 words, max. 10 points on S60 (Inhaltspunkte 3 / 1,5 / 0 each + language).',
          ],
        },
        {
          skill: 'Sprechen (15, Bogen M10)',
          parts: [
            'Teil 1 Sich vorstellen — max. 3 points.',
            'Teil 2 Um Informationen bitten und Informationen geben — max. 6.',
            'Teil 3 Bitten formulieren und darauf reagieren — max. 6.',
          ],
        },
      ],
      skillsTested: 'Simplest everyday communication: introduce yourself, handle needs, understand slow clear speech.',
      sourceIds: ['telc-a1', 'telc-a1-uebung', 'goethe-a1-model'],
    },
    {
      id: 'osd-a1',
      board: 'ÖSD',
      name: 'ÖSD Zertifikat A1',
      audience: 'From age 14. Also ÖSD Zertifikat A1 / Österreich with Austrian-standard texts.',
      format: 'Two modules that may be taken together or separately: Schriftliche Prüfung + Mündliche Prüfung (Einzelprüfung).',
      hours: 'CEFR A1.',
      timing: [
        ['Lesen', '25 min', 'Aufgaben 1–3'],
        ['Hören', 'ca. 10 min', 'Aufgaben 1–3'],
        ['Schreiben', '20 min', 'Aufgaben 1–2 (form + short text)'],
        ['Written total', 'ca. 55 min, no break', 'recommended order Lesen – Hören – Schreiben'],
        ['Sprechen', 'ca. 10 min + 10 min prep', 'Einzelprüfung: introduce, simple picture, role-play'],
      ],
      pass: 'Written module: at least 38 of 75 points, and minima of 6/30 Lesen, 6/30 Hören, and 4/10 on Schreiben Aufgabe 2. Oral module: at least 12 of 25 points. (ÖSD A1 Modellsatzbroschüre 2024.)',
      tasks: [
        {
          skill: 'Lesen / Hören',
          parts: [
            'Global, detail and selective understanding of simple authentic texts from Austria, Germany and Switzerland.',
          ],
        },
        {
          skill: 'Schreiben',
          parts: ['Fill a form and write a simple text, marked with fixed criteria.'],
        },
        {
          skill: 'Sprechen',
          parts: ['Short self-introduction, simple picture description, role-play. Two examiners. Recorded.'],
        },
      ],
      skillsTested: 'Basic communication with a heavier weight on reading and listening than on production.',
      sourceIds: ['osd-a1-dfb', 'osd-a1-model'],
    },
  ],
  a2: [
    {
      id: 'goethe-a2',
      board: 'Goethe-Institut',
      name: 'Goethe-Zertifikat A2',
      audience: 'Adults. Fit in Deutsch is the youth exam at A2. Goethe estimates 200–350 teaching units of 45 minutes to reach A2 from scratch.',
      format: 'Written exam (Lesen – Hören – Schreiben) + oral pair exam (Einzelprüfung only as an exception). Not modular like B1/B2.',
      hours: '200–350 UE à 45 min (from beginner, depending on learner).',
      timing: [
        ['Lesen', '30 min', '20 items → scaled to 25 result points (×1.25)'],
        ['Hören', 'ca. 30 min', '20 items → 25 result points'],
        ['Schreiben', '30 min', 'max. 20 Messpunkte → 25 result points'],
        ['Written total', '90 min, no break', '75 of 100'],
        ['Sprechen', 'pair ca. 15 min / single ca. 10 min, no prep', '25 points (Teil 1: 4; Teil 2+3: 8 each; Aussprache: 5)'],
      ],
      pass: 'At least 60/100 overall AND at least 45 written AND at least 15 oral. Missing either floor fails the whole exam even if the total is 60. Same grade labels as A1.',
      tasks: [
        {
          skill: 'Lesen (4 parts)',
          parts: [
            'Short newspaper pieces, emails, ads and public notice boards.',
            'DFB: Kandidatenblätter cover Lesen Teil 1–4 (20 items, 1 or 0 per item).',
          ],
        },
        {
          skill: 'Hören (4 parts)',
          parts: [
            'Everyday conversations, radio announcements and interviews, telephone messages, public announcements.',
            '20 items, 1 or 0 per item.',
          ],
        },
        {
          skill: 'Schreiben (2 parts)',
          parts: ['Messages that relate to your immediate living environment (notes, emails, short personal texts).'],
        },
        {
          skill: 'Sprechen (3 parts)',
          parts: [
            'Ask and answer questions about yourself (ca. 3 min).',
            'Talk about your own life (ca. 3 min per candidate).',
            'Agree or plan something with the partner (ca. 5 min). Intro ca. 1 min, ungraded.',
          ],
        },
      ],
      skillsTested:
        'Routine exchange of information on familiar matters; describe background, education, immediate needs; understand the essential of short clear messages.',
      sourceIds: ['goethe-a2-dfb', 'goethe-a2-results', 'goethe-a2-info'],
    },
    {
      id: 'telc-a2',
      board: 'telc',
      name: 'Start Deutsch 2 / telc Deutsch A2',
      audience: 'General language. Paper-based. Not a Teilprüfung.',
      format: 'Written + oral overall exam.',
      hours: 'CEFR A2.',
      timing: [
        ['Formalitäten', '10 min', 'Antwortbogen S30 before the 70-min written block'],
        ['Hören', 'ca. 20 min', '3 parts × 5 items = 15 points'],
        ['Lesen und Schreiben', '50 min', 'Lesen 3×5 = 15; Schreiben Teil 1 form 5 + Teil 2 E-Mail 10'],
        ['Written total', '70 min', 'Hören + Lesen + Schreiben'],
        ['Sprechen', 'ca. 15 min', 'pair; Teil 1 introduce ~3 min, Teil 2 Alltag ~4, Teil 3 aushandeln ~4'],
      ],
      pass: 'Gesamtprüfung. 60 raw points (15+15+15+15). Official Übungstest: pass at 60% = 36 of 60. Sprechen on M10: 3 + 6 + 6. No Teilprüfung. (telc Start Deutsch 2 Übungstest, shop.telc.net PDF, 2024.)',
      tasks: [
        {
          skill: 'Hören / Lesen',
          parts: [
            'Hören 1–3: announcements and everyday talk (5+5+5).',
            'Lesen 1–3: matching / multiple choice on ads, notices, short texts (5+5+5).',
          ],
        },
        {
          skill: 'Schreiben',
          parts: [
            'Teil 1: form, 5 points.',
            'Teil 2: e-mail — choose 3 of 4 bullets; 1–2 sentences each (max. 10).',
          ],
        },
        {
          skill: 'Sprechen',
          parts: [
            'Teil 1 Sich vorstellen (max. 3).',
            'Teil 2 Ein Alltagsgespräch führen (max. 6).',
            'Teil 3 Etwas aushandeln (max. 6).',
          ],
        },
      ],
      skillsTested:
        'Frequently used expressions; simple routine exchanges; describe origin, education, immediate needs (telc.net GER paraphrase).',
      sourceIds: ['telc-a2', 'telc-a2-uebung'],
    },
    {
      id: 'osd-a2',
      board: 'ÖSD',
      name: 'ÖSD Zertifikat A2',
      audience: 'From age 14. Also A2 / Österreich.',
      format: 'Two modules: Schriftliche Prüfung (Lesen, Hören, Schreiben) and Mündliche Prüfung (Paar or Einzel).',
      hours: 'CEFR A2.',
      timing: [
        ['Lesen', '30 min', ''],
        ['Hören', 'ca. 15 min', ''],
        ['Schreiben', '30 min', ''],
        ['Written total', 'ca. 75 min', ''],
        ['Sprechen', 'ca. 10 min + 10 min prep', 'pair or individual'],
      ],
      pass: 'See current ÖSD Durchführungsbestimmungen / Auswertungsbogen. Modules can be certified separately; a full certificate is issued if both modules are passed on one day or within one year at the same centre.',
      tasks: [
        {
          skill: 'Modules',
          parts: [
            'Written: reading, listening, writing as one module.',
            'Oral: pair or individual speaking with 10 minutes preparation.',
          ],
        },
      ],
      skillsTested: 'A2 can-do range with D-A-CH authentic texts.',
      sourceIds: ['osd-a2-dfb', 'osd-ordnung'],
    },
  ],
  b1: [
    {
      id: 'goethe-b1',
      board: 'Goethe-Institut / ÖSD (joint exam)',
      name: 'Goethe-Zertifikat B1  /  ÖSD Zertifikat B1',
      audience:
        'Adults from 16; youth variant from 12 (ÖSD) / corresponding Goethe Jugendliche papers. Developed by Goethe-Institut, University of Fribourg/Switzerland, and ÖSD.',
      format: 'Four independent modules. Take one, some, or all. Failed modules can be repeated separately. Full certificate if all four are passed in one sitting or within one year.',
      hours: 'Independent user. Typical classroom path: A1+A2+B1 across Menschen / Schritte / Netzwerk B1 volumes.',
      timing: [
        ['Lesen', '65 min', '5 parts'],
        ['Hören', 'ca. 40 min', '4 parts; 5 min to transfer answers'],
        ['Schreiben', '60 min', '3 parts'],
        ['Written if all on one day', 'ca. 165 min, no break', ''],
        ['Sprechen', 'pair ca. 15 min / single ca. 10 min + 15 min prep', '3 parts'],
      ],
      pass: 'Each module 100 points = 100%. Pass a module at 60 points / 60%. Grades per module: 100–90 sehr gut, 89–80 gut, 79–70 befriedigend, 69–60 ausreichend, 59–0 nicht bestanden.',
      tasks: [
        {
          skill: 'Lesen (5 parts, 65 min)',
          parts: [
            'Teil 1 (10 min): personal email/letter — true/false statements.',
            'Teil 2 (20 min): press texts — multiple choice a/b/c.',
            'Teil 3 (10 min): ads matched to situations (one extra / one unused).',
            'Teil 4 (15 min): forum/reader comments — stance (e.g. ja/nein to a question).',
            'Teil 5 (10 min): written instructions / Hausordnung — multiple choice.',
          ],
        },
        {
          skill: 'Hören (4 parts, ca. 40 min)',
          parts: [
            'Announcements, short talks, informal conversations, radio discussions.',
            'Global and detail comprehension of standard speech on everyday topics.',
          ],
        },
        {
          skill: 'Schreiben (3 parts, 60 min)',
          parts: [
            'Aufgaben 1 and 3: emails (personal and a short formal apology / similar).',
            'Aufgabe 2: Diskussionsbeitrag / forum opinion.',
          ],
        },
        {
          skill: 'Sprechen (3 parts)',
          parts: [
            'Teil 1: jointly plan something (ca. 3 min).',
            'Teil 2: present a current familiar topic from slides/prompts (ca. 3 min).',
            'Teil 3: comment on your partner’s presentation (ca. 2 min). 15 min solo prep.',
          ],
        },
      ],
      skillsTested:
        'Main points of clear standard speech on work, school, leisure; straightforward texts on interests; describe experiences, dreams, hopes, plans; give brief reasons and explanations.',
      sourceIds: ['goethe-b1-dfb', 'goethe-b1-results', 'goethe-b1-us', 'goethe-b1-uebung', 'osd-b1-folder'],
    },
    {
      id: 'telc-b1',
      board: 'telc',
      name: 'Zertifikat Deutsch / telc Deutsch B1',
      audience: 'Open to anyone. Recognised in Germany for citizenship language proof (alongside DTZ B1). Digital, hybrid, or paper.',
      format: 'Written part + oral part. Can be taken together or separately (Teilprüfung). Not the same format as DTZ.',
      hours: 'CEFR B1.',
      timing: [
        ['Lesen + Sprachbausteine', '90 min, no break', 'Lesen 3 parts; Sprachbausteine 2 parts'],
        ['Hören', 'ca. 30 min', '3 parts'],
        ['Schreiben', '30 min', '1 letter / email'],
        ['Sprechen', 'ca. 15 min + 20 min prep', '3 parts, usually 2 candidates'],
      ],
      pass: '60% in the written exam AND 60% in the oral exam separately (not averaged). Common point frame used by centres: 135/225 written and 45/75 oral. Passed parts can be combined within 12 months (Ergebniszusammenführung) for this format — not with DTZ.',
      tasks: [
        {
          skill: 'Lesen',
          parts: ['Headings to short texts; multiple choice on a longer text; ads to situations.'],
        },
        {
          skill: 'Sprachbausteine',
          parts: ['Grammar and vocabulary in context (cloze / choice) — telc-specific; DTZ has no separate Sprachbausteine paper.'],
        },
        {
          skill: 'Hören',
          parts: ['Global, detail and selective listening (conversations, announcements, radio).'],
        },
        {
          skill: 'Schreiben',
          parts: ['One semi-formal letter or email covering set content points (enquiry, complaint, information…).'],
        },
        {
          skill: 'Sprechen',
          parts: ['Contact talk, talk about experiences, plan something together.'],
        },
      ],
      skillsTested:
        'Independent everyday and work communication; talk about family, hobbies, work, current events; report experiences; justify views (telc.net).',
      sourceIds: ['telc-b1'],
    },
    {
      id: 'dtz-note',
      board: 'BAMF / g.a.s.t. (telc materials)',
      name: 'Deutsch-Test für Zuwanderer (DTZ) and telc Deutsch A2∙B1',
      audience:
        'DTZ is the scaled A2/B1 final exam of the German Integrationskurs. telc Deutsch A2∙B1 is the related two-level certificate exam on telc.net (also digital).',
      format:
        'Scaled exam: one sitting can certify A2 or B1. Not a four-module Goethe B1. DTZ is typically a Gesamtprüfung (retake all parts). telc A2∙B1 is a two-level scaled test.',
      hours: 'Integration course typically 600 UE language + 100 UE Orientierung, then DTZ.',
      timing: [
        ['telc A2∙B1 Leseverstehen', '45 min', '4 parts'],
        ['Sprachbausteine Lesen und Schreiben', '35 min', '3 parts'],
        ['Hören und Schreiben', '35 min', '5 parts'],
        ['Schreiben', '10 min', '1 part'],
        ['Sprechen', 'ca. 15 min', '3 parts, usually 2 candidates, no prep'],
      ],
      pass: 'Scaled result: certificate at A2 or B1 according to the scoring table. B1 for naturalisation needs B1 across the required skills — confirm current BAMF rules for the exact DTZ profile you need.',
      tasks: [
        {
          skill: 'Topics',
          parts: [
            'Everyday life in Germany: authorities, housing, work, health, school, shopping.',
            'Speaking: plan something together and exchange opinions (telc A2∙B1 description).',
          ],
        },
      ],
      skillsTested:
        'If you need B1 for residence or citizenship, compare DTZ vs Goethe/telc B1: DTZ can fall back to A2; Goethe B1 is modular; telc B1 is written+oral with Sprachbausteine.',
      sourceIds: ['telc-a2b1'],
    },
  ],
  b2: [
    {
      id: 'goethe-b2',
      board: 'Goethe-Institut',
      name: 'Goethe-Zertifikat B2',
      audience: 'Adults and youth papers. Goethe estimates 600–800 teaching units of 45 minutes to reach B2 from scratch.',
      format: 'Four independent modules, same idea as B1.',
      hours: '600–800 UE à 45 min (from beginner, depending on learner).',
      timing: [
        ['Lesen', '65 min', '5 parts, 30 items'],
        ['Hören', 'ca. 40 min', '4 parts; 5 min to transfer answers'],
        ['Schreiben', '75 min', '2 parts'],
        ['Written if all on one day', 'ca. 180 min, no break', ''],
        ['Sprechen', 'pair ca. 15 min / single ca. 10 min + 15 min prep', '2 parts (two topics to choose in Teil 1)'],
      ],
      pass: '60 points / 60% per module. Same grade table as B1.',
      tasks: [
        {
          skill: 'Lesen (5 parts)',
          parts: [
            'Teil 1: statements matched to four short person texts (Modellsatz: who says what).',
            'Teil 2: gapped article — which sentences fit the gaps (two distractors).',
            'Teil 3: longer press text — multiple choice.',
            'Teil 4: comments matched to headings (one unused).',
            'Teil 5: regulations / Studienordnung — match headings to paragraphs.',
          ],
        },
        {
          skill: 'Hören (4 parts)',
          parts: [
            'Teil 1: five short conversations — true/false + multiple choice (once).',
            'Teil 2: radio interview with a specialist (twice).',
            'Teil 3: multi-speaker discussion — who says what (once).',
            'Teil 4: short lecture (twice).',
          ],
        },
        {
          skill: 'Schreiben (2 parts, 75 min)',
          parts: [
            'Teil 1: forum contribution on a social issue (Modellsatz: ca. 150 words; intro + close; four content bullets).',
            'Teil 2: formal message in a work context (Modellsatz: ca. 100 words, suggested 25 min; Anrede and Gruß).',
          ],
        },
        {
          skill: 'Sprechen (2 parts)',
          parts: [
            'Teil 1: short structured talk (intro–body–close) then partner questions (ca. 4 min each / 8 min for both). Two topics to choose.',
            'Teil 2: discussion exchanging arguments (ca. 5 min).',
          ],
        },
      ],
      skillsTested:
        'Main ideas of complex texts on concrete and abstract topics, including technical discussion in your field; interact with native speakers with little strain; explain a viewpoint giving advantages and disadvantages.',
      sourceIds: ['goethe-b2-dfb', 'goethe-b2-model', 'goethe-b2-us'],
    },
    {
      id: 'telc-b2',
      board: 'telc',
      name: 'telc Deutsch B2',
      audience: 'General language. Digital, hybrid, or paper. Can be taken as Teilprüfung.',
      format: 'Written + oral.',
      hours: 'CEFR B2.',
      timing: [
        ['Lesen + Sprachbausteine', '90 min, no break', 'Lesen 3 parts; Sprachbausteine 2 parts'],
        ['Hören', 'ca. 20 min', '3 parts'],
        ['Schreiben', '30 min', '1 part'],
        ['Sprechen', 'ca. 15 min + 20 min prep', '3 parts, usually 2 candidates'],
      ],
      pass: 'Same telc logic as B1: 60% written and 60% oral separately. Centres often cite 135/225 and 45/75.',
      tasks: [
        {
          skill: 'All skills',
          parts: [
            'Reading, listening, language elements (cloze/choice).',
            'One extended written production from a prompt.',
            'Speaking focused on candidate–candidate exchange.',
          ],
        },
      ],
      skillsTested: 'Spontaneous fluent conversation; complex texts; detailed argumentation with pros and cons (telc.net GER paraphrase).',
      sourceIds: ['telc-b2'],
    },
    {
      id: 'osd-b2',
      board: 'ÖSD',
      name: 'ÖSD Zertifikat B2  /  B2 / Österreich',
      audience: 'Adults and youth; Austrian-standard variant available.',
      format: 'Two modules (not four like Goethe B2): Schriftliche Prüfung + Mündliche Prüfung. Can be taken separately.',
      hours: 'CEFR B2.',
      timing: [
        ['Lesen', '90 min', ''],
        ['Hören', 'ca. 30 min', ''],
        ['Schreiben', '90 min', ''],
        ['Written total', 'ca. 210 min, no break', ''],
        ['Sprechen', 'pair ca. 20 min / single ca. 15 min + 15 min prep', 'Aufgabe 1–3 ca. 5 min each'],
      ],
      pass: 'See current ÖSD Auswertungsbogen. Full certificate if both modules passed on one day or within one year at the same centre.',
      tasks: [
        {
          skill: 'Written',
          parts: ['Longer reading and writing slots than Goethe B2; listening about 30 minutes.'],
        },
        {
          skill: 'Oral',
          parts: ['Three speaking tasks; pair exam about 20 minutes.'],
        },
      ],
      skillsTested: 'Independent user B2 with D-A-CH texts. Do not mix up timings with the Goethe B2 modular exam.',
      sourceIds: ['osd-b2-dfb', 'osd-ordnung'],
    },
  ],
}

export { GRADE_SCALE }
