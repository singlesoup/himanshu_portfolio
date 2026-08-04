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
  { index: "01", label: "About", href: "#about" },
  { index: "02", label: "Work", href: "#work-experience" },
  { index: "03", label: "Case Studies", href: "#case-studies" },
  { index: "04", label: "Projects", href: "#work" },
  { index: "05", label: "Skills", href: "#skills" },
  { index: "06", label: "Contact", href: "#contact" },
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

export const projects: Project[] = [
  { id: "siren", title: "Siren", type: "Consumer safety · 0→1", status: "Shipped", tagline: "A scam-prevention app built from concept to trust at scale.", impact: "Mapped risk-led use cases into 8+ core modules and shipped the first version in six months.", metric: "50K+", metricLabel: "downloads · 4.8★ rating", links: [{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.joinsiren.app" }], featured: true },
  { id: "dhundojob", title: "DhundoJob", type: "AI outreach · Solo build", status: "In progress", tagline: "A personal job-search pain point, turned into a working AI product.", impact: "Reduced research, discovery and personalized cold outreach from a three-hour grind to a five-minute flow, with the product continuing to evolve.", metric: "3 hr → 5 min", metricLabel: "60+ emails · ~80% opened", links: [{ label: "Live", href: "https://dhundojob.vercel.app/" }, { label: "GitHub", href: "https://github.com/singlesoup" }], featured: true },
  { id: "settlin", title: "Settlin Ops", type: "Internal product · Mobile", status: "Shipped", tagline: "Scheduling and session-linked bug reporting for property operations.", impact: "Built roadmaps around operational friction to improve appointments, resolution speed and team throughput.", metric: "+75%", metricLabel: "team efficiency", links: [{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=in.settlin.liaison" }] },
  { id: "nextleap", title: "Product Studies", type: "NextLeap Fellowship", status: "Shipped", tagline: "Spotify, Flipkart, Cres Finance and YouTube Hype.", impact: "A compact body of product sense, strategy, PRD and creator-growth work recognized among 300+ fellows.", metric: "Top / 300+", metricLabel: "Product Fellow · Top PRD", links: [{ label: "Portfolio", href: "https://nextleap.app/portfolio/himanshu-nawalkar" }] },
  { id: "oftna", title: "OFTNA", type: "Behavior design · Experimental web", status: "In progress", tagline: "A dopamine dummy for the urge to order food online.", impact: "Built to give users the satisfaction loop of browsing and ordering food at zero cost—without placing a real order.", metric: "₹0", metricLabel: "cost per dopamine order", links: [{ label: "Live", href: "https://otfna.vercel.app/" }] },
  { id: "orangelist", title: "Orangelist", type: "Productivity · Flutter", status: "Shipped", tagline: "A playful, focused to-do experience built for getting things done.", impact: "Designed and built as a cross-platform Flutter product, turning everyday task planning into a lightweight, accessible workflow.", metric: "Live", metricLabel: "web demo available", links: [{ label: "Live demo", href: "https://orangelist.codemagic.app/" }, { label: "GitHub", href: "https://github.com/singlesoup/orangelist" }] },
]

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
