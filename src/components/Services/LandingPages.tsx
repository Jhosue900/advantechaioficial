import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';          // sube un nivel
import Footer from '../Footer'; 
import {
  ArrowRight, Target, CheckCircle2, Zap, BarChart2, MousePointerClick,
  Layers, TrendingUp, Clock, Users, Star, ChevronDown, X, Check,
  Globe, Megaphone, ShoppingCart, Calendar, Mail, FileText,
  Search, Palette, Code2, Rocket, Settings, Shield, HeartHandshake,
  AlertCircle, LightbulbIcon,
} from 'lucide-react';

import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/* ════════════════════════════════════════════
   DATA
════════════════════════════════════════════ */

const stats = [
  { value: '+87%', label: 'aumento promedio en conversiones' },
  { value: '<2s',  label: 'tiempo de carga objetivo' },
  { value: '100%', label: 'responsivo en todos los dispositivos' },
];

const whatIsPoints = [
  'Tiene un solo objetivo claro: que el visitante realice una acción específica.',
  'No tiene menú de navegación ni enlaces que distraigan al usuario.',
  'El mensaje está redactado para un segmento de audiencia concreto.',
  'Cada sección empuja al visitante un paso más cerca de la conversión.',
  'Está conectada a herramientas de medición para saber exactamente qué funciona.',
];

const landingVsWeb = [
  { aspect: 'Objetivo',              landing: 'Una acción específica (convertir)',    web: 'Informar, explorar, navegar' },
  { aspect: 'Navegación',            landing: 'Sin menú ni distracciones',            web: 'Menú completo con secciones' },
  { aspect: 'Audiencia',             landing: 'Segmento muy específico',              web: 'Audiencia general' },
  { aspect: 'Contenido',             landing: 'Enfocado en una oferta',              web: 'Múltiples productos o servicios' },
  { aspect: 'Uso ideal',             landing: 'Campañas pagas, email, SEO',          web: 'Presencia de marca, SEO general' },
  { aspect: 'Conversión esperada',   landing: '2 % – 10 % o más',                   web: '0.5 % – 2 %' },
];

const useCases = [
  {
    Icon: Megaphone,
    title: 'Campañas de Google Ads',
    description: 'Cada grupo de anuncios merece su propia landing. Llevar tráfico pago a tu página principal es dinero quemado: el mensaje no coincide y el usuario rebota.',
    example: 'Clínica dental → landing para "blanqueamiento dental en Medellín"',
  },
  {
    Icon: Globe,
    title: 'Campañas de Meta Ads',
    description: 'En Facebook e Instagram, el usuario no está buscando — está siendo interrumpido. La landing debe capturar la atención en 3 segundos y convertir sin fricción.',
    example: 'Gym → landing para "prueba gratuita de 7 días"',
  },
  {
    Icon: Mail,
    title: 'Email marketing',
    description: 'Cuando envías una campaña de correo, el link de destino define si el suscriptor actúa o no. Una landing específica por campaña multiplica los resultados.',
    example: 'SaaS → landing para "oferta especial por Black Friday"',
  },
  {
    Icon: ShoppingCart,
    title: 'Lanzamiento de producto',
    description: 'Una landing de lanzamiento genera anticipación, captura interesados antes del día D y convierte en ventas el día que abres el carrito.',
    example: 'Curso online → landing de preventa con cuenta regresiva',
  },
  {
    Icon: Calendar,
    title: 'Generación de leads',
    description: 'Si vendes servicios de alto valor, el objetivo no es vender de inmediato: es conseguir el contacto. Una landing de captura con lead magnet hace exactamente eso.',
    example: 'Consultora → landing con ebook gratuito a cambio del email',
  },
  {
    Icon: Search,
    title: 'SEO local o de nicho',
    description: 'Las landing pages optimizadas para palabras clave específicas capturan tráfico cualificado de Google sin pagar por anuncios.',
    example: 'Abogado → landing para "abogado laboral en Bogotá"',
  },
];

const anatomy = [
  { num: '01', section: 'Hero',              what: 'Título principal, subtítulo y primer CTA',    why: 'Es lo primero que ve el visitante. En 5 segundos debe entender qué ofreces, para quién es y por qué le importa.' },
  { num: '02', section: 'Propuesta de valor',what: 'Los 3–4 beneficios principales de tu oferta', why: 'Transforma características en beneficios concretos. El visitante no compra funcionalidades, compra resultados.' },
  { num: '03', section: 'Prueba social',     what: 'Testimonios, logos de clientes, casos de éxito', why: 'El 92% de las personas confía más en la opinión de otros usuarios que en el mensaje de la marca.' },
  { num: '04', section: 'Cómo funciona',     what: 'Proceso paso a paso, sencillo y claro',      why: 'Elimina la incertidumbre. El visitante necesita saber qué pasará después de hacer clic.' },
  { num: '05', section: 'Objeciones',        what: 'FAQ, garantías, sellos de confianza',         why: 'Todo visitante tiene dudas antes de actuar. Esta sección las resuelve antes de que abandone.' },
  { num: '06', section: 'CTA final',         what: 'Llamada a acción clara y formulario o botón', why: 'El visitante que llegó hasta aquí está listo. Este es el momento de pedirle que actúe.' },
];

