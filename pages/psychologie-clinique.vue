<script setup>
import { canonicalize, seoTitle, generateJsonLd } from "@/lib/utils";
import { DOCTOLIB_URL } from "~/app/constants";
const route = useRoute();

useHead({
  title: "Psychologue Nantes - Psychologie Clinique & Soutien",
  meta: [
    {
      name: "description",
      content:
        "Psychologue clinicienne à Nantes (La Chapelle-sur-Erdre). Consultations de soutien psychologique pour l'anxiété, la confiance en soi, et la gestion des émotions.",
    },
    {
      property: "og:title",
      content: seoTitle(
        "Psychologue Nantes - Psychologie Clinique & Soutien"
      ),
    },
    {
      property: "og:description",
      content:
        "Psychologue clinicienne à Nantes (La Chapelle-sur-Erdre). Consultations de soutien psychologique pour l'anxiété, la confiance en soi, et la gestion des émotions.",
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
      name: "Consultations de Psychologie & Soutien",
      url: route.path,
    },
    breadcrumbs: [
      { name: "Psychologie Clinique", item: canonicalize(route.path) },
    ],
  })
);
</script>

<template>
  <article>
    <section class="bg-pippin dots-pippin texture-pippin min-h-[40rem]">
      <ParallaxLeafsAlternate />
      <div class="wrapper py-48 xs:py-88 xs:flex xs:gap-94">
        <h1 class="h1 mb-28">Consultations de Psychologie & Soutien</h1>
        <div>
          <p class="text-14 leading-18 xs:text-20 xs:leading-28 mb-28">
            Chaque parcours de vie est unique. Mon rôle est de vous offrir un espace d'écoute <strong>bienveillant</strong> et sécurisant pour vous aider à traverser les moments difficiles.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-blue texture-blue text-white">
      <div class="px-72 wrapper py-48 xs:py-88">
        
       <!-- Pour qui ? -->
        <div class="max-w-[68rem] mx-auto">
          <h2 class="h3">Pour qui ?</h2>
          <p class="text my-28">
            Ces consultations s'adressent à toute personne ressentant le besoin d'être soutenue face à :
          </p>
          <ul class="list-disc pl-20">
             <li class="mb-28">
               <p class="text">Le <strong>stress</strong> et l'anxiété au quotidien.</p>
             </li>
             <li class="mb-28">
               <p class="text">Des <strong>difficultés relationnelles</strong> (couple, famille, travail).</p>
             </li>
             <li class="mb-28">
               <p class="text">La <strong>gestion des émotions</strong> débordantes.</p>
             </li>
              <li class="mb-28">
               <p class="text">Un manque de <strong>confiance en soi</strong>.</p>
             </li>
              <li class="mb-28">
               <p class="text">Des épreuves de vie comme le <strong>deuil</strong> ou la séparation.</p>
             </li>
          </ul>
        </div>

        <!-- Déroulement -->
        <div class="max-w-[68rem] mx-auto mt-48">
          <h2 class="h3">Déroulement</h2>
          <p class="text my-28">
             Chaque séance est un espace de parole libre. Mon rôle est d'écouter, de comprendre vos problématiques et de vous guider vers des solutions adaptées. 
          </p>
           <p class="text my-28">
            <strong>La bienveillance, l'écoute active et l'empathie</strong> sont au cœur de ma démarche. L'idée de consulter un psychologue peut être intimidante, mais il ne s'agit pas d'un jugement. C'est une démarche courageuse pour aller mieux.
           </p>
        </div>

        <!-- Le petit + -->
        <div class="max-w-[68rem] mx-auto mt-48">
          <h2 class="h3">Le petit + : Une approche intégrative</h2>
          <p class="text my-28">
             Je ne me limite pas à une seule méthode. Mon approche est <strong>intégrative</strong>, ce qui signifie que je m'adapte à vous, et non l'inverse. J'utilise différents outils thérapeutiques selon vos besoins spécifiques du moment, pour un accompagnement véritablement sur mesure.
          </p>
        </div>

      </div>
    </section>

    <BlockContact>
      <template v-slot:card>
        <section class="wrapper bg-transparent my-43 xs:my-88">
          <Card class="bg-white text-blue">
            <h2 class="h2 xs:text-center mb-28">Prendre rendez-vous</h2>
            <p class="text text-center mb-28">
              Il n'est jamais trop tard pour prendre soin de soi.<br>
              <a
                class="inline-link"
                :href="DOCTOLIB_URL"
                target="_blank"
                rel="noopener"
                >Réserver une consultation</a
              >
              ou contactez-moi pour en discuter.
            </p>
          </Card>
        </section>
      </template>
    </BlockContact>
  </article>
</template>
