import React from 'react'
import { motion } from 'framer-motion'
import { aboutData } from '@/data'

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      aria-labelledby="about-title" 
      className="py-24 bg-zinc-900/30 border-y border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="about-title" className="text-3xl sm:text-5xl font-bold tracking-tight">
            {aboutData.sectionTitle}{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {aboutData.sectionAccent}
            </span>
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column: Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed"
          >
            {aboutData.biography.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

          {/* Right column: Avatar and highlights */}
          <div className="lg:col-span-5 flex flex-col items-center gap-8">
            {/* Avatar Frame with gradient borders */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-full h-full rounded-3xl border border-zinc-700/50 bg-zinc-950 p-2 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent z-10 opacity-60 pointer-events-none" />
                
                {/* Fallback image using a sleek placeholder if the photo isn't available */}
                <img
                  src={aboutData.photoSrc}
                  alt={aboutData.photoAlt}
                  id="about-profile-photo"
                  className="w-full h-full object-cover rounded-2xl bg-zinc-900 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to high-tech gradient circle if image load fails
                    e.currentTarget.style.display = 'none'
                    const parent = e.currentTarget.parentElement
                    if (parent) {
                      const placeholder = document.createElement('div')
                      placeholder.className = 'w-full h-full rounded-2xl bg-gradient-to-br from-zinc-850 to-zinc-950 flex flex-col items-center justify-center text-emerald-400 font-display font-semibold'
                      placeholder.innerHTML = `<span class="text-5xl font-extrabold tracking-wider">CC</span><span class="text-xs text-zinc-500 mt-2">Full Stack Developer</span>`
                      parent.appendChild(placeholder)
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Strengths grid under the main layout */}
        <div id="about-highlights" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {aboutData.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 hover:bg-zinc-800/40 hover:border-emerald-500/20 transition-all duration-300 hover:scale-[1.02] group"
            >
              <h4 className="text-lg font-bold font-display text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {highlight.label}
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
