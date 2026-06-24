import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { experienceData } from '@/data'
import { IconRenderer, SectionHeader, TechBadge } from '@/components'

const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      aria-labelledby="experience-title" 
      className="py-24 bg-bg-deep relative overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <SectionHeader
          id="experience-title"
          title={experienceData.sectionTitle}
          accent={experienceData.sectionAccent}
          className="text-center mb-12"
        />

        {/* Evolution Path Header */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 text-[10px] sm:text-xs text-zinc-500 font-extrabold uppercase tracking-wider bg-zinc-900/10 p-4 rounded-2xl border border-zinc-900 max-w-3xl mx-auto">
          <span>Supervisor de Operaciones</span>
          <IconRenderer name="ChevronRight" className="h-3 w-3 text-zinc-700" />
          <span>Analista IT & Automatización</span>
          <IconRenderer name="ChevronRight" className="h-3 w-3 text-zinc-700" />
          <span>Desarrollador Junior</span>
          <IconRenderer name="ChevronRight" className="h-3 w-3 text-zinc-700" />
          <span className="text-brand-sky font-extrabold">Full Stack & Integration Lead</span>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-zinc-900 ml-4 md:ml-32 py-4 space-y-12" id="experience-timeline">
          {experienceData.items.map((item, index) => {
            const isProtagonist = item.id === 'exp-goodnight'
            return (
              <motion.article 
                key={item.id} 
                id={`experience-item-${item.id}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline marker node */}
                <div 
                  className={`absolute left-0 top-1.5 -translate-x-[9px] w-[18px] h-[18px] rounded-full border-4 border-bg-deep transition-all duration-300 z-10 ${
                    isProtagonist 
                      ? 'bg-brand-sky shadow-sm shadow-sky-500/50' 
                      : 'bg-zinc-800 group-hover:bg-brand-sky/60'
                  }`} 
                  aria-hidden="true"
                >
                  {isProtagonist && (
                    <span className="absolute inset-0 rounded-full bg-brand-sky animate-ping opacity-75" />
                  )}
                </div>

                {/* Side Date (visible on MD/LG screens, absolutely positioned left) */}
                <div className="hidden md:block absolute right-full top-1.5 mr-12 text-right w-44">
                  <span className={`text-sm font-extrabold tracking-wide block ${isProtagonist ? 'text-brand-sky' : 'text-zinc-400'}`}>
                    {item.endDate}
                  </span>
                  <span className="text-xs text-zinc-500 block">
                    {item.startDate}
                  </span>
                </div>

                {/* Card Container */}
                <div 
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                    isProtagonist
                      ? 'border-brand-sky/20 bg-zinc-900/25 shadow-xl shadow-sky-500/[0.01]'
                      : 'border-zinc-900 bg-zinc-900/10 hover:border-zinc-800'
                  }`}
                >
                  
                  {/* Mobile dates display (hidden on larger screens) */}
                  <div className={`md:hidden text-xs font-bold mb-2 ${isProtagonist ? 'text-brand-sky' : 'text-zinc-400'}`}>
                    {item.startDate} - {item.endDate}
                  </div>

                  {/* Role and Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-extrabold text-white tracking-tight">
                          {item.role}
                        </h3>
                        {isProtagonist && (
                          <span className="text-[10px] font-extrabold uppercase bg-brand-sky/10 text-brand-sky px-2 py-0.5 rounded border border-brand-sky/20 tracking-wider">
                            Rol Destacado
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-400 mt-1">
                        {item.companyUrl ? (
                          <a 
                            href={item.companyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-brand-sky flex items-center gap-1 group/link transition-colors"
                          >
                            <span>{item.company}</span>
                            <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <span>{item.company}</span>
                        )}
                        {item.location && (
                          <span className="text-zinc-650">· {item.location}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
                    {item.summary}
                  </p>

                  {/* Responsibilities list */}
                  <ul className="space-y-2.5 mb-6 list-disc list-outside pl-4 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="marker:text-brand-sky/60">
                        {resp.text}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/80">
                    {item.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>

                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
