import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
              <div className="relative h-9 w-[140px]">
                <Image src="/images/logo.png" alt="XingYi Trading" fill sizes="140px" className="object-contain object-left" />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Premium sunflower seeds from Bayannur, Inner Mongolia — China's sunflower capital. Cultivated,
              processed, and exported with rigorous quality control since 2014.
            </p>
          </div>

          {/* Products */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Our Products</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  All Sunflower Seeds
                </Link>
              </li>
              <li>
                <Link
                  href="/products/361-series"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  361 Series
                </Link>
              </li>
              <li>
                <Link
                  href="/products/363-series"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  363 Series
                </Link>
              </li>
              <li>
                <Link
                  href="/products/tq6-series"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Tongqing No.6 (TQ6) Series
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about#capabilities"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Our Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/compare"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Direct vs. Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#faq"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base text-left">
                  Linhe First Farm, Linhe District, Bayannur City, Inner Mongolia, China
                </span>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <a href="https://wa.me/8618653369950" className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors">
                  +86 186 5336 9950 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:james@isunflowerseeds.com" className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors">
                  james@isunflowerseeds.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Button
                asChild
                className="bg-amber-500 hover:bg-amber-600 text-black font-medium w-full transition-all duration-300"
              >
                <Link href="/contact#quote-form">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-6 text-center text-gray-400 text-sm max-w-6xl mx-auto">
          <p>&copy; {new Date().getFullYear()} XingYi Trading (Inner Mongolia XingYi Trading Co., Ltd). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
