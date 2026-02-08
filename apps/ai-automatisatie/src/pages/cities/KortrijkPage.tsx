import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, WorkflowBenefits } from '@repo/ui';

const KortrijkPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { title: 'n8n Implementatie', desc: 'Workflow automation voor Kortrijkse KMO\'s en startups met n8n expertise.', icon: '⚡' },
    { title: 'AI Agents', desc: 'Intelligente automatisering voor industrie, textiel en retail.', icon: '🤖' },
    { title: 'MCP Integraties', desc: 'Veilige koppelingen met uw ERP, CRM en productiesystemen.', icon: '💠' },
    { title: 'Proces Optimalisatie', desc: 'Analyse en verbetering van uw bedrijfsprocessen.', icon: '📊' },
  ];

  const sectors = [
    { name: 'Textiel & Mode', desc: 'Van productie tot retail' },
    { name: 'Maakindustrie', desc: 'Productie en assemblage' },
    { name: 'Tech & Startups', desc: 'Budafabriek en Kortrijk tech scene' },
    { name: 'Retail & E-commerce', desc: 'Omnichannel verkoopkanalen' },
    { name: 'Gezondheidszorg', desc: 'Ziekenhuizen en praktijken' },
    { name: 'Design & Creatie', desc: 'Designregio Kortrijk' },
  ];

  const timeSavings = [
    { task: 'Productie orders verwerken', before: '60 min/dag', after: '5 min', savings: '92%' },
    { task: 'Klantorders naar ERP', before: '45 min/dag', after: '0 min', savings: '100%' },
    { task: 'Voorraad synchronisatie', before: '30 min/dag', after: '0 min', savings: '100%' },
    { task: 'Leverancier communicatie', before: '40 min/dag', after: '10 min', savings: '75%' },
    { task: 'Rapportages genereren', before: '90 min/week', after: '0 min', savings: '100%' },
  ];

  const useCases = [
    {
      title: 'Textiel Producent',
      desc: 'Van order tot productie geautomatiseerd',
      steps: ['Klantorder binnenkomt (email/portaal)', 'Order automatisch in ERP aangemaakt', 'Productie planning gestart', 'Materiaal beschikbaarheid check', 'Leveringsdatum bevestiging naar klant']
    },
    {
      title: 'Tech Startup',
      desc: 'Lead nurturing en sales automation',
      steps: ['Lead komt binnen via website', 'Automatische kwalificatie (company data)', 'Persoonlijke email sequentie start', 'Meeting reminder naar sales', 'CRM automatisch bijgewerkt']
    },
    {
      title: 'Retailer Multi-channel',
      desc: 'Webshop, winkel en marketplaces in sync',
      steps: ['Bestelling binnenkomt (bron detectie)', 'Voorraad in alle kanalen aangepast', 'Verzending automatisch geregeld', 'Klant tracking info ontvangen', 'Review request na levering']
    },
  ];

  const kortrijkStats = [
    { value: '100+', label: 'Tech bedrijven in de regio' },
    { value: '€2B+', label: 'Regionale economie' },
    { value: '#1', label: 'Design regio België' },
    { value: '75.000+', label: 'Inwoners Kortrijk' },
  ];

  const faqs = [
    {
      q: 'Werken jullie met startups in de Budafabriek?',
      a: 'Ja, we hebben ervaring met tech startups en groeibedrijven in de Kortrijkse startup scene. Automatisering helpt jonge bedrijven om snel te schalen zonder extra personeel. We bieden startup-vriendelijke tarieven.'
    },
    {
      q: 'Kunnen jullie integreren met bestaande ERP systemen?',
      a: 'Absoluut. We integreren met alle gangbare ERP systemen zoals SAP, Microsoft Dynamics, Exact, Odoo en branche-specifieke oplossingen. n8n kan via API met vrijwel elk systeem communiceren.'
    },
    {
      q: 'Hoe helpen jullie textielbedrijven automatiseren?',
      a: 'Voor textiel automatiseren we order processing, productie planning, kwaliteitscontrole documentatie, leverancier management en klantcommunicatie. We kennen de specifieke uitdagingen van B2B textielproductie.'
    },
    {
      q: 'Wat is de typische ROI voor een KMO in Kortrijk?',
      a: 'Een gemiddelde KMO bespaart 15-25 uur per week door automatisering. Bij een uurkost van €40-50 komt dit neer op €2.500-€5.000 maandelijkse besparing. De implementatie verdient zich meestal binnen 2-4 maanden terug.'
    },
    {
      q: 'Bieden jullie ook training aan ons personeel?',
      a: 'Ja, elke implementatie inclusief uitgebreide training voor uw team. We zorgen dat uw medewerkers zelfstandig kleine aanpassingen kunnen maken en de workflows begrijpen.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Automatisering Kortrijk | n8n Expert voor KMO's | Workflow Automatisering</title>
        <meta name="description" content="AI automatisering en n8n expertise voor bedrijven in Kortrijk. Van textiel tot tech startup. ERP integraties, proces optimalisatie en lokale ondersteuning." />
        <link rel="canonical" href="https://ai-automatisatie.be/kortrijk" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "Kortrijk", url: "https://ai-automatisatie.be/kortrijk" }
      ]} />

      <LocalBusinessSchema
        city="Kortrijk"
        description="AI automatisering en n8n expertise voor KMO's en startups in Kortrijk. Textiel, tech en industrie."
        url="https://ai-automatisatie.be/kortrijk"
      />

      <FAQSchema faqs={[
        { question: "Zijn jullie actief in Kortrijk?", answer: "Ja, Kortrijk is een van onze kernregio's. We bedienen textiel, tech startups en industriële bedrijven met workflow automatisering." },
        { question: "Kunnen jullie integreren met ERP systemen?", answer: "Ja, n8n integreert met alle gangbare ERP systemen: SAP, Exact, Microsoft Dynamics, en branche-specifieke oplossingen." },
        { question: "Hoe snel kunnen jullie starten met een project in Kortrijk?", answer: "Na een gratis intake kunnen we meestal binnen 1-2 weken starten. De gemiddelde doorlooptijd is 2-4 weken voor een complete implementatie." }
      ]} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">West-Vlaanderen</div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              AI Automatisering <span className="text-[#ff6d5a]">Kortrijk</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              n8n en AI expertise voor het ondernemende Kortrijk. Van textielindustrie tot tech startup, van KMO tot multinational.
            </p>
          </header>

          {/* Intro Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Innovatie in de Gouden Driehoek</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Kortrijk staat bekend als innovatieve stad met een rijke <strong className="text-white">industriële geschiedenis</strong> en een bruisende startup scene. Van de textielindustrie die Kortrijk groot maakte tot cutting-edge tech bedrijven in de Budafabriek.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                De mentaliteit van "doen" zit in het DNA van Kortrijk. Van Barco tot Designregio - Kortrijkse bedrijven zijn gewend om voorop te lopen. <strong className="text-white">Workflow automatisering</strong> is de volgende stap in die evolutie.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Wij helpen Kortrijkse ondernemers om hun competitief voordeel te behouden met <strong className="text-white">slimme automatisering</strong> die aansluit bij hun bestaande systemen.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-[#7c3aed]/10 border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Kortrijk: Stad van makers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {kortrijkStats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl font-black text-[#ff6d5a] mb-2">{stat.value}</div>
                    <p className="text-zinc-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Time Savings Table */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Tijdsbesparing voor Kortrijkse bedrijven</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Concrete voorbeelden van wat automatisering oplevert voor productiebedrijven en KMO's:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-[#18181b] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-white font-bold">Proces</th>
                    <th className="text-center p-4 text-white font-bold">Manueel</th>
                    <th className="text-center p-4 text-white font-bold">Geautomatiseerd</th>
                    <th className="text-center p-4 text-white font-bold">Besparing</th>
                  </tr>
                </thead>
                <tbody>
                  {timeSavings.map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5">
                      <td className="p-4 text-zinc-300">{row.task}</td>
                      <td className="p-4 text-center text-zinc-400">{row.before}</td>
                      <td className="p-4 text-center text-[#ff6d5a] font-bold">{row.after}</td>
                      <td className="p-4 text-center text-green-400 font-bold">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Onze diensten in Kortrijk</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="bg-[#18181b] border border-white/5 hover:border-[#ff6d5a]/40 p-8 rounded-[2rem] transition-all">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Automatisering voorbeelden Kortrijk</h2>
            <p className="text-zinc-400 text-lg mb-12">
              Hoe Kortrijkse bedrijven n8n gebruiken voor hun bedrijfsprocessen:
            </p>
            <div className="grid lg:grid-cols-3 gap-8">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                  <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6">{useCase.desc}</p>
                  <div className="space-y-3">
                    {useCase.steps.map((step, stepIdx) => (
                      <div key={stepIdx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#ff6d5a]/20 text-[#ff6d5a] rounded-full flex items-center justify-center text-xs font-bold">
                          {stepIdx + 1}
                        </span>
                        <span className="text-zinc-400 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Local Sectors */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Sectoren in Kortrijk</h2>
              <p className="text-zinc-400 text-lg mb-8">Wij werken met bedrijven in alle Kortrijkse sectoren:</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sectors.map((sector, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-xl">
                    <h3 className="text-white font-bold mb-1">{sector.name}</h3>
                    <p className="text-zinc-400 text-sm">{sector.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Textiel Focus */}
          <section className="mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Textiel & Maakindustrie Automatisering</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Kortrijk heeft een lange traditie in textiel en productie. Automatisering helpt deze bedrijven om competitief te blijven:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Order intake automatisch naar productie planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Kwaliteitscontrole documentatie digitaliseren</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Leverancier management en inkooporders</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Voorraad synchronisatie met ERP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Automatische rapportages voor management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Klant updates over orderstatus</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ROI Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">ROI voor Kortrijkse KMO's</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Een typische KMO in Kortrijk bespaart met automatisering:
              </p>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">20-30</div>
                  <p className="text-zinc-400 text-sm">Uur bespaard per week</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">€3.000+</div>
                  <p className="text-zinc-400 text-sm">Bespaard per maand</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">50%</div>
                  <p className="text-zinc-400 text-sm">Minder fouten</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">3 mnd</div>
                  <p className="text-zinc-400 text-sm">Terugverdientijd</p>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Benefits Infographic */}
          <WorkflowBenefits />

          {/* FAQ Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen - Kortrijk</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#18181b] border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between"
                  >
                    <span className="text-white font-bold pr-4">{faq.q}</span>
                    <span className="text-[#ff6d5a] text-2xl flex-shrink-0">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6">
                      <p className="text-zinc-400">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Other Cities */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-2xl font-bold text-white mb-6">Ook actief in de buurt</h2>
            <div className="flex flex-wrap gap-4">
              <Link to="/brugge" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Brugge
              </Link>
              <Link to="/roeselare" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Roeselare
              </Link>
              <Link to="/oostende" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Oostende
              </Link>
              <Link to="/ieper" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Ieper
              </Link>
            </div>
          </section>

          {/* Related Pages */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-2xl font-bold text-white mb-6">Meer over onze diensten</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/sector/retail" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">Retail Automatisering</h3>
                <p className="text-zinc-400 text-sm">Omnichannel sync en e-commerce workflows</p>
              </Link>
              <Link to="/workflow-automatisering" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">Workflow Automatisering</h3>
                <p className="text-zinc-400 text-sm">Alles over bedrijfsproces automatisering</p>
              </Link>
              <Link to="/n8n-expert" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">n8n Expert</h3>
                <p className="text-zinc-400 text-sm">Ontdek onze n8n expertise</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-white/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Kortrijkse ondernemer?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Laat ons samen kijken hoe automatisering uw bedrijf kan versterken. Gratis analyse, concrete voorstellen.
            </p>
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Afspraak maken
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default KortrijkPage;
