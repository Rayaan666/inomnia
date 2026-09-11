import { ClipboardList, Lightbulb, MessageCircle, Settings, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1];

const processSteps = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'WE LISTEN',
    description: 'We understand your vision, objectives and audience to uncover insights that shape extraordinary experiences.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'IMAGINE',
    subtitle: 'WE CONCEPTUALIZE',
    description: 'Our creative studio crafts innovative concepts that blend storytelling, design and technology to spark emotions.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'WE PLAN',
    description: 'From technical planning to logistics and permits, we map every element with precision and purpose.',
    icon: ClipboardList,
  },
  {
    number: '04',
    title: 'PRODUCE',
    subtitle: 'WE BUILD',
    description: 'Our expert team brings the design to life with flawless execution, cutting-edge technology and meticulous detail.',
    icon: Settings,
  },
  {
    number: '05',
    title: 'DELIVER',
    subtitle: 'WE WOW',
    description: 'The final experience that exceeds expectations, creates lasting memories and drives measurable impact.',
    icon: Star,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: easeOut } },
};

function InomniaMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M32 4 56 18v28L32 60 8 46V18L32 4Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M32 12 49 22v20L32 52 15 42V22L32 12Z" stroke="currentColor" strokeWidth="1.35" />
      <path d="M32 19 43 25.5v13L32 45 21 38.5v-13L32 19Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M32 4v56M8 18l48 28M56 18 8 46" stroke="currentColor" strokeWidth=".9" opacity=".7" />
    </svg>
  );
}

function TechnicalDivider() {
  return (
    <motion.div variants={reveal} className="process-tech-divider" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <span />
      <b />
      <b />
    </motion.div>
  );
}

function GeometricDecoration() {
  return (
    <motion.svg
      className="process-geo"
      viewBox="0 0 520 330"
      fill="none"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 1.1, ease: easeOut, delay: 0.35 }}
    >
      <defs>
        <filter id="processGeoGlow" x="250" y="105" width="92" height="92" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d="M98 64 183 15l85 49v98l-85 49-85-49V64Z"
        stroke="rgba(124,132,147,.28)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: easeOut, delay: 0.42 }}
      />
      <motion.path
        d="M268 -12v174l90 52 90-52V-12M183 15v196M98 64l170 98M268 64 98 162M358 214 268 162"
        stroke="rgba(124,132,147,.22)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: easeOut, delay: 0.55 }}
      />
      <motion.path
        d="M342 17 448 -45M270 162 445 265M270 162 520 20"
        stroke="rgba(124,132,147,.22)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.55, ease: easeOut, delay: 0.68 }}
      />
      <circle cx="270" cy="162" r="5" fill="#02060b" filter="url(#processGeoGlow)" />
    </motion.svg>
  );
}

function ProcessHeader() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className="process-header"
    >
      <div className="process-heading-zone">
        <motion.p variants={reveal} className="process-eyebrow mb-6">
          OUR PROCESS
        </motion.p>
        <motion.h2 variants={reveal} className="process-heading">
          <span>FROM DREAM</span>
          <span>
            TO <strong>REALITY</strong>
          </span>
        </motion.h2>
        <motion.div variants={reveal} className="process-handwriting" aria-hidden="true">
          <span>Ideas.</span>
          <span>Passion.</span>
          <span>Perfection.</span>
        </motion.div>
        <TechnicalDivider />
      </div>

      <motion.p variants={reveal} className="process-statement">
        A seamless journey where creativity meets strategy, and every detail is designed to{' '}
        <strong>inspire, engage</strong> and create a <strong>lasting impact.</strong>
      </motion.p>

      <GeometricDecoration />
    </motion.header>
  );
}

function EnergyFlow() {
  return (
    <svg className="process-energy process-energy-horizontal" viewBox="0 0 1500 230" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="processEnergyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#02060b" stopOpacity=".02" />
          <stop offset="18%" stopColor="#02060b" stopOpacity=".22" />
          <stop offset="50%" stopColor="#7c8493" stopOpacity=".34" />
          <stop offset="82%" stopColor="#02060b" stopOpacity=".22" />
          <stop offset="100%" stopColor="#02060b" stopOpacity=".02" />
        </linearGradient>
        <filter id="processEnergyGlow" x="-8%" y="-60%" width="116%" height="220%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {[0, 1, 2, 3, 4, 5, 6].map((line) => (
        <motion.path
          key={line}
          d={`M -30 ${112 + line * 5} C 130 ${77 - line * 4}, 220 ${143 + line * 3}, 342 ${112 - line * 2} S 560 ${86 + line * 5}, 710 ${112 + line * 3} S 935 ${140 - line * 5}, 1085 ${112 - line * 2} S 1302 ${78 + line * 6}, 1530 ${112 + line * 2}`}
          fill="none"
          stroke="url(#processEnergyGradient)"
          strokeWidth={line === 3 ? 1.35 : 0.75}
          strokeDasharray={line === 3 ? '34 24' : '6 18'}
          filter={line === 3 ? 'url(#processEnergyGlow)' : undefined}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: line === 3 ? 0.62 : 0.34 }}
          viewport={{ once: true, amount: 0.4 }}
          animate={{ strokeDashoffset: [0, -80] }}
          transition={{
            pathLength: { duration: 2.2, ease: easeOut, delay: 0.55 + line * 0.06 },
            opacity: { duration: 0.8, delay: 0.5 },
            strokeDashoffset: { duration: 16 + line * 1.6, repeat: Infinity, ease: 'linear' },
          }}
        />
      ))}
      {[78, 188, 348, 512, 684, 828, 1008, 1165, 1320, 1436].map((x, index) => (
        <motion.circle
          key={x}
          cx={x}
          cy={index % 2 ? 91 : 135}
          r={index % 4 === 0 ? 2.1 : 1.15}
          fill="#02060b"
          animate={{ opacity: [0, 0.75, 0], x: [0, 38, 72] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: 'linear', delay: index * 0.3 }}
        />
      ))}
    </svg>
  );
}

