import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { kicker, textlink } from "@/lib/ui";
import Reveal from "@/components/motion/Reveal";

const fadeUp =
  "translate-y-4 opacity-0 transition duration-700 group-data-[shown=true]/reveal:translate-y-0 group-data-[shown=true]/reveal:opacity-100";

// What I offer — image-led rows, no prices (those live on /pricing)
export default function ServiceOffer() {
  return (
    <section id="offer" className="scroll-mt-6 px-6 py-14 md:px-[5%] md:py-20">
      <Reveal className="mb-12 md:mb-16">
        <div className={kicker}>What I offer</div>
        <h2 className="mt-4 font-serif text-[clamp(32px,3.6vw,46px)] font-normal tracking-[-1.2px]">
          Three ways to <em className="text-orange">work together.</em>
        </h2>
      </Reveal>

      <div className="grid gap-16 md:gap-24">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <div key={s.name} className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
              <Reveal
                variant={flip ? "wipe-left" : "wipe-up"}
                className={`group/img relative h-[320px] overflow-hidden md:h-[420px] ${flip ? "md:order-2" : ""}`}
              >
                <Image
                  className="scale-[1.2] object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(.2,.7,.2,1)] group-data-[shown=true]/reveal:scale-100 group-hover/img:scale-[1.05]"
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <span className="absolute top-5 left-5 font-serif text-5xl text-white/90 italic [text-shadow:0_2px_16px_#0006]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Reveal>

              <Reveal variant="fade" className={flip ? "md:order-1" : ""}>
                <span className={`block text-[8px] font-bold tracking-[2.5px] text-rust uppercase ${fadeUp} delay-200`}>{s.tag}</span>
                <h3 className={`mt-3 font-serif text-[clamp(30px,3vw,40px)] leading-tight font-normal ${fadeUp} delay-300`}>{s.name}</h3>
                <span className={`mt-4 block h-px w-12 origin-left scale-x-0 bg-orange transition-transform delay-500 duration-700 group-data-[shown=true]/reveal:scale-x-100`} />
                <p className={`mt-5 max-w-[400px] text-[13px] leading-[1.8] text-muted ${fadeUp} delay-[400ms]`}>{s.description}</p>
                <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
                  {s.features.slice(0, 3).map((f, k) => (
                    <li
                      key={f}
                      style={{ transitionDelay: `${550 + k * 100}ms` }}
                      className="scale-90 rounded-full border border-line bg-card px-3 py-1.5 text-[11px] opacity-0 transition duration-500 group-data-[shown=true]/reveal:scale-100 group-data-[shown=true]/reveal:opacity-100"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <div className={`mt-7 flex flex-wrap items-center gap-6 ${fadeUp} delay-[800ms]`}>
                  <Link className={`${textlink} group text-rust hover:text-ink`} href="/pricing">
                    See pricing <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <Link className={`${textlink} text-muted hover:text-rust`} href={`/booking?service=${encodeURIComponent(s.name)}`}>
                    Enquire
                  </Link>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
