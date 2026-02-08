import React from 'react';

interface ROIItem {
  process: string;
  before: string;
  after: string;
  saving: string;
}

interface ROIChartProps {
  title: string;
  subtitle: string;
  items: ROIItem[];
  summary: {
    hoursSaved: string;
    yearlySavings: string;
    investment: string;
    roi: string;
  };
}

const ROIChart: React.FC<ROIChartProps> = ({ title, subtitle, items, summary }) => {
  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-6 md:p-10 rounded-[2rem] border border-white/10">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{title}</h3>
        <p className="text-zinc-400">{subtitle}</p>
      </div>

      {/* Time Savings Table */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-[#ff6d5a] mb-4">Tijdsbesparing per proces</h4>
        <div className="space-y-2">
          {/* Header */}
          <div className="grid grid-cols-4 gap-2 text-xs text-zinc-400 pb-2 border-b border-white/10">
            <div>Proces</div>
            <div className="text-center">Voorheen</div>
            <div className="text-center">Nu</div>
            <div className="text-right">Besparing</div>
          </div>

          {/* Rows */}
          {items.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 gap-2 py-2 text-sm items-center"
              style={{ backgroundColor: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}
            >
              <div className="text-zinc-300 text-xs md:text-sm">{item.process}</div>
              <div className="text-center text-red-400 text-xs md:text-sm">{item.before}</div>
              <div className="text-center text-[#ff6d5a] text-xs md:text-sm">{item.after}</div>
              <div className="text-right">
                <span className="bg-[#7c3aed]/20 text-[#7c3aed] px-2 py-1 rounded text-xs font-bold">
                  {item.saving}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ROI Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white/5 rounded-xl p-4 text-center">
          <div className="text-2xl md:text-3xl font-black text-[#ff6d5a]">{summary.hoursSaved}</div>
          <div className="text-zinc-400 text-xs">uur/week bespaard</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4 text-center">
          <div className="text-2xl md:text-3xl font-black text-[#ff6d5a]">{summary.yearlySavings}</div>
          <div className="text-zinc-400 text-xs">jaarlijkse besparing</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4 text-center">
          <div className="text-2xl md:text-3xl font-black text-white">{summary.investment}</div>
          <div className="text-zinc-400 text-xs">investering</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4 text-center">
          <div className="text-2xl md:text-3xl font-black text-[#7c3aed]">{summary.roi}</div>
          <div className="text-zinc-400 text-xs">ROI jaar 1</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#ff6d5a]/10 to-[#7c3aed]/10 rounded-xl p-4 text-center">
        <div className="text-white font-bold">Start vandaag met automatiseren</div>
        <div className="text-zinc-400 text-sm">Terugverdiend binnen 3-6 maanden</div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-white/5 text-center">
        <span className="text-zinc-600 text-xs">ai-automatisatie.be</span>
      </div>
    </div>
  );
};

export default ROIChart;
