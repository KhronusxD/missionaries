"use client";

import { motion } from "motion/react";

type Variant = "tall" | "short" | "barrel" | "paddle";

export default function Cactus({
  variant = "tall",
  className = "",
  delay = 0,
}: {
  variant?: Variant;
  className?: string;
  delay?: number;
}) {
  const paths = {
    tall: (
      <g>
        <path
          d="M50 200 L50 65 Q50 40 70 40 Q90 40 90 65 L90 100 M70 40 L70 15"
          stroke="#2d5f3f"
          strokeWidth="22"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M30 200 L30 110 Q30 88 44 88"
          stroke="#2d5f3f"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />
        {/* Ribs */}
        <path
          d="M60 70 L60 190 M76 70 L76 100"
          stroke="#1e4228"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Flowers on top */}
        <circle cx="70" cy="14" r="5" fill="#f2a91e" stroke="#a6371a" strokeWidth="1.5" />
        <circle cx="50" cy="63" r="4" fill="#c94a1f" />
      </g>
    ),
    short: (
      <g>
        <path
          d="M60 200 L60 95 Q60 72 76 72"
          stroke="#2d5f3f"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M60 130 Q60 108 44 108 L44 80"
          stroke="#2d5f3f"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M60 110 L60 190"
          stroke="#1e4228"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle cx="44" cy="78" r="4" fill="#f2a91e" stroke="#a6371a" strokeWidth="1.2" />
      </g>
    ),
    barrel: (
      <g>
        <ellipse cx="60" cy="160" rx="42" ry="48" fill="#2d5f3f" />
        <path
          d="M34 120 Q60 175 86 120 M22 160 Q60 200 98 160 M30 140 Q60 190 90 140"
          stroke="#1e4228"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="48" cy="118" r="3" fill="#f2a91e" />
        <circle cx="60" cy="114" r="3" fill="#c94a1f" />
        <circle cx="72" cy="118" r="3" fill="#f2a91e" />
      </g>
    ),
    paddle: (
      <g>
        <ellipse cx="50" cy="165" rx="22" ry="34" fill="#2d5f3f" />
        <ellipse cx="80" cy="130" rx="20" ry="28" fill="#2d5f3f" transform="rotate(-10 80 130)" />
        <ellipse cx="35" cy="110" rx="15" ry="22" fill="#2d5f3f" transform="rotate(20 35 110)" />
        {/* Spine dots */}
        {[[48,150],[50,170],[80,130],[85,115],[35,108]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="1.5" fill="#1e4228" />
        ))}
      </g>
    ),
  };

  return (
    <motion.svg
      viewBox="0 0 120 210"
      className={className}
      aria-hidden="true"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <g filter="drop-shadow(3px 4px 0 rgba(45,24,16,0.35))">
        {paths[variant]}
      </g>
    </motion.svg>
  );
}
