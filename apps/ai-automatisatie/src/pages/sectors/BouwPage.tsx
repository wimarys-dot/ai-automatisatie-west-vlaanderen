import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbSchema, FAQSchema, ROIChart, ServiceSchema } from '@repo/ui';

const BouwPage: React.FC = () => {
  const painPoints = [
    'Handmatig offertes maken en opvolgen kost uren per week',
    'Planning en resource management over meerdere werven tegelijk',
    'Communicatie met onderaannemers en leveranciers via WhatsApp chaos',
    'Werfverslagen en documentatie bijhouden vergt discipline',
    'Facturatie na oplevering fasen loopt vertraging op',
    'Geen real-time inzicht in materiaalvoorraad',
    'Certificaten en keuringen handmatig opvolgen',
  ];

  const solutions = [
    {
      title: 'Offerte Automation',
      desc: 'Automatisch offertes genereren op basis van meetstaten. Follow-up workflows tot tekening van de klant.',
      icon: '📝'
    },
    {
      title: 'Planning Sync',
      desc: 'Werf planning synchroniseren met teams, onderaannemers en materiaal leveringen in real-time.',
      icon: '📅'
    },
    {
      title: 'Werf Documentatie',
      desc: 'Foto uploads automatisch organiseren per project, werfverslagen genereren, en archiveren.',
      icon: '📸'
    },
    {
      title: 'Voorraad & Bestelflows',
      desc: 'Automatische bestellingen wanneer materiaal onder minimum niveau zakt. Nooit meer stilstand.',
      icon: '🏗️'
    },
    {
      title: 'Onderaannemer Portaal',
      desc: 'Gestructureerde communicatie met onderaannemers: opdrachten, planning, en documenten op één plek.',
      icon: '👷'
    },
    {
      title: 'Certificaat Tracking',
      desc: 'Automatische reminders voor verlopen keuringen, certificaten en veiligheidsdocumenten.',
      icon: '📋'
    },
  ];

  const automationExamples = [
    {
      process: 'Offerte opstellen',
      manual: '3-4 uur per offerte',
      automated: '30 min met template',
      saving: '85%'
    },
    {
      process: 'Werfverslag maken',
      manual: '45 min per dag',
      automated: '5 min foto upload',
      saving: '89%'
    },
    {
      process: 'Materiaal bestellen',
      manual: 'Check + bellen + mailen',
      automated: 'Automatisch bij drempel',
      saving: '100%'
    },
    {
      process: 'Facturatie na fase',
      manual: '2 uur per project',
      automated: 'Automatisch bij milestone',
      saving: '95%'
    },
    {
      process: 'Certificaat opvolging',
      manual: 'Excel bijhouden',
      automated: 'Automatische reminders',
      saving: '100%'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Automatisering voor Bouw & Constructie | AI Automatisatie</title>
        <meta name="description" content="Automatiseer uw bouwbedrijf met n8n. Van offerte tot oplevering: planning sync, werfverslagen, materiaal bestellingen en facturatie. Minder admin, meer bouwen." />
        <link rel="canonical" href="https://ai-automatisatie.be/sector/bouw" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "Sectoren", url: "https://ai-automatisatie.be/sectoren" },
        { name: "Bouw", url: "https://ai-automatisatie.be/sector/bouw" }
      ]} />

      <ServiceSchema
        name="Automatisering voor Bouwbedrijven"
        description="Workflow automatisering voor aannemers en bouwbedrijven. Offerte generatie, werfverslagen en materiaal bestellingen automatisch."
        url="https://ai-automatisatie.be/sector/bouw"
      />

      <FAQSchema faqs={[
        { question: "Kunnen offertes automatisch gegenereerd worden?", answer: "Ja, n8n kan offertes genereren op basis van meetstaten en templates. Prijscalculaties, marges en BTW automatisch berekend." },
        { question: "Hoe werkt automatische werfverslaglegging?", answer: "Projectleiders vullen een simpel formulier in op de werf. De workflow genereert automatisch een professioneel verslag met foto's en stuurt dit naar de klant." },
        { question: "Wat is de ROI voor een bouwbedrijf?", answer: "Een aannemer met 2 projectleiders bespaart typisch 15 uur per week. Bij €55/uur is de jaarlijkse besparing €43.000+, ROI binnen 3 maanden." }
      ]} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Sector</div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Automatisering voor <span className="text-[#ff6d5a]">Bouw</span> & Constructie
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              Van offerte tot oplevering. Automatiseer de administratieve last van uw bouwbedrijf. Meer tijd op de werf, minder achter de computer.
            </p>
          </header>

          {/* What is automation for construction */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Wat is automatisering voor <span className="text-[#ff6d5a]">bouwbedrijven</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  Automatisering in de bouw betekent het <strong className="text-white">digitaal verbinden</strong> van alle administratieve processen: van aanvraag tot facturatie, van planning tot documentatie.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Met <Link to="/wat-is-n8n" className="text-[#ff6d5a] hover:underline">n8n workflows</Link> stromen gegevens automatisch tussen uw systemen. Een getekende offerte triggert automatisch de planning, materiaalbestellingen en klantcommunicatie.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">Waarom nu automatiseren?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Personeelstekort</strong> - Elke uur admin is een uur minder op de werf</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Projectcomplexiteit</strong> - Meer werven, meer coördinatie nodig</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Documentatie-eisen</strong> - Steeds meer rapportage verplicht</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Marges onder druk</strong> - Efficiëntie bepaalt winstgevendheid</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pain Points */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Herkenbare uitdagingen?</h2>
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
                  <strong className="text-white">U bent niet alleen.</strong> De gemiddelde aannemer besteedt 30% van zijn tijd aan administratie. Dat kan anders.
                </p>
              </div>
            </div>
          </section>

          {/* Time savings table */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Concrete <span className="text-[#ff6d5a]">tijdsbesparing</span>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Automatiseringsoplossingen voor de bouw</h2>
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

          {/* Project Lifecycle - Enhanced */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Automatisering doorheen het <span className="text-[#ff6d5a]">bouwproject</span>
            </h2>
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#ff6d5a]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#ff6d5a]">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Aanvraag & Offerte</h3>
                    <p className="text-zinc-400 mb-3">Lead binnenkomst → automatische offerte generatie op basis van templates → follow-up reminders tot tekening</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-[#ff6d5a]/20 text-[#ff6d5a] px-2 py-1 rounded">Auto-offerte</span>
                      <span className="text-xs bg-[#ff6d5a]/20 text-[#ff6d5a] px-2 py-1 rounded">Follow-up</span>
                      <span className="text-xs bg-[#ff6d5a]/20 text-[#ff6d5a] px-2 py-1 rounded">CRM sync</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#ff6d5a]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#ff6d5a]">2</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Planning & Voorbereiding</h3>
                    <p className="text-zinc-400 mb-3">Getekende offerte → project automatisch in planning → materiaal bestellingen triggeren → onderaannemers informeren</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-[#7c3aed]/20 text-[#7c3aed] px-2 py-1 rounded">Planning sync</span>
                      <span className="text-xs bg-[#7c3aed]/20 text-[#7c3aed] px-2 py-1 rounded">Auto-bestelling</span>
                      <span className="text-xs bg-[#7c3aed]/20 text-[#7c3aed] px-2 py-1 rounded">Team notificaties</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#ff6d5a]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#ff6d5a]">3</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Uitvoering</h3>
                    <p className="text-zinc-400 mb-3">Dagelijkse werfverslagen via foto-upload → automatische archivering → voortgang updates naar klant</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-[#ff6d5a]/20 text-[#ff6d5a] px-2 py-1 rounded">Werfverslag</span>
                      <span className="text-xs bg-[#ff6d5a]/20 text-[#ff6d5a] px-2 py-1 rounded">Foto archief</span>
                      <span className="text-xs bg-[#ff6d5a]/20 text-[#ff6d5a] px-2 py-1 rounded">Klant updates</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#7c3aed]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#7c3aed]">4</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Oplevering & Facturatie</h3>
                    <p className="text-zinc-400 mb-3">Opleveringsrapport genereren → automatische factuur op basis van contract → review request naar klant</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-[#7c3aed]/20 text-[#7c3aed] px-2 py-1 rounded">Auto-factuur</span>
                      <span className="text-xs bg-[#7c3aed]/20 text-[#7c3aed] px-2 py-1 rounded">Rapport</span>
                      <span className="text-xs bg-[#7c3aed]/20 text-[#7c3aed] px-2 py-1 rounded">Review flow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Integrations - Enhanced */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Welke <span className="text-[#ff6d5a]">bouwsoftware</span> koppelen we?
            </h2>
            <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Projectmanagement</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">BuildSmart</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Procore</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Buildertrend</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Monday.com</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Boekhouding & Facturatie</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Exact</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Yuki</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Teamleader</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Billit</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Communicatie</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">WhatsApp Business</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Outlook</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Google Workspace</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Slack</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Opslag & Documentatie</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Google Drive</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Dropbox</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">OneDrive</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Excel/Sheets</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ROI Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Wat levert het <span className="text-[#ff6d5a]">op</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">10+</div>
                <p className="text-zinc-400">Uren bespaard per week</p>
                <p className="text-zinc-400 text-sm mt-2">Per projectleider</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">0</div>
                <p className="text-zinc-400">Vergeten follow-ups</p>
                <p className="text-zinc-400 text-sm mt-2">Automatische reminders</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">50%</div>
                <p className="text-zinc-400">Snellere facturatie</p>
                <p className="text-zinc-400 text-sm mt-2">Betere cashflow</p>
              </div>
            </div>
          </section>

          {/* ROI Infographic */}
          <ROIChart
            title="ROI Calculator: Bouwbedrijf"
            subtitle="Voorbeeld berekening voor een aannemer met 2 projectleiders"
            items={[
              { task: 'Offertes opstellen', hoursPerWeek: 6, automatedHours: 1, hourlyRate: 55 },
              { task: 'Werfverslagen maken', hoursPerWeek: 4, automatedHours: 0.5, hourlyRate: 55 },
              { task: 'Materiaal bestellen', hoursPerWeek: 3, automatedHours: 0, hourlyRate: 55 },
              { task: 'Facturatie & admin', hoursPerWeek: 4, automatedHours: 0.5, hourlyRate: 55 },
            ]}
            summary={{
              hoursSaved: '15 uur/week',
              yearlySavings: '€42.900',
              investment: '€3.500 - €7.000',
              roi: '6x - 12x in jaar 1'
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
                  Werkt dit ook voor kleine aannemers?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Zeker. Juist kleinere bouwbedrijven (1-10 man) profiteren enorm van automatisering. U heeft minder mensen om admin te doen, dus elke tijdsbesparing telt dubbel. We beginnen met de belangrijkste workflows en breiden stapsgewijs uit.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Ik werk vooral met Excel, kan dat gekoppeld worden?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Ja, Excel en Google Sheets zijn volledig te integreren. Veel bouwbedrijven starten met hun bestaande spreadsheets en automatiseren van daaruit. Data kan automatisch worden gelezen en geschreven naar uw vertrouwde Excel-bestanden.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Hoeveel kost automatisering voor een bouwbedrijf?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Een basisimplementatie (offerte flow + werfverslagen) start rond €3.500. Uitgebreide implementaties met planning sync en materiaal management kosten €7.000-€12.000. De investering verdient zich typisch binnen 2-4 maanden terug.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Kan ik werfverslagen maken vanaf mijn telefoon?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Ja, dat is precies het idee. U maakt foto's op de werf met uw telefoon, uploadt ze naar een gedeelde map of stuurt ze via WhatsApp, en de rest gaat automatisch: foto's worden geordend per project, datums toegevoegd, en indien gewenst wordt een PDF-verslag gegenereerd.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Hoe lang duurt de implementatie?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  De eerste automatisering kan binnen 1-2 weken live zijn. Een complete implementatie neemt 3-4 weken. Uw bedrijf kan gewoon doordraaien tijdens de implementatie - we bouwen parallel en schakelen geleidelijk over.
                </div>
              </details>
            </div>
          </section>

          {/* Related Sectors */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-2xl font-bold text-white mb-6">Gerelateerde sectoren</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link to="/sector/makelaars" className="bg-[#18181b] p-6 rounded-xl border border-white/10 hover:border-[#7c3aed]/50 transition-colors group">
                <div className="text-[#7c3aed] font-bold mb-2 group-hover:text-[#8b5cf6]">Makelaars & Vastgoed</div>
                <div className="text-zinc-400 text-sm">Nieuwbouw, renovaties en vastgoedontwikkeling - bouw en vastgoed werken nauw samen.</div>
              </Link>
              <Link to="/sector/advocaten" className="bg-[#18181b] p-6 rounded-xl border border-white/10 hover:border-[#7c3aed]/50 transition-colors group">
                <div className="text-[#7c3aed] font-bold mb-2 group-hover:text-[#8b5cf6]">Advocaten & Juridisch</div>
                <div className="text-zinc-400 text-sm">Aannemingscontracten, geschillen en compliance - juridische ondersteuning in de bouwsector.</div>
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
              <Link to="/sector/accountants" className="bg-[#18181b] p-4 rounded-xl border border-white/10 hover:border-[#ff6d5a]/50 transition-colors">
                <div className="text-[#ff6d5a] font-bold mb-1">Accountants</div>
                <div className="text-zinc-400 text-sm">Facturatie expertise</div>
              </Link>
              <Link to="/ai-automatisering" className="bg-[#18181b] p-4 rounded-xl border border-white/10 hover:border-[#ff6d5a]/50 transition-colors">
                <div className="text-[#ff6d5a] font-bold mb-1">AI Automatisering</div>
                <div className="text-zinc-400 text-sm">Slimme workflows</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-white/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Minder papierwerk, meer bouwen?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Ontdek hoe automatisering uw bouwbedrijf efficiënter maakt. Plan een vrijblijvend gesprek.
            </p>
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Plan een gesprek
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default BouwPage;
