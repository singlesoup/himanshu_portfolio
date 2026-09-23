"use client"

import { Asterisk } from "lucide-react"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { navigation } from "@/lib/content"

export function SiteHeader() {
  const pathname = usePathname()
  const homeHref = pathname === "/" ? "#top" : "/"

  return (
    <header className="site-header">
      <a className="brand" href={homeHref} aria-label="Himanshu Nawalkar, back to top">
        <Asterisk size={18} aria-hidden="true" />
        <span>HN / 26</span>
      </a>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => {
          const current = item.href === "/projects" && pathname.startsWith("/projects")
          return (
            <a key={item.href} href={item.href} aria-current={current ? "page" : undefined}>
              <sup>{item.index}</sup>
              {item.label}
            </a>
          )
        })}
      </nav>
      <a className="availability" href="mailto:himanshu.nawalkar@gmail.com">
        <i aria-hidden="true" />
        Available for roles
      </a>
      <ThemeToggle />
    </header>
  )
}
