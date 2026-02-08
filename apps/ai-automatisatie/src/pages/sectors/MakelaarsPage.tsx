import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbSchema, FAQSchema, ROIChart, ServiceSchema } from '@repo/ui';

const MakelaarsPage: React.FC = () => {
  const painPoints = [
    'Handmatig invoeren van nieuwe panden op meerdere portalen (Immoweb, Zimmo, Logic-Immo)',
    'Eindeloos telefoonverkeer voor bezichtigingen plannen en herplannen',
    'Follow-up met potentiële kopers vergeten door gebrek aan overzicht',
    'Documentatie voorbereiden voor elke verkoop kost uren',
    'Lead management over meerdere kanalen (website, portalen, telefoon, email)',
    'Geen inzicht in welke kanalen de beste leads opleveren',
    'Handmatige prijsupdates op alle platforms bij wijzigingen',
  ];

  const solutions = [
    {
      title: 'Multi-Portal Publishing',
      desc: 'Eén keer invoeren, automatisch publiceren op Immoweb, Zimmo, Logic-Immo en uw eigen website. Updates synchroniseren automatisch.',
      icon: '🏠'
    },
    {
      title: 'Bezichtiging Scheduling',
      desc: 'Geautomatiseerde kalender integratie. Klanten kiezen zelf een slot, bevestigingen en herinneringen gaan automatisch.',
      icon: '📅'
    },
    {
      title: 'Lead Nurturing',
      desc: 'Automatische follow-up emails voor kandidaat-kopers op basis van hun interesse en gedrag. Niemand valt door de mazen.',
      icon: '🎯'
    },
    {
      title: 'Document Generatie',
      desc: 'Compromissen, bodems, en andere documenten automatisch voorbereiden met de juiste partij- en pandgegevens.',
      icon: '📋'
    },
    {
      title: 'Lead Scoring & Tracking',
      desc: 'AI analyseert welke leads het meest kansrijk zijn op basis van interacties en gedrag.',
      icon: '📊'
    },
    {
      title: 'Klant Portaal Updates',
      desc: 'Automatische status updates naar verkopers over bezichtigingen, interesse en biedingen.',
      icon: '👥'
    },
  ];

  const automationExamples = [
    {
      process: 'Nieuw pand publiceren',
      manual: '45 min per pand',
      automated: '5 min invoer, rest automatisch',
      saving: '89%'
    },
    {
      process: 'Bezichtiging plannen',
      manual: '3-4 telefoontjes',
      automated: 'Zelf-booking link',
      saving: '100%'
    },
    {
      process: 'Lead follow-up',
      manual: '15 min per lead',
      automated: 'Automatische nurture flow',
      saving: '95%'
    },
    {
      process: 'Compromis voorbereiden',
      manual: '2 uur per document',
      automated: '10 min controle',
      saving: '92%'
    },
    {
      process: 'Prijswijziging doorvoeren',
      manual: '20 min (alle portalen)',
      automated: 'Automatisch gesync',
      saving: '100%'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Automatisering voor Makelaars & Vastgoed | AI Automatisatie</title>
        <meta name="description" content="Automatiseer uw vastgoedkantoor met n8n. Multi-portal publishing, bezichtiging scheduling, lead nurturing en document generatie. Meer verkopen, minder admin." />
        <link rel="canonical" href="https://ai-automatisatie.be/sector/makelaars" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "Sectoren", url: "https://ai-automatisatie.be/sectoren" },
        { name: "Makelaars", url: "https://ai-automatisatie.be/sector/makelaars" }
      ]} />

      <ServiceSchema
        name="Automatisering voor Makelaars"
        description="Workflow automatisering voor vastgoedkantoren. Multi-portal publishing, bezichtiging scheduling en lead nurturing automatisch."
        url="https://ai-automatisatie.be/sector/makelaars"
      />

      <FAQSchema faqs={[
        { question: "Kan ik panden automatisch publiceren op meerdere portalen?", answer: "Ja, n8n kan nieuwe panden automatisch publiceren op Immoweb, Zimmo, Logic-Immo en uw eigen website. Eén keer invoeren, overal zichtbaar." },
        { question: "Hoe werkt automatische bezichtiging scheduling?", answer: "Potentiële kopers kunnen online een tijdslot kiezen. De workflow stuurt automatisch bevestigingen, herinneringen en navigatie-instructies." },
        { question: "Hoeveel tijd bespaar ik als makelaar?", answer: "Een vastgoedkantoor met 2 medewerkers bespaart typisch 16+ uur per week door publicatie, scheduling en follow-up te automatiseren." }
      ]} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Sector</div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Automatisering voor <span className="text-[#ff6d5a]">Makelaars</span> & Vastgoed
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              Meer panden verkopen met minder administratie. Automatiseer uw vastgoedkantoor van lead tot verkoop. Focus op relaties, niet op data-invoer.
            </p>
          </header>

          {/* What is automation for real estate */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Wat is automatisering voor <span className="text-[#ff6d5a]">vastgoedkantoren</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  Automatisering voor makelaars betekent het slim koppelen van alle systemen die u dagelijks gebruikt: van <strong className="text-white">vastgoedportalen</strong> tot uw CRM, van email tot kalender.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Met <Link to="/wat-is-n8n" className="text-[#ff6d5a] hover:underline">n8n workflows</Link> stromen gegevens automatisch tussen systemen. Een nieuw pand in uw CRM verschijnt direct op alle portalen. Een lead die interesse toont krijgt automatisch de juiste opvolging.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">De vastgoedmarkt verandert</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Kopers verwachten snelheid</strong> - Eerste reactie bepaalt vaak de verkoop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Meer kanalen</strong> - Immoweb, Zimmo, sociale media, Google Ads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Verkopers willen updates</strong> - Real-time inzicht in interesse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Marges onder druk</strong> - Efficiëntie is het verschil</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pain Points */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Kent u dit in uw kantoor?</h2>
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
                  <strong className="text-white">Herkenbaar?</strong> U bent niet alleen. De meeste vastgoedkantoren verliezen 40% van hun tijd aan administratie die geautomatiseerd kan worden.
                </p>
              </div>
            </div>
          </section>

          {/* Time savings table */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Hoeveel tijd bespaart u met <span className="text-[#ff6d5a]">automatisering</span>?
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Automatiseringsoplossingen voor makelaars</h2>
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

          {/* Example Workflow - Enhanced */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Voorbeeld: Volledige <span className="text-[#ff6d5a]">Lead-to-Sale</span> Workflow
            </h2>
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#ff6d5a]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff6d5a] font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Lead komt binnen</h3>
                    <p className="text-zinc-400">Via Immoweb, Zimmo, website of telefoon → automatisch in CRM met bron-tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#ff6d5a]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff6d5a] font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Instant Response</h3>
                    <p className="text-zinc-400">Binnen 2 minuten: gepersonaliseerde email met pand brochure + bezichtigingslink</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#ff6d5a]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff6d5a] font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Bezichtiging Boeken</h3>
                    <p className="text-zinc-400">Lead kiest zelf een slot → kalender sync → bevestiging + reminder 24u vooraf</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#ff6d5a]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff6d5a] font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Follow-up Na Bezichtiging</h3>
                    <p className="text-zinc-400">Dag erna: automatische "Wat vond u ervan?" email met feedback formulier</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#ff6d5a]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff6d5a] font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Nurture of Bod</h3>
                    <p className="text-zinc-400">Interesse? → Bod workflow. Niet overtuigd? → Automatisch alternatieve panden voorstellen</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#7c3aed]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#7c3aed] font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Verkoop & Documenten</h3>
                    <p className="text-zinc-400">Bij akkoord: automatisch compromis genereren met alle partij- en pandgegevens</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Integrations - Enhanced */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Welke <span className="text-[#ff6d5a]">vastgoedsoftware</span> koppelen we?
            </h2>
            <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Vastgoedportalen</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Immoweb</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Zimmo</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Logic-Immo</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Immoscoop</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">CRM & Software</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Whise</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Sweepbright</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Zabun</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Omnicasa</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Planning & Communicatie</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Calendly</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Google Calendar</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Outlook</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">WhatsApp Business</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Marketing & Analytics</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Mailchimp</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Facebook Ads</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Google Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ROI Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Wat levert automatisering <span className="text-[#ff6d5a]">op</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">40%</div>
                <p className="text-zinc-400">Minder administratie</p>
                <p className="text-zinc-400 text-sm mt-2">Meer tijd voor klanten</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">2x</div>
                <p className="text-zinc-400">Snellere lead response</p>
                <p className="text-zinc-400 text-sm mt-2">Binnen minuten ipv uren</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">25%</div>
                <p className="text-zinc-400">Meer conversies</p>
                <p className="text-zinc-400 text-sm mt-2">Door betere opvolging</p>
              </div>
            </div>
          </section>

          {/* ROI Infographic */}
          <ROIChart
            title="ROI Calculator: Makelaars"
            subtitle="Voorbeeld berekening voor een vastgoedkantoor met 2 medewerkers"
            items={[
              { task: 'Panden publiceren', hoursPerWeek: 4, automatedHours: 0.5, hourlyRate: 45 },
              { task: 'Bezichtigingen plannen', hoursPerWeek: 5, automatedHours: 0, hourlyRate: 45 },
              { task: 'Lead follow-up', hoursPerWeek: 6, automatedHours: 0.5, hourlyRate: 45 },
              { task: 'Documenten voorbereiden', hoursPerWeek: 3, automatedHours: 0.5, hourlyRate: 45 },
            ]}
            summary={{
              hoursSaved: '16.5 uur/week',
              yearlySavings: '€38.610',
              investment: '€4.000 - €8.000',
              roi: '5x - 10x in jaar 1'
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
                  Werkt automatisering met mijn huidige vastgoedsoftware?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Vrijwel zeker. De meeste Belgische vastgoedsoftware (Whise, Sweepbright, Zabun) heeft API's waarmee we kunnen koppelen. Ook Immoweb en andere portalen kunnen we integreren. Tijdens een intake check ik welke koppelingen mogelijk zijn.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Hoeveel kost automatisering voor een vastgoedkantoor?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Een basisimplementatie (multi-portal sync + lead nurturing) start rond €4.000. Uitgebreide implementaties met document generatie en AI-scoring kosten €8.000-€15.000. De investering verdient zich typisch binnen 3-6 maanden terug door tijdsbesparing.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Kan ik automatisering zelf beheren na implementatie?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Ja, n8n heeft een visuele interface die zonder programmeerkennis te gebruiken is. Na oplevering krijgt u training zodat u eenvoudige aanpassingen zelf kunt doen, zoals email templates wijzigen of tijdsintervallen aanpassen.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Hoe snel kunnen we starten?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Na een intake gesprek kan de eerste automatisering binnen 1-2 weken live zijn. We beginnen met de meest impactvolle workflow (vaak lead response) en breiden stapsgewijs uit. Uw kantoor kan gewoon doorwerken tijdens implementatie.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Is mijn klantdata veilig?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Ja. We kunnen n8n self-hosted installeren waardoor data nooit naar externe servers gaat. Alle koppelingen gebruiken beveiligde verbindingen (HTTPS/SSL) en we volgen GDPR-richtlijnen. U houdt volledige controle over uw data.
                </div>
              </details>
            </div>
          </section>

          {/* Related Sectors */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-2xl font-bold text-white mb-6">Gerelateerde sectoren</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link to="/sector/bouw" className="bg-[#18181b] p-6 rounded-xl border border-white/10 hover:border-[#7c3aed]/50 transition-colors group">
                <div className="text-[#7c3aed] font-bold mb-2 group-hover:text-[#8b5cf6]">Bouw & Constructie</div>
                <div className="text-zinc-400 text-sm">Vastgoed en bouw gaan hand in hand. Dezelfde klanten, vergelijkbare projectmatige aanpak.</div>
              </Link>
              <Link to="/sector/retail" className="bg-[#18181b] p-6 rounded-xl border border-white/10 hover:border-[#7c3aed]/50 transition-colors group">
                <div className="text-[#7c3aed] font-bold mb-2 group-hover:text-[#8b5cf6]">Retail & E-commerce</div>
                <div className="text-zinc-400 text-sm">Sales-gedreven sectoren met vergelijkbare lead nurturing en klantopvolging processen.</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Meer verkopen, minder admin?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Ontdek hoe automatisering uw vastgoedkantoor kan transformeren. Plan een vrijblijvend gesprek voor een persoonlijke analyse.
            </p>
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Vraag een demo aan
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default MakelaarsPage;
