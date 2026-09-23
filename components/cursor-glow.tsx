"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isLight = () => document.documentElement.getAttribute("data-theme") === "light"
    const sync = () => {
      el.hidden = reduced || isLight()
    }
    sync()
    const theme = new MutationObserver(sync)
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
    if (reduced) return () => theme.disconnect()
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
      theme.disconnect()
      window.removeEventListener("pointermove", move)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
