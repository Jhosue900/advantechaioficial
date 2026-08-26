export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  tech: string[];
  description: string;
  challenge: string;
  solution: string;
  results: string;
  stack: string[];
  link?: string;
  highlights: string[];
  image: string;        // Ruta relativa a la imagen (desde src/)
  ogImage: string;
}

export const projects: Project[] = [
  {
    id: 'weprom-mx',
    title: 'WeProm MX | Sede LATAM',
    subtitle: 'Sitio web y ecosistema corporativo premium',
    year: '2026',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    description:
      'Ecosistema web corporativo premium de 9 secciones especializado para WeProm Marketing sede LATAM (agencia importante de marketing estratégico en Guadalajara, México). Desarrollo Pixel‑Perfect que traduce diseños complejos de Figma en código interactivo de alto rendimiento.',
    challenge:
      'Traducir un diseño corporativo sumamente complejo de Figma en una experiencia interactiva fluida y de alta gama sin comprometer los tiempos de carga.',
    solution:
      'Implementación de una arquitectura frontend basada en React y Tailwind CSS, complementada con animaciones avanzadas y micro‑interacciones gestionadas con Framer Motion.',
    results:
      'Despliegue exitoso de sitio web y ecosistema corporativo robusto de 9 secciones, optimizado para SEO avanzado y con una experiencia de usuario de nivel internacional. Diseñado para transmitir confianza, posicionamiento y visión de negocio.',
    stack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Figma UI/UX', 'Vercel', 'Vite', 'Canva Design', 'npm'],
    link: 'https://weprommarketing.mx',
    highlights: [
      '→ Animaciones, efectos y transiciones avanzadas',
      '→ Microinteracciones para mejorar la experiencia UX',
      '→ Diseño responsive para desktop, tablet y mobile',
      '→ Arquitectura frontend modular y escalable',
      '→ Optimización de rendimiento y SEO avanzado',
      '→ Integración de una experiencia visual orientada a conversión'
    ],
    image: '/Images/projects/weprommx-portada-project-by-advantechai.webp',
    ogImage: 'https://www.advantechai.org/Images/projects/weprommx-portada-project-by-advantechai.webp'
  },
  // Aquí puedes agregar más proyectos en el futuro

  {
    id: 'weprom-promocionales',
    title: 'WeProm | Artículos Promocionales',
    subtitle: 'Plataforma comercial y dashboard administrativo',
    year: '2026',
    tech: ['React.js', 'Tailwind CSS', 'Node.js'],
    description:
      'Plataforma web comercial y administrativa para la división internacional de artículos promocionales de WeProm LATAM. Integra una landing page interactiva con un Dashboard Administrativo privado (CRUD).',
    challenge:
      'Crear un sistema unificado que permitiera tanto al cliente final cotizar productos como al equipo administrativo gestionar catálogos de forma autónoma y segura.',
    solution:
      'Desarrollo de una arquitectura Full-Stack conectando React y Tailwind con Node.js y Supabase para asegurar persistencia de datos en tiempo real y autenticación robusta.',
    results:
      'Automatización completa del flujo de solicitudes comerciales y optimización en la administración de inventarios digitales.',
    stack: ['React.js', 'Tailwind CSS', 'Node.js', 'Supabase', 'Vercel', 'Canva Design', 'Vite', 'npm'],
    link: 'https://promocionales.weprom.mx/',
    highlights: [
      '→ Arquitectura Full-Stack con autenticación y roles',
      '→ Panel administrativo con operaciones CRUD',
      '→ Landing page de alta conversión',
      '→ Integración con Supabase para datos en tiempo real',
      '→ Diseño responsive y optimización de rendimiento',
      '→ Flujo de cotización automatizado'
    ],
    image: '/Images/projects/weprompromocionales-portada-project-by-advantechai.webp',
    ogImage: 'https://www.advantechai.org/Images/projects/weprompromocionales-portada-project-by-advantechai.webp'
  },

];