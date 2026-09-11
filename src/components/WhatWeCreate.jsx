import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Box,
  CalendarDays,
  Cpu,
  Gift,
  Star,
  UsersRound,
} from 'lucide-react';
import { motion } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1];

const services = [
  {
    number: '01',
    title: ['EVENTS'],
    description:
      'Corporate events, gala dinners, conferences, award ceremonies and more - unforgettable experiences, flawlessly executed.',
    image: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_53_47_PM',
    icon: CalendarDays,
    slug: 'events',
    accent: '#7c8493',
    rgb: '36, 107, 255',
    shape: 'service-shard-a',
  },
  {
    number: '02',
    title: ['EXHIBITIONS'],
    description:
      'From creative booth design to fabrication and audience acquisition - we build exhibitions that attract, engage and deliver results.',
    image: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_53_52_PM',
    icon: Box,
    slug: 'exhibitions',
    accent: '#A64DFF',
    rgb: '166, 77, 255',
    shape: 'service-shard-b',
  },
  {
    number: '03',
    title: ['TECHNOLOGY', '& CONTENT'],
    description: 'Immersive tech, interactive experiences and digital content that transform events into memorable journeys.',
    image: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_53_55_PM',
    icon: Cpu,
    slug: 'technology-content',
    accent: '#19D8FF',
    rgb: '25, 216, 255',
    shape: 'service-shard-c',
  },
  {
    number: '04',
    title: ['ENTERTAINMENT'],
    description:
      'Live performers, immersive acts and cutting-edge entertainment that add energy, emotion and excitement to every event.',
    image: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_53_57_PM',
    icon: Star,
    slug: 'entertainment',
    accent: '#FF7A24',
    rgb: '255, 122, 36',
    shape: 'service-shard-d',
  },
  {
    number: '05',
    title: ['STAFFING', 'SOLUTIONS'],
    description: 'Skilled professionals and host management solutions that ensure seamless service and exceptional guest experiences.',
    image: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_54_00_PM',
    icon: UsersRound,
    slug: 'staffing-solutions',
    accent: '#7c8493',
    rgb: '36, 107, 255',
    shape: 'service-shard-e',
  },
  {
    number: '06',
    title: ['PREMIUM', 'GIVEAWAYS'],
    description: 'Curated, high-quality giveaways and branded merchandise that leave a lasting impression beyond the event.',
    image: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_54_03_PM',
    icon: Gift,
    slug: 'premium-giveaways',
    accent: '#FF3AAE',
    rgb: '255, 58, 174',
    shape: 'service-shard-f',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.76, ease: easeOut } },
};

function InterfaceMarker() {
  return (
    <motion.div variants={reveal} className="service-interface-marker" aria-hidden="true">
      <span />
      <i />
      <i />
      <i />
      <b />
    </motion.div>
  );
}

function EnergyTrail() {
  return (
    <svg className="service-energy-trail" viewBox="0 0 470 190" fill="none" aria-hidden="true">
      <defs>
        <filter id="serviceEnergyGlow" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="serviceEnergyGradient" x1="0" y1="0" x2="470" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7c8493" stopOpacity="0" />
          <stop offset="0.64" stopColor="#7c8493" stopOpacity="0.5" />
          <stop offset="1" stopColor="#19D8FF" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3].map((line) => (
        <motion.path
          key={line}
          d={`M 8 ${124 + line * 8} C 152 ${158 - line * 9}, 332 ${142 + line * 5}, 408 ${66 + line * 10} S 472 ${34 + line * 2}, 430 ${110 + line * 8}`}
          stroke="url(#serviceEnergyGradient)"
          strokeWidth={line === 1 ? 1.7 : 0.8}
          strokeDasharray={line === 1 ? '18 18' : '4 16'}
          filter={line === 1 ? 'url(#serviceEnergyGlow)' : undefined}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: line === 1 ? 0.85 : 0.34 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.9, ease: easeOut, delay: 0.7 + line * 0.1 }}
        />
      ))}
      {[138, 226, 318, 392].map((cx, index) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy={index % 2 ? 119 : 133}
          r={index === 3 ? 2.2 : 1.25}
          fill="#19D8FF"
          filter="url(#serviceEnergyGlow)"
          animate={{ opacity: [0, 1, 0], x: [0, 26, 48] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'linear', delay: index * 0.48 }}
        />
      ))}
    </svg>
  );
}

function NavigationControls({ onPrev, onNext }) {
  return (
    <motion.div variants={reveal} className="service-top-controls">
      <button type="button" onClick={onPrev} className="service-round-nav service-round-nav-prev" aria-label="Previous services">
        <ArrowLeft className="h-6 w-6" />
      </button>
      <button type="button" onClick={onNext} className="service-round-nav service-round-nav-next" aria-label="Next services">
        <ArrowRight className="h-6 w-6" />
      </button>
      <EnergyTrail />
    </motion.div>
  );
}

