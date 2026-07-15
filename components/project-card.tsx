import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/content"

const statusClass = { Shipped: "status-shipped", "In progress": "status-progress", Planned: "status-planned" }

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article id={`project-${project.id}`} className={`project-card ${project.featured ? "project-featured" : ""}`}>
      <div className="project-topline">
        <span className={`status ${statusClass[project.status]}`}><i aria-hidden="true" />{project.status}</span>
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-impact">{project.impact}</p>
      </div>
      <div className="project-bottom">
        <div className="project-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
        <div className="project-links">
          {project.links.length ? project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={14} aria-hidden="true" /></a>
          )) : <span className="placeholder-link">Link forthcoming</span>}
        </div>
      </div>
    </article>
  )
}
