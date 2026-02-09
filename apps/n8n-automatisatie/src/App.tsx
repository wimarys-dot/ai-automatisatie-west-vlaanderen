import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer, FloatingCTA, BreadcrumbSchema, WebPageSchema, FAQSchema } from '@repo/ui';
import type { SiteConfig, FooterConfig } from '@repo/types';

import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import IntegrationsShowcase from '@/components/IntegrationsShowcase';
import PricingSection from '@/components/PricingSection';
import UseCases from '@/components/UseCases';

const DienstenPage = lazy(() => import('@/pages/DienstenPage'));
const PrijzenPage = lazy(() => import('@/pages/PrijzenPage'));
const IntegratiesPage = lazy(() => import('@/pages/IntegratiesPage'));
const UseCasesPage = lazy(() => import('@/pages/UseCasesPage'));
const CasesPage = lazy(() => import('@/pages/CasesPage'));
const ManagedHostingPage = lazy(() => import('@/pages/ManagedHostingPage'));
const MigratieZapierPage = lazy(() => import('@/pages/MigratieZapierPage'));

const siteConfig: SiteConfig = {
  name: 'n8n Automatisatie',
  domain: 'n8n-automatisatie.be',
  tagline: 'n8n Automatisering voor Belgische Bedrijven',
  email: 'info@n8n-automatisatie.be',
  logo: {
    text: 'n8n',
    accent: 'n8n-automatisatie.be',
  },
  navItems: [
    { label: 'Home', path: '/' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Integraties', path: '/integraties' },
    { label: 'Prijzen', path: '/prijzen' },
    { label: 'Use Cases', path: '/use-cases' },
    { label: 'Migratie', path: '/migratie-zapier' },
    { label: 'Cases', path: '/cases' },
  ],
  ctaLabel: 'Offerte aanvragen',
  ctaAction: '#contact',
  webhookUrl: 'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjAwNTY1MDYzZTA0MzAi_pc/IjU3NjcwNTZjMDYzMzA0MzQ1MjY4NTUzNTUxMzci_pc',
};

const footerConfig: FooterConfig = {
  columns: [
    {
      title: 'Diensten',
      links: [
        { label: 'Implementatie', path: '/diensten' },
        { label: 'Integraties', path: '/integraties' },
        { label: 'Prijzen', path: '/prijzen' },
        { label: 'Cases', path: '/cases' },
      ],
    },
    {
      title: 'Use Cases',
      links: [
        { label: 'CRM Automatisering', path: '/use-cases' },
        { label: 'Facturatie', path: '/use-cases' },
        { label: 'E-commerce', path: '/use-cases' },
        { label: 'HR & Onboarding', path: '/use-cases' },
      ],
    },
    {
      title: 'Netwerk',
      links: [
        { label: 'ai-automatisatie.be', path: 'https://ai-automatisatie.be' },
        { label: 'n8n-expert.be', path: 'https://n8n-expert.be' },
      ],
    },
  ],
  tagline: 'Automatiseer slimmer, niet harder.',
  copyright: '\u00A9 2026 N8N-AUTOMATISATIE.BE. Belgische kwaliteit.',
};

const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-brand/20 border-t-brand rounded-full animate-spin" />
      <span className="text-text-muted text-sm">Laden...</span>
    </div>
  </div>
);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const homeFaqs = [
  {
    question: 'Wat is n8n automatisering?',
    answer:
      'n8n is een open source workflow automation platform waarmee u bedrijfsprocessen automatiseert door apps, API\u2019s en diensten visueel met elkaar te verbinden. Met meer dan 400 nodes koppelt n8n tools zoals CRM-systemen, boekhoudpakketten en e-commerceplatformen zonder dat u hoeft te programmeren.',
  },
  {
    question: 'Is n8n beter dan Zapier?',
    answer:
      'n8n biedt voordelen ten opzichte van Zapier: het is open source, self-hosted mogelijk, en kent geen limieten op het aantal workflows of uitvoeringen. U betaalt geen extra kosten per taak en behoudt volledige controle over uw data. Voor bedrijven met veel automatiseringen is n8n vaak voordeliger en flexibeler.',
  },
  {
    question: 'Hoeveel kost n8n?',
    answer:
      'n8n Community Edition is gratis te gebruiken. Voor managed hosting en professionele ondersteuning bieden wij pakketten vanaf \u20AC297 per maand. Dit omvat hosting op Europese servers, dagelijkse backups, monitoring en onbeperkte workflows. Bekijk onze prijzenpagina voor een gedetailleerd overzicht.',
  },
  {
    question: 'Hoe verdien je geld met n8n automatisering?',
    answer:
      'Bedrijven besparen met n8n door handmatige taken te elimineren, fouten te reduceren en processen te versnellen. Typische besparingen liggen tussen 10 en 40 uur per week. Door facturatie, CRM-updates, orderverwerking en rapportages te automatiseren verdient de investering zich vaak binnen drie maanden terug.',
  },
  {
    question: 'Wat doet een automatiseringstool zoals n8n?',
    answer:
      'Een automatiseringstool zoals n8n verbindt verschillende software-applicaties en voert taken automatisch uit op basis van triggers en condities. Denk aan het automatisch aanmaken van facturen bij nieuwe orders, het synchroniseren van klantgegevens tussen CRM en boekhouding, of het versturen van notificaties bij specifieke events.',
  },
  {
    question: 'Welke bedrijfsprocessen kunnen geautomatiseerd worden?',
    answer:
      'Vrijwel elk repetitief bedrijfsproces kan geautomatiseerd worden met n8n: facturatie en boekhouding, CRM-beheer, e-commerce orderverwerking, HR-onboarding, marketing automation, klantenservice, data-synchronisatie, rapportage en meer. Wij analyseren uw processen en adviseren welke automatiseringen het meeste rendement opleveren.',
  },
];

