"use client"

import { useEffect, useState } from "react"
import { BookOpen } from "lucide-react"

export function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -70% 0px" },
    )

    headings.forEach((heading) => observer.observe(heading))
    return () => observer.disconnect()
  }, [items])

  if (items.length < 2) return null

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
        <BookOpen className="h-4 w-4 text-amber-600" />
        <span className="text-xs font-bold uppercase tracking-wide text-gray-500">Contents</span>
      </div>
      <ol className="space-y-1">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block rounded-lg px-3 py-2 text-sm leading-snug transition-colors ${
                activeId === item.id
                  ? "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 font-semibold"
                  : "text-gray-600 hover:text-amber-600"
              }`}
            >
              {index + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}
