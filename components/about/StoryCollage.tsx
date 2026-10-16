import Image from "next/image";
import { aboutPage, artist } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

// Image zooms out as its tile wipes in, then zooms gently on hover
const img =
  "object-cover scale-[1.18] transition-transform duration-[1800ms] ease-[cubic-bezier(.2,.7,.2,1)] group-data-[shown=true]/reveal:scale-100 group-hover/tile:scale-[1.05]";

function Tile({ src, alt, sizes, delay, variant = "wipe-up", className = "", children }: {
  src: string;
  alt: string;
  sizes: string;
  delay: number;
  variant?: "wipe-up" | "wipe-left";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal variant={variant} delay={delay} className={`group/tile relative overflow-hidden ${className}`}>
      <Image className={img} src={src} alt={alt} fill sizes={sizes} />
      {children}
    </Reveal>
  );
}

export default function StoryCollage() {
  const { collage } = aboutPage;

  return (
    <section className="grid grid-cols-2 gap-2.5 px-5 pt-5 md:px-[5%] lg:grid-cols-12 lg:grid-rows-[170px_290px]">
      <Tile
        src={collage.portrait}
        alt={`${artist.name}, photographer`}
        sizes="(max-width: 1024px) 100vw, 40vw"
        delay={0}
        className="col-span-2 h-[460px] lg:col-span-5 lg:row-span-2 lg:h-auto"
      >
        <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <div className="absolute bottom-7 left-6 text-white md:left-10">
          {/* Signature "writes" itself left to right */}
          <span className="block font-script text-[46px] leading-none [clip-path:inset(0_100%_0_0)] transition-[clip-path] delay-700 duration-[2200ms] ease-out group-data-[shown=true]/reveal:[clip-path:inset(0_0_0_0)] md:text-[54px]">
            {artist.name}
          </span>
          <p className="mt-3 translate-y-3 text-[9px] leading-[1.9] tracking-[2.5px] opacity-0 transition duration-700 delay-[1400ms] group-data-[shown=true]/reveal:translate-y-0 group-data-[shown=true]/reveal:opacity-100">
            PHOTOGRAPHER
            <br />
            ZÜRICH, SWITZERLAND
          </p>
        </div>
      </Tile>

      <Tile
        src={collage.peak}
        alt="Snow-capped peak above the clouds"
        sizes="(max-width: 1024px) 50vw, 20vw"
        delay={150}
        className="row-span-2 h-[420px] lg:col-span-3 lg:h-auto"
      />
      <Tile
        src={collage.camera}
        alt="Vintage twin-lens camera"
        sizes="(max-width: 1024px) 50vw, 30vw"
        delay={300}
        variant="wipe-left"
        className="h-[205px] lg:col-span-4 lg:h-auto"
      />
      <Tile
        src={collage.lake}
        alt="Island on a still lake at sunset"
        sizes="(max-width: 1024px) 50vw, 30vw"
        delay={450}
        variant="wipe-left"
        className="h-[205px] lg:col-span-4 lg:h-auto"
      />
    </section>
  );
}
