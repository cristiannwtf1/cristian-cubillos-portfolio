import type { ContactData } from '@/types'

export const contactData: ContactData = {
  sectionTitle: 'Hablemos de tu próximo',
  sectionAccent: 'proyecto',
  description:
    '¿Estás buscando integrar tus sistemas, automatizar tus procesos de negocio o construir una solución a la medida? Ponte en contacto conmigo y conversemos sobre cómo puedo ayudarte.',
  methods: [
    {
      type: 'email',
      label: 'Correo Electrónico',
      value: 'cristiannwtf@gmail.com',
      href: 'mailto:cristiannwtf@gmail.com',
      icon: 'Mail',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/criscubillos',
      href: 'https://linkedin.com/in/criscubillos',
      icon: 'Linkedin',
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'github.com/cristiannwtf1',
      href: 'https://github.com/cristiannwtf1',
      icon: 'Github',
    },
    {
      type: 'phone',
      label: 'Teléfono / WhatsApp',
      value: '+57 302 656 0593',
      href: 'https://wa.me/573026560593',
      icon: 'Phone',
    },
  ],
  showForm: true,
  // TODO: Para recibir correos reales, crea una cuenta gratis en Formspree.io, 
  // crea un formulario y coloca la URL aquí (ej: 'https://formspree.io/f/xbjnqpdq').
  formActionUrl: '', 
}
