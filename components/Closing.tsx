"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Closing() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ember py-32 text-center text-cream md:py-40"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-85"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, #7a2815 0%, #4a1608 70%, #2d0a04 100%)",
          }}
        />
        <div className="paper-grain-heavy absolute inset-0 opacity-70" />
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
          className="mx-auto mb-16 max-w-2xl font-[var(--font-serif)] italic"
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

        <div className="mb-14 space-y-2">
          {[
            { text: "Existe uma cidade.", color: "text-ochre", size: "text-3xl md:text-5xl" },
            { text: "Existem vidas.", color: "text-kraft", size: "text-3xl md:text-5xl" },
            {
              text: "Existe um chamado.",
              color: "text-terracota",
              size: "text-4xl md:text-6xl",
            },
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -40, skewX: 6 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`font-[var(--font-display)] leading-[1.1] tracking-wide ${line.color} ${line.size} text-stamp-sm`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mx-auto mb-6 max-w-xl text-lg leading-[1.65] text-cream/95 md:text-xl"
        >
          E existe uma{" "}
          <strong className="text-ochre">missionária pronta para ir</strong> —
          faltando apenas a igreja que a sustenta.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mb-10 font-[var(--font-serif)] text-lg italic text-kraft md:text-2xl"
        >
          Você foi o motivo de eu ter aberto essa página hoje?
        </motion.p>

        <motion.a
          href="#sustento"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: "spring", damping: 15 }}
          whileHover={{ y: -3 }}
          whileTap={{ y: 2 }}
          className="inline-flex w-full max-w-lg items-center justify-center gap-3 border-[3px] border-ink bg-ochre px-10 py-6 font-[var(--font-display)] text-xl uppercase tracking-wider text-ink shadow-[0_7px_0_#a6371a,0_20px_40px_-8px_rgba(0,0,0,0.5)] md:text-2xl"
        >
          SIM, quero ser parte
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
