import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://isunflowerseeds.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: all crawlers welcome, block only utility paths
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // ── Traditional search engines ───────────────────────────────────────
      { userAgent: "Googlebot",       allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Bingbot",         allow: "/" },
      { userAgent: "Slurp",           allow: "/" }, // Yahoo
      { userAgent: "DuckDuckBot",     allow: "/" },
      { userAgent: "Baiduspider",     allow: "/" },
      { userAgent: "YandexBot",       allow: "/" },
      { userAgent: "ia_archiver",     allow: "/" }, // Wayback Machine

      // ── AI search & LLM crawlers ─────────────────────────────────────────
      // OpenAI (ChatGPT training + browsing)
      { userAgent: "GPTBot",          allow: "/" },
      { userAgent: "ChatGPT-User",    allow: "/" },
      { userAgent: "OAI-SearchBot",   allow: "/" },
      // Anthropic / Claude
      { userAgent: "ClaudeBot",       allow: "/" },
      { userAgent: "anthropic-ai",    allow: "/" },
      { userAgent: "Claude-Web",      allow: "/" },
      // Google AI (Gemini, AI Overviews)
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot-AI",    allow: "/" },
      // Perplexity AI
      { userAgent: "PerplexityBot",   allow: "/" },
      // Meta AI (Llama)
      { userAgent: "FacebookBot",     allow: "/" },
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      // Apple (Siri, Safari)
      { userAgent: "Applebot",        allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // Common Crawl — primary training data source for most LLMs
      { userAgent: "CCBot",           allow: "/" },
      // Cohere
      { userAgent: "cohere-ai",       allow: "/" },
      // You.com
      { userAgent: "YouBot",          allow: "/" },
      // Mistral / Le Chat
      { userAgent: "MistralBot",      allow: "/" },
      // Bytedance / TikTok
      { userAgent: "Bytespider",      allow: "/" },
      // Amazon Alexa / Kendra
      { userAgent: "Amazonbot",       allow: "/" },
      // Diffbot (AI knowledge graph)
      { userAgent: "Diffbot",         allow: "/" },
      // AI2 (Allen Institute)
      { userAgent: "AI2Bot",          allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