const included = [
  {
    Icon: FileText, title: 'Estrategia y briefing',
    items: ['Análisis de tu oferta y competencia', 'Definición del cliente ideal y su motivación', 'Identificación del único objetivo de conversión', 'Estructura y jerarquía de secciones'],
  },
  {
    Icon: Palette, title: 'Diseño UI/UX',
    items: ['Diseño responsivo mobile-first', 'Aplicación de tu identidad visual', 'Microinteracciones y animaciones sutiles', 'Optimización de jerarquía visual y lectura'],
  },
  {
    Icon: FileText, title: 'Copywriting persuasivo',
    items: ['Título principal orientado a beneficio', 'Copy de cada sección con foco en conversión', 'CTA que genera acción, no confusión', 'Tono adaptado a tu audiencia y marca'],
  },
  {
    Icon: Code2, title: 'Desarrollo técnico',
    items: ['Código limpio, semántico y accesible', 'Velocidad de carga < 2 segundos', 'Formulario con integración a CRM o email', 'Estructura de URL y metaetiquetas SEO'],
  },
  {
    Icon: BarChart2, title: 'Analítica y tracking',
    items: ['Instalación de Google Analytics 4', 'Seguimiento de eventos y conversiones', 'Panel de métricas listo desde el día 1'],
  },
  {
    Icon: Rocket, title: 'Lanzamiento',
    items: ['Publicación en tu dominio o subdominio', 'Configuración de SSL (HTTPS)', 'Pruebas en múltiples dispositivos y navegadores', '2 rondas de ajustes post-lanzamiento incluidas'],
  },
];

const process = [
  {
    step: '01', title: 'Briefing estratégico', time: '1–2 días',
    description: 'Te hacemos las preguntas correctas: ¿Qué vendes? ¿A quién? ¿Qué quieres que hagan? ¿Cuál es tu ventaja diferencial? Con eso definimos la estructura y el mensaje de la página.',
    deliverable: 'Documento de estrategia y wireframe de secciones',
  },
  {
    step: '02', title: 'Diseño visual y copy', time: '3–5 días',
    description: 'Diseñamos la interfaz completa y redactamos cada línea de texto pensando en tu cliente ideal. Revisas el diseño estático antes de que escribamos una sola línea de código.',
    deliverable: 'Diseño en Figma + borrador de copy para aprobación',
  },
  {
    step: '03', title: 'Desarrollo y optimización', time: '3–4 días',
    description: 'Convertimos el diseño en una página real. Optimizamos imágenes, configuramos formularios, instalamos píxeles de seguimiento y ajustamos el rendimiento hasta alcanzar < 2s de carga.',
    deliverable: 'Página funcional en entorno de staging para revisión',
  },
  {
    step: '04', title: 'Revisión y ajustes', time: '1–2 días',
    description: 'Revisamos juntos la página completa. Aplicamos los cambios que necesites — texto, orden de secciones, imágenes. Esta etapa incluye hasta dos rondas de revisión.',
    deliverable: 'Página ajustada y aprobada por ti',
  },
  {
    step: '05', title: 'Lanzamiento', time: '1 día',
    description: 'Publicamos la página en tu dominio, configuramos el SSL, conectamos el dominio y verificamos que todo funcione correctamente en desktop y móvil antes de darte el "todo listo".',
    deliverable: 'Landing page publicada y activa',
  },
];

const plans = [
  {
    name: 'Esencial',
    price: 'Desde $590 USD',
    description: 'Para negocios que quieren una landing profesional rápida y lista para conectar a sus campañas.',
    features: ['Hasta 5 secciones', 'Diseño responsivo', 'Formulario de contacto', 'Google Analytics instalado', '1 ronda de revisiones', 'Entrega en 7 días hábiles'],
    notIncluded: ['Copywriting incluido', 'A/B testing setup', 'Integración con CRM'],
    cta: 'Solicitar cotización',
    highlighted: false,
  },
  {
    name: 'Conversión',
    price: 'Desde $990 USD',
    description: 'El plan más elegido. Incluye estrategia, copywriting y tracking completo desde el primer día.',
    features: ['Hasta 8 secciones', 'Estrategia de conversión incluida', 'Copywriting persuasivo', 'Diseño responsivo premium', 'Google Analytics + Meta Pixel', 'Seguimiento de eventos y conversiones', '2 rondas de revisiones', 'Entrega en 10 días hábiles'],
    notIncluded: ['Integración avanzada con CRM'],
    cta: 'Solicitar cotización',
    highlighted: true,
  },
  {
    name: 'Performance',
    price: 'Desde $1,590 USD',
    description: 'Para negocios que invierten fuertemente en pauta y necesitan una máquina de conversión completa.',
    features: ['Secciones ilimitadas', 'Estrategia profunda y análisis de competencia', 'Copywriting premium', 'A/B testing configurado', 'Integración con CRM (HubSpot, ActiveCampaign, etc.)', 'Tracking avanzado con eventos personalizados', 'Revisiones ilimitadas (30 días)', 'Entrega en 13 días hábiles'],
    notIncluded: [],
    cta: 'Solicitar cotización',
    highlighted: false,
  },
];

