import Image from "next/image";
import Link from "next/link";
import { categories, type CategorySlug } from "@/lib/data";
import { kicker } from "@/lib/ui";

// Editorial grid placement per collection (nature appears as a 4th column on wide screens)
const placement: Record<CategorySlug, string> = {
  portraits: "md:col-start-2 md:row-start-1 md:row-span-2",
  landscapes: "md:col-start-3 md:row-start-1",
  architecture: "md:col-start-3 md:row-start-2",
  nature: "md:hidden xl:block xl:col-start-4 xl:row-start-1 xl:row-span-2",
};

export default function SelectedWork() {
  return (
    <section
      className="grid grid-cols-2 gap-3 px-5 py-[42px] md:grid-cols-[.9fr_1fr_1fr] md:grid-rows-[215px_215px] md:gap-[15px] md:px-[5.2%] md:py-[55px] xl:grid-cols-[1.1fr_1fr_1fr_1fr] xl:grid-rows-[245px_245px] 2xl:grid-rows-[280px_280px]"
      id="portfolio"
    >
      <div className="col-span-2 flex min-w-0 flex-col items-start justify-center pb-4 md:col-span-1 md:row-span-2 md:py-6 md:pr-[22px]">
        <div className={kicker}>A CURATED COLLECTION</div>
        <h3 className="mt-[17px] mb-[18px] font-serif text-[clamp(35px,8vw,45px)] leading-[1.08] font-medium tracking-[-1.6px] md:mt-6 md:text-[clamp(29px,3.2vw,47px)]">
          Every Frame.<br /><em className="font-normal text-rust">Another Story.</em>
        </h3>
        <p className="m-0 max-w-[340px] text-xs leading-[1.9] text-muted md:max-w-[285px]">
          A collection of fleeting moments, beautiful places, and the emotions that make them unforgettable.
        </p>
        <Link
          className="mt-5 grid size-[45px] place-items-center rounded-full border border-rust text-[21px] text-rust transition duration-300 hover:rotate-45 hover:bg-rust hover:text-white md:mt-7"
          href="/portfolio"
          aria-label="Explore all photography"
        >
          ↗
        </Link>
        <span className="mt-5 text-[8px] tracking-[1.6px] text-[#99958c] md:mt-8">PERSONAL WORK · 2020 — 2026</span>
      </div>

      {categories.map((c, i) => (
        <Link
          key={c.slug}
          className={`group relative isolate block h-[200px] min-w-0 overflow-hidden rounded-[3px] bg-[#d9d2c6] text-white min-[421px]:h-[250px] md:h-auto ${placement[c.slug]}`}
          href={`/portfolio/${c.slug}`}
        >
          <Image
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.055]"
            src={c.cover}
            alt={`${c.title} photography`}
            fill
            sizes="(max-width: 768px) 50vw, 30vw"
          />
          <span className="absolute inset-0 bg-[linear-gradient(180deg,#080c0e2e_0%,transparent_32%,#080c0e0d_48%,#080c0ed1_100%)]" />
          <span className="absolute top-[15px] left-[15px] z-[1] text-[9px] tracking-[1.4px] text-white/90">
            {String(i + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
          </span>
          <div className="absolute right-[42px] bottom-[13px] left-[11px] z-[1] md:bottom-[18px] md:left-[17px]">
            <span className="mb-[7px] block text-[8px] font-semibold tracking-[1.7px] text-peach">{c.kicker.toUpperCase()}</span>
            <strong className="block font-serif text-[21px] leading-[1.1] font-medium tracking-[-.5px] min-[421px]:text-[25px] md:text-[clamp(21px,2.1vw,29px)]">
              {c.title}
            </strong>
          </div>
          <span className="absolute right-2 bottom-2.5 z-[2] grid size-[27px] place-items-center rounded-full border border-white/70 text-sm transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink md:right-3.5 md:bottom-4 md:size-[30px]">
            ↗
          </span>
        </Link>
      ))}
    </section>
  );
}
