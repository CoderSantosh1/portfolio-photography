
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import MaskLine from "./MaskLine";

type Line = {
  text: string;
  accent?: boolean;
};

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  kicker: string;
  lines: Line[];
  image: string;
  alt: string;
  target: string;
  targetLabel: string;
  aside?: React.ReactNode;
  breadcrumb?: BreadcrumbItem[];
};

// Mobile: dark photo banner (same as PageHeader). md+: photo on the right fading into paper
export default function SplitHero({
  kicker,
  lines,
  image,
  alt,
  target,
  targetLabel,
  aside,
  breadcrumb,
}: Props) {
  return (
    <section className="relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden bg-[#111] px-6 pt-20 pb-[46px] text-white md:min-h-[440px] md:justify-center md:bg-transparent md:px-[6%] md:py-16 md:text-ink">
      {/* Background image */}
      <Image
        className="-z-20 animate-ken-burns object-cover object-[center_45%] motion-reduce:animate-none md:object-[70%_center]"
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
      />

      {/* Mobile: dark shade for white text. md+: paper fade on the text side */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#070a0de0,#070a0d80_55%,#070a0d1a)] md:bg-[linear-gradient(90deg,#f5f2eb_0%,#f5f2ebf0_32%,#f5f2eb99_52%,transparent_78%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070a0d99] to-transparent to-60% md:hidden" />

      {/* Kicker */}
      <div className="flex animate-fade-up items-center gap-4 text-[9px] font-bold tracking-[3px] text-amber uppercase [animation-delay:100ms] md:text-rust">
        {kicker}
        <span className="block h-px w-10 origin-left animate-draw-x bg-amber [animation-delay:450ms] md:bg-rust" />
      </div>

      {/* Heading */}
      <h2 className="mt-5 font-serif text-[clamp(38px,5vw,62px)] leading-[1.02] font-normal tracking-[-1.8px]">
        {lines.map((line, index) => (
          <MaskLine
            key={line.text}
            delay={200 + index * 140}
            className={line.accent ? "text-[#f18a2d] italic md:text-orange" : ""}
          >
            {line.text}
          </MaskLine>
        ))}
      </h2>

      {/* Breadcrumb — below the title, same spot as the dark PageHeader */}
      {breadcrumb && breadcrumb.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          className="mt-5 flex animate-fade-up flex-wrap items-center gap-2 text-[11px] font-medium tracking-[1.5px] text-white/70 [animation-delay:750ms] md:text-ink/70"
        >
          {breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;

            return (
              <span key={`${item.label}-${index}`} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-white/40 md:text-ink/40">
                    /
                  </span>
                )}

                {item.href && !isLast ? (
                  <Link href={item.href} className="transition-colors hover:text-orange">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className={isLast ? "font-semibold text-white md:text-ink" : ""}>
                    {item.label}
                  </span>
                )}
              </span>
            );
          })}
        </nav>
      )}

     
   

      
    </section>
  );
}
