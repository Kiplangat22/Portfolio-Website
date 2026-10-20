import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Social previews (LinkedIn, WhatsApp, X) need absolute URLs, so index.html uses __SITE_URL__
// and this fills it in from VITE_SITE_URL (e.g. https://kevinkiplangat.com). Empty = relative URLs.
const siteUrl = (url: string): Plugin => ({
  name: 'site-url',
  transformIndexHtml: (html) => html.replace(/__SITE_URL__/g, url.replace(/\/$/, '')),
})

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    plugins: [react(), siteUrl(env.VITE_SITE_URL ?? '')],
    server: {
      // Forward API calls to the Express server during development
      proxy: {
        '/api': 'http://localhost:5050',
      },
    },
  }
})
