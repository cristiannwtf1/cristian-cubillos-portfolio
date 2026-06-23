import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { techStackData } from '@/data'

const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState(techStackData.categories[0].id)

  const activeCategory = techStackData.categories.find(
    (cat) => cat.id === activeTab
  )

  // Helper to dynamically render category icons
  const renderCategoryIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName]
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null
  }

  // Helper to calculate bar percentage based on proficiency level
  const getProficiencyPercentage = (level: string) => {
    switch (level) {
      case 'expert': return '90%'
      case 'advanced': return '75%'
      case 'intermediate': return '55%'
      case 'learning': return '30%'
      default: return '50%'
    }
  }

  // Helper to translate level names
  const translateLevel = (level: string) => {
    switch (level) {
      case 'expert': return 'Experto'
      case 'advanced': return 'Avanzado'
      case 'intermediate': return 'Intermedio'
      case 'learning': return 'Aprendiendo'
      default: return level
    }
  }

  return (
    <section 
      id="techstack" 
      aria-labelledby="techstack-title" 
      className="py-24 bg-zinc-900/30 border-y border-zinc-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            id="techstack-title"
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            {techStackData.sectionTitle}{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {techStackData.sectionAccent}
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            {techStackData.description}
          </motion.p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 mb-12" id="techstack-categories">
          {techStackData.categories.map((category) => {
            const isActive = activeTab === category.id
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold tracking-wide border transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-500 border-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/10'
                    : 'bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700/80'
                }`}
              >
                {renderCategoryIcon(category.icon)}
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>

        {/* Active Category Panel */}
        <div className="min-h-[250px] relative">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                id={`tech-category-${activeCategory.id}`}
              >
                {activeCategory.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-200"
                  >
                    {/* Item header */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-white tracking-wide font-display">
                        {tech.name}
                      </span>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-medium text-emerald-400">
                          {translateLevel(tech.level)}
                        </span>
                        {tech.yearsOfExperience && (
                          <span className="text-zinc-500 font-semibold bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900">
                            {tech.yearsOfExperience} {tech.yearsOfExperience === 1 ? 'año' : 'años'}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Skill Bar Background */}
                    <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: getProficiencyPercentage(tech.level) }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export default TechStack
