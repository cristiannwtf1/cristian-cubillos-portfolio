// ─── About Types ──────────────────────────────────────────────────────────────

export interface SkillHighlight {
  /** Skill or strength label */
  label: string
  /** Short description of this skill */
  description: string
}

export interface AboutData {
  /** Section title */
  sectionTitle: string
  /** Highlighted accent word in the section title */
  sectionAccent: string
  /** Array of biography paragraphs */
  biography: string[]
  /** Key skills/strengths to highlight visually */
  highlights: SkillHighlight[]
  /** Path or URL to the profile photo */
  photoSrc: string
  /** Alt text for the profile photo */
  photoAlt: string
}
