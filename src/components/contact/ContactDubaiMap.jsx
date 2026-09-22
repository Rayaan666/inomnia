import React, { useState } from 'react';
import { ArrowUpRight, Navigation, Compass } from 'lucide-react';

const eventVenues = [
  {
    name: 'INOMNIA HEADQUARTERS',
    area: 'Horizon Building, Port Saeed, Deira',
    coords: '25.2532° N, 55.3372° E',
    x: 68,
    y: 36,
    isHQ: true,
  },
  {
    name: 'DUBAI WORLD TRADE CENTRE (DWTC)',
    area: 'Sheikh Zayed Rd / Trade Centre',
    coords: '25.2268° N, 55.2869° E',
    x: 58,
    y: 44,
    isHQ: false,
  },
  {
    name: 'MUSEUM OF THE FUTURE',
    area: 'Financial District',
    coords: '25.2192° N, 55.2819° E',
    x: 55,
    y: 48,
    isHQ: false,
  },
  {
    name: 'COCA-COLA ARENA',
    area: 'City Walk, Al Wasl',
    coords: '25.2052° N, 55.2638° E',
    x: 51,
    y: 53,
    isHQ: false,
  },
  {
    name: 'EXPO CITY DUBAI',
    area: 'Al Wasl Plaza',
    coords: '24.9628° N, 55.1508° E',
    x: 26,
    y: 82,
    isHQ: false,
  },
];

