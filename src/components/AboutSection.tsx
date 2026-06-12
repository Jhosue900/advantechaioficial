import { Users, Building2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-gray-50/50 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Sobre Nosotros
            </p>
            <h2 className="section-title mb-6">
              Una década construyendo{' '}
              <span className="text-accent">tecnología que importa</span>
            </h2>
            <p className="text-lg text-primary-dark/60 leading-relaxed mb-6">
              Somos un equipo de ingenieros, arquitectos de software y consultores con pasión por resolver problemas complejos. Nuestra misión es democratizar el acceso a tecnología de clase mundial para empresas latinoamericanas.
            </p>
            <p className="text-lg text-primary-dark/60 leading-relaxed mb-8">
              Creemos en relaciones a largo plazo, no en proyectos. Eso significa que nos comprometemos con el éxito continuo de nuestros clientes, más allá de la primera entrega.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-highlight/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark">Equipo Senior</h4>
                  <p className="text-sm text-primary-dark/60">Ingenieros con experiencia en empresas Fortune 500</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-highlight/20 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark">Enfoque Empresarial</h4>
                  <p className="text-sm text-primary-dark/60">Diseñado para escala, seguridad y rendimiento</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-on-scroll">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 overflow-hidden" />
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden" />
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-highlight/30 to-highlight/10 overflow-hidden" />
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-dark/10 to-primary-dark/5 overflow-hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}