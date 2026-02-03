import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ComparisonChart from '../components/infographics/ComparisonChart';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '../components/StructuredData';

const N8nVsMakePage: React.FC = () => {
  const comparisonData = [
    { feature: 'Prijsmodel', n8n: 'Vast / gratis self-hosted', make: 'Per operatie', winner: 'n8n' },
    { feature: 'Self-hosting', n8n: 'Volledig ondersteund', make: 'Niet mogelijk', winner: 'n8n' },
    { feature: 'Visual builder', n8n: 'Node-based flow', make: 'Circulaire modules', winner: 'make' },
    { feature: 'Error handling', n8n: 'Geavanceerde error branches', make: 'Goed (error routes)', winner: 'n8n' },
    { feature: 'Branching logic', n8n: 'Onbeperkt (IF, Switch, Merge)', make: 'Routers & filters', winner: 'n8n' },
    { feature: 'Gebruiksgemak beginners', n8n: 'Gemiddelde leercurve', make: 'Zeer intuïtief', winner: 'make' },
    { feature: 'Custom code', n8n: 'JavaScript/Python volledig', make: 'Beperkt (alleen JS)', winner: 'n8n' },
    { feature: 'Open Source', n8n: 'Ja, fair-code license', make: 'Nee, closed source', winner: 'n8n' },
    { feature: 'AI integraties', n8n: 'Native AI nodes + agents', make: 'Via HTTP modules', winner: 'n8n' },
    { feature: 'Community', n8n: 'Groeiend & actief', make: 'Groot & gevestigd', winner: 'tie' },
  ];

  const n8nAdvantages = [
    'Gratis self-hosted optie',
    'Open-source met community bijdragen',
    'Onbeperkte workflows en executions (self-hosted)',
    'Native AI agent ondersteuning',
    'Volledige JavaScript/Python code support',
    'Data blijft in eigen infrastructuur (GDPR)',
    'Geen vendor lock-in',
    'Actieve development met frequente updates',
  ];

  const makeAdvantages = [
    'Zeer visuele, intuïtieve interface',
    'Makkelijker voor absolute beginners',
    'Veel kant-en-klare templates',
    'Goede documentatie en tutorials',
    'Stabiel en betrouwbaar platform',
    'Scenario scheduling met precisie',
  ];

  const faqs = [
    {
      q: 'Wat is het verschil tussen n8n en Make?',
      a: 'n8n is open-source en kan self-hosted worden, Make is een closed-source cloud platform. n8n heeft een node-based interface, Make gebruikt circulaire modules. n8n rekent vast of per execution, Make rekent per operatie. n8n biedt meer flexibiliteit voor developers, Make is intuïtiever voor beginners.'
    },
    {
      q: 'Is n8n nog steeds de beste keuze in 2025?',
      a: 'Voor bedrijven die flexibiliteit, kostenbeheersing en data privacy belangrijk vinden: ja. n8n blijft de beste open-source optie met actieve ontwikkeling, native AI-agent support, en een groeiende community. Voor non-technical teams kan Make of Zapier eenvoudiger zijn.'
    },
    {
      q: 'Wat is beter dan n8n?',
      a: 'Er is geen universeel "betere" tool - het hangt af van uw behoeften. Make is beter voor visuele gebruikers. Zapier heeft meer integraties. Maar voor flexibiliteit, kosten bij volume, en data privacy is n8n moeilijk te verslaan. Enterprise alternatieven zoals Workato of Tray.io zijn krachtiger maar veel duurder.'
    },
    {
      q: 'Waarom is n8n zo populair?',
      a: 'n8n combineert het beste van twee werelden: de gebruiksvriendelijkheid van no-code tools met de kracht van een development platform. Het is open-source (dus geen vendor lock-in), kan self-hosted worden (data privacy), en heeft native AI-agent ondersteuning. De community groeit explosief.'
    },
    {
      q: 'Welke is beter voor beginners: Make of n8n?',
      a: 'Make is eenvoudiger voor absolute beginners dankzij de visuele interface. Maar als u bereid bent een paar uur te investeren, biedt n8n meer mogelijkheden op lange termijn. Voor beginners met technische aanleg raden we n8n aan vanwege de schaalbaarheid.'
    },
    {
      q: 'Kan ik migreren van Make naar n8n?',
      a: 'Ja, maar er is geen automatische import. Scenarios moeten handmatig worden gerecreëerd in n8n. Dit is echter een goed moment om workflows te optimaliseren. Wij helpen bedrijven met deze migratie en realiseren vaak 50-70% kostenbesparing.'
    },
    {
      q: 'Wat is het verschil tussen n8n en AI-agents?',
      a: 'n8n is een workflow automation platform, AI-agents zijn autonome programma\'s die beslissingen nemen. Het mooie is: n8n ondersteunt AI-agents native. U kunt in n8n workflows bouwen die AI-agents gebruiken voor intelligente automatisering.'
    },
    {
      q: 'Zijn er voordelen aan n8n\'s open-source karakter?',
      a: 'Absoluut. Open-source betekent: geen vendor lock-in, community-gedreven innovatie, transparantie in hoe de software werkt, mogelijkheid tot eigen aanpassingen, en vaak snellere bugfixes. U bent niet afhankelijk van één bedrijf voor uw kritieke bedrijfsprocessen.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>n8n vs Make (Integromat) | Vergelijking 2025 | Beste Automation Tool</title>
        <meta name="description" content="n8n vs Make vergelijking. Open-source vs cloud, prijzen per operatie, AI integraties en meer. Welke automation tool past bij uw bedrijf?" />
        <link rel="canonical" href="https://ai-automatisatie.be/n8n-vs-make" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "n8n vs Make", url: "https://ai-automatisatie.be/n8n-vs-make" }
      ]} />
      <ArticleSchema
        headline="n8n vs Make (Integromat) | Vergelijking 2025 | Beste Automation Tool"
        description="n8n vs Make vergelijking. Open-source vs cloud, prijzen per operatie, AI integraties en meer. Welke automation tool past bij uw bedrijf?"
        url="https://ai-automatisatie.be/n8n-vs-make"
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs.map(faq => ({ question: faq.q, answer: faq.a }))} />
      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
        <header className="mb-16 md:mb-24">
          <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Vergelijking</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            <span className="text-[#ff6d5a]">n8n</span> vs <span className="text-[#7c3aed]">Make</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            Make (voorheen Integromat) en n8n zijn beide krachtige automation tools. Ontdek het verschil en welke het beste past bij uw bedrijf en workflow behoeften.
          </p>
        </header>

        {/* Quick Verdict */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-[#7c3aed]/10 border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl font-bold text-white mb-4">Ons verdict: n8n vs Make</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-[#ff6d5a]">n8n</strong> biedt meer flexibiliteit, is kostenefficiënter bij hoge volumes, en heeft betere AI-integraties. <strong className="text-[#7c3aed]">Make</strong> heeft een meer intuïtieve visuele interface en is ideaal voor beginners.
            </p>
            <p className="text-zinc-400">
              Beide zijn sterker dan Zapier voor complexe workflows. n8n wint op 7 van 10 criteria, Make op 2, en 1 gelijkspel.
            </p>
          </div>
        </section>

        {/* What is the difference */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Wat is het verschil tussen n8n en Make?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              n8n en Make (voorheen Integromat) zijn beide visuele workflow automation platforms, maar met fundamenteel verschillende filosofieën:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-bold mb-3 text-lg">n8n</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>• <strong className="text-white">Open-source</strong> met fair-code license</li>
                  <li>• <strong className="text-white">Self-hosted</strong> of cloud optie</li>
                  <li>• Node-based horizontale flow</li>
                  <li>• Native AI-agent ondersteuning</li>
                  <li>• Vast prijsmodel of gratis self-hosted</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-3 text-lg">Make</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>• <strong className="text-white">Closed-source</strong> commercieel platform</li>
                  <li>• <strong className="text-white">Cloud-only</strong>, geen self-hosting</li>
                  <li>• Circulaire visuele modules</li>
                  <li>• AI via HTTP requests</li>
                  <li>• Per-operatie pricing model</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Feature vergelijking n8n vs Make</h2>
          <div className="bg-[#18181b] border border-white/10 rounded-[2rem] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-zinc-400 font-medium">Feature</th>
                    <th className="text-left p-6 text-[#ff6d5a] font-bold">n8n</th>
                    <th className="text-left p-6 text-[#7c3aed] font-bold">Make</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5 last:border-0">
                      <td className="p-6 text-white font-medium">{row.feature}</td>
                      <td className={`p-6 ${row.winner === 'n8n' ? 'text-[#ff6d5a] font-semibold' : 'text-zinc-400'}`}>
                        {row.n8n}
                        {row.winner === 'n8n' && <span className="ml-2">✓</span>}
                      </td>
                      <td className={`p-6 ${row.winner === 'make' ? 'text-[#7c3aed] font-semibold' : 'text-zinc-400'}`}>
                        {row.make}
                        {row.winner === 'make' && <span className="ml-2">✓</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why is n8n so popular */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Waarom is n8n zo populair?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              n8n's populariteit groeit explosief. De tool combineert het beste van no-code platforms met de kracht van een development tool:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {n8nAdvantages.map((adv, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span className="text-zinc-300">{adv}</span>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 mt-6">
              De combinatie van open-source filosofie, active community, en native AI-ondersteuning maakt n8n uniek in de markt.
            </p>
          </div>
        </section>

        {/* Open Source advantages */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Voordelen van n8n's open-source karakter</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#18181b] border border-[#ff6d5a]/20 p-6 rounded-[2rem]">
              <div className="text-3xl mb-4">🔓</div>
              <h3 className="text-lg font-bold text-white mb-2">Geen Vendor Lock-in</h3>
              <p className="text-zinc-400 text-sm">Uw workflows zijn van u. Exporteer, migreer, of host zelf - u bent niet afhankelijk van één partij.</p>
            </div>
            <div className="bg-[#18181b] border border-[#ff6d5a]/20 p-6 rounded-[2rem]">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-lg font-bold text-white mb-2">Community Innovatie</h3>
              <p className="text-zinc-400 text-sm">Honderden developers bouwen custom nodes. Nieuwe integraties verschijnen continu via de community.</p>
            </div>
            <div className="bg-[#18181b] border border-[#ff6d5a]/20 p-6 rounded-[2rem]">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-white mb-2">Transparantie</h3>
              <p className="text-zinc-400 text-sm">Bekijk exact hoe de software werkt. Geen black boxes, volledige controle over uw automatisering.</p>
            </div>
          </div>
          <p className="text-zinc-400 mt-6 text-lg">
            Make is closed-source: u bent volledig afhankelijk van hun roadmap, pricing beslissingen, en platform stabiliteit.
          </p>
        </section>

        {/* Is n8n still the best */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Is n8n nog steeds de beste keuze?</h2>
          <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Ja, voor de meeste zakelijke use cases in 2025.</strong> n8n blijft de beste optie als u waarde hecht aan:
            </p>
            <ul className="space-y-3 text-zinc-400 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#ff6d5a]">✓</span>
                <span><strong className="text-white">Kostenbeheersing:</strong> Geen per-operatie kosten, voorspelbaar budget</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff6d5a]">✓</span>
                <span><strong className="text-white">Data privacy:</strong> Self-hosting voor GDPR compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff6d5a]">✓</span>
                <span><strong className="text-white">AI automatisering:</strong> Native AI-agent ondersteuning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff6d5a]">✓</span>
                <span><strong className="text-white">Flexibiliteit:</strong> Custom code en onbeperkte complexiteit</span>
              </li>
            </ul>
            <p className="text-zinc-400">
              Alleen als u geen technische resources heeft én eenvoud belangrijker is dan kosten, kan Make een betere keuze zijn.
            </p>
          </div>
        </section>

        {/* What is better than n8n */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Wat is beter dan n8n?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Er is geen universeel "betere" automation tool. Het hangt af van uw specifieke behoeften:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-[#7c3aed] font-bold shrink-0">Make:</span>
                <span className="text-zinc-400">Beter voor visuele denkers en absolute beginners zonder technische achtergrond.</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#ff9000] font-bold shrink-0">Zapier:</span>
                <span className="text-zinc-400">Beter als u 6000+ app-integraties nodig heeft en geen custom code wilt schrijven.</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-zinc-400 font-bold shrink-0">Workato/Tray:</span>
                <span className="text-zinc-400">Enterprise-grade features, maar 10-100x duurder. Alleen zinvol voor grote organisaties.</span>
              </div>
            </div>
            <p className="text-zinc-300 mt-6 text-lg">
              <strong>Voor MKB en scale-ups</strong> biedt n8n de beste prijs-kwaliteitverhouding en toekomstbestendigheid.
            </p>
          </div>
        </section>

        {/* Beginners */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Welke is beter voor beginners: Make of n8n?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#18181b] border border-[#7c3aed]/30 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-[#7c3aed] mb-4">Make voor beginners</h3>
              <ul className="space-y-2 text-zinc-400">
                {makeAdvantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#7c3aed]">✓</span> {adv}
                  </li>
                ))}
              </ul>
              <p className="text-zinc-400 mt-4 text-sm">
                Snellere start, maar beperktere mogelijkheden op lange termijn.
              </p>
            </div>
            <div className="bg-[#18181b] border border-[#ff6d5a]/30 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-[#ff6d5a] mb-4">n8n voor beginners</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-2"><span className="text-[#ff6d5a]">✓</span> Grotere leermogelijkheden</li>
                <li className="flex items-start gap-2"><span className="text-[#ff6d5a]">✓</span> Schaalt mee met uw vaardigheden</li>
                <li className="flex items-start gap-2"><span className="text-[#ff6d5a]">✓</span> Gratis te proberen (self-hosted)</li>
                <li className="flex items-start gap-2"><span className="text-[#ff6d5a]">✓</span> Actieve community voor hulp</li>
                <li className="flex items-start gap-2"><span className="text-[#ff6d5a]">✓</span> Betere documentatie over tijd</li>
              </ul>
              <p className="text-zinc-400 mt-4 text-sm">
                Iets steilere curve, maar meer mogelijkheden op lange termijn.
              </p>
            </div>
          </div>
          <p className="text-zinc-400 mt-6 text-lg">
            <strong className="text-white">Ons advies:</strong> Als u van plan bent serieus met automatisering aan de slag te gaan, investeer de extra uren in n8n. Het betaalt zich terug.
          </p>
        </section>

        {/* n8n vs AI agents */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Wat is het verschil tussen n8n en AI-agents?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Dit is een veelgestelde vraag, maar het is geen of-of keuze:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-white font-bold mb-3">n8n = Workflow Platform</h3>
                <p className="text-zinc-400">
                  n8n is de infrastructuur waarin u workflows bouwt. Het verbindt apps, verwerkt data, en voert acties uit volgens uw logica.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-3">AI Agents = Intelligente Actoren</h3>
                <p className="text-zinc-400">
                  AI-agents zijn autonome programma's die beslissingen nemen, leren, en taken uitvoeren met minimale menselijke input.
                </p>
              </div>
            </div>
            <div className="bg-[#ff6d5a]/10 border border-[#ff6d5a]/20 p-6 rounded-xl">
              <p className="text-zinc-300">
                <strong className="text-[#ff6d5a]">Het mooie:</strong> n8n ondersteunt AI-agents native. U kunt in n8n workflows bouwen die AI-agents inzetten voor intelligente automatisering. Dit is een van n8n's grote voordelen boven Make.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/n8n-ai-agent" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
                n8n AI Agent →
              </Link>
              <Link to="/ai-agents" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
                AI Agents Diensten →
              </Link>
            </div>
          </div>
        </section>

        {/* Migration */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Kan ik migreren van Make naar n8n?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Ja, migratie van Make naar n8n is mogelijk en vaak zinvol vanwege kostenbesparing. Er is geen automatische import tool, maar het proces is manageable:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#ff6d5a] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">1</span>
                <div>
                  <h4 className="text-white font-bold">Inventory maken</h4>
                  <p className="text-zinc-400">Documenteer alle Make scenarios, triggers, en integraties.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#ff6d5a] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">2</span>
                <div>
                  <h4 className="text-white font-bold">Prioriteren</h4>
                  <p className="text-zinc-400">Start met de meest gebruikte of kostbare scenarios.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#ff6d5a] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">3</span>
                <div>
                  <h4 className="text-white font-bold">Herbouwen & optimaliseren</h4>
                  <p className="text-zinc-400">Recreëer in n8n, vaak met verbeteringen die in Make niet mogelijk waren.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#ff6d5a] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">4</span>
                <div>
                  <h4 className="text-white font-bold">Parallel draaien</h4>
                  <p className="text-zinc-400">Test nieuwe workflows terwijl oude nog actief zijn.</p>
                </div>
              </div>
            </div>
            <p className="text-zinc-300">
              <strong>Resultaat:</strong> Onze klanten besparen gemiddeld 50-70% op automation kosten na migratie van Make naar n8n.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Kosten vergelijking: 10.000 operaties/maand</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#18181b] border border-[#ff6d5a]/30 p-8 rounded-[2rem] text-center">
              <h3 className="text-2xl font-bold text-[#ff6d5a] mb-2">n8n</h3>
              <div className="text-5xl font-black text-white mb-4">€0 - €50</div>
              <p className="text-zinc-400 mb-4">Self-hosted gratis, Cloud vanaf €20/maand</p>
              <ul className="text-zinc-400 text-sm space-y-1 text-left">
                <li>• Onbeperkte workflows</li>
                <li>• Geen per-operatie kosten</li>
                <li>• Voorspelbaar budget</li>
              </ul>
            </div>
            <div className="bg-[#18181b] border border-[#7c3aed]/30 p-8 rounded-[2rem] text-center">
              <h3 className="text-2xl font-bold text-[#7c3aed] mb-2">Make</h3>
              <div className="text-5xl font-black text-white mb-4">€29 - €99+</div>
              <p className="text-zinc-400 mb-4">Afhankelijk van plan en operaties</p>
              <ul className="text-zinc-400 text-sm space-y-1 text-left">
                <li>• Per-operatie pricing</li>
                <li>• Kosten schalen met gebruik</li>
                <li>• Premium features extra</li>
              </ul>
            </div>
          </div>
          <p className="text-zinc-400 text-sm mt-6 text-center">
            * Bij 50.000+ operaties/maand wordt het verschil nog groter: n8n ~€50-100, Make ~€299+
          </p>
        </section>

        {/* When to Choose */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Wanneer kiezen voor wat?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-[#ff6d5a] mb-6">Kies n8n als u:</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2"><span className="text-[#ff6d5a]">✓</span> Self-hosting wilt voor data privacy/GDPR</li>
                <li className="flex items-start gap-2"><span className="text-[#ff6d5a]">✓</span> Hoge volumes workflows heeft</li>
                <li className="flex items-start gap-2"><span className="text-[#ff6d5a]">✓</span> Custom code nodig heeft (JS/Python)</li>
                <li className="flex items-start gap-2"><span className="text-[#ff6d5a]">✓</span> AI-agents wilt bouwen</li>
                <li className="flex items-start gap-2"><span className="text-[#ff6d5a]">✓</span> Kosten voorspelbaar wilt houden</li>
                <li className="flex items-start gap-2"><span className="text-[#ff6d5a]">✓</span> Open-source belangrijk vindt</li>
              </ul>
            </div>
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-[#7c3aed] mb-6">Kies Make als u:</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2"><span className="text-[#7c3aed]">✓</span> Visueel wilt werken met circulaire flows</li>
                <li className="flex items-start gap-2"><span className="text-[#7c3aed]">✓</span> Geen technische achtergrond heeft</li>
                <li className="flex items-start gap-2"><span className="text-[#7c3aed]">✓</span> Vandaag nog wilt starten</li>
                <li className="flex items-start gap-2"><span className="text-[#7c3aed]">✓</span> Beperkt volume heeft (&lt;5000 ops/maand)</li>
                <li className="flex items-start gap-2"><span className="text-[#7c3aed]">✓</span> Geen self-hosting nodig heeft</li>
                <li className="flex items-start gap-2"><span className="text-[#7c3aed]">✓</span> Templates belangrijk vindt</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Zapier comparison teaser */}
        <section className="mb-16 md:mb-24">
          <div className="bg-gradient-to-br from-[#ff9000]/10 to-transparent border border-[#ff9000]/20 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">En Zapier dan?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Zapier is de derde grote speler in workflow automation. Makkelijker dan beide, maar duurder en minder flexibel. Lees onze uitgebreide vergelijking.
            </p>
            <Link to="/n8n-vs-zapier" className="inline-flex items-center text-[#ff9000] font-medium hover:underline">
              Lees n8n vs Zapier vergelijking →
            </Link>
          </div>
        </section>

        {/* Comparison Infographic */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            Visuele <span className="text-[#ff6d5a]">vergelijking</span>
          </h2>
          <ComparisonChart
            leftName="n8n"
            leftColor="#ff6d5a"
            rightName="Make"
            rightColor="#6A0DAD"
            items={[
              { feature: 'Prijs', left: 'Gratis (self-host)', right: 'Vanaf $9/mo', winner: 'left' },
              { feature: 'Visual builder', left: 'Uitstekend', right: 'Uitstekend', winner: 'tie' },
              { feature: 'Self-hosting', left: 'Ja', right: 'Nee', winner: 'left' },
              { feature: 'AI mogelijkheden', left: 'Native support', right: 'Beperkt', winner: 'left' },
              { feature: 'Data limieten', left: 'Onbeperkt', right: 'Operations limiet', winner: 'left' },
              { feature: 'Open source', left: 'Ja', right: 'Nee', winner: 'left' },
            ]}
            verdict="Kies n8n voor AI workflows & onbeperkte data"
          />
        </section>

        {/* FAQ */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen over n8n vs Make</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-[#18181b] border border-white/5 rounded-[1.5rem] overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-white pr-4">{faq.q}</h3>
                  <span className="text-[#ff6d5a] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl font-bold text-white mb-6">Meer over n8n en automation</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/wat-is-n8n" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              Wat is n8n? →
            </Link>
            <Link to="/n8n-vs-zapier" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              n8n vs Zapier →
            </Link>
            <Link to="/workflow-automatisering" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              Workflow Automatisering →
            </Link>
            <Link to="/ai-automatisering" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              AI Automatisering →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-white/5">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Wij kiezen voor n8n</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Voor onze West-Vlaamse klanten biedt n8n de beste combinatie van flexibiliteit, privacy en kostenbeheersing. Laat ons uw project bespreken.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Bespreek uw project
            </Link>
            <Link
              to="/wat-is-n8n"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              Meer over n8n
            </Link>
          </div>
        </section>
      </article>
      </div>
    </>
  );
};

export default N8nVsMakePage;
