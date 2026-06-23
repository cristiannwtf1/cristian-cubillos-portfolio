import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navData, heroData } from '@/data'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Active section detection
      const sections = navData.map((item) => document.getElementById(item.href))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navData[i].href)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-glass border-b border-zinc-800/50 py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand logo */}
        <a 
          href="#hero" 
          id="nav-brand-logo" 
          className="text-xl font-bold font-display text-white tracking-tight flex items-center gap-2 group"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-emerald-400 font-extrabold group-hover:text-cyan-400 transition-colors">CC</span>
          <span className="hover:text-emerald-400 transition-colors">Cristian Cubillos</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-1" aria-label="Navegación de escritorio">
            {navData.map((item) => {
              const isActive = activeSection === item.href
              return (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  id={`nav-link-${item.href}`}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {heroData.cvUrl && (
            <a
              href={heroData.cvUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-emerald-500/10 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/20 text-xs font-semibold transition-all duration-200"
            >
              <Download className="h-3.5 w-3.5" />
              <span>CV</span>
            </a>
          )}
        </div>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden text-zinc-400 hover:text-white focus:outline-none p-1.5 rounded-lg border border-zinc-800/40 bg-zinc-900/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Abrir menú"
          id="mobile-menu-trigger"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-glass border-b border-zinc-800/80 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navData.map((item) => {
                const isActive = activeSection === item.href
                return (
                  <a
                    key={item.href}
                    href={`#${item.href}`}
                    id={`nav-link-mobile-${item.href}`}
                    className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400'
                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              })}
              {heroData.cvUrl && (
                <a
                  href={heroData.cvUrl}
                  download
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-emerald-400 text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Download className="h-4 w-4" />
                  <span>Descargar Hoja de Vida</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
