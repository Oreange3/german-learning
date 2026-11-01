# Hallo Deutsch — how it works, how it is set up, how to copy it

This file is the site manual. It explains what the app is, what tools and ideas it uses, how every page is wired, and how to rebuild or copy it on another computer.

The **lesson text, word list, exam papers, and CEFR maps** live in the JavaScript files under `src/data/`. This guide does not reprint that content. To copy the site completely, copy this whole project folder (or at least `src/`, `public/`, `index.html`, `package.json`, `vite.config.js`, and `.oxlintrc.json`), then follow the setup steps below.

---

## 1. What this website is

**Hallo Deutsch** is a German classroom that runs entirely in the browser. There is no server, no database, and no login API. A visitor can:

1. Walk a structured **A1–B2 course** (Hallo Kurs) modelled on Hueber *Menschen* (A1–B1: 8 modules × 3 lessons) and a shorter Aspekte/Sicher-style B2 starter (4 modules × 3 lessons).
2. Open extra **Study lab** grammar and skill pages.
3. Drill **articles**, **cases**, and **translation**.
4. Sit original **practice exam papers** (on-screen + PDF) and check an answer key.
5. Search a **classroom dictionary** (~285 learner words) and optionally look a word up on Wiktionary.
6. Read **CEFR A1–B2 maps** (can-dos, exam boards, grammar, Themen, skills, Redemittel, mistakes, textbook TOCs, ready-checklists).
7. Follow short **tracks** (Programs) that jump between course lessons, study bits, drills, and maps.
8. Keep **notes** (text + small pictures) and **course ticks** on this computer only.

Brand line: one book path, then drills, then an exam paper.

Anyone can use the site as a **guest**. Register / log on is optional and stays in this browser.

---

## 2. What was used (tech stack)

| Piece | Package / API | Why it is here |
| --- | --- | --- |
| UI library | **React 19** (`react`, `react-dom`) | Pages are components. State lives in hooks. |
| Build tool | **Vite 8** (`vite`, `@vitejs/plugin-react`) | Dev server, hot reload, production bundle. |
| Routing | **React Router 7** (`react-router-dom`) | URL → page. Nested layout. |
| Linter | **Oxlint** (`oxlint`) | Fast lint; React hooks rules. |
| Language | **JavaScript (ES modules)** | `"type": "module"` in `package.json`. No TypeScript. |
| Styles | One file: `src/index.css` | No Tailwind, no CSS modules, no UI kit. |
| Persistence | **`localStorage` / `sessionStorage`** | Users, session, notes, course ticks, ready-checklists, sidebar open state. |
| Password hash | **Web Crypto** `crypto.subtle.digest('SHA-256')` | Hash only. Not a real account system. |
| IDs | **`crypto.randomUUID()`** | User ids and note ids. |
| Online dictionary | **Wiktionary REST** `https://en.wiktionary.org/api/rest_v1/page/definition/{word}` | Optional lookup when the classroom list misses a word. |
| Exam PDFs | Custom script `scripts/generate-exam-pdfs.mjs` | Writes A4 PDFs from the same exam data (no extra npm PDF library). |
| Fonts | System fonts | Body: Tahoma / Verdana. Headings: Georgia / Times. |

There is **no** backend, **no** database, **no** authentication service, **no** Redux, **no** Tailwind, **no** component library.

Node.js + npm are required only to install packages and run Vite.

---

## 3. Concepts used (the ideas behind the code)

If you are copying this site, these are the programming ideas you need to understand.

### Single-page application (SPA)

`index.html` has one empty `<div id="root">`. React mounts there. Changing the URL does **not** load a new HTML file. React Router swaps the page component inside the shared layout.

### Component tree

```
index.html
  └── main.jsx
        BrowserRouter          ← reads the URL
          AuthProvider         ← who is logged in
            App.jsx            ← the route table
              Layout           ← flag, header, nav, sidebar, footer
                CourseNav      ← leftover tree of Hallo Kurs
                <Outlet />     ← the current page (Home, Course, Exam, …)
```

`Layout` always stays on screen. The page in the middle changes.

### Nested routes + outlet

`App.jsx` wraps every route in `<Route element={<Layout />}>`. Child routes render into `<Outlet />` in `Layout.jsx`. That is how the chrome (header / nav / sidebar) is shared.

### Client-side routing and URL params

