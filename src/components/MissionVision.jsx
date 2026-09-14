import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { UsersRound, Lightbulb, Gem as Diamond, Globe as Globe2, ChartColumnIncreasing as ChartNoAxesColumnIncreasing, Star } from 'lucide-react';
import './MissionVision.css';

const items = [
  { name: 'Mission', eyebrow: 'Our purpose', copy: 'To design and deliver exceptional events, exhibitions and immersive experiences that bring brands to life and create meaningful connections.', icons: [[UsersRound, 'People', 'first'], [Lightbulb, 'Ideas', 'in action'], [Diamond, 'Lasting', 'impact']], number: '01', footer: ['Create today', 'A brighter tomorrow'] },
  { name: 'Vision', eyebrow: 'A bolder tomorrow', copy: 'To be a leading creative partner in the region, recognized for transforming ideas into extraordinary experiences that inspire people and shape the future of brand engagement.', icons: [[Globe2, 'A more', 'connected world'], [ChartNoAxesColumnIncreasing, 'Redefining', 'possibilities'], [Star, 'Experiences', 'that endure']], number: '02', footer: ['Inspire people', 'Shape tomorrow'] },
];

export default function MissionVision() {
  const reduced = useReducedMotion();
  const sectionRef = useRef(null);
  // Observe the unclipped section: a fully clipped image has no intersection
  // and cannot trigger its own whileInView reveal in normal motion mode.
  const sectionVisible = useInView(sectionRef, { once: true, amount: 0.05 });
  const reveal = (delay = 0) => ({ initial: reduced ? false : { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.9, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] } });
  const panel = (item) => (
    <article className={`mv-panel mv-panel--${item.name.toLowerCase()}`} aria-labelledby={`mv-${item.name.toLowerCase()}`}>
      <motion.p className="mv-eyebrow" {...reveal()}>{item.eyebrow}<i aria-hidden="true" /></motion.p>
      <motion.h2 className="mv-heading" id={`mv-${item.name.toLowerCase()}`} {...reveal(0.08)}><span>Our</span><strong>{item.name}</strong></motion.h2>
      <motion.p className="mv-copy" {...reveal(0.15)}>{item.copy}</motion.p>
      <ul className="mv-values">{item.icons.map(([Icon, first, second], index) => <motion.li key={first} {...reveal(0.2 + index * 0.1)}><Icon size={34} strokeWidth={1} aria-hidden="true" /><span>{first}<br />{second}</span></motion.li>)}</ul>
      <motion.div className="mv-folio" {...reveal(0.25)}><span className="mv-number">{item.number}</span><i aria-hidden="true" /><span>{item.footer[0]}<br />{item.footer[1]}</span></motion.div>
    </article>
  );
  return (
    <section ref={sectionRef} id="purpose" className="mv-section" aria-label="Our mission and vision">
      {panel(items[0])}
      <motion.div className="mv-image" initial={reduced ? false : { clipPath: 'inset(0% 0% 100% 0%)' }} animate={{ clipPath: reduced || sectionVisible ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }} transition={{ duration: reduced ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}>
        {/* The central scene and its architectural lettering come directly from the supplied design reference. */}
        <img src="/images/mission-vision-reference.png" width="1728" height="910" alt="Exhibition visualization with towering charcoal panels, warm lighting, reflective flooring and visitors. Architectural lettering: Ideas into experiences; Spaces, stories, people." loading="eager" decoding="async" />
      </motion.div>
      {panel(items[1])}
      <motion.p className="mv-edge" aria-hidden="true" {...reveal(0.3)}>Imagination<br />Innovation<br />Impact</motion.p>
      <p className="mv-signature" aria-hidden="true">More than events<br />A brighter tomorrow</p>
    </section>
  );
}
