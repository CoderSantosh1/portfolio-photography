"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/site-data";
import { btnArrowDark, btnDark, panel } from "@/components/ui";

type Status = "idle" | "sending" | "sent" | "error";

const label = "grid gap-[7px] text-[11px] font-semibold tracking-[.3px]";
const field =
  "w-full rounded border border-line bg-paper px-3.5 py-[13px] text-[13px] font-normal text-ink transition-colors focus:border-orange focus:shadow-[0_0_0_3px_#d76b161f] focus:outline-none";

export default function BookingForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={`${panel} grid justify-items-start gap-[18px] p-[clamp(24px,4vw,42px)]`}>
        <span className="grid size-[52px] place-items-center rounded-full bg-[#1fb88a] text-[22px] text-white">✓</span>
        <h4 className="mt-1 font-serif text-[28px] font-medium">Thank you — your enquiry is in.</h4>
        <p className="m-0 text-[13px] leading-[1.7] text-muted">
          I personally reply to every message within 48 hours with availability and next steps.
        </p>
        <button className={btnDark} type="button" onClick={() => setStatus("idle")}>
          Send another <span className={btnArrowDark}>→</span>
        </button>
      </div>
    );
  }

  return (
    <form className={`${panel} grid gap-[18px] p-[clamp(24px,4vw,42px)]`} onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className={label}>
          Your name
          <input className={field} name="name" required autoComplete="name" placeholder="Jane Doe" />
        </label>
        <label className={label}>
          Email
          <input className={field} name="email" type="email" required autoComplete="email" placeholder="jane@email.com" />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className={label}>
          Service
          <select className={field} name="service" defaultValue={params.get("service") ?? services[0].name}>
            {services.map((s) => <option key={s.name}>{s.name}</option>)}
            <option>Something else</option>
          </select>
        </label>
        <label className={label}>
          Preferred date
          <input className={field} name="date" type="date" />
        </label>
      </div>
      <label className={label}>
        Location
        <input className={field} name="location" placeholder="City, studio or outdoor spot" />
      </label>
      <label className={label}>
        Tell me about your idea
        <textarea
          className={`${field} resize-y`}
          name="message"
          rows={5}
          required
          placeholder="The story, the mood, who will be in front of the camera…"
        />
      </label>
      {error && <p className="m-0 text-xs text-[#b42318]" role="alert">{error}</p>}
      <button className={`${btnDark} cursor-pointer justify-self-start`} type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Enquiry"} <span className={btnArrowDark}>→</span>
      </button>
      <small className="text-[10px] text-muted">No spam, ever. Your details are only used to reply to this enquiry.</small>
    </form>
  );
}
