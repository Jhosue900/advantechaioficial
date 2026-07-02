import { Menu, X, ArrowRight, Cpu } from 'lucide-react';
import LOGONOBG from '../Images/LOGONOBG.png'
import { useNavigate } from 'react-router-dom';

function Logo() {

  const navigate = useNavigate()
  return (
    <a onClick={ () => {
      navigate("/")
    }} className="flex items-center gap-3 group">
      <div className="relative w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300">
        <img src={LOGONOBG}/>
        
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

          <div className="hidden lg:flex items-center gap-2">
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#soluciones" className="nav-link">Soluciones</a>
            <a href="#proceso" className="nav-link">Proceso</a>
            <a href="#nosotros" className="nav-link">Nosotros</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#contacto" className="btn-primary">
              Agenda una reunón
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-6 space-y-4">
              <a href="#servicios" className="block py-3 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Servicios</a>
              <a href="#soluciones" className="block py-3 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Soluciones</a>
              <a href="#proceso" className="block py-3 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Proceso</a>
              <a href="#nosotros" className="block py-3 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
              <a href="#contacto" className="btn-primary w-full mt-4" onClick={() => setIsMenuOpen(false)}>
                Agenda una Consulta
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}