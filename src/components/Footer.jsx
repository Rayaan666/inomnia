import React, { useState } from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Mail, Phone, MapPin, Check } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/inomniaevents' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 500);
  };

  const handleLinkClick = (href, e) => {
    if (href === '/' || href === '/about' || href === '/services' || href === '/contact') {
      return;
    }
    e.preventDefault();
  };

  return (
    <footer className="relative bg-[#01060D] text-white border-t border-white/10 pt-20 pb-12 overflow-hidden font-sans">
      {/* Decorative Blur Glows */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div>
            <div className="inline-block mb-6">
              <a href="/">
                <img
                  src="/logo.png"
                  alt="INOMNIA EVENTS"
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/50 mb-4">
              IMAGINATION • INNOVATION • IMPACT
            </p>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
              Crafting high-end cinematic experiences and unforgettable events that leave lasting impressions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 border border-white/20 rounded-full flex justify-center items-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition duration-300 cursor-pointer"
                >
                  <Icon className="w-4 h-4 stroke-[1.5]" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white tracking-[0.2em] text-xs font-bold uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(item.href, e)}
                    className="text-gray-400 text-sm font-light flex items-center hover:text-white transition duration-200 cursor-pointer group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-2 group-hover:bg-white transition duration-200" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white tracking-[0.2em] text-xs font-bold uppercase mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <a href="mailto:hello@inomnia.ae" className="text-gray-400 hover:text-white transition duration-200">
                  hello@inomnia.ae
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <a href="tel:+971556515998" className="text-gray-400 hover:text-white transition duration-200">
                  +971 55 651 5998
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  PO Box: 118467, 5th floor 501-40 Horizon Building, Next to Dnata Travels, Port Saeed, Dubai, UAE.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white tracking-[0.2em] text-xs font-bold uppercase mb-6">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
              Subscribe to get latest updates and news from our luxury events.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-lg">
                <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>SUBSCRIBED TO INOMNIA NEWSLETTER!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-white transition duration-200 rounded-lg pr-12"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-4 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition duration-200 cursor-pointer flex items-center justify-center"
                >
                  <svg className="w-4 h-4 stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Large Faded Watermark at Bottom */}
        <div className="relative text-center border-t border-white/10 pt-10 select-none">
          <p className="text-xs text-gray-500 font-light tracking-[0.2em] mb-4">
            &copy; {new Date().getFullYear()} INOMNIA EVENTS. ALL RIGHTS RESERVED.
          </p>
          <div className="font-serif text-[8vw] leading-none font-bold text-white/[0.03] tracking-[0.3em] uppercase overflow-hidden whitespace-nowrap">
            INOMNIA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
