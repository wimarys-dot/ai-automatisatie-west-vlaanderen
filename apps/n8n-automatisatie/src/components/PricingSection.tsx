import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '€ 990',
    period: 'eenmalig',
    description: 'Perfect voor uw eerste automatisering',
    features: [
      'Tot 3 workflows',
      'Basis integraties',
      'E-mail support',
      'Documentatie',
      '30 dagen support na oplevering',
    ],
    cta: 'Start hier',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '€ 2.490',
    period: 'eenmalig',
    description: 'Voor bedrijven die serieus automatiseren',
    features: [
      'Tot 10 workflows',
      'Complexe integraties & API\'s',
      'Prioriteit support',
      'Managed hosting (3 mnd incl.)',
      'Training voor uw team',
      'Maandelijkse review calls',
    ],
    cta: 'Meest gekozen',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Op maat',
    period: '',
    description: 'Volledig ontzorgd automatiseringspartner',
    features: [
      'Onbeperkte workflows',
      'Dedicated account manager',
      'SLA met uptime garantie',
      'Custom integratie development',
      'On-site workshops',
      '24/7 monitoring & support',
    ],
    cta: 'Neem contact op',
    highlight: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="prijzen" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Transparante <span className="text-brand">Prijzen</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Geen verborgen kosten. Kies het pakket dat bij uw bedrijf past.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-brand text-white border-2 border-brand shadow-xl shadow-brand/20 scale-105'
                  : 'bg-surface-card border border-surface-border'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand px-4 py-1 rounded-full text-xs font-bold shadow-md">
                  POPULAIRST
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-text-primary'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-text-primary'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-text-muted'}`}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`text-sm mb-8 ${plan.highlight ? 'text-white/80' : 'text-text-secondary'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-white/90' : 'text-text-secondary'}`}>
                    <svg className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-brand'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-6 py-3 rounded-full font-bold transition-all ${
                  plan.highlight
                    ? 'bg-white text-brand hover:bg-white/90'
                    : 'bg-brand text-white hover:bg-brand-hover'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
