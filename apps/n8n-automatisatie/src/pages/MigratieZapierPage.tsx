import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MigratieZapierPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Migratie van Zapier naar n8n | Bespaar tot 80% | n8n-automatisatie.be</title>
        <meta
          name="description"
          content="Migreer van Zapier of Make naar n8n. Lagere kosten, meer controle, geen limieten. Wij begeleiden uw volledige migratie van audit tot go-live."
        />
      </Helmet>
      <div className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 text-center">
            Migratie van <span className="text-brand">Zapier naar n8n</span>
          </h1>
          <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-16">
            Stap over van dure SaaS-automatisering naar open source n8n.
            Meer controle, lagere kosten en geen limieten op workflows of uitvoeringen.
          </p>

          <div className="space-y-8 mb-16">
            <h2 className="text-2xl font-bold text-text-primary">
              Waarom migreren van Zapier naar n8n?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Tot 80% lagere kosten', desc: 'Geen kosten per taak of workflow. Self-hosted n8n elimineert maandelijkse SaaS-kosten.' },
                { title: 'Geen limieten', desc: 'Onbeperkte workflows, uitvoeringen en stappen. Geen throttling of premium-only features.' },
                { title: 'Volledige controle', desc: 'Self-hosted op uw servers of door ons beheerd. Uw data blijft van u, altijd.' },
                { title: 'Krachtigere workflows', desc: 'Complexe logica, loops, sub-workflows en custom code. Alles wat Zapier niet kan.' },
              ].map((item, i) => (
                <div key={i} className="bg-surface-card border border-surface-border rounded-xl p-6">
                  <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 mb-16">
            <h2 className="text-2xl font-bold text-text-primary">Ons migratieproces</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Audit', desc: 'Wij analyseren al uw bestaande Zapier workflows, triggers en koppelingen.' },
                { step: '2', title: 'Migratieplan', desc: 'Een gedetailleerd plan met tijdlijn, prioriteiten en risico-analyse.' },
                { step: '3', title: 'Herbouw in n8n', desc: '1-op-1 herplaatsing van elke workflow met verbeteringen waar mogelijk.' },
                { step: '4', title: 'Parallelle testing', desc: 'Beide systemen draaien gelijktijdig totdat alles gevalideerd is.' },
                { step: '5', title: 'Go-live & support', desc: 'Definitieve overstap met monitoring en 30 dagen nazorg.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-surface-card border border-surface-border rounded-xl p-5">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/diensten"
              className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand/20 hover:scale-105 inline-block"
            >
              Bekijk onze diensten
            </Link>
            <Link
              to="/prijzen"
              className="bg-text-primary/5 hover:bg-text-primary/10 border border-surface-border text-text-primary px-8 py-4 rounded-full font-bold text-lg transition-all inline-block"
            >
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MigratieZapierPage;
