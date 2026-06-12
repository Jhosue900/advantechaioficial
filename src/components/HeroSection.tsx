import React from 'react';
import { ArrowRight, Star, Database, Brain, Workflow, Cog, Code2, Shield, Layers } from 'lucide-react';

function CentralNode() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-dark to-accent flex items-center justify-center shadow-glow animate-float-complex">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent to-white/10" />
        <Layers className="w-10 h-10 text-white relative z-10" />
        <div className="absolute -inset-4 rounded-3xl border border-highlight/20 animate-pulse-soft" />
      </div>
    </div>
  );
}

function FloatingNode({
  icon,
  label,
  className,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
  delay: string;
}) {
  return (
    <div className={`absolute z-10 ${className}`} style={{ animationDelay: delay }}>
      <div className="group relative">
        <div className="w-14 h-14 rounded-xl bg-white shadow-soft border border-gray-100/50 flex items-center justify-center text-accent transition-all duration-300 hover:shadow-premium hover:border-highlight/30 hover:text-primary-dark animate-float">
          {icon}
        </div>
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-primary-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {label}
        </span>
      </div>
    </div>
  );
}

function ConnectionLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B3CFE5" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#88EDDB" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#B3CFE5" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <line x1="200" y1="120" x2="200" y2="165" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-soft" />
      <line x1="280" y1="120" x2="235" y2="165" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
      <line x1="320" y1="270" x2="230" y2="220" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-soft" style={{ animationDelay: '1s' }} />
      <line x1="200" y1="320" x2="200" y2="235" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      <line x1="80" y1="270" x2="170" y2="220" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-soft" style={{ animationDelay: '2s' }} />
      <line x1="120" y1="120" x2="165" y2="165" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-soft" style={{ animationDelay: '2.5s' }} />
      <circle cx="200" cy="120" r="3" fill="#88EDDB" className="animate-pulse-soft" />
      <circle cx="320" cy="120" r="3" fill="#88EDDB" className="animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
      <circle cx="350" cy="270" r="3" fill="#88EDDB" className="animate-pulse-soft" style={{ animationDelay: '1s' }} />
      <circle cx="200" cy="350" r="3" fill="#88EDDB" className="animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      <circle cx="50" cy="270" r="3" fill="#88EDDB" className="animate-pulse-soft" style={{ animationDelay: '2s' }} />
      <circle cx="80" cy="120" r="3" fill="#88EDDB" className="animate-pulse-soft" style={{ animationDelay: '2.5s' }} />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-secondary/20 via-transparent to-highlight/10 blur-3xl" />
      <div className="relative w-full max-w-lg aspect-square">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-36 h-36 rounded-2xl bg-primary-dark/5 animate-pulse-soft" />
        </div>
        <CentralNode />
        <FloatingNode icon={<Database className="w-5 h-5" />} label="Base de Datos" className="top-0 left-1/2 -translate-x-1/2 -translate-y-4" delay="0s" />
        <FloatingNode icon={<Brain className="w-5 h-5" />} label="IA" className="top-1/4 right-0 translate-x-4" delay="0.5s" />
        <FloatingNode icon={<Workflow className="w-5 h-5" />} label="Workflows" className="bottom-1/4 right-0 translate-x-4" delay="1s" />
        <FloatingNode icon={<Cog className="w-5 h-5" />} label="Automatización" className="bottom-0 left-1/2 -translate-x-1/2 translate-y-4" delay="1.5s" />
        <FloatingNode icon={<Code2 className="w-5 h-5" />} label="APIs" className="bottom-1/4 left-0 -translate-x-4" delay="2s" />
        <FloatingNode icon={<Shield className="w-5 h-5" />} label="Seguridad" className="top-1/4 left-0 -translate-x-4" delay="2.5s" />
        <ConnectionLines />
      </div>
    </div>
  );
}

export default function HeroSection({ heroRef }: { heroRef: React.RefObject<HTMLDivElement> }) {
  return (
    <section ref={heroRef as React.RefObject<HTMLElement>} className="relative min-h-screen pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-sm font-medium text-accent animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
              Inteligencia Artificial Empresarial
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-balance animate-slide-up">
              Transformamos procesos complejos en{' '}
              <span className="relative">
                <span className="relative z-10 text-accent">sistemas inteligentes</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-highlight/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-dark/60 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slide-up stagger-1">
              Desarrollamos software, automatizaciones e inteligencia artificial que ayudan a las empresas a crecer más rápido, operar con mayor eficiencia y escalar sin límites.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up stagger-2">
              <a href="#contacto" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                Agenda una Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#soluciones" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                Ver Soluciones
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 animate-fade-in stagger-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-xs font-semibold text-white ring-2 ring-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-highlight">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-primary-dark/60 mt-1">+50 empresas confían en nosotros</p>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] animate-scale-in stagger-2">
            <HeroVisual />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}