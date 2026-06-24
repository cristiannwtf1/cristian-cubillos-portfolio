import React, { useState } from 'react'
import { aboutData, experienceData, contactData, techStackData, educationData, projectsData } from '@/data'
import { IconRenderer } from '@/components'

interface CVPrintProps {
  onBack: () => void
}

const CVPrint: React.FC<CVPrintProps> = ({ onBack }) => {
  const [cvType, setCvType] = useState<'completo' | 'ejecutivo'>('completo')

  const handlePrint = () => {
    window.print()
  }

  // Find contact values helper
  const getContactVal = (type: string) => {
    const method = contactData.methods.find((m) => m.type === type)
    return method ? method.value : ''
  }

  const primaryExperiences = cvType === 'completo'
    ? experienceData.items.filter(item => !['exp-emtelco', 'exp-gober', 'exp-tp'].includes(item.id))
    : experienceData.items.filter(item =>
        ['exp-goodnight', 'exp-interia', 'exp-innovasoft', 'exp-groupcos'].includes(item.id)
      )

  const secondaryExperiences = cvType === 'completo'
    ? experienceData.items.filter(item => ['exp-emtelco', 'exp-gober', 'exp-tp'].includes(item.id))
    : []

  const displayedEducation = cvType === 'completo'
    ? educationData.items
    : educationData.items.filter(item =>
        ['edu-compensar-ing', 'edu-compensar-tecno', 'edu-compensar-tec', 'cert-aws-cloud', 'cert-cisco-cyberops', 'cert-oracle-java-ai'].includes(item.id)
      )

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-6 print:bg-white print:text-slate-900 print:py-0 print:px-0">
      
      {/* Action header toolbar (Invisible during printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 no-print bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/80">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all text-sm font-semibold cursor-pointer"
        >
          <IconRenderer name="ArrowLeft" className="h-4 w-4" />
          <span>Volver al Portafolio</span>
        </button>

        {/* Version switcher */}
        <div className="flex bg-zinc-950 p-1 rounded-xl border border-zinc-800 gap-1">
          <button
            onClick={() => setCvType('completo')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              cvType === 'completo'
                ? 'bg-zinc-800 text-brand-sky'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            CV Completo (3-5 Págs)
          </button>
          <button
            onClick={() => setCvType('ejecutivo')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              cvType === 'ejecutivo'
                ? 'bg-zinc-800 text-brand-sky'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            CV Ejecutivo (2 Págs)
          </button>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-all text-sm shadow-lg shadow-emerald-500/10 cursor-pointer"
        >
          <IconRenderer name="Printer" className="h-4 w-4 text-zinc-950" />
          <span>Guardar PDF / Imprimir</span>
        </button>
      </div>

      {/* Main CV layout */}
      <article className="max-w-4xl mx-auto bg-zinc-900/20 border border-zinc-800/60 rounded-3xl p-8 sm:p-12 print:border-none print:bg-white print:p-0 shadow-2xl">
        
        {/* Header layout */}
        <header className="border-b border-zinc-800/80 pb-8 mb-8 print:border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              {/* Photo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl border border-zinc-800 bg-zinc-950 p-1 overflow-hidden print:border-slate-200 shadow-lg">
                <img
                  src={aboutData.photoSrc}
                  alt={aboutData.photoAlt}
                  className="w-full h-full object-cover rounded-xl bg-zinc-900"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-slate-900 tracking-tight font-display">
                  Cristian Cubillos
                </h1>
                <h2 className="text-base sm:text-lg font-bold text-emerald-400 mt-1 font-display">
                  Full Stack Developer | Enterprise Software & Integrations
                </h2>
              </div>
            </div>
            
            {/* Contact details */}
            <div className="space-y-2 text-xs sm:text-sm text-zinc-400 print:text-slate-600">
              <div className="flex items-center gap-2 justify-end print:justify-start">
                <span>{getContactVal('email')}</span>
                <IconRenderer name="Mail" className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 justify-end print:justify-start">
                <span>{getContactVal('phone')}</span>
                <IconRenderer name="Phone" className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 justify-end print:justify-start">
                <span>linkedin.com/in/criscubillos</span>
                <IconRenderer name="Linkedin" className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 justify-end print:justify-start">
                <span>github.com/cristiannwtf1</span>
                <IconRenderer name="Github" className="h-4 w-4" />
              </div>
            </div>
          </div>
        </header>

        {/* Professional summary */}
        <section className="mb-8 page-break-avoid">
          <h3 className="text-lg font-bold font-display text-white print:text-slate-900 uppercase tracking-wider mb-4 border-l-4 border-emerald-500 pl-3">
            Perfil Profesional
          </h3>
          <p className="text-zinc-300 print:text-slate-700 text-sm sm:text-base leading-relaxed">
            {aboutData.cvSummary || `${aboutData.biography[0]} ${aboutData.biography[1]}`}
          </p>
        </section>

        {/* Experience Timeline */}
        <section className="mb-8">
          <h3 className="text-lg font-bold font-display text-white print:text-slate-900 uppercase tracking-wider mb-6 border-l-4 border-emerald-500 pl-3">
            Experiencia Laboral
          </h3>
          <div className="space-y-8">
            {primaryExperiences.map((item) => (
              <article key={item.id} className="page-break-avoid">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-base font-bold text-white print:text-slate-900">
                    {item.role}
                  </h4>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-400 print:text-slate-700">
                    {item.startDate} - {item.endDate}
                  </span>
                </div>
                <div className="text-sm font-semibold text-zinc-400 print:text-slate-600 mb-3">
                  {item.company} {item.location && `· ${item.location}`}
                </div>
                <p className="text-sm text-zinc-300 print:text-slate-700 mb-3 leading-relaxed">
                  {item.summary}
                </p>
                <ul className="space-y-2 list-disc list-outside pl-4 text-xs sm:text-sm text-zinc-400 print:text-slate-600">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="marker:text-emerald-500/80">
                      {resp.text}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            {/* Otras experiencias previas sin viñetas para el CV Completo */}
            {secondaryExperiences.length > 0 && (
              <div className="page-break-avoid border-t border-zinc-800/80 pt-6 mt-6 print:border-slate-200">
                <h4 className="text-sm font-bold text-white print:text-slate-900 mb-3 uppercase tracking-wider">
                  Otras experiencias previas (2016 - 2021)
                </h4>
                <div className="space-y-3 text-xs sm:text-sm text-zinc-400 print:text-slate-600">
                  {secondaryExperiences.map((item) => (
                    <div key={item.id} className="flex justify-between items-start gap-2">
                      <div>
                        <span className="font-bold text-zinc-300 print:text-slate-800">{item.role}</span>
                        <span className="text-zinc-500"> · {item.company} {item.location && `· ${item.location}`}</span>
                      </div>
                      <span className="text-xs shrink-0 font-semibold text-emerald-400 print:text-slate-700">
                        {item.startDate} - {item.endDate}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nota de continuidad de una línea para el CV Ejecutivo */}
            {cvType === 'ejecutivo' && (
              <div className="page-break-avoid border-t border-zinc-800/80 pt-6 mt-4 print:border-slate-200 text-[11px] text-zinc-500 print:text-slate-600 italic">
                * Otras experiencias previas en soporte y análisis de datos (2016 - 2022): Aprendiz IT en Jazzplat Colombia, Asesor de Soporte en Emtelco, Inspector de Datos en Gobernación de Cundinamarca y Analista de BackOffice en Teleperformance.
              </div>
            )}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-8">
          <h3 className="text-lg font-bold font-display text-white print:text-slate-900 uppercase tracking-wider mb-6 border-l-4 border-emerald-500 pl-3">
            Proyectos Destacados
          </h3>
          <div className="space-y-6">
            {projectsData.projects.filter(p => p.featured).slice(0, 3).map((project) => (
              <article key={project.id} className="page-break-avoid">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-base font-bold text-white print:text-slate-900">
                    {project.name}
                  </h4>
                  <span className="text-xs font-semibold text-emerald-400 print:text-slate-700">
                    {project.status === 'completed' ? 'Completado' : 'En Desarrollo'}
                  </span>
                </div>
                <p className="text-sm text-zinc-300 print:text-slate-700 mb-2 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
                <div className="text-xs text-zinc-400 print:text-slate-500 font-semibold">
                  Tecnologías: {project.technologies.join(', ')}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-8">
          <h3 className="text-lg font-bold font-display text-white print:text-slate-900 uppercase tracking-wider mb-6 border-l-4 border-emerald-500 pl-3">
            Educación y Certificaciones
          </h3>
          <div className="space-y-4">
            {displayedEducation.map((item) => (
              <article key={item.id} className="page-break-avoid flex justify-between items-start gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white print:text-slate-900">
                    {item.degree}
                  </h4>
                  <span className="text-xs text-zinc-400 print:text-slate-600 block mt-0.5">
                    {item.institution} {item.location && `· ${item.location}`}
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-400 print:text-slate-700 shrink-0">
                  {item.year}
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* Technical stack & skills */}
        <section className="mb-8 page-break-avoid">
          <h3 className="text-lg font-bold font-display text-white print:text-slate-900 uppercase tracking-wider mb-4 border-l-4 border-emerald-500 pl-3">
            Habilidades Técnicas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {techStackData.categories.map((cat) => (
              <div key={cat.id} className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/40 print:border-slate-100 print:bg-white print:p-0">
                <h4 className="text-sm font-bold text-white print:text-slate-900 mb-2 font-display">
                  {cat.label}
                </h4>
                <ul className="space-y-1 text-xs text-zinc-400 print:text-slate-600 list-disc list-inside">
                  {cat.items.map((tech) => (
                    <li key={tech.name}>
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </article>
    </div>
  )
}

export default CVPrint
