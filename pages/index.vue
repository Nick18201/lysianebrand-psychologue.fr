<script setup>
import { canonicalize } from "@/lib/utils";
const route = useRoute();

useHead({
  title: "Lysiane Brand Psychologue",
  meta: [
    {
      name: "description",
      content:
        "Psychologue du travail & Coach à Nantes Nord (La Chapelle). Double expertise : Bilan de compétences CPF et Thérapie (Burn-out). Retrouvez votre marge de manœuvre.",
    },
    {
      property: "og:description",
      content:
        "Psychologue du travail & Coach à Nantes Nord (La Chapelle). Double expertise : Bilan de compétences CPF et Thérapie (Burn-out). Retrouvez votre marge de manœuvre.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: canonicalize(route.path),
    },
  ],
});

function scrollTo(e) {
  e.preventDefault();
  const $section = document.querySelector("#accompagnement-sur-mesure");
  $section.scrollIntoView({ behavior: "smooth" });
}
</script>
<template>
  <article>
    <section
      class="bg-pippin dots-pippin texture-pippin min-h-[40rem] !pt-[10rem]"
    >
      <div
        class="wrapper py-48 xs:py-88 flex flex-wrap justify-center lg:justify-between gap-0 xs:gap-46 lg:gap-94 pt-0 min-h-[60rem]"
      >
        <Motion
          class="self-center max-w-[56rem] relative z-0 order-2 lg:order-1"
          :initial="{ opacity: 0.001, x: -100 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{
            delay: 0.25,
            duration: 0.75,
            easing: [0.22, 0.61, 0.36, 1],
          }"
          tag="div"
        >
          <h1 class="h1 mt-22 w-[104%] text-royal-blue">
            Votre épanouissement personnel et professionnel
          </h1>
          <p class="leading-18 xs:text-20 xs:leading-28 my-28">
            Je suis Lysiane Brand, psychologue à la Chapelle-sur-Erdre.<br />
            Je vous accompagne en séances de psychologie et EMDR.
          </p>
          <a
            class="button-link max-w-[26rem]"
            href="#accompagnement-sur-mesure"
            @click="scrollTo"
          >
            <BaseLink>Choisir son accompagnement</BaseLink>
          </a>
        </Motion>
        <ClientOnly>
          <IconPlant
            class="h-full relative z-0 -mt-10 lg:flex-1 max-w-[18rem] xs:max-w-[50rem] xs:min-w-[22rem] order-1 lg:order-2"
          />
        </ClientOnly>
      </div>
    </section>

    <section
      class="bg-blue texture-blue text-white with-card"
      id="accompagnement-sur-mesure"
    >
      <div class="px-72 wrapper py-48 xs:py-88">
        <p class="h3 text-center">Un accompagnement sur mesure</p>
        <ul
          class="grid lg:grid-cols-3 text-center justify-center gap-46 mt-22 xs:mt-72"
          v-observe
        >
          <!-- Soutien Psychologique -->
          <li class="xs:max-w-[35rem] stagger">
            <NuxtLink
              class="no-link"
              to="/psychologie/"
              title="Soutien Psychologique"
            >
             <svg
                class="mx-auto mb-32 w-[9rem] h-[9rem] xs:w-[13.4rem] xs:h-[13.4rem]"
                width="136"
                height="136"
                viewBox="0 0 136 136"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M85.1 50.6 54 19.4 68 5l31.2 31.4 2.2-2.3L68 .9 34.6 34.3l2.2 2.2 14.8-15L83 52.7l2.1-2.1Z"
                  fill="white"
                />
                <path
                  d="m118.5 51.3-2.2 2.1 15 15-30.6 30.5-14.1-14.1 14.8-15-2.2-2.1-17 17L98.4 101l-14 14.3L53 84l-2.2 2.1L82 117.3l-14 14.2-47-46.8 30.5-30.5 15 14.8 2.1-2.1-17-17.1L19 82.5 4.8 68.4l15-15-2.2-2.1-17.1 17L68 136l67.6-67.5-17.1-17.1Z"
                  fill="white"
                />
                <path
                  d="M62.4 55c-5.8 2-9.8 9.6-8 16.4C57 80.2 69.9 83 75 79.9c8.8-5.5 9.7-15.9 1.5-22.5-3.1-2.6-10-3.8-14-2.4Z"
                  fill="#FFF280"
                />
              </svg>
            </NuxtLink>

            <h2 class="h2">Soutien Psychologique</h2>
            <p class="my-12 text-12 leading-16 xs:text-18 xs:leading-25">
              Traverser les difficultés de la vie (anxiété, deuil, confiance en soi).
            </p>
            <NuxtLink
              class="arrow-link !text-white"
              to="/psychologie/"
            >
              <BaseLink>En savoir plus</BaseLink>
            </NuxtLink>
          </li>

           <!-- Souffrance au Travail -->
          <li class="xs:max-w-[35rem] stagger stagger--delay-1">
            <NuxtLink
              class="no-link"
              to="/souffrance-travail-nantes/"
              title="Souffrance au Travail"
            >
               <!-- Reusing Psychologie SVG but flipped/modified or just same for now as placeholder for mental health work -->
               <svg
                class="mx-auto mb-32 w-[9rem] h-[9rem] xs:w-[13.4rem] xs:h-[13.4rem]"
                width="136"
                height="136"
                viewBox="0 0 136 136"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
               <!-- Same paths as Psychologie -->
                <path
                  d="M85.1 50.6 54 19.4 68 5l31.2 31.4 2.2-2.3L68 .9 34.6 34.3l2.2 2.2 14.8-15L83 52.7l2.1-2.1Z"
                  fill="white"
                />
                <path
                  d="m118.5 51.3-2.2 2.1 15 15-30.6 30.5-14.1-14.1 14.8-15-2.2-2.1-17 17L98.4 101l-14 14.3L53 84l-2.2 2.1L82 117.3l-14 14.2-47-46.8 30.5-30.5 15 14.8 2.1-2.1-17-17.1L19 82.5 4.8 68.4l15-15-2.2-2.1-17.1 17L68 136l67.6-67.5-17.1-17.1Z"
                  fill="white"
                />
                <!-- Different color accent for differentiation -->
                <path
                  d="M62.4 55c-5.8 2-9.8 9.6-8 16.4C57 80.2 69.9 83 75 79.9c8.8-5.5 9.7-15.9 1.5-22.5-3.1-2.6-10-3.8-14-2.4Z"
                  fill="#FFF280"
                />
              </svg>
            </NuxtLink>

            <h2 class="h2">Souffrance au Travail</h2>
            <p class="my-12 text-12 leading-16 xs:text-18 xs:leading-25">
              Burn-out, harcèlement, perte de sens. Se reconstruire professionnellement.
            </p>
            <NuxtLink
              class="arrow-link !text-white"
              to="/souffrance-travail-nantes/"
            >
              <BaseLink>En savoir plus</BaseLink>
            </NuxtLink>
          </li>

          <!-- EMDR CARD -->
          <li class="xs:max-w-[35rem] stagger stagger--delay-2">
            <NuxtLink
              class="no-link"
              to="/therapie-emdr/"
              title="Thérapie EMDR"
            >
              <svg
                class="mx-auto mb-32 w-[8.8rem] h-[8.8rem] xs:w-[13.4rem] xs:h-[13.4rem]"
                width="129"
                height="138"
                viewBox="0 0 129 138"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="64.5" cy="69" r="60" stroke="white" stroke-width="4"/>
                <path d="M40 70 Q 64 40 90 70 T 140 70" stroke="white" stroke-width="4" fill="none" />
                <path d="M30 70 Q 54 100 80 70" stroke="#FFF280" stroke-width="4" fill="none" />
              </svg>
            </NuxtLink>
            <h2 class="h2">Thérapie EMDR</h2>
            <p class="my-12 text-12 leading-16 xs:text-18 xs:leading-25">
              Se libérer des traumatismes et des blocages émotionnels profonds.
            </p>
            <NuxtLink
              class="arrow-link !text-white"
              to="/therapie-emdr/"
            >
              <BaseLink>En savoir plus</BaseLink>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <BlockContact>
      <template v-slot:card>
        <div
          class="wrapper -mt-[11rem] lg:-mt-[13rem] bg-transparent mb-43 lg:mb-88"
        >
          <Card class="bg-white flex flex-wrap lg:gap-62">
            <svg class="max-w-[17rem] text-periwinkle flex-1 mr-20 lg:mr-0">
              <use
                xlink:href="#icon-lysiane-brand"
                href="#icon-lysiane-brand"
              ></use>
            </svg>

            <svg
              class="flex-none lg:order-3 lg:w-[10.8rem] lg:h-[7.6rem]"
              width="75"
              height="52"
              viewBox="0 0 75 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.941 2.0798C21.8996 1.35065 19.6592 0.979492 17.2798 0.979492C12.6628 0.979492 8.32374 2.71681 5.06129 5.87032C1.79612 9.02119 0 13.2118 0 17.6709C0 19.9637 0.395201 22.1327 1.16925 24.1148C1.97055 26.1628 3.15888 27.9633 4.70425 29.4689C7.50881 32.2013 11.3709 33.8333 15.9688 34.2545C14.2163 37.5185 10.5668 44.1151 6.96916 49.3376C6.65845 49.7903 6.62847 50.3721 6.89557 50.8512C7.16267 51.3302 7.67779 51.6303 8.24198 51.6303H14.6797C15.1375 51.6303 15.5682 51.4329 15.8571 51.0933C15.9034 51.038 20.545 45.5707 25.1239 38.9663C31.3844 29.9349 34.5596 23.1356 34.5596 18.7633C34.5596 13.2039 32.8071 8.60265 29.4874 5.45178C27.9339 3.97506 26.0669 2.84316 23.9383 2.08506L23.941 2.0798Z"
                fill="#FFF280"
              />
              <path
                d="M69.5717 5.44651C68.0181 3.96979 66.1511 2.8379 64.0225 2.07716C61.9811 1.34802 59.7407 0.979492 57.3613 0.979492C52.7443 0.979492 48.4053 2.71418 45.1428 5.86768C41.8777 9.02119 40.0815 13.2118 40.0815 17.6683C40.0815 19.961 40.4767 22.1301 41.2508 24.1122C42.0521 26.1601 43.2404 27.9606 44.7858 29.4663C47.5904 32.1986 51.4524 33.8307 56.0504 34.2518C54.2979 37.5159 50.6484 44.1124 47.0507 49.3349C46.74 49.7877 46.71 50.3694 46.9771 50.8485C47.2442 51.3276 47.7593 51.6277 48.3235 51.6277H54.7612C55.2191 51.6277 55.6497 51.4303 55.9386 51.0907C55.985 51.0354 60.6265 45.5681 65.2054 38.9637C71.4659 29.9322 74.6411 23.133 74.6411 18.7607C74.6411 13.2039 72.8886 8.60002 69.5717 5.45178V5.44651Z"
                fill="#FFF280"
              />
            </svg>

            <div class="mt-32 lg:mt-0 lg:flex-1">
              <p class="h2 text-[#1617C6]">
                Être attentive à la singularité de chacun·e
              </p>
              <p class="h3 text-[#1617C6] my-20 mt-28">Lysiane Brand</p>
              <p class="text-[#1617C6] lg:text-18 lg:leading-25 mb-12 xs:mb-22">
                J’accompagne depuis plusieurs années les particuliers et les
                professionnels à prendre soin de leur santé mentale.<br />
                Que vous soyez confronté à des difficultés spécifiques ou que
                vous cherchiez simplement à améliorer votre bien-être, je suis
                là pour vous accompagner à votre rythme.
              </p>
              <p class="text-[#1617C6] lg:text-18 lg:leading-25 mb-12 xs:mb-22">
                N'hésitez pas à me contacter pour échanger, nous analyserons
                ensemble vos besoins.
              </p>

              <!-- <p class="mt-28">
                <NuxtLink
                  class="arrow-link !text-blue"
                  to="/files/livret-accompagnement.pdf"
                >
                  <BaseLink>
                    Commencer à réfléchir à ce qui à du sens pour moi
                  </BaseLink>
                </NuxtLink>
              </p> -->
            </div>
          </Card>
        </div>
      </template>
    </BlockContact>
  </article>
</template>

<style lang="postcss" scoped>
#hero {
  @apply bg-pippin;
}

ul li a.no-link {
  display: block;
  transition: transform 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
  transform: scale3d(1, 1, 1);
  transform-origin: 50%;

  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }
}
</style>
