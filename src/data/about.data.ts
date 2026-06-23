import type { AboutData } from '@/types'

export const aboutData: AboutData = {
  sectionTitle: 'Sobre',
  sectionAccent: 'mí',
  biography: [
    'Soy Cristian Cubillos, Ingeniero de Sistemas con sólida experiencia construyendo soluciones empresariales de extremo a extremo. Me especializo en arquitecturas de integración, automatización de procesos y desarrollo Full Stack orientado a resultados de negocio.',
    'Mi enfoque combina pensamiento sistémico con ejecución pragmática: analizo los procesos actuales, identifico cuellos de botella y entrego sistemas que generan impacto medible. He trabajado con equipos en entornos de alta exigencia donde la calidad, la escalabilidad y la mantenibilidad no son opcionales.',
    // TODO: agregar más párrafos con detalles específicos de Cristian
  ],
  highlights: [
    {
      label: 'Arquitectura de Sistemas',
      description: 'Diseño de soluciones robustas y escalables para entornos empresariales.',
    },
    {
      label: 'Automatización de Procesos',
      description: 'Reducción de tareas manuales mediante flujos inteligentes y APIs.',
    },
    {
      label: 'Integración de Sistemas',
      description: 'Conectividad entre plataformas, ERPs, CRMs y servicios externos.',
    },
    {
      label: 'Desarrollo Full Stack',
      description: 'Desde la base de datos hasta la interfaz de usuario, con código limpio.',
    },
  ],
  photoSrc: '/images/profile.jpg', // TODO: colocar foto real en public/images/
  photoAlt: 'Foto de perfil de Cristian Cubillos',
}
