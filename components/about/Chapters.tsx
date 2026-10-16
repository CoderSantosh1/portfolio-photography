import Image from "next/image";
import Link from "next/link";
import { aboutPage } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

// Explore · Feel · Create — titles only; the one-line story slides in on hover
export default function Chapters() {
  return (
    <section className="grid grid-cols-1 gap-1 sm:grid-cols-3">
      {aboutPage.chapters.map((c, i) => (
        <Reveal key={c.title} variant="wipe-up" delay={i * 180} className="group/card relative isolate h-[340px] overflow-hidden lg:h-[400px]">
          <Link href="/portfolio" className="block size-full" aria-label={`${c.title} — view portfolio`}>
            <Image
              className="-z-20 scale-[1.2] object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(.2,.7,.2,1)] group-data-[shown=true]/reveal:scale-100 group-hover/card:scale-[1.07]"
              src={c.src}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <span className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-colors duration-500 group-hover/card:from-black/90" />

            <div className="absolute right-6 bottom-7 left-7 text-white md:left-12">
              {/* <span className="block translate-y-4 font-serif text-xl opacity-0 transition duration-700 delay-500 group-data-[shown=true]/reveal:translate-y-0 group-data-[shown=true]/reveal:opacity-100">
                {c.n}
              </span> */}
              <h3 className="m-0 translate-y-4 font-serif text-[clamp(30px,3vw,40px)] leading-tight font-normal opacity-0 transition duration-700 delay-700 group-data-[shown=true]/reveal:translate-y-0 group-data-[shown=true]/reveal:opacity-100">
                {c.title}
              </h3>
              <p className="m-0 max-h-0 max-w-[240px] overflow-hidden text-xs leading-[1.7] text-white/75 opacity-0 transition-all duration-500 group-hover/card:mt-2 group-hover/card:max-h-12 group-hover/card:opacity-100">
                {c.text}
              </p>
              <span className="mt-3 block h-0.5 w-0 bg-orange transition-all delay-1000 duration-700 group-data-[shown=true]/reveal:w-12 group-hover/card:w-24 group-hover/card:delay-0" />
            </div>
          </Link>
        </Reveal>
      ))}
    </section>
  );
}
