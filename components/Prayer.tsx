"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { fadeUp, stagger } from "@/lib/variants";

const PRAYER_POINTS = [
  { icon: "🛡️", text: "Proteção na viagem e na chegada" },
  { icon: "💡", text: "Sabedoria para os primeiros passos em solo novo" },
  {
    icon: "🌾",
    text: "Frutos espirituais reais — vidas transformadas, não números",
  },
  { icon: "❤️‍🩹", text: "Minha saúde física, emocional e espiritual" },
  {
    icon: "🏡",
    text: "Minha família, que fica em Manaus com o coração aberto",
  },
];

export default function Prayer() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = data.get("nome");
    const whatsapp = data.get("whatsapp");
    const email = data.get("email");

    const msg = encodeURIComponent(
      `Olá Miriam! Quero orar por você e acompanhar a missão em Mossoró.\n\n` +
        `Nome: ${nome}\nWhatsApp: ${whatsapp}\nE-mail: ${email}\n\n` +
        `Pode me incluir na sua lista? 🙏`,
    );
    window.open(`https://wa.me/5500000000000?text=${msg}`, "_blank");
    e.currentTarget.reset();
    setShowForm(false);
  };

  return (
    <section
      id="oracao"
      className="paper-stains relative overflow-hidden bg-kraft py-28 text-center md:py-36"
    >
      <div className="paper-grain absolute inset-0 opacity-80" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", damping: 12 }}
          className="mb-4 inline-block text-5xl"
        >
          🙏
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-3 text-xs uppercase italic tracking-[0.28em] text-terracota"
        >
          Mais que dinheiro
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="ink-bleed mb-8 font-[var(--font-display)] text-4xl leading-[1.05] text-terracota-dk md:text-6xl"
        >
          Ore por mim.
          <br />
          <em className="font-[var(--font-serif)] font-black italic text-ochre">
            Isso vale mais que qualquer valor.
          </em>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed"
        >
          Se por agora você não pode contribuir financeiramente, existe algo que
          vale ainda mais: <strong>sua oração</strong>. Nenhum missionário
          sobrevive sem ela.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 font-[var(--font-display)] text-lg uppercase tracking-[0.05em] text-terracota-dk"
        >
          Ore por mim pedindo a Deus:
        </motion.p>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-12 max-w-lg space-y-3 text-left"
        >
          {PRAYER_POINTS.map((p, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="flex items-center gap-4 rounded-sm border border-ink/20 border-l-[4px] border-l-terracota bg-kraft-deep px-5 py-4 text-base"
            >
              <span className="text-2xl">{p.icon}</span>
              <span>{p.text}</span>
            </motion.li>
          ))}
        </motion.ul>

        {!showForm ? (
          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => setShowForm(true)}
            className="group inline-flex items-center gap-3 border-2 border-ink bg-ochre px-8 py-4 font-bold uppercase tracking-wider text-ink shadow-[0_5px_0_#a6371a] transition-all hover:-translate-y-0.5 hover:bg-[#ffbe2a] hover:shadow-[0_7px_0_#a6371a]"
          >
            Quero receber as atualizações e orar por Miriam
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="mx-auto max-w-lg border-2 border-ink bg-kraft-deep p-6 text-left shadow-[6px_6px_0_#c94a1f] md:p-8"
          >
            <Field label="Seu nome" name="nome" placeholder="Como devo te chamar?" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field
                label="WhatsApp"
                name="whatsapp"
                type="tel"
                placeholder="(00) 00000-0000"
              />
              <Field
                label="E-mail"
                name="email"
                type="email"
                placeholder="seuemail@exemplo.com"
              />
            </div>
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 border-2 border-ink bg-ochre px-6 py-4 font-bold uppercase tracking-wider text-ink shadow-[0_4px_0_#a6371a] transition-all hover:-translate-y-0.5 hover:bg-[#ffbe2a]"
            >
              Quero orar e acompanhar →
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="mb-4 block">
      <span className="mb-2 block font-[var(--font-display)] text-[11px] uppercase tracking-[0.12em] text-terracota-dk">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-sm border-2 border-ink bg-cream px-4 py-3 text-base text-ink placeholder:text-ink-soft/50 focus:border-terracota focus:shadow-[0_0_0_3px_rgba(201,74,31,0.2)] focus:outline-none"
      />
    </label>
  );
}
