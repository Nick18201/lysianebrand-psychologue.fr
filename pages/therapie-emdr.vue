<script setup>
import { canonicalize, seoTitle, generateJsonLd } from "@/lib/utils";
import { DOCTOLIB_URL } from "~/app/constants";
const route = useRoute();

useHead({
  title: "Psychologue La Chapelle sur Erdre - Thérapie EMDR",
  meta: [
    {
      name: "description",
      content:
        "Thérapie EMDR à La Chapelle-sur-Erdre (Nantes Nord). Traitement des traumatismes (accidents, agressions, enfance) et blocages émotionnels. Méthode reconnue par l'OMS.",
    },
    {
      property: "og:title",
      content: seoTitle(
        "Psychologue La Chapelle sur Erdre - Thérapie EMDR"
      ),
    },
    {
      property: "og:description",
      content:
        "Thérapie EMDR à La Chapelle-sur-Erdre (Nantes Nord). Traitement des traumatismes (accidents, agressions, enfance) et blocages émotionnels. Méthode reconnue par l'OMS.",
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
      name: "Thérapie EMDR et Traitement des Traumatismes",
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
    <section class="bg-pipin dots-pipin texture-pipin min-h-[40rem] text-blue">
      <ParallaxLeafs />
      <div class="relative z-10 wrapper py-48 xs:py-88 xs:flex xs:gap-94">
        <h1 class="h1 mb-28">Thérapie EMDR et Traitement des Traumatismes</h1>
        <div class="bg-white rounded-md p-28 xs:p-40 show-from-bottom">
          <p class="text-14 leading-18 xs:text-20 xs:leading-28 mb-28">
            Se libérer des traumatismes et des blocages émotionnels profonds pour retrouver sa liberté d'être.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-blue texture-blue text-white">
      <div class="px-72 wrapper py-48 xs:py-88">
        
       <!-- C'est quoi ? -->
        <div class="max-w-[68rem] mx-auto">
          <h2 class="h3">C'est quoi l'EMDR ?</h2>
          <p class="text my-28">
           L'<strong>EMDR</strong> (Désensibilisation et Retraitement par les Mouvements Oculaires) est une thérapie qui permet de soigner les séquelles psychologiques des traumatismes.
          </p>
           <p class="text my-28">
           C'est une méthode validée scientifiquement et <strong>reconnue par l'OMS</strong> (Organisation Mondiale de la Santé) pour le traitement des troubles de stress post-traumatique.
          </p>
        </div>

        <!-- Indications -->
        <div class="max-w-[68rem] mx-auto mt-48">
          <h2 class="h3">Indications</h2>
          <p class="text my-28">
             L'EMDR est efficace pour traiter :
          </p>
          <ul class="list-disc pl-20">
             <li class="mb-28">
               <p class="text">Des <strong>traumatismes uniques</strong> récents (accident, agression, deuil soudain...).</p>
             </li>
             <li class="mb-28">
               <p class="text">Des <strong>traumatismes anciens ou répétés</strong> (événements de l'enfance, humiliations, violences intrafamiliales...).</p>
             </li>
             <li class="mb-28">
               <p class="text">Des <strong>phobies</strong> et blocages émotionnels persistants.</p>
             </li>
          </ul>
        </div>

        <!-- Comment ça marche ? -->
        <div class="max-w-[68rem] mx-auto mt-48">
          <h2 class="h3">Comment ça marche ?</h2>
          <p class="text my-28">
             Contrairement aux idées reçues, <strong>ce n'est pas de l'hypnose</strong>. Vous restez parfaitement conscient(e) durant toute la séance.
          </p>
           <p class="text my-28">
             Grâce aux stimulations bilatérales (mouvements des yeux, tapotements...), nous aidons votre cerveau à <strong>"ranger" le souvenir</strong> traumatique. L'objectif n'est pas d'effacer le souvenir, mais de lui enlever sa charge émotionnelle douloureuse, pour qu'il devienne un souvenir comme un autre, appartenant au passé.
           </p>
        </div>

      </div>
    </section>

    <BlockContact>
      <template v-slot:card>
        <section class="wrapper bg-transparent my-43 xs:my-88">
          <Card class="bg-white text-blue">
            <h2 class="h2 xs:text-center mb-28">Apaiser le passé</h2>
            <p class="text text-center mb-28">
              Vous souhaitez savoir si l'EMDR peut vous aider ?<br>
              <a
                class="inline-link"
                :href="DOCTOLIB_URL"
                target="_blank"
                rel="noopener"
                >Prendre un 1er RDV</a>.
            </p>
          </Card>
        </section>
      </template>
    </BlockContact>
  </article>
</template>
