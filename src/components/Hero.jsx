import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="editorial-hero" aria-labelledby="hero-title">
      <div className="editorial-hero__image"><img src="/images/hero-editorial-event.png" alt="Sweeping illuminated exhibition architecture with lounge seating and visitors in Dubai" fetchPriority="high" /></div>
      <div className="editorial-hero__shade" aria-hidden="true" />
      <div className="editorial-hero__grain" aria-hidden="true" />
      <span className="editorial-hero__number" aria-hidden="true">01</span>
      <div className="editorial-hero__rule" aria-hidden="true" />
      <div className="editorial-hero__content pt-28 md:pt-36">
        <p className="editorial-hero__eyebrow"><span />INOMNIA / DUBAI</p>
        <h1 id="hero-title" className="editorial-hero__title">{['EXPERIENCES', 'THAT LEAVE', 'A LASTING', 'IMPACT.'].map((line, i) => <span className="editorial-hero__mask" key={line}><span style={{ '--line': i }} className={i === 1 ? 'is-muted' : ''}>{line}</span></span>)}</h1>
        <p className="editorial-hero__description">From events and exhibitions to immersive technology, entertainment<br />and brand experiences &mdash; INOMNIA transforms ideas into experiences designed to be remembered.</p>
        <div className="editorial-hero__actions">
          <a className="editorial-hero__cta editorial-hero__cta--primary" href="#services">EXPLORE OUR WORK <ArrowRight size={16} /></a>
          <a className="editorial-hero__cta editorial-hero__cta--primary" href="mailto:hello@inomniaevents.com">START A PROJECT <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <p className="editorial-hero__vertical" aria-hidden="true">IMAGINATION <span>INNOVATION</span> IMPACT</p>
      <div className="editorial-hero__lower">
        <a href="#about" className="editorial-hero__scroll"><span className="editorial-hero__mouse" />SCROLL TO DISCOVER</a>
        <div className="editorial-hero__pagination" aria-label="Featured experience 1 of 3"><span className="editorial-hero__progress" /><span>01</span><span className="editorial-hero__total">/ 03</span></div>
      </div>
      <div className="editorial-hero__info">{['EVENTS & EXPERIENCES', 'EXHIBITIONS & ACTIVATIONS', 'TECHNOLOGY & CONTENT'].map((label, i) => <div key={label}><span>0{i + 1}</span><p>{label}</p></div>)}</div>
    </section>
  );
}
