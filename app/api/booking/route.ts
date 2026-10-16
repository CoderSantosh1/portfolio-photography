import { NextResponse } from "next/server";

// Receives booking enquiries. Hook up email (Resend, Nodemailer…) or a CRM here.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const { name, email, message } = (body ?? {}) as Record<string, string>;

  if (!name?.trim() || !email?.includes("@") || !message?.trim()) {
    return NextResponse.json({ error: "Please fill in your name, a valid email and a message." }, { status: 400 });
  }

  console.log("[booking] new enquiry", body);
  return NextResponse.json({ ok: true });
}
