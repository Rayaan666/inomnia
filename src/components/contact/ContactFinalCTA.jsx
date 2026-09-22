import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ContactFinalCTA() {
  const scrollToForm = () => {
    const section = document.getElementById('contact-experience');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const nameInput = document.getElementById('contact-name');
        if (nameInput) nameInput.focus();
      }, 500);
    }
  };

  return (
    <section
      id="contact-final-cta"
      className="relative w-full bg-[#02060B] text-white pt-2 sm:pt-4 lg:pt-6 pb-10 lg:pb-14 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden border-b border-white/10"
      aria-label="Final Experience CTA"
    >
      {/* Cinematic Event Photography Foundation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/contact-cta-event.jpg"
          alt="Atmospheric modern architectural luxury event in Dubai with illuminated archway architecture"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.15]"
          loading="lazy"
        />
        {/* Controlled dark cinematic overlays */}
        <div className="absolute inset-0 bg-[#02060B]/75 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02060B] via-[#02060B]/60 to-[#02060B]" />
      </div>

      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-20">
        <div className="h-full w-full max-w-[1840px] mx-auto border-x border-white/20 grid grid-cols-2 md:grid-cols-4">
          <div className="border-r border-white/10 h-full" />
          <div className="border-r border-white/10 h-full hidden md:block" />
          <div className="border-r border-white/10 h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1840px] mx-auto flex flex-col items-center text-center">
        
        {/* Section 04 Technical Index */}
        <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] text-white/60 uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>SECTION 03 /// FINAL FRAME</span>
        </div>

        {/* Philosophy Subtly Integrated in Composition */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-2.5 rounded-full border border-white/20 bg-[#02060B]/80 backdrop-blur-md mb-8 sm:mb-12 text-[11px] sm:text-xs font-mono tracking-[0.3em] text-white uppercase shadow-lg">
          <span className="font-semibold text-white">IMAGINATION.</span>
          <span className="text-white/40 hidden sm:inline">&bull;</span>
          <span className="font-semibold text-white">INNOVATION.</span>
          <span className="text-white/40 hidden sm:inline">&bull;</span>
          <span className="font-semibold text-white">IMPACT.</span>
        </div>

        {/* Large Typography */}
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.88] max-w-5xl mb-12 select-none drop-shadow-2xl">
          THE NEXT<br />
          EXPERIENCE<br />
          COULD START<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-white/60">
            RIGHT HERE.
          </span>
        </h2>

        {/* Main CTA Button: START A PROJECT */}
        <div className="pt-2">
          <button
            type="button"
            onClick={scrollToForm}
            className="group relative inline-flex items-center gap-4 px-10 sm:px-14 py-5 bg-white text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-[0.25em] border border-white transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer shadow-[0_15px_40px_rgba(255,255,255,0.25)]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Subtle Architectural Signature */}
        <div className="mt-16 pt-8 border-t border-white/10 w-full max-w-xs flex items-center justify-between text-[10px] font-mono tracking-widest text-white/50 uppercase">
          <span>INOMNIA DUBAI</span>
          <span>&bull;</span>
          <span>BESPOKE EXPERIENCES</span>
        </div>

      </div>
    </section>
  );
}
