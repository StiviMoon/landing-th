
# 🏗️ Torhann Ingeniería S.A.S. - Landing Page

Landing page profesional para **Torhann Ingeniería S.A.S.**, empresa colombiana especializada en soluciones integrales de ingeniería civil, ambiental y agroindustrial.

---

## 🚀 Características

- ✅ **Diseño Responsivo** - Optimizado para todos los dispositivos
- ✅ **Next.js 15.3.4** - Framework React de última generación
- ✅ **Tailwind CSS v4** - Estilos modernos y configurables
- ✅ **TypeScript** - Código tipado y mantenible
- ✅ **Componentes Modulares** - Arquitectura escalable
- ✅ **SEO Optimizado** - Meta tags y estructura semántica
- ✅ **Galería Interactiva** - Modal con navegación de imágenes
- ✅ **Slider Automático** - Carrusel de clientes y testimonios
- ✅ **Botón WhatsApp** - Contacto directo flotante
- ✅ **Formulario de Contacto** - Validación y UX optimizada

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15.3.4 (App Router)
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS v4
- **Iconos**: Lucide React
- **Imágenes**: Next.js Image Optimization
- **Animaciones**: CSS Transitions & Keyframes

---

## 📦 Dependencias

```json
{
  "next": "15.3.4",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5",
  "tailwindcss": "^4",
  "lucide-react": "^0.522.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.1"
}
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Pasos

1. **Clonar el repositorio**

```bash
git clone [URL_DEL_REPOSITORIO]
cd landing-th
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**

```
http://localhost:3000
```

---

## 📁 Estructura del Proyecto

```plaintext
landing-th/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Benefits.tsx
│   │   ├── Timeline.tsx
│   │   ├── Team.tsx
│   │   ├── Gallery.tsx
│   │   ├── ClientsSlider.tsx
│   │   ├── TestimonialsSlider.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
└── README.md
```

---

## 🎨 Paleta de Colores

| Color        | Código    | Uso                                     |
|--------------|-----------|------------------------------------------|
| **Primary**  | `#0D1B2A` | Navbar, footer, títulos                  |
| **Accent**   | `#1B263B` | Enlaces activos, botones secundarios     |
| **Highlight**| `#0077B6` | Botones primarios, íconos                |
| **Background**| `#F4F4F4`| Fondo de secciones                       |
| **Success**  | `#6CA965` | Elementos de sostenibilidad              |
| **Gold**     | `#FFD700` | Acentos de prestigio                     |

---

## 📱 Secciones de la Landing

1. **Hero** - Presentación principal con call-to-action
2. **Nosotros** - Misión, visión, valores y descripción
3. **Servicios** - Grid de 6 servicios principales
4. **Beneficios** - Lista de ventajas competitivas
5. **Trayectoria** - Timeline de hitos importantes
6. **Equipo** - Perfiles del equipo directivo
7. **Galería** - Imágenes del trabajo en campo
8. **Clientes** - Slider automático de logos
9. **Testimonios** - Carrusel de recomendaciones
10. **Contacto** - Formulario e información de contacto

---

## ⚙️ Configuración

### Botón de WhatsApp

Editar el número en `app/components/WhatsAppButton.tsx`:

```ts
const whatsappNumber = "573028404105" // Cambiar por el número real
```

### Información de Contacto

Actualizar los datos en:

- `app/components/ContactForm.tsx`
- `app/components/Footer.tsx`

### Colores del Tema

Modificar en `app/globals.css` dentro de la sección `@theme`.

---

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
# Subir carpeta .next a Netlify
```

### Servidor Propio

```bash
npm run build
npm start
```

---

## 📞 Información de Contacto

**Torhann Ingeniería S.A.S.**

- 📞 **Teléfonos**: 302 840 4105 | 314 817 6370  
- 📧 **Email**: torhanningenieriasas@gmail.com  
- 🌐 **Web**: www.torhanningenieria.com  
- 📲 **Instagram**: [@Torhann_ingenieria](https://www.instagram.com/Torhann_ingenieria)

---

## 📄 Licencia

© 2025 Torhann Ingeniería S.A.S. - Todos los derechos reservados.

---

**Desarrollado con ❤️ para Torhann Ingeniería S.A.S.**
