import { defineConfig, UserConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { viteSingleFile } from "vite-plugin-singlefile"
import html from "vite-plugin-html"
import { VitePWA } from "vite-plugin-pwa"
import WindiCSS from "vite-plugin-windicss"

const dev = (): boolean => process.env.NODE_ENV === "dev"
const config = (): UserConfig => {
  if (dev()) {
    return {
      plugins: [vue()],
      build: {
        target: "esnext"
      }
    }
  }

  return {
    plugins: [
      vue(),
      WindiCSS(),
      viteSingleFile(),
      html({
        minify: true
      }),
      VitePWA({
        registerType: "autoUpdate",
        manifest: {
          name: "Manne Muoniovaara",
          short_name: "manne-muoniovaara",
          description: "Manne Muoniovaara Curriculum Vitae (Vue 3, Windi)",
          icons: [
            {
              src: "/img/icons/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable any"
            },
            {
              src: "/img/icons/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable any"
            }
          ],
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone",
          lang: "fi-FI"
        }
      })
    ],
    build: {
      target: "esnext",
      assetsInlineLimit: 100000000,
      chunkSizeWarningLimit: 100000000,
      cssCodeSplit: false,
      brotliSize: false,
      rollupOptions: {
        inlineDynamicImports: true,
        output: {
          manualChunks: () => "everything.js"
        }
      }
    }
  }
}
export default defineConfig(config)