Examples:

- `/course/:lessonId` — `useParams()` gives `lessonId` (`kb-a1-01`, …).
- `/levels/:levelId/:segment` — `a1` + `grammar`.
- `/dictionary?q=Haus` — `useSearchParams()` for the search box.
- `/lessons` and `/vocabulary` **redirect** (`<Navigate replace />`) to `/study` and `/dictionary`.

### Context API

`AuthContext` holds `{ user, isGuest, register, login, logout, continueAsGuest }`. Any page calls `useAuth()`. You do not pass the user down through ten components.

### Controlled forms

Login, register, notes, dictionary, and translation drills keep input text in `useState` and write it back with `onChange`. Submit handlers call `event.preventDefault()`.

### Derived data, not a database

Content is plain objects in `.js` files. Pages **look up** by id:

- `getCourseLesson(id)` — Hallo Kurs lesson.
- `getLesson(id)` — Study lab lesson.
- `getPracticeExam(id)` — exam paper.
- `getLevel(id)` — CEFR map.
- `searchWords(query)` — classroom dictionary.

Adding a lesson means editing a data file, not creating a new React page.

### Neighbor / progress helpers

`courseNeighbors`, `lessonNeighbors`, and `levelNeighbors` walk a flat list and return previous / next. `courseProgress(done)` counts ticks. The UI only stores a map of “done” ids.

### Fill-in drills as data

A table cell is either a normal string (shown as text) or `{ answer: 'den' }` / `{ answer: ['Ihnen', 'ihnen'] }` (shown as an input). `isBlankCell` and `answersFor` in `src/lib/drill.js` decide which. `FillTable` scores with `answersMatch`.

### Fuzzy German matching

`foldGerman` in `src/lib/text.js` lowercases, trims, maps `ß→ss`, `ä→ae`, `ö→oe`, `ü→ue`, strips English articles, and drops punctuation. So `für` and `fuer` both count as right.

### Fisher–Yates shuffle

Article and translation decks copy the list and shuffle in place (`shuffle` in `src/lib/text.js`). When the deck ends, it reshuffles.

### Browser storage (not the cloud)

| Key | Where | What |
| --- | --- | --- |
| `hallodeutsch_users` | localStorage | Array of `{ id, username, passwordHash, createdAt }` |
| `hallodeutsch_session` | localStorage | `{ id, username }` or missing = guest |
| `hallodeutsch_notes` | localStorage | Shared notes on this PC |
| `hallodeutsch_notes_*` | localStorage | Old per-user keys; Notes migrates them once |
| `hallodeutsch_kurs_done` | localStorage | `{ [lessonId]: true }` course ticks |
| `hallodeutsch_ready_a1` … `_b2` | localStorage | Ready-when checkboxes per CEFR map |
| `hallodeutsch_kurs_open` | **session**Storage | Which sidebar folders are expanded |

Clearing site data wipes accounts, notes, and ticks.

### Image shrink for notes

Notes and comments store pictures as JPEG data URLs. Each picture is center-cropped and drawn to a 128×128 canvas, quality 0.82. Notes allow 6 pictures. Old larger pictures are rewritten to 128×128 the next time that page opens.

### Guest vs member

The site is **not** locked. Guests see everything. An account only stores a name + password hash in this browser. Notes are **shared on the PC**, not per user.

### Accessibility leftovers

Flag bars are `aria-hidden`. Navs have `aria-label`. Tree toggles use `aria-expanded`. Hidden file input uses `.sr-only`.

### Responsive layout

Desktop: 1024 px site column, sidebar 240 px + main. Under 1060 px the grid stacks. Under 700 px type and cards shrink.

### Visual language

Dark classroom: black / red / gold German flag, 2010-era “forum” look (outset gold tabs, inset user box, Georgia headings, gold-on-red underlines). CSS variables in `:root` (`--gold`, `--red`, `--ink`, …).

---

## 4. How the website is set up

### Folder tree (only what you ship)

