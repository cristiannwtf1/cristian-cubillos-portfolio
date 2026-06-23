# Cristian Cubillos - Portafolio Profesional

Este es el portafolio profesional de **Cristian Cubillos**, Ingeniero de Sistemas y Full Stack Developer. La aplicación está diseñada y estructurada bajo principios de modularidad, código limpio, escalabilidad y un estricto tipado de datos.

El portafolio tiene como objetivo posicionar a Cristian como un especialista en el desarrollo de soluciones empresariales, la integración de sistemas y la automatización de procesos.

---

## 🚀 Tecnologías y Herramientas

- **Frontend Core:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Configurado con tipado estricto)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Uso nativo de `@tailwindcss/vite` e importación `@import "tailwindcss"`)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) (Animaciones fluidas basadas en scroll e interacciones micro-UI)
- **Iconografía:** [Lucide React](https://lucide.dev/)

---

## 🛠️ Arquitectura y Estructura del Proyecto

El proyecto está diseñado siguiendo una arquitectura desacoplada para separar la información (*data*) de la presentación visual (*componentes*):

```text
src/
├── assets/         # Imágenes, iconos y recursos estáticos
├── components/     # Componentes de UI comunes y reutilizables (Botones, Inputs, etc.)
├── data/           # ARCHIVOS DE DATOS (Toda la información del portafolio reside aquí)
│   ├── nav.data.ts
│   ├── hero.data.ts
│   ├── about.data.ts
│   ├── projects.data.ts
│   └── ...
├── hooks/          # React hooks personalizados
├── sections/       # Componentes de sección de la página principal (Navbar, Hero, Experience...)
└── types/          # Interfaces y contratos de TypeScript estrictos para cada módulo
```

### 💡 Ventajas de este Diseño
1. **Mantenibilidad:** Si deseas cambiar un proyecto, tu biografía, las métricas de impacto o tus datos de contacto, **no necesitas modificar el código HTML/React**. Solo debes actualizar el archivo correspondiente en `src/data/`.
2. **Escalabilidad:** Está preparado para soportar multi-idioma (i18n) en el futuro con un esfuerzo de implementación mínimo.
3. **Colaboración Eficiente:** Permite que desarrolladores y otros asistentes de IA entiendan los contratos de datos rápidamente leyendo `src/types/` y editen la información del portafolio de forma segura.

---

## 💻 Desarrollo Local

Para ejecutar y probar este proyecto de forma local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/cristiannwtf1/cristian-cubillos-portfolio.git
   cd cristian-cubillos-portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *El sitio estará disponible en [http://localhost:5173/](http://localhost:5173/)*

4. **Verificar el compilador de TypeScript:**
   ```bash
   npm run build
   ```
   *(O ejecuta `npx tsc --noEmit` para verificar la coherencia de tipos).*

---

## 🤖 Guía para otras IAs y Colaboradores

Si eres una IA que asiste a Cristian en este proyecto:
- **No queme datos en los componentes:** Toda nueva información debe ser estructurada en una interfaz en `src/types/` e inicializada en su respectivo archivo en `src/data/`.
- **Estilos:** Utiliza las clases de Tailwind CSS v4. Configura cualquier clase reutilizable o variables globales dentro de `src/index.css`.
- **Iconos:** Haz uso de la biblioteca de iconos `lucide-react`. La carga de iconos en los datos se hace por strings y se resuelve dinámicamente mediante el resolvedor en `sections` (mira un ejemplo en `Hero.tsx` o `Contact.tsx`).
