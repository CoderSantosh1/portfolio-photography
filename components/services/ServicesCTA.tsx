import Image from "next/image";
import Link from "next/link";
import { servicesPage } from "@/site-data";
import { btnBase, kickerBase } from "@/components/ui";
import Icon from "@/components/motion/Icon";
import Reveal from "@/components/motion/Reveal";

export default function ServicesCTA() {
  return (
    <section className="relative isolate grid grid-cols-1 items-center gap-10 overflow-hidden px-6 py-16 md:px-[5%] lg:grid-cols-[1fr_auto] lg:py-20">
      <Image
        className="-z-20 scale-105 object-cover object-[60%_center]"
        src={servicesPage.ctaImage}
        alt="Hiker resting above a misty valley"
        fill
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f5f2ebf2_0%,#f5f2ebb3_40%,#f5f2eb14_78%)]" />

      <Reveal>
        <div className={`${kickerBase} text-ink`}>Ready to create together?</div>
        <h2 className="mt-5 font-serif text-[clamp(36px,4.4vw,56px)] leading-[1.05] font-normal tracking-[-1.5px]">
          Let&apos;s bring
          <br />
          <em className="text-orange">your vision to life.</em>
        </h2>
        <p className="mt-4 max-w-[380px] text-[13px] leading-[1.7] text-ink/80">
          A portrait, a brand story or a fine art print — I&apos;d love to hear your idea.
        </p>
        <Link className={`${btnBase} mt-7 border-amber bg-amber text-ink hover:text-white`} href="/booking">
        </Link>
      </Reveal>

      <ul className="m-0 grid list-none gap-6 p-0">
        {servicesPage.ctaFacts.map((f, i) => (
          <li key={f.title}>
            <Reveal delay={200 + i * 150} className="group/fact flex items-center gap-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-ink/50 transition duration-500 group-hover/fact:rotate-[360deg] group-hover/fact:border-orange group-hover/fact:bg-orange group-hover/fact:text-white">
                <Icon name={f.icon} className="size-5" />
              </span>
              <span className="text-xs leading-[1.6]">
                {f.title}
                <br />
                <span className="text-ink/70">{f.text}</span>
              </span>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
