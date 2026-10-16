import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import { categories, getCategory, photosIn } from "@/lib/data";
import { section } from "@/lib/ui";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).category);
  return { title: category ? category.title : "Not found", description: category?.intro };
}

const crumb = "border-b pb-1 transition hover:border-orange hover:text-rust";

export default async function CategoryPage({ params }: Props) {
  const category = getCategory((await params).category);
  if (!category) notFound();

  const list = photosIn(category.slug);
  const index = categories.indexOf(category);
  const next = categories[(index + 1) % categories.length];

  return (
    <>
      <PageHeader
        kicker={`${String(index + 1).padStart(2, "0")} / ${String(categories.length).padStart(2, "0")} · ${category.kicker.toUpperCase()}`}
        title={<>{category.title}<em>.</em></>}
        text={category.intro}
        image={list[0]?.src ?? category.cover}
      />

      <section className={section}>
        <nav className="mb-7 flex flex-wrap gap-x-[22px] gap-y-1.5 border-b border-line pb-4 text-xs text-muted" aria-label="Collections">
          <Link href="/portfolio" className={`${crumb} border-transparent`}>All work</Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/portfolio/${c.slug}`}
              className={`${crumb} ${c.slug === category.slug ? "border-orange text-rust" : "border-transparent"}`}
            >
              {c.title}
            </Link>
          ))}
        </nav>
        <Gallery photos={list} showFilters={false} />
        <div className="mt-10 flex items-baseline justify-between gap-5 border-t border-line pt-[26px]">
          <span className="text-[9px] tracking-[2px] text-muted">NEXT COLLECTION</span>
          <Link
            href={`/portfolio/${next.slug}`}
            className="font-serif text-[clamp(28px,3vw,42px)] font-medium tracking-[-1px] transition-colors hover:text-rust"
          >
            {next.title} <em className="text-orange not-italic">→</em>
          </Link>
        </div>
      </section>
    </>
  );
}
