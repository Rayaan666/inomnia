import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  'Corporate Events',
  'Conferences',
  'Product Launches',
  'Gala Experiences',
  'Private Events',
  'Brand Experiences',
  'Live Production',
];

const annotations = [
  { label: 'LIGHT', spec: 'Dynamic Architectural Luminance & 360° Lasers', pos: 'top-6 left-6 md:top-10 md:left-12' },
  { label: 'SOUND', spec: 'Spatial Acoustic Tuning & Symphony Audio', pos: 'top-6 right-6 md:top-10 md:right-12' },
  { label: 'SPACE', spec: 'Spatial Flow Architecture & VIP Protocols', pos: 'bottom-20 left-6 md:bottom-28 md:left-12' },
  { label: 'PEOPLE', spec: 'Curated Energy & Immersive Interaction', pos: 'bottom-20 right-6 md:bottom-28 md:right-12' },
  { label: 'MOMENT', spec: 'Unrepeatable Emotional Resonance', pos: 'bottom-6 left-1/2 -translate-x-1/2' },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative w-full bg-[#050505] text-[#F1EFE9] py-24 md:py-36 overflow-hidden border-b border-[#F1EFE9]/10"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none architectural-grid-dark opacity-50" />

      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16">
        
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-[#F1EFE9]/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#A98968]">01</span>
            <span className="w-6 h-[1px] bg-[#A98968]" />
            <span className="font-mono text-xs font-semibold tracking-[0.3em] uppercase text-[#F1EFE9]">
              DISCIPLINE // EVENTS
            </span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.26em] text-[#7C8493] uppercase">
            FLAGSHIP EXPERIENCES · DUBAI & WORLDWIDE
          </div>
        </div>

        {/* Large Statement & Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-20">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-condensed text-[52px] sm:text-[72px] md:text-[88px] lg:text-[104px] uppercase font-semibold leading-[0.88] tracking-[-0.02em]"
            >
              MOMENTS,<br />
              MASTERFULLY<br />
              <span className="font-serif-editorial italic font-normal tracking-normal text-[#A98968]">
                ORCHESTRATED.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 lg:pt-4">
            <p className="text-base sm:text-lg text-[#7C8493] font-light leading-relaxed mb-8">
              From visionary concept design to minute-by-minute live direction, INOMNIA engineers events that capture imagination and command attention. We transform physical spaces into unforgettable stages for the world's most discerning brands and institutions.
            </p>

            <div className="border-t border-[#F1EFE9]/15 pt-6">
              <span className="block font-mono text-[10px] tracking-[0.24em] text-[#A98968] uppercase mb-3">
                CORE CAPABILITIES
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="inline-block px-3 py-1.5 rounded-full border border-[#F1EFE9]/20 text-[11px] font-mono tracking-wider text-[#F1EFE9]/90 hover:border-[#A98968] hover:text-[#A98968] transition-colors duration-200"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enormous Realistic Event Photograph spanning ~65-70% Viewport Height */}
        <div className="relative w-full h-[60vh] md:h-[72vh] rounded-lg overflow-hidden border border-[#F1EFE9]/15 group">
          <img
            src="/images/service-events.png"
            alt="Majestic live event production in Dubai"
            className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.1] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60 pointer-events-none" />

          {/* Overlay Typography Partially Across Image */}
          <div className="absolute bottom-8 left-6 md:bottom-16 md:left-14 z-10 pointer-events-none max-w-xl">
            <span className="block font-mono text-[10px] sm:text-xs tracking-[0.32em] text-[#A98968] uppercase mb-2">
              LIVE ARCHITECTURE
            </span>
            <div className="font-condensed text-4xl sm:text-6xl md:text-7xl font-semibold uppercase tracking-tight text-[#F1EFE9] drop-shadow-2xl">
              PRECISION IN EVERY PULSE
            </div>
          </div>

          {/* Subtle Event-Production Annotations Around the Photograph */}
          {annotations.map((ann, i) => (
            <div
              key={ann.label}
              className={`absolute ${ann.pos} z-10 pointer-events-none hidden sm:block`}
            >
              <div className="bg-[#050505]/75 backdrop-blur-md border border-[#F1EFE9]/20 px-3.5 py-2 rounded">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A98968]" />
                  <span className="font-mono text-[10px] font-bold tracking-[0.24em] text-[#F1EFE9] uppercase">
                    {ann.label}
                  </span>
                </div>
                <span className="block font-sans text-[10px] text-[#7C8493] tracking-wide mt-0.5">
                  {ann.spec}
                </span>
              </div>
            </div>
          ))}

          {/* Top-Right Technical Registration Mark */}
          <div className="absolute top-4 right-4 z-10 font-mono text-[9px] text-[#7C8493] tracking-[0.28em] sm:hidden">
            01 // LIVE DIRECTED
          </div>
        </div>

      </div>
    </section>
  );
}
