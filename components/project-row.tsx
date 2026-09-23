import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/content"

export function ProjectRow({ project }: { project: Project }) {
  const year = project.shipped.slice(0, 4)

  return (
    <article className="project-row" id={project.id}>
      <div className="project-row-meta">
        <div className="project-row-titleline">
          <h2>{project.title}</h2>
          <span className="project-row-year">{year}</span>
        </div>
        <p className="project-row-type">{project.type}</p>
        <p className="project-row-metric">→ {project.highlight}</p>
        {project.links.length > 0 && (
          <div className="project-row-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="project-row-body">
        <p>
          <strong>The problem.</strong> {project.problem}
        </p>
        <p>
          <strong>What I built.</strong> {project.built}
        </p>
        {project.highlights.length > 0 && (
          <ul className="project-points">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {(project.stack.length > 0 || (project.skills?.length ?? 0) > 0) && (
          <ul className="project-stack" aria-label="Skills and tools">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
            {project.skills?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
