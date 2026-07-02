import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, Target, CheckCircle2, Zap, BarChart2,
  Layers, TrendingUp, Clock, Star, ChevronDown, Check,
  Globe, Megaphone, ShoppingCart, Calendar, Mail, FileText,
  Search, Palette, Code2, Rocket, Settings, Shield, HeartHandshake,
  AlertCircle, TrendingDown, Flame, DollarSign,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Footer from '../Footer';
import Navbar from '../Navbar';

/* ════════════════════════════════════════════
   DATA
════════════════════════════════════════════ */


// Lo que le está costando a un negocio NO tener una landing optimizada
const painPoints = [
  {
    Icon: TrendingDown,
    title: 'Pagas por clics que no se convierten',
    description: 'Inviertes en Google Ads o Meta Ads, llega tráfico real y calificado… y se va sin dejar nada. No es un problema de tu producto. Es un problema de a dónde los estás enviando.',
  },
  {
    Icon: Flame,
    title: 'Tu página principal no fue hecha para vender',
    description: 'Un sitio web está pensado para que el visitante explore. Cuando viene de un anuncio, no quiere explorar: quiere una respuesta clara a "¿esto resuelve mi problema?". Si no la encuentra en segundos, se va.',
  },
  {
    Icon: DollarSign,
    title: 'Cada visitante perdido es presupuesto quemado',
    description: 'No se trata solo de una venta perdida. Es el costo del clic, el tiempo de tu equipo y la oportunidad de haber convertido a alguien que ya estaba interesado.',
  },
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

// Qué cambia cuando tienen una landing optimizada (antes "anatomía")
const transformation = [
  { num: '01', section: 'Mensaje claro desde el segundo uno', what: 'El visitante entiende qué ofreces', why: 'Si tu anuncio promete algo y la página tarda en confirmarlo, pierdes al visitante antes de que conozca tu oferta.' },
  { num: '02', section: 'Beneficios, no funcionalidades', what: 'Hablamos de lo que tu cliente gana', why: 'Nadie compra características. Compran el resultado que esas características les permiten lograr.' },
  { num: '03', section: 'Confianza instalada', what: 'Testimonios y prueba social visibles', why: 'El 92% de las personas confía más en otros clientes que en lo que la marca dice de sí misma.' },
  { num: '04', section: 'Cero fricción para decidir', what: 'Se elimina toda duda antes de que aparezca', why: 'Cada objeción sin resolver es una razón para que el visitante cierre la pestaña.' },
  { num: '05', section: 'Un solo camino posible', what: 'Sin menú, sin distracciones, sin salidas', why: 'El visitante solo puede hacer una cosa: avanzar hacia la conversión.' },
  { num: '06', section: 'Un cierre que pide la acción', what: 'CTA directo en el momento correcto', why: 'El visitante que llegó hasta aquí ya está listo. Aquí es donde se convierte en lead o en venta.' },
];

const included = [
  {
    Icon: FileText, title: 'Estrategia y briefing',
    items: ['Análisis de tu oferta y competencia', 'Definición del cliente ideal y su motivación', 'Identificación del único objetivo de conversión', 'Estructura y jerarquía de secciones'],
  },
  {
    Icon: Palette, title: 'Diseño visual',
    items: ['Adaptada a cualquier dispositivo', 'Con tu identidad de marca: colores, logo y tono', 'Detalles y microinteracciones que dan confianza', 'Pensada para que se lea y se entienda rápido'],
  },
  {
    Icon: FileText, title: 'Copywriting persuasivo',
    items: ['Título principal orientado a beneficio', 'Copy de cada sección con foco en conversión', 'CTA que genera acción, no confusión', 'Tono adaptado a tu audiencia y marca'],
  },
  {
    Icon: Code2, title: 'Construcción de la página',
    items: ['Rápida y estable, sin fallos raros', 'Carga en menos de 2 segundos', 'Formulario conectado a tu correo o CRM', 'Lista para posicionar en Google'],
  },
  {
    Icon: BarChart2, title: 'Medición desde el día 1',
    items: ['Analítica instalada y configurada', 'Seguimiento de cada conversión', 'Sabrás exactamente qué está funcionando'],
  },
  {
    Icon: Rocket, title: 'Lanzamiento sin complicaciones',
    items: ['Publicación en tu dominio', 'Probada en todos los dispositivos', '2 rondas de ajustes post-lanzamiento incluidas', 'Tú apruebas antes de que nada salga al aire'],
  },
];

const process = [
  {
    step: '01', title: 'Entendemos tu negocio', time: '1–2 días',
    description: 'Te hacemos las preguntas correctas: ¿Qué vendes? ¿A quién? ¿Qué quieres que hagan? ¿Cuál es tu ventaja diferencial? Con eso definimos la estructura y el mensaje de la página.',
    deliverable: 'Estrategia y mapa de secciones definidos',
  },
  {
    step: '02', title: 'Diseñamos y escribimos para vender', time: '3–5 días',
    description: 'Diseñamos la interfaz completa y redactamos cada línea de texto pensando en tu cliente ideal. Apruebas el diseño antes de que escribamos una sola línea de código.',
    deliverable: 'Diseño aprobado + copy listo',
  },
  {
    step: '03', title: 'Construimos la página', time: '3–4 días',
    description: 'Convertimos el diseño en una página real, rápida y conectada a tus herramientas de seguimiento. Cada detalle técnico existe para que la página convierta más.',
    deliverable: 'Página funcional en entorno de pruebas',
  },
  {
    step: '04', title: 'Ajustamos contigo', time: '1–2 días',
    description: 'Revisamos juntos la página completa y aplicamos los cambios que necesites. Esta etapa incluye hasta dos rondas de revisión.',
    deliverable: 'Página ajustada y aprobada por ti',
  },
  {
    step: '05', title: 'Sale al aire', time: '1 día',
    description: 'Publicamos la página en tu dominio y verificamos que todo funcione perfecto en desktop y móvil antes de darte el "todo listo, ya puedes mandar tráfico".',
    deliverable: 'Landing page publicada y lista para vender',
  },
];

// Por qué no manejamos precios fijos: cada proyecto cotiza distinto
const quoteFactors = [
  {
    Icon: Layers,
    title: 'Cuántas secciones necesita tu página',
    description: 'No es lo mismo una landing simple de captura que una página completa con varios bloques de objeciones, prueba social y proceso de venta.',
  },
  {
    Icon: FileText,
    title: 'Si necesitas copywriting o ya tienes el texto',
    description: 'Si ya tienes claro qué decir, nos enfocamos en diseño y construcción. Si necesitas que armemos el mensaje de venta desde cero, eso suma trabajo de estrategia.',
  },
  {
    Icon: Zap,
    title: 'Integraciones y conexiones',
    description: 'Conectar la página a tu CRM, automatizaciones o herramientas internas cambia el alcance del proyecto frente a un formulario simple.',
  },
];

const faqs = [
  {
    q: '¿Cuánto cuesta una landing page?',
    a: 'Depende del proyecto: cuántas secciones necesitas, si requieres copywriting desde cero y si hay integraciones con otras herramientas. Por eso no manejamos tarifas fijas — cotizamos cada caso después de entender qué necesitas, para que pagues por lo que realmente vas a usar.',
  },
  {
    q: '¿Por qué no usar mi página principal para las campañas?',
    a: 'Porque tu página principal está hecha para que el visitante explore, no para convertir. Cuando alguien llega desde un anuncio, espera una respuesta inmediata a lo que vio en ese anuncio. Una landing dedicada a esa campaña convierte entre 3 y 5 veces más que enviar el tráfico a tu sitio general.',
  },
  {
    q: '¿Necesito una landing por cada campaña?',
    a: 'Idealmente, sí. Cuando el mensaje del anuncio y el de la landing coinciden, la conversión sube de forma notable. Si tienes campañas para distintos públicos o productos, cada una se beneficia de su propia página con el mensaje correcto.',
  },
  {
    q: '¿En cuánto tiempo la tengo lista?',
    a: 'Entre 7 y 13 días hábiles según el alcance del proyecto. Lo que más impacta el tiempo es la agilidad en las revisiones: entre más rápido apruebes cada etapa, antes empiezas a recibir tráfico. También ofrecemos entregas express bajo consulta.',
  },
  {
    q: '¿Incluye dominio y hosting?',
    a: 'No están incluidos en el precio base, pero te asesoramos en la mejor opción según tu situación. Si ya tienes hosting, publicamos ahí. Si no, te recomendamos una opción económica y la configuramos por ti.',
  },
  {
    q: '¿Puedo pedir cambios después de publicada?',
    a: 'Sí. Cada proyecto incluye rondas de ajuste post-lanzamiento. Después de ese período, los cambios tienen un costo según la complejidad, y también ofrecemos un servicio de mantenimiento mensual para quienes necesitan actualizaciones frecuentes.',
  },
  {
    q: '¿Funciona con mis campañas de Google y Meta?',
    a: 'Es exactamente para lo que está construida. Dejamos instalado el seguimiento de conversiones para que tus campañas puedan optimizarse con datos reales, y configuramos todo para que sepas de dónde viene cada lead.',
  },
  {
    q: '¿Puedo ver cómo queda antes de que se publique?',
    a: 'Siempre. Primero apruebas el diseño, luego revisas la página funcionando en un entorno de pruebas. No publicamos nada sin tu visto bueno.',
  },
  {
    q: '¿Me ayudan después con los resultados?',
    a: 'Entregamos la landing con la analítica instalada y acceso a los reportes. Si quieres que interpretemos los datos mes a mes y propongamos mejoras, tenemos un servicio de optimización continua disponible.',
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
            advantechai.org/oferta
          </span>
        </div>

        {/* Page skeleton */}
        <div className="p-3 sm:p-4 space-y-">
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
            { v: '+87%', l: 'Conversiones' },
            { v: '+3x',  l: 'ROI' },
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


  return (
    
    <>
    
    <div className="overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
    <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />
      {/* ══════════════════════════════════════════════
          1. HERO — orientado a resultados, no a definiciones
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] sm:min-h-[90vh] pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 lg:pb-32 flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Copy column */}
            <div className="space-y-6 sm:space-y-8">
              <p className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest animate-on-scroll">
                <Target className="w-3.5 h-3.5 shrink-0" />
                Landing Pages para campañas
              </p>

              <h1
                className="text-[2rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-balance animate-slide-up"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Tu publicidad ya trae el tráfico.{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-accent">Nosotros lo convertimos en clientes.</span>
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
                Diseñamos landing pages enfocadas en un solo objetivo: que el tráfico que ya
                estás pagando se convierta en leads y ventas reales. Nada de páginas
                bonitas que no rinden cuentas.
              </p>

              {/* CTAs – full-width on mobile, inline on sm+ */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-slide-up stagger-2">
                <a href="#contacto" className="btn-primary text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 text-center">
                  Quiero recuperar mi inversión
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
          2. EL PROBLEMA — dinero quemado en tráfico que no convierte
      ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <SectionLabel>El problema real</SectionLabel>
            <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
              Tu publicidad solo es tan buena{' '}
              <span className="text-accent">como la página donde termina</span>
            </h2>
            <p className="section-subtitle mx-auto animate-on-scroll">
              Puedes tener la mejor campaña, la segmentación perfecta y un presupuesto
              generoso. Si la página de destino no está hecha para convertir, todo eso
              se queda en el camino.
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
                <strong className="text-primary-dark">La buena noticia:</strong> esto se
                arregla. No diseñamos páginas bonitas. Diseñamos páginas que generan
                negocio — y la diferencia se nota en tu reporte de campañas, no solo en el diseño.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. LA TRANSFORMACIÓN — qué cambia con una landing optimizada
      ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-start">

            {/* Left – sticky only on lg+ */}
            <div className="lg:sticky lg:top-32">
              <SectionLabel>Lo que cambia</SectionLabel>
              <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                Esto es lo que pasa cuando tu landing{' '}
                <span className="text-accent">está hecha para vender</span>
              </h2>
              <p className="section-subtitle animate-on-scroll">
                No es magia ni intuición. Cada elemento de la página cumple un propósito
                específico: mover al visitante un paso más cerca de decir que sí.
              </p>
              <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl border border-accent/20 bg-accent/5 animate-on-scroll">
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-dark/70 leading-relaxed">
                    Definimos primero la{' '}
                    <strong className="text-primary-dark">estrategia y el mensaje</strong>.
                    El orden de las secciones y el copy tienen tanto impacto en la
                    conversión como el diseño visual — a veces más.
                  </p>
                </div>
              </div>
            </div>

            {/* Right – timeline */}
            <div className="relative space-y-0 mt-4 lg:mt-0">
              {/* Vertical line – hidden on mobile to avoid overflow issues */}
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
          SOCIAL PROOF STRIP — confianza, antes de pedir nada
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
          4. CASOS DE USO — para qué momento de tu negocio
      ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <SectionLabel>¿Cuándo la necesitas?</SectionLabel>
            <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
              Si te identificas con alguno de estos casos,{' '}
              <span className="text-accent">la necesitas ahora</span>
            </h2>
            <p className="section-subtitle mx-auto animate-on-scroll">
              Estos son los momentos donde una landing dedicada marca la diferencia entre
              quemar presupuesto y construir un canal de ventas predecible.
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
          5. QUÉ INCLUYE — qué obtienes exactamente
      ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <SectionLabel>Lo que obtienes</SectionLabel>
            <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
              No entregamos solo una página.{' '}
              <span className="text-accent">Entregamos una herramienta de ventas.</span>
            </h2>
            <p className="section-subtitle mx-auto animate-on-scroll">
              Cada proyecto incluye estrategia, diseño, copy, desarrollo y medición.
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
          6. PROCESO — qué tan fácil es trabajar con nosotros
      ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <SectionLabel>Cómo trabajamos</SectionLabel>
            <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
              Sin sorpresas, sin tecnicismos,{' '}
              <span className="text-accent">sin perder tiempo</span>
            </h2>
            <p className="section-subtitle mx-auto animate-on-scroll">
              Un proceso claro donde sabes exactamente en qué etapa estás, qué viene
              después y qué apruebas tú antes de continuar.
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
          7. INVERSIÓN — sin tarifas fijas, cotización a la medida
      ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <SectionLabel>Inversión</SectionLabel>
            <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
              Cada negocio es distinto.{' '}
              <span className="text-accent">Tu cotización también lo es.</span>
            </h2>
            <p className="section-subtitle mx-auto animate-on-scroll">
              No usamos paquetes cerrados ni rangos genéricos. Lo que cotizamos depende
              de tu proyecto real, no de una tabla de precios. Esto es lo que más influye
              en el alcance y la inversión:
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
                Cuéntanos tu proyecto y te decimos exactamente cuánto cuesta
              </h3>
              <p className="text-sm sm:text-base text-primary-dark/60 leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto">
                En menos de 24 horas te respondemos con una propuesta clara, sin letra
                pequeña y sin compromiso. Tú decides si avanzamos.
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
          8. FAQ
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
            Deja de pagar por clics que no se convierten.{' '}
            <span className="text-accent">Tu landing puede estar lista en menos de 2 semanas.</span>
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
    <Footer/>
    </>
  );
}