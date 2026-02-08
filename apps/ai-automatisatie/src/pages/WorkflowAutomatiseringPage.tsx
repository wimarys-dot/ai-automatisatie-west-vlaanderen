import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArticleSchema, BreadcrumbSchema, FAQSchema, WorkflowBenefits } from '@repo/ui';

const WorkflowAutomatiseringPage: React.FC = () => {
  const steps = [
    { title: 'Analyse', desc: 'We brengen uw huidige processen in kaart en identificeren bottlenecks en automatiseringskansen.' },
    { title: 'Design', desc: 'We ontwerpen geoptimaliseerde workflows met duidelijke triggers, condities en acties.' },
    { title: 'Implementatie', desc: 'We bouwen de workflows in n8n met robuuste error handling en logging.' },
    { title: 'Monitoring', desc: 'We zetten monitoring op, testen grondig, en optimaliseren continu.' },
  ];

  const workflowTypes = [
    {
      type: 'Sequentiële Workflows',
      desc: 'Taken worden in een vaste volgorde uitgevoerd. Elke stap moet voltooid zijn voor de volgende begint.',
      example: 'Factuurverwerking: ontvangen → valideren → goedkeuren → betalen',
      icon: '➡️'
    },
    {
      type: 'Parallelle Workflows',
      desc: 'Meerdere taken worden tegelijkertijd uitgevoerd. Versnelt processen met onafhankelijke stappen.',
      example: 'Onboarding: accounts aanmaken + documenten versturen + trainingen plannen',
      icon: '⚡'
    },
    {
      type: 'Conditionele Workflows',
      desc: 'De workflow volgt verschillende paden afhankelijk van data of beslissingen (if-then-else logica).',
      example: 'Lead routing: bedrag > €10k → sales director, anders → account manager',
      icon: '🔀'
    },
  ];

  const benefits = [
    { title: 'Tijdsbesparing', desc: 'Elimineer uren aan repetitief werk per week. Medewerkers focussen op waardevol werk.', stat: '70%', statLabel: 'minder handmatig werk' },
    { title: 'Foutreductie', desc: 'Geen typefouten, vergeten stappen, of inconsistente data meer.', stat: '99%', statLabel: 'minder fouten' },
    { title: 'Snelheid', desc: 'Processen die dagen duurden lopen nu in minuten. 24/7 beschikbaar.', stat: '3x', statLabel: 'snellere doorlooptijd' },
    { title: 'Schaalbaarheid', desc: 'Van 10 naar 10.000 transacties zonder extra personeel.', stat: '∞', statLabel: 'schaalbaar' },
    { title: 'Compliance', desc: 'Elke stap wordt gelogd. Perfecte audit trails voor compliance.', stat: '100%', statLabel: 'traceerbaarheid' },
    { title: 'Kostenbesparing', desc: 'ROI vaak binnen maanden. Lagere operationele kosten op lange termijn.', stat: '40%', statLabel: 'kostenbesparing' },
  ];

  const examples = [
    {
      title: 'Sales Pipeline Automatisering',
      before: 'Handmatig leads invoeren in CRM, emails versturen, follow-ups bijhouden in spreadsheets',
      after: 'Automatische lead capture, gepersonaliseerde email sequences, AI-gestuurde lead scoring, reminder workflows',
      savings: '15+ uur/week'
    },
    {
      title: 'Facturatie & Betalingen',
      before: 'Handmatig facturen maken in Word, versturen via email, betalingen opvolgen in Excel',
      after: 'Automatische factuurgeneratie uit orders, verzending, betalingsreminders, en boekhoudintegratie',
      savings: '8+ uur/week'
    },
    {
      title: 'HR Onboarding',
      before: 'Handmatig documenten versturen, accounts aanmaken in elk systeem, trainingen plannen via email',
      after: 'Geautomatiseerde onboarding flow: contracts genereren, accounts provisionen, trainingsschema, check-ins',
      savings: '10+ uur per nieuwe medewerker'
    },
    {
      title: 'Klantenservice',
      before: 'Handmatig tickets categoriseren, routeren naar juiste team, status updates versturen',
      after: 'AI-gestuurde ticket classificatie, automatische routing, proactieve status updates naar klant',
      savings: '20+ uur/week'
    },
  ];

  const faqs = [
    {
      q: 'Wat is workflowautomatisering?',
      a: 'Workflowautomatisering is het gebruik van software om bedrijfsprocessen te stroomlijnen door handmatige, repetitieve taken te vervangen door automatische acties. U definieert triggers (wanneer start iets?) en acties (wat moet er gebeuren?), en de software voert het proces automatisch uit.'
    },
    {
      q: 'Wat zijn de drie soorten workflows?',
      a: 'Er zijn drie hoofdtypen: 1) Sequentiële workflows - taken in vaste volgorde, 2) Parallelle workflows - meerdere taken tegelijk, en 3) Conditionele workflows - verschillende paden afhankelijk van data. In de praktijk combineren complexe workflows vaak alle drie types.'
    },
    {
      q: 'Wat zijn voorbeelden van workflowautomatisering?',
      a: 'Veelvoorkomende voorbeelden: email automatisering (welkom emails, follow-ups), facturatieprocessen, lead nurturing, HR onboarding, rapportage generatie, data synchronisatie tussen systemen, en klantenservice ticket routing. Vrijwel elk repetitief proces kan worden geautomatiseerd.'
    },
    {
      q: 'Wat zijn de voordelen van workflowautomatisering?',
      a: 'De belangrijkste voordelen: tijdsbesparing (70%+ minder handmatig werk), foutreductie (99% minder fouten), snellere doorlooptijd (3x sneller), schaalbaarheid (geen extra personeel nodig), betere compliance (complete audit trails), en kostenbesparing (40%+ op operationele kosten).'
    },
    {
      q: 'Hoe werkt workflowautomatisering?',
      a: 'Een workflow start met een trigger (bijv. nieuwe email, formulier inzending, tijd). Dan volgen acties in een bepaalde volgorde of parallel. Condities bepalen welk pad gevolgd wordt. Alles wordt gelogd voor monitoring. Tools zoals n8n maken dit visueel en toegankelijk.'
    },
    {
      q: 'Welke tools zijn er voor workflowautomatisering?',
      a: 'Populaire tools zijn n8n (open-source, self-hosted), Zapier (gebruiksvriendelijk), Make (visueel), en enterprise oplossingen zoals Workato. Wij werken met n8n vanwege de flexibiliteit, kosten, en data privacy mogelijkheden.'
    },
    {
      q: 'Hoe implementeer je workflowautomatisering?',
      a: 'Succesvolle implementatie verloopt in stappen: 1) Identificeer repetitieve, tijdrovende processen, 2) Breng het huidige proces in kaart, 3) Ontwerp de geautomatiseerde workflow, 4) Bouw en test in een automation platform, 5) Monitor en optimaliseer. Start klein met high-impact workflows.'
    },
    {
      q: 'Hoe kies je software voor workflowautomatisering?',
      a: 'Overweeg: complexiteit van uw workflows, budget (per-taak vs vast), data privacy vereisten (self-hosting nodig?), technische capaciteit van uw team, benodigde integraties, en schaalbaarheid. Voor de meeste MKB bedrijven is n8n de beste keuze qua prijs-kwaliteit.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Workflow Automatisering | Bedrijfsprocessen Automatiseren | Complete Gids</title>
        <meta name="description" content="Workflow automatisering voor bedrijven. Soorten workflows, voordelen, ROI berekening en implementatie. Van sales pipeline tot facturatie." />
        <link rel="canonical" href="https://ai-automatisatie.be/workflow-automatisering" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "Workflow Automatisering", url: "https://ai-automatisatie.be/workflow-automatisering" }
      ]} />
      <ArticleSchema
        headline="Workflow Automatisering | Bedrijfsprocessen Automatiseren | Complete Gids"
        description="Workflow automatisering voor bedrijven. Soorten workflows, voordelen, ROI berekening en implementatie. Van sales pipeline tot facturatie."
        url="https://ai-automatisatie.be/workflow-automatisering"
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs.map(faq => ({ question: faq.q, answer: faq.a }))} />
      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
        <header className="mb-16 md:mb-24">
          <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Kennisbank</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            Workflow <span className="text-[#ff6d5a]">Automatisering</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            Transformeer handmatige, tijdrovende processen in efficiënte, geautomatiseerde workflows die 24/7 draaien zonder fouten.
          </p>
        </header>

        {/* What is Workflow Automation */}
        <section className="mb-16 md:mb-24">
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Wat is workflowautomatisering?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Workflowautomatisering is het gebruik van technologie om bedrijfsprocessen te stroomlijnen door handmatige, repetitieve taken te vervangen door automatische acties. In plaats van handmatig werk te doen, definieert u:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-[#ff6d5a] font-bold mb-2">Triggers</h4>
                <p className="text-zinc-400 text-sm">Wanneer start het proces? (nieuwe email, formulier, tijd, webhook)</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-[#ff6d5a] font-bold mb-2">Condities</h4>
                <p className="text-zinc-400 text-sm">Welke regels bepalen het pad? (if-then-else logica)</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-[#ff6d5a] font-bold mb-2">Acties</h4>
                <p className="text-zinc-400 text-sm">Wat moet er gebeuren? (data verwerken, emails sturen, records maken)</p>
              </div>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Een workflow kan simpel zijn ("stuur een email wanneer een formulier wordt ingevuld") of complex ("verwerk een bestelling door 10 systemen met conditonele logica en AI-beslissingen").
            </p>
          </div>
        </section>

        {/* Three Types of Workflows */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Wat zijn de drie soorten workflows?</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Er zijn drie hoofdtypen geautomatiseerde workflows, elk met eigen toepassingen:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {workflowTypes.map((wf, idx) => (
              <div key={idx} className="bg-[#18181b] border border-white/5 p-6 rounded-[2rem]">
                <div className="text-4xl mb-4">{wf.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{wf.type}</h3>
                <p className="text-zinc-400 mb-4">{wf.desc}</p>
                <div className="bg-white/5 p-3 rounded-lg">
                  <p className="text-zinc-400 text-sm"><strong className="text-zinc-400">Voorbeeld:</strong> {wf.example}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-zinc-400 mt-6 text-lg">
            In de praktijk combineren complexe bedrijfsworkflows vaak alle drie types voor optimale efficiëntie.
          </p>
        </section>

        {/* How it Works */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Hoe werkt workflowautomatisering?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ff6d5a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-white font-bold mb-2">Trigger</h4>
                <p className="text-zinc-400 text-sm">Een event start de workflow (email, formulier, tijd, API call)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ff6d5a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-white font-bold mb-2">Verwerking</h4>
                <p className="text-zinc-400 text-sm">Data wordt opgehaald, getransformeerd, en verrijkt</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ff6d5a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-white font-bold mb-2">Beslissing</h4>
                <p className="text-zinc-400 text-sm">Condities bepalen welke acties worden uitgevoerd</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ff6d5a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="text-white font-bold mb-2">Actie</h4>
                <p className="text-zinc-400 text-sm">Systemen worden bijgewerkt, emails verstuurd, records aangemaakt</p>
              </div>
            </div>
            <p className="text-zinc-400 mt-8 text-center">
              Alles wordt gelogd voor monitoring, debugging en compliance. Bij fouten worden automatisch alerts verstuurd.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Wat zijn de voordelen van workflowautomatisering?</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Workflowautomatisering biedt meetbare voordelen voor elk bedrijf:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-[#18181b] border border-white/5 p-6 rounded-[2rem]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl font-black text-[#ff6d5a]">{benefit.stat}</div>
                  <div className="text-zinc-400 text-sm">{benefit.statLabel}</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Examples */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Voorbeelden van workflowautomatisering</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Dit zijn concrete voorbeelden van workflows die wij voor klanten implementeren:
          </p>
          <div className="space-y-6">
            {examples.map((example, idx) => (
              <div key={idx} className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-6">{example.title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-2">
                      <span>❌</span> VOOR automatisering
                    </div>
                    <p className="text-zinc-400">{example.before}</p>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-sm mb-2 flex items-center gap-2">
                      <span>✓</span> NA automatisering
                    </div>
                    <p className="text-zinc-400">{example.after}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <span className="text-[#ff6d5a] font-bold">Tijdsbesparing: {example.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Process */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Hoe implementeer je workflowautomatisering?</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Succesvolle implementatie verloopt in duidelijke fases:
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-[#18181b] border border-white/5 p-6 rounded-[1.5rem] relative">
                <div className="text-[#ff6d5a] font-black text-6xl opacity-20 absolute top-2 right-4">{idx + 1}</div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-zinc-400 text-sm relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#ff6d5a]/10 border border-[#ff6d5a]/20 p-6 rounded-xl">
            <p className="text-zinc-300">
              <strong className="text-[#ff6d5a]">Tip:</strong> Start met één high-impact workflow, meet de resultaten, en schaal dan op. Dit minimaliseert risico en toont snel ROI.
            </p>
          </div>
        </section>

        {/* Tools */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Welke tools zijn er voor workflowautomatisering?</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Er zijn veel tools beschikbaar. Dit zijn onze aanbevelingen:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/wat-is-n8n" className="group bg-[#18181b] border border-[#ff6d5a]/30 hover:border-[#ff6d5a]/60 p-8 rounded-[2rem] transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#ff6d5a] mb-3">n8n</h3>
              <p className="text-zinc-400 mb-4">Open-source, self-hosted of cloud. Onze primaire automation engine vanwege flexibiliteit en kosten.</p>
              <span className="text-[#ff6d5a] text-sm">Onze keuze →</span>
            </Link>
            <Link to="/ai-automatisering" className="group bg-[#18181b] border border-white/5 hover:border-[#7c3aed]/40 p-8 rounded-[2rem] transition-all">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Automatisering</h3>
              <p className="text-zinc-400 mb-4">Voor workflows die intelligente beslissingen vereisen. Combineer n8n met AI modellen.</p>
              <span className="text-zinc-400 text-sm">Lees meer →</span>
            </Link>
            <Link to="/mcp-protocol" className="group bg-[#18181b] border border-white/5 hover:border-[#0ea5e9]/40 p-8 rounded-[2rem] transition-all">
              <div className="text-4xl mb-4">💠</div>
              <h3 className="text-xl font-bold text-white mb-3">MCP Protocol</h3>
              <p className="text-zinc-400 mb-4">Voor veilige verbinding met lokale databases en systemen. Ideaal voor gevoelige data.</p>
              <span className="text-zinc-400 text-sm">Lees meer →</span>
            </Link>
          </div>
          <div className="mt-8">
            <h4 className="text-white font-bold mb-4">Hoe kies je software voor workflowautomatisering?</h4>
            <div className="grid md:grid-cols-2 gap-4 text-zinc-400">
              <div className="flex items-start gap-2">
                <span className="text-[#ff6d5a]">•</span>
                <span><strong className="text-white">Budget:</strong> Per-taak pricing (Zapier) vs vast (n8n)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#ff6d5a]">•</span>
                <span><strong className="text-white">Privacy:</strong> Cloud-only vs self-hosting optie</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#ff6d5a]">•</span>
                <span><strong className="text-white">Complexiteit:</strong> Simpele Zaps vs geavanceerde flows</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#ff6d5a]">•</span>
                <span><strong className="text-white">Team:</strong> No-code vs low-code vs pro-code</span>
              </div>
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className="mb-16 md:mb-24">
          <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Hoe kan uw bedrijf profiteren van workflowautomatisering?</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Vrijwel elk bedrijf heeft repetitieve processen die geautomatiseerd kunnen worden. De ROI is vaak binnen maanden zichtbaar:
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">70%</div>
                <p className="text-zinc-400">Reductie in handmatig werk</p>
              </div>
              <div>
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">3x</div>
                <p className="text-zinc-400">Snellere doorlooptijd</p>
              </div>
              <div>
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">~0</div>
                <p className="text-zinc-400">Menselijke fouten</p>
              </div>
            </div>
          </div>
        </section>

        {/* Infographic */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            Workflow Automatisering <span className="text-[#ff6d5a]">Overzicht</span>
          </h2>
          <WorkflowBenefits />
        </section>

        {/* FAQ */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen over workflowautomatisering</h2>
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
          <h2 className="text-2xl font-bold text-white mb-6">Meer over automatisering</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/wat-is-n8n" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              Wat is n8n? →
            </Link>
            <Link to="/ai-automatisering" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              AI Automatisering →
            </Link>
            <Link to="/n8n-vs-zapier" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              n8n vs Zapier →
            </Link>
            <Link to="/n8n-vs-make" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              n8n vs Make →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-white/5">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Klaar om te automatiseren?</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Laat ons uw processen analyseren en ontdek hoeveel tijd en geld u kunt besparen met workflow automatisering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Vraag een gratis audit aan
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

export default WorkflowAutomatiseringPage;
