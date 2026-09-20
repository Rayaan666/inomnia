import React from 'react';
import { motion } from 'framer-motion';

const tactileMaterials = [
  { name: 'HOT-FOIL EMBOSSING', note: 'Heavyweight archival Italian paper' },
  { name: 'ANODIZED BRUSHED METAL', note: 'Aerospace-grade precision milled finishes' },
  { name: 'CUSTOM BESPOKE PACKAGING', note: 'Rigid velvet-lined collector box architecture' },
  { name: 'SUSTAINABLE TIMBER & GLASS', note: 'Sustainably sourced walnut and mouth-blown crystal' },
];

export default function GiveawaysSection() {
  return (
    <section
      id="giveaways"
      className="relative w-full bg-[#F1EFE9] text-[#050505] py-24 md:py-36 overflow-hidden border-b border-[#050505]/10"
    >
      <div className="absolute inset-0 pointer-events-none architectural-grid-fine opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16">
        
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-[#050505]/15">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#A98968]">06</span>
            <span className="w-6 h-[1px] bg-[#A98968]" />
            <span className="font-mono text-xs font-semibold tracking-[0.3em] uppercase text-[#050505]">
              DISCIPLINE // PREMIUM GIVEAWAYS & ARTIFACTS
            </span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.26em] text-[#7C8493] uppercase">
            HAUTE OBJECTS · VIP EXECUTIVE KEEPSAKES · TACTILE MERCHANDISE
          </div>
        </div>

        {/* Headline & Luxury Campaign Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-condensed text-[48px] sm:text-[68px] md:text-[84px] lg:text-[96px] uppercase font-semibold leading-[0.9] tracking-[-0.02em] text-[#050505]"
            >
              THE EXPERIENCE<br />
              THEY TAKE<br />
              <span className="font-serif-editorial italic font-normal tracking-normal text-[#A98968]">
                WITH THEM.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 lg:pt-3">
            <p className="text-base sm:text-lg text-[#050505]/75 font-light leading-relaxed mb-6">
              When the lights dim and guests return to their headquarters, what remains? INOMNIA designs tactile branded keepsakes and executive gifting suites that extend the emotional resonance of your event into enduring brand loyalty.
            </p>
            <div className="text-[10px] font-mono text-[#A98968] tracking-[0.22em] uppercase">
              // NO DISPOSABLE PROMO TRASH · PURE DESIGN ARCHITECTURE
            </div>
          </div>
        </div>

        {/* Campaign Macro Photography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          
          {/* Main Hero Macro Shot (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden border border-[#050505]/20 shadow-xl group">
              <img
                src="/images/service-giveaways.png"
                alt="Bespoke luxury executive gifting, embossed keepsake packaging, and custom memorabilia"
                className="w-full h-full object-cover filter contrast-[1.06] transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#F1EFE9]">
                <span className="font-mono text-[9px] text-[#A98968] tracking-widest uppercase">
                  CAMPAIGN SHOOT // VIP INAUGURAL KIT
                </span>
                <span className="font-mono text-[9px] text-[#F1EFE9]/80 uppercase">
                  BESPOKE EMBOSSED BRONZE
                </span>
              </div>
            </div>
          </div>

          {/* Right Editorial Material Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-[10px] tracking-[0.28em] text-[#7C8493] uppercase block mb-2">
              TACTILE MATERIALITY & CRAFT
            </span>

            {tactileMaterials.map((mat, i) => (
              <div
                key={mat.name}
                className="p-4 rounded-lg bg-[#E7E3DC]/70 border border-[#050505]/10 hover:border-[#A98968] transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-condensed text-base sm:text-lg font-bold uppercase tracking-wider text-[#050505]">
                    {mat.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#A98968]">06.{i + 1}</span>
                </div>
                <p className="text-xs text-[#050505]/70 font-sans">
                  {mat.note}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