```
German learning/
├── index.html                 Entry HTML. Title: Hallo Deutsch! | Learn German Online
├── package.json               Scripts + dependencies
├── package-lock.json          Locked versions
├── vite.config.js             plugins: [react()]
├── .oxlintrc.json             Lint: react hooks + oxc
├── .gitignore                 Ignores node_modules, dist
├── HOW_IT_WORKS.md            This file
├── public/
│   ├── favicon.svg            5×3 German flag
│   ├── icons.svg
│   └── exams/                 Generated PDFs (Vite serves /exams/…)
│       ├── hallo-a1-practice.pdf
│       ├── hallo-a2-practice.pdf
│       ├── hallo-b1-practice.pdf
│       └── hallo-a1-grammar-quiz.pdf
├── scripts/
│   └── generate-exam-pdfs.mjs Rebuild those PDFs from practiceExams.js
└── src/
    ├── main.jsx               React mount + providers
    ├── App.jsx                Route table
    ├── index.css              All styles
    ├── context/
    │   └── AuthContext.jsx
    ├── lib/
    │   ├── text.js            foldGerman, answersMatch, shuffle, slugify
    │   └── drill.js           isBlankCell, answersFor
    ├── components/
    │   ├── Layout.jsx         Chrome + <Outlet />
    │   ├── CourseNav.jsx      Sidebar tree
    │   ├── DataTable.jsx      Read-only table
    │   └── FillTable.jsx      Check / show / clear blanks
    ├── pages/                 One file per screen (see §6)
    └── data/                  All classroom content (see §7)
```

Do **not** copy `node_modules/` or `dist/` to another machine. Run `npm install` and `npm run build` there.

### How the app boots

1. Browser opens `index.html`.
2. `<script type="module" src="/src/main.jsx">` runs (Vite rewrites this in production).
3. `main.jsx` imports `index.css`, wraps the tree in `StrictMode` → `BrowserRouter` → `AuthProvider` → `App`.
4. `createRoot(document.getElementById('root')).render(...)`.
5. `App` matches the path and renders `Layout` + the page.

### npm scripts

```bash
npm install          # once: install React, Vite, Router, Oxlint
npm run dev          # http://localhost:5173 — edit and see changes
npm run build        # writes static files to dist/
npm run preview      # serve dist/ locally
npm run lint         # oxlint
node scripts/generate-exam-pdfs.mjs   # regenerate public/exams/*.pdf
```

`package.json` does **not** list the PDF script. Run it with `node` when exam text changes.

### Vite behaviour you must know

- Files in `public/` are copied as-is. A link `href="/exams/hallo-a1-practice.pdf"` is that file.
- `src/` is bundled. Import paths are relative (`../data/courseBook.js`).
- Default Vite config: no custom `base`. Hosting in a **subfolder** needs `base: '/your-folder/'` in `vite.config.js` or the router will 404.
- SPA hosting: the server must send `index.html` for unknown paths (`/course/kb-a1-01`), or refresh on a deep link breaks. Vite’s dev server already does this.

---

## 5. Route map

All of these sit inside `Layout`.

| URL | Page file | What you see |
| --- | --- | --- |
| `/` | `Home.jsx` | Welcome, three-step path, volume table, first four lessons |
| `/login` | `Login.jsx` | Username / password or continue as guest |
| `/register` | `Register.jsx` | Create account (min 3-char name, 4-char password) |
| `/account` | `Account.jsx` | Name + log off, or “go log on” if guest |
| `/course` | `Course.jsx` | Module index + progress bar |
| `/course/:lessonId` | `Course.jsx` | One Hallo Kurs lesson (5 blocks) |
| `/study` | `Study.jsx` | Study lab index by CEFR + skill |
| `/study/:lessonId` | `Lesson.jsx` | One grammar/skill page + optional FillTable |
| `/levels` | `Levels.jsx` | A1–B2 map picker |
| `/levels/:levelId` | `LevelPage.jsx` | Overview segment |
| `/levels/:levelId/:segment` | `LevelPage.jsx` | exams / grammar / themes / skills / chunks / mistakes / books / ready |
| `/programs` | `Programs.jsx` | Track cards |
| `/programs/:programId` | `Programs.jsx` | Numbered step list |
| `/practice` | `Practice.jsx` | Three drill cards |
| `/practice/articles` | `PracticeArticles.jsx` | der / die / das quiz |
| `/practice/translate` | `PracticeTranslate.jsx` | DE↔EN typing |
| `/practice/cases` | `PracticeCases.jsx` | Shared FillTables from `cases.js` |
| `/dictionary` | `Dictionary.jsx` | Search + optional Wiktionary |
| `/dictionary/100` `/250` `/300` | `Dictionary.jsx` | Ranked lists |
| `/notes` | `Notes.jsx` | Shared scratch pad |
| `/exam` | `Exam.jsx` | Paper list + official board links |
| `/exam/:examId` | `Exam.jsx` | Paper + answer key |
| `/about` | `About.jsx` | Short site description |
| `/lessons` | redirect | → `/study` |
| `/vocabulary` | redirect | → `/dictionary` |

