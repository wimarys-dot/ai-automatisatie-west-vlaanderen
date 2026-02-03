import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ROIChart from '../../components/infographics/ROIChart';
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from '../../components/StructuredData';

const AdvocatenPage: React.FC = () => {
  const painPoints = [
    'Handmatig tijdsregistratie vergeten of onnauwkeurig',
    'Document management over tientallen dossiers tegelijk',
    'Deadline tracking voor proceduretermijnen en verjaringen',
    'Repetitieve correspondentie met rechtbanken en tegenpartijen',
    'Klant intake en onboarding processen kosten veel tijd',
    'Facturatie loopt achter door gebrek aan tijdsregistratie',
    'Conflict checks handmatig uitvoeren bij nieuwe zaken',
  ];

  const solutions = [
    {
      title: 'Automatische Tijdsregistratie',
      desc: 'Koppel agenda, email en documenten aan uw facturatiesysteem. Tijd wordt automatisch gelogd per dossier.',
      icon: '⏱️'
    },
    {
      title: 'Document Workflows',
      desc: 'Standaard documenten automatisch genereren met dossiernummer, partijgegevens en relevante data.',
      icon: '📑'
    },
    {
      title: 'Deadline Management',
      desc: 'Automatische herinneringen voor proceduretermijnen. Escalaties naar partner bij kritieke deadlines.',
      icon: '🔔'
    },
    {
      title: 'Client Intake',
      desc: 'Online intake formulieren die automatisch dossiers aanmaken, conflict checks uitvoeren en engagement letters versturen.',
      icon: '👤'
    },
    {
      title: 'Correspondentie Templates',
      desc: 'Automatisch brieven en emails genereren op basis van dossierfase en type zaak.',
      icon: '✉️'
    },
    {
      title: 'Dossier Archivering',
      desc: 'Automatische archivering na afsluiting met correcte mapstructuur en bewaartermijnen.',
      icon: '📁'
    },
  ];

  const automationExamples = [
    {
      process: 'Tijdsregistratie per email',
      manual: 'Vergeten of 5 min/email',
      automated: 'Automatisch bij verzenden',
      saving: '100%'
    },
    {
      process: 'Nieuwe klant onboarding',
      manual: '45 min administratie',
      automated: '10 min review',
      saving: '78%'
    },
    {
      process: 'Deadline monitoring',
      manual: 'Handmatige agenda check',
      automated: 'Automatische alerts',
      saving: '100%'
    },
    {
      process: 'Factuur opstellen',
      manual: '30 min per klant',
      automated: '5 min controle',
      saving: '83%'
    },
    {
      process: 'Conflict check',
      manual: '15 min zoeken',
      automated: 'Instant resultaat',
      saving: '95%'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Automatisering voor Advocaten & Juridische Kantoren | AI Automatisatie</title>
        <meta name="description" content="Automatiseer uw advocatenkantoor met n8n. Tijdsregistratie, deadline management, document generatie en client intake. Meer factureerbare uren, minder admin." />
        <link rel="canonical" href="https://ai-automatisatie.be/sector/advocaten" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "Sectoren", url: "https://ai-automatisatie.be/sectoren" },
        { name: "Advocaten", url: "https://ai-automatisatie.be/sector/advocaten" }
      ]} />

      <ServiceSchema
        name="Automatisering voor Advocaten"
        description="Workflow automatisering voor advocatenkantoren. Tijdsregistratie, deadline management en document generatie automatisch."
        url="https://ai-automatisatie.be/sector/advocaten"
      />

      <FAQSchema faqs={[
        { question: "Hoe helpt automatisering bij tijdsregistratie?", answer: "Workflows registreren automatisch tijd gebaseerd op activiteiten: emails versturen, documenten openen, meetings. Geen handmatige invoer meer vergeten." },
        { question: "Kunnen deadlines automatisch bewaakt worden?", answer: "Ja, n8n monitort proceduretermijnen en verjaringen. U ontvangt automatische waarschuwingen ruim op tijd, met escalatie bij inactie." },
        { question: "Wat is de ROI voor een advocatenkantoor?", answer: "Bij een uurtarief van €180 en 10 uur tijdsbesparing per week is de ROI binnen 2-3 maanden gerealiseerd. Typische jaarlijkse besparing: €90.000+." }
      ]} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Sector</div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Automatisering voor <span className="text-[#ff6d5a]">Advocaten</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              Meer factureerbare uren door minder administratie. Automatiseer uw juridische praktijk zonder af te doen aan kwaliteit of vertrouwelijkheid.
            </p>
          </header>

          {/* What is automation for law firms */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Wat is automatisering voor <span className="text-[#ff6d5a]">advocatenkantoren</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  Automatisering voor advocaten betekent het <strong className="text-white">digitaal verbinden</strong> van uw werkprocessen: van intake tot facturatie, van tijdsregistratie tot archivering.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Met <Link to="/wat-is-n8n" className="text-[#ff6d5a] hover:underline">n8n workflows</Link> worden repetitieve taken automatisch uitgevoerd. Tijd wordt gelogd wanneer u een email verstuurt, deadlines worden bewaakt, en facturen worden voorbereid op basis van uw registraties.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">Waarom automatiseren?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Tijd is geld</strong> - Elke minuut admin is niet-factureerbaar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Deadlines zijn kritiek</strong> - Eén gemiste termijn kan fataal zijn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Concurrentie groeit</strong> - Efficiënte kantoren winnen cliënten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Compliance complexer</strong> - Meer documentatie vereist</span>
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
                  <strong className="text-white">U bent niet alleen.</strong> Onderzoek toont dat advocaten gemiddeld 2.3 uur per dag besteden aan administratie. Dat is omzetpotentieel van €50.000+ per jaar per advocaat.
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Automatiseringsoplossingen voor advocaten</h2>
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

          {/* Security Note - Enhanced */}
          <section className="mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-[#0ea5e9]/10 to-transparent border border-[#0ea5e9]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Beroepsgeheim & Data Security</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Wij begrijpen dat vertrouwelijkheid de kern is van de juridische praktijk. Daarom implementeren wij automatisering met de hoogste beveiligingsstandaarden:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/20 p-6 rounded-xl">
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <span className="text-[#0ea5e9]">🔒</span> Self-Hosted Installatie
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    n8n draait op uw eigen servers. Cliëntdata verlaat nooit uw infrastructuur en gaat niet naar externe cloudproviders.
                  </p>
                </div>
                <div className="bg-black/20 p-6 rounded-xl">
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <span className="text-[#0ea5e9]">🔐</span> End-to-End Encryptie
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Alle data in transit en at rest is versleuteld. Wij gebruiken dezelfde encryptiestandaarden als banken.
                  </p>
                </div>
                <div className="bg-black/20 p-6 rounded-xl">
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <span className="text-[#0ea5e9]">📋</span> Audit Logging
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Volledige traceerbaarheid van alle acties. Wie heeft wat wanneer gedaan - voor compliance en tuchtrecht.
                  </p>
                </div>
                <div className="bg-black/20 p-6 rounded-xl">
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <span className="text-[#0ea5e9]">🇪🇺</span> GDPR Compliant
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Alle workflows worden ontworpen met GDPR in gedachten. Data minimalisatie en recht op vergetelheid zijn ingebouwd.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Example Workflow */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Voorbeeld: <span className="text-[#ff6d5a]">Nieuwe Zaak</span> Workflow
            </h2>
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#ff6d5a]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff6d5a] font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Intake Formulier</h3>
                    <p className="text-zinc-400">Potentiële cliënt vult online intake in → automatische conflict check → resultaat binnen seconden</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#ff6d5a]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff6d5a] font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Dossier Creatie</h3>
                    <p className="text-zinc-400">Bij geen conflict: automatisch dossier aanmaken in uw systeem met uniek nummer en mapstructuur</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#ff6d5a]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff6d5a] font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Engagement Letter</h3>
                    <p className="text-zinc-400">Automatisch opdrachtbevestiging genereren met tarieven en voorwaarden → ter ondertekening versturen</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#ff6d5a]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff6d5a] font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Deadline Setup</h3>
                    <p className="text-zinc-400">Relevante termijnen automatisch in systeem op basis van zaaktype → alerts voor advocaat en secretariaat</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#7c3aed]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#7c3aed] font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Tijdsregistratie Start</h3>
                    <p className="text-zinc-400">Vanaf nu wordt alle tijd aan dit dossier automatisch gelogd: emails, meetings, documenten</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Integrations */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Welke <span className="text-[#ff6d5a]">juridische software</span> koppelen we?
            </h2>
            <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Practice Management</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Cicero</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Kleos</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Jurisquare</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">LegalSuite</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Document & Email</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Microsoft 365</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Google Workspace</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">iManage</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">NetDocuments</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Boekhouding</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Basecone</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Exact</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Teamleader</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Overheid & Rechtbanken</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">e-Deposit</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">DPA Deposit</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Regsol</span>
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
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">20%</div>
                <p className="text-zinc-400">Meer factureerbare uren</p>
                <p className="text-zinc-400 text-sm mt-2">Door automatische tijdsregistratie</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">0</div>
                <p className="text-zinc-400">Gemiste deadlines</p>
                <p className="text-zinc-400 text-sm mt-2">Automatische monitoring</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">2x</div>
                <p className="text-zinc-400">Snellere facturatie</p>
                <p className="text-zinc-400 text-sm mt-2">Betere cashflow</p>
              </div>
            </div>
            <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-white mb-4">ROI Berekening</h3>
              <p className="text-zinc-400 mb-4">Voor een kantoor met 5 advocaten (uurtarief €200):</p>
              <ul className="space-y-2 text-zinc-400">
                <li>• 20% meer factureerbare uren = <strong className="text-white">+200 uur/jaar per advocaat</strong></li>
                <li>• 200 uur × €200 × 5 advocaten = <strong className="text-[#ff6d5a]">€200.000/jaar extra omzet</strong></li>
                <li>• Investering automatisering: €8.000 - €15.000 eenmalig</li>
                <li>• <strong className="text-[#7c3aed]">ROI: 13x - 25x in jaar 1</strong></li>
              </ul>
            </div>
          </section>

          {/* ROI Infographic */}
          <ROIChart
            title="ROI Calculator: Advocatenkantoor"
            subtitle="Voorbeeld berekening voor een kantoor met 3 advocaten (uurtarief €180)"
            items={[
              { task: 'Tijdsregistratie', hoursPerWeek: 3, automatedHours: 0, hourlyRate: 180 },
              { task: 'Klant onboarding', hoursPerWeek: 2, automatedHours: 0.5, hourlyRate: 180 },
              { task: 'Deadline monitoring', hoursPerWeek: 2, automatedHours: 0, hourlyRate: 180 },
              { task: 'Facturatie opstellen', hoursPerWeek: 4, automatedHours: 0.5, hourlyRate: 180 },
            ]}
            summary={{
              hoursSaved: '10 uur/week',
              yearlySavings: '€93.600',
              investment: '€8.000 - €15.000',
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
                  Is automatisering verenigbaar met het beroepsgeheim?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Ja, mits correct geïmplementeerd. Wij gebruiken self-hosted installaties waardoor data op uw eigen servers blijft. Er gaat geen cliëntdata naar externe clouddiensten. Alle koppelingen zijn end-to-end versleuteld.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Hoe werkt automatische tijdsregistratie precies?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Wanneer u een email verstuurt of ontvangt met een dossiernummer, wordt automatisch tijd gelogd. Agenda-afspraken worden gekoppeld aan dossiers. U behoudt volledige controle en kunt tijden achteraf aanpassen voordat ze gefactureerd worden.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Hoeveel kost automatisering voor een advocatenkantoor?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Een basisimplementatie (tijdsregistratie + deadline management) start rond €5.000. Uitgebreide implementaties met document generatie en client intake kosten €10.000-€18.000. De investering verdient zich typisch binnen 2-3 maanden terug door extra factureerbare uren.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Werkt dit met mijn huidige juridische software?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Vrijwel zeker. Cicero, Kleos, en de meeste moderne practice management systemen hebben API's waarmee we kunnen koppelen. Ook Microsoft 365 en Google Workspace zijn volledig te integreren.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Wat als de OVB vragen stelt over data security?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Wij leveren documentatie over de security implementatie die u kunt voorleggen. Self-hosted n8n met audit logging voldoet aan de strengste eisen. Veel advocatenkantoren gebruiken vergelijkbare oplossingen - dit is geen nieuw terrein.
                </div>
              </details>
            </div>
          </section>

          {/* Related Sectors */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-2xl font-bold text-white mb-6">Gerelateerde sectoren</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link to="/sector/accountants" className="bg-[#18181b] p-6 rounded-xl border border-white/10 hover:border-[#7c3aed]/50 transition-colors group">
                <div className="text-[#7c3aed] font-bold mb-2 group-hover:text-[#8b5cf6]">Accountants & Boekhouders</div>
                <div className="text-zinc-400 text-sm">Professionele dienstverlening met vergelijkbare uitdagingen rond tijdsregistratie, facturatie en klantdossiers.</div>
              </Link>
              <Link to="/sector/bouw" className="bg-[#18181b] p-6 rounded-xl border border-white/10 hover:border-[#7c3aed]/50 transition-colors group">
                <div className="text-[#7c3aed] font-bold mb-2 group-hover:text-[#8b5cf6]">Bouw & Constructie</div>
                <div className="text-zinc-400 text-sm">Contracten, aannemingsovereenkomsten en compliance - juridisch advies in de bouw vereist specifieke expertise.</div>
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
              <Link to="/n8n-ai-agent" className="bg-[#18181b] p-4 rounded-xl border border-white/10 hover:border-[#ff6d5a]/50 transition-colors">
                <div className="text-[#ff6d5a] font-bold mb-1">AI Agents</div>
                <div className="text-zinc-400 text-sm">Slimme automatisering</div>
              </Link>
              <Link to="/ai-automatisering" className="bg-[#18181b] p-4 rounded-xl border border-white/10 hover:border-[#ff6d5a]/50 transition-colors">
                <div className="text-[#ff6d5a] font-bold mb-1">AI Automatisering</div>
                <div className="text-zinc-400 text-sm">Complete gids</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-white/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Meer tijd voor uw cliënten?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Ontdek hoe automatisering uw praktijk efficiënter maakt zonder afbreuk te doen aan kwaliteit of vertrouwelijkheid.
            </p>
            <Link
              to="/n8n-expert"
              className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Vraag een analyse aan
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default AdvocatenPage;
