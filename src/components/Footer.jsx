import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ];

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
              <img
                src="/logo.png"
                alt="INOMNIA EVENTS"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
              Crafting high-end cinematic experiences and unforgettable events that leave lasting impressions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  aria-label={name}
                  className="w-10 h-10 border border-white/20 rounded-full flex justify-center items-center text-gray-400 cursor-default"
                >
                  <Icon className="w-4 h-4 stroke-[1.5]" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white tracking-[0.2em] text-xs font-bold uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {['Home', 'Who We Are', 'What We Create', 'Our Process', 'Testimonials'].map((link) => (
                <li key={link}>
                  <span
                    className="text-gray-400 text-sm font-light flex items-center cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white mr-2" />
                    {link}
                  </span>
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
                <span className="text-gray-400">
                  hello@inomnia.ae
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  +971 55 651 5998
                </span>
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
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
              <input
                type="email"
                disabled
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/20 text-white text-sm px-4 py-3 opacity-60 cursor-not-allowed"
              />
              <button
                type="button"
                disabled
                className="absolute right-0 top-0 bottom-0 px-4 bg-white/50 text-black font-bold cursor-not-allowed"
              >
                <svg className="w-4 h-4 stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
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
