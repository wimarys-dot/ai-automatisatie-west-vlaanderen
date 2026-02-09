import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '@repo/ui';

const faqs = [
  {
    question: 'Hoe lang duurt een Zapier naar n8n migratie?',
    answer: 'De duur hangt af van het aantal workflows en de complexiteit. Gemiddeld duurt een migratie van 5-15 Zapier workflows 1 tot 2 weken. Complexere setups met 50+ workflows kunnen 4 tot 6 weken duren. Tijdens de migratie blijven uw bestaande Zapier workflows gewoon draaien.',
  },
  {
    question: 'Verlies ik data bij de migratie?',
    answer: 'Nee, er gaat geen data verloren. Wij draaien n8n parallel aan uw bestaande Zapier setup. Pas wanneer alle workflows getest en gevalideerd zijn, schakelen we definitief over. Uw historische data in gekoppelde systemen (CRM, boekhouding, etc.) blijft onaangetast.',
  },
  {
    question: 'Kan ik ook migreren vanaf Make (Integromat)?',
    answer: 'Ja, ons migratieproces werkt voor alle populaire automatiseringsplatformen: Zapier, Make (Integromat), Power Automate en Tray.io. De aanpak is hetzelfde: audit, herbouw, parallel testen en go-live.',
  },
  {
    question: 'Hoeveel bespaar ik door van Zapier naar n8n over te stappen?',
    answer: 'De meeste bedrijven besparen 60-80% op maandelijkse kosten. Een typisch Zapier Team plan kost €399/maand voor 50.000 tasks. Met self-hosted n8n betaalt u alleen serverkosten (€20-50/maand) met onbeperkte uitvoeringen. Bij 100+ workflows kan de besparing oplopen tot duizenden euros per jaar.',
  },
];

const MigratieZapierPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Migratie van Zapier naar n8n | Bespaar tot 80% | n8n-automatisatie.be</title>
        <meta
          name="description"
          content="Migreer van Zapier of Make naar n8n. Lagere kosten, meer controle, geen limieten. Wij begeleiden uw volledige migratie van audit tot go-live."
        />
        <link rel="canonical" href="https://n8n-automatisatie.be/migratie-zapier" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://n8n-automatisatie.be/' },
        { name: 'Migratie Zapier', url: 'https://n8n-automatisatie.be/migratie-zapier' },
      ]} />
      <ServiceSchema
        name="Zapier naar n8n Migratie"
        description="Professionele migratie van Zapier, Make of Power Automate naar n8n. Inclusief audit, herbouw, testing en nazorg."
        url="https://n8n-automatisatie.be/migratie-zapier"
        provider="n8n-automatisatie.be"
        areaServed={['België', 'Nederland']}
      />
      <FAQSchema faqs={faqs} />
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

          {/* Vergelijking */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Zapier vs n8n: de feiten</h2>
            <div className="bg-surface-card border border-surface-border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-border">
                    <th className="text-left p-4 text-text-muted font-medium">Kenmerk</th>
                    <th className="text-left p-4 text-text-primary font-bold">Zapier</th>
                    <th className="text-left p-4 text-brand font-bold">n8n</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Kosten (50k tasks/mnd)', '€399/maand', '€20-50/maand (server)'],
                    ['Workflow limieten', 'Afhankelijk van plan', 'Onbeperkt'],
                    ['Self-hosting', 'Niet mogelijk', 'Ja, volledige controle'],
                    ['Custom code', 'Beperkt (Python/JS)', 'Volledig (JS/Python)'],
                    ['AI integraties', 'Basis', 'Native AI agents'],
                    ['Sub-workflows', 'Niet beschikbaar', 'Volledig ondersteund'],
                    ['Data locatie', 'VS servers', 'Eigen keuze (EU)'],
                  ].map(([label, zapier, n8n], idx) => (
                    <tr key={idx} className="border-b border-surface-border last:border-0">
                      <td className="p-4 text-text-primary font-medium">{label}</td>
                      <td className="p-4 text-text-secondary">{zapier}</td>
                      <td className="p-4 text-brand font-semibold">{n8n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Veelgestelde vragen over Zapier migratie</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-surface-card border border-surface-border rounded-xl overflow-hidden group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-bold text-text-primary pr-4">{faq.question}</span>
                    <span className="text-brand text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-text-secondary">{faq.answer}</p>
                  </div>
                </details>
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

          <div className="text-center mt-8">
            <a href="https://n8n-expert.be/consultancy" target="_blank" rel="noopener noreferrer" className="text-brand font-bold hover:underline">
              Persoonlijk advies van een n8n expert →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MigratieZapierPage;
