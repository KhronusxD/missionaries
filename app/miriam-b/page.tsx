import HeroB from "@/components/miriam-b/Hero";
import ScriptureMarquee from "@/components/ScriptureMarquee";
import Story from "@/components/Story";
import MuralB from "@/components/miriam-b/Mural";
import MossoroB from "@/components/miriam-b/Mossoro";
import SustentoB from "@/components/miriam-b/Sustento";
import Prayer from "@/components/Prayer";
import ReportsB from "@/components/miriam-b/Reports";
import ClosingB from "@/components/miriam-b/Closing";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raízes do Sertão (B) — Miriam Arruda",
  description:
    "De Manaus para Mossoró em junho. Sustente essa missão no coração do semiárido nordestino.",
};

export default function MiriamBPage() {
  return (
    <main className="relative">
      <HeroB />
      <ScriptureMarquee />
      <Story />
      <MuralB />
      <MossoroB />
      <SustentoB />
      <Prayer />
      <ReportsB />
      <ClosingB />
      <Footer />
    </main>
  );
}
