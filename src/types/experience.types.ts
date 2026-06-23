// ─── Experience Types ─────────────────────────────────────────────────────────

export interface Responsibility {
  /** Description of a key responsibility or achievement */
  text: string
}

export interface ExperienceItem {
  /** Unique identifier */
  id: string
  /** Job title */
  role: string
  /** Company or organization name */
  company: string
  /** Company website or profile URL */
  companyUrl?: string
  /** Start date in "Month YYYY" or "YYYY" format */
  startDate: string
  /** End date or "Present" */
  endDate: string
  /** Optional location (city, country or "Remote") */
  location?: string
  /** Brief role summary (1-2 sentences) */
  summary: string
  /** List of key responsibilities and achievements */
  responsibilities: Responsibility[]
  /** Key technologies used */
  technologies: string[]
}

export interface ExperienceData {
  /** Section title */
  sectionTitle: string
  /** Highlighted accent word */
  sectionAccent: string
  /** List of work experience items (most recent first) */
  items: ExperienceItem[]
}
