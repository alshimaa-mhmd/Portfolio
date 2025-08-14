import { About } from './About'
import { Contact } from './Contact'
import { Footer } from './Footer'
import {Header} from './Header'
import { Hero } from './Hero'

import { Projects } from './Projects'
import { Skills } from './Skills'

import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'


function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
     <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
       </main>
      <Footer /> 
    </div>
     
     </m.div>
      </AnimatePresence>
    </LazyMotion>


  )
}

export default Home
