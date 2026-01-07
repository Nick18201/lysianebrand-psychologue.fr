// https://v3.nuxtjs.org/api/configuration/nuxt.config
const isProduction = process.env.NODE_ENV === "production";
// console.debug("STORYBLOK IS", STORYBLOK_ACCESS_TOKEN);
export default defineNuxtConfig({
  runtimeConfig: {},
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        {
          name: "color-scheme",
          content: "light only",
        },
        {
          name: "description",
          content:
            "Psychologue à La Chapelle-sur-Erdre, Lysiane Brand vous accompagne avec des séances de psychologie, l'EMDR et l'outil MBTI. Je vous accompagne à prendre soin de votre santé mentale.",
        },
        // Open Graph
        {
          property: "og:title",
          content: "Lysiane Brand - Psychologue & EMDR",
        },
        {
          property: "og:description",
          content:
            "Psychologue à La Chapelle-sur-Erdre, Lysiane Brand vous accompagne avec des séances de psychologie, l'EMDR et l'outil MBTI. Je vous accompagne à prendre soin de votre santé mentale.",
        },
        {
          property: "og:url",
          content: isProduction
            ? "https://lysianebrand.fr/"
            : "https://lysiane-brand-dev.netlify.app/",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:locale",
          content: "fr-FR",
        },
        {
          property: "og:image",
          content: isProduction
            ? "https://lysianebrand.fr/social_new.jpg"
            : "https://lysiane-brand-dev.netlify.app/social_new.jpg",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "robots",
          content: isProduction ? "index,follow" : "noindex,nofollow",
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:image",
          content: isProduction
            ? "https://lysianebrand.fr/social_new.jpg"
            : "https://lysiane-brand-dev.netlify.app/social_new.jpg",
        },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },

        { rel: "manifest", href: "/site.webmanifest" },

        {
          rel: "author",
          href: isProduction
            ? "https://lysianebrand.fr/humans.txt"
            : "https://lysiane-brand-dev.netlify.app/humans.txt",
          type: "text/plain",
        },
      ],
    },
  },
  routeRules: {
    "/orientation/": { redirect: "/psychologie/" },
    "/psychologie-du-travail/": { redirect: "/psychologie/" },
    "/vie-pro/": { redirect: "/outil-de-personnalite-mbti/" },
  },
  image: {},
  nitro: {
    // render server-side routes as static content
    prerender: {
      routes: [],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "nuxt-jsonld",
    "@nuxt/image",
    "nuxt-gtag",
  ],
  css: ["@/styles/main.css"],
  "nuxt-jsonld": { disableOptionsAPI: true },
  vite: {
    optimizeDeps: { exclude: ["fsevents"] },
  },
  gtag: {
    id: "G-JM2T3B4KH4", // UPDATE THIS ID LATER IF NEEDED
    // initialConsent: false,
  },
  site: {
    url: "https://lysianebrand.fr",
    name: "Lysiane Brand",
    trailingSlash: true,
  },
  sitemap: {
    xsl: false,
  },
});
