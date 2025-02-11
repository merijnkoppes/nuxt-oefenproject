// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "animate.css"],
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],
  googleFonts: {
    families: {
      Raleway: true,
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=2",
      title: "NuxtTest",
      meta: [{ name: "description", content: "nuxt test" }],
    },
  },
  runtimeConfig: {
    api: process.env.apiKey,
    secretKey: "123",
    public: {
      publicKey: "publickey",
    },
  },
});
