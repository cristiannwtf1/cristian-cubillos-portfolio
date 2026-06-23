import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { experienceData } from '@/data'

const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      aria-labelledby="experience-title" 
      className="py-24 bg-zinc-900/30 border-y border-zinc-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 id="experience-title" className="text-3xl sm:text-5xl font-bold tracking-tight">
            {experienceData.sectionTitle}{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {experienceData.sectionAccent}
            </span>
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline container */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-32 py-4 space-y-12" id="experience-timeline">
          {experienceData.items.map((item, index) => (
            <motion.article 
              key={item.id} 
              id={`experience-item-${item.id}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline marker node */}
              <div 
                className="absolute left-0 top-1.5 -translate-x-[9px] w-[18px] h-[18px] rounded-full border-4 border-zinc-950 bg-zinc-800 group-hover:bg-emerald-400 group-hover:border-emerald-500/20 transition-all duration-300 z-10" 
                aria-hidden="true"
              />

              {/* Side Date (visible on MD/LG screens, absolutely positioned left) */}
              <div className="hidden md:block absolute right-full top-1.5 mr-12 text-right w-44">
                <span className="text-sm font-bold text-zinc-400 tracking-wide block">
                  {item.endDate}
                </span>
                <span className="text-xs text-zinc-500 block">
                  {item.startDate}
                </span>
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-emerald-500/20 transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-emerald-500/[0.02]">
                
                {/* Mobile dates display (hidden on larger screens) */}
                <div className="md:hidden text-xs font-semibold text-emerald-400 mb-2">
                  {item.startDate} - {item.endDate}
                </div>

                {/* Role and Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-emerald-400 mt-1">
                      {item.companyUrl ? (
                        <a 
                          href={item.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1 group/link"
                        >
                          {item.company}
                          <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <span>{item.company}</span>
                      )}
                      {item.location && (
                        <span className="text-zinc-500">· {item.location}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Responsibilities list */}
                <ul className="space-y-3 mb-6 list-disc list-outside pl-4 text-sm text-zinc-400 leading-relaxed">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="marker:text-emerald-500/60">
                      {resp.text}
                    </li>
                  ))}
                </ul>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
                  {item.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="tech-badge px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800/80 text-zinc-400 text-xs font-semibold hover:border-emerald-500/20 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
