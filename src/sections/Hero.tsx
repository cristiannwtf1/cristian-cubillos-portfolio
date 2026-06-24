import React from 'react'
import { motion } from 'framer-motion'
import { heroData } from '@/data'
import { IconRenderer } from '@/components'

const Hero: React.FC = () => {
  // Cascading animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-bg-deep"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950/15 via-bg-deep to-bg-deep -z-10" />
      <div 
        className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:32px_32px] -z-10"
        style={{ 
          maskImage: 'radial-gradient(ellipse at center, black, transparent 75%)', 
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 75%)' 
        }}
      />
      {/* Glow spots */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-sky/5 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '3s' }} />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Greeting badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-sky animate-pulse" />
            {heroData.greeting}
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            variants={itemVariants}
            id="hero-title"
            className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight mb-4"
          >
            {heroData.name}
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-6 space-y-1">
            <h2 className="text-xl sm:text-3xl font-extrabold text-brand-sky font-display">
              {heroData.title}
            </h2>
            <h3 className="text-base sm:text-lg text-zinc-400 font-medium max-w-2xl mt-4 leading-relaxed">
              {heroData.subtitle}
            </h3>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 w-full sm:w-auto"
          >
            <a
              href={heroData.ctaHref}
              id="hero-cta-primary"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-brand-sky text-zinc-950 font-bold tracking-wide hover:bg-sky-300 transition-colors shadow-lg shadow-sky-500/10"
            >
              {heroData.ctaLabel}
            </a>
            <a
              href={heroData.secondaryCtaHref}
              id="hero-cta-secondary"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-300 font-bold hover:bg-zinc-800/60 hover:text-white hover:border-zinc-700 transition-colors"
            >
              {heroData.secondaryCtaLabel}
            </a>
            <a
              href="https://github.com/cristiannwtf1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-300 font-bold hover:bg-zinc-800/60 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <IconRenderer name="Github" className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Highlighted Techs badges */}
          {heroData.highlightedTechs && (
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-2 mt-16 max-w-lg"
              aria-label="Tecnologías principales"
            >
              {heroData.highlightedTechs.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3.5 py-1 rounded-full bg-zinc-900/40 border border-zinc-800/60 text-zinc-400 text-xs font-semibold hover:border-brand-sky/20 hover:text-brand-sky transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          )}

          {/* Direct Social Icon Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mt-8"
            aria-label="Redes sociales"
          >
            {heroData.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                id={`hero-social-${link.platform.toLowerCase()}`}
                className="p-2.5 rounded-lg border border-zinc-900 bg-zinc-900/30 text-zinc-500 hover:text-brand-sky hover:border-brand-sky/10 transition-colors shadow-sm"
              >
                <IconRenderer name={link.icon} className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
