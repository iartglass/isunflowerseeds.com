import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { isPublishedSlug } from "@/lib/blog-posts"

// Parses inline markdown-style links "[anchor text](url)" out of a plain string.
// Internal links (href starts with "/") render as Next.js <Link>; external links
// (href starts with "http") open in a new tab with an external-link icon and rel=noopener.
// A /blog/<slug> link whose target post is not yet published (scheduled in the
// future, so the page would 404) is rendered as plain text instead of a dead
// link — it self-heals into a real link once that post's date arrives.
export function RichText({ text }: { text: string }) {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    const [, label, href] = match
    if (href.startsWith("http")) {
      nodes.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 hover:text-amber-700 underline underline-offset-2 inline-flex items-center gap-1"
        >
          {label}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>,
      )
    } else {
      // Suppress the link if it points to a blog post that is not published yet
      // (would 404). Non-blog internal links (/products, /contact, …) and links
      // to already-published posts render normally.
      const blogSlug = href.match(/^\/blog\/([a-z0-9-]+)/)?.[1]
      if (blogSlug && !isPublishedSlug(blogSlug)) {
        nodes.push(<span key={key++}>{label}</span>)
      } else {
        nodes.push(
          <Link
            key={key++}
            href={href}
            className="text-amber-600 hover:text-amber-700 underline underline-offset-2"
          >
            {label}
          </Link>,
        )
      }
    }
    lastIndex = pattern.lastIndex
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }
  return <>{nodes}</>
}
