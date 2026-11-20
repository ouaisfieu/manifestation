export const data = { permalink: "/api/index.json", eleventyExcludeFromCollections: true, layout: false };
export function render(d) {
  const sets = ["mobilisations", "crise", "acteurs", "chiffres", "perturbations", "sources", "lexique", "bilan", "agenda"];
  return JSON.stringify({
    title: d.site.title, updated: d.site.updated, license: "CC-BY-SA-4.0",
    endpoints: Object.fromEntries(sets.map((s) => [s, new URL(`api/${s}.json`, d.site.url).href])),
    ics: new URL("agenda.ics", d.site.url).href, feed: new URL("feed.xml", d.site.url).href,
  }, null, 2);
}
