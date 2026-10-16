import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { localPhotos, philosophy, stats } from "@/lib/data";
import { btnArrowDark, btnDark, kicker, panel, section, sectionTitle } from "@/lib/ui";

export const metadata: Metadata = { title: "Artist Philosophy" };

const body = "text-[13px] leading-[1.9] text-muted";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="ARTIST PHILOSOPHY"
        title={<>I don&apos;t just take pictures.<br /><em>I preserve feelings.</em></>}
        image={localPhotos.alpineLake}
      />

      <section className={`${section} grid grid-cols-1 items-center gap-[clamp(32px,6vw,90px)] lg:grid-cols-[.9fr_1.1fr]`}>
        <div className="relative h-[clamp(420px,48vw,620px)] overflow-hidden rounded">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=90"
            alt="Elena Rostova"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <span className="absolute bottom-[18px] left-[18px] bg-paper px-3 py-2 text-[8px] tracking-[1.7px]">ELENA · LISBON, 2025</span>
        </div>
        <div>
          <div className={kicker}>MY STORY</div>
          <h3 className={sectionTitle}>From a borrowed film camera to <em>a life in light.</em></h3>
          <p className={body}>
            I picked up my grandfather&apos;s old film camera at sixteen and never really put it down. What started
            as a way to remember places became a way of paying attention — to people, to weather, to the small
            moments between the big ones.
          </p>
          <p className={body}>
            Eight years and twenty-five countries later, I split my time between editorial commissions, portrait
            sessions and long, slow landscape projects in the Alps. My work has appeared in travel and lifestyle
            publications across Europe, and my fine art prints hang in homes on four continents.
          </p>
          <div className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-[22px]">
            {stats.map((s) => (
              <div key={s.label}>
                <strong className="block font-serif text-[26px] leading-none font-normal min-[421px]:text-[34px]">
                  {s.value}<span className="text-[22px] text-orange">+</span>
                </strong>
                <small className="text-[10px] text-muted">{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${section} bg-paper-deep`} id="philosophy">
        <div className="mb-[30px]">
          <div className={kicker}>CREATIVE PHILOSOPHY</div>
          <h3 className={sectionTitle}>Three things I <em>believe.</em></h3>
        </div>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          {philosophy.map((p) => (
            <article key={p.n} className={`${panel} px-[26px] py-[30px]`}>
              <b className="font-serif text-[22px] text-orange italic">{p.n}</b>
              <h4 className="mt-3.5 mb-2 font-serif text-2xl font-medium">{p.title}</h4>
              <p className="m-0 text-xs leading-[1.8] text-muted">{p.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link className={btnDark} href="/booking">Work With Me <span className={btnArrowDark}>→</span></Link>
        </div>
      </section>
    </>
  );
}
