// JSON-LD structured data components for SEO
// Usage: <SchemaOrganization />, <SchemaWebPage .../>, etc. — each renders a <script type="application/ld+json"> tag

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://isunflowerseeds.com"
const COMPANY_NAME = "XingYi Trading"

// ── Shared org reference used inside other schemas ─────────────────────────
const orgRef = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: COMPANY_NAME,
  url: BASE_URL,
}

// ── Organization (homepage / about) ───────────────────────────────────────
export function SchemaOrganization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: COMPANY_NAME,
    legalName: "Inner Mongolia XingYi Trading Co., Ltd",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/logo.png`,
      width: 340,
      height: 85,
    },
    image: `${BASE_URL}/images/facility-exterior-1.jpg`,
    description:
      "XingYi Trading is a sunflower seed exporter based in Bayannur, Inner Mongolia — China's sunflower capital. 9 production lines, 300 tons daily output, 16-stage quality control, exporting to buyers worldwide since 2014.",
    foundingDate: "2014",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Linhe First Farm",
      addressLocality: "Linhe District, Bayannur City",
      addressRegion: "Inner Mongolia",
      addressCountry: "CN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+86-18653369950",
        contactType: "sales",
        availableLanguage: ["English", "Chinese"],
        email: "james@isunflowerseeds.com",
        areaServed: "Worldwide",
      },
    ],
    sameAs: [],
    areaServed: "Worldwide",
    knowsAbout: [
      "Sunflower Seeds",
      "361 Series Sunflower Seeds",
      "363 Series Sunflower Seeds",
      "Tongqing No.6 (TQ6) Sunflower Seeds",
      "Confectionery Sunflower Seeds",
      "Sunflower Seed Export",
      "Food Grade Quality Control",
      "Bulk Agricultural Export",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sunflower Seed Product Range",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "361 Series Sunflower Seeds",
            url: `${BASE_URL}/products/361-series`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "363 Series Sunflower Seeds",
            url: `${BASE_URL}/products/363-series`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Tongqing No.6 (TQ6) Series Sunflower Seeds",
            url: `${BASE_URL}/products/tq6-series`,
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ── FAQPage (pages with FAQ sections) ─────────────────────────────────────
export function SchemaFAQ({ items }: { items: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ── BreadcrumbList ─────────────────────────────────────────────────────────
export function SchemaBreadcrumb({
  crumbs,
}: {
  crumbs: { name: string; url: string }[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${BASE_URL}${c.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ── BlogPosting ────────────────────────────────────────────────────────────
export function SchemaBlogPosting({
  title,
  excerpt,
  slug,
  coverImage,
  date,
  dateModified,
  author,
  tags,
}: {
  title: string
  excerpt: string
  slug: string
  coverImage: string
  date: string
  dateModified?: string
  author: string
  tags: string[]
}) {
  const url = `${BASE_URL}/blog/${slug}`
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    url,
    image: coverImage.startsWith("http") ? coverImage : `${BASE_URL}${coverImage}`,
    datePublished: date,
    dateModified: dateModified ?? date,
    author: {
      "@type": "Person",
      name: author,
      worksFor: orgRef,
    },
    publisher: orgRef,
    keywords: tags.join(", "),
    inLanguage: "en",
    isPartOf: {
      "@type": "Blog",
      "@id": `${BASE_URL}/blog`,
      name: "XingYi Trading Blog",
      publisher: orgRef,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ── WebPage (generic pages — about, contact, etc.) ─────────────────────────
export function SchemaWebPage({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${BASE_URL}${url}`,
    publisher: orgRef,
    inLanguage: "en",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ── WebSite (homepage — enables Sitelinks Searchbox signal) ───────────────
export function SchemaWebSite() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: COMPANY_NAME,
    url: BASE_URL,
    publisher: orgRef,
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ── ItemList (any page that lists multiple items — blog index, product catalog) ──
export function SchemaItemList({
  name = "Sunflower Seed Articles",
  description = "Recipes, harvesting guides, and nutrition facts from XingYi Trading.",
  url = "/blog",
  items,
}: {
  name?: string
  description?: string
  url?: string
  items: { name: string; url: string; position: number }[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    url: `${BASE_URL}${url}`,
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      url: `${BASE_URL}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
