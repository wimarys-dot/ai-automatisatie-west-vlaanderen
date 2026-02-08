import React from 'react';

interface ExpertQuoteProps {
  quote: string;
  context?: string;
}

const ExpertQuote: React.FC<ExpertQuoteProps> = ({ quote, context }) => {
  return (
    <blockquote className="my-8 md:my-12 relative">
      <div className="absolute -left-2 md:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff6d5a] to-[#7c3aed] rounded-full" />
      <div className="pl-6 md:pl-8">
        <p className="text-xl md:text-2xl font-bold text-white leading-relaxed italic">
          "{quote}"
        </p>
        {context && (
          <footer className="mt-3 text-zinc-400 text-sm">
            — {context}
          </footer>
        )}
      </div>
    </blockquote>
  );
};

export default ExpertQuote;
