export interface Project {
  id: string;
  title: { es: string; en: string };
  subtitle: { es: string; en: string };
  year: string;
  tech: string[];
  description: { es: string; en: string };
  challenge: { es: string; en: string };
  solution: { es: string; en: string };
  results: { es: string; en: string };
  stack: string[];
  link?: string;
  highlights: { es: string[]; en: string[] };
  image: string;
  ogImage: string;
}

export const projects: Project[] = [
  {
    id: 'weprom-mx',
    title: {
      es: 'WeProm Marketing | Sede LATAM',
      en: 'WeProm Marketing | LATAM HQ'
    },
    subtitle: {
      es: 'Sitio web y ecosistema corporativo premium',
      en: 'Premium corporate website and ecosystem'
    },
    year: '2026',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    description: {
      es: 'Ecosistema web corporativo premium de 9 secciones especializado para WeProm Marketing sede LATAM (agencia importante de marketing estratégico en Guadalajara, México). Desarrollo Pixel‑Perfect que traduce diseños complejos de Figma en código interactivo de alto rendimiento.',
      en: 'Premium 9‑section corporate web ecosystem for WeProm Marketing LATAM HQ (a leading strategic marketing agency in Guadalajara, Mexico). Pixel‑Perfect development that translates complex Figma designs into high‑performance interactive code.'
    },
    challenge: {
      es: 'Traducir un diseño corporativo sumamente complejo de Figma en una experiencia interactiva fluida y de alta gama sin comprometer los tiempos de carga.',
      en: 'Translating an extremely complex corporate Figma design into a smooth, high‑end interactive experience without compromising load times.'
    },
    solution: {
      es: 'Implementación de una arquitectura frontend basada en React y Tailwind CSS, complementada con animaciones avanzadas y micro‑interacciones gestionadas con Framer Motion.',
      en: 'Implementation of a React and Tailwind CSS frontend architecture, enhanced with advanced animations and micro‑interactions powered by Framer Motion.'
    },
    results: {
      es: 'Despliegue exitoso de sitio web y ecosistema corporativo robusto de 9 secciones, optimizado para SEO avanzado y con una experiencia de usuario de nivel internacional. Diseñado para transmitir confianza, posicionamiento y visión de negocio.',
      en: 'Successful launch of a robust 9‑section corporate website and ecosystem, optimized for advanced SEO and delivering an international‑grade user experience. Designed to convey trust, positioning, and business vision.'
    },
    stack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Figma UI/UX', 'Vercel', 'Vite', 'Canva Design', 'npm'],
    link: 'https://weprommarketing.mx',
    highlights: {
      es: [
        '→ Animaciones, efectos y transiciones avanzadas',
        '→ Microinteracciones para mejorar la experiencia UX',
        '→ Diseño responsive para desktop, tablet y mobile',
        '→ Arquitectura frontend modular y escalable',
        '→ Optimización de rendimiento y SEO avanzado',
        '→ Integración de una experiencia visual orientada a conversión'
      ],
      en: [
        '→ Advanced animations, effects and transitions',
        '→ Micro‑interactions to enhance UX',
        '→ Responsive design for desktop, tablet and mobile',
        '→ Modular and scalable frontend architecture',
        '→ Performance optimization and advanced SEO',
        '→ Conversion‑oriented visual experience'
      ]
    },
    image: '/Images/projects/weprommx-portada-project-by-advantechai.webp',
    ogImage: 'https://advantechai.org/Images/projects/weprommx-portada-project-by-advantechai.webp'
  },
  {
    id: 'weprom-promocionales',
    title: {
      es: 'WeProm | Artículos Promocionales',
      en: 'WeProm | Promotional Items'
    },
    subtitle: {
      es: 'Plataforma comercial y dashboard administrativo',
      en: 'Commercial platform and administrative dashboard'
    },
    year: '2026',
    tech: ['React.js', 'Tailwind CSS', 'Node.js'],
    description: {
      es: 'Plataforma web comercial y administrativa para la división internacional de artículos promocionales de WeProm LATAM. Integra una landing page interactiva con un Dashboard Administrativo privado (CRUD).',
      en: 'Commercial and administrative web platform for the international promotional items division of WeProm LATAM. Integrates an interactive landing page with a private Admin Dashboard (CRUD).'
    },
    challenge: {
      es: 'Crear un sistema unificado que permitiera tanto al cliente final cotizar productos como al equipo administrativo gestionar catálogos de forma autónoma y segura.',
      en: 'Build a unified system that allows both end‑customers to quote products and the administrative team to manage catalogs autonomously and securely.'
    },
    solution: {
      es: 'Desarrollo de una arquitectura Full-Stack conectando React y Tailwind con Node.js y Supabase para asegurar persistencia de datos en tiempo real y autenticación robusta.',
      en: 'Development of a Full‑Stack architecture connecting React and Tailwind with Node.js and Supabase to ensure real‑time data persistence and robust authentication.'
    },
    results: {
      es: 'Automatización completa del flujo de solicitudes comerciales y optimización en la administración de inventarios digitales.',
      en: 'Full automation of the commercial request flow and optimization of digital inventory management.'
    },
    stack: ['React.js', 'Tailwind CSS', 'Node.js', 'Supabase', 'Vercel', 'Canva Design', 'Vite', 'npm'],
    link: 'https://promocionales.weprom.mx/',
    highlights: {
      es: [
        '→ Arquitectura Full-Stack con autenticación y roles',
        '→ Panel administrativo con operaciones CRUD',
        '→ Landing page de alta conversión',
        '→ Integración con Supabase para datos en tiempo real',
        '→ Diseño responsive y optimización de rendimiento',
        '→ Flujo de cotización automatizado'
      ],
      en: [
        '→ Full‑Stack architecture with authentication and roles',
        '→ Administrative panel with CRUD operations',
        '→ High‑conversion landing page',
        '→ Supabase integration for real‑time data',
        '→ Responsive design and performance optimization',
        '→ Automated quotation flow'
      ]
    },
    image: '/Images/projects/weprompromocionales-portada-project-by-advantechai.webp',
    ogImage: 'https://advantechai.org/Images/projects/weprompromocionales-portada-project-by-advantechai.webp'
  },
  {
    id: 'ortopedia-justo-sierra',
    title: {
      es: 'Ortopedia Justo Sierra | Unidad de Especialidades Ortopédicas',
      en: 'Ortopedia Justo Sierra | Orthopedic Specialties Unit'
    },
    subtitle: {
      es: 'Landing page institucional para unidad médica de alta especialidad',
      en: 'Institutional landing page for a high‑specialty medical unit'
    },
    year: '2026',
    tech: ['React.js', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    description: {
      es: 'Plataforma digital para la Unidad de Especialidades Ortopédicas y Traumatológicas Justo Sierra, con sede en Guadalajara, Jalisco. El sitio web presenta un equipo de cirujanos subespecialistas, certificaciones de excelencia, convenios con aseguradoras y un catálogo de soluciones quirúrgicas de alta especialidad. El diseño combina una paleta de colores limpia y profesional (blanco, azul oscuro, grises y acentos vibrantes) con una experiencia de usuario fluida, generando confianza y credibilidad en el paciente.',
      en: 'Digital platform for the Justo Sierra Orthopedic and Traumatology Specialties Unit, based in Guadalajara, Jalisco. The website showcases a team of sub‑specialist surgeons, excellence certifications, insurance agreements, and a catalog of high‑specialty surgical solutions. The design combines a clean and professional color palette (white, dark blue, grays, and vibrant accents) with a smooth user experience, building trust and credibility with patients.'
    },
    challenge: {
      es: 'El principal desafío fue traducir la autoridad y experiencia médica de un grupo de cirujanos ortopédicos en una experiencia digital que transmitiera confianza, seguridad y cercanía. La landing page debía comunicar credibilidad institucional (certificaciones, años de experiencia, número de procedimientos) a la vez que guiaba al usuario potencial hacia la acción de agendar una cita de forma clara y sencilla, manteniendo un diseño sobrio pero elegante.',
      en: 'The main challenge was translating the medical authority and experience of a group of orthopedic surgeons into a digital experience that conveys trust, safety, and closeness. The landing page had to communicate institutional credibility (certifications, years of experience, number of procedures) while guiding potential users toward booking an appointment clearly and simply, maintaining a sober yet elegant design.'
    },
    solution: {
      es: 'Se optó por una arquitectura frontend con React y Tailwind CSS, priorizando una jerarquía visual impecable y una navegación intuitiva. La estructura se organizó en secciones modulares: hero con propuesta de valor, especialidades quirúrgicas, equipo médico, testimonios, certificaciones y contacto. Se utilizó una paleta de colores neutral y profesional (blanco, azules y grises) para reforzar la identidad institucional, con acentos que destacan las llamadas a la acción y generan un contraste visual elegante.',
      en: 'We chose a React and Tailwind CSS frontend architecture, prioritizing an impeccable visual hierarchy and intuitive navigation. The structure was organized into modular sections: hero with value proposition, surgical specialties, medical team, testimonials, certifications and contact. A neutral and professional color palette (white, blues, and grays) was used to reinforce the institutional identity, with accents that highlight calls to action and create elegant visual contrast.'
    },
    results: {
      es: 'La landing page ha mejorado la captación de pacientes para la unidad, facilitando la agenda de citas a través de WhatsApp y generando confianza mediante la presentación del equipo médico y los casos de éxito. Los médicos han destacado la claridad de la información y el diseño profesional, lo que ha incrementado las consultas y la percepción de calidad del servicio.',
      en: 'The landing page has improved patient acquisition for the unit, facilitating appointment scheduling via WhatsApp and building trust through the presentation of the medical team and success stories. The doctors have highlighted the clarity of the information and the professional design, which has increased consultations and the perception of service quality.'
    },
    stack: ['React.js', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Responsive Design', 'Pixel Perfect Design'],
    link: 'https://ortopediajustosierra.mx/',
    highlights: {
      es: [
        '→ Diseño UI/UX profesional orientado a la conversión y confianza',
        '→ Animaciones, efectos y transiciones avanzadas con Framer Motion',
        '→ Responsive para desktop, tablet y móvil',
        '→ Arquitectura frontend modular y escalable',
        '→ Optimización de rendimiento y SEO',
        '→ Integración con WhatsApp para agendamiento de citas'
      ],
      en: [
        '→ Professional UI/UX design focused on conversion and trust',
        '→ Advanced animations, effects and transitions with Framer Motion',
        '→ Responsive for desktop, tablet and mobile',
        '→ Modular and scalable frontend architecture',
        '→ Performance optimization and SEO',
        '→ WhatsApp integration for appointment scheduling'
      ]
    },
    image: '/Images/projects/ortopediajustosierra-portada-project-by-advantechai.webp',
    ogImage: 'https://advantechai.org/Images/projects/ortopediajustosierra-portada-project-by-advantechai.webp'
  }
];