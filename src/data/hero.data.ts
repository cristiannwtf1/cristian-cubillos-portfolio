import type { HeroData } from '@/types'

export const heroData: HeroData = {
  greeting: 'Hola, soy',
  name: 'Cristian Cubillos',
  title: 'Ingeniero de Sistemas',
  subtitle: 'Full Stack Developer · Automatización e Integración de Sistemas',
  description:
    'Especializado en diseñar arquitecturas de integración y automatizar tareas operativas complejas. Desarrollador de herramientas como voximplant-tools, motores lógicos e interfaces web empresariales.',
  ctaLabel: 'Ver proyectos',
  ctaHref: '#projects',
  secondaryCtaLabel: 'Contáctame',
  secondaryCtaHref: '#contact',
  cvUrl: '/CV_Cristian_Cubillos.pdf', // Se servirá desde public/
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