function VerticalEnergyFlow() {
  return (
    <svg className="process-energy process-energy-vertical" viewBox="0 0 140 980" preserveAspectRatio="none" aria-hidden="true">
      {[0, 1, 2, 3].map((line) => (
        <motion.path
          key={line}
          d={`M ${64 + line * 4} -20 C ${88 - line * 8} 150, ${44 + line * 5} 255, ${70 - line * 3} 410 S ${96 - line * 7} 680, ${68 + line * 2} 1000`}
          fill="none"
          stroke="#02060b"
          strokeWidth={line === 1 ? 1.35 : 0.8}
          strokeOpacity={line === 1 ? 0.35 : 0.18}
          strokeDasharray={line === 1 ? '28 22' : '5 18'}
          animate={{ strokeDashoffset: [0, -80] }}
          transition={{ duration: 15 + line * 2, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </svg>
  );
}

function ProcessConnector({ index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.74 }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: easeOut, delay: 0.82 + index * 0.16 }}
      className="process-connector"
      aria-hidden="true"
    >
      <motion.span animate={{ x: [0, 2, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
        &raquo;
      </motion.span>
    </motion.div>
  );
}

function ProcessRing({ delay }) {
  return (
    <div className="process-node-ring" aria-hidden="true">
      <span className="process-ring-dotted" />
      <span className="process-ring-soft" />
      <svg className="process-ring-arc" viewBox="0 0 170 170" fill="none">
        <motion.circle
          cx="85"
          cy="85"
          r="72"
          pathLength="1"
          stroke="#02060b"
          strokeWidth="7"
          strokeLinecap="butt"
          strokeDasharray=".24 .76"
          initial={{ strokeDashoffset: 0.24, opacity: 0 }}
          whileInView={{ strokeDashoffset: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9, ease: easeOut, delay }}
        />
      </svg>
      <span className="process-ring-halo" />
    </div>
  );
}

function ProcessNode({ step, index }) {
  const Icon = step.icon;
  const delay = 0.36 + index * 0.16;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{ duration: 0.72, ease: easeOut, delay }}
      className="process-step group"
    >
      <div className="process-step-number">
        <span>{step.number}</span>
        <i />
      </div>

      <div className="process-node">
        <ProcessRing delay={delay + 0.18} />
        <motion.div className="process-node-core" whileHover={{ scale: 1.012 }} transition={{ duration: 0.35, ease: easeOut }}>
          <Icon className="process-node-icon" strokeWidth={1.75} />
        </motion.div>
        <span className="process-node-particle process-node-particle-a" />
        <span className="process-node-particle process-node-particle-b" />
      </div>

      <div className="process-step-copy">
        <h3>{step.title}</h3>
        <p>{step.subtitle}</p>
        <span />
        <small>{step.description}</small>
      </div>
    </motion.article>
  );
}

function ProcessJourney() {
  return (
    <div className="process-journey">
      <EnergyFlow />
      <VerticalEnergyFlow />
      <div className="process-steps">
        {processSteps.map((step, index) => (
          <div key={step.title} className="process-step-slot">
            <ProcessNode step={step} index={index} />
            {index < processSteps.length - 1 && <ProcessConnector index={index} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessQuote() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.82, ease: easeOut, delay: 0.22 }}
      className="process-quote"
    >
      <svg className="process-quote-frame" viewBox="0 0 1540 180" preserveAspectRatio="none" aria-hidden="true">
        <path d="M286 20H1254L1320 90 1254 160H286L220 90 286 20Z" fill="none" stroke="rgba(124,132,147,.28)" strokeWidth="1" />
        <path d="M0 106H188L220 76M1540 106H1352L1320 76M20 136H160L198 102M1520 136H1380L1342 102" stroke="rgba(124,132,147,.36)" strokeWidth="1" />
        <path d="M300 14H382M1158 14H1240M405 166H725M815 166H1135" stroke="rgba(124,132,147,.28)" strokeWidth="1" />
        <path d="M755 166H785M1160 166H1170M1180 166H1190M350 166H360M370 166H380" stroke="rgba(124,132,147,.38)" strokeWidth="1" />
        <circle cx="52" cy="106" r="4" fill="#7c8493" />
        <circle cx="1488" cy="106" r="4" fill="#7c8493" />
      </svg>
      <div className="process-quote-copy">
        <span className="process-quote-mark">&ldquo;</span>
        <div>
          <p>WE DON'T JUST EXECUTE EVENTS.</p>
          <strong>WE CREATE MOMENTS THAT LIVE FOREVER.</strong>
        </div>
        <span className="process-quote-mark">&rdquo;</span>
      </div>
    </motion.footer>
  );
}

export default function DreamToReality() {
  return (
    <section id="process" className="process-section">
      <div className="process-shell">
        <ProcessHeader />
        <ProcessJourney />
        <ProcessQuote />
      </div>
    </section>
  );
}
