/**
 * Convert the given path  and optional baseURL to the FQDN canonical URL with trailing slash
 * @param {String} path 
 * @param {String} baseURL 
 */
export function canonicalize(path, baseURL = "https://margedemanoeuvre.fr") {
  if (path === "/") {
    return `${baseURL}/`;
  }

  if (path.substr(-1) === "/") {
    return `${baseURL}${path}`;
  }

  return `${baseURL}${path}/`;
};

export function seoTitle(title) {
  return `${title} — Marge de Manœuvre`
}

export function generateJsonLd({ webpage = {}, breadcrumbs = [] }) {
  const compose = {
    webpage: {
      id: `https://margedemanoeuvre.fr${webpage.url ?? '/'}`,
      url: `https://margedemanoeuvre.fr${webpage.url ?? '/'}`,
      name: webpage.name,
      isPartOf: { "@id": `https://margedemanoeuvre.fr/#website` },
    },
    breadcrumbs: {
      id: `https://margedemanoeuvre.fr${webpage.url ? `${webpage.url}` : '/'}#breadcrumb`
    }
  }
  const graph = {
    webpage: {
      "@type": "WebPage",
      "@id": compose.webpage.id,
      url: compose.webpage.url,
      name: compose.webpage.name,
      isPartOf: compose.webpage.isPartOf,
      // breadcrumb: {
      //   "@id": compose.breadcrumbs.id
      // },
      datePublished: "2022-11-25T12:30:00+01:00",
      dateModified: "2024-04-05T12:30:00+01:00",
      inLanguage: "fr",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [compose.webpage.url],
        },
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      // "@id": `${compose.webpage.url}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://margedemanoeuvre.fr/",
        },
        ...breadcrumbs.map((b, index) => ({
          "@type": "ListItem",
          position: index + 2,
          name: b.name,
          item: b.item
        }))
      ],
    },

  }

  if (webpage.datePublished) {
    graph.webpage.datePublished = webpage.datePublished
  }
  if (webpage.dateModified) {
    graph.webpage.dateModified = webpage.dateModified
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      graph.webpage,
      graph.breadcrumb,
    ],
  }

  return jsonLd
}