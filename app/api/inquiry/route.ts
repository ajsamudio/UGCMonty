import { NextResponse } from "next/server";
import { Resend } from "resend";
import { inquirySchema } from "@/lib/inquiry-schema";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  // Honeypot tripped — pretend success, send nothing.
  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or INQUIRY_TO_EMAIL env var.");
    return NextResponse.json(
      { error: "Email is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const { name, email, property, dates, message } = parsed.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio Inquiry <${from}>`,
      to: [to],
      reply_to: email,
      subject: `New inquiry from ${name} (${property})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Brand / Company: ${property}`,
        `Dates: ${dates || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
  } catch (err) {
    console.error("Resend threw:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
