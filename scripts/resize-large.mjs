/**
 * Resize images that are still too large after WebP conversion.
 * Max width: 1920px. Quality 82. Overwrites in-place.
 */
import sharp from 'sharp'
import { stat } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const IMAGES_DIR = join(__dirname, '../public/images')

const TARGETS = [
  'install-aerial-workers.webp',
  'canal-aerial-farmland.webp',
  'canal-aerial-network.webp',
  'canal-aerial-construction.webp',
  'coastal-gravel-survey.webp',
  'coastal-mattress-install.webp',
  'coastal-workers-diver.webp',
  'factory-production-floor.webp',
  'factory-production-tower-a.webp',
  'factory-production-tower-b.webp',
  'factory-spinning-hall.webp',
  'factory-weaving-floor.webp',
  'factory-weaving-frames.webp',
  'install-crew-inspection-mixer.webp',
  'install-reservoir-pump-aerial.webp',
  'install-worker-curing.webp',
  'mattress-surface-texture-aerial.webp',
  'project-mountain-reservoir.webp',
  'project-reservoir-mountain-turquoise.webp',
  'project-reservoir-mountains-wide.webp',
  // Large JPGs still remaining
  'product-standard-mattress-fabric-1b.jpg',
  'product-vegetated-mattress-fabric-1b.jpg',
]

async function main() {
  let totalBefore = 0, totalAfter = 0

  for (const file of TARGETS) {
    const path = join(IMAGES_DIR, file)
    try {
      const before = (await stat(path)).size
      const meta = await sharp(path).metadata()

      if (meta.width <= 1920 && before < 400 * 1024) {
        console.log(`  SKIP  ${file.padEnd(55)} (${meta.width}px, ${Math.round(before/1024)}KB — already fine)`)
        continue
      }

      const isWebp = file.endsWith('.webp')
      const isJpg = file.endsWith('.jpg') || file.endsWith('.jpeg')

      const { readFile, writeFile } = await import('fs/promises')
      const inputBuf = await readFile(path)
      const pipeline = sharp(inputBuf).resize({ width: 1920, withoutEnlargement: true })
      let buf
      if (isWebp) buf = await pipeline.webp({ quality: 82 }).toBuffer()
      if (isJpg)  buf = await pipeline.jpeg({ quality: 75, mozjpeg: true }).toBuffer()

      await writeFile(path, buf)

      const after = (await stat(path)).size
      const saving = Math.round((1 - after / before) * 100)
      console.log(`  ${file.padEnd(55)} ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB  (-${saving}%)`)
      totalBefore += before
      totalAfter += after
    } catch (e) {
      console.log(`  ERROR ${file}: ${e.message}`)
    }
  }

  if (totalBefore > 0) {
    console.log(`\nResized total: ${Math.round(totalBefore/1024)}KB → ${Math.round(totalAfter/1024)}KB  (-${Math.round((1-totalAfter/totalBefore)*100)}%)`)
  }
}

main().catch(console.error)
