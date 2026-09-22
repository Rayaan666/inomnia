import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'HOME', href: '/', desc: 'Welcome & Overview' },
  { name: 'ABOUT', href: '/about', desc: 'Our DNA & Philosophy' },
  { name: 'SERVICES', href: '/services', desc: 'What We Create' },
  { name: 'CONTACT', href: '/contact', desc: 'Get In Touch With Us' },
];

function InomniaLogo() {
  return (
    <a
      href="/"
      className="relative z-50 flex items-center transition-opacity duration-300 hover:opacity-90"
      aria-label="INOMNIA EVENTS home"
    >
      <img
        src="/logo.png"
        alt="INOMNIA EVENTS"
        className="h-9 md:h-12 w-auto object-contain"
      />
    </a>
  );
}

function ProjectButton({ compact = false, onClick }) {
  return (
    <a
      href="/contact"
      onClick={onClick}
      className={`group relative hidden overflow-hidden rounded-full border border-white/20 bg-white/5 font-extrabold uppercase tracking-[0.18em] text-white transition-all duration-300 md:inline-flex hover:border-white hover:bg-white hover:text-black cursor-pointer ${
        compact ? 'px-6 py-[10px] text-[10px]' : 'px-8 py-[15px] text-[11px]'
      }`}
    >
      <span className="relative flex items-center gap-2">
        START A PROJECT
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}

const menuVariants = {
  hidden: {
    opacity: 0,
    clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)',
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  visible: {
    opacity: 1,
    clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)',
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const navLinksVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const linkVariants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(window.location.pathname);
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (href, e) => {
    if (href === '/' || href === '/about' || href === '/services' || href === '/contact') {
      setIsOpen(false);
      if (href === window.location.pathname) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    // Make all other buttons non-functional
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-500 ${
        isScrolled
          ? 'bg-[#02060B]/90 py-3.5 shadow-[0_18px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent py-4 md:py-7'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1840px] items-center justify-between px-5 md:px-12 lg:px-[58px]">
        <InomniaLogo />

        <div className="flex items-center gap-3 md:gap-7 z-[10000] ml-auto">
          <ProjectButton
            compact={isScrolled}
            onClick={(e) => handleNavClick('/contact', e)}
          />
          <button
            type="button"
            onClick={() => setIsOpen((val) => !val)}
            className={`group relative flex items-center justify-center rounded-full border transition-all duration-300 z-[10000] cursor-pointer ${
              isOpen
                ? 'border-white/40 bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105'
                : 'border-white/20 bg-black/40 text-white hover:border-white hover:bg-white/10'
            } ${isScrolled ? 'h-11 w-11 md:h-12 md:w-12' : 'h-12 w-12 md:h-[58px] md:w-[58px]'}`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <div className="relative flex flex-col items-center justify-center gap-[5px]">
              <span
                className={`h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? 'w-5 translate-y-[3.5px] rotate-45' : 'w-5 group-hover:w-6'
                }`}
              />
              <span
                className={`h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? 'w-5 -translate-y-[3.5px] -rotate-45' : 'w-4 group-hover:w-6'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed inset-0 z-[9990] flex h-dvh w-screen flex-col justify-between bg-[#030812] text-white backdrop-blur-3xl overflow-y-auto px-5 pt-24 pb-8 md:px-12 md:py-28 lg:px-[58px] lg:py-32"
          >
            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 left-10 h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-white/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 h-[350px] w-[350px] md:h-[450px] md:w-[450px] rounded-full bg-white/5 blur-[140px] pointer-events-none" />

            <div className="mx-auto grid w-full max-w-[1840px] grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8 my-auto">
              {/* Left Column: Brand, Info & Socials */}
              <div className="hidden flex-col justify-between space-y-8 border-r border-white/10 pr-8 md:col-span-4 md:flex lg:col-span-4 min-h-[420px]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    NAVIGATION MENU
                  </div>
                  <h3 className="mt-4 text-2xl font-black tracking-wider text-white">
                    INOMNIA <span className="text-white/60">EVENTS</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60 max-w-sm">
                    Crafting extraordinary corporate functions, private gatherings, and spectacular activations with passion and precision.
                  </p>
                </div>

                <div className="space-y-4">
                  <span className="block text-[11px] font-bold tracking-[0.2em] text-white/80 uppercase">
                    Direct Contact
                  </span>
                  <div className="space-y-2.5 text-sm">
                    <a
                      href="mailto:hello@inomnia.ae"
                      className="flex items-center gap-3 text-white/80 hover:text-white transition duration-300 group cursor-pointer"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-white/40 group-hover:bg-white/10">
                        <Mail className="h-3.5 w-3.5 text-white" />
                      </span>
                      hello@inomnia.ae
                    </a>
                    <a
                      href="tel:+971556515998"
                      className="flex items-center gap-3 text-white/80 hover:text-white transition duration-300 group cursor-pointer"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-white/40 group-hover:bg-white/10">
                        <Phone className="h-3.5 w-3.5 text-white" />
                      </span>
                      +971 55 651 5998
                    </a>
                    <div className="flex items-center gap-3 text-white/60">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <MapPin className="h-3.5 w-3.5 text-white" />
                      </span>
                      Dubai, United Arab Emirates
                    </div>
                  </div>
                </div>

                <div>
                  <span className="block text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase mb-3">
                    Connect With Us
                  </span>
                  <div className="flex items-center gap-3">
                    {[
                      { icon: Instagram, href: 'https://instagram.com/inomniaevents', label: 'Instagram' },
                      { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                      { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                      { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                    ].map((item) => {
                      const IconComp = item.icon;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.label}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:border-white hover:bg-white hover:text-black hover:scale-110 cursor-pointer"
                        >
                          <IconComp className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Complete Nav Links */}
              <motion.div
                variants={navLinksVariants}
                className="flex flex-col justify-center space-y-1.5 md:col-span-8 md:pl-8 lg:col-span-8 md:space-y-3"
              >
                {navItems.map((item, index) => {
                  const isActive = activePath === item.href || (item.href === '/' && activePath === '');
                  return (
                    <div key={item.name} className="overflow-hidden">
                      <motion.div variants={linkVariants} className="group relative">
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(item.href, e)}
                          className="flex items-center justify-between rounded-xl p-2.5 transition-all duration-300 group-hover:bg-white/[0.08] md:rounded-2xl md:px-5 md:py-3.5 cursor-pointer"
                        >
                          <div className="flex items-center gap-3 md:gap-7">
                            <span className="text-[11px] font-extrabold tracking-widest text-white/40 md:text-sm font-mono">
                              0{index + 1}
                            </span>
                            <div className="flex flex-col">
                              <span className="text-xl font-black uppercase tracking-[0.06em] text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-white md:text-4xl lg:text-5xl flex items-center gap-2 md:gap-3">
                                {item.name}
                                {isActive && (
                                  <span className="inline-flex items-center gap-1 rounded-full border border-white/40 bg-white/20 px-2 py-0.5 text-[9px] font-bold tracking-widest text-white uppercase md:px-2.5 md:text-[10px]">
                                    Active
                                  </span>
                                )}
                              </span>
                              <span className="hidden text-xs text-white/40 transition-colors duration-300 group-hover:text-white/70 md:block mt-1">
                                {item.desc}
                              </span>
                            </div>
                          </div>

                          <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-60 md:opacity-40 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:opacity-100 group-hover:scale-110">
                            <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-white transition-transform duration-300 group-hover:text-black group-hover:rotate-45" />
                          </div>
                        </a>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Mobile Footer Inside Drawer */}
            <div className="flex flex-col gap-3 border-t border-white/10 pt-5 mt-4 md:hidden">
              <div className="flex justify-between items-center text-[11px] text-white/60">
                <span>Dubai, UAE</span>
                <a href="tel:+971556515998" className="hover:text-white">+971 55 651 5998</a>
              </div>
              <a
                href="/contact"
                onClick={(e) => handleNavClick('/contact', e)}
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  START A PROJECT NOW
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

