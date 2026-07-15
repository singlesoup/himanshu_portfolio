# Himanshu Nawalkar — Portfolio

Personal portfolio site for Himanshu Nawalkar (Associate / Technical Product Manager).
Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS + shadcn/ui**, deployed on **Vercel**.

## Live
- Production: [Live](https://himanshu-nawalkar-portfolio.vercel.app/)
- Custom domain (when configured): TBD

## Tech Stack
- Next.js 16 (Turbopack)
- React 19
- Tailwind CSS v4 + `tw-animate-css`
- shadcn/ui (`@base-ui/react` under the hood)
- `@vercel/analytics`
- Package manager: **npm** (Vercel install command: `npm install`)

> Note: this project previously used pnpm, but pnpm v11's frozen-install
> build-script policy is incompatible with the `sharp`/`msw` postinstall
> scripts in CI. Switched to npm, which has no such gate.

## Local Development
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & Preview
```bash
npm run build
npm run start
```

## Content
All portfolio content (projects, timeline, skills, socials) is centralized in
`lib/content.ts` and rendered via `.map()`. To add a project, append an entry
to the `projects` array — no component changes needed.

## Deployment (CI/CD)
- Hosted on Vercel, connected to the GitHub repo `singlesoup/himanshu_portfolio`.
- **Production branch: `main`.** Every `git push origin main` triggers an
  automatic build + deploy (Vercel Git integration — no GitHub Actions needed).
- Node version: 24.x (set in Vercel project settings).

## Project Structure
```
app/            # routes & layout
components/      # UI components
lib/content.ts  # centralized portfolio data
public/         # static assets (resume PDF, images)
```

## License
Personal portfolio. All rights reserved.
