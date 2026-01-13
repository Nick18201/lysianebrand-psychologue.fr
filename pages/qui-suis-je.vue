<script setup>
import { canonicalize, seoTitle, generateJsonLd } from "@/lib/utils";
const route = useRoute();

useHead({
  title:
    "Lysiane Brand, Psychologue du travail formée au MBTI et à l'Ennéagramme à La Chapelle sur Erdre",
  meta: [
    {
      name: "description",
      content:
        "Psychologue du travail expérimentée en recrutement et analyse de la personnalité, je vous aide à mieux vous connaître et j'accompagne votre transition ou reconversion professionnelle.",
    },
    {
      property: "og:title",
      content: seoTitle(
        "Lysiane Brand, Psychologue du travail formée au MBTI et à l'Ennéagramme à La Chapelle sur Erdre"
      ),
    },
    {
      property: "og:description",
      content:
        "Psychologue du travail expérimentée en recrutement et analyse de la personnalité, je vous aide à mieux vous connaître et j'accompagne votre transition ou reconversion professionnelle.",
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
      name: "Lysiane Brand, Psychologue du travail formée au MBTI et à l'Ennéagramme à La Chapelle sur Erdre",
      url: route.path,
    },
    breadcrumbs: [
      {
        name: "Lysiane Brand, Psychologue du travail formée au MBTI et à l'Ennéagramme à La Chapelle sur Erdre",
        item: canonicalize(route.path),
      },
    ],
  })
);
useJsonld({
  "@context": "https://schema.org",
  "@type": "AboutPage",
});
</script>

