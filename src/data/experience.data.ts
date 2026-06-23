import type { ExperienceData } from '@/types'

export const experienceData: ExperienceData = {
  sectionTitle: 'Experiencia',
  sectionAccent: 'profesional',
  items: [
    // TODO: completar con experiencia laboral real de Cristian (más reciente primero)
    {
      id: 'exp-1',
      role: 'Full Stack Developer',
      company: 'Empresa Ejemplo S.A.',
      companyUrl: 'https://ejemplo.com',
      startDate: 'Enero 2023',
      endDate: 'Presente',
      location: 'Bogotá, Colombia',
      summary:
        'Desarrollo y mantenimiento de plataformas empresariales con enfoque en automatización e integración de sistemas.',
      responsibilities: [
        { text: 'Diseñé e implementé APIs REST que integran múltiples plataformas de negocio.' },
        { text: 'Lideré la migración de procesos manuales a flujos automatizados, reduciendo tiempos operativos.' },
        { text: 'Construí dashboards en tiempo real para monitoreo de operaciones.' },
      ],
      technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    },
    {
      id: 'exp-2',
      role: 'Backend Developer',
      company: 'Otra Empresa',
      startDate: 'Junio 2021',
      endDate: 'Diciembre 2022',
      location: 'Remoto',
      summary:
        'Desarrollo de servicios backend para el procesamiento de datos empresariales a escala.',
      responsibilities: [
        { text: 'Implementé pipelines de procesamiento de datos en tiempo real.' },
        { text: 'Desarrollé integraciones con sistemas ERP y CRM del cliente.' },
      ],
      technologies: ['Node.js', 'Express', 'MySQL', 'Redis'],
    },
  ],
}
