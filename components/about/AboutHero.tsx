"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { aboutPage } from "@/lib/data";

const SLIDE_MS = 6000;
const pad = (n: number) => String(n).padStart(2, "0");

// Masked line that slides up into view
function Line({ children, delay, className = "" }: { children: React.ReactNode; delay: string; className?: string }) {
  return (
    <span className="block overflow-hidden pb-[.12em]">
      <span className={`block animate-line-up motion-reduce:animate-none ${delay} ${className}`}>{children}</span>
    </span>
  );
}

export default function AboutHero() {
  const slides = aboutPage.heroSlides;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setCurrent((c) => (c + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [current, slides.length]);

  return (
    <section className="relative isolate flex h-[440px] items-center overflow-hidden bg-[#0b0f12] text-white md:h-[420px] lg:h-[460px]">
      {/* Crossfading slides with a slow Ken Burns drift on the active one */}
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 -z-20 transition-opacity duration-[1400ms] ease-out ${i === current ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== current}
        >
          <Image
            key={i === current ? `on-${current}` : "off"}
            className={`object-cover object-[60%_center] ${i === current ? "animate-ken-burns motion-reduce:animate-none" : ""}`}
            src={s.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#070a0dd9_0%,#070a0d8c_42%,#070a0d1a_75%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070a0d99] to-transparent to-50%" />

      <div className="px-6 md:px-[6%]">
        <div className="flex animate-fade-up items-center gap-4 text-[9px] font-bold tracking-[3px] text-amber [animation-delay:150ms]">
          MY STORY
          <span className="block h-px w-10 origin-left animate-draw-x bg-amber [animation-delay:500ms]" />
        </div>

        <h2 className="mt-5 font-serif font-normal tracking-[-2px]">
          <Line delay="[animation-delay:250ms]" className="text-[clamp(46px,6vw,72px)] leading-[1]">A life</Line>
          <Line delay="[animation-delay:420ms]" className="-ml-1 text-[clamp(52px,7vw,84px)] leading-[1] text-orange italic">
            in frames.
          </Line>
        </h2>

        <p className="mt-6 flex animate-fade-up flex-wrap items-center gap-3 text-[9px] tracking-[3px] text-white/85 [animation-delay:900ms]">
          PLACES <span className="text-amber">·</span> PEOPLE <span className="text-amber">·</span> EMOTIONS
        </p>
      </div>
     
    </section>
  );
}
