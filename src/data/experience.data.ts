import type { ExperienceData } from '@/types'

export const experienceData: ExperienceData = {
  sectionTitle: 'Experiencia',
  sectionAccent: 'profesional',
  items: [
    {
      id: 'exp-goodnight-hub',
      role: 'Full Stack & Integration Engineer (Consultor Principal)',
      company: 'Goodnight - Pijamas y ropa cómoda',
      companyUrl: 'https://pijamasgoodnight.com.co', // TODO: Ajustar si es necesario
      startDate: 'Septiembre 2025',
      endDate: 'Presente',
      location: 'Bogotá, Colombia (Híbrido)',
      summary:
        'Arquitecto y desarrollador del ecosistema digital Goodnight Business Hub. Diseñé la infraestructura completa de backend (FastAPI/Python) y el panel administrativo (React) para centralizar la facturación, los canales de WhatsApp oficiales y RRHH.',
      responsibilities: [
        { text: 'Diseñé e implementé la integración oficial con Meta WhatsApp Cloud API para automatizar campañas masivas y consolidar bandejas de entrada multitarea (VIP, Unidad, Mayoristas).' },
        { text: 'Desarrollé el espejo local de facturación y catálogo en PostgreSQL que sincroniza dinámicamente con la API de Alegra ERP, eliminando latencia de llamadas de API externas y mejorando la velocidad de respuesta del dashboard en un 95%.' },
        { text: 'Creé un módulo inteligente de mapeo y normalización de vendedores (sellers_map) con algoritmo de matching progresivo en 3 niveles de prioridad para resolver inconsistencias en nombres de ventas.' },
        { text: 'Implementé un módulo de Vault corporativo con cifrado simétrico (Fernet) para la protección y rotación de tokens y credenciales sensibles del negocio.' },
        { text: 'Construí el motor de nómina y RRHH con soporte para parsing de plantillas y cálculo automatizado de quincenas basándose en asistencia registrada vía WhatsApp.' },
        { text: 'Establecí la infraestructura de producción mediante Docker Compose en un VPS de DigitalOcean con proxy de Cloudflare y despliegue automatizado por CI/CD con GitHub Actions.' },
      ],
      technologies: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Meta WhatsApp API', 'Alegra API', 'SQLAlchemy ORM', 'GitHub Actions', 'Cryptography (Fernet)'],
    },
    {
      id: 'exp-voximplant',
      role: 'Backend & Automation Developer',
      company: 'Proyectos Independientes',
      startDate: 'Junio 2024',
      endDate: 'Agosto 2025',
      location: 'Remoto',
      summary:
        'Especialista en la automatización de procesos, flujos telefónicos en la nube y optimización de datos operativos para campañas de llamadas.',
      responsibilities: [
        { text: 'Desarrollé herramientas y scripts en Python para la consolidación, limpieza y auditoría de reportes masivos de telefonía VoIP.' },
        { text: 'Automaticé la extracción de KPIs telefónicos mediante integraciones HTTP y scripts calendarizados (CRON).' },
      ],
      technologies: ['Python', 'Pandas', 'Voximplant API', 'CSV / Excel ETL', 'Cronjobs'],
    },
  ],
}
