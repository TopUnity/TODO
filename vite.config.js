import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import autoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        "name": "TODO",
        "short_name": "TODO",
        "start_url": "/",
        "icons": [{
                "src": "dist/icons/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "maskable any"
            }
        ],
        "theme_color": "#000000",
        "background_color": "#ffffff",
        "display": "standalone",
        "orientation": "portrait"
    },
      workbox: {
        // workbox options for generateSW
      },
    }),
  ],

  //样式表插件
  css: {
    postcss: {
      plugins: [autoprefixer, postcssNesting],
    },
  },
});
