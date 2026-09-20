import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone } from 'lucide-react';

export default function ServicesFinalCta() {
  const handleStartProject = (e) => {
    // Scroll or navigate to contact section
    if (window.location.pathname === '/') {
      e.preventDefault();
      const target = document.querySelector('#contact');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <section className="relative w-full min-h-[75vh] bg-[#050505] text-[#F1EFE9] flex items-center justify-center overflow-hidden py-28 px-5 md:px-12 lg:px-16">
      
      {/* Full Background Real Premium Event Image Darkened for Legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-editorial-event.png"
          alt="Atmospheric exhibition pavilion in Dubai"
          className="w-full h-full object-cover filter brightness-[0.28] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/90 pointer-events-none" />
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none architectural-grid-dark opacity-35" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-[1px] bg-[#A98968]" />
          <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-[#A98968]">
            YOUR NEXT EXPERIENCE /// DUBAI, UAE
          </span>
          <span className="w-8 h-[1px] bg-[#A98968]" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-condensed text-[54px] sm:text-[76px] md:text-[96px] uppercase font-semibold leading-[0.88] tracking-[-0.02em] text-[#F1EFE9] mb-8"
        >
          LET'S CREATE<br />
          WHAT PEOPLE<br />
          <span className="font-serif-editorial italic font-normal text-[#A98968]">
            REMEMBER.
          </span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-[#7C8493] font-light leading-relaxed max-w-2xl mb-12"
        >
          Bring us the brief, the ambition or even the beginning of an idea. We'll help turn it into an experience worth remembering.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6"
        >
          <a
            href="/#contact"
            onClick={handleStartProject}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 border border-[#F1EFE9] bg-[#F1EFE9] text-[#050505] font-mono text-xs font-bold tracking-[0.24em] uppercase transition-all duration-300 hover:bg-[#A98968] hover:border-[#A98968] hover:text-[#050505] cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="tel:+971556515998"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#F1EFE9]/25 text-[#F1EFE9] font-mono text-xs font-bold tracking-[0.24em] uppercase transition-all duration-300 hover:border-[#F1EFE9] hover:bg-[#F1EFE9]/10 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#A98968]" />
            <span>TALK TO OUR TEAM</span>
          </a>
        </motion.div>

        {/* Dubai Coordinates Footer */}
        <div className="mt-16 pt-8 border-t border-[#F1EFE9]/10 flex items-center justify-between w-full text-[10px] font-mono text-[#7C8493] tracking-[0.24em] uppercase">
          <span>DUBAI HQ: +971 55 651 5998</span>
          <span>HELLO@INOMNIA.AE</span>
        </div>

      </div>
    </section>
  );
}
