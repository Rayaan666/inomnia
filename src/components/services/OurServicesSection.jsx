import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CornerDownRight } from 'lucide-react';

const easeOut = [0.22, 1, 0.36, 1];

const servicesList = [
  {
    num: '01',
    slug: 'events',
    title: 'EVENTS & EXPERIENCES',
    category: 'LIVE PRODUCTION & DIRECTION',
    tagline: 'MOMENTS, MASTERFULLY ORCHESTRATED.',
    image: '/services/1.png',
    alt: 'INOMNIA flagship corporate gala and live show production',
    description:
      'We orchestrate high-stakes live environments where spatial architecture, kinetic lighting, and live direction converge. From royal galas and state summits to global product launches, every minute is choreographed to command attention.',
    deliverables: [
      'Ministerial & State Protocol Management',
      'Architectural 3D Stage & Set Fabrication',
      'Ultra-Low-Latency Multi-Camera Broadcast',
      'VIP Spatial Zoning & Hospitality Direction',
      'Live Show Callers & Minute-by-Minute Run-Down',
    ],
    metric: '360° TURNKEY PRODUCTION',
  },
  {
    num: '02',
    slug: 'exhibitions',
    title: 'EXHIBITIONS & PAVILIONS',
    category: 'SPATIAL BRAND PAVILIONS',
    tagline: 'STRUCTURES THAT COMMAND THE FLOOR.',
    image: '/services/2.png',
    alt: 'Custom architectural exhibition stand designed and built',
    description:
      'We conceive and construct turnkey custom exhibition stands and multi-story pavilions that command trade show floors and global expos. Zero-tolerance in-house CNC fabrication paired with strategic visitor journey mapping.',
    deliverables: [
      'Multi-Level Structural Pavilion Engineering',
      'In-House Precision CNC Wood & Metal Build',
      'Integrated Kinetic LED Facades & Signage',
      'Private VIP Executive Meeting Suites',
      'Turnkey Authority Permits & On-Site Assembly',
    ],
    metric: 'ZERO-TOLERANCE ENGINEERING',
  },
  {
    num: '03',
    slug: 'technology-content',
    title: 'TECHNOLOGY & CONTENT',
    category: 'IMMERSIVE & SPATIAL SYSTEMS',
    tagline: 'WHEN SPACE STARTS TO RESPOND.',
    image: '/services/3.png',
    alt: 'Physical interactive responsive installation by INOMNIA',
    description:
      'Fusing futuristic hardware, custom AI software, holographic displays, and anamorphic 3D content. We architect gesture-driven interactive zones, robotic greeters, AR/VR environments, and live digital installations backed by real-time data insights.',
    deliverables: [
      'AI Photobooths & Custom Generative Brand Activations',
      'Anamorphic 3D Content & Hologram Display Systems',
      'AR / VR Interactive Zones & Live Digital Installations',
      'Gesture & Voice-Controlled Spatial Environments',
      'Robotic Greeters & Performers with Real-Time Data Insights',
    ],
    metric: 'PHYSICAL-DIGITAL FUSION',
  },
  {
    num: '04',
    slug: 'entertainment',
    title: 'ENTERTAINMENT & SHOWS',
    category: 'LIVE PERFORMANCE & TALENT',
    tagline: 'THE ENERGY PEOPLE NEVER FORGET.',
    image: '/services/4.png',
    alt: 'Atmospheric live stage performance and international talent curation',
    description:
      'Curating and staging world-class musical ensembles, kinetic aerial acts, symphonies, and drone spectacles specifically choreographed to match the dramatic arc of your celebration.',
    deliverables: [
      'International Headliner & Talent Contracting',
      'Aerialists, Acrobats & Theatrical Ensembles',
      'Live Symphonic Orchestras & Vocal Chorales',
      'Synchronized Drone Light Shows & Laser Mapping',
      'Custom Wardrobe Design & Theatrical Styling',
    ],
    metric: 'UNREPEATABLE LIVE ENERGY',
  },
  {
    num: '05',
    slug: 'premium-giveaways',
    title: 'PREMIUM ARTIFACTS & GIFTS',
    category: 'LUXURY ARTIFACTS & GIFTS',
    tagline: 'THE EXPERIENCE THEY TAKE HOME.',
    image: '/services/5.png',
    alt: 'Tactile executive gifts, embossed packaging, and luxury memorabilia',
    description:
      'We craft tactile, keepsake objects and executive gift suites that extend the memory of your event into boardrooms and private offices long after the lights fade.',
    deliverables: [
      'Custom Milled Architectural Awards & Trophies',
      'Hot-Foil Embossed VIP Invitation & Gift Suites',
      'Bespoke Tech Accessories with Artisan Engraving',
      'Sustainable Luxury Memorabilia & Collector Kits',
      'White-Glove Global Freight & On-Site Handover',
    ],
    metric: 'ENDURING TACTILE IMPACT',
  },
];

