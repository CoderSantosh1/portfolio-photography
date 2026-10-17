import Link from "next/link";
import { btnArrowDark, btnDark, kicker, section, sectionTitle } from "@/components/ui";

export default function NotFound() {
  return (
    <section className={`${section} flex min-h-[60vh] flex-col items-start justify-center gap-[22px]`}>
      <div className={kicker}>404 · OUT OF FRAME</div>
      <h3 className={sectionTitle}>This page wandered <em>off the map.</em></h3>
      <Link className={btnDark} href="/">Back home <span className={btnArrowDark}>→</span></Link>
    </section>
  );
}
