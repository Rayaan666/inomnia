import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { UsersRound, Lightbulb, Settings, Gem, Handshake, ArrowRight } from 'lucide-react';
import './WhyChooseInomnia.css';

const reasons = [
  [UsersRound, 'Experience & expertise', 'Years of industry knowledge delivering exceptional events across the region.'],
  [Lightbulb, 'Creative excellence', 'Bold ideas and innovative concepts that bring brands to life.'],
  [Settings, 'Tailored solutions', 'Every experience is uniquely designed around your goals, brand and audience.'],
  [Gem, 'Technology integration', 'Cutting-edge experiences powered by the latest technology.'],
  [Handshake, 'A trusted partner', 'A collaborative approach with a commitment to your success.'],
];
const ease = [0.22, 1, 0.36, 1];

export default function WhyChooseInomnia() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.05 });
  const reduced = useReducedMotion();
  const reveal = (delay = 0) => ({ initial: reduced ? false : { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.8, delay: reduced ? 0 : delay, ease } });

  return (
    <section className="why-section" id="why-choose-inomnia" ref={ref} aria-labelledby="why-heading">
      <div className="why-intro">
        <motion.p className="why-eyebrow" {...reveal()}>Why choose INOMNIA<i aria-hidden="true" /></motion.p>
        <h2 id="why-heading" className="why-heading">{['Ideas', 'People', 'Experiences', 'Beyond', 'Expectations.'].map((line, index) => <span className={index > 2 ? 'why-heading-accent' : undefined} key={line}><motion.span {...reveal(index * 0.09)}>{line}</motion.span></span>)}</h2>
        <motion.p className="why-copy" {...reveal(0.25)}>We go beyond event management — we create meaningful experiences through creativity, precision and a passion for excellence.</motion.p>
      </div>

      <div className="why-architecture">
        {/* Observe the unmasked section so the architectural reveal cannot hide its own visibility trigger. */}
        <motion.div className="why-photo-reveal" initial={reduced ? false : { clipPath: 'inset(0% 0% 100% 0%)' }} animate={{ clipPath: visible || reduced ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }} transition={{ duration: reduced ? 0 : 1.1, ease }}>
          <img src="/images/why-choose-reference.png" width="1728" height="910" alt="Reference exhibition architecture with monumental charcoal entrances, an illuminated ceiling ring, a warm-lit tree and reflective flooring. Panel lettering: Spaces, stories, people, impact; More than events." decoding="async" />
        </motion.div>
      </div>

      <motion.blockquote className="why-quote" {...reveal(0.25)}><p>It’s not just<br />what we do,</p><p><em>it’s how we make<br />it feel.</em></p><i aria-hidden="true" /></motion.blockquote>
      <motion.p className="why-brand" aria-hidden="true" {...reveal(0.5)}>Imagination<br />Innovation<br />Impact</motion.p>
      <svg className="why-curve" viewBox="0 0 1728 910" preserveAspectRatio="none" fill="none" aria-hidden="true"><motion.path d="M-35 684 C300 486 565 617 980 275 S1420 365 1735 665 M1280 162 Q1450 144 1548 -10" stroke="#A98968" strokeOpacity=".55" strokeWidth="1.2" vectorEffect="non-scaling-stroke" initial={reduced ? false : { pathLength: 0 }} animate={{ pathLength: visible || reduced ? 1 : 0 }} transition={{ duration: reduced ? 0 : 1.1, delay: 0.25, ease }} /></svg>

      <ol className="why-reasons">{reasons.map(([Icon, title, copy], index) => <motion.li key={title} {...reveal(index * 0.09)}><div className="why-reason-symbol"><span className="why-number">0{index + 1}</span><span className="why-icon"><Icon size={30} strokeWidth={1.2} aria-hidden="true" /></span></div><div className="why-reason-copy"><h3>{title}</h3><p>{copy}</p></div></motion.li>)}</ol>
      <div className="why-footer"><p className="why-micro" aria-hidden="true">People <b>|</b> Spaces <b>|</b> Stories <b>|</b> Impact<i /></p><a className="why-cta" href="#contact">Let’s create together<span><ArrowRight size={21} strokeWidth={1.2} aria-hidden="true" /></span></a></div>
    </section>
  );
}
