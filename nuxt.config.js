export default {
  mode: 'universal',
  head: {
    title: 'Aerolab Challenge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/aerolab-logo.svg' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: ['~/plugins/axios'],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  modules: ['@nuxtjs/axios'],
  build: {
    extend(config, ctx) {}
  },
  tailwindcss: {
    configPath: '../tailwind.config.js'
  },
  srcDir: 'src/',
  env: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRhYWMzMjYwMmY2ODAwNmM4ZjczZmMiLCJpYXQiOjE1OTEzODkyMzR9.sqBmyZKGr2gwUWwb2mSv7fdQAmKeeNZ8zuQRnKKFgMk',
    baseUrl:
      process.env.NODE_ENV === 'dev'
        ? 'https://private-anon-3c65b1bb3f-aerolabchallenge.apiary-proxy.com'
        : 'https://coding-challenge-api.aerolab.co'
  }
};
