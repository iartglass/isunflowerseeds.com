/**
 * Finalize WebP conversion:
 * 1. Delete WebP files that are larger than the original (keep original)
 * 2. Delete originals where WebP is smaller
 * 3. Print a list of files to update in code
 */
import { readdir, stat, unlink } from 'fs/promises'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const IMAGES_DIR = join(__dirname, '../public/images')

const SKIP = ['hydrobase-logo.png', 'hydrobase-icon.png']

async function main() {
  const files = await readdir(IMAGES_DIR)

  // Find all webp files we just created
  const webpFiles = files.filter(f => extname(f).toLowerCase() === '.webp')

  const toUpdateInCode = []   // files where webp won: use webp, delete original
  const keptOriginal = []     // files where original won: deleted webp

  for (const webp of webpFiles) {
    const stem = basename(webp, '.webp')
    // Find the original (jpg or png)
    const orig = files.find(f => {
      const ext = extname(f).toLowerCase()
      return basename(f, ext) === stem && ['.jpg', '.jpeg', '.png'].includes(ext) && !SKIP.includes(f)
    })
    if (!orig) continue

    const origPath = join(IMAGES_DIR, orig)
    const webpPath = join(IMAGES_DIR, webp)
    const origSize = (await stat(origPath)).size
    const webpSize = (await stat(webpPath)).size

    if (webpSize >= origSize) {
      // WebP is larger or equal — delete it, keep original
      await unlink(webpPath)
      keptOriginal.push(`  ${orig.padEnd(55)} (kept original — WebP was ${Math.round((webpSize-origSize)/1024)}KB larger)`)
    } else {
      // WebP wins — delete original
      await unlink(origPath)
      toUpdateInCode.push(orig)
    }
  }

  console.log('\n=== CONVERTED TO WEBP (originals deleted) ===')
  toUpdateInCode.forEach(f => console.log(`  ${f} → ${basename(f, extname(f))}.webp`))

  console.log('\n=== KEPT ORIGINALS (WebP was larger) ===')
  keptOriginal.forEach(l => console.log(l))

  console.log(`\nSummary: ${toUpdateInCode.length} converted, ${keptOriginal.length} kept as original`)
}

main().catch(console.error)
