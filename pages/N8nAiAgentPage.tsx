import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AgentTypesChart from '../components/infographics/AgentTypesChart';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '../components/StructuredData';

const N8nAiAgentPage: React.FC = () => {
  const capabilities = [
    { title: 'Autonome Beslissingen', desc: 'Agent bepaalt zelf de beste aanpak voor elke taak op basis van context en doel.', icon: '🧠' },
    { title: 'Tool Gebruik', desc: 'Kan emails versturen, data opzoeken, APIs aanroepen, documenten verwerken.', icon: '🔧' },
    { title: 'Geheugen', desc: 'Onthoudt context van eerdere interacties binnen de sessie.', icon: '💾' },
    { title: 'Iteratie', desc: 'Kan meerdere stappen doorlopen, evalueren, en bijsturen tot het doel bereikt is.', icon: '🔄' },
    { title: 'Reasoning', desc: 'Legt uit waarom bepaalde beslissingen worden genomen (chain-of-thought).', icon: '💭' },
    { title: 'Error Recovery', desc: 'Kan fouten herkennen en alternatieve strategieën proberen.', icon: '🔁' },
  ];

  const agentTypes = [
    {
      title: 'Email Triage Agent',
      desc: 'Leest emails, categoriseert op urgentie, beantwoordt standaardvragen, en escaleert naar juiste persoon.',
      tools: ['Email lezen', 'Sentiment analyse', 'CRM lookup', 'Email versturen', 'Slack notificatie'],
      useCase: 'Klantenservice, support teams'
    },
    {
      title: 'Research Agent',
      desc: 'Zoekt informatie op, vergelijkt bronnen, extraheert relevante data, en maakt samenvattingen.',
      tools: ['Web search', 'Document parsing', 'Data extractie', 'Rapport generatie'],
      useCase: 'Marktonderzoek, competitive intelligence'
    },
    {
      title: 'Sales Agent',
      desc: 'Kwalificeert leads automatisch, personaliseert outreach, en plant meetings in agenda.',
      tools: ['Lead scoring', 'Email personalisatie', 'Calendar integratie', 'CRM update'],
      useCase: 'Sales teams, lead nurturing'
    },
    {
      title: 'Document Processing Agent',
      desc: 'Verwerkt facturen, contracten, en formulieren. Extraheert data en voert acties uit.',
      tools: ['OCR', 'Data extractie', 'Validatie', 'ERP integratie'],
      useCase: 'Administratie, boekhouding'
    },
  ];

  const bigFourAgents = [
    { name: 'ReAct Agent', desc: 'Combineert reasoning en acting. Denkt hardop, voert acties uit, observeert resultaten.' },
    { name: 'Plan-and-Execute Agent', desc: 'Maakt eerst een plan, voert stappen uit, evalueert voortgang.' },
    { name: 'Tool-Calling Agent', desc: 'Focust op efficiënt gebruik van beschikbare tools om doelen te bereiken.' },
    { name: 'Conversational Agent', desc: 'Optimaal voor dialoog en interactieve taken met gebruikers.' },
  ];

  const benefits = [
    { title: 'Schaalbaarheid', desc: 'Van 10 naar 10.000 taken zonder extra personeel. Agents werken 24/7.' },
    { title: 'Consistentie', desc: 'Elke taak wordt met dezelfde kwaliteit en volgens dezelfde regels uitgevoerd.' },
    { title: 'Snelheid', desc: 'Taken die mensen uren kosten worden in seconden afgehandeld.' },
    { title: 'Kostenefficiëntie', desc: 'Fractie van de kosten van menselijke arbeid voor repetitieve taken.' },
    { title: 'Flexibiliteit', desc: 'Agents passen zich aan nieuwe situaties aan zonder herprogrammering.' },
    { title: 'Integratie', desc: 'Werkt met uw bestaande systemen via n8n\'s 400+ integraties.' },
  ];

  const faqs = [
    {
      q: 'Wat is een AI agent in n8n?',
      a: 'Een AI agent in n8n is een autonoom systeem dat zelfstandig beslissingen neemt om een doel te bereiken. In tegenstelling tot een simpele chatbot, heeft een agent toegang tot "tools" - functies zoals email versturen, data opzoeken, of APIs aanspreken. De agent beslist zelf welke tools te gebruiken en in welke volgorde.'
    },
    {
      q: 'Is n8n geschikt voor het bouwen van AI agents?',
      a: 'Ja, n8n is zeer geschikt. Het biedt native AI Agent nodes die eenvoudig te configureren zijn, ondersteunt alle grote LLM providers (OpenAI, Claude, Ollama), en maakt het mogelijk om tools via de visuele interface te definiëren. Self-hosting zorgt voor data privacy.'
    },
    {
      q: 'Heeft n8n een AI builder?',
      a: 'Ja, n8n heeft een visuele AI Agent node waarmee u agents kunt bouwen zonder code. U selecteert een LLM (GPT-4, Claude, etc.), definieert de agent\'s doel via een prompt, en koppelt tools (andere n8n nodes) die de agent kan gebruiken. De interface is drag-and-drop.'
    },
    {
      q: 'Wie zijn de "grote vier" AI agents?',
      a: 'De vier belangrijkste agent architecturen zijn: 1) ReAct (reasoning + acting), 2) Plan-and-Execute (plan maken, uitvoeren, evalueren), 3) Tool-Calling (efficiënt tool gebruik), en 4) Conversational (dialoog-geoptimaliseerd). n8n ondersteunt al deze patronen via de AI Agent node.'
    },
    {
      q: 'Heb ik codeerkennis nodig om AI agents te gebruiken in n8n?',
      a: 'Nee, niet voor basis agents. n8n\'s visuele interface maakt het mogelijk om agents te bouwen door nodes te verbinden. Wel helpt het om prompts effectief te schrijven. Voor geavanceerde use cases (custom tools, complexe logica) is JavaScript kennis nuttig maar niet vereist.'
    },
    {
      q: 'Zijn AI agents in n8n veilig en privé?',
      a: 'Ja, met self-hosted n8n blijft alle data op uw servers. AI calls gaan naar de LLM provider (OpenAI, Anthropic), maar u kunt ook lokale modellen gebruiken via Ollama voor volledige privacy. Credentials worden encrypted opgeslagen.'
    },
    {
      q: 'Kan ik AI agents in n8n gratis proberen?',
      a: 'Ja. n8n self-hosted is gratis en bevat alle AI Agent functies. U heeft wel API toegang nodig tot een LLM (OpenAI API, Claude API), of u gebruikt gratis lokale modellen via Ollama. n8n Cloud heeft een gratis tier met beperkte executions.'
    },
    {
      q: 'Hoe integreer ik AI agents met mijn bestaande systemen?',
      a: 'Via n8n\'s 400+ integraties. Uw agent kan CRM data ophalen (Salesforce, HubSpot), emails versturen (Gmail, Outlook), documenten verwerken (Google Drive), en meer. Custom APIs zijn ook mogelijk via HTTP Request nodes.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>n8n AI Agent | Autonome AI Workflows Bouwen | Agent Automation</title>
        <meta name="description" content="Bouw autonome AI agents met n8n. ReAct agents, tool-calling, memory en reasoning. Van email triage tot sales automation. Expert implementatie." />
        <link rel="canonical" href="https://ai-automatisatie.be/n8n-ai-agent" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "n8n AI Agent", url: "https://ai-automatisatie.be/n8n-ai-agent" }
      ]} />
      <ArticleSchema
        headline="n8n AI Agent | Autonome AI Workflows Bouwen | Agent Automation"
        description="Bouw autonome AI agents met n8n. ReAct agents, tool-calling, memory en reasoning. Van email triage tot sales automation. Expert implementatie."
        url="https://ai-automatisatie.be/n8n-ai-agent"
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs.map(faq => ({ question: faq.q, answer: faq.a }))} />
      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
        <header className="mb-16 md:mb-24">
          <div className="text-[#7c3aed] font-black tracking-[0.4em] uppercase text-[10px] mb-4">AI Agents</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            <span className="text-[#ff6d5a]">n8n</span> <span className="text-[#7c3aed]">AI Agent</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            Bouw autonome AI agents in n8n die zelfstandig taken uitvoeren, beslissingen nemen, en tools gebruiken. Zonder code, met volledige controle.
          </p>
        </header>

        {/* What is an AI Agent */}
        <section className="mb-16 md:mb-24">
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Wat is een AI agent in n8n?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Een AI Agent in n8n is een <strong className="text-white">autonoom systeem</strong> dat zelfstandig beslissingen neemt om een doel te bereiken. In tegenstelling tot een simpele chatbot, heeft een agent toegang tot "tools" - functies die het kan aanroepen.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-[#7c3aed] font-bold mb-2">Doel</h4>
                <p className="text-zinc-400 text-sm">Agent krijgt een taak: "Beantwoord deze klantvraag"</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-[#7c3aed] font-bold mb-2">Reasoning</h4>
                <p className="text-zinc-400 text-sm">Agent denkt na: "Ik heb klantdata nodig"</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-[#7c3aed] font-bold mb-2">Actie</h4>
                <p className="text-zinc-400 text-sm">Agent voert uit: roept CRM tool aan</p>
              </div>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              n8n's AI Agent node maakt het mogelijk om deze agents te bouwen via een visuele interface, zonder code te schrijven.
            </p>
          </div>
        </section>

        {/* Is n8n good for building AI agents */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Is n8n geschikt voor het bouwen van AI agents?</h2>
          <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Ja, n8n is een van de beste platforms voor AI agents.</strong> Hier is waarom:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-bold mb-3">Native AI Agent Support</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Visuele AI Agent node (drag-and-drop)</li>
                  <li>• Ondersteunt GPT-4, Claude, Gemini, Ollama</li>
                  <li>• Tool calling en function calling</li>
                  <li>• Memory/context management</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Unieke Voordelen</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• 400+ integraties als agent tools</li>
                  <li>• Self-hosted voor data privacy</li>
                  <li>• Geen code vereist</li>
                  <li>• Volledige controle over agent gedrag</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Does n8n have an AI builder */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Heeft n8n een AI builder?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Ja, n8n heeft een visuele AI Agent builder. U bouwt agents door nodes te verbinden:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/5 p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">1️⃣</div>
                <h4 className="text-white font-bold text-sm mb-1">Kies LLM</h4>
                <p className="text-zinc-400 text-xs">GPT-4, Claude, Ollama</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">2️⃣</div>
                <h4 className="text-white font-bold text-sm mb-1">Schrijf Prompt</h4>
                <p className="text-zinc-400 text-xs">Agent doel & gedrag</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">3️⃣</div>
                <h4 className="text-white font-bold text-sm mb-1">Koppel Tools</h4>
                <p className="text-zinc-400 text-xs">Email, CRM, API nodes</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">4️⃣</div>
                <h4 className="text-white font-bold text-sm mb-1">Test & Deploy</h4>
                <p className="text-zinc-400 text-xs">Live in productie</p>
              </div>
            </div>
            <p className="text-zinc-400 mt-6">
              Geen coding vereist. Elke n8n node kan als tool voor de agent dienen.
            </p>
          </div>
        </section>

        {/* Big Four Agents */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Wie zijn de "grote vier" AI agents?</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Er zijn vier belangrijke agent architecturen. n8n ondersteunt ze allemaal:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {bigFourAgents.map((agent, idx) => (
              <div key={idx} className="bg-[#18181b] border border-white/5 p-6 rounded-[2rem]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold text-sm">{idx + 1}</span>
                  <h3 className="text-lg font-bold text-white">{agent.name}</h3>
                </div>
                <p className="text-zinc-400 text-sm">{agent.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Agent vs Workflow */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Agent vs Traditionele Workflow</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-zinc-400 mb-6">Traditionele Workflow</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2"><span className="text-red-400">•</span> Vaste, vooraf gedefinieerde stappen</li>
                <li className="flex items-start gap-2"><span className="text-red-400">•</span> Rigide if-then logica</li>
                <li className="flex items-start gap-2"><span className="text-red-400">•</span> Geen aanpassingsvermogen</li>
                <li className="flex items-start gap-2"><span className="text-red-400">•</span> Voorspelbare maar beperkte output</li>
              </ul>
              <p className="text-zinc-400 text-sm mt-4">Goed voor: eenvoudige, repetitieve taken</p>
            </div>
            <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/30 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-[#7c3aed] mb-6">AI Agent</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Dynamische planning per situatie</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Reasoning over opties</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Zelfstandige beslissingen</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Adaptieve, contextbewuste output</li>
              </ul>
              <p className="text-zinc-400 text-sm mt-4">Goed voor: complexe taken die oordeelsvermogen vereisen</p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Wat kan een n8n AI Agent?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="group bg-[#18181b] border border-white/5 hover:border-[#7c3aed]/40 p-6 rounded-[2rem] transition-all">
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-zinc-400 text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Agents */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Wat voor soort AI agents kan ik bouwen?</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Dit zijn voorbeelden van agents die wij bouwen voor klanten:
          </p>
          <div className="space-y-6">
            {agentTypes.map((agent, idx) => (
              <div key={idx} className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{agent.title}</h3>
                    <p className="text-zinc-400">{agent.desc}</p>
                  </div>
                  <span className="bg-[#7c3aed]/10 text-[#7c3aed] px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    {agent.useCase}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {agent.tools.map((tool, toolIdx) => (
                    <span key={toolIdx} className="bg-white/5 text-zinc-400 px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Voordelen van AI agents in n8n voor bedrijven</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-[#18181b] border border-white/5 p-6 rounded-[2rem]">
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* No coding required */}
        <section className="mb-16 md:mb-24">
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Heb ik codeerkennis nodig?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              <strong className="text-white">Nee, niet voor basis agents.</strong> n8n's visuele interface maakt het mogelijk om agents te bouwen door nodes te slepen en verbinden. Wel helpt het om:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold mb-2">Geen code nodig voor:</h4>
                <ul className="space-y-1 text-zinc-400 text-sm">
                  <li>• Agent configuratie en LLM selectie</li>
                  <li>• Tool definitie via bestaande nodes</li>
                  <li>• Basis prompt engineering</li>
                  <li>• Standaard integraties</li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold mb-2">JavaScript helpt voor:</h4>
                <ul className="space-y-1 text-zinc-400 text-sm">
                  <li>• Custom tool logica</li>
                  <li>• Complexe data transformatie</li>
                  <li>• Geavanceerde error handling</li>
                  <li>• Custom API responses parsing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security and Privacy */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Zijn AI agents in n8n veilig?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              <strong className="text-white">Ja, met de juiste configuratie.</strong> n8n biedt meerdere lagen van beveiliging:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-bold mb-3">Self-Hosted Privacy</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• n8n draait op uw eigen servers</li>
                  <li>• Data verlaat uw infrastructuur niet</li>
                  <li>• GDPR compliant</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">LLM Opties</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Cloud LLMs (OpenAI, Claude) - API calls</li>
                  <li>• Lokale modellen (Ollama) - volledige privacy</li>
                  <li>• Credentials encrypted opgeslagen</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Build */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Hoe integreer ik AI agents met bestaande systemen?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Via n8n's 400+ integraties. Elke integratie kan als tool voor uw agent dienen:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold text-sm mb-2">CRM</h4>
                <p className="text-zinc-400 text-xs">Salesforce, HubSpot, Pipedrive</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold text-sm mb-2">Email</h4>
                <p className="text-zinc-400 text-xs">Gmail, Outlook, SMTP</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold text-sm mb-2">Databases</h4>
                <p className="text-zinc-400 text-xs">PostgreSQL, MySQL, MongoDB</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold text-sm mb-2">Custom APIs</h4>
                <p className="text-zinc-400 text-xs">HTTP Request voor elke API</p>
              </div>
            </div>
            <p className="text-zinc-400 mt-6">
              Uw agent kan klantdata ophalen uit Salesforce, emails versturen via Gmail, en resultaten opslaan in uw database - allemaal vanuit één workflow.
            </p>
          </div>
        </section>

        {/* Can I try for free */}
        <section className="mb-16 md:mb-24">
          <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-[#7c3aed]/10 border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Kan ik AI agents in n8n gratis proberen?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              <strong className="text-white">Ja!</strong> n8n self-hosted is gratis en bevat alle AI Agent functies.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-bold mb-3">Wat u nodig heeft:</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• n8n installatie (Docker, npm, of cloud)</li>
                  <li>• LLM API key (OpenAI, Anthropic) óf</li>
                  <li>• Lokaal model via Ollama (gratis)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Kosten indicatie:</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• n8n self-hosted: €0 (alleen server ~€10-20/m)</li>
                  <li>• OpenAI API: ~€0.01-0.03 per agent call</li>
                  <li>• Ollama lokaal: €0 (langzamer)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Big Four Agents Infographic */}
        <AgentTypesChart
          title="De 4 Belangrijkste Agent Architecturen"
          agents={[
            {
              name: 'ReAct Agent',
              role: 'Reasoning + Acting',
              capabilities: ['Denkt hardop', 'Voert acties uit', 'Observeert resultaten']
            },
            {
              name: 'Plan-and-Execute',
              role: 'Strategisch',
              capabilities: ['Maakt eerst plan', 'Voert stappen uit', 'Evalueert voortgang']
            },
            {
              name: 'Tool-Calling',
              role: 'Efficiënt',
              capabilities: ['Optimaal tool gebruik', 'Snelle uitvoering', 'Doelgericht']
            },
            {
              name: 'Conversational',
              role: 'Dialoog',
              capabilities: ['Interactieve taken', 'Context behoud', 'Gebruiksvriendelijk']
            }
          ]}
        />

        {/* FAQ */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen over n8n AI Agents</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-[#18181b] border border-white/5 rounded-[1.5rem] overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-white pr-4">{faq.q}</h3>
                  <span className="text-[#7c3aed] text-2xl group-open:rotate-45 transition-transform">+</span>
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
            <Link to="/ai-agents" className="bg-[#7c3aed]/20 text-[#7c3aed] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#7c3aed]/30 transition">
              AI Agents diensten →
            </Link>
            <Link to="/wat-is-n8n" className="bg-[#ff6d5a]/20 text-[#ff6d5a] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#ff6d5a]/30 transition">
              Wat is n8n? →
            </Link>
            <Link to="/n8n-mcp" className="bg-[#0ea5e9]/20 text-[#0ea5e9] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0ea5e9]/30 transition">
              n8n + MCP →
            </Link>
            <Link to="/ai-automatisering" className="bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition">
              AI Automatisering →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-white/5">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Klaar voor AI Agents?</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Wij bouwen custom AI agents voor uw specifieke bedrijfsprocessen. Van email triage tot sales automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/ai-agents"
              className="inline-block bg-[#7c3aed] hover:bg-[#8b5cf6] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#7c3aed]/20 hover:scale-105"
            >
              Bespreek uw AI Agent
            </Link>
            <Link
              to="/n8n-expert"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              n8n Expertise
            </Link>
          </div>
        </section>
      </article>
      </div>
    </>
  );
};

export default N8nAiAgentPage;
