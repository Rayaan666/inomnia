import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1];

const missionLines = [
  ['MAKE', false],
  ['EVERY', false],
  ['MOMENT', false],
  ['MATTER.', true],
];

const visionLines = [
  ['SHAPE', false],
  ['WHAT', false],
  ['EXPERIENCES', false],
  ['BECOME.', true],
];

const outcomes = [
  ['spark', 'EXPERIENCES', 'THAT', 'RESONATE.'],
  ['network', 'CONNECTIONS', 'THAT', 'LAST.'],
  ['cube', 'INNOVATION', 'THAT', 'ELEVATES.'],
  ['rings', 'LEGACIES', 'THAT', 'INSPIRE.'],
];

function TechnicalMark() {
  return (
    <svg viewBox="0 0 54 54" aria-hidden="true">
      <circle cx="27" cy="27" r="25" />
      <circle cx="27" cy="27" r="5" />
      <path d="M27 15v6M27 33v6M15 27h6M33 27h6" />
    </svg>
  );
}

function PurposeCopy({ side, eyebrow, label, lines, copy, microTitle, microCopy }) {
  return (
    <motion.article
      className={`purpose-panel purpose-panel--${side}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: easeOut, delay: side === 'mission' ? 0.18 : 0.28 }}
    >
      <div className="purpose-note">
        <TechnicalMark />
        <span>{side === 'mission' ? '01' : '02'}</span>
        <p>{eyebrow}</p>
      </div>

      <p className="purpose-label">{label}</p>
      <h3 className="purpose-heading">
        {lines.map(([text, accent], index) => (
          <span key={text} className={accent ? 'is-blue' : undefined}>
            <motion.span
              initial={{ y: '112%', opacity: 0 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true, amount: 0.42 }}
              transition={{ duration: 0.72, ease: easeOut, delay: 0.25 + index * 0.07 }}
            >
              {text}
            </motion.span>
          </span>
        ))}
      </h3>
      <span className="purpose-rule" aria-hidden="true" />
      <p className="purpose-body">{copy}</p>
      <div className="purpose-micro">
        <p>{microTitle}</p>
        <span>{microCopy}</span>
      </div>
    </motion.article>
  );
}

function Axis() {
  return (
    <div className="purpose-axis" aria-hidden="true">
      <motion.span
        className="purpose-axis__line"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.34 }}
        transition={{ duration: 1.15, ease: easeOut, delay: 0.32 }}
      />
      <motion.div className="purpose-now" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.62, delay: 0.58 }}>
        <span>N</span><span>O</span><span>W</span>
      </motion.div>
      <span className="purpose-chevron purpose-chevron--top"><i /><i /><i /></span>
      <motion.div className="purpose-core" initial={{ opacity: 0, scale: 0.84 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.86, ease: easeOut, delay: 0.72 }}>
        <span className="purpose-light purpose-light--vertical" />
        <span className="purpose-light purpose-light--horizontal" />
        <svg className="purpose-orbit" viewBox="0 0 270 270">
          <circle cx="135" cy="135" r="76" />
          <circle className="is-dotted" cx="135" cy="135" r="116" />
          <path d="M135 18v34M135 218v34M18 135h34M218 135h34M72 72l20 20M198 72l-20 20M72 198l20-20M198 198l-20-20" />
          <circle className="is-fill" cx="135" cy="20" r="3.5" />
          <circle className="is-fill" cx="60" cy="135" r="4" />
          <circle className="is-fill" cx="210" cy="135" r="3" />
          <circle className="is-white" cx="94" cy="94" r="4" />
        </svg>
        <span className="purpose-node" />
      </motion.div>
      <span className="purpose-chevron purpose-chevron--bottom"><i /><i /></span>
      <motion.div className="purpose-next" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.62, delay: 0.88 }}>
        <span>N</span><span>E</span><span>X</span><span>T</span>
      </motion.div>
    </div>
  );
}

function OutcomeIcon({ type }) {
  if (type === 'network') {
    return (
      <svg viewBox="0 0 56 56" aria-hidden="true">
        <circle cx="28" cy="28" r="23" />
        <path d="M28 5v46M8 18l40 20M8 38l40-20M18 8l20 40M38 8 18 48" />
        <circle cx="28" cy="28" r="2.5" /><circle cx="8" cy="18" r="2.5" /><circle cx="48" cy="18" r="2.5" /><circle cx="8" cy="38" r="2.5" /><circle cx="48" cy="38" r="2.5" />
      </svg>
    );
  }

  if (type === 'cube') {
    return (
      <svg viewBox="0 0 56 56" aria-hidden="true">
        <path d="M28 4 48 16v24L28 52 8 40V16L28 4Z" />
        <path d="M28 4v24M8 16l20 12 20-12M8 40l20-12 20 12M18 10v24l20 12M38 10 18 46" />
      </svg>
    );
  }

  if (type === 'rings') {
    return (
      <svg viewBox="0 0 56 56" aria-hidden="true">
        <circle cx="28" cy="28" r="24" /><circle cx="28" cy="28" r="18" /><circle cx="28" cy="28" r="12" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 56 56" aria-hidden="true">
      <path d="M28 2v52M2 28h52M9 9l38 38M47 9 9 47" />
      <circle cx="28" cy="28" r="7" />
    </svg>
  );
}

function Atmosphere() {
  return (
    <>
      <svg className="purpose-wave" viewBox="0 0 640 260" preserveAspectRatio="none" aria-hidden="true">
        {Array.from({ length: 46 }).map((_, index) => {
          const y = 120 + Math.sin(index * 0.38) * 43;
          return (
            <path
              key={index}
              d={`M0 ${y + index * 1.05} C 132 ${42 + (index % 7) * 14}, 274 ${230 - (index % 9) * 10}, 640 ${108 + Math.sin(index) * 58}`}
            />
          );
        })}
      </svg>
      <div className="purpose-horizon" aria-hidden="true" />
      <div className="purpose-rings" aria-hidden="true" />
    </>
  );
}

export default function OurPurpose() {
  return (
    <section id="purpose" className="our-purpose-section py-16 px-6 md:px-12 flex justify-center items-center bg-[#02060B]">
      <div className="w-full max-w-[1400px] mx-auto relative flex flex-col lg:block">
        
        {/* Left Content Overlay */}
        <div className="relative lg:absolute lg:top-[6%] lg:left-[2%] z-10 w-full lg:max-w-[320px] mb-8 lg:mb-0 select-text">
          <div className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.25em] text-[#7c8493] font-bold mb-3">
            <span>01</span>
            <span className="text-white/40">/</span>
            <span>WHAT DRIVES US</span>
          </div>

          <p className="text-[12px] font-mono tracking-[0.35em] text-white/50 uppercase mb-2">
            MISSION
          </p>

          <h2 className="font-display font-black uppercase text-white leading-[0.92] text-[32px] md:text-[40px] lg:text-[46px] mb-4">
            MAKE<br />
            EVERY<br />
            MOMENT<br />
            <span className="text-[#7c8493]">MATTER.</span>
          </h2>

          <div className="h-[1.5px] w-12 bg-[#7c8493] mb-4" />

          <p className="text-[14px] leading-[1.68] text-white/80 font-light mb-6">
            We exist to turn ideas into meaningful experiences that move people, build connections and leave a lasting impact.
          </p>

          <div className="border-l-2 border-[#7c8493] pl-3.5 py-1 mb-6">
            <p className="text-[13px] font-mono italic text-white/90 leading-tight">
              Purpose is<br />our today.
            </p>
          </div>

          <p className="text-[11px] font-mono tracking-[0.22em] text-[#7c8493] font-semibold">
            25.2048° N<br />
            55.2708° E
          </p>
        </div>

        {/* Cloudinary Image */}
        <div className="w-full select-none">
          <picture className="w-full h-auto flex justify-center items-center">
            <source 
              media="(min-width: 1200px)" 
              srcSet="https://res.cloudinary.com/snos9tuz/image/upload/f_auto,q_auto,w_1800/ChatGPT_Image_Aug_28_2026_11_21_46_AM" 
            />
            <source 
              media="(min-width: 768px)" 
              srcSet="https://res.cloudinary.com/snos9tuz/image/upload/f_auto,q_auto,w_1200/ChatGPT_Image_Aug_28_2026_11_21_46_AM" 
            />
            <img 
              src="https://res.cloudinary.com/snos9tuz/image/upload/f_auto,q_auto,w_800/ChatGPT_Image_Aug_28_2026_11_21_46_AM" 
              alt="Our Purpose Visual" 
              className="w-full h-auto object-contain mix-blend-screen filter brightness-[1.05]"
              loading="lazy"
            />
          </picture>
        </div>

        {/* Right Content Overlay */}
        <div className="relative lg:absolute lg:top-[6%] lg:right-[2%] z-10 w-full lg:max-w-[320px] mt-8 lg:mt-0 select-text">
          <div className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.25em] text-[#7c8493] font-bold mb-3">
            <span>02</span>
            <span className="text-white/40">/</span>
            <span>WHERE WE'RE HEADING</span>
          </div>

          <p className="text-[12px] font-mono tracking-[0.35em] text-white/50 uppercase mb-2">
            VISION
          </p>

          <h2 className="font-display font-black uppercase text-white leading-[0.92] text-[32px] md:text-[40px] lg:text-[46px] mb-4">
            SHAPE<br />
            WHAT<br />
            EXPERIENCES<br />
            <span className="text-[#7c8493]">BECOME.</span>
          </h2>

          <div className="h-[1.5px] w-12 bg-[#7c8493] mb-4" />

          <p className="text-[14px] leading-[1.68] text-white/80 font-light mb-6">
            We envision a world where experiences are more intentional, more immersive and more unforgettable than ever before.
          </p>

          <div className="border-l-2 border-[#7c8493] pl-3.5 py-1">
            <p className="text-[13px] font-mono italic text-white/90 leading-tight">
              Vision is<br />our tomorrow.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
