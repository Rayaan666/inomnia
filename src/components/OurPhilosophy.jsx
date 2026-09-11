import { motion } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1];

const headline = [
  { text: "WE DON'T", blue: false },
  { text: 'FOLLOW', blue: false },
  { text: 'THE FORMULA.', blue: false },
  { text: 'WE CREATE', blue: false },
  { text: "WHAT'S NEXT.", blue: true },
];

const philosophyItems = [
  {
    number: '01',
    title: <>PURPOSE BEFORE<br />SPECTACLE.</>,
    copy: <>Every idea starts<br />with why.</>,
    icon: 'spark',
    className: 'philosophy-point--one',
  },
  {
    number: '02',
    title: <>CREATIVITY WITHOUT<br />LIMITS.</>,
    copy: <>Expected is<br />never enough.</>,
    icon: 'eye',
    className: 'philosophy-point--two',
  },
  {
    number: '03',
    title: <>DETAILS MAKE<br />THE DIFFERENCE.</>,
    copy: <>Because extraordinary<br />lives in the details.</>,
    icon: 'target',
    className: 'philosophy-point--three',
  },
];

function PhilosophyHeading({ variant = 'base' }) {
  return (
    <h2 id={variant === 'base' ? 'philosophy-title' : undefined} className={`philosophy-heading philosophy-heading--${variant}`} aria-hidden={variant !== 'base'}>
      {headline.map((line) => (
        <span key={line.text} className={line.blue ? 'is-blue' : undefined}>
          {line.text}
        </span>
      ))}
    </h2>
  );
}

function PointIcon({ type }) {
  if (type === 'eye') {
    return (
      <svg viewBox="0 0 58 58" aria-hidden="true">
        <circle cx="29" cy="29" r="27" />
        <path d="M12 29c5.8-8.2 11.5-12.2 17-12.2S40.2 20.8 46 29c-5.8 8.1-11.5 12.2-17 12.2S17.8 37.1 12 29Z" />
        <circle cx="29" cy="29" r="6.2" />
        <circle cx="29" cy="29" r="2.2" className="is-filled" />
      </svg>
    );
  }

  if (type === 'target') {
    return (
      <svg viewBox="0 0 58 58" aria-hidden="true">
        <circle cx="29" cy="29" r="27" />
        <circle cx="29" cy="29" r="11" />
        <circle cx="29" cy="29" r="3.4" className="is-filled" />
        <path d="M29 9v11M29 38v11M9 29h11M38 29h11" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 58 58" aria-hidden="true">
      <circle cx="29" cy="29" r="27" />
      <path d="M29 11v36M11 29h36M16.3 16.3l25.4 25.4M41.7 16.3 16.3 41.7" />
      <circle cx="29" cy="29" r="4" className="is-filled" />
    </svg>
  );
}

function PhilosophyPoint({ item, index }) {
  return (
    <motion.article
      className={`philosophy-point ${item.className}`}
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.72, ease: easeOut, delay: 0.16 + index * 0.08 }}
    >
      <span className="philosophy-point__line" aria-hidden="true" />
      <span className="philosophy-point__node" aria-hidden="true" />
      <span className="philosophy-point__icon">
        <PointIcon type={item.icon} />
      </span>
      <div>
        <p className="philosophy-point__number">{item.number}</p>
        <h3>{item.title}</h3>
        <p className="philosophy-point__copy">{item.copy}</p>
      </div>
    </motion.article>
  );
}

function Portal() {
  return (
    <motion.div
      className="philosophy-portal"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.95, ease: easeOut, delay: 0.24 }}
    >
      <div className="philosophy-portal__rim" />
      <div className="philosophy-portal__core">
        <PhilosophyHeading variant="inside" />
        <span className="philosophy-portal__flare philosophy-portal__flare--left" />
        <span className="philosophy-portal__flare philosophy-portal__flare--bottom" />
        <span className="philosophy-portal__grid" />
        <span className="philosophy-portal__reticle" />
      </div>
    </motion.div>
  );
}

function TechnicalField() {
  return (
    <svg className="philosophy-tech" viewBox="0 0 1600 980" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id="philosophy-grid" width="52" height="52" patternUnits="userSpaceOnUse">
          <path d="M52 0H0V52" fill="none" stroke="#02060b" strokeOpacity="0.045" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1600" height="980" fill="url(#philosophy-grid)" />
      <path d="M19 192v58M86 769h66M999 52v52M1003 279l193-98h92M1003 462l112-49h106M960 587l137 54h118" />
      <path className="is-blue" d="M9 752l24-72M38 753l18-79M1450 422h15l-7.5-13Z M1452 476h15l-7.5-13Z M1452 532h15l-7.5-13Z" />
      <circle cx="23" cy="272" r="13" />
      <path d="M23 243v58M0 272h47" />
      {[70, 88, 111].map((cy) => <circle key={cy} cx="27" cy={cy} r="2.1" className={cy === 111 ? 'is-dark-fill' : 'is-blue-fill'} />)}
      {[62, 80, 101, 121].map((cy) => <circle key={cy} cx="1512" cy={cy} r="2.4" className={cy > 80 ? 'is-dark-fill' : ''} />)}
      {Array.from({ length: 34 }).map((_, index) => (
        <circle
          key={index}
          cx={650 + (index * 37) % 400}
          cy={70 + (index * 53) % 560}
          r={(index % 3) + 0.7}
          className={index % 4 === 0 ? 'is-blue-fill' : ''}
        />
      ))}
    </svg>
  );
}

export default function OurPhilosophy() {
  return (
    <section id="philosophy" className="philosophy-section" aria-labelledby="philosophy-title">
      <TechnicalField />
      <motion.div
        className="philosophy-shell"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.p
          className="philosophy-kicker"
          variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } } }}
        >
          OUR PHILOSOPHY <span>/ 03</span>
        </motion.p>

        <motion.div
          className="philosophy-headline-wrap"
          variants={{ hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: 0.78, ease: easeOut } } }}
        >
          <PhilosophyHeading />
          <motion.svg
            className="philosophy-scribble"
            viewBox="0 0 560 105"
            aria-hidden="true"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.54 }}
          >
            <motion.path d="M4 77C102 57 216 47 332 32c68-9 135-17 222-27M9 87c144-22 272-39 430-48M24 96c101-13 211-19 340-34" />
          </motion.svg>
        </motion.div>

        <Portal />

        <motion.div
          className="philosophy-handnote"
          initial={{ opacity: 0, y: 14, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -8 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.72, ease: easeOut, delay: 0.62 }}
          aria-hidden="true"
        >
          <span>Imagination</span>
          <span>in Action</span>
          <svg viewBox="0 0 96 128">
            <path d="M63 5C42 37 39 72 58 108" />
            <path d="M47 96l12 15 4-19" />
          </svg>
        </motion.div>

        <p className="philosophy-expect">EXPECT<br />THE UNEXPECTED.<br />ALWAYS.</p>
        <p className="philosophy-coordinates">25.2048&deg; N<br />55.2708&deg; E</p>

        <div className="philosophy-points">
          {philosophyItems.map((item, index) => (
            <PhilosophyPoint key={item.number} item={item} index={index} />
          ))}
        </div>

        <div className="philosophy-left-micro">
          <span />
          <p>BUILT DIFFERENT.<br />DELIVERED UNFORGETTABLE.</p>
          <i />
        </div>
      </motion.div>

    </section>
  );
}
