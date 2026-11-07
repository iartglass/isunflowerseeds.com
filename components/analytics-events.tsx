"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params)
  }
}

// One delegated listener covers every WhatsApp and email link on the site
// (floating button, footer, contact page, article calls to action).
export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.("a")
      const href = link?.getAttribute("href") || ""
      if (href.startsWith("mailto:")) {
        trackEvent("email_click", { page_path: window.location.pathname })
      } else if (href.includes("wa.me/")) {
        trackEvent("whatsapp_click", { page_path: window.location.pathname })
      }
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])
  return null
}
