---
title: "Infos pratiques : parcours, horaires, transports, droits"
kicker: "Lundi 23 novembre"
description: "Parcours de la manifestation nationale du 23 novembre 2026 (gare du Nord → gare du Midi), horaires, fermetures de voiries, perturbations STIB, De Lijn, TEC, SNCB, droits des participants."
lede: "Rassemblement dès 10h boulevard Roi Albert II, départ vers 11h, arrivée vers 13h à la gare du Midi. Pas de grève à la SNCB, mais de fortes perturbations à la STIB."
readingTime: "5 min"
toc:
  - ["deroule", "Déroulé et parcours"]
  - ["perturbations", "Transports et services"]
  - ["droits", "Droits des participants"]
  - ["precautions", "Précautions"]
next: ["/apres/", "Après le 23 : quoi suivre"]
---

{% note "caveat", "Informations au 20 novembre" %}
Vérifiez le jour même auprès des opérateurs : la STIB confirme ses lignes lundi peu avant 6h, De Lijn publie un horaire adapté samedi soir{% s "rtbf-transports" %}. Cette page n'est pas mise à jour en temps réel.
{% endnote %}

## Déroulé et parcours {:#deroule}

<div class="table-wrap">
<table>
<caption>Horaires annoncés</caption>
<thead><tr><th scope="col">Heure</th><th scope="col">Ce qui se passe</th></tr></thead>
<tbody>
<tr><th scope="row" class="num">dès 9h</th><td>Début des mesures de circulation. Fermeture du boulevard du Jardin Botanique{% s "rtbf-police", "ville-bxl" %}</td></tr>
<tr><th scope="row" class="num">9h30</th><td>Accueil des participants pour certaines centrales, notamment l'enseignement{% s "acv-coc" %}</td></tr>
<tr><th scope="row" class="num">10h</th><td>Rassemblement boulevard Roi Albert II, près de la gare du Nord, avec des prises de parole. Fermeture des tunnels Reyers et Cinquantenaire{% s "rtbf-police", "lalibre-police" %}</td></tr>
<tr><th scope="row" class="num">11h</th><td>Départ du cortège. Concert de l'Orchestre du Plat Pays place Rogier{% s "rtbf-transports", "lalibre-mobilisation" %}</td></tr>
<tr><th scope="row" class="num">≈ 13h</th><td>Arrivée esplanade de l'Europe, gare du Midi{% s "lalibre-mobilisation" %}</td></tr>
<tr><th scope="row" class="num">jusqu'à 15h</th><td>Levée progressive des mesures de police{% s "rtbf-police" %}</td></tr>
</tbody>
</table>
</div>

<figure class="route wide">
<svg viewBox="0 0 760 300" role="img" aria-labelledby="route-t route-d">
<title id="route-t">Schéma indicatif du parcours</title>
<desc id="route-d">Départ boulevard Roi Albert II à la gare du Nord, passage par le boulevard du Jardin Botanique puis la petite ceinture, arrivée esplanade de l'Europe à la gare du Midi. Point de ralliement du PS place Surlet de Chokier.</desc>
<path class="r-line" d="M90 60 C 200 60, 260 70, 330 95 S 520 120, 600 160 S 640 240, 560 250 S 300 255, 150 245" fill="none" stroke-width="7" stroke-linecap="round" stroke-dasharray="1 0"/>
<circle cx="90" cy="60" r="11" fill="var(--ink)"/><circle cx="150" cy="245" r="11" fill="var(--accent)"/>
<circle cx="250" cy="66" r="6" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
<circle cx="440" cy="106" r="6" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
<text x="90" y="34" text-anchor="middle" font-weight="700" font-size="15">Gare du Nord</text>
<text x="90" y="90" text-anchor="middle" font-size="12" class="r-muted">bd Roi Albert II · 10h</text>
<text x="250" y="48" text-anchor="middle" font-size="12">Rogier · concert 11h</text>
<text x="330" y="128" text-anchor="middle" font-size="12" class="r-muted">bd du Jardin Botanique</text>
<text x="440" y="88" text-anchor="middle" font-size="12">Surlet de Chokier (PS)</text>
<text x="650" y="205" text-anchor="start" font-size="12" class="r-muted">petite ceinture</text>
<text x="150" y="282" text-anchor="middle" font-weight="700" font-size="15">Gare du Midi</text>
<text x="150" y="222" text-anchor="middle" font-size="12" class="r-muted">esplanade de l'Europe · ≈ 13h</text>
</svg>
<figcaption>Schéma indicatif, pas à l'échelle et sans valeur de plan. Nos sources indiquent seulement un passage par le boulevard du Jardin Botanique et la petite ceinture{% s "rtbf-police", "lalibre-police" %}, avec un point de ralliement du PS place Surlet de Chokier{% s "ps" %}. Le tracé détaillé est celui de la Ville et de la police{% s "ville-bxl" %}.</figcaption>
</figure>

## Transports et services {:#perturbations}

<div class="table-wrap wide">
<table>
<caption>Perturbations annoncées au 20 novembre</caption>
<thead><tr><th scope="col">Secteur</th><th scope="col">Niveau</th><th scope="col">Situation</th><th scope="col">Conseil</th></tr></thead>
<tbody>
{%- for p in perturbations %}
<tr><th scope="row">{{ p.secteur }}</th><td><span class="pill pill--{{ p.niveau }}">{{ p.niveau }}</span></td><td>{{ p.situation }}{% for id in p.src %}{% s id %}{% endfor %}</td><td>{{ p.conseil }}</td></tr>
{%- endfor %}
</tbody>
</table>
</div>

## Droits des participants {:#droits}

{% note "caveat", "Pas un avis juridique" %}
Ce qui suit résume les informations publiées par les syndicats, les secrétariats sociaux et les administrations. Pour une situation précise, adressez-vous à votre délégation syndicale ou à votre service du personnel.
{% endnote %}

- **Le préavis de grève couvre la participation.** L'absence pour participer à l'action est traitée comme une absence pour grève. Elle n'est donc pas payée par l'employeur, mais elle est protégée. Cela vaut aussi pour les équipes qui commencent le 22 au soir ou finissent dans la nuit du 23 au 24{% s "fedustria", "cessoc", "attentia" %}.
- **Indemnité de grève** : les affiliés peuvent recevoir une indemnité de leur syndicat, à condition de s'enregistrer sur place ou de remettre une carte d'action. Les modalités varient selon la centrale. À la STIB, par exemple, la CGSP annonce une indemnité de 40 € avec un repas et un complément{% s "acv-coc", "cgsp-stib" %}. Le billet de train est souvent pris en charge pour les affiliés{% s "acv-coc" %}.
- **Fonction publique flamande** : l'absence est encodée comme une « interruption de travail organisée ». Elle entraîne une retenue de salaire et la perte du chèque-repas pour une absence d'une journée entière, sans congé syndical{% s "vlaanderen" %}.
- **Employeurs** : les secrétariats sociaux recommandent d'anticiper avec le télétravail, des horaires flexibles ou le covoiturage{% s "attentia", "sociare" %}.

## Précautions {:#precautions}

- Venez en **transports en commun ou à pied** et prévoyez du temps aux gares du Nord et du Midi.
- Convenez d'un **point de rendez-vous** avec vos proches en cas de séparation, car le réseau mobile peut saturer.
- Si des incidents éclatent en marge du cortège, comme le 9 octobre{% s "rtbf-9oct" %}, **éloignez-vous** et suivez les consignes du service d'ordre syndical et de la police.
- Numéro d'urgence : **112**.
