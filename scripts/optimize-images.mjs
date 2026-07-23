// Recompress oversized raster assets in public/images in place.
//
// Why in place, same filename, same dimensions: the site runs with
// next.config `images.unoptimized = true` because on-demand sharp resizing
// under concurrent load exhausted the host's memory. Pre-compressing the
// source assets gets the byte savings without reintroducing per-request
// resizing. Dimensions are already appropriate for the layout (~1200px), so
// only the encoder quality changes — no visual resizing, no ref updates.
//
// Usage: node scripts/optimize-images.mjs [--dry-run] [--quality 80] [--min-kb 150]
import { readdirSync, statSync, writeFileSync, renameSync } from "node:fs"
import { join, extname } from "node:path"
import sharp from "sharp"

const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")
const quality = Number(args[args.indexOf("--quality") + 1]) || 80
const minKb = Number(args[args.indexOf("--min-kb") + 1]) || 150
const DIR = "public/images"

const files = readdirSync(DIR).filter((f) => /\.(jpe?g|png)$/i.test(f))
let before = 0, after = 0, touched = 0

for (const file of files) {
  const path = join(DIR, file)
  const size = statSync(path).size
  if (size < minKb * 1024) continue

  const ext = extname(file).toLowerCase()
  const img = sharp(path)
  const meta = await img.metadata()

  // Re-encode at the same pixel dimensions; only the encoder changes.
  const out =
    ext === ".png"
      ? await img.png({ compressionLevel: 9, palette: true }).toBuffer()
      : await img.jpeg({ quality, mozjpeg: true, progressive: true }).toBuffer()

  // Never write a result that is not actually smaller.
  if (out.length >= size) {
    console.log(`  skip (no gain)  ${file}`)
    continue
  }

  before += size
  after += out.length
  touched++
  const pct = ((1 - out.length / size) * 100).toFixed(0)
  console.log(
    `  ${(size / 1024).toFixed(0).padStart(5)}KB -> ${(out.length / 1024)
      .toFixed(0)
      .padStart(5)}KB  (-${pct}%)  ${meta.width}x${meta.height}  ${file}`,
  )

  if (!dryRun) {
    const tmp = `${path}.tmp`
    writeFileSync(tmp, out)
    renameSync(tmp, path)
  }
}

console.log(
  `\n${dryRun ? "[dry-run] " : ""}${touched} files: ` +
    `${(before / 1048576).toFixed(2)}MB -> ${(after / 1048576).toFixed(2)}MB ` +
    `(saved ${((before - after) / 1048576).toFixed(2)}MB, ` +
    `${(before ? (1 - after / before) * 100 : 0).toFixed(0)}%)`,
)
