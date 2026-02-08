import React from 'react';

interface MCPFlowChartProps {
  title: string;
  subtitle: string;
}

const MCPFlowChart: React.FC<MCPFlowChartProps> = ({ title, subtitle }) => {
  const steps = [
    { icon: '🤖', label: 'AI Model', desc: 'Vraagt data', color: '#7c3aed' },
    { icon: '🔐', label: 'MCP Server', desc: 'Valideert & routeert', color: '#0ea5e9' },
    { icon: '🗄️', label: 'Uw Database', desc: 'Verwerkt query', color: '#ff6d5a' },
    { icon: '✅', label: 'Response', desc: 'Alleen antwoord terug', color: '#10b981' },
  ];

  const comparisons = [
    { aspect: 'Data locatie', traditional: 'In de cloud', mcp: 'Op uw server' },
    { aspect: 'Privacy', traditional: 'Data gedeeld', mcp: '100% privé' },
    { aspect: 'Real-time', traditional: 'Snapshots', mcp: 'Live queries' },
    { aspect: 'GDPR', traditional: 'Risico', mcp: 'Compliant' },
  ];

  return (
    <section className="mb-16 md:mb-24">
      <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
        <h3 className="text-2xl font-bold text-white mb-2 text-center">{title}</h3>
        <p className="text-zinc-400 text-center mb-8">{subtitle}</p>

        {/* Flow diagram */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-8">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="text-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-2"
                  style={{ backgroundColor: `${step.color}20`, border: `2px solid ${step.color}` }}
                >
                  {step.icon}
                </div>
                <p className="text-white font-bold text-sm">{step.label}</p>
                <p className="text-zinc-400 text-xs">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="text-zinc-600 text-2xl hidden md:block">→</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-black/30 rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 text-center text-sm font-bold border-b border-white/10">
            <div className="p-3 text-zinc-400">Aspect</div>
            <div className="p-3 text-zinc-400">Traditioneel</div>
            <div className="p-3 text-[#0ea5e9]">MCP</div>
          </div>
          {comparisons.map((row, idx) => (
            <div key={idx} className="grid grid-cols-3 text-center text-sm border-b border-white/5 last:border-0">
              <div className="p-3 text-white">{row.aspect}</div>
              <div className="p-3 text-zinc-400">{row.traditional}</div>
              <div className="p-3 text-[#0ea5e9] font-medium">{row.mcp}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MCPFlowChart;
