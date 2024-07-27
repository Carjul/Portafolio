// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-pdf'],
  runtimeConfig: {
    public: {
      MONGODB_URI: process.env.MONGODB_URI,
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
      PASSWORD: process.env.PASSWORD,
    }
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
    '/page': {
      redirect: { to: '/new-page', statusCode: 302 }
    }

  },
  app: {
    head: {
    
      title: 'Portafolio Carlos Ramos | Desarrollador Web',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },

      ]
,
link: [
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/Portafolio/assets/img/portfolio.ico',
  },
],
    },
  },
})