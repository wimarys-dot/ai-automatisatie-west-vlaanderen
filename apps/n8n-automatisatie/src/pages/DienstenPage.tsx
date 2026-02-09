import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from '@repo/ui';
import ServiceCards from '@/components/ServiceCards';

const DienstenPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Hoeveel kost n8n?',
      a: 'n8n is open-source en gratis te gebruiken als u het zelf host. n8n Cloud begint vanaf €20/maand. Onze implementatiepakketten starten vanaf €990 voor een Starter pakket met tot 3 workflows, tot op maat gemaakte Enterprise oplossingen. Bekijk onze prijzenpagina voor meer details.',
    },
    {
      q: 'Wat is een n8n flow?',
      a: 'Een n8n flow (of workflow) is een geautomatiseerd proces dat uit meerdere stappen bestaat. Elke stap is een node die een actie uitvoert: data ophalen, verwerken, versturen of opslaan. Flows worden visueel gebouwd in de n8n interface door nodes met elkaar te verbinden.',
    },
    {
      q: 'Wat is n8n?',
      a: 'n8n is een open-source workflow automatiseringsplatform waarmee u bedrijfsprocessen kunt automatiseren. Het verbindt meer dan 400 apps en services via een visuele interface. Het is vergelijkbaar met Zapier of Make, maar biedt meer flexibiliteit, lagere kosten en volledige controle over uw data.',
    },
    {
      q: 'Hoe werkt n8n?',
      a: 'n8n werkt met een visuele drag-and-drop interface waarin u nodes plaatst en verbindt. Elke node vertegenwoordigt een app of actie. Een trigger start de workflow, waarna data automatisch door de nodes stroomt. U kunt condities, loops en foutafhandeling toevoegen zonder te programmeren.',
    },
    {
      q: 'Heb ik programmeerervaring nodig?',
      a: 'Nee, voor de meeste workflows heeft u geen programmeerervaring nodig. De visuele interface van n8n maakt het mogelijk om complexe automatiseringen te bouwen zonder code. Voor geavanceerde use cases kunt u optioneel JavaScript of Python gebruiken, maar wij regelen dit graag voor u.',
    },
    {
      q: 'Hoe lang duurt een implementatie?',
      a: 'Een Starter implementatie met tot 3 workflows is doorgaans binnen 1-2 weken afgerond. Een Professional project met tot 10 workflows duurt gemiddeld 3-4 weken. Enterprise trajecten plannen we volledig op maat, afhankelijk van de complexiteit en het aantal integraties.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>n8n Implementatie België | Workflow Automatisering & AI Setup | n8n-automatisatie.be</title>
        <meta name="description" content="Professionele n8n implementatie voor Belgische bedrijven. AI-gestuurde workflow automatisering, integraties met 400+ tools, en slimme ai agents voor uw bedrijfsprocessen. Van analyse tot go-live." />
        <link rel="canonical" href="https://n8n-automatisatie.be/diensten" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://n8n-automatisatie.be' },
        { name: 'Diensten', url: 'https://n8n-automatisatie.be/diensten' },
      ]} />

      <ServiceSchema
        name="n8n Implementatie België"
        description="Professionele n8n workflow automatisering en AI implementatie voor Belgische bedrijven. Van analyse tot go-live, inclusief integraties en managed hosting."
        url="https://n8n-automatisatie.be/diensten"
        provider="n8n-automatisatie.be"
        areaServed={['België', 'Vlaanderen', 'Brussel', 'Wallonië']}
        priceRange="€990 - €15000"
      />

      <FAQSchema faqs={faqs.map(faq => ({ question: faq.q, answer: faq.a }))} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <header className="mb-16 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8">
              n8n Implementatie voor Belgische{' '}
              <span className="text-brand">Bedrijven</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              Wilt u uw bedrijfsprocessen automatiseren met n8n? Wij zijn gespecialiseerd in de implementatie van
              n8n workflows en AI-gestuurde automatisering voor jouw bedrijf. Van eenvoudige integraties tot
              geavanceerde ai agents die uw dagelijkse taken overnemen. n8n is een krachtig open source platform
              dat naadloos samenwerkt met OpenAI, cloud services en meer dan 400 tools. Onze ervaren consultants
              begeleiden u van de eerste analyse tot een volledige productie-omgeving, zodat u snel resultaat ziet
              en uw team zich kan focussen op wat echt telt.
            </p>
          </header>

          {/* Existing ServiceCards */}
          <ServiceCards />

          {/* Waarom n8n implementatie */}
          <section className="mt-24 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
              Waarom kiezen voor n8n <span className="text-brand">implementatie</span>?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                n8n onderscheidt zich van andere automatiseringstools door de combinatie van een intuïtieve
                visuele interface, geavanceerde mogelijkheden en volledige controle over uw data. Met meer dan
                400 ingebouwde nodes kunt u vrijwel elke applicatie verbinden en automatiseren. Of u nu
                eenvoudige taken wilt stroomlijnen of complexe ai agents wilt inzetten, n8n biedt de
                flexibiliteit die uw bedrijf nodig heeft.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Open Source & Transparant', desc: 'Volledige toegang tot de broncode. Geen vendor lock-in, geen verborgen limieten. U behoudt altijd controle over uw automatiseringen.' },
                  { title: 'AI-Native Integraties', desc: 'Native ondersteuning voor OpenAI, Claude, Gemini en andere AI modellen. Bouw slimme ai agents die leren en meegroeien met uw bedrijf.' },
                  { title: 'Self-Hosted of Cloud', desc: 'Kies zelf waar uw data staat. Self-hosted voor maximale privacy of n8n Cloud voor gemak. Wij configureren beide opties.' },
                  { title: 'Onbeperkt Schaalbaar', desc: 'Geen limieten op workflows of uitvoeringen bij self-hosting. Groei van 5 naar 500 workflows zonder extra licentiekosten.' },
                ].map((item, i) => (
                  <div key={i} className="bg-surface-card border border-surface-border rounded-xl p-6">
                    <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Implementatieproces */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
              Ons <span className="text-brand">implementatieproces</span>
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Analyse',
                  desc: 'Wij brengen uw huidige processen in kaart, identificeren automatiseringskansen en stellen een helder plan op met prioriteiten en verwachte ROI.',
                },
                {
                  step: '2',
                  title: 'Ontwerp',
                  desc: 'Onze workflow architects ontwerpen de optimale automatiseringsflow, inclusief foutafhandeling, monitoring en schaalbaarheid voor de toekomst.',
                },
                {
                  step: '3',
                  title: 'Bouw',
                  desc: 'Wij bouwen en testen elke workflow grondig. Integraties worden geconfigureerd, AI modellen afgestemd en alle edge cases afgedekt.',
                },
                {
                  step: '4',
                  title: 'Go-live',
                  desc: 'Na parallelle testing gaan uw workflows live. Wij monitoren de eerste weken intensief en zorgen voor een vlekkeloze overdracht aan uw team.',
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* n8n vs Zapier */}
          <section className="mb-24 bg-surface-card border border-surface-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 text-center">
              n8n vs Zapier: waarom wij <span className="text-brand">n8n</span> kiezen
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Zapier is populair, maar voor bedrijven die serieus willen automatiseren biedt n8n aanzienlijke
              voordelen. Waar Zapier u beperkt met een vast aantal taken per maand en hoge kosten bij schaling,
              geeft n8n u volledige vrijheid. Self-hosting betekent geen limieten op workflows of uitvoeringen,
              en uw gevoelige bedrijfsdata verlaat nooit uw eigen servers.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Bovendien biedt n8n native AI-integraties en de mogelijkheid om custom code toe te voegen,
              waardoor u automatiseringen kunt bouwen die met Zapier simpelweg niet mogelijk zijn. Denk aan
              complexe dataverwerking, geavanceerde conditionele logica en real-time AI-agents.
            </p>
            <div className="text-center">
              <Link
                to="/migratie-zapier"
                className="inline-block bg-brand text-white px-8 py-3 rounded-full font-bold hover:bg-brand-hover transition-colors"
              >
                Meer over migratie van Zapier naar n8n
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10 text-center">
              Veelgestelde <span className="text-brand">Vragen</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-surface-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left bg-surface-card hover:bg-surface-card/80 transition-colors"
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
                    <div className="p-5 pt-0 bg-surface-card">
                      <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="text-center space-y-4 pb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Meer ontdekken</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/diensten/managed-hosting"
                className="px-6 py-3 bg-surface-card border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
              >
                Managed Hosting
              </Link>
              <Link
                to="/prijzen"
                className="px-6 py-3 bg-surface-card border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
              >
                Bekijk Prijzen
              </Link>
              <Link
                to="/integraties"
                className="px-6 py-3 bg-surface-card border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
              >
                Alle Integraties
              </Link>
              <a
                href="https://n8n-expert.be"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-surface-card border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
              >
                n8n-expert.be
              </a>
            </div>
          </section>

        </article>
      </div>
    </>
  );
};

export default DienstenPage;
