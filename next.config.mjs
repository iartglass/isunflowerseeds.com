/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Temporarily disabled: on-demand sharp resizing under concurrent load
    // was exceeding the host's memory limit and crash-looping the Node
    // process (visible as repeated "Ready on 0.0.0.0:3000" restarts in
    // runtime logs), which caused images to intermittently fail to load.
    // Re-enable once hosting has more memory headroom or images are
    // pre-optimized at build time instead of resized on request.
    unoptimized: true,
  },
  // 301 redirects from the old isunflowerseeds.com WordPress/WooCommerce site.
  // Source of truth: ../seo-plan/URL-REDIRECT-MAP.md — update that doc first,
  // then mirror changes here. The 4 "future" targets currently pointing at
  // /contact should be retargeted once their Q3 calendar posts publish
  // (see BLOG-CALENDAR-Q3-2026.md).
  async redirects() {
    return [
      // 0. Canonical host — force www → non-www (301) across every path.
      // The www subdomain resolves to this same app and returned 200 directly;
      // a server-side 301 (not just the canonical tag) consolidates signals and
      // eliminates the duplicate-host risk. Placed first so it wins for any path.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.isunflowerseeds.com" }],
        destination: "https://isunflowerseeds.com/:path*",
        permanent: true,
      },

      // 1. Structural pages
      // Note: /about and /contact need no entry — old and new URLs are identical paths
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/sunflower-seed", destination: "/products", permanent: true },
      { source: "/thanks", destination: "/contact", permanent: true },
      { source: "/pumpkin-seed", destination: "/", permanent: true },
      { source: "/pumpkin-seeds-login-page", destination: "/", permanent: true },
      { source: "/sunflower-seeds-login-page", destination: "/", permanent: true },

      // 2. Category pages
      { source: "/sunflower-seeds", destination: "/products", permanent: true },
      { source: "/pumpkin-seeds", destination: "/", permanent: true },

      // 3. WooCommerce product pages
      { source: "/product/361-premium-sunflower-seeds", destination: "/products/361-series", permanent: true },
      { source: "/product/363-premium-raw-sunflower-seeds", destination: "/products/363-series", permanent: true },
      { source: "/product/tongqing-no-6-sunflower-seeds", destination: "/products/tq6-series", permanent: true },
      { source: "/product/snow-white-pumpkin-seeds", destination: "/", permanent: true },
      { source: "/product/armour-of-beauty-pumpkin-seeds", destination: "/", permanent: true },
      { source: "/product/premium-pumpkin-seeds-large-medium-small", destination: "/", permanent: true },

      // 4a. Recipes & Cooking -> /blog/sunflower-seeds-recipes or /blog/sunflower-seed-pesto-and-seed-butter
      { source: "/sunflower-seeds-recipes", destination: "/blog/sunflower-seeds-recipes", permanent: true },
      { source: "/recipes-using-sunflower-seeds-361", destination: "/blog/sunflower-seeds-recipes", permanent: true },
      { source: "/sunflower-seeds-in-cooking", destination: "/blog/sunflower-seeds-recipes", permanent: true },
      { source: "/sunflower-seeds-in-cooking-seed-salads", destination: "/blog/sunflower-seeds-recipes", permanent: true },
      { source: "/sunflower-seeds-in-cooking-seed-bread", destination: "/blog/sunflower-seeds-recipes", permanent: true },
      { source: "/sunflower-seeds-in-cooking-roasted-seeds", destination: "/blog/sunflower-seeds-recipes", permanent: true },
      { source: "/sunflower-seeds-in-baking", destination: "/blog/sunflower-seeds-recipes", permanent: true },
      { source: "/sunflower-seeds-in-smoothies", destination: "/blog/sunflower-seeds-recipes", permanent: true },
      { source: "/sunflower-seeds-in-salads", destination: "/blog/sunflower-seeds-recipes", permanent: true },
      { source: "/sunflower-seeds-in-vegan-diet", destination: "/blog/sunflower-seeds-recipes", permanent: true },
      { source: "/roasting-sunflower-seeds", destination: "/blog/sunflower-seeds-recipes", permanent: true },
      { source: "/sunflower-seeds-in-cooking-seed-pesto", destination: "/blog/sunflower-seed-pesto-and-seed-butter", permanent: true },
      { source: "/sunflower-seeds-in-cooking-seed-butter", destination: "/blog/sunflower-seed-pesto-and-seed-butter", permanent: true },
      { source: "/sunflower-seed-oil-cooking", destination: "/blog/sunflower-seeds-recipes", permanent: true },

      // 4b. Beauty / Cosmetic / Hair -> /blog/sunflower-seeds-cosmetic-industry
      { source: "/sunflower-seeds-cosmetic-industry", destination: "/blog/sunflower-seeds-cosmetic-industry", permanent: true },
      { source: "/sunflower-seed-oil-hair-care", destination: "/blog/sunflower-seeds-cosmetic-industry", permanent: true },
      { source: "/sunflower-seed-oil-skincare", destination: "/blog/sunflower-seeds-cosmetic-industry", permanent: true },
      { source: "/sunflower-seeds-for-skin", destination: "/blog/sunflower-seeds-cosmetic-industry", permanent: true },
      { source: "/sunflower-seeds-for-hair", destination: "/blog/sunflower-seeds-cosmetic-industry", permanent: true },
      { source: "/sunflower-seed-oil", destination: "/blog/sunflower-seeds-cosmetic-industry", permanent: true },
      { source: "/sunflower-seed-oil-health-benefits", destination: "/blog/sunflower-seeds-cosmetic-industry", permanent: true },
      { source: "/sunflower-seed-oil-vs-olive-oil", destination: "/blog/sunflower-seeds-cosmetic-industry", permanent: true },
      { source: "/sunflower-seeds-traditional-medicine", destination: "/blog/sunflower-seeds-cosmetic-industry", permanent: true },

      // 4c. Culture -> /blog/sunflower-seed-festivals
      { source: "/sunflower-seed-festivals", destination: "/blog/sunflower-seed-festivals", permanent: true },

      // 4d. Harvesting & Storage
      { source: "/harvesting-sunflower-seeds-drying", destination: "/blog/harvesting-sunflower-seeds-drying", permanent: true },
      { source: "/storing-sunflower-seeds-preventing-mold", destination: "/blog/harvesting-sunflower-seeds-drying", permanent: true },
      { source: "/storing-sunflower-seeds-ideal-conditions", destination: "/blog/harvesting-sunflower-seeds-drying", permanent: true },
      { source: "/storing-sunflower-seeds", destination: "/blog/harvesting-sunflower-seeds-drying", permanent: true },
      { source: "/harvesting-sunflower-seeds-methods", destination: "/blog/harvesting-sunflower-seeds-methods", permanent: true },
      { source: "/harvesting-sunflower-seeds-timing", destination: "/blog/harvesting-sunflower-seeds-methods", permanent: true },
      { source: "/harvesting-sunflower-seeds-post-processing", destination: "/blog/harvesting-sunflower-seeds-methods", permanent: true },
      { source: "/harvesting-sunflower-seeds-tools", destination: "/blog/harvesting-sunflower-seeds-methods", permanent: true },
      { source: "/harvesting-sunflower-seeds", destination: "/blog/harvesting-sunflower-seeds-methods", permanent: true },
      { source: "/sunflower-seed-harvesting-equipment", destination: "/blog/harvesting-sunflower-seeds-methods", permanent: true },
      { source: "/sunflower-seed-processing", destination: "/about", permanent: true },

      // 4e. Nutrition & Health -> /blog/sunflower-seed-nutrition-benefits
      { source: "/health-benefits-of-sunflower-seeds", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/nutrition-of-sunflower-seeds", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/health-benefits-of-sunflower-seeds-immune-system", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/health-benefits-of-sunflower-seeds-weight-loss", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/sunflower-seeds-and-weight-loss", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/nutrition-of-sunflower-seeds-minerals", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/nutrition-of-sunflower-seeds-vitamins", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/nutrition-of-sunflower-seeds-healthy-fats", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/nutrition-of-sunflower-seeds-protein", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/nutrition-of-sunflower-seeds-caloric-content", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/health-benefits-of-sunflower-seeds-anti-inflammatory", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/health-benefits-of-sunflower-seeds-heart-health", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/health-benefits-of-sunflower-seeds-diabetes", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/health-benefits-china-sunflower-seeds", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/sunflower-seeds-mental-health", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },
      { source: "/sunflower-seeds-allergies", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },

      // 4f. Product Series / Characteristics -> /products/[series]
      { source: "/characteristics-sunflower-seeds-361", destination: "/products/361-series", permanent: true },
      { source: "/where-buy-sunflower-seeds-361", destination: "/products/361-series", permanent: true },
      { source: "/nutritional-benefits-sunflower-seeds-361", destination: "/products/361-series", permanent: true },
      { source: "/characteristics-sunflower-seeds-363", destination: "/products/363-series", permanent: true },
      { source: "/characteristics-sunflower-seeds-363-2", destination: "/products/363-series", permanent: true },
      { source: "/sunflower-seed-products", destination: "/products", permanent: true },
      { source: "/sunflower-seed-varieties", destination: "/products", permanent: true },
      { source: "/varieties-china-sunflower-seeds", destination: "/products", permanent: true },
      { source: "/growing-sunflower-seeds-361", destination: "/products/361-series", permanent: true },
      { source: "/growing-sunflower-seeds-363", destination: "/products/363-series", permanent: true },

      // 4g. Off-scope: home gardening / ornamental varieties
      { source: "/growing-sunflowers-from-seeds", destination: "/", permanent: true },
      { source: "/growing-sunflowers-from-seeds-fertilizing", destination: "/", permanent: true },
      { source: "/growing-sunflowers-from-seeds-sunlight-needs", destination: "/", permanent: true },
      { source: "/growing-sunflowers-from-seeds-watering-requirements", destination: "/", permanent: true },
      { source: "/growing-sunflowers-from-seeds-planting-techniques", destination: "/", permanent: true },
      { source: "/growing-sunflowers-from-seeds-soil-preparation", destination: "/", permanent: true },
      { source: "/sunflower-seed-varieties-giant", destination: "/", permanent: true },
      { source: "/sunflower-seed-varieties-dwarf", destination: "/", permanent: true },
      { source: "/sunflower-seed-varieties-organic", destination: "/", permanent: true },
      { source: "/sunflower-seed-varieties-hybrid", destination: "/", permanent: true },
      { source: "/sunflower-seed-varieties-heirloom", destination: "/", permanent: true },
      { source: "/organic-sunflower-seeds", destination: "/", permanent: true },
      { source: "/sunflower-seed-farming-techniques", destination: "/", permanent: true },

      // 4h. Off-scope: pets / birds / animal feed
      { source: "/sunflower-seeds-for-pets", destination: "/", permanent: true },
      { source: "/sunflower-seeds-for-birds", destination: "/", permanent: true },
      { source: "/sunflower-seeds-animal-feed", destination: "/", permanent: true },

      // 4i. Off-scope: pumpkin seeds (product line dropped)
      { source: "/pumpkin-seeds-dietary-plans", destination: "/", permanent: true },
      { source: "/pumpkin-seeds-allergies-2", destination: "/", permanent: true },
      { source: "/pumpkin-seeds-allergies", destination: "/", permanent: true },
      { source: "/pumpkin-seeds-pets", destination: "/", permanent: true },
      { source: "/pumpkin-seed-oil", destination: "/", permanent: true },
      { source: "/pumpkin-seed-recipes", destination: "/", permanent: true },
      { source: "/health-benefits-pumpkin-seeds", destination: "/", permanent: true },
      { source: "/history-pumpkin-seeds", destination: "/", permanent: true },
      { source: "/pumpkin-seeds-gardening", destination: "/", permanent: true },
      { source: "/how-to-roast-pumpkin-seeds", destination: "/", permanent: true },
      { source: "/pumpkin-seed-nutrition", destination: "/", permanent: true },
      { source: "/best-pumpkin-seed-brands", destination: "/", permanent: true },
      { source: "/sunflower-seeds-vs-pumpkin-seeds", destination: "/blog/sunflower-seed-nutrition-benefits", permanent: true },

      // 4j. Supplier / Trade / Import-Export
      { source: "/comparing-sunflower-seed-suppliers", destination: "/compare", permanent: true },
      { source: "/international-sunflower-seed-suppliers", destination: "/compare", permanent: true },
      { source: "/sunflower-seed-supplier-reviews", destination: "/compare", permanent: true },
      { source: "/top-chinese-sunflower-seed-brands", destination: "/compare", permanent: true },
      { source: "/how-china-produces-sunflower-seeds", destination: "/about", permanent: true },
      { source: "/sunflower-seed-history", destination: "/about", permanent: true },
      { source: "/sunflower-seed-research", destination: "/about", permanent: true },
      { source: "/sunflower-seeds-sustainability", destination: "/about", permanent: true },
      { source: "/sunflower-seeds-environmental-impact", destination: "/about", permanent: true },
      { source: "/importing-china-sunflower-seeds", destination: "/contact", permanent: true },
      { source: "/sunflower-seed-export-import", destination: "/contact", permanent: true },
      { source: "/sunflower-seed-packaging", destination: "/contact", permanent: true },
      { source: "/sunflower-seed-market-trends", destination: "/contact", permanent: true },
      { source: "/sunflower-seed-biotechnology", destination: "/", permanent: true },

      // 5. Blog pagination (see URL-REDIRECT-MAP.md §5)
      // WordPress generated these from the blog index, so they never appeared in
      // a sitemap and were missed by the original migration pass. Search Console
      // showed /blog/page/9 and /blog/page/11 still drawing impressions while
      // 404ing here. One wildcard covers every depth the old site exposed; the
      // new blog index is a single page, so they all resolve to /blog.
      // Safe against /blog/[slug]: post URLs are one segment, this needs two.
      { source: "/blog/page/:n", destination: "/blog", permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ]
  },
}

export default nextConfig
