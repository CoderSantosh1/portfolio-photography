
import Image from "next/image";
import { aboutPage, artist } from "@/site-data";
import Reveal from "@/components/motion/Reveal";

const img =
  "object-cover scale-[1.12] transition-transform duration-[1800ms] ease-[cubic-bezier(.2,.7,.2,1)] group-data-[shown=true]/reveal:scale-100 group-hover/tile:scale-[1.04]";

export default function StoryCollage() {
  const { collage } = aboutPage;

  return (
    <section className="grid grid-cols-1 items-center gap-8 px-5 py-8 sm:gap-10 md:px-[5%] md:py-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
      {/* Single large portrait image */}
      <Reveal
        variant="wipe-up"
        delay={0}
        className="group/tile relative h-[420px] overflow-hidden sm:h-[520px] lg:h-[620px]"
      >
        <Image
          className={img}
          src={collage.portrait}
          alt={`${artist.name}, photographer`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-5 text-white sm:bottom-8 sm:left-8">
          <span className="block font-script text-[38px] leading-none sm:text-[48px]">
            {artist.name}
          </span>

          <p className="mt-3 text-[9px] leading-[1.9] tracking-[2.5px] text-white/85">
            PHOTOGRAPHER
            <br />
            ZÜRICH, SWITZERLAND
          </p>
        </div>

       
      </Reveal>

      {/* Text content beside the image */}
      <Reveal
        variant="wipe-left"
        delay={180}
        className="flex flex-col justify-center py-3 lg:py-10"
      >
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-semibold tracking-[2.5px] text-rust">
            MY STORY
          </span>
          <span className="h-px w-9 bg-rust" />
        </div>

        <h2 className="mt-5 max-w-[560px] font-serif text-[clamp(34px,4.5vw,58px)] leading-[1.06] font-normal tracking-[-1.6px]">
          Behind every
          <br />
          <em className="text-rust">frame, a feeling.</em>
        </h2>

        <p className="mt-6 max-w-[460px] text-[13px] leading-[1.9] text-muted">
          Photography is more than capturing a moment. It is about noticing
          the little things, finding beauty in ordinary places, and preserving
          how a moment felt.
        </p>

        

       
        <div className="mt-8 flex items-center gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-rust text-lg text-rust transition-transform duration-300 hover:rotate-45">
            ↗
          </span>

          <div>
            <span className="block font-serif text-[18px] italic text-ink">
              Every frame tells a story.
            </span>
            <span className="mt-1 block text-[8px] tracking-[1.8px] text-muted">
              MADE WITH INTENTION
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
