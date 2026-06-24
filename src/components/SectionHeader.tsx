import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  id: string
  title: string
  accent: string
  description?: string
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  id,
  title,
  accent,
  description,
  className = "text-center mb-16"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <h2 id={id} className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
        {title}{' '}
        <span className="text-brand-sky">
          {accent}
        </span>
      </h2>
      <div className="w-12 h-[2px] bg-brand-sky/60 mx-auto mt-4 rounded-full" />
      {description && (
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader
