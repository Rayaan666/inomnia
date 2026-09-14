import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const serviceDetails = {
  events: {
    title: 'EVENTS & CORPORATE GALAS',
    subtitle: 'High-Impact Ceremonies & Luxury Functions',
    description: 'We orchestrate flagship corporate conferences, royal galas, award shows, and product launches with cinematic production, spatial audio, and architectural staging.',
    features: [
      'End-to-End Production Management & Live Direction',
      'Architectural Stage Design & 3D Environment Rendering',
      'VIP Hospitality & High-Protocol Guest Management',
      'Broadcast-Quality Audiovisual & Intelligent Lighting',
    ],
    image: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_53_47_PM',
  },
  exhibitions: {
    title: 'EXHIBITIONS & PAVILIONS',
    subtitle: 'Bespoke Brand Architecture & Stand Fabrication',
    description: 'From creative booth design to high-precision fabrication and visitor engagement, we engineer immersive pavilions that dominate exhibition floors across Dubai and global expos.',
    features: [
      'Custom Double-Decker & Modular Pavilion Fabrication',
      'Interactive Digital Kiosks & Kinetic LED Walls',
      'Lead Generation & Visitor Flow Architecture',
      'On-Site Maintenance & Turnkey Assembly',
    ],
    image: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_53_52_PM',
  },
  'technology-content': {
    title: 'TECHNOLOGY & DIGITAL CONTENT',
    subtitle: 'Immersive Tech, AI Art & Interactive Visuals',
    description: 'We fuse futuristic hardware with custom software, projection mapping, hologram displays, and generative AI installations to transform spectators into active participants.',
    features: [
      '3D Projection Mapping & Spatial Audio Systems',
      'Interactive Touch Surfaces & Motion Sensors',
      'Custom AR/VR & Metaverse Brand Activations',
      'Real-Time Generative Visual Content Creation',
    ],
    image: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_53_55_PM',
  },
  entertainment: {
    title: 'ENTERTAINMENT & LIVE PERFORMANCES',
    subtitle: 'World-Class Talent & Atmospheric Choreography',
    description: 'Curating extraordinary live performers, aerialists, symphonic ensembles, laser shows, and international acts tailored to match the precise mood of your celebration.',
    features: [
      'International Artist & Celebrity Talent Booking',
      'Bespoke Stage Choreography & Original Soundtracks',
      'Aerial, Pyro & Drone Light Show Coordination',
      'Atmospheric Immersive Theatre & Host Talent',
    ],
    image: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_53_57_PM',
  },
  'staffing-solutions': {
    title: 'STAFFING & HOST MANAGEMENT',
    subtitle: 'Elite Event Specialists & Brand Ambassadors',
    description: 'Delivering highly trained hostesses, multilingual VIP greeters, event managers, and technical crew who represent your brand with elegance and professional poise.',
    features: [
      'Multilingual VIP Hostesses & Protocol Officers',
      'Technical AV Engineers & Floor Managers',
      'Registration & Ticketing Operations Teams',
      'Tailored Brand Wardrobe & Styling Options',
    ],
    image: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_54_00_PM',
  },
  'premium-giveaways': {
    title: 'PREMIUM GIVEAWAYS & MERCHANDISE',
    subtitle: 'Curated Corporate Gifting & Luxury Keepsakes',
    description: 'Creating bespoke, high-end corporate gifts, custom-engraved tech, and eco-friendly merchandise packaged to leave a tactile, lasting impression beyond the event.',
    features: [
      'Custom Designer Branding & Monogrammed Packaging',
      'Sustainable Luxury & Executive Tech Accessories',
      'VIP Welcome Kits & Commemorative Awards',
      'Worldwide Direct Shipping & Event-Site Delivery',
    ],
    image: 'https://res.cloudinary.com/snos9tuz/image/upload/ChatGPT_Image_Aug_25_2026_06_54_03_PM',
  },
};

export default function ServiceModal({ serviceSlug, onClose }) {
  if (!serviceSlug) return null;
  const detail = serviceDetails[serviceSlug] || serviceDetails['events'];

  const handleInquire = () => {
    onClose();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-[#030812] text-white shadow-[0_30px_90px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={detail.image}
              alt={detail.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030812] via-[#030812]/50 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white mb-2 backdrop-blur-md">
                <Sparkles className="h-3 w-3" />
                SERVICE HIGHLIGHT
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-wide text-white">
                {detail.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
                {detail.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-10 space-y-8">
            <p className="text-base sm:text-lg font-light leading-relaxed text-gray-300">
              {detail.description}
            </p>

            {/* Key Deliverables */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                WHAT WE DELIVER
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {detail.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-200 leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="text-xs text-gray-400 font-medium">
                Ready to craft this experience? Let's discuss your timeline & scope.
              </div>
              <button
                type="button"
                onClick={handleInquire}
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white bg-white px-8 py-3.5 text-xs font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-gray-200 cursor-pointer"
              >
                <span>INQUIRE FOR THIS SERVICE</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
