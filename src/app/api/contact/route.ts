// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // body contains { name, email, phone, message }
    // TODO: Replace the console.log with an email send or DB insert.
    console.log("Contact form submission:", body);

    // Example: send to external service here (fetch to SendGrid, etc).

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}