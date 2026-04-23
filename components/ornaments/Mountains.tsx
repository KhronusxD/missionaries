"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Mountains({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const farY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const nearY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-x-0 ${className}`}>
      {/* Far mountains */}
      <motion.svg
        viewBox="0 0 1200 180"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 w-full h-[180px]"
        style={{ y: farY }}
      >
        <path
          d="M0 180 L0 120 L100 90 L200 110 L320 60 L450 95 L560 55 L680 90 L790 50 L920 85 L1040 65 L1200 95 L1200 180 Z"
          fill="#1e4769"
          opacity="0.55"
        />
      </motion.svg>

      {/* Mid mountains */}
      <motion.svg
        viewBox="0 0 1200 180"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 w-full h-[180px]"
        style={{ y: midY }}
      >
        <path
          d="M0 180 L0 130 L120 95 L240 125 L360 80 L480 120 L600 70 L720 115 L840 85 L960 125 L1080 95 L1200 130 L1200 180 Z"
          fill="#7a2815"
          opacity="0.85"
        />
      </motion.svg>

      {/* Near dunes */}
      <motion.svg
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 w-full h-[160px]"
        style={{ y: nearY }}
      >
        <path
          d="M0 160 L0 120 Q150 90 300 115 Q450 140 600 110 Q750 85 900 120 Q1050 150 1200 115 L1200 160 Z"
          fill="#4a1608"
        />
      </motion.svg>
    </div>
  );
}
