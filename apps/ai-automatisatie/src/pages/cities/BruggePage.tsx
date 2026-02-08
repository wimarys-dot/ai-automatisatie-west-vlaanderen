import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, WorkflowBenefits } from '@repo/ui';

const BruggePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { title: 'n8n Implementatie', desc: 'Lokale setup en ondersteuning voor Brugse bedrijven met onze n8n expertise.', icon: '⚡' },
    { title: 'AI Agents', desc: 'Intelligente automatisering voor toerisme, horeca en culturele instellingen.', icon: '🤖' },
    { title: 'MCP Integraties', desc: 'Veilige data verbindingen tussen uw reserveringssystemen en boekhouding.', icon: '💠' },
    { title: 'Workflow Automatisering', desc: 'Van bestelling tot factuur - volledig geautomatiseerde bedrijfsprocessen.', icon: '🔄' },
  ];

  const sectors = [
    { name: 'Toerisme & Horeca', desc: 'Hotels, B&Bs, restaurants en gidsen' },
    { name: 'Havenbedrijven', desc: 'Logistiek, shipping en warehousing' },
    { name: 'Retail Binnenstad', desc: 'Winkels langs de winkelstraten' },
    { name: 'Chocolatiers & Ambachten', desc: 'Brugse specialiteiten producenten' },
    { name: 'Culturele Instellingen', desc: 'Musea, theaters en galerijen' },
    { name: 'Vastgoed', desc: 'Makelaars en beheerders historisch vastgoed' },
  ];

  const timeSavings = [
    { task: 'Reserveringsbevestigingen versturen', before: '45 min/dag', after: '0 min', savings: '100%' },
    { task: 'Review requests na bezoek', before: '30 min/dag', after: '0 min', savings: '100%' },
    { task: 'Meertalige klantcommunicatie', before: '60 min/dag', after: '5 min', savings: '92%' },
    { task: 'Inventaris updates naar channels', before: '90 min/dag', after: '0 min', savings: '100%' },
    { task: 'Leverancier orders plaatsen', before: '45 min/dag', after: '10 min', savings: '78%' },
  ];

  const useCases = [
    {
      title: 'Hotel Automatisering',
      desc: 'Van boeking tot checkout volledig geautomatiseerd',
      steps: ['Booking.com/Airbnb reservering binnenkomt', 'Automatische bevestiging in 4 talen', 'Check-in instructies 24u vooraf', 'Review request 2 dagen na checkout', 'Data naar boekhouding']
    },
    {
      title: 'Restaurant Workflow',
      desc: 'Reserveringen en voorraad in sync',
      steps: ['Reservering via website of telefoon', 'Bevestiging + menu suggestie verstuurd', 'Herinnering dag vooraf', 'Voorraad check en bestelling indien nodig', 'Factuur automatisch gegenereerd']
    },
    {
      title: 'Chocolatier E-commerce',
      desc: 'Online verkoop naar verzending',
      steps: ['Bestelling binnenkomt (webshop)', 'Voorraad gecontroleerd', 'Verzendlabel automatisch aangemaakt', 'Track & trace naar klant', 'Follow-up na levering']
    },
  ];

  const faqs = [
    {
      q: 'Bieden jullie ondersteuning ter plaatse in Brugge?',
      a: 'Ja, wij komen graag langs in Brugge voor implementatie, training of support. Met onze thuisbasis in West-Vlaanderen zijn wij snel ter plaatse voor persoonlijke ondersteuning.'
    },
    {
      q: 'Werken jullie met Booking.com en Airbnb integraties?',
      a: 'Absoluut. We koppelen alle grote boekingsplatformen (Booking.com, Airbnb, Expedia) met uw PMS, boekhouding en communicatiesystemen. Zo worden reserveringen automatisch verwerkt en bevestigd.'
    },
    {
      q: 'Kunnen jullie meertalige automatisering opzetten?',
      a: 'Ja, dit is een specialiteit voor Brugse bedrijven met internationale klanten. We detecteren automatisch de taal van de klant (NL/EN/FR/DE) en versturen correspondentie in de juiste taal.'
    },
    {
      q: 'Wat kost automatisering voor een klein hotel of B&B?',
      a: 'Voor een typisch Brugs hotel of B&B rekent u op een eenmalige investering van €2.000-€5.000 afhankelijk van de complexiteit. Dit verdient zich meestal binnen 3-6 maanden terug door tijdsbesparing.'
    },
    {
      q: 'Hoe lang duurt de implementatie?',
      a: 'Een standaard implementatie voor een horecabedrijf duurt 2-4 weken. Dit omvat analyse, setup, integraties, testen en training van uw personeel.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Automatisering Brugge | n8n Expert West-Vlaanderen | Workflow Automatisering</title>
        <meta name="description" content="AI automatisering en n8n expertise voor bedrijven in Brugge. Van toerisme en horeca tot havenbedrijven. Lokale ondersteuning, meertalige workflows en snelle implementatie." />
        <link rel="canonical" href="https://ai-automatisatie.be/brugge" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "Brugge", url: "https://ai-automatisatie.be/brugge" }
      ]} />

      <LocalBusinessSchema
        city="Brugge"
        description="AI automatisering en n8n expertise voor bedrijven in Brugge. Toerisme, horeca en havenbedrijven."
        url="https://ai-automatisatie.be/brugge"
      />

      <FAQSchema faqs={[
        { question: "Bieden jullie automatisering in Brugge aan?", answer: "Ja, wij zijn actief in heel West-Vlaanderen met Brugge als een van onze kernregio's. We bedienen toerisme, horeca, havenbedrijven en KMO's." },
        { question: "Werken jullie met meertalige workflows?", answer: "Absoluut. Brugge als toeristische stad heeft internationale klanten. Onze workflows ondersteunen NL, EN, FR en DE automatisch." },
        { question: "Wat kost automatisering voor een Brugs bedrijf?", answer: "Afhankelijk van complexiteit start een basis automatisering vanaf €2.000. De meeste Brugse bedrijven besparen 15-20 uur per week." }
      ]} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">West-Vlaanderen</div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              AI Automatisering <span className="text-[#ff6d5a]">Brugge</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              n8n en AI expertise voor bedrijven in Brugge en omgeving. Van de haven tot de binnenstad, van hotel tot chocolatier - wij automatiseren uw workflows.
            </p>
          </header>

          {/* Intro Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Automatisering in het Venetie van het Noorden</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Brugge combineert een rijk <strong className="text-white">UNESCO werelderfgoed</strong> met een dynamische moderne economie. Met meer dan 8 miljoen toeristen per jaar en een belangrijke zeehaven is Brugge een stad waar efficiëntie het verschil maakt.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Of u nu een hotel runt in de binnenstad, een chocolatier bent met internationale klanten, of werkt in de haven van Zeebrugge - <strong className="text-white">workflow automatisering</strong> bespaart u uren per dag.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Als West-Vlaamse n8n experts begrijpen wij de unieke uitdagingen van Brugse ondernemers. Wij bieden <strong className="text-white">lokale ondersteuning</strong> met persoonlijk contact en kennis van de regio.
              </p>
            </div>
          </section>

          {/* Time Savings Table */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Tijdsbesparing door automatisering</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Concrete voorbeelden van wat automatisering oplevert voor Brugse bedrijven:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-[#18181b] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-white font-bold">Taak</th>
                    <th className="text-center p-4 text-white font-bold">Voor</th>
                    <th className="text-center p-4 text-white font-bold">Na</th>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Onze diensten in Brugge</h2>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Automatisering voorbeelden Brugge</h2>
            <p className="text-zinc-400 text-lg mb-12">
              Hoe Brugse bedrijven n8n gebruiken voor hun dagelijkse werkzaamheden:
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
            <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Sectoren in Brugge</h2>
              <p className="text-zinc-400 text-lg mb-8">Wij werken met bedrijven in alle Brugse sectoren:</p>
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

          {/* Local Benefits */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Waarom een lokale n8n expert?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">Persoonlijk contact</h3>
                <p className="text-zinc-400">Afspraken ter plaatse in Brugge. Wij komen naar u toe voor implementatie, training en support. Geen anonieme support desk maar een vast aanspreekpunt.</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">Meertalige expertise</h3>
                <p className="text-zinc-400">Brugge is internationaal. Wij bouwen workflows die automatisch communiceren in Nederlands, Engels, Frans en Duits op basis van de klant.</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">Snelle respons</h3>
                <p className="text-zinc-400">Problemen? Wij staan snel bij u op de stoep indien nodig. Geen dagen wachten op remote support - binnen enkele uren ter plaatse.</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">Lokaal netwerk</h3>
                <p className="text-zinc-400">Verbonden met het West-Vlaamse ondernemersnetwerk. We kennen de leveranciers, de software en de manier van werken in de regio.</p>
              </div>
            </div>
          </section>

          {/* ROI Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">ROI voor Brugse bedrijven</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Een typisch Brugs hotel of horecabedrijf bespaart met automatisering:
              </p>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">15-20</div>
                  <p className="text-zinc-400 text-sm">Uur bespaard per week</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">€800+</div>
                  <p className="text-zinc-400 text-sm">Bespaard per maand</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">4x</div>
                  <p className="text-zinc-400 text-sm">Meer reviews verzameld</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-[#ff6d5a] mb-2">0</div>
                  <p className="text-zinc-400 text-sm">Gemiste reserveringen</p>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Benefits Infographic */}
          <WorkflowBenefits />

          {/* FAQ Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen - Brugge</h2>
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
            <h2 className="text-2xl font-bold text-white mb-6">Ook actief in andere steden</h2>
            <div className="flex flex-wrap gap-4">
              <Link to="/kortrijk" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Kortrijk
              </Link>
              <Link to="/oostende" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Oostende
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
                <p className="text-zinc-400 text-sm">Leer meer over het platform dat wij gebruiken</p>
              </Link>
              <Link to="/sector/accountants" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">Accountants</h3>
                <p className="text-zinc-400 text-sm">Automatisering voor boekhoudkantoren in Brugge</p>
              </Link>
              <Link to="/ai-automatisering" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">AI Automatisering</h3>
                <p className="text-zinc-400 text-sm">Hoe AI uw workflows kan verbeteren</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-white/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Brugse ondernemer?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Ontdek hoe automatisering uw Brugs bedrijf naar het volgende niveau tilt. Gratis kennismakingsgesprek, vrijblijvend advies.
            </p>
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Plan een kennismaking
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default BruggePage;
