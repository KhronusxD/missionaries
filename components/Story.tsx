"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp, slideFromLeft, slideFromRight, stagger } from "@/lib/variants";

export default function Story() {
  return (
    <section
      id="historia"
      className="paper-stains relative overflow-hidden bg-kraft py-24 md:py-32"
    >
      <div className="paper-grain absolute inset-0 opacity-80" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-center text-xs uppercase italic tracking-[0.28em] text-terracota"
        >
          Testemunho
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="ink-bleed mb-16 text-center font-[var(--font-display)] text-4xl leading-[1.05] tracking-tight text-terracota-dk md:text-6xl"
        >
          Quem é Miriam Arruda
        </motion.h2>

        <div className="grid items-start gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] md:gap-16">
          {/* Photo */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden border-[3px] border-ink bg-kraft-deep shadow-[8px_8px_0_#a6371a]">
              <div className="absolute inset-0" style={{ filter: "url(#rough-edge)" }}>
                <Image
                  src="/fotos/IMG_1366.jpg"
                  alt="Miriam Arruda"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              {/* Grain + halftone — vibe impressão antiga */}
              <div className="paper-grain pointer-events-none absolute inset-0 opacity-35 mix-blend-multiply" />
              <div className="halftone-dots pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply" />
              {/* Vinheta nos cantos */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(45,24,16,0.35)_100%)]" />
              {/* Corner stamps */}
              {(
                [
                  ["-top-2 -left-2", 0],
                  ["-top-2 -right-2", 0.1],
                  ["-bottom-2 -left-2", 0.2],
                  ["-bottom-2 -right-2", 0.3],
                ] as const
              ).map(([pos, delay], i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + delay, type: "spring", damping: 12 }}
                  className={`absolute h-6 w-6 border-2 border-ink bg-terracota ${pos}`}
                />
              ))}
            </div>

            {/* Signature-like caption */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-5 text-center font-[var(--font-hand)] text-2xl text-terracota-dk"
            >
              Miriam Arruda
            </motion.p>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5 text-lg leading-[1.75]"
          >
            <motion.p variants={fadeUp} className="drop-cap">
              Meu nome é <strong>Miriam Arruda</strong>. Nasci em Manaus, e foi
              aqui, no meio da Amazônia, que o Senhor começou a me preparar para
              algo maior do que eu mesma conseguia enxergar.
            </motion.p>
            <motion.p variants={fadeUp}>
              Durante anos, o chamado missionário foi crescendo dentro de mim
              como um fogo que não se apaga. Orei. Chorei. Resisti. Me entreguei.
              E, depois de muito tempo diante de Deus, a resposta veio clara:{" "}
              <strong>Mossoró.</strong>
            </motion.p>

            <motion.blockquote
              variants={slideFromRight}
              className="relative my-8 rounded-sm border-l-4 border-ochre bg-kraft-deep px-7 py-6 italic text-ink-soft shadow-[4px_4px_0_rgba(45,24,16,0.1)]"
            >
              <span className="absolute -top-3 left-5 h-6 w-6 rotate-45 border-2 border-ink bg-ochre" />
              <p className="text-[1.05rem] leading-[1.6]">
                &ldquo;Então ouvi a voz do Senhor, que dizia: A quem enviarei, e
                quem há de ir por nós? Então disse eu: Eis-me aqui, envia-me a
                mim.&rdquo;
              </p>
              <cite className="mt-3 block text-sm font-semibold not-italic tracking-widest text-terracota-dk">
                — Isaías 6:8
              </cite>
            </motion.blockquote>

            <motion.p variants={fadeUp}>
              Eu não vou porque sou forte. Vou porque{" "}
              <strong>Aquele que me chamou é fiel</strong>. E porque sei que,
              quando Deus convoca, Ele também sustenta — muitas vezes através
              das mãos do Seu povo.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
