"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { fadeUp, stagger } from "@/lib/variants";

type Tier = {
  value: number;
  label: string;
  name: string;
  emoji: string;
  accent: string;
};

const TIERS: Tier[] = [
  { value: 50, label: "R$ 50", name: "Semeador", emoji: "💚", accent: "#4a7a53" },
  { value: 100, label: "R$ 100", name: "Intercessor", emoji: "💙", accent: "#3d6d8f" },
  { value: 200, label: "R$ 200", name: "Sustentador", emoji: "💜", accent: "#7a4a8f" },
];

const META = 2500;
const RAISED = 980;
const MANTENEDORES = 12;

export default function Sustento() {
  const [selected, setSelected] = useState<number | "custom">(100);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const percentage = Math.round((RAISED / META) * 100);

  const waMsg = encodeURIComponent(
    `Oi Miriam! Quero ser mantenedor da missão em Mossoró com ${
      selected === "custom" ? "um valor personalizado" : `R$ ${selected}/mês`
    }.`,
  );

  const ctaLabel =
    selected === "custom"
      ? "Quero contribuir com outro valor"
      : `Quero contribuir com R$ ${selected}/mês`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("chave-pix-da-miriam@email.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section
      ref={ref}
      id="sustento"
      className="paper-stains relative overflow-hidden bg-blue-deep py-28 text-cream md:py-36"
    >
      <div className="paper-grain-heavy absolute inset-0 mix-blend-multiply opacity-80" />
      <div className="paper-grain-on-dark absolute inset-0 mix-blend-screen opacity-50" />
      <div className="halftone-ochre absolute inset-0 mix-blend-screen opacity-[0.14]" />
      <div className="halftone-dots-lg absolute inset-0 mix-blend-multiply opacity-[0.12]" />
      <div className="ink-spatter absolute inset-0 mix-blend-multiply opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,169,30,0.14),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-center text-xs uppercase italic tracking-[0.28em] text-ochre"
        >
          Como participar
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-center font-[var(--font-display)] text-4xl leading-[1.05] text-kraft md:text-6xl"
        >
          Duas formas de fazer parte
          <br />
          <span className="italic text-ochre">dessa missão</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-cream/90 md:text-lg"
        >
          Todo missionário precisa de duas coisas: uma igreja que{" "}
          <strong className="text-ochre">ora</strong> e mantenedores que{" "}
          <strong className="text-ochre">sustentam</strong>. Deus não chama
          obreiros para deixá-los sozinhos — Ele chama a Igreja inteira para a
          obra.{" "}
          <strong className="text-ochre">Sua parte importa.</strong>
        </motion.p>

        {/* Progress meter */}
        <ProgressMeter
          active={inView}
          raised={RAISED}
          meta={META}
          mantenedores={MANTENEDORES}
          percentage={percentage}
        />

        {/* MAIN CARD — MANTENEDOR FIXO */}
        <TiltCard className="relative mt-12 border-[3px] border-ochre bg-kraft p-8 text-ink shadow-[0_0_0_3px_#2d1810,14px_14px_0_#c94a1f] md:p-12">
          <div className="absolute -top-4 right-6 rotate-[2deg] border-2 border-ink bg-ochre px-4 py-2 font-[var(--font-display)] text-xs uppercase tracking-[0.15em] text-ink shadow-[3px_3px_0_#a6371a]">
            Mais importante
          </div>

          <div className="mb-6 flex items-start gap-4">
            <span className="text-3xl">🟢</span>
            <div>
              <h3 className="font-[var(--font-display)] text-3xl leading-tight text-terracota-dk md:text-4xl">
                Seja um mantenedor fixo
              </h3>
              <p className="mt-1 text-sm italic text-ink-soft">
                Sustento recorrente mensal
              </p>
            </div>
          </div>

          <p className="mb-8 text-[1.05rem] leading-[1.7]">
            O sustento recorrente é o que permite que eu permaneça no campo,
            com o básico garantido —{" "}
            <strong>moradia, alimentação, transporte</strong> e os recursos da
            própria missão. Minha meta é{" "}
            <strong>R$ 2.500 por mês</strong>, formada por irmãos que se
            comprometem com uma quantia mensal, seja ela qual for.
          </p>

          <p className="mb-5 font-[var(--font-display)] text-sm uppercase tracking-[0.05em] text-terracota-dk">
            Escolha um valor e seja parte:
          </p>

          <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {TIERS.map((tier) => (
              <TierOption
                key={tier.value}
                tier={tier}
                selected={selected === tier.value}
                onSelect={() => setSelected(tier.value)}
              />
            ))}
            <TierOption
              tier={{
                value: 0,
                label: "Outro",
                name: "O que Deus colocar no seu coração",
                emoji: "⭐",
                accent: "#a6371a",
              }}
              selected={selected === "custom"}
              onSelect={() => setSelected("custom")}
              custom
            />
          </div>

          <div className="mb-8 border-2 border-ink bg-terracota px-6 py-5 text-center text-cream">
            <p className="text-base leading-snug md:text-lg">
              🙌 <strong className="text-xl text-ochre">50 mantenedores</strong>{" "}
              de R$ 50 já fecham a meta.
              <br />
              Pode ser você um deles?
            </p>
          </div>

          <a
            href={`https://wa.me/5500000000000?text=${waMsg}`}
            target="_blank"
            rel="noopener"
            className="group flex w-full items-center justify-center gap-3 border-2 border-ink bg-ochre px-8 py-5 text-center font-[var(--font-serif)] text-base font-bold uppercase tracking-wider text-ink shadow-[0_5px_0_#a6371a] transition-all hover:-translate-y-0.5 hover:bg-[#ffbe2a] hover:shadow-[0_7px_0_#a6371a] active:translate-y-1 active:shadow-[0_1px_0_#a6371a] md:text-lg"
          >
            {ctaLabel}
            <span className="transition-transform group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </TiltCard>

        {/* SECONDARY CARD — OFERTA PONTUAL */}
        <TiltCard
          id="oferta"
          className="mt-10 border-[3px] border-ink bg-kraft-deep p-8 text-ink shadow-[10px_10px_0_rgba(0,0,0,0.25)] md:p-12"
        >
          <div className="mb-6 flex items-start gap-4">
            <span className="text-3xl">🔵</span>
            <div>
              <h3 className="font-[var(--font-display)] text-3xl leading-tight text-terracota-dk md:text-4xl">
                Oferta pontual
              </h3>
              <p className="mt-1 text-sm italic text-ink-soft">
                Contribuição única
              </p>
            </div>
          </div>

          <p className="mb-8 text-[1.05rem] leading-[1.7]">
            Para os custos da ida —{" "}
            <strong>passagem, mudança, estrutura inicial, documentação</strong>{" "}
            e os primeiros dias no campo —, qualquer valor único também é uma
            bênção e me ajuda a começar com o pé direito.
          </p>

          <a
            href="#contribuir"
            className="group flex w-full items-center justify-center gap-2 border-2 border-ochre bg-transparent px-8 py-4 text-base font-bold uppercase tracking-wider text-ink transition-all hover:bg-ochre md:text-lg"
          >
            Fazer uma oferta pontual
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </TiltCard>

        {/* PIX BOX */}
        <motion.div
          id="contribuir"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 border-[3px] border-ochre bg-kraft p-8 text-center text-ink shadow-[0_0_0_2px_rgba(0,0,0,0.1),12px_12px_0_rgba(0,0,0,0.25)] md:p-12"
        >
          <h3 className="mb-6 font-[var(--font-display)] text-2xl text-terracota-dk md:text-3xl">
            📱 Dados para contribuição
          </h3>

          <div className="mx-auto grid max-w-md gap-3 text-left">
            <div className="grid grid-cols-[90px_1fr] items-center gap-4 border-[1.5px] border-ink bg-cream px-4 py-3">
              <span className="font-[var(--font-display)] text-xs uppercase tracking-[0.08em] text-terracota-dk">
                PIX
              </span>
              <div className="flex items-center justify-between gap-3">
                <code className="truncate font-mono font-semibold">
                  [chave a ser inserida]
                </code>
                <button
                  onClick={handleCopy}
                  className="shrink-0 rounded-sm bg-blue-deep px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-blue-night"
                >
                  {copied ? "Copiado!" : "Copiar"}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-[90px_1fr] items-center gap-4 border-[1.5px] border-ink bg-cream px-4 py-3">
              <span className="font-[var(--font-display)] text-xs uppercase tracking-[0.08em] text-terracota-dk">
                Nome
              </span>
              <span>Miriam Arruda</span>
            </div>
            <div className="grid grid-cols-[90px_1fr] items-center gap-4 border-[1.5px] border-ink bg-cream px-4 py-3">
              <span className="font-[var(--font-display)] text-xs uppercase tracking-[0.08em] text-terracota-dk">
                Banco
              </span>
              <span>[banco]</span>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
            Ao transferir, envie o comprovante pelo WhatsApp para que eu possa
            te agradecer pessoalmente e incluir você na minha{" "}
            <strong>lista de oração e prestação de contas mensal</strong>.
          </p>

          <a
            href="https://wa.me/5500000000000?text=Oi%20Miriam%2C%20acabei%20de%20contribuir%20com%20a%20miss%C3%A3o!%20Segue%20o%20comprovante%20em%20anexo."
            target="_blank"
            rel="noopener"
            className="mt-6 flex w-full items-center justify-center gap-2 border-2 border-[#128c3f] bg-[#25d366] px-6 py-4 text-center font-bold uppercase tracking-wider text-white shadow-[0_4px_0_#128c3f] transition-all hover:-translate-y-0.5 hover:bg-[#2fe373] hover:shadow-[0_6px_0_#128c3f]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                fill="currentColor"
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
              />
            </svg>
            Enviar comprovante pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ========== Progress Meter ========== */
function ProgressMeter({
  active,
  raised,
  meta,
  mantenedores,
  percentage,
}: {
  active: boolean;
  raised: number;
  meta: number;
  mantenedores: number;
  percentage: number;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-14 rounded-sm border-2 border-ochre/60 bg-blue-night/60 p-6 backdrop-blur-sm md:p-8"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="font-[var(--font-display)] text-xs uppercase tracking-[0.15em] text-ochre">
            Meta mensal
          </p>
          <p className="font-[var(--font-display)] text-3xl text-kraft md:text-4xl">
            <AnimatedNumber value={raised} active={active} prefix="R$ " />
            <span className="ml-2 text-lg text-cream/60">
              / R$ {meta.toLocaleString("pt-BR")}
            </span>
          </p>
        </div>
        <div className="text-right">
          <p className="font-[var(--font-display)] text-xs uppercase tracking-[0.15em] text-ochre">
            Mantenedores
          </p>
          <p className="font-[var(--font-display)] text-3xl text-kraft md:text-4xl">
            <AnimatedNumber value={mantenedores} active={active} />
          </p>
        </div>
      </div>

      <div className="relative h-4 overflow-hidden rounded-sm border-2 border-ink bg-kraft-deep/30">
        <motion.div
          initial={{ width: 0 }}
          animate={active ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative h-full bg-gradient-to-r from-ochre via-[#ffbe2a] to-ochre"
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent 0, transparent 6px, rgba(0,0,0,0.15) 6px, rgba(0,0,0,0.15) 12px)",
            }}
          />
        </motion.div>
      </div>
      <p className="mt-2 text-right text-sm text-cream/70">
        {percentage}% da meta alcançada
      </p>
    </motion.div>
  );
}

function AnimatedNumber({
  value,
  active,
  prefix = "",
}: {
  value: number;
  active: boolean;
  prefix?: string;
}) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  const rounded = useTransform(spring, (v) =>
    `${prefix}${Math.round(v).toLocaleString("pt-BR")}`,
  );
  const [text, setText] = useState(`${prefix}0`);

  useEffect(() => {
    if (active) mv.set(value);
  }, [active, value, mv]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setText(v));
    return unsub;
  }, [rounded]);

  return <span>{text}</span>;
}

