import { Zap, TrendingUp, MessageSquare, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Solution = {
  icon: JSX.Element;
  titleKey: string;
  descriptionKey: string;
};

export default function SolutionsSection() {
  const { t } = useTranslation();

  // 👇 Array de soluciones con claves de traducción
  const solutions: Solution[] = [
    {
      icon: <Zap className="w-6 h-6" />,
      titleKey: 'solutions.list.enterprise_automation.title',
      descriptionKey: 'solutions.list.enterprise_automation.description',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      titleKey: 'solutions.list.business_intelligence.title',
      descriptionKey: 'solutions.list.business_intelligence.description',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      titleKey: 'solutions.list.ai_customer_service.title',
      descriptionKey: 'solutions.list.ai_customer_service.description',
    },
  ];

  return (
    <section id="soluciones" className="py-24 lg:py-32 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh-dark" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-sm font-semibold text-highlight uppercase tracking-wider mb-4 animate-on-scroll">
              {t('solutions.label')}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 animate-on-scroll">
              {t('solutions.title')}
            </h2>
            <p className="text-lg text-white/60 leading-relaxed animate-on-scroll">
              {t('solutions.subtitle')}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-highlight/30 animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-highlight/20 flex items-center justify-center text-highlight mb-5 transition-colors duration-300 group-hover:bg-highlight group-hover:text-primary-dark">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t(solution.titleKey)}
              </h3>
              <p className="text-white/60 mb-5 leading-relaxed">
                {t(solution.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <a href="#contacto" className="inline-flex items-center gap-2 text-highlight font-medium hover:text-white transition-colors duration-300">
            {t('solutions.cta')}
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}