---
title: "Chronologie : près de deux ans de mobilisation"
kicker: "Le cycle 2025–2026"
description: "Des manifestations de février 2025 à celle du 23 novembre 2026 : chronologie du cycle de mobilisation contre la politique du gouvernement De Wever, avec les chiffres d'affluence."
lede: "Le 23 novembre est au moins la onzième action en front commun depuis février 2025. Pour le comprendre, il faut le replacer dans ce cycle."
readingTime: "6 min"
toc:
  - ["affluence", "L'affluence comparée"]
  - ["cycle", "Le cycle, date par date"]
  - ["lecture", "Ce que montre la séquence"]
next: ["/acteurs/", "Les acteurs"]
---

## L'affluence comparée {:#affluence}

L'affluence sera l'indicateur le plus commenté le soir du 23 novembre. Seules les manifestations nationales pour lesquelles nos sources donnent un chiffre figurent ici. Pour comparer, il faut toujours comparer des chiffres de **même origine** : police avec police, organisateurs avec organisateurs.

{% set maxv = 100000 %}
<div class="table-wrap wide bars">
<table>
<caption>Participants aux manifestations nationales à Bruxelles</caption>
<thead><tr><th scope="col">Date</th><th scope="col" class="num">Police</th><th scope="col" class="num">Organisateurs</th><th scope="col"><span class="visually-hidden">Graphique</span></th></tr></thead>
<tbody>
{%- for m in mobilisations %}{% if m.police or m.aVenir and m.label == "Manifestation nationale en front commun" %}
<tr>
<th scope="row">{{ m.date | frDate }}</th>
<td class="num">{% if m.aVenir %}<span class="pill pill--avenir">à venir</span>{% else %}{{ m.police | fmtNum }}{% endif %}</td>
<td class="num">{% if m.organisateurs %}{% if m.date == "2026-03-12" %}&gt; {% endif %}{{ m.organisateurs | fmtNum }}{% elif not m.aVenir %}n. c.{% endif %}</td>
<td class="bar" aria-hidden="true"><span class="bar__track">{% if m.police %}<span class="bar__fill bar__fill--police" style="width:{{ m.police | pct(maxv) }}%"></span>{% endif %}{% if m.organisateurs %}<span class="bar__fill bar__fill--orga" style="width:{{ m.organisateurs | pct(maxv) }}%"></span>{% endif %}</span></td>
</tr>
{%- endif %}{% endfor %}
</tbody>
</table>
<p class="legend"><span class="l-police">Police</span><span class="l-orga">Organisateurs</span><span>n. c. : non communiqué dans nos sources. Sources : RTBF, VRT NWS, À l'encontre{% s "rtbf-9oct", "rtbf-12mars", "vrt-12mei-bilan", "alencontre" %}</span></p>
</div>

{% note "caveat" %}
Pour le 13 février 2025, le chiffre des organisateurs (100 000) est celui de la FGTB. Pour le 12 mars 2026, la FGTB a annoncé « plus de 100 000 ». Les manifestations du 23 juin et du 14 octobre 2025 sont absentes du graphique : nos sources ne donnent pas leurs chiffres. Le graphique est une échelle de lecture, pas une série complète.
{% endnote %}

## Le cycle, date par date {:#cycle}

<ol class="timeline">
{%- for m in mobilisations %}
  <li class="{% if m.aVenir %}is-future{% elif m.police %}is-key{% endif %}">
    <time datetime="{{ m.date }}">{% if m.dateLabel %}{{ m.dateLabel }}{% else %}{{ m.date | frDate }}{% endif %}</time>
    <div><h3>{{ m.label }} <small>· {{ m.lieu }}</small>{% if m.aVenir %} <span class="pill pill--avenir">à venir</span>{% endif %}</h3>{% if m.note or m.police %}<p>{% if m.police %}{{ m.police | fmtNum }} selon la police{% if m.organisateurs %}, {{ m.organisateurs | fmtNum }} selon les organisateurs{% endif %}. {% endif %}{{ m.note }}{% for id in m.src %}{% s id %}{% endfor %}</p>{% else %}<p>{% for id in m.src %}{% s id %}{% endfor %}</p>{% endif %}</div>
  </li>
{%- endfor %}
</ol>

## Ce que montre la séquence {:#lecture}

**Un mouvement durable et qui s'élargit.** Après les grandes manifestations de 2025, l'année 2026 voit se multiplier les formes d'action : grèves tournantes par province, grève des postiers, mouvement lycéen à partir d'octobre, mobilisations étudiantes{% s "alencontre" %}. Le 17 novembre, l'organisation étudiante flamande VVS manifeste pour la première fois aux côtés de la FEF francophone{% s "bruzz-studenten", "dwm-interview" %}. Les syndicats revendiquent cet élargissement générationnel et associatif pour le 23 novembre{% s "bx1-mobilisation", "levif-annonce" %}.

**Une affluence en baisse… à vérifier.** D'après les chiffres de la police, l'affluence recule depuis mars 2026 : 80 000 le 12 mars, 40 000 le 12 mai, 30 000 le 9 octobre{% s "rtbf-12mars", "vrt-12mei-bilan", "rtbf-9oct" %}. En mai, les syndicats répondaient qu'ils ne « regardent pas les chiffres »{% s "vrt-12mei-bilan" %}. Le 9 octobre, le front était incomplet, sans Synova{% s "bruzz-verspreid" %}. Le retour d'un front complet et l'élargissement associatif devraient peser le 23 novembre, sans qu'on puisse avancer de chiffre. Les syndicats espèrent seulement « dépasser » le 9 octobre{% s "bx1-mobilisation", "lavenir-perturbations" %}.

**Le poids des débordements.** Le 9 octobre, des groupes totalisant « plus d'un millier de personnes » ont commis des dégradations en marge du cortège. Il y a eu plus de 100 arrestations{% s "rtbf-9oct" %}. Le ministre de l'Intérieur a promis une réponse pénale « à la hauteur des dégâts »{% s "bxltoday-quintin" %}. Cet épisode pèse sur le cadrage médiatique du 23 novembre, surtout en Flandre (voir [Médias](/medias/)).

**Peu d'effets sur les grandes réformes.** Le gouvernement n'a pas changé de cap sur l'essentiel{% s "alencontre" %}. Après le 12 mars, Bart De Wever déclarait : « Het is onze plicht om op koers te blijven » (« Notre devoir est de garder le cap »){% s "vrt-12mars" %}.