function SectionHeader() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
      className="service-section-header"
    >
      <div className="service-heading-block">
        <motion.p variants={reveal} className="service-eyebrow">
          WHAT WE CREATE
        </motion.p>
        <motion.h2 variants={reveal} className="service-main-heading">
          <span>EXPERIENCES THAT INSPIRE.</span>
          <span>
            <strong>IMPACT</strong> THAT LASTS.
          </span>
        </motion.h2>
        <InterfaceMarker />
      </div>

      <div className="service-copy-controls">
        <motion.p variants={reveal} className="service-support-copy">
          From concept to creation, we design and deliver immersive experiences that <strong>engage</strong> audiences,{' '}
          <strong>communicate</strong> purpose, and leave a <strong>lasting</strong> impression.
        </motion.p>
      </div>
    </motion.header>
  );
}

function InomniaMiniMark() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M32 5 55 18.5v27L32 59 9 45.5v-27L32 5Z" stroke="currentColor" strokeWidth="2" />
      <path d="M32 15 46 23v18L32 49 18 41V23L32 15Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M32 5v54M9 18.5l46 27M55 18.5 9 45.5" stroke="currentColor" strokeWidth="1" opacity=".8" />
    </svg>
  );
}

function HexIcon({ icon: Icon }) {
  return (
    <div className="service-card-hex" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M32 4 56 18v28L32 60 8 46V18L32 4Z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <Icon className="relative h-7 w-7 text-white" strokeWidth={1.65} />
    </div>
  );
}

function ServicePanel({ service, index, hovered, setHovered }) {
  const Icon = service.icon;
  const isDimmed = hovered !== null && hovered !== index;

  return (
    <motion.article
      initial={{ opacity: 0, y: 62 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.82, ease: easeOut, delay: 0.13 + index * 0.075 }}
      onMouseEnter={() => {
        setHovered(index);
      }}
      onMouseLeave={() => {
        setHovered(null);
      }}
      className={`service-panel group ${service.shape} ${isDimmed ? 'is-dimmed' : ''}`}
      style={{
        '--accent': service.accent,
        '--accent-rgb': service.rgb,
        '--offset': '0px',
      }}
    >
      <div className="service-card-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <img src={service.image} alt="" loading="lazy" className="service-panel-image" />
      <div className="service-panel-shade" />
      <div className="service-panel-side-light" />
      <div className="service-panel-edge service-panel-edge-top" />
      <div className="service-panel-edge service-panel-edge-bottom" />

      <div className="service-panel-content">
        <div className="service-number-block">
          <p>{service.number}</p>
          <span />
        </div>

        <div className="service-panel-copy">
          <HexIcon icon={Icon} />
          <div className="service-title-wrap">
            <h3>
              {service.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h3>
            <p>{service.description}</p>
          </div>
          <a href={`#${service.slug}`} className="service-explore-link">
            <span>EXPLORE</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function CreateCTA() {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.72, ease: easeOut, delay: 0.32 }}
      className="group relative flex min-h-[64px] flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 rounded-full border border-white/20 bg-[#02060b]/85 px-8 py-3.5 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] w-full max-w-[650px] mx-auto text-center"
    >
      <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.12em] text-white">
        ONE VISION. COUNTLESS POSSIBILITIES.
      </span>
      <span className="hidden sm:block h-4 w-px bg-white/20" />
      <span className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-white transition duration-300 group-hover:text-white/80">
        LET'S CREATE
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </motion.a>
  );
}

export default function WhatWeCreate() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="service-section">
      <style>{`
        .service-section {
          padding-top: clamp(30px, 2.5vw, 48px) !important;
        }
        .service-panel {
          clip-path: none !important;
          border-radius: 20px !important;
          min-height: 480px !important;
          height: auto !important;
          background: rgba(7, 23, 46, 0.4) !important;
          backdrop-filter: blur(8px) !important;
          border: 1px solid rgba(var(--accent-rgb), 0.25) !important;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), 
                      border-color 0.4s cubic-bezier(0.22, 1, 0.36, 1), 
                      box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }
        .service-shard-a, .service-shard-b, .service-shard-c, .service-shard-d, .service-shard-e, .service-shard-f {
          clip-path: none !important;
        }
        .service-panel:hover {
          transform: translateY(-8px) !important;
          border-color: rgba(var(--accent-rgb), 0.8) !important;
          box-shadow: 0 15px 35px rgba(var(--accent-rgb), 0.2) !important;
        }
        .service-panel-image {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }
        .service-panel:hover .service-panel-image {
          transform: scale(1.08) !important;
        }
        @media (max-width: 767px) {
          .service-showcase-wrap {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .service-panel {
            flex: none !important;
            width: 100% !important;
          }
        }
      `}</style>
      <div className="service-radial service-radial-a" />
      <div className="service-radial service-radial-b" />
      <div className="service-shell">
        <SectionHeader />
        
        <motion.div
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } } }}
          className="service-showcase-wrap w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {services.map((service, index) => (
              <ServicePanel
                key={service.slug}
                service={service}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-14 flex flex-col items-center gap-10 w-full">
          <CreateCTA />
        </div>
      </div>
    </section>
  );
}

