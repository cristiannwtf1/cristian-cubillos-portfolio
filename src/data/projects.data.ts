import type { ProjectsData } from '@/types'

export const projectsData: ProjectsData = {
  sectionTitle: 'Proyectos',
  sectionAccent: 'destacados',
  description:
    'Sistemas empresariales complejos, integraciones de API de terceros y flujos de automatización que demuestran capacidades Full Stack y diseño de arquitectura.',
  projects: [
    {
      id: 'proj-goodnight',
      name: 'GoodNight Business Hub',
      description:
        'Plataforma integral empresarial diseñada para centralizar y automatizar los procesos comerciales, administrativos, de nómina y operativos en producción.',
      longDescription:
        'Una solución empresarial robusta desarrollada en React y FastAPI. Integra módulos operativos clave: Comercial (ventas reales mediante Meta WhatsApp Cloud API), RRHH (directorio e importación de bases de datos), Nómina (cálculos automatizados de asistencia y quincenas) y Biblioteca Operativa. Cuenta con un espejo local de facturación sincronizado con Alegra ERP y seguridad por cifrado simétrico Fernet para las claves de API.',
      tags: ['Full Stack', 'Enterprise', 'Integration', 'DevOps'],
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'Meta WhatsApp API', 'Alegra API', 'GitHub Actions', 'Fernet Cryptography'],
      status: 'completed',
      featured: true,
      links: [
        {
          label: 'Ver Detalles de Arquitectura',
          url: '#experience',
          icon: 'Layers',
        },
      ],
      imageSrc: '/images/projects/goodnight_dashboard.png',
      imageAlt: 'Captura del panel de control de GoodNight Business Hub',
    },
    {
      id: 'proj-devage',
      name: 'DevAge Engine',
      description:
        'Motor de simulación estratégica en tiempo real desarrollado como proyecto personal. Implementa arquitectura ECS e inteligencia artificial.',
      longDescription:
        'Un motor interactivo inspirado en mecánicas estratégicas secuenciales (Age of Code) para desarrolladores. Implementa una arquitectura Entity Component System (ECS), algoritmos avanzados de inteligencia artificial, pathfinding para navegación en mapa de cuadrícula y comunicación bidireccional por WebSockets.',
      tags: ['Frontend', 'JavaScript', 'Logic'],
      technologies: ['JavaScript', 'HTML5 Canvas', 'WebSockets', 'ECS Architecture', 'Algorithm Design', 'Pathfinding'],
      status: 'completed',
      featured: true,
      links: [
        {
          label: 'Código Fuente',
          url: 'https://github.com/cristiannwtf1/devage-engine',
          icon: 'Github',
        },
      ],
      imageSrc: '/images/projects/devage_engine.png',
      imageAlt: 'Simulación de algoritmos en DevAge Engine',
    },
    {
      id: 'proj-quickcollect',
      name: 'QuickCollect',
      description:
        'Proyecto orientado a la automatización de procesos empresariales y optimización en la gestión y cobro de cartera de clientes.',
      longDescription:
        'Aplicación web diseñada con el fin de automatizar la gestión y conciliación de cartera de clientes pendientes, optimizando la comunicación de cobro y facilitando flujos de recaudación eficientes.',
      tags: ['Full Stack', 'Automation', 'Enterprise'],
      technologies: ['JavaScript', 'Node.js', 'Express', 'SQL Databases', 'HTML5/CSS3'],
      status: 'completed',
      featured: true,
      links: [
        {
          label: 'Código Fuente',
          url: 'https://github.com/cristiannwtf1/quickcollect',
          icon: 'Github',
        },
      ],
    },
  ],
}
