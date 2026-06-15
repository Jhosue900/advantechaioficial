import { Code2, Target, Globe, Bot, Brain, Workflow, Database, Shield, Map, Check, ArrowRight, LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Service = {
  Icon: LucideIcon;
  title: string;
  description: string;
  link: string;
};

const services: Service[] = [
  {
    Icon: Target,
    title: 'Landing Pages',
    description:
      'Diseñamos páginas optimizadas para captar leads, aumentar conversiones y maximizar el rendimiento de tus campañas.',
    link: 'LandingPages'
  },
  {
    Icon: Globe,
    title: 'Desarrollo Web',
    description:
      'Creamos sitios web modernos, rápidos y profesionales que fortalecen tu presencia digital y generan confianza.',
    link: 'DesarrolloWeb'
  },
  {
    Icon: Code2,
    title: 'Aplicaciones Web',
    description:
      'Desarrollamos plataformas y sistemas personalizados que optimizan procesos, centralizan información y mejoran la productividad.',
    link: 'AplicacionesWeb'
  },
  {
    Icon: Workflow,
    title: 'Automatizaciones',
    description:
      'Automatizamos tareas repetitivas y conectamos tus herramientas para ahorrar tiempo, reducir margen de error y mejorar la eficiencia.',
    link: 'Automatizaciones'
  },
  {
    Icon: Bot,
    title: 'Chatbots Inteligentes',
    description:
      'Automatiza la atención al cliente, responde consultas al instante y captura oportunidades las 24 horas del día.',
    link: 'ChatbotsInteligentes'
  },
  {
    Icon: Brain,
    title: 'Agentes de IA',
    description:
      'Implementamos agentes inteligentes capaces de analizar información, ejecutar tareas y optimizar procesos de forma autónoma.',
    link: 'AgentesDeIA'
  },
];

export default function ServicesSection() {

  const navigate = useNavigate()

  return (
    <section id="servicios" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 animate-on-scroll">
            Nuestros Servicios
          </p>
          <h2 className="section-title mb-6 animate-on-scroll">
            Tecnología que impulsa el{' '}
            <span className="text-accent">crecimiento de tu negocio</span>
          </h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Desarrollamos soluciones digitales que optimizan procesos, fortalecen tu
            presencia online y ayudan a tu negocio a crecer de forma limpia y ordenada.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map(({ Icon, title, description, link }, index) => (
            <div
              key={index}
              className="relative group animate-on-scroll rounded-2xl border border-border/40 bg-background p-6 flex flex-col
                         hover:border-accent/40 transition-colors duration-200 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top accent line on hover */}
              <span
                className="absolute inset-x-0 top-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100
                           transition-transform duration-300 origin-left"
              />

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 shrink-0">
                <Icon className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-primary-dark mb-2">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm text-primary-dark/60 leading-relaxed mb-5">
                {description}
              </p>

              

              {/* CTA — siempre al fondo */}
              <div className="pt-5 mt-auto">
                <a
                  onClick={() =>  {
                    navigate(link)
                  }}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium
                             bg-accent/10 text-accent rounded-lg px-4 py-2.5
                             hover:bg-accent/20 transition-colors duration-150"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  Saber más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}