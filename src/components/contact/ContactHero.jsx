import React, { useEffect, useState } from 'react';
import { ArrowDown, Compass, Clock } from 'lucide-react';

export default function ContactHero() {
  const [dubaiTime, setDubaiTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setDubaiTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToExperience = () => {
    const element = document.getElementById('contact-experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact-hero"
      className="relative min-h-[80vh] lg:min-h-[85vh] w-full bg-[#02060B] text-white flex flex-col justify-between pt-20 sm:pt-24 pb-8 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden border-b border-white/10"
      aria-label="Contact Hero"
    >
      {/* Background Photography Foundation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/contact-hero-event.jpg"
          alt="INOMNIA high-end stage and venue production in Dubai during backstage preparation"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
          loading="eager"
        />
        {/* Controlled architectural dark overlays */}
        <div className="absolute inset-0 bg-[#02060B]/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02060B] via-[#02060B]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02060B] via-transparent to-[#02060B]/70" />
      </div>

      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-20">
        <div className="h-full w-full max-w-[1840px] mx-auto border-x border-white/15 grid grid-cols-2 md:grid-cols-4">
          <div className="border-r border-white/10 h-full" />
          <div className="border-r border-white/10 h-full hidden md:block" />
          <div className="border-r border-white/10 h-full" />
          <div className="h-full" />
        </div>
      </div>

      {/* Top Architectural Telemetry Bar */}
      <div className="relative z-10 w-full max-w-[1840px] mx-auto flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono tracking-[0.2em] text-white/60 uppercase border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-white/90">
          <Compass className="w-3.5 h-3.5 text-white/70" />
          <span>25.2532° N, 55.3372° E</span>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="text-white/70 hidden sm:inline">DUBAI HQ</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-white/70" />
            <span>DUBAI {dubaiTime || '16:00:00'} GST (UTC+4)</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="hidden md:inline text-white/40 font-bold">
            SEC 01 / 03
          </span>
        </div>
      </div>

      {/* Main Hero Content Frame */}
      <div className="relative z-10 w-full max-w-[1840px] mx-auto my-auto py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        {/* Left Column: Eyebrow + Massive Headline */}
        <div className="lg:col-span-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-[#02060B]/70 backdrop-blur-md text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-white uppercase mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span>CONTACT /// DUBAI, UAE</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl xl:text-[8.5rem] font-black uppercase tracking-tight text-white leading-[0.88] select-none">
            LET’S CREATE<br />
            SOMETHING<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/60">
              WORTH REMEMBERING.
            </span>
          </h1>
        </div>

        {/* Right Column: Supporting Copy & Studio Spec */}
        <div className="lg:col-span-4 lg:pl-4 flex flex-col justify-between space-y-6">
          <div className="border-l-2 border-white/30 pl-5 bg-[#02060B]/50 backdrop-blur-md p-4 rounded-r-xl">
            <p className="text-base sm:text-lg text-white font-normal leading-relaxed">
              Have an event, exhibition, activation or experience in mind? Bring us the idea. We’ll help shape what comes next.
            </p>
          </div>

          {/* Architectural specs */}
          <div className="grid grid-cols-2 gap-4 p-4 border border-white/10 bg-[#02060B]/60 backdrop-blur-md font-mono text-xs">
            <div>
              <span className="block text-white/50 text-[10px] tracking-widest uppercase mb-1">CAPABILITY</span>
              <span className="text-white font-medium">GLOBAL PRODUCTION</span>
            </div>
            <div>
              <span className="block text-white/50 text-[10px] tracking-widest uppercase mb-1">DIRECT DIAL</span>
              <a href="tel:+971556515998" className="text-white hover:text-white/80 transition-colors">
                +971 55 651 5998
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator */}
      <div className="relative z-10 w-full max-w-[1840px] mx-auto flex items-center justify-between pt-5 border-t border-white/10">
        <button
          type="button"
          onClick={scrollToExperience}
          className="group inline-flex items-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-white/80 uppercase transition-all duration-300 hover:text-white cursor-pointer"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </span>
          <span className="border-b border-transparent group-hover:border-white pb-0.5">
            START THE CONVERSATION ↓
          </span>
        </button>

        <div className="hidden md:flex items-center gap-4 text-[10px] font-mono tracking-widest text-white/40 uppercase">
          <span>EXPERIENTIAL ARCHITECTURE</span>
          <span>•</span>
          <span>EST. DUBAI</span>
        </div>
      </div>
    </section>
  );
}
