
"use client";

import Image from "next/image";
import { gear, gearExtras } from "@/lib/data";
import { kicker } from "@/lib/ui";

export default function Gear() {
  return (
    <section className="relative grid gap-16 overflow-hidden md:gap-24">
      {/* Subtle decorative detail */}
      <div className="pointer-events-none absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-[#d97732]/[0.04] blur-3xl" />

      {gear.map((g, groupIndex) => (
        <div key={g.group} className="gear-reveal">
          {/* Editorial section header */}
          <div className="mb-7 flex items-end justify-between gap-4 border-b border-line pb-5">
            <div>
              <div className="flex items-center gap-3">
                <span className={kicker}>THE TOOLS BEHIND THE FRAME</span>
                <span className="h-px w-8 bg-rust" />
              </div>

              <h3 className="mt-4 font-serif text-[clamp(32px,4vw,48px)] leading-none font-normal tracking-[-1.5px]">
                {g.group}
                <span className="ml-2 font-serif italic text-rust">.</span>
              </h3>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="font-serif text-3xl italic text-rust/70">
                0{groupIndex + 1}
              </span>
              <span className="text-[8px] tracking-[2px] text-muted">
                COLLECTION
              </span>
            </div>
          </div>

          {/* Photography cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
            {g.items.map((item, index) => (
              <article
                key={item.name}
                className={`gear-card group relative isolate min-w-0 overflow-hidden bg-[#ded9cf] ${
                  index === 0 ? "sm:translate-y-5" : ""
                }`}
                style={{
                  animationDelay: `${(groupIndex * 2 + index) * 130}ms`,
                }}
              >
                <div className="relative h-[340px] overflow-hidden sm:h-[390px] lg:h-[440px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.075]"
                  />

                  {/* Cinematic overlay */}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/15 transition-colors duration-700 group-hover:from-black/90" />

                  {/* Top metadata */}
                  <div className="absolute top-4 right-4 left-4 flex items-center justify-between">
                    <span className="border border-white/35 px-2.5 py-1 text-[8px] tracking-[1.8px] text-white/90 backdrop-blur-sm">
                      FRAME 
                    </span>

                    <span className="grid size-8 place-items-center rounded-full border border-white/40 text-xs text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                      ↗
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute right-5 bottom-6 left-5 md:right-7 md:bottom-8 md:left-7">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-px w-5 bg-[#f3a36c]" />
                      <span className="text-[8px] font-semibold tracking-[2px] text-[#f3a36c]">
                        {g.group.toUpperCase()}
                      </span>
                    </div>

                    <h4 className="max-w-[90%] font-serif text-[26px] leading-[1.12] font-normal tracking-[-0.7px] text-white transition-transform duration-500 group-hover:-translate-y-1 md:text-[clamp(25px,2.7vw,36px)]">
                      {item.name}
                    </h4>

                    <p className="mt-2 max-w-[300px] text-[11px] leading-[1.8] text-white/75">
                      {item.note}
                    </p>

                    <div className="mt-5 h-px w-full bg-white/25">
                      <div className="h-px w-0 bg-[#f3a36c] transition-all duration-700 group-hover:w-full" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}

      {/* Accessories collection */}
      <div className="gear-reveal">
        <div className="mb-6 flex items-end justify-between gap-4 border-b border-line pb-5">
          <div>
            <div className="flex items-center gap-3">
              <span className={kicker}>SMALL THINGS, BIG DIFFERENCE</span>
              <span className="h-px w-8 bg-rust" />
            </div>

            <h3 className="mt-4 font-serif text-[clamp(32px,4vw,48px)] leading-none font-normal tracking-[-1.5px]">
              In the bag
              <span className="ml-2 font-serif italic text-rust">.</span>
            </h3>
          </div>

          <span className="pb-1 text-[9px] tracking-[2px] text-muted">
            ESSENTIALS
          </span>
        </div>

        <ul className="m-0 grid list-none grid-cols-1 gap-x-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {gearExtras.map((item, index) => (
            <li
              key={item.label}
              className="gear-extra group border-b border-line py-5"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="mb-2 block text-[8px] font-bold tracking-[2px] text-rust uppercase">
                    {item.kind}
                  </span>

                  <span className="font-serif text-[17px] leading-snug text-ink transition-colors duration-300 group-hover:text-rust md:text-[19px]">
                    {item.label}
                  </span>
                </div>

                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-sm text-rust transition-all duration-300 group-hover:rotate-45 group-hover:border-rust group-hover:bg-rust group-hover:text-white">
                  ↗
                </span>
              </div>

              <div className="mt-4 h-px w-0 bg-rust transition-all duration-500 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </div>

      {/* Closing visual banner */}
     

      <style jsx>{`
        .gear-reveal,
        .gear-card,
        .gear-extra {
          opacity: 0;
          animation: gearReveal 800ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
        }

        @keyframes gearReveal {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gear-reveal,
          .gear-card,
          .gear-extra {
            opacity: 1;
            animation: none;
          }

          .gear-card :global(*) {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
