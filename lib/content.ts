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

export type TimelineItem = {
  version: string
  period: string
  organization: string
  role: string
  metric: string
}

export const navigation = [
  { index: "01", label: "About", href: "#about" },
  { index: "02", label: "Timeline", href: "#timeline" },
  { index: "03", label: "Work", href: "#work" },
  { index: "04", label: "Skills", href: "#skills" },
  { index: "05", label: "Contact", href: "#contact" },
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

export const timeline: TimelineItem[] = [
  { version: "v0.1", period: "2021", organization: "Digitrack Sports", role: "Software Engineer · Flutter Developer", metric: "+25% participation via live classes" },
  { version: "v0.2", period: "2022", organization: "Goodgist.ai", role: "Flutter Web Developer · Software Engineer", metric: "+70% delivery efficiency" },
  { version: "v0.5", period: "2022—24", organization: "Settlin Properties", role: "Internal PM · Sr. Flutter Developer", metric: "−30% missed appointments · +30% revenue" },
  { version: "v0.8", period: "2024—25", organization: "NextLeap PM Fellowship", role: "Top Product Fellow", metric: "Top fellow / 300+ · 227.18 / 300" },
  { version: "v1.0", period: "2025—26", organization: "Spacekayak — Sanctuary", role: "Associate Product Manager", metric: "50K+ downloads · 4.8★ · +68% predictability" },
]

export const projects: Project[] = [
  { id: "siren", title: "Siren", type: "Consumer safety · 0→1", status: "Shipped", tagline: "A scam-prevention app built from concept to trust at scale.", impact: "Mapped risk-led use cases into 8+ core modules and shipped the first version in six months.", metric: "50K+", metricLabel: "downloads · 4.8★ rating", links: [{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.joinsiren.app" }], featured: true },
  { id: "dhundojob", title: "DhundoJob", type: "AI outreach · Solo build", status: "In progress", tagline: "A personal job-search pain point, turned into a working AI product.", impact: "Reduced research, discovery and personalized cold outreach from a three-hour grind to a five-minute flow, with the product continuing to evolve.", metric: "3 hr → 5 min", metricLabel: "60+ emails · ~80% opened", links: [{ label: "Live", href: "https://dhundojob.vercel.app/" }, { label: "GitHub", href: "https://github.com/singlesoup" }], featured: true },
  { id: "settlin", title: "Settlin Ops", type: "Internal product · Mobile", status: "Shipped", tagline: "Scheduling and session-linked bug reporting for property operations.", impact: "Built roadmaps around operational friction to improve appointments, resolution speed and team throughput.", metric: "+75%", metricLabel: "team efficiency", links: [{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=in.settlin.liaison" }] },
  { id: "nextleap", title: "Product Studies", type: "NextLeap Fellowship", status: "Shipped", tagline: "Spotify, Flipkart, Cres Finance and YouTube Hype.", impact: "A compact body of product sense, strategy, PRD and creator-growth work recognized among 300+ fellows.", metric: "Top / 300+", metricLabel: "Product Fellow · Top PRD", links: [{ label: "Portfolio", href: "https://nextleap.app/portfolio/himanshu-nawalkar" }] },
  { id: "oftna", title: "OFTNA", type: "Behavior design · Experimental web", status: "In progress", tagline: "A dopamine dummy for the urge to order food online.", impact: "Built to give users the satisfaction loop of browsing and ordering food at zero cost—without placing a real order.", metric: "₹0", metricLabel: "cost per dopamine order", links: [] },
  { id: "orangelist", title: "Orangelist", type: "Productivity · Flutter", status: "Shipped", tagline: "A playful, focused to-do experience built for getting things done.", impact: "Designed and built as a cross-platform Flutter product, turning everyday task planning into a lightweight, accessible workflow.", metric: "Live", metricLabel: "web demo available", links: [{ label: "Live demo", href: "https://orangelist.codemagic.app/" }, { label: "GitHub", href: "https://github.com/singlesoup/orangelist" }] },
]

export const skillGroups = [
  { group: "Product & Execution", items: ["Product Discovery", "Roadmapping", "PRDs", "Product Development Lifecycle", "AI Product Strategy", "Agile Delivery", "Feature Prioritization"] },
  { group: "AI & Product Thinking", items: ["GenAI Workflows", "AI Agents", "MCP", "LLM-based Systems", "Prompt Engineering", "RAG Systems", "Funnel Analysis"] },
  { group: "Collaboration & Strategy", items: ["Stakeholder Management", "Cross-functional Collaboration", "Market Research", "Competitor Analysis", "User Stories", "UI/UX Design"] },
  { group: "Tools", items: ["Mixpanel", "Jira", "Linear", "Confluence", "Figma", "CleverTap", "Claude Code", "Google Anti-Gravity", "Cursor", "SQL"] },
]
