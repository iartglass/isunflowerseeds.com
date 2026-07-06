import type { MetadataRoute } from "next"
import { getPublishedBlogPosts } from "@/lib/blog-posts"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://isunflowerseeds.com"

// Dynamic rendering ensures future-dated posts (Q3 2026 calendar) drop out of
// the sitemap until their scheduled date arrives.
export const dynamic = "force-dynamic"

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getPublishedBlogPosts()
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/products/361-series`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/products/363-series`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/products/tq6-series`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.65 },
  ]

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogEntries]
}
