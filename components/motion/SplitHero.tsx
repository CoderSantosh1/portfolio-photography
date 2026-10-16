import Image from "next/image";
import Icon from "./Icon";
import MaskLine from "./MaskLine";

type Line = { text: string; accent?: boolean };

type Props = {
  kicker: string;
  lines: Line[];
  image: string;
  alt: string;
  /** Anchor the round "scroll down" button jumps to */
  target: string;
  targetLabel: string;
  /** Optional slot pinned bottom-right on desktop (e.g. a video teaser) */
  aside?: React.ReactNode;
};

// Light hero: photo on the right fading into paper behind the headline
export default function SplitHero({ kicker, lines, image, alt, target, targetLabel, aside }: Props) {
  return (
    <section className="relative isolate flex min-h-[520px] flex-col justify-center overflow-hidden px-6 py-16 md:min-h-[440px] md:px-[6%]">
      <Image
        className="-z-20 animate-ken-burns object-cover object-[70%_center] motion-reduce:animate-none"
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
      />
      {/* Paper fade on the text side keeps the copy readable */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f5f2ebf7_0%,#f5f2ebe0_60%,#f5f2ebc7_100%)] md:bg-[linear-gradient(90deg,#f5f2eb_0%,#f5f2ebf0_32%,#f5f2eb99_52%,transparent_78%)]" />

      <div className="flex animate-fade-up items-center gap-4 text-[9px] font-bold tracking-[3px] text-rust uppercase [animation-delay:100ms]">
        {kicker}
        <span className="block h-px w-10 origin-left animate-draw-x bg-rust [animation-delay:450ms]" />
      </div>

      <h2 className="mt-5 font-serif text-[clamp(38px,5vw,62px)] leading-[1.02] font-normal tracking-[-1.8px]">
        {lines.map((l, i) => (
          <MaskLine key={l.text} delay={200 + i * 140} className={l.accent ? "text-orange italic" : ""}>
            {l.text}
          </MaskLine>
        ))}
      </h2>

      <a
        href={target}
        aria-label={targetLabel}
        className="mt-6 grid size-10 animate-fade-up place-items-center rounded-full border border-ink/40 text-ink transition-colors [animation-delay:950ms] hover:border-orange hover:bg-orange hover:text-white"
      >
        <Icon name="down" className="size-4 animate-cue motion-reduce:animate-none" />
      </a>

      {aside && <div className="mt-10 md:absolute md:right-[5%] md:bottom-6 md:mt-0">{aside}</div>}
    </section>
  );
}
