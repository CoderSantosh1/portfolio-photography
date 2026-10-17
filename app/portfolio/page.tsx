
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import { localPhotos, photos } from "@/site-data";
import { gutter, section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Portfolio Gallery",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        kicker="PORTFOLIO GALLERY"
        title={
          <>
            Every frame.
            <br />
            <em>Another story.</em>
          </>
        }
        image={localPhotos.alpineLake}
        breadcrumb={[
          { label: "HOME", href: "/" },
          { label: "PORTFOLIO GALLERY" },
        ]}
      />

      <section
        className={`${section} grid grid-cols-2 gap-2.5 md:gap-3 xl:grid-cols-3`}
      />

      <section className={`${gutter} pb-12 md:pb-16`}>
        <Gallery photos={photos} />
      </section>
    </>
  );
}
