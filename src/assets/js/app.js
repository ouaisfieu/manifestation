// 23·11 — Le dossier · amélioration progressive, aucune dépendance, aucun traceur.
(function () {
  "use strict";
  var root = document.documentElement;

  // Thème clair/sombre
  var toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var dark = root.dataset.theme
        ? root.dataset.theme === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    });
  }

  // Comptes à rebours
  var lang = (root.lang || "fr").slice(0, 2);
  var words = {
    fr: { d: "j", h: "h", m: "min", until: "Départ dans", live: "La manifestation est en cours.", done: "La manifestation a eu lieu — voir le suivi" },
    nl: { d: "d", h: "u", m: "min", until: "Vertrek over", live: "De betoging is bezig.", done: "De betoging vond plaats — zie de opvolging" },
    en: { d: "d", h: "h", m: "min", until: "Starts in", live: "The demonstration is under way.", done: "The demonstration has taken place — see follow-up" }
  }[lang] || {};

  function parts(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60) };
  }
  function tick() {
    var now = Date.now();
    document.querySelectorAll("[data-countdown]").forEach(function (el) {
      var start = Date.parse(el.dataset.countdown);
      var end = start + 3 * 3600 * 1000;
      if (now >= end) {
        var url = el.dataset.doneUrl;
        el.innerHTML = url ? '<a href="' + url + '">' + words.done + "</a>" : words.done;
      } else if (now >= start) {
        el.textContent = words.live;
      } else {
        var p = parts(start - now);
        el.textContent = words.until + " " + p.d + " " + words.d + " " + p.h + " " + words.h + " " + p.m + " " + words.m;
      }
    });
    document.querySelectorAll("[data-countdown-grid]").forEach(function (el) {
      var start = Date.parse(el.dataset.countdownGrid);
      if (now >= start) { el.hidden = true; return; }
      var p = parts(start - now);
      ["d", "h", "m"].forEach(function (k) {
        var b = el.querySelector('[data-k="' + k + '"]');
        if (b) b.textContent = String(p[k]).padStart(2, "0");
      });
      el.hidden = false;
    });
  }
  tick();
  setInterval(tick, 30000);

  // Filtres (acteurs, sources)
  document.querySelectorAll("[data-filter-group]").forEach(function (group) {
    var target = document.querySelector(group.dataset.filterGroup);
    if (!target) return;
    group.hidden = false;
    group.addEventListener("click", function (ev) {
      var btn = ev.target.closest("button[data-filter]");
      if (!btn) return;
      group.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      var f = btn.dataset.filter;
      var n = 0;
      target.querySelectorAll("[data-cat]").forEach(function (item) {
        var show = f === "all" || item.dataset.cat.split(" ").indexOf(f) !== -1;
        item.hidden = !show;
        if (show) n++;
      });
      var live = document.querySelector(group.dataset.filterLive);
      if (live) live.textContent = n + " élément" + (n > 1 ? "s" : "") + " affiché" + (n > 1 ? "s" : "");
    });
    // Filtre initial via ?type=… (ex. /sources/?type=presse)
    try {
      var q = new URLSearchParams(location.search).get("type");
      var pre = q && group.querySelector('button[data-filter="' + q.replace(/[^a-z]/g, "") + '"]');
      if (pre) pre.click();
    } catch (e) {}
  });
})();
