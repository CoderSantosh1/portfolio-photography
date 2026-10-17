
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { kickerBase } from "@/components/ui";

type Props = {
  kicker: string;
  title: ReactNode;
  text?: string;
  image: string;
  breadcrumb?: {
    label: string;
    href?: string;
  }[];
};

// Compact dark banner used at the top of every inner page
export default function PageHeader({
  kicker: label,
  title,
  text,
  image,
  breadcrumb,
}: Props) {
  return (
    <header className="relative isolate flex min-h-[300px] items-end overflow-hidden bg-[#111] text-white md:min-h-[340px]">
      {/* Background image */}
      <Image
        className="-z-20 animate-slow-zoom object-cover object-[center_45%]"
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#070a0de0,#070a0d80_55%,#070a0d1a)]" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070a0d99] to-transparent to-60%" />

      <div className="max-w-[720px] animate-reveal-fast px-6 pt-20 pb-[46px] md:px-[5.2%] md:pt-[90px]">
        {/* Kicker */}
        <div className={`${kickerBase} text-amber`}>
          {label}
        </div>

        {/* Page title */}
        <h2 className="mt-[18px] font-serif text-[clamp(40px,5vw,68px)] leading-[1.02] font-normal tracking-[-2px] [&_em]:font-medium [&_em]:text-[#f18a2d]">
          {title}
        </h2>

        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mt-5 flex flex-wrap items-center gap-2 text-[10px] tracking-[1.5px] text-white/70"
          >
            {breadcrumb.map((item, index) => {
              const isLast = index === breadcrumb.length - 1;

              return (
                <span
                  key={`${item.label}-${index}`}
                  className="flex items-center gap-2"
                >
                  {index > 0 && (
                    <span aria-hidden="true" className="text-white/40">
                      /
                    </span>
                  )}

                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-[#f18a2d]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className={isLast ? "text-white" : ""}
                    >
                      {item.label}
                    </span>
                  )}
                </span>
              );
            })}
          </nav>
        )}

        {/* Description */}
        {text && (
          <p className="mt-[18px] max-w-[480px] text-[13px] leading-[1.75] text-white/80">
            {text}
          </p>
        )}
      </div>
    </header>
  );
}
