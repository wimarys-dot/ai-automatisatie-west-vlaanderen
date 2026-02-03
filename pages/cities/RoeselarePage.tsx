import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WorkflowBenefits from '../../components/infographics/WorkflowBenefits';
import { FAQSchema, LocalBusinessSchema, BreadcrumbSchema } from '../../components/StructuredData';

const RoeselarePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { title: 'n8n Implementatie', desc: 'Workflow automation voor Roeselaarse KMO\'s en voedingsindustrie.', icon: '⚡' },
    { title: 'AI Agents', desc: 'Intelligente automatisering voor productie en logistiek.', icon: '🤖' },
    { title: 'MCP Integraties', desc: 'Veilige koppelingen met ERP en productiesystemen.', icon: '💠' },
    { title: 'Proces Digitalisering', desc: 'Van papier naar geautomatiseerde digitale workflows.', icon: '📱' },
  ];

  const sectors = [
    { name: 'Voedingsindustrie', desc: 'Verwerking, productie en distributie' },
    { name: 'Retail & Groothandel', desc: 'B2B en B2C verkoopkanalen' },
    { name: 'Maakindustrie', desc: 'Productie en assemblage' },
    { name: 'Logistiek', desc: 'Transport en warehousing' },
    { name: 'Landbouw & Agri-tech', desc: 'Moderne landbouwbedrijven' },
    { name: 'Media & Communicatie', desc: 'Uitgeverijen en marketing' },
  ];

  const timeSavings = [
    { task: 'Productie orders verwerken', before: '60 min/dag', after: '5 min', savings: '92%' },
    { task: 'Quality control documentatie', before: '45 min/dag', after: '10 min', savings: '78%' },
    { task: 'Leverancier communicatie', before: '30 min/dag', after: '5 min', savings: '83%' },
    { task: 'Traceerbaarheid documentatie', before: '40 min/dag', after: '0 min', savings: '100%' },
    { task: 'Rapportages naar management', before: '120 min/week', after: '0 min', savings: '100%' },
  ];

  const useCases = [
    {
      title: 'Voedingsproducent',
      desc: 'Van order tot levering geautomatiseerd',
      steps: ['Klantorder binnenkomt', 'Productie planning automatisch', 'Quality check documentatie', 'Traceerbaarheid data vastgelegd', 'Leveringsbevestiging naar klant']
    },
    {
      title: 'Groothandel',
      desc: 'Voorraad en orders in sync',
      steps: ['Bestelling via alle kanalen', 'Voorraad real-time gecontroleerd', 'Automatische inkoop bij tekort', 'Verzending geregeld', 'Factuur automatisch verstuurd']
    },
    {
      title: 'Landbouwbedrijf',
      desc: 'Administratie en planning digitaal',
      steps: ['Seizoensplanning automatisch', 'Leverancier orders geplaatst', 'Weerdata in planning', 'Documentatie voor subsidies', 'Afnemer communicatie']
    },
  ];

  const roeselareStats = [
    { value: '65.000+', label: 'Inwoners' },
    { value: 'Thuisbasis', label: 'van ai-automatisatie.be' },
    { value: '500+', label: 'Voedingsbedrijven in regio' },
    { value: 'Centraal', label: 'in West-Vlaanderen' },
  ];

  const faqs = [
    {
      q: 'Waarom noemen jullie Roeselare jullie thuisbasis?',
      a: 'Wij zijn gevestigd in Roeselare. Dit betekent korte lijnen, snelle service en een diepe kennis van de lokale ondernemerswereld. Als er een probleem is, staan wij snel bij u op de stoep.'
    },
    {
      q: 'Werken jullie veel met voedingsbedrijven?',
      a: 'Ja, gezien de sterke aanwezigheid van voedingsindustrie in Roeselare hebben wij veel ervaring in deze sector. Van traceerbaarheid en quality control tot productie planning en leverancier management.'
    },
    {
      q: 'Kunnen jullie helpen met HACCP en compliance documentatie?',
      a: 'Absoluut. We automatiseren de documentatie voor HACCP, IFS, BRC en andere certificeringen. Checklists worden digitaal ingevuld, data wordt automatisch opgeslagen en rapportages zijn altijd audit-ready.'
    },
    {
      q: 'Integreren jullie met branche-specifieke software?',
      a: 'Ja, we integreren met ERP systemen zoals CSB, Unit4, Microsoft Dynamics en branche-specifieke oplossingen voor voeding, landbouw en productie. n8n kan via API met vrijwel elk systeem communiceren.'
    },
    {
      q: 'Wat kost automatisering voor een productiebedrijf?',
      a: 'Voor een typisch productiebedrijf begint een basis implementatie vanaf €3.000-€5.000 eenmalig, afhankelijk van complexiteit. Dit omvat analyse, setup, integraties en training. ROI is meestal binnen 2-4 maanden.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Automatisering Roeselare | n8n Expert Voedingsindustrie | Onze Thuisbasis</title>
        <meta name="description" content="AI automatisering en n8n expertise in Roeselare - onze thuisbasis. Specialisatie in voedingsindustrie, productie en KMO's. Lokale service, korte lijnen." />
        <link rel="canonical" href="https://ai-automatisatie.be/roeselare" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "Roeselare", url: "https://ai-automatisatie.be/roeselare" }
      ]} />

      <LocalBusinessSchema
        city="Roeselare"
        description="AI automatisering en n8n expertise in Roeselare - onze thuisbasis. Voedingsindustrie, productie en KMO's."
        url="https://ai-automatisatie.be/roeselare"
      />

      <FAQSchema faqs={[
        { question: "Waarom zijn jullie gevestigd in Roeselare?", answer: "Roeselare is onze thuisbasis. We kennen de lokale markt, de voedingsindustrie en de no-nonsense mentaliteit van West-Vlaamse ondernemers." },
        { question: "Werken jullie met voedingsbedrijven?", answer: "Ja, we hebben ruime ervaring in de voedingsindustrie: productie tracking, kwaliteitscontrole, traceerbaarheid en leverancier management." },
        { question: "Hoe snel kunnen jullie ter plaatse zijn?", answer: "Als Roeselaarse onderneming kunnen we dezelfde dag ter plaatse zijn voor urgente ondersteuning. Korte lijnen, snelle service." }
      ]} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Onze Thuisbasis</div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              AI Automatisering <span className="text-[#ff6d5a]">Roeselare</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              n8n en AI expertise in het hart van West-Vlaanderen. Roeselare is onze thuisbasis - korte lijnen, snelle service, lokale kennis.
            </p>
          </header>

          {/* Intro Section - Special for Roeselare */}
          <section className="mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-[#7c3aed]/10 border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Onze thuisbasis</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Roeselare is waar wij gevestigd zijn. Dit betekent <strong className="text-white">korte lijnen</strong>, snelle service en een diepe kennis van de lokale ondernemerswereld.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Van de voedingsindustrie met bekende namen zoals Roularta en Agristo tot lokale KMO's - wij kennen het <strong className="text-white">Roeselaarse DNA</strong>. De mentaliteit van hard werken en no-nonsense aanpak past perfect bij wat wij doen.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Als Roeselaarse ondernemer geniet u van <strong className="text-white">prioritaire service</strong>. Problemen? Wij zijn binnen het uur ter plaatse.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Roeselare - hart van West-Vlaanderen</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {roeselareStats.map((stat, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Tijdsbesparing voor Roeselaarse bedrijven</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Concrete voorbeelden van wat automatisering oplevert voor voedings- en productiebedrijven:
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Onze diensten in Roeselare</h2>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Automatisering voorbeelden Roeselare</h2>
            <p className="text-zinc-400 text-lg mb-12">
              Hoe Roeselaarse bedrijven n8n gebruiken voor hun bedrijfsprocessen:
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Sectoren in Roeselare</h2>
              <p className="text-zinc-400 text-lg mb-8">Wij werken met bedrijven in alle Roeselaarse sectoren:</p>
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

          {/* Food Industry Focus */}
          <section className="mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Voedingsindustrie Automatisering</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Roeselare is een hub voor de voedingsindustrie. Van aardappelverwerking tot vleesindustrie - automatisering is cruciaal voor competitiviteit en compliance:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Productie planning en scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Quality control documentatie (HACCP, IFS, BRC)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Traceerbaarheid en lot tracking</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Supplier management workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Temperatuur logging en alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Automatische rapportages voor audits</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ROI Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">ROI voor Roeselaarse bedrijven</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Een typisch productie- of voedingsbedrijf in Roeselare bespaart met automatisering:
              </p>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">25-35</div>
                  <p className="text-zinc-400 text-sm">Uur bespaard per week</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">€4.000+</div>
                  <p className="text-zinc-400 text-sm">Bespaard per maand</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">100%</div>
                  <p className="text-zinc-400 text-sm">Audit-ready documentatie</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">&lt;1 uur</div>
                  <p className="text-zinc-400 text-sm">Ter plaatse bij problemen</p>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Benefits Infographic */}
          <WorkflowBenefits />

          {/* FAQ Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen - Roeselare</h2>
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
              <Link to="/kortrijk" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Kortrijk
              </Link>
              <Link to="/brugge" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Brugge
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
              <Link to="/wat-is-n8n" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">Wat is n8n?</h3>
                <p className="text-zinc-400 text-sm">Leer meer over ons automation platform</p>
              </Link>
              <Link to="/ai-automatisering" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">AI Automatisering</h3>
                <p className="text-zinc-400 text-sm">Hoe AI uw workflows kan verbeteren</p>
              </Link>
              <Link to="/sector/accountants" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">Accountants</h3>
                <p className="text-zinc-400 text-sm">Automatisering voor boekhoudkantoren</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-white/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Roeselaarse ondernemer?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Als lokale expert staan wij graag voor u klaar. Koffie bij ons of bij u? Gratis kennismakingsgesprek.
            </p>
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Plan een afspraak
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default RoeselarePage;
