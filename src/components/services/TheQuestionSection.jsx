import React from 'react';
import { motion } from 'framer-motion';

const objectives = [
  'ATTRACT?',
  'ENGAGE?',
  'CONNECT?',
  'SURPRISE?',
  'INSPIRE?',
  'BE REMEMBERED?',
];

export default function TheQuestionSection() {
  return (
    <section id="inquiry" className="relative isolate w-full bg-white text-[#02060B] pt-12 md:pt-16 pb-20 md:pb-28 overflow-hidden border-b border-neutral-200/90 selection:bg-[#7c8493] selection:text-white">
      {/* Ambient lighting & architectural dot matrix matching Homepage Discover Inomnia */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 right-1/4 h-[420px] w-[420px] rounded-full bg-slate-100/60 blur-[120px]" />
        <div className="absolute bottom-10 left-10 h-[380px] w-[380px] rounded-full bg-slate-100/70 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#02060B 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16">
        {/* Central Huge Prompt */}
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#02060B] leading-[0.95]"
          >
            WHAT DOES YOUR NEXT EXPERIENCE NEED TO DO?
          </motion.h2>
        </div>

        {/* Sequentially Revealed Objectives */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 max-w-5xl mx-auto mb-16 sm:mb-20">
          {objectives.map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-default"
            >
              <span
                className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide transition-all duration-300 ${
                  word === 'BE REMEMBERED?'
                    ? 'text-[#02060B] font-black scale-105 inline-block drop-shadow-[0_4px_20px_rgba(2,6,11,0.15)]'
                    : 'text-[#02060B]/35 hover:text-[#02060B]'
                }`}
              >
                {word}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Conceptual Bridge into the CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center pt-8 border-t border-neutral-200/90 max-w-xl mx-auto"
        >
          <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.24em] uppercase text-neutral-500">
            WHATEVER THE ANSWER, THAT'S WHERE WE BEGIN.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
