import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './Hero.css';

export default function Hero({ id = 'home', imageSrc }) {
  const isAbout = id === 'about';
  const isServices = id === 'services';

  const heroImg =
    imageSrc ||
    (isServices
      ? '/services/hero.png'
      : isAbout
      ? '/about/hero.png'
      : '/images/hero-editorial-event.png');

  const eyebrowText = isServices
    ? 'SERVICES /// EXPERIENTIAL & EVENT PRODUCTION'
    : isAbout
    ? 'ABOUT INOMNIA /// DUBAI, UAE'
    : 'INOMNIA / DUBAI';

  const titleLines = isServices
    ? ['EVERYTHING', 'AN EXPERIENCE', 'NEEDS.']
    : isAbout
    ? ["DUBAI'S", 'PREMIER EVENT', '& EXHIBITION', 'AGENCY.']
    : ['EXPERIENCES', 'THAT LEAVE', 'A LASTING', 'IMPACT.'];

  const description = isServices ? (
    <>
      From mega corporate events and high-impact exhibitions to cutting-edge technology
      <br />
      and immersive live entertainment &mdash; INOMNIA transforms bold visions into unforgettable reality.
    </>
  ) : isAbout ? (
    <>
      INOMNIA is Dubai&apos;s leading experiential event management and exhibition agency.
      <br />
      We combine spatial architecture, live show production, and immersive technology to build world-class brand experiences across the UAE and globally.
    </>
  ) : (
    <>
      From events and exhibitions to immersive technology, entertainment
      <br />
      and brand experiences &mdash; INOMNIA transforms ideas into experiences designed to be remembered.
    </>
  );

  const primaryCta = isServices
    ? { text: 'EXPLORE SERVICES', href: '#services-section' }
    : isAbout
    ? { text: 'OUR PURPOSE', href: '#purpose' }
    : { text: 'EXPLORE OUR WORK', href: '#services' };

  const secondaryCta = isServices
    ? { text: 'START A PROJECT', href: '/#contact' }
    : isAbout
    ? { text: 'START A PROJECT', href: '/#contact' }
    : { text: 'START A PROJECT', href: '#contact' };

  const infoItems = isServices
    ? ['EVENTS & EXHIBITIONS', 'TECHNOLOGY & CONTENT', 'ENTERTAINMENT & GIVEAWAYS']
    : isAbout
    ? ['DUBAI HEADQUARTERS', 'GLOBAL EVENT EXECUTION', 'BESPOKE PRODUCTION']
    : ['EVENTS & EXPERIENCES', 'EXHIBITIONS & ACTIVATIONS', 'TECHNOLOGY & CONTENT'];

  const handleCtaClick = (e, href) => {
    if (!href || href === '#') {
      e.preventDefault();
      return;
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/#')) {
      if (window.location.pathname === '/') {
        e.preventDefault();
        const target = document.querySelector(href.substring(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <section id={id} className="editorial-hero" aria-labelledby="hero-title">
      <div className="editorial-hero__image">
        <img
          src={heroImg}
          alt="Sweeping illuminated exhibition architecture with lounge seating and visitors in Dubai"
          fetchPriority="high"
        />
      </div>
      <div className="editorial-hero__shade" aria-hidden="true" />
      <div className="editorial-hero__grain" aria-hidden="true" />
      <span className="editorial-hero__number" aria-hidden="true">
        {isServices ? '03' : isAbout ? '02' : '01'}
      </span>
      <div className="editorial-hero__rule" aria-hidden="true" />
      <div className="editorial-hero__content pt-28 md:pt-36">
        <p className="editorial-hero__eyebrow">
          <span />
          {eyebrowText}
        </p>
        <h1 id="hero-title" className="editorial-hero__title">
          {titleLines.map((line, i) => (
            <span className="editorial-hero__mask" key={line}>
              <span style={{ '--line': i }} className={i === 1 ? 'is-muted' : ''}>
                {line}
              </span>
            </span>
          ))}
        </h1>
        <p className="editorial-hero__description">{description}</p>
        <div className="editorial-hero__actions">
          <a
            className="editorial-hero__cta editorial-hero__cta--primary cursor-pointer"
            href={primaryCta.href}
            onClick={(e) => handleCtaClick(e, primaryCta.href)}
          >
            {primaryCta.text} <ArrowRight size={16} />
          </a>
          <a
            className="editorial-hero__cta editorial-hero__cta--primary cursor-pointer"
            href={secondaryCta.href}
            onClick={(e) => handleCtaClick(e, secondaryCta.href)}
          >
            {secondaryCta.text} <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <p className="editorial-hero__vertical" aria-hidden="true">
        IMAGINATION <span>INNOVATION</span> IMPACT
      </p>
      <div className="editorial-hero__lower">
        <a
          href={isServices ? '#services-section' : '#services-list'}
          onClick={(e) => handleCtaClick(e, isServices ? '#services-section' : '#services-list')}
          className="editorial-hero__scroll cursor-pointer"
        >
          <span className="editorial-hero__mouse" />
          SCROLL TO DISCOVER
        </a>
        <div className="editorial-hero__pagination" aria-label="Featured experience 1 of 3">
          <span className="editorial-hero__progress" />
          <span>{isServices ? '03' : isAbout ? '02' : '01'}</span>
          <span className="editorial-hero__total">/ 03</span>
        </div>
      </div>
      <div className="editorial-hero__info">
        {infoItems.map((label, i) => (
          <div key={label}>
            <span>0{i + 1}</span>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
