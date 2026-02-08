import React from 'react';

interface PricingTier {
  name: string;
  priceRange: string;
  features: string[];
  recommended?: boolean;
}

interface ExpertPricingChartProps {
  title: string;
  tiers: PricingTier[];
}

const ExpertPricingChart: React.FC<ExpertPricingChartProps> = ({ title, tiers }) => {
  return (
    <section className="mb-16 md:mb-24">
      <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">{title}</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative p-6 rounded-xl ${tier.recommended ? 'bg-[#ff6d5a]/10 border-2 border-[#ff6d5a]/50' : 'bg-black/30 border border-white/5'}`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff6d5a] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Aanbevolen
                </div>
              )}
              <h4 className={`font-bold text-lg mb-2 ${tier.recommended ? 'text-[#ff6d5a]' : 'text-zinc-400'}`}>
                {tier.name}
              </h4>
              <p className="text-2xl font-black text-white mb-4">{tier.priceRange}</p>
              <ul className="space-y-2">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-zinc-400 text-sm flex items-start gap-2">
                    <span className={tier.recommended ? 'text-[#ff6d5a]' : 'text-zinc-600'}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-zinc-400 text-sm text-center">
            Project-based pricing is vaak voordeliger dan uurtarieven
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertPricingChart;
