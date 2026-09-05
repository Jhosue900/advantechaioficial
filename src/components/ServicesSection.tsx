import { Code2, Target, Globe, Bot, Brain, Workflow, ArrowRight, LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type Service = {
  Icon: LucideIcon;
  titleKey: string;      // 👈 Cambiamos a clave de traducción
  descriptionKey: string; // 👈 Cambiamos a clave de traducción
  link: string;
};

export default function ServicesSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // 👇 Array de servicios con claves de traducción
  const services: Service[] = [
    {
      Icon: Target,
      titleKey: 'services.list.landing_pages.title',
      descriptionKey: 'services.list.landing_pages.description',
      link: 'LandingPages'
    },
    {
      Icon: Globe,
      titleKey: 'services.list.web_development.title',
      descriptionKey: 'services.list.web_development.description',
      link: 'DesarrolloWeb'
    },
    {
      Icon: Code2,
      titleKey: 'services.list.web_apps.title',
      descriptionKey: 'services.list.web_apps.description',
      link: 'AplicacionesWeb'
    },
    {
      Icon: Workflow,
      titleKey: 'services.list.automations.title',
      descriptionKey: 'services.list.automations.description',
      link: 'Automatizaciones'
    },
    {
      Icon: Bot,
      titleKey: 'services.list.chatbots.title',
      descriptionKey: 'services.list.chatbots.description',
      link: 'ChatbotsInteligentes'
    },
    {
      Icon: Brain,
      titleKey: 'services.list.ai_agents.title',
      descriptionKey: 'services.list.ai_agents.description',
      link: 'AgentesDeIA'
    },
  ];

  return (
    <section id="servicios" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 animate-on-scroll">
            {t('services.label')}
          </p>
          <h2 className="section-title mb-6 animate-on-scroll">
            {t('services.title')}
          </h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map(({ Icon, titleKey, descriptionKey, link }, index) => (
            <div
              key={index}
              className="relative group animate-on-scroll rounded-2xl border border-border/40 bg-background p-6 flex flex-col
                         hover:border-accent/40 transition-colors duration-200 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top accent line on hover */}
              <span
                className="absolute inset-x-0 top-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100
                           transition-transform duration-300 origin-left"
              />

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 shrink-0">
                <Icon className="w-5 h-5" />
              </div>

              {/* Title – usando t() con la clave */}
              <h3 className="text-base font-semibold text-primary-dark mb-2">
                {t(titleKey)}
              </h3>

              {/* Description – usando t() con la clave */}
              <p className="text-sm text-primary-dark/60 leading-relaxed mb-5">
                {t(descriptionKey)}
              </p>

              {/* CTA — siempre al fondo */}
              <div className="pt-5 mt-auto">
                <a
                  onClick={() => navigate(link)}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium
                             bg-accent/10 text-accent rounded-lg px-4 py-2.5
                             hover:bg-accent/20 transition-colors duration-150"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  {t('services.learn_more')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}