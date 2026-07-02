// src/components/Services/WebDevelopment.tsx
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Code2, Globe, Layout, Shield, Clock, CheckCircle2,
  ChevronDown, Settings, Zap, Users, AlertCircle, TrendingDown,
  Check, HeartHandshake, TrendingUp, Rocket, DollarSign,
  Flame, Megaphone, ShoppingCart, FileText, Palette, BarChart2,
  Eye, PenTool, Monitor, Search, Smartphone, Star,
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/* ─── Datos ─── */

const stats = [
  { value: '94%', label: 'de las primeras impresiones están relacionadas con el diseño' },
  { value: '3 seg', label: 'tiene un visitante para decidir si confía en tu sitio' },
  { value: '60+',  label: 'sitios web profesionales entregados' },
];

// Problemas reales que enfrentan los negocios con su sitio web
const painPoints = [
  {
    Icon: TrendingDown,
    title: 'Un sitio que no refleja el nivel real de tu empresa',
    description: 'Cuando un posible cliente llega a tu web y encuentra algo genérico, desactualizado o lento, la percepción que se lleva no corresponde a la calidad de lo que ofreces. Y esa percepción es difícil de revertir.',
  },
  {
    Icon: Flame,
    title: 'Información difícil de encontrar, visitantes que se van',
    description: 'Si un visitante no encuentra rápidamente lo que busca —ya sea un servicio, un contacto o información clave— abandona el sitio. No por falta de interés, sino por una navegación que debería ser más clara.',
  },
  {
    Icon: DollarSign,
    title: 'Actualizar el contenido es más complicado de lo que debería',
    description: 'Muchas empresas dependen de terceros para cada cambio mínimo en su web: agregar un servicio, actualizar un precio o publicar una nota. Esto ralentiza la comunicación y genera costos innecesarios.',
  },
];

// Qué cambia con un sitio web profesional
const transformation = [
  {
    num: '01',
    section: 'Tu marca se comunica con claridad desde el primer vistazo',
    what: 'Credibilidad visible',
    why: 'El diseño, la estructura y el contenido trabajan juntos para que el visitante entienda rápidamente quién eres, qué ofreces y por qué debería considerar tu empresa.',
  },
  {
    num: '02',
    section: 'Una experiencia de navegación sin fricciones',
    what: 'Recorrido fluido',
    why: 'Una navegación clara y una jerarquía de información bien pensada reducen los puntos donde el visitante se pierde o abandona antes de encontrar lo que busca.',
  },
  {
    num: '03',
    section: 'Diseño que se adapta a cualquier dispositivo',
    what: 'Experiencia consistente',
    why: 'Tu sitio se ve y funciona igual de bien en un teléfono, una tablet o un escritorio. La experiencia del visitante es siempre la misma, sin importar cómo acceda.',
  },
  {
    num: '04',
    section: 'Una base técnica sólida para tu estrategia digital',
    what: 'Preparado para posicionar',
    why: 'Estructura semántica, velocidad de carga, URLs limpias y compatibilidad móvil son la base que cualquier estrategia de posicionamiento orgánico necesita para funcionar.',
  },
];

