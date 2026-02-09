import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, ArticleSchema, FAQSchema } from '@repo/ui';

interface WorkflowExample {
  title: string;
  category: string;
  description: string;
  tools: string[];
  resultaat: string;
  icon: string;
}

const workflowExamples: WorkflowExample[] = [
  {
    title: 'CRM Lead Automatisering',
    category: 'Sales & CRM',
    description:
      'Wanneer een potentiele klant een Typeform formulier invult, verwerkt n8n de gegevens automatisch en maakt een nieuw contact aan in HubSpot met alle relevante informatie. Tegelijkertijd ontvangt uw sales team een Slack notificatie met een samenvatting van de lead, zodat zij direct kunnen opvolgen. De workflow verrijkt de leaddata met bedrijfsinformatie en kent automatisch een score toe op basis van vooraf ingestelde criteria.',
    tools: ['Typeform', 'n8n', 'HubSpot', 'Slack', 'HTTP Request'],
    resultaat: '75% snellere lead opvolging',
    icon: '🎯',
  },
  {
    title: 'E-mail Classificatie met AI',
    category: 'AI & Productiviteit',
    description:
      'Deze workflow haalt inkomende Gmail berichten op en stuurt de inhoud naar OpenAI voor automatische classificatie. Op basis van de AI-analyse worden e-mails voorzien van de juiste labels zoals urgent, support, sales of informatie. Bij urgente berichten wordt automatisch een geprioriteerd antwoord gegenereerd en doorgestuurd. Hierdoor bespaart uw team dagelijks uren aan handmatig e-mailbeheer en mist u nooit meer een belangrijk bericht.',
    tools: ['Gmail', 'OpenAI', 'n8n IF Node', 'Google Sheets'],
    resultaat: '3 uur tijdsbesparing per dag',
    icon: '📧',
  },
  {
    title: 'E-commerce Order Processing',
    category: 'E-commerce',
    description:
      'Zodra een nieuwe bestelling binnenkomt in Shopify, triggert n8n een complete verwerkingsketen. De order gegevens worden automatisch doorgestuurd naar Sendcloud voor het aanmaken van een verzendlabel en track-and-trace code. Gelijktijdig wordt de factuur gegenereerd en geboekt in uw boekhoudpakket. De klant ontvangt een bevestigingsmail met trackinginformatie, en uw voorraad wordt bijgewerkt in het inventory systeem.',
    tools: ['Shopify', 'n8n', 'Sendcloud', 'Exact Online', 'SMTP'],
    resultaat: '90% minder handmatige orderverwerking',
    icon: '🛒',
  },
  {
    title: 'Social Media Scheduling',
    category: 'Marketing',
    description:
      'Beheer al uw social media content vanuit een centraal Google Sheets document. De workflow leest geplande posts uit het spreadsheet, formatteert de content voor elk platform en publiceert automatisch op het ingestelde tijdstip naar LinkedIn, Twitter en via Buffer naar overige kanalen. Afbeeldingen worden automatisch geresized voor elk platform. Na publicatie wordt de status in het spreadsheet bijgewerkt, zodat uw marketingteam altijd overzicht houdt.',
    tools: ['Google Sheets', 'n8n', 'LinkedIn', 'Twitter', 'Buffer'],
    resultaat: '5 uur per week bespaard op social media',
    icon: '📱',
  },
  {
    title: 'Facturatie Automatisering',
    category: 'Financieel',
    description:
      'Op basis van geregistreerde uren in Toggl genereert n8n automatisch facturen. De workflow haalt tijdregistraties op, groepeert deze per klant en project, berekent de totalen en maakt professionele PDF facturen aan via een template. Deze worden vervolgens geboekt in Exact Online en per e-mail verstuurd naar de klant. Betalingsherinneringen volgen automatisch als de betaaltermijn verstrijkt, waardoor uw cashflow verbetert.',
    tools: ['Toggl', 'n8n', 'Exact Online', 'PDF Generator', 'SMTP'],
    resultaat: '95% minder tijd aan facturatie',
    icon: '💰',
  },
  {
    title: 'Data Backup & Sync',
    category: 'DevOps & IT',
    description:
      'Bescherm uw bedrijfskritische data met een geautomatiseerde backup pipeline. Deze workflow maakt dagelijks een export van uw PostgreSQL database, comprimeert het bestand en uploadt het veilig naar Google Drive met versiebeheer. Bij succes ontvangt uw IT team een Slack bevestiging. Bij fouten escaleert de workflow automatisch met een gedetailleerd foutrapport. Oude backups worden na de ingestelde retentieperiode automatisch opgeruimd.',
    tools: ['PostgreSQL', 'n8n', 'Google Drive', 'Slack', 'Compression'],
    resultaat: '100% betrouwbare dagelijkse backups',
    icon: '💾',
  },
  {
    title: 'HR Onboarding Flow',
    category: 'HR & Operations',
    description:
      'Wanneer een nieuwe medewerker wordt aangemaakt in Personio, start n8n automatisch het volledige onboarding proces. De workflow maakt een Google Workspace account aan met de juiste rechten, stuurt een welkomstbericht via Slack naar het team en creert een gepersonaliseerd onboarding takenpakket in Asana. Alle benodigde documenten worden klaargelegd en de manager ontvangt een checklist. Dit reduceert de onboarding doorlooptijd van dagen naar minuten.',
    tools: ['Personio', 'n8n', 'Google Workspace', 'Slack', 'Asana'],
    resultaat: 'Onboarding van 3 dagen naar 30 minuten',
    icon: '👋',
  },
  {
    title: 'Klant Feedback Pipeline',
    category: 'AI & Klantenservice',
    description:
      'Verzamel en analyseer klantfeedback volledig automatisch. Typeform antwoorden worden door n8n naar OpenAI gestuurd voor sentimentanalyse en thema-extractie. Positieve feedback gaat automatisch naar uw testimonials sheet, terwijl negatieve feedback direct een Slack alert triggert bij het support team. Wekelijks genereert de workflow een samenvattend rapport met trends en aanbevelingen, zodat uw team datagedreven verbeteringen kan doorvoeren.',
    tools: ['Typeform', 'n8n', 'OpenAI', 'Slack', 'Google Sheets'],
    resultaat: '40% snellere respons op klachten',
    icon: '⭐',
  },
  {
    title: 'Document Generatie',
    category: 'Administratie',
    description:
      'Genereer professionele documenten automatisch vanuit uw data. De workflow haalt klant- en projectgegevens op uit Airtable, vult een Google Docs template in met de correcte variabelen en converteert het resultaat naar PDF. Het afgewerkte document wordt per e-mail naar de juiste ontvanger gestuurd en gearchiveerd in de bijbehorende map. Ideaal voor offertes, contracten, rapporten en andere terugkerende documenten die consistentie vereisen.',
    tools: ['Airtable', 'n8n', 'Google Docs', 'PDF Converter', 'SMTP'],
    resultaat: '80% snellere documentcreatie',
    icon: '📄',
  },
  {
    title: 'Monitoring & Alerts',
    category: 'DevOps & IT',
    description:
      'Houd uw websites en services proactief in de gaten met geautomatiseerde monitoring. n8n voert periodiek HTTP checks uit op al uw endpoints en controleert responstijden, statuscodes en SSL certificaten. Bij problemen ontvangt uw team direct een melding via Slack en e-mail met details over de storing. De status wordt automatisch bijgewerkt op uw StatusPage, zodat klanten altijd geinfomeerd zijn. Historische data wordt opgeslagen voor trendanalyse.',
    tools: ['n8n Schedule', 'HTTP Request', 'Slack', 'SMTP', 'StatusPage'],
    resultaat: '99.9% uptime door snelle detectie',
    icon: '🔍',
  },
];

