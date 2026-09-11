import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative min-h-[50vh] bg-[#01060D] text-white flex flex-col items-center justify-center overflow-hidden py-20 px-6 font-sans">
      {/* Background Image and Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_26_2026_11_25_12_AM" 
          alt="" 
          className="w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01060D] via-[#01060D]/40 to-[#01060D]" />
      </div>

      {/* Background radial glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-12" />
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/60 tracking-[0.3em] text-xs font-bold mb-4 uppercase"
        >
          BEGIN THE JOURNEY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-black uppercase tracking-wide leading-tight mb-6"
        >
          READY TO CREATE AN <br />
          <span className="text-white">
            EXTRAORDINARY EVENT IN DUBAI?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10"
        >
          Partner with INOMNIA for corporate events, exhibitions, brand activations and immersive experiences across Dubai and the UAE. From concept and creative design to production and execution, every detail is crafted to engage audiences and leave a lasting impact.
        </motion.p>

        {/* Cinematic Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="relative group inline-flex items-center justify-center px-10 py-4 font-bold tracking-[0.2em] text-xs uppercase overflow-hidden border border-white/30 bg-transparent text-white rounded-none cursor-default"
          >
            START YOUR PROJECT
            
            <svg
              className="w-4 h-4 ml-3 stroke-current"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Futuristic accent line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default CTA;
