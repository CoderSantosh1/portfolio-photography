"use client";

import { useInView } from "./useInView";

type Variant = "up" | "fade" | "wipe-up" | "wipe-left";

const hidden: Record<Variant, string> = {
  up: "translate-y-10 opacity-0",
  fade: "opacity-0",
  "wipe-up": "[clip-path:inset(100%_0_0_0)]",
  "wipe-left": "[clip-path:inset(0_100%_0_0)]",
};

const shown: Record<Variant, string> = {
  up: "translate-y-0 opacity-100",
  fade: "opacity-100",
  "wipe-up": "[clip-path:inset(0_0_0_0)]",
  "wipe-left": "[clip-path:inset(0_0_0_0)]",
};

type Props = {
  variant?: Variant;
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Scroll-triggered entrance. Exposes `group/reveal` + `data-shown` so children can
 * animate too, e.g. `group-data-[shown=true]/reveal:scale-100`.
 */
const motion = "transition-all duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none";

export default function Reveal({ variant = "up", delay = 0, className = "", children }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const state = inView ? shown[variant] : hidden[variant];
  const isWipe = variant.startsWith("wipe");

  // Wipes clip the inner layer only: a fully clipped element never reports as intersecting
  return (
    <div
      ref={ref}
      data-shown={inView}
      style={isWipe ? undefined : { transitionDelay: `${delay}ms` }}
      className={`group/reveal ${isWipe ? "" : `${motion} ${state}`} ${className}`}
    >
      {isWipe ? (
        <div style={{ transitionDelay: `${delay}ms` }} className={`relative size-full ${motion} ${state}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
