import { useState } from 'react';
import { ArrowUpRight, Award, Gem, Globe2, UsersRound, Sparkles, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1];

const headline = [
  { text: 'WE CREATE', accent: false },
  { text: 'EXPERIENCES', accent: false },
  { text: 'THAT MATTER.', accent: true },
];

const cards = [
  {
    id: '01',
    title: 'GRAND ARENA STAGE',
    category: 'Corporate Keynotes & Galas',
    tag: 'PRODUCTION',
    src: '/images/who-stage.png',
    alt: 'Illuminated corporate conference stage with audience and large LED screens.',
  },
  {
    id: '02',
    title: 'FUTURISTIC PAVILION',
    category: 'Bespoke Brand Architecture',
    tag: 'EXHIBITIONS',
    src: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_26_2026_10_41_14_AM',
    alt: 'Futuristic exhibition booth with LED architecture and attendees.',
  },
  {
    id: '03',
    title: 'IMMERSIVE SENSORY ART',
    category: 'Digital Installations & AI',
    tag: 'TECHNOLOGY',
    src: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_45_39_PM',
    alt: 'Immersive digital art installation with a luminous human face.',
  },
  {
    id: '04',
    title: 'SIGNATURE LIVE PERFORMANCE',
    category: 'Atmospheric Entertainment',
    tag: 'EXPERIENCE',
    src: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_45_56_PM',
    alt: 'Premium contemporary stage performance under spotlights.',
  },
];

