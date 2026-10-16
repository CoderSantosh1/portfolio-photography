import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import { localPhotos, photos } from "@/lib/data";
import { btnArrowDark, btnDark, gutter, kicker, section, sectionTitle, textlink } from "@/lib/ui";

const recent = [...photos].sort((a, b) => b.year - a.year).slice(0, 6);

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />

      <section className={section}>
        <div className="mb-[30px] flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className={kicker}>LATEST FRAMES</div>
            <h3 className={sectionTitle}>Recently <em>developed.</em></h3>
          </div>
          <Link className={`${textlink} text-rust hover:text-ink`} href="/portfolio">View full gallery ↗</Link>
        </div>
        <Gallery photos={recent} showFilters={false} />
      </section>

      <section className={`${gutter} relative isolate overflow-hidden py-[90px]`}>
        <Image className="-z-20 object-cover" src={localPhotos.mistyMountains} alt="" fill sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f5f2ebf2,#f5f2eba6_60%,#f5f2eb33)]" />
        <div className="max-w-[560px]">
          <div className={kicker}>LET&apos;S CREATE TOGETHER</div>
          <h3 className={sectionTitle}>Have a story worth <em>telling?</em></h3>
          <div className="mt-[26px] flex flex-wrap items-center gap-[22px]">
            <Link className={btnDark} href="/booking">Book a Session <span className={btnArrowDark}>→</span></Link>
            <Link className={`${textlink} text-rust hover:text-ink`} href="/services">See services &amp; pricing ↗</Link>
          </div>
        </div>
      </section>
    </>
  );
}
