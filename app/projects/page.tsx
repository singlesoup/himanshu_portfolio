import type { Metadata } from "next"
import { ProjectRow } from "@/components/project-row"
import { Reveal } from "@/components/reveal"
import { SiteHeader } from "@/components/site-header"
import { projectsByShipDate, socials } from "@/lib/content"

export const metadata: Metadata = {
  title: "Projects — Himanshu Nawalkar",
  description: "Projects Himanshu Nawalkar has shipped, newest first — solo products, experiments, and community builds.",
}

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <SiteHeader />
      <section className="projects-archive" aria-labelledby="projects-heading">
        <Reveal>
          <header className="projects-kicker">
            <span>01</span>
            <h1 id="projects-heading">Projects</h1>
          </header>
        </Reveal>
        <div className="project-rows">
          {projectsByShipDate.map((project) => (
            <Reveal key={project.id}>
              <ProjectRow project={project} />
            </Reveal>
          ))}
        </div>
      </section>
      <footer className="projects-foot">
        <a href="/">Home</a>
        <div>
          {socials.map((social) => (
            <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  )
}