const faqs = [
  {
    q: '¿Una landing page es lo mismo que un sitio web?',
    a: 'No. Un sitio web tiene múltiples páginas, navegación y sirve para que el usuario explore. Una landing page tiene una sola página, sin menú, diseñada para lograr un único objetivo: que el visitante complete una acción específica (comprar, agendar, descargar, registrarse). Para campañas publicitarias, una landing page convierte entre 3 y 5 veces más que un sitio web convencional.',
  },
  {
    q: '¿Necesito una landing por cada campaña?',
    a: 'Idealmente, sí. Cuando el mensaje del anuncio y el mensaje de la landing coinciden perfectamente (lo que se llama "message match"), la tasa de conversión sube significativamente. Si tienes campañas para distintos públicos o productos, cada una se beneficia de su propia landing con el mensaje correcto.',
  },
  {
    q: '¿Cuánto tiempo toma tener mi landing page lista?',
    a: 'Entre 7 y 13 días hábiles según el plan. El factor que más impacta el tiempo es la agilidad en las revisiones: si apruebas cada etapa rápido, podemos ir más rápido. También ofrecemos entregas express bajo consulta.',
  },
  {
    q: '¿Incluye dominio y hosting?',
    a: 'El hosting y el dominio no están incluidos en el precio base, pero te asesoramos en la mejor opción según tu situación. Si ya tienes hosting, publicamos la landing ahí. Si no tienes, te recomendamos opciones de bajo costo y lo configuramos todo.',
  },
  {
    q: '¿Puedo hacer cambios después del lanzamiento?',
    a: 'Sí. Los planes incluyen rondas de revisión post-lanzamiento (1 o 2 según el plan). Después de ese período, los cambios tienen un costo por hora según la complejidad. También ofrecemos un plan de mantenimiento mensual para quienes necesitan actualizaciones frecuentes.',
  },
  {
    q: '¿La landing funciona con Google Ads y Meta Ads?',
    a: 'Es exactamente para lo que están construidas. Instalamos Google Analytics 4, el Meta Pixel y configuramos los eventos de conversión para que tus campañas puedan optimizarse correctamente. También configuramos los UTMs para que puedas rastrear el origen de cada lead.',
  },
  {
    q: '¿Puedo ver cómo queda antes de publicarla?',
    a: 'Sí, siempre. Primero apruebas el diseño estático en Figma, y luego la página desarrollada se te presenta en un entorno de pruebas (staging) antes de publicarla. No publicamos nada sin tu aprobación.',
  },
  {
    q: '¿Hacen el seguimiento de los resultados después?',
    a: 'Entregamos la landing con analíticas instaladas y un acceso a los reportes. Si quieres un servicio de seguimiento mensual para interpretar los datos y proponer mejoras, tenemos un plan de optimización continua disponible.',
  },
];

