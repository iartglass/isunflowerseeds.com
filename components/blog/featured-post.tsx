import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

import type { BlogPost } from "@/lib/blog-posts"
import { estimateReadTime } from "@/lib/blog-posts"

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <div className="mb-14 md:mb-20 max-w-6xl mx-auto">
      <span className="inline-block text-xs font-semibold tracking-wide uppercase text-amber-600 mb-4">
        Featured Article
      </span>
      <Link
        href={`/blog/${post.slug}`}
        className="group grid md:grid-cols-2 bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="relative h-64 md:h-auto min-h-[320px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
            <span className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              {estimateReadTime(post.sections)} min read
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-amber-600 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{post.excerpt}</p>
          <span className="inline-flex items-center text-amber-600 font-medium">
            Read Article
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </div>
  )
}
