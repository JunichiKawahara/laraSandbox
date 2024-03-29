require('dotenv').config();
const pkg = require('./package')
const baseUrl = process.env.BASE_URL || 'http://localhost:8000/api'

module.exports = {
  mode: 'spa',
  srcDir: './frontend',

  env: {
    APP_NAME: process.env.APP_NAME,
    APP_ENV: process.env.APP_ENV,
    APP_DEBUG: process.env.APP_DEBUG,
    APP_URL: process.env.APP_URL,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: baseUrl,
    requestInterceptor (config, { store }) {
      if (store.state.csrfToken) {
        config.headers.common['x-csrf-token'] = store.state.csrfToken;
      }
      return config;
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
