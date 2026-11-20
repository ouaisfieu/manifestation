---
title: "Contexte : une manifestation face à un gouvernement en sursis"
kicker: "Enjeux politiques"
description: "Pourquoi le 23 novembre ? Crise budgétaire de la coalition Arizona, démission refusée de Bart De Wever, rapport au Roi le jour de la manifestation."
lede: "Les syndicats manifestent contre un gouvernement en sursis, pas contre un budget déjà adopté. C'est ce qui fait le poids et l'ambiguïté de la journée."
readingTime: "9 min"
toc:
  - ["coincidence", "Une date qui coïncide avec le Palais"]
  - ["arizona", "La coalition Arizona et ses réformes"]
  - ["crise", "Novembre 2026 : la crise budgétaire"]
  - ["blocages", "Ce qui bloque"]
  - ["pression", "Sur qui pèse la rue ?"]
  - ["scenarios", "Quatre scénarios"]
next: ["/chronologie/", "Chronologie des mobilisations"]
---

## Une date qui coïncide avec le Palais {:#coincidence}

Le lundi 23 novembre 2026, le front commun syndical (CSC, FGTB et Synova) manifeste à Bruxelles, entre la gare du Nord et la gare du Midi{% s "csc-appel", "fgtb-appel", "synova-appel" %}. Le même jour, le Premier ministre Bart De Wever doit faire rapport au Roi sur des négociations budgétaires toujours bloquées{% s "lavenir-budget-roi", "bruzz-roi" %}.

Ce n'était pas prévu ainsi. Les syndicats ont fixé leur date le 21 octobre{% s "lalibre-annonce" %}. Le Palais a fixé la sienne le 16 novembre, après l'échec d'un nouveau tour de négociations{% s "bx1-roi" %}. Mais cette coïncidence change le sens de la journée. Pour les syndicats, manifester ce jour-là vise à empêcher un accord bouclé aux dépens des salariés et des allocataires{% s "mobilisation", "dwm-interview" %}. Pour l'organisation patronale flamande Voka, c'est au contraire la preuve qu'on manifeste « sans plan sérieux », alors qu'aucune décision n'est prise et que le gouvernement pourrait ne plus exister lundi{% s "voka-betoging" %}.

{% note "info", "Un précédent" %}
En 2025, l'accord budgétaire 2026 a été conclu le 24 novembre, premier jour d'une grève de trois jours{% s "lavenir-budget-roi" %}. Plusieurs observateurs se demandent donc si un accord peut à nouveau tomber le jour même d'une grande action syndicale.
{% endnote %}

## La coalition Arizona et ses réformes {:#arizona}

Le gouvernement fédéral dirigé par Bart De Wever (N-VA) est en place depuis le 3 février 2025. Il réunit N-VA, MR, Les Engagés, CD&V et Vooruit, soit 81 sièges sur 150{% s "wiki-gov" %}. Depuis le début, plusieurs de ses réformes nourrissent la contestation :

- **Pensions** : instauration d'un malus en cas de départ anticipé, réforme des régimes de la fonction publique, des enseignants et des cheminots.
- **Chômage** : limitation des allocations dans le temps, à deux ans au maximum en règle générale{% s "onem", "vrt-stemming-2025" %}.
- **Marché du travail** : annualisation du temps de travail, assouplissement des ouvertures dominicales{% s "vrt-12mei" %}.
- **Indexation** : adoption du « centenindex », qui plafonne l'indexation des salaires les plus élevés, lors de la crise budgétaire de novembre 2025{% s "lavenir-6nov", "thinkabvv" %}.

Selon le sociologue Mateo Alaluf (ULB), le gouvernement n'a, à ce stade, presque « rien lâché » sur l'essentiel de ces réformes, en dehors de concessions marginales{% s "alencontre" %}. Le politologue Jean Faniel (CRISP) parle d'un « cycle de protestations »{% s "lavenir-cycle" %}. Ces deux constats ne se contredisent pas : le mouvement dure et rajeunit, mais son effet direct sur les grandes réformes reste faible. La [chronologie](/chronologie/) retrace ce cycle.

## Novembre 2026 : la crise budgétaire {:#crise}

<ol class="timeline">
{%- for e in crise %}
  <li class="{% if e.aVenir %}is-future{% elif e.date == '2026-11-16' or e.date == '2026-11-06' %}is-key{% endif %}">
    <time datetime="{{ e.date }}">{{ e.date | frDate }}</time>
    <div><h3>{{ e.titre }}{% if e.aVenir %} <span class="pill pill--avenir">à venir</span>{% endif %}</h3><p>{{ e.texte }}{% for id in e.src %}{% s id %}{% endfor %}</p></div>
  </li>
{%- endfor %}
</ol>

L'objectif est un effort d'environ 10 milliards d'euros d'ici 2029, avec un déficit public attendu au-dessus de 5 % du PIB{% s "afp-sursis" %}. La FEB avertit que la Belgique pourrait avoir en 2027 le pire déficit de la zone euro, sous l'effet des charges d'intérêts et des dépenses de défense{% s "feb-lanterne" %}.

