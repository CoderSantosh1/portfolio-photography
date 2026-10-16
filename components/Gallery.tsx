"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { categories, type CategorySlug, type Photo } from "@/lib/data";

type Props = { photos: Photo[]; showFilters?: boolean };

const roundBtn =
  "grid size-[46px] cursor-pointer place-items-center justify-self-center rounded-full border border-white/30 bg-white/5 text-lg text-white transition-colors hover:bg-orange";

export default function Gallery({ photos, showFilters = true }: Props) {
  const [filter, setFilter] = useState<CategorySlug | "all">("all");
  const [open, setOpen] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? photos : photos.filter((p) => p.category === filter)),
    [filter, photos]
  );

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + visible.length) % visible.length)),
    [visible.length]
  );

  // Keyboard controls + scroll lock while the lightbox is open
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  const active = open === null ? null : visible[open];
  const filterOptions = [{ slug: "all" as const, title: "All Work" }, ...categories];

  return (
    <>
      {showFilters && (
        <div className="mb-[26px] flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {filterOptions.map((c) => {
            const selected = filter === c.slug;
            return (
              <button
                key={c.slug}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-[9px] text-xs transition ${
                  selected
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-card text-[#3f4244] hover:border-orange hover:text-rust"
                }`}
                onClick={() => setFilter(c.slug)}
              >
                {c.title}
                <small className={`text-[10px] ${selected ? "text-amber" : "text-muted"}`}>
                  {c.slug === "all" ? photos.length : photos.filter((p) => p.category === c.slug).length}
                </small>
              </button>
            );
          })}
        </div>
      )}

      <div className="columns-2 gap-2.5 md:columns-3 md:gap-3.5">
        {visible.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className="group relative mb-2.5 block w-full animate-fade-up cursor-zoom-in break-inside-avoid overflow-hidden rounded-[3px] border-0 bg-[#d9d2c6] p-0 md:mb-3.5"
            onClick={() => setOpen(i)}
            aria-label={`Open ${p.title}`}
          >
            <Image
              className="h-auto w-full saturate-[.9] transition duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105 group-hover:saturate-[1.05]"
              src={p.src}
              alt={p.title}
              width={800}
              height={i % 3 === 1 ? 1000 : 640}
              sizes="(max-width: 768px) 50vw, 30vw"
            />
            <span className="absolute inset-0 bg-gradient-to-b from-transparent from-55% to-[#080c0ec7] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100" />
            <span className="absolute right-4 bottom-[9px] left-2.5 z-[1] grid gap-[3px] text-left text-white transition duration-300 md:bottom-3.5 md:left-4 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
              <small className="text-[9px] tracking-[1.2px] text-peach uppercase">{p.location}</small>
              <strong className="font-serif text-[15px] font-medium md:text-xl">{p.title}</strong>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] grid animate-fade-in grid-cols-2 grid-rows-[1fr_auto] items-center bg-[#070a0d]/95 px-3 pt-16 pb-[18px] md:grid-cols-[64px_1fr_64px] md:grid-rows-1 md:py-[30px]"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setOpen(null)}
        >
          <button className={`${roundBtn} absolute top-[18px] right-[18px] z-[2]`} type="button" aria-label="Close" onClick={() => setOpen(null)}>
            ✕
          </button>
          <button
            className={`${roundBtn} col-start-1 row-start-2 mt-3 md:row-start-1 md:mt-0`}
            type="button"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
          >←</button>
          <figure
            className="col-span-2 col-start-1 row-start-1 m-0 flex h-full min-w-0 flex-col md:col-span-1 md:col-start-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative min-h-0 flex-1">
              <Image className="object-contain" src={active.src} alt={active.title} fill sizes="90vw" />
            </div>
            <figcaption className="flex flex-wrap items-end justify-between gap-4 pt-4 text-white">
              <div className="grid gap-1">
                <span className="text-[9px] font-bold tracking-[2px] text-amber">
                  {categories.find((c) => c.slug === active.category)?.kicker.toUpperCase()}
                </span>
                <strong className="font-serif text-2xl font-medium">{active.title}</strong>
                <em className="text-xs text-white/65 not-italic">{active.location} · {active.year}</em>
              </div>
              <code className="rounded-full border border-white/20 px-3 py-[7px] font-sans text-[11px] tracking-[.6px] text-white/70">
                {active.settings}
              </code>
            </figcaption>
          </figure>
          <button
            className={`${roundBtn} col-start-2 row-start-2 mt-3 md:col-start-3 md:row-start-1 md:mt-0`}
            type="button"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); step(1); }}
          >→</button>
        </div>
      )}
    </>
  );
}
