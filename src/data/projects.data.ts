import type { ProjectsData } from '@/types'

export const projectsData: ProjectsData = {
  sectionTitle: 'Proyectos',
  sectionAccent: 'destacados',
  description:
    'Una selección de soluciones empresariales, herramientas de automatización e integraciones que he diseñado y desarrollado.',
  projects: [
    {
      id: 'proj-1',
      name: 'Sistema de Integración ERP-CRM',
      description:
        'Sincronización automatizada bidireccional de clientes, inventarios y órdenes de venta entre ERP empresarial y Salesforce.',
      longDescription:
        'Diseño e implementación de un microservicio que orquesta colas de mensajes para sincronizar datos en tiempo real, garantizando consistencia y reduciendo la duplicación de datos.',
      tags: ['Integration', 'Backend', 'Enterprise'],
      technologies: ['Node.js', 'TypeScript', 'RabbitMQ', 'PostgreSQL', 'Salesforce API'],
      status: 'completed',
      featured: true,
      links: [
        {
          label: 'Código',
          url: 'https://github.com/cristian-cubillos/erp-crm-integration',
          icon: 'Github',
        },
      ],
    },
    {
      id: 'proj-2',
      name: 'Plataforma de Automatización de Reportes',
      description:
        'Automatización del flujo de extracción, transformación y envío de reportes financieros mensuales para junta directiva.',
      longDescription:
        'Scripting y flujos programados que extraen datos de múltiples bases de datos relacionales, generan hojas de cálculo formateadas y las envían automáticamente por correo cifrado.',
      tags: ['Automation', 'Backend'],
      technologies: ['Python', 'Pandas', 'PostgreSQL', 'Docker', 'AWS Lambda'],
      status: 'completed',
      featured: true,
      links: [
        {
          label: 'Demo',
          url: 'https://demo.ejemplo.com',
          icon: 'ExternalLink',
        },
      ],
    },
    // TODO: Cristian, añade aquí tus proyectos reales
  ],
}