Unknown lesson / exam / program / level ids show a “not found” panel with a back button. Unknown level **segments** redirect to that level’s overview.

### Nav chrome (`Layout.jsx`)

**Primary tabs:** Home, Course, Practice, Exam, Words, Notes.

**Sub nav:** Study lab, A1–B2 maps, Tracks.

**Sidebar (`CourseNav`):** collapsible A1–B2 modules → L1, L2, … plus shortcuts to Exam, Drills, Grammar lab, CEFR maps.

**Footer:** About, Course, Exam, Notes, First 100 words.

---

## 6. How each feature works

### Home

Reads `courseBands` and `getCourseLesson` for `kb-a1-01` … `kb-a1-04`. Greets `Gast` or the username. Buttons go to `/course`, L1, and `/exam`.

### Hallo Kurs (`/course`)

**Index:** lists every band → module cards (`id` on the card = hash target, e.g. `/course#a1-m1`). Progress from `hallodeutsch_kurs_done`.

**Lesson page** always has the same shape:

1. **Ich kann …** — `canDo[]`, plus grammar tags.
2. **Einstieg** — `start.de` in a `<pre>` dialogue, `start.en` under it.
3. **Wortfeld** — `words` as Deutsch / English `DataTable`.
4. **Grammatik** — `points[]` then `tables[]`.
5. **Redemittel** — `phrases`.
6. **Abschluss** — `speak`, `write`, optional `studyIds` links (`kb-…` → course, else → `/study/…`), prev / next or “Sit a practice exam”.

Checkbox “Done on this PC” toggles `hallodeutsch_kurs_done[lesson.id]`.

### Study lab (`/study`)

`courseTree` in `courses.js` is the outline (ids only). Full bodies are merged from:

- `coreLessons` inside `courses.js`
- `caseLessons` from `cases.js`
- `extraLessons` from `extraLessons.js`

`allLessons()` walks the tree and attaches the body. `Lesson.jsx` shows points, example table, grammar tables, `FillTable` drills, and words from `wordIds` via `getWordsByIds`.

### Practice

- **Articles:** `nounsWithGender` (nouns that have `article`). Three buttons. Score in memory only (refresh resets).
- **Translate:** `translatable` (noun / verb / adjective / adverb / number / phrase). Direction `de-en` or `en-de`. Accepts `word.en[]` or `word.de` / `article + de`.
- **Cases:** four shared drills from `casePracticeDrills` (pronouns, sein + Hund, ihr + Tasche, der-words).

### Dictionary

Local search uses `foldGerman` on German, English, id, article, note. `?q=` is the shareable URL. Lists are `top100` / `top250` / `top300` by `rank`. **Search online** calls Wiktionary (4 s timeout, in-memory cache). If you copy the site onto a host that blocks that API, local search still works.

### Exam

`practiceExams` items: `id`, `level`, `title`, `style`, `duration`, `pdf`, `intro`, `sections[]`. Each item has a `kind`:

| kind | On screen |
| --- | --- |
| `passage` / `transcript` | Title + `<pre>` text |
| `tf` / `mc` / `gap` | Prompt, optional options, answer in the key |
| `write` / `speak` | Prompt + hint; `model` in the key |
| fields | Label + empty cell (form-style) |

`collectAnswers` skips passages/transcripts and builds the key table. PDFs are the same data, written by `generate-exam-pdfs.mjs` (A4, Helvetica, WinAnsi umlauts).

There is **no Hallo B2 paper** in the data. The exam index points at official Goethe B2 Modellsatz links instead.

### Levels (CEFR maps)

`src/data/curriculum/index.js` `pack()`s A1–B2. Each level has overview, pronunciation, grammar, themes, skills, chunks, mistakes, books, ready, and `exams` from `exams.js`. Segments are listed in `segments.js`. `LevelPage.jsx` picks a view from a `segmentViews` map. Ready ticks save to `hallodeutsch_ready_{levelId}`.

