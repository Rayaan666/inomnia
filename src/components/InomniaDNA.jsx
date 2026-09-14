import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Sparkles,
  Cpu,
  Zap,
  CheckCircle2,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
  Layers,
  Activity
} from 'lucide-react';

const easeOut = [0.22, 1, 0.36, 1];

const dnaPhases = [
  {
    id: '01',
    key: 'strategy',
    title: 'STRATEGY',
    actionWord: 'THINK.',
    tagline: 'FOUNDATION & INTENT',
    description:
      'We dig deep into your brand DNA, business objectives, and target audience. Before designing a single element, we define the strategic vision that guarantees measurable impact.',
    image: '/images/dna-planning.png',
    alt: 'Strategy & planning session with event layouts, sketches and moodboards.',
    icon: Compass,
    accentColor: '#36c5ff',
    hudCode: '25.2048° N // STRAT-01',
    capabilities: [
      'Audience & Market Research',
      'Spatial Architecture & Flow',
      'Strategic Brand Positioning',
      'Feasibility & ROI Modeling',
    ],
    metric: { label: 'STRATEGIC ACCURACY', value: '100%' },
  },
  {
    id: '02',
    key: 'creative',
    title: 'CREATIVE',
    actionWord: 'IMAGINE.',
    tagline: 'CONCEPT & VISUALIZATION',
    description:
      'Ideas that push beyond boundaries. We fuse immersive storytelling, 3D visual environments, and unexpected aesthetic concepts to ignite emotion and spark conversations.',
    image: '/images/service-exhibitions.png',
    alt: 'Futuristic event stage design with LED screens and dynamic lighting.',
    icon: Sparkles,
    accentColor: '#60a5fa',
    hudCode: '55.2708° E // VIS-02',
    capabilities: [
      '3D Photorealistic Rendering',
      'Atmospheric Lighting Design',
      'Interactive Art Installations',
      'Experiential Storytelling',
    ],
    metric: { label: 'CREATIVE DISTINCTION', value: 'UNMATCHED' },
  },
  {
    id: '03',
    key: 'production',
    title: 'PRODUCTION & TECH',
    actionWord: 'BUILD.',
    tagline: 'PRECISION EXECUTION',
    description:
      'Flawless technical delivery powered by master engineers, custom stage craftsmanship, advanced LED infrastructure, and real-time show automation systems.',
    image: '/images/dna-build-production.png',
    alt: 'Behind-the-scenes event technical setup and production engineering.',
    icon: Cpu,
    accentColor: '#38bdf8',
    hudCode: 'DXB-HQ // TECH-03',
    capabilities: [
      'Bespoke Stage Construction',
      'Advanced LED & Spatial Audio',
      'AI & Real-Time Show Sync',
      'Meticulous On-Site Technical Direction',
    ],
    metric: { label: 'EXECUTION PRECISION', value: '0.0ms DELAY' },
  },
  {
    id: '04',
    key: 'experience',
    title: 'EXPERIENCE',
    actionWord: 'WOW.',
    tagline: 'SENSORY IMPACT',
    description:
      'The moment the lights go down and the experience takes flight. We curate unforgettable, multi-sensory atmospheres that leave a permanent mark on guests and brands alike.',
    image: '/images/who-stage.png',
    alt: 'Live audience experiencing a dramatic stage reveal moment.',
    icon: Zap,
    accentColor: '#93c5fd',
    hudCode: 'LIVE-EMISSION // WOW-04',
    capabilities: [
      'Crowd Sensory Immersion',
      'Seamless Show Protocol',
      'Live Guest Engagement',
      'Lasting Brand Legacy',
    ],
    metric: { label: 'GUEST ENGAGEMENT', value: 'PEAK IMPACT' },
  },
];

