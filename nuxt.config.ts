export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-pdf', '@nuxt/image'],

  runtimeConfig: {
    MONGODB_URI: 'mongodb+srv://admin:12345@cluster0.losq7.mongodb.net/clima?retryWrites=true&w=majority&appName=Cluster0',
    CLOUDINARY_CLOUD_NAME: 'dn4xdl2v5',
    CLOUDINARY_API_KEY: '357585198847445',
    CLOUDINARY_API_SECRET: 'odYQsXNPvjMByG800ToDDoEajlY',
    PASSWORD: 'fuaq brxw tvyt oltk'

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
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://res.cloudinary.com/dim2wnoej/image/upload/v1723819201/jcz4dpbwxx4zjaqm0tos.ico'
        }
      ]
    }
  },

  compatibilityDate: '2024-10-15'
});