import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    build: {
    outDir: 'dist',     
    emptyOutDir: true,  
  },
  assetsInclude: ["**/*.docx"],
  server: {
    proxy: {
      '/iolink-proxy': { 
        target: 'http://192.168.0.10',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/iolink-proxy/, ''),
      },
    },
  },
})