const HomePage: React.FC = () => (
  <>
    <BreadcrumbSchema
      items={[
        { name: 'Home', url: 'https://n8n-automatisatie.be/' },
      ]}
    />
    <WebPageSchema
      name="n8n Automatisering Belgi\u00EB | Workflow Automation Partner"
      description="Belgische n8n partner voor workflow automatisering. Implementatie, managed hosting en migratie van Zapier naar n8n voor bedrijven in Belgi\u00EB."
      url="https://n8n-automatisatie.be/"
    />
    <FAQSchema faqs={homeFaqs} />

    <Hero />
    <ServiceCards />
    <UseCases />
    <IntegrationsShowcase />
    <PricingSection />

    {/* Wat is n8n automatisering? - SEO content section */}
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
          Wat is <span className="text-brand">n8n automatisering</span>?
        </h2>
        <div className="prose prose-lg max-w-none text-text-secondary space-y-5">
          <p>
            n8n is een krachtig open source workflow automation platform dat
            bedrijven in staat stelt om repetitieve taken te automatiseren
            zonder diepgaande programmeerkennis. Het platform werkt met een
            visuele editor waarin u nodes &mdash; de bouwstenen van elke
            workflow &mdash; aan elkaar koppelt om gegevens tussen
            applicaties te laten stromen. Of het nu gaat om het verbinden
            van uw CRM met uw boekhoudpakket via een API, het automatisch
            verwerken van e-commerce orders of het inzetten van AI voor
            klantenservice: n8n maakt het mogelijk.
          </p>
          <p>
            In tegenstelling tot closed-source alternatieven draait n8n
            self-hosted op uw eigen infrastructuur of via managed hosting.
            Hierdoor behoudt u volledige controle over uw data en
            automatiseringen. Met meer dan 400 native integraties, ondersteuning
            voor elke REST API en ingebouwde AI-functionaliteiten is n8n de
            ideale oplossing voor bedrijven die hun processen willen
            automatiseren. Van eenvoudige notificaties tot complexe
            multi-stap workflows met conditionele logica en foutafhandeling
            &mdash; de mogelijkheden zijn vrijwel onbeperkt.
          </p>
          <p>
            Als Belgische n8n partner helpen wij u bij de implementatie,
            het ontwerp van workflows en het beheer van uw automatisering
            omgeving. Wij zorgen ervoor dat uw automatiseringen betrouwbaar
            draaien en meegroeit met uw organisatie.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ section */}
    <section className="py-24 bg-surface-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center">
          Veelgestelde vragen over{' '}
          <span className="text-brand">n8n automatisering</span>
        </h2>
        <p className="text-text-secondary text-lg mb-12 text-center max-w-2xl mx-auto">
          Alles wat u moet weten over n8n, workflow automation en onze diensten.
        </p>
        <div className="space-y-4">
          {homeFaqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-surface-bg border border-surface-border rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-bold text-text-primary hover:bg-brand/5 transition-colors">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-text-secondary text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* Ontdek meer - internal links section */}
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Ontdek meer
        </h2>
        <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
          Verken onze diensten, integratiemogelijkheden en succesverhalen.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: 'Onze Diensten', path: '/diensten' },
            { label: 'Integraties', path: '/integraties' },
            { label: 'Transparante Prijzen', path: '/prijzen' },
            { label: 'Use Cases', path: '/use-cases' },
            { label: 'Migratie Zapier \u2192 n8n', path: '/migratie-zapier' },
            { label: 'Klantverhalen', path: '/cases' },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="bg-surface-card border border-surface-border rounded-xl px-6 py-4 font-medium text-text-primary hover:border-brand hover:text-brand transition-all hover:shadow-md"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar
            navItems={siteConfig.navItems}
            logo={siteConfig.logo}
            ctaLabel={siteConfig.ctaLabel}
            ctaAction={siteConfig.ctaAction}
          />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/diensten" element={<DienstenPage />} />
                <Route path="/diensten/managed-hosting" element={<ManagedHostingPage />} />
                <Route path="/prijzen" element={<PrijzenPage />} />
                <Route path="/integraties" element={<IntegratiesPage />} />
                <Route path="/use-cases" element={<UseCasesPage />} />
                <Route path="/migratie-zapier" element={<MigratieZapierPage />} />
                <Route path="/cases" element={<CasesPage />} />
              </Routes>
            </Suspense>
          </main>
          <FloatingCTA />
          <Footer
            config={footerConfig}
            logo={siteConfig.logo}
            description="Uw n8n automatisering partner in België. Van implementatie tot managed hosting."
            webhookUrl={siteConfig.webhookUrl}
            email={siteConfig.email}
          />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
