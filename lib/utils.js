/**
 * Convert the given path  and optional baseURL to the FQDN canonical URL with trailing slash
 * @param {String} path 
 * @param {String} baseURL 
 */
export function canonicalize(path, baseURL = "https://lysianebrand-psychologue.fr") {
  if (path === "/") {
    return `${baseURL}/`;
  }

  if (path.substr(-1) === "/") {
    return `${baseURL}${path}`;
  }

  return `${baseURL}${path}/`;
};

export function seoTitle(title) {
  return `${title} — Lysiane Brand`
}

export function generateJsonLd({ webpage = {}, breadcrumbs = [] }) {
  const compose = {
    webpage: {
      id: `https://lysianebrand-psychologue.fr${webpage.url ?? '/'}`,
      url: `https://lysianebrand-psychologue.fr${webpage.url ?? '/'}`,
      name: webpage.name,
      isPartOf: { "@id": `https://lysianebrand-psychologue.fr/#website` },
    },
    breadcrumbs: {
      id: `https://lysianebrand-psychologue.fr${webpage.url ? `${webpage.url}` : '/'}#breadcrumb`
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
      datePublished: "2024-01-01T12:00:00+01:00",
      dateModified: new Date().toISOString(),
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
          item: "https://lysianebrand-psychologue.fr/",
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