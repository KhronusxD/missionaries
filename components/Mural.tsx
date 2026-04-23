"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/variants";

/* Edite as legendas livremente — elas aparecem escritas à mão sob cada foto */
const PHOTOS = [
  { src: "/fotos/IMG_1318.jpg", caption: "Antes da partida", rotate: -3 },
  { src: "/fotos/IMG_1367.jpg", caption: "O chamado", rotate: 2 },
  { src: "/fotos/IMG_3718.jpg", caption: "No caminho", rotate: -1.5 },
];

export default function Mural() {
  return (
    <section className="paper-stains relative overflow-hidden bg-kraft py-28 md:py-36">
      <div className="paper-grain absolute inset-0 opacity-80" />

      {/* Cordão do mural */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-24 h-px bg-ink/20 md:top-32"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(45,24,16,0.35) 0 6px, transparent 6px 10px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-center text-xs uppercase italic tracking-[0.28em] text-terracota"
        >
          Fragmentos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="ink-bleed mb-4 text-center font-[var(--font-display)] text-4xl leading-[1.05] text-terracota-dk md:text-6xl"
        >
          Pedaços do caminho
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-xl text-center text-lg leading-relaxed text-ink-soft md:text-xl"
        >
          Histórias em cada rosto, em cada encontro, em cada passo.
          <br />A caminhada não começou ontem.
        </motion.p>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">
          {PHOTOS.map((p, i) => (
            <Polaroid key={p.src} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Polaroid({
  src,
  caption,
  rotate,
  index,
}: {
  src: string;
  caption: string;
  rotate: number;
  index: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 60, rotate: rotate - 6 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        rotate: 0,
        y: -6,
        scale: 1.03,
        transition: { type: "spring", stiffness: 200, damping: 18 },
      }}
      className="group paper-grain relative mx-auto w-full max-w-sm cursor-pointer bg-cream p-4 pb-14 shadow-[8px_12px_0_rgba(45,24,16,0.22),0_30px_60px_-20px_rgba(45,24,16,0.55)] md:p-5 md:pb-16"
    >
      {/* Tape/pin */}
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-[-4deg] bg-ochre/80 shadow-[1px_2px_4px_rgba(0,0,0,0.25)]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.25) 0%, transparent 50%, rgba(0,0,0,0.12) 100%)",
        }}
      />

      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-kraft-deep"
        style={{ filter: "url(#rough-edge)" }}
      >
        <Image
          src={src}
          alt={caption}
          fill
          sizes="(max-width: 768px) 90vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Vinheta + grão + halftone — vibe impressão */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(45,24,16,0.35)_100%)]" />
        <div className="paper-grain pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply" />
        <div className="halftone-dots pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-multiply" />
      </div>

      <figcaption className="mt-5 text-center font-[var(--font-hand)] text-2xl leading-none text-terracota-dk md:text-3xl">
        {caption}
      </figcaption>
    </motion.figure>
  );
}
