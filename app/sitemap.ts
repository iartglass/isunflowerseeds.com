import type { MetadataRoute } from "next"
import { getPublishedBlogPosts } from "@/lib/blog-posts"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://isunflowerseeds.com"

// Dynamic rendering ensures future-dated posts (Q3 2026 calendar) drop out of
// the sitemap until their scheduled date arrives.
export const dynamic = "force-dynamic"

// lastModified must reflect real content changes, not the time the sitemap was
// generated (a constant "now" teaches crawlers to ignore the field). Update these
// dates when the matching page, or the article set, is actually changed.
const PAGE_MODIFIED = {
  home: "2026-10-24",
  about: "2026-10-16",
  products: "2026-10-24",
  series: "2026-10-24",
  compare: "2026-10-16",
  contact: "2026-10-24",
  blogIndex: "2026-10-24",
}
// Date of the V5 revision that rewrote every article published before it.
const ARTICLES_REVISED = "2026-10-25"

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getPublishedBlogPosts()
  const d = (iso: string) => new Date(iso)

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: d(PAGE_MODIFIED.home), changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified: d(PAGE_MODIFIED.about), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/products`, lastModified: d(PAGE_MODIFIED.products), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/products/361-series`, lastModified: d(PAGE_MODIFIED.series), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/products/363-series`, lastModified: d(PAGE_MODIFIED.series), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/products/tq6-series`, lastModified: d(PAGE_MODIFIED.series), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/compare`, lastModified: d(PAGE_MODIFIED.compare), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: d(PAGE_MODIFIED.contact), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified: d(PAGE_MODIFIED.blogIndex), changeFrequency: "weekly", priority: 0.65 },
  ]

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: d(post.date > ARTICLES_REVISED ? post.date : ARTICLES_REVISED),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogEntries]
}
