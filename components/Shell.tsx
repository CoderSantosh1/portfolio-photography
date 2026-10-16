"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile drawer on navigation and on Escape
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Sidebar open={open} />
      <button
        className="fixed top-3.5 right-3.5 z-[60] grid size-11 cursor-pointer place-items-center rounded-full border border-white/25 bg-[#0c1315]/85 text-lg text-white backdrop-blur-md md:hidden"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <div className="fixed inset-0 z-[45] bg-[#070a0d]/50 md:hidden" onClick={() => setOpen(false)} aria-hidden="true" />
      )}
      <main className="min-w-0 md:ml-[220px] lg:ml-[258px]" id="top">
        {children}
        <Footer />
      </main>
    </>
  );
}
