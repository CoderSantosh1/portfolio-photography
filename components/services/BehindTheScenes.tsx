"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { servicesPage } from "@/site-data";
import Icon from "@/components/motion/Icon";

const SLIDE_MS = 3500;

// "Watch behind the scenes" teaser + fullscreen auto-playing photo reel
export default function BehindTheScenes() {
  const slides = servicesPage.behindTheScenes;
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => setCurrent((c) => (c + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [open, current, slides.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => { setCurrent(0); setOpen(true); }}
        className="group flex animate-fade-up cursor-pointer items-center gap-5 text-left [animation-delay:1100ms]"
        aria-label="Watch behind the scenes"
      >
        <span className="relative block h-[74px] w-[124px] overflow-hidden border-2 border-white/90 shadow-[0_10px_30px_#0003]">
          <Image className="object-cover transition-transform duration-700 group-hover:scale-110" src={slides[0].src} alt="" fill sizes="124px" />
          <span className="absolute inset-0 grid place-items-center bg-black/25">
            <span className="relative grid size-9 place-items-center rounded-full border border-white bg-black/30 text-white transition-colors group-hover:bg-orange">
              <span className="absolute inset-0 animate-pulse-ring rounded-full border border-white motion-reduce:hidden" />
              <Icon name="play" className="size-4" />
            </span>
          </span>
        </span>
        <span className="text-[9px] font-bold leading-[2] tracking-[3px] text-ink md:text-white md:[text-shadow:0_1px_8px_#0007]">
          WATCH
          <br />
          BEHIND THE SCENES
          <span className="mt-1 block h-px w-10 bg-amber transition-all duration-500 group-hover:w-full" />
        </span>
      </button>

      {open && createPortal(
        <div
          className="fixed inset-0 z-[100] grid animate-fade-in place-items-center bg-[#070a0d]/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Behind the scenes"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 z-[2] grid size-11 cursor-pointer place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-orange"
            aria-label="Close"
          >
            ✕
          </button>
          <figure className="relative m-0 aspect-[16/10] w-full max-w-[1000px] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {slides.map((s, i) => (
              <div key={s.src} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
                <Image
                  key={i === current ? `on-${current}` : "off"}
                  className={`object-cover ${i === current ? "animate-ken-burns motion-reduce:animate-none" : ""}`}
                  src={s.src}
                  alt={s.caption}
                  fill
                  sizes="90vw"
                />
              </div>
            ))}
            <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent to-40%" />
            <figcaption className="absolute right-6 bottom-5 left-6 flex items-end justify-between gap-4 text-white">
              <span key={current} className="animate-fade-up font-serif text-xl italic md:text-2xl">{slides[current].caption}</span>
              <span className="flex gap-1.5">
                {slides.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Show ${s.caption}`}
                    className={`h-0.5 cursor-pointer transition-all duration-500 ${i === current ? "w-8 bg-amber" : "w-4 bg-white/50"}`}
                  />
                ))}
              </span>
            </figcaption>
          </figure>
        </div>,
        document.body
      )}
    </>
  );
}
