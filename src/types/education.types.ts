// ─── Education Types ───────────────────────────────────────────────────────────

export interface EducationItem {
  /** Unique identifier */
  id: string
  /** Degree, certification, or course name */
  degree: string
  /** School, university, or platform name */
  institution: string
  /** Completion year or range (e.g., "2023 - Presente") */
  year: string
  /** Optional location of the institution */
  location?: string
  /** Optional bullet points or short description */
  description?: string
}

export interface EducationData {
  /** Section title for the CV */
  sectionTitle: string
  /** Highlighted accent word in the title */
  sectionAccent: string
  /** List of educational credentials or certifications */
  items: EducationItem[]
}
