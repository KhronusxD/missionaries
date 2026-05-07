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
          Um pouco sobre mim
        </motion.h2>

        <div className="grid items-start gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] md:gap-16">
          {/* Photo */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative md:sticky md:top-24 md:self-start"
          >
            <div className="relative aspect-[4/5] overflow-hidden border-[3px] border-ink bg-kraft-deep shadow-[8px_8px_0_#a6371a]">
              <div className="absolute inset-0" style={{ filter: "url(#rough-edge)" }}>
                <Image
                  src="/fotos-2/WhatsApp Image 2026-05-07 at 19.05.19.jpeg"
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
              Me chamo <strong>Miriam</strong>. Nasci em Manaus, no coração da
              Amazônia, onde o Senhor começou a me preparar para algo maior do
              que eu podia imaginar. Ainda criança, meu coração foi incendiado
              pelo desejo de proclamar o Evangelho — começando com amigos no
              meu bairro, na escola, nas comunidades ribeirinhas, com pessoas
              em situação de rua e servindo na minha igreja local.
            </motion.p>
            <motion.p variants={fadeUp}>
              Ao entrar na <strong>Missão Paixão e Compaixão</strong>, em 2019,
              fui inserida na <em>Sala de Oração Selah</em>, um ambiente de
              oração coletiva onde o Senhor me moldou junto com os meus irmãos.
              Na época, eu não compreendia o quanto esse lugar seria vital para
              meu envio.
            </motion.p>
            <motion.p variants={fadeUp}>
              Passaram-se os anos e aquela chama parecia estar se extinguindo.
              Pensei que seria apenas uma missionária intercessora, até que, em
              2024, o Senhor me conduziu à <strong>EMA — Escola de Missões e
              Avivamento</strong>. Isso estava fora dos meus planos, mas Ele me
              guiou graciosamente, mesmo em meio a dificuldades familiares e
              limitações financeiras, me ensinando a confiar que Seus caminhos
              são mais altos que os meus.
            </motion.p>
            <motion.p variants={fadeUp}>
              Amante de cactos <em>(risos)</em>, iniciei a escola sabendo que
              meu prático seria no sertão. Sem revelações, apenas sentia que
              era ali que deveria ir — e o Senhor abriu as portas para isso.
            </motion.p>
            <motion.p variants={fadeUp}>
              Chegando em <strong>Mossoró</strong>, meu coração foi tocado pela
              presença de Jesus nas comunidades — no olhar das crianças, em
              conversas simples com mulheres, na generosidade de pessoas que,
              mesmo com pouco, dão tudo o que têm. As lágrimas foram
              inevitáveis. Queria ficar, mas entendi que era tempo de espera,
              alinhamento e de submeter meu coração ao teste do tempo, junto à
              minha liderança e minha família espiritual.
            </motion.p>
            <motion.p variants={fadeUp}>
              Agora, quase dois anos depois, sinto o Senhor me impulsionando
              novamente para o campo.
            </motion.p>

            <motion.blockquote
              variants={slideFromRight}
              className="relative my-8 rounded-sm border-l-4 border-ochre bg-kraft-deep px-7 py-6 italic text-ink-soft shadow-[4px_4px_0_rgba(45,24,16,0.1)]"
            >
              <span className="absolute -top-3 left-5 h-6 w-6 rotate-45 border-2 border-ink bg-ochre" />
              <p className="text-[1.05rem] leading-[1.6]">
                &ldquo;Então ouvi a voz do Senhor, que dizia: &lsquo;A quem
                enviarei, e quem há de ir por nós?&rsquo; Então disse eu:
                &lsquo;Eis-me aqui, envia-me a mim.&rsquo;&rdquo;
              </p>
              <cite className="mt-3 block text-sm font-semibold not-italic tracking-widest text-terracota-dk">
                — Isaías 6:8
              </cite>
            </motion.blockquote>

            <motion.p variants={fadeUp}>
              Não sou autoconfiante; na verdade, sou bem hesitante. Não acho
              que estou pronta, mas desejo trilhar o caminho proposto por
              <strong> Aquele que me chamou e é fiel para concluir a obra que
              iniciou</strong>.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
