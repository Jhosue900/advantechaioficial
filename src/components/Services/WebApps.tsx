// src/components/Services/WebApps.tsx
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Layout, Code2, BarChart3, Users, Clock, CheckCircle2,
  ChevronDown, Settings, Database, Shield, AlertCircle, LightbulbIcon,
  X, Check, HeartHandshake, TrendingUp, Zap, GitBranch,
  Building2, Layers, RefreshCw, FileText, Calendar, ShoppingBag, GraduationCap,
  Truck, Package, PieChart, Briefcase, GitMerge, Link, Eye, ShoppingCart, DollarSign
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/* ─── Datos ─── */

const stats = [
  { value: '15+', label: 'años de experiencia en desarrollo' },
  { value: '100+', label: 'empresas que confían en nosotros' },
  { value: '100%', label: 'código propio y propiedad intelectual' },
];

const problemPoints = [
  'La información crítica está dispersa entre hojas de cálculo, correos y herramientas desconectadas.',
  'Los equipos pierden tiempo en procesos manuales que deberían estar automatizados.',
  'Los datos no están disponibles en tiempo real para tomar decisiones.',
  'Las herramientas genéricas obligan a adaptar el negocio en lugar de adaptarse a él.',
];

const solutionPoints = [
  'Centralizamos toda la información en una plataforma diseñada para tu operación.',
  'Automatizamos tareas repetitivas para que tu equipo se enfoque en lo que importa.',
  'Ponemos los datos clave al alcance de quienes los necesitan, cuando los necesitan.',
  'Creamos software que funciona como piensa tu negocio, no al revés.',
];

const useCases = [
  {
    Icon: Building2,
    title: 'CRM y gestión de clientes',
    problem: 'Los equipos comerciales trabajan con información dispersa y pierden seguimiento de clientes potenciales.',
    solution: 'Centraliza toda la relación con clientes y automatiza el ciclo de ventas.',
    example: 'Empresa B2B → CRM que integra cotizaciones, seguimiento y facturación.',
  },
  {
    Icon: Package,
    title: 'Gestión de inventario',
    problem: 'El stock se controla manualmente y hay desabastecimientos o excesos de inventario.',
    solution: 'Visualiza el inventario en tiempo real y optimiza la cadena de suministro.',
    example: 'Distribuidora → sistema que alerta automáticamente puntos de reorden.',
  },
  {
    Icon: Users,
    title: 'Portal de clientes',
    problem: 'Los clientes no tienen acceso a su información y siempre preguntan por correo.',
    solution: 'Da autonomía a tus clientes con un portal donde consulten su historial y estado.',
    example: 'Servicios profesionales → portal donde los clientes ven avances y entregables.',
  },
  {
    Icon: Truck,
    title: 'Logística y trazabilidad',
    problem: 'Se pierde visibilidad de envíos y no se puede rastrear el flujo de mercancías.',
    solution: 'Obtén trazabilidad completa con registro de cada movimiento en tiempo real.',
    example: 'Transporte → sistema de seguimiento de flota y planificación de rutas.',
  },
  {
    Icon: Calendar,
    title: 'Sistema de reservas',
    problem: 'Las reservas se gestionan con agendas compartidas y hay conflictos o dobles reservas.',
    solution: 'Optimiza la disponibilidad con un sistema que evita conflictos y errores.',
    example: 'Hostelería → plataforma de reservas con gestión de espacios y servicios.',
  },
  {
    Icon: FileText,
    title: 'Gestión documental',
    problem: 'Los documentos importantes están en múltiples ubicaciones sin control de versiones.',
    solution: 'Organiza, clasifica y controla versiones de toda la documentación empresarial.',
    example: 'Banca → sistema de gestión documental con auditoría y accesos controlados.',
  },
  {
    Icon: ShoppingBag,
    title: 'Marketplace',
    problem: 'Gestionar múltiples vendedores y productos es complejo sin una plataforma unificada.',
    solution: 'Crea un ecosistema donde proveedores y compradores interactúen fácilmente.',
    example: 'Comercio electrónico → marketplace con facturación y comisiones automatizadas.',
  },
  {
    Icon: GraduationCap,
    title: 'Plataforma educativa',
    problem: 'La formación requiere sistemas que gestionen alumnos, contenidos y evaluaciones.',
    solution: 'Diseña una plataforma de aprendizaje que se adapte a tu metodología educativa.',
    example: 'Consultoría → campus virtual con seguimiento de progreso y certificaciones.',
  },
  {
    Icon: PieChart,
    title: 'Paneles de control',
    problem: 'Los indicadores clave están en informes estáticos que llegan siempre tarde.',
    solution: 'Visualiza el rendimiento del negocio con métricas actualizadas al instante.',
    example: 'Retail → dashboard de ventas, rotación de inventario y márgenes por tienda.',
  },
];