// Casos de uso — sitios web profesionales
const useCases = [
  {
    Icon: Globe,
    title: 'Sitio corporativo o institucional',
    description: 'Un sitio que comunica con claridad quién es tu empresa, qué ofrece y por qué debería importarle al visitante. Diseñado para que el proceso de decisión del cliente sea más fácil.',
    example: 'Consultora → sitio con propuesta de valor clara, servicios y punto de contacto directo.',
  },
  {
    Icon: ShoppingCart,
    title: 'Catálogo de productos',
    description: 'Presenta tus productos de forma organizada para que tus clientes puedan conocer tu oferta y solicitar información con facilidad.',
    example: 'Empresa industrial → catálogo digital con fichas técnicas y formulario de cotización.',
  },
  {
    Icon: Rocket,
    title: 'Sitio de lanzamiento o producto',
    description: 'Una página diseñada para presentar un nuevo servicio, producto o iniciativa. Comunicación clara, llamado a la acción visible y sin distracciones.',
    example: 'Nuevo servicio → sitio con propuesta, beneficios y formulario de contacto.',
  },
  {
    Icon: Megaphone,
    title: 'Portafolio profesional',
    description: 'Una presencia digital que representa el nivel real de tu trabajo. Coherente, profesional y fácil de actualizar cuando tu oferta o tu equipo cambia.',
    example: 'Estudio de arquitectura → portafolio con proyectos, descripciones y ficha de contacto.',
  },
  {
    Icon: FileText,
    title: 'Blog y contenido',
    description: 'Un sitio pensado para publicar contenido relevante para tu audiencia. Diseño limpio que pone el foco en la lectura y facilita el descubrimiento de artículos.',
    example: 'Consultora de contenido → blog con artículos, categorías y suscripción por correo.',
  },
  {
    Icon: Palette,
    title: 'Landing page de marca',
    description: 'Una página simple pero impactante, diseñada para presentar tu empresa o servicio con un mensaje claro y un único objetivo: que el visitante sepa quién eres y cómo contactarte.',
    example: 'Empresa de servicios → landing page con mensaje central, beneficios y contacto.',
  },
];

// Qué incluye el servicio
const included = [
  {
    Icon: PenTool,
    title: 'Estrategia y planificación',
    items: [
      'Entendemos tu negocio, tu competencia y tus objetivos',
      'Definimos qué debe lograr cada página y cada sección',
      'Estructura de navegación pensada para el visitante',
    ],
  },
  {
    Icon: Palette,
    title: 'Diseño visual y de marca',
    items: [
      'Diseño adaptado a tu identidad de marca',
      'Funciona en móvil, tablet y desktop',
      'Interfaz clara, rápida y fácil de navegar',
    ],
  },
  {
    Icon: FileText,
    title: 'Contenido y mensajes',
    items: [
      'Textos orientados a lo que tu cliente necesita saber',
      'Jerarquía de información clara y sin ruido',
      'Llamadas a la acción bien posicionadas y fáciles de encontrar',
    ],
  },
  {
    Icon: Code2,
    title: 'Construcción técnica',
    items: [
      'Código limpio, rápido y estable',
      'Formularios de contacto conectados a tu correo',
      'Carga rápida y estructura lista para buscadores',
    ],
  },
  {
    Icon: BarChart2,
    title: 'Medición desde el día 1',
    items: [
      'Analítica instalada antes de salir al aire',
      'Seguimiento de visitas, fuentes y acciones clave',
      'Sabes qué está funcionando y qué no',
    ],
  },
  {
    Icon: Rocket,
    title: 'Lanzamiento y entrega',
    items: [
      'Publicación en tu dominio con todo configurado',
      'Probado en múltiples navegadores y dispositivos',
      'Capacitación básica para que puedas actualizar tu contenido sin dificultades',
    ],
  },
];

// Proceso sin jerga técnica
const process = [
  {
    step: '01',
    title: 'Entendemos tu negocio',
    time: '2–3 días',
    description: 'Antes de diseñar o escribir una línea de código, entendemos a quién le habla tu empresa, qué quieres lograr y qué necesita ver un visitante para contactarte o confiar en ti.',
    deliverable: 'Mapa de objetivos y estructura del sitio',
  },
  {
    step: '02',
    title: 'Diseñamos cómo se verá',
    time: '5–7 días',
    description: 'Construimos el diseño visual completo de cada página. Revisas cómo va a quedar antes de que se escriba código — lo apruebas tú antes de continuar.',
    deliverable: 'Diseño completo aprobado por ti',
  },
  {
    step: '03',
    title: 'Construimos el sitio',
    time: '15–25 días',
    description: 'Desarrollamos el sitio completo: páginas, secciones y formularios. Cada decisión técnica está alineada con los objetivos definidos en la primera etapa.',
    deliverable: 'Sitio funcionando en entorno de pruebas',
  },
  {
    step: '04',
    title: 'Revisamos y ajustamos contigo',
    time: '3–5 días',
    description: 'Revisamos juntos cada sección y aplicamos los ajustes que necesites. Nada sale al aire sin tu visto bueno.',
    deliverable: 'Sitio ajustado y aprobado',
  },
  {
    step: '05',
    title: 'Sale al aire',
    time: '2–3 días',
    description: 'Publicamos en tu dominio, configuramos todo el entorno y verificamos que funcione perfecto en cada dispositivo. Te dejamos con el sitio activo y listo para recibir visitas.',
    deliverable: 'Sitio publicado y listo para recibir visitas',
  },
];

