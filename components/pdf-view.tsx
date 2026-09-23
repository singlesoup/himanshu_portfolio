"use client"

import { useEffect, useRef, useState } from "react"
import { pdfEmbedSrc } from "@/lib/utils"

export function PdfView({ src, pages, label }: { src: string; pages?: number; label: string }) {
  const root = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState("Loading document…")

  useEffect(() => {
    const node = root.current
    if (!node) return
    let cancelled = false
    let destroy: (() => Promise<void>) | null = null

    ;(async () => {
      const pdfjs = await import("pdfjs-dist")
      pdfjs.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs"
      const task = pdfjs.getDocument({ url: pdfEmbedSrc(src) })
      destroy = () => task.destroy()
      const doc = await task.promise
      if (cancelled) {
        await doc.destroy()
        return
      }
      node.replaceChildren()
      const count = Math.min(doc.numPages, pages ?? doc.numPages)
      const width = Math.max(320, node.clientWidth || 640)
      for (let i = 1; i <= count; i++) {
        if (cancelled) break
        const page = await doc.getPage(i)
        const unscaled = page.getViewport({ scale: 1 })
        const viewport = page.getViewport({ scale: Math.min(1.5, (width - 8) / unscaled.width) })
        const canvas = document.createElement("canvas")
        canvas.width = viewport.width
        canvas.height = viewport.height
        const ctx = canvas.getContext("2d")
        if (!ctx) continue
        await page.render({ canvasContext: ctx, viewport, canvas }).promise
        if (!cancelled) node.appendChild(canvas)
        page.cleanup()
      }
      if (!cancelled) setStatus("")
    })().catch(() => {
      if (!cancelled) setStatus("Could not load this PDF. Open it in a new tab.")
    })

    return () => {
      cancelled = true
      void destroy?.()
    }
  }, [src, pages])

  return (
    <div className="pdf-view" aria-label={label}>
      {status ? <p className="pdf-view-status">{status}</p> : null}
      <div ref={root} />
    </div>
  )
}
