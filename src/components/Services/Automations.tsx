// src/components/Services/Automations.tsx
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Workflow, Zap, GitMerge, Database, Clock, CheckCircle2,
  ChevronDown, Settings, Shield, Users, BarChart3, Link, AlertCircle,
  LightbulbIcon, X, Check, HeartHandshake, TrendingUp, Target,
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/* ─── Datos ─── */

const stats = [
  { value: '80%', label: 'ahorro de tiempo en tareas repetitivas' },
  { value: '0', label: 'errores humanos (se eliminan)' },
  { value: '24/7', label: 'ejecución automática' },
];

const whatIsPoints = [
  'Conectamos tus herramientas (CRM, ERP, email, bases de datos, etc.) mediante flujos automatizados.',
  'Utilizamos n8n, la plataforma open-source más potente para integraciones y automatizaciones.',
  'Diseñamos flujos que ejecutan acciones basadas en eventos, condiciones y programaciones.',
  'No necesitas conocimientos técnicos para operarlos; nosotros los construimos y mantenemos.',
];

const useCases = [
  {
    Icon: GitMerge,
    title: 'Integración CRM – Email',
    description: 'Cuando un lead se registra en tu CRM, se envía automáticamente un correo de bienvenida y se agenda una tarea para el equipo de ventas.',
    example: 'Ventas → automatización de seguimiento de leads.',
  },
  {
    Icon: Database,
    title: 'Sincronización de inventario',
    description: 'Mantén actualizado el stock entre tu tienda online, tu ERP y tus proveedores sin intervención manual.',
    example: 'E-commerce → sincronización automática de inventario.',
  },
  {
    Icon: Clock,
    title: 'Agendamiento de citas',
    description: 'Conecta tu calendario con WhatsApp y envía recordatorios automáticos a los clientes antes de la cita.',
    example: 'Clínicas → automatización de agendamiento y recordatorios.',
  },
  {
    Icon: BarChart3,
    title: 'Reportes automáticos',
    description: 'Recopila datos de múltiples fuentes y genera informes ejecutivos en PDF o Google Sheets cada día.',
    example: 'Finanzas → reporte diario de ventas y gastos.',
  },
];

const process = [
  {
    step: '01',
    title: 'Análisis de procesos',
    time: '2–3 días',
    description: 'Identificamos los procesos que consumes tiempo y que pueden ser automatizados.',
    deliverable: 'Mapa de procesos y priorización',
  },
  {
    step: '02',
    title: 'Diseño del flujo',
    time: '2–4 días',
    description: 'Diseñamos el flujo en n8n, definiendo nodos, condiciones y acciones.',
    deliverable: 'Diagrama de flujo en n8n (borrador)',
  },
  {
    step: '03',
    title: 'Implementación y pruebas',
    time: '3–5 días',
    description: 'Construimos el flujo, conectamos las APIs y realizamos pruebas exhaustivas.',
    deliverable: 'Flujo funcional en entorno de pruebas',
  },
  {
    step: '04',
    title: 'Despliegue y monitoreo',
    time: '1–2 días',
    description: 'Publicamos el flujo en producción y configuramos alertas para supervisar su ejecución.',
    deliverable: 'Automatización en producción + panel de monitoreo',
  },
];

const plans = [
  {
    name: 'Básico',
    price: 'Desde $450 USD',
    description: 'Ideal para una automatización sencilla entre dos o tres herramientas.',
    features: ['Hasta 5 nodos', '2 integraciones', 'Ejecución programada', '1 mes de soporte'],
    notIncluded: ['Integraciones complejas', 'Mantenimiento continuo'],
    cta: 'Solicitar cotización',
    highlighted: false,
  },
  {
    name: 'Profesional',
    price: 'Desde $950 USD',
    description: 'El plan más popular para flujos complejos con múltiples sistemas.',
    features: ['Nodos ilimitados', 'Integraciones ilimitadas', 'Ejecución en tiempo real', 'Manejo de errores avanzado', '3 meses de soporte'],
    notIncluded: [],
    cta: 'Solicitar cotización',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Desde $1,800 USD',
    description: 'Para empresas que necesitan automatizaciones críticas con alta disponibilidad.',
    features: ['Arquitectura escalable', 'Alta disponibilidad', 'Monitoreo proactivo', 'Soporte 24/7', 'Mantenimiento continuo (6 meses)'],
    notIncluded: [],
    cta: 'Solicitar cotización',
    highlighted: false,
  },
];

