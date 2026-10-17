
"use client";

import { useEffect, useRef, useState } from "react";
import { kickerBase } from "@/components/ui";

const testimonials = [
  {
    name: "Sophia Williams",
    role: "Portrait Photography Client",
    quote: "Every photograph felt natural, personal, and full of emotion.",
    initials: "SW",
  },
  {
    name: "James Anderson",
    role: "Editorial Photography Client",
    quote: "The entire experience was effortless. Every image told our story beautifully.",
    initials: "JA",
  },
  {
    name: "Isabella Martin",
    role: "Fine Art Print Collector",
    quote: "The landscapes bring a sense of calm into our home. Truly remarkable work.",
    initials: "IM",
  },
  {
    name: "Oliver Smith",
    role: "Wedding Photography Client",
    quote: "The little moments were captured perfectly. We will treasure these memories.",
    initials: "OS",
  },
  {
    name: "Emma Wilson",
    role: "Portrait Photography Client",
    quote: "The photos felt authentic and beautiful. The whole session was comfortable.",
    initials: "EW",
  },
  {
    name: "Noah Brown",
    role: "Editorial Client",
    quote: "Beautiful composition, thoughtful details, and a wonderful creative experience.",
    initials: "NB",
  },
  {
    name: "Charlotte Davis",
    role: "Lifestyle Photography Client",
    quote: "The images captured the warmth and personality of our family perfectly.",
    initials: "CD",
  },
  {
    name: "Lucas Miller",
    role: "Brand Photography Client",
    quote: "The photographs gave our brand a distinctive and timeless visual identity.",
    initials: "LM",
  },
  // {
  //   name: "Amelia Taylor",
  //   role: "Couple Photography Client",
  //   quote: "Every image brought us back to the feeling of that special day.",
  //   initials: "AT",
  // },
  // {
  //   name: "Henry Wilson",
  //   role: "Travel Photography Client",
  //   quote: "The attention to light and detail made every photograph feel like art.",
  //   initials: "HW",
  // },
  // {
  //   name: "Grace Thompson",
  //   role: "Portrait Photography Client",
  //   quote: "A wonderful experience from beginning to end, with beautiful results.",
  //   initials: "GT",
  // },
  // {
  //   name: "Daniel Clark",
  //   role: "Editorial Client",
  //   quote: "Professional, creative, and thoughtful. The final images exceeded our expectations.",
  //   initials: "DC",
  // },
];

const VISIBLE_CARDS = 3;
const AUTOPLAY_DELAY = 5000;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(VISIBLE_CARDS);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive cards per view
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const goTo = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  // Smooth autoplay
  useEffect(() => {
    if (paused || maxIndex === 0) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [paused, maxIndex]);

  // Scroll to active card
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.children[activeIndex] as HTMLElement | undefined;
    if (!card) return;

    slider.scrollTo({
      left: card.offsetLeft - slider.offsetLeft,
      behavior: "smooth",
    });
  }, [activeIndex, visibleCards]);

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="relative overflow-hidden bg-forest px-5 py-12 text-white md:px-[7%] md:py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 text-center">
          <div className={`${kickerBase} text-amber`}>KIND WORDS</div>

          <h2 className="mt-3 font-serif text-[clamp(30px,4vw,46px)] leading-tight">
            Moments fade.
            <em className="text-amber"> Memories stay.</em>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-white/60">
            A few words from the people who trusted me to tell their stories.
          </p>
        </div>

        {/* Smooth horizontal testimonial slider */}
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex min-h-[220px] shrink-0 snap-start flex-col border border-white/15 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-amber/60 hover:bg-white/[0.07] sm:p-6"
              style={{
                width: `calc((100% - ${(visibleCards - 1) * 16}px) / ${visibleCards})`,
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div
                  className="flex gap-1 text-sm text-amber"
                  aria-label="5 out of 5 stars"
                >
                  {"★★★★★"}
                </div>

                <span
                  className="font-serif text-5xl leading-none text-amber/30"
                  aria-hidden="true"
                >
                  “
                </span>
              </div>

              <blockquote className="flex-1 font-serif text-lg leading-relaxed text-white/90">
                {item.quote}
              </blockquote>

              <div className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-full border border-amber/50 bg-amber/10 font-serif text-sm text-amber">
                  {item.initials}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-medium">{item.name}</h3>
                  <p className="mt-1 text-[10px] text-white/55">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial position ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-amber"
                  : "w-2 bg-white/30 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
