import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ROIChart from '../../components/infographics/ROIChart';
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from '../../components/StructuredData';

const RetailPage: React.FC = () => {
  const painPoints = [
    'Handmatig stock bijhouden over meerdere kanalen (webshop, bol.com, fysieke winkel)',
    'Bestellingen manueel verwerken, picken en verzenden',
    'Geen real-time inzicht in voorraadniveaus - overselling risico',
    'Klantcommunicatie (order status, tracking) kost te veel tijd',
    'Prijzen updaten op meerdere platforms bij promoties',
    'Retouren handmatig verwerken en voorraad bijwerken',
    'Leveranciers handmatig bestellen wanneer voorraad laag is',
  ];

  const solutions = [
    {
      title: 'Omnichannel Stock Sync',
      desc: 'Eén centrale voorraad, automatisch gesynchroniseerd over webshop, marketplaces en fysieke winkel in real-time.',
      icon: '📦'
    },
    {
      title: 'Order Processing',
      desc: 'Bestellingen automatisch verwerken: van betaling tot verzendlabel genereren in seconden.',
      icon: '🛒'
    },
    {
      title: 'Klant Notificaties',
      desc: 'Automatische order confirmaties, verzendtracking, en review requests via email of SMS.',
      icon: '📱'
    },
    {
      title: 'Dynamic Pricing',
      desc: 'Prijzen automatisch aanpassen op basis van voorraad, concurrentie, seizoen of marge-doelen.',
      icon: '💵'
    },
    {
      title: 'Retour Automatisering',
      desc: 'Retourverzoeken automatisch verwerken, labels genereren, en voorraad bijwerken na ontvangst.',
      icon: '↩️'
    },
    {
      title: 'Auto-Replenishment',
      desc: 'Automatische bestelvoorstellen of orders naar leveranciers wanneer voorraad onder drempel zakt.',
      icon: '🔄'
    },
  ];

  const automationExamples = [
    {
      process: 'Order verwerken',
      manual: '5-10 min per order',
      automated: 'Volledig automatisch',
      saving: '100%'
    },
    {
      process: 'Voorraad synchroniseren',
      manual: 'Dagelijks handmatig',
      automated: 'Real-time sync',
      saving: '100%'
    },
    {
      process: 'Verzendlabel maken',
      manual: '3 min per zending',
      automated: 'Auto-generatie',
      saving: '100%'
    },
    {
      process: 'Prijzen bijwerken',
      manual: '30 min per promotie',
      automated: 'Eén klik overal',
      saving: '95%'
    },
    {
      process: 'Retour verwerken',
      manual: '15 min per retour',
      automated: '2 min controle',
      saving: '87%'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Automatisering voor Retail & E-commerce | AI Automatisatie</title>
        <meta name="description" content="Automatiseer uw webshop en retailbedrijf met n8n. Omnichannel voorraad sync, order processing, verzending en klantcommunicatie. Schaal zonder extra personeel." />
        <link rel="canonical" href="https://ai-automatisatie.be/sector/retail" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "Sectoren", url: "https://ai-automatisatie.be/sectoren" },
        { name: "Retail", url: "https://ai-automatisatie.be/sector/retail" }
      ]} />

      <ServiceSchema
        name="Automatisering voor Retail & E-commerce"
        description="Workflow automatisering voor webshops en retail. Omnichannel voorraad sync, order processing en klantcommunicatie automatisch."
        url="https://ai-automatisatie.be/sector/retail"
      />

      <FAQSchema faqs={[
        { question: "Kan voorraad automatisch synchroniseren tussen kanalen?", answer: "Ja, n8n houdt voorraad real-time gesynchroniseerd tussen uw webshop, bol.com, Amazon en fysieke winkel. Nooit meer overselling." },
        { question: "Hoe werkt automatische order processing?", answer: "Orders worden automatisch verwerkt: betaling checken, voorraad reserveren, verzendlabel maken, tracking versturen. Van order tot verzending zonder handmatige stappen." },
        { question: "Wat kost automatisering voor een webshop?", answer: "Een basis e-commerce automatisering begint vanaf €4.000. Bij 50 orders per dag bespaart u 40+ uur per week, ROI binnen 2 maanden." }
      ]} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Sector</div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Automatisering voor <span className="text-[#ff6d5a]">Retail</span> & E-commerce
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              Schaal uw e-commerce zonder extra personeel. Automatiseer van bestelling tot levering en verhoog uw marge door efficiëntie.
            </p>
          </header>

          {/* What is automation for retail */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Wat is automatisering voor <span className="text-[#ff6d5a]">e-commerce</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  E-commerce automatisering betekent het <strong className="text-white">digitaal verbinden</strong> van alle stappen in uw verkoopproces: van webshop tot warehouse, van betaling tot bezorging.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Met <Link to="/wat-is-n8n" className="text-[#ff6d5a] hover:underline">n8n workflows</Link> verwerkt u bestellingen automatisch. Voorraad wordt real-time gesynchroniseerd, verzendlabels gegenereerd, en klanten geïnformeerd - zonder handmatige tussenkomst.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">Waarom nu automatiseren?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Klanten verwachten snelheid</strong> - Same-day shipping is de norm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Marges onder druk</strong> - Efficiëntie bepaalt winstgevendheid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Meer kanalen</strong> - Webshop, bol.com, Amazon, fysieke winkel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Groeipotentieel</strong> - Schaal zonder personeelskosten</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pain Points */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Herkenbare problemen?</h2>
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <ul className="space-y-4">
                {painPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-zinc-400 text-lg">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-zinc-300">
                  <strong className="text-white">Dit hoeft niet.</strong> Met de juiste automatisering verwerkt u 10x meer bestellingen met dezelfde mankracht.
                </p>
              </div>
            </div>
          </section>

          {/* Time savings table */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Concrete <span className="text-[#ff6d5a]">tijdsbesparing</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-[#18181b] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-zinc-400 font-normal">Proces</th>
                    <th className="text-left p-4 text-zinc-400 font-normal">Handmatig</th>
                    <th className="text-left p-4 text-zinc-400 font-normal">Geautomatiseerd</th>
                    <th className="text-left p-4 text-zinc-400 font-normal">Besparing</th>
                  </tr>
                </thead>
                <tbody>
                  {automationExamples.map((example, idx) => (
                    <tr key={idx} className={idx < automationExamples.length - 1 ? 'border-b border-white/10' : ''}>
                      <td className="p-4 text-white">{example.process}</td>
                      <td className="p-4 text-red-400">{example.manual}</td>
                      <td className="p-4 text-[#ff6d5a]">{example.automated}</td>
                      <td className="p-4 text-[#7c3aed] font-bold">{example.saving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Solutions */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Automatiseringsoplossingen voor retail</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((sol, idx) => (
                <div key={idx} className="bg-[#18181b] border border-white/5 hover:border-[#ff6d5a]/40 p-8 rounded-[2rem] transition-all">
                  <div className="text-4xl mb-4">{sol.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{sol.title}</h3>
                  <p className="text-zinc-400">{sol.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Order Flow - Visual */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Volledig geautomatiseerde <span className="text-[#ff6d5a]">order flow</span>
            </h2>
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <div className="grid md:grid-cols-5 gap-4 text-center mb-8">
                {[
                  { step: 'Bestelling', icon: '🛒' },
                  { step: 'Betaling', icon: '💳' },
                  { step: 'Picking', icon: '📦' },
                  { step: 'Verzending', icon: '🚚' },
                  { step: 'Review', icon: '⭐' }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="w-16 h-16 bg-[#ff6d5a]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <p className="text-white text-sm font-medium">{item.step}</p>
                    <p className="text-zinc-400 text-xs mt-1">Automatisch</p>
                    {idx < 4 && <div className="hidden md:block absolute top-8 left-full w-full h-px bg-zinc-700 -translate-x-1/2"></div>}
                  </div>
                ))}
              </div>
              <div className="bg-black/20 p-6 rounded-xl">
                <p className="text-zinc-300 text-center">
                  <strong className="text-white">Volledig geautomatiseerd</strong> • Van bestelling tot review-verzoek zonder handmatige tussenkomst
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#ff6d5a] font-bold">1.</span>
                  <p className="text-zinc-400">Klant plaatst bestelling → automatische orderbevestiging email</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#ff6d5a] font-bold">2.</span>
                  <p className="text-zinc-400">Betaling ontvangen → picklijst naar warehouse, voorraad aangepast</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#ff6d5a] font-bold">3.</span>
                  <p className="text-zinc-400">Order gepicked → verzendlabel gegenereerd (Sendcloud/bPost/PostNL)</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#ff6d5a] font-bold">4.</span>
                  <p className="text-zinc-400">Pakket verzonden → tracking email naar klant</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#ff6d5a] font-bold">5.</span>
                  <p className="text-zinc-400">3 dagen na levering → automatisch review-verzoek</p>
                </div>
              </div>
            </div>
          </section>

          {/* Integrations - Enhanced */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Welke <span className="text-[#ff6d5a]">e-commerce platforms</span> koppelen we?
            </h2>
            <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Webshop Platforms</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">WooCommerce</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Shopify</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Magento</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Lightspeed</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">PrestaShop</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Marketplaces</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Bol.com</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Amazon</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Marktplaats</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">eBay</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Verzending</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Sendcloud</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">bPost</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">PostNL</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">DHL</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">GLS</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Betaling & Boekhouding</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Mollie</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Stripe</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">PayPal</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Exact</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Moneybird</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ROI Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Wat levert het <span className="text-[#ff6d5a]">op</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">10x</div>
                <p className="text-zinc-400">Meer orders verwerken</p>
                <p className="text-zinc-400 text-sm mt-2">Zelfde team</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">0</div>
                <p className="text-zinc-400">Overselling</p>
                <p className="text-zinc-400 text-sm mt-2">Real-time voorraad sync</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">90%</div>
                <p className="text-zinc-400">Minder handwerk</p>
                <p className="text-zinc-400 text-sm mt-2">Focus op groei</p>
              </div>
            </div>
            <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-white mb-4">Praktijkvoorbeeld</h3>
              <p className="text-zinc-400 mb-4">Webshop met 50 orders per dag:</p>
              <ul className="space-y-2 text-zinc-400">
                <li>• Handmatig: 50 orders × 10 min = <strong className="text-red-400">8+ uur/dag</strong></li>
                <li>• Geautomatiseerd: 50 orders × 0 min = <strong className="text-[#ff6d5a]">0 uur/dag</strong></li>
                <li>• Besparing: €25/uur × 8 uur × 250 dagen = <strong className="text-[#7c3aed]">€50.000/jaar</strong></li>
                <li>• Investering: €4.000 - €8.000 eenmalig</li>
              </ul>
            </div>
          </section>

          {/* ROI Infographic */}
          <ROIChart
            title="ROI Calculator: E-commerce"
            subtitle="Voorbeeld berekening voor een webshop met 50 orders per dag"
            items={[
              { task: 'Orders verwerken', hoursPerWeek: 30, automatedHours: 0, hourlyRate: 25 },
              { task: 'Voorraad synchroniseren', hoursPerWeek: 5, automatedHours: 0, hourlyRate: 25 },
              { task: 'Verzendlabels maken', hoursPerWeek: 8, automatedHours: 0, hourlyRate: 25 },
              { task: 'Retouren verwerken', hoursPerWeek: 4, automatedHours: 0.5, hourlyRate: 25 },
            ]}
            summary={{
              hoursSaved: '46.5 uur/week',
              yearlySavings: '€60.450',
              investment: '€4.000 - €8.000',
              roi: '8x - 15x in jaar 1'
            }}
          />

          {/* FAQ Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Veelgestelde vragen
            </h2>
            <div className="space-y-4">
              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Werkt dit ook voor kleine webshops?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Zeker. Juist kleinere webshops (10-50 orders/dag) profiteren enorm - de eigenaar kan focus leggen op marketing en groei ipv orderverwerking. We beginnen met de basis (order flow + voorraad sync) en breiden uit naarmate u groeit.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Kan ik ook bol.com en mijn webshop koppelen?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Ja, dat is precies waar omnichannel sync voor is. Voorraad wordt real-time gesynchroniseerd tussen uw webshop, bol.com, Amazon en eventuele fysieke winkel. Verkoop op één kanaal wordt direct zichtbaar op alle andere.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Hoeveel kost automatisering voor een webshop?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Een basisimplementatie (order flow + voorraad sync + verzending) start rond €3.000. Uitgebreide implementaties met marketplace koppelingen en dynamic pricing kosten €6.000-€12.000. ROI is typisch binnen 1-3 maanden.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Wat als er iets misgaat met een automatische order?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Elke automatisering heeft ingebouwde foutafhandeling. Bij problemen (bijv. betaling mislukt, product niet op voorraad) krijgt u direct een notificatie en wordt de order in een "review queue" gezet. Niets wordt verzonden zonder dat betalingen zijn afgerond.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Hoe lang duurt de implementatie?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Een basis order-flow kan binnen 1 week live zijn. Complete implementaties met alle koppelingen nemen 2-3 weken. Uw webshop blijft gewoon operationeel tijdens de implementatie - we testen parallel en schakelen geleidelijk over.
                </div>
              </details>
            </div>
          </section>

          {/* Related Sectors */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-2xl font-bold text-white mb-6">Gerelateerde sectoren</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link to="/sector/makelaars" className="bg-[#18181b] p-6 rounded-xl border border-white/10 hover:border-[#7c3aed]/50 transition-colors group">
                <div className="text-[#7c3aed] font-bold mb-2 group-hover:text-[#8b5cf6]">Makelaars & Vastgoed</div>
                <div className="text-zinc-400 text-sm">Sales-gedreven sector met vergelijkbare lead nurturing, CRM integraties en klantopvolging processen.</div>
              </Link>
              <Link to="/sector/bouw" className="bg-[#18181b] p-6 rounded-xl border border-white/10 hover:border-[#7c3aed]/50 transition-colors group">
                <div className="text-[#7c3aed] font-bold mb-2 group-hover:text-[#8b5cf6]">Bouw & Constructie</div>
                <div className="text-zinc-400 text-sm">B2B leveranciers, bouwmaterialen en project-gebaseerde verkoop met vergelijkbare offerte en facturatie workflows.</div>
              </Link>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Meer over automatisering</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <Link to="/n8n-expert" className="bg-[#18181b] p-4 rounded-xl border border-white/10 hover:border-[#ff6d5a]/50 transition-colors">
                <div className="text-[#ff6d5a] font-bold mb-1">n8n Expert</div>
                <div className="text-zinc-400 text-sm">Uw lokale specialist</div>
              </Link>
              <Link to="/workflow-automatisering" className="bg-[#18181b] p-4 rounded-xl border border-white/10 hover:border-[#ff6d5a]/50 transition-colors">
                <div className="text-[#ff6d5a] font-bold mb-1">Workflow Automatisering</div>
                <div className="text-zinc-400 text-sm">Hoe het werkt</div>
              </Link>
              <Link to="/ai-automatisering" className="bg-[#18181b] p-4 rounded-xl border border-white/10 hover:border-[#ff6d5a]/50 transition-colors">
                <div className="text-[#ff6d5a] font-bold mb-1">AI Automatisering</div>
                <div className="text-zinc-400 text-sm">Slimme workflows</div>
              </Link>
              <Link to="/sector/accountants" className="bg-[#18181b] p-4 rounded-xl border border-white/10 hover:border-[#ff6d5a]/50 transition-colors">
                <div className="text-[#ff6d5a] font-bold mb-1">Accountants</div>
                <div className="text-zinc-400 text-sm">Andere sector</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-white/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Klaar om te schalen?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Van 10 naar 1000 bestellingen per dag zonder extra personeel. Ontdek hoe automatisering uw webshop kan transformeren.
            </p>
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Bespreek uw webshop
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default RetailPage;
