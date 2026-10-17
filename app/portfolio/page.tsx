import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import { categories, localPhotos, photos, photosIn } from "@/site-data";
import { gutter, section } from "@/components/ui";

export const metadata: Metadata = { title: "Portfolio Gallery" };

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        kicker="PORTFOLIO GALLERY"
        title={<>Every frame.<br /><em>Another story.</em></>}
        // text={`${photos.length} photographs across four collections — click any image to view it full screen with location and camera settings.`}
        image={localPhotos.alpineLake}
      />
 
      <section className={`${section} grid grid-cols-2 gap-2.5 md:gap-3 xl:grid-cols-3`}>
        {/* {categories.map((c) => (
          <Link key={c.slug} href={`/portfolio/${c.slug}`} className="group relative h-[130px] overflow-hidden rounded-[3px] text-white min-[421px]:h-[170px]">
            <Image className="object-cover transition-transform duration-700 group-hover:scale-105" src={c.cover} alt="" fill sizes="(max-width: 768px) 50vw, 22vw" />
            <span className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-[#080c0ed1]" />
            <span className="absolute bottom-3.5 left-4 z-[1] grid gap-1">
              <small className="text-[8px] tracking-[1.6px] text-peach">{photosIn(c.slug).length} PHOTOS</small>
              <strong className="font-serif text-2xl font-medium">{c.title}</strong>
            </span>
          </Link>
        ))} */}
      </section>

      <section className={`${gutter} pb-12 md:pb-16`}>
        <Gallery photos={photos} />
      </section>
    </>
  );
}