/* ========== Tier option ========== */
function TierOption({
  tier,
  selected,
  onSelect,
  custom = false,
}: {
  tier: Tier;
  selected: boolean;
  onSelect: () => void;
  custom?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative flex h-full flex-col items-center justify-center gap-1 rounded-sm border-2 px-3 py-4 text-center transition-all ${
        selected
          ? "border-terracota-dk bg-ochre shadow-[4px_4px_0_#a6371a]"
          : "border-ink bg-cream shadow-[3px_3px_0_rgba(45,24,16,0.15)] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#c94a1f]"
      }`}
    >
      <span className="text-2xl">{tier.emoji}</span>
      <span
        className={`font-[var(--font-display)] leading-none ${
          custom ? "text-base" : "text-xl"
        } text-terracota-dk`}
      >
        {tier.label}
        {!custom && <small className="ml-0.5 text-[0.65em] opacity-70">/mês</small>}
      </span>
      <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
        {tier.name}
      </span>
      {selected && (
        <motion.span
          layoutId="tier-pin"
          className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-ink bg-terracota text-xs font-bold text-cream"
        >
          ✓
        </motion.span>
      )}
    </button>
  );
}

/* ========== Tilt card ========== */
function TiltCard({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rx = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const ry = useSpring(rotateY, { stiffness: 180, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 6);
    rotateX.set(-py * 6);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
