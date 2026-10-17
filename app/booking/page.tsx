
import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/BookingForm";
import { artist, localPhotos } from "@/site-data";
import { kicker, section, sectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book a Session",
};

const detailLabel =
  "text-[8px] font-bold tracking-[1.8px] text-rust";

export default function BookingPage() {
  const mapQuery = encodeURIComponent(artist.location);

  return (
    <>
      <PageHeader
        kicker="BOOK A SESSION"
        title={
          <>
            Let&apos;s make
            <br />
            <em>something real.</em>
          </>
        }
        image={localPhotos.mistyMountains}
        breadcrumb={[
          { label: "HOME", href: "/" },
          { label: "CONTACT US" },
        ]}
      />

      {/* Booking Section */}
      <section
        className={`${section} grid grid-cols-1 items-start gap-[clamp(32px,6vw,90px)] lg:grid-cols-[.85fr_1.15fr]`}
      >
        {/* Contact Details */}
        <div>
          <div className={kicker}>GET IN TOUCH</div>

          <h3 className={sectionTitle}>
            Every great image starts with a{" "}
            <em>conversation.</em>
          </h3>

          <p className="text-[13px] leading-[1.8] text-muted">
            Portraits, editorial commissions, brand stories or
            fine art prints — tell me what you have in mind.
          </p>

          <ul className="mt-7 list-none p-0">
            <li className="grid gap-[3px] border-t border-line py-3.5 text-sm">
              <span className={detailLabel}>EMAIL</span>

              <a
                className="break-all transition-colors hover:text-rust"
                href={`mailto:${artist.email}`}
              >
                {artist.email}
              </a>
            </li>

            <li className="grid gap-[3px] border-t border-line py-3.5 text-sm">
              <span className={detailLabel}>STUDIO</span>
              {artist.location}
            </li>

            <li className="grid gap-[3px] border-t border-line py-3.5 text-sm">
              <span className={detailLabel}>MOBILE NO</span>
              +1 0000000
            </li>
          </ul>
        </div>

        {/* Booking Form */}
        <Suspense fallback={<div className="min-h-[300px]" />}>
          <BookingForm />
        </Suspense>
      </section>

      {/* Studio Location Map — After Booking Form */}
      <section
        id="studio-location"
        className={`${section} !pt-0`}
      >
       
        {/* Map */}
        <div className="group relative h-[280px] overflow-hidden border border-line bg-[#eee9df] sm:h-[360px] lg:h-[420px]">
          <iframe
            title={`Map showing ${artist.location}`}
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* Map Footer */}
        
      </section>
    </>
  );
}