const process = [
  {
    step: '01',
    title: 'Analizamos tu negocio',
    time: '1–2 semanas',
    description: 'Estudiamos cómo opera tu empresa, cuáles son sus procesos actuales y qué necesita resolver el software.',
    deliverable: 'Documento de descubrimiento y análisis de necesidades',
  },
  {
    step: '02',
    title: 'Diseñamos la solución',
    time: '1–2 semanas',
    description: 'Creamos prototipos y validamos con tu equipo cada pantalla y flujo antes de escribir una línea de código.',
    deliverable: 'Prototipo interactivo y guía funcional',
  },
  {
    step: '03',
    title: 'Desarrollamos el software',
    time: '4–8 semanas',
    description: 'Construimos la aplicación con las mejores prácticas de ingeniería, priorizando funcionalidad y experiencia.',
    deliverable: 'Aplicación funcional en entorno de pruebas',
  },
  {
    step: '04',
    title: 'Probamos cada funcionalidad',
    time: '1–2 semanas',
    description: 'Verificamos que todo funcione como esperas, cubriendo todos los casos de uso que identificamos juntos.',
    deliverable: 'Informe de pruebas y validación funcional',
  },
  {
    step: '05',
    title: 'Implementamos y acompañamos',
    time: '1 semana',
    description: 'Lanzamos el software en producción y acompañamos a tu equipo durante los primeros días de uso.',
    deliverable: 'Aplicación en producción + sesiones de capacitación',
  },
];

const complexityLevels = [
  {
    name: 'Proyecto de alcance definido',
    price: 'Desde $5,000 USD',
    description: 'Herramientas especializadas con funciones claras y un flujo de trabajo bien delimitado.',
    features: [
      'Autenticación de usuarios',
      'Gestión de datos y reportes básicos',
      'Integración con hasta 2 sistemas externos',
      'Entrenamiento para el equipo operativo',
      '3 meses de soporte posterior al lanzamiento',
    ],
    notIncluded: ['Integraciones avanzadas', 'Alta concurrencia'],
    cta: 'Solicitar cotización',
    highlighted: false,
  },
  {
    name: 'Plataforma empresarial',
    price: 'Desde $12,000 USD',
    description: 'Soluciones completas que integran múltiples áreas de tu negocio en una sola plataforma.',
    features: [
      'Módulos ilimitados según necesidades',
      'Autenticación avanzada y control de accesos',
      'Integración con ERP, CRM o sistemas existentes',
      'Dashboards y reportes personalizados',
      'Capacitación para toda la organización',
      '6 meses de soporte y actualizaciones',
    ],
    notIncluded: [],
    cta: 'Solicitar cotización',
    highlighted: true,
  },
  {
    name: 'Sistema complejo o gran escala',
    price: 'Desde $22,000 USD',
    description: 'Software crítico para organizaciones que necesitan alto rendimiento y adaptación total.',
    features: [
      'Arquitectura robusta para alto volumen de datos',
      'Alta disponibilidad y continuidad operativa',
      'Cumplimiento de normativas sectoriales',
      'Integraciones ilimitadas con terceros',
      'Capacitación avanzada y documentación técnica',
      'Soporte prioritario con ingenieros dedicados',
      'Mantenimiento evolutivo planificado',
    ],
    notIncluded: [],
    cta: 'Solicitar cotización',
    highlighted: false,
  },
];


