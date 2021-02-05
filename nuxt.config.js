const pkg = require('./package');

module.exports = {
  /*
  ** Headers of the page
  */
  target: 'static',
  ssr: false,
  head: {
    title: 'SECTIONsq | Minimal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'msapplication-tooltip', content: 'SECTIONsq' },
      { name: 'google', content: 'notranslate, nositelinkssearchbox' },
      { name: 'apple-mobile-web-app-title', content: 'SECTIONsq' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://section.esque.id' },
      { property: 'og:image', content: 'https://section.esque.id/og_image.png' },
      { property: 'og:title', content: 'SECTIONsq' },
      { property: 'og:description', content: pkg.description },
      { name: 'p:domain_verify', content: 'e1e21a3027431d7ca6e4dcfd70fc7a3f' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://section.esque.id/', rel: 'canonical' },
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
    '~/css/font.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  }
};
