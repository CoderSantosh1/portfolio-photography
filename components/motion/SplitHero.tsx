
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

// Light hero: photo on the right fading into paper behind the headline
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
    <section className="relative isolate flex min-h-[520px] flex-col justify-center overflow-hidden px-6 py-16 md:min-h-[440px] md:px-[6%]">
      {/* Background image */}
      <Image
        className="-z-20 animate-ken-burns object-cover object-[70%_center] motion-reduce:animate-none"
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
      />

      {/* Paper fade */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f5f2ebf7_0%,#f5f2ebe0_60%,#f5f2ebc7_100%)] md:bg-[linear-gradient(90deg,#f5f2eb_0%,#f5f2ebf0_32%,#f5f2eb99_52%,transparent_78%)]" />

      {/* Kicker */}
      <div className="flex animate-fade-up items-center gap-4 text-[9px] font-bold tracking-[3px] text-rust uppercase [animation-delay:100ms]">
        {kicker}
        <span className="block h-px w-10 origin-left animate-draw-x bg-rust [animation-delay:450ms]" />
      </div>

      {/* Heading */}
      <h2 className="mt-5 font-serif text-[clamp(38px,5vw,62px)] leading-[1.02] font-normal tracking-[-1.8px]">
        {lines.map((line, index) => (
          <MaskLine
            key={line.text}
            delay={200 + index * 140}
            className={line.accent ? "text-orange italic" : ""}
          >
            {line.text}
          </MaskLine>
        ))}
      </h2>

      {/* Breadcrumb — below the title, same spot as the dark PageHeader */}
      {breadcrumb && breadcrumb.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          className="mt-5 flex animate-fade-up flex-wrap items-center gap-2 text-[11px] font-medium tracking-[1.5px] text-ink/70 [animation-delay:750ms]"
        >
          {breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;

            return (
              <span key={`${item.label}-${index}`} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-ink/40">
                    /
                  </span>
                )}

                {item.href && !isLast ? (
                  <Link href={item.href} className="transition-colors hover:text-orange">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className={isLast ? "font-semibold text-ink" : ""}>
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
