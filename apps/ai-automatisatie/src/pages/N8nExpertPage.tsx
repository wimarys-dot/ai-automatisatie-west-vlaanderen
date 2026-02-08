import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbSchema, ExpertPricingChart, ExpertQuote, FAQSchema, ServiceSchema } from '@repo/ui';

const N8nExpertPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Expert West-Vlaanderen | Gecertificeerde n8n Specialist</title>
        <meta name="description" content="Zoekt u een n8n expert in West-Vlaanderen? Ontdek wat een n8n specialist kan doen voor uw automatisering. Van Brugge tot Kortrijk - uw lokale n8n consultant." />
        <link rel="canonical" href="https://ai-automatisatie.be/n8n-expert" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "n8n Expert", url: "https://ai-automatisatie.be/n8n-expert" }
      ]} />

      <ServiceSchema
        name="n8n Expert & Consultant"
        description="Gecertificeerde n8n specialist voor workflow automatisering. Van strategie tot implementatie - lokale expertise in West-Vlaanderen."
        url="https://ai-automatisatie.be/n8n-expert"
        priceRange="€2000 - €10000"
      />

      <FAQSchema faqs={[
        { question: "Heb ik technische kennis nodig om met een n8n expert te werken?", answer: "Nee, absoluut niet. Als n8n expert vertaal ik uw bedrijfsbehoeften naar technische oplossingen. U beschrijft wat u wilt bereiken, ik bouw de automatisering. Na oplevering krijgt u training zodat u eenvoudige aanpassingen zelf kunt doen." },
        { question: "Hoe lang duurt een typisch n8n project?", answer: "Dit varieert sterk per project. Een eenvoudige workflow kan binnen een week live zijn. Complexe integraties met meerdere systemen en AI-componenten nemen 2-4 weken in beslag." },
        { question: "Kan ik n8n ook zelf leren?", answer: "Ja, n8n heeft een lage instapdrempel voor basis automatiseringen. Maar voor complexe integraties, API-koppelingen en productie-waardige workflows is expertise nodig." },
        { question: "Wat kost het om een n8n specialist in te huren?", answer: "Een n8n specialist kost tussen €100-150 per uur. Project-based pricing is vaak voordeliger: een typisch automatiseringsproject kost tussen €2.000 en €10.000." },
        { question: "Werkt n8n samen met mijn bestaande software?", answer: "Vrijwel zeker. n8n heeft 400+ native integraties met tools zoals Exact Online, Teamleader, Outlook, Google Workspace. Voor software zonder native integratie kunnen we via REST API's koppelen." },
        { question: "Kan een n8n expert ook AI integreren in mijn workflows?", answer: "Ja, dit is een van de sterkste punten van n8n. We integreren AI-modellen zoals GPT-4, Claude, en open-source LLMs voor automatische e-mailclassificatie, document samenvatting, of complete AI-agents." },
        { question: "Is n8n geschikt voor grote bedrijven?", answer: "Absoluut. n8n wordt gebruikt door bedrijven van elke grootte. De self-hosted optie biedt enterprise-grade security en compliance met multi-instance setups en load balancing." },
        { question: "Hoe begin ik met een n8n expert?", answer: "Start met een vrijblijvend intake gesprek. We bespreken uw huidige processen, identificeren automatiseringsmogelijkheden, en maken een concreet voorstel met verwachte ROI." }
      ]} />

      <div className="animate-fade-in py-12 md:py-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-12 md:mb-20 relative">
            <div className="absolute -top-8 md:-top-12 left-0 bg-[#ff6d5a]/10 px-4 py-2 rounded-full border border-[#ff6d5a]/30 flex items-center gap-2">
              <span className="text-[10px] font-black text-[#ff6d5a] tracking-widest uppercase">Specialist op</span>
              <span className="text-[10px] font-black text-white tracking-widest uppercase italic">n8n-expert.be</span>
            </div>

            <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4 mt-12">Core Competence</div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-tight md:leading-none">
              DE <span className="text-[#ff6d5a] italic">n8n</span> EXPERT.<br/>
              WAREGEM TOT BRUGGE.
            </h1>
            <p className="text-base md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
              Zoekt u een ervaren n8n expert in West-Vlaanderen? Als gecertificeerde n8n specialist help ik bedrijven van Brugge tot Kortrijk met het bouwen van krachtige automatiseringen. Stop met betalen per taak - schakel over naar schaalbare, kostenefficiënte workflow automatisering.
            </p>

            <ExpertQuote
              quote="n8n is de toekomst van workflow orchestration voor KMO's. Het combineert de kracht van enterprise iPaaS-oplossingen met de flexibiliteit van open-source en de betaalbaarheid die kleine bedrijven nodig hebben."
              context="Over waarom n8n de beste keuze is voor business process automation"
            />
          </div>

          {/* What does n8n stand for */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Waar staat <span className="text-[#ff6d5a]">n8n</span> voor?
            </h2>
            <div className="bg-[#18181b] p-8 md:p-10 rounded-[2.5rem] border border-white/10">
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                De naam "n8n" staat voor "<strong className="text-white">nodemation</strong>" - een samentrekking van "node" en "automation". De "8" vervangt de acht letters tussen de n's (o-d-e-m-a-t-i-o), vergelijkbaar met hoe "i18n" staat voor "internationalization".
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                n8n is een <strong className="text-[#ff6d5a]">open-source workflow automatiseringsplatform</strong> en low-code automation tool dat visuele programmering combineert met krachtige integratiemogelijkheden. Als moderne iPaaS-oplossing (Integration Platform as a Service) biedt het platform meer dan 400 native integraties voor business process automation. Via custom code nodes kunt u vrijwel elke REST API of webhook aansluiten voor complete workflow orchestration.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-black/30 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-black text-[#ff6d5a] mb-2">400+</div>
                  <div className="text-zinc-400 text-sm">Native Integraties</div>
                </div>
                <div className="bg-black/30 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-black text-[#7c3aed] mb-2">100%</div>
                  <div className="text-zinc-400 text-sm">Open Source</div>
                </div>
                <div className="bg-black/30 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-black text-white mb-2">∞</div>
                  <div className="text-zinc-400 text-sm">Onbeperkte Workflows</div>
                </div>
              </div>
            </div>
          </div>

          {/* Who is behind n8n */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Wie zit er achter <span className="text-[#ff6d5a]">n8n</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent p-8 rounded-[2.5rem] border border-[#7c3aed]/20">
                <h3 className="text-xl font-bold text-white mb-4">Jan Oberhauser - Oprichter & CEO</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  n8n werd in 2019 opgericht door <strong className="text-white">Jan Oberhauser</strong>, een Duitse ontwikkelaar die gefrustreerd was door de beperkingen en hoge kosten van bestaande automatiseringstools.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Het bedrijf is gevestigd in Berlijn en heeft inmiddels meer dan $50 miljoen aan funding opgehaald van investeerders zoals Sequoia Capital en Felicis Ventures.
                </p>
              </div>
              <div className="bg-[#18181b] p-8 rounded-[2.5rem] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Waarom n8n werd gecreëerd</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Kostentransparantie</strong> - Geen verborgen kosten per taak</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Data-eigenaarschap</strong> - Uw data blijft van u</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Flexibiliteit</strong> - Aanpasbaar aan elke use case</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Community-gedreven</strong> - Open source met actieve bijdragers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to become an n8n expert */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Hoe word je een <span className="text-[#ff6d5a]">expert</span> in n8n?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-3xl">
              Een n8n expert worden vereist een combinatie van technische vaardigheden, praktijkervaring en continue leren. Hier is het pad dat ik zelf heb gevolgd:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#18181b] p-6 rounded-2xl border border-white/10 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#ff6d5a] rounded-full flex items-center justify-center text-white font-black text-sm">1</div>
                <h4 className="text-white font-bold mb-3 mt-2">Basis Automatisering</h4>
                <p className="text-zinc-400 text-sm">Start met eenvoudige workflows: triggers, HTTP requests, en data transformaties. Leer de interface grondig kennen.</p>
              </div>
              <div className="bg-[#18181b] p-6 rounded-2xl border border-white/10 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#ff6d5a] rounded-full flex items-center justify-center text-white font-black text-sm">2</div>
                <h4 className="text-white font-bold mb-3 mt-2">JavaScript & APIs</h4>
                <p className="text-zinc-400 text-sm">Leer JavaScript voor custom code nodes en begrijp REST APIs. Dit opent de deur naar oneindige mogelijkheden.</p>
              </div>
              <div className="bg-[#18181b] p-6 rounded-2xl border border-white/10 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#ff6d5a] rounded-full flex items-center justify-center text-white font-black text-sm">3</div>
                <h4 className="text-white font-bold mb-3 mt-2">Self-Hosting</h4>
                <p className="text-zinc-400 text-sm">Beheer n8n via Docker en leer over server management, backups, en security best practices.</p>
              </div>
              <div className="bg-[#18181b] p-6 rounded-2xl border border-white/10 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#ff6d5a] rounded-full flex items-center justify-center text-white font-black text-sm">4</div>
                <h4 className="text-white font-bold mb-3 mt-2">AI Integraties</h4>
                <p className="text-zinc-400 text-sm">Integreer AI-modellen, bouw agents, en combineer n8n met LLMs voor intelligente automatisering.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#ff6d5a]/10 border border-[#ff6d5a]/20 rounded-2xl">
              <p className="text-zinc-300">
                <strong className="text-white">Pro tip:</strong> De beste manier om expert te worden is door echte problemen op te lossen. Begin met het automatiseren van uw eigen bedrijfsprocessen voordat u voor klanten werkt. Zo bouwt u een portfolio en leert u de valkuilen kennen.
              </p>
            </div>
          </div>

          {/* Consultant vs Developer */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Wat is het verschil tussen een n8n <span className="text-[#ff6d5a]">consultant</span> en een <span className="text-[#7c3aed]">developer</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent p-8 rounded-[2.5rem] border border-[#ff6d5a]/20">
                <h3 className="text-2xl font-bold text-[#ff6d5a] mb-6">n8n Consultant</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <div>
                      <strong className="text-white">Strategisch advies</strong>
                      <p className="text-zinc-400 text-sm mt-1">Analyseert bedrijfsprocessen en identificeert automatiseringsmogelijkheden</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <div>
                      <strong className="text-white">ROI-berekeningen</strong>
                      <p className="text-zinc-400 text-sm mt-1">Berekent de business case en verwachte tijdsbesparing</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <div>
                      <strong className="text-white">Projectmanagement</strong>
                      <p className="text-zinc-400 text-sm mt-1">Coördineert implementaties en beheert stakeholders</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6d5a]">✓</span>
                    <div>
                      <strong className="text-white">Training & overdracht</strong>
                      <p className="text-zinc-400 text-sm mt-1">Leert teams om workflows zelf te beheren</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent p-8 rounded-[2.5rem] border border-[#7c3aed]/20">
                <h3 className="text-2xl font-bold text-[#7c3aed] mb-6">n8n Developer</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed]">✓</span>
                    <div>
                      <strong className="text-white">Technische implementatie</strong>
                      <p className="text-zinc-400 text-sm mt-1">Bouwt complexe workflows en custom nodes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed]">✓</span>
                    <div>
                      <strong className="text-white">API integraties</strong>
                      <p className="text-zinc-400 text-sm mt-1">Koppelt externe systemen en databases</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed]">✓</span>
                    <div>
                      <strong className="text-white">Infrastructuur</strong>
                      <p className="text-zinc-400 text-sm mt-1">Beheert hosting, Docker, en server configuratie</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed]">✓</span>
                    <div>
                      <strong className="text-white">Debugging & optimalisatie</strong>
                      <p className="text-zinc-400 text-sm mt-1">Lost technische problemen op en verbetert performance</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#18181b] border border-white/10 rounded-2xl">
              <p className="text-zinc-300">
                <strong className="text-white">Bij AI Automatisatie</strong> combineer ik beide rollen. Ik adviseer over de beste aanpak én implementeer de technische oplossing. Dit zorgt voor een naadloze overgang van strategie naar werkende automatisering.
              </p>
            </div>

            <ExpertQuote
              quote="Het verschil tussen een n8n consultant en developer is als het verschil tussen een architect en aannemer. De beste resultaten krijg je wanneer dezelfde persoon beide rollen combineert."
              context="Over de ideale n8n implementatie aanpak"
            />
          </div>

          {/* Cost of hiring */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Wat kost het om een n8n specialist in te huren?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-3xl">
              De kosten voor een n8n expert variëren sterk afhankelijk van ervaring, complexiteit en engagement type. Hier is een overzicht van de markt:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#18181b] p-8 rounded-[2.5rem] border border-white/10">
                <div className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Freelancer</div>
                <div className="text-3xl font-black text-white mb-4">€50 - €100<span className="text-lg text-zinc-400">/uur</span></div>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Junior tot mid-level expertise</li>
                  <li>• Geschikt voor eenvoudige workflows</li>
                  <li>• Variabele beschikbaarheid</li>
                  <li>• Beperkte ondersteuning na oplevering</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent p-8 rounded-[2.5rem] border border-[#ff6d5a]/30 relative">
                <div className="absolute top-4 right-4 bg-[#ff6d5a] px-3 py-1 rounded-full text-xs font-bold text-white">Aanbevolen</div>
                <div className="text-[#ff6d5a] text-sm font-bold uppercase tracking-wider mb-2">Specialist</div>
                <div className="text-3xl font-black text-white mb-4">€100 - €150<span className="text-lg text-zinc-400">/uur</span></div>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Senior expertise met bewezen track record</li>
                  <li>• Complexe integraties mogelijk</li>
                  <li>• Inclusief advies en strategie</li>
                  <li>• Ondersteuning en documentatie</li>
                </ul>
              </div>
              <div className="bg-[#18181b] p-8 rounded-[2.5rem] border border-white/10">
                <div className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Agency</div>
                <div className="text-3xl font-black text-white mb-4">€150 - €250<span className="text-lg text-zinc-400">/uur</span></div>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Team van specialisten</li>
                  <li>• Enterprise-grade oplossingen</li>
                  <li>• SLA's en garanties</li>
                  <li>• Hogere overhead kosten</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-2xl">
              <p className="text-zinc-300">
                <strong className="text-white">Project-based pricing</strong> is vaak voordeliger dan uurtarieven. Een typisch automatiseringsproject voor business process automation kost tussen de €2.000 en €10.000, afhankelijk van complexiteit. Bij AI Automatisatie werk ik transparant met vaste projectprijzen voor hyperautomation en RPA-oplossingen.
              </p>
            </div>

            <ExpertQuote
              quote="De ROI van workflow automatisering is meetbaar vanaf dag één. Een gemiddelde KMO bespaart 15-20 uur per week door repetitieve taken te automatiseren - dat is meer dan €30.000 per jaar aan productiviteitswinst."
              context="Over de return on investment van n8n implementaties"
            />
          </div>

          {/* What is better than n8n */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Wat is beter dan <span className="text-[#ff6d5a]">n8n</span>?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-3xl">
              "Beter" hangt af van uw specifieke situatie. n8n is niet altijd de beste keuze - hier is een eerlijke vergelijking:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-[#18181b] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-zinc-400 font-normal">Scenario</th>
                    <th className="text-left p-4 text-zinc-400 font-normal">Beste Keuze</th>
                    <th className="text-left p-4 text-zinc-400 font-normal">Waarom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white">Volledige controle & privacy</td>
                    <td className="p-4 text-[#ff6d5a] font-bold">n8n (self-hosted)</td>
                    <td className="p-4 text-zinc-400">Data blijft op uw eigen server</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white">Eenvoudige zapjes zonder IT</td>
                    <td className="p-4 text-[#7c3aed] font-bold">Zapier</td>
                    <td className="p-4 text-zinc-400">Meest gebruiksvriendelijk voor beginners</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white">Visuele complexe workflows</td>
                    <td className="p-4 text-[#7c3aed] font-bold">Make (Integromat)</td>
                    <td className="p-4 text-zinc-400">Uitstekende visuele interface</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white">Microsoft ecosysteem</td>
                    <td className="p-4 text-[#7c3aed] font-bold">Power Automate</td>
                    <td className="p-4 text-zinc-400">Naadloze Office 365 integratie</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white">Schaalbare AI automatisering</td>
                    <td className="p-4 text-[#ff6d5a] font-bold">n8n</td>
                    <td className="p-4 text-zinc-400">Beste AI/LLM integraties</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-white">Kostenbewust opschalen</td>
                    <td className="p-4 text-[#ff6d5a] font-bold">n8n</td>
                    <td className="p-4 text-zinc-400">Vaste kosten, onbeperkte taken</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/n8n-vs-zapier" className="text-[#ff6d5a] hover:underline">→ Lees meer: n8n vs Zapier</Link>
              <Link to="/n8n-vs-make" className="text-[#ff6d5a] hover:underline">→ Lees meer: n8n vs Make</Link>
            </div>
          </div>

          {/* Original comparison cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 md:mb-24">
            <div className="bg-[#18181b] p-10 rounded-[2.5rem] border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">n8n vs Zapier</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/5 pb-4 text-sm">
                  <span className="text-zinc-400">Kosten bij opschalen</span>
                  <span className="text-red-400 font-bold">Zapier: Hoog</span>
                  <span className="text-[#ff6d5a] font-bold">n8n: Vast</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4 text-sm">
                  <span className="text-zinc-400">Data Privacy</span>
                  <span className="text-zinc-400">Cloud Hosting</span>
                  <span className="text-[#7c3aed] font-bold">Self-Hosted</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4 text-sm">
                  <span className="text-zinc-400">Aanpasbaarheid</span>
                  <span className="text-zinc-400">Beperkt</span>
                  <span className="text-[#ff6d5a] font-bold">Onbeperkt</span>
                </div>
                <div className="flex justify-between pb-4 text-sm">
                  <span className="text-zinc-400">AI Integraties</span>
                  <span className="text-zinc-400">Basis</span>
                  <span className="text-[#ff6d5a] font-bold">Geavanceerd</span>
                </div>
              </div>
            </div>

            <div className="bg-[#ff6d5a]/5 border border-[#ff6d5a]/20 p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl">🐳</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Docker Expertise</h3>
              <p className="text-zinc-400 mb-8">
                Ik installeer n8n lokaal of in de cloud via Docker voor maximale performance, security en controle over uw data.
              </p>
              <code className="block bg-black/40 p-6 rounded-2xl text-[#ff6d5a] text-xs font-mono">
                docker-compose up -d n8n
              </code>
            </div>
          </div>

          {/* Why choose a local expert */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Waarom een lokale n8n expert in <span className="text-[#ff6d5a]">West-Vlaanderen</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#18181b] p-6 rounded-2xl border border-white/10">
                <div className="text-3xl mb-4">🤝</div>
                <h4 className="text-white font-bold mb-2">Persoonlijk Contact</h4>
                <p className="text-zinc-400 text-sm">Face-to-face meetings in Brugge, Kortrijk, Oostende of bij u op kantoor. Geen anonieme offshore outsourcing.</p>
              </div>
              <div className="bg-[#18181b] p-6 rounded-2xl border border-white/10">
                <div className="text-3xl mb-4">⚡</div>
                <h4 className="text-white font-bold mb-2">Snelle Responstijd</h4>
                <p className="text-zinc-400 text-sm">Zelfde tijdzone, geen taalbarrière. Problemen worden snel opgelost zonder wachten op andere continenten.</p>
              </div>
              <div className="bg-[#18181b] p-6 rounded-2xl border border-white/10">
                <div className="text-3xl mb-4">🏢</div>
                <h4 className="text-white font-bold mb-2">Lokale Marktkennis</h4>
                <p className="text-zinc-400 text-sm">Begrijp Belgische bedrijfsprocessen, GDPR-vereisten en de lokale softwarelandschap.</p>
              </div>
            </div>
          </div>

          {/* Pricing Infographic */}
          <ExpertPricingChart
            title="n8n Expert Tarieven Overzicht"
            tiers={[
              {
                name: 'Freelancer',
                priceRange: '€50 - €100/uur',
                features: ['Junior tot mid-level', 'Eenvoudige workflows', 'Variabele beschikbaarheid']
              },
              {
                name: 'Specialist',
                priceRange: '€100 - €150/uur',
                features: ['Senior expertise', 'Complexe integraties', 'Advies & strategie', 'Ondersteuning inbegrepen'],
                recommended: true
              },
              {
                name: 'Agency',
                priceRange: '€150 - €250/uur',
                features: ['Team van specialisten', 'Enterprise oplossingen', 'SLA garanties']
              }
            ]}
          />

          {/* FAQ Section */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Veelgestelde vragen over n8n experts
            </h2>
            <div className="space-y-4">
              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Heb ik technische kennis nodig om met een n8n expert te werken?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Nee, absoluut niet. Als n8n expert vertaal ik uw bedrijfsbehoeften naar technische oplossingen. U beschrijft wat u wilt bereiken, ik bouw de automatisering. Na oplevering krijgt u training zodat u eenvoudige aanpassingen zelf kunt doen.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Hoe lang duurt een typisch n8n project?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Dit varieert sterk per project. Een eenvoudige workflow (bijv. facturen automatisch verwerken) kan binnen een week live zijn. Complexe integraties met meerdere systemen en AI-componenten nemen 2-4 weken in beslag. We starten altijd met een korte discovery fase om de scope te bepalen.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Kan ik n8n ook zelf leren?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Ja, n8n heeft een lage instapdrempel voor basis automatiseringen. Maar voor complexe integraties, API-koppelingen en productie-waardige workflows is expertise nodig. Veel bedrijven beginnen zelf en schakelen een expert in wanneer ze vastlopen of willen opschalen. <Link to="/wat-is-n8n" className="text-[#ff6d5a] hover:underline">Lees meer over wat n8n is →</Link>
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Wat als mijn workflows niet meer werken na oplevering?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Ik bied onderhoudspakketten aan voor continue ondersteuning. Dit omvat monitoring, proactieve updates wanneer API's veranderen, en snelle troubleshooting. Ook zonder onderhoudspakket bent u niet aan mij gebonden - alle workflows zijn gedocumenteerd en overdraagbaar.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Werkt n8n samen met mijn bestaande software?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Vrijwel zeker. n8n heeft 400+ native integraties met populaire tools zoals Exact Online, Teamleader, Outlook, Google Workspace, en vele anderen. Voor software zonder native integratie kunnen we via REST API's of webhooks koppelen. In 95% van de gevallen is integratie mogelijk.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Kan een n8n expert ook AI integreren in mijn workflows?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Ja, dit is zelfs een van de sterkste punten van n8n. Ik integreer regelmatig AI-modellen zoals GPT-4, Claude, en open-source LLMs in workflows. Denk aan automatische e-mailclassificatie, document samenvatting, of complete <Link to="/n8n-ai-agent" className="text-[#ff6d5a] hover:underline">AI-agents</Link> die zelfstandig taken uitvoeren.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Is n8n geschikt voor grote bedrijven?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Absoluut. n8n wordt gebruikt door bedrijven van elke grootte, van startups tot enterprise. De self-hosted optie biedt enterprise-grade security en compliance. Voor grote implementaties bied ik multi-instance setups, load balancing, en dedicated ondersteuning.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Hoe begin ik met een n8n expert?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Start met een vrijblijvend intake gesprek. We bespreken uw huidige processen, identificeren automatiseringsmogelijkheden, en ik maak een concreet voorstel met verwachte ROI. Geen verplichtingen - u beslist of het plan bij uw bedrijf past.
                </div>
              </details>
            </div>
          </div>

          {/* Related Pages */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-2xl font-bold text-white mb-6">Gerelateerde Onderwerpen</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link to="/wat-is-n8n" className="bg-[#18181b] p-4 rounded-xl border border-white/10 hover:border-[#ff6d5a]/50 transition-colors">
                <div className="text-[#ff6d5a] font-bold mb-1">Wat is n8n?</div>
                <div className="text-zinc-400 text-sm">Complete introductie</div>
              </Link>
              <Link to="/n8n-ai-agent" className="bg-[#18181b] p-4 rounded-xl border border-white/10 hover:border-[#ff6d5a]/50 transition-colors">
                <div className="text-[#ff6d5a] font-bold mb-1">n8n AI Agent</div>
                <div className="text-zinc-400 text-sm">AI automatisering</div>
              </Link>
              <Link to="/n8n-mcp" className="bg-[#18181b] p-4 rounded-xl border border-white/10 hover:border-[#ff6d5a]/50 transition-colors">
                <div className="text-[#ff6d5a] font-bold mb-1">n8n MCP</div>
                <div className="text-zinc-400 text-sm">Model Context Protocol</div>
              </Link>
              <Link to="/workflow-automatisering" className="bg-[#18181b] p-4 rounded-xl border border-white/10 hover:border-[#ff6d5a]/50 transition-colors">
                <div className="text-[#ff6d5a] font-bold mb-1">Workflow Automatisering</div>
                <div className="text-zinc-400 text-sm">Basis concepten</div>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-24 border-t border-white/5 text-center">
            <h2 className="text-4xl font-black text-white mb-6 uppercase">Klaar voor de switch?</h2>
            <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
              Ontdek hoe een n8n expert uw bedrijfsprocessen kan transformeren. Plan een vrijblijvend gesprek en ontvang een persoonlijk automatiseringsadvies.
            </p>
            <button className="bg-[#ff6d5a] text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-[#ff6d5a]/20">
              START UW n8n MIGRATIE
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default N8nExpertPage;
