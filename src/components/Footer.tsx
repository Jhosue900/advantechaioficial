import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-dark py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            
            <p className="text-white/60 mt-4 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-3">
              <li><a href="#servicios" className="text-white/60 hover:text-white transition-colors">{t('footer.services')}</a></li>
              <li><a href="#soluciones" className="text-white/60 hover:text-white transition-colors">{t('nav.solutions')}</a></li>
              <li><a href="#proceso" className="text-white/60 hover:text-white transition-colors">{t('nav.process')}</a></li>
              <li><a href="#nosotros" className="text-white/60 hover:text-white transition-colors">{t('nav.about')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4" />
                <a href="mailto:advantechai.2025@gmail.com" className="hover:text-white transition-colors">advantechai.2025@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4" />
                <span>+57 317 0852895</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4" />
                <span>Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            {new Date().getFullYear()} Advantech AI. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}