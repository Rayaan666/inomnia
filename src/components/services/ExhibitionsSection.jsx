import React, { useState } from 'react';
import { motion } from 'framer-motion';

const exhibitionCapabilities = [
  'Exhibition Stand Design',
  'Spatial Design',
  'Custom Fabrication',
  'Brand Environments',
  'Installation',
  'On-Site Execution',
];

const layers = [
  {
    id: 'sketch',
    step: '01',
    label: 'SKETCH',
    title: 'Spatial Concept & Narrative',
    desc: 'Translating brand DNA into three-dimensional ergonomic flow, sightlines, and visitor engagement zones.',
    annotation: 'REF. 01 // AXONOMETRIC DRAFT · SIGHTLINE 120°',
  },
  {
    id: 'structure',
    step: '02',
    label: 'STRUCTURE',
    title: 'Engineering & Custom Fabrication',
    desc: 'Structural steel, architectural timber, integrated HVAC, and zero-tolerance bespoke engineering built in Dubai.',
    annotation: 'REF. 02 // CNC MILLING · STRUCTURAL LOAD 1,200 KG/M²',
  },
  {
    id: 'experience',
    step: '03',
    label: 'EXPERIENCE',
    title: 'Flawless Turnkey Reality',
    desc: 'Turnkey on-site execution with illuminated brand identity, VIP hospitality suites, and integrated media.',
    annotation: 'REF. 03 // ILLUMINATION 4,000K · VIP SUITE VERIFIED',
  },
];

export default function ExhibitionsSection() {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <section
      id="exhibitions"
      className="relative w-full bg-[#F1EFE9] text-[#050505] py-24 md:py-36 overflow-hidden border-b border-[#050505]/10 architectural-blueprint-bg"
    >
      {/* Blueprint Grid Watermarks & Registration Marks */}
      <div className="absolute top-12 right-12 text-[10px] font-mono tracking-[0.24em] text-[#7C8493] hidden md:block select-none">
        DWG. NO. DXB-EXPO-2026 /// SCALE 1:50 · LEVEL 01
      </div>
      <div className="absolute bottom-12 left-12 text-[10px] font-mono tracking-[0.24em] text-[#7C8493] hidden md:block select-none">
        MEASUREMENT TOLERANCE ±0.5MM /// CNC ARCHITECTURAL FABRICATION
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16">
        
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-[#050505]/15">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#A98968]">02</span>
            <span className="w-6 h-[1px] bg-[#A98968]" />
            <span className="font-mono text-xs font-semibold tracking-[0.3em] uppercase text-[#050505]">
              DISCIPLINE // EXHIBITIONS
            </span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.26em] text-[#7C8493] uppercase">
            BESPOKE PAVILIONS · GLOBAL EXPOS & TRADE SHOWS
          </div>
        </div>

        {/* Two-Column Architectural Blueprint Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Realistic Photograph of Completed Premium Exhibition Stand (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-lg overflow-hidden border border-[#050505]/20 shadow-xl group">
              <img
                src="/images/service-exhibitions.png"
                alt="Premium architectural exhibition stand designed and fabricated in Dubai"
                className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Technical Drawing Blueprint Crosshairs */}
              <div className="absolute top-4 left-4 font-mono text-[9px] text-[#F1EFE9] bg-[#050505]/70 backdrop-blur px-2.5 py-1 rounded tracking-[0.2em]">
                DIM: 18.50M × 12.00M
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-[#F1EFE9] bg-[#050505]/70 backdrop-blur px-2.5 py-1 rounded tracking-[0.2em]">
                ELEVATION A-02 · COMPLETED STAND
              </div>
            </div>

            {/* Measurement lines surrounding the photo */}
            <div className="mt-3 flex items-center justify-between text-[9px] font-mono text-[#7C8493] tracking-[0.2em] px-1">
              <span>+0.00 FLOOR GRADE</span>
              <span className="h-[1px] flex-1 mx-4 bg-[#050505]/15" />
              <span>+6.20M CANOPY HEIGHT</span>
            </div>
          </div>

          {/* RIGHT: Typography, Supporting Copy & Intentional Transformation Interaction (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-condensed text-[48px] sm:text-[64px] md:text-[76px] lg:text-[88px] uppercase font-semibold leading-[0.9] tracking-[-0.02em] text-[#050505] mb-6"
            >
              SPACES THAT<br />
              SPEAK FOR<br />
              <span className="font-serif-editorial italic font-normal tracking-normal text-[#A98968]">
                YOUR BRAND.
              </span>
            </motion.h2>

            <p className="text-base sm:text-lg text-[#050505]/75 font-light leading-relaxed mb-8 max-w-xl">
              An exhibition stand is not temporary furniture; it is physical brand diplomacy. INOMNIA merges architectural rigor, spatial storytelling, and precision manufacturing to engineer commanding pavilions that draw footfall and convert curiosity into relationships.
            </p>

            {/* Transformation Interaction: SKETCH → STRUCTURE → EXPERIENCE */}
            <div className="bg-[#E7E3DC]/60 border border-[#050505]/15 rounded-lg p-5 sm:p-6 mb-8">
              <div className="flex items-center justify-between mb-4 border-b border-[#050505]/10 pb-3">
                <span className="text-[10px] font-mono tracking-[0.24em] text-[#7C8493] uppercase">
                  INTENTIONAL ARCHITECTURE
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#A98968]">
                  LAYER 0{activeLayer + 1} OF 03
                </span>
              </div>

              {/* Three Interactive Pills */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {layers.map((layer, index) => (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayer(index)}
                    className={`py-2 px-3 rounded text-left transition-all duration-300 cursor-pointer ${
                      activeLayer === index
                        ? 'bg-[#050505] text-[#F1EFE9] shadow-md'
                        : 'bg-[#F1EFE9] text-[#050505]/70 hover:bg-[#F1EFE9]/90'
                    }`}
                  >
                    <span className="block font-mono text-[9px] opacity-60">{layer.step}</span>
                    <span className="block font-condensed text-sm sm:text-base font-bold tracking-wider">
                      {layer.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Layer Details */}
              <div className="space-y-1">
                <h4 className="font-condensed text-xl font-bold uppercase text-[#050505]">
                  {layers[activeLayer].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#050505]/70 font-sans leading-relaxed">
                  {layers[activeLayer].desc}
                </p>
                <div className="pt-2">
                  <span className="inline-block text-[9px] font-mono text-[#A98968] tracking-widest uppercase">
                    {layers[activeLayer].annotation}
                  </span>
                </div>
              </div>
            </div>

            {/* Capabilities */}
            <div>
              <span className="block font-mono text-[10px] tracking-[0.24em] text-[#7C8493] uppercase mb-3">
                SERVICES INCLUDED
              </span>
              <div className="flex flex-wrap gap-2">
                {exhibitionCapabilities.map((cap) => (
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

        </div>

      </div>
    </section>
  );
}
