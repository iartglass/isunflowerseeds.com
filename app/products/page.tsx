import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SeriesComparisonTable } from "@/components/series-comparison-table"
import { SchemaWebPage, SchemaBreadcrumb, SchemaFAQ, SchemaItemList } from "@/components/schema"

export const metadata = {
  title: "Wholesale Sunflower Seed Products — 361, 363 & TQ6",
  description:
    "Wholesale sunflower seed series for bulk buyers — 361, 363, and Tongqing No.6 (TQ6). Organic, non-GMO, confectionery-grade, processed in Bayannur, Inner Mongolia.",
  alternates: { canonical: "/products" },
}

export default function ProductsPage() {
  return (
    <>
      <SchemaWebPage
        name="Wholesale Sunflower Seed Products"
        description="Wholesale sunflower seed series for bulk buyers — 361, 363, and Tongqing No.6 (TQ6)."
        url="/products"
      />
      <SchemaBreadcrumb crumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }]} />
      <SchemaFAQ items={productsFaqs.map((f) => ({ q: f.question, a: f.answer }))} />
      <SchemaItemList
        name="Wholesale Sunflower Seed Products"
        description="361, 363, and Tongqing No.6 (TQ6) sunflower seed series available for bulk export."
        url="/products"
        items={products.map((p, index) => ({ name: p.title, url: p.link, position: index + 1 }))}
      />
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/product-seeds-closeup.jpg"
          alt="Premium sunflower seeds from XingYi Trading"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Our Sunflower Seeds
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl sm:max-w-2xl">
            Export-grade sunflower seed series, organically grown and processed in Bayannur, Inner Mongolia.
          </p>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-3 md:mb-4">
              What We Offer
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">
              What Sunflower Seed Series Does XingYi Offer?
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Each series passes through the same{" "}
              <Link href="/about#capabilities" className="underline decoration-dotted hover:text-amber-600">
                16-stage inspection and processing line
              </Link>{" "}
              before it's approved for packing and export.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{product.title}</h3>
                  <p className="text-gray-700 mb-5 md:mb-6 text-sm sm:text-base">{product.description}</p>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black w-full">
                    <Link href={product.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/images/product-grading-caliper.jpg"
                alt="Sunflower seed grading and size measurement"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-3 md:mb-4">
                Why Choose Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">What Makes XingYi Different?</h2>
              <p className="text-base md:text-lg text-gray-700 mb-5 md:mb-8">
                When you source from XingYi Trading, you're sourcing from a supplier that inspects, grades, and
                packs to your specification.
              </p>
              <div className="space-y-4 md:space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg">{benefit.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Series Comparison */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-3 md:mb-4">
              Quick Reference
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">Which Series Is Right for You?</h2>
            <p className="text-base md:text-lg text-gray-700">
              A side-by-side look before you dive into the details on each series page.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <SeriesComparisonTable />
          </div>
        </div>
      </section>

      {/* Packaging & Shipping */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-3 md:mb-4">
                Packaging & Shipping
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">
                How Are Orders Packed and Shipped?
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-5 md:mb-6">
                All three series are packed after passing our full inspection line, in formats suited to bulk
                export or private-label repackaging.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Standard export bags (commonly 25kg or 50kg), with custom sizes available on request
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Private-label and custom-branded packaging for repackagers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Container-load shipments coordinated with your destination port and documentation needs
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/packaging-worker.jpg"
                alt="Packaging sunflower seeds for export"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ordering Process */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-3 md:mb-4">
              How It Works
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">What Happens From Quote to Shipment?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {orderSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
                <div className="bg-amber-500 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400 rounded-full text-sm font-medium mb-3 md:mb-4">
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">How Do You Choose Between 361, 363, and TQ6?</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-white dark:bg-gray-900 rounded-2xl px-6 md:px-8">
              {productsFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-left font-bold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Place an Order?</h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-10">
            Contact us for current pricing, sample requests, and full specification sheets for any series.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 md:px-8 w-full sm:w-auto"
            >
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

// Sample data
const products = [
  {
    title: "361 Series Sunflower Seeds",
    description:
      "Packed with nutrients and perfect for snacking, baking, or garnishing — a versatile, high-quality kernel.",
    image: "/images/361-1.jpg",
    link: "/products/361-series",
  },
  {
    title: "363 Series Premium Raw",
    description:
      "Organic, non-GMO sunflower seeds rich in protein, healthy fats, and minerals — perfect for snacking, cooking, and baking.",
    image: "/images/363-2.jpg",
    link: "/products/363-series",
  },
  {
    title: "Tongqing No.6 (TQ6) Series",
    description:
      "A large-kernel cultivar sourced from Inner Mongolia, offering a rich source of protein, healthy fats, and essential minerals.",
    image: "/images/product-seeds-closeup.jpg",
    link: "/products/tq6-series",
  },
]

const orderSteps = [
  {
    title: "Request a Quote",
    description: "Tell us your series, quantity, and destination via the contact form.",
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

const benefits = [
  {
    title: "16-Stage Quality Control",
    description: "Every batch runs through raw material inspection, color sorting, gravity separation, and X-ray detection.",
  },
  {
    title: "Direct From Bayannur",
    description: "Sourced from Inner Mongolia's sunflower-growing heartland — China's sunflower capital.",
  },
  {
    title: "Transparent Communication",
    description: "Regular updates and direct contact with our team throughout your order.",
  },
  {
    title: "Reliable Bulk Supply",
    description: "9 production lines and 300 tons daily output support consistent, on-time shipments.",
  },
  {
    title: "Flexible Packaging",
    description: "Packing configured to your order quantity and destination market requirements.",
  },
]

const productsFaqs = [
  {
    question: "Which series should I choose?",
    answer:
      "361 is our general-purpose, volume-friendly grade. 363 is a premium raw grade suited to branded or health-focused retail lines. Tongqing No.6 (TQ6) is a distinct large-kernel cultivar for specialty or differentiated snack lines. See the comparison table above for a quick side-by-side, or tell us your intended use and we'll recommend a series.",
  },
  {
    question: "Do all three series go through the same quality control?",
    answer:
      "Yes — every series passes through the same 16-stage inspection and grading line at our Bayannur facility before it's approved for packing, regardless of which series you order.",
  },
  {
    question: "Can I order a mix of series in one shipment?",
    answer:
      "Yes — tell us the quantity you need for each series and your destination in the quote form, and we'll confirm packaging and container details for a combined order.",
  },
  {
    question: "Do you offer private-label packaging on all series?",
    answer:
      "Yes — private-label and custom-branded packaging is available across all three series. Tell us your target bag size and branding requirements in your quote request.",
  },
]
