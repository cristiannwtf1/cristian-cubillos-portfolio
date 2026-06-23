// ─── Contact Types ────────────────────────────────────────────────────────────

export type ContactMethodType = 'email' | 'linkedin' | 'github' | 'phone' | 'other'

export interface ContactMethod {
  /** Method type for styling/icon logic */
  type: ContactMethodType
  /** Display label */
  label: string
  /** Display value (email address, username, phone, etc.) */
  value: string
  /** Full URL or mailto: href */
  href: string
  /** Icon identifier (lucide-react icon name) */
  icon: string
}

export interface ContactData {
  /** Section title */
  sectionTitle: string
  /** Highlighted accent word */
  sectionAccent: string
  /** Invitation paragraph */
  description: string
  /** Direct contact methods */
  methods: ContactMethod[]
  /** Whether a contact form is included */
  showForm: boolean
}
