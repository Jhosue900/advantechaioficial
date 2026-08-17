import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const total = projects.length;
  const project = projects[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const goToDetail = () => {
    navigate(`/projects/${project.id}`);
  };

  if (total === 0) return null;

  // 👇 Obtener la URL de la imagen usando import.meta.env (para que Vite la procese)
  const imageUrl = project.image;

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Encabezado (sin cambios) */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 animate-on-scroll">
            Casos de éxito
          </p>
          <h2 className="section-title mb-4 sm:mb-6 animate-on-scroll">
            Proyectos que <span className="text-accent">hablan por sí solos</span>
          </h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Conoce cómo hemos transformado los desafíos técnicos de nuestros clientes en soluciones digitales de alto impacto.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-background shadow-premium">
            <div className="p-4 md:p-6">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
                {/* 👇 IMAGEN GRANDE (lado izquierdo) */}
                <div className="lg:w-1/2 relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/5 to-highlight/5">
                  <img
                    src={imageUrl}
                    alt={`Portada del proyecto ${project.title}`}
                    className="w-full h-64 md:h-80 lg:h-[400px] object-cover"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </div>

                {/* 👇 Información (lado derecho) */}
                <div className="lg:w-1/2 flex flex-col justify-between space-y-4 py-2">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                      <span className="text-xs font-medium text-primary-dark/40">
                        {project.tech.join(' · ')}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-dark">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-primary-dark/60 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-primary-dark/5 px-2.5 py-1 rounded-full text-primary-dark/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={goToDetail}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4 transition-all self-start"
                  >
                    Ver caso de éxito <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Flechas de navegación (sin cambios) */}
            {total > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
                  aria-label="Proyecto anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-primary-dark" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
                  aria-label="Siguiente proyecto"
                >
                  <ChevronRight className="w-5 h-5 text-primary-dark" />
                </button>
              </>
            )}
          </div>

          {/* Indicadores (sin cambios) */}
          {total > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'bg-accent w-6' : 'bg-accent/30'
                  }`}
                  aria-label={`Ver proyecto ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}