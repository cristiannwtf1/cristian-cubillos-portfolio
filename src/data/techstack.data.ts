import type { TechStackData } from '@/types'

export const techStackData: TechStackData = {
  sectionTitle: 'Stack',
  sectionAccent: 'tecnológico',
  description:
    'Herramientas y tecnologías que utilizo para diseñar, desarrollar e integrar soluciones empresariales robustas.',
  categories: [
    {
      id: 'backend',
      label: 'Backend',
      icon: 'Server',
      items: [
        { name: 'Python', level: 'advanced' },
        { name: 'FastAPI', level: 'advanced' },
        { name: 'Node.js', level: 'advanced' },
        { name: 'Express', level: 'advanced' },
        { name: 'REST APIs', level: 'advanced' },
        { name: 'WebSockets', level: 'advanced' },
      ],
    },
    {
      id: 'frontend',
      label: 'Frontend',
      icon: 'Layout',
      items: [
        { name: 'React', level: 'advanced' },
        { name: 'TypeScript', level: 'advanced' },
        { name: 'Tailwind CSS', level: 'advanced' },
        { name: 'Framer Motion', level: 'advanced' },
      ],
    },
    {
      id: 'databases',
      label: 'Bases de Datos',
      icon: 'Database',
      items: [
        { name: 'PostgreSQL', level: 'advanced' },
        { name: 'SQL Server', level: 'advanced' },
        { name: 'SQL', level: 'advanced' },
        { name: 'MongoDB', level: 'advanced' },
      ],
    },
    {
      id: 'infrastructure',
      label: 'Infraestructura',
      icon: 'Cloud',
      items: [
        { name: 'Docker', level: 'advanced' },
        { name: 'GitHub Actions', level: 'advanced' },
        { name: 'Cloudflare', level: 'advanced' },
        { name: 'Linux', level: 'advanced' },
        { name: 'DigitalOcean', level: 'advanced' },
        { name: 'Git', level: 'advanced' },
        { name: 'GitHub', level: 'advanced' },
      ],
    },
    {
      id: 'integrations',
      label: 'Integraciones',
      icon: 'Cpu',
      items: [
        { name: 'Meta WhatsApp Cloud API', level: 'advanced' },
        { name: 'Meta Business Suite', level: 'advanced' },
        { name: 'Alegra API', level: 'advanced' },
      ],
    },
  ],
}
