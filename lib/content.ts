export type ProjectStatus = "Shipped" | "In progress" | "Planned"

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  id: string
  title: string
  type: string
  status: ProjectStatus
  tagline: string
  impact: string
  metric: string
  metricLabel: string
  /** YYYY-MM of the first public version. /projects sorts newest first. */
  shipped: string
  highlight: string
  problem: string
  built: string
  highlights: string[]
  stack: string[]
  /** Product skills shown beside the tech pills on /projects. */
  skills?: string[]
  links: ProjectLink[]
  featured?: boolean
}

export type ExperienceItem = {
  company: string
  location: string
  role: string
  period: string
  blurb: string
  bullets: string[]
}

export const navigation = [
  { index: "01", label: "About", href: "/#about" },
  { index: "02", label: "Work", href: "/#work-experience" },
  { index: "03", label: "Case Studies", href: "/#case-studies" },
  { index: "04", label: "Selected Work", href: "/#work" },
  { index: "05", label: "Projects", href: "/projects" },
  { index: "06", label: "Skills", href: "/#skills" },
  { index: "07", label: "Contact", href: "/#contact" },
]

export const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/singlesoup" },
  { label: "GitHub", href: "https://github.com/singlesoup" },
  { label: "X", href: "https://x.com/singlesouup" },
  { label: "Email", href: "mailto:himanshu.nawalkar@gmail.com" },
]

export const principles = [
  { number: "I", title: "Ownership", body: "I take the messy middle personally—from the first user problem to the shipped outcome." },
  { number: "II", title: "0→1 Execution", body: "I turn ambiguity into an executable path, then keep teams moving without losing the why." },
  { number: "III", title: "AI Leverage", body: "I use working prototypes as the default artifact, cutting idea-to-demo from weeks to days." },
]

export const experience: ExperienceItem[] = [
  { company: "Spacekayak — Sanctuary", location: "Bengaluru, Karnataka", role: "Associate Product Manager", period: "Oct 2025 – Apr 2026",
    blurb: "Scam-safety prevention app — protecting users from financial scams at the moment of risk, without adding onboarding friction.",
    bullets: [
      "Owned end-to-end execution of a scam-safety prevention app — 50,000+ downloads and a 4.8★ Play Store rating in the first 6 months.",
      "Defined roadmap and feature prioritization via data analysis and risk-based use-case mapping → 8+ high-impact core modules; sprint predictability +68%.",
      "Used Claude Code and Google Anti-Gravity for rapid AI-assisted prototyping → idea-to-demo cut from 2 weeks to 2–3 days, aligning product, design, and engineering.",
    ] },
  { company: "Settlin Properties", location: "Bengaluru, Karnataka", role: "Internal PM · Sr. Flutter Developer", period: "Oct 2022 – Aug 2024",
    blurb: "Property-operations product connecting scheduling, sessions, and on-site service teams.",
    bullets: [
      "Reduced missed appointments by 30% via a scheduling-feature roadmap + MVP built in 5–6 months for the Partner App → revenue +30%.",
      "Improved resolution speed by 50% and team efficiency by 75% via a bug-reporting system linked to app sessions (after stakeholder meetings).",
      "Accelerated feature delivery by 40% via sprint planning & backlog prioritization; created Figma wireframes for 5+ product improvements.",
    ] },
  { company: "Goodgist.ai (formerly Researchfin.ai)", location: "Bengaluru, Karnataka", role: "Flutter Web Developer · Software Engineer", period: "Feb 2022 – Sep 2022",
    blurb: "Scalable web platform for research and content workflows.",
    bullets: [
      "Enhanced delivery efficiency by 70% via scalable web architecture, resolving performance issues and setting up state-management systems.",
    ] },
  { company: "Digitrack Sports", location: "Pune, Maharashtra", role: "Software Engineer · Flutter Developer", period: "Jan 2021 – Jan 2022",
    blurb: "Sports/community app bringing live classes and real-time sessions to clubs.",
    bullets: [
      "Increased participation by 25% via a live-class feature for real-time sessions (after talking to clubs & Gym-Khana).",
    ] },
]

