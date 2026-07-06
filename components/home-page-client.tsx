"use client"

import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle,
  ChevronRight,
  Eye,
  Sprout,
  ShieldCheck,
  Globe,
  Target,
  Calendar,
  Factory,
  Package,
  Layers,
} from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { HoverButton } from "@/components/ui/hover-button"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"
import { HoverCard } from "@/components/animations/hover-card"
import { CountUp } from "@/components/animations/count-up"
import { ScrollProgress } from "@/components/animations/scroll-progress"
import { getPublishedBlogPosts } from "@/lib/blog-posts"

const latestPosts = getPublishedBlogPosts().slice(0, 3)

const homeProducts = [
  {
    title: "361 Series Sunflower Seeds",
    description:
      "Packed with nutrients and perfect for snacking, baking, or garnishing — a versatile, high-quality kernel.",
    image: "/images/product-361-detail.jpg",
    link: "/products/361-series",
  },
  {
    title: "363 Series Premium Raw",
    description:
      "Organic, non-GMO sunflower seeds rich in protein, healthy fats, and minerals — perfect for snacking, cooking, and baking.",
    image: "/images/product-363-detail.jpg",
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

const homeProcessSteps = [
  {
    title: "Raw Material Inspection",
    description: "Comprehensive sampling and analysis on all incoming raw materials.",
    image: "/images/process-01-raw-material-inspection.jpg",
  },
  {
    title: "Stone Removal",
    description: "Elimination of stones, soil, metal, and glass.",
    image: "/images/process-04-stone-removal.jpg",
  },
  {
    title: "Color Sorting",
    description: "Optical separation of discolored and defective kernels.",
    image: "/images/process-06-color-sorting.jpg",
  },
  {
    title: "X-Ray Inspection",
    description: "Advanced X-ray detects and removes any remaining foreign objects.",
    image: "/images/process-11-xray-inspection.jpg",
  },
]

const homeOrderSteps = [
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

export default function HomePageClient() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />

      {/* Hero Section with Static Background Image */}
      <section className="relative w-full overflow-hidden h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/ai-sunflower-field-closeup-hero.jpg"
            alt="Close-up of a blooming sunflower field, the crop behind XingYi Trading's sunflower seeds"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Hero Content */}
        <div className="absolute inset-0 z-30 flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-amber-500/90 text-white rounded-full text-sm font-medium mb-4"
                >
                  Confectionery Sunflower Seeds, Exported Worldwide
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-md">
                  Sunflower Seeds Verified Through <span className="text-amber-400">16 Quality Checkpoints</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-10 max-w-xl mx-auto lg:mx-0 drop-shadow-md">
                  In-shell 361, 363, and Tongqing No.6 series — inspected, graded, and packed at our own
                  Bayannur facility, then shipped to buyers across the Middle East, North America, South
                  America, and Southeast Asia.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <AnimatedButton
                    asChild
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 sm:px-8 w-full sm:w-auto"
                    hoverEffect="lift"
                  >
                    <Link href="/products">
                      View Our Products
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                  <HoverButton
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/20 hover:text-white font-semibold px-6 sm:px-8 w-full sm:w-auto backdrop-blur-sm"
                    hoverEffect="glow"
                    rippleColor="rgba(255, 255, 255, 0.3)"
                  >
                    <Link href="/contact#quote-form">
                      Request a Quote
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </HoverButton>
                </div>
              </motion.div>

              {/* Product Shot — so visitors immediately see what we sell */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden lg:flex justify-center"
              >
                <div className="relative w-[340px] h-[340px] xl:w-[400px] xl:h-[400px]">
                  <div className="absolute inset-0 rounded-full ring-4 ring-white/30 shadow-2xl" />
                  <Image
                    src="/images/product-hero-circle.png"
                    alt="Close-up of XingYi Trading's confectionery sunflower seeds"
                    fill
                    className="object-contain rounded-full"
                    priority
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 px-5 py-2 rounded-full shadow-lg text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                    361 · 363 · Tongqing No.6
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                What Do the Numbers Behind Every Shipment Look Like?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Every figure below reflects our own operations at Bayannur — see the full process on our
                About page.
              </p>
            </div>
          </FadeIn>
          <StaggerIn direction="up" staggerDelay={0.08}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
              <HoverCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-5 text-center h-full">
                  <Calendar className="h-5 w-5 md:h-6 md:w-6 text-amber-600 dark:text-amber-400 mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    <CountUp end={2014} />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">Founded</p>
                </div>
              </HoverCard>
              <HoverCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-5 text-center h-full">
                  <Factory className="h-5 w-5 md:h-6 md:w-6 text-amber-600 dark:text-amber-400 mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    <CountUp end={9} />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">Production Lines</p>
                </div>
              </HoverCard>
              <HoverCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-5 text-center h-full">
                  <Package className="h-5 w-5 md:h-6 md:w-6 text-amber-600 dark:text-amber-400 mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    <CountUp end={300} suffix="t" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">Daily Output</p>
                </div>
              </HoverCard>
              <HoverCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-5 text-center h-full">
                  <Package className="h-5 w-5 md:h-6 md:w-6 text-amber-600 dark:text-amber-400 mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    <CountUp end={70} suffix="k+t" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">Annual Capacity</p>
                </div>
              </HoverCard>
              <HoverCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-5 text-center h-full">
                  <Layers className="h-5 w-5 md:h-6 md:w-6 text-amber-600 dark:text-amber-400 mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    <CountUp end={16} />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">QC Stages per Batch</p>
                </div>
              </HoverCard>
              <HoverCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-5 text-center h-full">
                  <Globe className="h-5 w-5 md:h-6 md:w-6 text-amber-600 dark:text-amber-400 mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    <CountUp end={4} />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">Export Regions</p>
                </div>
              </HoverCard>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400 rounded-full text-sm font-medium mb-3 md:mb-4">
                Our Products
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                What Sunflower Seed Series Does XingYi Offer?
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Each series passes through the same 16-stage inspection line before it's approved for export.
              </p>
            </div>
          </FadeIn>
          <StaggerIn direction="up" staggerDelay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {homeProducts.map((product) => (
                <HoverCard key={product.link}>
                  <Link
                    href={product.link}
                    className="group block bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{product.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{product.description}</p>
                      <span className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium text-sm">
                        Learn More
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </HoverCard>
              ))}
            </div>
            <div className="text-center mt-8 md:mt-10">
              <Link
                href="/products"
                className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:underline"
              >
                View All Products
                <ChevronRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400 rounded-full text-sm font-medium mb-3 md:mb-4">
                Our Purpose
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                What Is XingYi Trading's Mission and Vision?
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Built on quality, traceability, and trust.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-md">
                <div className="flex items-center mb-4 md:mb-6 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-amber-100 dark:bg-amber-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4"
                  >
                    <Target className="h-6 w-6 md:h-7 md:w-7 text-amber-600 dark:text-amber-400" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm sm:text-base text-center sm:text-left">
                  To deliver sunflower seeds that exceed buyer expectations. We're committed to:
                </p>
                <StaggerIn direction="up" staggerDelay={0.1}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Sourcing from Bayannur's sunflower-growing heartland
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      <Link href="/about#capabilities" className="underline decoration-dotted hover:text-amber-600">
                        16-stage inspection
                      </Link>{" "}
                      on every batch
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Transparent, traceable supply for every order
                    </p>
                  </div>
                </StaggerIn>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-md">
                <div className="flex items-center mb-4 md:mb-6 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-amber-100 dark:bg-amber-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4"
                  >
                    <Eye className="h-6 w-6 md:h-7 md:w-7 text-amber-600 dark:text-amber-400" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm sm:text-base text-center sm:text-left">
                  To be the most trusted sunflower seed exporter out of Inner Mongolia, recognized for:
                </p>
                <StaggerIn direction="up" staggerDelay={0.1}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      The standard for quality and grading consistency
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Sustainable cultivation across our growing region
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      A reliable bulk partner across every market we serve
                    </p>
                  </div>
                </StaggerIn>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <StaggerIn direction="up" staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <HoverCard>
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-amber-100 dark:bg-amber-900 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <ShieldCheck className="h-7 w-7 md:h-8 md:w-8 text-amber-600 dark:text-amber-400" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    Quality Guaranteed
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Every batch runs through raw material inspection, color sorting, and X-ray detection before
                    packing.
                  </p>
                </div>
              </HoverCard>
              <HoverCard>
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-amber-100 dark:bg-amber-900 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Sprout className="h-7 w-7 md:h-8 md:w-8 text-amber-600 dark:text-amber-400" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    Grown in Bayannur
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Sourced from Inner Mongolia's sunflower-growing heartland for plump, aromatic kernels.
                  </p>
                </div>
              </HoverCard>
              <HoverCard className="sm:col-span-2 md:col-span-1">
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-amber-100 dark:bg-amber-900 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Globe className="h-7 w-7 md:h-8 md:w-8 text-amber-600 dark:text-amber-400" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    Global Export
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Shipping in bulk to the Middle East, North America, South America, and Southeast Asia.
                  </p>
                </div>
              </HoverCard>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* Capabilities Preview */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400 rounded-full text-sm font-medium mb-3 md:mb-4">
                Our Capabilities
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                What Does XingYi's Quality Control Process Involve?
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                A look at four of the 16 stages every batch passes through before packing.
              </p>
            </div>
          </FadeIn>
          <StaggerIn direction="up" staggerDelay={0.1}>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {homeProcessSteps.map((step, index) => (
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
            <div className="text-center mt-8 md:mt-10">
              <Link
                href="/about#capabilities"
                className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:underline"
              >
                See the Full 16-Stage Process
                <ChevronRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* Compare Us Teaser */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-8 md:p-12 text-center">
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400 rounded-full text-sm font-medium mb-4">
                Sourcing Direct
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Should You Buy Direct or Through a Trading Company?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                Both are legitimate ways to source sunflower seeds. See an honest, side-by-side comparison of
                pricing, quality control visibility, and communication speed before you decide.
              </p>
              <Link
                href="/compare"
                className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:underline"
              >
                Compare Your Options
                <ChevronRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Latest from the Blog */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                From the Blog
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Recipes, harvesting guides, and nutrition facts for sunflower seeds.
              </p>
            </div>
          </FadeIn>
          <StaggerIn direction="up" staggerDelay={0.1}>
            <div className="grid sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-amber-600 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 md:mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:underline"
              >
                View All Articles
                <ChevronRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400 rounded-full text-sm font-medium mb-3 md:mb-4">
                How It Works
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                What Happens From Quote to Shipment?
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                New to sourcing from China? Here's exactly what to expect, start to finish.
              </p>
            </div>
          </FadeIn>
          <StaggerIn direction="up" staggerDelay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {homeOrderSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
                  <div className="bg-amber-500 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Source Premium Sunflower Seeds?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto mb-6 md:mb-10">
              Contact us for pricing, samples, and shipping details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <HoverButton
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 md:px-8 w-full sm:w-auto"
                hoverEffect="ripple"
              >
                <Link href="/contact#quote-form">
                  Request a Quote
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </HoverButton>
              <AnimatedButton
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white font-semibold px-6 md:px-8 w-full sm:w-auto"
                hoverEffect="pulse"
              >
                <Link href="/contact">
                  Contact Our Team
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
