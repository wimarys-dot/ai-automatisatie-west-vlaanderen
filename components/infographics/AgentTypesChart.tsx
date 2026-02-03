import React from 'react';

interface Agent {
  name: string;
  role: string;
  capabilities: string[];
}

interface AgentTypesChartProps {
  title: string;
  agents: Agent[];
}

const AgentTypesChart: React.FC<AgentTypesChartProps> = ({ title, agents }) => {
  const colors = ['#ff6d5a', '#7c3aed', '#0ea5e9', '#10b981'];

  return (
    <section className="mb-16 md:mb-24">
      <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">{title}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-xl"
              style={{ backgroundColor: `${colors[idx % colors.length]}10`, borderLeft: `4px solid ${colors[idx % colors.length]}` }}
            >
              <div
                className="absolute -top-3 -left-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm"
                style={{ backgroundColor: colors[idx % colors.length] }}
              >
                {idx + 1}
              </div>
              <h4 className="text-white font-bold text-lg mt-2 mb-1">{agent.name}</h4>
              <p className="text-sm mb-3" style={{ color: colors[idx % colors.length] }}>{agent.role}</p>
              <ul className="space-y-1">
                {agent.capabilities.map((cap, capIdx) => (
                  <li key={capIdx} className="text-zinc-400 text-xs flex items-start gap-2">
                    <span style={{ color: colors[idx % colors.length] }}>•</span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-zinc-400 text-sm">AI Agents automatiseren complexe taken die oordeelsvermogen vereisen</p>
        </div>
      </div>
    </section>
  );
};

export default AgentTypesChart;
