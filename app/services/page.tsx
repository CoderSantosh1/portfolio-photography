import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import PricingCards from "@/components/services/PricingCards";
import ProcessSteps from "@/components/services/ProcessSteps";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = { title: "Services & Pricing" };

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <PricingCards />
      <ProcessSteps />
      <ServicesCTA />
    </>
  );
}
