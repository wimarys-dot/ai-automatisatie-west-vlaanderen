import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbSchema, FAQSchema, ROIChart, ReviewSchema, ServiceSchema, WebPageSchema } from '@repo/ui';

const AccountantsPage: React.FC = () => {
  const painPoints = [
    'Handmatige data invoer uit bankafschriften en facturen',
    'Eindeloze email heen-en-weer met klanten voor documenten',
    'Repetitieve BTW-aangiftes voorbereiden elk kwartaal',
    'Facturatie en betalingsopvolging kost te veel tijd',
    'Deadline management over tientallen klanten tegelijk',
    'Dubbele invoer tussen verschillende systemen',
    'Geen tijd voor strategisch advies aan klanten',
  ];

  const solutions = [
    {
      title: 'Automatische Document Verwerking',
      desc: 'Facturen en bonnetjes worden automatisch gescand, gecategoriseerd en ingevoerd in uw boekhoudpakket via AI-herkenning.',
      icon: '📄'
    },
    {
      title: 'Klant Communicatie Workflows',
      desc: 'Automatische herinneringen voor ontbrekende documenten, deadline notificaties, en status updates naar klanten.',
      icon: '📧'
    },
    {
      title: 'BTW Voorbereiding',
      desc: 'Data automatisch verzamelen en voorbereiden voor kwartaalaangiftes met automatische controles.',
      icon: '📊'
    },
    {
      title: 'Bank Reconciliatie',
      desc: 'Bankafschriften automatisch matchen met facturen en boekingen - 95% minder handmatig werk.',
      icon: '🏦'
    },
    {
      title: 'Jaarrekening Voorbereiding',
      desc: 'Automatische verzameling van alle benodigde data en documenten voor de jaarrekening.',
      icon: '📅'
    },
    {
      title: 'Klant Onboarding',
      desc: 'Nieuwe klanten automatisch registreren, documenten opvragen, en toegang instellen.',
      icon: '👋'
    },
  ];

  const automationExamples = [
    {
      process: 'Factuur ontvangen via email',
      manual: '5 min per factuur',
      automated: 'Automatisch verwerkt',
      saving: '98%'
    },
    {
      process: 'Bankafschrift reconciliatie',
      manual: '2 uur per klant/maand',
      automated: '15 min controle',
      saving: '87%'
    },
    {
      process: 'BTW aangifte voorbereiding',
      manual: '4 uur per klant',
      automated: '30 min controle',
      saving: '88%'
    },
    {
      process: 'Document opvolging klant',
      manual: '3 emails + telefoon',
      automated: 'Automatisch tot 3x',
      saving: '100%'
    },
    {
      process: 'Jaarrekening data verzamelen',
      manual: '8 uur per klant',
      automated: '1 uur controle',
      saving: '87%'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Automatisering voor Accountants & Boekhouders | AI Automatisatie</title>
        <meta name="description" content="Automatiseer uw accountantskantoor met n8n en AI. Bespaar 15+ uur per week op facturenverwerking, BTW-aangifte en klantcommunicatie. West-Vlaamse specialist." />
        <link rel="canonical" href="https://ai-automatisatie.be/sector/accountants" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "Sectoren", url: "https://ai-automatisatie.be/sectoren" },
        { name: "Accountants", url: "https://ai-automatisatie.be/sector/accountants" }
      ]} />

      <ServiceSchema
        name="Automatisering voor Accountants"
        description="Workflow automatisering voor accountantskantoren. Facturenverwerking, BTW-aangifte voorbereiding en klantcommunicatie automatisch."
        url="https://ai-automatisatie.be/sector/accountants"
      />

      <FAQSchema faqs={[
        { question: "Hoeveel tijd kan ik besparen met automatisering als accountant?", answer: "Een gemiddeld accountantskantoor bespaart 15-20 uur per week door repetitieve taken te automatiseren zoals document verwerking, klant communicatie en BTW voorbereiding." },
        { question: "Werkt automatisering met mijn boekhoudpakket?", answer: "Ja, n8n integreert met alle gangbare boekhoudpakketten: Exact Online, Yuki, Octopus, Twinfield en meer. Ook koppelingen met CRM en document management systemen." },
        { question: "Is mijn klantdata veilig bij automatisering?", answer: "Absoluut. We gebruiken self-hosted n8n waardoor uw data op uw eigen servers blijft. Volledig GDPR-compliant en geschikt voor de strenge eisen van financiële dienstverlening." }
      ]} />

      <WebPageSchema
        name="Automatisering voor Accountants & Boekhouders | AI Automatisatie"
        description="Automatiseer uw accountantskantoor met n8n en AI. Bespaar 15+ uur per week op facturenverwerking, BTW-aangifte en klantcommunicatie."
        url="https://ai-automatisatie.be/sector/accountants"
        datePublished="2024-01-01"
        dateModified="2025-02-01"
      />

      <ReviewSchema
        reviewBody="We hebben nu tijd om écht met klanten te praten over hun bedrijf, in plaats van alleen achter documenten aan te jagen."
        author="Kantoormanager, accountantskantoor regio Brugge"
        authorType="Person"
        itemReviewed="AI Automatisatie West-Vlaanderen"
        ratingValue={5}
      />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Sector</div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Automatisering voor <span className="text-[#ff6d5a]">Accountants</span> & Boekhouders
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              Bespaar 15+ uren per week met slimme automatisering. Focus op strategisch advies, niet op data invoer en administratie. Uw boekhoudpakket kan zoveel meer dan u nu gebruikt.
            </p>
          </header>

          {/* What is automation for accountants */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Wat is automatisering voor <span className="text-[#ff6d5a]">accountantskantoren</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  Automatisering voor accountants betekent het inzetten van software en <strong className="text-white">AI-technologie</strong> om repetitieve taken over te nemen. Dit omvat alles van factuurverwerking tot klantcommunicatie.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Met tools zoals <Link to="/wat-is-n8n" className="text-[#ff6d5a] hover:underline">n8n</Link> kunnen accountantskantoren workflows bouwen die verschillende systemen aan elkaar koppelen en taken automatisch uitvoeren.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">Waarom nu automatiseren?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Klanten verwachten meer</strong> - Snellere service en real-time inzicht</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Concurrentie neemt toe</strong> - Efficiënte kantoren winnen klanten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">Personeel is schaars</strong> - Automatisering verlicht de werkdruk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] mt-1">→</span>
                    <span className="text-zinc-400"><strong className="text-white">AI is rijp</strong> - Technologie is nu toegankelijk en betaalbaar</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pain Points */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Herkenbare problemen in uw kantoor?</h2>
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
                  <strong className="text-white">Het goede nieuws?</strong> Al deze problemen zijn op te lossen met de juiste automatisering. En vaak sneller dan u denkt.
                </p>
              </div>
            </div>
          </section>

          {/* Which processes can be automated */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Welke processen kunnen worden <span className="text-[#ff6d5a]">geautomatiseerd</span>?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-3xl">
              Vrijwel elk repetitief proces in uw kantoor kan worden geautomatiseerd. Hier zijn de meest impactvolle voorbeelden:
            </p>
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

          {/* ROI Infographic */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              ROI <span className="text-[#ff6d5a]">Overzicht</span>
            </h2>
            <ROIChart
              title="Automatisering ROI"
              subtitle="Wat levert automatisering uw kantoor op?"
              items={[
                { process: 'Factuur verwerking', before: '5 min/stuk', after: 'Automatisch', saving: '98%' },
                { process: 'BTW aangifte prep', before: '4 uur', after: '30 min', saving: '88%' },
                { process: 'Bank reconciliatie', before: '2 uur/dag', after: '15 min', saving: '87%' },
                { process: 'Document opvolging', before: '3 emails', after: 'Automatisch', saving: '100%' },
                { process: 'Rapportage', before: '8 uur', after: '1 uur', saving: '87%' },
              ]}
              summary={{
                hoursSaved: '15+',
                yearlySavings: '€28.000+',
                investment: '€5-15k',
                roi: '6-10x',
              }}
            />
          </section>

          {/* Solutions */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Automatiseringsoplossingen voor accountants</h2>
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

          {/* AI for accounting */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Hoe kan <span className="text-[#ff6d5a]">AI</span> accountants helpen?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">Documentherkenning (OCR)</h3>
                <p className="text-zinc-400 mb-4">
                  AI kan facturen, bonnetjes en andere documenten automatisch lezen en de juiste gegevens extraheren. Dit werkt ook met onduidelijke scans en foto's.
                </p>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Leverancier herkenning</li>
                  <li>• Bedrag en BTW extractie</li>
                  <li>• Automatische categorisering</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
              <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">Slimme Classificatie</h3>
                <p className="text-zinc-400 mb-4">
                  AI leert van uw eerdere boekingen en kan nieuwe transacties automatisch categoriseren op basis van patronen.
                </p>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Leren van historische data</li>
                  <li>• Voorstellen voor grootboekrekeningen</li>
                  <li>• Anomalie detectie</li>
                  <li>• Continue verbetering</li>
                </ul>
              </div>
              <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">Klant Communicatie</h3>
                <p className="text-zinc-400 mb-4">
                  AI kan emails van klanten analyseren, urgentie bepalen, en zelfs concept-antwoorden opstellen.
                </p>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Email classificatie en prioritering</li>
                  <li>• Automatische doorverwijzing</li>
                  <li>• FAQ beantwoording</li>
                  <li>• Document aanvraag workflows</li>
                </ul>
              </div>
              <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-4">Rapportage & Analyse</h3>
                <p className="text-zinc-400 mb-4">
                  AI kan trends identificeren, waarschuwingen genereren, en inzichten presenteren die u handmatig zou missen.
                </p>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Cashflow voorspellingen</li>
                  <li>• Ongebruikelijke patronen detectie</li>
                  <li>• Benchmark vergelijkingen</li>
                  <li>• Automatische management rapportages</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#ff6d5a]/10 border border-[#ff6d5a]/20 rounded-2xl">
              <p className="text-zinc-300">
                <strong className="text-white">Belangrijk:</strong> AI vervangt geen accountants - het versterkt ze. U houdt altijd de controle en eindverantwoordelijkheid. AI neemt het saaie werk over zodat u kunt focussen op advies en strategie.
              </p>
            </div>
          </section>

          {/* Integration */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Welke <span className="text-[#ff6d5a]">boekhoudpakketten</span> kunnen worden gekoppeld?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Via n8n kunnen we vrijwel elk boekhoudpakket integreren met uw andere systemen. Hier zijn de tools waar we ervaring mee hebben:
            </p>
            <div className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-8 md:p-12 rounded-[2.5rem]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Boekhoudpakketten</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Exact Online</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Yuki</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Octopus</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Twinfield</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Visma</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Wolters Kluwer</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Facturatie & Documentatie</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Billit</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Teamleader</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Doccle</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Peppol</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">CodaBox</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Communicatie</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Gmail</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Outlook</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Microsoft Teams</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Slack</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Opslag & Banking</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Dropbox</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Google Drive</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">OneDrive</span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Isabel</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-zinc-400">
                  <strong className="text-white">Uw software niet in de lijst?</strong> Geen probleem. Met REST API's en webhooks kunnen we vrijwel elk systeem koppelen. <Link to="/n8n-expert" className="text-[#ff6d5a] hover:underline">Neem contact op</Link> voor een technische check.
                </p>
              </div>
            </div>
          </section>

          {/* How much time can automation save */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Hoeveel tijd bespaart automatisering <span className="text-[#ff6d5a]">echt</span>?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-3xl">
              De tijdsbesparing hangt af van uw huidige processen en het aantal klanten. Hier zijn realistische cijfers uit onze implementaties:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">15+</div>
                <p className="text-zinc-400">Uren bespaard per week</p>
                <p className="text-zinc-400 text-sm mt-2">Per medewerker</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">90%</div>
                <p className="text-zinc-400">Minder handmatige invoer</p>
                <p className="text-zinc-400 text-sm mt-2">Door AI-herkenning</p>
              </div>
              <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                <div className="text-5xl font-black text-[#ff6d5a] mb-2">0</div>
                <p className="text-zinc-400">Gemiste deadlines</p>
                <p className="text-zinc-400 text-sm mt-2">Door automatische opvolging</p>
              </div>
            </div>
            <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-white mb-4">Rekensommetje: ROI van automatisering</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-zinc-400 mb-4">Voor een kantoor met 5 medewerkers:</p>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• 15 uur/week × 5 medewerkers = <strong className="text-white">75 uur/week</strong></li>
                    <li>• 75 uur × €40/uur = <strong className="text-white">€3.000/week</strong></li>
                    <li>• €3.000 × 48 weken = <strong className="text-[#ff6d5a]">€144.000/jaar</strong></li>
                  </ul>
                </div>
                <div>
                  <p className="text-zinc-400 mb-4">Typische investering:</p>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Implementatie: €5.000 - €15.000</li>
                    <li>• Maandelijks onderhoud: €200 - €500</li>
                    <li>• n8n hosting: €20 - €50/maand</li>
                    <li className="pt-2">• <strong className="text-[#7c3aed]">ROI: 6-10x in jaar 1</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Case study style section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Praktijkvoorbeeld: Automatisering bij een <span className="text-[#ff6d5a]">West-Vlaams</span> kantoor
            </h2>
            <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 md:p-12 rounded-[2.5rem]">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">8</div>
                  <div className="text-zinc-400">Medewerkers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">250+</div>
                  <div className="text-zinc-400">Klanten</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">3</div>
                  <div className="text-zinc-400">Weken implementatie</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Geïmplementeerde automatiseringen:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed]">✓</span>
                  <span className="text-zinc-400"><strong className="text-white">Inkomende facturen:</strong> Automatisch uit email/Doccle halen, OCR, en naar Exact Online sturen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed]">✓</span>
                  <span className="text-zinc-400"><strong className="text-white">Deadline reminders:</strong> 3-weken-voor-deadline automatisch herinnering naar klant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed]">✓</span>
                  <span className="text-zinc-400"><strong className="text-white">Document opvolging:</strong> Automatische escalatie als klant niet reageert</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed]">✓</span>
                  <span className="text-zinc-400"><strong className="text-white">BTW voorbereiding:</strong> Automatische check-lijst en data aggregatie per kwartaal</span>
                </li>
              </ul>
              <div className="bg-black/20 p-6 rounded-xl">
                <p className="text-zinc-300 italic">
                  "We hebben nu tijd om écht met klanten te praten over hun bedrijf, in plaats van alleen achter documenten aan te jagen."
                </p>
                <p className="text-zinc-400 mt-2 text-sm">— Kantoormanager, accountantskantoor regio Brugge</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Veelgestelde vragen over automatisering voor accountants
            </h2>
            <div className="space-y-4">
              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Is automatisering veilig voor vertrouwelijke financiële data?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Ja, met de juiste setup. Wij installeren n8n op uw eigen server (self-hosted), waardoor data nooit naar externe cloud providers gaat. Alle communicatie is versleuteld en we volgen GDPR-richtlijnen. Uw klantdata blijft altijd onder uw controle.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Werkt automatisering met alle Belgische boekhoudwetgeving?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Automatisering verandert niets aan de wetgeving - het versnelt alleen uw werkprocessen. De controle en eindverantwoordelijkheid blijft bij u als accountant. We zorgen dat workflows aansluiten bij Belgische vereisten zoals BTW-aangifte termijnen en UBO-registratie.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Hoeveel kost automatisering voor een accountantskantoor?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Een basisimplementatie start rond €5.000 voor 3-5 geautomatiseerde workflows. Grotere projecten met AI-integratie kosten €10.000-€20.000. Dit is een eenmalige investering met optioneel maandelijks onderhoud. De ROI is typisch 6-10x in het eerste jaar door bespaarde arbeidsuren.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Moet ik mijn huidige software vervangen?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Nee, we werken met uw bestaande software. Automatisering verbindt uw huidige tools (Exact Online, Yuki, email, etc.) en laat ze samenwerken. U hoeft geen nieuwe software aan te leren - alleen de automatisering werkt op de achtergrond.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Wat als er iets fout gaat in een geautomatiseerd proces?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Elke automatisering heeft ingebouwde foutafhandeling. Bij problemen (bijv. een factuur die niet herkend kan worden) krijgt u een notificatie en wordt de taak in een "review queue" gezet. Niets wordt automatisch geboekt zonder uw controle bij twijfelgevallen.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Hoe lang duurt de implementatie?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Een standaard implementatie duurt 2-4 weken, afhankelijk van complexiteit. We beginnen met de meest impactvolle workflows (vaak factuurverwerking) en breiden stapsgewijs uit. Uw kantoor kan gewoon doorwerken tijdens de implementatie.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Kunnen mijn medewerkers zelf aanpassingen doen?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  n8n heeft een visuele interface die voor niet-technische gebruikers te begrijpen is. Na oplevering geven we training zodat uw team eenvoudige aanpassingen kan doen (bijv. email templates wijzigen). Voor complexe wijzigingen bieden we onderhoudspakketten.
                </div>
              </details>

              <details className="bg-[#18181b] rounded-2xl border border-white/10 group">
                <summary className="p-6 cursor-pointer text-white font-bold flex justify-between items-center">
                  Vervangt AI de accountant?
                  <span className="text-[#ff6d5a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400">
                  Nee. AI neemt repetitieve taken over, maar strategisch advies, klantrelaties en complexe beslissingen blijven mensenwerk. De accountants die AI gebruiken zullen de accountants die dat niet doen overtreffen - niet vervangen door AI.
                </div>
              </details>
            </div>
          </section>

          {/* Related Sectors */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-2xl font-bold text-white mb-6">Gerelateerde sectoren</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link to="/sector/advocaten" className="bg-[#18181b] p-6 rounded-xl border border-white/10 hover:border-[#7c3aed]/50 transition-colors group">
                <div className="text-[#7c3aed] font-bold mb-2 group-hover:text-[#8b5cf6]">Advocaten & Juridisch</div>
                <div className="text-zinc-400 text-sm">Ook documentatie-zwaar en compliance-gericht. Vergelijkbare uitdagingen met tijdsregistratie en klantdossiers.</div>
              </Link>
              <Link to="/sector/retail" className="bg-[#18181b] p-6 rounded-xl border border-white/10 hover:border-[#7c3aed]/50 transition-colors group">
                <div className="text-[#7c3aed] font-bold mb-2 group-hover:text-[#8b5cf6]">Retail & E-commerce</div>
                <div className="text-zinc-400 text-sm">Automatisering voor webshops - waar boekhouding en facturatie samenkomen.</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Klaar om uw kantoor te automatiseren?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Ontdek hoe wij andere West-Vlaamse accountantskantoren helpen met automatisering. Plan een vrijblijvend gesprek voor een persoonlijke analyse van uw processen.
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

export default AccountantsPage;
