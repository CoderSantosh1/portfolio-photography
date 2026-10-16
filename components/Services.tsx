import Link from "next/link";
import { processSteps, services } from "@/lib/data";
import { btnArrowDark, btnBase, btnDark, kicker } from "@/lib/ui";

export default function Services() {
  return (
    <>
      <div className="grid max-w-[560px] grid-cols-1 items-stretch gap-4 xl:max-w-none xl:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.name}
            className={`relative flex flex-col rounded-md border px-7 py-8 transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_18px_45px_#17212d14] ${
              s.featured ? "border-forest bg-forest text-white" : "border-line bg-card"
            }`}
          >
            {s.featured && (
              <span className="absolute top-[18px] right-[18px] rounded-full bg-amber px-2.5 py-[5px] text-[8px] font-bold tracking-[1.3px] text-forest">
                MOST BOOKED
              </span>
            )}
            <h4 className="m-0 font-serif text-2xl font-medium">{s.name}</h4>
            <p className="mt-4 mb-2 font-serif text-[44px] leading-none tracking-[-1px]">
              {s.unit === "from" && <small className={`font-sans text-xs tracking-normal ${s.featured ? "text-white/65" : "text-muted"}`}>from </small>}
              {s.price}
              {s.unit !== "from" && (
                <small className={`font-sans text-xs tracking-normal ${s.featured ? "text-white/65" : "text-muted"}`}> / {s.unit}</small>
              )}
            </p>
            <p className={`mb-[18px] text-xs leading-[1.7] ${s.featured ? "text-white/70" : "text-muted"}`}>{s.description}</p>
            <ul className="mb-[26px] flex-1 list-none p-0 text-xs">
              {s.features.map((f) => (
                <li
                  key={f}
                  className={`relative border-t py-2.5 pl-[22px] before:absolute before:left-0 before:text-orange before:content-['✓'] ${
                    s.featured ? "border-white/[.13]" : "border-line"
                  }`}
                >
                  {f}
                </li>
              ))}
            </ul>
            <Link
              className={`${s.featured ? `${btnBase} border-amber bg-amber text-forest hover:text-white` : btnDark} self-start`}
              href={`/booking?service=${encodeURIComponent(s.name)}`}
            >
              Enquire <span className={s.featured ? "text-lg text-forest transition group-hover:translate-x-[3px] group-hover:text-white" : btnArrowDark}>→</span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-9">
        <div className={kicker}>How it works</div>
        <div className="mt-6 grid grid-cols-1 gap-7 min-[421px]:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((p) => (
            <div key={p.n}>
              <b className="font-serif text-[22px] text-orange italic">{p.n}</b>
              <h4 className="mt-2.5 mb-1 font-serif text-[21px] font-medium">{p.title}</h4>
              <p className="m-0 text-xs leading-[1.7] text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
