import React from 'react';

interface ComparisonItem {
  feature: string;
  left: string;
  right: string;
  winner: 'left' | 'right' | 'tie';
}

interface ComparisonChartProps {
  leftName: string;
  leftColor: string;
  rightName: string;
  rightColor: string;
  items: ComparisonItem[];
  verdict: string;
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({
  leftName,
  leftColor,
  rightName,
  rightColor,
  items,
  verdict,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-6 md:p-10 rounded-[2rem] border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="text-center">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-2"
            style={{ backgroundColor: `${leftColor}20` }}
          >
            <span className="font-black text-lg" style={{ color: leftColor }}>{leftName}</span>
          </div>
        </div>
        <div className="text-zinc-400 text-2xl font-bold">vs</div>
        <div className="text-center">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-2"
            style={{ backgroundColor: `${rightColor}20` }}
          >
            <span className="font-black text-lg" style={{ color: rightColor }}>{rightName}</span>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="space-y-2 mb-8">
        {/* Header Row */}
        <div className="grid grid-cols-3 gap-2 text-center text-sm font-bold pb-2 border-b border-white/10">
          <div style={{ color: leftColor }}>{leftName}</div>
          <div className="text-zinc-400">Feature</div>
          <div style={{ color: rightColor }}>{rightName}</div>
        </div>

        {/* Data Rows */}
        {items.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-3 gap-2 text-center py-3 rounded-lg"
            style={{ backgroundColor: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-zinc-300 text-sm">{item.left}</span>
              {item.winner === 'left' && (
                <span className="text-green-500 text-lg">✓</span>
              )}
            </div>
            <div className="text-zinc-400 text-sm font-medium">{item.feature}</div>
            <div className="flex items-center justify-center gap-2">
              {item.winner === 'right' && (
                <span className="text-green-500 text-lg">✓</span>
              )}
              <span className="text-zinc-300 text-sm">{item.right}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Verdict */}
      <div className="bg-gradient-to-r from-[#ff6d5a]/10 via-transparent to-[#7c3aed]/10 rounded-xl p-4 text-center">
        <div className="text-zinc-400 text-sm mb-1">Conclusie</div>
        <div className="text-white font-bold">{verdict}</div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-white/5 text-center">
        <span className="text-zinc-600 text-xs">ai-automatisatie.be</span>
      </div>
    </div>
  );
};

export default ComparisonChart;
