# Deploying to Hostinger

This project uses a custom `server.js` instead of Next.js's built-in server, so the
Hostinger Node app panel must be configured manually:

- **Framework preset:** `Other` (not `Next.js` — that preset runs `next start` directly
  and bypasses `server.js` entirely)
- **Build command:** `npm run build`
- **Output directory:** `.next`
- **Entry file:** `server.js`

`server.js` binds to `process.env.PORT` on `0.0.0.0` and reports startup failures to
the console — don't hardcode a port or a LiteSpeed socket path, even if one appears in
the `next start` startup banner.

Set `NEXT_PUBLIC_SITE_URL` in the hosting panel's environment variables to the live
domain once one is chosen — it's used for `metadataBase`, Open Graph URLs, and
`sitemap.xml`/`robots.txt` generation, and currently falls back to
`https://isunflowerseeds.com`.
