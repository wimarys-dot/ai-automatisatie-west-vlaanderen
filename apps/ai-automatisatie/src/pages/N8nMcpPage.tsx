import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArticleSchema, BreadcrumbSchema, FAQSchema, MCPFlowChart } from '@repo/ui';

const N8nMcpPage: React.FC = () => {
  const features = [
    { title: 'Lokale Data Toegang', desc: 'Verbind AI modellen veilig met uw lokale databases, bestanden en systemen zonder data naar de cloud te sturen.', icon: '🔐' },
    { title: 'Real-time Context', desc: 'AI krijgt toegang tot actuele bedrijfsdata voor relevantere, gepersonaliseerde antwoorden.', icon: '⚡' },
    { title: 'Native n8n Integratie', desc: 'MCP Server Trigger node en MCP tools werken naadloos binnen n8n workflows.', icon: '🔗' },
    { title: 'GDPR Compliant', desc: 'Data blijft op uw eigen servers. Voldoet aan Europese privacy wetgeving.', icon: '🇪🇺' },
    { title: 'Bi-directionele Communicatie', desc: 'AI kan data lezen én acties uitvoeren in uw systemen via MCP tools.', icon: '↔️' },
    { title: 'Self-Hosted', desc: 'Volledige controle: zowel n8n als MCP servers draaien op uw infrastructuur.', icon: '🏠' },
  ];

  const mcpTools = [
    { name: 'MCP Server Trigger', desc: 'Luistert naar inkomende MCP requests en start workflows.' },
    { name: 'MCP Client Tool', desc: 'Verbindt met externe MCP servers vanuit n8n workflows.' },
    { name: 'Database MCP', desc: 'Geeft AI toegang tot SQL databases (PostgreSQL, MySQL, etc.).' },
    { name: 'Filesystem MCP', desc: 'Veilige toegang tot lokale bestanden en mappen.' },
    { name: 'Custom MCP Tools', desc: 'Bouw eigen MCP tools voor specifieke bedrijfssystemen.' },
  ];

  const useCases = [
    {
      title: 'Intelligente Klantenservice',
      desc: 'AI beantwoordt klantvragen met real-time toegang tot bestelstatus, klanthistorie en voorraad.',
      steps: ['Klant stuurt vraag', 'MCP haalt relevante data', 'AI genereert antwoord', 'Automatische response']
    },
    {
      title: 'Sales Intelligence',
      desc: 'AI analyseert CRM data en genereert gepersonaliseerde sales voorstellen op basis van klantprofiel.',
      steps: ['Lead binnenkomt', 'MCP haalt CRM data', 'AI scoort en analyseert', 'Voorstel gegenereerd']
    },
    {
      title: 'Document Processing',
      desc: 'AI verwerkt documenten met context uit uw bedrijfssystemen voor accurate classificatie.',
      steps: ['Document ontvangen', 'MCP haalt context', 'AI classificeert', 'Actie uitgevoerd']
    },
    {
      title: 'Inventory Management',
      desc: 'AI monitort voorraadniveaus en genereert automatisch inkooporders op basis van historische data.',
      steps: ['Voorraad check', 'MCP haalt trends', 'AI voorspelt behoefte', 'Order gecreëerd']
    },
  ];

  const faqs = [
    {
      q: 'Wat is n8n en wat is MCP?',
      a: 'n8n is een open-source workflow automation platform waarmee u bedrijfsprocessen kunt automatiseren. MCP (Model Context Protocol) is een standaard ontwikkeld door Anthropic die AI modellen in staat stelt veilig te communiceren met externe databronnen. Samen stellen ze AI in staat om beslissingen te nemen op basis van uw actuele bedrijfsdata.'
    },
    {
      q: 'Hoe werkt de n8n MCP Server Trigger node?',
      a: 'De MCP Server Trigger node in n8n luistert naar inkomende MCP requests. Wanneer een AI model (zoals Claude) via MCP om data vraagt of een actie wil uitvoeren, triggert dit de workflow. De workflow kan dan data ophalen, verwerken, en terugsturen naar het AI model.'
    },
    {
      q: 'Hoe kan ik n8n installeren en configureren voor MCP?',
      a: 'n8n kan self-hosted worden via Docker of npm. Voor MCP integratie heeft u de MCP nodes nodig die standaard in n8n zitten. Configuratie omvat: 1) n8n installeren, 2) MCP Server Trigger toevoegen aan workflow, 3) Credentials configureren, 4) Tools/resources definiëren die beschikbaar zijn via MCP.'
    },
    {
      q: 'Welke MCP tools zijn beschikbaar voor n8n?',
      a: 'n8n ondersteunt: MCP Server Trigger (voor inkomende requests), MCP Client Tool (verbinden met externe MCP servers), en de mogelijkheid om uw eigen n8n workflows als MCP tools beschikbaar te stellen. Daarnaast zijn er community MCP servers voor databases, filesystems, APIs, en meer.'
    },
    {
      q: 'Hoe integreer ik AI-agents met MCP in n8n?',
      a: 'In n8n kunt u AI-agents bouwen die MCP gebruiken door: 1) Een AI Agent node te configureren met een LLM (OpenAI, Claude, etc.), 2) MCP tools beschikbaar te stellen aan de agent, 3) De agent kan dan zelfstandig beslissen welke tools te gebruiken op basis van de taak.'
    },
    {
      q: 'Kan ik MCP gebruiken met mijn lokale n8n instance?',
      a: 'Ja, dat is juist een van de sterke punten. Met self-hosted n8n en MCP servers die lokaal draaien, verlaat uw data nooit uw infrastructuur. AI modellen krijgen toegang tot context zonder dat gevoelige data naar externe servers gaat.'
    },
    {
      q: 'Hoe kan ik workflows blootleggen als MCP tools?',
      a: 'Met de MCP Server Trigger node kunt u elke n8n workflow beschikbaar maken als MCP tool. AI modellen kunnen deze dan aanroepen als onderdeel van hun redenering. Dit maakt complexe bedrijfslogica beschikbaar voor AI zonder code te schrijven.'
    },
    {
      q: 'Heb ik een ChatGPT of Claude abonnement nodig?',
      a: 'Voor de AI kant heeft u toegang nodig tot een LLM. Dit kan via OpenAI API, Anthropic API (Claude), of lokale modellen zoals Ollama. MCP zelf is een open protocol - de implementatie in n8n is gratis als onderdeel van de open-source versie.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>n8n MCP Integratie | Model Context Protocol in Workflows | AI Data Access</title>
        <meta name="description" content="n8n en MCP integratie. Geef AI agents veilige toegang tot uw bedrijfsdata. Local-first, GDPR compliant, real-time context voor intelligente automation." />
        <link rel="canonical" href="https://ai-automatisatie.be/n8n-mcp" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "n8n MCP", url: "https://ai-automatisatie.be/n8n-mcp" }
      ]} />
      <ArticleSchema
        headline="n8n MCP Integratie | Model Context Protocol in Workflows | AI Data Access"
        description="n8n en MCP integratie. Geef AI agents veilige toegang tot uw bedrijfsdata. Local-first, GDPR compliant, real-time context voor intelligente automation."
        url="https://ai-automatisatie.be/n8n-mcp"
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs.map(faq => ({ question: faq.q, answer: faq.a }))} />
      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
        <header className="mb-16 md:mb-24">
          <div className="text-[#0ea5e9] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Integratie</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            <span className="text-[#ff6d5a]">n8n</span> + <span className="text-[#0ea5e9]">MCP</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            Combineer n8n workflow automation met het Model Context Protocol. Geef AI-agents veilige toegang tot uw lokale bedrijfsdata voor intelligente automatisering.
          </p>
        </header>

        {/* What is n8n and MCP */}
        <section className="mb-16 md:mb-24">
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Wat is n8n en wat is MCP?</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-[#ff6d5a] font-bold text-lg mb-3">n8n</h3>
                <p className="text-zinc-400 leading-relaxed">
                  <Link to="/wat-is-n8n" className="text-[#ff6d5a] hover:underline">n8n</Link> is een open-source workflow automation platform. Het verbindt apps, verwerkt data, en automatiseert bedrijfsprocessen via een visuele interface. Self-hosted of cloud.
                </p>
              </div>
              <div>
                <h3 className="text-[#0ea5e9] font-bold text-lg mb-3">MCP (Model Context Protocol)</h3>
                <p className="text-zinc-400 leading-relaxed">
                  MCP is een open standaard ontwikkeld door Anthropic die AI modellen in staat stelt veilig te communiceren met externe databronnen. Het biedt een gestandaardiseerde manier voor AI om context te krijgen.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#ff6d5a]/10 to-[#0ea5e9]/10 border border-white/10 p-6 rounded-xl">
              <p className="text-zinc-300">
                <strong className="text-white">Samen:</strong> n8n + MCP stelt AI-agents in staat om beslissingen te nemen op basis van uw <strong className="text-[#ff6d5a]">actuele bedrijfsdata</strong> - klantgegevens, voorraadniveaus, openstaande orders - allemaal zonder dat data uw infrastructuur verlaat.
              </p>
            </div>
          </div>
        </section>

        {/* How the MCP Server Trigger works */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Hoe werkt de n8n MCP Server Trigger?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              De MCP Server Trigger node in n8n maakt uw workflows beschikbaar als tools voor AI modellen. Dit is hoe het werkt:
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7c3aed]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="text-white font-bold mb-2">AI Request</h4>
                <p className="text-zinc-400 text-sm">AI model vraagt data of actie via MCP</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0ea5e9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💠</span>
                </div>
                <h4 className="text-white font-bold mb-2">MCP Trigger</h4>
                <p className="text-zinc-400 text-sm">n8n ontvangt request en start workflow</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ff6d5a]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-white font-bold mb-2">Workflow</h4>
                <p className="text-zinc-400 text-sm">Data ophalen, verwerken, transformeren</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h4 className="text-white font-bold mb-2">Response</h4>
                <p className="text-zinc-400 text-sm">Resultaat terug naar AI model</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Voordelen van n8n met MCP</h2>
          <p className="text-zinc-400 text-lg mb-8">
            De combinatie van n8n en MCP biedt unieke voordelen voor bedrijfsautomatisering:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-[#18181b] border border-white/5 hover:border-[#0ea5e9]/40 p-6 rounded-[2rem] transition-all">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Available MCP Tools */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Welke MCP tools zijn beschikbaar voor n8n?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              n8n biedt native MCP ondersteuning plus toegang tot het groeiende ecosysteem van community MCP servers:
            </p>
            <div className="space-y-4">
              {mcpTools.map((tool, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl">
                  <span className="text-[#0ea5e9] font-bold shrink-0">•</span>
                  <div>
                    <h4 className="text-white font-bold">{tool.name}</h4>
                    <p className="text-zinc-400 text-sm">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Use cases voor n8n en MCP integratie</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Dit zijn concrete toepassingen waar n8n + MCP waarde toevoegt:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-[#18181b] border border-white/10 p-6 rounded-[2rem]">
                <h3 className="text-lg font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{useCase.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.steps.map((step, stepIdx) => (
                    <span key={stepIdx} className="bg-[#0ea5e9]/10 text-[#0ea5e9] text-xs px-3 py-1 rounded-full">
                      {stepIdx + 1}. {step}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to integrate AI agents with MCP */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Hoe integreer ik AI-agents met MCP in n8n?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              n8n's AI Agent nodes kunnen MCP tools gebruiken voor intelligente, contextbewuste automatisering:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">1</span>
                <div>
                  <h4 className="text-white font-bold">Configureer AI Agent Node</h4>
                  <p className="text-zinc-400">Kies een LLM (OpenAI GPT-4, Claude, Ollama) en configureer de agent prompt.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">2</span>
                <div>
                  <h4 className="text-white font-bold">Voeg MCP Tools Toe</h4>
                  <p className="text-zinc-400">Koppel MCP servers die toegang bieden tot uw databases, APIs, of bestanden.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">3</span>
                <div>
                  <h4 className="text-white font-bold">Agent Besluit Zelf</h4>
                  <p className="text-zinc-400">De AI agent beslist autonoom welke MCP tools aan te roepen op basis van de taak.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">4</span>
                <div>
                  <h4 className="text-white font-bold">Actie Uitvoeren</h4>
                  <p className="text-zinc-400">Op basis van de verkregen context voert de agent de gewenste actie uit.</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/n8n-ai-agent" className="inline-flex items-center text-[#7c3aed] font-medium hover:underline">
                Meer over n8n AI Agents →
              </Link>
            </div>
          </div>
        </section>

        {/* Workflows as MCP Tools */}
        <section className="mb-16 md:mb-24">
          <div className="bg-gradient-to-br from-[#0ea5e9]/10 to-transparent border border-[#0ea5e9]/20 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Workflows blootleggen als MCP tools</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Een van de krachtigste features: u kunt <strong className="text-white">elke n8n workflow beschikbaar maken als MCP tool</strong>. AI modellen kunnen deze dan aanroepen als onderdeel van hun redenering.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-xl">
                <h4 className="text-white font-bold mb-3">Voorbeeld: "check_inventory" tool</h4>
                <p className="text-zinc-400 text-sm mb-3">Een workflow die voorraad checkt in uw ERP wordt beschikbaar als MCP tool.</p>
                <code className="text-[#0ea5e9] text-sm bg-black/30 px-3 py-1 rounded">AI: "Check inventory for product SKU-123"</code>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h4 className="text-white font-bold mb-3">Voorbeeld: "send_quote" tool</h4>
                <p className="text-zinc-400 text-sm mb-3">Een workflow die offertes genereert en verstuurt wordt aanroepbaar door AI.</p>
                <code className="text-[#0ea5e9] text-sm bg-black/30 px-3 py-1 rounded">AI: "Send quote to client for €5000"</code>
              </div>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Hoe kan ik n8n installeren voor MCP?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              MCP ondersteuning is ingebouwd in n8n. Hier is hoe u start:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-xl">
                <h4 className="text-white font-bold mb-3">Self-Hosted (Docker)</h4>
                <div className="bg-black/30 p-4 rounded-lg overflow-x-auto">
                  <code className="text-[#0ea5e9] text-sm whitespace-pre">
{`docker run -it --rm \\
  -p 5678:5678 \\
  n8nio/n8n`}
                  </code>
                </div>
                <p className="text-zinc-400 text-sm mt-3">Lokale data blijft lokaal. Ideaal voor GDPR.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h4 className="text-white font-bold mb-3">n8n Cloud</h4>
                <p className="text-zinc-400 mb-3">Start direct zonder setup op cloud.n8n.io. MCP nodes zijn beschikbaar in alle plannen.</p>
                <p className="text-zinc-400 text-sm">Snelste start, managed infrastructure.</p>
              </div>
            </div>
            <p className="text-zinc-400 mt-6">
              Na installatie: voeg een MCP Server Trigger node toe aan uw workflow, configureer de beschikbare tools/resources, en verbind met uw AI applicatie.
            </p>
          </div>
        </section>

        {/* MCP Flow Infographic */}
        <MCPFlowChart
          title="n8n + MCP Data Flow"
          subtitle="Veilige AI toegang tot uw bedrijfsdata"
        />

        {/* FAQ */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen over n8n MCP</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-[#18181b] border border-white/5 rounded-[1.5rem] overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-white pr-4">{faq.q}</h3>
                  <span className="text-[#0ea5e9] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Meer lezen</h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/mcp-protocol" className="bg-[#0ea5e9]/20 text-[#0ea5e9] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0ea5e9]/30 transition">
              MCP Protocol uitleg →
            </Link>
            <Link to="/wat-is-n8n" className="bg-[#ff6d5a]/20 text-[#ff6d5a] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#ff6d5a]/30 transition">
              Wat is n8n? →
            </Link>
            <Link to="/n8n-ai-agent" className="bg-[#7c3aed]/20 text-[#7c3aed] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#7c3aed]/30 transition">
              n8n AI Agent →
            </Link>
            <Link to="/ai-agents" className="bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition">
              AI Agents Diensten →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-white/5">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">n8n + MCP implementatie nodig?</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Wij helpen u met het opzetten van MCP servers en de integratie met uw n8n workflows. Van concept tot productie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Neem contact op
            </Link>
            <Link
              to="/mcp-protocol"
              className="inline-block bg-[#0ea5e9] hover:bg-[#38bdf8] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#0ea5e9]/20 hover:scale-105"
            >
              Meer over MCP
            </Link>
          </div>
        </section>
      </article>
      </div>
    </>
  );
};

export default N8nMcpPage;
