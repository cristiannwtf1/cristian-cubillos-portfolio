import React from 'react'
import { motion } from 'framer-motion'
import { techStackData } from '@/data'
import { IconRenderer, SectionHeader } from '@/components'

const TechStack: React.FC = () => {
  return (
    <section 
      id="techstack" 
      aria-labelledby="techstack-title" 
      className="py-24 bg-bg-deep relative overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Title */}
        <SectionHeader
          id="techstack-title"
          title={techStackData.sectionTitle}
          accent={techStackData.sectionAccent}
          description={techStackData.description}
          className="text-center max-w-3xl mx-auto mb-20"
        />

        {/* Categories Grid (Single View Index) */}
        <div 
          id="techstack-categories-grid" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {techStackData.categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-zinc-900">
                  <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-center text-brand-sky" aria-hidden="true">
                    <IconRenderer name={category.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-display">
                    {category.label}
                  </h3>
                </div>

                {/* Tech Pills List */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {category.items.map((tech) => (
                    <span 
                      key={tech.name} 
                      className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-900 text-zinc-400 text-xs font-semibold hover:border-brand-sky/20 hover:text-brand-sky transition-colors cursor-default"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TechStack
