import type { ProjectsData } from '@/types'

export const projectsData: ProjectsData = {
  sectionTitle: 'Proyectos',
  sectionAccent: 'destacados',
  description:
    'Sistemas empresariales complejos, integraciones de API de terceros y flujos de automatización que demuestran capacidades Full Stack y arquitectura de software.',
  projects: [
    {
      id: 'proj-goodnight',
      name: 'Goodnight Business Hub',
      description:
        'Sistema centralizado de gestión comercial y ERP con números API de WhatsApp activos automatizando y asistiendo ventas reales en producción, integrando Alegra y tableros interactivos.',
      longDescription:
        'Ecosistema corporativo robusto para optimizar operaciones. Cuenta con un dashboard de analíticas que expone KPIs financieros mediante un espejo local de facturación sincronizado con Alegra ERP. Integra múltiples números de la API oficial de Meta WhatsApp Cloud con flujos automáticos de calificación de prospectos, envío de campañas masivas y una bandeja multicanal en tiempo real para asesores. Adicionalmente, incluye un motor de cálculo de nómina basado en reportes de asistencia y un Vault con cifrado Fernet para almacenamiento seguro de credenciales de API.',
      tags: ['Full Stack', 'Enterprise', 'Integration', 'DevOps'],
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'Meta WhatsApp API', 'Alegra API', 'GitHub Actions', 'Cryptography (Fernet)'],
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
      imageAlt: 'Captura del panel de control de Goodnight Business Hub',
    },
    {
      id: 'proj-voxinplant',
      name: 'Voximplant Tools',
      description:
        'Conjunto de scripts en Python para procesar, consolidar y auditar reportes de llamadas generados por campañas de Voximplant. Automatiza tareas manuales y genera bases históricas fiables.',
      longDescription:
        'Desarrollo de utilidades automatizadas en Python destinadas a la extracción, limpieza, consolidación y auditoría de datos telefónicos a gran escala en campañas empresariales.',
      tags: ['Automation', 'Backend', 'Integration'],
      technologies: ['Python', 'Pandas', 'Voximplant API', 'CSV Processing'],
      status: 'completed',
      featured: true,
      links: [
        {
          label: 'Código Fuente',
          url: 'https://github.com/cristiannwtf1/voxinplant-tools',
          icon: 'Github',
        },
      ],
      imageSrc: '/images/projects/voximplant_automation.png',
      imageAlt: 'Ilustración conceptual de automatizaciones backend con Python',
    },
    {
      id: 'proj-quickcollect',
      name: 'QuickCollect',
      description:
        'Plataforma interactiva orientada a la gestión, cobro y recaudación eficiente. Desarrollado como proyecto final de integración de servicios y lógica frontend/backend.',
      longDescription:
        'Aplicación web completa diseñada para optimizar los procesos de cobranza y agilizar la comunicación de pagos pendientes con clientes.',
      tags: ['Full Stack', 'Frontend', 'Enterprise'],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express'],
      status: 'completed',
      featured: false,
      links: [
        {
          label: 'Código Fuente',
          url: 'https://github.com/cristiannwtf1/quickcollect',
          icon: 'Github',
        },
      ],
    },
    {
      id: 'proj-devage',
      name: 'DevAge Engine',
      description:
        'Motor interactivo inspirado en mecánicas estratégicas orientadas a programadores (Age of Code) para simular y ejecutar lógicas secuenciales.',
      longDescription:
        'Un proyecto enfocado en algoritmos y simulación que permite correr lógicas de código para controlar unidades o automatizar flujos estratégicos.',
      tags: ['Frontend', 'JavaScript', 'Logic'],
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS Modules', 'Algorithm Design'],
      status: 'completed',
      featured: false,
      links: [
        {
          label: 'Código Fuente',
          url: 'https://github.com/cristiannwtf1/devage-engine',
          icon: 'Github',
        },
      ],
      imageSrc: '/images/projects/devage_engine.png',
      imageAlt: 'Interfaz de simulación lógica de DevAge Engine',
    },
  ],
}
