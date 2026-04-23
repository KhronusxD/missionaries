"use client";

/* Uma unidade de azulejo — flor grande + decorações nos cantos */
const TileUnit = () => (
  <svg
    viewBox="0 0 80 80"
    className="h-full w-auto shrink-0"
    aria-hidden="true"
  >
    {/* Bordas tracejadas do azulejo (sutis, apenas vertical) */}
    <line x1="0" y1="10" x2="0" y2="70" stroke="#f2e3c4" strokeWidth="0.5" strokeDasharray="1.5 2" opacity="0.25" />

    {/* 8 pétalas elípticas — mandala */}
    <g fill="#f2e3c4">
      {/* Verticais/horizontais */}
      <ellipse cx="40" cy="12" rx="4.5" ry="9" />
      <ellipse cx="40" cy="68" rx="4.5" ry="9" />
      <ellipse cx="12" cy="40" rx="9" ry="4.5" />
      <ellipse cx="68" cy="40" rx="9" ry="4.5" />
      {/* Diagonais */}
      <ellipse cx="20" cy="20" rx="4" ry="8" transform="rotate(-45 20 20)" />
      <ellipse cx="60" cy="60" rx="4" ry="8" transform="rotate(-45 60 60)" />
      <ellipse cx="60" cy="20" rx="4" ry="8" transform="rotate(45 60 20)" />
      <ellipse cx="20" cy="60" rx="4" ry="8" transform="rotate(45 20 60)" />
    </g>

    {/* Círculos do miolo — amarelo → vermelho */}
    <circle cx="40" cy="40" r="7" fill="#f2a91e" />
    <circle cx="40" cy="40" r="4" fill="#c94a1f" />
    <circle cx="40" cy="40" r="1.5" fill="#4a1608" />

    {/* Pontinhos decorativos nos cantos */}
    <g fill="#f2e3c4" opacity="0.85">
      <circle cx="4" cy="4" r="1.2" />
      <circle cx="76" cy="4" r="1.2" />
      <circle cx="4" cy="76" r="1.2" />
      <circle cx="76" cy="76" r="1.2" />
    </g>

    {/* Cruzetas decorativas entre os cantos e a flor */}
    <g stroke="#f2e3c4" strokeWidth="0.8" opacity="0.55" fill="none">
      <path d="M8 8 L12 12 M72 8 L68 12 M8 72 L12 68 M72 72 L68 68" />
    </g>
  </svg>
);

export default function FlowerBorder({
  variant = "horizontal",
  className = "",
}: {
  variant?: "horizontal" | "top" | "bottom";
  className?: string;
}) {
  const units = Array.from({ length: 18 });

  return (
    <div
      className={`relative flex items-center overflow-hidden bg-blue-deep ${className}`}
      style={{ height: 72 }}
    >
      {/* Grão de papel sobre o azul profundo */}
      <div className="paper-grain-heavy absolute inset-0 opacity-50" />

      {/* Barras finas terracota topo e base — como no cartaz */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-terracota-dk" />
      <div className="absolute inset-x-0 top-[4px] h-px bg-ochre/40" />
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-terracota-dk" />
      <div className="absolute inset-x-0 bottom-[4px] h-px bg-ochre/40" />

      <div className="relative z-10 flex h-full w-full items-center py-2">
        {units.map((_, i) => (
          <TileUnit key={i} />
        ))}
      </div>

      {variant === "top" && (
        <div className="absolute inset-x-0 top-0 h-1.5 bg-terracota-dk" />
      )}
      {variant === "bottom" && (
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-terracota-dk" />
      )}
    </div>
  );
}
