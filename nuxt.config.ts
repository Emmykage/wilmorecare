// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'WilmoreCare',
      meta: [
        { name: 'description', content: 'we specialise in working with adults that have a diverse range of needs specific to each of them, including autism, learning disabilities, physical disabilities, sensory impairments (sensory processing needs), mental health support needs, acquired brain injuries and age-related diseases' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  runtimeConfig: {
    public: {
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
  }},
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    'vue3-carousel-nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
