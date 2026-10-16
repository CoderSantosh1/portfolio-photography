import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceOffer from "@/components/services/ServiceOffer";
import ProcessSteps from "@/components/services/ProcessSteps";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceOffer />
      <ProcessSteps />
      <ServicesCTA />
    </>
  );
}
