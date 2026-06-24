import type { ExperienceData } from '@/types'

export const experienceData: ExperienceData = {
  sectionTitle: 'Experiencia',
  sectionAccent: 'profesional',
  items: [
    {
      id: 'exp-goodnight',
      role: 'Full Stack Developer & Integration Lead',
      company: 'Pijamas Good Night',
      companyUrl: 'https://pijamasgoodnight.com.co',
      startDate: 'Marzo 2026',
      endDate: 'Presente',
      location: 'Bogotá, Colombia',
      summary:
        'Responsable del desarrollo y evolución de la plataforma tecnológica central de la organización. Lidero el desarrollo de GoodNight Business Hub, centralizando la facturación, los canales de WhatsApp oficiales y las automatizaciones de nómina e inventario.',
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
      startDate: 'Mayo 2025',
      endDate: 'Diciembre 2025',
      location: 'Bogotá, Colombia',
      summary:
        'Lideré el diseño e implementación de soluciones de software, scripts de automatización e integración con CRMs para optimizar procesos internos y de recaudación.',
      responsibilities: [
        { text: 'Desarrollé scripts y pipelines de datos en Python para la extracción, transformación, carga (ETL), depuración y normalización de información comercial masiva.' },
        { text: 'Diseñé y optimicé consultas complejas y bases de datos relacionales en SQL Server para centralizar información operativa.' },
        { text: 'Automaticé la sincronización de información y flujos de negocio mediante integraciones con APIs en CRMs (Bitrix24 y MangoCRM).' },
        { text: 'Construí dashboards interactivos de gestión mediante Power BI y Excel Avanzado para auditorías y toma de decisiones gerenciales.' },
      ],
      technologies: ['Python', 'SQL Server', 'ETL Processes', 'CRM Integration', 'Pandas', 'Bitrix24 API', 'Power BI'],
    },
    {
      id: 'exp-innovasoft',
      role: 'Desarrollador Junior',
      company: 'Innovasoft Colombia',
      startDate: 'Septiembre 2024',
      endDate: 'Febrero 2025',
      location: 'Bogotá, Colombia',
      summary:
        'Participé en el desarrollo y mantenimiento de aplicaciones empresariales, consolidando bases sólidas de desarrollo de software bajo metodologías ágiles.',
      responsibilities: [
        { text: 'Desarrollé e implementé componentes interactivos en el frontend y lógica de negocio en el backend según requerimientos técnicos.' },
        { text: 'Escribí y optimicé consultas SQL para la extracción y manipulación segura de datos de la aplicación.' },
        { text: 'Participé activamente en la detección, corrección de errores (debugging) y pruebas de software para garantizar la estabilidad.' },
      ],
      technologies: ['JavaScript', 'HTML5/CSS3', 'Node.js', 'Express', 'SQL databases', 'Git', 'Software Testing'],
    },
    {
      id: 'exp-groupcos',
      role: 'Supervisor Senior de Operaciones',
      company: 'GroupCOS',
      startDate: 'Noviembre 2022',
      endDate: 'Junio 2024',
      location: 'Bogotá, Colombia',
      summary:
        'Lideré equipos operativos y de soporte técnico en entornos de alta exigencia, orientando mi gestión al análisis de datos y mejora continua de procesos.',
      responsibilities: [
        { text: 'Realicé el seguimiento y cumplimiento de indicadores clave de rendimiento (KPIs) de soporte y eficiencia operativa.' },
        { text: 'Diseñé reportes gerenciales automatizados en Excel y tableros interactivos en Power BI para auditoría y toma de decisiones.' },
        { text: 'Gestioné recursos humanos y lideré iniciativas de optimización de flujos de trabajo basados en el análisis cuantitativo de la operación.' },
      ],
      technologies: ['Power BI', 'Excel Avanzado', 'KPI Analysis', 'Operations Management', 'Business Intelligence'],
    },
    {
      id: 'exp-jazzplat',
      role: 'Aprendiz IT',
      company: 'Jazzplat Colombia',
      startDate: 'Febrero 2022',
      endDate: 'Agosto 2022',
      location: 'Bogotá, Colombia',
      summary:
        'Soporté la operación tecnológica de la compañía garantizando la continuidad operativa y participando en la gestión de infraestructura TI.',
      responsibilities: [
        { text: 'Brindé soporte de hardware y software de primer y segundo nivel a usuarios y equipos de la organización.' },
        { text: 'Colaboré en la administración de infraestructura de red local, configuración de accesos y mantenimiento preventivo.' },
        { text: 'Apoyé la gestión de cuentas de usuario, asignación de permisos y controles básicos de seguridad corporativos.' },
      ],
      technologies: ['IT Support', 'Network Administration', 'Active Directory', 'Hardware Maintenance', 'Troubleshooting'],
    },
    {
      id: 'exp-emtelco',
      role: 'Asesor de Soporte Técnico',
      company: 'Emtelco',
      startDate: 'Diciembre 2020',
      endDate: 'Octubre 2021',
      location: 'Bogotá, Colombia',
      summary:
        'Resolví incidencias técnicas de conectividad, hardware y software en tiempo real para usuarios finales.',
      responsibilities: [
        { text: 'Diagnostiqué y solucioné fallas de red, acceso a plataformas y sistemas operativos bajo estrictos acuerdos de nivel de servicio (SLAs).' },
        { text: 'Apoyé la mejora de procesos del equipo de soporte identificando patrones recurrentes de incidentes tecnológicos.' },
      ],
      technologies: ['Technical Support', 'Help Desk', 'Customer Service', 'Connectivity Troubleshooting'],
    },
    {
      id: 'exp-gober',
      role: 'Inspector de Turismo / Analista de Datos',
      company: 'Gobernación de Cundinamarca',
      startDate: 'Enero 2019',
      endDate: 'Diciembre 2019',
      location: 'Bogotá, Colombia',
      summary:
        'Gestioné y analicé información estadística del sector hotelero y turístico del departamento para entidades oficiales.',
      responsibilities: [
        { text: 'Recolecté, consolidé y analicé datos sectoriales para elaborar reportes de gestión e informes analíticos para la toma de decisiones gubernamentales.' },
        { text: 'Administré bases de datos de prestadores de servicios, depurando registros para asegurar la calidad de la información pública.' },
      ],
      technologies: ['Excel Avanzado', 'Data Analysis', 'Reporting', 'Database Administration'],
    },
    {
      id: 'exp-tp',
      role: 'Analista de BackOffice',
      company: 'Teleperformance',
      startDate: 'Enero 2016',
      endDate: 'Junio 2018',
      location: 'Bogotá, Colombia',
      summary:
        'Gestioné información operativa para el control de procesos internos y la elaboración de métricas de desempeño.',
      responsibilities: [
        { text: 'Elaboré reportes de rendimiento y KPIs automatizando hojas de cálculo en Excel y diseñando vistas en Power BI.' },
        { text: 'Analicé datos de flujos administrativos para identificar demoras y proponer mejoras en la eficiencia del servicio.' },
      ],
      technologies: ['Excel', 'Power BI', 'KPI Reporting', 'BackOffice Operations', 'Process Analysis'],
    },
  ],
}
