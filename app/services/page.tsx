import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import { localPhotos } from "@/lib/data";
import { section } from "@/lib/ui";

export const metadata: Metadata = { title: "Services & Pricing" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="SERVICES & PRICING"
        title={<>Simple, honest<br /><em>pricing.</em></>}
        text="Every booking includes planning, hand editing and a private online gallery. Travel within Switzerland is included."
        image={localPhotos.stormRuins}
      />
      <section className={section}>
        <Services />
      </section>
    </>
  );
}
