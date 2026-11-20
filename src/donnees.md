---
title: "Données ouvertes"
kicker: "API JSON & téléchargements"
description: "Les données du dossier en libre accès : chronologie, crise, acteurs, chiffres, perturbations, sources, lexique, agenda ICS, flux Atom."
lede: "Tout ce qui structure le dossier est disponible en JSON, sous licence CC BY-SA 4.0, pour être réutilisé, vérifié ou amélioré."
---

| Jeu de données | Contenu | Format |
|---|---|---|
| [/api/index.json](/api/index.json) | Index des points d'accès | JSON |
| [/api/mobilisations.json](/api/mobilisations.json) | Cycle de mobilisation 2025–2026, avec l'affluence | JSON |
| [/api/crise.json](/api/crise.json) | Chronologie de la crise budgétaire de novembre 2026 | JSON |
| [/api/acteurs.json](/api/acteurs.json) | Acteurs, catégories et rôles | JSON |
| [/api/chiffres.json](/api/chiffres.json) | Chiffres du débat et leur statut | JSON |
| [/api/perturbations.json](/api/perturbations.json) | Perturbations annoncées au 20 novembre | JSON |
| [/api/sources.json](/api/sources.json) | {{ sources.length }} sources typées | JSON |
| [/api/lexique.json](/api/lexique.json) | Lexique | JSON |
| [/api/bilan.json](/api/bilan.json) | Indicateurs de suivi après le 23 novembre | JSON |
| [/agenda.ics](/agenda.ics) | 23 novembre, 27 novembre et 10 décembre | iCalendar |
| [/feed.xml](/feed.xml) | Mises à jour du dossier | Atom |
| [Grille d'observation](/telechargements/grille-observation-medias.csv) | Grille de codage pour l'analyse des médias | CSV |

Chaque élément renvoie aux sources par leur identifiant (`src`), consultable dans `/api/sources.json`. Le code et les données sont dans le [dépôt GitHub]({{ site.repo }}).