### Programs

A program is `{ id, title, level, blurb, steps[] }`. Each step has `kind`:

| kind | URL |
| --- | --- |
| `course` | `/course/{id}` |
| `lesson` | `/study/{id}` |
| `practice` | `/practice/{id}` |
| `list` | `/dictionary/{id}` |
| `level` | `/levels/{id}` or `/levels/{id}/{segment}` |

### Auth

- Register: unique username (case-insensitive), SHA-256 password, save user + session.
- Login: same hash compare.
- Guest / log off: delete `hallodeutsch_session`.

This is **not** secure against anyone with DevTools on the same PC. It is only a name badge.

### Notes

Shared list. Create / edit / delete. Pictures optional. If `hallodeutsch_notes` is empty, the page merges any old `hallodeutsch_notes_*` keys once.

---

## 7. Data files and schemas (copy these to copy the content)

### Hallo Kurs — `courseBook.js` + `courseBookA1.js` … `B2.js`

**Module**

```js
{ id: 'a1-m1', number: 1, title: 'Ankommen', de: 'Hallo · Beruf · Familie', lessonIds: ['kb-a1-01', 'kb-a1-02', 'kb-a1-03'] }
```

**Lesson** (`kb-a1-01` style)

```js
{
  id: 'kb-a1-01',
  level: 'A1',
  number: 1,
  moduleId: 'a1-m1',
  title: 'Hallo und Guten Tag',
  de: 'Begrüßung und Befinden',
  teaser: '…',
  canDo: ['…'],
  grammar: ['sein (ich / du / er)', '…'],
  start: { de: 'Mira: Hallo! …', en: '…' },
  points: ['…'],
  tables: [{ caption, headers: ['…'], rows: [['…', '…']] }],
  words: [['Hallo', 'hello (informal)'], …],
  phrases: [['Wie heißt du?', 'What is your name?'], …],
  speak: '…',
  write: '…',
  studyIds: ['nouns-gender'], // optional
}
```

Counts in this project: **A1 24 + A2 24 + B1 24 + B2 12 = 84** course lessons. Ids are `kb-a1-01` … `kb-b2-12`.

`courseBook.js` merges the four maps and exports `courseBands`, `getCourseLesson`, `coursePlace`, `courseNeighbors`, `courseProgress`, `allCourseLessons`.

### Study lab — `courses.js`, `cases.js`, `extraLessons.js`

**Tree node:** `{ id, title, de, subgroups: [{ id, title, de, lessons: [{ id, title }] }] }`.

**Lesson body**

```js
{
  category: 'nouns',
  level: 'A1',
  title: 'Gender: der / die / das',
  teaser: '…',
  wordIds: ['mann', 'frau'],      // ids from words.js
  points: ['…'],
  examples: [{ de, en }],         // optional
  tables: [{ caption, headers, rows }],
  drills: [{ caption, help, headers, rows }], // rows may contain { answer }
}
```

**Blank cell helper in `cases.js`:** `const b = (...answer) => ({ answer: answer.length === 1 ? answer[0] : answer })`.

### Words — `words.js`

Factory: `entry(rank, de, en, pos, extra)`.

```js
{
  id,          // slugify(de) unless extra.id
  rank,        // 1…285 in this repo
  de,
  en: ['house', 'home'],
  pos,         // noun | verb | adjective | adverb | article | pronoun | …
  article,     // 'der' | 'die' | 'das' | null
  plural,
  exampleDe, exampleEn,
  note,
}
```

Helpers: `getWord`, `getWordsByIds`, `byRank`, `top100`, `top250`, `top300`, `nounsWithGender`, `translatable`, `searchWords`, `displayHeadword` (`der Haus` style), `lookupOnline`.

### Exams — `practiceExams.js`

Exam ids in this repo: `a1-practice`, `a2-practice`, `b1-practice`, `a1-grammar-quiz`. Each `pdf` path must match a file in `public/exams/`. After you edit items, run the generator.

### Curriculum — `src/data/curriculum/`

| File | Role |
| --- | --- |
| `helpers.js` | `ex`, `gp`, `cluster`, `theme`, `chunk`, `mistake`, `bookRow` |
| `segments.js` | The 9 tab ids |
| `sources.js` | `{ id, kind, title, url }` citations |
| `exams.js` | Goethe / telc / ÖSD snapshots + `GRADE_SCALE` |
| `a1.js` `a2.js` `b1.js` `b2.js` | Per-level content |
| `index.js` | `levels`, `getLevel`, `grammarGroups`, `countItems`, … |