export default function ContactDubaiMap() {
  const [selectedVenue, setSelectedVenue] = useState(eventVenues[0]);
  const [hoveredVenue, setHoveredVenue] = useState(null);

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Horizon+Building+Port+Saeed+Dubai';

  return (
    <section
      id="dubai-location"
      className="relative w-full bg-[#010408] text-white py-20 lg:py-28 px-6 sm:px-10 md:px-14 lg:px-20 border-b border-white/10 overflow-hidden"
      aria-label="Find Us / Dubai Location"
    >
      {/* Section Header Index */}
      <div className="relative z-10 w-full max-w-[1840px] mx-auto flex items-center justify-between pb-6 mb-8 lg:mb-12 border-b border-white/10 text-xs font-mono tracking-[0.25em] text-white/50 uppercase">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          <span>SECTION 03 /// FIND US / DUBAI</span>
        </div>
        <div className="flex items-center gap-2 text-white/40">
          <Compass className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">25.2532° N, 55.3372° E</span>
        </div>
      </div>

      {/* Main Map Visual Container */}
      <div className="relative z-10 w-full max-w-[1840px] mx-auto h-[640px] sm:h-[720px] lg:h-[820px] border border-white/20 bg-[#02060B] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
        
        {/* ================= MONOCHROME ARCHITECTURAL DUBAI CARTOGRAPHY ================= */}
        <div className="absolute inset-0 select-none">
          <svg
            viewBox="0 0 1200 800"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="mapGlow" cx="68%" cy="36%" r="45%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
                <stop offset="50%" stopColor="#0b1b33" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#02060B" stopOpacity="0" />
              </radialGradient>
              
              <pattern id="coordGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <circle cx="60" cy="60" r="1.2" fill="rgba(255,255,255,0.2)" />
              </pattern>
            </defs>

            {/* Background Base */}
            <rect width="100%" height="100%" fill="#02060B" />
            <rect width="100%" height="100%" fill="url(#coordGrid)" />
            <rect width="100%" height="100%" fill="url(#mapGlow)" />

            {/* Ocean / Arabian Gulf deep texture */}
            <path
              d="M 0,0 L 780,0 C 720,110 650,210 540,330 C 460,420 380,510 260,620 C 180,690 100,740 0,800 Z"
              fill="#01060D"
            />

            {/* The Palm Jumeirah outline */}
            <g transform="translate(340, 480) rotate(-35) scale(0.7)" stroke="rgba(255,255,255,0.35)" fill="none" strokeWidth="1.5">
              <ellipse cx="0" cy="0" rx="90" ry="70" strokeDasharray="6 3" strokeOpacity="0.4" />
              <path d="M 0,50 L 0,-20" />
              {[-30, -15, 0, 15, 30].map((deg, i) => (
                <g key={i} transform={`rotate(${deg})`}>
                  <path d="M -50,-10 C -20,-10 0,0 20,-10 C 35,-10 50,-10 50,-10" />
                  <path d="M -60,-25 C -30,-25 0,-15 30,-25 C 45,-25 60,-25 60,-25" />
                </g>
              ))}
              <circle cx="0" cy="55" r="4" fill="rgba(255,255,255,0.6)" />
            </g>

            {/* The World Islands silhouette */}
            <g transform="translate(480, 240) scale(0.75)" fill="rgba(255,255,255,0.1)">
              {Array.from({ length: 28 }).map((_, i) => {
                const rx = (i % 6) * 16 - 40;
                const ry = Math.floor(i / 6) * 14 - 30;
                return (
                  <ellipse
                    key={i}
                    cx={rx + (i % 2 === 0 ? 5 : -4)}
                    cy={ry + (i % 3 === 0 ? 3 : -2)}
                    rx="5"
                    ry="4"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1"
                  />
                );
              })}
            </g>

            {/* Dubai Coastline Hairline */}
            <path
              d="M 850,0 
                 C 800,90 730,170 650,260 
                 C 580,340 500,420 400,520 
                 C 310,610 220,690 120,780 
                 L 100,800"
              fill="none"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="2.5"
            />
            <path
              d="M 855,0 
                 C 805,90 735,170 655,260 
                 C 585,340 505,420 405,520 
                 C 315,610 225,690 125,780"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="6"
            />

            {/* Dubai Creek (Khor Dubai) Meander (Near Port Saeed / Deira) */}
            <path
              d="M 770,180 
                 C 740,210 730,240 760,270 
                 C 800,310 830,320 860,360 
                 C 890,400 890,440 850,470 
                 C 810,500 750,510 700,520"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Major Arterial Roads / Sheikh Zayed Road Axis */}
            <path
              d="M 820,120 L 730,230 L 630,340 L 530,460 L 410,580 L 290,700 L 200,800"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2.5"
              strokeDasharray="8 4"
            />
            <text x="560" y="415" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace" transform="rotate(-49 560 415)">
              E11 SHEIKH ZAYED RD
            </text>

            {/* Al Khail Road / Secondary Arterial */}
            <path
              d="M 870,190 L 780,310 L 680,430 L 570,550 L 460,670 L 350,800"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />

            {/* Airport & Port Saeed Highway Grid */}
            <line x1="720" y1="210" x2="950" y2="280" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <line x1="770" y1="260" x2="980" y2="340" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
            <line x1="700" y1="360" x2="1050" y2="480" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

            {/* Concentric radar rings centered on INOMNIA HQ (around 816, 288) */}
            <g transform="translate(816, 288)">
              <circle r="45" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="3 3" />
              <circle r="100" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" strokeDasharray="4 6" />
              <circle r="180" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <circle r="280" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              
              <line x1="-350" y1="0" x2="350" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="0" y1="-350" x2="0" y2="350" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </g>

            {/* Architectural Cartographic Labels */}
            <text x="830" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace" letterSpacing="2" fontWeight="bold">
              PORT SAEED / DEIRA
            </text>
            <text x="680" y="270" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="1.5">
              BUR DUBAI
            </text>
            <text x="590" y="380" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="monospace" letterSpacing="2">
              DOWNTOWN DUBAI
            </text>
            <text x="440" y="560" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="1.5">
              DUBAI MARINA
            </text>
            <text x="240" y="690" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="1.5">
              EXPO CITY
            </text>
            <text x="180" y="180" fill="rgba(255,255,255,0.3)" fontSize="13" fontFamily="monospace" letterSpacing="4">
              ARABIAN GULF
            </text>
          </svg>
        </div>

        {/* Interactive Venue Markers */}
        <div className="absolute inset-0 pointer-events-auto">
          {eventVenues.map((venue) => {
            const isSelected = selectedVenue.name === venue.name;
            const isHovered = hoveredVenue === venue.name;

            return (
              <div
                key={venue.name}
                style={{ left: `${venue.x}%`, top: `${venue.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                onClick={() => setSelectedVenue(venue)}
                onMouseEnter={() => setHoveredVenue(venue.name)}
                onMouseLeave={() => setHoveredVenue(null)}
              >
                {venue.isHQ ? (
                  <div className="relative flex items-center justify-center">
                    <span className="absolute -inset-5 rounded-full bg-white animate-ping opacity-25" />
                    <span className="absolute -inset-2.5 rounded-full border border-white/80 animate-pulse" />
                    
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-black font-black text-[11px] shadow-[0_0_30px_rgba(255,255,255,0.9)]">
                      HQ
                    </div>

                    <div className="absolute top-11 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/95 border border-white/40 backdrop-blur-md px-3 py-1.5 rounded text-[11px] font-mono tracking-wider text-white shadow-2xl flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span>INOMNIA HQ (PORT SAEED)</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex items-center justify-center">
                    <div
                      className={`h-4 w-4 rounded-full border transition-all duration-300 ${
                        isSelected || isHovered
                          ? 'border-white bg-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.8)]'
                          : 'border-white/60 bg-black/90 group-hover:border-white group-hover:bg-white/60'
                      }`}
                    />
                    {(isHovered || isSelected) && (
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/95 border border-white/30 px-3 py-1 text-[10px] font-mono tracking-wider text-white z-30 shadow-xl">
                        {venue.name}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= MINIMAL EDITORIAL OVERLAY AREA ================= */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-auto z-30 max-w-md">
          <div className="border border-white/25 bg-[#02060B]/95 backdrop-blur-2xl p-6 sm:p-8 space-y-5 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] font-mono tracking-[0.25em] text-white/60 uppercase">
                GEOGRAPHIC CORE
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                GLOBAL OPERATIONS
              </span>
            </div>

            {/* Minimal Editorial Information */}
            <div className="space-y-2.5">
              <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight leading-[0.95]">
                BASED IN DUBAI.<br />
                <span className="text-white/50">CREATING EVERYWHERE.</span>
              </h3>

              <p className="text-sm sm:text-[15px] text-white/80 font-light leading-relaxed">
                From Dubai to destinations around the world, ideas travel wherever the experience needs to happen.
              </p>
            </div>

            {/* Venue Telemetry Details */}
            <div className="p-3 bg-white/5 border border-white/10 font-mono text-xs space-y-1">
              <div className="text-white font-medium flex items-center justify-between">
                <span>{selectedVenue.name}</span>
                {selectedVenue.isHQ && (
                  <span className="text-[9px] px-1.5 py-0.5 bg-white text-black font-bold uppercase">
                    PRIMARY STUDIO
                  </span>
                )}
              </div>
              <div className="text-white/60 text-[11px]">{selectedVenue.area}</div>
              <div className="text-white/40 text-[10px]">{selectedVenue.coords}</div>
            </div>

            {/* Main CTA: GET DIRECTIONS */}
            <div className="pt-1">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-[0.2em] border border-white transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer"
              >
                <span>GET DIRECTIONS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Top-Right Map Controls / Compass Readout */}
        <div className="absolute top-6 right-6 z-30 hidden sm:flex flex-col items-end gap-1.5 font-mono text-[11px] text-white/60 bg-[#02060B]/90 backdrop-blur-md px-4 py-3 border border-white/15">
          <div className="flex items-center gap-2 text-white font-bold">
            <Navigation className="w-3 h-3 rotate-45 text-white" />
            <span>DUBAI METROPOLITAN CARTOGRAPHY</span>
          </div>
          <div className="text-[10px] text-white/50">
            SCALE: 1:50,000 &bull; MONOCHROME VECTOR
          </div>
        </div>

      </div>
    </section>
  );
}
