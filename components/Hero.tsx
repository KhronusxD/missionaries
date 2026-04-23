"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Sun from "./ornaments/Sun";
import Cactus from "./ornaments/Cactus";
import Mountains from "./ornaments/Mountains";
import FlowerBorder from "./ornaments/FlowerBorder";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden text-kraft paper-stains"
    >
      {/* Azulejo ornamental border — topo */}
      <div className="absolute inset-x-0 top-0 z-[6]">
        <FlowerBorder variant="bottom" />
      </div>

      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 90%, #e8591a 0%, #c94a1f 35%, #a6371a 62%, #7a2815 90%, #4a1608 100%)",
        }}
      />

      {/* Camada 1 — grão escuro (aparece nas áreas mais claras do gradiente) */}
      <div className="paper-grain-heavy absolute inset-0 mix-blend-multiply opacity-85" />

      {/* Camada 2 — fibras CLARAS via screen (aparece nas áreas escuras, como topo) */}
      <div className="paper-grain-on-dark absolute inset-0 mix-blend-screen opacity-55" />

      {/* Camada 3 — halftone em tinta escura (retícula de impressão) */}
      <div className="halftone-dots-lg absolute inset-0 mix-blend-multiply opacity-[0.18]" />

      {/* Camada 4 — halftone claro (ponto ocre sobre áreas escuras) */}
      <div className="halftone-ochre absolute inset-0 mix-blend-screen opacity-[0.12]" />

      {/* Camada 5 — crosshatch xilogravura */}
      <div className="crosshatch absolute inset-0 mix-blend-multiply opacity-[0.07]" />

      {/* Camada 6 — salpicos de tinta */}
      <div className="ink-spatter absolute inset-0 mix-blend-multiply opacity-40" />

      {/* Sun — canto superior direito, estilo cartaz */}
      <motion.div
        className="absolute right-2 top-20 z-[2] md:right-6 md:top-24 lg:right-12 lg:top-28"
        style={{ y: sunY }}
      >
        <Sun className="h-28 w-28 drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)] md:h-44 md:w-44 lg:h-56 lg:w-56" />
      </motion.div>

      {/* Mountains (parallax) */}
      <Mountains className="bottom-[10%] z-[3]" />

      {/* Cacti flanking */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-[4] w-28 md:w-44 lg:w-56">
        <Cactus variant="tall" delay={0.6} className="w-full" />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 z-[4] w-24 md:w-40 lg:w-48">
        <Cactus variant="short" delay={0.8} className="w-full" />
      </div>
      <div className="pointer-events-none absolute bottom-4 left-[18%] z-[4] hidden w-16 md:block lg:w-24">
        <Cactus variant="barrel" delay={1} className="w-full" />
      </div>
      <div className="pointer-events-none absolute bottom-4 right-[22%] z-[4] hidden w-20 md:block lg:w-28">
        <Cactus variant="paddle" delay={1.2} className="w-full" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-[5] mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 pb-48 pt-28 text-center md:pb-56 md:pt-32"
      >
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 inline-block border border-ochre/60 bg-ink/30 px-4 py-2 text-[11px] font-medium uppercase italic tracking-[0.2em] text-ochre backdrop-blur-sm md:text-xs"
        >
          De Manaus para Mossoró &nbsp;·&nbsp; Partida em 24 de maio
        </motion.p>

        {/* Title */}
        <motion.h1
          style={{ y: titleY }}
          className="font-[var(--font-display)] leading-[0.95] tracking-tight"
        >
          <motion.span
            initial={{ opacity: 0, y: 40, skewY: 4 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="ink-bleed-heavy block text-5xl text-ochre md:text-7xl lg:text-8xl"
          >
            Deus me chamou.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="ink-bleed-heavy mt-2 block font-[var(--font-serif)] text-4xl font-black italic text-kraft md:text-6xl lg:text-7xl"
          >
            E eu disse sim.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          style={{ y: subtitleY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-cream/95 md:text-lg"
        >
          No dia <strong className="text-ochre">24 de maio</strong>, deixo minha casa,
          minha família e o que me é familiar para servir como missionária em
          Mossoró. Não vou sozinha — vou sustentada por Cristo e pela igreja que
          Ele levanta ao meu redor.{" "}
          <strong className="text-ochre">Você pode ser parte disso.</strong>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href="#sustento"
            className="group relative inline-flex items-center gap-3 border-2 border-ink bg-ochre px-8 py-5 text-sm font-bold uppercase tracking-wider text-ink shadow-[0_6px_0_#a6371a,0_14px_30px_-6px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffbe2a] hover:shadow-[0_8px_0_#a6371a,0_18px_36px_-6px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-[0_2px_0_#a6371a] md:text-base"
          >
            <motion.span
              animate={{ rotate: [0, -15, 0, -15, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3 }}
              className="text-lg"
            >
              👉
            </motion.span>
            Quero ser mantenedor fixo
          </a>
          <a
            href="#oferta"
            className="group inline-flex items-center gap-1.5 border-b border-cream/30 pb-1 text-sm italic text-cream transition-colors hover:border-ochre hover:text-ochre"
          >
            Prefiro contribuir com uma oferta pontual
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

        {/* Trust */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 text-sm text-cream/85"
        >
          🙏 Mais de <strong className="text-ochre">12</strong> irmãos já se
          comprometeram <span className="mx-2 opacity-50">·</span>
          Meta mensal: <strong className="text-ochre">R$ 2.500</strong>
        </motion.p>
      </motion.div>

      {/* Azulejo ornamental border — base */}
      <div className="absolute inset-x-0 bottom-0 z-[6]">
        <FlowerBorder variant="top" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="pointer-events-none absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Desça</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-cream/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
