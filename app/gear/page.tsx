
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Gear from "@/components/Gear";
import { section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gear & Lenses",
};

export default function GearPage() {
  return (
    <>
      <PageHeader
        kicker="GEAR & LENSES"
        title={
          <>
            Tools that get
            <br />
            <em>out of the way.</em>
          </>
        }
        image="/gear/page-header.jpg"
        breadcrumb={[
          { label: "HOME", href: "/" },
          { label: "GEAR & LENSES" },
        ]}
      />

      <section className={section}>
        <Gear />
      </section>
    </>
  );
}
