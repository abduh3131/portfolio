import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // If using GitHub Pages at username.github.io/portfolio/
  // base: '/'          // If you are using a custom domain
})
