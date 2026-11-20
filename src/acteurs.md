---
title: "Acteurs : qui est dans la rue, qui négocie, qui s'oppose"
kicker: "Cartographie"
description: "Front commun syndical, société civile, partis de la majorité Arizona et de l'opposition, organisations patronales, autorités : qui fait quoi le 23 novembre 2026."
lede: "Un front syndical à nouveau complet, élargi à la société civile, face à une majorité divisée et à un patronat qui conteste l'opportunité même de manifester."
readingTime: "7 min"
toc:
  - ["carte", "Les acteurs, groupe par groupe"]
  - ["front", "Le front commun, au complet"]
  - ["majorite", "Une majorité à quatre contre un"]
  - ["patronat", "Le patronat et la contre-campagne"]
  - ["absents", "Silences et angles morts"]
next: ["/revendications/", "Revendications & chiffres"]
---

## Les acteurs, groupe par groupe {:#carte}

<div class="filters" data-filter-group="#acteurs" data-filter-live="#acteurs-live" hidden role="group" aria-label="Filtrer par catégorie">
<button type="button" data-filter="all" aria-pressed="true">Tous</button>
{%- for c in acteurs.categories %}<button type="button" data-filter="{{ c.id }}" aria-pressed="false">{{ c.label }}</button>{% endfor %}
</div>
<p id="acteurs-live" class="visually-hidden" aria-live="polite"></p>

<div class="cards wide" id="acteurs">
{%- for a in acteurs.items %}
<section class="card" data-cat="{{ a.cat }}" aria-labelledby="a-{{ loop.index }}">
<p class="meta">{% for c in acteurs.categories %}{% if c.id == a.cat %}{{ c.label }}{% endif %}{% endfor %}</p>
<h3 id="a-{{ loop.index }}">{{ a.nom }}</h3>
<p class="meta">{{ a.qui }}</p>
<p>{{ a.role }}{% for id in a.src %}{% s id %}{% endfor %}</p>
</section>
{%- endfor %}
</div>

## Le front commun, au complet {:#front}

Le 9 octobre, la manifestation était portée par la FGTB, soutenue par la CSC, sans Synova{% s "bruzz-verspreid", "vrt-annonce-fr" %}. Le 23 novembre, les trois organisations appellent ensemble{% s "csc-appel", "fgtb-appel", "synova-appel" %}. Ce retour compte, et pas seulement pour l'affluence.

**Synova** est le nouveau nom, depuis le 30 mai 2026, de l'ancienne CGSLB/ACLVB{% s "synova-nom", "wiki-synova" %}. Le syndicat se présente comme réformiste et attaché au dialogue social. Sa participation signale que la contestation dépasse les syndicats traditionnellement les plus combatifs. Son président Gert Truyens ne conteste pas tant le principe d'un effort que la **méthode** : un délai accordé par le Roi n'a de sens, selon lui, que si le gouvernement associe enfin les partenaires sociaux au lieu de multiplier les « faits accomplis »{% s "synova-methode" %}. Synova porte aussi des revendications propres, comme une meilleure intervention dans les frais de déplacement domicile-travail et le maintien des écochèques{% s "bx1-synova", "synova-ecocheques" %}.

**L'élargissement est voulu.** Les syndicats ont changé de ton depuis le 9 octobre. Au mot d’ordre défensif « Stop à l’Arizona »{% s "fgtb-lux" %} succède un slogan positif : construire l’avenir ensemble, ne pas le subir{% s "csc-appel", "fgtb-appel" %}. L'appel associe explicitement les mutualités, les associations de lutte contre la pauvreté, les mouvements de jeunesse, environnementaux, culturels, féministes et pacifistes{% s "bx1-mobilisation", "levif-annonce", "cncd", "solidaris" %}. Un concert militant de l'« Orchestre du Plat Pays » est annoncé place Rogier à 11h{% s "rtbf-transports" %}.

{% note "caveat" %}
La stratégie reste celle d'une **manifestation** et non d'une grève générale. Le mandat de grève générale que la FGTB s'était donné en septembre ne sera activé que si des « lignes rouges » sont franchies dans un budget, qui n'existe pas encore{% s "fgtb-actions", "dh-9oct" %}.
{% endnote %}

## Une majorité à quatre contre un {:#majorite}

Au kern du 15 novembre, la N-VA, le MR, Les Engagés et le CD&V ont accepté une nouvelle proposition du Premier ministre. Vooruit l'a refusée{% s "bruzz-roi", "lalibre-kern" %}. Le 18 novembre, Bart De Wever a poursuivi les discussions bilatérales sans Vooruit{% s "levif-vooruit" %}. Les socialistes flamands refusent les non-indexations et les coupes en soins de santé. Ils réclament une contribution plus forte des grands patrimoines{% s "moustique", "lavenir-contact" %}. Le MR, lui, refuse toute nouvelle taxe{% s "moustique" %}.

Le gouvernement n'a pas réagi officiellement à l'appel du 23 novembre dans les sources consultées. Sa ligne générale reste celle exprimée après la manifestation du 12 mars : garder le cap{% s "vrt-12mars" %}.

**L'opposition** est divisée dans son rapport à la rue. Le PS et le PTB appellent à manifester{% s "ps", "ptb" %}. Ecolo dit avoir « des propositions » et l'opposition annonce une motion de méfiance{% s "rtbf-transports", "bt-motion" %}. Le Vlaams Belang critique « l'échec » du gouvernement tout en se méfiant des syndicats{% s "vrt-live-vb", "vrt-12mei-bilan" %}. Anders reproche à l'alternative syndicale de se réduire à « 21 milliards de taxes supplémentaires »{% s "lavenir-audition" %}.

## Le patronat et la contre-campagne {:#patronat}

Les organisations patronales ne parlent pas d'une seule voix sur le fond, mais convergent sur le message. **Voka** conteste l'opportunité même d'une manifestation sans décision budgétaire{% s "voka-betoging" %}. Elle juge les exigences fiscales syndicales irréalistes : selon elle, les recettes sur le patrimoine atteignent déjà environ 25 milliards d'euros{% s "voka-onrealistisch" %}. **La FEB** appelle à éviter une crise politique, plaide pour un plan de croissance et un « pacte » à trois (gouvernement, employeurs, syndicats){% s "feb-tango", "feb-groeiplan" %}. **Voka et Unizo** mènent la campagne « Ik steun ondernemerschap » contre toute nouvelle taxe sur l'entrepreneuriat. Ils présentent sa participation comme équivalente à l'affluence d'une manifestation syndicale{% s "voka-unizo-actie" %}.

## Silences et angles morts {:#absents}

- **Aucune réaction de l'UCM**, l'organisation des indépendants francophones, n'a été trouvée.
- **Groen** n'a pas pris de position propre sur le 23 novembre dans nos sources.
- Les **ministres** ne se sont pas exprimés publiquement sur cette manifestation précise avant le 20 novembre.
- La composition réelle du cortège (part des non-syndiqués, des jeunes, des associations) reste à documenter le jour même. C'est un des [critères](/medias/#criteres) proposés pour juger la couverture.
