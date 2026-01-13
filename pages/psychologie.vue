<script setup>
import { canonicalize, seoTitle, generateJsonLd } from "@/lib/utils";
import { DOCTOLIB_URL } from "~/app/constants";
const route = useRoute();

useHead({
  title: "Psychologie - La Chapelle-sur-Erdre - Burn-out & Souffrance au travail",
  meta: [
    {
      name: "description",
      content:
        "Psychologue à La Chapelle-sur-Erdre. Spécialiste souffrance au travail, burn-out & stress. Un espace neutre et bienveillant pour aller mieux. Parking & Accès PMR.",
    },
    {
      property: "og:title",
      content: seoTitle(
        "Psychologie - La Chapelle-sur-Erdre - Burn-out & Souffrance au travail"
      ),
    },
    {
      property: "og:description",
      content:
        "Psychologue à La Chapelle-sur-Erdre. Spécialiste souffrance au travail, burn-out & stress. Un espace neutre et bienveillant pour aller mieux. Parking & Accès PMR.",
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
      name: "Séances de psychologie",
      url: route.path,
    },
    breadcrumbs: [
      { name: "Séances de psychologie", item: canonicalize(route.path) },
    ],
  })
);
</script>

<template>
  <article>
    <section class="bg-pipin dots-pipin texture-pipin min-h-[40rem] text-blue">
      <ParallaxLeafsAlternate />
      <div class="wrapper py-48 xs:py-88 xs:flex xs:gap-94">
        <h1 class="h1 mb-28">Séances de psychologie</h1>
        <div class="bg-white rounded-md p-28 xs:p-40 show-from-bottom">
          <p class="text-14 leading-18 xs:text-20 xs:leading-28 mb-28">
            Nous vivons parfois des situations difficiles que nous avons du mal
            à surmonter <strong>seul·es</strong>. Nous pouvons par moment
            ressentir un décalage entre nos besoins profonds et les attentes de
            notre environnement. Le stress, des
            <strong>tensions physiques et émotionnelles</strong>, un ressenti de
            mal-être sont autant de symptômes qui nous alertent sur le besoin de
            prendre <strong>soin de notre santé mentale</strong>.
          </p>
          <p class="text-14 leading-18 xs:text-20 xs:leading-28 mb-0">
            Je vous accueille dans mon cabinet de psychologie à la
            <a
              class="font-bold inline-link"
              href="https://goo.gl/maps/JskwEgqpQQcQJCKN8"
              target="_blank"
              >Chapelle-sur-Erdre</a
            >, tout près de Nantes.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-blue texture-blue text-white">
      <div class="px-72 wrapper py-48 xs:py-88">
        <div class="max-w-[68rem] mbti mx-auto">
          <h2 class="h3">Mon Approche et Méthodologie</h2>
          <p class="text my-28">
            Chaque séance est un espace de parole libre. Mon rôle est d'écouter,
            de comprendre vos problématiques et de vous guider vers des
            solutions adaptées.
            <strong>La bienveillance, l'écoute active et l'empathie</strong>
            sont au cœur de ma démarche. Je me sers également de
            <a
              class="font-bold inline-link"
              href="https://www.comitys.com/cartes-emotions-et-besoins-cnv/"
              target="_blank"
              rel="noopener"
              >cartes d’expression</a
            >, des outils innovants qui facilitent l'identification de vos
            émotions et besoins.
          </p>
          <p class="text my-28">
            L'idée de consulter un psychologue peut être
            <strong>intimidante</strong>, surtout si c'est une démarche nouvelle
            pour vous. Le psychologue n'est pas là pour juger, mais pour
            <strong>aider</strong>. On peut penser que voir un psychologue
            signifie qu'il y a un « problème » ou une faiblesse mais, en
            réalité, consulter un psychologue est une démarche
            <strong>courageuse</strong> qui facilite le changement personnel
            et/ou professionnel.
          </p>
          <p class="text my-28">
            Une séance de psychologie n’est pas réservée à ceux qui traversent
            des crises ou des difficultés majeures. C'est aussi un
            <strong
              >lieu d'échange, de réflexion et de développement
              personnel</strong
            >, où l'on peut explorer ses aspirations, ses craintes et apprendre
            à mieux se connaître.
          </p>
          <p class="text my-28">
            Que vous soyez confronté à des difficultés spécifiques ou que vous
            cherchiez simplement à améliorer votre bien-être au travail ou
            épanouissement personnel.
          </p>
        </div>

        <div class="max-w-[68rem] mbti mx-auto mt-48">
          <h2 class="h3">Pourquoi consulter une Psychologue ?</h2>
          <p class="text my-28">
            Exemples (non exhaustifs) de motifs de consultation de psychologie :
          </p>

          <ul class="list-disc pl-20">
            <li class="mb-28">
              <p class="text">
                <strong>Anxiété</strong> et gestion du stress.
              </p>
            </li>
            <li class="mb-28">
              <p class="text">
                <strong>Dépression</strong>, tristesse persistante, perte d'élan vital.
              </p>
            </li>
            <li class="mb-28">
              <div class="text">
                <strong>Souffrance au travail</strong> & <strong>Burn-out</strong> :
                épuisement professionnel, situation de souffrance ou de harcèlement, recherche d'équilibre.
              </div>
              
              <aside class="mt-16 mb-8 p-12 pl-16 border-l-4 border-kournikova bg-white/5 rounded-r text-14 leading-20">
                <p class="m-0">
                  <strong class="text-kournikova">Note :</strong> Si vous n'êtes pas en détresse psychologique mais en quête de sens pro, le bilan est mieux adapté.
                  <a
                    href="http://www.margedemanoeuvre.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-bold underline hover:text-kournikova transition-colors ml-4 whitespace-nowrap"
                  >
                    Découvrir Marge de Manœuvre ↗
                  </a>
                </p>
              </aside>
            </li>
            <li class="mb-28">
              <p class="text">Gestion des <strong>émotions</strong>.</p>
            </li>
            <li class="mb-28">
              <p class="text">
                Prendre du recul sur une situation de <strong>conflit</strong>,
                problématiques de couple, améliorer sa communication,
                communication non violente (CNV).
              </p>
            </li>
            <li class="mb-28">
              <p class="text">
                Mieux se connaître : mieux
                <strong>comprendre sa personnalité</strong>, passation du test
                MBTI ou approche ennéagramme, fonctionnements atypique HPI.
              </p>
            </li>
            <li class="mb-28">
              <p class="text">
                Problématiques d'<strong>estime de soi</strong>.
              </p>
            </li>
            <li class="mb-28">
              <p class="text">Changements et transitions de vie.</p>
            </li>
          </ul>
        </div>

        <div class="max-w-[68rem] mbti mx-auto mt-48">
          <h2 class="h3">Modalités des Séances</h2>

          <p class="text my-28">
            Durée : <strong>environ 45 minutes</strong><br />
            Tarif : <strong>75&euro;</strong><br />
            Lieu du cabinet :
            <a
              class="font-bold inline-link"
              href="https://goo.gl/maps/JskwEgqpQQcQJCKN8"
              target="_blank"
              >Centre attitude</a
            >
            · 60 rue du Leinster à La Chapelle sur Erdre (près de Nantes).<br />
            Fréquence : Les séances peuvent être ponctuelles ou régulières selon
            votre besoin.
          </p>

          <p class="text my-28">
            Pour planifier votre première séance rdv sur
            <a
              class="font-bold inline-link"
              :href="DOCTOLIB_URL"
              target="_blank"
              rel="noopener"
              >Doctolib</a
            >, pour obtenir plus d'informations, n'hésitez pas à me contacter au
            0674552022.
          </p>
          <p class="text my-28">
            Vous recherchez un psychologue en ligne, vous pouvez également
            réserver sur doctolib une séance de psychologie en visio. Le
            règlement s’effectue par Lydia ou Paylib avant votre séance.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white text-blue">
      <div class="px-72 wrapper py-48 xs:py-88">
        <div class="max-w-[68rem] mbti mx-auto mt-48">
          <h2 class="h3">Mes engagements</h2>
          <p class="text my-28">
            En tant que psychologue, mes engagements envers vous sont
            fondamentaux pour instaurer une relation de confiance et
            d'efficacité.
          </p>
          <ul class="list-disc pl-20">
            <li class="mb-28">
              <p class="text">
                Protéger votre <strong>confidentialité</strong> à chaque
                instant.
              </p>
            </li>
            <li class="mb-28">
              <p class="text">
                Vous offrir une écoute active et bienveillante pour vous
                accueillir dans votre <strong>singularité</strong>.
              </p>
            </li>
            <li class="mb-28">
              <p class="text">
                Proposer une approche personnalisée en réponse à vos besoins.
              </p>
            </li>
            <li class="mb-28">
              <p class="text">
                Garantir mon professionnalisme : je me forme en continue pour
                vous accompagner efficacement.
              </p>
            </li>
            <li class="mb-28">
              <p class="text">
                Encourager un <strong>dialogue ouvert</strong> pour explorer
                ensemble vos pensées et ressentis.
              </p>
            </li>
            <li class="mb-28">
              <p class="text">
                Vous soutenir dans le changement pour atteindre vos objectifs
                personnels et professionnel.
              </p>
            </li>
          </ul>
        </div>

        <div class="max-w-[68rem] mbti mx-auto mt-48">
          <h2 class="h3">Mes expériences</h2>
          <ul class="list-disc pl-20 my-28">
            <li class="mb-28">
              <p class="text">
                Cellules de <strong>soutien psychologique</strong> pour
                particuliers.
              </p>
            </li>
            <li class="mb-28">
              <p class="text">
                Psychologue à Nantes pour des permanences psychologiques en
                entreprise durant des plans de licenciement.
              </p>
            </li>
            <li class="mb-28">
              <p class="text">
                Animation de
                <strong
                  >formations sur la santé et la sécurité au travail</strong
                >, ainsi que sur les risques psycho-sociaux (<a
                  class="font-bold inline-link"
                  href="https://travail-emploi.gouv.fr/sante-au-travail/prevention-des-risques-pour-la-sante-au-travail/article/risques-psychosociaux"
                  target="_blank"
                  rel="noopener"
                  >RPS</a
                >).
              </p>
            </li>
            <li class="mb-28">
              <p class="text">
                Facilitation d’ateliers sur l'égalité femme-homme et la
                <strong>sensibilisation au sexisme</strong> dans les grandes
                entreprises.
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
            <h2 class="h2 xs:text-center mb-28">Le tarif</h2>
            <p class="text text-center mb-28">
              <a
                class="inline-link"
                :href="DOCTOLIB_URL"
                target="_blank"
                rel="noopener"
                >Prenez RDV</a
              >
              directement ou
              <NuxtLink class="inline-link" to="/contact/"
                >contactez-moi</NuxtLink
              >
              pour échanger et<br />
              collaborer ensemble vers votre mieux-être professionnel.
            </p>
            <ul
              class="xs:flex xs:max-w-[78rem] space-y-20 xs:space-y-0 xs:space-x-20 xs:items-start xs:justify-center xs:mx-auto"
            >
              <li
                class="bg-titan-white rounded-sm xs:rounded-md text-center p-32 w-full"
              >
                <p><strong>75 &euro;</strong></p>
              </li>
            </ul>
            <p
              class="mt-18 text xs:mx-auto xs:text-center xs:mt-30 xs:max-w-[51rem]"
            >
              <em>
                Les séances de psychologie ne sont pas remboursées par la
                sécurité sociale mais de nombreuses mutuelles les remboursent en
                totalité ou partie.
              </em>
            </p>
          </Card>
        </section>
      </template>
    </BlockContact>
  </article>
</template>
