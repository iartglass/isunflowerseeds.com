import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import ClientLayout from "./client-layout"

import "./globals.css"

const GA_MEASUREMENT_ID = "G-9XBEHKKL2R"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://isunflowerseeds.com"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "XingYi Trading | Wholesale Sunflower Seeds Supplier",
    template: "%s | XingYi Trading",
  },
  description:
    "XingYi Trading processes and exports wholesale sunflower seeds (361, 363, Tongqing No.6) from Bayannur, Inner Mongolia — 9 production lines, 16-stage quality control, shipping worldwide.",
  keywords: [
    "wholesale sunflower seeds",
    "sunflower seeds exporter",
    "bulk sunflower seeds",
    "sunflower seed supplier China",
    "Inner Mongolia sunflower seeds",
    "361 sunflower seeds",
    "363 sunflower seeds",
    "Tongqing No.6 sunflower seeds",
  ],
  openGraph: {
    type: "website",
    siteName: "XingYi Trading",
    title: "XingYi Trading | Wholesale Sunflower Seeds Supplier",
    description:
      "Wholesale sunflower seeds processed and exported from Bayannur, Inner Mongolia — 9 production lines, 16-stage quality control, shipping worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "XingYi Trading | Wholesale Sunflower Seeds Supplier",
    description: "Wholesale sunflower seeds processed and exported from Bayannur, Inner Mongolia.",
  },
  verification: {
    google: "aHeXH-iGgnP-eS4XUkYNLLZpzQTPt_8YfxBwdAQekKY",
    other: {
      "msvalidate.01": "69914C47CAF94B18226B523472B72B89",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <ClientLayout>{children}</ClientLayout>
    </>
  )
}
