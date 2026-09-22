import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare, Check, Copy, Sparkles, Send } from 'lucide-react';

const serviceOptions = [
  'EVENTS',
  'EXHIBITIONS',
  'TECHNOLOGY',
  'ENTERTAINMENT',
  'PREMIUM GIVEAWAYS',
  'OTHER',
];

export default function ContactExperience() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    selectedServices: ['EVENTS'],
    idea: '',
  });

  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const toggleService = (service) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      if (exists) {
        // Keep at least one selected or allow toggle off
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== service),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, service],
        };
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      selectedServices: ['EVENTS'],
      idea: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact-experience"
      className="relative w-full bg-[#02060B] text-white pt-10 lg:pt-14 pb-4 lg:pb-6 px-6 sm:px-10 md:px-14 lg:px-20 border-b border-white/10 overflow-hidden"
      aria-label="Contact Experience"
    >
      {/* Subtle background ambient architecture */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1840px] mx-auto">
        {/* Section Header Index */}
        <div className="flex items-center justify-between pb-8 mb-12 lg:mb-20 border-b border-white/10 text-xs font-mono tracking-[0.25em] text-white/50 uppercase">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span>SECTION 02 /// CONTACT EXPERIENCE</span>
          </div>
          <span className="hidden sm:inline text-white/30">INQUIRY DISCIPLINE</span>
        </div>

        {/* Large Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ================= LEFT SIDE: STATEMENT & CONTACT INFO ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12 lg:space-y-16 lg:sticky lg:top-28">
            <div className="space-y-6">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-white/50 block">
                DIRECT ENGAGEMENT
              </span>

              {/* Large Statement */}
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.9]">
                YOUR IDEA<br />
                <span className="text-white/40">STARTS HERE.</span>
              </h2>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-md pt-2">
                Tell us what you&apos;re imagining &mdash; even if it&apos;s only the beginning of an idea.
              </p>
            </div>

            {/* Existing Contact Information */}
            <div className="space-y-8 pt-8 border-t border-white/10">
              <div className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/40 mb-4">
                INOMNIA COMMUNICATIONS /// DUBAI
              </div>

              {/* Dubai Location */}
              <div className="group relative border-b border-white/10 pb-6 transition-all duration-300 hover:border-white/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 group-hover:border-white group-hover:text-white transition-colors">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono tracking-widest text-white/50 uppercase mb-1">
                      DUBAI, UAE (HEADQUARTERS)
                    </span>
                    <p className="text-sm sm:text-[15px] text-white/90 font-light leading-relaxed">
                      PO Box: 118467, 5th Floor 501-40 Horizon Building,<br />
                      Next to Dnata Travels, Port Saeed, Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group relative border-b border-white/10 pb-6 transition-all duration-300 hover:border-white/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 group-hover:border-white group-hover:text-white transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono tracking-widest text-white/50 uppercase mb-0.5">
                        EMAIL INQUIRIES
                      </span>
                      <a
                        href="mailto:hello@inomnia.ae"
                        className="text-base sm:text-lg font-medium text-white hover:text-white/80 transition-colors"
                      >
                        hello@inomnia.ae
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard('hello@inomnia.ae', 'email')}
                    className="p-2 text-white/40 hover:text-white transition-colors text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedItem === 'email' ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> COPIED
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="group relative border-b border-white/10 pb-6 transition-all duration-300 hover:border-white/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 group-hover:border-white group-hover:text-white transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono tracking-widest text-white/50 uppercase mb-0.5">
                        DIRECT STUDIO LINE
                      </span>
                      <a
                        href="tel:+971556515998"
                        className="text-base sm:text-lg font-medium text-white hover:text-white/80 transition-colors"
                      >
                        +971 55 651 5998
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard('+971556515998', 'phone')}
                    className="p-2 text-white/40 hover:text-white transition-colors text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedItem === 'phone' ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> COPIED
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="group relative border-b border-white/10 pb-6 transition-all duration-300 hover:border-white/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] group-hover:border-[#25D366] group-hover:bg-[#25D366] group-hover:text-black transition-colors">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono tracking-widest text-white/50 uppercase mb-0.5">
                        INSTANT MESSAGING
                      </span>
                      <a
                        href="https://wa.me/971556515998?text=Hello!%20I%20would%20like%20to%20inquire%20about%20INOMNIA%20EVENTS."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-medium text-white hover:text-[#25D366] transition-colors flex items-center gap-2"
                      >
                        WhatsApp Direct
                        <ArrowUpRight className="w-4 h-4 text-white/50" />
                      </a>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded border border-white/10 text-white/40 uppercase">
                    ONLINE
                  </span>
                </div>
              </div>
            </div>

            {/* Studio Operating Status */}
            <div className="inline-flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02] text-xs font-mono text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>INQUIRY DESK ACTIVE &bull; RESPONSE UNDER 24 HOURS</span>
            </div>
          </div>


          {/* ================= RIGHT SIDE: ARCHITECTURAL INQUIRY FORM ================= */}
          <div className="lg:col-span-7">
            <div className="border border-white/15 bg-[#030812]/95 p-6 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-xl">
              {/* Subtle architectural corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/40" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/40" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/40" />

              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
                <span className="text-xs font-mono tracking-[0.25em] text-white/60 uppercase">
                  PROJECT INQUIRY SPECIFICATION
                </span>
                <span className="text-[11px] font-mono text-white/40">
                  ALL FIELDS OPTIONAL EXCEPT (*)
                </span>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-16 text-center space-y-6"
                  >
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
                      <Check className="h-8 w-8" />
                    </div>

                    <div className="space-y-3 max-w-md mx-auto">
                      <h3 className="font-display text-4xl font-black uppercase text-white tracking-wide">
                        BRIEF TRANSMITTED.
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                        Thank you for reaching out to INOMNIA. Our executive producers and creative strategists have received your details and will initiate contact within 24 hours.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 font-mono text-xs uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                      >
                        SUBMIT ANOTHER BRIEF ↗
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form key="inquiry-form" onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Two-column contact inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {/* Name */}
                      <div className="relative group">
                        <label
                          htmlFor="contact-name"
                          className="block text-[11px] font-mono tracking-widest text-white/50 uppercase mb-2"
                        >
                          NAME <span className="text-white">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          placeholder="Your Full Name"
                          className="w-full bg-transparent border-b border-white/20 py-3 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-all font-light"
                        />
                        <div
                          className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${
                            activeField === 'name' ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>

                      {/* Company */}
                      <div className="relative group">
                        <label
                          htmlFor="contact-company"
                          className="block text-[11px] font-mono tracking-widest text-white/50 uppercase mb-2"
                        >
                          COMPANY
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('company')}
                          onBlur={() => setActiveField(null)}
                          placeholder="Organization / Brand"
                          className="w-full bg-transparent border-b border-white/20 py-3 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-all font-light"
                        />
                        <div
                          className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${
                            activeField === 'company' ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {/* Email */}
                      <div className="relative group">
                        <label
                          htmlFor="contact-email"
                          className="block text-[11px] font-mono tracking-widest text-white/50 uppercase mb-2"
                        >
                          EMAIL <span className="text-white">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField(null)}
                          placeholder="name@domain.com"
                          className="w-full bg-transparent border-b border-white/20 py-3 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-all font-light"
                        />
                        <div
                          className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${
                            activeField === 'email' ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>

                      {/* Phone */}
                      <div className="relative group">
                        <label
                          htmlFor="contact-phone"
                          className="block text-[11px] font-mono tracking-widest text-white/50 uppercase mb-2"
                        >
                          PHONE
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('phone')}
                          onBlur={() => setActiveField(null)}
                          placeholder="+971 -- --- ----"
                          className="w-full bg-transparent border-b border-white/20 py-3 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-all font-light"
                        />
                        <div
                          className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${
                            activeField === 'phone' ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>
                    </div>

                    {/* WHAT ARE YOU PLANNING? Service Selection Options */}
                    <div className="space-y-3 pt-2">
                      <label className="block text-[11px] font-mono tracking-widest text-white/60 uppercase">
                        WHAT ARE YOU PLANNING? <span className="text-white/40">(SELECT ALL THAT APPLY)</span>
                      </label>
                      <div className="flex flex-wrap gap-2.5 pt-1">
                        {serviceOptions.map((service) => {
                          const isSelected = formData.selectedServices.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`group relative px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                                isSelected
                                  ? 'border-white bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                                  : 'border-white/20 bg-white/5 text-white/80 hover:border-white/50 hover:bg-white/10'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                {isSelected && <Check className="w-3 h-3 text-black stroke-[3]" />}
                                {service}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* TELL US ABOUT THE IDEA (Message Field) */}
                    <div className="relative group pt-2">
                      <div className="flex items-center justify-between mb-2">
                        <label
                          htmlFor="contact-idea"
                          className="block text-[11px] font-mono tracking-widest text-white/60 uppercase"
                        >
                          TELL US ABOUT THE IDEA
                        </label>
                        <span className="text-[10px] font-mono text-white/30">
                          {formData.idea.length} CHARACTERS
                        </span>
                      </div>
                      <textarea
                        id="contact-idea"
                        name="idea"
                        rows={4}
                        value={formData.idea}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('idea')}
                        onBlur={() => setActiveField(null)}
                        placeholder="Share your concept, anticipated date, location, scale, or specific experience requirements..."
                        className="w-full bg-white/[0.02] border border-white/20 p-4 text-sm sm:text-base text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-all font-light resize-y"
                      />
                    </div>

                    {/* Main CTA: SEND YOUR BRIEF */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                        <Sparkles className="w-3.5 h-3.5 text-white/60" />
                        <span>CONFIDENTIAL &bull; DIRECT EXECUTIVE REVIEW</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-10 py-4 font-mono font-bold text-xs uppercase tracking-[0.25em] bg-white text-black border border-white transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full border-2 border-current border-t-transparent animate-spin" />
                            TRANSMITTING...
                          </span>
                        ) : (
                          <>
                            <span>SEND YOUR BRIEF</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
