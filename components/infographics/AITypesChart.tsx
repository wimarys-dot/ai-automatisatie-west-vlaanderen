import React from 'react';

interface AIType {
  name: string;
  description: string;
  example: string;
  availability: 'Beschikbaar' | 'In ontwikkeling' | 'Toekomst';
}

interface AITypesChartProps {
  title: string;
}

const AITypesChart: React.FC<AITypesChartProps> = ({ title }) => {
  const aiTypes: AIType[] = [
    {
      name: 'Reactieve AI',
      description: 'Reageert op inputs zonder geheugen',
      example: 'Spamfilters, aanbevelingen',
      availability: 'Beschikbaar'
    },
    {
      name: 'Beperkt Geheugen AI',
      description: 'Leert van recente data',
      example: 'ChatGPT, Claude, Gemini',
      availability: 'Beschikbaar'
    },
    {
      name: 'Theory of Mind AI',
      description: 'Begrijpt emoties & intenties',
      example: 'Geavanceerde chatbots',
      availability: 'In ontwikkeling'
    },
    {
      name: 'Zelfbewuste AI',
      description: 'Eigen bewustzijn',
      example: 'Science fiction',
      availability: 'Toekomst'
    }
  ];

  const getColor = (availability: string) => {
    switch (availability) {
      case 'Beschikbaar': return '#10b981';
      case 'In ontwikkeling': return '#f59e0b';
      case 'Toekomst': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <section className="mb-16 md:mb-24">
      <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">{title}</h3>

        <div className="space-y-4">
          {aiTypes.map((ai, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-black/30 p-4 rounded-xl">
              <div className="w-12 h-12 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-black shrink-0">
                {idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h4 className="text-white font-bold">{ai.name}</h4>
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ backgroundColor: `${getColor(ai.availability)}20`, color: getColor(ai.availability) }}
                  >
                    {ai.availability}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm">{ai.description}</p>
                <p className="text-zinc-400 text-xs mt-1">Voorbeeld: {ai.example}</p>
              </div>
              <div
                className="w-24 h-2 rounded-full shrink-0 hidden md:block"
                style={{
                  background: `linear-gradient(to right, ${getColor(ai.availability)} ${(4 - idx) * 25}%, transparent ${(4 - idx) * 25}%)`
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
            <span className="text-zinc-400 text-xs">Beschikbaar</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
            <span className="text-zinc-400 text-xs">In ontwikkeling</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#6b7280]"></div>
            <span className="text-zinc-400 text-xs">Toekomst</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITypesChart;
