// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-pdf'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    },
    routeRules: {
        '/': { prerender: true },
        '/api/*': { cache: { maxAge: 60 * 60 } },
        '/page': {
          redirect: { to: '/new-page', statusCode: 302 }
        }
        
      },
    app: {
        head: {
            title: 'Portafolio Carlos Ramos',
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    charset: 'utf-8',
                },

            ]

        },
    },
})