const stats = [
  {
    icon: Award,
    primary: '15+',
    label: 'YEARS',
    caption: 'OF EXPERIENCE',
  },
  {
    icon: UsersRound,
    primary: 'HIGH-IMPACT',
    label: 'EVENTS',
    caption: 'CRAFTED WITH PURPOSE',
    qualitative: true,
  },
  {
    icon: Globe2,
    primary: 'GLOBAL',
    label: 'REACH',
    caption: 'BUILT FROM DUBAI',
    qualitative: true,
  },
  {
    icon: Gem,
    primary: 'ONE',
    label: 'PASSION',
    caption: 'FOR PERFECTION',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export default function WhoWeAre() {
  const [hoveredCard, setHoveredCard] = useState(0);

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white text-[#02060B] selection:bg-[#7c8493] selection:text-white"
    >
      {/* Subtle ambient lighting keeping pure white cleanliness */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 right-1/4 h-[420px] w-[420px] rounded-full bg-slate-100/60 blur-[120px]" />
        <div className="absolute bottom-10 left-10 h-[380px] w-[380px] rounded-full bg-slate-100/70 blur-[100px]" />
        {/* Subtle architectural dot matrix */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#02060B 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1840px] px-6 py-14 sm:px-10 md:px-12 lg:px-[58px] lg:py-16">
        
        {/* 1. Top Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200/90 pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#02060B]" />
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#02060B]">
              DISCOVER INOMNIA
            </span>
            <span className="text-[#02060B]">/</span>
            <span className="text-[12px] font-extrabold uppercase tracking-[0.24em] text-[#02060B]">
              WHO WE ARE
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
            <Sparkles className="h-3.5 w-3.5 text-[#7c8493]" />
            DUBAI • GLOBAL DESTINATIONS
          </div>
        </motion.div>

        {/* 2. Editorial Top Block: Monumental Headline + Two-Column Narrative & CTA */}
        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-14">
          
          {/* Left: Giant Monolithic Headline (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-[clamp(3.8rem,6.8vw,7.4rem)] font-black uppercase leading-[0.85] tracking-tight">
              {headline.map((line) => (
                <span
                  key={line.text}
                  className={`block ${
                    line.accent
                      ? 'text-[#7c8493]'
                      : 'text-[#02060B]'
                  }`}
                >
                  {line.text}
                </span>
              ))}
            </h2>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-1 w-14 rounded-full bg-[#7c8493]" />
              <span className="h-px w-28 bg-neutral-200" />
            </div>

            <p className="mt-6 text-[18px] font-semibold leading-snug text-[#02060B] md:text-[21px]">
              Headquartered in Dubai, <strong className="font-extrabold text-[#02060B]">Inomnia</strong> is a future-forward{' '}
              <strong className="font-extrabold text-[#02060B]">creative studio</strong> shaping experiences that leave a lasting impact.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="/about"
                className="group inline-flex items-center gap-4 rounded-full border border-[#02060B]/15 bg-[#02060B] px-8 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.2em] text-white shadow-[0_10px_25px_rgba(2,6,11,0.14)] transition-all duration-300 hover:border-[#7c8493] hover:bg-[#7c8493] hover:shadow-[0_12px_30px_rgba(124,132,147,0.3)]"
              >
                <span>OUR STORY</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:bg-white group-hover:text-[#7c8493]">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: Editorial Narrative Paragraphs (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:col-span-7"
          >
            <div className="space-y-4 rounded-2xl border border-neutral-200/80 bg-slate-50/50 p-6 text-[15px] leading-relaxed text-neutral-600 md:text-[16px]">
              <p>
                With over <strong className="font-extrabold text-[#02060B]">15 years</strong> of expertise in delivering high-impact
                events, exhibitions, and brand experiences, we stand at the intersection of strategy, storytelling, and innovation.
                Our work goes beyond execution - we design moments that captivate audiences, communicate purpose, and drive results.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-neutral-200/80 bg-slate-50/50 p-6 text-[15px] leading-relaxed text-neutral-600 md:text-[16px]">
              <p>
                Powered by a multidisciplinary team of artists, designers, strategists, and technologists, we transform ideas into
                immersive environments that inform, engage, and convert. From concept to creation, every detail is{' '}
                <strong className="font-extrabold text-[#02060B]">intentional</strong>, every experience -{' '}
                <strong className="font-extrabold text-[#02060B]">meaningful.</strong>
              </p>
              <p className="border-t border-neutral-200/70 pt-3 text-[14px] text-neutral-500">
                We continuously push boundaries to challenge the status quo, creating signature environments where brand values align seamlessly with architectural beauty and cutting-edge digital integrations.
              </p>
            </div>
          </motion.div>

        </div>

        {/* 3. Showcase Gallery Cards - Fixed proportional height (240px) with zero wasted space */}
        <div className="mt-10 lg:mt-12">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-neutral-400">
              FEATURED DISCIPLINE SHOWCASE
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7c8493]">
              04 PORTFOLIO FRAGMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {cards.map((card, idx) => {
              const isHovered = hoveredCard === idx;
              return (
                <motion.div
                  key={card.id}
                  onMouseEnter={() => setHoveredCard(idx)}
                  className={`group relative h-[240px] w-full overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isHovered
                      ? 'border-[#7c8493] shadow-[0_12px_35px_rgba(124,132,147,0.2)]'
                      : 'border-neutral-200/90 hover:border-neutral-400'
                  }`}
                >
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02060B]/90 via-[#02060B]/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="rounded-md border border-white/20 bg-black/40 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      {card.tag}
                    </span>
                    <span className="text-[11px] font-black tracking-wider text-white/80">
                      {card.id}
                    </span>
                  </div>

                  {/* Bottom Information */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c8493]">
                      {card.category}
                    </p>
                    <h3 className="mt-1 font-display text-[20px] font-black uppercase tracking-wider text-white">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4. Luxury Impact Stats Bar - Sits right below the cards with zero dead gap */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="mt-6 border-t border-neutral-200/80 pt-6 lg:mt-8 lg:pt-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={reveal}
                  className="group relative overflow-hidden rounded-xl border border-neutral-200/90 bg-slate-50/70 p-5 transition-all duration-300 hover:border-[#7c8493]/60 hover:bg-white hover:shadow-[0_12px_28px_rgba(124,132,147,0.08)]"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#02060B] shadow-sm border border-neutral-200/70 transition-colors duration-300 group-hover:bg-[#7c8493] group-hover:text-white group-hover:border-transparent">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-widest text-neutral-300 group-hover:text-[#7c8493]/50">
                      //
                    </span>
                  </div>

                  <p
                    className={`font-display font-black uppercase leading-none tracking-tight text-[#02060B] transition-colors duration-300 group-hover:text-[#7c8493] ${
                      stat.qualitative
                        ? 'text-[clamp(1.7rem,2.3vw,2.8rem)]'
                        : 'text-[clamp(2.3rem,3.2vw,3.8rem)]'
                    }`}
                  >
                    {stat.primary}
                  </p>

                  <p className="mt-2 text-[14px] font-extrabold uppercase tracking-[0.1em] text-[#02060B]">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    {stat.caption}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}


