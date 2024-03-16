import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: './',
    rollupOptions: {
      input: {
        // video_component: resolve(__dirname, "./src/html/video_component.html"),
        // video_overlay: resolve(__dirname, "./src/html/video_overlay.html"),
        // mobile: resolve(__dirname, "./src/html/mobile.html"),
        // config: resolve(__dirname, "./src/html/config.html"),
      },
      output: {
        dir: "dist"
      }
    }
  }
})
