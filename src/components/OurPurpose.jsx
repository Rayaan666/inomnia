import { motion } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1];

const sections = [
  {
    roman: 'I',
    tag: 'OUR MISSION',
    subtitle: 'WHAT DRIVES US TODAY',
    title: 'MAKE EVERY MOMENT MATTER.',
    statement:
      'We exist to turn ideas into meaningful experiences that move people, build genuine connections, and leave a lasting impact. Every detail is crafted with intention—grounded in strategy, emotion, and flawless execution.',
    quote: 'Purpose is our today.',
    image: '/images/service-events.png',
    alt: 'INOMNIA live event stage and production design in Dubai',
  },
  {
    roman: 'II',
    tag: 'OUR VISION',
    subtitle: 'WHERE WE ARE HEADING TOMORROW',
    title: 'SHAPE WHAT EXPERIENCES BECOME.',
    statement:
      'We envision a world where experiences are more intentional, more immersive, and more unforgettable than ever before. We continuously challenge conventions to define what live environments, brand architecture, and human connection can achieve.',
    quote: 'Vision is our tomorrow.',
    image: '/images/who-installation.png',
    alt: 'INOMNIA immersive architectural installation in Dubai',
  },
];

export default function OurPurpose() {
  return (
    <section
      id="purpose"
      className="relative overflow-hidden bg-[#02060B] py-28 sm:py-36 px-6 sm:px-10 md:px-14 lg:px-20 text-white selection:bg-white/20 selection:text-white"
      aria-labelledby="purpose-heading"
    >
      {/* Subtle organic light bloom */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="absolute -top-32 left-1/3 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 h-[450px] w-[450px] rounded-full bg-slate-400/[0.02] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1780px]">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-16 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8"
        >
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-3">
              THE FOUNDATION
            </p>
            <h2
              id="purpose-heading"
              className="font-display text-[clamp(2.6rem,5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-tight text-white"
            >
              MISSION & VISION
            </h2>
          </div>
          <p className="text-[13px] sm:text-[14px] text-neutral-400 font-light tracking-wide max-w-sm sm:text-right">
            Two guiding principles shaping every environment, stage, and activation we design.
          </p>
        </motion.div>

        {/* 2-Column Luxury Diptych */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-stretch">
          {sections.map((item, index) => (
            <motion.article
              key={item.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: easeOut, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8 sm:p-12 transition-all duration-500 hover:border-white/20"
            >
              <div>
                {/* Top Label Bar */}
                <div className="flex items-baseline justify-between border-b border-white/[0.08] pb-6 mb-8">
                  <div>
                    <span className="text-[12px] font-extrabold tracking-[0.25em] text-white uppercase block">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-medium tracking-[0.18em] text-neutral-400 uppercase mt-1 block">
                      {item.subtitle}
                    </span>
                  </div>
                  <span className="font-serif text-[26px] sm:text-[32px] italic text-neutral-500 font-normal">
                    {item.roman}
                  </span>
                </div>

                {/* Monumental Headline */}
                <h3 className="font-display text-[clamp(2.5rem,4.2vw,4.6rem)] font-black uppercase leading-[0.9] tracking-tight text-white mb-6">
                  {item.title}
                </h3>

                {/* Narrative Statement */}
                <p className="text-[15px] sm:text-[17px] leading-[1.75] text-neutral-300 font-light mb-10 max-w-xl">
                  {item.statement}
                </p>

                {/* Cinematic Image Display */}
                <div className="relative h-[260px] sm:h-[340px] w-full overflow-hidden rounded-xl border border-white/[0.08] mb-8">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.88] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02060B]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Signature Credo Footer */}
              <div className="border-t border-white/[0.08] pt-6 flex items-center justify-between">
                <span className="font-serif text-[16px] sm:text-[18px] italic text-neutral-300">
                  "{item.quote}"
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-500">
                  INOMNIA
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