// Factores que determinan la cotización
const quoteFactors = [
  {
    Icon: Layout,
    title: 'El tamaño y la complejidad del sitio',
    description: 'No es lo mismo un sitio de 5 páginas que uno con 20 secciones, catálogo de servicios y múltiples formularios.',
  },
  {
    Icon: Settings,
    title: 'Las funcionalidades que necesitas',
    description: 'Formularios de contacto, tienda online, blog, catálogo de servicios — cada funcionalidad define el alcance real del proyecto.',
  },
  {
    Icon: ShoppingCart,
    title: 'Comercio electrónico',
    description: 'Si necesitas una tienda online, el catálogo de productos y la pasarela de pago añaden complejidad al desarrollo.',
  },
];

const faqs = [
  {
    q: '¿Cuánto cuesta un sitio web profesional?',
    a: 'Depende del tamaño, las funcionalidades y el nivel de personalización que necesites. No manejamos tarifas fijas porque cada proyecto es distinto. Cuéntanos qué necesitas y en menos de 24 horas te respondemos con una propuesta clara.',
  },
  {
    q: '¿Por qué necesito un sitio nuevo si ya tengo uno?',
    a: 'Si tu presencia digital no refleja el nivel actual de tu empresa, es difícil de actualizar o no ofrece una experiencia clara al visitante, hay margen real de mejora. Un sitio bien construido facilita que los visitantes encuentren lo que buscan y confíen en tu empresa desde el primer momento.',
  },
  {
    q: '¿Cuánto tiempo tarda tener mi sitio listo?',
    a: 'Entre 4 y 8 semanas según el alcance. Lo que más afecta el tiempo es la agilidad con que revisas y apruebas cada etapa. Ofrecemos entregas express bajo consulta para proyectos urgentes.',
  },
  {
    q: '¿Incluye dominio y hosting?',
    a: 'No están incluidos en el precio base, pero te asesoramos en la mejor opción para tu proyecto y lo configuramos todo. Si ya tienes hosting, trabajamos con él.',
  },
  {
    q: '¿Mi sitio va a aparecer en Google?',
    a: 'Construimos con las prácticas técnicas que cualquier estrategia de posicionamiento orgánico necesita: estructura semántica, velocidad de carga, URLs limpias y compatibilidad móvil. El posicionamiento en Google depende de muchos factores, pero una base técnica sólida es el punto de partida.',
  },
  {
    q: '¿Puedo ver cómo va quedando antes de publicar?',
    a: 'Siempre. Primero apruebas el diseño visual completo, y luego el sitio desarrollado lo revisas en un entorno de pruebas antes de publicarlo. No sale nada sin tu aprobación.',
  },
  {
    q: '¿Qué pasa si necesito cambios después del lanzamiento?',
    a: 'Cada proyecto incluye un período de ajustes post-lanzamiento. Después, los cambios tienen un costo según la complejidad, y ofrecemos un servicio de mantenimiento mensual para quienes necesitan actualizaciones frecuentes.',
  },
];

