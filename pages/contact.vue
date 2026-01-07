<script setup>
import { canonicalize, seoTitle, generateJsonLd } from "@/lib/utils";
import { DOCTOLIB_URL } from "~/app/constants";
const route = useRoute();

useHead({
  title: "Prendre RDV Psychologue / EMDR - Nantes La Chapelle",
  meta: [
    {
      name: "description",
      content:
        "Contactez Lysiane Brand (Nantes Nord). Prise de RDV rapide sur Doctolib. Psychologie, EMDR, MBTI. Accès Tram & Parking.",
    },
    {
      property: "og:title",
      content: seoTitle(
        "Prendre RDV Psychologue / EMDR - Nantes La Chapelle"
      ),
    },
    {
      property: "og:description",
      content:
        "Contactez Lysiane Brand (Nantes Nord). Prise de RDV rapide sur Doctolib. Psychologie, EMDR, MBTI. Accès Tram & Parking.",
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
      name: "Cabinet de psychologie certifié Qualiopi à la Chapelle sur Erdre",
      url: route.path,
    },
    breadcrumbs: [
      {
        name: "Cabinet de psychologie certifié Qualiopi à la Chapelle sur Erdre",
        item: canonicalize(route.path),
      },
    ],
  })
);
</script>

<template>
  <article>
    <section class="bg-pipin dots-pipin texture-pipin min-h-[40rem]">
      <ParallaxLeafsAlternate />
      <div class="wrapper py-48 xs:py-88 xs:flex xs:gap-94 xs:space-between">
        <div>
          <h1 class="h1 mb-28">Me contacter</h1>
          <NuxtLink
            class="button-link mt-30 !hidden xs:!inline-flex"
            :to="DOCTOLIB_URL"
            target="_blank"
            rel="noopener"
          >
            <BaseLink>Prendre RDV</BaseLink>
          </NuxtLink>
        </div>
        <div class="xs:max-w-[58rem]">
          <h2 class="h3">Lysiane Brand</h2>
          <p class="text-14 leading-18 xs:text-20 xs:leading-28 my-28">
            Pour toute demande d’information et prise de RDV, n’hésitez pas à me
            contacter :
          </p>
          <p class="text-14 leading-18 xs:text-20 xs:leading-28 my-28">
            <NuxtLink
              class="link"
              to="mailto:lysiane.brand@gmail.com?subject=Prise de contact"
            >
              <strong>lysiane.brand@gmail.com</strong>
            </NuxtLink>
          </p>

          <p class="text-14 leading-18 xs:text-20 xs:leading-28 my-28">
            <NuxtLink class="link" to="tel:0674552022"
              ><strong>0674552022</strong>
            </NuxtLink>
          </p>
          <NuxtLink
            class="button-link mt-30 xs:!hidden"
            :to="DOCTOLIB_URL"
            target="_blank"
            rel="noopener"
          >
            <BaseLink>Prendre RDV</BaseLink>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-blue texture-blue text-white with-card">
      <div class="px-72 wrapper py-48 xs:py-88 xs:flex">
        <svg
          class="flex-1 w-full xs:mr-[5rem] lg:mr-[10rem] min-w-[20rem]"
          width="399"
          height="396"
          viewBox="0 0 399 396"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M131.491 18.1758C52.6897 47.2848 -1.41676 157.176 23.9341 254.8C56.9149 381.809 232.238 423.641 301.727 377.644C421.836 298.052 432.994 148.8 322.238 52.6855C279.576 15.6585 186.828 -2.23705 131.491 18.1758Z"
            fill="#6B6BFC"
          />
          <mask
            id="mask0_111_13"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="382"
            height="387"
          >
            <path
              d="M113.866 8.56254C35.0647 37.6715 -19.0418 147.562 6.30912 245.187C39.2899 372.195 214.613 414.028 284.102 368.03C404.211 288.439 415.369 139.187 304.613 43.0722C261.951 6.04526 169.203 -11.8503 113.866 8.56254Z"
              fill="#6B6BFC"
            />
          </mask>
          <g mask="url(#mask0_111_13)">
            <rect
              x="-242"
              y="-136"
              width="843"
              height="731.884"
              fill="url(#pattern0)"
            />
          </g>
          <path
            d="M209 56.898C209 46.9791 200.75 39 191 39C181.25 39 173 46.9791 173 56.898V57.6437C173 57.7187 173.3 60.3284 173.6 61.4466C175.7 70.1723 182.825 76.809 191 82.9991C199.175 76.8099 206.3 70.1723 208.4 61.4466C208.7 60.3284 209 57.792 209 57.6437V56.898ZM191 64.3554C186.875 64.3554 183.5 60.9991 183.5 56.898C183.5 52.7968 186.875 49.4405 191 49.4405C195.125 49.4405 198.5 52.7968 198.5 56.898C198.5 60.9991 195.125 64.3554 191 64.3554Z"
            fill="#FF5151"
          />
          <path
            d="M153.306 279.4V285.124L148.518 279.4H145.026V292H149.166V286.276L153.954 292H157.446V279.4H153.306ZM172.525 292H176.917L171.409 279.4H167.233L161.725 292H166.045L166.891 289.804H171.679L172.525 292ZM168.061 286.744L169.285 283.576L170.509 286.744H168.061ZM189.475 279.4V285.124L184.687 279.4H181.195V292H185.335V286.276L190.123 292H193.615V279.4H189.475ZM201.998 292H206.246V282.694H209.936V279.4H198.308V282.694H201.998V292ZM218.815 288.796V287.14H224.143V284.08H218.815V282.604H224.881V279.4H214.639V292H225.115V288.796H218.815ZM235.048 292.288C238.954 292.288 240.916 290.344 240.916 288.04C240.916 283.396 233.95 284.656 233.95 283.144C233.95 282.712 234.346 282.352 235.588 282.352C236.686 282.352 237.856 282.658 239.098 283.288L240.376 280.21C239.062 279.472 237.316 279.112 235.624 279.112C231.718 279.112 229.756 281.02 229.756 283.36C229.756 288.058 236.722 286.78 236.722 288.364C236.722 288.796 236.29 289.048 235.084 289.048C233.698 289.048 232.114 288.598 230.926 287.896L229.558 290.992C230.818 291.766 232.942 292.288 235.048 292.288Z"
            fill="#2E2EFA"
          />
          <path
            d="M61.026 111H70.962V107.706H65.274V98.4H61.026V111ZM85.3432 111H89.7352L84.2272 98.4H80.0512L74.5432 111H78.8632L79.7092 108.804H84.4972L85.3432 111ZM80.8792 105.744L82.1032 102.576L83.3272 105.744H80.8792ZM109.526 111.288C111.992 111.288 113.936 110.388 115.178 108.768L112.496 106.374C111.758 107.31 110.876 107.85 109.742 107.85C107.978 107.85 106.79 106.626 106.79 104.7C106.79 102.774 107.978 101.55 109.742 101.55C110.876 101.55 111.758 102.09 112.496 103.026L115.178 100.632C113.936 99.012 111.992 98.112 109.526 98.112C105.476 98.112 102.506 100.83 102.506 104.7C102.506 108.57 105.476 111.288 109.526 111.288ZM128.176 98.4V102.864H124.252V98.4H120.004V111H124.252V106.356H128.176V111H132.424V98.4H128.176ZM147.503 111H151.895L146.387 98.4H142.211L136.703 111H141.023L141.869 108.804H146.657L147.503 111ZM143.039 105.744L144.263 102.576L145.487 105.744H143.039ZM162.239 98.4H156.173V111H160.421V107.904H162.239C165.749 107.904 167.981 106.068 167.981 103.152C167.981 100.236 165.749 98.4 162.239 98.4ZM161.969 104.628H160.421V101.676H161.969C163.139 101.676 163.697 102.234 163.697 103.152C163.697 104.07 163.139 104.628 161.969 104.628ZM177.15 107.796V106.14H182.478V103.08H177.15V101.604H183.216V98.4H172.974V111H183.45V107.796H177.15ZM188.685 111H198.621V107.706H192.933V98.4H188.685V111ZM203.395 111H213.331V107.706H207.643V98.4H203.395V111ZM222.28 107.796V106.14H227.608V103.08H222.28V101.604H228.346V98.4H218.104V111H228.58V107.796H222.28ZM65.724 133.288C69.63 133.288 71.592 131.344 71.592 129.04C71.592 124.396 64.626 125.656 64.626 124.144C64.626 123.712 65.022 123.352 66.264 123.352C67.362 123.352 68.532 123.658 69.774 124.288L71.052 121.21C69.738 120.472 67.992 120.112 66.3 120.112C62.394 120.112 60.432 122.02 60.432 124.36C60.432 129.058 67.398 127.78 67.398 129.364C67.398 129.796 66.966 130.048 65.76 130.048C64.374 130.048 62.79 129.598 61.602 128.896L60.234 131.992C61.494 132.766 63.618 133.288 65.724 133.288ZM82.4861 133.288C86.3561 133.288 88.6241 131.11 88.6241 127.33V120.4H84.4481V127.204C84.4481 129.13 83.7101 129.85 82.5221 129.85C81.3341 129.85 80.5961 129.13 80.5961 127.204V120.4H76.3481V127.33C76.3481 131.11 78.6161 133.288 82.4861 133.288ZM101.713 133H106.249L103.603 129.112C105.115 128.338 105.979 126.97 105.979 125.152C105.979 122.236 103.747 120.4 100.237 120.4H94.1713V133H98.4193V129.832H99.5713L101.713 133ZM101.695 125.152C101.695 126.07 101.137 126.628 99.9673 126.628H98.4193V123.676H99.9673C101.137 123.676 101.695 124.234 101.695 125.152ZM124.356 129.796V128.14H129.684V125.08H124.356V123.604H130.422V120.4H120.18V133H130.656V129.796H124.356ZM143.433 133H147.969L145.323 129.112C146.835 128.338 147.699 126.97 147.699 125.152C147.699 122.236 145.467 120.4 141.957 120.4H135.891V133H140.139V129.832H141.291L143.433 133ZM143.415 125.152C143.415 126.07 142.857 126.628 141.687 126.628H140.139V123.676H141.687C142.857 123.676 143.415 124.234 143.415 125.152ZM152.903 133H159.113C163.325 133 166.223 130.606 166.223 126.7C166.223 122.794 163.325 120.4 159.113 120.4H152.903V133ZM157.151 129.688V123.712H158.933C160.715 123.712 161.939 124.774 161.939 126.7C161.939 128.626 160.715 129.688 158.933 129.688H157.151ZM178.916 133H183.452L180.806 129.112C182.318 128.338 183.182 126.97 183.182 125.152C183.182 122.236 180.95 120.4 177.44 120.4H171.374V133H175.622V129.832H176.774L178.916 133ZM178.898 125.152C178.898 126.07 178.34 126.628 177.17 126.628H175.622V123.676H177.17C178.34 123.676 178.898 124.234 178.898 125.152ZM192.563 129.796V128.14H197.891V125.08H192.563V123.604H198.629V120.4H188.387V133H198.863V129.796H192.563Z"
            fill="#2E2EFA"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_111_13"
                transform="scale(0.000439367 0.000506073)"
              />
            </pattern>
            <image
              id="image0_111_13"
              width="2276"
              height="1976"
              href="/img/lieu.jpg"
            />
          </defs>
        </svg>

        <div class="xs:max-w-[68rem]">
          <h2 class="h3 mb-16 xs:mb-32">Le lieu</h2>
          <p class="text">
            <strong>Centre Attitude à La Chapelle sur Erdre</strong>
          </p>
          <p class="text">1er étage à droite au sein de l’Espace Missana</p>
          <p class="text">60 rue du Leinster,</p>
          <p class="text">44240 La Chapelle-sur-Erdre</p>
          <ul class="mt-12 xs:mt-22 list-disc pl-20">
            <li class="mb-12 xs:mb-22">
              <p class="text">
                <strong>A vélo :</strong> le cabinet est à 30min en vélo de
                Nantes centre, sur place vous trouverez un parking vélo.
              </p>
            </li>

            <li class="mb-12 xs:mb-22">
              <p class="text">
                <strong>En transport en commun : </strong>L’arrêt du bus 86
                “Capellia” se trouve à 5min à pied. L’arrêt du tram-train “Erdre
                Active” (ligne Nantes-Châteaubriant) se trouve à 10min à pied.
              </p>
            </li>

            <li class="mb-12 xs:mb-22">
              <p class="text">
                <strong>En voiture : </strong>parking voiture et borne de
                recharge électrique.
              </p>
            </li>
          </ul>
          <p>
            <NuxtLink
              class="arrow-link !text-white"
              to="https://goo.gl/maps/JskwEgqpQQcQJCKN8"
              target="_blank"
            >
              <BaseLink>Voir sur la carte</BaseLink>
            </NuxtLink>
          </p>
        </div>
      </div>
    </section>

    <BlockContact>
      <template v-slot:card>
        <div class="wrapper -mt-[11rem] xs:-mt-[13rem] bg-transparent">
          <Card class="bg-white text-[#1617C6]">
            <h2 class="h2 text-center mb-15 xs:mb-30">Accessibilité</h2>
            <p class="max-w-[76rem] text text-center mb-22 xs:mb-46 mx-auto">
              Les séances s’adaptent à vos besoins : les bilans peuvent<br />
              se réaliser en partie ou en totalité à distance.<br />
              Le cabinet est accessible aux personnes à mobilité réduite.<br />
              Pour toute question ou aménagement, n'hésitez pas à me contacter.
            </p>
            <div class="text-center">
              <NuxtLink
                class="button-link button-link--alt"
                to="mailto:lysiane.brand@gmail.com?subject=Accessibilité"
              >
                <BaseLink>Envoyer un email</BaseLink>
              </NuxtLink>
            </div>
          </Card>
        </div>
      </template>
      <template v-slot:content></template>
    </BlockContact>
  </article>
</template>
