import React, { useState, useEffect } from 'react';

interface FloatingCTAProps {
  label?: string;
  targetId?: string;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ label = 'Contact', targetId = 'contact' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
      const footer = document.getElementById(targetId);
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        setIsNearFooter(footerTop < window.innerHeight + 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetId]);

  const scrollToContact = () => {
    const contactSection = document.getElementById(targetId);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible || isNearFooter) return null;

  return (
    <button
      onClick={scrollToContact}
      className="md:hidden fixed bottom-6 right-6 z-50 bg-brand hover:bg-brand-hover text-white px-6 py-4 rounded-full font-bold shadow-lg shadow-brand/30 flex items-center gap-2 transition-all hover:scale-105 animate-fade-in"
      aria-label={label}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      {label}
    </button>
  );
};

export default FloatingCTA;