export default function OurServicesSection({ onSelectService }) {
  return (
    <section
      id="services-section"
      className="relative w-full bg-[#02060B] text-white py-12 md:py-20 overflow-hidden border-b border-white/10 select-none font-sans"
    >
      {/* Background Grid & Ambient Depth */}
      <div className="absolute inset-0 pointer-events-none architectural-grid-dark opacity-35" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#07172E]/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-[#091D38]/30 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="pb-8 md:pb-12 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.88]">
                <span>OUR CORE</span><br />
                <span className="text-[#7c8493]">EXPERIENTIAL </span>
                <span className="text-white">DISCIPLINES.</span>
              </h2>
            </div>

            <div className="max-w-md lg:text-right flex flex-col justify-end">
              <p className="text-sm sm:text-base text-[#A7ADB7] font-light leading-relaxed mb-4">
                One creative partner. Five core disciplines. Complete experiential mastery from concept to live execution worldwide.
              </p>
              <span className="text-[10px] font-mono tracking-[0.24em] text-[#7c8493] uppercase">
                SCROLL TO EXPLORE ALL FIVE DISCIPLINARY SPREADS ↓
              </span>
            </div>
          </div>
        </div>

        {/* Alternating Left / Right Luxury Editorial Layout */}
        <div className="space-y-12 md:space-y-16 pt-6 md:pt-10">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: easeOut }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pb-10 md:pb-14 border-b border-white/10 last:border-b-0 last:pb-0"
              >
                {/* Visual Image Block (Col 1 to 6 or 7 to 12 based on even/odd) */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.1] transition-transform duration-1000 ease-out group-hover:scale-106"
                    />
                    
                    {/* Cinematic Bottom Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02060B] via-transparent to-transparent pointer-events-none" />

                    {/* Registration Tag Badges */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded border border-white/15 text-[10px] font-mono tracking-[0.22em] uppercase text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#19D8FF]" />
                      <span>DISCIPLINE {service.num} /// {service.category}</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between text-white pointer-events-none">
                      <span className="font-mono text-[10px] tracking-[0.24em] text-[#7c8493] uppercase">
                        {service.metric}
                      </span>
                      <span className="font-mono text-xs text-white/60 tracking-widest">
                        {service.num} / 05
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Narrative Block */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Category & Number Header */}
                  <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-3">
                    <span className="font-mono text-2xl font-bold text-white/40">
                      {service.num}
                    </span>
                    <span className="w-6 h-[1px] bg-white/20" />
                    <span className="font-mono text-[10px] tracking-[0.28em] text-[#7c8493] uppercase">
                      {service.category}
                    </span>
                  </div>

                  {/* Main Service Title */}
                  <h3 className="font-display text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black uppercase tracking-wide text-white leading-[0.95] mb-3">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="font-mono text-xs sm:text-sm text-[#19D8FF] tracking-wider uppercase mb-4">
                    {service.tagline}
                  </p>

                  {/* Deep Description */}
                  <p className="text-sm sm:text-base text-[#A7ADB7] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mb-8 pt-4 border-t border-white/10">
                    <span className="font-mono text-[10px] text-white/40 tracking-[0.24em] uppercase block mb-3">
                      CORE DELIVERABLES:
                    </span>
                    <div className="space-y-2">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                          <CornerDownRight className="w-3.5 h-3.5 text-[#7c8493] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Button */}
                  <div>
                    <button
                      type="button"
                      onClick={() => onSelectService && onSelectService(service.slug)}
                      className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 text-white font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:border-white hover:bg-white hover:text-black cursor-pointer"
                    >
                      <span>EXPLORE {service.title}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Global Bottom Banner */}
        <div className="mt-10 md:mt-12 p-8 sm:p-10 rounded-2xl border border-white/15 bg-gradient-to-r from-[#07172E]/70 via-[#02060B] to-[#07172E]/70 backdrop-blur-lg flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#7c8493] tracking-[0.25em] uppercase block mb-1">
              THE INOMNIA STANDARD
            </span>
            <h4 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-wide">
              ONE CREATIVE VISION. ZERO COMPROMISES.
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-sans max-w-xl mt-1">
              Connect with our creative directors to discuss tailored scope, spatial architecture, and live event production for your upcoming project.
            </p>
          </div>

          <a
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/90 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
