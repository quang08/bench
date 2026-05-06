import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "6mb",
    },
  },
};

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const message = typeof b?.message === "string" ? b.message.trim() : "";

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const img = b?.image as { name?: string; type?: string; data?: string } | undefined;
  const attachments =
    img?.name && img?.type && img?.data
      ? [{ filename: img.name, content: Buffer.from(img.data, "base64"), contentType: img.type }]
      : undefined;

  const { error } = await resend.emails.send({
    from: "Bench <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL ?? "quanganh2k3@gmail.com",
    subject: "Có người trả lời Bench!!!",
    text: message,
    attachments,
  });

  if (error) {
    console.error("[resend]", error);
    return NextResponse.json({ error: "Lỗi gửi :(" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
