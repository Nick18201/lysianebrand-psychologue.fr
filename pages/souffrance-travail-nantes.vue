<script setup>
import { canonicalize, seoTitle, generateJsonLd } from "@/lib/utils";
import { DOCTOLIB_URL } from "~/app/constants";
const route = useRoute();

useHead({
  title: "Psychologue Nantes - Souffrance au Travail",
  meta: [
    {
      name: "description",
      content:
        "Psychologue spécialiste de la souffrance au travail à Nantes (La Chapelle). Accompagnement Burn-out, harcèlement, stress chronique et reconstruction professionnelle.",
    },
    {
      property: "og:title",
      content: seoTitle(
        "Psychologue Nantes - Souffrance au Travail"
      ),
    },
    {
      property: "og:description",
      content:
        "Psychologue spécialiste de la souffrance au travail à Nantes (La Chapelle). Accompagnement Burn-out, harcèlement, stress chronique et reconstruction professionnelle.",
    },
    {
      property: "og:url",
      content: canonicalize(route.path),
    },
  ],

});
useJsonld(
  generateJsonLd({
    webpage: {
      name: "Accompagnement de la Souffrance au Travail",
      url: route.path,
    },
    breadcrumbs: [
      { name: "Psychologie du Travail", item: canonicalize(route.path) },
    ],
  })
);
</script>

<template>
  <article>
    <section class="bg-pipin dots-pipin texture-pipin min-h-[40rem] text-blue">
      <ParallaxLeafs />
      <div class="relative z-10 wrapper py-48 xs:py-88 xs:flex xs:gap-94">
        <h1 class="h1 mb-28">Accompagnement de la Souffrance au Travail</h1>
         <div class="bg-white rounded-md p-28 xs:p-40 show-from-bottom">
          <p class="text-14 leading-18 xs:text-20 xs:leading-28 mb-28">
            Le travail ne devrait pas être un lieu de souffrance. Je vous aide à comprendre ce qui se joue pour vous, à prendre du recul et à vous reconstruire professionnellement.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-blue texture-blue text-white">
      <div class="px-72 wrapper py-48 xs:py-88">

        <!-- Avertissement -->
        <div class="max-w-[68rem] mx-auto mb-48 p-24 bg-white/10 rounded-lg border-l-4 border-kournikova">
          <p class="text font-bold mb-8 text-kournikova">Attention</p>
           <p class="text">
            Ces consultations sont dédiées au <strong>soin et à la réparation</strong>. Pour un projet de reconversion ou un bilan de compétences, merci de consulter mon site dédié : 
            <a href="https://www.margedemanoeuvre.fr" target="_blank" rel="noopener" class="underline hover:text-kournikova transition-colors">Marge de Manœuvre</a>.
          </p>
        </div>

        
       <!-- Symptômes -->
        <div class="max-w-[68rem] mx-auto">
          <h2 class="h3">Symptômes traités</h2>
          <p class="text my-28">
            Je vous accompagne si vous traversez des situations telles que :
          </p>
          <ul class="list-disc pl-20">
             <li class="mb-28">
               <p class="text"><strong>Burn-out</strong> (épuisement professionnel).</p>
             </li>
             <li class="mb-28">
               <p class="text"><strong>Bore-out</strong> (ennui, mise au placard).</p>
             </li>
             <li class="mb-28">
               <p class="text"><strong>Harcèlement moral</strong> ou sexuel.</p>
             </li>
              <li class="mb-28">
               <p class="text"><strong>Stress chronique</strong> et anxiété liée au travail.</p>
             </li>
              <li class="mb-28">
               <p class="text"><strong>Conflits de valeurs</strong> et perte de sens.</p>
             </li>
          </ul>
        </div>

        <!-- Objectifs -->
        <div class="max-w-[68rem] mx-auto mt-48">
          <h2 class="h3">Objectif des séances</h2>
          <p class="text my-28">
             L'objectif de cet accompagnement est multiple :
          </p>
          <ul class="list-disc pl-20">
            <li class="mb-28"><p class="text">Comprendre les <strong>mécanismes organisationnels</strong> qui ont mené à cette situation (ce n'est pas "juste vous").</p></li>
            <li class="mb-28"><p class="text"><strong>Déculpabiliser</strong> et restaurer l'estime de soi.</p></li>
            <li class="mb-28"><p class="text">Restaurer votre <strong>identité professionnelle</strong>.</p></li>
            <li class="mb-28"><p class="text">Préparer sereinement le <strong>retour à l'emploi</strong> ou la suite de votre parcours.</p></li>
          </ul>
        </div>

      </div>
    </section>

    <BlockContact>
      <template v-slot:card>
        <section class="wrapper bg-transparent my-43 xs:my-88">
          <Card class="bg-white text-blue">
            <h2 class="h2 xs:text-center mb-28">Se reconstruire</h2>
            <p class="text text-center mb-28">
              Ne restez pas seul(e) face à la souffrance au travail.<br>
              <a
                class="inline-link"
                :href="DOCTOLIB_URL"
                target="_blank"
                rel="noopener"
                >Prendre RDV en ligne</a
              >
              ou contactez-moi.
            </p>
          </Card>
        </section>
      </template>
    </BlockContact>
  </article>
</template>
