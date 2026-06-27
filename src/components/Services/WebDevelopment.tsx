// src/components/Services/WebDevelopment.tsx
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Code2, Globe, Layout, Database, Shield, Clock, CheckCircle2,
  ChevronDown, Settings, Zap, Users, AlertCircle, LightbulbIcon,
  X, Check, HeartHandshake, TrendingUp, Rocket,
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/* ─── Datos ─── */

const stats = [
  { value: '50%', label: 'más rápido que el promedio' },
  { value: '99.9%', label: 'disponibilidad garantizada' },
  { value: '100%', label: 'responsivo y adaptativo' },
];

const whatIsPoints = [
  'Creamos sitios web y plataformas full-stack con tecnologías modernas (React, Node.js, TypeScript, etc.).',
  'No son plantillas prefabricadas; son soluciones hechas a la medida de tu marca y tus objetivos.',
  'Optimizamos para SEO, velocidad y experiencia de usuario desde el diseño.',
  'Incluimos integraciones, paneles de administración y funcionalidades avanzadas.',
];

const useCases = [
  {
    Icon: Globe,
    title: 'Sitios web corporativos',
    description: 'Páginas institucionales que transmiten la identidad de tu marca y generan confianza en tus clientes.',
    example: 'Consultoría → sitio web con propuesta de valor, servicios y blog.',
  },
  {
    Icon: Layout,
    title: 'Plataformas de contenido',
    description: 'Sitios con gestión de contenido (CMS) para publicar artículos, productos o recursos multimedia.',
    example: 'Medio digital → plataforma de noticias con suscripciones.',
  },
  {
    Icon: Code2,
    title: 'Desarrollo full-stack a medida',
    description: 'Construimos tanto el frontend como el backend, con autenticación, bases de datos y APIs.',
    example: 'Marketplace → plataforma de compraventa con pasarela de pago.',
  },
  {
    Icon: Shield,
    title: 'Seguridad y rendimiento',
    description: 'Implementamos HTTPS, protección contra ataques, optimización de imágenes y carga rápida.',
    example: 'E-commerce → tienda online segura y rápida.',
  },
];

const process = [
  {
    step: '01',
    title: 'Definición de objetivos',
    time: '2–3 días',
    description: 'Entendemos tu negocio, tu audiencia y lo que quieres lograr con tu presencia digital.',
    deliverable: 'Brief estratégico y alcance',
  },
  {
    step: '02',
    title: 'Diseño UI/UX',
    time: '5–7 días',
    description: 'Diseñamos la interfaz centrada en el usuario, con prototipos interactivos y feedback.',
    deliverable: 'Prototipo en Figma y guía de estilos',
  },
  {
    step: '03',
    title: 'Desarrollo full-stack',
    time: '15–25 días',
    description: 'Construimos la plataforma con las mejores prácticas de desarrollo, pruebas y documentación.',
    deliverable: 'Sitio web funcional en entorno de pruebas',
  },
  {
    step: '04',
    title: 'Optimización y pruebas',
    time: '3–5 días',
    description: 'Realizamos pruebas de rendimiento, SEO, accesibilidad y seguridad.',
    deliverable: 'Informe de optimización y correcciones',
  },
  {
    step: '05',
    title: 'Lanzamiento y capacitación',
    time: '2–3 días',
    description: 'Publicamos el sitio, configuramos el hosting y capacitamos a tu equipo en la administración.',
    deliverable: 'Sitio web en producción + manual de administración',
  },
];

const plans = [
  {
    name: 'Startup',
    price: 'Desde $1,500 USD',
    description: 'Ideal para sitios web corporativos o landing pages avanzadas.',
    features: ['Hasta 5 páginas', 'Diseño responsivo', 'CMS básico', 'SEO on-page', '3 meses de soporte'],
    notIncluded: ['Funcionalidades avanzadas', 'Integraciones complejas'],
    cta: 'Solicitar cotización',
    highlighted: false,
  },
  {
    name: 'Business',
    price: 'Desde $3,500 USD',
    description: 'El plan más popular para sitios web con funcionalidades y escalabilidad.',
    features: ['Páginas ilimitadas', 'Diseño personalizado', 'CMS avanzado', 'Panel de administración', 'Optimización SEO completa', 'Integración con herramientas externas', '6 meses de soporte'],
    notIncluded: [],
    cta: 'Solicitar cotización',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Desde $7,000 USD',
    description: 'Para grandes corporativos y plataformas con alta demanda.',
    features: ['Arquitectura escalable', 'Alta disponibilidad', 'Integración con ERP/CRM', 'Funcionalidades a medida', 'Capacitación avanzada', 'Soporte 24/7'],
    notIncluded: [],
    cta: 'Solicitar cotización',
    highlighted: false,
  },
];

