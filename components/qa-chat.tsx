"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUp, Send } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { qaScript, type QAItem } from "@/lib/content"

type Msg = { role: "user" | "bot"; text: string }

const STORAGE_KEY = "hn-qa-asked"
const MAX = 800
const STREAM_STEP = 2 // chars per tick
const STREAM_MS = 12 // ms per tick

function findAnswer(input: string): QAItem | null {
  const q = input.toLowerCase().trim()
  if (!q) return null
  return (
    qaScript.find((item) => item.question.toLowerCase() === q) ??
    qaScript.find((item) => item.question.toLowerCase().includes(q) || q.includes(item.question.toLowerCase())) ??
    qaScript.find((item) => item.tags?.some((t) => q.includes(t.toLowerCase()))) ??
    null
  )
}

const FALLBACK =
  "I've pre-loaded the questions founders and hiring managers ask most. Tap one of the suggestions above, or rephrase — e.g. \"how did you land your first PM role?\""

export function QAChat() {
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [asked, setAsked] = useState<string[]>([])
  const [typed, setTyped] = useState("") // revealed portion of the latest bot answer
  const [streaming, setStreaming] = useState(false)
  const featuredId = qaScript.find((i) => i.featured)?.id ?? ""
  const featuredClicked = featuredId ? asked.includes(featuredId) : true
  const threadRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setAsked(JSON.parse(saved))
    } catch {}
  }, [])

  // Stop any in-flight stream (cleanup on unmount or new question)
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, typed])

  function streamAnswer(full: string, onDone?: () => void) {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(full)
      setStreaming(false)
      onDone?.()
      return
    }
    if (timerRef.current) clearInterval(timerRef.current)
    setTyped("")
    setStreaming(true)
    let i = 0
    timerRef.current = setInterval(() => {
      i = Math.min(full.length, i + STREAM_STEP)
      setTyped(full.slice(0, i))
      if (i >= full.length) {
        if (timerRef.current) clearInterval(timerRef.current)
        timerRef.current = null
        setStreaming(false)
        onDone?.()
      }
    }, STREAM_MS)
  }

  function ask(item: QAItem | null, rawText: string) {
    const text = rawText.trim()
    if (!text) return
    const answer = item?.answer ?? FALLBACK
    setMessages((m) => [...m, { role: "user", text }, { role: "bot", text: answer }])
    if (item && !asked.includes(item.id)) {
      const next = [...asked, item.id]
      setAsked(next)
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch {}
    }
    setInput("")
    const isFeatured = item?.featured === true
    streamAnswer(answer, () => {
      if (isFeatured && typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("dragonite:hop"))
      }
    })
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const item = findAnswer(input)
    ask(item, input)
  }

  // Latest bot message drives the visible streamed text
  const lastBot = [...messages].reverse().find((m) => m.role === "bot")

  return (
    <section className="section qa-section" id="ask" aria-labelledby="qa-title">
      <SectionHeading index="" title="Ask me anything" note="Pre-loaded answers to the questions founders and hiring managers actually ask. Pick one, or type your own." />
      {!featuredClicked && (
        <p className="qa-hint">Try the highlighted pill — watch the dragon react. 👇</p>
      )}
      <div className="qa-window" role="region" aria-label="Ask Himanshu — scripted Q&A">
        <div className="qa-titlebar">
          <span className="qa-dots" aria-hidden="true"><i /><i /><i /></span>
          <span className="qa-path">~ / ask-himanshu.sh</span>
          <span className="qa-ready"><i />READY</span>
        </div>
        <div className="qa-thread" ref={threadRef}>
          <p className="qa-status">▶ ready. ask anything about Himanshu — journey, hiring, product sense, AI.</p>
          {messages.length === 0 && <p className="qa-await">_ awaiting first prompt</p>}
          {messages.map((m, i) => (
            <div key={i} className={`qa-msg qa-${m.role}`}>
              <span className="qa-role">{m.role === "user" ? "$" : "▶"}</span>
              <p>
                {m.role === "bot" && i === messages.length - 1
                  ? (typed || "")
                  : m.text}
                {m.role === "bot" && i === messages.length - 1 && streaming && <span className="qa-cursor" aria-hidden="true">▋</span>}
              </p>
            </div>
          ))}
        </div>
        <div className="qa-suggest">
          {qaScript.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`qa-pill ${item.featured ? "is-featured" : ""} ${asked.includes(item.id) ? "is-asked" : ""}`}
              onClick={() => ask(item, item.question)}
            >
              {item.question}{asked.includes(item.id) ? " ✓" : ""}
            </button>
          ))}
        </div>
        <form className="qa-input" onSubmit={onSubmit}>
          <span className="qa-prompt">&gt;</span>
          <input
            value={input}
            maxLength={MAX}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ask anything · enter to send"
            aria-label="Type a question"
          />
          <span className="qa-count">{input.length}/{MAX}</span>
          <button type="submit" className="qa-send" aria-label="Send" disabled={!input.trim()}>
            <Send size={14} aria-hidden="true" />
          </button>
        </form>
        <div className="qa-footer">
          <span><ArrowUp size={11} aria-hidden="true" /> SCRIPTED · CLIENT-SIDE</span>
          <span>{messages.length} MSGS · {MAX}-CHAR INPUT</span>
        </div>
      </div>
    </section>
  )
}
