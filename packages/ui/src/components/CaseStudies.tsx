import React from 'react';

interface CaseStudy {
  loc: string;
  title: string;
  desc: string;
  stat: string;
}

interface CaseStudiesProps {
  cases?: CaseStudy[];
  title?: string;
  highlight?: string;
}

const defaultCases: CaseStudy[] = [
  {
    loc: "Roeselare",
    title: "Facturatie op Autopilot",
    desc: "Voor een lokaal productiebedrijf koppelden we hun ERP aan n8n. Resultaat: 85% minder administratieve fouten en 15u tijdswinst per week.",
    stat: "15u / week"
  },
  {
    loc: "Kortrijk",
    title: "Intelligente Lead-Gen Agent",
    desc: "Implementatie van een AI Agent die binnenkomende aanvragen kwalificeert en direct in het CRM plaatst op basis van prioriteit.",
    stat: "24/7 Support"
  },
  {
    loc: "Brugge",
    title: "MCP Data Koppeling",
    desc: "Veilige koppeling van lokale technische databases aan een privaat AI model voor direct inzicht in historische productiedata.",
    stat: "100% Privacy"
  }
];

const CaseStudies: React.FC<CaseStudiesProps> = ({
  cases = defaultCases,
  title = 'Lokale',
  highlight = 'Impact'
}) => {
  return (
    <section id="cases" className="py-24 bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black mb-12 md:mb-16 text-center uppercase tracking-tight text-text-primary">
          {title} <span className="text-brand">{highlight}</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="flex flex-col bg-surface-card border border-surface-border p-8 rounded-3xl hover:border-surface-border-hover transition-all group relative">
              <span className="text-brand font-bold text-sm mb-4">{c.loc}</span>
              <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-brand transition-colors">{c.title}</h3>
              <p className="text-text-secondary mb-8 flex-1 text-sm md:text-base">{c.desc}</p>
              <div className="pt-6 border-t border-surface-border flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Resultaat</span>
                <span className="text-base md:text-lg font-bold text-text-primary">{c.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
