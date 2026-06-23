// ─── Impact Types ─────────────────────────────────────────────────────────────

export interface ImpactMetric {
  /** Numeric value (can be string for "+50", "100%", etc.) */
  value: string
  /** Label describing the metric */
  label: string
  /** Optional supporting description */
  description?: string
  /** Icon identifier (lucide-react icon name) */
  icon: string
}

export interface ImpactData {
  /** Section title */
  sectionTitle: string
  /** Highlighted accent word */
  sectionAccent: string
  /** Brief intro paragraph */
  intro: string
  /** Array of quantifiable metrics */
  metrics: ImpactMetric[]
}
