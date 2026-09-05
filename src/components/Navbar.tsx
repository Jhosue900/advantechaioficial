import { Menu, X, ArrowRight, Cpu, Globe } from 'lucide-react';  // 👈 Agregar Globe
import LOGONOBG from '../Images/LOGONOBG.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';  // 👈 Agregar

function Logo() {
  const navigate = useNavigate();
  return (
    <a onClick={() => { navigate("/") }} className="flex items-center gap-3 group cursor-pointer">
      <div className="relative w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300">
        <img src={LOGONOBG} alt="Advantech AI Logo" />
      </div>
      <span className="text-xl font-bold tracking-tight">
        <span className="text-primary-dark">Advantech</span>
        <span className="text-accent ml-1">AI</span>
      </span>
    </a>
  );
}

export { Logo };

export default function Navbar({
  isMenuOpen,
  setIsMenuOpen,
  scrolled,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
  scrolled: boolean;
}) {
  const { t, i18n } = useTranslation();  // 👈 Agregar

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Logo />

          {/* Enlaces de navegación - desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="#servicios" className="nav-link">{t('nav.services')}</a>
            <a href="#soluciones" className="nav-link">{t('nav.solutions')}</a>
            <a href="#proceso" className="nav-link">{t('nav.process')}</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* 👇 Selector de idioma */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-primary-dark/70"
              aria-label="Cambiar idioma"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{i18n.language}</span>
            </button>

            <a href="#contacto" className="btn-primary">
              {t('nav.contact')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-6 space-y-4">
              <a href="#servicios" className="block py-3 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.services')}
              </a>
              <a href="#soluciones" className="block py-3 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.solutions')}
              </a>
              <a href="#proceso" className="block py-3 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.process')}
              </a>
              <a href="#nosotros" className="block py-3 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.about')}
              </a>
              {/* Selector de idioma en móvil */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 py-3 text-lg font-medium"
              >
                <Globe className="w-5 h-5" />
                <span className="uppercase">{i18n.language === 'es' ? 'Español' : 'English'}</span>
              </button>
              <a href="#contacto" className="btn-primary w-full mt-4 text-center" onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}