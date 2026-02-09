import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

const hostingPlans = [
  {
    name: 'Basis',
    price: '€ 49',
    period: '/maand',
    features: ['1 n8n instance', 'Dagelijkse backups', '99.5% uptime', 'E-mail support'],
  },
  {
    name: 'Professional',
    price: '€ 99',
    period: '/maand',
    features: ['1 n8n instance', 'Uurlijkse backups', '99.9% uptime', 'Prioriteit support', 'Auto-scaling'],
  },
  {
    name: 'Enterprise',
    price: '€ 199',
    period: '/maand',
    features: ['Meerdere instances', 'Continue backups', '99.95% uptime', '24/7 support', 'Dedicated resources', 'Custom domein'],
  },
];

const comparisonData = [
  {
    feature: 'Self-hosted optie',
    n8n: { value: true },
    zapier: { value: false },
    make: { value: false },
  },
  {
    feature: 'Onbeperkte workflows',
    n8n: { value: true, note: 'self-hosted' },
    zapier: { value: false, note: 'Vanaf $29.99/mo' },
    make: { value: false, note: 'Vanaf €10.59/mo' },
  },
  {
    feature: 'AI integraties',
    n8n: { value: true, note: 'native' },
    zapier: { value: true, note: 'beperkt' },
    make: { value: true, note: 'beperkt' },
  },
  {
    feature: 'Open source',
    n8n: { value: true },
    zapier: { value: false },
    make: { value: false },
  },
  {
    feature: 'Community',
    n8n: { value: true, note: 'Actief' },
    zapier: { value: true, note: 'Groot' },
    make: { value: true, note: 'Gemiddeld' },
  },
];

const PricingSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Wat kost n8n?',
      a: 'n8n zelf is gratis als open-source software wanneer u het zelf host. n8n Cloud begint vanaf €20/maand. Onze implementatiediensten starten bij €990 (Starter) voor het opzetten van workflows, integraties en configuratie. De totale kosten hangen af van het aantal workflows en de complexiteit van uw automatiseringen.',
    },
    {
      q: 'Is n8n gratis?',
      a: 'Ja, n8n is open-source en volledig gratis te gebruiken als u het zelf host. U betaalt alleen voor de serverkosten. Als u het gemak van een managed oplossing wilt, bieden wij hosting aan vanaf €49/maand. Onze implementatiediensten zijn apart geprijsd en helpen u om snel en professioneel van start te gaan.',
    },
    {
      q: 'Is n8n beter dan Zapier?',
      a: 'Voor de meeste bedrijven die serieus automatiseren biedt n8n meer waarde. Het is goedkoper op schaal (geen kosten per uitvoering), biedt meer flexibiliteit met custom code en AI-integraties, en geeft u volledige controle over uw data via self-hosting. Zapier is eenvoudiger voor enkele simpele automatiseringen, maar wordt snel duur.',
    },
    {
      q: 'Zijn er verborgen kosten?',
      a: 'Nee. Onze prijzen zijn volledig transparant. Het eenmalige implementatiebedrag dekt analyse, bouw, testing en oplevering. Managed hosting is een vast maandbedrag. Eventuele extra workflows of wijzigingen worden altijd vooraf besproken en geoffreerd.',
    },
    {
      q: 'Kan ik upgraden?',
      a: 'Absoluut. U kunt op elk moment upgraden van Starter naar Professional of Enterprise. Wij bouwen alle workflows modulair, zodat bestaande automatiseringen naadloos meegroeien. Het verschil in pakketprijs wordt verrekend bij een upgrade.',
    },
    {
      q: 'Wat als ik meer workflows nodig heb?',
      a: 'Binnen uw pakket kunt u tot het maximum aantal workflows bouwen. Heeft u er meer nodig? Dan kunt u upgraden naar een hoger pakket of extra workflows los bijbestellen. Bij Enterprise zijn workflows onbeperkt en betaalt u een vast maandtarief.',
    },
  ];

  return (
    <section id="prijzen" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hoofdtitel */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            n8n Prijzen: Transparant & <span className="text-brand">Eerlijk</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Geen verborgen kosten, geen verrassingen. Kies het implementatiepakket dat bij uw bedrijf past.
            Alle pakketten bevatten professionele setup, testing en documentatie. Onze n8n prijzen zijn
            helder en voorspelbaar, zodat u precies weet waar u aan toe bent.
          </p>
        </div>

        {/* Implementatie pakketten */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
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

        {/* Wat zit er in de prijs? */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
            Wat zit er in de <span className="text-brand">prijs</span>?
          </h2>
          <div className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-10">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Elk implementatiepakket bevat een complete dienstverlening van begin tot eind. Dit omvat een
              grondige analyse van uw huidige bedrijfsprocessen, het ontwerp van optimale workflow architectuur,
              de daadwerkelijke bouw en configuratie in n8n, uitgebreide testing met uw echte data, en een
              soepele go-live begeleiding. Na oplevering ontvangt u volledige documentatie en ondersteuning.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Intake en procesanalyse',
                'Workflow design en architectuur',
                'Bouw en configuratie',
                'Integratie met uw tools',
                'Testing en quality assurance',
                'Go-live begeleiding',
                'Documentatie en overdracht',
                'Support na oplevering',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-text-secondary">
                  <svg className="w-4 h-4 text-brand flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
            n8n Kosten vs Zapier vs <span className="text-brand">Make</span>
          </h2>
          <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-10">
            Benieuwd hoe n8n zich verhoudt tot Zapier en Make qua kosten en functionaliteit? Hieronder
            vindt u een eerlijke vergelijking van de belangrijkste features en prijsmodellen.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-surface-border">
                  <th className="text-left py-4 px-4 text-text-primary font-bold">Feature</th>
                  <th className="text-center py-4 px-4 text-brand font-bold">n8n</th>
                  <th className="text-center py-4 px-4 text-text-primary font-bold">Zapier</th>
                  <th className="text-center py-4 px-4 text-text-primary font-bold">Make</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-surface-border">
                    <td className="py-4 px-4 text-text-primary font-medium">{row.feature}</td>
                    {[row.n8n, row.zapier, row.make].map((cell, j) => (
                      <td key={j} className="py-4 px-4 text-center">
                        {cell.note ? (
                          <div>
                            {cell.value ? (
                              <span className="text-brand font-bold">&#10003;</span>
                            ) : (
                              <span className="text-text-muted">&#10007;</span>
                            )}
                            <span className="block text-xs text-text-muted mt-1">{cell.note}</span>
                          </div>
                        ) : cell.value ? (
                          <span className="text-brand font-bold">&#10003;</span>
                        ) : (
                          <span className="text-text-muted">&#10007;</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Managed Hosting */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 text-center">
            Managed Hosting <span className="text-brand">Prijzen</span>
          </h2>
          <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-10">
            Wilt u dat wij uw n8n omgeving volledig hosten en beheren? Onze managed hosting draait op
            Europese servers met dagelijkse backups, monitoring en automatische updates. U focust op uw
            automatiseringen, wij regelen de rest.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {hostingPlans.map((plan, i) => (
              <div key={i} className="bg-surface-card border border-surface-border rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-text-primary mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-text-primary">{plan.price}</span>
                  <span className="text-sm text-text-muted">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                      <svg className="w-4 h-4 text-brand flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/diensten/managed-hosting"
              className="inline-block bg-brand text-white px-8 py-3 rounded-full font-bold hover:bg-brand-hover transition-colors"
            >
              Meer over Managed Hosting
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10 text-center">
            Veelgestelde <span className="text-brand">Vragen</span> over Prijzen
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-surface-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-surface-card hover:bg-surface-card/80 transition-colors"
                >
                  <span className="font-bold text-text-primary pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-brand flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="p-5 pt-0 bg-surface-card">
                    <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <div className="text-center space-y-4">
          <p className="text-text-secondary">
            Ontdek hoe wij uw bedrijf kunnen helpen automatiseren.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/diensten"
              className="px-6 py-3 bg-surface-card border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
            >
              Onze Diensten
            </Link>
            <Link
              to="/cases"
              className="px-6 py-3 bg-surface-card border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
            >
              Bekijk Cases
            </Link>
            <Link
              to="/diensten/managed-hosting"
              className="px-6 py-3 bg-surface-card border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
            >
              Managed Hosting
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
