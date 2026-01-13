<template>
  <article>
    <section class="bg-pipin dots-pipin texture-pipin min-h-[40rem]">
      <ParallaxLeafsAlternate />
      <div class="wrapper py-48 xs:py-88">
        <h1 class="h1">Plan du site</h1>
        <p>Retrouvez toutes les pages du site en accès rapide</p>
      </div>
    </section>

    <section class="bg-white">
      <div class="px-72 wrapper py-48 xs:py-88">
        <h2 class="h2 mb-20 text-royal-blue">Pages</h2>
        <ul class="mb-28 space-y-10 text-royal-blue">
          <li>
            <NuxtLink class="inline-link" to="/">Accueil</NuxtLink>
          </li>
          <li>
            <NuxtLink class="inline-link" to="/qui-suis-je/"
              >Qui suis-je?</NuxtLink
            >
          </li>

          <li>
            <NuxtLink class="inline-link" to="/psychologie/"
              >Psychologie</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="inline-link" to="/therapie-emdr/">Thérapie EMDR</NuxtLink>
          </li>
          <li>
            <NuxtLink class="inline-link" to="/souffrance-travail-nantes/">Souffrance au travail</NuxtLink>
          </li>


          <li>
            <NuxtLink class="inline-link" to="/contact/">Contact</NuxtLink>
          </li>
          <li>
            <NuxtLink class="inline-link" to="/mentions-legales/"
              >Mentions légales</NuxtLink
            >
          </li>
        </ul>

      </div>
    </section>

    <BlockContact />
  </article>
</template>

<style scoped lang="postcss">
ul li {
  p + p {
    margin-top: 2rem;
  }
}
</style>

<script setup>
import { canonicalize, generateJsonLd } from "@/lib/utils";
const route = useRoute();



useHead({
  title: "Plan du site",
  meta: [
    {
      property: "og:url",
      content: canonicalize(route.path),
    },
    {
      name: "description",
      content:
        "Retrouvez facilement toutes les pages et articles du site en un seul endroit",
    },
    {
      property: "og:description",
      content:
        "Retrouvez facilement toutes les pages et articles du site en un seul endroit",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: canonicalize(route.path),
    },
  ],
});
useJsonld(
  generateJsonLd({
    webpage: {
      name: "Plan du site",
      url: route.path,
    },
    breadcrumbs: [
      {
        name: "Plan du site",
        item: canonicalize(route.path),
      },
    ],
  })
);
</script>
