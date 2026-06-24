import type { AboutData } from '@/types'

export const aboutData: AboutData = {
  sectionTitle: 'Sobre',
  sectionAccent: 'mí',
  biography: [
    'Soy Cristian Cubillos, Ingeniero de Sistemas especializado en el desarrollo Full Stack y la arquitectura de integraciones para soluciones empresariales. Tengo un enfoque centrado en optimizar operaciones, reduciendo drásticamente las tareas manuales de las empresas mediante flujos automatizados de mensajería, bases de datos eficientes e integraciones de API de terceros (ERPs y CRMs).',
    'He liderado el desarrollo de arquitecturas de software completas, tales como sistemas Business Hub y CRM integrados directamente con la API oficial de Meta WhatsApp Cloud, permitiendo la comunicación multicanal y el envío de campañas masivas en tiempo real. En el ámbito del backend, diseño microservicios seguros en Python/FastAPI con almacenamiento local tipo espejo para optimizar el rendimiento y la consistencia de datos de facturación.',
    'Mi trabajo diario involucra el despliegue continuo (CI/CD) utilizando Docker y GitHub Actions en servidores en la nube (VPS en DigitalOcean) protegidos mediante proxies de Cloudflare. Me apasiona resolver retos lógicos complejos y crear código mantenible, estructurado y listo para el crecimiento.',
  ],
  cvSummary:
    'Ingeniero de Sistemas especializado en desarrollo Full Stack y arquitectura de integraciones empresariales. Amplia experiencia optimizando procesos de negocio mediante flujos automatizados de mensajería (Meta WhatsApp Cloud API), sincronización de bases de datos locales tipo espejo con APIs de ERPs (Alegra), y diseño de microservicios robustos y seguros en Python/FastAPI y React/TypeScript. Enfoque orientado a la automatización eficiente y rendimiento de sistemas.',
  highlights: [
    {
      label: 'Sistemas CRM / ERP',
      description: 'Lógica empresarial compleja, control de nóminas, gestión de inventarios y tableros operativos en tiempo real.',
    },
    {
      label: 'Meta WhatsApp Cloud API',
      description: 'Implementación oficial de webhooks y clientes de mensajería (VIP, Unidad y Mayoristas) con colas de procesamiento.',
    },
    {
      label: 'Integración con Alegra ERP',
      description: 'Diseño de espejos locales de facturas y productos para maximizar velocidad de respuesta y minimizar llamadas a APIs externas.',
    },
    {
      label: 'Cifrado & Seguridad',
      description: 'Creación de módulos Vault para almacenamiento de credenciales sensibles cifradas mediante algoritmos simétricos (Fernet).',
    },
  ],
  photoSrc: '/images/profile.jpg',
  photoAlt: 'Foto de perfil de Cristian Cubillos',
}
