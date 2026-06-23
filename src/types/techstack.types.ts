// ─── TechStack Types ──────────────────────────────────────────────────────────

export type ProficiencyLevel = 'expert' | 'advanced' | 'intermediate' | 'learning'

export interface TechItem {
  /** Technology name */
  name: string
  /** Proficiency level */
  level: ProficiencyLevel
  /** Optional icon identifier or SVG path */
  icon?: string
  /** Number of years of experience */
  yearsOfExperience?: number
}

export interface TechCategory {
  /** Unique identifier for the category */
  id: string
  /** Display name of the category */
  label: string
  /** Icon identifier for the category */
  icon: string
  /** Technologies in this category */
  items: TechItem[]
}

export interface TechStackData {
  /** Section title */
  sectionTitle: string
  /** Highlighted accent word */
  sectionAccent: string
  /** Section description */
  description: string
  /** Technology categories */
  categories: TechCategory[]
}
