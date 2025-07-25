# Mini Blog Next.js

Ce dépôt contient un exemple de mini‑blog statique réalisé avec [Next.js](https://nextjs.org/).

## Fonctionnalités

* Page d’accueil listant tous les articles avec leur titre et un extrait.
* Pages dynamiques pour chaque article (URL de la forme `/posts/[slug]`).
* Contenu des articles stocké dans des fichiers **Markdown** dans le dossier `posts/`.
* Barre de recherche pour filtrer les articles par titre ou extrait.
* Page "À propos" simple.
* Navigation entre les pages via la barre de navigation.
* Mise en page basique utilisant Tailwind CSS.

## Installation

Pour installer et lancer le projet localement :

```bash
# Installez les dépendances
npm install

# Lancez le serveur de développement
npm run dev

# Ouvrez votre navigateur sur http://localhost:3000
```

Pour générer un site statique prêt à être déployé :

```bash
npm run build
npm run start
```

## Ajouter un article

1. Créez un nouveau fichier dans le dossier `posts/` avec l’extension `.md`.
2. Ajoutez un en‑tête YAML au début du fichier :

   ```md
   ---
   title: "Titre de l’article"
   date: "2025-07-25"
   excerpt: "Extrait de l’article."
   ---
   
   Le contenu de votre article en Markdown commence ici.
   ```

3. Le `slug` de votre article est dérivé du nom du fichier (ex. `mon-article.md` devient `/posts/mon-article`).

## Licence

Ce projet est créé par Virgile Ader tout droit reservé
