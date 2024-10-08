import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
    },
  },
  build: {
    rollupOptions: {
      output: {
        // manualChunks: false,
        inlineDynamicImports: true,
        entryFileNames: 'index.js',
        assetFileNames: (assetInfo): string => {
          if (assetInfo.name === 'index.css') {
            return 'index.css'
          }
          return `assets/images/${assetInfo.name}`
        },
      },
    },
  },
})
