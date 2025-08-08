
import { NextRequest, NextResponse } from "next/server";

/**
 * DEV-ONLY: Pretend to accept file uploads and return a data URL.
 * In production, replace with S3 signed-URL flow.
 */
export async function POST(req: NextRequest) {
  const { filename } = Object.fromEntries(new URL(req.url).searchParams.entries());
  return NextResponse.json({ ok: true, url: `/placeholder.png`, filename });
}
