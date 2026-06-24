import type { HeroData } from '@/types'

export const heroData: HeroData = {
  greeting: 'Hola, soy',
  name: 'Cristian Cubillos',
  title: 'Ingeniero de Sistemas | Full Stack Developer',
  subtitle: 'Construyo plataformas empresariales, automatizaciones e integraciones que transforman procesos complejos en soluciones reales.',
  description: '',
  ctaLabel: 'Ver proyectos',
  ctaHref: '#projects',
  secondaryCtaLabel: 'Descargar CV',
  secondaryCtaHref: '#cv',
  cvUrl: '#cv',
  highlightedTechs: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Meta API'],
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/cristiannwtf1',
      icon: 'Github',
      ariaLabel: 'Perfil de GitHub de Cristian Cubillos',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/criscubillos',
      icon: 'Linkedin',
      ariaLabel: 'Perfil de LinkedIn de Cristian Cubillos',
    },
  ],
}
