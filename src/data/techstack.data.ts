import type { TechStackData } from '@/types'

export const techStackData: TechStackData = {
  sectionTitle: 'Stack',
  sectionAccent: 'tecnológico',
  description:
    'Herramientas y tecnologías que utilizo para diseñar, desarrollar e integrar soluciones empresariales robustas.',
  categories: [
    {
      id: 'backend',
      label: 'Backend & APIs',
      icon: 'Server',
      items: [
        { name: 'Python / FastAPI', level: 'expert', yearsOfExperience: 4 },
        { name: 'Node.js / Express / NestJS', level: 'expert', yearsOfExperience: 5 },
        { name: 'REST APIs / GraphQL', level: 'expert', yearsOfExperience: 5 },
        { name: 'PostgreSQL / MySQL / MongoDB', level: 'advanced', yearsOfExperience: 4 },
      ],
    },
    {
      id: 'frontend',
      label: 'Frontend',
      icon: 'Layout',
      items: [
        { name: 'React / Next.js', level: 'expert', yearsOfExperience: 4 },
        { name: 'TypeScript', level: 'expert', yearsOfExperience: 3 },
        { name: 'Tailwind CSS', level: 'advanced', yearsOfExperience: 3 },
        { name: 'Framer Motion', level: 'intermediate', yearsOfExperience: 1 },
      ],
    },
    {
      id: 'integrations',
      label: 'Integraciones & Automatización',
      icon: 'Cpu',
      items: [
        { name: 'RabbitMQ / Colas de Mensajes', level: 'advanced', yearsOfExperience: 2 },
        { name: 'Salesforce API / ERPs Integrations', level: 'advanced', yearsOfExperience: 3 },
        { name: 'Docker / Contenedores', level: 'advanced', yearsOfExperience: 3 },
        { name: 'CI/CD Pipelines (GitHub Actions)', level: 'intermediate', yearsOfExperience: 2 },
      ],
    },
  ],
}
