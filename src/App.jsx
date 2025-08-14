// import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import {Header} from './components/Header'
import { Hero } from './components/Hero'
import Home from './components/Home'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Route, Routes } from 'react-router'
import ProjectsPage from './components/ProjectsPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <AnimatePresence mode="wait">
    <ScrollToTop />
    <Routes location={location} key={location.pathname}>
      <Route path="/" element = {<Home />} />
      <Route path="projects" element={<ProjectsPage />} />
    </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
