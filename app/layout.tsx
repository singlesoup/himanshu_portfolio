import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" })

export const metadata: Metadata = {
  title: "Himanshu Nawalkar — Technical Product Manager",
  description: "Portfolio of Himanshu Nawalkar, a mobile engineer turned Technical APM specializing in 0→1 execution, consumer products, and AI prototyping.",
  generator: "v0.app",
  openGraph: {
    title: "Himanshu Nawalkar — Technical Product Manager",
    description: "0→1 product execution, consumer apps, and AI prototypes—from first signal to shipped system.",
    type: "website",
    locale: "en_IN",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0C0E09",
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}{process.env.NODE_ENV === "production" && <Analytics />}</body>
    </html>
  )
}
