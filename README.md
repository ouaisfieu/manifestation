# 23·11 — Le dossier

Dossier documentaire, sourcé et ouvert sur la **manifestation nationale en front commun du lundi 23 novembre 2026 à Bruxelles** : contexte politique, chronologie, acteurs, revendications, analyse médiatique, infos pratiques, suivi après l'événement.

→ **https://ouaisfieu.github.io/manifestation/**

Rédigé par **Claude (Anthropic)**, un modèle d'IA, à partir de sources publiques consultées jusqu'au 20 novembre 2026. Voir la page [Méthode](https://ouaisfieu.github.io/manifestation/methode/). Site compagnon, militant : [Mobilisation · novembre 2026](https://ouaisfieu.github.io/mobilisation/).

## Pile technique (JAMstack)

- [Eleventy 3](https://www.11ty.dev/) : gabarits Nunjucks et Markdown, données JSON dans `src/_data/`
- [Pagefind](https://pagefind.app/) : recherche plein texte statique, exécutée dans le navigateur
- GitHub Actions et GitHub Pages : build et déploiement à chaque push sur `main`
- Aucun cadriciel JS, aucune police externe, aucun traceur ; JavaScript en amélioration progressive

## Démarrer

```bash
npm ci
npm run serve   # http://localhost:8080/manifestation/
npm run build   # _site/ + index Pagefind
```

## Structure

```
src/
  _data/            ← le contenu structuré (à éditer en priorité)
    site.json         métadonnées, navigation, date de mise à jour
    sources.json      toutes les sources (id, éditeur, titre, url, date, langue, type)
    crise.json        chronologie de la crise budgétaire
    mobilisations.json cycle de mobilisation 2025–2026 et affluence
    acteurs.json      acteurs par catégorie
    chiffres.json     audit des chiffres en circulation
    perturbations.json transports et services
    lexique.json      glossaire
    agenda.json       événements → /agenda.ics
    bilan.json        indicateurs post-23 novembre (null = « en attente »)
    journal.json      mises à jour → /feed.xml
  _includes/base.njk gabarit unique
  *.md / *.njk       pages
  api/               génération de /api/*.json
  assets/            CSS, JS, images
```

### Citer une source

Dans une page : `{% s "id-de-la-source" %}` ou `{% s "id1", "id2" %}`. Le numéro et le lien vers `/sources/#id` sont générés automatiquement. Un identifiant inconnu fait échouer le build : c'est voulu.

### Encadrés

```njk
{% note "caveat" %}Texte en **Markdown**.{% endnote %}
```

Types : `info`, `caveat` (prudence), `lecture` (interprétation de l'auteur), `method`.

## Mettre à jour après le 23 novembre

1. Ajouter les nouvelles sources dans `src/_data/sources.json`.
2. Remplir `src/_data/bilan.json` (`valeur`, `src`), puis passer `publie` à `true` et renseigner `maj`.
3. Compléter `mobilisations.json` (affluence du 23 novembre, `aVenir` → supprimer).
4. Mettre à jour `site.json` (`updated`) et ajouter une entrée dans `journal.json`.
5. Pousser sur `main` : le site se redéploie.

## Mise en ligne (une seule fois)

Dans les réglages du dépôt : **Settings → Pages → Build and deployment → Source : GitHub Actions**.

## Licences

Textes et données : [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Code : MIT. Voir `LICENSE`.

## Corrections

Les [issues](https://github.com/ouaisfieu/manifestation/issues) sont ouvertes : signalez une erreur en indiquant la page, le passage et une source.
