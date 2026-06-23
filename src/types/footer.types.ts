// ─── Footer Types ─────────────────────────────────────────────────────────────

export interface FooterLink {
  /** Display label */
  label: string
  /** Anchor href or external URL */
  href: string
}

export interface FooterData {
  /** Short tagline under the name */
  tagline: string
  /** Copyright holder name */
  copyrightName: string
  /** Quick navigation links repeated in footer */
  navLinks: FooterLink[]
  /** Social links */
  socialLinks: FooterLink[]
}
