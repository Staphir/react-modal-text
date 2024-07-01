import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/react-modal-text.jsx'),
      name: 'react-modal-text',
      fileName: (format) => `react-modal-text.${format}.js`
    },
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [react()],
})
