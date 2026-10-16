"use client";

import { useEffect, useState } from "react";
import { aboutPage, stats } from "@/lib/data";
import { useInView } from "@/components/motion/useInView";

// Counts from 0 to the target once `start` flips true, keeping leading zeros ("08")
function CountUp({ value, start }: { value: string; start: boolean }) {
  const target = parseInt(value, 10);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / 1600, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);

  return <>{String(n).padStart(value.length, "0")}</>;
}

export default function StatsQuote() {
  const [ref, inView] = useInView<HTMLElement>(0.35);
  const show = (on: string, off: string) => (inView ? on : off);

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 items-center gap-10 px-6 py-14 md:px-[7%] lg:grid-cols-[1.35fr_1fr] lg:gap-0 lg:py-16"
    >
      <div className="grid grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{ transitionDelay: `${i * 150}ms` }}
            className={`border-line px-2 transition duration-700 not-last:border-r sm:px-6 lg:px-9 lg:first:pl-0 ${show(
              "translate-y-0 opacity-100",
              "translate-y-6 opacity-0"
            )}`}
          >
            <strong className="block font-serif text-[clamp(32px,4vw,46px)] leading-none font-normal tabular-nums">
              <CountUp value={s.value} start={inView} />
              <span className="text-[.6em] text-rust">+</span>
            </strong>
            <small className="mt-3 block text-[8px] leading-[1.6] tracking-[1.6px] text-muted uppercase">{s.label}</small>
          </div>
        ))}
      </div>

      {/* Handwritten quote that writes itself in, line by line */}
      <div className="relative border-line lg:border-l lg:py-6 lg:pl-12">
        {aboutPage.quote.map((line, i) => (
          <p
            key={line}
            style={{ transitionDelay: `${400 + i * 900}ms` }}
            className={`m-0 font-script text-[clamp(34px,3.4vw,46px)] leading-[1.25] text-ink/85 transition-[clip-path] duration-[1600ms] ease-out ${
              i === 1 ? "pl-0 md:pl-2" : ""
            } ${show("[clip-path:inset(0_0_0_0)]", "[clip-path:inset(0_100%_0_0)]")}`}
          >
            {line}
          </p>
        ))}
        <span
          className={`mt-3 ml-auto block h-px w-12 origin-right bg-rust transition-transform delay-[2400ms] duration-700 ${show("scale-x-100", "scale-x-0")}`}
        />
      </div>
    </section>
  );
}
