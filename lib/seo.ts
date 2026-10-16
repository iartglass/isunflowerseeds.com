// Per-page Open Graph / Twitter metadata. Next.js does not derive these from
// `title` / `description`, so without them every page inherits the homepage's
// og:title and og:description from the root layout when shared.
const SITE_NAME = "XingYi Trading"
// Setting openGraph on a page replaces the root file-based image, so restate it.
const DEFAULT_IMAGE = { url: "/opengraph-image.jpg", width: 1600, height: 1067 }

export function pageSocial(title: string, description: string, path: string) {
  const full = `${title} | ${SITE_NAME}`
  return {
    openGraph: { type: "website" as const, siteName: SITE_NAME, title: full, description, url: path, images: [DEFAULT_IMAGE] },
    twitter: { card: "summary_large_image" as const, title: full, description, images: [DEFAULT_IMAGE.url] },
  }
}
