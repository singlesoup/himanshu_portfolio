"use client"

import { useEffect, useRef } from "react"

// Project nodes are draggable; ambient stars stay auto-floating. Positions are in
// 0–1 normalized space so they survive resize. Drag state is session-only (no storage).
type ProjectStar = { id: string; label: string; x: number; y: number }
const INITIAL: ProjectStar[] = [
  { id: "siren", label: "SIREN", x: 0.78, y: 0.24 },
  { id: "dhundojob", label: "DHUNDOJOB", x: 0.68, y: 0.68 },
  { id: "nextleap", label: "PRODUCT STUDIES", x: 0.22, y: 0.3 },
  { id: "settlin", label: "SETTLIN OPS", x: 0.28, y: 0.73 },
]

type Star = { x: number; y: number; vx: number; vy: number; size: number; alpha: number }

const DRAG_HIT = 64 // generous px hit radius so the small nodes are easy to grab
const TAP_THRESHOLD = 8 // px movement below which it's a tap (scroll), not a drag

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // Positions live in a ref so dragging updates the canvas without re-rendering React
  // (which would re-run the whole effect and rescramble the ambient starfield).
  const nodePos = useRef<ProjectStar[]>(INITIAL.map((p) => ({ ...p })))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let width = 0
    let height = 0
    let frame = 0
    let pointerX = 0
    let pointerY = 0
    let ambient: Star[] = []
    const drag = { active: false, id: "", moved: 0, startX: 0, startY: 0 }
    let hoverId = ""

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(92, Math.max(48, Math.floor(width / 15)))
      ambient = Array.from({ length: count }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.055, vy: (Math.random() - 0.5) * 0.055,
        size: Math.random() * 1.25 + 0.35, alpha: Math.random() * 0.55 + 0.25,
      }))
    }

    const np = (p: ProjectStar) => ({ x: p.x * width, y: p.y * height })

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const offsetX = pointerX * 7
      const offsetY = pointerY * 7
      const pulse = reduced ? 0 : Math.sin(performance.now() / 600) * 1.4
      for (let i = 0; i < ambient.length; i++) {
        const star = ambient[i]
        if (!reduced) {
          star.x = (star.x + star.vx + width) % width
          star.y = (star.y + star.vy + height) % height
        }
        for (let j = i + 1; j < ambient.length; j++) {
          const next = ambient[j]
          const distance = Math.hypot(star.x - next.x, star.y - next.y)
          if (distance < 92) {
            ctx.strokeStyle = `rgba(194, 204, 122, ${0.07 * (1 - distance / 92)})`
            ctx.beginPath(); ctx.moveTo(star.x + offsetX, star.y + offsetY); ctx.lineTo(next.x + offsetX, next.y + offsetY); ctx.stroke()
          }
        }
        ctx.fillStyle = `rgba(237, 239, 230, ${star.alpha})`
        ctx.beginPath(); ctx.arc(star.x + offsetX, star.y + offsetY, star.size, 0, Math.PI * 2); ctx.fill()
      }
      const isMobile = window.innerWidth < 700
      const nodes = nodePos.current
      nodes.forEach((project) => {
        const x = project.x * width + offsetX * 0.45
        const y = project.y * height + offsetY * 0.45
        const isDrag = drag.active && drag.id === project.id
        const isHover = hoverId === project.id
        const base = isDrag ? 20 : isHover ? 18 : 16
        const r = base + (isHover || isDrag ? 0 : pulse)
        // glow halo
        ctx.fillStyle = isDrag ? "rgba(194, 204, 122, .34)" : isHover ? "rgba(194, 204, 122, .28)" : "rgba(194, 204, 122, .2)"
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
        // grab ring
        ctx.strokeStyle = isDrag ? "rgba(194, 204, 122, .95)" : "rgba(194, 204, 122, .6)"
        ctx.lineWidth = isHover || isDrag ? 2 : 1.25
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke()
        // solid center dot
        ctx.fillStyle = "#E7ECBE"; ctx.beginPath(); ctx.arc(x, y, 3.5, 0, Math.PI * 2); ctx.fill()
        if (!isMobile) {
          ctx.font = "600 10px Inter, sans-serif"; ctx.letterSpacing = "1px"
          ctx.fillStyle = isHover || isDrag ? "#E7ECBE" : "rgba(231, 236, 190, .8)"
          ctx.fillText(project.label, x + 14, y + 4)
        }
      })
      if (!reduced && !drag.active) frame = requestAnimationFrame(draw)
    }

    const hitTest = (lx: number, ly: number) =>
      nodePos.current.find((p) => {
        const n = np(p)
        return Math.hypot(lx - n.x, ly - n.y) < DRAG_HIT
      })

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const lx = event.clientX - rect.left
      const ly = event.clientY - rect.top
      pointerX = lx / rect.width - 0.5
      pointerY = ly / rect.height - 0.5
      if (drag.active) {
        const dx = event.clientX - drag.startX
        const dy = event.clientY - drag.startY
        drag.moved = Math.max(drag.moved, Math.hypot(dx, dy))
        const node = nodePos.current.find((s) => s.id === drag.id)
        if (node) {
          node.x = Math.min(1, Math.max(0, lx / rect.width))
          node.y = Math.min(1, Math.max(0, ly / rect.height))
        }
        if (reduced) draw()
        else { cancelAnimationFrame(frame); frame = requestAnimationFrame(draw) }
      } else {
        const over = hitTest(lx, ly)
        const id = over ? over.id : ""
        if (id !== hoverId) {
          hoverId = id
          canvas.style.cursor = over ? "grab" : "crosshair"
          if (!reduced) { cancelAnimationFrame(frame); frame = requestAnimationFrame(draw) }
        }
      }
    }
    const onPointerDown = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const lx = event.clientX - rect.left
      const ly = event.clientY - rect.top
      const hit = hitTest(lx, ly)
      if (hit) {
        drag.active = true
        drag.id = hit.id
        drag.moved = 0
        drag.startX = event.clientX
        drag.startY = event.clientY
        try { canvas.setPointerCapture(event.pointerId) } catch { /* capture is best-effort */ }
        canvas.style.cursor = "grabbing"
        // Take over the render loop while dragging (keeps 1:1 follow, no ambient lag).
        if (!reduced) { cancelAnimationFrame(frame); frame = requestAnimationFrame(draw) }
      }
    }
    const onPointerUp = (event: PointerEvent) => {
      if (!drag.active) return
      const wasTap = drag.moved < TAP_THRESHOLD
      const id = drag.id
      drag.active = false
      drag.id = ""
      canvas.style.cursor = hoverId ? "grab" : "crosshair"
      if (wasTap) {
        document.querySelector(`#project-${id}`)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" })
      }
      if (!reduced) { cancelAnimationFrame(frame); frame = requestAnimationFrame(draw) }
      else draw()
    }
    const onPointerLeave = () => {
      if (drag.active) return
      hoverId = ""
      canvas.style.cursor = "crosshair"
      if (!reduced) { cancelAnimationFrame(frame); frame = requestAnimationFrame(draw) }
    }

    resize(); draw()
    window.addEventListener("resize", resize)
    canvas.addEventListener("pointermove", onPointerMove)
    canvas.addEventListener("pointerdown", onPointerDown)
    canvas.addEventListener("pointerup", onPointerUp)
    canvas.addEventListener("pointerleave", onPointerLeave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("pointermove", onPointerMove)
      canvas.removeEventListener("pointerdown", onPointerDown)
      canvas.removeEventListener("pointerup", onPointerUp)
      canvas.removeEventListener("pointerleave", onPointerLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="constellation" aria-label="Interactive constellation of portfolio projects — drag the labeled nodes to rearrange" />
}
