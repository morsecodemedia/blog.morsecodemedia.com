
export default {
  telemetry: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Technical writings of Brandon Morse | a morsecodemedia project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'ogtitle', property: 'og:title', content: 'Technical writings of Brandon Morse | a morsecodemedia project' },
      { hid: 'twtitle', name: 'twitter:title', content: 'Technical writings of Brandon Morse | a morsecodemedia project' },
      { hid: 'googlename', itemprop: 'name', content: 'Technical writings of Brandon Morse | a morsecodemedia project' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'ogdescription', property: 'og:description', content: '' },
      { hid: 'twdescription', name: 'twitter:description', content: '' },
      { hid: 'googledescription', itemprop: 'description', content: '' },
      { hid: 'ogurl', property: 'og:url', content: 'https://blog.morsecodemedia.com' },
      { hid: 'twsite', name: 'twitter:site', content: 'https://blog.morsecodemedia.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon-512x512.png' },
      { hid: 'canonical', rel: 'canonical', href: 'https://blog.morsecodemedia.com' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { mode: 'client', src: '~/plugins/focus-trap.js' },
    { mode: 'client', src: '~/plugins/exit-link.js' },
    { mode: 'client', src: '~/plugins/vh.js' },
    { src: '~/plugins/format.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/redirect-module',
    '@nuxt/content',
    '@nuxtjs/gtm'
  ],
  gtm: {
    id: 'GTM-KTGKFVS'
  },
  sitemap: {
    hostname: 'https://blog.morsecodemedia.com',
    gzip: true,
    trailingSlash: true,
    defaults: {
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date(),
      lastmodrealtime: true
    },
    routes: [
      {
        url: '/',
        priority: 1
      }
    ]
  },
  robots: {
    UserAgent: '*',
    Sitemap: 'https://blog.morsecodemedia.com/sitemap.xml'
  },
  redirect: [],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  components: [
    '~/components/brand'
  ],
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        Object.entries(document).forEach(([key, value]) => {
          const _key = `case_insensitive__${key}` // prefix is arbitrary

          if (!document[_key] && typeof value === 'string') {
            document[_key] = value.toLocaleLowerCase()
          }
        })
        const stats = require('reading-time')(document.text)
        document.readingStats = stats
      }
    }
  }
}
