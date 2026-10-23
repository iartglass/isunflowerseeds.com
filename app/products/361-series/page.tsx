import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Utensils, Leaf, PackageCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SeriesComparisonTable } from "@/components/series-comparison-table"
import { getPublishedBlogPosts } from "@/lib/blog-posts"
import { SchemaWebPage, SchemaFAQ, SchemaBreadcrumb } from "@/components/schema"
import { pageSocial } from "@/lib/seo"

const pageTitle = "361 Series Sunflower Seeds — Bulk & Wholesale"
const pageDescription =
  "361 Series sunflower seeds for bulk buyers — a general-purpose grade for snacking, baking, and garnishing. Processed in Bayannur, Inner Mongolia."

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/products/361-series" },
  ...pageSocial(pageTitle, pageDescription, "/products/361-series"),
}

const relatedPosts = getPublishedBlogPosts().filter((p) => p.relatedSeries?.includes("361-series")).slice(0, 3)

const series361Faqs = [
  {
    question: "How is 361 different from 363 or TQ6?",
    answer:
      "361 is our general-purpose grade for snacking, baking and garnishing. 363 is a premium raw grade for branded/health-focused lines, and Tongqing No.6 is a distinct large-kernel cultivar. See the comparison table above, or our full series comparison page, for a quick side-by-side.",
  },
  {
    question: "Is 361 Series suitable for private-label packaging?",
    answer:
      "Yes. We offer private-label and custom packaging, and the minimum quantity and lead time are set in the quote. Tell us your packaging format and branding needs in your quote request.",
  },
  {
    question: "Is 361 Series certified organic?",
    answer:
      "No. The seed is not certified organic, and we make no non-GMO or pesticide-free claim. If your market needs test results, say so in your quote request and we will agree which tests are needed.",
  },
  {
    question: "Can I get a sample before placing a bulk order?",
    answer:
      "Yes. Samples are provided, and the buyer pays the shipping cost. Contact our team with your shipping details.",
  },
  {
    question: "How is 361 Series graded?",
    answer:
      "Seed of all our series passes through the same 16-stage grading line, which includes screening, stone removal, color sorting, gravity separation and X-ray inspection. If you need a specific size band, tell us in your quote request.",
  },
  {
    question: "What export documentation do you provide?",
    answer:
      "Each shipment comes with a commercial invoice and a packing list, and sunflower seeds are classified under HS code 1206. If your destination also requires a phytosanitary certificate or a certificate of origin, tell us in your quote request before you order.",
  },
]

