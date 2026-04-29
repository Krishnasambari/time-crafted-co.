import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  server: {
  port: 8080,
  strictPort: false,
},
  preview: {
    port: 8080,
    strictPort: true,
  },
})