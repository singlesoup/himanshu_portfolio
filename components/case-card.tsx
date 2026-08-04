"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import type { CaseStudy } from "@/lib/content"

export function CaseCard({ study, index, total, onOpen }: { study: CaseStudy; index: number; total: number; onOpen: () => void }) {
  const [hover, setHover] = useState(false)
  const isPdf = study.href.toLowerCase().endsWith(".pdf")
  const isDoc = study.href.includes("docs.google.com")

  return (
    <a key={study.id} data-case-card className="case-card" href={study.href}
      target={isDoc ? "_blank" : undefined} rel="noreferrer" role="listitem"
      draggable={false}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={(e) => { if (isDoc) return; e.preventDefault(); onOpen() }}>
      <div className="case-card-top">
        <span className="case-index">CS0{index + 1} / {total}</span>
        <span className="case-type">{study.type}</span>
      </div>
      <h3>{study.title}</h3>
      <p>{study.blurb}</p>
      <span className="case-date">{study.date}</span>

      {hover && (
        <div className="case-preview" aria-hidden="true">
          {isPdf ? (
            <iframe className="case-preview-frame" src={`${study.href}#view=FitH&page=1&toolbar=0&navpanes=0`} loading="lazy" title={`${study.title} preview`} />
          ) : (
            <div className="case-preview-doc"><span>Opens in a new tab</span></div>
          )}
          <div className="case-preview-hint">
            {isDoc ? "Open document" : "Click to read the full document"}
            <ArrowUpRight size={12} aria-hidden="true" />
          </div>
        </div>
      )}
    </a>
  )
}
