"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { artist, navItems, localPhotos } from "@/lib/data";

export default function Sidebar({ open }: { open: boolean }) {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-[min(310px,86vw)] flex-col  border-r border-ink/[.07] bg-paper px-5 pt-8 pb-6 transition-transform duration-300 md:w-[220px] md:translate-x-0 md:shadow-none lg:w-[258px] lg:px-6 lg:pt-9 ${
        open ? "translate-x-0 shadow-[12px_0_35px_#0002]" : "-translate-x-[105%]"
      }`}
    >
      <div className="mb-6 text-center">
        <div className="relative mx-auto mb-3.5 size-[94px] rounded-full border-[1.5px] border-[#e9b65f] p-[5px] lg:size-28">
          <Image
            className="size-full rounded-full border-[3px] border-white object-cover"
            src={artist.avatar}
            alt={`${artist.name} portrait`}
            width={112}
            height={112}
            priority
          />
          <span className="absolute right-[5px] bottom-[5px] size-[13px] rounded-full border-2 border-paper bg-[#1fb88a]" />
        </div>
        <h1 className="m-0 font-serif text-[21px] font-semibold leading-tight tracking-[-.7px] lg:text-2xl">{artist.name}</h1>
        <span className="mt-2.5 inline-flex rounded-full border border-[#f0cb66] bg-[#fff5d8] px-3 py-[5px] text-[9px] font-bold tracking-[1.2px] text-[#a64d08]">
          {artist.tagline.toUpperCase()}
        </span>
      </div>

      <nav className="grid gap-[5px]" aria-label="Main navigation">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-11 items-center gap-3 rounded-[11px] border-l-[3px] px-2.5 text-[13px] transition lg:gap-3.5 lg:px-3 ${
                active
                  ? "border-orange bg-white text-[#b64f06]"
                  : "border-transparent text-[#3f4244] hover:border-orange hover:bg-white hover:text-[#b64f06]"
              }`}
            >
              <span className="w-[19px] flex-none text-center text-[17px] text-orange">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 text-center">
        
        <div className="mb-[18px] h-px bg-ink/[.12]" />
        <div className="text-[9px] leading-[1.8] tracking-[.6px] text-[#777]">
          © 2026 ELENA ROSTOVA
          <br />
          {artist.location.toUpperCase()}
        </div>
      </div>
    </aside>
  );
}
