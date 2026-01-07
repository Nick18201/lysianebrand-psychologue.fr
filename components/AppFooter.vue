<template>
  <footer class="relative z-10 text-white leading-relaxed">
    <div class="wrapper pb-32 xs:pb-48">
      <div
        class="grid grid-cols-1 xs:grid-cols-3 gap-32 xs:gap-48 text-left"
      >
        <!-- Col 1: Identité & Contact -->
        <div class="flex flex-col items-start">
          <h3 class="font-black text-20 leading-24 mb-12">
            Lysiane Brand - Psychologue
          </h3>
          <p class="text-14 leading-20 mb-16 opacity-90">
            Cabinet de psychologie clinique et thérapies EMDR.
          </p>
          <address class="not-italic text-14 leading-24 flex flex-col gap-4">
            <p>60 rue du Leinster<br>44240 La Chapelle-sur-Erdre</p>
            <a href="tel:0674552022" class="hover:underline hover:text-fern-green transition-colors mt-8 block">06 74 55 20 22</a>
            <a href="mailto:lysiane.brand@gmail.com" class="hover:underline hover:text-fern-green transition-colors">lysiane.brand@gmail.com</a>
          </address>
        </div>

        <!-- Col 2: La Passerelle "Marge de Manœuvre" -->
        <div class="rounded-lg p-20 flex flex-col items-start h-full" style="background-color: rgba(255, 255, 255, 0.05);">
          <h3 class="font-bold text-18 leading-24 mb-12 text-white">
            Évolution Professionnelle
          </h3>
          <p class="text-14 leading-20 mb-20 opacity-90">
            Vous cherchez un accompagnement axé sur la carrière et le financement CPF ?
          </p>
          <a
            href="http://www.margedemanoeuvre.fr"
            target="_blank"
            rel="noopener noreferrer"
            class="group mt-auto inline-flex items-center justify-center px-16 py-10 border border-white rounded transition-all hover:bg-white hover:text-blue text-14 font-bold"
          >
            Découvrir Marge de Manœuvre ↗
          </a>
        </div>

        <!-- Col 3: Navigation Site -->
        <div class="flex flex-col items-start xs:pl-32">
          <h3 class="font-bold text-18 leading-24 mb-16">En savoir plus</h3>
          <nav>
            <ul class="flex flex-col gap-12 list-none p-0 m-0">
              <li>
                <NuxtLink to="/psychologie/" class="text-14 hover:opacity-80 transition-opacity flex items-center gap-8">
                  <span class="opacity-50">›</span> L'approche (Psychologie)
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/emdr/" class="text-14 hover:opacity-80 transition-opacity flex items-center gap-8">
                  <span class="opacity-50">›</span> Thérapie EMDR
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/qui-suis-je/" class="text-14 hover:opacity-80 transition-opacity flex items-center gap-8">
                   <span class="opacity-50">›</span> Qui suis-je ?
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="border-t border-white/20 py-16">
      <div class="wrapper flex flex-col xs:flex-row justify-between items-center text-12 opacity-70 gap-8">
        <div class="flex gap-16 flex-wrap justify-center">
            <NuxtLink to="/mentions-legales/" class="hover:underline">Mentions Légales</NuxtLink>

            <span class="opacity-50">|</span>
            <NuxtLink to="/plan-du-site/" class="hover:underline">Plan du site</NuxtLink>
        </div>
        <p>© Lysiane Brand {{ year }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { DOCTOLIB_URL } from "~/app/constants";

const year = new Date().getFullYear();
</script>

<style scoped lang="postcss">
footer {
  @apply bg-blue;
  padding-top: 4rem;
}
</style>
