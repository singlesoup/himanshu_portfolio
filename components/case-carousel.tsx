"use client"

import { useCallback, useEffect, useRef, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const DRAG_THRESHOLD = 8

export function CaseCarousel({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const state = useRef({ down: false, startX: 0, startScroll: 0, moved: 0, target: 0 })
  const raf = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const applyScroll = () => {
      raf.current = 0
      if (el) el.scrollLeft = state.current.target
    }
    const schedule = () => {
      if (!raf.current) raf.current = requestAnimationFrame(applyScroll)
    }

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return
      state.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: 0, target: el.scrollLeft }
      el.classList.add("is-dragging")
    }
    const onPointerMove = (e: PointerEvent) => {
      if (!state.current.down) return
      const dx = e.clientX - state.current.startX
      state.current.moved = Math.max(state.current.moved, Math.abs(dx))
      // Instant 1:1 follow (scroll-behavior:auto on the element) + rAF-batched so
      // we never write scrollLeft more than once per frame.
      state.current.target = state.current.startScroll - dx
      schedule()
    }
    const onPointerUp = () => {
      state.current.down = false
      el.classList.remove("is-dragging")
    }
    const onClickCapture = (e: MouseEvent) => {
      // A drag (not a tap/click) must not navigate the card.
      if (state.current.moved > DRAG_THRESHOLD) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    el.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("pointerup", onPointerUp)
    el.addEventListener("click", onClickCapture, true)
    return () => {
      el.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
      el.removeEventListener("click", onClickCapture, true)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  const scrollByCards = useCallback((dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    const card = el.querySelector<HTMLElement>(".case-card")
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * amount, behavior: "smooth" })
  }, [])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return
    const el = ref.current
    if (!el) return
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-case-card]"))
    const idx = cards.indexOf(document.activeElement as HTMLElement)
    if (idx === -1) return
    const next = e.key === "ArrowRight" ? idx + 1 : idx - 1
    cards[Math.max(0, Math.min(cards.length - 1, next))]?.focus()
    e.preventDefault()
  }

  return (
    <div className="case-carousel-wrap">
      <div ref={ref} className="case-carousel" role="list" onKeyDown={onKeyDown}>
        {children}
      </div>
      <div className="case-controls">
        <button type="button" className="case-nav" aria-label="Scroll case studies left" onClick={() => scrollByCards(-1)}><ChevronLeft size={18} aria-hidden="true" /></button>
        <button type="button" className="case-nav" aria-label="Scroll case studies right" onClick={() => scrollByCards(1)}><ChevronRight size={18} aria-hidden="true" /></button>
      </div>
    </div>
  )
}
