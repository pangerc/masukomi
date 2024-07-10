// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "Masukomi",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "When Everything Else Fails" },
        {
          hid: "og:title",
          property: "og:title",
          content: "When Everything Else Fails",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "MASUKOMI",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.masukomi.io",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://use.typekit.net/maf4kzm.css", // Replace with your Adobe Fonts URL
        },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
