import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
  build: {
    sourcemap: true,
    target: 'esnext',
  }
})