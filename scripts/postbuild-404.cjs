// scripts/postbuild-404.cjs
import { copyFileSync, existsSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const from = resolve(__dirname, '../dist/index.html')
const to = resolve(__dirname, '../dist/404.html')

if (!existsSync(from)) {
  console.error('postbuild-404: dist/index.html not found. Did the build succeed?')
  process.exit(1)
}

copyFileSync(from, to)
console.log('postbuild-404: created dist/404.html')
