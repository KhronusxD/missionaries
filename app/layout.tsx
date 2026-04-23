import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Raízes do Sertão — Myriam Arruda, Missionária em Mossoró",
  description:
    "De Manaus para Mossoró em 24 de maio. Sustente essa missão no coração do semiárido nordestino. Seja um mantenedor fixo.",
  openGraph: {
    title: "Raízes do Sertão — Myriam Arruda",
    description:
      "Deus me chamou. E eu disse sim. Apoie a missão em Mossoró/RN.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,600&family=Caveat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-kraft text-ink antialiased">
        {/* Filtros SVG globais — bordas rasgadas / xilogravura */}
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <filter id="rough-edge">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.04"
                numOctaves="2"
                seed="5"
                result="noise"
              />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
            </filter>
            <filter id="rough-edge-heavy">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.03"
                numOctaves="3"
                seed="8"
                result="noise"
              />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" />
            </filter>
            <filter id="ink-roughen">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="2"
                seed="3"
                result="noise"
              />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" />
            </filter>
            <filter id="ink-spread">
              <feGaussianBlur stdDeviation="0.4" />
              <feComponentTransfer>
                <feFuncA type="gamma" amplitude="1.3" exponent="0.9" offset="0" />
              </feComponentTransfer>
            </filter>
          </defs>
        </svg>

        <SmoothScroll>{children}</SmoothScroll>
        <FloatingWhatsApp phone="5500000000000" />
      </body>
    </html>
  );
}