const faqs = [
  {
    question: 'Hoe complex zijn n8n workflows om te bouwen?',
    answer:
      'De complexiteit varieert per use case. Eenvoudige workflows zoals een Typeform-naar-CRM koppeling kunt u binnen een uur opzetten via de visuele drag-and-drop editor. Complexere workflows met AI-integraties, conditionele logica en meerdere branches vergen meer ervaring, maar zijn dankzij de visuele interface aanzienlijk eenvoudiger dan traditioneel programmeren. Onze tutorial helpt u stap voor stap aan de slag.',
  },
  {
    question: 'Kan ik deze workflow voorbeelden direct gebruiken?',
    answer:
      'Deze voorbeelden dienen als inspiratie en blauwdruk voor uw eigen automatiseringen. De exacte implementatie hangt af van uw specifieke tools, accounts en bedrijfsprocessen. De meeste workflows kunt u binnen n8n nabouwen door de juiste nodes te selecteren en uw credentials te koppelen. Wilt u hulp bij de implementatie? Onze consultants bouwen de workflows op maat voor uw situatie.',
  },
  {
    question: 'Welke tools en services kan n8n allemaal koppelen?',
    answer:
      'n8n beschikt over meer dan 400 ingebouwde integraties, waaronder populaire tools als Slack, HubSpot, Google Workspace, Shopify, PostgreSQL, OpenAI en Exact Online. Daarnaast kunt u via de HTTP Request node met vrijwel elke API communiceren die REST of GraphQL ondersteunt. Custom integraties zijn ook mogelijk via webhooks en de Code node.',
  },
  {
    question: 'Wat kost het om n8n workflows te laten bouwen?',
    answer:
      'De kosten hangen af van de complexiteit en het aantal integraties. Eenvoudige workflows starten vanaf enkele honderden euro, terwijl complexe enterprise-automatiseringen met AI-integraties een grotere investering vragen. n8n zelf is open-source en gratis bij self-hosting, of beschikbaar via n8n Cloud met betaalbare abonnementen. Neem contact op voor een vrijblijvende offerte op maat.',
  },
];

const WorkflowVoorbeeldenPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>10 Praktische n8n Workflow Voorbeelden voor uw Bedrijf | n8n-expert.be</title>
        <meta
          name="description"
          content="Ontdek 10 praktische n8n workflow voorbeelden voor automatisering van CRM, facturatie, e-commerce, AI e-mailclassificatie en meer. Direct toepasbaar in uw bedrijf."
        />
        <link rel="canonical" href="https://n8n-expert.be/kennisbank/workflow-voorbeelden" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://n8n-expert.be' },
          { name: 'Kennisbank', url: 'https://n8n-expert.be/kennisbank' },
          { name: 'Workflow Voorbeelden', url: 'https://n8n-expert.be/kennisbank/workflow-voorbeelden' },
        ]}
      />

      <ArticleSchema
        headline="10 Praktische n8n Workflow Voorbeelden voor uw Bedrijf"
        description="Ontdek 10 praktische n8n workflow voorbeelden voor automatisering van CRM, facturatie, e-commerce, AI en meer."
        url="https://n8n-expert.be/kennisbank/workflow-voorbeelden"
        datePublished="2026-01-05"
        dateModified="2026-02-01"
        author="n8n-expert.be"
      />

      <FAQSchema faqs={faqs} />

      <div className="pt-28 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-4">
              Workflow Voorbeelden
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-text-primary mb-8 tracking-tighter leading-tight">
              10 Praktische n8n <span className="text-brand">Workflow Voorbeelden</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-4xl leading-relaxed">
              Van CRM lead automatisering en AI-gestuurde e-mailclassificatie tot volledige e-commerce orderverwerking en geautomatiseerde facturatie: deze tien n8n workflow voorbeelden laten zien hoe bedrijven dagelijks uren besparen. Elk voorbeeld bevat een beschrijving van de volledige flow, de betrokken tools en nodes, en het concrete resultaat dat u kunt verwachten. Gebruik deze voorbeelden als inspiratie voor uw eigen automatiseringsprojecten of neem contact op met onze consultants voor een implementatie op maat.
            </p>
          </header>

          {/* Workflow Examples Grid */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10">
              De <span className="text-brand">10 Workflows</span> in Detail
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {workflowExamples.map((example, idx) => (
                <div
                  key={idx}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover transition-all flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl flex-shrink-0">{example.icon}</div>
                    <div>
                      <span className="text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded-full">
                        {example.category}
                      </span>
                      <h3 className="text-xl font-bold text-text-primary mt-2">
                        {idx + 1}. {example.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-grow">
                    {example.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {example.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-text-muted bg-[#0c1222] border border-surface-border px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="bg-brand/10 border border-brand/20 rounded-lg p-3 mt-auto">
                    <p className="text-brand text-sm font-bold">
                      Resultaat: {example.resultaat}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hoe te beginnen */}
          <section className="mb-16 md:mb-24">
            <div className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Hoe begint u met <span className="text-brand">n8n workflows</span>?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Het bouwen van uw eerste workflow hoeft niet ingewikkeld te zijn. Begin met een eenvoudige automatisering die een duidelijk pijnpunt oplost, bijvoorbeeld het automatisch doorsturen van formuliergegevens naar uw CRM. Zodra u vertrouwd bent met de basis, kunt u stap voor stap complexere workflows bouwen met conditionele logica, AI-integraties en meerdere output kanalen.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                De sleutel tot succesvolle workflow automatisering is een goede planning. Breng eerst uw huidige proces in kaart, identificeer de handmatige stappen die geautomatiseerd kunnen worden en bepaal welke tools gekoppeld moeten worden. Onze n8n tutorial en best practices geven u alle kennis die u nodig heeft om professionele workflows te bouwen.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  to="/kennisbank/n8n-tutorial"
                  className="bg-[#0c1222] border border-surface-border rounded-xl p-5 hover:border-surface-border-hover transition-all block"
                >
                  <h4 className="text-text-primary font-bold mb-2">Stap 1: Leer de Basis</h4>
                  <p className="text-text-secondary text-sm">Volg onze complete n8n tutorial in het Nederlands.</p>
                </Link>
                <Link
                  to="/kennisbank/best-practices"
                  className="bg-[#0c1222] border border-surface-border rounded-xl p-5 hover:border-surface-border-hover transition-all block"
                >
                  <h4 className="text-text-primary font-bold mb-2">Stap 2: Best Practices</h4>
                  <p className="text-text-secondary text-sm">Bouw professioneel met onze bewezen richtlijnen.</p>
                </Link>
                <Link
                  to="/consultancy"
                  className="bg-[#0c1222] border border-surface-border rounded-xl p-5 hover:border-surface-border-hover transition-all block"
                >
                  <h4 className="text-text-primary font-bold mb-2">Stap 3: Hulp Nodig?</h4>
                  <p className="text-text-secondary text-sm">Onze experts bouwen uw workflows op maat.</p>
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10">
              Veelgestelde Vragen over <span className="text-brand">n8n Workflows</span>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold text-text-primary mb-3">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8">Meer lezen</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/kennisbank/n8n-tutorial"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                n8n Tutorial Nederlands
              </Link>
              <Link
                to="/kennisbank/best-practices"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                n8n Best Practices
              </Link>
              <Link
                to="/consultancy"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                Consultancy Diensten
              </Link>
              <Link
                to="/resources"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                Resources & Tools
              </Link>
              <a
                href="https://n8n-automatisatie.be/use-cases"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                n8n Automatisatie Use Cases
              </a>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-surface-border">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Klaar om uw workflows te <span className="text-brand">automatiseren</span>?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Onze n8n experts helpen u bij het ontwerpen, bouwen en optimaliseren van workflows op maat. Van eenvoudige koppelingen tot complexe AI-gestuurde automatiseringen.
            </p>
            <Link
              to="/consultancy"
              className="inline-block bg-brand hover:bg-brand-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand/20 hover:scale-105"
            >
              Plan een consultatie
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default WorkflowVoorbeeldenPage;
