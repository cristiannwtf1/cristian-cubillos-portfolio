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
        'Aplicación web orientada a la automatización e integración de cobro y conciliación rápida de cartera de clientes.',
      longDescription:
        'Aplicación web de backend y scripts diseñada para automatizar la gestión y conciliación de cartera de clientes pendientes, optimizando la comunicación de cobro y facilitando flujos de recaudación eficientes.',
      problemSolved:
        'La gestión manual de cobros y el seguimiento individual de clientes morosos aumentaban el índice de cartera vencida y requerían un esfuerzo operativo ineficiente.',
      architecture:
        'Integración directa con APIs de CRMs y bases de datos relacionales, scripts automatizados de procesamiento por lotes para facturas y conciliación de cartera.',
      modules: [
        'Automatización de Cobros',
        'Gestión de Cartera de Clientes',
        'Integración CRM',
        'Optimización de Procesos',
      ],
      tags: ['Full Stack', 'Automation', 'Enterprise'],
      technologies: ['Node.js', 'Express', 'SQL databases', 'Python Scripting', 'API Integration'],
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
