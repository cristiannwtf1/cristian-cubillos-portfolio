import React, { useState } from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { contactData } from '@/data'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (contactData.formActionUrl) {
        // Real Formspree / API HTTP POST request
        const response = await fetch(contactData.formActionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: formData.subject,
            message: formData.message,
          }),
        })

        if (response.ok) {
          setSubmitStatus('success')
          setFormData({ name: '', email: '', subject: '', message: '' })
        } else {
          setSubmitStatus('error')
        }
      } else {
        // Fallback simulate API form submission delay
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log('Formulario de contacto enviado (simulado):', formData)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (err) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Helper to dynamically render contact method icons
  const renderMethodIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName]
    return IconComponent ? <IconComponent className="h-6 w-6 text-emerald-400 group-hover:scale-110 transition-transform" /> : null
  }

  return (
    <section 
      id="contact" 
      aria-labelledby="contact-title" 
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      {/* Dynamic background blur glow */}
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            id="contact-title"
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            {contactData.sectionTitle}{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {contactData.sectionAccent}
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
            {contactData.description}
          </motion.p>
        </div>

        {/* Form & Connections Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch contact-container">
          
          {/* Left Column: Direct Connections */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6 contact-methods"
          >
            <div className="space-y-6">
              {contactData.methods.map((method) => (
                <a
                  key={method.type}
                  href={method.href}
                  id={`contact-method-${method.type}`}
                  target={method.type !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-emerald-500/20 hover:scale-[1.02] transition-all duration-300 group shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-850 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                    {renderMethodIcon(method.icon)}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      {method.label}
                    </h4>
                    <p className="text-base font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors font-display break-all">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Extra callout box */}
            <div className="p-6 rounded-2xl border border-zinc-850 bg-zinc-950/60 flex flex-col justify-center">
              <h5 className="text-sm font-bold text-white mb-2 font-display">¿Quieres agilizar procesos?</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Escríbeme si buscas soluciones en integraciones de software, APIs robustas y automatizaciones para liberar tiempo operativo en tu organización.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Premium Contact Form */}
          {contactData.showForm && (
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 shadow-xl shadow-black/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/80 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ejemplo@correo.com"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/80 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Integración de Sistemas, Propuesta de Trabajo..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/80 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hola Cristian, me gustaría conversar contigo sobre..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/80 transition-all"
                  />
                </div>

                {/* Submit button / feedback message */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-bold tracking-wide hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-zinc-950" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensaje'
                    )}
                  </button>

                  {/* Status displays */}
                  {submitStatus === 'success' && (
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
                      ¡Mensaje enviado con éxito!
                    </span>
                  )}
                  {submitStatus === 'error' && (
                    <span className="text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-4 py-2 rounded-xl">
                      Hubo un error, por favor intenta de nuevo.
                    </span>
                  )}
                </div>
              </form>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  )
}

export default Contact