export default function InomniaDNA() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto cycle tabs every 6 seconds if auto play is enabled
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % dnaPhases.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentPhase = dnaPhases[activeTab];
  const Icon = currentPhase.icon;

  return (
    <section
      id="dna"
      className="relative isolate overflow-hidden bg-[#02060B] py-20 px-6 sm:px-10 md:px-12 lg:px-16 text-white selection:bg-[#36c5ff]/30 selection:text-white"
      aria-labelledby="dna-heading"
    >
      {/* Background Architectural Grid & Subtle Radial Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#246bff]/10 blur-[150px]" />
        <div className="absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-[#36c5ff]/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1720px]">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#36c5ff] animate-pulse" />
              <span className="text-[11px] sm:text-[12px] font-black uppercase tracking-[0.3em] text-[#36c5ff]">
                THE INOMNIA DNA /// PROCESS MATRIX
              </span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-white/50 hidden sm:inline">
                HOW IDEAS BECOME REALITY
              </span>
            </div>

            <h2
              id="dna-heading"
              className="font-display text-[clamp(2.4rem,4.8vw,5.2rem)] font-black uppercase leading-[0.9] tracking-tight text-white"
            >
              CREATIVITY ISN'T A DEPARTMENT.<br />
              <span className="text-[#36c5ff] text-transparent bg-clip-text bg-gradient-to-r from-[#36c5ff] via-[#60a5fa] to-white">
                IT'S HOW WE THINK.
              </span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col gap-4">
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-white/70 font-light border-l-2 border-[#36c5ff]/60 pl-4">
              From the first strategic spark to the final show-stopping moment, our process is built to create extraordinary experiences that move people and elevate global brands.
            </p>

            {/* Auto-Play Toggle & Status */}
            <div className="flex items-center justify-between pt-2 text-[12px] font-mono text-white/50 border-t border-white/5">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#36c5ff]" />
                <span>PHASE {activeTab + 1} OF 4</span>
              </div>

              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white"
                title={isAutoPlaying ? 'Pause Auto Presentation' : 'Start Auto Presentation'}
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-[#36c5ff]" />
                    <span className="text-[10px] tracking-widest font-sans font-bold uppercase">AUTO-PLAYING</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-white" />
                    <span className="text-[10px] tracking-widest font-sans font-bold uppercase">PAUSED</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Phase Selector Tabs Spine */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {dnaPhases.map((phase, idx) => {
            const isActive = activeTab === idx;
            const TabIcon = phase.icon;

            return (
              <button
                key={phase.id}
                onClick={() => {
                  setActiveTab(idx);
                  setIsAutoPlaying(false);
                }}
                className={`group relative flex flex-col justify-between p-4 sm:p-5 rounded-xl border text-left transition-all duration-300 ${
                  isActive
                    ? 'border-[#36c5ff] bg-gradient-to-b from-[#36c5ff]/15 via-white/[0.04] to-transparent shadow-[0_10px_30px_rgba(54,197,255,0.15)]'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]'
                }`}
              >
                {/* Active Top Glow Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeGlowLine"
                    className="absolute -top-[1px] inset-x-0 h-[2px] bg-gradient-to-r from-[#36c5ff] via-white to-[#36c5ff] rounded-t-xl"
                  />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-[12px] font-bold tracking-widest transition-colors ${
                      isActive ? 'text-[#36c5ff]' : 'text-white/40 group-hover:text-white/70'
                    }`}
                  >
                    PHASE // {phase.id}
                  </span>

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all ${
                      isActive
                        ? 'border-[#36c5ff]/40 bg-[#36c5ff]/20 text-[#36c5ff]'
                        : 'border-white/10 bg-white/5 text-white/40 group-hover:text-white group-hover:border-white/20'
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-[18px] sm:text-[22px] font-black uppercase tracking-wider text-white">
                    {phase.title}
                  </h3>
                  <p
                    className={`text-[11px] font-mono font-bold tracking-widest uppercase transition-colors ${
                      isActive ? 'text-[#36c5ff]' : 'text-white/40'
                    }`}
                  >
                    {phase.actionWord}
                  </p>
                </div>

                {/* Progress bar inside active tab if auto-playing */}
                {isActive && isAutoPlaying && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: 'linear' }}
                    key={activeTab}
                    className="absolute bottom-0 inset-x-0 h-[2px] bg-[#36c5ff] origin-left rounded-b-xl"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Active DNA Phase Interactive Hub */}
        <div className="mt-8 rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.05] via-[#02060B] to-[#02060B] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#36c5ff]/10 rounded-full blur-[140px] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhase.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Interactive Image Canvas with Tech HUD (7 Cols) */}
              <div className="lg:col-span-7 relative group">
                <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-xl border border-white/20 bg-black shadow-2xl">
                  {/* Main Image */}
                  <img
                    src={currentPhase.image}
                    alt={currentPhase.alt}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.9] contrast-[1.05]"
                  />

                  {/* Dark Cinematic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02060B] via-transparent to-[#02060B]/30" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#02060B]/80 via-transparent to-transparent" />

                  {/* Corner Crosshair HUD Markers */}
                  <div className="absolute top-3 left-3 text-white/40 font-mono text-[10px] select-none">+</div>
                  <div className="absolute top-3 right-3 text-white/40 font-mono text-[10px] select-none">+</div>
                  <div className="absolute bottom-3 left-3 text-white/40 font-mono text-[10px] select-none">+</div>
                  <div className="absolute bottom-3 right-3 text-white/40 font-mono text-[10px] select-none">+</div>

                  {/* Top Left HUD Telemetry Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-md border border-white/20 bg-black/60 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-[#36c5ff] animate-ping" />
                    <span className="font-mono text-[10px] font-bold tracking-widest text-white/90">
                      {currentPhase.hudCode}
                    </span>
                  </div>

                  {/* Top Right Tagline Badge */}
                  <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                    <Icon className="w-3.5 h-3.5 text-[#36c5ff]" />
                    <span className="font-mono text-[10px] font-bold tracking-widest text-white">
                      {currentPhase.tagline}
                    </span>
                  </div>

                  {/* Bottom HUD Highlight Metric */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-white/15 bg-black/70 p-3 sm:p-4 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#36c5ff]/20 text-[#36c5ff]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                          {currentPhase.metric.label}
                        </p>
                        <p className="font-display text-[16px] sm:text-[18px] font-black uppercase text-white tracking-wider">
                          {currentPhase.metric.value}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#36c5ff] font-bold">
                      <span>INOMNIA ARCHITECTURE</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Key Capabilities (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[11px] font-bold tracking-widest text-[#36c5ff] uppercase">
                      PHASE {currentPhase.id} // {currentPhase.tagline}
                    </span>
                  </div>

                  <h3 className="font-display text-[clamp(2.2rem,3.8vw,3.8rem)] font-black uppercase leading-[0.92] text-white tracking-tight">
                    {currentPhase.title}
                  </h3>
                  <p className="font-display text-[26px] sm:text-[32px] font-black italic text-[#36c5ff]">
                    {currentPhase.actionWord}
                  </p>
                </div>

                <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/80 font-light">
                  {currentPhase.description}
                </p>

                {/* Key Deliverables Matrix */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                    CORE DISCIPLINE DELIVERABLES
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentPhase.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 transition-all hover:border-[#36c5ff]/50 hover:bg-white/[0.06]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#36c5ff] shrink-0" />
                        <span className="text-[12px] sm:text-[13px] font-semibold text-white/90">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Direct Phase Navigators */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      setActiveTab((prev) => (prev === 0 ? dnaPhases.length - 1 : prev - 1));
                      setIsAutoPlaying(false);
                    }}
                    className="flex items-center gap-2 text-[12px] font-mono font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors"
                  >
                    <span>PREVIOUS PHASE</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab((prev) => (prev + 1) % dnaPhases.length);
                      setIsAutoPlaying(false);
                    }}
                    className="flex items-center gap-2 rounded-full border border-[#36c5ff]/40 bg-[#36c5ff]/10 px-5 py-2 text-[12px] font-mono font-bold uppercase tracking-wider text-[#36c5ff] hover:bg-[#36c5ff] hover:text-black transition-all"
                  >
                    <span>NEXT PHASE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Monolithic Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-white/15 bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-[#36c5ff]/20 text-[#36c5ff] shrink-0 border border-[#36c5ff]/30">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-[#36c5ff] uppercase">
                THE INOMNIA COMMITMENT
              </span>
              <h4 className="font-display text-[22px] sm:text-[28px] font-black uppercase text-white tracking-wide mt-0.5">
                THIS IS HOW IDEAS BECOME <span className="text-[#36c5ff]">EXPERIENCES.</span>
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#36c5ff] px-7 py-3 text-[12px] font-black uppercase tracking-[0.2em] text-black shadow-[0_0_25px_rgba(54,197,255,0.4)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_35px_rgba(255,255,255,0.6)]"
            >
              <span>CREATE WITH US</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
