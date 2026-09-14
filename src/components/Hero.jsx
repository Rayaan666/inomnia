import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './Hero.css';

export default function Hero({ id = 'home', imageSrc }) {
  const isAbout = id === 'about';
  const heroImg = imageSrc || (isAbout ? '/about/hero.png' : '/images/hero-editorial-event.png');

  const eyebrowText = isAbout ? 'ABOUT INOMNIA /// DUBAI, UAE' : 'INOMNIA / DUBAI';
  const titleLines = isAbout
    ? ["DUBAI'S", 'PREMIER EVENT', '& EXHIBITION', 'AGENCY.']
    : ['EXPERIENCES', 'THAT LEAVE', 'A LASTING', 'IMPACT.'];

  const description = isAbout ? (
    <>INOMNIA is Dubai&apos;s leading experiential event management and exhibition agency.<br />We combine spatial architecture, live show production, and immersive technology to build world-class brand experiences across the UAE and globally.</>
  ) : (
    <>From events and exhibitions to immersive technology, entertainment<br />and brand experiences &mdash; INOMNIA transforms ideas into experiences designed to be remembered.</>
  );

  const primaryCta = isAbout ? { text: 'OUR PURPOSE', href: '#purpose' } : { text: 'EXPLORE OUR WORK', href: '#services' };
  const secondaryCta = isAbout ? { text: 'START A PROJECT', href: '/#contact' } : { text: 'START A PROJECT', href: '#contact' };
  const infoItems = isAbout
    ? ['DUBAI HEADQUARTERS', 'GLOBAL EVENT EXECUTION', 'BESPOKE PRODUCTION']
    : ['EVENTS & EXPERIENCES', 'EXHIBITIONS & ACTIVATIONS', 'TECHNOLOGY & CONTENT'];

  return (
    <section id={id} className="editorial-hero" aria-labelledby="hero-title">
      <div className="editorial-hero__image"><img src={heroImg} alt="Sweeping illuminated exhibition architecture with lounge seating and visitors in Dubai" fetchPriority="high" /></div>
      <div className="editorial-hero__shade" aria-hidden="true" />
      <div className="editorial-hero__grain" aria-hidden="true" />
      <span className="editorial-hero__number" aria-hidden="true">01</span>
      <div className="editorial-hero__rule" aria-hidden="true" />
      <div className="editorial-hero__content pt-28 md:pt-36">
        <p className="editorial-hero__eyebrow"><span />{eyebrowText}</p>
        <h1 id="hero-title" className="editorial-hero__title">{titleLines.map((line, i) => <span className="editorial-hero__mask" key={line}><span style={{ '--line': i }} className={i === 1 ? 'is-muted' : ''}>{line}</span></span>)}</h1>
        <p className="editorial-hero__description">{description}</p>
        <div className="editorial-hero__actions">
          <a className="editorial-hero__cta editorial-hero__cta--primary" href="#" onClick={(e) => e.preventDefault()}>{primaryCta.text} <ArrowRight size={16} /></a>
          <a className="editorial-hero__cta editorial-hero__cta--primary" href="#" onClick={(e) => e.preventDefault()}>{secondaryCta.text} <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <p className="editorial-hero__vertical" aria-hidden="true">IMAGINATION <span>INNOVATION</span> IMPACT</p>
      <div className="editorial-hero__lower">
        <a href="#" onClick={(e) => e.preventDefault()} className="editorial-hero__scroll"><span className="editorial-hero__mouse" />SCROLL TO DISCOVER</a>
        <div className="editorial-hero__pagination" aria-label="Featured experience 1 of 3"><span className="editorial-hero__progress" /><span>01</span><span className="editorial-hero__total">/ 03</span></div>
      </div>
      <div className="editorial-hero__info">{infoItems.map((label, i) => <div key={label}><span>0{i + 1}</span><p>{label}</p></div>)}</div>
    </section>
  );
}
