import React from 'react';
import { motion } from 'framer-motion';

const stripProjects = [
  {
    title: 'GOVERNMENTAL SUMMIT GALA',
    location: 'MADINAT JUMEIRAH · DUBAI',
    category: 'LIVE SHOW PRODUCTION',
    image: '/images/about-hero-event.png',
  },
  {
    title: 'FUTURE MOBILITY PAVILION',
    location: 'DUBAI WORLD TRADE CENTRE',
    category: 'ARCHITECTURAL EXHIBITION',
    image: '/images/who-installation.png',
  },
  {
    title: 'HAUTE HORLOGERIE ACTIVATION',
    location: 'DIFC SCULPTURE PARK',
    category: 'IMMERSIVE SPATIAL DESIGN',
    image: '/images/who-exhibition.png',
  },
];

export default function ExperienceStripSection() {
  return (
    <section className="relative w-full bg-[#050505] text-[#F1EFE9] py-24 md:py-32 overflow-hidden border-b border-[#F1EFE9]/10">
      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F1EFE9]/10 pb-8">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#A98968] uppercase block mb-2">
              10 // PORTFOLIO STRIP
            </span>
            <h2 className="font-condensed text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-[#F1EFE9]">
              DIFFERENT BRIEFS.<br />
              <span className="font-serif-editorial italic font-normal text-[#A98968]">
                ONE STANDARD.
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm tracking-[0.24em] text-[#7C8493] uppercase">
            EXPERIENCES DESIGNED TO BE REMEMBERED.
          </p>
        </div>
      </div>

      {/* 3 Large Real Event Photographs Arranged Horizontally */}
      <div className="w-full px-5 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {stripProjects.map((item, idx) => (
            <div
              key={item.title}
              className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-lg group cursor-pointer border border-[#F1EFE9]/10 bg-[#0B0B0B]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.08] transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

              {/* Minimalist Info Revealed / Highlighted on Hover */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-mono text-[9px] tracking-[0.26em] text-[#A98968] uppercase block mb-1">
                  0{idx + 1} // {item.category}
                </span>
                <h3 className="font-condensed text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#F1EFE9] mb-1">
                  {item.title}
                </h3>
                <span className="text-[10px] font-mono text-[#7C8493] tracking-widest uppercase">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