## Ce qui bloque {:#blocages}

Les points de friction connus au 20 novembre suivent une ligne de fracture interne à la majorité :

<div class="table-wrap wide">
<table>
<caption>Positions rapportées au sein de la majorité (au 20 novembre)</caption>
<thead><tr><th scope="col">Dossier</th><th scope="col">Ce qui est sur la table</th><th scope="col">Qui pousse, qui résiste</th></tr></thead>
<tbody>
<tr><th scope="row">TVA</th><td>Une hausse a été envisagée, puis abandonnée.</td><td>Abandon obtenu par le MR (Georges-Louis Bouchez){% s "moustique" %}</td></tr>
<tr><th scope="row">Index</th><td>Limitation de l'indexation : une piste porterait son rendement de 800 millions à 1,2 milliard d'euros.</td><td>Vooruit refuse les non-indexations. Les Engagés proposent une indexation harmonisée, une fois par an{% s "lalibre-kern", "rtbf-transports" %}</td></tr>
<tr><th scope="row">Jours fériés</th><td>Suppression de la récupération des jours fériés tombant un week-end.</td><td>Ligne rouge syndicale, dénoncée par Ann Vermorgen (CSC){% s "rtbf-transports", "dwm-interview" %}</td></tr>
<tr><th scope="row">Capital et patrimoines</th><td>Une contribution des « épaules les plus larges » : 1,1 milliard selon la proposition attribuée à De Wever, au moins 1,5 milliard selon Vooruit (chiffres rapportés par le PTB).</td><td>N-VA et MR s'opposent aux hausses d'impôt sur le capital. Vooruit réclame environ 1 milliard de recettes supplémentaires{% s "ptb", "moustique" %}</td></tr>
<tr><th scope="row">Soins de santé</th><td>Économies dans l'assurance maladie.</td><td>Vooruit (Frank Vandenbroucke) s'y oppose{% s "moustique", "bruzz-roi" %}</td></tr>
</tbody>
</table>
</div>

Le 20 novembre, Conner Rousseau (Vooruit) confirme un contact avec la présidente de la N-VA, Valerie Van Peel. Il dit attendre un appel du Premier ministre et vouloir un accord « plus équitable »{% s "lavenir-contact" %}. L'hypothèse de remplacer Vooruit par Anders (ex-Open VLD) circule. La RTBF la juge « politiquement et mathématiquement fragile »{% s "rtbf-anders", "businessam" %}. Côté opposition, une motion de méfiance a été annoncée{% s "bt-motion" %}.

## Sur qui pèse la rue ? {:#pression}

{% note "lecture" %}
Le désaccord entre syndicats et gouvernement porte moins sur la nécessité d'un effort que sur sa **répartition** : entre travail et capital, entre baisse des dépenses et hausse des recettes. Or c'est exactement la ligne qui divise la majorité, entre N-VA et MR d'un côté, Vooruit et, sur certains points, Les Engagés de l'autre. On peut donc faire l'hypothèse que la manifestation pèse surtout sur ces partenaires, et en particulier sur Vooruit. C'est une lecture d'analyste, pas un fait établi : aucun de ces partis n'a lié publiquement sa position à la manifestation.
{% endnote %}

Deux indices seront à observer le 23 novembre : l'affluence, comparée aux 30 000 participants du 9 octobre et aux 80 000 du 12 mars (chiffres de la police){% s "rtbf-9oct", "rtbf-12mars" %}, et la réaction de Vooruit et des Engagés à l'issue de l'audience royale. La page [Après le 23](/apres/) les rassemble.

## Quatre scénarios {:#scenarios}

1. **Un accord autour du 23 novembre**, comme en 2025. Les syndicats évalueront alors les mesures sur l'index, les jours fériés et la fiscalité. Si une ligne rouge est franchie, une escalade est probable en décembre. Le mandat de grève générale de la FGTB pourrait alors être activé{% s "fgtb-actions", "dwm-interview" %}.
2. **Une nouvelle prolongation** de la mission du Premier ministre, avec des douzièmes provisoires dès janvier 2027{% s "lalibre-douziemes" %}. La pression de la rue se maintient jusqu'aux rendez-vous des 27 novembre et 10 décembre.
3. **Une recomposition de la majorité**, par exemple avec Anders à la place de Vooruit. Cette hypothèse est jugée fragile{% s "rtbf-anders" %}.
4. **La chute du gouvernement et des élections anticipées.** Le SPF Intérieur a écrit aux communes à ce sujet, même si le cabinet affirme que ce courrier est sans lien avec l'actualité{% s "lalibre-elections" %}.

{% note "caveat" %}
Ces scénarios décrivent des possibles évoqués par la presse et les acteurs. Ce ne sont pas des prévisions. Ce dossier ne se prononce pas sur leur probabilité.
{% endnote %}
