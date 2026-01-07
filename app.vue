<template>
  <main>
    <Spritesheet />
    <AppHeader />
    <NuxtPage />

    <AppFooter />
    <FloatingContact />
  </main>
</template>

<script setup>
import { canonicalize, generateJsonLd } from "@/lib/utils";

useHead({
  titleTemplate: (titleChunk) => {
    if (titleChunk?.includes("Lysiane Brand")) return titleChunk;
    return titleChunk
      ? `${titleChunk} — Lysiane Brand`
      : "Lysiane Brand — Psychologue à La Chapelle-sur-Erdre.";
  },
  link: [
    {
      rel: "canonical",
      href: canonicalize("/"),
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://lysianebrand.fr/#website",
      url: "https://lysianebrand.fr/",
      name: "Lysiane Brand",
      description: "Psychologue à la Chapelle sur Erdre",
      inLanguage: "fr",
    },
    {
      "@type": "MedicalBusiness",
      image: "https://lysianebrand.fr/social_new.jpg",
      logo: "https://lysianebrand.fr/apple-touch-icon.png",
      name: "Lysiane Brand",
      url: "https://lysianebrand.fr",
      // sameAs: ["https://www.instagram.com/marge_de_manoeuvre.psy/"], // Removing or updating if new one exists, better comment out for now
      address: {
        "@type": "PostalAddress",
        streetAddress: "60 rue du Leinster",
        addressLocality: "La Chapelle-sur-Erdre",
        addressCountry: "FR",
        addressRegion: "Pays de la Loire",
        postalCode: "44240",
      },
      image: [
        "https://lh5.googleusercontent.com/p/AF1QipOb7tCJWwIFIab62feof7V57oPA4UsqFq9_EPXA=w529-h298-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipPeaQB4MwbxvRFc8M5p_BNoHedm_FLHczNr_6dy=w203-h247-k-no",
      ],
      currenciesAccepted: "EUR",
      telephone: "0674552022",
      email: "lysiane.brand@gmail.com",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 47.279564,
        longitude: -1.552427,
      },
      hasMap: "https://goo.gl/maps/JskwEgqpQQcQJCKN8",
      inLanguage: "fr",
    },
  ],
}));
</script>
