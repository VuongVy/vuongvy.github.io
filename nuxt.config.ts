// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['public/transistion.css'],

  modules: [
    "nuxt-icon",
    "@formkit/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss"
  ],

  experimental: {
    viewTransition: true
  }
})