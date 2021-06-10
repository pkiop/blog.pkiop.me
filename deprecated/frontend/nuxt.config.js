import colors from 'vuetify/es5/util/colors';
import dotenv from 'dotenv';
import awsmobile from './src/aws-exports';
dotenv.config();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  server: {
    host: "0.0.0.0",
  },
  env: {
    AUTH_ENV: 'admin',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - blog.pkiop.me',
    title: 'blog.pkiop.me',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/reset.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src: './vue-gtag.js',}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

    '@nuxt/typescript-build',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxtjs/apollo',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
  ],
  serverMiddleware: ['~/server-middleware/logger'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${awsmobile.aws_appsync_graphqlEndpoint}`,
        httpLinkOptions: {
          headers: {
            'x-api-key': awsmobile.aws_appsync_apiKey,
          },
        },
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build

};
