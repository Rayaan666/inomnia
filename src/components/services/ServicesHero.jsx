import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function ServicesHero() {
  const scrollToServices = (e) => {
    e.preventDefault();
    const el = document.querySelector('#services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92svh] lg:min-h-[100svh] w-full bg-[#050505] text-[#F1EFE9] overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 flex flex-col justify-between border-b border-[#F1EFE9]/10 select-none">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none architectural-grid-dark opacity-45" />

      {/* Subtle Background Watermark */}
      <div
        className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none font-condensed font-black tracking-[-0.04em] uppercase text-white/[0.02] text-[16vw] leading-none whitespace-nowrap z-0"
        aria-hidden="true"
      >
        INOMNIA
      </div>

      {/* Subtle Technical Registration Annotations */}
      <div className="absolute top-28 left-6 md:left-12 lg:left-16 text-[9px] font-mono tracking-[0.28em] text-[#7C8493] hidden md:block select-none z-10">
        DXB // 25.2048° N · 55.2708° E
      </div>
      <div className="absolute top-28 right-6 md:right-12 lg:right-16 text-[9px] font-mono tracking-[0.28em] text-[#7C8493] hidden md:block select-none z-10">
        SCALE 1:1 /// ARCHITECTURE OF MEMORY
      </div>

      {/* Main Architectural Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Monumental Editorial Typography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-6">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#A98968]" />
              <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.32em] text-[#A98968] uppercase">
                WHAT WE DO /// INOMNIA
              </span>
            </motion.div>

            {/* Single Semantic H1: WE CREATE WHAT PEOPLE REMEMBER. */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-condensed text-[56px] sm:text-[76px] md:text-[96px] lg:text-[104px] xl:text-[124px] uppercase font-semibold leading-[0.88] tracking-[-0.025em] text-[#F1EFE9] mb-8"
            >
              WE CREATE<br />
              <span className="text-[#7C8493]">WHAT PEOPLE</span><br />
              <span className="font-serif-editorial italic font-normal tracking-normal text-[#F1EFE9]">
                REMEMBER.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              className="max-w-xl text-base sm:text-lg md:text-xl text-[#7C8493] leading-relaxed font-light mb-10"
            >
              From ambitious ideas to extraordinary live experiences, we bring creativity, technology, production and precision together under one vision.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
              className="flex items-center gap-8 pt-4 border-t border-[#F1EFE9]/10"
            >
              <a
                href="#services-section"
                onClick={scrollToServices}
                className="group inline-flex items-center gap-4 text-xs font-mono font-bold tracking-[0.24em] text-[#F1EFE9] uppercase cursor-pointer hover:text-[#A98968] transition-colors duration-300"
              >
                <span>EXPLORE OUR SERVICES</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#F1EFE9]/30 group-hover:border-[#A98968] group-hover:bg-[#A98968]/15 transition-all duration-300">
                  <ArrowDown className="w-3.5 h-3.5 text-[#F1EFE9] group-hover:text-[#A98968] group-hover:translate-y-0.5 transition-transform duration-300" />
                </span>
              </a>

              <div className="hidden sm:block text-[9px] font-mono tracking-[0.24em] text-[#7C8493] uppercase">
                DUBAI, UAE /// GLOBAL EXECUTION
              </div>
            </motion.div>

          </div>

          {/* Right Column: Editorial Architectural Image Composition (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-h-[640px] rounded-xl overflow-hidden border border-[#A98968]/30 shadow-2xl bg-[#0B0B0B] group"
            >
              <img
                src="/images/hero-editorial-event.png"
                alt="Sophisticated illuminated event architecture and spatial production in Dubai"
                className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12] transition-transform duration-1000 ease-out group-hover:scale-105"
                fetchPriority="high"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/25 to-transparent pointer-events-none" />

              {/* Architectural Frame Corners */}
              <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-[#A98968]/40 pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-[#A98968]/40 pointer-events-none" />

              {/* Architectural Label Tags */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 font-mono text-[9px] text-[#F1EFE9] bg-[#050505]/80 backdrop-blur-md px-3 py-1 rounded border border-white/10 tracking-[0.22em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A98968]" />
                <span>SPATIAL ARCHITECTURE // DUBAI</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between pointer-events-none">
                <div>
                  <span className="font-mono text-[8px] sm:text-[9px] text-[#A98968] tracking-[0.28em] uppercase block mb-1">
                    PHYSICAL × DIGITAL CRAFT
                  </span>
                  <p className="font-condensed text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide text-[#F1EFE9]">
                    EXPERIENCES ENGINEERED TO LAST
                  </p>
                </div>
                <span className="font-mono text-[9px] text-[#7C8493] tracking-widest hidden sm:block">
                  ISSUE 2026
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Strip */}
      <div className="relative z-10 w-full border-t border-[#F1EFE9]/10 pt-5 mt-8">
        <div className="mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16 flex flex-wrap items-center justify-between gap-4 text-[9px] sm:text-[10px] font-mono tracking-[0.24em] text-[#7C8493]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#A98968]" />
            <span className="text-[#F1EFE9]">INOMNIA EXPERIENTIAL AGENCY</span>
            <span className="hidden sm:inline">DUBAI · ABU DHABI · RIYADH · WORLDWIDE</span>
          </div>
          <div>
            <span className="text-[#F1EFE9]">SCROLL FOR CAPABILITIES</span> ↓
          </div>
        </div>
      </div>

    </section>
  );
}
