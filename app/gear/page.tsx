import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Gear from "@/components/Gear";
import { section } from "@/lib/ui";

export const metadata: Metadata = { title: "Gear & Lenses" };

export default function GearPage() {
  return (
    <>
      <PageHeader
        kicker="GEAR & LENSES"
        title={<>Tools that get<br /><em>out of the way.</em></>}
        // text="A small, trusted kit chosen for quiet operation, beautiful rendering and big archival prints."
        image="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=2000&q=85"
      />
      <section className={section}>
        <Gear />
      </section>
    </>
  );
}
