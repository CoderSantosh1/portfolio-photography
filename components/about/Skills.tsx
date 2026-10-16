
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Camera,
  Aperture,
  Image as ImageIcon,
  Palette,
  Sun,
  Monitor,
  Layers,
  Video,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { kickerBase } from "@/lib/ui";

const skills = [
  {
    title: "Portrait Photography",
    description: "Capturing authentic expressions, emotions, and personality.",
    level: 95,
    icon: Camera,
    category: "PHOTOGRAPHY",
  },
  {
    title: "Landscape Photography",
    description: "Finding extraordinary stories in natural landscapes.",
    level: 92,
    icon: Aperture,
    category: "PHOTOGRAPHY",
  },
  {
    title: "Photo Editing",
    description: "Refining every detail with a natural, timeless finish.",
    level: 90,
    icon: ImageIcon,
    category: "POST-PRODUCTION",
  },
  {
    title: "Color Grading",
    description: "Creating cinematic tones and a consistent visual mood.",
    level: 88,
    icon: Palette,
    category: "POST-PRODUCTION",
  },
  {
    title: "Lighting Techniques",
    description: "Working with natural light, shadows, and studio setups.",
    level: 94,
    icon: Sun,
    category: "TECHNICAL",
  },
  {
    title: "Digital Workflow",
    description: "Organizing, selecting, and delivering polished final images.",
    level: 86,
    icon: Monitor,
    category: "TECHNICAL",
  },
  {
    title: "Visual Storytelling",
    description: "Building meaningful narratives through carefully composed images.",
    level: 93,
    icon: Layers,
    category: "CREATIVE",
  },
  {
    title: "Creative Direction",
    description: "Turning ideas and references into a distinctive visual concept.",
    level: 89,
    icon: Video,
    category: "CREATIVE",
  },
];

const categories = [
  "ALL",
  "PHOTOGRAPHY",
  "POST-PRODUCTION",
  "TECHNICAL",
  "CREATIVE",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const filteredSkills =
    activeCategory === "ALL"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative isolate overflow-hidden bg-[#f8f6f0] px-5 py-16 text-[#25271f] sm:px-8 md:px-[7%] md:py-24"
    >
      {/* Soft decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 -z-10 size-96 rounded-full bg-[#e9d8bd]/40 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 size-80 rounded-full bg-[#dce4d5]/50 blur-[100px]"
      />

      <div className="mx-auto max-w-[1250px]">
        {/* Section heading */}
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#a66b43]" />
            <span className={`${kickerBase} text-[#a66b43]`}>
              CRAFT & EXPERTISE
            </span>
          </div>

          <div className="mt-5 grid items-end gap-5 md:grid-cols-[1fr_0.65fr]">
            <h2 className="max-w-[700px] font-serif text-[clamp(38px,6vw,72px)] leading-[1.05] tracking-[-2px]">
              The art behind
              <br />
              <em className="font-normal text-[#a66b43]">every frame.</em>
            </h2>

           
          </div>
        </div>

        {/* Filter buttons */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-[9px] font-semibold tracking-[1.2px] transition-all duration-300 ${
                activeCategory === category
                  ? "border-[#a66b43] bg-[#a66b43] text-white shadow-md shadow-[#a66b43]/15"
                  : "border-[#dedbd1] bg-white/60 text-[#65665e] hover:border-[#a66b43] hover:text-[#a66b43]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <article
                key={skill.title}
                className={`group relative flex min-h-[245px] flex-col overflow-hidden rounded-sm border border-[#e7e2d8] bg-white/75 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#c8a486] hover:bg-white hover:shadow-[0_18px_45px_rgba(76,57,37,0.09)] sm:p-6 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: visible ? `${index * 70}ms` : "0ms",
                }}
              >
                {/* Card decoration */}
                <span
                  aria-hidden="true"
                  className="absolute -top-9 -right-9 size-24 rounded-full bg-[#f0e4d5]/60 transition-transform duration-500 group-hover:scale-150"
                />

                <div className="relative flex items-start justify-between">
                  <div className="grid size-12 place-items-center rounded-full border border-[#e8d8c6] bg-[#f8f2e9] text-[#a66b43] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-[#a66b43] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[#b9b3a8] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a66b43]"
                  />
                </div>

                <p className="relative mt-6 text-[8px] font-semibold tracking-[1.5px] text-[#a66b43]">
                  {skill.category}
                </p>

                <h3 className="relative mt-2 font-serif text-[21px] leading-snug">
                  {skill.title}
                </h3>

                <p className="relative mt-2 flex-1 text-xs leading-6 text-[#77786f]">
                  {skill.description}
                </p>

                {/* Animated skill bar */}
                <div className="relative mt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[9px] tracking-[1px] text-[#88877e]">
                      PROFICIENCY
                    </span>
                    <span className="font-serif text-sm text-[#a66b43]">
                      {skill.level}%
                    </span>
                  </div>

                  <div
                    className="h-[3px] overflow-hidden rounded-full bg-[#eae6dd]"
                    role="progressbar"
                    aria-label={`${skill.title} proficiency`}
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full rounded-full bg-[#b47a50] transition-[width] duration-1000 ease-out"
                      style={{
                        width: visible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100 + 250}ms`,
                      }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#e3ded4] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Sparkles size={17} className="text-[#a66b43]" strokeWidth={1.5} />
            <p className="text-xs leading-6 text-[#77786f]">
              Always learning. Always finding a new perspective.
            </p>
          </div>

          <span className="text-[9px] tracking-[2px] text-[#a66b43]">
            {String(filteredSkills.length).padStart(2, "0")} SKILLS
          </span>
        </div>
      </div>
    </section>
  );
}
