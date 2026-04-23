"use client";

const QUOTES = [
  "Eis-me aqui, envia-me a mim — Isaías 6:8",
  "Como ouvirão, se não há quem pregue? — Romanos 10:14",
  "Ide por todo o mundo — Marcos 16:15",
  "A seara é grande, mas os ceifeiros são poucos — Mateus 9:37",
  "Deus é fiel, e não permitirá — 1 Coríntios 10:13",
  "O Senhor é meu pastor, nada me faltará — Salmos 23:1",
];

export default function ScriptureMarquee() {
  // Duplicated for seamless loop
  const loop = [...QUOTES, ...QUOTES];

  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y-2 border-ink bg-ink py-5 text-kraft"
    >
      <div className="paper-grain-heavy absolute inset-0 opacity-25" />
      <div className="relative flex whitespace-nowrap">
        <div className="flex animate-[marquee_40s_linear_infinite] items-center gap-12 pr-12">
          {loop.map((q, i) => (
            <span
              key={i}
              className="flex items-center gap-6 font-[var(--font-serif)] text-lg italic text-kraft/90 md:text-xl"
            >
              <span className="inline-block h-2 w-2 rotate-45 bg-ochre" />
              {q}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
