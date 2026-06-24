import React from 'react'
import { motion } from 'framer-motion'
import { impactData } from '@/data'
import { SectionHeader } from '@/components'

const Impact: React.FC = () => {
  return (
    <section 
      id="impact" 
      aria-labelledby="impact-title" 
      className="py-24 bg-bg-deep relative overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header content */}
        <SectionHeader
          id="impact-title"
          title={impactData.sectionTitle}
          accent={impactData.sectionAccent}
          description={impactData.intro}
          className="text-center max-w-3xl mx-auto mb-20"
        />

        {/* Metrics Grid */}
        <div id="impact-metrics-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactData.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-8 rounded-2xl border border-zinc-900 bg-zinc-900/10 hover:border-zinc-800 hover:bg-zinc-900/20 transition-all duration-300 group"
              id={`impact-metric-${index}`}
            >
              {/* Metric Value */}
              <span className="block text-5xl sm:text-6xl font-extrabold text-brand-sky tracking-tight mb-4 font-display">
                {metric.value}
              </span>

              {/* Metric Title */}
              <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-2 font-display">
                {metric.label}
              </h3>
              
              {/* Description */}
              {metric.description && (
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {metric.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
