import Image from "next/image";
import Link from "next/link";
import { services } from "@/site-data";
import { btnArrowDark, btnBase, btnDark } from "@/components/ui";
import Reveal from "@/components/motion/Reveal";

const amberBtn = `${btnBase} border-amber bg-amber text-ink hover:text-white`;
const shownUp = "translate-y-3 opacity-0 transition duration-700 group-data-[shown=true]/reveal:translate-y-0 group-data-[shown=true]/reveal:opacity-100";

export default function PricingCards() {
  return (
    <section id="pricing" className="grid scroll-mt-6 grid-cols-1 gap-4 px-5 py-5 md:grid-cols-2 md:px-[2%] lg:grid-cols-3">
      {services.map((s, i) => {
        const href = s.cta === "View Prints" ? "/portfolio/landscapes" : `/booking?service=${encodeURIComponent(s.name)}`;
        return (
          <Reveal key={s.name} delay={i * 160} className="h-full">
            <article className="group/card flex h-full flex-col overflow-hidden rounded-[3px] border border-line bg-card transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_#17212d1f]">
              {/* Image: zooms out on reveal, in on hover, fades into the card */}
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  className="scale-[1.18] object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(.2,.7,.2,1)] group-data-[shown=true]/reveal:scale-100 group-hover/card:scale-[1.06]"
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-card" />
                {/* <span className="absolute top-4 left-5 font-serif text-sm text-white italic">{String(i + 1).padStart(2, "0")}</span> */}
                {s.featured && (
                  <span className="absolute top-3 right-3 grid size-[62px] animate-float place-items-center rounded-full bg-amber text-center text-[7px] font-bold leading-[1.5] tracking-[1.3px] text-ink shadow-[0_8px_20px_#d76b1640] motion-reduce:animate-none">
                    MOST
                    <br />
                    BOOKED
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col px-6 pt-1 pb-6">
                <span className={`text-[8px] font-bold tracking-[2.5px] text-rust uppercase ${shownUp} delay-300`}>{s.tag}</span>
                <h3 className={`mt-2 font-serif text-[26px] font-normal ${shownUp} delay-[400ms]`}>{s.name}</h3>
                <p className={`mt-3 font-serif text-[34px] leading-none ${shownUp} delay-500`}>
                  {s.unit === "from" && <small className="mr-2 font-sans text-xs text-muted">from</small>}
                  {s.price}
                  {s.unit !== "from" && <small className="ml-1 font-sans text-xs text-muted">/ {s.unit}</small>}
                </p>
                <p className="mt-3 mb-4 text-xs leading-[1.7] text-muted">{s.description}</p>

                <ul className="mb-6 flex-1 list-none p-0 text-xs">
                  {s.features.map((f, k) => (
                    <li
                      key={f}
                      style={{ transitionDelay: `${600 + k * 90}ms` }}
                      className="flex -translate-x-3 items-center gap-3 border-t border-line py-2.5 opacity-0 transition duration-500 group-data-[shown=true]/reveal:translate-x-0 group-data-[shown=true]/reveal:opacity-100"
                    >
                      <span className="text-orange">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link className={`${s.featured ? amberBtn : btnDark} self-start`} href={href}>
                  {s.cta}
                  <span className={s.featured ? "text-lg transition group-hover:translate-x-[3px]" : btnArrowDark}>→</span>
                </Link>
              </div>
            </article>
          </Reveal>
        );
      })}
    </section>
  );
}
