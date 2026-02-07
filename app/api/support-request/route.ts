import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // eslint-disable-next-line no-console
    console.log("[support-request]", JSON.stringify(body, null, 2));

    return NextResponse.json(
      { ok: true, message: "Support request received." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }
}
