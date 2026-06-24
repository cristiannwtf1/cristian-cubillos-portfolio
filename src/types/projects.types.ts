// ─── Projects Types ───────────────────────────────────────────────────────────

export type ProjectStatus = 'in-progress' | 'completed' | 'archived'

export type ProjectTag =
  | 'Full Stack'
  | 'Backend'
  | 'Frontend'
  | 'Automation'
  | 'Integration'
  | 'Enterprise'
  | 'API'
  | 'DevOps'
  | string

export interface ProjectLink {
  /** Link label */
  label: string
  /** Full URL */
  url: string
  /** Icon identifier (lucide-react icon name) */
  icon: string
}

export interface Project {
  /** Unique identifier */
  id: string
  /** Project display name */
  name: string
  /** Short description (2-3 sentences) */
  description: string
  /** Full detailed description */
  longDescription?: string
  /** Categorization tags */
  tags: ProjectTag[]
  /** Technologies used in this project */
  technologies: string[]
  /** Current project status */
  status: ProjectStatus
  /** Whether to feature this project prominently */
  featured: boolean
  /** External links (GitHub, live demo, etc.) */
  links: ProjectLink[]
  /** Optional case study fields */
  problemSolved?: string
  architecture?: string
  modules?: string[]
  /** Optional cover image path */
  imageSrc?: string
  /** Image alt text */
  imageAlt?: string
}

export interface ProjectsData {
  /** Section title */
  sectionTitle: string
  /** Highlighted accent word */
  sectionAccent: string
  /** Section description */
  description: string
  /** All portfolio projects */
  projects: Project[]
}
