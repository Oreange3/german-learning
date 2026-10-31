import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import AdminOnly from './components/AdminOnly.jsx'
import About from './pages/About.jsx'
import GenderGame from './pages/GenderGame.jsx'
import LesenGame from './pages/LesenGame.jsx'
import Login from './pages/Login.jsx'
import Notes from './pages/Notes.jsx'
import PronounGame from './pages/PronounGame.jsx'

const loadOrange = () => import('./pages/OrangeCourse.jsx')
const loadOldCourse = () => import('./pages/Course.jsx')
const loadStudy = () => import('./pages/Study.jsx')
const loadLesson = () => import('./pages/Lesson.jsx')
const loadLevels = () => import('./pages/Levels.jsx')
const loadLevelPage = () => import('./pages/LevelPage.jsx')
const loadPrograms = () => import('./pages/Programs.jsx')
const loadPractice = () => import('./pages/Practice.jsx')
const loadArticles = () => import('./pages/PracticeArticles.jsx')
const loadTranslate = () => import('./pages/PracticeTranslate.jsx')
const loadCases = () => import('./pages/PracticeCases.jsx')
const loadDictionary = () => import('./pages/Dictionary.jsx')
const loadExam = () => import('./pages/Exam.jsx')

function Missing() {
  return (
    <section className="panel">
      <h2>Page not found</h2>
      <p>Use the tabs above.</p>
    </section>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<GenderGame />} />
        <Route path="/lesen" element={<LesenGame />} />
        <Route path="/pronouns" element={<PronounGame />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<AdminOnly load={loadOrange} />} />
        <Route path="/course/:lessonId" element={<AdminOnly load={loadOldCourse} />} />
        <Route path="/archive" element={<AdminOnly load={loadOldCourse} />} />
        <Route path="/archive/:lessonId" element={<AdminOnly load={loadOldCourse} />} />
        <Route path="/study" element={<AdminOnly load={loadStudy} />} />
        <Route path="/study/:lessonId" element={<AdminOnly load={loadLesson} />} />
        <Route path="/levels" element={<AdminOnly load={loadLevels} />} />
        <Route path="/levels/:levelId" element={<AdminOnly load={loadLevelPage} />} />
        <Route path="/levels/:levelId/:segment" element={<AdminOnly load={loadLevelPage} />} />
        <Route path="/programs" element={<AdminOnly load={loadPrograms} />} />
        <Route path="/programs/:programId" element={<AdminOnly load={loadPrograms} />} />
        <Route path="/practice" element={<AdminOnly load={loadPractice} />} />
        <Route path="/practice/articles" element={<AdminOnly load={loadArticles} />} />
        <Route path="/practice/translate" element={<AdminOnly load={loadTranslate} />} />
        <Route path="/practice/cases" element={<AdminOnly load={loadCases} />} />
        <Route path="/dictionary" element={<AdminOnly load={loadDictionary} />} />
        <Route path="/dictionary/:list" element={<AdminOnly load={loadDictionary} />} />
        <Route path="/exam" element={<AdminOnly load={loadExam} />} />
        <Route path="/exam/:examId" element={<AdminOnly load={loadExam} />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  )
}
