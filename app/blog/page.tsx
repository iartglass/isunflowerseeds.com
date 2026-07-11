import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { blogCategories, getPublishedBlogPosts } from "@/lib/blog-posts"
import { BlogGrid } from "@/components/blog/blog-grid"
import { FeaturedPost } from "@/components/blog/featured-post"
import { SchemaBreadcrumb, SchemaItemList } from "@/components/schema"

// Publish dates are scheduled across Jul-Oct 2026 (see guazi/seo-plan/BLOG-CALENDAR-Q3-2026.md).
// Dynamic rendering ensures future-dated posts appear automatically on their date.
export const dynamic = "force-dynamic"

export const metadata = {
  title: "Sunflower Seed Blog & Resources",
  description:
    "Recipes, harvesting guides, nutrition facts, and beauty uses for sunflower seeds — from an exporter based in Bayannur, Inner Mongolia.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  // getPublishedBlogPosts() returns newest-first, so the first post is
  // always the correct "latest" spotlight — no separate sort needed here.
  const blogPosts = getPublishedBlogPosts()
  const [featuredPost, ...remainingPosts] = blogPosts
  return (
    <>
      <SchemaBreadcrumb crumbs={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]} />
      <SchemaItemList
        name="Sunflower Seed Articles"
        description="Recipes, harvesting guides, and nutrition facts from XingYi Trading."
        url="/blog"
        items={blogPosts.map((post, index) => ({
          name: post.title,
          url: `/blog/${post.slug}`,
          position: index + 1,
        }))}
      />
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/warehouse-storage.jpg"
          alt="Rows of packed sunflower seed bags stored in XingYi Trading's warehouse"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Blog</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl sm:max-w-2xl">
            Recipes, harvesting guides, nutrition facts, and beauty uses for sunflower seeds.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {featuredPost && <FeaturedPost post={featuredPost} />}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14 text-gray-900 dark:text-white">
            All Articles
          </h2>
          <BlogGrid posts={remainingPosts} categories={blogCategories} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
              Sourcing Sunflower Seeds for Your Business?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Contact XingYi Trading for pricing, samples, and specification sheets on our 361, 363, and TQ6 series.
            </p>
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
              <Link href="/contact#quote-form">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
