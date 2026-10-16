import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StoryCollage from "@/components/about/StoryCollage";
import StatsQuote from "@/components/about/StatsQuote";
import Skills from "@/components/about/Skills"


export const metadata: Metadata = { title: "About Me" };

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StoryCollage />
      <StatsQuote />
      <Skills />
    </>
  );
}
