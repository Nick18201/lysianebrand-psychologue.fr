<template>
  <article>
    <section class="bg-pipin dots-pipin texture-pipin min-h-[40rem]">
      <ParallaxLeafsAlternate />
      <div class="wrapper py-48 xs:py-88 xs:flex xs:gap-94">
        <h1 class="h1">Mentions légales</h1>
      </div>
    </section>

    <section class="bg-white">
      <div class="px-72 wrapper py-48 xs:py-88">
        <ul>
          <li class="">
            <p class="text">Lysiane Brand<br /></p>
            <p class="text">
              60 Rue de Leinster, 44240 La Chapelle-sur-Erdre<br />
            </p>
            <p class="text">lysiane.brand@gmail.com<br /></p>
            <p class="text">0674552022<br /></p>
            <p class="text">N° SIRET 91076983500018<br /></p>
            <p class="text">
              Titre de Psychologue du travail délivré par l'université Lyon
              Lumières en 2018 N° ADELI 44 93 2453 2<br />
            </p>
            <p class="text">
              Déclaration d'activité en tant que prestataire de formation :
              enregistré sous le numéro 52440992744.<br />
              Cet enregistrement ne vaut pas agrément de l'état.
            </p>

            <h2 class="h3 mt-48 mb-20">Images et textes</h2>
            <p class="text">
              Photos personnelles, textes personnels, logo et éléments
              graphiques réalisés par
              <a
                class="link"
                href="https://in-august.com"
                rel="noopener"
                target="_blank"
              >
                Marianne Nicolas</a
              >
            </p>

            <h2 class="h3 mt-48 mb-20">Création et webdesign</h2>

            <p class="text">
              <a
                class="link"
                href="https://in-august.com"
                rel="noopener"
                target="_blank"
              >
                Marianne Nicolas</a
              >
            </p>

            <h2 class="h3 mt-48 mb-20">Réalisation et développement</h2>

            <p class="text">
              <a
                class="link"
                href="https://www.lucas.computer"
                rel="noopener"
                target="_blank"
              >
                Lucas Heymès</a
              >
              pour
              <a
                class="link"
                href="https://pantographe.studio"
                rel="noopener"
                target="_blank"
                >Pantographe</a
              >
            </p>

            <h2 class="h3 mt-43 my-20">
              Informations relatives à l'hébergement du site
            </h2>

            <p class="text">
              Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco,
              Californie 94104, États-Unis.
              <a
                class="link"
                href="https://www.netlify.com"
                rel="noopener"
                target="_blank"
                >www.netlify.com</a
              >
            </p>
            <p class="text">
              Nous utilisons Netlify pour héberger une partie de notre
              service.<br />
              Pour fournir ce service, Netlify peut stocker vos requêtes
              contenant votre adresse IP jusqu'à 30 jours.<br />
              Pour plus d'information sur les règles de vie privée de Netlify,
              veuillez visiter la page Netlify Privacy Policy:
              <a
                class="link"
                href="https://www.netlify.com"
                rel="noopener"
                target="_blank"
                >https://www.netlify.com/privacy/</a
              >
            </p>
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
  title: "Mentions légales",
  meta: [
    {
      name: "description",
      content:
        "Les mentions légales concernant le site margedemanoeuvre.fr et son utilisation",
    },
    {
      property: "og:url",
      content: canonicalize(route.path),
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
      name: "Mentions légales",
      url: route.path,
    },
    breadcrumbs: [
      {
        name: "Mentions légales",
        item: canonicalize(route.path),
      },
    ],
  })
);
</script>
