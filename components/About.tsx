import Image from "next/image";
import Link from "next/link";
import { stats } from "@/lib/data";
import { kickerBase, textlink } from "@/lib/ui";

export default function About() {
  return (
    <section className="relative isolate overflow-hidden bg-forest text-white" id="about">
      <Image
        className="-z-20 object-cover object-[60%_center] opacity-[.38] md:object-[center_45%]"
        src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1800&q=90"
        alt=""
        fill
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#08110c]/85 md:bg-[linear-gradient(90deg,#08110cf5,#08110cdb_52%,#08110cb8)]" />

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-7 px-6 pt-12 pb-[30px] md:grid-cols-[minmax(0,1fr)_minmax(0,.9fr)] md:gap-x-[8%] md:gap-y-[42px] md:px-[clamp(28px,7%,100px)] md:pt-[68px] md:pb-[34px]">
        <div className="min-w-0">
          <div className={`${kickerBase} text-amber`}>BEHIND THE LENS</div>
          <p className="mt-[22px] mb-3 text-[12px] font-semibold tracking-[2.5px] text-white/95 md:mt-[27px]">A LITTLE ABOUT ME</p>
          <h3 className="mb-7 max-w-[600px] font-serif text-[clamp(38px,9vw,54px)] leading-[1.08] font-normal tracking-[-1.8px] md:text-[clamp(38px,4.2vw,62px)]">
            I don&apos;t just<br />take pictures.<br /><em className="text-amber">I preserve<br />feelings.</em>
          </h3>
          <Link
            className="group inline-flex min-h-[45px] items-center gap-5 rounded-full border border-amber bg-amber px-[21px] text-[9px] font-bold tracking-[1px] text-forest uppercase transition duration-300 hover:-translate-y-[3px] hover:border-white hover:bg-white"
            href="/about"
          >
            Discover My Story <span className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="border-l border-white/25 py-2 pl-4 md:pl-[27px]">
          <span className="mb-1 block font-serif text-[55px] leading-[.85] text-amber" aria-hidden="true">“</span>
          <p className="mb-[17px] max-w-[470px] font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.38]">
            Photography is my way of noticing what the world often asks us to pass by.
          </p>
          <p className="mb-[22px] max-w-[470px] text-[14px] leading-[1.95] text-white/95">
            I&apos;m Elena Rostova, a fine art and editorial photographer drawn to honest portraits, untamed
            landscapes, and the quiet beauty of everyday life. I create images that feel timeless, personal,
            and full of meaning.
          </p>
          <Link className={`${textlink} text-amber hover:text-white`} href="/about#philosophy">
            My Creative Philosophy <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 border-t border-white/20 pt-[23px] md:col-span-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div className="group flex min-w-0 items-center gap-[11px]" key={s.label}>
              <span
                className="grid size-10 flex-none place-items-center rounded-full border border-amber/65 text-[17px] text-amber transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-amber group-hover:text-forest"
                aria-hidden="true"
              >
                {s.icon}
              </span>
              <div>
                <strong className="block font-serif text-[29px] leading-[1.1] font-normal whitespace-nowrap">
                  {s.value}<span className="text-[19px] text-amber">+</span>
                </strong>
                <small className="mt-[5px] block text-[14px] tracking-[.4px] text-white/95">{s.label}</small>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
