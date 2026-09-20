import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  { role: 'VIP PROTOCOL & HOSTS', desc: 'Multilingual ambassadors trained in royal and diplomatic guest etiquette.' },
  { role: 'PRODUCTION CREW', desc: 'Experienced stage managers, audiovisual operators and live cue coordinators.' },
  { role: 'BRAND AMBASSADORS', desc: 'Poised, articulate product specialists representing global brand heritage.' },
  { role: 'GUEST OPERATIONS', desc: 'Seamless registration, VIP lounge hospitality and accreditation specialists.' },
];

export default function StaffingSection() {
  return (
    <section
      id="staffing"
      className="relative w-full bg-[#0B0B0B] text-[#F1EFE9] py-24 md:py-36 overflow-hidden border-b border-[#F1EFE9]/10"
    >
      <div className="absolute inset-0 pointer-events-none architectural-grid-dark opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16">
        
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-[#F1EFE9]/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#A98968]">05</span>
            <span className="w-6 h-[1px] bg-[#A98968]" />
            <span className="font-mono text-xs font-semibold tracking-[0.3em] uppercase text-[#F1EFE9]">
              DISCIPLINE // STAFFING & HUMAN EXPERIENCE
            </span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.26em] text-[#7C8493] uppercase">
            PROTOCOL OFFICERS · BRAND HOSTS · OPERATIONS CREW
          </div>
        </div>

        {/* Top Headline & Understated Human Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-18">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-condensed text-[50px] sm:text-[70px] md:text-[84px] lg:text-[98px] uppercase font-semibold leading-[0.9] tracking-[-0.02em] text-[#F1EFE9]"
            >
              THE PEOPLE<br />
              BEHIND THE<br />
              <span className="font-serif-editorial italic font-normal tracking-normal text-[#A98968]">
                EXPERIENCE.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 lg:pt-3">
            <div className="p-6 rounded-lg bg-[#050505] border border-[#F1EFE9]/10 mb-6">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#A98968] uppercase block mb-3">
                HUMAN PHILOSOPHY
              </span>
              <p className="font-condensed text-2xl sm:text-3xl font-bold uppercase tracking-wide leading-tight text-[#F1EFE9] mb-3">
                THE RIGHT PEOPLE.<br />
                THE RIGHT ENERGY.<br />
                THE RIGHT EXPERIENCE.
              </p>
              <p className="text-xs sm:text-sm text-[#7C8493] font-light leading-relaxed">
                Even the most elaborate production falls flat without impeccable human hospitality. INOMNIA hand-selects, trains, and styles event personnel who embody discreet luxury and warmth.
              </p>
            </div>
          </div>
        </div>

        {/* Cinematic Horizontal Strip of People Working Naturally */}
        <div className="relative w-full aspect-[16/7] sm:aspect-[21/9] rounded-lg overflow-hidden border border-[#F1EFE9]/15 group mb-14">
          <img
            src="/images/service-staffing.png"
            alt="Real event personnel, brand hosts, and protocol coordinators working seamlessly in Dubai"
            className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.08] transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/40 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[9px] text-[#A98968] tracking-widest uppercase block mb-1">
                DOCUMENTARY EVENT PERSONNEL
              </span>
              <span className="font-condensed text-xl sm:text-2xl font-bold uppercase text-[#F1EFE9]">
                DISCREET HOSPITALITY IN REAL-TIME OPERATION
              </span>
            </div>
            <div className="font-mono text-[9px] text-[#7C8493] tracking-[0.2em] uppercase">
              100% VETTED & TRAINED PROTOCOL STANDARDS
            </div>
          </div>
        </div>

        {/* 4 Discrete Role Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[#F1EFE9]/10">
          {roles.map((item, i) => (
            <div key={item.role} className="border-l border-[#A98968]/30 pl-4 py-2">
              <span className="font-mono text-[10px] text-[#A98968] tracking-widest block mb-1">
                05.{i + 1}
              </span>
              <h4 className="font-condensed text-lg font-bold uppercase tracking-wider text-[#F1EFE9] mb-2">
                {item.role}
              </h4>
              <p className="text-xs text-[#7C8493] leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
