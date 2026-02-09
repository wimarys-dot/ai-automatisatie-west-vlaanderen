import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 md:pt-40 pb-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-4 py-1.5 rounded-full mb-10">
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-xs font-bold text-brand tracking-wide">BELGISCHE n8n PARTNER</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.05] text-text-primary max-w-5xl">
            n8n Automatisering: Slimme{' '}
            <span className="text-brand">Workflows</span> voor uw Bedrijf
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-14 font-medium">
            Met n8n als open source workflow automation platform automatiseert u
            bedrijfsprocessen zonder vendor lock-in. Onze automatisering software
            verbindt uw apps, API-koppelingen en AI-tools in krachtige workflows.
            Van eenvoudige taken tot complexe automatiseringen met honderden
            nodes &mdash; n8n biedt schaalbare oplossingen die u via Docker
            self-hosted draait of door ons laat beheren. Ontdek hoe templates en
            integraties uw team productiever maken.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-24">
            <Link
              to="/diensten"
              className="bg-brand hover:bg-brand-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand/20 hover:scale-105"
            >
              Bekijk onze diensten
            </Link>
            <Link
              to="/prijzen"
              className="bg-text-primary/5 hover:bg-text-primary/10 border border-surface-border text-text-primary px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              Transparante prijzen
            </Link>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-24">
            {[
              {
                title: 'Implementatie & Setup',
                desc: 'Complete n8n installatie, configuratie en koppeling met uw bestaande tools. Van concept tot productie in weken.',
                icon: '🚀',
              },
              {
                title: 'Workflow Design',
                desc: 'Op maat gemaakte automatiseringen en workflows die aansluiten bij uw bedrijfsprocessen en groeistrategie.',
                icon: '⚡',
              },
              {
                title: 'Managed Hosting',
                desc: 'Wij beheren uw n8n omgeving op Europese servers met Docker. Updates, backups en monitoring inclusief.',
                icon: '☁️',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-surface-card border border-surface-border p-8 rounded-2xl text-left hover:border-surface-border-hover transition-all hover:shadow-lg"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Waarom n8n? section */}
          <div className="w-full max-w-4xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
              Waarom <span className="text-brand">n8n</span> als automatisering
              tool?
            </h2>
            <p className="text-text-secondary text-lg mb-8 text-center max-w-3xl mx-auto">
              n8n onderscheidt zich van tools zoals Zapier door volledige
              controle en transparantie. Als open source workflow automation
              platform combineert n8n kracht met flexibiliteit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4 bg-surface-card border border-surface-border rounded-xl p-6">
                <span className="text-brand text-2xl mt-0.5">✓</span>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">
                    100% Open Source
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Volledige toegang tot de broncode. Geen verborgen kosten,
                    geen vendor lock-in. U behoudt altijd eigenaarschap over uw
                    workflows en data.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-surface-card border border-surface-border rounded-xl p-6">
                <span className="text-brand text-2xl mt-0.5">✓</span>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">
                    400+ Integraties &amp; Nodes
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Verbind al uw apps via native nodes of custom API-koppelingen.
                    Van CRM tot boekhouding, van e-commerce tot marketing
                    &mdash; alles in één platform.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-surface-card border border-surface-border rounded-xl p-6">
                <span className="text-brand text-2xl mt-0.5">✓</span>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">
                    AI-Ready Workflows
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Integreer AI-modellen rechtstreeks in uw automatiseringen.
                    Van chatbots tot documentverwerking &mdash; n8n maakt AI
                    toegankelijk voor elk bedrijf.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-surface-card border border-surface-border rounded-xl p-6">
                <span className="text-brand text-2xl mt-0.5">✓</span>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">
                    Schaalbaar &amp; Self-Hosted
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Draai n8n via Docker op uw eigen servers of laat ons het
                    beheren. Schaalbare architectuur die meegroeit met uw
                    bedrijf, zonder limieten op workflows of uitvoeringen.
                  </p>
                </div>
              </div>
            </div>

            {/* Internal links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                to="/use-cases"
                className="text-brand hover:underline font-medium"
              >
                Bekijk use cases &rarr;
              </Link>
              <span className="text-text-muted">|</span>
              <Link
                to="/migratie-zapier"
                className="text-brand hover:underline font-medium"
              >
                Migratie van Zapier naar n8n &rarr;
              </Link>
              <span className="text-text-muted">|</span>
              <a
                href="https://n8n-expert.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline font-medium"
              >
                n8n-expert.be &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
