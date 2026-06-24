import React from 'react'
import { motion } from 'framer-motion'
import { projectsData } from '@/data'
import { IconRenderer, SectionHeader, TechBadge } from '@/components'

const Projects: React.FC = () => {
  // Find GoodNight as the featured main project
  const mainProject = projectsData.projects.find(p => p.id === 'proj-goodnight')
  // Find other projects
  const secondaryProjects = projectsData.projects.filter(p => p.id !== 'proj-goodnight')

  return (
    <section 
      id="projects" 
      aria-labelledby="projects-title" 
      className="py-24 bg-bg-deep relative overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          id="projects-title"
          title={projectsData.sectionTitle}
          accent={projectsData.sectionAccent}
          description={projectsData.description}
          className="text-center max-w-3xl mx-auto mb-20"
        />

        {/* Case Study 1: GoodNight Business Hub (Main Feature) */}
        {mainProject && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-3xl border border-zinc-900 bg-zinc-900/10 p-6 sm:p-10 shadow-xl"
            id={`project-item-${mainProject.id}`}
          >
            {/* Header / Meta */}
            <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
              {/* Left Column: Cover and Meta */}
              <div className="lg:w-5/12 space-y-6">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 aspect-video">
                  {mainProject.imageSrc ? (
                    <img 
                      src={mainProject.imageSrc} 
                      alt={mainProject.imageAlt || mainProject.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-950 flex items-center justify-center">
                      <span className="text-zinc-700 font-bold uppercase tracking-widest text-lg">
                        {mainProject.name}
                      </span>
                    </div>
                  )}
                  <span className="absolute top-4 right-4 z-20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-brand-sky/10 text-brand-sky border border-brand-sky/20">
                    Caso de Estudio Principal
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                    {mainProject.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {mainProject.tags.map(t => (
                      <span key={t} className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800/80">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {mainProject.longDescription || mainProject.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-zinc-900">
                  <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Tecnologías Clave</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {mainProject.technologies.map(tech => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="pt-4 flex items-center gap-4">
                  {mainProject.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-sky hover:underline"
                    >
                      <IconRenderer name={link.icon} className="h-4 w-4" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column: Case Study Details */}
              <div className="lg:w-7/12 space-y-6 lg:border-l lg:border-zinc-900 lg:pl-8">
                {mainProject.problemSolved && (
                  <div>
                    <h4 className="text-xs font-bold text-brand-sky uppercase tracking-wider mb-2 font-display">El Problema Resuelto</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                      {mainProject.problemSolved}
                    </p>
                  </div>
                )}

                {mainProject.architecture && (
                  <div>
                    <h4 className="text-xs font-bold text-brand-sky uppercase tracking-wider mb-2 font-display">Arquitectura & Integración</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                      {mainProject.architecture}
                    </p>
                  </div>
                )}

                {mainProject.modules && (
                  <div>
                    <h4 className="text-xs font-bold text-brand-sky uppercase tracking-wider mb-3 font-display">Módulos Desarrollados</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-400 text-sm font-sans">
                      {mainProject.modules.map((mod, idx) => (
                        <li key={idx} className="flex items-center gap-2 bg-zinc-900/30 p-2.5 rounded-lg border border-zinc-900 hover:border-zinc-800/80 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-sky shrink-0" />
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        )}

        {/* Secondary Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {secondaryProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-zinc-900 bg-zinc-900/10 p-6 sm:p-8 flex flex-col justify-between"
              id={`project-item-${project.id}`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase bg-zinc-900/80 text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded">
                    Caso de Estudio
                  </span>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed">
                  {project.longDescription || project.description}
                </p>

                {project.problemSolved && (
                  <div>
                    <h4 className="text-xs font-bold text-brand-sky uppercase tracking-wider mb-1 font-display">El Reto / Problema</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                      {project.problemSolved}
                    </p>
                  </div>
                )}

                {project.architecture && (
                  <div>
                    <h4 className="text-xs font-bold text-brand-sky uppercase tracking-wider mb-1 font-display">Solución Técnica</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                      {project.architecture}
                    </p>
                  </div>
                )}

                {project.modules && (
                  <div>
                    <h4 className="text-xs font-bold text-brand-sky uppercase tracking-wider mb-2 font-display">Enfoque Clave</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.modules.map((mod, idx) => (
                        <span key={idx} className="text-[11px] text-zinc-400 bg-zinc-900/20 px-2.5 py-1 rounded border border-zinc-900">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map(tech => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  {project.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-sky hover:underline"
                    >
                      <IconRenderer name={link.icon} className="h-3.5 w-3.5" />
                      <span>{link.label}</span>
                    </a>
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

export default Projects
