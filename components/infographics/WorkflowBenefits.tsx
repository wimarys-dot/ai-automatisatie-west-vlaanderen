import React from 'react';

const WorkflowBenefits: React.FC = () => {
  const benefits = [
    { icon: '⏱️', title: 'Tijdsbesparing', desc: 'Bespaar 10+ uur per week' },
    { icon: '🎯', title: 'Foutreductie', desc: 'Elimineer menselijke fouten' },
    { icon: '📈', title: 'Schaalbaarheid', desc: 'Groei zonder extra personeel' },
    { icon: '🔄', title: 'Consistentie', desc: '24/7 betrouwbare uitvoering' },
    { icon: '💡', title: 'Focus', desc: 'Meer tijd voor kernwerk' },
  ];

  const industries = [
    { icon: '📊', name: 'Accountants' },
    { icon: '🏠', name: 'Makelaars' },
    { icon: '⚖️', name: 'Advocaten' },
    { icon: '🛒', name: 'Retail' },
    { icon: '🏗️', name: 'Bouw' },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-6 md:p-10 rounded-[2rem] border border-white/10">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Workflow Automatisering</h3>
        <p className="text-zinc-400">Laat software het repetitieve werk doen</p>
      </div>

      {/* Process Flow */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-[#ff6d5a] mb-4 text-center">Het Proces</h4>
        <div className="flex items-center justify-between bg-white/5 rounded-xl p-4 md:p-6 overflow-x-auto">
          {[
            { icon: '📥', label: 'Trigger' },
            { icon: '📊', label: 'Verzamel' },
            { icon: '⚙️', label: 'Verwerk' },
            { icon: '🎯', label: 'Actie' },
            { icon: '📤', label: 'Output' },
          ].map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="text-center flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff6d5a]/20 to-[#7c3aed]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl">{step.icon}</span>
                </div>
                <span className="text-xs text-zinc-400">{step.label}</span>
              </div>
              {idx < 4 && <span className="text-zinc-600 mx-2 flex-shrink-0">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-[#ff6d5a] mb-4">Voordelen</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-4 text-center">
              <span className="text-2xl mb-2 block">{benefit.icon}</span>
              <div className="text-white font-medium text-sm">{benefit.title}</div>
              <div className="text-zinc-400 text-xs">{benefit.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Industries */}
      <div>
        <h4 className="text-lg font-bold text-[#ff6d5a] mb-4">Sectoren</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry, idx) => (
            <div key={idx} className="bg-white/5 rounded-full px-4 py-2 flex items-center gap-2">
              <span>{industry.icon}</span>
              <span className="text-zinc-300 text-sm">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-white/5 text-center">
        <span className="text-zinc-600 text-xs">ai-automatisatie.be</span>
      </div>
    </div>
  );
};

export default WorkflowBenefits;
