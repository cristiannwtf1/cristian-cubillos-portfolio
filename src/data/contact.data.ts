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
      value: 'cristian.cubillos@example.com', // TODO: Actualizar correo real
      href: 'mailto:cristian.cubillos@example.com',
      icon: 'Mail',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/cristian-cubillos', // TODO: Actualizar perfil real
      href: 'https://linkedin.com/in/cristian-cubillos',
      icon: 'Linkedin',
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'github.com/cristian-cubillos', // TODO: Actualizar perfil real
      href: 'https://github.com/cristian-cubillos',
      icon: 'Github',
    },
  ],
  showForm: true,
}
