import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, ExpertQuote, FAQSchema, MCPFlowChart, ServiceSchema } from '@repo/ui';

const McpPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { title: 'SQL Connectivity', desc: 'Directe verbinding met PostgreSQL, MySQL, MS SQL en meer via gestandaardiseerde interface.', icon: '🗄️' },
    { title: 'Local-First Privacy', desc: 'Uw data blijft op uw servers. Alleen queries gaan naar de AI, niet de ruwe data.', icon: '🔒' },
    { title: 'Real-time Context', desc: 'AI heeft direct toegang tot actuele stock-niveaus, orders en klantgegevens.', icon: '⚡' },
    { title: 'No Training', desc: 'Uw data wordt niet gebruikt om AI modellen te trainen. 100% privacy gegarandeerd.', icon: '🛡️' },
  ];

  const useCases = [
    {
      title: 'Klantenservice AI',
      desc: 'AI agent met toegang tot volledige klanthistorie',
      benefits: ['Instant toegang tot orderhistorie', 'Gepersonaliseerde antwoorden', 'Escalatie bij complexe vragen', 'Meertalige support']
    },
    {
      title: 'Sales Intelligence',
      desc: 'AI die uw CRM data analyseert voor inzichten',
      benefits: ['Lead scoring op basis van data', 'Cross-sell suggesties', 'Pipeline voorspellingen', 'Klantgedrag analyse']
    },
    {
      title: 'Operationele AI',
      desc: 'AI met real-time toegang tot productie en voorraad',
      benefits: ['Stock niveau monitoring', 'Productie bottleneck detectie', 'Supply chain inzichten', 'Automatische alerts']
    },
  ];

  const howItWorks = [
    { step: 1, title: 'MCP Server Setup', desc: 'Wij installeren een MCP server die veilig verbindt met uw database.' },
    { step: 2, title: 'Schema Definitie', desc: 'We definiëren welke data de AI mag bevragen en met welke beperkingen.' },
    { step: 3, title: 'AI Integratie', desc: 'De MCP server wordt gekoppeld aan Claude, ChatGPT of een lokaal AI model.' },
    { step: 4, title: 'Query Validatie', desc: 'Elke query wordt gevalideerd tegen uw security policies voor uitvoering.' },
  ];

  const comparisons = [
    { aspect: 'Data Locatie', traditional: 'Geupload naar cloud', mcp: 'Blijft op uw servers' },
    { aspect: 'Privacy', traditional: 'Data kan getraind worden', mcp: '100% privé' },
    { aspect: 'Actualiteit', traditional: 'Snapshots, vaak verouderd', mcp: 'Real-time queries' },
    { aspect: 'Beveiliging', traditional: 'Afhankelijk van derde partij', mcp: 'Uw eigen controle' },
    { aspect: 'Compliance', traditional: 'GDPR risico', mcp: 'GDPR compliant by design' },
  ];

  const faqs = [
    {
      q: 'Wat is MCP (Model Context Protocol)?',
      a: 'MCP is een open standaard ontwikkeld door Anthropic (makers van Claude) die AI modellen in staat stelt om veilig verbinding te maken met externe databronnen. Het protocol zorgt ervoor dat de AI queries kan uitvoeren op uw database zonder dat de ruwe data ooit uw servers verlaat.'
    },
    {
      q: 'Is MCP veilig voor gevoelige bedrijfsdata?',
      a: 'Ja, MCP is ontworpen met security als prioriteit. De AI krijgt alleen toegang tot data via gecontroleerde queries, niet tot de volledige database. U bepaalt exact welke tabellen en kolommen toegankelijk zijn, en alle queries worden gelogd voor audit.'
    },
    {
      q: 'Welke databases worden ondersteund?',
      a: 'MCP ondersteunt alle gangbare databases: PostgreSQL, MySQL, MS SQL Server, SQLite, MongoDB en meer. Ook integraties met ERP systemen zoals SAP, Exact en Microsoft Dynamics zijn mogelijk via API-koppelingen.'
    },
    {
      q: 'Wat is het verschil met RAG (Retrieval Augmented Generation)?',
      a: 'Bij RAG wordt uw data geïndexeerd in een vector database, vaak in de cloud. MCP houdt uw data op uw eigen servers en laat de AI alleen gecontroleerde queries uitvoeren. MCP biedt betere privacy en real-time data, terwijl RAG beter is voor ongestructureerde documenten.'
    },
    {
      q: 'Hoe lang duurt een MCP implementatie?',
      a: 'Een basis MCP implementatie duurt typisch 1-2 weken, afhankelijk van de complexiteit van uw database en security requirements. Dit omvat setup, configuratie, testen en documentatie.'
    },
    {
      q: 'Wat kost MCP implementatie?',
      a: 'MCP implementatie begint vanaf €3.000 voor een standaard setup met één database. Complexere implementaties met meerdere bronnen of uitgebreide security requirements worden op maat geprijsd na een gratis analyse.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>MCP Implementatie | Model Context Protocol | AI Database Koppeling</title>
        <meta name="description" content="MCP (Model Context Protocol) implementatie voor veilige AI toegang tot uw bedrijfsdata. Local-first privacy, real-time queries, GDPR compliant. Expert setup in West-Vlaanderen." />
        <link rel="canonical" href="https://ai-automatisatie.be/mcp-protocol" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "MCP Protocol", url: "https://ai-automatisatie.be/mcp-protocol" }
      ]} />

      <ServiceSchema
        name="MCP Implementatie"
        description="Model Context Protocol implementatie voor veilige AI toegang tot uw bedrijfsdata. Local-first privacy, real-time queries, GDPR compliant."
        url="https://ai-automatisatie.be/mcp-protocol"
        priceRange="€3000 - €10000"
      />

      <FAQSchema faqs={[
        { question: "Wat is MCP (Model Context Protocol)?", answer: "MCP is een open standaard ontwikkeld door Anthropic die AI modellen in staat stelt om veilig verbinding te maken met externe databronnen. Het protocol zorgt ervoor dat de AI queries kan uitvoeren op uw database zonder dat de ruwe data ooit uw servers verlaat." },
        { question: "Is MCP veilig voor gevoelige bedrijfsdata?", answer: "Ja, MCP is ontworpen met security als prioriteit. De AI krijgt alleen toegang tot data via gecontroleerde queries, niet tot de volledige database. U bepaalt exact welke tabellen en kolommen toegankelijk zijn, en alle queries worden gelogd voor audit." },
        { question: "Welke databases worden ondersteund?", answer: "MCP ondersteunt alle gangbare databases: PostgreSQL, MySQL, MS SQL Server, SQLite, MongoDB en meer. Ook integraties met ERP systemen zoals SAP, Exact en Microsoft Dynamics zijn mogelijk." },
        { question: "Wat is het verschil met RAG (Retrieval Augmented Generation)?", answer: "Bij RAG wordt uw data geïndexeerd in een vector database, vaak in de cloud. MCP houdt uw data op uw eigen servers en laat de AI alleen gecontroleerde queries uitvoeren. MCP biedt betere privacy en real-time data." },
        { question: "Hoe lang duurt een MCP implementatie?", answer: "Een basis MCP implementatie duurt typisch 1-2 weken, afhankelijk van de complexiteit van uw database en security requirements." },
        { question: "Wat kost MCP implementatie?", answer: "MCP implementatie begint vanaf €3.000 voor een standaard setup met één database. Complexere implementaties worden op maat geprijsd na een gratis analyse." }
      ]} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="text-[#0ea5e9] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Protocol Mastery</div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                  MCP: De <span className="text-[#0ea5e9]">Standaard</span> voor AI Data
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-8">
                  Model Context Protocol (MCP) is de ontbrekende schakel tussen krachtige AI modellen en uw private bedrijfsdata. Als open standaard voor AI data connectivity implementeren wij MCP servers die uw databases veilig ontsluiten voor grounded AI en retrieval augmented generation (RAG) toepassingen.
                </p>

                <ExpertQuote
                  quote="MCP is voor AI wat ODBC was voor databases in de jaren 90: een universele standaard die alle barrières wegneemt. Bedrijven die nu MCP implementeren hebben een enorme voorsprong in de AI-race."
                  context="Over waarom MCP de standaard wordt voor enterprise AI"
                />
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-white font-bold text-sm">SQL Connectivity</div>
                  <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-white font-bold text-sm">Local-First Privacy</div>
                  <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-white font-bold text-sm">GDPR Compliant</div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="absolute inset-0 bg-[#0ea5e9]/20 blur-[100px] rounded-full"></div>
                <div className="relative bg-[#18181b] aspect-video rounded-[2rem] border border-white/10 flex flex-col p-8 overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tighter">MCP-SERVER.CONFIG</span>
                  </div>
                  <div className="font-mono text-sm text-[#0ea5e9] space-y-2 opacity-80 overflow-hidden">
                    <p>{`"mcpServers": {`}</p>
                    <p className="pl-4">{`"local-db": {`}</p>
                    <p className="pl-8">{`"command": "npx",`}</p>
                    <p className="pl-8 text-[#ff6d5a]">{`"args": ["@mcp/postgres"]`}</p>
                    <p className="pl-4">{`}`}</p>
                    <p>{`}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* What is MCP */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Wat is Model Context Protocol?</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                <strong className="text-white">Model Context Protocol (MCP)</strong> is een open standaard ontwikkeld door Anthropic die een gestandaardiseerde manier biedt voor AI modellen om veilig te communiceren met externe databronnen.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                In plaats van uw data te uploaden naar de cloud, blijft uw data veilig op uw eigen servers. De AI stuurt queries via het MCP protocol, en krijgt alleen de relevante antwoorden terug. Uw ruwe data verlaat nooit uw infrastructuur.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Dit maakt MCP ideaal voor <strong className="text-white">privacy-gevoelige bedrijfsdata</strong>: klantgegevens, financiële data, medische dossiers en andere informatie die u niet in de cloud wilt hebben.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Voordelen van MCP</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-[#18181b] border border-white/5 hover:border-[#0ea5e9]/40 p-8 rounded-[2rem] transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How it Works */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Hoe werkt MCP?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, idx) => (
                <div key={idx} className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem] relative">
                  <div className="w-12 h-12 bg-[#0ea5e9]/20 text-[#0ea5e9] rounded-full flex items-center justify-center text-xl font-black mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">MCP vs Traditionele AI Data Integratie</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-[#18181b] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-white font-bold">Aspect</th>
                    <th className="text-center p-4 text-zinc-400 font-bold">Traditioneel (RAG/Upload)</th>
                    <th className="text-center p-4 text-[#0ea5e9] font-bold">MCP</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5">
                      <td className="p-4 text-white font-medium">{row.aspect}</td>
                      <td className="p-4 text-center text-zinc-400">{row.traditional}</td>
                      <td className="p-4 text-center text-[#0ea5e9] font-bold">{row.mcp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">MCP Toepassingen</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                  <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6">{useCase.desc}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIdx) => (
                      <li key={benefitIdx} className="flex items-start gap-3 text-zinc-400 text-sm">
                        <span className="text-[#0ea5e9]">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Security Section */}
          <section className="mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-[#0ea5e9]/10 to-transparent border border-[#0ea5e9]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Security & Compliance</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                MCP is ontworpen met enterprise-grade security:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0ea5e9]">✓</span>
                    <span><strong className="text-white">Role-based access control</strong> - Definieer per gebruiker welke data toegankelijk is</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0ea5e9]">✓</span>
                    <span><strong className="text-white">Query logging</strong> - Volledige audit trail van alle AI interacties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0ea5e9]">✓</span>
                    <span><strong className="text-white">Rate limiting</strong> - Bescherming tegen misbruik</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0ea5e9]">✓</span>
                    <span><strong className="text-white">Data masking</strong> - Gevoelige velden automatisch verbergen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0ea5e9]">✓</span>
                    <span><strong className="text-white">GDPR compliant</strong> - Data blijft in uw eigen omgeving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0ea5e9]">✓</span>
                    <span><strong className="text-white">Encrypted connections</strong> - TLS voor alle communicatie</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* MCP Flow Infographic */}
          <MCPFlowChart
            title="MCP Architectuur"
            subtitle="Hoe Model Context Protocol uw data veilig houdt"
          />

          {/* FAQ Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen over MCP</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#18181b] border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between"
                  >
                    <span className="text-white font-bold pr-4">{faq.q}</span>
                    <span className="text-[#0ea5e9] text-2xl flex-shrink-0">
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

          {/* Related Pages */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-2xl font-bold text-white mb-6">Gerelateerde diensten</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/n8n-mcp" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">n8n + MCP</h3>
                <p className="text-zinc-400 text-sm">MCP integratie in uw n8n workflows</p>
              </Link>
              <Link to="/ai-agents" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">AI Agents</h3>
                <p className="text-zinc-400 text-sm">Autonome agents met MCP data toegang</p>
              </Link>
              <Link to="/ai-automatisering" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">AI Automatisering</h3>
                <p className="text-zinc-400 text-sm">Complete AI automation oplossingen</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-white/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Klaar voor MCP?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Ontdek hoe MCP uw AI implementatie kan verbeteren met veilige toegang tot uw bedrijfsdata. Gratis analyse en advies.
            </p>
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#0ea5e9] hover:bg-[#38bdf8] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#0ea5e9]/20 hover:scale-105"
            >
              Ontdek MCP Implementatie
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default McpPage;
