import { NextRequest, NextResponse } from "next/server"

const ALLOWED_PREFIX = "https://assets.nextleap.app/"

/** Same-origin PDF stream. The browser's viewer often drops cross-origin PDF bytes on localhost. */
export async function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get("url") ?? ""
  let target: URL
  try {
    target = new URL(raw)
  } catch {
    return new NextResponse("Not found", { status: 404 })
  }
  if (!raw.startsWith(ALLOWED_PREFIX) || target.protocol !== "https:" || !target.pathname.toLowerCase().endsWith(".pdf")) {
    return new NextResponse("Not found", { status: 404 })
  }

  const range = req.headers.get("range")
  const upstream = await fetch(target, {
    headers: range ? { Range: range } : undefined,
  })
  if (!upstream.ok && upstream.status !== 206) {
    return new NextResponse("Could not load PDF", { status: 502 })
  }

  const headers = new Headers()
  headers.set("Content-Type", "application/pdf")
  headers.set("Content-Disposition", "inline")
  headers.set("Accept-Ranges", "bytes")
  headers.set("Cache-Control", "public, max-age=3600")
  for (const key of ["content-length", "content-range"]) {
    const value = upstream.headers.get(key)
    if (value) headers.set(key, value)
  }

  return new NextResponse(upstream.body, { status: upstream.status, headers })
}
