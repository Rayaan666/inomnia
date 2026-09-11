import React from 'react';

const partners = [
  { name: 'APEX', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop&q=60&auto=format&mono=grayscale' },
  { name: 'VERTEX', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&h=80&fit=crop&q=60&auto=format&mono=grayscale' },
  { name: 'NEBULA', logo: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=150&h=80&fit=crop&q=60&auto=format&mono=grayscale' },
  { name: 'HORIZON', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150&h=80&fit=crop&q=60&auto=format&mono=grayscale' },
  { name: 'ZENITH', logo: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=150&h=80&fit=crop&q=60&auto=format&mono=grayscale' },
  { name: 'RESONANCE', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=80&fit=crop&q=60&auto=format&mono=grayscale' },
];

// Duplicating the list to enable seamless infinite scrolling
const marqueePartners = [...partners, ...partners, ...partners];

const OurPartners = () => {
  return (
    <section className="relative bg-white text-gray-900 pt-8 pb-10 overflow-hidden select-none border-t border-black">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-wide text-gray-900">
          OUR PARTNERS
        </h2>
        <div className="w-16 h-[2px] bg-gray-900 mx-auto mt-4" />
      </div>

      {/* Infinite Scroll Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-12 md:gap-24 items-center">
          {marqueePartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-8 py-5 flex items-center justify-center min-w-[140px] md:min-w-[180px] shadow-sm">
                <span className="font-serif font-semibold text-lg md:text-xl tracking-[0.2em] text-gray-700">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
