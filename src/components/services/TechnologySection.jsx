import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const techCapabilities = [
  'Interactive Displays',
  'Immersive Content',
  'LED Experiences',
  'Projection Mapping',
  'AR / VR Ecosystems',
  'Holographic Experiences',
  'Gesture & Voice Interaction',
  'Digital Content & CGI',
];

export default function TechnologySection() {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 120, y: 80 });
  const [isInside, setIsInside] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setCoords({ x, y });
  };

  return (
    <section
      id="technology"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      className="relative w-full bg-[#050505] text-[#F1EFE9] py-24 md:py-36 overflow-hidden border-b border-[#F1EFE9]/10"
    >
      {/* Dynamic Cursor Responsive Coordinate Lines */}
      {isInside && (
        <div className="hidden lg:block pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute top-0 bottom-0 w-[1px] bg-[#A98968]/25 transition-all duration-75"
            style={{ left: `${coords.x}px` }}
          />
          <div
            className="absolute left-0 right-0 h-[1px] bg-[#A98968]/25 transition-all duration-75"
            style={{ top: `${coords.y}px` }}
          />
        </div>
      )}

      {/* Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none architectural-grid-dark opacity-45" />

      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16">
        
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-[#F1EFE9]/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#A98968]">03</span>
            <span className="w-6 h-[1px] bg-[#A98968]" />
            <span className="font-mono text-xs font-semibold tracking-[0.3em] uppercase text-[#F1EFE9]">
              DISCIPLINE // TECHNOLOGY & CONTENT
            </span>
          </div>
          
          {/* Dynamic Interactive Sensor Microcopy */}
          <div className="font-mono text-[10px] tracking-[0.24em] text-[#7C8493] uppercase flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SENSOR ACTIVE · COORD [{coords.x}px, {coords.y}px]</span>
          </div>
        </div>

        {/* Statement & Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 md:mb-16">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-condensed text-[52px] sm:text-[72px] md:text-[88px] lg:text-[104px] uppercase font-semibold leading-[0.88] tracking-[-0.02em]"
            >
              WHEN SPACE<br />
              STARTS TO<br />
              <span className="font-serif-editorial italic font-normal tracking-normal text-[#A98968]">
                RESPOND.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 lg:pt-4">
            <p className="text-base sm:text-lg text-[#7C8493] font-light leading-relaxed mb-6">
              Technology is most powerful when it disappears into the human experience. INOMNIA develops physical-digital installations where spatial architecture senses human presence and responds with dynamic digital narratives.
            </p>
            <div className="text-[10px] font-mono text-[#A98968] tracking-[0.22em] uppercase">
              // PHYSICAL COMPUTING · KINETIC ARCHITECTURE · SPATIAL COMPUTING
            </div>
          </div>
        </div>

        {/* Real Interactive Installation Visual */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-lg overflow-hidden border border-[#F1EFE9]/15 group">
          <img
            src="/images/service-technology.png"
            alt="Real interactive technology installation where guests engage with responsive spatial displays"
            className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.1] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 pointer-events-none" />

          {/* Interactive HUD overlay elements */}
          <div className="absolute top-6 left-6 z-10 hidden sm:flex items-center gap-3 bg-[#050505]/80 backdrop-blur border border-[#F1EFE9]/20 px-3.5 py-1.5 rounded text-[10px] font-mono text-[#F1EFE9]">
            <span className="w-2 h-2 rounded-full bg-[#A98968]" />
            <span>KINETIC LED & GESTURE SYSTEM // DUBAI ACTIVATION</span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-md">
              <span className="font-mono text-[9px] text-[#A98968] tracking-[0.28em] uppercase block mb-1">
                HUMAN-CENTRIC INTERACTION
              </span>
              <p className="text-xs sm:text-sm text-[#F1EFE9]/90 font-light">
                Visitors intuitively manipulating generative 3D visual environments with fluid gestures and body movement.
              </p>
            </div>
            <div className="font-mono text-[9px] text-[#7C8493] tracking-[0.2em] uppercase">
              FPS 60 · ULTRA-LOW LATENCY &lt;8MS
            </div>
          </div>
        </div>

        {/* Capabilities Pill Strip */}
        <div className="mt-12 pt-8 border-t border-[#F1EFE9]/10">
          <span className="block font-mono text-[10px] tracking-[0.24em] text-[#A98968] uppercase mb-4">
            TECHNICAL DISCIPLINES
          </span>
          <div className="flex flex-wrap gap-2.5">
            {techCapabilities.map((cap) => (
              <span
                key={cap}
                className="inline-block px-3.5 py-2 rounded-full border border-[#F1EFE9]/20 text-xs font-mono text-[#F1EFE9]/85 hover:border-[#A98968] hover:text-[#A98968] transition-colors duration-200"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
