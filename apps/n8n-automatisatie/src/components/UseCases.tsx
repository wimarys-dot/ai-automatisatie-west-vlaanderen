import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useCases = [
  {
    title: 'CRM Automatisering',
    desc: 'Automatische lead capture, follow-up sequences, en pipeline management met Teamleader, HubSpot of Salesforce.',
    result: '60% minder handmatig CRM werk',
    detail: 'Uw CRM is het hart van uw salesproces, maar handmatige data-invoer kost uw team uren per week. Met n8n workflowautomatisering worden nieuwe leads automatisch vanuit webformulieren, e-mails en social media in uw CRM geplaatst. Follow-up sequences starten vanzelf op basis van leadgedrag, afspraken worden automatisch ingepland en uw pipeline wordt real-time bijgewerkt. Het resultaat: uw salesteam besteedt 60% minder tijd aan administratie en focust op wat ze het beste doen, verkopen.',
  },
  {
    title: 'Facturatie & Boekhouding',
    desc: 'Automatische factuurverwerking, bankreconciliatie en BTW-voorbereiding met Exact Online, Yuki of Octopus.',
    result: '15u/week tijdswinst',
    detail: 'De boekhouding is bij veel bedrijven nog een tijdrovend handmatig proces. Door workflowautomatisering met n8n worden facturen automatisch aangemaakt op basis van geleverde diensten of producten, verstuurd naar klanten en verwerkt in uw boekhoudsoftware. Bankafschriften worden automatisch gematcht met openstaande facturen, herinneringen gaan vanzelf de deur uit en BTW-aangiftes worden voorbereid met de juiste data. Bedrijven besparen gemiddeld 15 uur per week aan handmatige boekhoudtaken.',
  },
  {
    title: 'E-commerce Flows',
    desc: 'Order processing, voorraad sync, verzendlabels en review requests voor Shopify en WooCommerce.',
    result: '85% snellere orderverwerking',
    detail: 'E-commerce bedrijven verwerken dagelijks tientallen tot duizenden orders. Zonder automatisering betekent dat handmatig voorraden bijwerken, verzendlabels aanmaken en klanten informeren. Met n8n automatisering stroomt een order automatisch door uw hele fulfillment proces: voorraadupdates in real-time, verzendlabels via Sendcloud gegenereerd, tracking info naar de klant en na levering automatisch een review request. Van order tot levering is alles gestroomlijnd, met 85% snellere verwerking als resultaat.',
  },
  {
    title: 'HR & Onboarding',
    desc: 'Nieuwe medewerker workflows: contracten, accounts aanmaken, hardware bestellen, training planning.',
    result: 'Van 2 dagen naar 2 uur',
    detail: 'Het onboarden van een nieuwe medewerker omvat tientallen stappen: contract versturen, e-mailaccount aanmaken, toegang tot systemen regelen, hardware bestellen, trainingsschema opstellen en het team informeren. Handmatig duurt dit gemiddeld 2 werkdagen. Met geautomatiseerde workflows in n8n wordt het volledige onboardingproces in 2 uur afgehandeld. Zodra HR een nieuwe medewerker registreert, worden alle stappen automatisch uitgevoerd, van contractgeneratie tot welkomstmail.',
  },
  {
    title: 'Data Synchronisatie',
    desc: 'Real-time sync tussen al uw systemen. Geen dubbele invoer, altijd actuele data overal.',
    result: 'Zero handmatige invoer',
    detail: 'Veel bedrijven werken met meerdere systemen die niet native met elkaar communiceren. Het gevolg: dezelfde data wordt meerdere keren handmatig ingevoerd, met fouten en inconsistenties als resultaat. n8n workflowautomatisering maakt real-time data synchronisatie mogelijk tussen al uw bedrijfssoftware. Wijzigingen in uw CRM worden automatisch doorgezet naar uw ERP, facturatiesysteem en rapportagetools. Uw medewerkers hoeven data nog maar eenmalig in te voeren en alle systemen zijn altijd up-to-date.',
  },
  {
    title: 'Rapportage & Dashboards',
    desc: 'Automatische rapporten, KPI dashboards en alerts. Altijd actueel inzicht in uw bedrijf.',
    result: 'Real-time business intelligence',
    detail: 'Handmatig rapporten samenstellen uit verschillende bronnen is tijdrovend en foutgevoelig. Met workflowautomatisering haalt n8n data op uit al uw systemen, verwerkt en combineert deze en stuurt automatisch rapportages naar de juiste personen. KPI dashboards worden real-time bijgewerkt en bij afwijkingen ontvangt u direct een alert via Slack, e-mail of SMS. Managementteams hebben altijd actueel inzicht in de bedrijfsprestaties zonder dat iemand handmatig een rapport hoeft samen te stellen.',
  },
];