const faqs = [
  {
    q: '¿Qué es n8n y por qué lo usan?',
    a: 'n8n es una plataforma open-source de automatización de flujos de trabajo. La elegimos porque es flexible, se puede ejecutar en la nube o localmente, y se integra con casi cualquier API. Es más potente y económico que otras soluciones cerradas.',
  },
  {
    q: '¿Necesito conocimientos técnicos para operar la automatización?',
    a: 'No. Nosotros diseñamos y configuramos todo. Tú solo disfrutas de los beneficios. Si necesitas cambios, nuestro equipo los realiza por ti.',
  },
  {
    q: '¿Qué pasa si una API cambia o falla?',
    a: 'Construimos los flujos con manejo de errores, reintentos y notificaciones. Además, ofrecemos un plan de mantenimiento para adaptar las automatizaciones a cambios en las APIs.',
  },
  {
    q: '¿Cuánto tiempo toma tener la automatización funcionando?',
    a: 'Depende de la complejidad. Una automatización simple puede estar lista en 1 semana, mientras que una compleja puede tomar 2–3 semanas. Siempre trabajamos en sprints para que veas avances rápidos.',
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
            n8n.advantech.ai
          </span>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Workflow className="w-5 h-5 text-accent" />
            <span className="text-xs font-medium text-primary-dark">Flujo activo</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-3 w-4/5 rounded bg-primary-dark/10" />
            <div className="h-3 w-3/5 rounded bg-primary-dark/10" />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {['✅ Conectado', '⚡ 1.2s', '📊 245 ejec. hoy'].map((badge) => (
              <span key={badge} className="text-[9px] px-2 py-0.5 rounded-md bg-accent/8 text-accent font-medium border border-accent/20">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-border/30 border-t border-border/40">
          <div className="py-2.5 text-center">
            <p className="text-xs font-bold text-primary-dark">2,340</p>
            <p className="text-[9px] text-primary-dark/40">Tareas ejec.</p>
          </div>
          <div className="py-2.5 text-center">
            <p className="text-xs font-bold text-primary-dark">100%</p>
            <p className="text-[9px] text-primary-dark/40">Éxito</p>
          </div>
          <div className="py-2.5 text-center">
            <p className="text-xs font-bold text-primary-dark">+80%</p>
            <p className="text-[9px] text-primary-dark/40">Eficiencia</p>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 -right-3 bg-accent text-white rounded-xl px-3 py-1.5 text-[11px] font-semibold shadow-lg">
        Ahorra 80% tiempo
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

export default function Automations() {
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
            <title>Agencia de Automatización de Procesos con n8n | Advantech AI</title>
            <meta name="description" content="Expertos en n8n. Conectamos tus herramientas (CRMs, ERPs, APIs) para eliminar tareas repetitivas y optimizar flujos de trabajo con automatizaciones inteligentes." />
            <link rel="canonical" href="https://www.advantechai.org/Automatizaciones" />
            <meta property="og:title" content="Agencia de Automatización de Procesos con n8n | Advantech AI" />
            <meta property="og:description" content="Automatiza tus flujos de trabajo con n8n, integra APIs, sincroniza datos y elimina tareas manuales repetitivas." />
            <meta property="og:url" content="https://www.advantechai.org/Automatizaciones" />
        </Helmet>

        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />

        <div className="overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>



          {/* ─── HERO ─── */}
          <section className="relative min-h-[100svh] sm:min-h-[90vh] pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 lg:pb-32 flex items-center overflow-hidden">
            <div className="absolute inset-0 gradient-mesh" />
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="space-y-6 sm:space-y-8">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest animate-on-scroll">
                    <Workflow className="w-3.5 h-3.5 shrink-0" />
                    Automatizaciones
                  </p>
                  <h1
                    className="text-[2rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-balance animate-slide-up"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    Elimina tareas repetitivas con{' '}
                    <span className="text-accent">flujos automatizados</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-primary-dark/60 leading-relaxed max-w-xl animate-slide-up stagger-1">
                    Conectamos tus herramientas, sincronizamos datos y automatizamos procesos
                    usando n8n, la plataforma open-source más potente para integraciones.
                    Olvídate de tareas manuales y errores humanos.
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
                      Automatizar ahora
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
                    ¿Qué es la{' '}
                    <span className="text-accent">automatización con n8n</span>?
                  </h2>
                  <p className="text-sm sm:text-base text-primary-dark/60 leading-relaxed mb-4 sm:mb-6 animate-on-scroll">
                    n8n es una herramienta de código abierto que permite crear flujos de
                    trabajo automatizados conectando diferentes aplicaciones y servicios.
                    Con una interfaz visual, diseñamos integraciones que ejecutan acciones
                    basadas en eventos, condiciones o programaciones.
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
                      Automatización sin código (o con poco)
                    </h3>
                    <p className="text-sm text-primary-dark/60 leading-relaxed mb-4 sm:mb-5">
                      No necesitas ser programador para automatizar procesos. Con n8n,
                      diseñamos flujos visuales que conectan tus herramientas favoritas
                      y ejecutan tareas en segundos.
                    </p>
                    <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-accent/6 border border-accent/20">
                      <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-xs text-primary-dark/70 leading-relaxed">
                        <strong className="text-primary-dark">Dato clave:</strong> Las empresas
                        que automatizan procesos repetitivos reducen los errores humanos en
                        un 90% y ahorran un promedio de 8 horas semanales por empleado.
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
                  Automatizaciones que{' '}
                  <span className="text-accent">transforman tu negocio</span>
                </h2>
                <p className="section-subtitle mx-auto animate-on-scroll">
                  Desde la integración de CRM hasta la sincronización de inventario, las
                  automatizaciones liberan tiempo y reducen errores.
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
                  De la idea al flujo funcionando,{' '}
                  <span className="text-accent">paso a paso</span>
                </h2>
                <p className="section-subtitle mx-auto animate-on-scroll">
                  Un proceso ágil y colaborativo para que tu automatización esté en
                  producción en el menor tiempo posible.
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
                  <span className="text-accent">a tu flujo de trabajo</span>
                </h2>
                <p className="section-subtitle mx-auto animate-on-scroll">
                  Precios referenciales. Cada automatización es única, por lo que ofrecemos
                  cotizaciones personalizadas.
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
                  { Icon: TrendingUp, value: '+80%', label: 'Ahorro de tiempo' },
                  { Icon: Zap, value: '100%', label: 'Tasa de éxito' },
                  { Icon: Users, value: '50+', label: 'Automatizaciones entregadas' },
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
                    <span className="text-accent">antes de automatizar</span>
                  </h2>
                  <p className="section-subtitle animate-on-scroll">
                    Resolvemos las dudas más comunes sobre automatizaciones con n8n.
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
                Automatiza tus procesos y{' '}
                <span className="text-accent">recupera tu tiempo</span>
              </h2>
              <p className="text-base sm:text-lg text-primary-dark/60 mb-8 sm:mb-10 animate-on-scroll">
                Cuéntanos qué tarea te gustaría automatizar y te mostraremos cómo hacerlo.
                Propuesta personalizada y sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-on-scroll">
                <a href="#contacto" className="btn-primary text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 text-center">
                  Solicitar automatización
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
                  { Icon: Shield, text: 'Soporte continuo' },
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