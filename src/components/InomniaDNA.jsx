import { motion, useScroll, useTransform } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1];

const annotations = [
  ['strategy', '01', 'STRATEGY', 'We dig deep to understand your goals, audience and brand to build the right experience, for the right impact.'],
  ['creative', '02', 'CREATIVE', 'Ideas that are bold, unexpected and crafted to spark emotion and start conversations.'],
  ['production', '03', <>PRODUCTION<br />& TECHNOLOGY</>, 'Flawless execution powered by the best people, premium technology and meticulous attention to every detail.'],
  ['experience', '04', 'EXPERIENCE', "Moments that live on long after the lights go down. That's the INOMNIA promise."],
];

const windows = [
  ['think', '/images/dna-planning.png', 'Hands reviewing event sketches, production layouts and moodboards.', [-8, 8]],
  ['imagine', '/images/service-events.png', 'Premium event stage with LED screens, lighting and guests.', [10, -6]],
  ['build', '/images/dna-build-production.png', 'Behind-the-scenes event technology and production setup.', [8, -8]],
  ['wow', '/images/who-stage.png', 'Audience experiencing a dramatic live event stage moment.', [-10, 6]],
];

function Annotation({ item }) {
  const [key, number, title, copy] = item;
  return (
    <motion.div className={`dna-note dna-note--${key}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.7, ease: easeOut, delay: 0.55 }}>
      <p><span>{number}</span><b>///</b></p>
      <h3>{title}</h3>
      <small>{copy}</small>
    </motion.div>
  );
}

function PhotoWindow({ item, progress }) {
  const [key, src, alt, range] = item;
  const y = useTransform(progress, [0, 1], range);
  return (
    <motion.figure className={`dna-photo dna-photo--${key}`} style={{ y }} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.28 }} transition={{ duration: 0.82, ease: easeOut, delay: 0.48 }}>
      <img src={src} alt={alt} loading="lazy" />
    </motion.figure>
  );
}

function Blueprint() {
  const paths = [
    ['M495 303 L642 436 L690 575 L625 910', 'rgba(255,255,255,.62)', 0.75],
    ['M506 288 L662 438 L915 198 L1184 312 L1030 682 L895 595', '#7c8493', 0.82],
    ['M232 748 L359 700 L638 625', 'rgba(255,255,255,.62)', 0.92],
    ['M274 900 L332 704 L472 540', '#7c8493', 1],
    ['M846 377 L1074 595 L1244 661', '#7c8493', 1.08],
  ];
  const nodes = [
    ['blue', 492, 302, 9], ['white', 353, 705, 9], ['blue', 662, 438, 8], ['white', 608, 610, 8],
    ['blue', 865, 590, 9], ['blue', 953, 470, 7], ['blue', 1166, 303, 9], ['white', 923, 690, 7],
  ];
  return (
    <motion.svg className="dna-blueprint" viewBox="0 0 1440 980" fill="none" aria-hidden="true" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.28 }}>
      {paths.map(([d, stroke, delay]) => (
        <motion.path key={d} d={d} stroke={stroke} strokeWidth="1" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }} transition={{ duration: 1.05, ease: easeOut, delay }} />
      ))}
      {nodes.map(([tone, cx, cy, r], index) => (
        <motion.g key={`${cx}-${cy}`} variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }} transition={{ duration: 0.38, ease: easeOut, delay: 1.05 + index * 0.05 }} style={{ transformOrigin: `${cx}px ${cy}px` }}>
          <circle cx={cx} cy={cy} r={r + 7} stroke={tone === 'blue' ? '#7c8493' : 'rgba(255,255,255,.45)'} opacity=".22" />
          <circle cx={cx} cy={cy} r={r} fill={tone === 'blue' ? '#7c8493' : '#FFFFFF'} />
        </motion.g>
      ))}
    </motion.svg>
  );
}

export default function InomniaDna() {
  const { scrollYProgress } = useScroll();
  const thinkY = useTransform(scrollYProgress, [0, 1], [8, -15]);
  const imagineY = useTransform(scrollYProgress, [0, 1], [-6, 15]);
  const buildX = useTransform(scrollYProgress, [0, 1], [-4, 10]);
  const wowX = useTransform(scrollYProgress, [0, 1], [8, -10]);

  return (
    <section className="dna-section" aria-labelledby="dna-heading">
      <Blueprint />
      <div className="dna-tech dna-tech--cross" aria-hidden="true" />
      <div className="dna-tech dna-tech--dots" aria-hidden="true"><i /><i /><i /></div>
      <p className="dna-process-label">OUR PROCESS</p>
      <motion.header className="dna-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
        <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } } }}>THE INOMNIA DNA</motion.p>
        <h2 id="dna-heading">
          {["CREATIVITY ISN'T", 'A DEPARTMENT.', "IT'S HOW WE THINK."].map((line, index) => (
            <span key={line} className={index === 2 ? 'is-blue' : undefined}><motion.span variants={{ hidden: { y: 48, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.72, ease: easeOut } } }}>{line}</motion.span></span>
          ))}
        </h2>
        <motion.div className="dna-intro-line" variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.58, ease: easeOut, delay: 0.15 } } }} />
        <motion.p className="dna-intro-copy" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: easeOut, delay: 0.15 } } }}>
          From the first spark of an idea to the final moment on the floor, our process is built to create experiences that move people and brands forward.
        </motion.p>
        <motion.div className="dna-slashes" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.45, delay: 0.3 } } }} aria-hidden="true">
          {Array.from({ length: 8 }).map((_, index) => <i key={index} />)}
        </motion.div>
      </motion.header>
      <motion.p className="dna-word dna-word--think" style={{ y: thinkY }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.72, ease: easeOut, delay: 0.22 }}>THINK.</motion.p>
      <motion.p className="dna-word dna-word--imagine" style={{ y: imagineY }} initial={{ opacity: 0, x: 46 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.76, ease: easeOut, delay: 0.28 }}>IMAGINE.</motion.p>
      {windows.map((item) => <PhotoWindow key={item[0]} item={item} progress={scrollYProgress} />)}
      {annotations.map((item) => <Annotation key={item[0]} item={item} />)}
      <motion.div className="dna-inomnia-mask" aria-hidden="true" initial={{ clipPath: 'inset(0 100% 0 0)' }} whileInView={{ clipPath: 'inset(0 0% 0 0)' }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.92, ease: easeOut, delay: 0.48 }}>INOMNIA</motion.div>
      <motion.p className="dna-word dna-word--build" style={{ x: buildX }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.76, ease: easeOut, delay: 0.62 }}>BUILD.</motion.p>
      <motion.p className="dna-word dna-word--wow" style={{ x: wowX }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.76, ease: easeOut, delay: 0.72 }}>WOW.</motion.p>
      <motion.div className="dna-statement" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.72, ease: easeOut, delay: 0.95 }}>
        <span className="dna-statement__mark" aria-hidden="true"><i /></span>
        <p>THIS IS HOW IDEAS BECOME <strong>EXPERIENCES.</strong></p>
        <span className="dna-statement__slashes" aria-hidden="true">////</span>
      </motion.div>
    </section>
  );
}
