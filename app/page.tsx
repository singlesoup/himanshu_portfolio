"use client"

import { Fragment, useEffect, useState } from "react"
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Download, X } from "lucide-react"
import { Constellation } from "@/components/constellation"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { CaseCarousel } from "@/components/case-carousel"
import { CaseCard } from "@/components/case-card"
import { FeaturedTalk } from "@/components/featured-talk"
import { QAChat } from "@/components/qa-chat"
import { ContactDialog } from "@/components/contact-dialog"
import DragoniteFollower from "@/components/DragoniteFollower"
import { navigation, principles, projects, caseStudies, skillGroups, socials, experience } from "@/lib/content"

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [resumeOpen, setResumeOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const activeStudy = caseStudies.find((s) => s.id === activeModal) ?? null

  useEffect(() => {
    if (!activeModal && !resumeOpen && !contactOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setActiveModal(null); setResumeOpen(false); setContactOpen(false) }
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = "" }
  }, [activeModal, resumeOpen, contactOpen])

  const marqueeItems = [
    "Open to APM",
    "AI PM",
    "Product Builder",
    "Bengaluru / Remote / Hybrid",
    "FC Barcelona Fan",
    "Football Freak",
    "Anime Watcher",
    "Pokémon Collector",
    "Small-time Reader",
    "Remote Anywhere",
    "Art / Music Enthusiast",
  ]
  return (
    <main>
      <DragoniteFollower />

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
              <a className="button-primary" href="#work">View my work<ArrowDown size={16} aria-hidden="true" /></a>
              <a className="button-ghost" href="/Himanshu-Nawalkar-Resume.pdf" target="_blank" rel="noreferrer" onClick={(e) => { e.preventDefault(); setResumeOpen(true) }}><Download size={16} aria-hidden="true" />View resume</a>
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

      <QAChat />

      <section className="section experience" id="work-experience">
        <SectionHeading index="02" title="Work Experience" note="End-to-end ownership through discovery → prioritization → delivery → adoption, collaborating closely with stakeholders and engineering." />
        <Reveal className="experience-list">
          {experience.map((job) => (
            <article key={job.company} className="experience-item">
              <div className="experience-head">
                <div>
                  <h3 className="experience-company">{job.company}</h3>
                  <span className="experience-location">{job.location}</span>
                </div>
                <span className="experience-period">{job.period}</span>
              </div>
              <p className="experience-role">{job.role}</p>
              <p className="experience-blurb">{job.blurb}</p>
              <ul className="experience-bullets">
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="section case-studies" id="case-studies">
        <SectionHeading index="03" title="Case studies" note="Product sense, strategy and teardown work — sharpening the thinking behind the build." />
        <p className="case-hint">{caseStudies.length} studies · drag · scroll · click</p>
        <CaseCarousel>
          {caseStudies.map((study, i) => (
            <CaseCard key={study.id} study={study} index={i} total={caseStudies.length} onOpen={() => setActiveModal(study.id)} />
          ))}
        </CaseCarousel>
      </section>

      <section className="section work-section" id="work">
        <SectionHeading index="04" title="Selected work" note="Products shipped, systems improved, and studies that sharpened the product sense behind the build." />
        <Reveal className="project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</Reveal>
      </section>

      <section className="section" id="skills">
        <SectionHeading index="05" title="Skills" note="A practical toolkit for moving between users, strategy, prototype and delivery." />
        <Reveal className="skills-grid">{skillGroups.map((group, index) => <article key={group.group}><span className="skill-number">0{index + 1}</span><h3>{group.group}</h3><div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</Reveal>
      </section>

      <FeaturedTalk />

      <section className="contact" id="contact">
        <div className="moon-wrap" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="moon"><span /></div></div>
        <div className="contact-content">
          <SectionHeading index="06" title="Contact" />
          <Reveal>
            <p className="contact-kicker">Have a hard problem, an early idea, or a role where building matters?</p>
            <h2>Let&apos;s build the next thing—<em>to the moon.</em></h2>
            <a className="contact-mail" href="mailto:himanshu.nawalkar@gmail.com" onClick={(e) => { e.preventDefault(); setContactOpen(true) }}>Contact me<ArrowUpRight aria-hidden="true" /></a>
          </Reveal>
          <footer><div>{socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{social.label}</a>)}</div><p>Portfolio v1.0 — 2026 · Vibe-coded with love by Himanshu Nawalkar</p></footer>
        </div>
      </section>

      {activeStudy && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={activeStudy.title} onClick={() => setActiveModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div className="modal-meta">
                <span className="case-type">{activeStudy.type}</span>
                <span className="case-date">{activeStudy.date}</span>
              </div>
              <button type="button" className="modal-close" aria-label="Close" onClick={() => setActiveModal(null)}><X size={18} aria-hidden="true" /></button>
            </div>
            <h2 className="modal-title">{activeStudy.title}</h2>
            <p className="modal-blurb">{activeStudy.blurb}</p>
            <iframe className="modal-frame" src={activeStudy.href} title={activeStudy.title} loading="lazy" />
            <a className="modal-open" href={activeStudy.href} target="_blank" rel="noreferrer">Open in new tab<ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
      )}

      {resumeOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Himanshu Nawalkar resume" onClick={() => setResumeOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div className="modal-meta">
                <span className="case-type">Resume</span>
                <span className="case-date">Himanshu Nawalkar</span>
              </div>
              <button type="button" className="modal-close" aria-label="Close" onClick={() => setResumeOpen(false)}><X size={18} aria-hidden="true" /></button>
            </div>
            <h2 className="modal-title">Resume</h2>
            <p className="modal-blurb">Associate / Technical Product Manager — full work history, skills and highlights.</p>
            <iframe className="modal-frame" src="/Himanshu-Nawalkar-Resume.pdf" title="Himanshu Nawalkar resume" loading="lazy" />
            <a className="modal-open" href="/Himanshu-Nawalkar-Resume.pdf" target="_blank" rel="noreferrer">Open in new tab<ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
      )}

      {contactOpen && <ContactDialog onClose={() => setContactOpen(false)} />}

  </main>
)
}
