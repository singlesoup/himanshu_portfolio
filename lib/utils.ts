import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Browser PDF viewers on localhost often fail to read cross-origin files. Stream those through the app. */
export function pdfEmbedSrc(href: string) {
  const [url, hash = ""] = href.split("#")
  if (!url.startsWith("https://assets.nextleap.app/") || !url.toLowerCase().endsWith(".pdf")) return href
  const proxied = `/api/pdf?url=${encodeURIComponent(url)}`
  return hash ? `${proxied}#${hash}` : proxied
}
