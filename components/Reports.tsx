"use client";

import { motion } from "motion/react";
import { fadeUp, stagger } from "@/lib/variants";

const REPORTS = [
  {
    title: "Relatório financeiro",
    desc: "Quanto entrou, em que foi usado",
  },
  {
    title: "Relatório ministerial",
    desc: "O que Deus está fazendo em Mossoró",
  },
  {
    title: "Pedidos e motivos de oração",
    desc: "Para você interceder com propriedade",
  },
  {
    title: "Uma foto, uma história, uma vida",
    desc: "Porque por trás de cada real existe uma alma",
  },
];

export default function Reports() {
  return (
    <section
      id="prestacao"
      className="paper-stains relative overflow-hidden bg-kraft-deep py-28 md:py-36"
    >
      <div className="paper-grain absolute inset-0 opacity-85" />
      <div className="crosshatch absolute inset-0 opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-center text-xs uppercase italic tracking-[0.28em] text-terracota"
        >
          Transparência
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="ink-bleed mb-8 text-center font-[var(--font-display)] text-4xl leading-[1.05] text-terracota-dk md:text-6xl"
        >
          Transparência é um{" "}
          <em className="font-[var(--font-serif)] font-black italic text-ochre">
            ato de fé
          </em>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-xl text-center text-lg leading-relaxed"
        >
          Todo mês você receberá, direto no seu WhatsApp:
        </motion.p>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 space-y-4"
        >
          {REPORTS.map((r, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="group flex gap-5 border-2 border-ink bg-kraft p-5 shadow-[4px_4px_0_#1e4769] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1e4769] md:p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-ochre text-lg text-ink md:h-12 md:w-12 md:text-xl">
                ✓
              </span>
              <div>
                <strong className="block font-[var(--font-display)] text-lg font-normal tracking-wide text-terracota-dk md:text-xl">
                  {r.title}
                </strong>
                <p className="mt-1 text-base text-ink-soft">{r.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl border-[3px] border-ink bg-terracota p-8 text-center text-cream shadow-[6px_6px_0_rgba(45,24,16,0.25)]"
        >
          <p className="text-lg leading-[1.7] md:text-xl">
            Você não está só doando.
            <br />
            <strong className="text-ochre">Você está enviando.</strong>
            <br />
            <span className="mt-2 inline-block text-base opacity-95">
              E tem direito de saber exatamente o que o Senhor está fazendo
              através da sua obediência.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