/* ─── Subcomponentes ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3 sm:mb-4 animate-on-scroll">
      {children}
    </p>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[340px] mx-auto lg:mx-0">
      <div
        className="rounded-2xl border border-border/40 bg-background overflow-hidden"
        style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.07)' }}
      >
        <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-border/40 bg-background/80">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400/60 shrink-0" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400/60 shrink-0" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400/60 shrink-0" />
          <span className="flex-1 mx-2 sm:mx-3 h-5 rounded-md bg-border/30 text-[10px] text-primary-dark/30 flex items-center px-2 truncate">
            tuempresa.com
          </span>
        </div>
        <div className="p-3 sm:p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-xs font-medium text-primary-dark">Sitio en vivo</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-3 w-4/5 rounded bg-primary-dark/10" />
            <div className="h-3 w-3/5 rounded bg-primary-dark/10" />
          </div>
          <div className="h-7 sm:h-8 w-36 sm:w-40 rounded-lg bg-accent/90 flex items-center justify-center">
            <span className="text-[9px] sm:text-[10px] font-semibold text-white tracking-wide whitespace-nowrap">
              Solicitar información →
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {['✓ Confiable', '📱 Adaptable', '⚡ Rápida'].map((badge) => (
              <span key={badge} className="text-[9px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-accent/8 text-accent font-medium border border-accent/20 whitespace-nowrap">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-border/30 border-t border-border/40">
          {[
            { v: '<2s',   l: 'tiempo de carga' },
            { v: '99.9%', l: 'disponible' },
            { v: '96',    l: 'PageSpeed' },
          ].map(({ v, l }) => (
            <div key={l} className="py-2.5 sm:py-3 text-center">
              <p className="text-xs sm:text-sm font-bold text-primary-dark">{v}</p>
              <p className="text-[9px] sm:text-[10px] text-primary-dark/40 mt-0.5">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-accent text-white rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold whitespace-nowrap"
        style={{ boxShadow: '0 4px 16px rgba(29,158,117,0.35)' }}
      >
        Nuevo proyecto
      </div>

      {/* Floating card */}
      <div
        className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-background border border-border/40 rounded-xl px-2.5 sm:px-3 py-2 sm:py-2.5 flex items-center gap-1.5 sm:gap-2"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-accent/15 flex items-center justify-center text-accent text-xs font-bold shrink-0">
          ✓
        </div>
        <div>
          <p className="text-[11px] sm:text-xs font-semibold text-primary-dark leading-tight whitespace-nowrap">
            Consulta recibida
          </p>
          <p className="text-[9px] sm:text-[10px] text-primary-dark/40 whitespace-nowrap">
            hace 4 minutos
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

/* ─── Página ─── */

