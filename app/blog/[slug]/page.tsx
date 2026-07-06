import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowLeft, Calendar, Clock, BookOpen, Mail, Phone, Tag, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TableOfContents } from "@/components/blog/table-of-contents"
import { RichText } from "@/components/blog/rich-text"
import { blogPosts, getBlogPost, seriesInfo } from "@/lib/blog-posts"
import { SchemaBlogPosting, SchemaBreadcrumb } from "@/components/schema"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function estimateReadTime(sections: { body?: string[]; list?: string[] }[]) {
  const words = sections.reduce((total, section) => {
    const bodyWords = section.body?.join(" ").split(/\s+/).length ?? 0
    const listWords = section.list?.join(" ").split(/\s+/).length ?? 0
    return total + bodyWords + listWords
  }, 0)
  return Math.max(1, Math.round(words / 200))
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)
  const readTime = estimateReadTime(post.sections)
  const headedSections = post.sections.filter(
    (s): s is typeof s & { heading: string } => Boolean(s.heading),
  )
  const tocItems = headedSections.map((s) => ({ id: slugify(s.heading), label: s.heading }))

  return (
    <>
      <SchemaBlogPosting
        title={post.title}
        excerpt={post.excerpt}
        slug={post.slug}
        coverImage={post.image}
        date={post.date}
        author={post.author}
        tags={[post.category]}
      />
      <SchemaBreadcrumb
        crumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
    <div className="flex min-h-screen flex-col">
      {/* Hero Image with overlaid title/meta */}
      <section className="relative h-[420px] sm:h-[480px] w-full overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6 transition-colors"
              >
                <ArrowLeft className="mr-1.5 h-4 w-4" />
                Back to Blog
              </Link>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-sm text-white rounded-full text-xs font-semibold border border-white/20 mb-4">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
                <span className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {initials(post.author)}
                  </span>
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {readTime} min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <nav className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500 overflow-hidden">
            <Link href="/" className="hover:text-amber-600 flex-shrink-0">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
            <Link href="/blog" className="hover:text-amber-600 flex-shrink-0">
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="text-gray-700 truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header + Body */}
      <section className="py-10 md:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-12 items-start">
              {/* Main column */}
              <div>
                {/* Quick Summary callout */}
                <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-2xl p-6 mb-10">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-4 w-4 text-amber-600" />
                    <span className="text-xs font-bold uppercase tracking-wide text-amber-700">Quick Summary</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
                </div>

                {/* Mobile-only Contents — on desktop this lives in the sticky sidebar below,
                    but that sidebar renders after all article content once the grid collapses
                    to one column, making it useless for quick navigation on mobile. */}
                <div className="mb-10 lg:hidden">
                  <TableOfContents items={tocItems} />
                </div>

                <div className="space-y-8">
                  {post.sections.map((section, index) => (
                    <div key={index}>
                      {section.heading && (
                        <h2
                          id={slugify(section.heading)}
                          className="text-2xl sm:text-3xl font-bold mb-4 pb-3 text-gray-900 border-b-2 border-amber-100 scroll-mt-24"
                        >
                          {section.heading}
                        </h2>
                      )}
                      {section.image && (
                        <figure className="my-6">
                          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
                            <Image src={section.image.src} alt={section.image.alt} fill className="object-cover" />
                          </div>
                          {section.image.caption && (
                            <figcaption className="text-sm text-gray-500 mt-2 text-center">
                              {section.image.caption}
                            </figcaption>
                          )}
                        </figure>
                      )}
                      {section.body?.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 text-lg leading-relaxed mb-4">
                          <RichText text={paragraph} />
                        </p>
                      ))}
                      {section.list && (
                        <ul className="space-y-3 my-4">
                          {section.list.map((item, lIndex) => (
                            <li key={lIndex} className="flex items-start text-gray-700 text-lg">
                              <span className="text-amber-500 mr-3 mt-1.5 flex-shrink-0">&#8226;</span>
                              <span>
                                <RichText text={item} />
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.table && (
                        <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-gray-50 dark:bg-gray-800">
                                {section.table.headers.map((header, hIndex) => (
                                  <th key={hIndex} className="px-4 py-3 font-bold text-gray-900 dark:text-white text-sm">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {section.table.rows.map((row, rIndex) => (
                                <tr key={rIndex} className="border-t border-gray-200 dark:border-gray-700">
                                  {row.map((cell, cIndex) => (
                                    <td key={cIndex} className="px-4 py-3 text-gray-700 dark:text-gray-300 text-sm">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {post.relatedSeries && post.relatedSeries.length > 0 && (
                  <div className="mt-16">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">Featured in This Article</h3>
                    <div className="flex flex-wrap gap-3">
                      {post.relatedSeries.map((seriesSlug) => {
                        const series = seriesInfo[seriesSlug]
                        if (!series) return null
                        return (
                          <Link
                            key={seriesSlug}
                            href={series.href}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-medium text-sm hover:bg-amber-200 transition-colors"
                          >
                            {series.name}
                            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div
                  className="mt-10 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center"
                >
                  <h3 className="text-xl font-bold mb-3">Sourcing Sunflower Seeds for Your Business?</h3>
                  <p className="text-gray-700 mb-6">
                    Contact XingYi Trading for pricing, samples, and specification sheets on our 361, 363, and TQ6
                    series.
                  </p>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                    <Link href="/contact#quote-form">
                      Request a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Author Card */}
                <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                  <span className="relative h-14 w-14 rounded-full overflow-hidden flex-shrink-0 border border-gray-200 dark:border-gray-700">
                    <Image src="/images/james-feng.jpg" alt={post.author} fill className="object-cover" />
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">{post.author}</p>
                    <p className="text-gray-500 text-sm">XingYi Trading — Bayannur, Inner Mongolia</p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-24">
                <div className="hidden lg:block">
                  <TableOfContents items={tocItems} />
                </div>

                <div className="bg-amber-500 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Request a Quote</h3>
                  <p className="text-white/90 text-sm mb-5">
                    Tell us your series, quantity, and destination — our team responds with pricing and
                    specification sheets.
                  </p>
                  <Button asChild className="w-full bg-white hover:bg-gray-100 text-amber-700 font-semibold">
                    <Link href="/contact#quote-form">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <div className="mt-5 pt-5 border-t border-white/20 space-y-2 text-sm">
                    <a href="mailto:james@zenbeadsgarden.com" className="flex items-center gap-2 text-white/90 hover:text-white">
                      <Mail className="h-4 w-4" />
                      james@zenbeadsgarden.com
                    </a>
                    <a href="https://wa.me/8618653369950" className="flex items-center gap-2 text-white/90 hover:text-white">
                      <Phone className="h-4 w-4" />
                      +86 186 5336 9950
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">More in {post.category}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(relatedPost.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {estimateReadTime(relatedPost.sections)} min read
                        </span>
                      </div>
                      <h3 className="font-bold group-hover:text-amber-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  )
}
