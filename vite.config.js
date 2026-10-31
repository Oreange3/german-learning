import { copyFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const pagesBase = '/german-learning/'

function githubPagesFiles() {
  return {
    name: 'github-pages-files',
    apply: 'build',
    closeBundle() {
      const dist = resolve('dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
      writeFileSync(resolve(dist, '.nojekyll'), '')
    },
  }
}

// Dev stays at /. The production build is served from the GitHub Pages project path.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? pagesBase : '/',
  plugins: [react(), githubPagesFiles()],
}))
