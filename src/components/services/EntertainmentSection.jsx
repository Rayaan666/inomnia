import React from 'react';
import { motion } from 'framer-motion';

const entertainmentCapabilities = [
  'Live Performers',
  'Stage Entertainment',
  'Creative Acts',
  'Interactive Entertainment',
  'Show Production',
  'Experience Programming',
];

const photoSequence = [
  {
    role: 'STAGE ATMOSPHERE',
    subtitle: 'Grandeur & Acoustic Tuning',
    image: '/images/who-stage.png',
    span: 'lg:col-span-4 aspect-[4/5]',
    caption: 'FIG 01 // AUDITORIUM LIGHTING DESIGN',
  },
  {
    role: 'LIVE PERFORMANCE',
    subtitle: 'Kinetic Showmanship',
    image: '/images/service-entertainment.png',
    span: 'lg:col-span-5 aspect-[16/11]',
    caption: 'FIG 02 // CHOREOGRAPHED SHOWSTOPPER',
  },
  {
    role: 'PERFORMER FOCUS',
    subtitle: 'Backstage Poise & Precision',
    image: '/images/who-performance.png',
    span: 'lg:col-span-3 aspect-[3/4]',
    caption: 'FIG 03 // ARTIST READINESS',
  },
];

export default function EntertainmentSection() {
  return (
    <section
      id="entertainment"
      className="relative w-full bg-[#E7E3DC] text-[#050505] py-24 md:py-36 overflow-hidden border-b border-[#050505]/10"
    >
      {/* Editorial Fine Grid */}
      <div className="absolute inset-0 pointer-events-none architectural-grid-fine opacity-50" />

      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16">
        
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-[#050505]/15">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#A98968]">04</span>
            <span className="w-6 h-[1px] bg-[#A98968]" />
            <span className="font-mono text-xs font-semibold tracking-[0.3em] uppercase text-[#050505]">
              DISCIPLINE // ENTERTAINMENT
            </span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.26em] text-[#7C8493] uppercase">
            INTERNATIONAL TALENT · LIVE SHOW DIRECTION · BESPOKE CHOREOGRAPHY
          </div>
        </div>

        {/* Headline & Editorial Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-condensed text-[48px] sm:text-[68px] md:text-[84px] lg:text-[96px] uppercase font-semibold leading-[0.9] tracking-[-0.02em] text-[#050505]"
            >
              THE ENERGY<br />
              <span className="font-serif-editorial italic font-normal tracking-normal text-[#A98968]">
                PEOPLE REMEMBER.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 lg:pt-3">
            <p className="text-base sm:text-lg text-[#050505]/75 font-light leading-relaxed mb-6">
              Entertainment is the emotional pulse of any live event. We curate and direct global performance acts, acrobatic ensembles, aerial artists, and symphonic musicians that elicit genuine awe.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#050505]/15">
              {entertainmentCapabilities.map((cap) => (
                <span
                  key={cap}
                  className="inline-block px-3 py-1.5 rounded-full border border-[#050505]/20 text-[11px] font-mono text-[#050505]/80 hover:border-[#A98968] transition-colors duration-200"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Photographic Sequence: Luxury Magazine Spread */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {photoSequence.map((item, idx) => (
            <div
              key={item.role}
              className={`${item.span} relative group rounded-lg overflow-hidden border border-[#050505]/20 shadow-lg bg-[#050505]`}
            >
              <img
                src={item.image}
                alt={item.role}
                className="w-full h-full object-cover filter contrast-[1.06] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-[#F1EFE9] flex items-end justify-between">
                <div>
                  <span className="font-mono text-[9px] text-[#A98968] tracking-widest block">
                    {item.caption}
                  </span>
                  <span className="font-condensed text-xl font-bold uppercase block tracking-wide">
                    {item.role}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-[#7C8493] hidden sm:inline">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
