// One-time build-time image compression. Next.js image optimization
// (`images.unoptimized`) is disabled because on-demand sharp resizing was
// crashing the Hostinger host under load — see next.config.mjs. Since the
// browser now gets these files exactly as-is regardless of viewport, they
// need to be pre-sized and compressed here instead of at request time.
const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

const IMAGES_DIR = path.join(__dirname, "..", "public", "images")

// Images used as full-width hero/background banners — keep a larger max
// dimension since they're displayed up to the full viewport width.
const HERO_FILES = new Set([
  "ai-sunflower-field-closeup-hero.jpg",
  "20210810160139o.jpg",
  "20210810160131p.jpg",
  "product-seeds-closeup.jpg",
  "361-1.jpg",
  "363.jpg",
  "process-06-color-sorting.jpg",
  "warehouse-storage.jpg",
  "20210810160413i.jpg",
])

const SKIP_FILES = new Set(["logo.png", "icon.png", "opengraph-image.jpg"])

const HERO_MAX_WIDTH = 2000
const DEFAULT_MAX_WIDTH = 1200
const JPEG_QUALITY = 78

async function run() {
  const files = fs.readdirSync(IMAGES_DIR).filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
  let totalBefore = 0
  let totalAfter = 0

  for (const file of files) {
    if (SKIP_FILES.has(file)) continue
    const filePath = path.join(IMAGES_DIR, file)
    const before = fs.statSync(filePath).size
    const isPng = /\.png$/i.test(file)
    const maxWidth = HERO_FILES.has(file) ? HERO_MAX_WIDTH : DEFAULT_MAX_WIDTH

    const image = sharp(filePath)
    const metadata = await image.metadata()
    const resized = metadata.width && metadata.width > maxWidth ? image.resize({ width: maxWidth }) : image

    const buffer = isPng
      ? await resized.png({ quality: 80, compressionLevel: 9 }).toBuffer()
      : await resized.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer()

    // Only overwrite if we actually saved space. Write to a temp file first —
    // writing straight back to the same path sharp just read from fails on
    // Windows with an intermittent file-lock error.
    if (buffer.length < before) {
      const tmpPath = filePath + ".tmp"
      fs.writeFileSync(tmpPath, buffer)
      fs.renameSync(tmpPath, filePath)
      const after = buffer.length
      totalBefore += before
      totalAfter += after
      console.log(
        `${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (${metadata.width}px${
          maxWidth < metadata.width ? ` -> ${maxWidth}px` : ""
        })`,
      )
    } else {
      totalBefore += before
      totalAfter += before
      console.log(`${file}: already optimal, skipped`)
    }
  }

  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB (saved ${(
      (1 - totalAfter / totalBefore) *
      100
    ).toFixed(0)}%)`,
  )
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
