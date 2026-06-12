import { Zap, TrendingUp, MessageSquare, Activity, ChevronRight } from 'lucide-react';

const solutions = [
  {
    title: 'Plataforma de Automatización Empresarial',
    description: 'Sistema integral que conecta todas tus herramientas y automatiza flujos de trabajo críticos.',
    stats: 'Reducción de 60% en tareas manuales',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Sistema de Inteligencia de Negocios',
    description: 'Dashboards en tiempo real y análisis predictivo para decisiones basadas en datos.',
    stats: 'Incremento de 3x en velocidad de decisiones',
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: 'Plataforma de Atención al Cliente con IA',
    description: 'Asistentes virtuales inteligentes que mejoran la experiencia del cliente 24/7.',
    stats: 'Satisfacción del cliente aumentó 45%',
    icon: <MessageSquare className="w-6 h-6" />,
  },
];

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold text-highlight mb-2">{number}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );
}

export default function SolutionsSection() {
  return (
    <section id="soluciones" className="py-24 lg:py-32 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh-dark" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-sm font-semibold text-highlight uppercase tracking-wider mb-4 animate-on-scroll">
              Soluciones
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 animate-on-scroll">
              Tecnología que genera{' '}
              <span className="text-highlight">resultado medibles</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed animate-on-scroll">
              Cada solución está diseñada para resolver problemas específicos de tu industria. No vendemos software genérico, construimos ventajas competitivas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 animate-on-scroll">
            <StatCard number="50+" label="Proyectos entregados" />
            <StatCard number="95%" label="Clientes satisfechos" />
            <StatCard number="3x" label="ROI promedio" />
            <StatCard number="24/7" label="Soporte continuo" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-highlight/30 animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-highlight/20 flex items-center justify-center text-highlight mb-5 transition-colors duration-300 group-hover:bg-highlight group-hover:text-primary-dark">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
              <p className="text-white/60 mb-5 leading-relaxed">{solution.description}</p>
              <div className="flex items-center gap-2 text-highlight font-medium">
                <Activity className="w-4 h-4" />
                <span className="text-sm">{solution.stats}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <a href="#contacto" className="inline-flex items-center gap-2 text-highlight font-medium hover:text-white transition-colors duration-300">
            Descubre cómo podemos ayudarte
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}