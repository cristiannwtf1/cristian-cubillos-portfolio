import React from 'react'
import { ArrowLeft, Printer, Mail, Linkedin, Github, Phone, Globe } from 'lucide-react'
import { aboutData, experienceData, contactData, techStackData } from '@/data'

interface CVPrintProps {
  onBack: () => void
}

const CVPrint: React.FC<CVPrintProps> = ({ onBack }) => {
  const handlePrint = () => {
    window.print()
  }

  // Find contact values helper
  const getContactVal = (type: string) => {
    const method = contactData.methods.find((m) => m.type === type)
    return method ? method.value : ''
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-6 print:bg-white print:text-slate-900 print:py-0 print:px-0">
      
      {/* Action header toolbar (Invisible during printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between no-print bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/80">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all text-sm font-semibold"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver al Portafolio</span>
        </button>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-all text-sm shadow-lg shadow-emerald-500/10 cursor-pointer"
        >
          <Printer className="h-4 w-4" />
          <span>Guardar PDF / Imprimir</span>
        </button>
      </div>

      {/* Main CV layout */}
      <article className="max-w-4xl mx-auto bg-zinc-900/20 border border-zinc-800/60 rounded-3xl p-8 sm:p-12 print:border-none print:bg-white print:p-0 shadow-2xl">
        
        {/* Header layout */}
        <header className="border-b border-zinc-800/80 pb-8 mb-8 print:border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white print:text-slate-900 tracking-tight font-display">
                Cristian Cubillos
              </h1>
              <h2 className="text-lg sm:text-xl font-bold text-emerald-400 mt-2 font-display">
                Ingeniero de Sistemas · Full Stack & Integration Specialist
              </h2>
            </div>
            
            {/* Contact details */}
            <div className="space-y-2 text-xs sm:text-sm text-zinc-400 print:text-slate-600">
              <div className="flex items-center gap-2 justify-end print:justify-start">
                <span>{getContactVal('email')}</span>
                <Mail className="h-4 w-4 text-emerald-400 print:text-slate-700" />
              </div>
              <div className="flex items-center gap-2 justify-end print:justify-start">
                <span>{getContactVal('phone')}</span>
                <Phone className="h-4 w-4 text-emerald-400 print:text-slate-700" />
              </div>
              <div className="flex items-center gap-2 justify-end print:justify-start">
                <span>linkedin.com/in/criscubillos</span>
                <Linkedin className="h-4 w-4 text-emerald-400 print:text-slate-700" />
              </div>
              <div className="flex items-center gap-2 justify-end print:justify-start">
                <span>github.com/cristiannwtf1</span>
                <Github className="h-4 w-4 text-emerald-400 print:text-slate-700" />
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
            {aboutData.biography[0]} {aboutData.biography[1]}
          </p>
        </section>

        {/* Experience Timeline */}
        <section className="mb-8">
          <h3 className="text-lg font-bold font-display text-white print:text-slate-900 uppercase tracking-wider mb-6 border-l-4 border-emerald-500 pl-3">
            Experiencia Laboral
          </h3>
          <div className="space-y-8">
            {experienceData.items.map((item) => (
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