const faqs = [
  {
    q: '¿Qué diferencia un sitio web desarrollado a medida de uno con plantillas?',
    a: 'Un sitio a medida está diseñado específicamente para tu marca, con funcionalidades únicas, mejor rendimiento y total flexibilidad para futuras modificaciones. Las plantillas son genéricas y limitan la personalización.',
  },
  {
    q: '¿Incluye el dominio y hosting?',
    a: 'Podemos ayudarte a adquirir el dominio y el hosting, o podemos trabajar con los que ya tengas. Te asesoramos en la mejor opción para tu proyecto.',
  },
  {
    q: '¿El sitio será optimizado para SEO?',
    a: 'Sí, desde el desarrollo aplicamos las mejores prácticas de SEO: estructura de URLs, metaetiquetas, velocidad de carga, contenido semántico y compatibilidad con móviles.',
  },
  {
    q: '¿Puedo actualizar el contenido yo mismo?',
    a: 'Sí, si incluye un CMS. Te capacitamos para que puedas agregar, editar y eliminar contenido sin necesidad de conocimientos técnicos.',
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
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/40 bg-background/80">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <span className="flex-1 mx-3 h-5 rounded-md bg-border/30 text-[10px] text-primary-dark/30 flex items-center px-2 truncate">
            advantech.ai
          </span>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-accent" />
            <span className="text-xs font-medium text-primary-dark">Sitio en vivo</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-3 w-4/5 rounded bg-primary-dark/10" />
            <div className="h-3 w-3/5 rounded bg-primary-dark/10" />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {['🚀 Carga rápida', '📱 Responsive', '🔒 HTTPS'].map((badge) => (
              <span key={badge} className="text-[9px] px-2 py-0.5 rounded-md bg-accent/8 text-accent font-medium border border-accent/20">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-border/30 border-t border-border/40">
          <div className="py-2.5 text-center">
            <p className="text-xs font-bold text-primary-dark">99.9%</p>
            <p className="text-[9px] text-primary-dark/40">Disponibilidad</p>
          </div>
          <div className="py-2.5 text-center">
            <p className="text-xs font-bold text-primary-dark">1.2s</p>
            <p className="text-[9px] text-primary-dark/40">Carga promedio</p>
          </div>
          <div className="py-2.5 text-center">
            <p className="text-xs font-bold text-primary-dark">96</p>
            <p className="text-[9px] text-primary-dark/40">PageSpeed</p>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 -right-3 bg-accent text-white rounded-xl px-3 py-1.5 text-[11px] font-semibold shadow-lg">
        Full-Stack
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
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>

        <Helmet>
            <title>Desarrollo Web Full-Stack Avanzado y Moderno | Advantech AI</title>
            <meta name="description" content="Creamos plataformas de software estables, rápidas y ultra adaptables utilizando las últimas tecnologías web (React, Node.js, TypeScript). Sitios corporativos, comercio electrónico y más." />
            <link rel="canonical" href="https://www.advantechai.org/DesarrolloWeb" />
            <meta property="og:title" content="Desarrollo Web Full-Stack Avanzado y Moderno | Advantech AI" />
            <meta property="og:description" content="Desarrollamos sitios web y aplicaciones full-stack con tecnologías de vanguardia." />
            <meta property="og:url" content="https://www.advantechai.org/DesarrolloWeb" />
        </Helmet>

        <div className="overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />


          {/* ─── HERO ─── */}
          <section className="relative min-h-[100svh] sm:min-h-[90vh] pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 lg:pb-32 flex items-center overflow-hidden">
            <div className="absolute inset-0 gradient-mesh" />
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="space-y-6 sm:space-y-8">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest animate-on-scroll">
                    <Code2 className="w-3.5 h-3.5 shrink-0" />
                    Desarrollo Web
                  </p>
                  <h1
                    className="text-[2rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-balance animate-slide-up"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    Plataformas web de{' '}
                    <span className="text-accent">alto rendimiento</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-primary-dark/60 leading-relaxed max-w-xl animate-slide-up stagger-1">
                    Construimos sitios web y aplicaciones full-stack con tecnologías
                    modernas, enfocados en velocidad, seguridad y una experiencia
                    de usuario excepcional.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-4 animate-slide-up stagger-1">
                    {stats.map(({ value, label }) => (
                      <div key={label} className="flex flex-col">
                        <span className="text-xl sm:text-2xl font-bold text-accent" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                          {value}
                        </span>
                        <span className="text-xs text-primary-dark/50 mt-0.5 leading-snug max-w-[130px]">{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-slide-up stagger-2">
                    <a href="#contacto" className="btn-primary text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 text-center">
                      Empezar proyecto
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
                <div className="flex items-center justify-center lg:justify-end animate-scale-in stagger-2 py-10 sm:py-8">
                  <HeroVisual />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent" />
          </section>

          {/* ─── QUÉ ES ─── */}
          <section className="py-16 sm:py-24 lg:py-32 relative">
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
                <div>
                  <SectionLabel>Concepto</SectionLabel>
                  <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                    ¿Qué es el{' '}
                    <span className="text-accent">desarrollo web full-stack</span>?
                  </h2>
                  <p className="text-sm sm:text-base text-primary-dark/60 leading-relaxed mb-4 sm:mb-6 animate-on-scroll">
                    El desarrollo full-stack abarca tanto el frontend (lo que el
                    usuario ve) como el backend (la lógica, bases de datos y
                    servidores). Esto nos permite construir soluciones completas,
                    integradas y funcionales desde el primer día.
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
                      Tu negocio en el mundo digital
                    </h3>
                    <p className="text-sm text-primary-dark/60 leading-relaxed mb-4 sm:mb-5">
                      Una web bien desarrollada no es un gasto, es una inversión que
                      genera visibilidad, credibilidad y ventas. Trabajamos para que
                      tu sitio sea el mejor embajador de tu marca.
                    </p>
                    <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-accent/6 border border-accent/20">
                      <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-xs text-primary-dark/70 leading-relaxed">
                        <strong className="text-primary-dark">Dato clave:</strong> El 94% de
                        los usuarios juzgan la credibilidad de una empresa por el diseño
                        de su sitio web.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── CASOS DE USO ─── */}
          <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-40" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-14 lg:mb-16">
                <SectionLabel>Casos de uso</SectionLabel>
                <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                  Sitios web que{' '}
                  <span className="text-accent">generan resultados</span>
                </h2>
                <p className="section-subtitle mx-auto animate-on-scroll">
                  Desde sitios corporativos hasta plataformas complejas, creamos
                  soluciones que cumplen con tus objetivos.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {useCases.map(({ Icon, title, description, example }, i) => (
                  <div
                    key={i}
                    className="relative group animate-on-scroll rounded-2xl border border-border/40 bg-background p-5 sm:p-6 flex flex-col hover:border-accent/40 transition-colors duration-200 overflow-hidden"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 sm:mb-5">
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

          {/* ─── PROCESO ─── */}
          <section className="py-16 sm:py-24 lg:py-32 relative">
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-14 lg:mb-16">
                <SectionLabel>Proceso</SectionLabel>
                <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                  De la idea al sitio web,{' '}
                  <span className="text-accent">paso a paso</span>
                </h2>
                <p className="section-subtitle mx-auto animate-on-scroll">
                  Un proceso colaborativo que garantiza que el resultado final
                  supere tus expectativas.
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
                      <span className="text-[10px] sm:text-xs font-bold text-accent" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
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
            </div>
          </section>

          {/* ─── PLANES ─── */}
          <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-40" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-14 lg:mb-16">
                <SectionLabel>Inversión</SectionLabel>
                <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                  Elige el plan que se adapta{' '}
                  <span className="text-accent">a tu proyecto web</span>
                </h2>
                <p className="section-subtitle mx-auto animate-on-scroll">
                  Precios referenciales. Cada proyecto es único y ofrecemos cotizaciones
                  personalizadas.
                </p>
              </div>
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
                        <span className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[9px] sm:text-[10px] font-bold text-white bg-accent rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 uppercase tracking-widest">
                          Más elegido
                        </span>
                      </>
                    )}
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-sm sm:text-base font-semibold text-primary-dark mb-1">{name}</h3>
                      <p className="text-xl sm:text-2xl font-bold text-primary-dark mb-2 sm:mb-3" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
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
            </div>
          </section>

          {/* ─── SOCIAL PROOF ─── */}
          <section className="py-12 sm:py-16 border-y border-border/30 relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                {[
                  { Icon: TrendingUp, value: '99.9%', label: 'Disponibilidad' },
                  { Icon: Zap, value: '1.2s', label: 'Carga promedio' },
                  { Icon: Users, value: '60+', label: 'Sitios entregados' },
                ].map(({ Icon, value, label }, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 sm:gap-3 animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold text-primary-dark" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      {value}
                    </span>
                    <span className="text-xs sm:text-sm text-primary-dark/50">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── FAQ ─── */}
          <section className="py-16 sm:py-24 lg:py-32 relative">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-start">
                <div>
                  <SectionLabel>Preguntas frecuentes</SectionLabel>
                  <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                    Todo lo que necesitas saber{' '}
                    <span className="text-accent">sobre desarrollo web</span>
                  </h2>
                  <p className="section-subtitle animate-on-scroll">
                    Resolvemos las dudas más comunes para que tomes la mejor decisión.
                  </p>
                  <div className="mt-6 sm:mt-8 animate-on-scroll">
                    <a href="#contacto" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4">
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

          {/* ─── CTA ─── */}
          <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 gradient-mesh opacity-60" />
            <div className="absolute inset-0 grid-pattern opacity-40" />
            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
              <SectionLabel>Empecemos</SectionLabel>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-primary-dark mb-4 sm:mb-6 animate-on-scroll"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Dale a tu negocio la{' '}
                <span className="text-accent">presencia digital que merece</span>
              </h2>
              <p className="text-base sm:text-lg text-primary-dark/60 mb-8 sm:mb-10 animate-on-scroll">
                Cuéntanos tu idea y te ayudaremos a materializarla en una plataforma
                web de alto nivel. Propuesta personalizada y sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-on-scroll">
                <a href="#contacto" className="btn-primary text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 text-center">
                  Solicitar asesoría
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
                  { Icon: HeartHandshake, text: 'Asesoría sin compromiso' },
                  { Icon: Settings, text: 'Propuesta a medida' },
                  { Icon: Shield, text: 'Código de calidad' },
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