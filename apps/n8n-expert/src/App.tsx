import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Navbar, Footer, FloatingCTA, BreadcrumbSchema, WebPageSchema, FAQSchema } from '@repo/ui';
import type { SiteConfig, FooterConfig } from '@repo/types';

import Hero from '@/components/Hero';
import ConsultancyServices from '@/components/ConsultancyServices';
import BlogPreview from '@/components/BlogPreview';
import PortfolioSection from '@/components/PortfolioSection';

const ConsultancyPage = lazy(() => import('@/pages/ConsultancyPage'));
const KennisbankPage = lazy(() => import('@/pages/KennisbankPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
const ResourcesPage = lazy(() => import('@/pages/ResourcesPage'));
const SecurityAuditPage = lazy(() => import('@/pages/SecurityAuditPage'));
const N8nTutorialPage = lazy(() => import('@/pages/N8nTutorialPage'));
const BestPracticesPage = lazy(() => import('@/pages/BestPracticesPage'));
const WorkflowVoorbeeldenPage = lazy(() => import('@/pages/WorkflowVoorbeeldenPage'));

const siteConfig: SiteConfig = {
  name: 'n8n Expert',
  domain: 'n8n-expert.be',
  tagline: 'Uw n8n Expert',
  email: 'info@n8n-expert.be',
  logo: {
    text: 'E',
    accent: 'n8n-expert.be',
  },
  navItems: [
    { label: 'Home', path: '/' },
    { label: 'Advies', path: '/consultancy' },
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Resources', path: '/resources' },
  ],
  ctaLabel: 'Plan consultatie',
  ctaAction: '#contact',
  webhookUrl: 'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjAwNTY1MDYzZTA0MzAi_pc/IjU3NjcwNTZjMDYzMzA0MzQ1MjY4NTUzNTUxMzci_pc',
};

const footerConfig: FooterConfig = {
  columns: [
    {
      title: 'Consultancy',
      links: [
        { label: 'Audit & Advies', path: '/consultancy' },
        { label: 'Architectuur Review', path: '/consultancy' },
        { label: 'Performance', path: '/consultancy' },
        { label: 'Security Assessment', path: '/consultancy/security-audit' },
      ],
    },
    {
      title: 'Kennisbank',
      links: [
        { label: 'n8n Tutorial', path: '/kennisbank/n8n-tutorial' },
        { label: 'Best Practices', path: '/kennisbank/best-practices' },
        { label: 'Workflow Voorbeelden', path: '/kennisbank/workflow-voorbeelden' },
        { label: 'Resources', path: '/resources' },
      ],
    },
    {
      title: 'Netwerk',
      links: [
        { label: 'ai-automatisatie.be', path: 'https://ai-automatisatie.be' },
        { label: 'n8n-automatisatie.be', path: 'https://n8n-automatisatie.be' },
      ],
    },
  ],
  tagline: 'Kennis is de sleutel tot automatisering.',
  copyright: '\u00A9 2026 N8N-EXPERT.BE. Expert kwaliteit.',
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

/* ─── Homepage FAQ data ─── */
const homepageFaqs = [
  {
    question: 'How much do n8n consultants make?',
    answer: 'n8n consultants in België en Europa hanteren uurtarieven tussen €80 en €200, afhankelijk van ervaring en specialisatie. Senior n8n experts met ervaring in enterprise architectuur, AI agents en custom node development bevinden zich aan de bovenkant van dit spectrum. Het verschil in tarief wordt bepaald door de complexiteit van het project, de mate van specialisatie en de toegevoegde waarde in termen van tijdsbesparing en kostenverlaging voor de klant.',
  },
  {
    question: 'Why is everyone using n8n?',
    answer: 'n8n is uitgegroeid tot het meest populaire open-source workflow automation platform omdat het unieke voordelen biedt: volledige self-hosting mogelijkheden voor data controle, een visuele editor gecombineerd met de kracht van custom code, 400+ native integraties, en geen vendor lock-in. Bedrijven kiezen n8n boven alternatieven zoals Zapier en Make vanwege de lagere kosten bij schaal, de flexibiliteit om complexe AI agents te bouwen, en de mogelijkheid om het platform volledig naar eigen wens aan te passen.',
  },
  {
    question: 'Is n8n a good skill?',
    answer: 'n8n is een uitstekende skill om te ontwikkelen in 2026. De vraag naar workflow automation experts groeit exponentieel naarmate bedrijven hun processen digitaliseren en AI integreren. n8n expertise combineert technische vaardigheden (JavaScript, API-integratie, database kennis) met strategisch inzicht in bedrijfsprocessen. Het is een skill die direct waarde toevoegt &mdash; bedrijven besparen gemiddeld 20 tot 40 uur per week met goed opgezette n8n workflows.',
  },
  {
    question: 'Can you hire n8n experts?',
    answer: 'Ja, u kunt n8n experts inhuren voor zowel consultancy als implementatie projecten. Op n8n-expert.be bied ik persoonlijke n8n consultancy aan voor Belgische bedrijven: van audit en advies tot complete workflow development en AI agent implementatie. U kunt kiezen voor eenmalige projecten, doorlopende ondersteuning of een combinatie. Neem contact op via het contactformulier om uw project te bespreken en een vrijblijvende offerte te ontvangen.',
  },
];

/* ─── Homepage FAQ accordion ─── */
const HomepageFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
          Veelgestelde vragen over <span className="text-brand">n8n experts</span>
        </h2>
        <div className="space-y-4">
          {homepageFaqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface-card border border-surface-border rounded-2xl overflow-hidden hover:border-surface-border-hover transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-text-primary pr-4">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-brand flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6">
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── "Wat doet een n8n expert?" section ─── */
const WatDoetEenExpert: React.FC = () => (
  <section className="py-24 bg-surface-card">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-8">
        Wat doet een <span className="text-brand">n8n expert</span>?
      </h2>
      <div className="max-w-3xl mx-auto text-text-secondary text-lg space-y-4 mb-12">
        <p>
          Een n8n expert is een specialist die organisaties helpt bij het ontwerpen, bouwen en optimaliseren
          van workflow automation met het n8n platform. Dit gaat verder dan het simpelweg verbinden van twee
          apps &mdash; een echte expert analyseert uw volledige bedrijfsprocessen, identificeert kansen voor
          automatisering en bouwt schaalbare oplossingen die meegroeien met uw organisatie.
        </p>
        <p>
          Concreet houdt dit in: het architecturaal ontwerpen van complexe multi-step workflows, het bouwen
          van intelligente AI agents die autonoom taken uitvoeren, het ontwikkelen van custom nodes voor
          specifieke integraties, en het optimaliseren van bestaande automation voor betere performance en
          lagere kosten. Een n8n expert combineert technische diepgang met strategisch inzicht om uw
          investering in automation maximaal te laten renderen.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-surface-bg border border-surface-border rounded-2xl p-6">
          <h3 className="text-lg font-bold text-text-primary mb-2">Strategisch Advies</h3>
          <p className="text-text-secondary text-sm">
            Welke processen automatiseren de meeste waarde? Een expert maakt de juiste keuzes en
            voorkomt dure fouten in uw automation strategie.
          </p>
        </div>
        <div className="bg-surface-bg border border-surface-border rounded-2xl p-6">
          <h3 className="text-lg font-bold text-text-primary mb-2">Technische Implementatie</h3>
          <p className="text-text-secondary text-sm">
            Van eenvoudige data sync tot complexe AI-gestuurde workflows met custom code,
            error handling en monitoring &mdash; gebouwd volgens best practices.
          </p>
        </div>
        <div className="bg-surface-bg border border-surface-border rounded-2xl p-6">
          <h3 className="text-lg font-bold text-text-primary mb-2">Doorlopende Optimalisatie</h3>
          <p className="text-text-secondary text-sm">
            Workflows verouderen. Een expert monitort, optimaliseert en breidt uw automation uit
            zodat deze blijft presteren naarmate uw bedrijf evolueert.
          </p>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link
          to="/consultancy"
          className="inline-flex items-center gap-2 text-brand font-bold hover:underline"
        >
          Ontdek onze consultancy diensten
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

/* ─── HomePage ─── */
const HomePage: React.FC = () => (
  <>
    <Helmet>
      <title>n8n Expert België | Certified Workflow Automation Specialist | n8n-expert.be</title>
      <meta
        name="description"
        content="Uw gecertificeerde n8n expert in België. Persoonlijke consultancy, workflow automation, AI agents en strategisch advies voor organisaties die het maximum uit n8n willen halen."
      />
      <link rel="canonical" href="https://n8n-expert.be/" />
    </Helmet>

    <BreadcrumbSchema
      items={[
        { name: 'Home', url: 'https://n8n-expert.be/' },
      ]}
    />

    <WebPageSchema
      name="n8n Expert België - Certified Workflow Automation Specialist"
      description="Uw gecertificeerde n8n expert in België. Persoonlijke consultancy, workflow automation, AI agents en strategisch advies."
      url="https://n8n-expert.be/"
    />

    <FAQSchema
      faqs={homepageFaqs}
    />

    <Hero />
    <ConsultancyServices />
    <WatDoetEenExpert />
    <PortfolioSection />
    <BlogPreview />
    <HomepageFAQ />
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
                <Route path="/consultancy" element={<ConsultancyPage />} />
                <Route path="/consultancy/security-audit" element={<SecurityAuditPage />} />
                <Route path="/kennisbank" element={<KennisbankPage />} />
                <Route path="/kennisbank/n8n-tutorial" element={<N8nTutorialPage />} />
                <Route path="/kennisbank/best-practices" element={<BestPracticesPage />} />
                <Route path="/kennisbank/workflow-voorbeelden" element={<WorkflowVoorbeeldenPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
              </Routes>
            </Suspense>
          </main>
          <FloatingCTA />
          <Footer
            config={footerConfig}
            logo={siteConfig.logo}
            description="Persoonlijke n8n consultancy en kennisautoriteit. Expert advies voor uw automatisering strategie."
            webhookUrl={siteConfig.webhookUrl}
            email={siteConfig.email}
          />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
