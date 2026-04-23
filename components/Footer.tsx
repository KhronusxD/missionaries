"use client";

import FlowerBorder from "./ornaments/FlowerBorder";

export default function Footer() {
  return (
    <footer className="paper-stains relative bg-ink pb-10 text-center text-kraft">
      <div className="paper-grain-heavy absolute inset-0 opacity-35" />
      <FlowerBorder />

      <div className="relative z-10 mx-auto mt-12 max-w-xl px-6">
        <p className="font-[var(--font-display)] text-2xl text-ochre md:text-3xl">
          Miriam Arruda
        </p>
        <p className="mt-1 text-sm italic md:text-base">
          Missionária em Mossoró/RN
        </p>
        <p className="mt-3 text-sm text-kraft-shade">
          Enviada por <strong>[nome da igreja/ministério]</strong>
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 text-sm">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener"
            className="border-b border-ochre/30 pb-0.5 font-semibold text-ochre transition-colors hover:border-ochre"
          >
            WhatsApp
          </a>
          <span className="text-kraft-shade">·</span>
          <a
            href="https://instagram.com/miriamarruda"
            target="_blank"
            rel="noopener"
            className="border-b border-ochre/30 pb-0.5 font-semibold text-ochre transition-colors hover:border-ochre"
          >
            Instagram
          </a>
        </div>

        <p className="mt-8 text-xs italic text-kraft-shade/70">
          Feito com oração e tinta de cordel · 2026
        </p>
      </div>
    </footer>
  );
}
