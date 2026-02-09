import React from 'react';
import { Link } from 'react-router-dom';

const checkIcon = (
  <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const expertPoints = [
  {
    title: 'Workflow Automation Expertise',
    desc: 'Complexe workflows ontwerpen en bouwen die uw bedrijfsprocessen volledig automatiseren met n8n als kern.',
  },
  {
    title: 'AI Agents Bouwen',
    desc: 'Intelligente AI agents ontwikkelen die autonoom taken uitvoeren, data analyseren en beslissingen nemen.',
  },
  {
    title: 'Custom Node Development',
    desc: 'Op maat gemaakte n8n nodes en integraties bouwen voor tools en systemen die niet standaard beschikbaar zijn.',
  },
  {
    title: 'Performance Optimalisatie',
    desc: 'Bestaande workflows analyseren en optimaliseren zodat ze sneller, betrouwbaarder en schaalbaarder draaien.',
  },
];

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 md:pt-40 pb-20 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-4 py-1.5 rounded-full mb-10">
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-xs font-bold text-brand tracking-wide">CERTIFIED n8n EXPERT</span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.05] text-text-primary max-w-5xl">
            Uw <span className="text-brand">n8n Expert</span> in België
          </h1>

          {/* Intro text (~120 words) */}
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-4 font-medium">
            Als gecertificeerde n8n expert help ik Belgische bedrijven bij het ontwerpen, bouwen en optimaliseren van
            krachtige workflow automation oplossingen. Of u nu complexe workflows wilt opzetten, AI agents wilt
            integreren of custom nodes nodig heeft voor uw specifieke tools &mdash; ik bied persoonlijke consulting
            en hands-on services op het hoogste niveau.
          </p>
          <p className="text-base text-text-muted max-w-3xl mx-auto mb-6">
            Met jarenlange ervaring in n8n automation, data-integraties en schaalbare architectuur help ik organisaties
            om hun processen te transformeren. Van strategisch advies en architectuur reviews tot het daadwerkelijk
            bouwen van workflows die op scale draaien &mdash; als uw n8n expert zorg ik ervoor dat elke
            automatisering robuust, veilig en toekomstbestendig is. Ontdek hoe een specialist het verschil maakt
            voor uw bedrijf.
          </p>

          {/* Trust metrics */}
          <div className="flex flex-wrap justify-center gap-4 mb-14 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              {checkIcon}
              50+ projecten afgeleverd
            </span>
            <span className="flex items-center gap-2">
              {checkIcon}
              5+ jaar ervaring
            </span>
            <span className="flex items-center gap-2">
              {checkIcon}
              100% klanttevredenheid
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-20">
            <Link
              to="/consultancy"
              className="bg-brand hover:bg-brand-hover text-text-inverted px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand/20 hover:scale-105"
            >
              Plan een consultatie
            </Link>
            <Link
              to="/kennisbank"
              className="bg-surface-card hover:bg-surface-border border border-surface-border text-text-primary px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              Bekijk kennisbank
            </Link>
          </div>
        </div>

        {/* Wat maakt een n8n expert onmisbaar? */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
            Wat maakt een <span className="text-brand">n8n expert</span> onmisbaar?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {expertPoints.map((point, i) => (
              <div
                key={i}
                className="bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-surface-border-hover transition-all"
              >
                <h3 className="text-lg font-bold text-text-primary mb-2">{point.title}</h3>
                <p className="text-text-secondary text-sm">{point.desc}</p>
              </div>
            ))}
          </div>

          {/* Internal + cross-site links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm">
            <Link to="/portfolio" className="text-brand font-semibold hover:underline">
              Bekijk onze projecten &rarr;
            </Link>
            <Link to="/resources" className="text-brand font-semibold hover:underline">
              Handige resources &rarr;
            </Link>
            <a
              href="https://n8n-automatisatie.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-brand transition-colors"
            >
              Zoekt u n8n implementatie? Bekijk n8n-automatisatie.be &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
