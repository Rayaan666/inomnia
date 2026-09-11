import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Star, Sparkles, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'Inomnia transformed our flagship annual summit into an unforgettable cinematic experience. Their architectural staging and flawless choreography left our board and 1,200 international delegates in absolute awe.',
    author: 'Sarah Jenkins',
    role: 'Global Marketing Director',
    company: 'Nexus Holdings Group',
    location: 'Dubai & London',
    rating: 5,
    tag: 'ANNUAL GLOBAL SUMMIT',
  },
  {
    id: 2,
    quote:
      'Working with Inomnia was seamless from initial creative ideation to the final curtain. They captured our brand essence with immaculate taste, delivering a luxury product launch that set a new benchmark in our sector.',
    author: 'Michael Chen',
    role: 'Chief Executive Officer',
    company: 'Lumina Technologies',
    location: 'Singapore & Dubai',
    rating: 5,
    tag: 'LUXURY PRODUCT LAUNCH',
  },
  {
    id: 3,
    quote:
      'The atmospheric design, sensory lighting, and spatial audio were breathtaking. Inomnia does not merely produce events—they curate unforgettable emotional journeys. The attendee feedback has been unparalleled.',
    author: 'Elena Rodriguez',
    role: 'Creative Director',
    company: 'Aura Design Collective',
    location: 'Madrid & Abu Dhabi',
    rating: 5,
    tag: 'PRIVATE GALA & ACTIVATION',
  },
  {
    id: 4,
    quote:
      'Inomnia’s bespoke pavilion design at our trade exposition captivated VIP visitors from the moment they arrived. Their poise under pressure and obsessive attention to detail are why they remain our exclusive agency.',
    author: 'Tariq Al-Mansoor',
    role: 'Head of Brand & Strategic Partnerships',
    company: 'Vanguard Capital',
    location: 'Dubai, UAE',
    rating: 5,
    tag: 'INTERNATIONAL PAVILION',
  },
  {
    id: 5,
    quote:
      'A true masterclass in high-touch hospitality and stagecraft. From live symphonic performances to cutting-edge digital backdrops, every moment was orchestrated with sublime artistry and precision.',
    author: 'Camilla D’Souza',
    role: 'Vice President of Corporate Affairs',
    company: 'Elysian Luxury Group',
    location: 'Geneva & Dubai',
    rating: 5,
    tag: 'CENTENNIAL CELEBRATION',
  },
  {
    id: 6,
    quote:
      'Their team has an extraordinary eye for elegance. They transformed a challenging desert venue into a world-class experiential palace with seamless audiovisual engineering. Truly in a league of their own.',
    author: 'Alexander Sterling',
    role: 'Managing Partner',
    company: 'Sterling & Co. Advisory',
    location: 'New York & Dubai',
    rating: 5,
    tag: 'PRIVATE VIP RETREAT',
  },
];

const easeOut = [0.22, 1, 0.36, 1];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[currentIndex];

  const slideVariants = {
    hidden: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
      filter: 'blur(4px)',
    }),
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.55, ease: easeOut },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      filter: 'blur(4px)',
      transition: { duration: 0.4, ease: easeOut },
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#02060B] pt-8 pb-20 text-white sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28"
    >
      {/* Refined Luxury Ambient Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute -top-32 right-10 h-[400px] w-[400px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1840px] px-6 sm:px-10 md:px-12 lg:px-[58px]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-[clamp(2.8rem,5vw,5.5rem)] font-black uppercase leading-none tracking-tight text-white"
          >
            TESTIMONIALS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-xl text-[15px] font-light text-neutral-400 md:text-[17px]"
          >
            Reflections from our esteemed clients, global partners, and corporate visionaries across Dubai and worldwide.
          </motion.p>
        </div>

        {/* Editorial Showcase Card */}
        <div className="mt-8 lg:mt-10">
          <div className="mx-auto max-w-4xl">
            
            {/* Main Luxury Glass Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-12 md:p-16">
              
              {/* Elegant Watermark Quote Icon */}
              <div className="pointer-events-none absolute -top-4 -left-2 text-white/[0.04]">
                <Quote className="h-36 w-36 rotate-180" />
              </div>

              {/* Dynamic Content Slider */}
              <div className="relative z-10 min-h-[260px] flex flex-col justify-between">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col justify-between"
                  >
                    {/* Top Metadata Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-white">
                          {current.tag}
                        </span>
                      </div>

                      {/* 5-Star Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(current.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* The Quote */}
                    <p className="mt-7 text-lg font-light leading-relaxed text-neutral-200 sm:text-2xl md:text-[26px] md:leading-[1.5]">
                      “{current.quote}”
                    </p>

                    {/* Author Signature & Accreditation */}
                    <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-end">
                      <div>
                        <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
                          {current.author}
                        </h3>
                        <p className="mt-1 text-[13px] font-medium text-neutral-400">
                          {current.role} • <span className="text-white/90">{current.company}</span>
                        </p>
                      </div>

                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                        {current.location}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                {/* Index Counter */}
                <div className="flex items-baseline gap-1 text-[13px] font-bold tracking-wider">
                  <span className="font-display text-xl text-white">
                    0{currentIndex + 1}
                  </span>
                  <span className="text-white/30">/</span>
                  <span className="text-white/40">0{testimonials.length}</span>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? 'w-8 bg-white'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Next / Prev Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Quick-Preview Strip of Other Clients Below */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`group flex flex-col rounded-xl border p-3 text-left transition-all duration-300 ${
                    idx === currentIndex
                      ? 'border-white bg-white/10 shadow-[0_4px_16px_rgba(255,255,255,0.15)]'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]'
                  }`}
                >
                  <span className={`text-[10px] font-black ${idx === currentIndex ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                    0{idx + 1}
                  </span>
                  <p className="mt-1 line-clamp-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    {item.company}
                  </p>
                  <span className="line-clamp-1 text-[9px] text-neutral-400">
                    {item.author.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

