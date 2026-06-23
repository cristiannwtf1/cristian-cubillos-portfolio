import type { ExperienceData } from '@/types'

export const experienceData: ExperienceData = {
  sectionTitle: 'Experiencia',
  sectionAccent: 'profesional',
  items: [
    {
      id: 'exp-goodnight',
      role: 'Desarrollador Web / Full Stack & Integration Lead',
      company: 'Pijamas Good Night',
      companyUrl: 'https://pijamasgoodnight.com.co',
      startDate: 'Septiembre 2025',
      endDate: 'Presente',
      location: 'Bogotá, Colombia',
      summary:
        'Responsable del diseño, evolución y despliegue del ecosistema digital corporativo. Lidero el desarrollo de GoodNight Business Hub, centralizando la facturación, los canales de WhatsApp oficiales y las automatizaciones de nómina e inventario.',
      responsibilities: [
        { text: 'Diseñé y desarrollé GoodNight Business Hub, una plataforma modular (Comercial, RRHH, Nómina, Biblioteca y Gestión Documental) conectada al backend de FastAPI y frontend de React.' },
        { text: 'Implementé la integración oficial de Meta WhatsApp Cloud API para flujos de venta en producción, gestionando campañas automatizadas masivas y bandejas de entrada multicanal.' },
        { text: 'Desarrollé el espejo local en PostgreSQL que sincroniza dinámicamente con la API de Alegra ERP, optimizando la velocidad de respuesta del dashboard en un 95%.' },
        { text: 'Construí un módulo de Vault corporativo con cifrado simétrico (Fernet) para la protección y almacenamiento seguro de secretos y credenciales API.' },
        { text: 'Arquitecté la infraestructura mediante Docker Compose en DigitalOcean, con pipelines de CI/CD automáticos en GitHub Actions y túneles de Cloudflare.' },
      ],
      technologies: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Meta WhatsApp API', 'Alegra API', 'SQLAlchemy', 'GitHub Actions', 'Cryptography'],
    },
    {
      id: 'exp-interia',
      role: 'Analista IT & Automation Developer',
      company: 'Interia Cartera Empresarial',
      startDate: 'Noviembre 2024',
      endDate: 'Agosto 2025',
      location: 'Bogotá, Colombia',
      summary:
        'Lideré el diseño y la implementación de scripts de automatización e integración con CRMs para optimizar los flujos de cobro y recaudación de cartera.',
      responsibilities: [
        { text: 'Desarrollé scripts y herramientas en Python para la extracción, transformación y carga (ETL) de datos comerciales masivos.' },
        { text: 'Automaticé la sincronización de información operativa mediante integraciones y APIs de bases de datos relacionales.' },
        { text: 'Diseñé y optimicé bases de datos SQL Server y estructuré dashboards de analítica de datos para la toma de decisiones gerenciales.' },
      ],
      technologies: ['Python', 'SQL Server', 'ETL Processes', 'CRM Integration', 'Pandas', 'Scripting'],
    },
    {
      id: 'exp-innovasoft',
      role: 'Desarrollador Junior',
      company: 'Innovasoft Colombia',
      startDate: 'Enero 2024',
      endDate: 'Octubre 2024',
      location: 'Bogotá, Colombia',
      summary:
        'Participé en el desarrollo y mantenimiento de aplicaciones empresariales, consolidando las bases de desarrollo profesional bajo metodologías ágiles.',
      responsibilities: [
        { text: 'Colaboré en la maquetación e implementación de componentes interactivos y lógica de negocio en el frontend y backend.' },
        { text: 'Escribí y optimicé consultas SQL para la extracción segura de información corporativa.' },
        { text: 'Participé activamente en la detección, corrección de errores (debugging) y pruebas unitarias de software.' },
      ],
      technologies: ['JavaScript', 'HTML5/CSS3', 'Node.js', 'Express', 'SQL databases', 'Git'],
    },
    {
      id: 'exp-groupcos',
      role: 'Supervisor Senior de Operaciones',
      company: 'GroupCOS',
      startDate: 'Enero 2021',
      endDate: 'Diciembre 2023',
      location: 'Bogotá, Colombia',
      summary:
        'Lideré equipos operativos en entornos de alta exigencia, orientando mi gestión a la optimización de procesos, mejora continua y análisis cuantitativo de KPIs de negocio.',
      responsibilities: [
        { text: 'Realicé el seguimiento y cumplimiento de indicadores clave de rendimiento (KPIs) operativos y de negocio.' },
        { text: 'Diseñé dashboards interactivos en Power BI y reportes de Excel Avanzado para auditorías operativas y tomas de decisiones estratégicas.' },
        { text: 'Gestioné y lideré equipos humanos de soporte y operaciones, promoviendo una cultura de eficiencia y orientación al negocio.' },
      ],
      technologies: ['Excel Avanzado', 'Power BI', 'KPI Analysis', 'Operations Management', 'Business Intelligence'],
    },
  ],
}