<template>
  <article>
    <section class="bg-pipin dots-pipin texture-pipin min-h-[40rem] text-blue">
      <ParallaxLeafsAlternate />
      <div class="wrapper py-48 xs:py-88 xs:flex xs:gap-94 xs:space-between">
        <div>
          <h1 class="h1 mb-28">Qui suis-je ?</h1>
          <NuxtLink
            class="button-link mt-30 !hidden xs:!inline-flex"
            to="/contact/"
          >
            <BaseLink>Me contacter</BaseLink>
          </NuxtLink>
        </div>
        <div class="xs:max-w-[58rem]">
          <p class="text-14 leading-18 xs:text-20 xs:leading-28 mb-28">
            Comprendre ce qui nous anime en tant qu'individu et observer la
            variété des comportements humains m'a très tôt passionnée !<br />
            Je m’oriente, à la fin de ma scolarité, vers des études de
            psychologie. Au fil des années ma préférence s'affirme pour la
            psycho-sociologie et la psychologie des organisations. 5 ans après :
            me voilà
            <strong>Psychologue sociale, du travail et des organisations</strong
            >.
          </p>

          <p class="text-14 leading-18 xs:text-20 xs:leading-28">
            <strong
              >Je reste fidèle à mon intérêt premier : comprendre l’humain.. en
              interaction avec d’autres humains !</strong
            >
          </p>

          <NuxtLink class="button-link mt-30 xs:!hidden" to="/contact/">
            <BaseLink>Me contacter</BaseLink>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-blue texture-blue text-white">
      <div class="px-72 wrapper py-48 xs:py-88 flex flex-wrap gap-46 xs:gap-88">
        <svg class="flex-1 w-full min-w-[33rem] text-sage-green">
          <use
            xlink:href="#icon-lysiane-brand"
            href="#icon-lysiane-brand"
          ></use>
        </svg>

        <div class="xs:max-w-[68rem]">
          <h2 class="h3 mb-16 xs:mb-32">Lysiane Brand</h2>

          <p class="text mb-12 xs:mb-22">
            Pendant plusieurs années, j'exerce dans le
            <strong> secteur du recrutement et de l’évaluation</strong>, en
            entreprise et en cabinet, accompagnant les entreprises dans leurs
            problématiques organisationnelles et de recrutement.
          </p>
          <p class="text mb-12 xs:mb-22">
            Grâce à cette expérience, je conforte mes études de psychologie du
            travail en apprenant sur le terrain l’analyse de poste, l’évaluation
            de la personnalité, les différents secteurs d’activités, les
            professions en tension... Ce métier me donne
            <strong>
              une vision globale du marché du travail et des enjeux que vivent
              les entreprises et les individus </strong
            >. Néanmoins, je ne trouve pas pleinement satisfaction dans ce
            secteur car même si la part relationnelle est importante, ce n’est
            pas une posture d’aide et d’accompagnement que l’on attend de moi,
            mais une posture commerciale. Au bout de quelques années, il devient
            frustrant pour moi d’échanger au quotidien avec de
            <strong
              >nombreuses personnes qui ressentent un manque de sens au
              travail</strong
            >
            sans pouvoir réellement me consacrer à les aider.
          </p>

          <p class="text mb-12 xs:mb-22">
            C’est pourquoi après 4 ans dans ce domaine
            <strong> j'ose me lancer dans l’aventure en indépendante </strong>,
            pour aider les individus à mieux se connaître, à prendre conscience
            de leur valeur et à vivre une vie personnelle et professionnelle
            enrichissante.<br />
            Aujourd’hui, je suis très heureuse d'accompagner les particuliers et
            les collectifs qui ont des questionnements ou des difficultés :
            <strong>
              j'utilise mes compétences pour valoriser celles des autres, en
              respectant mon éthique et mes valeurs !
            </strong>
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white approches text-blue">
      <div class="px-72 wrapper py-48 xs:py-88">
        <ul class="list">
          <li>
            <h2 class="h2">
              <span
                >Mon<br />
                approche</span
              >
            </h2>
            <div class="xs:max-w-[68rem]">
              <p class="text">
                Formée à l’ennéagramme et au MBTI, je propose lors de nos
                séances des <strong>outils</strong> de psychologie, de
                développement personnel et même des jeux de cartes ! (Ce sont
                des jeux projectifs qui aident à exprimer ses besoins et
                ressentis - Non, on ne jouera pas au tarot pendant les séances
                😉).
              </p>

              <p class="text">
                Au programme donc : de la réflexion, des échanges riches, mais
                aussi des moments ludiques et créatifs pour que vous réussissiez
                à exprimer clairement vos <strong>envies profondes</strong> !
              </p>

              <p class="text">
                Convaincue que nous avons tous des qualités et des compétences à
                apporter à la société, j’ai à cœur de vous aider à explorer
                votre “marge de manœuvre” et de vous accompagner dans la
                réalisation de vos envies profondes et dans prise de conscience
                de votre valeur personnelle
              </p>
            </div>
          </li>
          <li>
            <h2 class="h2">
              <span
                >Mes<br />
                aspirations</span
              >
            </h2>
            <div class="text xs:max-w-[68rem]">
              <ul class="list-disc ml-30">
                <li>
                  <p>
                    Aider chacun·e à s’épanouir dans sa vie personnelle et dans
                    son activité professionnelle.
                  </p>
                </li>
                <li>
                  <p>
                    Participer à une société plus <strong>cohérente</strong> en
                    promouvant une orientation professionnelle consciente des
                    enjeux environnementaux et sociaux.
                  </p>
                </li>
                <li>
                  <p>
                    Avoir une approche <strong>inclusive</strong>, attentive à
                    la singularité de chacun·e, et de chaque situation.
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <BlockContact />
  </article>
</template>

<style scoped lang="postcss">
.approches {
  .list > li {
    padding-bottom: 3.6rem;
    counter-increment: approche;
    @apply border-b;

    &:first-of-type {
      margin-top: 4.2rem;
    }

    &:last-of-type {
      @apply border-none;
    }

    @screen xs {
      display: flex;
      justify-content: space-between;

      padding-bottom: 9rem;
    }
  }

  .list > li + li {
    margin-top: 4.2rem;

    @screen xs {
      margin-top: 9rem;
    }
  }

  h2 {
    display: inline-flex;
    margin-bottom: 2.4rem;

    span {
      max-width: 22rem;

      @screen xs {
        max-width: 32rem;
      }
    }

    &:before {
      content: counter(approche) ". ";
      margin-right: 1rem;

      @apply text-40 leading-40 font-black;

      @screen xs {
        @apply text-60 leading-60;
      }
    }
  }

  p + p,
  ul li ul li + li {
    margin-top: 2rem;

    @screen xs {
      margin-top: 3rem;
    }
  }
}
</style>
