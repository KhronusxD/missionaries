"use client";

import { motion } from "motion/react";
import { fadeUp, stagger } from "@/lib/variants";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  const eyebrowColor = light ? "text-ochre" : "text-terracota";
  const titleColor = light ? "text-kraft" : "text-terracota-dk";
  const subtitleColor = light ? "text-cream/90" : "text-ink/80";
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`max-w-2xl ${alignCls}`}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className={`mb-3 text-xs uppercase italic tracking-[0.28em] ${eyebrowColor}`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className={`font-[var(--font-display)] text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl ${titleColor}`}
        style={{ textShadow: light ? "none" : "2px 2px 0 rgba(45,24,16,0.08)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`mt-6 text-lg leading-relaxed md:text-xl ${subtitleColor}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
