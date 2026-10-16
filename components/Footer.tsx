import Link from "next/link";
import { gutter, textlink } from "@/lib/ui";

export default function Footer() {
  return (
    <footer
      className={`${gutter} flex flex-col items-start gap-2 border-t border-line py-5 text-[14px] text-red-400 tracking-[.3px] text-muted md:flex-row md:items-center md:justify-between md:gap-5`}
    >
      <span>© 2026 Elena Rostova Studio · All rights reserved</span>
      <em className="font-serif text-xs">Photography · Stories · People · Places</em>
      <Link className={`${textlink} text-rust hover:text-ink`} href="/booking">Book a Session →</Link>
    </footer>
  );
}