export default function Series361Page() {
  return (
    <>
      <SchemaWebPage
        name="361 Series Sunflower Seeds"
        description="361 Series sunflower seeds for bulk buyers — a general-purpose grade for snacking, baking, and garnishing."
        url="/products/361-series"
      />
      <SchemaFAQ items={series361Faqs.map((f) => ({ q: f.question, a: f.answer }))} />
      <SchemaBreadcrumb
        crumbs={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: "361 Series", url: "/products/361-series" },
        ]}
      />
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Plain <img> with a manual srcset: images.unoptimized is set (see next.config.mjs), so
            next/image would serve the 2000px file to mobile visitors too. */}
        <img
          src="/images/361-1.webp"
          srcSet="/images/361-1-mobile.webp 800w, /images/361-1.webp 2000w"
          sizes="100vw"
          alt="361 Series sunflower seeds"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">361 Series Sunflower Seeds</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            A general-purpose grade for snacking, baking, and garnishing.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
                361 Series
              </div>
              <h2 className="text-4xl font-bold mb-6">What Makes 361 Series Nutritious and Versatile?</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Our 361 Series is a general-purpose grade of in-shell confection sunflower seed, suited to snacking, baking and garnishing.
              </p>
              <p className="text-gray-700 mb-8">
                Processed in Bayannur, Inner Mongolia, through our full{" "}
                <Link href="/about#capabilities" className="underline decoration-dotted hover:text-amber-600">
                  16-stage grading line
                </Link>
                , this series is our general-purpose option.
              </p>
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
                <Link href="/contact#quote-form">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/product-grading-caliper.jpg"
                alt="361 Series kernel size being measured with a caliper for grading consistency"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              What Sets It Apart
            </div>
            <h2 className="text-4xl font-bold mb-6">What Is 361 Series Best Used For?</h2>
            <p className="text-gray-700 text-lg">
              A general-purpose kernel that performs well across multiple end uses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Multi-Use Kernel</h3>
              <p className="text-gray-700 mb-6">
                Suited to raw or roasted snacking, baking applications, and garnishing for salads and breads.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Naturally Nutritious</h3>
              <p className="text-gray-700 mb-6">
                A good source of plant-based protein and healthy fats, suited to health-conscious retail lines.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <PackageCheck className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Export-Ready Packing</h3>
              <p className="text-gray-700 mb-6">
                Packed to your order quantity and destination market requirements after full quality inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Buys This Series */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              Who Buys This Series
            </div>
            <h2 className="text-4xl font-bold mb-6">Why Choose 361 Series for Volume Orders?</h2>
            <p className="text-gray-700 text-lg">
              361 Series is our general-purpose grade for volume orders.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Private-Label Repackagers</h3>
              <p className="text-gray-700 text-sm">
                Snack brands and repackagers who need a general-purpose seed for their own branded bags.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Regional Distributors</h3>
              <p className="text-gray-700 text-sm">
                Wholesale traders bundling 361 Series alongside other bulk snack ingredients for redistribution
                across their market.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">First-Time China Buyers</h3>
              <p className="text-gray-700 text-sm">
                Importers testing a new supplier relationship before committing to larger volumes or our
                premium series.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Series Comparison */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">How Does 361 Series Compare to 363 and TQ6?</h2>
            <p className="text-gray-700">
              A quick reference against our{" "}
              <Link href="/products/363-series" className="underline decoration-dotted hover:text-amber-600">
                363 Series
              </Link>{" "}
              and{" "}
              <Link href="/products/tq6-series" className="underline decoration-dotted hover:text-amber-600">
                Tongqing No.6
              </Link>
              .
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <SeriesComparisonTable />
          </div>
        </div>
      </section>

      {/* Specification note */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Size Grade, Moisture, or Packaging Specs?</h3>
            <p className="text-gray-700 text-lg mb-6">
              Size grading, moisture content, purity percentage, and packaging options vary by order — contact our team for current pricing and availability for the 361 Series.
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">In-shell confection sunflower seed</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Hull on, in-shell seed</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Bulk and custom packaging available on request</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">361 Series FAQ</h2>
            <Accordion type="single" collapsible className="bg-white dark:bg-gray-900 rounded-2xl px-6 md:px-8">
              {series361Faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-left font-bold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Reading */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">361 Series in Our Blog</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                  >
                    <span className="text-xs font-medium text-amber-600">{post.category}</span>
                    <h3 className="font-semibold text-sm mt-1 text-gray-900">{post.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How to Order */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How Do You Order 361 Series?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              New to sourcing from China? Here's exactly what to expect.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {seriesOrderSteps.map((step, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-2xl">
                <div className="bg-amber-500 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Order 361 Series Sunflower Seeds?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Contact us today for pricing, samples, and shipping details.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-8">
              <Link href="/contact#quote-form">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 font-medium px-8"
            >
              <Link href="/products">
                View All Products
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

const seriesOrderSteps = [
  {
    title: "Request a Quote",
    description: "Tell us your quantity and destination via the contact form.",
  },
  {
    title: "Review Samples",
    description: "We arrange samples so you can verify quality before committing to volume.",
  },
  {
    title: "Confirm Order Terms",
    description: "Agree on specification, packaging, and shipping terms for your order.",
  },
  {
    title: "Production & Shipment",
    description: "Your order is inspected, packed, and shipped to your destination port.",
  },
]
