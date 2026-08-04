"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return
    let frame = 0
    let x = 0
    let y = 0
    const move = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (!frame) {
        frame = requestAnimationFrame(() => {
          el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
          frame = 0
        })
      }
    }
    window.addEventListener("pointermove", move)
    return () => {
      window.removeEventListener("pointermove", move)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
