import { Feed } from 'feed';

const BASE_URL = "https://margedemanoeuvre.fr/"
const AUTHOR_NAME = "Lysiane Brand"

async function fetchStories(version) {
  const params = new URLSearchParams({
    token: process.env.STORYBLOK_ACCESS_TOKEN,
    starts_with: 'blog/',
    version: version
  })
  const endpoint = `https://api.storyblok.com/v2/cdn/stories?${params.toString()}`
  const response = await fetch(endpoint, { headers: { 'Content-Type': 'application/json', "Accept": 'application/json' } })
  const data = await response.json()
  return data.stories
}

function fqdn(url) {
  return `${BASE_URL}${url}`
}

export default defineEventHandler(async (event) => {
  const feed = new Feed({
    title: "margedemanoeuvre.fr",
    description: "Blog de Marge de manœuvre",

    id: BASE_URL,
    link: BASE_URL,
    language: "fr",
    image: `${BASE_URL}/social_new.jpg`,
    favicon: `${BASE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${AUTHOR_NAME}`,
    updated: new Date(),
    generator: "Nuxt static site generation + Feed for Node.js",
    feedLinks: {
      atom: `${BASE_URL}atom.xml`
    },
    author: {
      name: AUTHOR_NAME,
    }
  });

  const config = useRuntimeConfig();
  const stories = await fetchStories(config.storyblokVersion)

  stories.forEach((article) => {
    feed.addItem({
      title: article.name ? article.name : "Missing Title",
      id: fqdn(article.full_slug),
      link: `${BASE_URL}/${article.full_slug}`,
      description: article.content.description,
      author: [
        {
          name: AUTHOR_NAME,
        },
      ],
      date: new Date(article.first_published_at),
      image: article.content.cover.filename ? `${BASE_URL}/${article.content.cover.filename}` : undefined
    });
  });

  const feedString = feed.atom1();

  setHeader(event, 'content-type', 'text/xml');

  return feedString;
});