import { appDescription, appName, baseUrl } from './app/constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
  ],

  devtools: { enabled: true },

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  site: { url: baseUrl, name: appName },

  future: { compatibilityVersion: 4 },

  experimental: { typedPages: true },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: { options: { target: 'esnext' } },
    prerender: {
      crawlLinks: false,
      routes: ['/sitemap.xml'],
      ignore: [],
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: { sortConfigKeys: true },
    },
  },

  sitemap: {
    xsl: false,
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date(),
    },
    excludeAppSources: true,
    exclude: [],
    urls: [`${baseUrl}/`],
  },
})
