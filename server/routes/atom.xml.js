import { Feed } from 'feed';

const BASE_URL = "https://lysianebrand-psychologue.fr/"
const AUTHOR_NAME = "Lysiane Brand"

// Static definition of site pages usually important for a feed (or sitemap)
const pages = [
  {
    title: "Psychologie Clinique",
    slug: "psychologie",
    description: "Séances de psychologie clinique pour adultes à La Chapelle-sur-Erdre."
  },
  {
    title: "Thérapie EMDR",
    slug: "therapie-emdr",
    description: "Thérapie EMDR pour le traitement des traumatismes et perturbations émotionnelles."
  },
  {
    title: "Souffrance au Travail",
    slug: "souffrance-travail-nantes",
    description: "Accompagnement spécialisé pour la souffrance au travail et le burn-out."
  },
  {
    title: "Qui suis-je ?",
    slug: "qui-suis-je",
    description: "Présentation de Lysiane Brand, psychologue clinicienne."
  },
  {
    title: "Contact",
    slug: "contact",
    description: "Prendre rendez-vous ou contacter le cabinet."
  }
]

function fqdn(url) {
  return `${BASE_URL}${url}`
}

export default defineEventHandler(async (event) => {
  const feed = new Feed({
    title: "Lysiane Brand - Psychologue",
    description: "Actualités et pages du cabinet de psychologie de Lysiane Brand",

    id: BASE_URL,
    link: BASE_URL,
    language: "fr",
    image: `${BASE_URL}social_new.jpg`,
    favicon: `${BASE_URL}favicon.ico`,
    copyright: `Tous droits réservés ${new Date().getFullYear()}, ${AUTHOR_NAME}`,
    updated: new Date(),
    generator: "Nuxt static site generation",
    feedLinks: {
      atom: `${BASE_URL}atom.xml`
    },
    author: {
      name: AUTHOR_NAME,
    }
  });

  pages.forEach((page) => {
    feed.addItem({
      title: page.title,
      id: fqdn(page.slug),
      link: `${BASE_URL}${page.slug}`,
      description: page.description,
      author: [
        {
          name: AUTHOR_NAME,
        },
      ],
      date: new Date(), // Static pages are "current"
      // image: ... if we had specific images for each page
    });
  });

  const feedString = feed.atom1();

  setHeader(event, 'content-type', 'text/xml');

  return feedString;
});