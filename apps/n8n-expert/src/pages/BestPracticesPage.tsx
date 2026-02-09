import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, ArticleSchema, FAQSchema } from '@repo/ui';

const bestPractices = [
  {
    number: 1,
    title: 'Gebruik duidelijke naming conventions',
    desc: 'Geef elke workflow en node een beschrijvende naam die direct duidelijk maakt wat het doet. Gebruik een consistente naamgeving zoals "Sales — Nieuwe Lead naar CRM" in plaats van "Workflow 1". Zo vinden collega\'s en uw toekomstige zelf snel de juiste workflow terug, zelfs bij tientallen actieve automatiseringen.',
    icon: '🏷️',
  },
  {
    number: 2,
    title: 'Implementeer error handling in elke workflow',
    desc: 'Voeg een Error Trigger workflow toe die automatisch notificaties verstuurt wanneer een workflow faalt. Configureer retry-logica voor nodes die met externe API\'s communiceren en stel fallback-paden in voor kritieke processen. Zonder error handling mist u stille fouten die data-inconsistenties veroorzaken.',
    icon: '🚨',
  },
  {
    number: 3,
    title: 'Splits complexe processen in sub-workflows',
    desc: 'Wanneer een workflow meer dan 15-20 nodes bevat, splits deze op in logische sub-workflows. Elk sub-workflow handelt één specifiek proces af, zoals data validatie of notificaties. Dit maakt workflows modulair, herbruikbaar en eenvoudiger te debuggen bij problemen.',
    icon: '🔄',
  },
  {
    number: 4,
    title: 'Beveilig credentials met environment variables',
    desc: 'Sla API-keys, wachtwoorden en tokens nooit hardcoded op in uw workflows. Gebruik n8n\'s ingebouwde credential manager en environment variables om gevoelige gegevens veilig te beheren. Dit voorkomt dat credentials per ongeluk worden gedeeld bij het exporteren of delen van workflows.',
    icon: '🔐',
  },
  {
    number: 5,
    title: 'Documenteer workflows met sticky notes',
    desc: 'Plaats sticky notes direct in de n8n editor om het doel van elke sectie te beschrijven. Leg uit waarom bepaalde keuzes zijn gemaakt, welke API-endpoints worden aangesproken en welke data transformaties plaatsvinden. Goede documentatie bespaart uren bij toekomstig onderhoud.',
    icon: '📝',
  },
  {
    number: 6,
    title: 'Gebruik version control voor je workflows',
    desc: 'Exporteer uw workflows regelmatig als JSON en sla ze op in een Git repository. Zo kunt u wijzigingen tracken, eerdere versies herstellen en samenwerken met teamleden. n8n\'s CLI maakt het eenvoudig om workflows te exporteren en importeren als onderdeel van uw CI/CD pipeline.',
    icon: '🗂️',
  },
  {
    number: 7,
    title: 'Test workflows grondig voor productie',
    desc: 'Test elke workflow uitgebreid met realistische testdata voordat u deze in productie activeert. Gebruik n8n\'s Manual Execution om stap voor stap door de workflow te gaan. Test edge cases zoals lege responses, time-outs en onverwachte dataformaten om verrassingen in productie te voorkomen.',
    icon: '🧪',
  },
  {
    number: 8,
    title: 'Monitor workflow executions actief',
    desc: 'Controleer regelmatig het execution log in n8n en stel alerts in voor mislukte runs. Gebruik externe monitoring tools of een dedicated monitoring workflow die dagelijks rapporteert over het aantal geslaagde en gefaalde executions. Proactief monitoren voorkomt dat problemen escaleren.',
    icon: '📊',
  },
  {
    number: 9,
    title: 'Beperk gelijktijdige executions',
    desc: 'Configureer execution limits om te voorkomen dat te veel workflows tegelijkertijd draaien en uw server overbelasten. Gebruik queue mode bij hoge volumes en stel per-workflow concurrency limits in. Dit beschermt de stabiliteit van uw n8n instance en voorkomt geheugen- of CPU-problemen.',
    icon: '⚙️',
  },
  {
    number: 10,
    title: 'Plan voor schaalbaarheid vanaf het begin',
    desc: 'Ontwerp uw workflows met groei in gedachten. Gebruik database-backed execution storage in plaats van het standaard bestandssysteem. Overweeg queue mode voor high-volume scenario\'s en zorg dat uw infrastructuur horizontaal kan schalen wanneer het aantal workflows en executions toeneemt.',
    icon: '📈',
  },
];