/* ════════════════════════════════════════════
   SUB-COMPONENTS
════════════════════════════════════════════ */

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[340px] mx-auto lg:mx-0">
      {/* Browser mockup */}
      <div
        className="rounded-2xl border border-border/40 bg-background overflow-hidden"
        style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.07)' }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-border/40 bg-background/80">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400/60 shrink-0" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400/60 shrink-0" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400/60 shrink-0" />
          <span className="flex-1 mx-2 sm:mx-3 h-5 rounded-md bg-border/30 text-[10px] text-primary-dark/30 flex items-center px-2 truncate">
            tuempresa.com/oferta
          </span>
        </div>

        {/* Page skeleton */}
        <div className="p-3 sm:p-4 space-y-3">
          <div className="space-y-1.5">
            <div className="h-3 w-4/5 rounded bg-primary-dark/10" />
            <div className="h-3 w-3/5 rounded bg-primary-dark/10" />
          </div>
          <div className="space-y-1">
            <div className="h-2 w-full rounded bg-primary-dark/6" />
            <div className="h-2 w-5/6 rounded bg-primary-dark/6" />
            <div className="h-2 w-4/6 rounded bg-primary-dark/6" />
          </div>
          <div className="h-8 w-40 sm:w-44 rounded-lg bg-accent/90 flex items-center justify-center">
            <span className="text-[9px] sm:text-[10px] font-semibold text-white tracking-wide whitespace-nowrap">
              Agenda tu reunión →
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
            {['⭐ 4.9/5', '✓ Sin riesgo', '🔒 Seguro'].map((badge) => (
              <span
                key={badge}
                className="text-[9px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-accent/8 text-accent font-medium border border-accent/20 whitespace-nowrap"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-3 divide-x divide-border/30 border-t border-border/40">
          {[
            { v: '3.2%', l: 'Conv. rate' },
            { v: '1.4s',  l: 'Carga' },
            { v: '94',    l: 'PageSpeed' },
          ].map(({ v, l }) => (
            <div key={l} className="py-2.5 sm:py-3 text-center">
              <p className="text-xs sm:text-sm font-bold text-primary-dark">{v}</p>
              <p className="text-[9px] sm:text-[10px] text-primary-dark/40 mt-0.5">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge – top right */}
      <div
        className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-accent text-white rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold whitespace-nowrap"
        style={{ boxShadow: '0 4px 16px rgba(29,158,117,0.35)' }}
      >
        +87% conversiones
      </div>

      {/* Floating card – bottom left */}
      <div
        className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-background border border-border/40 rounded-xl px-2.5 sm:px-3 py-2 sm:py-2.5 flex items-center gap-1.5 sm:gap-2"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-accent/15 flex items-center justify-center text-accent text-xs font-bold shrink-0">
          ✓
        </div>
        <div>
          <p className="text-[11px] sm:text-xs font-semibold text-primary-dark leading-tight whitespace-nowrap">
            Nuevo lead
          </p>
          <p className="text-[9px] sm:text-[10px] text-primary-dark/40 whitespace-nowrap">
            hace 2 minutos
          </p>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-border/30 last:border-0">
      <summary className="flex items-start sm:items-center justify-between py-4 sm:py-5 cursor-pointer list-none select-none text-sm font-medium text-primary-dark gap-3">
        <span className="leading-snug">{q}</span>
        <ChevronDown className="w-4 h-4 text-accent shrink-0 transition-transform duration-200 group-open:rotate-180 mt-0.5 sm:mt-0" />
      </summary>
      <p className="text-sm text-primary-dark/60 leading-relaxed pb-4 sm:pb-5 -mt-1">{a}</p>
    </details>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3 sm:mb-4 animate-on-scroll">
      {children}
    </p>
  );
}

/* ════════════════════════════════════════════
   PAGE
════════════════════════════════════════════ */

export default function LandingPages() {
  useScrollAnimation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // 👆 Fin de lo agregado

  return (

    <>
      <Helmet>
        <title>Diseño de Landing Pages Premium de Alta Conversión | Advantech AI</title>
        <meta name="description" content="Landing pages corporativas con rendimiento ultra rápido, optimizadas para SEO y campañas de tráfico pago. Diseño y desarrollo de alta conversión." />
        <link rel="canonical" href="https://www.advantechai.org/LandingPages" />
        <meta property="og:title" content="Diseño de Landing Pages Premium de Alta Conversión | Advantech AI" />
        <meta property="og:description" content="Páginas de aterrizaje diseñadas para convertir visitantes en clientes. Optimización para conversión y velocidad." />
        <meta property="og:url" content="https://www.advantechai.org/LandingPages" />
      </Helmet>

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />



      <div className="overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
    
        {/* ══════════════════════════════════════════════
            HERO
            Mobile:  stacked (copy above, visual below)
            Tablet+: 2-col grid
        ══════════════════════════════════════════════ */}
        <section className="relative min-h-[100svh] sm:min-h-[90vh] pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 lg:pb-32 flex items-center overflow-hidden">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="absolute inset-0 grid-pattern opacity-50" />
        
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
              {/* Copy column */}
              <div className="space-y-6 sm:space-y-8">
                <p className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest animate-on-scroll">
                  <Target className="w-3.5 h-3.5 shrink-0" />
                  Landing Pages
                </p>
        
                <h1
                  className="text-[2rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-balance animate-slide-up"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Páginas que{' '}
                  <span className="text-accent">convierten</span>{' '}
                  visitas en{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">clientes.</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-accent/30"
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
        
                <p className="text-base sm:text-lg md:text-xl text-primary-dark/60 leading-relaxed max-w-xl animate-slide-up stagger-1">
                  Diseñamos y desarrollamos landing pages de alto rendimiento con un único
                  propósito: que tu tráfico se convierta en leads, ventas o reservas — de
                  forma predecible y medible.
                </p>
        
                {/* Stats row – wraps naturally on tiny screens */}
                <div className="flex flex-wrap gap-x-6 gap-y-4 animate-slide-up stagger-1">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="flex flex-col min-w-0">
                      <span
                        className="text-xl sm:text-2xl font-bold text-accent"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {value}
                      </span>
                      <span className="text-xs text-primary-dark/50 mt-0.5 leading-snug max-w-[130px]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTAs – full-width on mobile, inline on sm+ */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-slide-up stagger-2">
                  <a href="#contacto" className="btn-primary text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 text-center">
                    Quiero mi landing page
                    <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
                  </a>
                  <button
                    onClick={() => navigate(-1)}
                    className="btn-secondary text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5"
                  >
                    Ver todos los servicios
                  </button>
                </div>
              </div>
                
              {/* Visual column – centred on mobile, right-aligned on lg */}
              <div className="flex items-center justify-center lg:justify-end animate-scale-in stagger-2 py-10 sm:py-8">
                <HeroVisual />
              </div>
            </div>
          </div>
                
          <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
                
        {/* ══════════════════════════════════════════════
            ¿QUÉ ES UNA LANDING PAGE?
            Mobile:  stacked (explanation first, card below)
            Tablet:  stacked
            Desktop: 2-col
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 relative">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
        
              {/* Explanation */}
              <div>
                <SectionLabel>Concepto</SectionLabel>
                <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                  ¿Qué es exactamente una{' '}
                  <span className="text-accent">landing page</span>?
                </h2>
                <p className="text-sm sm:text-base text-primary-dark/60 leading-relaxed mb-4 sm:mb-6 animate-on-scroll">
                  Una landing page (o página de aterrizaje) es una página web diseñada con un
                  único objetivo:{' '}
                  <strong className="text-primary-dark font-semibold">
                    lograr que el visitante realice una acción concreta
                  </strong>
                  . No es un sitio web, no es un catálogo y no tiene menú de navegación.
                </p>
                <p className="text-sm sm:text-base text-primary-dark/60 leading-relaxed mb-6 sm:mb-8 animate-on-scroll">
                  Cuando alguien hace clic en tu anuncio de Google, tu publicación de Instagram
                  o el link de tu email, llega a esta página. Si la página no está diseñada
                  para convencer a ese visitante específico, estás perdiendo dinero — sin
                  importar cuánto inviertas en tráfico.
                </p>
        
                <div className="space-y-3 animate-on-scroll">
                  {whatIsPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <p className="text-sm text-primary-dark/70 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
                
              {/* Analogy card */}
              <div className="animate-on-scroll">
                <div
                  className="rounded-2xl border border-border/40 bg-background p-6 sm:p-8 relative overflow-hidden"
                  style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.05)' }}
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-accent/80" />
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 sm:mb-6">
                    <LightbulbIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-primary-dark mb-3">
                    La analogía del vendedor
                  </h3>
                  <p className="text-sm text-primary-dark/60 leading-relaxed mb-4 sm:mb-5">
                    Imagina que tienes un vendedor que trabaja 24/7, nunca se cansa, no pide
                    comisión y habla con todos tus potenciales clientes al mismo tiempo. Eso
                    es una landing page bien construida.
                  </p>
                  <p className="text-sm text-primary-dark/60 leading-relaxed mb-4 sm:mb-5">
                    Un sitio web genérico es como una tienda donde el cliente entra, da vueltas
                    y se va sin comprar nada porque nadie le habló directamente. Una landing page
                    es ese vendedor que saluda, entiende el problema y lleva al cliente a la caja.
                  </p>
                  <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-accent/6 border border-accent/20">
                    <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-xs text-primary-dark/70 leading-relaxed">
                      <strong className="text-primary-dark">Dato clave:</strong> Los negocios
                      que usan landing pages específicas por campaña reportan tasas de conversión
                      entre 3x y 5x superiores a los que envían el tráfico a su página de inicio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                
        {/* ══════════════════════════════════════════════
            LANDING VS SITIO WEB
            Mobile:  horizontal scroll on table (overflow-x-auto)
            Tablet+: full table
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
              <SectionLabel>Comparación</SectionLabel>
              <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                Landing page vs.{' '}
                <span className="text-accent">sitio web</span>
              </h2>
              <p className="section-subtitle mx-auto animate-on-scroll">
                No son lo mismo y no cumplen el mismo rol. Entender la diferencia es el
                primer paso para no desperdiciar presupuesto en publicidad.
              </p>
            </div>
        
            {/* Scrollable wrapper for small screens */}
            <div className="animate-on-scroll overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <div className="min-w-[560px] sm:min-w-0 rounded-2xl border border-border/40 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-3 bg-accent/6 border-b border-border/40">
                  <div className="px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-semibold text-primary-dark/50 uppercase tracking-widest">
                    Aspecto
                  </div>
                  <div className="px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-semibold text-accent uppercase tracking-widest border-l border-border/40 flex items-center gap-1.5 sm:gap-2">
                    <Target className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    Landing Page
                  </div>
                  <div className="px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-semibold text-primary-dark/50 uppercase tracking-widest border-l border-border/40 flex items-center gap-1.5 sm:gap-2">
                    <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    Sitio Web
                  </div>
                </div>
        
                {landingVsWeb.map(({ aspect, landing, web }, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 border-b border-border/30 last:border-0 ${
                      i % 2 === 0 ? 'bg-background' : 'bg-accent/3'
                    }`}
                  >
                    <div className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-primary-dark">
                      {aspect}
                    </div>
                    <div className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-accent font-medium border-l border-border/30">
                      {landing}
                    </div>
                    <div className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-primary-dark/55 border-l border-border/30">
                      {web}
                    </div>
                  </div>
                ))}
              </div>
            </div>
              
            <p className="text-center text-xs sm:text-sm text-primary-dark/50 mt-5 sm:mt-6 animate-on-scroll">
              ¿Necesitas ambas cosas? También{' '}
              <button
                onClick={() => navigate('/DesarrolloWeb')}
                className="text-accent font-medium hover:underline underline-offset-4"
              >
                desarrollamos sitios web completos →
              </button>
            </p>
          </div>
        </section>
              
        {/* ══════════════════════════════════════════════
            CASOS DE USO
            Mobile:  1 col
            sm:      2 col
            lg:      3 col
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 relative">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
              <SectionLabel>Casos de uso</SectionLabel>
              <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                ¿Para qué sirve una landing page?{' '}
                <span className="text-accent">6 situaciones reales</span>
              </h2>
              <p className="section-subtitle mx-auto animate-on-scroll">
                Una landing page no es solo para anuncios. Aquí los escenarios más comunes
                donde marca la diferencia entre perder o ganar clientes.
              </p>
            </div>
        
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {useCases.map(({ Icon, title, description, example }, i) => (
                <div
                  key={i}
                  className="relative group animate-on-scroll rounded-2xl border border-border/40 bg-background p-5 sm:p-6 flex flex-col
                             hover:border-accent/40 transition-colors duration-200 overflow-hidden"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 sm:mb-5 shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-primary-dark mb-2">{title}</h3>
                  <p className="text-sm text-primary-dark/60 leading-relaxed mb-4 flex-1">{description}</p>
                  <div className="flex items-start gap-2 p-2.5 sm:p-3 rounded-lg bg-accent/6 border border-accent/15 mt-auto">
                    <span className="text-accent text-xs font-semibold shrink-0 mt-0.5">Ej.</span>
                    <p className="text-xs text-primary-dark/60 leading-relaxed">{example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
            
        {/* ══════════════════════════════════════════════
            ANATOMÍA
            Mobile:  intro + steps stacked (no sticky)
            Desktop: left sticky + right timeline
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-start">
        
              {/* Left – sticky only on lg+ */}
              <div className="lg:sticky lg:top-32">
                <SectionLabel>Estructura</SectionLabel>
                <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                  Anatomía de una landing page{' '}
                  <span className="text-accent">que convierte</span>
                </h2>
                <p className="section-subtitle animate-on-scroll">
                  No es magia ni intuición. Una landing page efectiva tiene secciones
                  específicas, en un orden específico, con un propósito específico.
                  Cada elemento existe por una razón.
                </p>
                <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl border border-accent/20 bg-accent/5 animate-on-scroll">
                  <div className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-primary-dark/70 leading-relaxed">
                      En nuestros proyectos definimos la estructura{' '}
                      <strong className="text-primary-dark">antes de diseñar</strong>.
                      El orden de las secciones y el copywriting tienen tanto impacto en la
                      conversión como el diseño visual.
                    </p>
                  </div>
                </div>
              </div>
        
              {/* Right – timeline */}
              <div className="relative space-y-0 mt-4 lg:mt-0">
                {/* Vertical line – hidden on mobile to avoid overflow issues */}
                <div className="absolute left-[19px] top-10 bottom-10 w-px bg-border/40 hidden sm:block" />
        
                {anatomy.map(({ num, section, what, why }, i) => (
                  <div
                    key={i}
                    className="relative flex gap-4 sm:gap-5 animate-on-scroll pb-6 sm:pb-8 last:pb-0"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-accent/30 bg-background flex items-center justify-center shrink-0">
                      <span
                        className="text-[10px] sm:text-[11px] font-bold text-accent"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {num}
                      </span>
                    </div>
                    <div className="pt-1 sm:pt-1.5 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-1">
                        <h3 className="text-sm sm:text-base font-semibold text-primary-dark">{section}</h3>
                        <span className="text-[10px] sm:text-[11px] font-medium text-accent/80 bg-accent/8 border border-accent/20 rounded-full px-2 sm:px-2.5 py-0.5 leading-snug">
                          {what}
                        </span>
                      </div>
                      <p className="text-sm text-primary-dark/60 leading-relaxed">{why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
              
        {/* ══════════════════════════════════════════════
            QUÉ INCLUYE
            Mobile:  1 col
            sm:      2 col
            lg:      3 col
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 relative">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
              <SectionLabel>Lo que incluye</SectionLabel>
              <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                No entregamos solo una página.{' '}
                <span className="text-accent">Entregamos una herramienta de ventas.</span>
              </h2>
              <p className="section-subtitle mx-auto animate-on-scroll">
                Cada proyecto incluye estrategia, diseño, copy, desarrollo y analítica.
                No es una plantilla bonita — es una máquina optimizada para convertir.
              </p>
            </div>
        
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {included.map(({ Icon, title, items }, i) => (
                <div
                  key={i}
                  className="relative group animate-on-scroll rounded-2xl border border-border/40 bg-background p-5 sm:p-6 flex flex-col
                             hover:border-accent/40 transition-colors duration-200 overflow-hidden"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 sm:mb-5 shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-primary-dark mb-3 sm:mb-4">{title}</h3>
                  <ul className="space-y-2 sm:space-y-2.5 mt-auto">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 sm:gap-2.5">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-primary-dark/60 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
            
        {/* ══════════════════════════════════════════════
            PROCESO
            Mobile:  steps without the vertical line connector
            sm+:     timeline with connector
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
              <SectionLabel>Proceso</SectionLabel>
              <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                De la idea a la página publicada,{' '}
                <span className="text-accent">paso a paso</span>
              </h2>
              <p className="section-subtitle mx-auto animate-on-scroll">
                Un proceso claro y sin sorpresas. Sabes exactamente en qué etapa estás,
                qué viene después y qué apruebas tú antes de continuar.
              </p>
            </div>
        
            <div className="relative max-w-3xl mx-auto">
              {/* Connector line – hidden on mobile */}
              <div className="absolute left-[19px] top-10 bottom-10 w-px bg-border/40 hidden sm:block" />
        
              {process.map(({ step, title, description, deliverable, time }, i) => (
                <div
                  key={i}
                  className="relative flex gap-4 sm:gap-5 animate-on-scroll pb-6 sm:pb-10 last:pb-0"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-accent bg-background flex items-center justify-center shrink-0">
                    <span
                      className="text-[10px] sm:text-xs font-bold text-accent"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {step}
                    </span>
                  </div>
              
                  <div
                    className="flex-1 min-w-0 rounded-2xl border border-border/40 bg-background p-4 sm:p-5 hover:border-accent/30 transition-colors duration-200"
                    style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
                  >
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="text-sm sm:text-base font-semibold text-primary-dark">{title}</h3>
                      <span className="text-[10px] sm:text-[11px] font-medium text-accent bg-accent/8 border border-accent/20 rounded-full px-2 sm:px-2.5 py-0.5 flex items-center gap-1 whitespace-nowrap">
                        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        {time}
                      </span>
                    </div>
                    <p className="text-sm text-primary-dark/60 leading-relaxed mb-3 sm:mb-4">{description}</p>
                    <div className="flex items-start gap-2 p-2.5 sm:p-3 rounded-lg bg-accent/5 border border-accent/15">
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent shrink-0 mt-0.5" />
                      <p className="text-xs text-primary-dark/60 leading-snug">
                        <strong className="text-primary-dark font-medium">Entregable: </strong>
                        {deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 sm:mt-10 animate-on-scroll">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary-dark/60 bg-border/20 border border-border/40 rounded-full px-4 sm:px-5 py-2 sm:py-2.5">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                Tiempo total estimado:{' '}
                <span className="font-semibold text-primary-dark ml-1">7 – 13 días hábiles</span>
              </div>
            </div>
          </div>
        </section>
            
        {/* ══════════════════════════════════════════════
            PLANES Y PRECIOS
            Mobile:  1 col (highlighted plan NOT scaled, but accented border)
            md:      3 col side by side
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 relative">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
              <SectionLabel>Inversión</SectionLabel>
              <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                Elige el plan que se adapta{' '}
                <span className="text-accent">a tu objetivo</span>
              </h2>
              <p className="section-subtitle mx-auto animate-on-scroll">
                Precios referenciales. Cada proyecto es distinto y hacemos una propuesta
                personalizada según tu caso. Todas las cotizaciones son sin compromiso.
              </p>
            </div>
        
            {/* Grid: 1 col mobile → 3 col md+. Remove scale on mobile to prevent overflow. */}
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start">
              {plans.map(({ name, price, description, features, notIncluded, cta, highlighted }, i) => (
                <div
                  key={i}
                  className={`relative animate-on-scroll rounded-2xl border bg-background p-5 sm:p-7 flex flex-col overflow-hidden transition-all duration-200
                    ${highlighted
                      ? 'border-accent shadow-lg shadow-accent/10 md:scale-[1.02]'
                      : 'border-border/40 hover:border-accent/40'
                    }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {highlighted && (
                    <>
                      <span className="absolute inset-x-0 top-0 h-1 bg-accent" />
                      <span className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[9px] sm:text-[10px] font-bold text-white bg-accent rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 uppercase tracking-widest whitespace-nowrap">
                        Más elegido
                      </span>
                    </>
                  )}
  
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-sm sm:text-base font-semibold text-primary-dark mb-1">{name}</h3>
                    <p
                      className="text-xl sm:text-2xl font-bold text-primary-dark mb-2 sm:mb-3"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {price}
                    </p>
                    <p className="text-xs sm:text-sm text-primary-dark/55 leading-relaxed">{description}</p>
                  </div>
                
                  <div className="space-y-2 sm:space-y-2.5 flex-1 mb-4 sm:mb-6">
                    {features.map((f, j) => (
                      <div key={j} className="flex items-start gap-2 sm:gap-2.5">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-primary-dark/70 leading-snug">{f}</span>
                      </div>
                    ))}
                    {notIncluded.map((f, j) => (
                      <div key={j} className="flex items-start gap-2 sm:gap-2.5 opacity-40">
                        <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-dark/40 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-primary-dark/40 leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="#contacto"
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors duration-150 ${
                      highlighted
                        ? 'bg-accent text-white hover:bg-accent/90'
                        : 'bg-accent/10 text-accent hover:bg-accent/20'
                    }`}
                  >
                    {cta}
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </a>
                </div>
              ))}
            </div>
            
            <p className="text-center text-xs sm:text-sm text-primary-dark/45 mt-6 sm:mt-8 animate-on-scroll">
              Los precios están en USD y no incluyen impuestos locales. Aceptamos pagos por transferencia y tarjeta.
            </p>
          </div>
        </section>
            
        {/* ══════════════════════════════════════════════
            SOCIAL PROOF STRIP
            Mobile:  1 col
            sm:      3 col
        ══════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 border-y border-border/30 relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              {[
                { Icon: Star,         value: '4.9 / 5',  label: 'Satisfacción de clientes' },
                { Icon: CheckCircle2, value: '+40',       label: 'Landing pages entregadas' },
                { Icon: TrendingUp,   value: '+3x',       label: 'ROI promedio en campañas' },
              ].map(({ Icon, value, label }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 sm:gap-3 animate-on-scroll"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span
                    className="text-2xl sm:text-3xl font-bold text-primary-dark"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {value}
                  </span>
                  <span className="text-xs sm:text-sm text-primary-dark/50">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
            
        {/* ══════════════════════════════════════════════
            FAQ
            Mobile:  stacked (heading above, accordion below)
            lg:      2-col side by side
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-start">
        
              {/* Heading column */}
              <div>
                <SectionLabel>Preguntas frecuentes</SectionLabel>
                <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                  Todo lo que querías saber{' '}
                  <span className="text-accent">antes de empezar</span>
                </h2>
                <p className="section-subtitle animate-on-scroll">
                  Resolvemos las dudas más comunes. Si la tuya no está aquí, escríbenos y te
                  respondemos en menos de 24 horas.
                </p>
                <div className="mt-6 sm:mt-8 animate-on-scroll">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
                  >
                    Tengo otra pregunta
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
        
              {/* Accordion */}
              <div className="divide-y divide-border/30 border-t border-border/30 animate-on-scroll">
                {faqs.map((faq, i) => (
                  <FaqItem key={i} {...faq} />
                ))}
              </div>
            </div>
          </div>
        </section>
              
        {/* ══════════════════════════════════════════════
            CTA FINAL
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-60" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <SectionLabel>Empecemos</SectionLabel>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-primary-dark mb-4 sm:mb-6 animate-on-scroll"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Tu próxima landing page puede estar{' '}
              <span className="text-accent">lista en menos de 2 semanas.</span>
            </h2>
            <p className="text-base sm:text-lg text-primary-dark/60 mb-8 sm:mb-10 animate-on-scroll">
              Cuéntanos tu proyecto: qué ofreces, a quién va dirigido y qué quieres lograr.
              Te respondemos con una propuesta clara, sin rodeos y sin compromiso.
            </p>
        
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-on-scroll">
              <a href="#contacto" className="btn-primary text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 text-center">
                Agendar reunión gratuita
                <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
              </a>
              <button
                onClick={() => navigate(-1)}
                className="btn-secondary text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4"
              >
                Ver todos los servicios
              </button>
            </div>
        
            {/* Trust badges – wrap on small screens */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 animate-on-scroll">
              {[
                { Icon: HeartHandshake, text: 'Reunión sin compromiso' },
                { Icon: Settings,       text: 'Propuesta personalizada' },
                { Icon: Shield,         text: 'Satisfacción garantizada' },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-primary-dark/50">
                  <Icon className="w-4 h-4 text-accent shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        </div>
            
        <Footer />
      </>
  );
}