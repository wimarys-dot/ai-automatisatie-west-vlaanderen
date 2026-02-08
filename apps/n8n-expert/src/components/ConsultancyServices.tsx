import React from 'react';

const services = [
  {
    title: 'Audit & Advies',
    desc: 'Grondige analyse van uw huidige automatiseringen en processen. Concreet advies met prioriteiten en roadmap.',
    icon: '🔍',
    deliverables: ['Proces analyse rapport', 'Opportunity matrix', 'Implementatie roadmap', 'ROI projectie'],
  },
  {
    title: 'Architectuur Review',
    desc: 'Laat uw bestaande n8n setup reviewen door een expert. Identificeer bottlenecks, security risico\'s en schaalbaarheid issues.',
    icon: '🏗️',
    deliverables: ['Architectuur diagram', 'Performance rapport', 'Security assessment', 'Optimalisatie plan'],
  },
  {
    title: 'Performance Optimalisatie',
    desc: 'Uw workflows draaien trager dan verwacht? Wij identificeren de oorzaak en optimaliseren voor maximale snelheid.',
    icon: '⚡',
    deliverables: ['Performance benchmark', 'Bottleneck analyse', 'Optimalisatie implementatie', 'Before/after metrics'],
  },
  {
    title: 'Security Assessment',
    desc: 'Zijn uw API keys, credentials en data flows veilig? Een complete security audit van uw n8n omgeving.',
    icon: '🔒',
    deliverables: ['Security scan rapport', 'Vulnerability assessment', 'Remediation plan', 'Best practices guide'],
  },
];

const ConsultancyServices: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            <span className="text-brand">Consultancy</span> Diensten
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Strategisch advies en technische expertise op het hoogste niveau.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover transition-all">
              <div className="flex items-start gap-5">
                <div className="text-4xl">{s.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary mb-3">{s.title}</h3>
                  <p className="text-text-secondary text-sm mb-6">{s.desc}</p>
                  <div>
                    <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">Deliverables</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {s.deliverables.map((d, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultancyServices;
