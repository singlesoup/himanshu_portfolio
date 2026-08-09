"use client"

import { X } from "lucide-react"
import { contactInfo } from "@/lib/content"

export function ContactDialog({ onClose }: { onClose: () => void }) {
  return (
    <div className="contact-overlay" role="dialog" aria-modal="true" aria-label="Contact Himanshu Nawalkar" onClick={onClose}>
      <div className="contact-card" onClick={(e) => e.stopPropagation()}>
        <div className="contact-card-head">
          <span className="contact-eyebrow"><i />CONTACT / CHANNELS</span>
          <button type="button" className="contact-close" aria-label="Close" onClick={onClose}><X size={16} aria-hidden="true" /></button>
        </div>

        <h2 className="contact-headline">{contactInfo.headline}</h2>
        <p className="contact-blurb">{contactInfo.blurb}</p>

        <div className="contact-grid">
          {contactInfo.cards.map((card) => (
            <a
              key={card.key}
              className={`contact-tile ${card.key === "email" ? "is-primary" : ""}`}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              download={card.download ? "" : undefined}
            >
              <span className="contact-tile-label">{card.label}</span>
              <span className="contact-tile-sub">{card.sub}</span>
            </a>
          ))}
        </div>

        <div className="contact-channels-head"><i />/ CHANNELS</div>
        <ul className="contact-channels">
          {contactInfo.channels.map((ch) => (
            <li key={ch.label}>
              <span className="contact-channel-name">{ch.label}</span>
              <a href={ch.href} target="_blank" rel="noreferrer" className="contact-channel-handle">{ch.handle}</a>
            </li>
          ))}
        </ul>

        <div className="contact-card-foot">
          <span><i />OPEN FOR WORK</span>
          <span>ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  )
}
