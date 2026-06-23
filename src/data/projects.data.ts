import type { ProjectsData } from '@/types'

export const projectsData: ProjectsData = {
  sectionTitle: 'Proyectos',
  sectionAccent: 'reales',
  description:
    'Proyectos y herramientas desarrolladas que resuelven problemas de automatización, lógica de software y procesamiento de datos.',
  projects: [
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
      featured: true,
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
      featured: true,
      links: [
        {
          label: 'Código Fuente',
          url: 'https://github.com/cristiannwtf1/devage-engine',
          icon: 'Github',
        },
      ],
    },
  ],
}
