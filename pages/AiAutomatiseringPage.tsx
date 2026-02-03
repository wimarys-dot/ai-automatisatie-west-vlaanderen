import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AITypesChart from '../components/infographics/AITypesChart';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '../components/StructuredData';

const AiAutomatiseringPage: React.FC = () => {
  const benefits = [
    { title: '24/7 Beschikbaar', desc: 'AI agents werken non-stop zonder pauze of vakantie. Uw bedrijfsprocessen draaien door, ook buiten kantooruren.', icon: '🌙' },
    { title: 'Consistente Kwaliteit', desc: 'Geen menselijke fouten of variatie in output. Elke taak wordt met dezelfde precisie uitgevoerd.', icon: '✓' },
    { title: 'Schaalbaar', desc: 'Van 10 naar 10.000 taken zonder extra personeel. Groei zonder proportionele kostenstijging.', icon: '📈' },
    { title: 'Kostenefficiënt', desc: 'Fraction van de kost van menselijke arbeid voor repetitieve taken.', icon: '💰' },
    { title: 'Snellere Besluitvorming', desc: 'AI analyseert data in milliseconden en ondersteunt real-time beslissingen.', icon: '⚡' },
    { title: 'Verhoogde Productiviteit', desc: 'Medewerkers focussen op creatief en strategisch werk terwijl AI de rest doet.', icon: '🚀' },
  ];

  const useCases = [
    { title: 'Email Triage', desc: 'AI leest, categoriseert en beantwoordt inkomende emails automatisch.' },
    { title: 'Document Processing', desc: 'Facturen, contracten en formulieren automatisch verwerken en archiveren.' },
    { title: 'Customer Support', desc: 'Eerste lijn support volledig geautomatiseerd met intelligente chatbots.' },
    { title: 'Data Entry & Validatie', desc: 'Gegevens uit verschillende bronnen consolideren en valideren.' },
    { title: 'Lead Qualification', desc: 'Automatisch leads scoren, prioriteren en opvolgen.' },
    { title: 'Reporting & Analytics', desc: 'Dagelijkse, wekelijkse rapporten automatisch genereren met insights.' },
  ];

  const aiTypes = [
    { type: 'Reactieve AI', desc: 'Reageert op specifieke inputs zonder geheugen. Denk aan spamfilters en aanbevelingssystemen.', example: 'Netflix aanbevelingen' },
    { type: 'Beperkt Geheugen AI', desc: 'Leert van recente data om beslissingen te verbeteren. De meest gebruikte vorm vandaag.', example: 'ChatGPT, zelfrijdende auto\'s' },
    { type: 'Theory of Mind AI', desc: 'Begrijpt emoties en intenties. Nog in ontwikkeling maar veelbelovend voor klantenservice.', example: 'Geavanceerde chatbots' },
    { type: 'Zelfbewuste AI', desc: 'Heeft eigen bewustzijn en begrip. Dit is nog science fiction en bestaat niet.', example: 'Toekomstvisie' },
  ];

  const industries = [
    { sector: 'Financiële diensten', benefit: 'Fraude detectie, kredietbeoordeling, geautomatiseerde rapportage' },
    { sector: 'Gezondheidszorg', benefit: 'Patiëntcommunicatie, afspraakbeheer, administratieve taken' },
    { sector: 'Retail & E-commerce', benefit: 'Voorraadbeheer, klantenservice, gepersonaliseerde marketing' },
    { sector: 'Productie', benefit: 'Kwaliteitscontrole, voorspellend onderhoud, supply chain optimalisatie' },
    { sector: 'Vastgoed', benefit: 'Lead nurturing, documentverwerking, marktanalyse' },
    { sector: 'Juridisch', benefit: 'Contractanalyse, due diligence, documentclassificatie' },
  ];

  const faqs = [
    {
      q: 'Wat is AI-automatisering?',
      a: 'AI-automatisering is de combinatie van kunstmatige intelligentie met workflow automation tools. Waar traditionele automatisering vaste regels volgt, kan AI begrijpen, beslissen en leren van data. Dit maakt het mogelijk om complexe taken te automatiseren die voorheen menselijk oordeelsvermogen vereisten.'
    },
    {
      q: 'Wat is het verschil tussen AI en automatisering?',
      a: 'Traditionele automatisering volgt vooraf geprogrammeerde regels (if-this-then-that). AI kan daarentegen patronen herkennen, beslissingen nemen op basis van context, en zelfs leren van nieuwe situaties. De combinatie van beide biedt de kracht van betrouwbare workflows met de flexibiliteit van intelligente verwerking.'
    },
    {
      q: 'Welke 4 soorten AI zijn er?',
      a: 'Er zijn vier categorieën: 1) Reactieve AI die reageert zonder geheugen, 2) Beperkt Geheugen AI die leert van recente data (zoals ChatGPT), 3) Theory of Mind AI die emoties begrijpt (in ontwikkeling), en 4) Zelfbewuste AI met eigen bewustzijn (nog theoretisch).'
    },
    {
      q: 'Hoe kan AI-automatisering de productiviteit verbeteren?',
      a: 'AI-automatisering neemt repetitieve taken over waardoor medewerkers zich kunnen focussen op creatief en strategisch werk. Daarnaast verwerkt AI taken sneller en consistenter, vermindert fouten, en kan 24/7 doorwerken. Studies tonen productiviteitsverhogingen van 20-40% bij juiste implementatie.'
    },
    {
      q: 'Wat zijn de risico\'s van AI-automatisering?',
      a: 'Mogelijke risico\'s zijn: veranderende jobprofielen (niet per se banenverlies), afhankelijkheid van technologie, en data privacy zorgen. Het is belangrijk om AI te zien als hulpmiddel dat mensen ondersteunt, niet vervangt. Goede implementatie focust op het versterken van medewerkers.'
    },
    {
      q: 'Hoe implementeer je AI-automatisering in een bedrijf?',
      a: 'Begin met het identificeren van repetitieve, tijdrovende processen. Kies een platform zoals n8n voor de workflow orchestratie. Start met een pilot project, meet de resultaten, en schaal geleidelijk op. Wij begeleiden dit volledige traject voor West-Vlaamse bedrijven.'
    },
    {
      q: 'Wat zijn AI-agents en waarvoor kunnen ze worden ingezet?',
      a: 'AI-agents zijn autonome softwareprogramma\'s die taken kunnen uitvoeren met minimale menselijke tussenkomst. Ze kunnen emails beantwoorden, data analyseren, beslissingen nemen, en acties uitvoeren in andere systemen. In n8n bouwen wij AI agents die uw specifieke bedrijfsprocessen automatiseren.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Automatisering | Intelligente Workflow Automation | KMO Gids</title>
        <meta name="description" content="AI automatisering voor KMO's. Wat is AI-automatisering? Voordelen, use cases en implementatie. Van email triage tot document processing." />
        <link rel="canonical" href="https://ai-automatisatie.be/ai-automatisering" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "AI Automatisering", url: "https://ai-automatisatie.be/ai-automatisering" }
      ]} />
      <ArticleSchema
        headline="AI Automatisering | Intelligente Workflow Automation | KMO Gids"
        description="AI automatisering voor KMO's. Wat is AI-automatisering? Voordelen, use cases en implementatie. Van email triage tot document processing."
        url="https://ai-automatisatie.be/ai-automatisering"
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs.map(faq => ({ question: faq.q, answer: faq.a }))} />
      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
        <header className="mb-16 md:mb-24">
          <div className="text-[#7c3aed] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Kennisbank</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            <span className="text-[#7c3aed]">AI</span> Automatisering
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            Combineer de kracht van kunstmatige intelligentie met workflow automation. Laat AI uw repetitieve taken overnemen en focus op wat écht belangrijk is voor uw bedrijf.
          </p>
        </header>

        {/* What is AI Automation */}
        <section className="mb-16 md:mb-24">
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Wat is AI-automatisering?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              AI-automatisering combineert traditionele workflow automation (zoals <Link to="/wat-is-n8n" className="text-[#ff6d5a] hover:underline">n8n</Link>) met kunstmatige intelligentie. Waar klassieke automatisering vaste regels volgt, kan AI <strong className="text-white">begrijpen, beslissen en leren</strong> van data en context.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Dit opent de deur naar het automatiseren van taken die voorheen menselijk oordeelsvermogen vereisten: emails beantwoorden, documenten analyseren, klantgesprekken voeren, of complexe data interpreteren.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              De kernvraag is niet meer "kan dit geautomatiseerd worden?" maar "hoe intelligent moet de automatisering zijn?". Met moderne AI-modellen zoals GPT-4, Claude, en Gemini kunnen steeds complexere taken worden overgenomen.
            </p>
          </div>
        </section>

        {/* AI vs Traditional Automation */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Wat is het verschil tussen AI en automatisering?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-white mb-4">🔧 Traditionele Automatisering</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed]">•</span>
                  <span>Volgt vooraf geprogrammeerde regels (if-this-then-that)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed]">•</span>
                  <span>Geen aanpassingsvermogen aan nieuwe situaties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed]">•</span>
                  <span>Perfect voor gestructureerde, repetitieve taken</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed]">•</span>
                  <span>Voorspelbaar en betrouwbaar</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-white mb-4">🧠 AI-Automatisering</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed]">•</span>
                  <span>Begrijpt context en neemt beslissingen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed]">•</span>
                  <span>Leert van nieuwe data en verbetert over tijd</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed]">•</span>
                  <span>Kan ongestructureerde data verwerken (tekst, afbeeldingen)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed]">•</span>
                  <span>Flexibel maar vereist monitoring</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-zinc-400 text-lg mt-8 leading-relaxed">
            De beste oplossing combineert beide: traditionele automatisering voor betrouwbare, repetitieve stappen, met AI voor taken die begrip en oordeelsvermogen vereisen.
          </p>
        </section>

        {/* Types of AI */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Welke soorten AI zijn er?</h2>
          <p className="text-zinc-400 text-lg mb-8">Er zijn vier hoofdcategorieën van kunstmatige intelligentie, elk met eigen toepassingen:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {aiTypes.map((ai, idx) => (
              <div key={idx} className="bg-[#18181b] border border-white/5 p-6 rounded-[1.5rem]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold text-sm">{idx + 1}</span>
                  <h3 className="text-lg font-bold text-white">{ai.type}</h3>
                </div>
                <p className="text-zinc-400 mb-2">{ai.desc}</p>
                <p className="text-[#7c3aed] text-sm">Voorbeeld: {ai.example}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-400 text-lg mt-8 leading-relaxed">
            Voor bedrijfsautomatisering gebruiken wij voornamelijk <strong className="text-white">Beperkt Geheugen AI</strong> (categorie 2). Dit zijn de moderne Large Language Models (LLMs) die tekst kunnen begrijpen, genereren, en beslissingen kunnen nemen op basis van context.
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Wat zijn de voordelen van AI-automatisering?</h2>
          <p className="text-zinc-400 text-lg mb-8">AI-automatisering biedt concrete voordelen voor elk type bedrijf:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="group bg-[#18181b] border border-white/5 hover:border-[#7c3aed]/40 p-6 rounded-[2rem] transition-all">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How AI Helps Decision Making */}
        <section className="mb-16 md:mb-24">
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Hoe kan AI-automatisering helpen bij besluitvorming?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              AI verwerkt grote hoeveelheden data in seconden en herkent patronen die mensen zouden missen. Dit ondersteunt betere besluitvorming op meerdere niveaus:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-bold mb-3">📊 Operationele beslissingen</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Automatische lead scoring en prioritering</li>
                  <li>• Real-time voorraadbeheer suggesties</li>
                  <li>• Slimme taak toewijzing aan medewerkers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-3">🎯 Strategische inzichten</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Klantgedrag analyse en voorspelling</li>
                  <li>• Markttrend identificatie</li>
                  <li>• Risicoanalyse en early warning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Welke bedrijfstakken profiteren het meest?</h2>
          <p className="text-zinc-400 text-lg mb-8">AI-automatisering is waardevol in vrijwel elke sector, maar deze branches zien de snelste ROI:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, idx) => (
              <div key={idx} className="bg-[#18181b] border border-white/5 p-5 rounded-[1.5rem]">
                <h3 className="text-white font-bold mb-2">{ind.sector}</h3>
                <p className="text-zinc-400 text-sm">{ind.benefit}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/sector/accountants" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              Accountants →
            </Link>
            <Link to="/sector/makelaars" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              Makelaars →
            </Link>
            <Link to="/sector/advocaten" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              Advocaten →
            </Link>
            <Link to="/sector/retail" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              Retail →
            </Link>
          </div>
        </section>

        {/* How it Works */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Hoe werkt AI-automatisering?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem] relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#7c3aed] rounded-full flex items-center justify-center font-bold text-white">1</div>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Trigger</h3>
              <p className="text-zinc-400">Een event start de workflow: nieuwe email, formulier inzending, webhook, of scheduled time. Dit is de traditionele automation trigger.</p>
            </div>
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem] relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#7c3aed] rounded-full flex items-center justify-center font-bold text-white">2</div>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">AI Verwerking</h3>
              <p className="text-zinc-400">AI analyseert de input, begrijpt de context, neemt beslissingen, en genereert intelligente output. Hier zit de "magie" van AI-automatisering.</p>
            </div>
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem] relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#7c3aed] rounded-full flex items-center justify-center font-bold text-white">3</div>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Actie</h3>
              <p className="text-zinc-400">De workflow voert acties uit: emails versturen, data opslaan, CRM updaten, of notificaties triggeren. Alles volledig automatisch.</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Veelvoorkomende toepassingen</h2>
          <p className="text-zinc-400 text-lg mb-8">Dit zijn de meest impactvolle AI-automatisering use cases die wij implementeren:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-6 rounded-[1.5rem]">
                <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-zinc-400 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation */}
        <section className="mb-16 md:mb-24">
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Hoe implementeer je AI-automatisering?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Een succesvolle AI-automatisering implementatie verloopt in fases:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">1</span>
                <div>
                  <h3 className="text-white font-bold">Proces Analyse</h3>
                  <p className="text-zinc-400">Identificeer repetitieve, tijdrovende processen die geschikt zijn voor automatisering.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">2</span>
                <div>
                  <h3 className="text-white font-bold">Platform Selectie</h3>
                  <p className="text-zinc-400">Kies de juiste tools. Wij werken met <Link to="/wat-is-n8n" className="text-[#ff6d5a] hover:underline">n8n</Link> als orchestratie platform.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">3</span>
                <div>
                  <h3 className="text-white font-bold">Pilot Project</h3>
                  <p className="text-zinc-400">Start klein met één use case, meet de resultaten, en optimaliseer.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">4</span>
                <div>
                  <h3 className="text-white font-bold">Schaal Op</h3>
                  <p className="text-zinc-400">Na succes, rol uit naar meer processen en afdelingen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risks */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Wat zijn de risico's van AI-automatisering?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Eerlijkheid over risico's is belangrijk. Dit zijn de meest genoemde zorgen en hoe we ermee omgaan:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold mb-2">🔄 Veranderende jobs</h3>
                <p className="text-zinc-400">AI vervangt taken, niet mensen. Jobprofielen veranderen: minder data-entry, meer analyse en creativiteit. Dit is een verschuiving, geen verlies.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">⚠️ Afhankelijkheid</h3>
                <p className="text-zinc-400">Overmatige afhankelijkheid van technologie is een risico. Daarom bouwen wij robuuste systemen met fallbacks en monitoring.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">🔒 Data Privacy</h3>
                <p className="text-zinc-400">AI verwerkt gevoelige data. Wij kiezen voor self-hosted oplossingen waar mogelijk en zorgen voor GDPR compliance.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">🎯 Hallucinations</h3>
                <p className="text-zinc-400">AI kan fouten maken. Daarom bouwen wij validatie in en houden kritieke beslissingen onder menselijk toezicht.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents */}
        <section className="mb-16 md:mb-24">
          <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-[#7c3aed]/10 border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Wat zijn AI-agents?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              AI-agents zijn de volgende stap in AI-automatisering. Dit zijn autonome programma's die zelfstandig taken kunnen uitvoeren, beslissingen nemen, en met andere systemen communiceren.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              In tegenstelling tot eenvoudige chatbots kunnen AI-agents meerdere stappen doorlopen, tools gebruiken, en complexe workflows afhandelen met minimale menselijke tussenkomst.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/ai-agents" className="bg-[#7c3aed]/20 text-[#7c3aed] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#7c3aed]/30 transition">
                AI Agents Diensten →
              </Link>
              <Link to="/n8n-ai-agent" className="bg-[#ff6d5a]/20 text-[#ff6d5a] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#ff6d5a]/30 transition">
                n8n AI Agent →
              </Link>
            </div>
          </div>
        </section>

        {/* n8n + AI */}
        <section className="mb-16 md:mb-24">
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">n8n + AI = Krachtige combinatie</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Wij gebruiken <Link to="/wat-is-n8n" className="text-[#ff6d5a] hover:underline">n8n</Link> als de backbone voor AI-automatisering. n8n verbindt met OpenAI, Claude, en andere AI modellen, en orkestreert de volledige workflow eromheen.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Deze combinatie biedt het beste van beide werelden: de betrouwbaarheid van workflow automation met de intelligentie van moderne AI-modellen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/n8n-expert" className="bg-[#ff6d5a]/20 text-[#ff6d5a] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#ff6d5a]/30 transition">
                n8n Expertise →
              </Link>
              <Link to="/n8n-vs-zapier" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition">
                n8n vs Zapier →
              </Link>
              <Link to="/workflow-automatisering" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition">
                Workflow Automatisering →
              </Link>
            </div>
          </div>
        </section>

        {/* AI Types Infographic */}
        <AITypesChart title="De 4 Soorten Kunstmatige Intelligentie" />

        {/* FAQ */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen over AI-automatisering</h2>
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

        {/* CTA */}
        <section className="text-center py-16 border-t border-white/5">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Klaar voor AI-automatisering?</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Wij helpen West-Vlaamse bedrijven met het implementeren van AI-gestuurde workflows. Van eerste analyse tot productie-ready oplossingen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/ai-agents"
              className="inline-block bg-[#7c3aed] hover:bg-[#8b5cf6] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#7c3aed]/20 hover:scale-105"
            >
              Ontdek AI Agents
            </Link>
            <Link
              to="/n8n-expert"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              Neem Contact Op
            </Link>
          </div>
        </section>
      </article>
      </div>
    </>
  );
};

export default AiAutomatiseringPage;
