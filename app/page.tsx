import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Mural from "@/components/Mural";
import Mossoro from "@/components/Mossoro";
import Sustento from "@/components/Sustento";
import Prayer from "@/components/Prayer";
import Reports from "@/components/Reports";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import ScriptureMarquee from "@/components/ScriptureMarquee";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ScriptureMarquee />
      <Story />
      <Mural />
      <Mossoro />
      <Sustento />
      <Prayer />
      <Reports />
      <Closing />
      <Footer />
    </main>
  );
}
