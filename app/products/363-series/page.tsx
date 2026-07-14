import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, HeartPulse, Salad, Snowflake } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SeriesComparisonTable } from "@/components/series-comparison-table"
import { getPublishedBlogPosts } from "@/lib/blog-posts"
import { SchemaWebPage, SchemaFAQ, SchemaBreadcrumb } from "@/components/schema"

export const metadata = {
  title: "363 Series Premium Raw Sunflower Seeds",
  description:
    "363 Series premium raw sunflower seeds for bulk buyers — organic, non-GMO, rich in protein and healthy fats. Processed in Bayannur, Inner Mongolia.",
  alternates: { canonical: "/products/363-series" },
}

const relatedPosts = getPublishedBlogPosts().filter((p) => p.relatedSeries?.includes("363-series")).slice(0, 3)

const series363Faqs = [
  {
    question: 'What makes 363 a "premium" grade?',
    answer:
      "It's organically grown, pesticide-free, and free of artificial additives, with a consistently rich flavor — verified through the same 16-stage inspection line as our other series, at a higher grading standard.",
  },
  {
    question: "Is 363 Series certified organic?",
    answer:
      "Confirm current certification status and documentation with our team when you request a quote — we'll provide what's available for your specific order.",
  },
  {
    question: "How should 363 Series be stored after arrival?",
    answer:
      "Keep in airtight containers in a cool, dry location; refrigeration or freezing extends shelf life further if you're holding stock long-term.",
  },
  {
    question: "Will grade and quality stay consistent across harvest seasons?",
    answer:
      "Every batch — regardless of harvest season — passes through the same 16-stage inspection and grading line, including size grading and color sorting, before it's approved for packing. If you need a specific grade held consistent across repeat orders, tell us in your quote request.",
  },
  {
    question: "What export documentation do you provide?",
    answer:
      "Sunflower seeds are classified under HS code 1206. Confirm the exact documentation you need — phytosanitary certificate, certificate of origin, commercial invoice — for your destination country when you submit your quote request, and we'll prepare accordingly.",
  },
]

export default function Series363Page() {
  return (
    <>
      <SchemaWebPage
        name="363 Series Premium Raw Sunflower Seeds"
        description="363 Series premium raw sunflower seeds for bulk buyers — organic, non-GMO, rich in protein and healthy fats."
        url="/products/363-series"
      />
      <SchemaFAQ items={series363Faqs.map((f) => ({ q: f.question, a: f.answer }))} />
      <SchemaBreadcrumb
        crumbs={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: "363 Series", url: "/products/363-series" },
        ]}
      />
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/363.jpg"
          alt="363 Series premium raw sunflower seeds"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">363 Series Premium Raw</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Organic, non-GMO sunflower seeds with rich flavor and superior quality.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
                363 Series
              </div>
              <h2 className="text-4xl font-bold mb-6">What Makes 363 Series' Flavor and Quality Superior?</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Discover the rich flavor and superior quality of our 363 Series sunflower seeds. Organically
                grown and meticulously processed, these seeds are perfect for snacking, cooking, and baking.
              </p>
              <p className="text-gray-700 mb-8">
                Non-GMO, pesticide-free, and free of artificial additives — packed with protein, healthy fats,
                and minerals for buyers who need a premium-grade kernel, verified through our{" "}
                <Link href="/about#capabilities" className="underline decoration-dotted hover:text-amber-600">
                  16-stage inspection line
                </Link>
                .
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
                src="/images/packaging-worker.jpg"
                alt="363 Series premium raw sunflower seeds being packed for retail and branded orders"
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
              Nutritional Highlights
            </div>
            <h2 className="text-4xl font-bold mb-6">What Is 363 Series' Nutritional Profile?</h2>
            <p className="text-gray-700 text-lg">
              High in antioxidants, plant-based protein, and unsaturated fats.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <HeartPulse className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Heart-Healthy Fats</h3>
              <p className="text-gray-700 mb-6">
                Rich in unsaturated fats, dietary fiber, magnesium, and zinc — plus vitamin E and selenium
                antioxidants.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Salad className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Kitchen-Ready</h3>
              <p className="text-gray-700 mb-6">
                Raw or roasted for snacking, salad toppings, baking applications, and smoothie or oatmeal
                mix-ins.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Snowflake className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Storage Guidance</h3>
              <p className="text-gray-700 mb-6">
                Best kept in airtight containers in cool, dry conditions; refrigerate or freeze for extended
                shelf life.
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
            <h2 className="text-4xl font-bold mb-6">Why Choose 363 Series for Premium Positioning?</h2>
            <p className="text-gray-700 text-lg">
              363 Series is our go-to grade for buyers whose end product depends on visible quality and a
              premium story.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Branded Snack Manufacturers</h3>
              <p className="text-gray-700 text-sm">
                Brands building a premium or health-focused product line who need a kernel that looks and
                tastes the part.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Health-Focused Retail Lines</h3>
              <p className="text-gray-700 text-sm">
                Retailers positioning organic, non-GMO snacks where nutritional profile is part of the sales
                pitch.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Confectionery & Bakery Buyers</h3>
              <p className="text-gray-700 text-sm">
                Buyers incorporating seeds into baked goods or confections where flavor consistency matters
                most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Series Comparison */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">How Does 363 Series Compare to 361 and TQ6?</h2>
            <p className="text-gray-700">A quick reference against our other two series.</p>
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
              our team for a current specification sheet and pricing for the 363 Series.
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Organic, non-GMO, pesticide-free</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Premium raw grade, no artificial additives</span>
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
            <h2 className="text-3xl font-bold mb-8 text-center">363 Series FAQ</h2>
            <Accordion type="single" collapsible className="bg-white dark:bg-gray-900 rounded-2xl px-6 md:px-8">
              {series363Faqs.map((faq, index) => (
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
              <h2 className="text-2xl font-bold mb-6 text-center">363 Series in Our Blog</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How Do You Order 363 Series?</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Order 363 Series Sunflower Seeds?</h2>
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
