import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Wheat, ChefHat, ShieldPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SeriesComparisonTable } from "@/components/series-comparison-table"
import { getPublishedBlogPosts } from "@/lib/blog-posts"
import { SchemaWebPage, SchemaFAQ, SchemaBreadcrumb } from "@/components/schema"

export const metadata = {
  title: "Tongqing No.6 (TQ6) Sunflower Seeds — Large Kernel",
  description:
    "Tongqing No.6 (TQ6) sunflower seeds from Inner Mongolia — a large-kernel variety, organically grown and non-GMO. Processed in Bayannur for bulk export.",
  alternates: { canonical: "/products/tq6-series" },
}

const relatedPosts = getPublishedBlogPosts().filter((p) => p.relatedSeries?.includes("tq6-series")).slice(0, 3)

const tq6Faqs = [
  {
    question: 'What does "Tongqing No.6" mean?',
    answer:
      "It's the name of the specific cultivar — a large-kernel sunflower variety grown in Inner Mongolia, distinct from the general 361/363 grade codes common across Chinese exporters.",
  },
  {
    question: "How does TQ6 differ from 361 and 363?",
    answer:
      "361 and 363 are general grade codes used industry-wide; TQ6 is a specific named cultivar with a larger kernel and distinct flavor. See the comparison table above for a side-by-side.",
  },
  {
    question: "Is TQ6 available in the same bulk volumes as 361/363?",
    answer: "Share your target volume and timeline in your quote request and we'll confirm what we can supply for this series.",
  },
  {
    question: "Is TQ6 certified organic?",
    answer:
      "Confirm current certification status and documentation with our team when you request a quote — we'll provide what's available for your specific order.",
  },
  {
    question: "Will kernel size and grade stay consistent across harvest seasons?",
    answer:
      "Every batch — regardless of harvest season — passes through the same 16-stage inspection and grading line, including size grading and color sorting, before it's approved for packing. If you need a specific size band held consistent across repeat orders, tell us in your quote request.",
  },
  {
    question: "What export documentation do you provide?",
    answer:
      "Sunflower seeds are classified under HS code 1206. Confirm the exact documentation you need — phytosanitary certificate, certificate of origin, commercial invoice — for your destination country when you submit your quote request, and we'll prepare accordingly.",
  },
]

export default function SeriesTQ6Page() {
  return (
    <>
      <SchemaWebPage
        name="Tongqing No.6 (TQ6) Sunflower Seeds"
        description="Tongqing No.6 (TQ6) sunflower seeds from Inner Mongolia — a large-kernel variety, organically grown and non-GMO."
        url="/products/tq6-series"
      />
      <SchemaFAQ items={tq6Faqs.map((f) => ({ q: f.question, a: f.answer }))} />
      <SchemaBreadcrumb
        crumbs={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: "Tongqing No.6 (TQ6) Series", url: "/products/tq6-series" },
        ]}
      />
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/tq6-seeds-closeup.jpg"
          alt="Tongqing No.6 (TQ6) large-kernel sunflower seeds, close-up"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tongqing No.6 (TQ6) Series</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            A large-kernel cultivar sourced from Inner Mongolia's sunflower belt.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
                TQ6 Series
              </div>
              <h2 className="text-4xl font-bold mb-6">How Is TQ6 Series Sourced and Processed?</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Our Tongqing No.6 sunflower seeds are sourced from Inner Mongolia and combine rich flavor with a
                strong nutritional profile, suited for dietary and snacking applications alike.
              </p>
              <p className="text-gray-700 mb-8">
                Organically grown, non-GMO, and free of pesticides or artificial additives — processed through
                our full{" "}
                <Link href="/about#capabilities" className="underline decoration-dotted hover:text-amber-600">
                  16-stage inspection line
                </Link>{" "}
                before packing.
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
                src="/images/process-06-color-sorting.webp"
                alt="Color sorting equipment on the sunflower seed processing line"
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
              Why TQ6
            </div>
            <h2 className="text-4xl font-bold mb-6">What Makes TQ6 a Distinct, Large-Kernel Cultivar?</h2>
            <p className="text-gray-700 text-lg">
              Grown specifically in Inner Mongolia's sunflower-growing region.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wheat className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Regional Cultivar</h3>
              <p className="text-gray-700 mb-6">
                Tongqing No.6 is grown and processed in Inner Mongolia, offering a distinct kernel profile from
                our general-purpose series.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ChefHat className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Versatile Preparation</h3>
              <p className="text-gray-700 mb-6">
                Suited to raw or roasted snacking, salads, baked goods, smoothies, and yogurt or oatmeal
                mix-ins.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ShieldPlus className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nutrient-Dense</h3>
              <p className="text-gray-700 mb-6">
                A strong plant-based protein source with unsaturated fats, fiber, antioxidants, zinc, and
                magnesium.
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
            <h2 className="text-4xl font-bold mb-6">Why Choose TQ6 Series for a Differentiated Product Line?</h2>
            <p className="text-gray-700 text-lg">
              TQ6 is the series buyers reach for when they want something distinct from the standard 361/363
              grades.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Specialty Snack Brands</h3>
              <p className="text-gray-700 text-sm">
                Brands wanting a named, distinct cultivar story to differentiate their product from
                commodity-grade competitors.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Marketplace Comparison Shoppers</h3>
              <p className="text-gray-700 text-sm">
                Buyers comparing suppliers who specifically searched for Tongqing No.6 — this series is less
                commonly documented online than 361/363.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Large-Kernel Preference Buyers</h3>
              <p className="text-gray-700 text-sm">
                Buyers whose end product or market prefers a larger, more distinctive kernel appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Series Comparison */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">How Does TQ6 Series Compare to 361 and 363?</h2>
            <p className="text-gray-700">
              A quick reference against our{" "}
              <Link href="/products/361-series" className="underline decoration-dotted hover:text-amber-600">
                361 Series
              </Link>{" "}
              and{" "}
              <Link href="/products/363-series" className="underline decoration-dotted hover:text-amber-600">
                363 Series
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
              Size grading, moisture content, purity percentage, and packaging options vary by order — contact
              our team for a current specification sheet and pricing for the TQ6 Series.
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Organic, non-GMO, pesticide-free</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Sourced directly from Inner Mongolia growers</span>
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
            <h2 className="text-3xl font-bold mb-8 text-center">TQ6 Series FAQ</h2>
            <Accordion type="single" collapsible className="bg-white dark:bg-gray-900 rounded-2xl px-6 md:px-8">
              {tq6Faqs.map((faq, index) => (
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
              <h2 className="text-2xl font-bold mb-6 text-center">TQ6 Series in Our Blog</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How Do You Order TQ6 Series?</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Order TQ6 Sunflower Seeds?</h2>
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