const benefits = [
  {
    title: 'Tijdsbesparing',
    desc: 'Elimineer repetitieve taken en bespaar gemiddeld 15-20 uur per week aan handmatig werk. Uw team kan zich richten op strategisch werk.',
  },
  {
    title: 'Minder Fouten',
    desc: 'Geautomatiseerde workflows maken geen typefouten of vergeten geen stappen. Data-integriteit verbetert drastisch in al uw systemen.',
  },
  {
    title: 'Snellere Processen',
    desc: 'Wat vroeger uren of dagen duurde, gebeurt nu in seconden. Van orderverwerking tot onboarding, alles gaat sneller.',
  },
  {
    title: 'Lagere Kosten',
    desc: 'Minder handmatig werk betekent lagere operationele kosten. De ROI van workflowautomatisering is doorgaans binnen 3 maanden bereikt.',
  },
  {
    title: 'Schaalbaarheid',
    desc: 'Geautomatiseerde bedrijfsprocessen schalen moeiteloos mee. Of u nu 10 of 10.000 orders per dag verwerkt, de workflow draait door.',
  },
  {
    title: 'Betere Klanttevredenheid',
    desc: 'Snellere reactietijden, consistente communicatie en foutloze orderverwerking leiden tot tevreden klanten en hogere retentie.',
  },
  {
    title: 'Real-time Inzicht',
    desc: 'Door alle systemen te verbinden heeft u altijd actueel inzicht in uw bedrijfsdata. Van sales pipeline tot voorraadbeheer.',
  },
  {
    title: 'Compliance & Audit Trail',
    desc: 'Elke geautomatiseerde actie wordt gelogd. Dit maakt compliance eenvoudiger en biedt een complete audit trail van al uw processen.',
  },
];

const implementationSteps = [
  {
    step: '1',
    title: 'Procesanalyse',
    desc: 'Wij beginnen met een grondige analyse van uw huidige bedrijfsprocessen. Welke taken zijn repetitief? Waar zitten de bottlenecks? Welke systemen moeten verbonden worden? Deze analyse vormt de basis voor een doelgerichte automatiseringsstrategie.',
  },
  {
    step: '2',
    title: 'Prioritering & Roadmap',
    desc: 'Niet alles hoeft tegelijk geautomatiseerd te worden. Wij stellen samen met u een roadmap op, geprioriteerd op basis van impact en haalbaarheid. Quick wins eerst, zodat u snel resultaat ziet en het draagvlak binnen uw organisatie groeit.',
  },
  {
    step: '3',
    title: 'Workflow Design',
    desc: 'Onze workflow architects ontwerpen de optimale automatiseringsflows in n8n. Elke workflow wordt gebouwd met robuuste foutafhandeling, monitoring en schaalbaarheid. Wij houden rekening met edge cases en toekomstige uitbreidingen.',
  },
  {
    step: '4',
    title: 'Bouw & Testing',
    desc: 'De workflows worden gebouwd in n8n, getest met uw echte data en gevalideerd door uw team. Wij testen uitgebreid op betrouwbaarheid, snelheid en correctheid voordat iets in productie gaat. Parallelle testing naast uw bestaande processen garandeert een veilige overgang.',
  },
  {
    step: '5',
    title: 'Go-live & Optimalisatie',
    desc: 'Na een succesvolle testfase gaan de workflows live. Wij monitoren de eerste weken intensief, optimaliseren waar nodig en zorgen voor een volledige overdracht inclusief documentatie en training. Uw team is klaar om zelfstandig verder te werken.',
  },
];

