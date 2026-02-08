import React, { useState } from 'react';

interface ContactFormProps {
  webhookUrl: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ webhookUrl }) => {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    bedrijf: '',
    interesse: '',
    bericht: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({
          ...formData,
          bron: window.location.href,
          timestamp: new Date().toISOString()
        })
      });

      setStatus('success');
      setFormData({ naam: '', email: '', bedrijf: '', interesse: '', bericht: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="relative bg-surface-card border border-surface-border rounded-3xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Bericht verzonden!</h3>
        <p className="text-text-secondary mb-6">We nemen binnen 24 uur contact met u op.</p>
        <button onClick={() => setStatus('idle')} className="text-brand hover:underline text-sm">
          Nog een bericht versturen
        </button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative bg-surface-card border border-surface-border hover:border-surface-border-hover rounded-3xl p-8 transition-colors">
        {/* Node Header */}
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-surface-border">
          <div className="w-10 h-10 bg-brand-muted rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold text-text-muted uppercase tracking-widest">Trigger</div>
            <div className="text-text-primary font-bold">Contact Formulier</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-2">Naam *</label>
            <input type="text" required value={formData.naam}
              onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
              className="w-full bg-surface-bg border border-surface-border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-brand/50 transition-colors"
              placeholder="Uw naam" />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-2">Email *</label>
            <input type="email" required value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-surface-bg border border-surface-border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-brand/50 transition-colors"
              placeholder="uw@email.be" />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-2">Bedrijf</label>
            <input type="text" value={formData.bedrijf}
              onChange={(e) => setFormData({ ...formData, bedrijf: e.target.value })}
              className="w-full bg-surface-bg border border-surface-border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-brand/50 transition-colors"
              placeholder="Bedrijfsnaam" />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-2">Interesse *</label>
            <select required value={formData.interesse}
              onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
              className="w-full bg-surface-bg border border-surface-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-brand/50 transition-colors appearance-none cursor-pointer">
              <option value="" disabled>Selecteer...</option>
              <option value="n8n-workflows">n8n Workflows</option>
              <option value="ai-agents">AI Agents</option>
              <option value="mcp-integratie">MCP Integratie</option>
              <option value="adviesgesprek">Vrijblijvend Adviesgesprek</option>
              <option value="anders">Anders</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-2">
            Bericht <span className="text-text-muted normal-case">(optioneel)</span>
          </label>
          <textarea rows={3} value={formData.bericht}
            onChange={(e) => setFormData({ ...formData, bericht: e.target.value })}
            className="w-full bg-surface-bg border border-surface-border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-brand/50 transition-colors resize-none"
            placeholder="Vertel ons kort over uw project..." />
        </div>

        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
            Er ging iets mis. Probeer het opnieuw of mail ons direct.
          </div>
        )}

        <button type="submit" disabled={status === 'sending'}
          className="w-full bg-brand hover:bg-brand-hover disabled:bg-brand/50 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20">
          {status === 'sending' ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Verzenden...
            </>
          ) : (
            <>
              Verstuur bericht
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>

        <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-surface-border">
          {['Reactie binnen 24u', '100% vrijblijvend', 'Geen spam'].map((text, i) => (
            <div key={i} className="flex items-center gap-2 text-text-muted text-sm">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {text}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
