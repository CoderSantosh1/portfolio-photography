// Reusable Tailwind class presets shared across components

export const gutter = "px-6 md:px-[5.2%]";

// kickerBase has no colour so callers can add one without class conflicts
export const kickerBase =
  "flex items-center gap-3 text-[10px] font-bold uppercase leading-relaxed tracking-[2.8px] after:h-px after:w-[30px] after:shrink-0 after:bg-current after:content-['']";
export const kicker = `${kickerBase} text-rust`;

export const btnBase =
  "group inline-flex min-h-[45px] items-center gap-[18px] rounded-full border px-[22px] text-[10px] font-bold uppercase tracking-[1px] transition duration-300 hover:-translate-y-0.5 hover:border-orange hover:bg-orange disabled:cursor-wait disabled:opacity-60";

export const btnLight = `${btnBase} border-gold bg-black/15 text-white`;
export const btnDark = `${btnBase} border-ink bg-ink text-white`;

export const btnArrowLight = "text-lg text-gold transition duration-300 group-hover:translate-x-[3px] group-hover:text-white";
export const btnArrowDark = "text-lg text-amber transition duration-300 group-hover:translate-x-[3px] group-hover:text-white";

export const textlink =
  "inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[1.2px] transition-colors";

export const section = `${gutter} py-10 md:py-10`;

export const sectionTitle =
  "mt-4 font-serif text-[clamp(30px,3.4vw,46px)] font-medium leading-[1.08] tracking-[-1.2px] [&_em]:font-normal [&_em]:text-rust";

export const panel = "rounded-md border border-line bg-card";
