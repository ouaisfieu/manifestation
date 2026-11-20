// Génère /api/<jeu>.json à partir des fichiers de src/_data
const sets = ["mobilisations", "crise", "acteurs", "chiffres", "perturbations", "sources", "lexique", "bilan", "agenda"];

export const data = {
  pagination: { data: "apiSets", size: 1, alias: "set" },
  apiSets: sets,
  permalink: (d) => `/api/${d.set}.json`,
  eleventyExcludeFromCollections: true,
  layout: false,
};

export function render(d) {
  return JSON.stringify(
    {
      meta: {
        dataset: d.set,
        title: d.site.title,
        source: d.site.url,
        updated: d.site.updated,
        author: d.site.author,
        license: "CC-BY-SA-4.0",
        note: "Les identifiants « src » renvoient à /api/sources.json.",
      },
      data: d[d.set],
    },
    null,
    2
  );
}
