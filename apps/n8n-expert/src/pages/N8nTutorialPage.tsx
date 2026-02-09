import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, ArticleSchema, FAQSchema } from '@repo/ui';

const installMethods = [
  {
    title: 'Docker (Aanbevolen)',
    desc: 'Docker is de meest populaire methode om n8n te installeren. Met een enkel commando draait u n8n in een geïsoleerde container, inclusief automatische updates en eenvoudig beheer. Ideaal voor productieomgevingen en teams die volledige controle willen over hun data.',
    code: 'docker run -d --name n8n -p 5678:5678 n8nio/n8n',
    icon: '🐳',
  },
  {
    title: 'npm',
    desc: 'Installeer n8n direct via Node.js en npm. Deze methode is geschikt voor ontwikkelaars die n8n willen integreren in een bestaande Node.js omgeving of snel willen experimenteren op hun lokale machine.',
    code: 'npm install n8n -g && n8n start',
    icon: '📦',
  },
  {
    title: 'n8n Cloud',
    desc: 'Geen zin om zelf te hosten? n8n Cloud is de volledig beheerde oplossing. Binnen vijf minuten operationeel, automatische updates en backups, en geen server management nodig. Perfect als u snel wilt starten zonder technische overhead.',
    code: null,
    icon: '☁️',
  },
];

const workflowSteps = [
  {
    step: 1,
    title: 'Open de n8n Editor',
    desc: 'Start n8n en open de visuele workflow editor in uw browser. U ziet een leeg canvas waarop u nodes kunt plaatsen en verbinden. De interface is intuïtief en werkt volledig via drag-and-drop.',
  },
  {
    step: 2,
    title: 'Voeg een Trigger Node toe',
    desc: 'Elke workflow begint met een trigger. Kies bijvoorbeeld een Schedule Trigger om de workflow periodiek te laten draaien, een Webhook Trigger om op externe events te reageren, of een App Trigger zoals Gmail of Slack.',
  },
  {
    step: 3,
    title: 'Configureer Action Nodes',
    desc: 'Voeg action nodes toe om taken uit te voeren. Denk aan het ophalen van data uit een API, het versturen van e-mails, het bijwerken van een database of het aanroepen van AI-modellen. Verbind de nodes met elkaar door ze te slepen.',
  },
  {
    step: 4,
    title: 'Test je Workflow',
    desc: 'Gebruik de ingebouwde test functie om je workflow stap voor stap uit te voeren. Bekijk de output van elke node en controleer of de data correct doorstroomt. Debug eventuele fouten voordat je live gaat.',
  },
  {
    step: 5,
    title: 'Activeer en Monitor',
    desc: 'Als alles werkt, activeer je de workflow. n8n draait deze nu automatisch volgens de ingestelde trigger. Monitor de executions via het dashboard en stel optioneel error notifications in.',
  },
];

const nodeTypes = [
  {
    title: 'Trigger Nodes',
    desc: 'Trigger nodes starten een workflow. Voorbeelden zijn de Webhook node, Schedule node (cron), en app-specifieke triggers zoals een nieuw e-mail bericht in Gmail of een nieuwe order in Shopify. Zonder trigger node kan een workflow niet automatisch draaien.',
    examples: ['Webhook', 'Schedule Trigger', 'Gmail Trigger', 'Shopify Trigger'],
    icon: '⚡',
  },
  {
    title: 'Action Nodes',
    desc: 'Action nodes voeren taken uit binnen uw workflow. Ze verbinden met externe services en tools om data te lezen, schrijven of transformeren. n8n biedt meer dan 400 ingebouwde action nodes voor populaire tools en services.',
    examples: ['HTTP Request', 'Google Sheets', 'Slack', 'HubSpot', 'PostgreSQL'],
    icon: '🔧',
  },
  {
    title: 'Function Nodes',
    desc: 'Function nodes geven u volledige controle met JavaScript of Python code. Gebruik ze voor complexe data transformaties, conditionele logica of berekeningen die niet met standaard nodes mogelijk zijn. Ideaal voor geavanceerde gebruikers die maatwerk nodig hebben.',
    examples: ['Code Node', 'IF Node', 'Switch Node', 'Merge Node'],
    icon: '🧩',
  },
];

