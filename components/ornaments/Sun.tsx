"use client";

import { motion } from "motion/react";

export default function Sun({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 240 240"
      className={className}
      aria-hidden="true"
      initial={{ scale: 0, rotate: -90, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
    >
      <defs>
        <radialGradient id="sun-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#fff3c8" />
          <stop offset="55%" stopColor="#f2a91e" />
          <stop offset="100%" stopColor="#d98819" />
        </radialGradient>
        <filter id="sun-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#4a1608" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Rays — spin slowly */}
      <motion.g
        style={{ transformOrigin: "120px 120px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        filter="url(#sun-shadow)"
      >
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          const long = i % 2 === 0;
          return (
            <g key={i} transform={`rotate(${angle} 120 120)`}>
              <path
                d={
                  long
                    ? "M120 10 L128 62 L112 62 Z"
                    : "M120 24 L126 60 L114 60 Z"
                }
                fill="#f2a91e"
                stroke="#a6371a"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </g>
          );
        })}
      </motion.g>

      {/* Core */}
      <circle cx="120" cy="120" r="56" fill="url(#sun-glow)" stroke="#a6371a" strokeWidth="3" />

      {/* Face */}
      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx="102" cy="112" rx="5" ry="6" fill="#2d1810" />
        <ellipse cx="138" cy="112" rx="5" ry="6" fill="#2d1810" />
        <circle cx="100" cy="110" r="1.5" fill="#fff3c8" />
        <circle cx="136" cy="110" r="1.5" fill="#fff3c8" />
        <path
          d="M100 138 Q120 152 140 138"
          stroke="#2d1810"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* Bochechas */}
        <circle cx="90" cy="132" r="5" fill="#e8591a" opacity="0.4" />
        <circle cx="150" cy="132" r="5" fill="#e8591a" opacity="0.4" />
      </motion.g>
    </motion.svg>
  );
}
