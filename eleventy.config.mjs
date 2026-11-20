import { HtmlBasePlugin } from "@11ty/eleventy";
import fs from "node:fs";
import markdownItAttrs from "markdown-it-attrs";
import markdownIt from "markdown-it";

const mdInline = markdownIt({ html: true, typographer: false });

const sources = JSON.parse(fs.readFileSync("src/_data/sources.json", "utf8"));
const sourceIndex = new Map(sources.map((s, i) => [s.id, { ...s, n: i + 1 }]));

const esc = (str = "") =>
  String(str).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.amendLibrary("md", (md) => md.use(markdownItAttrs, { leftDelimiter: "{:", rightDelimiter: "}" }));

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/downloads": "telechargements" });

  // Appel de source : {% s "id1", "id2" %} → [3][7] reliés à /sources/
  eleventyConfig.addShortcode("s", (...ids) => {
    const parts = ids.map((id) => {
      const src = sourceIndex.get(id);
      if (!src) throw new Error(`Source inconnue : ${id}`);
      return `<a href="/sources/#${src.id}" title="${esc(src.publisher + " — " + src.title)}">${src.n}</a>`;
    });
    return `<sup class="ref">[${parts.join(", ")}]</sup>`;
  });

  // Bloc « statut » d'une information : confirmé / annoncé / estimation / non vérifié
  eleventyConfig.addPairedShortcode("note", (content, kind = "info", label = "") => {
    const labels = { info: "À savoir", caveat: "Prudence", method: "Méthode", lecture: "Lecture proposée" };
    const body = mdInline.render(content.trim()).replace(/\n+/g, "\n").trim();
    return `<aside class="note note--${kind}" role="note"><p class="note__label">${label || labels[kind] || kind}</p>${body}</aside>`;
  });

  eleventyConfig.addFilter("source", (id) => sourceIndex.get(id));
  eleventyConfig.addFilter("fmtNum", (n) =>
    n == null ? "—" : new Intl.NumberFormat("fr-BE").format(n).replace(/\u202f/g, "\u00a0")
  );
  eleventyConfig.addFilter("pct", (n, max) => (n == null || !max ? 0 : Math.round((n / max) * 1000) / 10));
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("frDate", (d) =>
    new Intl.DateTimeFormat("fr-BE", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Brussels" }).format(new Date(d))
  );
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v, null, 2));
  eleventyConfig.addFilter("where", (arr, key, val) => (arr || []).filter((x) => x[key] === val));
  eleventyConfig.addFilter("absUrl", (path, base) => new URL(path.replace(/^\//, ""), base).href);
  eleventyConfig.addFilter("icsEsc", (s = "") => String(s).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n"));
  eleventyConfig.addFilter("xmlEsc", esc);

  eleventyConfig.addTransform("ics-crlf", function (content) {
    return (this.page.outputPath || "").endsWith(".ics") ? content.replace(/\r?\n/g, "\r\n") : content;
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    pathPrefix: "/manifestation/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html", "11ty.js"],
  };
}
