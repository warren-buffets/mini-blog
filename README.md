# 🚀 MiniBlog - L'art du développement web

> Un blog moderne et élégant sur le développement web, créé avec Next.js 15, TypeScript et Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 👨‍💻 Créateur

**Virgile Ader** - Développeur Full-Stack passionné par les technologies web modernes.

MiniBlog est né de ma passion pour le partage de connaissances et l'exploration des dernières innovations du développement web. Chaque article reflète mon expérience et mes découvertes dans cet univers en constante évolution.

## ✨ Fonctionnalités

### 🎨 Design Moderne
- Interface élégante inspirée de Vercel et Linear
- Animations subtiles et micro-interactions
- Design system cohérent avec shadcn/ui
- Support du mode sombre (prêt à implémenter)

### 📱 Responsive & Performant
- Mobile-first design
- Optimisé pour tous les écrans
- Performance web optimale
- SEO intégré avec metadata complètes

### 🔍 Fonctionnalités Blog
- **12+ articles** sur le développement web
- **7 catégories** : React, TypeScript, CSS, Performance, Backend, Design, Testing
- Recherche intelligente avec suggestions
- Navigation intuitive par catégories
- Articles en vedette et récents

### 🛡️ Technologies Modernes
- **Next.js 15** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** via CDN pour les styles
- **shadcn/ui** pour les composants
- **Lucide React** pour les icônes

## 🚀 Installation

### Prérequis
- Node.js 18+
- npm, pnpm ou yarn

### Étapes d'installation

1. **Cloner le projet**
```bash
git clone https://github.com/warren-buffets/mini-blog.git
cd miniblog
```

2. **Installer les dépendances**
```bash
# Avec pnpm (recommandé)
pnpm install

# Ou avec npm
npm install

# Ou avec yarn
yarn install
```

3. **Lancer le serveur de développement**
```bash
# Avec pnpm
pnpm dev

# Ou avec npm
npm run dev

# Ou avec yarn
yarn dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📂 Structure du projet

```
miniblog/
├── app/                    # Pages Next.js (App Router)
│   ├── about/             # Page À propos
│   ├── articles/          # Page Articles + détails
│   ├── categories/        # Pages catégories
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants React
│   ├── ui/               # Composants shadcn/ui
│   ├── Header.tsx        # Navigation
│   ├── Hero.tsx          # Section hero
│   ├── Footer.tsx        # Pied de page
│   ├── PostCard.tsx      # Card d'article
│   └── SearchBar.tsx     # Barre de recherche
├── lib/                  # Utilitaires
│   ├── articles.ts       # Données des articles
│   └── utils.ts          # Fonctions utilitaires
└── public/               # Assets statiques
```

## 📝 Articles disponibles

### 🌟 Articles en vedette
- **Guide complet de Next.js 15** - Toutes les nouveautés expliquées
- **TypeScript : 10 bonnes pratiques pour 2024** - Techniques avancées
- **Tailwind CSS : Créer des composants réutilisables** - Design system

### 📚 Tous les articles (12 au total)
- React Server Components : Le futur du développement React
- Optimisation des performances web : Guide pratique
- Design System avec shadcn/ui : Retour d'expérience
- Maîtriser les React Hooks : Guide complet 2024
- CSS Grid vs Flexbox : Quand utiliser quoi ?
- Authentification JWT avec Next.js et TypeScript
- Progressive Web Apps (PWA) : Guide du débutant
- Animations CSS modernes : De transitions à Framer Motion
- Testing en React : Jest, Testing Library et Cypress

## 🎯 Catégories

| Catégorie | Articles | Description |
|-----------|----------|-------------|
| **React** | 4 | Tout sur React, Next.js et l'écosystème |
| **TypeScript** | 1 | Types, bonnes pratiques et outils |
| **CSS** | 3 | Styles modernes, animations et design systems |
| **Performance** | 2 | Optimisation et Core Web Vitals |
| **Backend** | 1 | APIs, bases de données et architecture |
| **Design** | 1 | UI/UX, design systems et outils |
| **Testing** | 1 | Tests unitaires, intégration et e2e |

## 🛠️ Commandes utiles

```bash
# Développement
pnpm dev              # Serveur de développement
pnpm build            # Build de production
pnpm start            # Serveur de production
pnpm lint             # Linter ESLint

# Nettoyage
rm -rf .next          # Supprimer le cache Next.js
rm -rf node_modules   # Réinstaller les dépendances
```

## 🎨 Personnalisation

### Ajouter un article
1. Modifier `lib/articles.ts`
2. Ajouter les métadonnées de l'article
3. L'article apparaîtra automatiquement sur le site

### Modifier le thème
Les couleurs sont configurées dans `app/layout.tsx` via la configuration Tailwind inline.

### Ajouter une catégorie
1. Ajouter la catégorie dans `lib/articles.ts`
2. Définir l'icône dans `app/categories/page.tsx`

## 🌐 Déploiement

### Vercel (Recommandé)
```bash
# Push sur GitHub puis connecter à Vercel
# Ou utiliser Vercel CLI
npx vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
out/
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📈 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **Core Web Vitals** : Optimisé pour les métriques Google
- **SEO** : Metadata complètes et structured data
- **Accessibilité** : Navigation clavier et lecteurs d'écran

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/amazing-feature`)
3. Commit les changements (`git commit -m 'Add amazing feature'`)
4. Push la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📞 Contact

**Virgile Ader**
- Portfolio : [virgileader.dev](https://virgileader.dev)
- GitHub : [@virgileader](https://github.com/virgileader)
- Twitter : [@virgileader](https://twitter.com/virgileader)
- LinkedIn : [Virgile Ader](https://linkedin.com/in/virgileader)
- Email : virgile.ader@example.com

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

⭐ **N'hésitez pas à star le projet si il vous plaît !**

*Créé avec ❤️ par Virgile Ader - Étudiant à Epitech Digital School*
