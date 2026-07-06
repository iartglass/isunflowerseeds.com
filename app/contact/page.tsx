import Image from "next/image"
import { Mail, MapPin, Phone, MessageSquare, ClipboardCheck, Truck } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SchemaWebPage, SchemaBreadcrumb, SchemaFAQ } from "@/components/schema"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact Us — Request a Sunflower Seed Quote",
  description:
    "Request pricing, samples, and shipping details for bulk sunflower seed orders. Based in Bayannur, Inner Mongolia — exporting worldwide.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <SchemaWebPage
        name="Contact XingYi Trading"
        description="Request pricing, samples, and shipping details for bulk sunflower seed orders."
        url="/contact"
      />
      <SchemaBreadcrumb crumbs={[{ name: "Home", url: "/" }, { name: "Contact Us", url: "/contact" }]} />
      <SchemaFAQ items={faqs.map((f) => ({ q: f.question, a: f.answer }))} />
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/20210810160131p.jpg"
          alt="XingYi Trading facility, Bayannur, Inner Mongolia"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Get in touch with our team to request pricing, samples, or a shipping quote.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
                Get In Touch
              </div>
              <h2 className="text-4xl font-bold mb-6">How Can You Get in Touch With XingYi Trading?</h2>
              <p className="text-gray-700 mb-10 text-lg">
                Reach us directly using the details below, or send your order details through the form.
              </p>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-700">
                      Linhe First Farm, Linhe District, Bayannur City, Inner Mongolia, China
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone / WhatsApp</h3>
                    <a href="https://wa.me/8618653369950" className="text-gray-700 hover:text-amber-600">
                      +86 186 5336 9950
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Address</h3>
                    <a href="mailto:james@isunflowerseeds.com" className="text-gray-700 hover:text-amber-600">
                      james@isunflowerseeds.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="quote-form" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Request a Quote</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Tell us about your order and we'll follow up with pricing and specifications.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
              What Happens After You Submit Your Quote Request?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              New to sourcing from China? Here's exactly what to expect next.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">We Review Your Inquiry</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Our team reads your series, quantity, and destination details directly — no automated
                reply loop.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">We Follow Up With Pricing</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                We respond with current pricing, specification sheets, and sample arrangements for your
                destination.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">We Confirm & Ship</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Once terms are agreed, your order is inspected, packed, and shipped to your destination
                port.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="h-[400px] rounded-2xl overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2537.9386013303397!2d107.42952755530932!3d40.84696760748314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-CN!2sus!4v1783344195887!5m2!1szh-CN!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="XingYi Trading facility location, Linhe District, Bayannur City, Inner Mongolia"
              />
              <MapPin
                className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-full text-red-600 drop-shadow-lg pointer-events-none"
                fill="currentColor"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-700 text-lg">
              Real questions buyers ask us before placing an order — from first-time importers to
              wholesale distributors.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 md:px-8">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-left text-lg font-bold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

// Sample data — grouped by buyer type; see guazi/seo-plan/BUYER-PERSONAS.md for the research behind each question
const faqs = [
  {
    question: "Which sunflower seed series do you offer?",
    answer:
      "We currently supply three series: 361, 363 (Premium Raw), and Tongqing No.6 (TQ6). Each is processed through the same 16-stage inspection and grading line before packing.",
  },
  {
    question: "Where do you ship?",
    answer:
      "We regularly export to buyers across the Middle East, North America, South America, and Southeast Asia. Contact us to confirm shipping options for your destination.",
  },
  {
    question: "What is your minimum order quantity?",
    answer:
      "Minimum order quantities depend on the series and packaging format. Send us your target volume and destination and we'll confirm what we can supply.",
  },
  {
    question: "Can I request a sample before ordering?",
    answer:
      "Yes — contact our team with your shipping details and we can arrange samples so you can verify quality before placing a bulk order.",
  },
  {
    question: "What happens if the bulk shipment doesn't match the sample?",
    answer:
      "Tell us your sample-matching requirements before you place the order so they can be built into the agreement — raise it in your quote request and our team will confirm how we handle grading consistency for your order before you commit to a bulk volume.",
  },
  {
    question: "Will the grade and size stay consistent across harvest seasons?",
    answer:
      "Every batch — regardless of harvest season — passes through the same 16-stage inspection and grading line, including size grading and color sorting, before it's approved for packing. If you need a specific size band held consistent across repeat orders, tell us in your quote request.",
  },
  {
    question: "Can you handle private-label or custom packaging?",
    answer:
      "Packaging is configured to your order quantity and destination market requirements. Tell us your target bag size, branding, or private-label needs in the quote form and we'll confirm what's possible for your order.",
  },
  {
    question: "What export documentation do you provide?",
    answer:
      "Sunflower seeds are classified under HS code 1206 (with more specific subheadings depending on processing). Confirm the exact documentation you need — phytosanitary certificate, certificate of origin, commercial invoice — for your destination country when you submit your quote request, and we'll prepare accordingly.",
  },
  {
    question: "Can you fulfill large or time-sensitive orders?",
    answer:
      "Our facility runs 9 production lines with up to 300 tons of daily output and 70,000+ tons of annual capacity. Share your target volume and timeline in your quote request and we'll confirm realistic lead times for your order.",
  },
  {
    question: "How do I know XingYi Trading is a legitimate company?",
    answer:
      "We've operated from Linhe First Farm, Bayannur City, Inner Mongolia since 2014. Every photo on this site — our facility, production lines, and quality inspection — is real, not stock photography, and our address, phone/WhatsApp, and email are listed on every page. We're glad to answer questions directly before you commit to anything.",
  },
  {
    question: "What quality control do you apply to every batch?",
    answer:
      "Every batch passes through raw material inspection, multi-stage screening, stone removal, color sorting, gravity separation, and X-ray inspection before packing. See our Capabilities section for the full process.",
  },
  {
    question: "What makes XingYi different from other 361/363 sellers?",
    answer:
      "Many suppliers sell the same grade codes. What we can speak to directly is our own facility's 16-stage inspection line, 9 production lines' worth of capacity, and a team that personally checks kernel size, color, and moisture at every stage — not just a grading certificate on paper. Ask us anything you'd ask another supplier and compare the answers.",
  },
  {
    question: "How do I get pricing and a specification sheet?",
    answer:
      "Fill out the quote form above with your product series, destination, and order quantity, and our team will follow up with current pricing and detailed specifications.",
  },
]
