import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { featuredTalk } from "@/lib/content"

export function FeaturedTalk() {
  const embedSrc = `https://www.youtube-nocookie.com/embed/${featuredTalk.videoId}?rel=0&modestbranding=1`
  return (
    <section className="section featured-talk" id="featured-talk" aria-labelledby="featured-talk-title">
      <SectionHeading index="" title={featuredTalk.eyebrow} note="In conversation with NextLeap — on the builder-to-PM transition and building in the age of AI." />
      <Reveal className="featured-talk-grid">
        <div className="featured-talk-player">
          <div className="featured-talk-frame">
            <iframe
              src={embedSrc}
              title={`${featuredTalk.title} — ${featuredTalk.tag}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <a className="featured-talk-watch" href={featuredTalk.url} target="_blank" rel="noreferrer">
            Watch on YouTube<ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
        <div className="featured-talk-meta">
          <span className="featured-talk-kicker">{featuredTalk.kicker}</span>
          <h2 id="featured-talk-title">{featuredTalk.title}</h2>
          <span className="featured-talk-tag">{featuredTalk.tag}</span>
          <p>{featuredTalk.blurb}</p>
        </div>
      </Reveal>
    </section>
  )
}
