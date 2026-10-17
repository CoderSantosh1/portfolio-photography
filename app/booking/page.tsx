import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/BookingForm";
import { artist, localPhotos } from "@/site-data";
import { kicker, section, sectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "Book a Session" };

const detailLabel = "text-[8px] font-bold tracking-[1.8px] text-rust";

export default function BookingPage() {
  return (
    <>
      <PageHeader
        kicker="BOOK A SESSION"
        title={<>Let&apos;s make<br /><em>something real.</em></>}
        text="Share a few details and I’ll come back with availability, ideas and a tailored quote."
        image={localPhotos.mistyMountains}
      />
      <section className={`${section} grid grid-cols-1 items-start gap-[clamp(32px,6vw,90px)] lg:grid-cols-[.85fr_1.15fr]`}>
        <div>
          <div className={kicker}>GET IN TOUCH</div>
          <h3 className={sectionTitle}>Every great image starts with a <em>conversation.</em></h3>
          <p className="text-[13px] leading-[1.8] text-muted">
            Portraits, editorial commissions, brand stories or fine art prints — tell me what you have in mind.
          </p>
          <ul className="mt-7 list-none p-0">
            <li className="grid gap-[3px] border-t border-line py-3.5 text-sm">
              <span className={detailLabel}>EMAIL</span>
              <a className="hover:text-rust" href={`mailto:${artist.email}`}>{artist.email}</a>
            </li>
            <li className="grid gap-[3px] border-t border-line py-3.5 text-sm">
              <span className={detailLabel}>STUDIO</span>
              {artist.location}
            </li>
            <li className="grid gap-[3px] border-t border-line py-3.5 text-sm">
              <span className={detailLabel}>REPLY TIME</span>
              Within 48 hours
            </li>
          </ul>
        </div>
        <Suspense>
          <BookingForm />
        </Suspense>
      </section>
    </>
  );
}
