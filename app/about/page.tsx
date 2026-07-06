import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Award,
  Globe,
  Target,
  Eye,
  ShieldCheck,
  Factory,
  Truck,
  MapPin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { SchemaWebPage, SchemaBreadcrumb } from "@/components/schema"

export const metadata = {
  title: "About Us — Sunflower Seed Exporter Since 2014",
  description:
    "Sunflower seed exporter based in Bayannur, Inner Mongolia since 2014 — 9 production lines, 300 tons daily, 16-stage quality control, exporting worldwide.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <SchemaWebPage
        name="About XingYi Trading"
        description="Sunflower seed exporter based in Bayannur, Inner Mongolia since 2014 — 9 production lines, 300 tons daily, 16-stage quality control."
        url="/about"
      />
      <SchemaBreadcrumb crumbs={[{ name: "Home", url: "/" }, { name: "About Us", url: "/about" }]} />
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/20210810160139o.jpg"
          alt="Inner Mongolia XingYi Trading Co., Ltd facility entrance sign, Linhe District, Bayannur"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About XingYi Trading</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Premium sunflower seeds, cultivated and processed in Bayannur, Inner Mongolia — China's sunflower
            capital — since 2014.
          </p>
        </div>
      </section>

      {/* Where We Ship */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
              Global Reach
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Where Does XingYi Trading Ship Sunflower Seeds?</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              From Bayannur, our seeds reach buyers across four regions worldwide.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {exportRegions.map((region, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl text-center shadow-sm"
              >
                <div className="bg-amber-100 dark:bg-amber-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{region.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
              Our Purpose
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">What Is XingYi Trading's Mission and Vision?</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              XingYi Trading provides premium sunflower seeds through sustainable cultivation and meticulous
              processing, from golden fields to the grains in your hands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 dark:bg-amber-900 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To deliver sunflower seeds that meet exacting export standards through careful sourcing, rigorous
                processing, and honest communication. We are committed to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Sourcing raw material directly from growers in Bayannur's sunflower belt
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Running every batch through inspection, grading, and contaminant removal before packing
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Building lasting relationships with importers through transparent, traceable supply
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 dark:bg-amber-900 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To be the most trusted sunflower seed supplier out of Inner Mongolia, recognized for:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Setting the standard for grading consistency and food safety in export-grade seeds
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Pioneering sustainable cultivation practices across our growing region
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Growing into the reliable long-term supply partner for importers on every continent we serve
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                How Did XingYi Trading Start and Grow?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                Founded in 2014 in the Linhe District of Bayannur City, Inner Mongolia — a region long known as
                China's sunflower capital.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our seeds now reach buyers across the Middle East, North America, South America, and Southeast
                Asia, backed by the production capacity and quality process detailed below.
              </p>
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/global-export-map.jpg"
                alt="XingYi Trading facility gate with global export markets"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-white dark:bg-gray-900 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
              Our Capabilities
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              What Does XingYi's Quality Control Process Involve?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Every batch of seeds passes through a comprehensive processing line before it's approved for
              packing and export.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {capabilityStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl text-center shadow-sm"
              >
                <div className="bg-amber-100 dark:bg-amber-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-40">
                  <Image src={step.image} alt={step.title} fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">{step.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-xs mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">What Values Drive XingYi Trading?</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Our core values guide everything we do, from how we treat growers to how we handle every shipment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We hold every batch to the same exacting grading and quality standards, without exception.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Integrity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We conduct our business with honesty, transparency, and traceable sourcing at all times.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Investment</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We continually upgrade our sorting and inspection equipment to keep pace with export requirements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Reliability</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We deliver on order volumes and timelines, so your supply chain never has to wait on us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Team Spotlight */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/images/quality-inspection-founder.jpg"
                alt="XingYi Trading team inspecting sunflower seeds on the processing line"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
                Our Team
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">What Does Hands-On Quality Control Look Like?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                Our team personally checks kernel size, color, and moisture at every stage — a sample sheet is
                only as good as the person reading it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
              Our Facility
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">What Does XingYi Trading's Facility Look Like?</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              A closer look at the facility behind every shipment — real photos, not stock imagery.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {facilityGallery.map((photo, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-56">
                  <Image src={photo.image} alt={photo.caption} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Contact us to discuss volumes, specifications, and shipping.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 font-semibold px-8"
            >
              <Link href="/products">
                View Our Products
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

// Capability stats
const capabilityStats = [
  { icon: Factory, value: "9", label: "Production Lines" },
  { icon: ShieldCheck, value: "300t", label: "Daily Output" },
  { icon: Award, value: "70,000t+", label: "Annual Capacity" },
  { icon: Globe, value: "4", label: "Export Regions" },
]

// 16-stage process, illustrated with real photos from the processing floor
const processSteps = [
  {
    title: "Raw Material Inspection",
    description: "Comprehensive sampling and analysis on all incoming raw materials.",
    image: "/images/process-01-raw-material-inspection.jpg",
  },
  {
    title: "Storage Silos",
    description: "Organized storage sorted to customer order standards.",
    image: "/images/process-02-storage-silos.jpg",
  },
  {
    title: "Primary Screening",
    description: "Removal of small and misshapen seeds.",
    image: "/images/process-03-primary-screening.jpg",
  },
  {
    title: "Stone Removal",
    description: "Elimination of stones, soil, metal, and glass.",
    image: "/images/process-04-stone-removal.jpg",
  },
  {
    title: "Hole Machine",
    description: "Removes animal excreta and short seeds.",
    image: "/images/process-05-hole-machine.jpg",
  },
  {
    title: "Color Sorting",
    description: "Optical separation of discolored and defective kernels.",
    image: "/images/process-06-color-sorting.jpg",
  },
  {
    title: "Gravity Separator",
    description: "Density-based removal of shriveled seeds.",
    image: "/images/process-07-gravity-separator.jpg",
  },
  {
    title: "X-Ray Inspection",
    description: "Advanced X-ray detects and removes any remaining foreign objects.",
    image: "/images/process-11-xray-inspection.jpg",
  },
]

const exportRegions = [
  {
    name: "Middle East",
    description: "Regular container-load shipments to importers and redistributors across the region.",
  },
  {
    name: "North America",
    description: "Serving snack brands and distributors sourcing direct from Bayannur.",
  },
  {
    name: "South America",
    description: "Bulk and private-label orders shipped to regional importers.",
  },
  {
    name: "Southeast Asia",
    description: "Consistent supply for wholesalers and repackagers in the region.",
  },
]

// Real photos from our facility — the gate, warehouse, and loading yard, not stock imagery
const facilityGallery = [
  {
    caption: "Our facility entrance in Linhe District, Bayannur — Inner Mongolia XingYi Trading Co., Ltd.",
    image: "/images/facility-gate.jpg",
  },
  {
    caption: "Packed sunflower seed bags stored in rows inside our warehouse.",
    image: "/images/warehouse-storage.jpg",
  },
  {
    caption: "A fleet of trucks loaded and ready for shipment from our loading yard.",
    image: "/images/20210810160413i.jpg",
  },
]
