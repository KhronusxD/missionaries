"use client";

import { motion } from "motion/react";
import Cactus from "./ornaments/Cactus";
import { fadeUp, stagger } from "@/lib/variants";

export default function Mossoro() {
  return (
    <section
      id="mossoro"
      className="paper-stains relative overflow-hidden bg-kraft-deep py-28 md:py-36"
    >
      <div className="paper-grain absolute inset-0 opacity-85" />
      <div className="crosshatch absolute inset-0 opacity-[0.06]" />

      {/* Cacti decor */}
      <div className="pointer-events-none absolute -left-6 bottom-0 z-0 w-28 opacity-40 md:w-36">
        <Cactus variant="tall" />
      </div>
      <div className="pointer-events-none absolute -right-6 bottom-0 z-0 w-28 opacity-40 md:w-36">
        <Cactus variant="short" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-xs uppercase italic tracking-[0.28em] text-terracota"
        >
          O campo
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="ink-bleed mb-10 font-[var(--font-display)] text-4xl leading-[1.05] text-terracota-dk md:text-6xl"
        >
          Por que Mossoró?
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-7 text-lg leading-[1.75] text-ink"
        >
          <motion.p variants={fadeUp}>
            Mossoró é a segunda maior cidade do Rio Grande do Norte, no coração
            do semiárido nordestino. Uma terra <em>seca por fora</em>, e muitas
            vezes <em>seca também por dentro</em> — onde milhares de vidas ainda
            não conhecem o evangelho vivo de Jesus Cristo.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="border-2 border-ink border-l-[6px] border-l-terracota bg-kraft p-6 text-left shadow-[4px_4px_0_rgba(45,24,16,0.1)] md:p-8"
          >
            <p className="mb-2 font-[var(--font-display)] text-sm uppercase tracking-[0.12em] text-terracota-dk">
              O campo de atuação
            </p>
            <p className="italic text-ink-soft">
              [Descrever aqui o campo específico: plantação de igreja, trabalho
              com crianças, mulheres, discipulado, apoio a uma igreja local já
              existente. Este trecho é crucial — personalize com a realidade do
              ministério.]
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-xl font-semibold leading-[1.5] text-ink md:text-2xl"
          >
            Vou para lá para{" "}
            <strong className="text-terracota-dk">
              [resumir a missão em uma frase de impacto]
            </strong>
            .
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 inline-flex flex-wrap justify-center gap-4 border-[3px] border-double border-terracota-dk bg-kraft px-9 py-5 font-[var(--font-display)] text-base tracking-[0.08em] text-terracota-dk shadow-[5px_5px_0_#1e4769] md:text-xl"
          >
            <span>Não é turismo.</span>
            <span className="text-ochre">·</span>
            <span>Não é fase.</span>
            <span className="text-ochre">·</span>
            <span className="text-terracota">É chamado.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
