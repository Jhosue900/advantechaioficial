import { Lightbulb, Target, Code2, Rocket, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Analizamos tus procesos actuales e identificamos oportunidades de mejora y automatización.',
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    number: '02',
    title: 'Diseño',
    description: 'Creamos la arquitectura técnica y el roadmap de implementación alineado con tus objetivos.',
    icon: <Target className="w-6 h-6" />,
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Construimos tu solución con metodologías ágiles y entregas incrementales.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    number: '04',
    title: 'Implementación',
    description: 'Desplegamos con migración de datos, capacitación y soporte continuo.',
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-on-scroll">
            Nuestro Proceso
          </p>
          <h2 className="section-title mb-6 animate-on-scroll">
            Un proceso probado,{' '}
            <span className="text-accent">resultados previsibles</span>
          </h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Metodología estructurada que minimiza riesgos y maximiza el valor entregado en cada fase.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white rounded-2xl shadow-soft border border-gray-100/50 p-6 relative z-10 transition-all duration-300 hover:shadow-premium hover:border-highlight/20 group">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-4xl font-bold text-secondary/50">{step.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center text-accent transition-all duration-300 group-hover:bg-highlight/20">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-primary-dark/60 leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 -translate-y-1/2">
                    <div className="w-8 h-8 rounded-full bg-white shadow-soft border border-gray-100 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}