import Image from "next/image";
import { processSteps, servicesPage } from "@/lib/data";
import { kicker } from "@/lib/ui";
import Icon from "@/components/motion/Icon";
import Reveal from "@/components/motion/Reveal";

export default function ProcessSteps() {
  return (
    <section className="relative isolate overflow-hidden bg-paper-deep px-6 py-14 md:px-[5%] md:py-16">
      {/* Faint mountains drifting in from the right */}
      <Image
        className="-z-10 object-cover object-right opacity-40 [mask-image:linear-gradient(90deg,transparent_30%,#000_80%)]"
        src={servicesPage.processImage}
        alt=""
        fill
        sizes="100vw"
      />

      <Reveal>
        <div className={kicker}>How it works</div>
        <h2 className="mt-4 font-serif text-[clamp(32px,3.6vw,46px)] font-normal tracking-[-1.2px]">
          A simple, <em className="text-orange">personal</em> process.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((p, i) => (
          <Reveal key={p.n} delay={150 + i * 150} className="group/step relative border-line lg:not-last:border-r lg:px-8 lg:first:pl-0">
            <span className="font-serif text-2xl text-orange italic">{p.n}</span>
            <span className="mt-3 grid size-11 place-items-center rounded-full text-orange transition duration-500 group-hover/step:-translate-y-1 group-hover/step:bg-orange group-hover/step:text-white">
              <Icon name={p.icon} className="size-6" />
            </span>
            <h3 className="mt-3 font-serif text-xl font-normal">{p.title}</h3>
            <p className="mt-1 max-w-[220px] text-[11px] leading-[1.7] text-muted">{p.text}</p>
            {i < processSteps.length - 1 && (
              <span
                className="absolute top-16 right-6 hidden animate-nudge text-lg text-ink/60 motion-reduce:animate-none lg:block"
                style={{ animationDelay: `${i * 300}ms` }}
                aria-hidden="true"
              >
                →
              </span>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
