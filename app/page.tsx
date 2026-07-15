import { Fragment } from "react"
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Download } from "lucide-react"
import { Constellation } from "@/components/constellation"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { navigation, principles, projects, skillGroups, socials, timeline } from "@/lib/content"

export default function Home() {
  const marqueeItems = ["Open to APM", "AI PM", "Product Builder", "Bengaluru / Remote / Hybrid"]
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Himanshu Nawalkar, back to top"><Asterisk size={18} aria-hidden="true" /><span>HN / 26</span></a>
        <nav aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}><sup>{item.index}</sup>{item.label}</a>)}
        </nav>
        <a className="availability" href="mailto:himanshu.nawalkar@gmail.com"><i aria-hidden="true" />Available for roles</a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <Constellation />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-meta"><span>Bengaluru, India</span><span>12.9716° N / 77.5946° E</span></div>
          <div className="hero-heading-wrap">
            <p className="eyebrow">Associate / Technical Product Manager</p>
            <h1 id="hero-title"><span>Himanshu</span><span>Nawalkar</span></h1>
          </div>
          <div className="hero-lower">
            <p>Mobile Engineer turned Technical APM specializing in 0→1 product execution. Now using AI to build user-centric products from first signal to shipped system.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#work">View selected work<ArrowDown size={16} aria-hidden="true" /></a>
              <a className="button-ghost" href="/Himanshu-Nawalkar-Resume.pdf" target="_blank" rel="noreferrer"><Download size={16} aria-hidden="true" />View resume</a>
            </div>
          </div>
          <div className="hero-socials">{socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{social.label}<ArrowUpRight size={12} aria-hidden="true" /></a>)}</div>
        </div>
      </section>

      <div className="marquee" aria-label="Open to Associate Product Manager, AI Product Manager, and Product Builder roles"><div>{[0, 1].map((group) => (<Fragment key={group}>{marqueeItems.map((item, i) => (<Fragment key={i}><span>{item}</span><i /></Fragment>))}</Fragment>))}</div></div>

      <section className="section about" id="about">
        <SectionHeading index="01" title="About / Why I build" note="Engineering taught me how systems work. Product taught me which systems are worth building." />
        <Reveal className="about-grid">
          <div className="about-story">
            <p className="display-copy">I bridge <em>technical complexity</em> and human experience.</p>
            <p>Spent 4+ years architecting scalable mobile apps before transitioning into Product Management. Today, I leverage advanced AI toolchains to slash idea-to-demo cycles from weeks to days—without losing delivery discipline.</p>
            <div className="version-path"><span>v0.1 Mobile Engineer</span><ArrowRight size={14} /><span>v0.5 PM pivot</span><ArrowRight size={14} /><span>v1.0 Builder</span></div>
          </div>
          <div className="principles">{principles.map((principle) => <article key={principle.title}><span>{principle.number}</span><div><h3>{principle.title}</h3><p>{principle.body}</p></div></article>)}</div>
        </Reveal>
      </section>

      <section className="section" id="timeline">
        <SectionHeading index="02" title="Timeline" note="Five versions. One through-line: getting closer to the product decision." />
        <Reveal className="timeline-list">{timeline.map((item) => <article key={item.version}><div className="timeline-version">{item.version}</div><div className="timeline-period">{item.period}</div><div className="timeline-role"><h3>{item.organization}</h3><p>{item.role}</p></div><p className="timeline-metric">{item.metric}</p></article>)}</Reveal>
      </section>

      <section className="section work-section" id="work">
        <SectionHeading index="03" title="Selected work" note="Products shipped, systems improved, and studies that sharpened the product sense behind the build." />
        <Reveal className="project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</Reveal>
      </section>

      <section className="section" id="skills">
        <SectionHeading index="04" title="Working set" note="A practical toolkit for moving between users, strategy, prototype and delivery." />
        <Reveal className="skills-grid">{skillGroups.map((group, index) => <article key={group.group}><span className="skill-number">0{index + 1}</span><h3>{group.group}</h3><div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</Reveal>
      </section>

      <section className="contact" id="contact">
        <div className="moon-wrap" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="moon"><span /></div></div>
        <div className="contact-content">
          <SectionHeading index="05" title="Contact" />
          <Reveal>
            <p className="contact-kicker">Have a hard problem, an early idea, or a role where building matters?</p>
            <h2>Let&apos;s build the next thing—<em>to the moon.</em></h2>
            <a className="contact-mail" href="mailto:himanshu.nawalkar@gmail.com">Contact me<ArrowUpRight aria-hidden="true" /></a>
          </Reveal>
          <footer><div>{socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{social.label}</a>)}</div><p>Portfolio v1.0 — 2026 · Vibe-coded with love in India by Himanshu Nawalkar · Vercel Analytics</p></footer>
        </div>
      </section>
    </main>
  )
}
