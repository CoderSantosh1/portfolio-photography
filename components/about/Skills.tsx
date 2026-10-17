
"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { kickerBase } from "@/components/ui";

const skills = [
  { title: "Portrait Photography", category: "PHOTOGRAPHY" },
  { title: "Landscape Photography", category: "PHOTOGRAPHY" },
  { title: "Photo Editing", category: "POST-PRODUCTION" },
  { title: "Color Grading", category: "POST-PRODUCTION" },
  { title: "Lighting Techniques", category: "TECHNICAL" },
  { title: "Composition", category: "TECHNICAL" },
  { title: "Visual Storytelling", category: "CREATIVE" },
  { title: "Creative Direction", category: "CREATIVE" },
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
      { threshold: 0.1 }
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
      className="relative overflow-hidden bg-[#f8f6f0] px-5 py-12 text-[#292820] sm:px-8 md:px-[7%] md:py-16"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Compact heading */}
        <div
          className={`transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="h-px w-7 bg-[#a66b43]" />
            <span className={`${kickerBase} text-[#a66b43]`}>
              MY EXPERTISE
            </span>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-tight tracking-[-1px]">
              Skills & <em className="text-[#a66b43]">Craft.</em>
            </h2>

            <p className="text-[11px] tracking-wide text-[#858176]">
              The details behind every frame.
            </p>
          </div>
        </div>

        {/* Small filter links */}
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-b border-[#e2ddd2] pb-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`text-[9px] tracking-[1px] transition-colors duration-300 ${
                activeCategory === category
                  ? "font-semibold text-[#a66b43]"
                  : "text-[#858176] hover:text-[#292820]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Minimal text-only skills */}
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {filteredSkills.map((skill, index) => (
            <article
              key={skill.title}
              className={`group flex items-center justify-between gap-3 border-b border-[#e2ddd2] py-5 transition-all duration-500 sm:px-4 sm:py-6 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } ${
                index % 4 !== 0 ? "lg:border-l lg:border-[#e2ddd2]" : ""
              }`}
              style={{
                transitionDelay: visible ? `${index * 60}ms` : "0ms",
              }}
            >
              <div className="min-w-0">
                <p className="mb-2 text-[8px] tracking-[1.3px] text-[#a66b43]">
                  {skill.category}
                </p>

                <h3 className="font-serif text-[17px] leading-snug transition-colors duration-300 group-hover:text-[#a66b43]">
                  {skill.title}
                </h3>
              </div>

             
            </article>
          ))}
        </div>

        {/* Minimal footer */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-[9px] tracking-[1.5px] text-[#858176]">
            CONTINUOUSLY REFINING MY CRAFT
          </span>

         
        </div>
      </div>
    </section>
  );
}
