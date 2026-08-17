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
    image: '/src/Images/projects/weprommx-portada-project-by-advantechai.webp',
    ogImage: 'https://www.advantechai.org/Images/projects/weprommx-portada-project-by-advantechai.webp'
  }
  // Aquí puedes agregar más proyectos en el futuro
];