// Factores que determinan la cotización
const quoteFactors = [
  {
    Icon: Layout,
    title: 'El tamaño y la complejidad de la solución.',
    description: 'No es lo mismo un sitio de 5 características complejas que uno con 15, bases de datos, usuarios y múltiples funcionalidades.',
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
    q: '¿Qué tipo de software desarrollan exactamente?',
    a: 'Desarrollamos todo tipo de aplicaciones web a medida: plataformas SaaS, portales de clientes, sistemas internos, dashboards, herramientas de gestión, marketplaces, software educativo, sistemas logísticos y cualquier otra solución que tu negocio necesite.',
  },
  {
    q: '¿Qué pasa si no tengo claro lo que necesito?',
    a: 'Es normal. Nuestro proceso comienza precisamente con una fase de descubrimiento en la que analizamos tu negocio, identificamos oportunidades de mejora y definimos juntos el alcance del proyecto. Te guiamos para que tomes las mejores decisiones.',
  },
  {
    q: '¿Cuánto cuesta desarrollar una aplicación a medida?',
    a: 'Cada proyecto es único. Una herramienta especializada puede partir de $5,000 USD, mientras que una plataforma empresarial completa puede superar los $20,000 USD. La inversión depende de la complejidad, el número de funcionalidades y las integraciones necesarias. Siempre entregamos una cotización clara y detallada.',
  },
  {
    q: '¿Cuánto tarda el desarrollo?',
    a: 'Una herramienta específica puede estar lista en 6–8 semanas. Una plataforma completa suele tomar 3–5 meses. El tiempo se define según la complejidad y trabajamos con entregas iterativas para que veas avances desde el principio.',
  },
  {
    q: '¿El código queda a nombre de mi empresa?',
    a: 'Sí, el código fuente y la propiedad intelectual del software son 100% tuyos. No pagas licencias de uso ni regalías. Te entregamos todo el código, documentación y acceso al repositorio.',
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
            plataforma.empresa.com
          </span>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Layout className="w-5 h-5 text-accent" />
            <span className="text-xs font-medium text-primary-dark">Software en operación</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-3 w-4/5 rounded bg-primary-dark/10" />
            <div className="h-3 w-3/5 rounded bg-primary-dark/10" />
            <div className="h-3 w-2/3 rounded bg-primary-dark/10" />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {['📊 Datos centralizados', '⚡ Procesos ágiles', '🔒 Control total'].map((badge) => (
              <span key={badge} className="text-[9px] px-2 py-0.5 rounded-md bg-accent/8 text-accent font-medium border border-accent/20">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-border/30 border-t border-border/40">
          <div className="py-2.5 text-center">
            <p className="text-xs font-bold text-primary-dark">+500</p>
            <p className="text-[9px] text-primary-dark/40">Operaciones diarias</p>
          </div>
          <div className="py-2.5 text-center">
            <p className="text-xs font-bold text-primary-dark">30+</p>
            <p className="text-[9px] text-primary-dark/40">Áreas integradas</p>
          </div>
          <div className="py-2.5 text-center">
            <p className="text-xs font-bold text-primary-dark">24/7</p>
            <p className="text-[9px] text-primary-dark/40">Disponibilidad</p>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 -right-3 bg-accent text-white rounded-xl px-3 py-1.5 text-[11px] font-semibold shadow-lg">
        100% a medida
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

export default function WebApps() {
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
            <title>Software a Medida para Empresas | Desarrollamos tu Plataforma | Advantech AI</title>
            <meta name="description" content="Creamos aplicaciones web personalizadas para resolver los desafíos operativos de tu empresa. Software que se adapta a tu negocio, no al revés. Cotiza tu proyecto." />
            <link rel="canonical" href="https://www.advantechai.org/AplicacionesWeb" />
            <meta property="og:title" content="Software a Medida para Empresas | Desarrollamos tu Plataforma | Advantech AI" />
            <meta property="og:description" content="Desarrollamos aplicaciones web personalizadas para resolver problemas reales de tu negocio. Software que se adapta a tu empresa." />
            <meta property="og:url" content="https://www.advantechai.org/AplicacionesWeb" />
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
                    Software a medida
                  </p>
                  <h1
                    className="text-[2rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-balance animate-slide-up"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    Software diseñado para{' '}
                    <span className="text-accent">resolver los desafíos de tu empresa</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-primary-dark/60 leading-relaxed max-w-xl animate-slide-up stagger-1">
                    Creamos aplicaciones web personalizadas que optimizan tus operaciones,
                    centralizan la información y permiten a tu equipo trabajar con eficiencia.
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-slide-up stagger-2">
                    <a href="#contacto" className="btn-primary text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 text-center">
                      Solicitar asesoría
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

          {/* ─── EL PROBLEMA ─── */}
          <section className="py-16 sm:py-24 lg:py-32 relative">
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
                <div>
                  <SectionLabel>El desafío</SectionLabel>
                  <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                    ¿Tu negocio ha superado las{' '}
                    <span className="text-accent">herramientas genéricas</span>?
                  </h2>
                  <p className="text-sm sm:text-base text-primary-dark/60 leading-relaxed mb-4 sm:mb-6 animate-on-scroll">
                    Hay un momento en el crecimiento de toda empresa en que las soluciones estándar ya no son suficientes. Cuando los procesos se vuelven complejos, la información está dispersa y los equipos pierden tiempo en tareas manuales.
                  </p>
                  <div className="space-y-3 animate-on-scroll">
                    {problemPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                          <AlertCircle className="w-3 h-3 text-accent" />
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
                      No necesitas más software genérico
                    </h3>
                    <p className="text-sm text-primary-dark/60 leading-relaxed mb-4 sm:mb-5">
                      Las herramientas estándar obligan a las empresas a adaptar sus procesos al software. Nosotros hacemos lo contrario: desarrollamos software que se adapta a la forma en que opera tu negocio.
                    </p>
                    <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-accent/6 border border-accent/20">
                      <GitMerge className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-xs text-primary-dark/70 leading-relaxed">
                        <strong className="text-primary-dark">La diferencia:</strong> El software a medida elimina las limitaciones de las soluciones genéricas y convierte la tecnología en una ventaja competitiva real.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── LA SOLUCIÓN ─── */}
          <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-40" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-14 lg:mb-16">
                <SectionLabel>La solución</SectionLabel>
                <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                  Software que funciona como{' '}
                  <span className="text-accent">tu negocio necesita</span>
                </h2>
                <p className="section-subtitle mx-auto animate-on-scroll">
                  Desarrollamos aplicaciones web personalizadas que resuelven problemas reales y generan resultados tangibles.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
                {solutionPoints.map((point, i) => (
                  <div
                    key={i}
                    className="relative animate-on-scroll rounded-2xl border border-border/40 bg-background p-5 sm:p-6 flex items-start gap-4 hover:border-accent/40 transition-colors duration-200"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <p className="text-sm text-primary-dark/70 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── CASOS DE USO ─── */}
          <section className="py-16 sm:py-24 lg:py-32 relative">
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-14 lg:mb-16">
                <SectionLabel>Casos de uso</SectionLabel>
                <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                  ¿Qué problema necesitas{' '}
                  <span className="text-accent">resolver con software</span>?
                </h2>
                <p className="section-subtitle mx-auto animate-on-scroll">
                  Cada negocio tiene desafíos únicos. Estos son algunos de los problemas que resolvemos con software a medida.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {useCases.map(({ Icon, title, problem, solution, example }, i) => (
                  <div
                    key={i}
                    className="relative group animate-on-scroll rounded-2xl border border-border/40 bg-background p-5 sm:p-6 flex flex-col hover:border-accent/40 transition-colors duration-200 overflow-hidden"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 sm:mb-5">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-primary-dark mb-2">{title}</h3>
                    <p className="text-sm text-primary-dark/60 leading-relaxed mb-3">
                      <span className="font-medium text-primary-dark">El problema: </span>
                      {problem}
                    </p>
                    <p className="text-sm text-primary-dark/70 leading-relaxed mb-4 flex-1">
                      <span className="font-medium text-primary-dark">La solución: </span>
                      {solution}
                    </p>
                    <div className="flex items-start gap-2 p-2.5 sm:p-3 rounded-lg bg-accent/6 border border-accent/15 mt-auto">
                      <span className="text-accent text-xs font-semibold shrink-0 mt-0.5">Ejemplo:</span>
                      <p className="text-xs text-primary-dark/60 leading-relaxed">{example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── PROCESO ─── */}
          <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-40" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-14 lg:mb-16">
                <SectionLabel>Proceso</SectionLabel>
                <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                  Cómo convertimos tu necesidad en{' '}
                  <span className="text-accent">una herramienta real</span>
                </h2>
                <p className="section-subtitle mx-auto animate-on-scroll">
                  Un proceso transparente con entregables claros en cada etapa.
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

          {/* ─── NIVELES DE COMPLEJIDAD ─── */}
          <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
              <SectionLabel>Inversión</SectionLabel>
              <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                Cada negocio es distinto.{' '}
                <span className="text-accent">Tu aplicacion web también lo será.</span>
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


          {/* ─── FAQ ─── */}
          <section className="py-16 sm:py-24 lg:py-32 relative">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-start">
                <div>
                  <SectionLabel>Preguntas frecuentes</SectionLabel>
                  <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
                    Todo lo que necesitas saber{' '}
                    <span className="text-accent">sobre software a medida</span>
                  </h2>
                  <p className="section-subtitle animate-on-scroll">
                    Resolvemos las dudas más comunes para que tomes la mejor decisión para tu empresa.
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
                Transforma tu operación con{' '}
                <span className="text-accent">software hecho para ti</span>
              </h2>
              <p className="text-base sm:text-lg text-primary-dark/60 mb-8 sm:mb-10 animate-on-scroll">
                Cuéntanos qué problema necesitas resolver. Te ayudamos a definir la mejor solución y te entregamos una propuesta sin compromiso.
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
                  { Icon: Settings, text: 'Propuesta personalizada' },
                  { Icon: Link, text: 'Código 100% tuyo' },
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