"use client"

import { useEffect, useRef } from "react"

const projectStars = [
  { id: "siren", label: "SIREN", x: 0.78, y: 0.24 },
  { id: "dhundojob", label: "DHUNDOJOB", x: 0.68, y: 0.68 },
  { id: "nextleap", label: "PRODUCT STUDIES", x: 0.22, y: 0.3 },
  { id: "settlin", label: "SETTLIN OPS", x: 0.28, y: 0.73 },
]

type Star = { x: number; y: number; vx: number; vy: number; size: number; alpha: number }

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
    let stars: Star[] = []

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(92, Math.max(48, Math.floor(width / 15)))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.055, vy: (Math.random() - 0.5) * 0.055,
        size: Math.random() * 1.25 + 0.35, alpha: Math.random() * 0.55 + 0.25,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const offsetX = pointerX * 7
      const offsetY = pointerY * 7
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        if (!reduced) {
          star.x = (star.x + star.vx + width) % width
          star.y = (star.y + star.vy + height) % height
        }
        for (let j = i + 1; j < stars.length; j++) {
          const next = stars[j]
          const distance = Math.hypot(star.x - next.x, star.y - next.y)
          if (distance < 92) {
            ctx.strokeStyle = `rgba(194, 204, 122, ${0.07 * (1 - distance / 92)})`
            ctx.beginPath(); ctx.moveTo(star.x + offsetX, star.y + offsetY); ctx.lineTo(next.x + offsetX, next.y + offsetY); ctx.stroke()
          }
        }
        ctx.fillStyle = `rgba(237, 239, 230, ${star.alpha})`
        ctx.beginPath(); ctx.arc(star.x + offsetX, star.y + offsetY, star.size, 0, Math.PI * 2); ctx.fill()
      }
      projectStars.forEach((project) => {
        const x = project.x * width + offsetX * 0.45
        const y = project.y * height + offsetY * 0.45
        ctx.fillStyle = "rgba(194, 204, 122, .16)"; ctx.beginPath(); ctx.arc(x, y, 15, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = "#C2CC7A"; ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill()
        ctx.font = "500 10px Inter, sans-serif"; ctx.letterSpacing = "1px"; ctx.fillText(project.label, x + 12, y + 4)
      })
      if (!reduced) frame = requestAnimationFrame(draw)
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointerX = (event.clientX - rect.left) / rect.width - 0.5
      pointerY = (event.clientY - rect.top) / rect.height - 0.5
    }
    const onClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const nearest = projectStars.find((project) => Math.hypot(x - project.x * width, y - project.y * height) < 42)
      if (nearest) document.querySelector(`#project-${nearest.id}`)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" })
    }

    resize(); draw()
    window.addEventListener("resize", resize)
    canvas.addEventListener("pointermove", onPointerMove)
    canvas.addEventListener("click", onClick)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("pointermove", onPointerMove)
      canvas.removeEventListener("click", onClick)
    }
  }, [])

  return <canvas ref={canvasRef} className="constellation" aria-label="Interactive constellation of portfolio projects" />
}
