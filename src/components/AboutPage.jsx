import { useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Navbar from './Navbar.jsx';
import OurPhilosophy from './OurPhilosophy.jsx';
import OurPurpose from './OurPurpose.jsx';
import CTA from './CTA.jsx';
import Footer from './Footer.jsx';

const easeOut = [0.22, 1, 0.36, 1];

const headlineLines = [
  { text: "WE DON'T JUST", accent: false },
  { text: 'CREATE EVENTS,', accent: false },
  { text: 'WE CREATE', accent: true },
  { text: 'EXPERIENCES.', accent: true },
];

export default function AboutPage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 42, damping: 24, mass: 0.45 });
  const springY = useSpring(mouseY, { stiffness: 42, damping: 24, mass: 0.45 });

  const imageX = useTransform(springX, [-1, 1], [-6, 6]);
  const imageY = useTransform(springY, [-1, 1], [-4, 4]);
  const panelX = useTransform(springX, [-1, 1], [3, -3]);
  const panelY = useTransform(springY, [-1, 1], [2, -2]);

  const revealGroup = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.38,
        },
      },
    }),
    [],
  );

  const reveal = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.82, ease: easeOut } },
  };

  const lineReveal = {
    hidden: { opacity: 0, y: 54, skewY: 2 },
    visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.9, ease: easeOut } },
  };

  const handleMouseMove = (event) => {
    if (window.matchMedia('(max-width: 767px)').matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-inomnia-black text-white">
      <Navbar />
      <section
        id="about"
        className="about-hero"
        aria-labelledby="about-hero-title"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
      >
        <motion.div
          className="about-hero__image-wrap"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ opacity: { duration: 1.1, ease: easeOut }, scale: { duration: 6.4, ease: 'easeOut' } }}
          style={{ x: imageX, y: imageY }}
        >
          <img
            className="about-hero__image"
            src="/images/about-hero-event.png"
            alt=""
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        <div className="about-hero__event-shade" aria-hidden="true" />

        <motion.div
          className="about-hero__panel-depth about-hero__panel-depth--near"
          aria-hidden="true"
          initial={{ x: -34, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.05, ease: easeOut, delay: 0.1 }}
          style={{ x: panelX, y: panelY }}
        />
        <motion.div
          className="about-hero__panel-depth about-hero__panel-depth--mid"
          aria-hidden="true"
          initial={{ x: -22, y: 16, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.05, ease: easeOut, delay: 0.2 }}
        />
        <motion.div
          className="about-hero__panel-depth about-hero__panel-depth--low"
          aria-hidden="true"
          initial={{ x: -38, y: 22, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.05, ease: easeOut, delay: 0.28 }}
        />

        <motion.div className="about-hero__edge about-hero__edge--one" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.72, ease: easeOut, delay: 1.15 }} />
        <motion.div className="about-hero__edge about-hero__edge--two" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.72, ease: easeOut, delay: 1.25 }} />
        <motion.div className="about-hero__edge about-hero__edge--three" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.72, ease: easeOut, delay: 1.35 }} />

        <motion.header className="about-hero__content" initial="hidden" animate="visible" variants={revealGroup}>
          <motion.div variants={reveal} className="about-hero__marker">
            <p>ABOUT US</p>
            <span aria-hidden="true">
              <b>////</b>
              <i />
              <em />
              <em />
            </span>
          </motion.div>

          <div className="about-hero__copy-frame">
            <span className="about-hero__vertical-line" aria-hidden="true" />
            <h1 id="about-hero-title" className="about-hero__title">
              {headlineLines.map((line) => (
                <span key={line.text} className="about-hero__title-mask">
                  <motion.span variants={lineReveal} className={line.accent ? 'about-hero__title-accent' : undefined}>
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p variants={reveal} className="about-hero__statement">
              INOMNIA is a future-forward creative studio based in Dubai, creating high-impact events, exhibitions and brand
              experiences across the UAE and beyond.
            </motion.p>
          </div>
        </motion.header>
      </section>

      <section className="bg-[#02060B] py-16 px-6 md:px-12 flex justify-center items-center">
        <div className="w-full max-w-[1100px] mx-auto relative flex flex-col lg:block">
          
          {/* Top Left Text Block */}
          <div className="relative lg:absolute lg:top-0 lg:left-0 z-10 w-full lg:max-w-[300px] mb-8 lg:mb-0 select-text">
            <p className="text-[12px] uppercase tracking-[0.30em] text-[#7c8493] font-bold mb-3">
              THE INOMNIA DNA
            </p>
            <h2 className="font-display font-black uppercase text-white leading-[0.92] text-[28px] md:text-[36px] lg:text-[40px] mb-4">
              CREATIVITY ISN'T<br />
              A DEPARTMENT.<br />
              <span className="text-[#7c8493]">IT'S HOW WE THINK.</span>
            </h2>
            <div className="h-[1.5px] w-12 bg-[#7c8493] mb-4" />
            <p className="text-[14px] leading-[1.68] text-white/68 font-light">
              From the first spark of an idea to the final moment on the floor, our process is built to create experiences that move people and brands forward.
            </p>
          </div>

          {/* Annotation: 01 STRATEGY — right side of THINK */}
          <div className="hidden lg:flex flex-col absolute top-[22%] left-[48%] z-10 w-[210px] select-text">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[#7c8493] font-mono text-[11px] font-bold">01</span>
              <span className="text-[#7c8493] font-mono text-[11px]">///</span>
              <span className="text-white text-[11px] font-bold uppercase tracking-widest">STRATEGY</span>
            </div>
            <p className="text-[12px] leading-[1.65] text-white/85 font-light border-l border-[#7c8493]/30 pl-3">
              We dig deep to understand your goals, audience and brand to build the right experience, for the right impact.
            </p>
          </div>

          {/* Annotation: 02 CREATIVE — upper right (beside IMAGINE) */}
          <div className="hidden lg:flex flex-col absolute top-[28%] right-[-4%] z-10 w-[210px] select-text">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[#7c8493] font-mono text-[11px] font-bold">02</span>
              <span className="text-[#7c8493] font-mono text-[11px]">///</span>
              <span className="text-white text-[11px] font-bold uppercase tracking-widest">CREATIVE</span>
            </div>
            <p className="text-[12px] leading-[1.65] text-white/85 font-light border-l border-[#7c8493]/30 pl-3">
              Ideas that are bold, unexpected and crafted to spark emotion and start conversations.
            </p>
          </div>

          {/* Annotation: 03 PRODUCTION — bottom left (beside BUILD) */}
          <div className="hidden lg:flex flex-col absolute bottom-[8%] left-[34%] z-10 w-[210px] select-text">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[#7c8493] font-mono text-[11px] font-bold">03</span>
              <span className="text-[#7c8493] font-mono text-[11px]">///</span>
              <span className="text-white text-[11px] font-bold uppercase tracking-widest">PRODUCTION</span>
            </div>
            <p className="text-[12px] leading-[1.65] text-white/85 font-light border-l border-[#7c8493]/30 pl-3">
              Flawless execution powered by the best people, premium technology and meticulous attention to every detail.
            </p>
          </div>

          {/* Annotation: 04 EXPERIENCE — lower right (beside WOW) */}
          <div className="hidden lg:flex flex-col absolute bottom-[5%] right-[20%] z-10 w-[210px] select-text">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[#7c8493] font-mono text-[11px] font-bold">04</span>
              <span className="text-[#7c8493] font-mono text-[11px]">///</span>
              <span className="text-white text-[11px] font-bold uppercase tracking-widest">EXPERIENCE</span>
            </div>
            <p className="text-[12px] leading-[1.65] text-white/85 font-light border-l border-[#7c8493]/30 pl-3">
              Moments that live on long after the lights go down. That's the INOMNIA promise.
            </p>
          </div>

          {/* Image */}
          <div className="w-full select-none">
            <picture>
              <source 
                media="(min-width: 1200px)" 
                srcSet="https://res.cloudinary.com/snos9tuz/image/upload/f_auto,q_auto,w_1800/ChatGPT_Image_Aug_26_2026_05_17_08_PM" 
              />
              <source 
                media="(min-width: 768px)" 
                srcSet="https://res.cloudinary.com/snos9tuz/image/upload/f_auto,q_auto,w_1200/ChatGPT_Image_Aug_26_2026_05_17_08_PM" 
              />
              <img 
                src="https://res.cloudinary.com/snos9tuz/image/upload/f_auto,q_auto,w_800/ChatGPT_Image_Aug_26_2026_05_17_08_PM" 
                alt="INOMNIA creative process"
                className="w-full h-auto object-contain mix-blend-screen filter brightness-[1.05]"
                loading="lazy"
              />
            </picture>
          </div>

          {/* Mobile-only stacked annotations */}
          <div className="lg:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { num: '01', label: 'STRATEGY', text: 'We dig deep to understand your goals, audience and brand to build the right experience, for the right impact.' },
              { num: '02', label: 'CREATIVE', text: 'Ideas that are bold, unexpected and crafted to spark emotion and start conversations.' },
              { num: '03', label: 'PRODUCTION & TECHNOLOGY', text: 'Flawless execution powered by the best people, premium technology and meticulous attention to every detail.' },
              { num: '04', label: 'EXPERIENCE', text: 'Moments that live on long after the lights go down. That\'s the INOMNIA promise.' },
            ].map((ann) => (
              <div key={ann.num} className="flex flex-col border-l border-[#7c8493]/30 pl-4 py-1">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[#7c8493] font-mono text-[11px] font-bold">{ann.num}</span>
                  <span className="text-[#7c8493] font-mono text-[11px]">///</span>
                  <span className="text-white text-[11px] font-bold uppercase tracking-widest">{ann.label}</span>
                </div>
                <p className="text-[13px] leading-[1.65] text-white/60 font-light">{ann.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <OurPhilosophy />
      <OurPurpose />
      <CTA />
      <Footer />
    </main>
  );
}
