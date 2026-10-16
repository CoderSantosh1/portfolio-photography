"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { artist, heroSlides } from "@/lib/data";
import { btnArrowLight, btnLight } from "@/lib/ui";

const pad = (n: number) => String(n).padStart(2, "0");
const circleBtn =
  "grid size-[34px] cursor-pointer place-items-center rounded-full border border-white/45 bg-black/20 text-lg text-white transition-colors hover:bg-orange md:size-[39px]";
const curtainLine =
  "absolute top-0 h-full w-px bg-[linear-gradient(transparent,#dba66e_35%,#dba66e_65%,transparent)] shadow-[0_0_22px_#dba66e55]";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = heroSlides.length;
  const show = useCallback((i: number) => setCurrent((i + total) % total), [total]);

  // Auto-advance every 6s unless the visitor is hovering
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => show(current + 1), 6000);
    return () => clearTimeout(t);
  }, [current, paused, show]);

  return (
    <section
      className="relative flex h-[680px] max-h-[88vh] min-h-[610px] items-end overflow-hidden bg-[#111] text-white md:h-[min(78vh,720px)] md:max-h-none md:min-h-[550px] md:items-center"
      aria-label="Featured photography"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((s, i) => (
        <Image
          key={s.src}
          className={`object-cover object-[62%_center] transition-[opacity,scale] duration-[1500ms] ease-out md:object-[center_44%] ${
            i === current ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
          src={s.src}
          alt={s.alt}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          priority={i === 0}
          aria-hidden={i !== current}
        />
      ))}

      {/* Readability shading */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(0deg,#05090ce6,#05090c59_55%,#05090c33)] md:bg-[linear-gradient(90deg,#070a0dd1_0%,#070a0d7a_37%,#070a0d0d_72%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] hidden bg-gradient-to-t from-[#070a0d70] to-transparent to-45% md:block" />

      {/* Split curtain reveal */}
      <span className="pointer-events-none absolute inset-y-0 left-0 z-[6] w-1/2 animate-curtain-left bg-[linear-gradient(135deg,#1a2922,#0b120f_72%)] motion-reduce:hidden" aria-hidden="true">
        <span className={`${curtainLine} right-0`} />
      </span>
      <span className="pointer-events-none absolute inset-y-0 right-0 z-[6] w-1/2 animate-curtain-right bg-[linear-gradient(225deg,#1a2922,#0b120f_72%)] motion-reduce:hidden" aria-hidden="true">
        <span className={`${curtainLine} left-0`} />
      </span>

      <div className="absolute top-[22px] left-5 z-[4] font-serif text-lg font-medium [text-shadow:0_2px_12px_#0008] md:hidden">
        {artist.name}
      </div>
      

      <div className="relative z-[2] w-full animate-reveal px-6 pb-[120px] md:w-3/4 md:px-0 md:pt-[70px] md:pb-[60px] md:pl-[5.2%] lg:w-[min(540px,60%)]">
        <p className="mb-[17px] text-[8px] font-bold tracking-[3px] uppercase md:mb-6 md:text-[9px] md:tracking-[4px]">
          PEOPLE · PLACES · MOMENTS
        </p>
        <h2 className="m-0 font-serif text-[44px] leading-[.98] font-normal tracking-[-1.8px] min-[421px]:text-[clamp(46px,13vw,68px)] md:text-[clamp(48px,5vw,78px)] md:tracking-[-2.8px]">
          Stories<br />told through<br /><em className="font-medium text-[#f18a2d]">light.</em>
        </h2>
      
      </div>

      <div className="absolute bottom-[22px] left-1/2 z-[2] flex -translate-x-1/2 animate-reveal items-center justify-center">
  <div className="flex items-center justify-center gap-2">
    <button
      type="button"
      className={circleBtn}
      aria-label="Previous image"
      onClick={() => show(current - 1)}
    >
      ←
    </button>

    <button
      type="button"
      className={circleBtn}
      aria-label="Next image"
      onClick={() => show(current + 1)}
    >
      →
    </button>
  </div>
</div>
    </section>
  );
}
