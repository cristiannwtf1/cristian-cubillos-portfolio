import type { ProjectsData } from '@/types'

export const projectsData: ProjectsData = {
  sectionTitle: 'Proyectos',
  sectionAccent: 'empresariales',
  description:
    'Casos de estudio detallados de sistemas en producción, motores lógicos y soluciones de integración construidos para resolver problemas de negocio reales.',
  projects: [
    {
      id: 'proj-goodnight',
      name: 'GoodNight Business Hub',
      description:
        'Plataforma modular centralizada desarrollada para orquestar la operación comercial, administrativa y de talento de la corporación.',
      longDescription:
        'Una solución empresarial robusta que actúa como el núcleo operativo de la organización. Integra de forma nativa la facturación, los canales de mensajería con clientes y los motores de asistencia de personal en producción.',
      problemSolved:
        'La dispersión de información y tareas manuales repetitivas en múltiples plataformas no conectadas (WhatsApp, Alegra, registros de asistencia físicos) generaba cuellos de botella y errores operativos. GoodNight Hub centraliza estas operaciones y automatiza flujos, erradicando tiempos muertos.',
      architecture:
        'Arquitectura modular basada en microservicios backend en FastAPI, interfaz responsiva interactiva con React, almacenamiento persistente en PostgreSQL con replicación/espejo local sincronizado, empaquetado en contenedores Docker y despliegue CI/CD automatizado.',
      modules: [
        'Comercial (Integración WhatsApp Cloud API & Ventas)',
        'RRHH (Ficha y Registro de Empleados)',
        'Nómina (Cálculos de Asistencia y Quincenas)',
        'Biblioteca Operativa (Manuales y Guías corporativas)',
        'Gestión Documental (Almacenamiento Seguro)',
      ],
      tags: ['Full Stack', 'Enterprise', 'Integration', 'DevOps'],
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'Meta WhatsApp API', 'Alegra API', 'GitHub Actions'],
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
      imageAlt: 'Captura del panel de control de GoodNight Business Hub',
    },
    {
      id: 'proj-devage',
      name: 'DevAge Engine',
      description:
        'Motor de simulación y lógica estratégica en tiempo real desarrollado para simular comportamientos autónomos y toma de decisiones.',
      longDescription:
        'Proyecto personal orientado a arquitectura de software y simulación de sistemas complejos. Implementa arquitectura ECS para manejo de múltiples agentes autónomos sin sobrecargar el hilo principal.',
      problemSolved:
        'Diseñar un sistema de simulación interactivo eficiente capaz de procesar múltiples entidades con inteligencia artificial y navegación autónoma en tiempo real sin degradación de rendimiento.',
      architecture:
        'Basado en arquitectura ECS (Entity Component System) para desacoplar estados y lógica, algoritmos de Pathfinding (búsqueda de rutas en rejillas), WebSockets bidireccionales en tiempo real y renderizado en Canvas de HTML5.',
      modules: [
        'ECS Architecture (Entity Component System)',
        'IA & Decision Making',
        'Pathfinding Algorithms',
        'WebSockets Realtime Communication',
        'Simulación en tiempo real',
      ],
      tags: ['Frontend', 'JavaScript', 'Logic'],
      technologies: ['JavaScript', 'HTML5 Canvas', 'WebSockets', 'ECS Architecture', 'Pathfinding Algorithms'],
      status: 'completed',
      featured: true,
      links: [
        {
          label: 'Código Fuente',
          url: 'https://github.com/cristiannwtf1/devage-engine',
          icon: 'Github',
        },
      ],
      imageSrc: '/images/projects/devage_engine.png',
      imageAlt: 'Simulación de algoritmos en DevAge Engine',
    },
    {
      id: 'proj-quickcollect',
      name: 'QuickCollect',
      description:
        'Plataforma de pagos y suscripciones recurrentes desarrollada para automatizar el cobro y conciliación de servicios académicos y profesionales.',
      longDescription:
        'Una solución integral diseñada para automatizar la facturación y el control de cobros recurrentes de la Universidad Compensar (2025). Cuenta con un backend modular para la gestión de usuarios y un dashboard analítico interactivo para el control financiero.',
      problemSolved:
        'El procesamiento y conciliación manual de pagos escolares e institucionales generaba demoras administrativas y una alta tasa de morosidad por falta de notificaciones oportunas.',
      architecture:
        'Arquitectura desacoplada compuesta por una API REST construida con Django y Django REST Framework, y un cliente frontend tipo SPA interactivo desarrollado en React, Vite y Tailwind CSS, con reportes gráficos en Recharts.',
      modules: [
        'Pasarela y Conciliación de Pagos',
        'Gestión de Suscripciones y Planes',
        'API REST de Clientes y Recaudaciones',
        'Notificaciones Automáticas por Email',
        'Dashboard Analítico de Métricas (Recharts)',
      ],
      tags: ['Full Stack', 'Django', 'React', 'Fintech'],
      technologies: ['React', 'Django', 'Django REST Framework', 'Python', 'Tailwind CSS', 'Vite', 'Recharts', 'Formik/Yup'],
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
  ],
}