const UseCases: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Wat is workflowautomatisering?',
      a: 'Workflowautomatisering is het gebruik van software om repetitieve bedrijfsprocessen automatisch uit te voeren. In plaats van dat medewerkers handmatig data invoeren, e-mails versturen of rapporten samenstellen, worden deze taken door geautomatiseerde workflows afgehandeld. Met n8n bouwt u visueel deze workflows door apps en services met elkaar te verbinden.',
    },
    {
      q: 'Wat is Business Automation workflow?',
      a: 'Een Business Automation workflow is een reeks geautomatiseerde stappen die een bedrijfsproces van begin tot eind afhandelen. Denk aan het automatisch verwerken van een binnenkomende order: betaling controleren, voorraad bijwerken, verzendlabel aanmaken, klant notificeren en boekhouding bijwerken. Elke stap triggert automatisch de volgende, zonder menselijke tussenkomst.',
    },
    {
      q: 'Welke bedrijfsprocessen kunnen geautomatiseerd worden?',
      a: 'Vrijwel elk proces dat vaste stappen volgt kan geautomatiseerd worden. De meest voorkomende zijn: lead management en CRM updates, facturatie en boekhouding, orderverwerking en fulfillment, onboarding van medewerkers, data synchronisatie tussen systemen, rapportage en dashboards, klantenservice routing en e-mail marketing flows.',
    },
    {
      q: 'Hoe veilig is workflowautomatisering?',
      a: 'Met n8n zeer veilig. Bij self-hosting draait alles op uw eigen servers en verlaat gevoelige data nooit uw infrastructuur. Credentials worden versleuteld opgeslagen, communicatie verloopt via HTTPS en u bepaalt zelf wie toegang heeft. Wij configureren role-based access control en zorgen voor een complete audit trail van alle geautomatiseerde acties.',
    },
    {
      q: 'Wat kost workflowautomatisering?',
      a: 'Onze implementatiepakketten starten vanaf €990 voor een Starter pakket met tot 3 workflows. Het Professional pakket (€2.490) bevat tot 10 workflows inclusief complexe integraties. Enterprise oplossingen worden op maat geprijsd. De investering verdient zich doorgaans binnen 2-3 maanden terug door tijdsbesparing en efficiencywinst.',
    },
    {
      q: 'Hoe verschilt AI-workflowautomatisering van traditionele automatisering?',
      a: 'Traditionele automatisering volgt vaste regels: als X dan Y. AI-gestuurde workflowautomatisering gaat een stap verder. AI kan ongestructureerde data begrijpen (zoals e-mails of documenten), beslissingen nemen op basis van context, en leren van patronen. Met n8n combineren wij traditionele automatisering met AI-modellen zoals OpenAI en Claude voor workflows die ook complexe, niet-standaard situaties aankunnen.',
    },
  ];

  return (
    <section className="py-24 bg-surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
            Workflowautomatisering voor uw <span className="text-brand">Bedrijf</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Workflowautomatisering transformeert de manier waarop bedrijven opereren. Door repetitieve taken
              te automatiseren en bedrijfsprocessen te stroomlijnen, wint uw organisatie tijd, verlaagt u kosten
              en verhoogt u de productiviteit. Of het nu gaat om het automatiseren van uw sales pipeline, het
              stroomlijnen van facturatieprocessen of het verbinden van al uw bedrijfssoftware: geautomatiseerde
              workflows zijn de sleutel tot efficiëntie.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Met n8n als workflow automatiseringsplatform bouwen wij op maat gemaakte automatiseringen die
              perfect aansluiten bij uw bedrijfsprocessen. Van eenvoudige data synchronisatie tot complexe
              AI-gestuurde workflows die handmatige taken volledig overnemen. Uw medewerkers worden bevrijd
              van repetitief werk en kunnen zich richten op strategische taken die echt waarde toevoegen.
              Ontdek hieronder hoe workflowautomatisering uw bedrijf naar het volgende niveau tilt.
            </p>
          </div>
        </div>

        {/* Wat is workflowautomatisering? */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
            Wat is <span className="text-brand">workflowautomatisering</span>?
          </h2>
          <div className="bg-white border border-surface-border rounded-2xl p-8 md:p-10">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Workflowautomatisering is het proces waarbij u handmatige, repetitieve bedrijfstaken vervangt door
              geautomatiseerde workflows die door software worden uitgevoerd. Een workflow bestaat uit een reeks
              stappen die automatisch worden doorlopen wanneer een trigger plaatsvindt. Denk aan een nieuw contact
              in uw CRM dat automatisch een welkomstmail ontvangt, wordt toegevoegd aan een e-maillijst en een
              taak aanmaakt voor uw salesteam.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Met n8n bouwt u deze workflows visueel via een drag-and-drop interface. Elke node in de workflow
              vertegenwoordigt een actie: data ophalen, verwerken, filteren of versturen naar een ander systeem.
              De kracht zit in de combinatie: door honderden apps en services te verbinden in slimme workflows,
              automatiseert u complete bedrijfsprocessen die voorheen handmatig uren of dagen kostten. Van
              eenvoudige notificaties tot complexe multi-stap processen met conditionele logica en AI-verwerking,
              workflowautomatisering maakt het mogelijk.
            </p>
          </div>
        </section>

        {/* Voordelen */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10 text-center">
            Voordelen van <span className="text-brand">workflowautomatisering</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white border border-surface-border rounded-xl p-6 hover:border-brand hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6 Use Cases */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10 text-center">
            6 Praktische <span className="text-brand">Use Cases</span>
          </h2>
          <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-10">
            Ontdek hoe Belgische bedrijven n8n workflowautomatisering gebruiken om hun bedrijfsprocessen te
            transformeren. Elke use case toont concrete resultaten en bewezen tijdsbesparing.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white border border-surface-border rounded-2xl p-8 hover:border-brand transition-all">
                <h3 className="text-lg font-bold text-text-primary mb-3">{uc.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{uc.desc}</p>
                {expandedCase === i ? (
                  <>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{uc.detail}</p>
                    <button
                      onClick={() => setExpandedCase(null)}
                      className="text-brand text-sm font-semibold hover:underline"
                    >
                      Minder tonen
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setExpandedCase(i)}
                    className="text-brand text-sm font-semibold hover:underline mb-4 block"
                  >
                    Meer lezen
                  </button>
                )}
                <div className="pt-4 border-t border-surface-border mt-4">
                  <span className="text-brand font-bold text-sm">{uc.result}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementatiestappen */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10 text-center">
            Hoe implementeer je <span className="text-brand">workflowautomatisering</span>?
          </h2>
          <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-12">
            Een succesvolle implementatie van workflowautomatisering begint met een gestructureerde aanpak.
            Hieronder vindt u de vijf stappen die wij doorlopen om uw bedrijfsprocessen te automatiseren.
          </p>
          <div className="max-w-4xl mx-auto space-y-8">
            {implementationSteps.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* n8n vs Andere Software */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
            n8n vs Andere Workflow Automatisering <span className="text-brand">Software</span>
          </h2>
          <div className="bg-white border border-surface-border rounded-2xl p-8 md:p-10">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              De markt voor workflowautomatisering groeit snel en er zijn diverse opties beschikbaar. Van
              enterprise RPA-oplossingen (Robotic Process Automation) tot low-code platforms zoals Zapier en Make.
              Wij kiezen bewust voor n8n als ons primaire automatiseringsplatform, en wel om deze redenen:
            </p>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-bold text-text-primary mb-1">n8n vs Zapier</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Zapier is gebruiksvriendelijk voor simpele automatiseringen maar wordt snel duur bij schaling.
                  n8n biedt onbeperkte uitvoeringen bij self-hosting, native AI-ondersteuning en de mogelijkheid
                  voor custom code. Voor bedrijven die meer dan 5 workflows draaien, is n8n aanzienlijk goedkoper.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">n8n vs Make (Integromat)</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Make biedt een krachtige visuele editor maar is eveneens een cloud-only oplossing met
                  volumebeperkingen. n8n geeft u de keuze tussen self-hosting en cloud, met meer flexibiliteit
                  in complexe workflows en betere ondersteuning voor AI-integraties en custom nodes.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">n8n vs RPA (UiPath, Automation Anywhere)</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Enterprise RPA-tools zijn krachtig voor het automatiseren van desktop-applicaties maar kosten
                  tienduizenden euro's per jaar en vereisen gespecialiseerde developers. n8n is een modern,
                  API-first alternatief dat voor een fractie van de kosten vergelijkbare resultaten bereikt voor
                  web-gebaseerde bedrijfsprocessen.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">n8n vs Power Automate</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Microsoft Power Automate werkt prima binnen het Microsoft ecosysteem, maar is beperkt
                  daarbuiten. n8n verbindt met 400+ tools ongeacht de leverancier en biedt meer controle over
                  uw data en workflows. Bovendien is n8n open source, wat vendor lock-in voorkomt.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/migratie-zapier"
                className="inline-block bg-brand text-white px-8 py-3 rounded-full font-bold hover:bg-brand-hover transition-colors"
              >
                Migreer van Zapier of Make naar n8n
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10 text-center">
            Veelgestelde Vragen over <span className="text-brand">Workflowautomatisering</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-surface-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-white/80 transition-colors"
                >
                  <span className="font-bold text-text-primary pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-brand flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="p-5 pt-0 bg-white">
                    <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <div className="text-center space-y-4">
          <p className="text-text-secondary">
            Klaar om uw bedrijfsprocessen te automatiseren? Ontdek meer over onze aanpak.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/diensten"
              className="px-6 py-3 bg-white border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
            >
              Onze Diensten
            </Link>
            <Link
              to="/integraties"
              className="px-6 py-3 bg-white border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
            >
              Alle Integraties
            </Link>
            <Link
              to="/cases"
              className="px-6 py-3 bg-white border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
            >
              Bekijk Cases
            </Link>
            <a
              href="https://n8n-expert.be/consultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
            >
              n8n Expert Consultancy
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UseCases;