const bestPractices = [
  'Gebruik duidelijke namen voor uw workflows en nodes zodat collega\'s ze direct begrijpen.',
  'Implementeer error handling met de Error Trigger node om fouten snel op te sporen.',
  'Bewaar credentials in environment variables, nooit hardcoded in uw workflows.',
  'Splits complexe processen op in sub-workflows voor betere onderhoudbaarheid.',
  'Documenteer uw workflows met sticky notes direct in de n8n editor.',
];

const faqs = [
  {
    question: 'Is n8n makkelijk te leren?',
    answer: 'Ja, n8n is ontworpen met een visuele drag-and-drop interface die het bouwen van workflows toegankelijk maakt voor iedereen. De meeste gebruikers bouwen hun eerste workflow binnen een uur. Voor complexere automatiseringen en AI-integraties kan het nuttig zijn om onze tutorial stap voor stap te volgen.',
  },
  {
    question: 'Hoe werkt n8n?',
    answer: 'n8n werkt op basis van nodes die u visueel met elkaar verbindt. Elke node vertegenwoordigt een actie of integratie. Een trigger node start de workflow, waarna action nodes taken uitvoeren zoals data ophalen, e-mails versturen of API-aanroepen doen. De data stroomt automatisch van node naar node.',
  },
  {
    question: 'Wat is n8n en hoe kan ik het gebruiken?',
    answer: 'n8n is een open-source workflow automation platform waarmee u repetitieve taken kunt automatiseren. U kunt het gebruiken om apps te verbinden, data te synchroniseren, AI agents te bouwen en bedrijfsprocessen te stroomlijnen. Installeer n8n via Docker, npm of gebruik n8n Cloud om direct te starten.',
  },
  {
    question: 'Is n8n beter dan Zapier?',
    answer: 'n8n biedt voordelen ten opzichte van Zapier op het gebied van prijs (self-hosted is gratis), data privacy (uw data verlaat niet uw servers), en flexibiliteit (volledige code-toegang). Zapier is eenvoudiger op te zetten maar wordt duurder bij opschaling. De keuze hangt af van uw specifieke behoeften en technisch niveau.',
  },
  {
    question: 'Heb ik programmeerervaring nodig?',
    answer: 'Nee, voor de meeste workflows heeft u geen programmeerervaring nodig. De visuele editor en de 400+ ingebouwde nodes maken het mogelijk om krachtige automatiseringen te bouwen zonder code. Voor geavanceerde functies zoals custom data transformaties is basiskennis van JavaScript een pluspunt.',
  },
  {
    question: 'Hoe begin je met n8n?',
    answer: 'De snelste manier om te starten is via n8n Cloud, waar u binnen vijf minuten uw eerste workflow kunt bouwen. Wilt u self-hosten? Installeer n8n via Docker met een enkel commando. Volg daarna onze stap-voor-stap tutorial hierboven om uw eerste automatisering op te zetten.',
  },
];

