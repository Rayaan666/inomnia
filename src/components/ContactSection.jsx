import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Events & Galas',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Events & Galas',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <section id="contact" className="relative bg-[#01060D] text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-white/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1840px] px-2 sm:px-6 md:px-10 lg:px-[58px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.25em] uppercase text-white mb-4"
          >
            <Sparkles className="h-3.5 w-3.5 text-white/80" />
            GET IN TOUCH
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-none tracking-tight text-white"
          >
            LET'S BUILD SOMETHING <br className="hidden sm:inline" />
            <span className="text-white/60">EXTRAORDINARY.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-[15px] font-light text-gray-400 md:text-[17px] leading-relaxed"
          >
            Have an upcoming project in Dubai or internationally? Connect with our event strategists and creative producers to bring your vision to life.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-wider text-white border-b border-white/10 pb-4">
                DIRECT CONTACT
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:hello@inomnia.ae"
                  className="flex items-start gap-4 group p-3 -mx-3 rounded-2xl transition duration-300 hover:bg-white/5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                      EMAIL INQUIRIES
                    </span>
                    <span className="text-lg font-bold text-white group-hover:underline">
                      hello@inomnia.ae
                    </span>
                    <p className="text-xs text-gray-400 mt-0.5">Response within 24 hours</p>
                  </div>
                </a>

                <a
                  href="tel:+971556515998"
                  className="flex items-start gap-4 group p-3 -mx-3 rounded-2xl transition duration-300 hover:bg-white/5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                      PHONE & WHATSAPP
                    </span>
                    <span className="text-lg font-bold text-white group-hover:underline">
                      +971 55 651 5998
                    </span>
                    <p className="text-xs text-gray-400 mt-0.5">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 -mx-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                      HEADQUARTERS
                    </span>
                    <span className="text-sm font-semibold leading-relaxed text-gray-200 block mt-1">
                      5th floor 501-40 Horizon Building, Next to Dnata Travels, Port Saeed, Dubai, UAE
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/971556515998?text=Hello!%20I%20would%20like%20to%20discuss%20an%20event%20project%20with%20INOMNIA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#25D366] transition-all duration-300 hover:bg-[#25D366] hover:text-black"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>START WHATSAPP CHAT</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 md:p-12 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-6"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white border border-white/20">
                      <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-wider text-white">
                      MESSAGE RECEIVED!
                    </h3>
                    <p className="text-gray-300 max-w-md mx-auto text-sm leading-relaxed">
                      Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Our senior event producer will review your inquiry and contact you at <strong className="text-white">{formData.email}</strong> shortly.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition duration-300 hover:bg-white hover:text-black"
                    >
                      SEND ANOTHER INQUIRY
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-black uppercase tracking-wider text-white mb-6">
                      START A PROJECT INQUIRY
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-[0.18em] text-gray-300 mb-2">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-white focus:bg-white/10 focus:outline-none transition duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-[0.18em] text-gray-300 mb-2">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-white focus:bg-white/10 focus:outline-none transition duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-[0.18em] text-gray-300 mb-2">
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 50 123 4567"
                          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-white focus:bg-white/10 focus:outline-none transition duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-[0.18em] text-gray-300 mb-2">
                          EVENT CATEGORY
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/15 bg-[#0a111c] px-4 py-3.5 text-sm text-white focus:border-white focus:outline-none transition duration-200"
                        >
                          <option value="Events & Galas">Corporate Events & Galas</option>
                          <option value="Exhibitions & Pavilions">Exhibitions & Pavilions</option>
                          <option value="Technology & Content">Immersive Technology & Content</option>
                          <option value="Entertainment & Shows">Stage Entertainment & Performances</option>
                          <option value="Premium Giveaways">Premium Giveaways & Gifts</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-[0.18em] text-gray-300 mb-2">
                        PROJECT DETAILS & VISION
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your event vision, estimated dates, location, guest count, or special requirements..."
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-white focus:bg-white/10 focus:outline-none transition duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group relative flex w-full items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:opacity-50 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <span>SENDING INQUIRY...</span>
                      ) : (
                        <>
                          <span>SUBMIT INQUIRY</span>
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
