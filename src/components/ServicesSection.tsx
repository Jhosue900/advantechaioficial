import { Code2, Brain, Workflow, Database, Shield, Settings, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-7 h-7" />,
    title: 'Desarrollo de Software',
    description: 'Aplicaciones web y móviles personalizadas con arquitecturas escalables y código de calidad empresarial.',
    features: ['Arquitectura en la nube', 'APIs robustas', 'Integraciones'],
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'Inteligencia Artificial',
    description: 'Modelos de IA adaptados a tu negocio para automatizar decisiones y extraer valor de tus datos.',
    features: ['Machine Learning', 'Procesamiento de lenguaje', 'Visión computacional'],
  },
  {
    icon: <Workflow className="w-7 h-7" />,
    title: 'Automatización',
    description: 'Flujos de trabajo automatizados que reducen tareas manuales y eliminan cuellos de botella.',
    features: ['Workflows inteligentes', 'RPA', 'Integraciones API'],
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: 'Plataformas de Datos',
    description: 'Infraestructura de datos moderna para análisis en tiempo real y decisiones informadas.',
    features: ['Data lakes', 'ETL/ELT', 'Business Intelligence'],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Ciberseguridad',
    description: 'Protección de activos digitales con auditorías, monitoreo y respuesta a incidentes.',
    features: ['Auditorías de seguridad', 'Monitoreo 24/7', 'Cumplimiento normativo'],
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: 'Consultoría Tecnológica',
    description: 'Asesoramiento estratégico para transformar tu infraestructura tecnológica.',
    features: ['Roadmaps digitales', 'Arquitectura', 'Optimización de costos'],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-on-scroll">
            Nuestros Servicios
          </p>
          <h2 className="section-title mb-6 animate-on-scroll">
            Soluciones tecnológicas que{' '}
            <span className="text-accent">impulsan resultados</span>
          </h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Combinamos experiencia técnica con visión estratégica para crear soluciones que transforman operaciones empresariales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-elevated group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/30 flex items-center justify-center text-accent mb-5 transition-all duration-300 group-hover:bg-highlight/20 group-hover:text-primary-dark">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-3">{service.title}</h3>
              <p className="text-primary-dark/60 leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-primary-dark/70">
                    <CheckCircle className="w-4 h-4 text-highlight" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}