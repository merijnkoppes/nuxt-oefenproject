// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "animate.css"],
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxt/test-utils/module",
    "@nuxtjs/supabase",
  ],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  },
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
    MipBaseUrl: process.env.MIP_BASE_URL,
    secretKey: "123",
    public: {
      publicKey: "publickey",
    },
  },
});
