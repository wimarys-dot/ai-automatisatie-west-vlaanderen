import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArticleSchema, BreadcrumbSchema, ComparisonChart, FAQSchema } from '@repo/ui';

const N8nVsZapierPage: React.FC = () => {
  const comparisonData = [
    { feature: 'Prijsmodel', n8n: 'Vast bedrag / gratis self-hosted', zapier: 'Per taak (wordt duur bij opschaling)', winner: 'n8n' },
    { feature: 'Data Privacy & GDPR', n8n: 'Self-hosted optie, volledige controle', zapier: 'Alleen cloud, data in VS', winner: 'n8n' },
    { feature: 'Complexe workflows', n8n: 'Onbeperkte mogelijkheden', zapier: 'Beperkt door platform', winner: 'n8n' },
    { feature: 'Gebruiksgemak', n8n: 'Leercurve aanwezig', zapier: 'Zeer gebruiksvriendelijk', winner: 'zapier' },
    { feature: 'App integraties', n8n: '400+ nodes + custom', zapier: '6000+ apps', winner: 'zapier' },
    { feature: 'Custom code', n8n: 'JavaScript/Python volledig ondersteund', zapier: 'Beperkt (Code by Zapier)', winner: 'n8n' },
    { feature: 'Error handling', n8n: 'Geavanceerd met retry logic', zapier: 'Basis error alerts', winner: 'n8n' },
    { feature: 'Logging & Monitoring', n8n: 'Gedetailleerde execution logs', zapier: 'Basis task history', winner: 'n8n' },
    { feature: 'API toegang', n8n: 'Volledig open API', zapier: 'Beperkte API', winner: 'n8n' },
    { feature: 'Workflow architectuur', n8n: 'Visual flow met loops & branches', zapier: 'Lineaire Zaps', winner: 'n8n' },
  ];

  const n8nPros = [
    'Gratis self-hosted optie',
    'Geen task-based pricing',
    'Complexe, vertakte workflows',
    'Volledige JavaScript/Python support',
    'Data blijft in eigen omgeving (GDPR)',
    'Open source, community driven',
    'Geavanceerde error handling',
    'Webhook support zonder beperkingen',
  ];

  const n8nCons = [
    'Steilere leercurve',
    'Minder out-of-the-box integraties',
    'Self-hosting vereist technische kennis',
    'Kleinere community dan Zapier',
    'Interface kan overweldigend zijn',
  ];

  const zapierPros = [
    'Extreem gebruiksvriendelijk',
    'Enorme app library (6000+)',
    'Snel starten zonder setup',
    'Goede documentatie',
    'Betrouwbare uptime',
  ];

  const zapierCons = [
    'Wordt duur bij opschaling',
    'Geen self-hosting mogelijk',
    'Beperkte workflow complexiteit',
    'Data privacy zorgen (VS servers)',
    'Beperkte custom code mogelijkheden',
    'Vendor lock-in risico',
  ];

  const faqs = [
    {
      q: 'Wat is het verschil tussen n8n, Zapier en Make.com?',
      a: 'n8n is open-source en kan self-hosted worden met vaste prijzen. Zapier is de meest gebruiksvriendelijke optie met het grootste app ecosysteem maar duur bij opschaling. Make.com (voorheen Integromat) zit ertussenin qua complexiteit en prijs. Voor bedrijven die schaalbaarheid en data privacy belangrijk vinden, is n8n vaak de beste keuze.'
    },
    {
      q: 'Welke tool is kosteneffectiever: n8n of Zapier?',
      a: 'n8n is significant kosteneffectiever bij volume. Self-hosted n8n is gratis (alleen serverkosten ~€10-20/maand). Bij 10.000 taken per maand: n8n Cloud kost ~€50, Zapier kost €299+. Het verschil wordt groter naarmate het volume toeneemt.'
    },
    {
      q: 'Heb je programmeerkennis nodig om n8n te gebruiken?',
      a: 'Nee, niet voor basis workflows. n8n heeft een visuele drag-and-drop interface. Maar voor geavanceerde use cases (custom API calls, data transformatie) is JavaScript kennis nuttig. Voor self-hosting is basiskennis van servers vereist, of u kunt een expert inschakelen.'
    },
    {
      q: 'Wat zijn de nadelen van n8n?',
      a: 'De belangrijkste nadelen zijn: 1) Steilere leercurve dan Zapier, 2) Minder kant-en-klare integraties (400+ vs 6000+), 3) Self-hosting vereist technische kennis, 4) Kleinere community en minder tutorials beschikbaar. Voor niet-technische teams kan Zapier initieel makkelijker zijn.'
    },
    {
      q: 'Wat is een beter alternatief dan Zapier?',
      a: 'n8n is het beste alternatief voor bedrijven die kosten willen besparen en data privacy belangrijk vinden. Make.com is goed voor visueel ingestelde gebruikers. Activepieces is een nieuwere open-source optie. De keuze hangt af van uw specifieke behoeften qua budget, complexiteit en technische capaciteit.'
    },
    {
      q: 'Hoe verhouden n8n en Zapier zich qua logging en monitoring?',
      a: 'n8n biedt gedetailleerde execution logs met volledige data flow visibility per node. U kunt exact zien welke data waar doorheen ging. Zapier toont basis task history met minder granulariteit. Voor debugging en troubleshooting is n8n krachtiger.'
    },
    {
      q: 'Hoe garanderen n8n en Zapier databeveiliging en compliance?',
      a: 'n8n self-hosted geeft volledige controle: data verlaat uw servers niet. Ideaal voor GDPR en gevoelige data. Zapier verwerkt alle data op hun servers (voornamelijk VS). Beide hebben SOC 2 compliance voor hun cloud diensten, maar alleen n8n biedt de self-hosted optie voor maximale privacy.'
    },
    {
      q: 'Kan ik van Zapier naar n8n migreren?',
      a: 'Ja, workflows kunnen worden gerecreëerd in n8n. Er is geen automatische import, maar de meeste Zapier workflows zijn relatief eenvoudig te herbouwen. Wij helpen West-Vlaamse bedrijven met deze migratie en besparen hen gemiddeld 60-80% op automation kosten.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>n8n vs Zapier | Vergelijking 2025 | Prijzen, Features & Privacy</title>
        <meta name="description" content="n8n vs Zapier vergelijking. Ontdek de verschillen in prijs, features, privacy en use cases. Wanneer kies je n8n boven Zapier? Complete analyse." />
        <link rel="canonical" href="https://ai-automatisatie.be/n8n-vs-zapier" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "n8n vs Zapier", url: "https://ai-automatisatie.be/n8n-vs-zapier" }
      ]} />
      <ArticleSchema
        headline="n8n vs Zapier | Vergelijking 2025 | Prijzen, Features & Privacy"
        description="n8n vs Zapier vergelijking. Ontdek de verschillen in prijs, features, privacy en use cases. Wanneer kies je n8n boven Zapier? Complete analyse."
        url="https://ai-automatisatie.be/n8n-vs-zapier"
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
            <span className="text-[#ff6d5a]">n8n</span> vs <span className="text-[#ff9000]">Zapier</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            Een eerlijke vergelijking tussen n8n en Zapier. Ontdek welke workflow automation tool het beste past bij uw bedrijf, budget en technische mogelijkheden.
          </p>
        </header>

        {/* Quick Verdict */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-[#7c3aed]/10 border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl font-bold text-white mb-4">Ons verdict: Welke is beter?</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-[#ff6d5a]">n8n</strong> is de betere keuze voor bedrijven die willen opschalen, data privacy belangrijk vinden, of complexe workflows nodig hebben. <strong className="text-[#ff9000]">Zapier</strong> is ideaal voor kleine teams die snel willen starten zonder technische kennis.
            </p>
            <p className="text-zinc-400">
              Conclusie: n8n wint op 7 van de 10 criteria, vooral op prijs, privacy en flexibiliteit. Zapier wint op gebruiksgemak en app-aanbod.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Wat is het verschil tussen n8n en Zapier?</h2>
          <div className="bg-[#18181b] border border-white/10 rounded-[2rem] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-zinc-400 font-medium">Feature</th>
                    <th className="text-left p-6 text-[#ff6d5a] font-bold">n8n</th>
                    <th className="text-left p-6 text-[#ff9000] font-bold">Zapier</th>
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
                      <td className={`p-6 ${row.winner === 'zapier' ? 'text-[#ff9000] font-semibold' : 'text-zinc-400'}`}>
                        {row.zapier}
                        {row.winner === 'zapier' && <span className="ml-2">✓</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Workflow Architecture */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Hoe verschillen n8n en Zapier qua workflow architectuur?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#18181b] border border-[#ff6d5a]/30 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-[#ff6d5a] mb-4">n8n Workflow Model</h3>
              <p className="text-zinc-400 mb-4">
                n8n gebruikt een <strong className="text-white">node-based visual editor</strong> waarbij elke node een stap in uw workflow representeert.
              </p>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>✓ Vertakkingen (if/else, switch)</li>
                <li>✓ Loops over data arrays</li>
                <li>✓ Parallelle executie</li>
                <li>✓ Sub-workflows</li>
                <li>✓ Error branches per node</li>
                <li>✓ Merge nodes voor data combinatie</li>
              </ul>
            </div>
            <div className="bg-[#18181b] border border-[#ff9000]/30 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-[#ff9000] mb-4">Zapier Workflow Model</h3>
              <p className="text-zinc-400 mb-4">
                Zapier werkt met <strong className="text-white">lineaire "Zaps"</strong>: een trigger gevolgd door opeenvolgende acties.
              </p>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>✓ Simpele trigger → action flows</li>
                <li>✓ Paths (beperkte if/else)</li>
                <li>✓ Filters tussen stappen</li>
                <li>○ Beperkte loops (Looping by Zapier)</li>
                <li>○ Geen echte parallelle executie</li>
                <li>○ Beperkte error handling</li>
              </ul>
            </div>
          </div>
          <p className="text-zinc-400 mt-6 text-lg">
            Voor eenvoudige "als dit gebeurt, doe dat" scenarios werken beide prima. Voor complexe business logic met meerdere paden en data manipulatie is n8n krachtiger.
          </p>
        </section>

        {/* Pricing Comparison */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Welke tool is kosteneffectiever?</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Dit is waar het verschil het duidelijkst is. n8n's pricing model is fundamenteel anders dan Zapier's task-based model.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#18181b] border border-[#ff6d5a]/30 p-8 rounded-[2rem]">
              <h3 className="text-2xl font-bold text-[#ff6d5a] mb-4">n8n Prijzen</h3>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">•</span>
                  <span><strong className="text-white">Self-hosted:</strong> Gratis (serverkosten ~€10-20/maand)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">•</span>
                  <span><strong className="text-white">Cloud Starter:</strong> €20/maand (2.500 executions)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">•</span>
                  <span><strong className="text-white">Cloud Pro:</strong> €50/maand (10.000 executions)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">•</span>
                  <span><strong className="text-white">Workflows:</strong> Onbeperkt in alle plannen</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#18181b] border border-[#ff9000]/30 p-8 rounded-[2rem]">
              <h3 className="text-2xl font-bold text-[#ff9000] mb-4">Zapier Prijzen</h3>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#ff9000]">•</span>
                  <span><strong className="text-white">Free:</strong> 100 taken/maand, 5 Zaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff9000]">•</span>
                  <span><strong className="text-white">Starter:</strong> €19.99/maand (750 taken)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff9000]">•</span>
                  <span><strong className="text-white">Professional:</strong> €49/maand (2.000 taken)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff9000]">•</span>
                  <span><strong className="text-white">Team:</strong> €399/maand (50.000 taken)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-[#18181b] border border-white/10 p-6 rounded-[1.5rem]">
            <h4 className="text-white font-bold mb-3">Kostenvoorbeeld: 10.000 taken/maand</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-[#ff6d5a] font-bold">n8n:</span>
                <span className="text-zinc-400 ml-2">~€50/maand (cloud) of ~€15/maand (self-hosted)</span>
              </div>
              <div>
                <span className="text-[#ff9000] font-bold">Zapier:</span>
                <span className="text-zinc-400 ml-2">€299+/maand (Team plan nodig)</span>
              </div>
            </div>
            <p className="text-zinc-400 mt-4 text-sm">
              Bij volume bespaart n8n 70-90% op automation kosten.
            </p>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Voor- en nadelen</h2>

          {/* n8n Pros/Cons */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#ff6d5a] mb-6">n8n</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#18181b] border border-green-500/20 p-6 rounded-[1.5rem]">
                <h4 className="text-green-400 font-bold mb-4">Voordelen</h4>
                <ul className="space-y-2">
                  {n8nPros.map((pro, idx) => (
                    <li key={idx} className="text-zinc-400 text-sm flex items-start gap-2">
                      <span className="text-green-400">✓</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#18181b] border border-red-500/20 p-6 rounded-[1.5rem]">
                <h4 className="text-red-400 font-bold mb-4">Nadelen van n8n</h4>
                <ul className="space-y-2">
                  {n8nCons.map((con, idx) => (
                    <li key={idx} className="text-zinc-400 text-sm flex items-start gap-2">
                      <span className="text-red-400">✗</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Zapier Pros/Cons */}
          <div>
            <h3 className="text-2xl font-bold text-[#ff9000] mb-6">Zapier</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#18181b] border border-green-500/20 p-6 rounded-[1.5rem]">
                <h4 className="text-green-400 font-bold mb-4">Voordelen</h4>
                <ul className="space-y-2">
                  {zapierPros.map((pro, idx) => (
                    <li key={idx} className="text-zinc-400 text-sm flex items-start gap-2">
                      <span className="text-green-400">✓</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#18181b] border border-red-500/20 p-6 rounded-[1.5rem]">
                <h4 className="text-red-400 font-bold mb-4">Nadelen van Zapier</h4>
                <ul className="space-y-2">
                  {zapierCons.map((con, idx) => (
                    <li key={idx} className="text-zinc-400 text-sm flex items-start gap-2">
                      <span className="text-red-400">✗</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Welke tool heeft meer app-integraties?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              <strong className="text-[#ff9000]">Zapier wint op aantal:</strong> 6.000+ apps vs n8n's 400+ nodes. Maar dit vertelt niet het hele verhaal.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-bold mb-3">n8n's aanpak:</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• 400+ ingebouwde nodes</li>
                  <li>• HTTP Request node voor elke API</li>
                  <li>• Custom nodes kunnen worden gebouwd</li>
                  <li>• Community nodes beschikbaar</li>
                  <li>• Webhooks voor inkomende integraties</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Zapier's aanpak:</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• 6.000+ kant-en-klare integraties</li>
                  <li>• Webhooks by Zapier voor custom</li>
                  <li>• Code by Zapier (beperkt)</li>
                  <li>• Partner-gebouwde integraties</li>
                  <li>• Veel niche apps beschikbaar</li>
                </ul>
              </div>
            </div>
            <p className="text-zinc-400 mt-6">
              <strong className="text-white">Conclusie:</strong> Als u specifieke niche-apps nodig heeft (obscure CRMs, lokale tools), controleer eerst of Zapier deze ondersteunt. Voor algemene use cases en custom APIs is n8n even capabel.
            </p>
          </div>
        </section>

        {/* Do you need coding */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Heb je programmeerkennis nodig om n8n te gebruiken?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              <strong className="text-white">Kort antwoord: Nee, niet voor basis workflows.</strong> n8n heeft een visuele interface waarin u nodes kunt slepen en verbinden zonder code.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-[#ff6d5a] font-bold shrink-0">Geen code nodig:</span>
                <span className="text-zinc-400">Standaard integraties, triggers, filters, basis data mapping</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#ff6d5a] font-bold shrink-0">JavaScript helpt:</span>
                <span className="text-zinc-400">Complexe data transformatie, custom logic, API response parsing</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#ff6d5a] font-bold shrink-0">Server kennis nodig:</span>
                <span className="text-zinc-400">Self-hosting setup (of schakel een expert in)</span>
              </div>
            </div>
            <p className="text-zinc-400 mt-6">
              Vergelijking: Zapier is makkelijker voor absolute beginners. n8n vereist iets meer initiële investering maar biedt veel meer flexibiliteit op lange termijn.
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Hoe garanderen n8n en Zapier databeveiliging?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#18181b] border border-[#ff6d5a]/30 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-[#ff6d5a] mb-4">n8n Security</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span><strong className="text-white">Self-hosted:</strong> Data verlaat uw servers nooit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span><strong className="text-white">GDPR:</strong> Volledige compliance mogelijk</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span><strong className="text-white">SOC 2:</strong> Voor cloud versie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span><strong className="text-white">Credentials:</strong> Encrypted opgeslagen</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#18181b] border border-[#ff9000]/30 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-[#ff9000] mb-4">Zapier Security</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#ff9000]">•</span>
                  <span><strong className="text-white">Cloud-only:</strong> Data gaat via Zapier servers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff9000]">•</span>
                  <span><strong className="text-white">VS gehost:</strong> Data Privacy Framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff9000]">✓</span>
                  <span><strong className="text-white">SOC 2 Type II:</strong> Gecertificeerd</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff9000]">✓</span>
                  <span><strong className="text-white">Enterprise:</strong> Extra security features</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-zinc-400 mt-6 text-lg">
            <strong className="text-white">Voor GDPR en gevoelige data:</strong> n8n self-hosted is de veiligste optie omdat data nooit uw infrastructuur verlaat.
          </p>
        </section>

        {/* When to Choose */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Wanneer kiezen voor wat?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-[#ff6d5a] mb-6">Kies n8n als u:</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6d5a]">✓</span>
                  Veel workflows wilt draaien zonder hoge kosten
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6d5a]">✓</span>
                  Data privacy en GDPR belangrijk vindt
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6d5a]">✓</span>
                  Complexe, vertakte workflows nodig heeft
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6d5a]">✓</span>
                  Custom code en API integraties wilt
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6d5a]">✓</span>
                  Bereid bent iets te leren (of een expert inschakelt)
                </li>
              </ul>
            </div>
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-[#ff9000] mb-6">Kies Zapier als u:</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff9000]">✓</span>
                  Vandaag nog wilt starten zonder setup
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff9000]">✓</span>
                  Eenvoudige, lineaire workflows nodig heeft
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff9000]">✓</span>
                  Geen technische kennis in-house heeft
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff9000]">✓</span>
                  Specifieke niche-app integraties nodig heeft
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff9000]">✓</span>
                  Klein volume aan taken heeft (&lt;1000/maand)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Make comparison teaser */}
        <section className="mb-16 md:mb-24">
          <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">En Make.com dan?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Make.com (voorheen Integromat) is een derde populaire optie. Het zit qua complexiteit en prijs tussen n8n en Zapier in. Visueel sterker dan Zapier, maar cloud-only zoals Zapier.
            </p>
            <Link to="/n8n-vs-make" className="inline-flex items-center text-[#7c3aed] font-medium hover:underline">
              Lees onze n8n vs Make vergelijking →
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
            rightName="Zapier"
            rightColor="#FF4F00"
            items={[
              { feature: 'Prijs', left: 'Gratis (self-host)', right: 'Vanaf $20/mo', winner: 'left' },
              { feature: 'Integraties', left: '400+', right: '5000+', winner: 'right' },
              { feature: 'Self-hosting', left: 'Ja', right: 'Nee', winner: 'left' },
              { feature: 'Code flexibiliteit', left: 'Hoog', right: 'Beperkt', winner: 'left' },
              { feature: 'Leercurve', left: 'Medium', right: 'Laag', winner: 'right' },
              { feature: 'Data privacy', left: 'Volledig', right: 'Cloud only', winner: 'left' },
            ]}
            verdict="Kies n8n voor controle & kosten, Zapier voor eenvoud"
          />
        </section>

        {/* FAQ */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen</h2>
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

        {/* Related Pages */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl font-bold text-white mb-6">Meer over n8n en automation</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/wat-is-n8n" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              Wat is n8n? →
            </Link>
            <Link to="/n8n-vs-make" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              n8n vs Make →
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Hulp nodig bij de overstap naar n8n?</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Wij migreren uw Zapier workflows naar n8n. Behoud uw automatiseringen, verlaag uw kosten met 60-80%.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Plan een migratie gesprek
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

export default N8nVsZapierPage;
