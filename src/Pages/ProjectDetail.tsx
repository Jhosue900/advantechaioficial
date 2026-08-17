import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle, ExternalLink, Code, Users, TrendingUp, Calendar, Layers } from 'lucide-react';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-primary-dark/60">Proyecto no encontrado</p>
      </div>
    );
  }

  // 👇 Construir la URL de la imagen
  const imageUrl = project.image;
  const ogImage = project.ogImage || imageUrl;

  // 👇 Datos estructurados (JSON-LD) para SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "author": {
      "@type": "Organization",
      "name": "Advantech AI"
    },
    "datePublished": project.year,
    "image": ogImage,
    "url": `https://www.advantechai.org/projects/${project.id}`
  };

  return (
    <>
      <Helmet>
        <title>{project.title} | Advantech AI - Caso de éxito</title>
        <meta name="description" content={project.description} />
        <link rel="canonical" href={`https://www.advantechai.org/projects/${project.id}`} />

        {/* Open Graph */}
        <meta property="og:title" content={`${project.title} | Advantech AI`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`https://www.advantechai.org/projects/${project.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Advantech AI" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | Advantech AI`} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />

      <main className="pt-24 pb-16 px-4 md:px-8 max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4 mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Volver
        </button>

        {/* 👇 IMAGEN GRANDE (cabecera) */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-premium">
          <img
            src={imageUrl}
            alt={`Portada del proyecto ${project.title} - Advantech AI`}
            className="w-full h-auto max-h-[600px] object-cover"
            loading="eager"
            width="1200"
            height="600"
          />
        </div>

        <div className="space-y-8">
          {/* Encabezado (con icono de año) */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                <Calendar className="w-3 h-3" /> {project.year}
              </span>
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 text-xs bg-primary-dark/5 px-2.5 py-1 rounded-full text-primary-dark/70"
                >
                  <Layers className="w-3 h-3" /> {t}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-dark">{project.title}</h1>
            <p className="text-lg text-primary-dark/60 mt-4">{project.subtitle}</p>
          </div>

          {/* Descripción y Desafío (sin cambios) */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-primary-dark flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-accent" /> Descripción
              </h2>
              <p className="text-primary-dark/70 leading-relaxed">{project.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary-dark flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-accent" /> Desafío Técnico
              </h2>
              <p className="text-primary-dark/70 leading-relaxed">{project.challenge}</p>
            </div>
          </div>

          {/* Solución (sin cambios) */}
          <div>
            <h2 className="text-xl font-semibold text-primary-dark flex items-center gap-2 mb-3">
              <Code className="w-5 h-5 text-accent" /> Solución Implementada
            </h2>
            <p className="text-primary-dark/70 leading-relaxed">{project.solution}</p>
          </div>

          {/* Resultados (sin cambios) */}
          <div>
            <h2 className="text-xl font-semibold text-primary-dark flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-accent" /> Resultados
            </h2>
            <p className="text-primary-dark/70 leading-relaxed">{project.results}</p>
          </div>

          {/* Stack Tecnológico (sin cambios) */}
          <div>
            <h2 className="text-xl font-semibold text-primary-dark mb-3">Stack Tecnológico</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="bg-primary-dark/5 px-3 py-1.5 rounded-full text-sm text-primary-dark/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Aspectos destacados (sin cambios) */}
          <div>
            <h2 className="text-xl font-semibold text-primary-dark mb-3">
              Aspectos técnicos destacados
            </h2>
            <ul className="list-none space-y-1.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-primary-dark/70">
                  <span className="text-accent">→</span> {h.replace('→ ', '')}
                </li>
              ))}
            </ul>
          </div>

          {/* Enlace al sitio web (sin cambios) */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Visitar sitio web <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}