export default function WebDevelopment() {
  useScrollAnimation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sitios Web Profesionales para Empresas | Advantech AI</title>
        <meta name="description" content="Desarrollamos sitios web corporativos, institucionales y de comercio electrónico con foco en diseño, claridad y experiencia de usuario. Presencia digital profesional para empresas que toman en serio su imagen." />
        <link rel="canonical" href="https://www.advantechai.org/DesarrolloWeb" />
        <meta property="og:title" content="Sitios Web Profesionales para Empresas | Advantech AI" />
        <meta property="og:description" content="Sitios web corporativos, institucionales y de comercio electrónico con diseño profesional y experiencia de usuario cuidada." />
        <meta property="og:url" content="https://www.advantechai.org/DesarrolloWeb" />
      </Helmet>

      <div className="overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />

        {/* ══════════════════════════════════════════════
            1. HERO — presencia digital profesional
        ══════════════════════════════════════════════ */}
        <section className="relative min-h-[100svh] sm:min-h-[90vh] pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 lg:pb-32 flex items-center overflow-hidden">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

              {/* Copy */}
              <div className="space-y-6 sm:space-y-8">
                <p className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest animate-on-scroll">
                  <Code2 className="w-3.5 h-3.5 shrink-0" />
                  Desarrollo Web
                </p>
                <h1
                  className="text-[2rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-balance animate-slide-up"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Tu presencia digital profesional,{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">construida con criterio.</span>
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
                  Desarrollamos sitios web corporativos, institucionales y de
                  comercio electrónico que comunican con claridad, ofrecen una
                  experiencia fluida al visitante y representan fielmente el
                  nivel de tu empresa.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-x-6 gap-y-4 animate-slide-up stagger-1">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="flex flex-col min-w-0">
                      <span
                        className="text-xl sm:text-2xl font-bold text-accent"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {value}
                      </span>
                      <span className="text-xs text-primary-dark/50 mt-0.5 leading-snug max-w-[150px]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-slide-up stagger-2">
                  <a
                    href="#contacto"
                    className="btn-primary text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 text-center"
                  >
                    Hablar sobre mi proyecto
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

              {/* Visual */}
              <div className="flex items-center justify-center lg:justify-end animate-scale-in stagger-2 py-10 sm:py-8">
                <HeroVisual />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* ══════════════════════════════════════════════
            2. EL PROBLEMA — sitios que no representan bien a la empresa
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 relative">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
              <SectionLabel>El problema real</SectionLabel>
              <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                La mayoría de sitios web existen.{' '}
                <span className="text-accent">Pocos representan bien a la empresa.</span>
              </h2>
              <p className="section-subtitle mx-auto animate-on-scroll">
                Un sitio web que no comunica con claridad, que no ofrece una
                buena experiencia de navegación y que no se puede actualizar
                fácilmente es una oportunidad de negocio desaprovechada.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {painPoints.map(({ Icon, title, description }, i) => (
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
                  <p className="text-sm text-primary-dark/60 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 max-w-3xl mx-auto animate-on-scroll">
              <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-accent/6 border border-accent/20">
                <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-primary-dark/70 leading-relaxed">
                  <strong className="text-primary-dark">Nuestro enfoque:</strong> primero
                  entendemos tu negocio, después diseñamos el sitio. Un sitio bien
                  construido facilita que los visitantes entiendan quién eres,
                  qué ofreces y cómo contactarte — sin complicaciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            3. LA TRANSFORMACIÓN — qué cambia con un sitio profesional
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-start">

              {/* Left — sticky en desktop */}
              <div className="lg:sticky lg:top-32">
                <SectionLabel>Lo que cambia</SectionLabel>
                <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                  Lo que mejora cuando tu sitio{' '}
                  <span className="text-accent">está bien construido desde el inicio</span>
                </h2>
                <p className="section-subtitle animate-on-scroll">
                  El diseño no es decoración. Es la forma en que tu empresa
                  se presenta al mundo. Un sitio profesional transmite confianza,
                  claridad y seriedad desde el primer momento.
                </p>
                <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl border border-accent/20 bg-accent/5 animate-on-scroll">
                  <div className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-primary-dark/70 leading-relaxed">
                      Empezamos siempre por{' '}
                      <strong className="text-primary-dark">entender tu negocio</strong>,
                      no por elegir una plantilla. El diseño y la estructura
                      son consecuencia de tus objetivos — no al revés.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — timeline */}
              <div className="relative mt-4 lg:mt-0">
                <div className="absolute left-[19px] top-10 bottom-10 w-px bg-border/40 hidden sm:block" />
                {transformation.map(({ num, section, what, why }, i) => (
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
                        <span className="text-[10px] sm:text-[11px] font-medium text-accent/80 bg-accent/8 border border-accent/20 rounded-full px-2 sm:px-2.5 py-0.5 leading-snug whitespace-nowrap">
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
            4. CASOS DE USO — tipos de sitios web
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 relative">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
              <SectionLabel>Qué tipo de sitio necesitas</SectionLabel>
              <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                El sitio que tu empresa necesita,{' '}
                <span className="text-accent">según lo que quieras comunicar</span>
              </h2>
              <p className="section-subtitle mx-auto animate-on-scroll">
                Desarrollamos desde sitios corporativos hasta tiendas online.
                Lo que tienen en común es que responden a un objetivo de
                comunicación claro, no a una plantilla genérica.
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
            5. QUÉ INCLUYE — alcance completo
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
              <SectionLabel>Lo que obtienes</SectionLabel>
              <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                Todo lo que cubre{' '}
                <span className="text-accent">cada proyecto que desarrollamos.</span>
              </h2>
              <p className="section-subtitle mx-auto animate-on-scroll">
                Trabajamos con un alcance completo desde el inicio: estrategia,
                diseño, construcción y analítica. Sin piezas sueltas que tengas
                que coordinar con otros proveedores.
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
            6. PROCESO — simple y orientado al cliente
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 relative">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
              <SectionLabel>Cómo trabajamos</SectionLabel>
              <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                Sin tecnicismos, sin sorpresas,{' '}
                <span className="text-accent">con entregables concretos en cada etapa</span>
              </h2>
              <p className="section-subtitle mx-auto animate-on-scroll">
                Sabemos que involucrar a una agencia externa en un proyecto digital
                puede dar vértigo. Por eso trabajamos con un proceso claro donde
                tú apruebas cada paso antes de continuar.
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
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
                <span className="font-semibold text-primary-dark ml-1">4 – 8 semanas según alcance</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            7. INVERSIÓN — cotización a la medida
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
              <SectionLabel>Inversión</SectionLabel>
              <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                Cada negocio es distinto.{' '}
                <span className="text-accent">Tu sitio también lo es.</span>
              </h2>
              <p className="section-subtitle mx-auto animate-on-scroll">
                No manejamos paquetes cerrados. El alcance real del proyecto
                define la inversión — y eso varía según lo que tu empresa
                necesita. Esto es lo que más influye:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14">
              {quoteFactors.map(({ Icon, title, description }, i) => (
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
                  <p className="text-sm text-primary-dark/60 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            {/* Bloque central de cotización */}
            <div className="max-w-2xl mx-auto animate-on-scroll">
              <div
                className="relative rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-10 text-center overflow-hidden"
                style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.05)' }}
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-accent" />
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent mx-auto mb-5 sm:mb-6">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-primary-dark mb-3">
                  Cuéntanos qué necesitas y te decimos exactamente cuánto cuesta
                </h3>
                <p className="text-sm sm:text-base text-primary-dark/60 leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto">
                  En menos de 24 horas te respondemos con una propuesta clara,
                  detallada y sin letra pequeña. Tú decides si avanzamos.
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-medium bg-accent text-white hover:bg-accent/90 transition-colors duration-150"
                >
                  Solicitar mi cotización
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            8. FAQ — objeciones reales
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 lg:py-32 relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-start">
              <div>
                <SectionLabel>Preguntas frecuentes</SectionLabel>
                <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                  Lo que suelen preguntarnos{' '}
                  <span className="text-accent">antes de empezar</span>
                </h2>
                <p className="section-subtitle animate-on-scroll">
                  Resolvemos las dudas más comunes. Si la tuya no está aquí,
                  escríbenos y te respondemos en menos de 24 horas.
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
              <div className="divide-y divide-border/30 border-t border-border/30 animate-on-scroll">
                {faqs.map((faq, i) => (
                  <FaqItem key={i} {...faq} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            9. CTA FINAL
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
              Si tu sitio web no representa el nivel de tu empresa,{' '}
              <span className="text-accent">es el momento de cambiarlo.</span>
            </h2>
            <p className="text-base sm:text-lg text-primary-dark/60 mb-8 sm:mb-10 animate-on-scroll">
              Cuéntanos tu proyecto: qué tiene hoy tu sitio, qué necesita y qué
              quieres lograr con él. Te respondemos con una propuesta clara,
              detallada y sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-on-scroll">
              <a
                href="#contacto"
                className="btn-primary text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 text-center"
              >
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
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 animate-on-scroll">
              {[
                { Icon: HeartHandshake, text: 'Sin compromiso en la primera reunión' },
                { Icon: PenTool,        text: 'Propuesta adaptada a tu proyecto' },
                { Icon: Shield,         text: 'Acompañamiento durante todo el proceso' },
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