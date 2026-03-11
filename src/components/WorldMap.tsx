import React from 'react';
import { motion } from 'motion/react';

const WorldMap = () => {
  const regions = [
    { name: 'Japan', top: '35%', left: '85%', delay: 0.1 },
    { name: 'South Korea', top: '38%', left: '82%', delay: 0.2 },
    { name: 'Europe', top: '30%', left: '50%', delay: 0.3 },
    { name: 'Middle East', top: '45%', left: '60%', delay: 0.4 },
    { name: 'Vietnam', top: '55%', left: '78%', delay: 0, isOrigin: true },
  ];

  return (
    <div className="relative w-full aspect-[2/1] bg-soft-gray/50 border border-black/5 overflow-hidden group">
      {/* SVG Map Placeholder (Simplified) */}
      <svg viewBox="0 0 1000 500" className="w-full h-full opacity-10 grayscale group-hover:opacity-20 transition-opacity duration-1000">
        <path 
          d="M150,150 Q200,100 300,150 T500,150 T700,100 T900,200" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5" 
          className="text-black/20"
        />
        {/* Add more paths for a "tech" map feel */}
        <circle cx="780" cy="275" r="2" className="text-industrial-orange fill-current" />
      </svg>

      {/* Origin Point (Vietnam) */}
      <div className="absolute top-[55%] left-[78%] -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          <div className="w-4 h-4 bg-industrial-orange rounded-full"></div>
          <div className="absolute inset-0 w-4 h-4 bg-industrial-orange rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-[10px] font-black uppercase tracking-widest text-industrial-orange bg-white/90 px-2 py-1 border border-black/5 shadow-sm">Origin: Vietnam</span>
          </div>
        </div>
      </div>

      {/* Export Routes */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        {regions.filter(r => !r.isOrigin).map((region, i) => (
          <motion.path
            key={i}
            d={`M 780 275 Q ${780 + (parseInt(region.left) * 10 - 780) / 2} ${275 - 50} ${parseInt(region.left) * 10} ${parseInt(region.top) * 5}`}
            fill="none"
            stroke="url(#gradient-orange)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: region.delay + 0.5 }}
          />
        ))}
        <defs>
          <linearGradient id="gradient-orange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Region Markers */}
      {regions.filter(r => !r.isOrigin).map((region, i) => (
        <motion.div
          key={i}
          style={{ top: region.top, left: region.left }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: region.delay }}
          className="absolute -translate-x-1/2 -translate-y-1/2 group/marker"
        >
          <div className="w-2 h-2 bg-charcoal rounded-full group-hover/marker:bg-industrial-orange transition-colors"></div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover/marker:opacity-100 transition-opacity">
            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-ink bg-white/90 px-2 py-1 border border-black/10 shadow-sm">{region.name}</span>
          </div>
        </motion.div>
      ))}

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
    </div>
  );
};

export default WorldMap;
