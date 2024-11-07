// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image', '@nuxt/fonts'],
  components: [
    { path: '~/components/Cards', pathPrefix: false },
    { path: '~/components/UI', pathPrefix: false },
    '~/components',
  ],
});
