// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base:'./' so assets resolve on GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
})
