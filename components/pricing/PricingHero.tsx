import { localPhotos } from "@/site-data";
import SplitHero from "@/components/motion/SplitHero";

export default function PricingHero() {
  return (
    <SplitHero
      kicker="Pricing"
      lines={[{ text: "Simple," }, { text: "honest pricing." }, { text: "No surprises.", accent: true }]}
      image={localPhotos.mistyMountains}
      alt="Soft morning light over misty mountains"
      target="#pricing"
      targetLabel="Scroll to pricing"
    />
  );
}
