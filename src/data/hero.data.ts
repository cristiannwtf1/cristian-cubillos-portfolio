import type { HeroData } from '@/types'

export const heroData: HeroData = {
  greeting: 'Hola, soy',
  name: 'Cristian Cubillos',
  title: 'Ingeniero de Sistemas',
  subtitle: 'Full Stack Developer · Especialista en Soluciones Empresariales',
  description:
    'Diseño y construyo sistemas robustos de automatización e integración que resuelven retos reales de negocio. Transformo complejidad en soluciones elegantes y escalables.',
  ctaLabel: 'Ver proyectos',
  ctaHref: '#projects',
  secondaryCtaLabel: 'Contáctame',
  secondaryCtaHref: '#contact',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/cristian-cubillos', // TODO: actualizar URL real
      icon: 'Github',
      ariaLabel: 'Perfil de GitHub de Cristian Cubillos',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/cristian-cubillos', // TODO: actualizar URL real
      icon: 'Linkedin',
      ariaLabel: 'Perfil de LinkedIn de Cristian Cubillos',
    },
  ],
}
