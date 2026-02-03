import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WorkflowBenefits from '../../components/infographics/WorkflowBenefits';
import { FAQSchema, LocalBusinessSchema, BreadcrumbSchema } from '../../components/StructuredData';

const IeperPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { title: 'n8n Implementatie', desc: 'Workflow automation voor Ieperse bedrijven in toerisme en landbouw.', icon: '⚡' },
    { title: 'AI Agents', desc: 'Intelligente automatisering voor herdenkingstoerisme en industrie.', icon: '🤖' },
    { title: 'MCP Integraties', desc: 'Veilige koppelingen met reserveringssystemen en bedrijfssoftware.', icon: '💠' },
    { title: 'Meertalige Workflows', desc: 'Automatische communicatie in NL, EN, FR en DE voor internationale bezoekers.', icon: '🌍' },
  ];

  const sectors = [
    { name: 'Herdenkingstoerisme', desc: 'WOI musea, gidsen en tours' },
    { name: 'Landbouw', desc: 'Moderne agribusiness en coöperaties' },
    { name: 'Maakindustrie', desc: 'Productie en assemblage' },
    { name: 'Retail & Horeca', desc: 'Winkels en restaurants in de stad' },
    { name: 'Logistiek', desc: 'Transport en distributie' },
    { name: 'Voeding', desc: 'Agri-food en verwerking' },
  ];

  const timeSavings = [
    { task: 'Tour bookings verwerken (3 talen)', before: '45 min/dag', after: '0 min', savings: '100%' },
    { task: 'Groepsreservaties bevestigen', before: '30 min/dag', after: '0 min', savings: '100%' },
    { task: 'Subsidie documentatie (landbouw)', before: '180 min/week', after: '15 min', savings: '92%' },
    { task: 'Leverancier orders plaatsen', before: '40 min/dag', after: '5 min', savings: '88%' },
    { task: 'Review requests versturen', before: '20 min/dag', after: '0 min', savings: '100%' },
  ];

  const useCases = [
    {
      title: 'Herdenkingstoerisme',
      desc: 'Tours en museum bezoeken automatisch',
      steps: ['Booking ontvangen (website/partner)', 'Bevestiging in taal van bezoeker', 'Last Post ceremonie info verstuurd', 'Herinnering dag vooraf', 'Review request na bezoek']
    },
    {
      title: 'Landbouwbedrijf',
      desc: 'Administratie en planning geautomatiseerd',
      steps: ['Seizoensplanning automatisch opgesteld', 'Leverancier orders op basis van voorraad', 'Weerdata in operationele planning', 'Subsidie documentatie gegenereerd', 'Afnemer communicatie automatisch']
    },
    {
      title: 'Hotel in de Westhoek',
      desc: 'Van boeking tot checkout gestroomlijnd',
      steps: ['Reservering binnenkomt', 'Bevestiging + lokale tips verstuurd', 'Check-in instructies 24u vooraf', 'During stay: restaurant suggesties', 'Review request na checkout']
    },
  ];

  const ieperStats = [
    { value: '35.000+', label: 'Inwoners' },
    { value: '500.000+', label: 'Toeristen per jaar' },
    { value: 'UNESCO', label: 'Vredesboodschap' },
    { value: 'Last Post', label: 'Dagelijks sinds 1928' },
  ];

  const faqs = [
    {
      q: 'Werken jullie met herdenkingstoerisme organisaties?',
      a: 'Ja, we hebben ervaring met musea, gidsen en touroperators in de Westhoek. We automatiseren boekingen, meertalige communicatie, groepsmanagement en review collection. De internationale aard van het publiek maakt meertalige automatisering essentieel.'
    },
    {
      q: 'Kunnen jullie helpen met landbouw administratie?',
      a: 'Absoluut. We automatiseren subsidie-aanvragen, gewasregistratie, leverancier management en afnemer communicatie. Integratie met weerdata en landbouwsoftware is mogelijk.'
    },
    {
      q: 'Hoe werkt de meertalige automatisering?',
      a: 'Onze workflows detecteren automatisch de taal van de bezoeker (EN/FR/DE/NL) en versturen alle communicatie in die taal. Voor Ieper met zijn internationale bezoekers is dit cruciaal voor een goede ervaring.'
    },
    {
      q: 'Zijn jullie actief in heel de Westhoek?',
      a: 'Ja, naast Ieper bedienen we ook Poperinge, Diksmuide en omliggende gemeenten. De hele Westhoek valt binnen ons werkgebied, met dezelfde lokale service en korte responstijden.'
    },
    {
      q: 'Wat kost automatisering voor een toeristische organisatie?',
      a: 'Voor een typische toeristische organisatie in Ieper begint een basis automatisering (boekingen, communicatie, reviews) vanaf €2.500 eenmalig. De ROI door tijdsbesparing en meer reviews is meestal binnen 4-6 maanden gerealiseerd.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Automatisering Ieper | n8n Expert Westhoek | Toerisme & Landbouw</title>
        <meta name="description" content="AI automatisering en n8n expertise voor bedrijven in Ieper en de Westhoek. Herdenkingstoerisme, landbouw en industrie. Meertalige workflows en lokale service." />
        <link rel="canonical" href="https://ai-automatisatie.be/ieper" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "Ieper", url: "https://ai-automatisatie.be/ieper" }
      ]} />

      <LocalBusinessSchema
        city="Ieper"
        description="AI automatisering en n8n expertise voor bedrijven in Ieper en de Westhoek. Toerisme, landbouw en industrie."
        url="https://ai-automatisatie.be/ieper"
      />

      <FAQSchema faqs={[
        { question: "Werken jullie met herdenkingstoerisme organisaties?", answer: "Ja, we hebben ervaring met musea, gidsen en touroperators in de Westhoek. We automatiseren boekingen, meertalige communicatie en review collection." },
        { question: "Kunnen jullie helpen met landbouw administratie?", answer: "Absoluut. We automatiseren subsidie-aanvragen, gewasregistratie, leverancier management en afnemer communicatie voor landbouwbedrijven." },
        { question: "Hoe werkt de meertalige automatisering?", answer: "Onze workflows detecteren automatisch de taal van de bezoeker (EN/FR/DE/NL) en versturen alle communicatie in die taal." }
      ]} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Westhoek</div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              AI Automatisering <span className="text-[#ff6d5a]">Ieper</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              n8n en AI expertise voor de Westhoek. Van Menin Gate tot landbouwbedrijf - wij automatiseren uw workflows.
            </p>
          </header>

          {/* Intro Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Automatisering in de Westhoek</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Ieper combineert een rijk <strong className="text-white">oorlogserfgoed</strong> met een dynamische lokale economie. Van internationale bezoekers bij In Flanders Fields tot de bloeiende landbouwsector in de omgeving - Ieper is een stad met unieke automatiseringsbehoeften.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Het <strong className="text-white">herdenkingstoerisme</strong> trekt jaarlijks honderdduizenden bezoekers uit heel de wereld. Hotels, musea en gidsen hebben te maken met meertalige klanten en seizoenspieken.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Wij brengen <strong className="text-white">moderne automatisering</strong> naar de Westhoek, met dezelfde lokale service en korte lijnen als in de rest van West-Vlaanderen.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Ieper - Stad van vrede en herdenking</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {ieperStats.map((stat, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Tijdsbesparing voor Ieperse bedrijven</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Concrete voorbeelden van wat automatisering oplevert voor toerisme en landbouw:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-[#18181b] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-white font-bold">Taak</th>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Onze diensten in Ieper</h2>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Automatisering voorbeelden Ieper</h2>
            <p className="text-zinc-400 text-lg mb-12">
              Hoe Ieperse bedrijven n8n gebruiken voor hun dagelijkse werkzaamheden:
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Sectoren in Ieper</h2>
              <p className="text-zinc-400 text-lg mb-8">Wij werken met bedrijven in alle Ieperse sectoren:</p>
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

          {/* Tourism Focus */}
          <section className="mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Herdenkingstoerisme Automatisering</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Ieper trekt jaarlijks honderdduizenden bezoekers voor WOI herdenking. Hotels, musea en gidsen kunnen automatiseren:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Meertalige reserveringsbevestigingen (EN/FR/DE/NL)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Tour booking en groepsmanagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Last Post ceremonie informatie automatisch versturen</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Review requests in de taal van de bezoeker</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Lokale tips en restaurantsuggesties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Seizoensgebonden pricing updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Agriculture Focus */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Landbouw Automatisering</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                De Westhoek is landbouwgebied. Moderne boerderijen en coöperaties profiteren van geautomatiseerde workflows:
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span>Geautomatiseerde administratie en subsidie-aanvragen (mestbankaangifte, verzamelaanvraag)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span>Weerdata gebaseerde planning en alerting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span>Leverancier en afnemer communicatie automatisch</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span>Gewasregistratie en perceelbeheer documentatie</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ROI Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">ROI voor Ieperse bedrijven</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Een typisch toeristisch of landbouwbedrijf in Ieper bespaart met automatisering:
              </p>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">15-25</div>
                  <p className="text-zinc-400 text-sm">Uur bespaard per week</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">4 talen</div>
                  <p className="text-zinc-400 text-sm">Automatisch ondersteund</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">90%</div>
                  <p className="text-zinc-400 text-sm">Minder administratie</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">4 mnd</div>
                  <p className="text-zinc-400 text-sm">Terugverdientijd</p>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Benefits Infographic */}
          <WorkflowBenefits />

          {/* FAQ Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen - Ieper</h2>
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
              <Link to="/roeselare" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Roeselare
              </Link>
              <Link to="/oostende" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Oostende
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
              <Link to="/n8n-expert" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">n8n Expert</h3>
                <p className="text-zinc-400 text-sm">Ontdek onze expertise</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-white/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ieperse ondernemer?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Ook in de Westhoek zijn wij actief. Ontdek de mogelijkheden voor uw bedrijf. Gratis kennismakingsgesprek.
            </p>
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Neem contact op
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default IeperPage;
