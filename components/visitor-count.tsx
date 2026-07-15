"use client"

import { useEffect, useState } from "react"

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    let active = true
    fetch("/api/visitors")
      .then((r) => r.json())
      .then((d) => { if (active && typeof d.count === "number" && d.count > 0) setCount(d.count) })
      .catch(() => {})
    return () => { active = false }
  }, [])

  if (count === null) return null
  return <span>· {count.toLocaleString()} views</span>
}
