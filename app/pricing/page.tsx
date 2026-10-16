import type { Metadata } from "next";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <ServicesCTA />
    </>
  );
}
