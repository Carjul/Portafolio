import { env } from 'process';

export default defineNuxtConfig({
  modules: [ '@nuxt/image'],

  runtimeConfig: {
    MONGODB_URI: env.MONGODB_URI ,
    CLOUDINARY_CLOUD_NAME: env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: env.CLOUDINARY_API_SECRET,
    EMAIL: env.EMAIL,
    PASSWORD: env.PASSWORD
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/api/*': { prerender: true },
    '/img/*': { prerender: true },
    '/page': {
      redirect: { to: '/new-page', statusCode: 302 }
    }
  },

  app: {
    head: {
      title: 'Portafolio Carlos Ramos | Desarrollador Web',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Portafolio de Carlos Ramos, Desarrollador Web, Desarrollo software' },
        { charset: 'utf-8' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/img/portafolio.ico'
        }
      ]
    }
  },

  compatibilityDate: '2024-10-15'
});