const N8nTutorialPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Tutorial Nederlands | Complete Gids van Beginner tot Expert | n8n-expert.be</title>
        <meta
          name="description"
          content="Leer n8n automatiseren met onze complete Nederlandse tutorial. Van installatie tot AI workflows bouwen: stap-voor-stap gids met praktische voorbeelden voor beginners en gevorderden."
        />
        <link rel="canonical" href="https://n8n-expert.be/kennisbank/n8n-tutorial" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://n8n-expert.be' },
          { name: 'Kennisbank', url: 'https://n8n-expert.be/kennisbank' },
          { name: 'n8n Tutorial Nederlands', url: 'https://n8n-expert.be/kennisbank/n8n-tutorial' },
        ]}
      />

      <ArticleSchema
        headline="n8n Tutorial Nederlands: De Complete Gids van Beginner tot Expert"
        description="Leer n8n automatiseren met onze complete Nederlandse tutorial. Van installatie tot AI workflows bouwen."
        url="https://n8n-expert.be/kennisbank/n8n-tutorial"
        datePublished="2026-01-15"
        dateModified="2026-02-01"
        author="n8n-expert.be"
        about={[
          { name: 'n8n', sameAs: 'https://n8n.io' },
          { name: 'Workflow Automation', sameAs: 'https://en.wikipedia.org/wiki/Workflow_automation' },
          { name: 'Docker', sameAs: 'https://en.wikipedia.org/wiki/Docker_(software)' },
        ]}
        mentions={[
          { name: 'OpenAI', sameAs: 'https://en.wikipedia.org/wiki/OpenAI' },
          { name: 'Zapier', sameAs: 'https://zapier.com' },
          { name: 'JavaScript', sameAs: 'https://en.wikipedia.org/wiki/JavaScript' },
        ]}
      />

      <FAQSchema faqs={faqs} />

      <div className="pt-28 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-4">
              Tutorial
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-text-primary mb-8 tracking-tighter leading-tight">
              n8n Tutorial Nederlands: <span className="text-brand">De Complete Gids</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-4xl leading-relaxed">
              Welkom bij de meest uitgebreide n8n tutorial in het Nederlands. Of u nu een beginner bent die net begint met automatiseren of een gevorderde gebruiker die AI workflows wil bouwen, deze gids behandelt alles wat u moet weten. n8n is een krachtig open-source automation platform waarmee u repetitieve taken elimineert, tools en nodes met elkaar verbindt, en slimme workflows creëert die uw bedrijf efficiënter maken. Van de eerste installatie tot geavanceerde AI agents: in deze tutorial leert u stap voor stap hoe u het maximale uit n8n haalt. Met meer dan 400 integraties en een cloud-optie is n8n geschikt voor elke automatisering.
            </p>
          </header>

          {/* Wat is n8n? */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
              Wat is <span className="text-brand">n8n</span>?
            </h2>
            <div className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-12">
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                n8n (uitgesproken als "n-eight-n", afgeleid van "nodemation") is een open-source workflow automation tool waarmee u processen kunt automatiseren zonder diepgaande programmeerkennis. Het platform biedt een visuele editor waarin u nodes met elkaar verbindt om krachtige workflows te creëren die data tussen verschillende applicaties laten stromen.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Wat n8n uniek maakt ten opzichte van alternatieven zoals Zapier of Make is de mogelijkheid om het platform self-hosted te draaien. Dit betekent dat al uw data op uw eigen servers blijft, wat essentieel is voor GDPR-compliance en privacy-gevoelige bedrijfsprocessen. Bovendien betaalt u bij self-hosting geen kosten per workflow execution.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                n8n beschikt over meer dan 400 ingebouwde integraties en kan via HTTP Request nodes met vrijwel elke API communiceren. Het platform ondersteunt JavaScript en Python voor geavanceerde data transformaties en heeft ingebouwde AI-functionaliteit voor het bouwen van intelligente agents.
              </p>
            </div>
          </section>

          {/* n8n Installeren */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10">
              n8n Installeren: <span className="text-brand">3 Methoden</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {installMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover transition-all"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{method.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{method.desc}</p>
                  {method.code && (
                    <div className="bg-[#0c1222] border border-surface-border rounded-lg p-4">
                      <code className="text-brand text-sm font-mono">{method.code}</code>
                    </div>
                  )}
                  {!method.code && (
                    <div className="bg-brand/10 border border-brand/20 rounded-lg p-4">
                      <p className="text-brand text-sm font-medium">
                        Start direct op cloud.n8n.io
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Je Eerste Workflow Bouwen */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10">
              Je Eerste n8n <span className="text-brand">Workflow</span> Bouwen
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-3xl">
              Volg deze vijf stappen om uw eerste werkende n8n workflow te creëren. We bouwen een eenvoudige automatisering die laat zien hoe nodes samenwerken.
            </p>
            <div className="space-y-6">
              {workflowSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8 relative"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center font-bold text-white text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
                      <p className="text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* n8n Nodes */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
              n8n Nodes: <span className="text-brand">De Bouwblokken</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-3xl">
              Nodes zijn de kern van n8n. Elke node vertegenwoordigt een specifieke actie of integratie. Door nodes te verbinden creëert u workflows die data automatisch laten stromen.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {nodeTypes.map((node, idx) => (
                <div
                  key={idx}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover transition-all"
                >
                  <div className="text-4xl mb-4">{node.icon}</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{node.title}</h3>
                  <p className="text-text-secondary text-sm mb-5">{node.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {node.examples.map((example, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-brand bg-brand/10 px-3 py-1 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Agents Bouwen */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
              AI Agents Bouwen met <span className="text-brand">n8n</span>
            </h2>
            <div className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-12">
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Een van de krachtigste mogelijkheden van n8n is het bouwen van AI agents. Met de ingebouwde AI-nodes kunt u intelligente automatiseringen creëren die gebruik maken van grote taalmodellen zoals OpenAI GPT, Anthropic Claude en andere AI-services.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                n8n biedt native integratie met ChatGPT en andere OpenAI-modellen, waarmee u workflows kunt bouwen die tekst genereren, classificeren, samenvatten of vertalen. Combineer deze AI-mogelijkheden met uw bestaande tools voor krachtige toepassingen zoals automatische e-mailclassificatie, intelligente klantenservice bots of content generatie pipelines.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {[
                  { title: 'Email Classificatie', desc: 'Gebruik AI om inkomende e-mails automatisch te categoriseren en door te sturen naar het juiste team.' },
                  { title: 'Content Generatie', desc: 'Genereer automatisch social media posts, product beschrijvingen of nieuwsbrieven met AI.' },
                  { title: 'Data Extractie', desc: 'Haal gestructureerde informatie uit ongestructureerde documenten, facturen of formulieren.' },
                  { title: 'Chatbot Integratie', desc: 'Bouw een chatbot die verbonden is met uw CRM, kennisbank en andere interne systemen.' },
                ].map((useCase, idx) => (
                  <div key={idx} className="bg-[#0c1222] border border-surface-border rounded-xl p-5">
                    <h4 className="text-text-primary font-bold mb-2">{useCase.title}</h4>
                    <p className="text-text-secondary text-sm">{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Geavanceerde Features */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10">
              Geavanceerde n8n <span className="text-brand">Features</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Error Handling',
                  desc: 'Configureer error workflows die automatisch actie ondernemen wanneer een node faalt. Stel notificaties in via Slack of e-mail, implementeer retry-logica en zorg dat geen enkele fout onopgemerkt blijft.',
                  icon: '🚨',
                },
                {
                  title: 'Sub-Workflows',
                  desc: 'Splits complexe processen op in herbruikbare sub-workflows. Dit maakt uw automatiseringen modulair, eenvoudiger te testen en beter te onderhouden. Roep sub-workflows aan vanuit andere workflows.',
                  icon: '🔄',
                },
                {
                  title: 'Webhook Triggers',
                  desc: 'Maak uw workflows bereikbaar via unieke webhook URLs. Externe systemen kunnen uw workflows activeren door data naar deze URLs te sturen, perfect voor real-time integraties en event-driven architectuur.',
                  icon: '🌐',
                },
                {
                  title: 'Expressions & Variables',
                  desc: 'Gebruik n8n expressions om dynamisch data te refereren, transformeren en combineren. Toegang tot JavaScript functies, environment variables en data van eerdere nodes in uw workflow.',
                  icon: '📐',
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                  <p className="text-text-secondary text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Best Practices voor Beginners */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
              n8n Best Practices voor <span className="text-brand">Beginners</span>
            </h2>
            <div className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-12">
              <p className="text-text-secondary text-lg mb-8">
                Voordat u aan de slag gaat met complexe automatiseringen, zijn hier vijf essentiële tips die elke n8n-gebruiker moet kennen:
              </p>
              <ol className="space-y-5">
                {bestPractices.map((practice, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-brand/20 text-brand rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-text-secondary text-lg">{practice}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Link
                  to="/kennisbank/best-practices"
                  className="text-brand font-bold hover:underline"
                >
                  Bekijk alle 10 n8n best practices
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10">
              Veelgestelde Vragen over <span className="text-brand">n8n</span>
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
                to="/kennisbank/best-practices"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                n8n Best Practices
              </Link>
              <Link
                to="/kennisbank/workflow-voorbeelden"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                Workflow Voorbeelden
              </Link>
              <Link
                to="/resources"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                Resources & Tools
              </Link>
              <Link
                to="/consultancy"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                Consultancy Diensten
              </Link>
              <a
                href="https://n8n-automatisatie.be/diensten"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                n8n Automatisatie Diensten
              </a>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-surface-border">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Hulp nodig bij uw n8n <span className="text-brand">automatisering</span>?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Onze n8n experts helpen u bij het opzetten, optimaliseren en schalen van uw workflows. Van eerste installatie tot complexe AI-integraties.
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

export default N8nTutorialPage;
