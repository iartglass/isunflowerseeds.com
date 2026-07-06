/**
 * Convert all JPG/PNG images in public/images/ to WebP.
 * Skips logo/icon files. Keeps originals until confirmed working.
 * Run: node scripts/convert-webp.mjs
 */
import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const IMAGES_DIR = join(__dirname, '../public/images')

const SKIP = ['hydrobase-logo.png', 'hydrobase-icon.png']

async function main() {
  const files = await readdir(IMAGES_DIR)
  const targets = files.filter(f => {
    const ext = extname(f).toLowerCase()
    return ['.jpg', '.jpeg', '.png'].includes(ext) && !SKIP.includes(f)
  })

  console.log(`Converting ${targets.length} images to WebP...\n`)

  let totalBefore = 0
  let totalAfter = 0

  for (const file of targets) {
    const src = join(IMAGES_DIR, file)
    const outName = basename(file, extname(file)) + '.webp'
    const out = join(IMAGES_DIR, outName)

    const before = (await stat(src)).size

    await sharp(src)
      .webp({ quality: 82, effort: 4 })
      .toFile(out)

    const after = (await stat(out)).size
    const saving = Math.round((1 - after / before) * 100)

    console.log(`  ${file.padEnd(55)} ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB  (-${saving}%)`)
    totalBefore += before
    totalAfter += after
  }

  const totalSaving = Math.round((1 - totalAfter / totalBefore) * 100)
  console.log(`\nTotal: ${Math.round(totalBefore/1024/1024*10)/10} MB → ${Math.round(totalAfter/1024/1024*10)/10} MB  (-${totalSaving}%)`)
  console.log('\nDone. Update code references from .jpg/.png to .webp, then delete originals.')
}

main().catch(console.error)
