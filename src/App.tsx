import React, { useState, useEffect } from 'react'
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
  CVPrint,
} from './sections'

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<'portfolio' | 'cv'>('portfolio')

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#cv') {
        setViewMode('cv')
      } else {
        setViewMode('portfolio')
      }
    }

    // Initial check on mount
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateToPortfolio = () => {
    window.location.hash = ''
    setViewMode('portfolio')
  }

  if (viewMode === 'cv') {
    return <CVPrint onBack={navigateToPortfolio} />
  }

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
