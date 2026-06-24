import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { contactData } from '@/data'
import { IconRenderer, SectionHeader } from '@/components'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [validationError, setValidationError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (formData.name.trim().length < 2) {
      return 'El nombre debe tener al menos 2 caracteres.'
    }
    if (formData.name.trim().length > 100) {
      return 'El nombre no debe exceder los 100 caracteres.'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      return 'Por favor, ingresa un correo electrónico válido.'
    }
    if (formData.email.trim().length > 150) {
      return 'El correo no debe exceder los 150 caracteres.'
    }
    if (formData.subject.trim().length > 150) {
      return 'El asunto no debe exceder los 150 caracteres.'
    }
    if (formData.message.trim().length < 10) {
      return 'El mensaje debe tener al menos 10 caracteres.'
    }
    if (formData.message.trim().length > 2000) {
      return 'El mensaje no debe exceder los 2000 caracteres.'
    }
    // Prevent basic HTML/Script injection attacks
    const htmlPattern = /<[^>]*>/
    if (
      htmlPattern.test(formData.name) || 
      htmlPattern.test(formData.subject) || 
      htmlPattern.test(formData.message)
    ) {
      return 'No se permite el uso de etiquetas HTML en los campos.'
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError(null)
    
    const error = validateForm()
    if (error) {
      setValidationError(error)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (contactData.formActionUrl) {
        const response = await fetch(contactData.formActionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            _subject: formData.subject.trim(),
            message: formData.message.trim(),
          }),
        })

        if (response.ok) {
          setSubmitStatus('success')
          setFormData({ name: '', email: '', subject: '', message: '' })
        } else {
          setSubmitStatus('error')
        }
      } else {
        // Fallback simulation
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
      aria-labelledby="contact-title" 
      className="py-24 bg-bg-deep relative overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <SectionHeader
          id="contact-title"
          title={contactData.sectionTitle}
          accent={contactData.sectionAccent}
          description={contactData.description}
          className="text-center max-w-3xl mx-auto mb-20"
        />

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Direct channels */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between gap-4"
          >
            <div className="space-y-3">
              {contactData.methods.map((method) => (
                <a
                  key={method.type}
                  href={method.href}
                  id={`contact-method-${method.type}`}
                  target={method.type !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-900/10 hover:border-zinc-800 hover:bg-zinc-900/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-center text-brand-sky group-hover:scale-105 transition-transform">
                    <IconRenderer name={method.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                      {method.label}
                    </h4>
                    <p className="text-sm font-semibold text-white mt-0.5 group-hover:text-brand-sky transition-colors font-display break-all">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Business callout */}
            <div className="p-5 rounded-xl border border-zinc-900 bg-zinc-900/5">
              <h5 className="text-xs font-bold text-white mb-1.5 font-display uppercase tracking-wider text-brand-sky">¿Listo para automatizar?</h5>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Contáctame si buscas optimizar tu flujo operativo, conectar APIs (Meta WhatsApp API, Alegra ERP, CRMs) y diseñar interfaces que potencien tu negocio.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          {contactData.showForm && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-zinc-900 bg-zinc-900/10"
            >
              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                {validationError && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-400 font-sans">
                    {validationError}
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] font-bold text-zinc-550 uppercase tracking-wider mb-1.5 font-display">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-900 bg-zinc-950/60 text-slate-100 text-sm placeholder-zinc-650 focus:outline-none focus:border-brand-sky/60 focus:ring-1 focus:ring-brand-sky/60 transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] font-bold text-zinc-550 uppercase tracking-wider mb-1.5 font-display">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={150}
                      placeholder="ejemplo@correo.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-900 bg-zinc-950/60 text-slate-100 text-sm placeholder-zinc-650 focus:outline-none focus:border-brand-sky/60 focus:ring-1 focus:ring-brand-sky/60 transition-all font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-[10px] font-bold text-zinc-550 uppercase tracking-wider mb-1.5 font-display">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    maxLength={150}
                    placeholder="Integración de Sistemas, Propuesta de Trabajo..."
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-900 bg-zinc-950/60 text-slate-100 text-sm placeholder-zinc-650 focus:outline-none focus:border-brand-sky/60 focus:ring-1 focus:ring-brand-sky/60 transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-bold text-zinc-550 uppercase tracking-wider mb-1.5 font-display">
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    maxLength={2000}
                    placeholder="Hola Cristian, me gustaría conversar contigo sobre..."
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-900 bg-zinc-950/60 text-slate-100 text-sm placeholder-zinc-650 focus:outline-none focus:border-brand-sky/60 focus:ring-1 focus:ring-brand-sky/60 transition-all font-sans"
                  />
                </div>

                {/* Submit button / status feedback */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="px-6 py-3 rounded-xl bg-brand-sky hover:bg-sky-300 text-zinc-950 font-bold transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-sky-500/5 text-sm"
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
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg font-sans">
                      ¡Mensaje enviado con éxito!
                    </span>
                  )}
                  {submitStatus === 'error' && (
                    <span className="text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1.5 rounded-lg font-sans">
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
