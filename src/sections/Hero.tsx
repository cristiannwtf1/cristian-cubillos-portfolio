import React from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { heroData } from '@/data'

const Hero: React.FC = () => {
  // Cascading animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  // Dynamic social icon helper
  const renderSocialIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName]
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null
  }

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-950"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/20 via-zinc-950 to-zinc-950 -z-10" />
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] -z-10"
        style={{ maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)' }}
      />
      {/* Glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

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
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            {heroData.greeting}
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            variants={itemVariants}
            id="hero-title"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-4"
          >
            {heroData.name}
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-6 space-y-1">
            <h2 className="text-xl sm:text-2xl font-semibold text-emerald-400 font-display">
              {heroData.title}
            </h2>
            <h3 className="text-lg sm:text-xl text-zinc-400 font-medium">
              {heroData.subtitle}
            </h3>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10"
          >
            {heroData.description}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
          >
            <a
              href={heroData.ctaHref}
              id="hero-cta-primary"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-bold tracking-wide hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
            >
              {heroData.ctaLabel}
            </a>
            <a
              href={heroData.secondaryCtaHref}
              id="hero-cta-secondary"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-zinc-700/60 bg-zinc-900/40 text-zinc-300 font-bold hover:bg-zinc-800/40 hover:text-white hover:border-zinc-500/80 transition-all duration-300 hover:scale-[1.02]"
            >
              {heroData.secondaryCtaLabel}
            </a>
            {heroData.cvUrl && (
              <a
                href={heroData.cvUrl}
                download
                id="hero-cta-cv"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <LucideIcons.Download className="h-4 w-4" />
                <span>Descargar CV</span>
              </a>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
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
                className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105 shadow-sm"
              >
                {renderSocialIcon(link.icon)}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
