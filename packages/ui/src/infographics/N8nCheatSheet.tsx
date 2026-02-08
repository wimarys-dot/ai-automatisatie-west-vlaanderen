import React from 'react';

const N8nCheatSheet: React.FC = () => {
  const essentialNodes = [
    { name: 'HTTP Request', desc: 'API calls naar externe services', icon: '🌐' },
    { name: 'Webhook', desc: 'Ontvang data van externe bronnen', icon: '📥' },
    { name: 'Set', desc: 'Data transformeren en variabelen zetten', icon: '✏️' },
    { name: 'IF', desc: 'Conditionele logica en branching', icon: '🔀' },
    { name: 'Code', desc: 'Custom JavaScript schrijven', icon: '💻' },
    { name: 'Schedule', desc: 'Workflows op tijd triggeren', icon: '⏰' },
  ];

  const shortcuts = [
    { keys: 'Ctrl + Enter', action: 'Workflow uitvoeren' },
    { keys: 'Ctrl + S', action: 'Workflow opslaan' },
    { keys: 'Tab', action: 'Node toevoegen' },
    { keys: 'Ctrl + Z', action: 'Ongedaan maken' },
    { keys: 'Ctrl + C/V', action: 'Node kopiëren/plakken' },
    { keys: 'Delete', action: 'Node verwijderen' },
  ];

  const bestPractices = [
    'Gebruik duidelijke node namen',
    'Voeg error handling toe',
    'Test met kleine datasets eerst',
    'Documenteer complexe logica',
    'Gebruik sub-workflows voor herbruikbaarheid',
  ];

  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-6 md:p-10 rounded-[2rem] border border-white/10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-[#ff6d5a] rounded-xl flex items-center justify-center">
          <span className="text-white font-black text-xl">n8n</span>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-white">Cheat Sheet</h3>
          <p className="text-zinc-400">Essentiële referentie voor n8n workflows</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Essential Nodes */}
        <div>
          <h4 className="text-lg font-bold text-[#ff6d5a] mb-4 flex items-center gap-2">
            <span>⚡</span> Essentiële Nodes
          </h4>
          <div className="space-y-2">
            {essentialNodes.map((node, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border-l-2 border-[#7c3aed]">
                <span className="text-xl">{node.icon}</span>
                <div>
                  <div className="text-white font-medium text-sm">{node.name}</div>
                  <div className="text-zinc-400 text-xs">{node.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Keyboard Shortcuts */}
          <div>
            <h4 className="text-lg font-bold text-[#ff6d5a] mb-4 flex items-center gap-2">
              <span>⌨️</span> Sneltoetsen
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {shortcuts.map((shortcut, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-2">
                  <div className="text-[#7c3aed] font-mono text-xs">{shortcut.keys}</div>
                  <div className="text-zinc-400 text-xs">{shortcut.action}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div>
            <h4 className="text-lg font-bold text-[#ff6d5a] mb-4 flex items-center gap-2">
              <span>✅</span> Best Practices
            </h4>
            <ul className="space-y-1">
              {bestPractices.map((practice, idx) => (
                <li key={idx} className="text-zinc-400 text-sm flex items-start gap-2">
                  <span className="text-[#ff6d5a]">→</span>
                  {practice}
                </li>
              ))}
            </ul>
          </div>

          {/* Workflow Pattern */}
          <div>
            <h4 className="text-lg font-bold text-[#ff6d5a] mb-4 flex items-center gap-2">
              <span>🔄</span> Basis Patroon
            </h4>
            <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-[#ff6d5a]/20 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-sm">📥</span>
                </div>
                <span className="text-xs text-zinc-400">Trigger</span>
              </div>
              <span className="text-zinc-600">→</span>
              <div className="text-center">
                <div className="w-10 h-10 bg-[#7c3aed]/20 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-sm">⚙️</span>
                </div>
                <span className="text-xs text-zinc-400">Process</span>
              </div>
              <span className="text-zinc-600">→</span>
              <div className="text-center">
                <div className="w-10 h-10 bg-[#0ea5e9]/20 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-sm">📤</span>
                </div>
                <span className="text-xs text-zinc-400">Output</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
        <span className="text-zinc-600 text-xs">ai-automatisatie.be</span>
        <span className="text-zinc-600 text-xs">n8n workflow automation</span>
      </div>
    </div>
  );
};

export default N8nCheatSheet;
