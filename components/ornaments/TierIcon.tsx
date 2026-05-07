type Colors = { petals: string; center: string; dot: string };

const PALETTE: Record<number, Colors> = {
  50: { petals: "#f2a91e", center: "#a6371a", dot: "#2d1810" },   // ochre + terracota
  100: { petals: "#c94a1f", center: "#f2a91e", dot: "#2d1810" },  // terracota + ochre
  200: { petals: "#1e4769", center: "#f2a91e", dot: "#2d1810" },  // blue-deep + ochre
};

export default function TierIcon({ value }: { value: number }) {
  // Sol — para o tier "Outro"
  if (value === 0) {
    return (
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="15.2"
            y="2.5"
            width="1.6"
            height="5"
            fill="#f2a91e"
            transform={`rotate(${angle} 16 16)`}
          />
        ))}
        <circle cx="16" cy="16" r="6" fill="#f2a91e" stroke="#a6371a" strokeWidth="1.4" />
        <circle cx="16" cy="16" r="2.2" fill="#a6371a" />
      </svg>
    );
  }

  const c = PALETTE[value] ?? PALETTE[100];

  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
      <g fill={c.petals}>
        <ellipse cx="16" cy="5" rx="2.4" ry="4.8" />
        <ellipse cx="16" cy="27" rx="2.4" ry="4.8" />
        <ellipse cx="5" cy="16" rx="4.8" ry="2.4" />
        <ellipse cx="27" cy="16" rx="4.8" ry="2.4" />
        <ellipse cx="9" cy="9" rx="2" ry="4" transform="rotate(-45 9 9)" />
        <ellipse cx="23" cy="23" rx="2" ry="4" transform="rotate(-45 23 23)" />
        <ellipse cx="23" cy="9" rx="2" ry="4" transform="rotate(45 23 9)" />
        <ellipse cx="9" cy="23" rx="2" ry="4" transform="rotate(45 9 23)" />
      </g>
      <circle cx="16" cy="16" r="3.6" fill={c.center} />
      <circle cx="16" cy="16" r="1.2" fill={c.dot} />
    </svg>
  );
}
