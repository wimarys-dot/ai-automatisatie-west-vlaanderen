import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, WorkflowBenefits } from '@repo/ui';

const OostendePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { title: 'n8n Implementatie', desc: 'Workflow automation voor Oostendse bedrijven in horeca en maritiem.', icon: '⚡' },
    { title: 'AI Agents', desc: 'Intelligente automatisering voor toerisme en seizoensgebonden business.', icon: '🤖' },
    { title: 'MCP Integraties', desc: 'Veilige koppelingen met reserveringssystemen en boekhouding.', icon: '💠' },
    { title: 'Meertalige Workflows', desc: 'Automatische communicatie in NL, EN, FR en DE.', icon: '🌍' },
  ];

  const sectors = [
    { name: 'Maritieme Sector', desc: 'Haven, scheepvaart en offshore' },
    { name: 'Toerisme & Horeca', desc: 'Hotels, restaurants en attracties' },
    { name: 'Visserij & Voeding', desc: 'Visverwerkingen en groothandel' },
    { name: 'Offshore Energie', desc: 'Windenergie en maritieme diensten' },
    { name: 'Retail & Entertainment', desc: 'Winkels op de dijk en in de stad' },
    { name: 'Evenementen', desc: 'Festivals en congressen' },
  ];

  const timeSavings = [
    { task: 'Reserveringsbevestigingen (4 talen)', before: '60 min/dag', after: '0 min', savings: '100%' },
    { task: 'Review requests versturen', before: '30 min/dag', after: '0 min', savings: '100%' },
    { task: 'Seizoensprijzen updaten', before: '120 min/week', after: '5 min', savings: '96%' },
    { task: 'Beschikbaarheid synchroniseren', before: '45 min/dag', after: '0 min', savings: '100%' },
    { task: 'Leverancier orders (verse vis)', before: '30 min/dag', after: '10 min', savings: '67%' },
  ];

  const useCases = [
    {
      title: 'Hotel aan Zee',
      desc: 'Van boeking tot review volledig automatisch',
      steps: ['Booking ontvangen (Booking.com/direct)', 'Bevestiging in taal van gast', 'Check-in info 24u vooraf', 'Lokale tips automatisch verstuurd', 'Review request 2 dagen na checkout']
    },
    {
      title: 'Visrestaurant',
      desc: 'Reserveringen en voorraad gelinkt',
      steps: ['Reservering binnenkomt', 'Bevestiging met menu suggesties', 'Dagvangst automatisch in menu', 'Herinnering dag vooraf', 'Feedback vraag na bezoek']
    },
    {
      title: 'Offshore Dienstverlener',
      desc: 'Project en personeel management',
      steps: ['Project aanvraag ontvangen', 'Beschikbaarheid personeel check', 'Offerte automatisch gegenereerd', 'Planning naar betrokken medewerkers', 'Rapportage naar klant']
    },
  ];

  const oostendeStats = [
    { value: '72.000+', label: 'Inwoners' },
    { value: '4M+', label: 'Toeristen per jaar' },
    { value: '9 km', label: 'Strand en dijk' },
    { value: '#1', label: 'Belgische kuststad' },
  ];

  const faqs = [
    {
      q: 'Werken jullie met seizoensgebonden pricing automatisering?',
      a: 'Ja, dit is een specialiteit voor Oostendse horeca. We bouwen workflows die automatisch prijzen aanpassen op basis van seizoen, evenementen (Oostende Film Festival, etc.) en bezettingsgraad. Dit bespaart uren handmatig updaten.'
    },
    {
      q: 'Kunnen jullie meerdere boekingsplatformen synchroniseren?',
      a: 'Absoluut. We integreren Booking.com, Airbnb, Expedia, direct bookings en meer in één overzicht. Beschikbaarheid wordt real-time gesynchroniseerd om double bookings te voorkomen.'
    },
    {
      q: 'Hoe werkt meertalige automatisering?',
      a: 'Onze workflows detecteren automatisch de taal van de gast (op basis van boeking of voorkeur) en versturen alle communicatie in die taal. We ondersteunen Nederlands, Engels, Frans en Duits standaard.'
    },
    {
      q: 'Helpen jullie ook maritieme bedrijven?',
      a: 'Ja, we werken met offshore dienstverleners, havenbedrijven en maritieme logistiek. Automatisering van crew planning, project documentatie, compliance rapportages en klantcommunicatie.'
    },
    {
      q: 'Wat kost automatisering voor een klein hotel?',
      a: 'Voor een typisch Oostends hotel of B&B begint een basis automatisering (reserveringen, communicatie, reviews) vanaf €2.500 eenmalig. Dit verdient zich meestal binnen 3-4 maanden terug door tijdsbesparing en meer reviews.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Automatisering Oostende | n8n Expert Kust | Horeca & Maritiem</title>
        <meta name="description" content="AI automatisering en n8n expertise voor bedrijven in Oostende. Horeca, toerisme, maritiem en offshore. Meertalige workflows en seizoens-automatisering." />
        <link rel="canonical" href="https://ai-automatisatie.be/oostende" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "Oostende", url: "https://ai-automatisatie.be/oostende" }
      ]} />

      <LocalBusinessSchema
        city="Oostende"
        description="AI automatisering en n8n expertise voor bedrijven in Oostende. Horeca, toerisme, maritiem en offshore."
        url="https://ai-automatisatie.be/oostende"
      />

      <FAQSchema faqs={[
        { question: "Werken jullie met seizoensgebonden automatisering?", answer: "Ja, veel Oostendse bedrijven hebben seizoenspieken. Onze workflows schalen automatisch mee en kunnen seizoenstarieven en capaciteit aanpassen." },
        { question: "Bieden jullie meertalige ondersteuning?", answer: "Absoluut. Oostende als kuststad heeft internationale toeristen. Workflows ondersteunen NL, EN, FR en DE voor reserveringen en communicatie." },
        { question: "Kunnen jullie helpen met reserveringssystemen?", answer: "Ja, we integreren met alle gangbare reserveringssystemen en kunnen boekingen automatisch verwerken, bevestigen en opvolgen." }
      ]} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">West-Vlaanderen</div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              AI Automatisering <span className="text-[#ff6d5a]">Oostende</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              n8n en AI expertise voor de koningin der badsteden. Van haven tot dijk, van hotel tot visrestaurant.
            </p>
          </header>

          {/* Intro Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Automatisering aan zee</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Oostende is meer dan een toeristische bestemming. Met een <strong className="text-white">belangrijke haven</strong>, groeiende offshore sector, bloeiende horeca en miljoenen bezoekers per jaar is Oostende een stad waar efficiëntie het verschil maakt.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                De seizoensgebonden natuur van veel Oostendse bedrijven vraagt om <strong className="text-white">slimme automatisering</strong>. In het hoogseizoen moet alles vlot verlopen, en automatisering zorgt dat u kunt schalen zonder extra personeel.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Wij helpen Oostendse ondernemers om <strong className="text-white">efficiënter te werken</strong> met workflows die aansluiten bij de unieke uitdagingen van de kust.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-[#0ea5e9]/10 to-transparent border border-[#0ea5e9]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Oostende in cijfers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {oostendeStats.map((stat, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Tijdsbesparing voor Oostendse bedrijven</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Concrete voorbeelden van wat automatisering oplevert voor horeca en toerisme:
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Onze diensten in Oostende</h2>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Automatisering voorbeelden Oostende</h2>
            <p className="text-zinc-400 text-lg mb-12">
              Hoe Oostendse bedrijven n8n gebruiken voor hun dagelijkse werkzaamheden:
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Sectoren in Oostende</h2>
              <p className="text-zinc-400 text-lg mb-8">Wij werken met bedrijven in alle Oostendse sectoren:</p>
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
            <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Toerisme & Horeca Automatisering</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Hotels, restaurants en attracties in Oostende kunnen enorm profiteren van automatisering:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Automatische reserveringsbevestigingen en reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Review requests na bezoek (in taal van gast)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Seizoensgebonden pricing updates</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Meertalige klantcommunicatie (NL/EN/FR/DE)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Channel manager integratie (Booking, Airbnb, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span>Lokale tips en upselling automatisch</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Maritime Focus */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Maritiem & Offshore Automatisering</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                De haven van Oostende en offshore sector profiteren van geautomatiseerde workflows:
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span>Crew planning en certificaat management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span>Project documentatie en rapportages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span>Compliance en safety checklists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span>Leverancier en materiaal management</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ROI Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">ROI voor Oostendse horeca</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Een typisch Oostends hotel of restaurant bespaart met automatisering:
              </p>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">15-20</div>
                  <p className="text-zinc-400 text-sm">Uur bespaard per week</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">5x</div>
                  <p className="text-zinc-400 text-sm">Meer reviews verzameld</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">0</div>
                  <p className="text-zinc-400 text-sm">Double bookings</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">4 talen</div>
                  <p className="text-zinc-400 text-sm">Automatisch ondersteund</p>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Benefits Infographic */}
          <WorkflowBenefits />

          {/* FAQ Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen - Oostende</h2>
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
              <Link to="/kortrijk" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Kortrijk
              </Link>
              <Link to="/roeselare" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Roeselare
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
              <Link to="/n8n-expert" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">n8n Expert</h3>
                <p className="text-zinc-400 text-sm">Ontdek onze expertise</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-white/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Oostendse ondernemer?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Van vishandel tot hotel - wij automatiseren uw bedrijfsprocessen. Gratis kennismakingsgesprek.
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

export default OostendePage;
