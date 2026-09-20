import React, { useState } from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { id: 'events', label: 'EVENTS', x: 20, y: 22, connects: ['entertainment', 'giveaways', 'technology'] },
  { id: 'exhibitions', label: 'EXHIBITIONS', x: 80, y: 20, connects: ['technology', 'content', 'giveaways'] },
  { id: 'technology', label: 'TECHNOLOGY', x: 86, y: 55, connects: ['content', 'exhibitions', 'events'] },
  { id: 'content', label: 'CONTENT', x: 75, y: 84, connects: ['technology', 'entertainment', 'giveaways'] },
  { id: 'giveaways', label: 'GIVEAWAYS', x: 50, y: 88, connects: ['events', 'exhibitions', 'content'] },
  { id: 'entertainment', label: 'ENTERTAINMENT', x: 14, y: 52, connects: ['events', 'content', 'giveaways'] },
];

export default function EverythingConnectsSection() {
  const [activeNode, setActiveNode] = useState(null);

  const isConnected = (targetId) => {
    if (!activeNode) return false;
    if (activeNode.id === targetId) return true;
    return activeNode.connects.includes(targetId);
  };

  return (
    <section
      id="everything-connects"
      className="relative w-full bg-[#050505] text-[#F1EFE9] py-24 md:py-36 overflow-hidden border-b border-[#F1EFE9]/10"
    >
      <div className="absolute inset-0 pointer-events-none architectural-grid-dark opacity-50" />

      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-5 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#A98968]" />
            <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-[#A98968]">
              09 // SYNTHESIS
            </span>
            <span className="w-8 h-[1px] bg-[#A98968]" />
          </div>
          <h2 className="font-condensed text-4xl sm:text-6xl md:text-7xl font-semibold uppercase tracking-tight text-[#F1EFE9] mb-4">
            ONE EXPERIENCE.<br />
            <span className="font-serif-editorial italic font-normal text-[#A98968]">
              EVERY DISCIPLINE.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#7C8493] font-light leading-relaxed">
            Hover over any discipline to trace how strategy, design, and live execution synchronize under one cohesive vision.
          </p>
        </div>

        {/* Elegant Editorial Network Canvas */}
        <div className="relative w-full aspect-[1/1] sm:aspect-[16/10] md:aspect-[16/9] max-h-[640px] border border-[#F1EFE9]/15 rounded-xl bg-[#0B0B0B]/80 backdrop-blur overflow-hidden flex items-center justify-center">
          
          {/* Subtle Hairline Coordinate Radar */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[85%] h-[85%] rounded-full border border-[#F1EFE9]/5" />
            <div className="w-[60%] h-[60%] rounded-full border border-[#F1EFE9]/5" />
            <div className="w-[35%] h-[35%] rounded-full border border-[#A98968]/15" />
            <div className="absolute w-full h-[1px] bg-[#F1EFE9]/5" />
            <div className="absolute h-full w-[1px] bg-[#F1EFE9]/5" />
          </div>

          {/* SVG Connecting Network Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {nodes.map((node) => {
              // Center to node line
              const isCenterConnected = activeNode ? isConnected(node.id) : true;
              return (
                <g key={`center-${node.id}`}>
                  <line
                    x1="50"
                    y1="50"
                    x2={node.x}
                    y2={node.y}
                    stroke={activeNode && isCenterConnected ? '#A98968' : 'rgba(241, 239, 233, 0.12)'}
                    strokeWidth={activeNode && isCenterConnected ? '0.35' : '0.15'}
                    strokeDasharray={activeNode && isCenterConnected ? 'none' : '0.5 0.5'}
                    className="transition-all duration-500"
                  />
                </g>
              );
            })}

            {/* Inter-node connection lines */}
            {nodes.map((source) =>
              source.connects.map((targetId) => {
                const target = nodes.find((n) => n.id === targetId);
                if (!target) return null;
                const isHighlight =
                  activeNode &&
                  ((activeNode.id === source.id && activeNode.connects.includes(target.id)) ||
                    (activeNode.id === target.id && activeNode.connects.includes(source.id)));
                return (
                  <line
                    key={`${source.id}-${target.id}`}
                    x1={source.x}
                    y1={source.y}
                    x2={target.x}
                    y2={target.y}
                    stroke={isHighlight ? '#A98968' : 'rgba(241, 239, 233, 0.06)'}
                    strokeWidth={isHighlight ? '0.4' : '0.1'}
                    className="transition-all duration-300"
                  />
                );
              })
            )}
          </svg>

          {/* Large Center Word: INOMNIA */}
          <div className="relative z-20 flex flex-col items-center justify-center p-6 sm:p-10 rounded-full border border-[#A98968]/40 bg-[#050505] shadow-[0_0_50px_rgba(169,137,104,0.15)] select-none">
            <span className="font-mono text-[9px] text-[#A98968] tracking-[0.3em] uppercase block mb-1">
              THE CENTER OF GRAVITY
            </span>
            <span className="font-condensed text-3xl sm:text-5xl md:text-6xl font-black tracking-wider text-[#F1EFE9]">
              INOMNIA
            </span>
            <span className="font-mono text-[8px] text-[#7C8493] tracking-[0.2em] uppercase mt-1">
              ORCHESTRATION HUB
            </span>
          </div>

          {/* Surrounding Interactive Node Tags */}
          {nodes.map((node) => {
            const active = isConnected(node.id);
            const isSelf = activeNode?.id === node.id;
            return (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(node)}
                onMouseLeave={() => setActiveNode(null)}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
              >
                <div
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 backdrop-blur-md flex items-center gap-2 ${
                    isSelf
                      ? 'bg-[#A98968] text-[#050505] border-[#A98968] scale-110 shadow-lg'
                      : active
                      ? 'bg-[#F1EFE9] text-[#050505] border-[#F1EFE9] scale-105'
                      : 'bg-[#050505]/80 text-[#F1EFE9]/80 border-[#F1EFE9]/20 hover:border-[#A98968]'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelf ? 'bg-[#050505]' : active ? 'bg-[#A98968]' : 'bg-[#7C8493]'
                    }`}
                  />
                  <span className="font-condensed text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase whitespace-nowrap">
                    {node.label}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Micro-status readout in bottom corner */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex items-center justify-between text-[9px] font-mono text-[#7C8493] tracking-[0.2em] uppercase pointer-events-none">
            <span>NETWORK: INTEGRATED ARCHITECTURE</span>
            <span className="text-[#A98968]">
              {activeNode ? `FOCUS // ${activeNode.label}` : 'HOVER ANY DISCIPLINE'}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
