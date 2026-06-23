import type { ImpactData } from '@/types'

export const impactData: ImpactData = {
  sectionTitle: 'Impacto',
  sectionAccent: 'real',
  intro:
    'Los números reflejan proyectos entregados y problemas resueltos. Cada métrica representa un reto real superado.',
  metrics: [
    {
      value: '+5',
      label: 'Años de experiencia',
      description: 'Construyendo software en entornos de producción.',
      icon: 'Calendar',
    },
    {
      value: '+20',
      label: 'Proyectos entregados',
      description: 'Desde MVPs hasta sistemas empresariales complejos.',
      icon: 'Layers',
    },
    {
      value: '+10',
      label: 'Integraciones implementadas',
      description: 'APIs, ERPs, CRMs y plataformas de terceros conectadas.',
      icon: 'GitMerge',
    },
    {
      value: '80%',
      label: 'Reducción de procesos manuales',
      description: 'Automatizaciones que liberan tiempo operativo crítico.',
      icon: 'Zap',
    },
    // TODO: ajustar métricas con datos reales de Cristian
  ],
}
