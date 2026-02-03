import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AgentTypesChart from '../components/infographics/AgentTypesChart';
import ExpertQuote from '../components/ExpertQuote';
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from '../components/StructuredData';

const AiAgentsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const agents = [
    {
      title: 'Sales Agent',
      role: 'Lead Kwalificatie',
      desc: 'Verwerkt 24/7 inkomende leads, kwalificeert ze op basis van criteria en boekt direct afspraken in uw agenda.',
      capabilities: ['Lead scoring', 'Email follow-up', 'Calendar booking', 'CRM updates']
    },
    {
      title: 'Support Agent',
      role: 'Automated Help',
      desc: 'Begrijpt complexe vragen, haalt antwoorden uit uw interne data en escaleert alleen wanneer nodig.',
      capabilities: ['FAQ beantwoording', 'Ticket classificatie', 'Kennisbank lookup', 'Escalatie detectie']
    },
    {
      title: 'Ops Agent',
      role: 'Proces Monitoring',
      desc: 'Monitort uw bedrijfsprocessen continu en grijpt autonoom in bij vertragingen of problemen.',
      capabilities: ['Anomalie detectie', 'Automatische alerts', 'Workflow triggers', 'Rapportage']
    },
    {
      title: 'Data Agent',
      role: 'Business Intelligence',
      desc: 'Analyseert uw bedrijfsdata en genereert proactief inzichten en rapportages.',
      capabilities: ['Data analyse', 'Trend detectie', 'Report generatie', 'KPI monitoring']
    },
  ];

  const benefits = [
    { title: '24/7 Beschikbaar', desc: 'Agents werken non-stop zonder pauzes, weekenden of vakantie.', icon: '🌙' },
    { title: 'Consistent', desc: 'Elke interactie volgt dezelfde kwaliteitsstandaard, geen humeur-afhankelijkheid.', icon: '✓' },
    { title: 'Schaalbaar', desc: 'Van 10 naar 10.000 interacties per dag zonder extra personeel.', icon: '📈' },
    { title: 'Leerend', desc: 'Agents worden slimmer naarmate ze meer data en feedback krijgen.', icon: '🧠' },
  ];

  const useCases = [
    {
      title: 'E-commerce',
      tasks: ['Productadvies chat', 'Order status updates', 'Retouren verwerking', 'Review opvolging']
    },
    {
      title: 'B2B Sales',
      tasks: ['Lead kwalificatie', 'Meeting scheduling', 'Proposal follow-up', 'Pipeline management']
    },
    {
      title: 'Klantenservice',
      tasks: ['Ticket triage', 'FAQ beantwoording', 'Escalatie routing', 'Satisfaction surveys']
    },
    {
      title: 'Operations',
      tasks: ['Voorraadbeheer', 'Supplier communicatie', 'Quality alerts', 'Performance rapportage']
    },
  ];

  const techStack = [
    { name: 'n8n', desc: 'Workflow orchestratie en integraties' },
    { name: 'Claude/GPT', desc: 'Large Language Models voor begrip en generatie' },
    { name: 'MCP', desc: 'Veilige toegang tot uw bedrijfsdata' },
    { name: 'Vector DB', desc: 'Kennisbank en document retrieval' },
  ];

  const faqs = [
    {
      q: 'Wat is het verschil tussen een AI Agent en een chatbot?',
      a: 'Een chatbot volgt voorgedefinieerde scripts en kan alleen vooraf geprogrammeerde antwoorden geven. Een AI Agent begrijpt context, kan redeneren, toegang krijgen tot uw systemen en autonoom acties ondernemen. Waar een chatbot zegt "ik begrijp u niet", lost een Agent uw probleem op.'
    },
    {
      q: 'Welke AI modellen gebruiken jullie voor agents?',
      a: 'Wij werken met de beste beschikbare modellen: Claude (Anthropic), GPT-4 (OpenAI), en Gemini (Google). De keuze hangt af van uw use case, budget en privacy requirements. Voor maximale privacy kunnen we ook lokale open-source modellen implementeren.'
    },
    {
      q: 'Kunnen AI Agents integreren met onze bestaande software?',
      a: 'Ja, via n8n kunnen onze agents integreren met vrijwel elke software: CRM (Salesforce, HubSpot, Pipedrive), ERP (SAP, Exact, Microsoft Dynamics), helpdesk (Zendesk, Freshdesk), en honderden andere systemen.'
    },
    {
      q: 'Hoe leren AI Agents over ons bedrijf?',
      a: 'Agents leren via meerdere bronnen: uw kennisbank documenten, FAQ\'s, product informatie, en via MCP directe toegang tot uw database. Ze kunnen ook leren van feedback op hun antwoorden om continu te verbeteren.'
    },
    {
      q: 'Wat kost een AI Agent implementatie?',
      a: 'Een basis AI Agent begint vanaf €2.500 voor een eenvoudige use case (bijv. FAQ beantwoording). Meer complexe agents met meerdere integraties en autonome acties worden op maat geprijsd. Running costs zijn typisch €100-500/maand afhankelijk van volume.'
    },
    {
      q: 'Kunnen AI Agents volledig autonoom beslissingen nemen?',
      a: 'Dit configureren we samen met u. Agents kunnen volledig autonoom werken voor routine taken, maar voor belangrijke beslissingen (bijv. grote refunds, contracten) kunnen we human-in-the-loop verificatie inbouwen.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Agents | Intelligente Automatisering | Sales, Support & Operations</title>
        <meta name="description" content="AI Agents voor uw bedrijf. Autonome digitale medewerkers voor sales, klantenservice en operations. 24/7 beschikbaar, schaalbaar, en geïntegreerd met uw systemen." />
        <link rel="canonical" href="https://ai-automatisatie.be/ai-agents" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "AI Agents", url: "https://ai-automatisatie.be/ai-agents" }
      ]} />

      <ServiceSchema
        name="AI Agents Implementatie"
        description="Autonome AI agents voor sales, support en operations. 24/7 beschikbaar, schaalbaar, en volledig geïntegreerd met uw bestaande systemen."
        url="https://ai-automatisatie.be/ai-agents"
        priceRange="€2500 - €15000"
      />

      <FAQSchema faqs={[
        { question: "Wat is het verschil tussen een AI Agent en een chatbot?", answer: "Een chatbot volgt voorgedefinieerde scripts en kan alleen vooraf geprogrammeerde antwoorden geven. Een AI Agent begrijpt context, kan redeneren, toegang krijgen tot uw systemen en autonoom acties ondernemen." },
        { question: "Welke AI modellen gebruiken jullie voor agents?", answer: "Wij werken met Claude (Anthropic), GPT-4 (OpenAI), en Gemini (Google). De keuze hangt af van uw use case, budget en privacy requirements. Voor maximale privacy kunnen we ook lokale open-source modellen implementeren." },
        { question: "Kunnen AI Agents integreren met onze bestaande software?", answer: "Ja, via n8n kunnen onze agents integreren met vrijwel elke software: CRM (Salesforce, HubSpot, Pipedrive), ERP (SAP, Exact, Microsoft Dynamics), helpdesk (Zendesk, Freshdesk), en honderden andere systemen." },
        { question: "Hoe leren AI Agents over ons bedrijf?", answer: "Agents leren via meerdere bronnen: uw kennisbank documenten, FAQ's, product informatie, en via MCP directe toegang tot uw database. Ze kunnen ook leren van feedback op hun antwoorden." },
        { question: "Wat kost een AI Agent implementatie?", answer: "Een basis AI Agent begint vanaf €2.500 voor een eenvoudige use case. Running costs zijn typisch €100-500/maand afhankelijk van volume." },
        { question: "Kunnen AI Agents volledig autonoom beslissingen nemen?", answer: "Dit configureren we samen met u. Agents kunnen volledig autonoom werken voor routine taken, maar voor belangrijke beslissingen kunnen we human-in-the-loop verificatie inbouwen." }
      ]} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24 text-center">
            <div className="inline-block px-4 py-1 bg-[#ff6d5a]/10 border border-[#ff6d5a]/20 rounded-full text-[#ff6d5a] text-[10px] font-black tracking-widest uppercase mb-6">
              Trending +400%
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Intelligente <span className="text-[#ff6d5a]">AI Agents</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Uw eerste digitale werknemer staat klaar. Geen simpele chatbots, maar autonome agents die begrijpen, redeneren en actie ondernemen. Dit is de volgende stap in agentic AI en intelligent automation.
            </p>

            <div className="max-w-3xl mx-auto">
              <ExpertQuote
                quote="AI Agents zijn de grootste shift in bedrijfsautomatisering sinds de spreadsheet. Ze combineren de besluitvaardigheid van een medewerker met de snelheid en schaalbaarheid van software."
                context="Over de impact van agentic AI op bedrijfsprocessen"
              />
            </div>
          </header>

          {/* What are AI Agents */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Wat zijn AI Agents?</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                <strong className="text-white">AI Agents</strong> (ook bekend als autonomous agents of agentic AI) zijn intelligente software systemen die taken kunnen uitvoeren zonder continue menselijke supervisie. Ze vormen de kern van moderne intelligent process automation (IPA) en gaan verder dan traditionele RPA door cognitieve taken aan te kunnen. In tegenstelling tot rule-based automatisering, kunnen agents:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span><strong className="text-white">Begrijpen</strong> - Natuurlijke taal en context interpreteren</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span><strong className="text-white">Redeneren</strong> - Logische conclusies trekken uit informatie</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span><strong className="text-white">Handelen</strong> - Acties uitvoeren in uw systemen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <span><strong className="text-white">Leren</strong> - Verbeteren op basis van feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Agent Types */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">Soorten AI Agents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {agents.map((agent, idx) => (
                <div key={idx} className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem] hover:border-[#ff6d5a]/40 transition-all group">
                  <div className="w-12 h-12 bg-[#ff6d5a] rounded-xl mb-6 flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{agent.title}</h3>
                  <div className="text-[#7c3aed] text-[10px] font-black uppercase mb-4 tracking-wider">{agent.role}</div>
                  <p className="text-zinc-400 text-sm mb-4">{agent.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.capabilities.map((cap, capIdx) => (
                      <span key={capIdx} className="bg-white/5 px-2 py-1 rounded text-xs text-zinc-400">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Voordelen van AI Agents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zinc-400 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Use Cases per Sector</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-white mb-4">{useCase.title}</h3>
                  <ul className="space-y-2">
                    {useCase.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} className="text-zinc-400 text-sm flex items-center gap-2">
                        <span className="text-[#ff6d5a] text-xs">●</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technology */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Technologie Stack</h2>
                  <p className="text-zinc-400 mb-8 leading-relaxed">
                    Onze AI Agents draaien op een robuuste stack van bewezen technologieën. We combineren de kracht van grote taalmodellen met enterprise-grade workflow orchestratie.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {techStack.map((tech, idx) => (
                      <div key={idx} className="bg-white/5 p-4 rounded-xl">
                        <h4 className="text-white font-bold mb-1">{tech.name}</h4>
                        <p className="text-zinc-400 text-sm">{tech.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-[2rem] flex items-center justify-center text-5xl animate-pulse">
                  🤖
                </div>
              </div>
            </div>
          </section>

          {/* Integration */}
          <section className="mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Integratie met uw Systemen</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                AI Agents worden pas echt krachtig wanneer ze toegang hebben tot uw bedrijfssystemen. Via n8n en MCP integreren we met:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Salesforce', 'HubSpot', 'Pipedrive', 'Zendesk', 'Freshdesk', 'Slack', 'Teams', 'Gmail', 'SAP', 'Exact', 'Shopify', 'WooCommerce', 'Stripe', 'Notion', 'Airtable'].map((tool, idx) => (
                  <span key={idx} className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">
                    {tool}
                  </span>
                ))}
                <span className="bg-[#ff6d5a]/20 text-[#ff6d5a] px-4 py-2 rounded-full text-sm font-bold">
                  + 400 meer
                </span>
              </div>
            </div>
          </section>

          {/* Agent Types Infographic */}
          <AgentTypesChart
            title="AI Agent Types Overzicht"
            agents={[
              {
                name: 'Sales Agent',
                role: 'Lead Kwalificatie',
                capabilities: ['Lead scoring', 'Email follow-up', 'Calendar booking', 'CRM sync']
              },
              {
                name: 'Support Agent',
                role: 'Klantenservice',
                capabilities: ['FAQ beantwoording', 'Ticket classificatie', 'Escalatie detectie']
              },
              {
                name: 'Ops Agent',
                role: 'Proces Monitoring',
                capabilities: ['Anomalie detectie', 'Automatische alerts', 'Rapportage']
              },
              {
                name: 'Data Agent',
                role: 'Business Intelligence',
                capabilities: ['Data analyse', 'Trend detectie', 'KPI monitoring']
              }
            ]}
          />

          {/* FAQ Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen over AI Agents</h2>
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

          {/* Related Pages */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-2xl font-bold text-white mb-6">Gerelateerde diensten</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/n8n-ai-agent" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">n8n AI Agent</h3>
                <p className="text-zinc-400 text-sm">AI Agents gebouwd in n8n</p>
              </Link>
              <Link to="/mcp-protocol" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">MCP Protocol</h3>
                <p className="text-zinc-400 text-sm">Veilige data toegang voor agents</p>
              </Link>
              <Link to="/ai-automatisering" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">AI Automatisering</h3>
                <p className="text-zinc-400 text-sm">Complete AI solutions</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-white/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Klaar voor uw eerste AI Agent?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Ontdek hoe AI Agents uw bedrijf kunnen transformeren. Gratis analyse van uw use case, concrete ROI berekening.
            </p>
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Ontwikkel mijn Agent
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default AiAgentsPage;
