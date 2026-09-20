import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const indexItems = [
  {
    num: '01',
    name: 'EVENTS',
    desc: 'Flagship corporate galas, high-profile conferences, and private celebrations.',
    image: '/images/service-events.png',
    target: '#events',
    accent: 'LIGHT · SOUND · SPACE',
  },
  {
    num: '02',
    name: 'EXHIBITIONS',
    desc: 'Architectural exhibition stands, bespoke pavilions, and brand spatial design.',
    image: '/images/service-exhibitions.png',
    target: '#exhibitions',
    accent: 'STRUCTURE · SCALE · IMPACT',
  },
  {
    num: '03',
    name: 'TECHNOLOGY & CONTENT',
    desc: 'Interactive touchpoints, responsive spatial displays, projection mapping & CGI.',
    image: '/images/service-technology.png',
    target: '#technology',
    accent: 'IMMERSIVE · RESPONSIVE · PHYSICAL',
  },
  {
    num: '04',
    name: 'ENTERTAINMENT',
    desc: 'Curated international talent, live stage production, and atmospheric choreography.',
    image: '/images/service-entertainment.png',
    target: '#entertainment',
    accent: 'ENERGY · EMOTION · MEMORY',
  },
  {
    num: '05',
    name: 'PREMIUM GIVEAWAYS',
    desc: 'Tactile executive gifts, bespoke artisan packaging, and branded luxury keepsakes.',
    image: '/images/service-giveaways.png',
    target: '#giveaways',
    accent: 'TACTILE · BESPOKE · PERMANENT',
  },
];

export default function ServiceIndexSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollToSection = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="service-index"
      className="relative w-full bg-[#F1EFE9] text-[#050505] py-24 md:py-36 overflow-hidden border-b border-[#050505]/10"
    >
      {/* Editorial Fine Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none architectural-grid-fine opacity-70" />

      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-16 md:pb-24 border-b border-[#050505]/15">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#A98968]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-[#A98968] uppercase">
                02 — OUR CAPABILITIES
              </span>
            </div>
            <h2 className="font-condensed text-[48px] sm:text-[68px] md:text-[84px] lg:text-[96px] uppercase font-semibold leading-[0.9] tracking-[-0.02em] text-[#050505]">
              ONE VISION.<br />
              <span className="font-serif-editorial italic font-normal tracking-normal text-[#A98968]">
                MANY DISCIPLINES.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base sm:text-xl text-[#050505]/75 font-light leading-relaxed max-w-lg mb-4">
              Every extraordinary experience is built from different disciplines working as one.
            </p>
            <span className="text-[10px] font-mono tracking-[0.24em] text-[#7C8493] uppercase">
              SELECT ANY DISCIPLINE TO EXPLORE ITS ARCHITECTURE ↓
            </span>
          </div>
        </div>

        {/* Oversized Editorial Service List */}
        <div className="relative divide-y divide-[#050505]/15">
          {indexItems.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={item.num}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group py-8 sm:py-10 md:py-14 transition-colors duration-300 hover:bg-[#E7E3DC]/40"
              >
                <a
                  href={item.target}
                  onClick={(e) => scrollToSection(e, item.target)}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10 cursor-pointer"
                >
                  {/* Left: Number & Giant Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10 md:gap-14">
                    <span
                      className={`font-mono text-lg sm:text-2xl font-bold tracking-wider transition-colors duration-300 ${
                        isHovered ? 'text-[#A98968]' : 'text-[#7C8493]'
                      }`}
                    >
                      {item.num}
                    </span>
                    <h3
                      className={`font-condensed text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.02em] uppercase transition-all duration-300 ${
                        isHovered ? 'translate-x-3 sm:translate-x-6 text-[#050505]' : 'text-[#050505]/90'
                      }`}
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Right: Description, Accent Microcopy & Arrow */}
                  <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-12 pl-14 sm:pl-24 lg:pl-0">
                    <div className="max-w-md hidden sm:block text-right">
                      <p className="text-xs sm:text-sm text-[#050505]/70 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                      <span className="block mt-1 text-[9px] font-mono tracking-[0.24em] text-[#A98968] uppercase">
                        {item.accent}
                      </span>
                    </div>

                    <div
                      className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#050505] text-[#F1EFE9] border-[#050505] scale-105'
                          : 'border-[#050505]/20 text-[#050505]'
                      }`}
                    >
                      <ArrowUpRight
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                          isHovered ? 'rotate-45' : ''
                        }`}
                      />
                    </div>
                  </div>
                </a>

                {/* Floating Preview Image on Desktop Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: 10 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="hidden xl:block absolute right-32 top-1/2 -translate-y-1/2 w-64 h-40 z-20 pointer-events-none rounded overflow-hidden shadow-2xl border border-[#050505]/20 bg-[#050505]"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover filter contrast-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-[#F1EFE9] tracking-[0.2em]">
                        <span>INOMNIA ARCHIVE</span>
                        <span>{item.num}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
