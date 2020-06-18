
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Aerolab Challenge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }, 
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/aerolab-logo.svg' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
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
  env: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRhYWMzMjYwMmY2ODAwNmM4ZjczZmMiLCJpYXQiOjE1OTEzODkyMzR9.sqBmyZKGr2gwUWwb2mSv7fdQAmKeeNZ8zuQRnKKFgMk',
    baseUrl:
      process.env.NODE_ENV === 'dev'
        ? 'https://private-anon-3c65b1bb3f-aerolabchallenge.apiary-proxy.com'
        : 'https://coding-challenge-api.aerolab.co'
  }
}
