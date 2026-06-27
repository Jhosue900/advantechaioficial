import { Helmet } from 'react-helmet-async';
import { useState, useEffect, useRef } from 'react';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import ProcessSection from '../components/ProcessSection';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      <Helmet>
        <title>Advantech AI | Automatización con n8n y Desarrollo Full-Stack Premium</title>
        <meta name="description" content="Agencia internacional de ingeniería de software. Maximizamos la eficiencia empresarial mediante integraciones con n8n, agentes de IA, chatbots avanzados y plataformas web a medida." />
        <link rel="canonical" href="https://www.advantechai.org/" />
        <meta property="og:title" content="Advantech AI | Automatización n8n e Ingeniería Web Premium" />
        <meta property="og:description" content="Maximizamos la eficiencia de tu negocio con agentes de IA y desarrollo full-stack escalable." />
        <meta property="og:url" content="https://www.advantechai.org/" />
      </Helmet>

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />
      <HeroSection heroRef={heroRef} />
      <ServicesSection />
      <SolutionsSection />
      <ProcessSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default Home;