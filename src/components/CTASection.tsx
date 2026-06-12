import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Gracias por tu interés. Nos pondremos en contacto pronto.');
  };

  return (
    <form onSubmit={handleSubmit} className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
      <div className="space-y-5">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-white/80 mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:border-transparent transition-all"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:border-transparent transition-all"
            placeholder="correo@empresa.com"
            required
          />
        </div>

        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-white/80 mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="empresa"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:border-transparent transition-all"
            placeholder="Nombre de tu empresa"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-white/80 mb-2">
            ¿Cómo podemos ayudarte?
          </label>
          <textarea
            id="mensaje"
            rows={3}
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:border-transparent transition-all resize-none"
            placeholder="Cuéntanos sobre tu proyecto o desafío..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-lg bg-highlight text-primary-dark font-semibold transition-all duration-300 hover:bg-white hover:shadow-glow active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:ring-offset-2 focus:ring-offset-primary-dark"
        >
          Agenda tu Consulta Gratuita
        </button>
      </div>
    </form>
  );
}

export default function CTASection() {
  return (
    <section id="contacto" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="bg-primary-dark rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh-dark" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Listo para transformar{' '}
                <span className="text-highlight">tu operación</span>?
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Agenda una consulta gratuita con nuestro equipo. Analizaremos tu situación y propondremos un camino claro hacia la automatización e inteligencia artificial.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-highlight" />
                  <span>Consulta inicial sin compromiso</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-highlight" />
                  <span>Análisis de oportunidades de automatización</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-highlight" />
                  <span>Propuesta personalizada en 5 días</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}