// ─── Hero Types ───────────────────────────────────────────────────────────────

export interface SocialLink {
  /** Platform display name */
  platform: string
  /** Full URL to the profile */
  url: string
  /** Icon identifier (lucide-react icon name) */
  icon: string
  /** Accessible label */
  ariaLabel: string
}

export interface HeroData {
  /** Professional greeting line */
  greeting: string
  /** Full name */
  name: string
  /** Primary professional title */
  title: string
  /** Secondary title / specialization */
  subtitle: string
  /** Short punchy description (1-2 sentences) */
  description: string
  /** CTA button label */
  ctaLabel: string
  /** CTA button href (anchor or external) */
  ctaHref: string
  /** Secondary CTA label */
  secondaryCtaLabel: string
  /** Secondary CTA href */
  secondaryCtaHref: string
  /** Optional URL for downloadable CV PDF */
  cvUrl?: string
  /** Highlighted tech stack badges in the hero */
  highlightedTechs?: string[]
  /** Social links displayed in the hero */
  socialLinks: SocialLink[]
}
