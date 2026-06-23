import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { projectsData } from '@/data'

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Todos')

  // Available tags to filter by (dynamically generated or curated based on requirements)
  const filterCategories = ['Todos', 'Integration', 'Automation', 'Backend', 'Frontend', 'Enterprise']

  // Filter projects list
  const filteredProjects = projectsData.projects.filter((project) => {
    if (filter === 'Todos') return true
    return project.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
  })

  // Helper to dynamically render project link icons
  const renderLinkIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName]
    return IconComponent ? <IconComponent className="h-4 w-4" /> : null
  }

  return (
    <section 
      id="projects" 
      aria-labelledby="projects-title" 
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            id="projects-title"
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            {projectsData.sectionTitle}{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {projectsData.sectionAccent}
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
            {projectsData.description}
          </motion.p>
        </div>

        {/* Filter categories buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold tracking-wide border transition-all duration-300 ${
                filter === category
                  ? 'bg-emerald-500 border-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/10'
                  : 'bg-zinc-900/50 border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700/80'
              }`}
            >
              {category === 'Todos' ? 'Todos' : category}
            </button>
          ))}
        </motion.div>

        {/* Grid and list container with AnimatePresence for layout morphing */}
        <motion.div 
          layout
          id="projects-grid" 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                id={`project-item-${project.id}`}
                className="group flex flex-col h-full rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-emerald-500/20 hover:scale-[1.01] transition-all duration-300 overflow-hidden shadow-lg shadow-black/10"
              >
                {/* Visual Cover Header (fallback if image is missing) */}
                <div className="relative h-48 bg-zinc-950 overflow-hidden border-b border-zinc-800/80">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent z-10" />
                  
                  {project.imageSrc ? (
                    <img 
                      src={project.imageSrc} 
                      alt={project.imageAlt || project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    // Sleek gradient fallback with tech wireframe grid look
                    <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center relative">
                      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
                      <span className="text-xl font-bold font-display text-zinc-700 uppercase tracking-widest">
                        {project.name.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>
                  )}

                  {/* Status Badge */}
                  <span className={`absolute top-4 right-4 z-20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    project.status === 'completed'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {project.status === 'completed' ? 'Completado' : 'En Progreso'}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-badge px-2 py-0.5 rounded-md bg-zinc-950 text-zinc-500 text-[10px] font-semibold tracking-wide uppercase border border-zinc-850">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & description */}
                  <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-emerald-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack items inside project */}
                  <div className="project-techs flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge-small px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 text-xs border border-zinc-800/80">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="project-links flex items-center gap-4 pt-4 border-t border-zinc-800/60">
                    {project.links.map((link, idx) => (
                      <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors"
                      >
                        {renderLinkIcon(link.icon)}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
