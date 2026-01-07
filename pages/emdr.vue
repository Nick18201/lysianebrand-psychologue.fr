<script setup>
import { canonicalize, seoTitle, generateJsonLd } from "@/lib/utils";
import { DOCTOLIB_URL } from "~/app/constants";
const route = useRoute();

useHead({
  title: "Thérapie EMDR La Chapelle-sur-Erdre - Lysiane Brand",
  meta: [
    {
      name: "description",
      content:
        "Psychologue & Praticienne EMDR à La Chapelle-sur-Erdre. Traitement des traumatismes, phobies et blocages émotionnels. Thérapie brève et efficace.",
    },
    {
      property: "og:title",
      content: seoTitle(
        "Thérapie EMDR La Chapelle-sur-Erdre - Lysiane Brand"
      ),
    },
    {
      property: "og:description",
      content:
        "Psychologue & Praticienne EMDR à La Chapelle-sur-Erdre. Traitement des traumatismes, phobies et blocages émotionnels. Thérapie brève et efficace.",
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
      name: "Thérapie EMDR",
      url: route.path,
    },
    breadcrumbs: [
      { name: "Thérapie EMDR", item: canonicalize(route.path) },
    ],
  })
);
</script>

<template>
  <article>
    <section class="bg-pippin dots-pippin texture-pippin min-h-[40rem]">
      <ParallaxLeafsAlternate />
      <div class="wrapper py-48 xs:py-88 xs:flex xs:gap-94">
        <h1 class="h1 mb-28">Thérapie EMDR</h1>
        <div>
          <p class="text-14 leading-18 xs:text-20 xs:leading-28 mb-28">
            L'<strong>EMDR</strong> (Eye Movement Desensitization and Reprocessing) est une méthode thérapeutique reconnue mondialement pour le traitement des <strong>traumatismes</strong> psychiques et des perturbations émotionnelles.
          </p>
          <p class="text-14 leading-18 xs:text-20 xs:leading-28 mb-28">
            Elle permet de "digérer" des souvenirs douloureux qui sont restés figés dans le cerveau et qui continuent d'impacter le présent (flashbacks, angoisses, phobies, manque d'estime de soi...).
          </p>
        </div>
      </div>
    </section>

    <section class="bg-blue texture-blue text-white">
      <div class="px-72 wrapper py-48 xs:py-88">
        <div class="max-w-[68rem] mbti mx-auto">
          <h2 class="h3">Qu'est-ce que l'EMDR ?</h2>
          <p class="text my-28">
            Développée par Francine Shapiro, cette approche utilise des <strong>stimulations bilatérales alternées</strong> (mouvements oculaires, tapotements ou sons) pour relancer le processus naturel de traitement de l'information du cerveau.
          </p>
          <p class="text my-28">
            Lorsqu'un événement traumatique survient, il peut arriver que le cerveau n'arrive pas à traiter l'information correctement. Le souvenir reste alors "bloqué" avec les images, les bruits, les pensées et les sentiments d'origine. L'EMDR permet de débloquer ces mémoires dysfonctionnelles.
          </p>
        </div>

        <div class="max-w-[68rem] mbti mx-auto mt-48">
          <h2 class="h3">Pour quelles problématiques ?</h2>
          <p class="text my-28">
            L'EMDR est particulièrement recommandée pour :
          </p>

          <ul class="list-disc pl-20">
            <li class="mb-28">
              <p class="text">
                Les <strong>traumatismes</strong> (accidents, agressions, deuils difficiles...).
              </p>
            </li>
            <li class="mb-28">
              <p class="text">Les états de <strong>stress post-traumatique</strong>.</p>
            </li>
            <li class="mb-28">
              <p class="text">
                Les <strong>phobies</strong> et les angoisses.
              </p>
            </li>
            <li class="mb-28">
              <p class="text">
                Les problèmes d'estime de soi liés à des événements passés.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <BlockContact>
      <template v-slot:card>
        <section class="wrapper bg-transparent my-43 xs:my-88">
          <Card class="bg-white text-blue">
            <h2 class="h2 xs:text-center mb-28">Déroulement</h2>
            <p class="text text-center mb-28">
              La thérapie commence toujours par une ou plusieurs séances de préparation pour établir une relation de confiance et s'assurer que vous êtes prêt(e) à aborder les souvenirs difficiles en toute sécurité.<br/><br/>
              <a
                class="inline-link"
                :href="DOCTOLIB_URL"
                target="_blank"
                rel="noopener"
                >Prendre RDV</a
              >
              pour une première consultation.
            </p>
          </Card>
        </section>
      </template>
    </BlockContact>
  </article>
</template>
