// scripts/deploy-to-docs.cjs
import { rmSync, mkdirSync, cpSync, existsSync, copyFileSync } from 'fs';
import { join } from 'path';

const dist = join(process.cwd(), 'dist');
const docs = join(process.cwd(), 'docs');

// sanity checks
if (!existsSync(dist)) {
  console.error('dist/ not found. Did you run `npm run build`?');
  process.exit(1);
}

// clean and recreate docs/
rmSync(docs, { recursive: true, force: true });
mkdirSync(docs);

// copy everything from dist -> docs
cpSync(dist, docs, { recursive: true });

// SPA fallback: copy index.html -> 404.html
copyFileSync(join(docs, 'index.html'), join(docs, '404.html'));

console.log('Copied dist/ -> docs/ and created docs/404.html');