**Grammar point (`gp`):** `{ id, group, de, en, when, rule, examples, exam, related }` — `related` are Study lab lesson ids.

**Theme:** `{ id, title, de, why, functions, books, clusters: [{ title, words: [{ de, en, extra? }] }] }`.

### Shared UI components

- `DataTable({ caption, headers, rows })` — skip if empty.
- `FillTable({ caption, help, headers, rows })` — local state for values / checked / revealed.

---

## 8. Styling contract (so a copy looks the same)

All class names live in `src/index.css`. Important layout / chrome:

- `.page` `.flag-bar` `.stripe.black|.red|.gold` `.site`
- `.masthead` `.brand` `.flag-badge` `.brand-kicker` `.brand-title` `.brand-tag` `.user-box`
- `.main-nav` `.nav-tab.active` `.sub-nav` `.sub-link` `.guest-banner`
- `.body-grid` `.sidebar` `.content` `.panel` `.page-head`
- `.btn` `.btn-gold` `.btn-red` `.linkish`
- `.grid-table` `.table-wrap` `.level-pill` `.chip` `.kicker` `.lead` `.muted` `.crumb`
- `.course-tree` `.tree-toggle` `.tree-link` `.module-grid` `.module-card`
- `.quiz-stage` `.quiz-word` `.article-btn.der|.die|.das` `.cell-ok` `.cell-bad`
- `.notes-plus` `.note-card` `.note-pic` `.progress-track`
- `.exam-item` `.exam-passage` `.exam-answers`

Copy `index.css` as-is if you want the same look. Palette: background `#0a0a0a`, gold `#ffcc00`, red `#dd0000`.

---

## 9. Copy the website completely (instructions)

### A. Fastest: copy this project

