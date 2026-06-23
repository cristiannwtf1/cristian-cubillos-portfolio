import React from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { impactData } from '@/data'

const Impact: React.FC = () => {
  // Helper to dynamically render metrics icons
  const renderMetricIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName]
    return IconComponent ? <IconComponent className="h-6 w-6 text-emerald-400" /> : null
  }

  return (
    <section 
      id="impact" 
      aria-labelledby="impact-title" 
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      {/* Background glow spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            id="impact-title"
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            {impactData.sectionTitle}{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {impactData.sectionAccent}
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            {impactData.intro}
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div id="impact-metrics-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="relative p-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-emerald-500/30 transition-all duration-300 group hover:shadow-xl hover:shadow-black/20 hover:scale-[1.02]"
              id={`impact-metric-${index}`}
            >
              {/* Icon Container with glowing effect on hover */}
              <div 
                className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-850 flex items-center justify-center mb-6 group-hover:border-emerald-400/30 transition-colors duration-300" 
                aria-hidden="true"
              >
                {renderMetricIcon(metric.icon)}
              </div>

              {/* Metric Value */}
              <span className="block text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                {metric.value}
              </span>

              {/* Metric Title & Description */}
              <h3 className="text-base font-bold text-zinc-200 mb-2 font-display">
                {metric.label}
              </h3>
              
              {metric.description && (
                <p className="text-sm text-zinc-400 leading-relaxed">
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
