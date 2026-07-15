import { NextResponse } from "next/server"
import { kv } from "@vercel/kv"

export const runtime = "edge"
export const dynamic = "force-dynamic"

const COUNTER_KEY = "portfolio:views"

export async function GET() {
  try {
    const count = await kv.incr(COUNTER_KEY)
    return NextResponse.json({ count }, { headers: { "Cache-Control": "no-store" } })
  } catch {
    // KV not provisioned yet — return 0 so the UI degrades gracefully.
    return NextResponse.json({ count: 0 }, { status: 200 })
  }
}
