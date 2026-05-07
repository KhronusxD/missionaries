"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ClosingB() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ember py-28 text-center text-cream md:py-36"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-85">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, #7a2815 0%, #4a1608 70%, #2d0a04 100%)",
          }}
        />
        <div className="paper-grain-heavy absolute inset-0 mix-blend-multiply opacity-80" />
        <div className="paper-grain-on-dark absolute inset-0 mix-blend-screen opacity-55" />
        <div className="halftone-dots-lg absolute inset-0 mix-blend-multiply opacity-[0.16]" />
        <div className="halftone-ochre absolute inset-0 mix-blend-screen opacity-[0.1]" />
        <div className="crosshatch absolute inset-0 mix-blend-multiply opacity-[0.08]" />
        <div className="ink-spatter absolute inset-0 mix-blend-multiply opacity-40" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ scale: 0, rotate: -25 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", damping: 10 }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-ochre bg-ink/50 font-[var(--font-display)] text-4xl text-ochre"
        >
          ✝
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mb-12 max-w-2xl font-[var(--font-serif)] italic"
        >
          <p className="text-xl leading-[1.65] text-cream/95 md:text-2xl">
            &ldquo;Como, pois, invocarão aquele em quem não creram? E como crerão
            naquele de quem não ouviram? E como ouvirão, se não há quem
            pregue?&rdquo;
          </p>
          <cite className="mt-4 block text-sm not-italic font-semibold tracking-widest text-ochre md:text-base">
            — Romanos 10:14
          </cite>
        </motion.blockquote>

        <motion.a
          href="#oracao"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", damping: 15 }}
          whileHover={{ y: -3 }}
          whileTap={{ y: 2 }}
          className="inline-flex w-full max-w-xl items-center justify-center gap-3 border-[3px] border-ink bg-ochre px-8 py-6 font-[var(--font-display)] text-lg uppercase tracking-wider text-ink shadow-[0_7px_0_#a6371a,0_20px_40px_-8px_rgba(0,0,0,0.5)] md:text-xl"
        >
          Entrar no grupo de Informativos
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
