import { servicesPage } from "@/site-data";
import SplitHero from "@/components/motion/SplitHero";
import BehindTheScenes from "./BehindTheScenes";

export default function ServicesHero() {
  return (
    <SplitHero
      kicker="Services"
      lines={[{ text: "More than" }, { text: "just a photoshoot." }, { text: "A shared experience.", accent: true }]}
      image={servicesPage.heroImage}
      alt="Photographer's view over alpine peaks at golden hour"
      target="#offer"
      targetLabel="Scroll to services"
      aside={<BehindTheScenes />}
    />
  );
}
