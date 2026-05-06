import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const message =
    body && typeof body === "object" && "message" in body
      ? String((body as { message: unknown }).message).trim()
      : "";

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Bench <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL ?? "trungtran3423@gmail.com",
    subject: "Có người trả lời Bench!!!",
    text: message,
  });

  if (error) {
    console.error("[resend]", error);
    return NextResponse.json({ error: "Lỗi gửi :(" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
