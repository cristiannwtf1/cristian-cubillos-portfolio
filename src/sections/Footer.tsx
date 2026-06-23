import React from 'react'
import { footerData } from '@/data'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16 text-sm text-zinc-400">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Tagline / Name Col */}
          <div className="md:col-span-6 space-y-4">
            <a href="#hero" className="text-lg font-bold font-display text-white tracking-tight">
              Cristian Cubillos
            </a>
            <p className="max-w-md text-zinc-500 leading-relaxed">
              {footerData.tagline}
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2">
              {footerData.navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
              Redes Profesionales
            </h4>
            <ul className="space-y-2">
              {footerData.socialLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-zinc-600">
          <p>
            &copy; {currentYear} {footerData.copyrightName}. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Hecho con <span className="text-emerald-500/80">♥</span> en React + Tailwind v4
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