const faqs = [
  {
    question: 'Waarom zijn best practices belangrijk voor n8n workflows?',
    answer: 'Best practices zorgen ervoor dat uw n8n workflows betrouwbaar, onderhoudbaar en schaalbaar zijn. Zonder duidelijke conventies en error handling worden workflows snel onoverzichtelijk en foutgevoelig naarmate uw automatisering groeit. Door vanaf het begin best practices toe te passen, bespaart u tijd bij onderhoud en voorkomt u kostbare productie-incidenten.',
  },
  {
    question: 'Hoe implementeer ik error handling in n8n?',
    answer: 'In n8n kunt u een Error Trigger workflow aanmaken die automatisch wordt geactiveerd bij een fout in een andere workflow. Daarnaast kunt u per node een Error Output configureren om fouten lokaal af te handelen. Combineer dit met notificaties via Slack of e-mail zodat u direct op de hoogte bent van problemen.',
  },
  {
    question: 'Wat is het verschil tussen sub-workflows en gewone workflows?',
    answer: 'Sub-workflows zijn workflows die worden aangeroepen vanuit andere workflows via de Execute Workflow node. Ze functioneren als herbruikbare modules die specifieke taken afhandelen. Dit maakt complexe processen overzichtelijker en stelt u in staat om logica op één plek te onderhouden in plaats van deze te dupliceren in meerdere workflows.',
  },
  {
    question: 'Hoe schaal ik n8n voor veel gelijktijdige workflows?',
    answer: 'Voor schaalbaarheid kunt u n8n in queue mode draaien met Redis en meerdere worker processen. Gebruik PostgreSQL als database backend voor betrouwbare execution opslag. Monitor het resource gebruik en schaal horizontaal door extra workers toe te voegen wanneer het aantal gelijktijdige executions toeneemt.',
  },
];

const BestPracticesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>10 n8n Best Practices voor Schaalbare Workflows | n8n-expert.be</title>
        <meta
          name="description"
          content="Ontdek 10 essentiële n8n best practices voor schaalbare workflows in productie. Leer over error handling, naming conventions, sub-workflows en meer."
        />
        <link rel="canonical" href="https://n8n-expert.be/kennisbank/best-practices" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://n8n-expert.be' },
          { name: 'Kennisbank', url: 'https://n8n-expert.be/kennisbank' },
          { name: 'Best Practices', url: 'https://n8n-expert.be/kennisbank/best-practices' },
        ]}
      />

      <ArticleSchema
        headline="10 n8n Best Practices voor Schaalbare Workflows"
        description="Ontdek 10 essentiële n8n best practices voor schaalbare workflows in productie. Leer over error handling, naming conventions, sub-workflows en meer."
        url="https://n8n-expert.be/kennisbank/best-practices"
        datePublished="2026-01-10"
        dateModified="2026-02-01"
        author="n8n-expert.be"
      />

      <FAQSchema faqs={faqs} />

      <div className="pt-28 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-4">
              Best Practices
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-text-primary mb-8 tracking-tighter leading-tight">
              10 n8n Best Practices voor{' '}
              <span className="text-brand">Schaalbare Workflows</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-4xl leading-relaxed">
              n8n workflows bouwen is eenvoudig, maar workflows bouwen die betrouwbaar draaien in
              productie vereist discipline en de juiste aanpak. Of u nu tien of honderd workflows
              beheert, deze tien best practices helpen u om schaalbare, onderhoudbare en foutbestendige
              automatiseringen te creëren. Van duidelijke naming conventions tot proactieve monitoring:
              volg deze richtlijnen om het maximale uit uw n8n omgeving te halen.
            </p>
          </header>

          {/* 10 Best Practices */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10">
              De 10 <span className="text-brand">Gouden Regels</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {bestPractices.map((practice) => (
                <div
                  key={practice.number}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover transition-all"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <div className="text-3xl">{practice.icon}</div>
                      <span className="w-8 h-8 bg-brand/20 text-brand rounded-full flex items-center justify-center font-bold text-sm">
                        {practice.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary mb-2">
                        {practice.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {practice.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10">
              Veelgestelde Vragen over <span className="text-brand">Best Practices</span>
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
                n8n Tutorial
              </Link>
              <Link
                to="/kennisbank/workflow-voorbeelden"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                Workflow Voorbeelden
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
              Hulp nodig bij uw n8n <span className="text-brand">best practices</span>?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Onze n8n experts helpen u bij het implementeren van professionele workflows die schaalbaar en onderhoudbaar zijn. Van code review tot volledige workflow optimalisatie.
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

export default BestPracticesPage;
