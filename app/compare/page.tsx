import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SchemaWebPage, SchemaBreadcrumb, SchemaFAQ } from "@/components/schema"

export const metadata = {
  title: "Buying Direct vs. a Trading Company or Marketplace",
  description:
    "An honest comparison of buying sunflower seeds direct from the factory versus sourcing through a trading company or B2B marketplace listing.",
  alternates: { canonical: "/compare" },
}

export default function ComparePage() {
  return (
    <>
      <SchemaWebPage
        name="Buying Direct vs. a Trading Company or Marketplace"
        description="An honest comparison of buying sunflower seeds direct from the factory versus sourcing through a trading company or B2B marketplace listing."
        url="/compare"
      />
      <SchemaBreadcrumb crumbs={[{ name: "Home", url: "/" }, { name: "Compare", url: "/compare" }]} />
      <SchemaFAQ items={compareFaqs.map((f) => ({ q: f.question, a: f.answer }))} />
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[320px] sm:h-[380px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/20210810160413i.jpg"
          alt="XingYi Trading fleet of trucks loaded and ready for shipment"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Buying Direct vs. a Trading Company or Marketplace
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Both are legitimate ways to source sunflower seeds. Here's an honest look at the trade-offs.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <TableHead className="font-bold text-gray-900 text-base py-4">What matters to you</TableHead>
                  <TableHead className="font-bold text-gray-900 text-base py-4">
                    Buying direct from XingYi Trading
                  </TableHead>
                  <TableHead className="font-bold text-gray-900 text-base py-4">
                    Through a trading company / marketplace listing
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index} className="align-top">
                    <TableCell className="font-semibold text-gray-900 py-5">{row.dimension}</TableCell>
                    <TableCell className="text-gray-700 py-5">{row.direct}</TableCell>
                    <TableCell className="text-gray-700 py-5">{row.marketplace}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="max-w-4xl mx-auto text-center text-sm text-gray-500 mt-6">
            This reflects how direct-factory sourcing and trading-company/marketplace sourcing typically
            work as arrangements — not a claim about any specific competitor's service.
          </p>
        </div>
      </section>

      {/* Which to choose */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Which Should You Choose?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="h-5 w-5 text-amber-600" />
                  <h3 className="font-bold text-lg">Buy direct if you want</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Factory pricing with no added markup, direct visibility into our{" "}
                  <Link href="/about#capabilities" className="underline decoration-dotted hover:text-amber-700">
                    16-stage QC process
                  </Link>
                  , and a direct line to the team that inspects and packs your order.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Minus className="h-5 w-5 text-gray-500" />
                  <h3 className="font-bold text-lg">A marketplace may suit you if</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  You want built-in payment protection while sourcing your first supplier, or you're
                  comparing several suppliers side by side on one platform before committing to any of
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Common Questions</h2>
            <Accordion type="single" collapsible className="bg-white dark:bg-gray-900 rounded-2xl px-6 md:px-8">
              {compareFaqs.map((faq, index) => (
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
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Want to Compare Us Directly?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Send us your specification and ask us the same questions you'd ask any other supplier — we're
            glad to answer them before you commit to anything.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
            <Link href="/contact#quote-form">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
    </>
  )
}

const rows = [
  {
    dimension: "Who you're dealing with",
    direct: "The factory itself, in Bayannur, Inner Mongolia — 16-stage QC line and our production team.",
    marketplace: "Usually a trading company or reseller. May or may not disclose the actual factory.",
  },
  {
    dimension: "Pricing",
    direct: "No markup between you and the production line.",
    marketplace: "Typically includes the intermediary's margin on top of factory pricing.",
  },
  {
    dimension: "Quality control visibility",
    direct: "Direct access to our facility photos, process detail, and team.",
    marketplace: "Depends on how much the intermediary discloses about their supplier.",
  },
  {
    dimension: "Communication speed",
    direct: "Direct with the team running inspection and packing.",
    marketplace: "Relayed through the intermediary, which can add delay.",
  },
  {
    dimension: "Private-label / custom packaging",
    direct: "Arranged directly with our production team.",
    marketplace: "Depends on what the intermediary can negotiate with their supplier.",
  },
  {
    dimension: "Buyer protection / escrow",
    direct: "Not built in — standard trade terms apply (deposit/balance, LC, etc., agreed directly with us).",
    marketplace: "Marketplaces like Alibaba often include built-in payment protection (e.g. Trade Assurance).",
  },
  {
    dimension: "Best suited for",
    direct: "Buyers who want factory pricing and hands-on QC visibility.",
    marketplace: "Buyers who want platform-backed payment protection or are comparing several suppliers at once.",
  },
]

const compareFaqs = [
  {
    question: "Is there a minimum order quantity to buy direct?",
    answer:
      "Minimum order quantities depend on the series and packaging format. Send us your target volume and destination and we'll confirm what we can supply.",
  },
  {
    question: "What if I've never bought directly from a factory before?",
    answer:
      "You're not alone — many of our buyers are sourcing directly from China for the first time. See our \"From Quote to Shipment\" process on the Products page for exactly what to expect, and we're happy to walk you through each step before you commit to anything.",
  },
  {
    question: "Can I speak with your team before deciding?",
    answer:
      "Yes — our phone/WhatsApp and email are listed on every page. Ask us anything you'd ask a trading company or marketplace listing, and compare the answers yourself.",
  },
  {
    question: "Is this comparison biased against trading companies and marketplaces?",
    answer:
      "We built this page to explain how each sourcing method typically works, not to disparage any specific competitor or platform — both are legitimate ways to buy. The goal is simply to help you pick the option that fits your situation.",
  },
]
