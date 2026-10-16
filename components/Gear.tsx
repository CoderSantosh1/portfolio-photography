import Image from "next/image";
import { gear, gearExtras } from "@/lib/data";
import { kicker } from "@/lib/ui";

export default function Gear() {
  return (
    <div className="grid gap-11">
      {gear.map((g) => (
        <div key={g.group}>
          <div className={kicker}>{g.group}</div>
          <div className="mt-[18px] grid grid-cols-1 gap-4 lg:grid-cols-2">
            {g.items.map((item) => (
              <article
                key={item.name}
                className="grid grid-cols-1 overflow-hidden rounded-md border border-line bg-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_#17212d14] md:grid-cols-[44%_1fr]"
              >
                <div className="relative min-h-[220px] md:min-h-[190px]">
                  <Image className="object-cover" src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 35vw" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h4 className="mb-2 font-serif text-[22px] leading-tight font-medium">{item.name}</h4>
                  <p className="m-0 text-xs leading-[1.7] text-muted">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
      <div>
        <div className={kicker}>Also in the bag</div>
        <ul className="mt-[18px] grid list-none grid-cols-1 gap-x-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {gearExtras.map((x) => (
            <li key={x.label} className="grid gap-[3px] border-b border-line py-4 font-serif text-[17px]">
              <span className="font-sans text-[8px] font-bold tracking-[1.8px] text-rust uppercase">{x.kind}</span>
              {x.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
