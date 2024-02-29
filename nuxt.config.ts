// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {},
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'My Nuxt App',
      titleTemplate: '%s - My Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Playground e-com for schoolproject' },
      ],
    },
  },
});
