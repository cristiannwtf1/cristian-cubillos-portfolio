import React from 'react'
import {
  Navbar,
  Hero,
  About,
  Impact,
  Experience,
  Projects,
  TechStack,
  Contact,
  Footer,
} from './sections'

const App: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