export const selectedWork: Project[] = [
  {
    id: "siren",
    title: "Siren",
    type: "Consumer safety · 0→1",
    status: "Shipped",
    shipped: "2026-04",
    tagline: "A scam-prevention app built from concept to trust at scale.",
    impact: "Mapped risk-led use cases into 8+ core modules and shipped the first version in six months.",
    metric: "50K+",
    metricLabel: "downloads · 4.8★ rating",
    highlight: "50K+ downloads · 4.8★",
    problem: "A scam lands in a specific moment — a call, a text, a payment. Ask for every sensitive permission before someone has felt the value, and most of them leave.",
    built: "Owned the consumer app end to end as APM. Risk-led use cases became 8+ core modules, a working prototype replaced the written PRD in scrum, and the first version shipped in six months.",
    highlights: [
      "50,000+ downloads and a 4.8★ Play Store rating in the first 6 months",
      "Sprint predictability up 68% from a data- and risk-backed roadmap",
      "Idea-to-demo cut from about 2 weeks to 2–3 days",
      "Permissions made optional and contextual — onboarding drop-off from ~85% to ~67%",
    ],
    stack: ["Claude Code", "Cursor", "Anti-Gravity"],
    links: [{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.joinsiren.app" }],
  },
  {
    id: "settlin",
    title: "Settlin Ops",
    type: "Internal product · Mobile",
    status: "Shipped",
    shipped: "2023-04",
    tagline: "Scheduling and session-linked bug reporting for property operations.",
    impact: "Built roadmaps around operational friction to improve appointments, resolution speed and team throughput.",
    metric: "+75%",
    metricLabel: "team efficiency",
    highlight: "+75% team efficiency",
    problem: "On-site property teams were missing appointments, and bugs found in the field were not tied back to the session that caused them.",
    built: "A scheduling roadmap and partner-app MVP, then a bug-reporting flow linked to the app session, so ops could see what actually happened on site.",
    highlights: [
      "Missed appointments down 30%, revenue up 30%",
      "Resolution speed up 50%, team efficiency up 75%",
      "Feature delivery up 40%, with Figma wireframes for 5+ improvements",
    ],
    stack: ["Flutter", "Figma"],
    links: [{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=in.settlin.liaison" }],
  },
  {
    id: "nextleap",
    title: "Product Studies",
    type: "NextLeap Fellowship",
    status: "Shipped",
    shipped: "2025-09",
    tagline: "Spotify, Flipkart, Cres Finance and YouTube Hype.",
    impact: "A compact body of product sense, strategy, PRD and creator-growth work recognized among 300+ fellows.",
    metric: "Top / 300+",
    metricLabel: "Product Fellow · Top PRD",
    highlight: "Top PRD of 300+",
    problem: "Product judgment stays theoretical until you have to write the PRD, size a market, or tear down a product people already use.",
    built: "A fellowship set — Spotify, Flipkart, Cres Finance, YouTube Hype, plus teardowns and strategy — recognized among 300+ fellows, including a top PRD.",
    highlights: [
      "YouTube Hype PRD ranked top of 300+ fellows",
      "Strategy on whether Flipkart should enter two-wheelers",
      "Teardowns of JioHotstar and CRED’s referral loop",
    ],
    stack: ["PRD", "Strategy", "Teardown"],
    links: [{ label: "Portfolio", href: "https://nextleap.app/portfolio/himanshu-nawalkar" }],
  },
]

export const projects: Project[] = [
  {
    id: "ganesha",
    title: "Ganesha Tracker",
    type: "Community map · Bengaluru",
    status: "Shipped",
    shipped: "2026-09-14",
    tagline: "A map of Ganesh Chaturthi pandals across Bengaluru.",
    impact: "Turned scattered Instagram and Reddit tips into one map people can search, share, and add to.",
    metric: "34",
    metricLabel: "pandals on the map",
    highlight: "34 pandals on the map",
    problem: "During Ganesh Chaturthi, Bengaluru fills with pandals and there is no single place to find them. People ask on Instagram and Reddit and get a name, with no address, timing, or photo.",
    built: "A map-first site for Ganesh Chaturthi 2026. Pandals are plotted across the city, with photos, neighbourhood search, WhatsApp share, and a form to add one while you are out.",
    highlights: [
      "34 pandals listed, with 137 community favourites",
      "4,622 page views during the festival",
      "Filter by community, temple, or apartment, and search by neighbourhood",
    ],
    stack: ["React", "Leaflet", "FastAPI", "MongoDB"],
    skills: ["Product Discovery", "User Stories"],
    links: [{ label: "Live", href: "https://ganeshatracker.vercel.app/" }],
  },
  {
    id: "getmehome",
    title: "Get Me Home",
    type: "Pay-to-rank · Fiction",
    status: "Shipped",
    shipped: "2026-09-04",
    tagline: "A pay-to-rank board that moves Commander Sam closer to Earth.",
    impact: "Every paid listing is a spot on the board and fuel for the ship.",
    metric: "$10k",
    metricLabel: "to bring the ship home",
    highlight: "$1 to list · $10k to land",
    problem: "Creators want to be seen, and buying the same attention with ads is expensive. A bare leaderboard gives no one a reason to look.",
    built: "A pay-to-rank board with Commander Sam’s rescue as the skin. Paste a link, take a spot, and every listing adds fuel that moves his ship toward Earth. A payment buys a ranked listing. The rescue is fiction.",
    highlights: [
      "$1 lists a URL. Pay $1 over the seat above to overtake it",
      "The ship on the first fold moves as the board fills, toward a $10,000 landing",
      "Live at getmehome.lol, with hosted checkout and a public board",
    ],
    stack: ["React", "Supabase", "Dodo"],
    skills: ["Feature Prioritization", "UI/UX Design"],
    links: [{ label: "Live", href: "https://getmehome.lol/" }],
  },
  {
    id: "dhundojob",
    title: "DhundoJob",
    type: "AI outreach · Solo build",
    status: "In progress",
    shipped: "2026-08",
    tagline: "A personal job-search pain point, turned into a working AI product.",
    impact: "Reduced research, discovery and personalized cold outreach from a three-hour grind to a five-minute flow, with the product continuing to evolve.",
    metric: "3 hr → 5 min",
    metricLabel: "60+ emails · ~80% opened",
    highlight: "3 hours to 5 minutes",
    problem: "Researching a company, finding the right person, and writing a cold email that sounds like you was a three-hour grind. Every time.",
    built: "A solo product — PM, design, and engineering — that does the research, the discovery, and the personalization, then leaves a five-minute flow. It runs in the browser: Gemini-grounded research, email discovery, and multi-persona drafts, with local state and JSON export. No backend.",
    highlights: [
      "60+ personalized emails sent, about 80% opened",
      "Research, discovery, and outreach collapsed from 3 hours to 5 minutes",
      "Still evolving against live use",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Gemini", "Vercel"],
    skills: ["Product Discovery", "AI Product Strategy"],
    links: [{ label: "Live", href: "https://dhundojob.vercel.app/" }, { label: "GitHub", href: "https://github.com/singlesoup" }],
  },
  {
    id: "otfna",
    title: "OTFNA",
    type: "Demo food order · India",
    status: "Shipped",
    shipped: "2026-06",
    tagline: "Only The Food Never Arrives — the ordering ritual, with the bill left unspent.",
    impact: "Browse, cart, checkout, and fake tracking, with no payment, kitchen, or rider.",
    metric: "₹0",
    metricLabel: "spent on a demo order",
    highlight: "The ritual, none of the bill",
    problem: "Late-night hunger still triggers the urge to order food online. The taps that close that loop — browse, cart, checkout — used to end in a real charge.",
    built: "OTFNA (Only The Food Never Arrives) is a phone-first demo of that loop. Ten fictional restaurants, cuisine filters, a cart, checkout, and fake tracking. No signup, no payment, no rider. History keeps rupees not spent, streaks, and badges on this device.",
    highlights: [
      "10 demo restaurants, with search, cuisine filters, and sort",
      "14 home-cook recipes, plus a history of demo orders and money not spent",
      "No account. Orders, streaks, and badges stay in local storage",
    ],
    stack: ["Next.js", "Tailwind", "PWA"],
    skills: ["Product Discovery", "UI/UX Design"],
    links: [{ label: "Live", href: "https://otfna.vercel.app/" }],
  },
  {
    id: "getinflow",
    title: "Get in Flow",
    type: "Focus · Pomodoro",
    status: "Shipped",
    shipped: "2026-05-30",
    tagline: "A Pomodoro, a task list, and ambient sound on one screen.",
    impact: "Focus time is logged against the task you actually picked, not a timer floating on its own.",
    metric: "25 min",
    metricLabel: "focus, tied to a task",
    highlight: "Focus time, tied to a task",
    problem: "The timer, the to-do list, and the noise all live in different apps. You finish a session and still cannot say where the time went.",
    built: "One screen: a 25-minute Pomodoro, the task you are working on, and an ambient soundscape. Completed sessions log against that task. Everything stays in the browser, with JSON export.",
    highlights: [
      "Focus and break timer, with time recorded on the task you picked",
      "Rain, forest, ocean, and white noise",
      "Tasks and session history survive a reload and export as JSON",
    ],
    stack: ["Next.js", "Tailwind", "Web Audio"],
    skills: ["Feature Prioritization", "UI/UX Design"],
    links: [{ label: "Live", href: "https://getinflow.vercel.app/" }, { label: "GitHub", href: "https://github.com/singlesoup/getinflow" }],
  },
  {
    id: "orangelist",
    title: "Orangelist",
    type: "Productivity · Flutter",
    status: "Shipped",
    shipped: "2022-10-12",
    tagline: "A playful, focused to-do experience built for getting things done.",
    impact: "Designed and built as a cross-platform Flutter product, turning everyday task planning into a lightweight, accessible workflow.",
    metric: "Live",
    metricLabel: "web demo available",
    highlight: "Live web demo",
    problem: "Most to-do apps are either too heavy to open or too plain to want to.",
    built: "A small cross-platform to-do product in Flutter — playful enough to open, light enough to finish the list.",
    highlights: [
      "Shipped as a Flutter app with a live web demo",
      "Open source, built for everyday task planning",
    ],
    stack: ["Flutter"],
    skills: ["UI/UX Design", "User Stories"],
    links: [{ label: "Live demo", href: "https://orangelist.codemagic.app/" }, { label: "GitHub", href: "https://github.com/singlesoup/orangelist" }],
  },
]

/** Newest public version first. Selected work on the homepage is a separate list. */
export const projectsByShipDate = [...projects].sort((a, b) => b.shipped.localeCompare(a.shipped))

export type CaseStudy = {
  id: string
  title: string
  date: string
  type: "PRD" | "Teardown" | "Strategy" | "Analytical"
  blurb: string
  href: string
}

export const caseStudies: CaseStudy[] = [
  { id: "youtube-hype", title: "YouTube Hype — Top PRD", date: "Jan – Feb 2025", type: "PRD",
    blurb: "Creator-growth Product Requirements Doc that topped the NextLeap PM Fellowship (Top PRD out of 300+).",
    href: "https://assets.nextleap.app/submissions/NL_YouTube-39810cbb-6075-4cb0-a583-d7cce81c4aea.pdf" },
  { id: "audible-mitch", title: "Amazon Audible — Mitch AI PRD", date: "Sep 2025", type: "PRD",
    blurb: "Conversational GenAI assistant for Audible that helps listeners synthesize and query non-fiction audiobooks via clip-notes.",
    href: "https://assets.nextleap.app/submissions/audible_himanshu-3a05659c-62ac-4521-a34e-ee1da2b2063a.pdf" },
  { id: "flipkart-2w", title: "Flipkart — Product Strategy for Two Wheelers", date: "Aug 2025", type: "Strategy",
    blurb: "Go-to-market strategy on whether Flipkart should enter two-wheeler commerce — demand sizing, build-vs-buy, and the case to enter.",
    href: "https://assets.nextleap.app/submissions/FlipkartsProductStrategyforTwoWheelers-a3f7781e-8fa5-4eeb-b5d2-72ed8885ded3.pdf" },
  { id: "jiohotstar", title: "JioHotstar — Product Teardown", date: "Feb – Mar 2025", type: "Teardown",
    blurb: "Teardown of JioHotstar's streaming experience — onboarding, content discovery, and retention mechanics.",
    href: "https://assets.nextleap.app/submissions/JioHotstarProductTeardownHD-1570e693-3353-4ddd-b2fb-85cf024cecb1.pdf" },
  { id: "cred-referral", title: "CRED — Referral Program Teardown", date: "Nov 2024", type: "Teardown",
    blurb: "Teardown of CRED's referral loop — viral mechanics, reward design, and what makes the referral flywheel convert.",
    href: "https://assets.nextleap.app/submissions/Credproductteardown-cdd03fe9-6c53-4c64-86e1-1f51953bcbfb.pdf" },
  { id: "rainfall-qc", title: "Impact of Rainfalls on Quick Commerce", date: "Jun 2025", type: "Analytical",
    blurb: "Analytical case study on how rainfall patterns shift demand and delivery economics for quick-commerce apps.",
    href: "https://docs.google.com/document/d/1cR81mLSHIV26H5RVNQ9olYlL_WgpW5_kUhWDcligZE0/edit?tab=t.0" },
  { id: "cres-finance", title: "Wealth Monitoring App PRD (Cres Finance)", date: "Jul 2025", type: "PRD",
    blurb: "PRD for Cres Finance — one app to track all your financial accounts, integrating Account Aggregator (AA) for consolidated wealth monitoring.",
    href: "https://assets.nextleap.app/submissions/CresFinanceOneappforallyourfinancialTrackingneeds-357d9338-48e0-49d0-9b1f-f2c745f03c30.pdf" },
]

export const skillGroups = [
  { group: "Product & Execution", items: ["Product Discovery", "Roadmapping", "PRDs", "Product Development Lifecycle", "AI Product Strategy", "Agile Delivery", "Feature Prioritization"] },
  { group: "AI & Product Thinking", items: ["GenAI Workflows", "AI Agents", "MCP", "LLM-based Systems", "Prompt Engineering", "RAG Systems", "Funnel Analysis"] },
  { group: "Collaboration & Strategy", items: ["Stakeholder Management", "Cross-functional Collaboration", "Market Research", "Competitor Analysis", "User Stories", "UI/UX Design"] },
  { group: "Tools", items: ["Mixpanel", "Jira", "Linear", "Confluence", "Figma", "CleverTap", "Claude Code", "Google Anti-Gravity", "Cursor", "SQL"] },
]

// Featured talk — NextLeap podcast appearance (unlisted from primary nav)
export const featuredTalk = {
  eyebrow: "Featured talk",
  kicker: "NEXTLEAP · YOUTUBE",
  title: "From software developer to APM",
  tag: "Interview · NextLeap Podcast",
  blurb: "A conversation on the builder-to-PM transition, standing out with cold outreach, and what actually differentiates a product now that anyone can build with AI.",
  videoId: "Qo676hk8jQU",
  url: "https://youtu.be/Qo676hk8jQU?si=ICG46TgX_PJtJfBv",
}

// Idea A — scripted storytelling / QnA chat (pre-defined questions, curated answers).
// Free-tier: fully client-side, no API. State kept in localStorage so it feels responsive.
// Questions selected to mirror what a recruiter / founder reading the portfolio would ask,
// answers grounded in profile.md (canonical).
export type QAItem = {
  id: string
  question: string
  answer: string
  tags?: string[]
  featured?: boolean // highlighted "try me" pill that also makes the dragon hop when answered
}

export const qaScript: QAItem[] = [
  {
    id: "impactful",
    question: "Show me your most impactful project?",
    tags: ["Projects"],
    answer:
      "Two, in different shapes. At Spacekayak–Sanctuary I owned a scam-prevention app end-to-end as APM — from concept to 50K+ downloads and a 4.8★ rating in six months, with 8+ core modules and +68% sprint predictability. The call I made: make a working prototype the default scrum artifact instead of a written PRD (built in Cursor via Claude Code / Anti-Gravity) — idea-to-demo dropped from ~2 weeks to 2–3 days. On the builder side, I shipped DhundoJob solo (PM + design + eng): a cold-outreach tool that turned a 3-hour manual grind into a 5-minute AI workflow — 60+ personalized emails sent, ~80% open rate.",
  },
  {
    id: "ai-workflow",
    question: "How do you use AI in your product workflow?",
    tags: ["AI"],
    answer:
      "AI's job is to make the first tangible version appear fast so the team aligns on the product, not the document. Concretely: Claude Code / Google Anti-Gravity (in Cursor) for rapid prototyping and spec drafting — a clickable prototype, not a PRD, is how new features get discussed in scrum. Gemini with Search grounding for user/market research synthesis (DhundoJob, competitor analysis). Mixpanel / CleverTap funnel data interpreted by an LLM into testable hypotheses. The through-line is collapsing the distance between an idea and something real.",
  },
  {
    id: "pm-experience",
    question: "What's your product management experience?",
    tags: ["Background"],
    answer:
      "About 4.2 years of professional experience. I started in mobile engineering — ~2.6 years building Flutter apps across three startups. Over the last ~1.7 years I've moved fully into product: a year as an Internal Product Manager at Settlin (scheduling + bug-tracking, +30% revenue), then 7 months as an APM at Spacekayak owning a consumer scam-safety app. In between I did a deliberate upskilling stretch — NextLeap PM cohort (top fellow out of 300+) and AI prototyping — to transition into product. So I bring builder's empathy from engineering plus focused product ownership.",
  },
  {
    id: "failed-decision",
    question: "Walk me through a decision that didn't go as planned.",
    tags: ["Judgment"],
    answer:
      "Our scam app needed sensitive permissions (phone / SMS / accessibility) requested up front. That friction plus Play Store policy risk threatened the launch. My pivot: make the permissions optional and request them contextually, once the user sees the value — instead of all-or-nothing at onboarding. Result: far less friction, Play-compliant, launched on time, and onboarding drop-off fell from ~85% to ~67%. Lesson: challenge assumptions fast; adaptability beats rigidity.",
  },
  {
    id: "prioritize",
    question: "How do you prioritize a roadmap?",
    tags: ["Framework"],
    answer:
      "I balance three lenses: engineering (feasibility, stability, timeline), design (UX and friction), and product/business (goals, value, strategy). A real example: subscription and family (revenue) features needed more validation while competitors were entering. I chose to ship core protection first, gather feedback, validate PMF, then iterate on monetization — so engineering and design moved in parallel without a bottleneck. That's how we shipped 8+ modules in ~6 months on timeline.",
  },
  {
    id: "why-looking",
    question: "Why are you looking for a new role?",
    tags: ["Motivation"],
    answer:
      "I joined Spacekayak as an APM to build a dedicated client product. When that engagement concluded, the business model was no longer viable, so the entire product and engineering team was wound down — a business decision, not a performance one. I really enjoy building consumer products 0→1, so I'm now looking for a long-term product home where I can keep doing that, ideally in AI PM / APM / Product Builder roles.",
  },
  {
    id: "builder",
    question: "What do you build as a Product Builder?",
    tags: ["Builder"],
    answer:
      "I treat the build as the proof. DhundoJob is a solo 0→1: Next.js + TypeScript + Tailwind, with Gemini-grounded research, email discovery/verification, and multi-persona AI personalization — shipped on Vercel with no backend (browser-local state + JSON export/import). It's a real, working AI product born from my own job-search pain. I also scaffold fast with v0 and harden with AI tooling. The pattern: spot a real problem, ship the smallest working version, then iterate against live usage.",
  },
  {
    id: "outside-work",
    question: "What do you do outside of work?",
    tags: ["Human", "Offwork"],
    featured: true,
    answer:
      "Outside of work I like to play and watch Football. I sometime pick my guitar jam to my favourite songs. I read non-fiction often and play table tennis. I also own my sweet R15V4 so sometimes I also like to go on bike rides.",
  },
]

// Contact dialog (opens when "Contact me" is clicked) — reference-style card, minus cal.com.
// Real handles from profile.md. Channels: LinkedIn / GitHub / X (no Instagram in profile).
export const contactInfo = {
  headline: "Let's build something.",
  blurb: "Best for AI PM, APM and 0→1 product builder roles. Reply within 24h IST.",
  cards: [
    { key: "email", label: "Email me", sub: "himanshu.nawalkar@gmail.com", href: "mailto:himanshu.nawalkar@gmail.com" },
    { key: "whatsapp", label: "WhatsApp", sub: "+91 88508 66281", href: "https://wa.me/918850866281" },
    { key: "resume", label: "Download resume", sub: "PDF · resume", href: "/Himanshu-Nawalkar-Resume.pdf", download: true },
  ] as { key: string; label: string; sub: string; href: string; download?: boolean }[],
  channels: [
    { label: "LinkedIn", handle: "in/singlesoup", href: "https://linkedin.com/in/singlesoup" },
    { label: "GitHub", handle: "/singlesoup", href: "https://github.com/singlesoup" },
    { label: "X", handle: "@singlesouup", href: "https://x.com/singlesouup" },
  ],
}
