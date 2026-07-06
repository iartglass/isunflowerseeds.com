"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

import type { BlogPost } from "@/lib/blog-posts"

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export function BlogGrid({ posts, categories }: { posts: BlogPost[]; categories: readonly string[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const filteredPosts = activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory)

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-amber-500 text-black"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <Calendar className="h-3.5 w-3.5 mr-1.5" />
                {formatDate(post.date)}
              </div>
              <h2 className="text-lg font-bold mb-3 group-hover:text-amber-600 transition-colors">{post.title}</h2>
              <p className="text-gray-700 text-sm mb-4 flex-1">{post.excerpt}</p>
              <span className="inline-flex items-center text-amber-600 font-medium text-sm">
                Read More
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