1. Copy the whole folder **except** `node_modules` and `dist` (optional: keep them; `npm install` will recreate `node_modules`).
2. Install [Node.js](https://nodejs.org/) (LTS is fine).
3. Open a terminal in the project folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the URL Vite prints (usually `http://localhost:5173`).
6. Click through Home → Course → a lesson → Practice → Exam → Dictionary → Notes → Levels.

To put it on the web:

```bash
npm run build
```

Upload the contents of `dist/` to any static host (Netlify, GitHub Pages, Nginx, a school folder). For GitHub Pages or a subpath, set Vite `base` and use a hash router **or** a 404 → `index.html` rewrite. This project uses `BrowserRouter`, so deep links need that rewrite.

If exam PDFs are missing or stale:

```bash
node scripts/generate-exam-pdfs.mjs
npm run build
```

### B. Rebuild from scratch (same stack, then paste data)

Do this if you only have this document and the `src/data` files.

1. Create a folder and run:

```bash
npm create vite@latest hallo-deutsch -- --template react
cd hallo-deutsch
npm install
npm install react-router-dom
```

2. Set `package.json` name to `german-learning`, `"type": "module"`, scripts `dev` / `build` / `lint` / `preview` as in this repo. Add `oxlint` and `@vitejs/plugin-react` if the template did not.
3. Replace `index.html` title and favicon with the German flag SVG.
4. Recreate the `src/` tree from this repo (every `.jsx` / `.js` / `.css` listed above).
5. Copy `public/` (favicon + exam PDFs) and `scripts/generate-exam-pdfs.mjs`.
6. `vite.config.js` must be:

```js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
})
```

7. `main.jsx` **must** wrap `App` in `BrowserRouter` and `AuthProvider` and import `./index.css`.
8. `App.jsx` **must** list every route in §5.
9. `npm run dev` and fix any missing import.

Without the data files you only have an empty shell. The site **is** those objects plus the page components that render them.

### C. What you must not skip

- `AuthProvider` outside `App` but inside `BrowserRouter` (login uses `useNavigate`).
- `Layout` as the parent route (otherwise no nav / sidebar).
- `public/exams/*.pdf` **or** regenerate them; exam buttons 404 otherwise.
- Same `localStorage` key names if you want an existing browser’s notes/ticks to survive.
- ESM imports: always include the `.jsx` / `.js` extension, as this project does.

### D. Check that a copy is complete

- [ ] Home shows four starting lessons and four level bands.
- [ ] Sidebar opens A1 → M1 → L1 and `/course/kb-a1-01` loads Einstieg → Abschluss.
- [ ] Tick “Done”; refresh; the tick and the progress bar stay.
- [ ] `/study/nouns-gender` and `/study/cases-pronouns` load; FillTable Check / Show / Clear works; `fuer` matches `für`.
- [ ] Articles quiz scores; Translate accepts both directions.
- [ ] `/exam/a1-practice` shows sections + answer table; PDF opens.
- [ ] Dictionary finds `Haus` / `house`; First 100 list has ranks.
- [ ] Register, refresh, still logged in; Log off → guest banner.
- [ ] Notes: add text + a picture, refresh, it is still there.
- [ ] `/levels/a1/grammar` filters groups; Ready checkboxes persist.
- [ ] `/programs/a1-starter` step 1 opens a study lesson.
- [ ] Narrow the window: sidebar stacks under the header; tabs wrap.

---

## 10. How to extend it (after you copy)

| You want to… | Edit |
| --- | --- |
| Add a Hallo Kurs lesson | New object in the right `courseBook*.js`, id in that module’s `lessonIds` |
| Add a Study page | Body in `courses.js` / `extraLessons.js` / `cases.js` **and** an `{ id, title }` in `courseTree` |
| Add a word | New `entry(...)` in `words.js` |
| Add a drill table | `drills` on a study lesson, or a new object in `casePracticeDrills` |
| Add an exam | Object in `practiceExams`, then run the PDF script |
| Add a program | Object in `programs` in `courses.js` |
| Change colours / layout | `src/index.css` `:root` and the classes in §8 |
| Add a page | File in `src/pages/`, `<Route>` in `App.jsx`, link in `Layout.jsx` if it should be in the nav |

Do not invent a backend unless you intentionally replace localStorage. The whole design is “static files + browser memory.”

---

## 11. Limits and honesty (so a copy does not surprise people)

- Accounts and notes never leave the browser. Another computer is a blank guest.
- Passwords are hashed but stored locally. Do not reuse a real password.
- Course ticks, notes, and ready lists are **per browser profile**, not per account.
- Study lab listening pages have **no audio**; they tell you to read the transcript aloud.
- Practice exams are **original classroom papers** in Goethe / telc / ÖSD *shape*. They are not official. Official Modellsätze are linked on `/exam` and in `officialSampleLinks`.
- Hallo Kurs is **inspired by** Menschen / Aspekte / Sicher unit *shape*. Dialogues and titles are original classroom writing, not photocopies of the books.
- Online dictionary needs the network and Wiktionary’s public API. It can fail; local search still works.
- `lookupOnline` is the only `fetch` in the app.

---

## 12. File → responsibility cheat sheet

| File | Responsibility |
| --- | --- |
| `src/main.jsx` | Mount, router, auth, CSS |
| `src/App.jsx` | URL table |
| `src/context/AuthContext.jsx` | Guest / register / login / session |
| `src/components/Layout.jsx` | Flag, header, navs, guest banner, sidebar slot, footer |
| `src/components/CourseNav.jsx` | Collapsible course tree |
| `src/components/DataTable.jsx` | Static tables |
| `src/components/FillTable.jsx` | Interactive blanks |
| `src/lib/text.js` | Normalise German, match answers, shuffle |
| `src/lib/drill.js` | Blank-cell protocol |
| `src/pages/*.jsx` | Screens listed in §5 |
| `src/data/courseBook*.js` | The book path |
| `src/data/courses.js` | Study outline + core lessons + programs |
| `src/data/cases.js` | Case lessons + shared drills |
| `src/data/extraLessons.js` | Listening / reading / speaking / writing extras |
| `src/data/words.js` | Classroom lexicon + Wiktionary |
| `src/data/practiceExams.js` | Papers + official links |
| `src/data/curriculum/*` | CEFR maps and citations |
| `src/index.css` | Entire look |
| `scripts/generate-exam-pdfs.mjs` | PDF from exam data |
| `public/exams/*` | Downloadable papers |

That is the whole site: a Vite React SPA, one CSS file, React Router, a local auth context, and a pile of structured German-classroom data rendered into the same dark gold-and-red shell on every page.
