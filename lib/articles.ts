export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  tags: string[];
  featured: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Guide complet de Next.js 15 : Toutes les nouveautés",
    excerpt:
      "Découvrez les dernières fonctionnalités de Next.js 15, du nouveau compilateur Turbo aux améliorations de performance. Un guide pratique avec des exemples concrets pour débuter sereinement.",
    content: `
# Guide complet de Next.js 15

Next.js 15 apporte des améliorations significatives qui révolutionnent le développement d'applications React.

## Les nouveautés majeures

### 1. Turbo Pack en production
Le nouveau bundler Turbo Pack est maintenant stable pour la production, offrant des temps de build jusqu'à 700% plus rapides.

### 2. App Router stabilisé
L'App Router devient la solution recommandée avec de nouvelles fonctionnalités :
- Streaming amélioré
- Gestion des erreurs optimisée
- Metadata API complète

### 3. Server Actions
Les Server Actions permettent d'exécuter du code serveur directement depuis les composants client.

\`\`\`javascript
'use server'

export async function createUser(formData) {
  const user = await db.user.create({
    data: {
      name: formData.get('name'),
      email: formData.get('email'),
    },
  })
  return user
}
\`\`\`

## Performance

Next.js 15 améliore significativement les performances avec :
- Bundle splitting automatique
- Préchargement intelligent
- Optimisation des images native

Cette version marque un tournant dans l'écosystème React !
    `,
    slug: "guide-nextjs-15",
    date: "2024-01-15",
    readTime: "8 min",
    category: "React",
    author: "Virgile Ader",
    tags: ["Next.js", "React", "Performance", "Turbo"],
    featured: true,
  },
  {
    id: "2",
    title: "TypeScript : 10 bonnes pratiques pour 2024",
    excerpt:
      "Maîtrisez TypeScript avec ces techniques avancées. Types utilitaires, patterns de design et optimisations pour des projets plus robustes et maintenables.",
    content: `
# TypeScript : 10 bonnes pratiques pour 2024

TypeScript continue d'évoluer rapidement. Voici les meilleures pratiques à adopter en 2024.

## 1. Utilisez les types utilitaires

\`\`\`typescript
// Au lieu de dupliquer des interfaces
interface User {
  id: string;
  name: string;
  email: string;
}

// Utilisez les utilitaires
type PartialUser = Partial<User>
type UserWithoutId = Omit<User, 'id'>
type UserEmail = Pick<User, 'email'>
\`\`\`

## 2. Maîtrisez l'inférence de type

TypeScript est très intelligent pour inférer les types :

\`\`\`typescript
// Pas besoin de spécifier le type
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
] // TypeScript infère le type automatiquement
\`\`\`

## 3. Utilisez des guards de type

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

if (isString(userInput)) {
  // TypeScript sait maintenant que userInput est un string
  console.log(userInput.toUpperCase())
}
\`\`\`

## 4. Configurez strictement tsconfig.json

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true
  }
}
\`\`\`

Ces pratiques vous aideront à écrire du code plus sûr et maintenable !
    `,
    slug: "typescript-bonnes-pratiques-2024",
    date: "2024-01-12",
    readTime: "6 min",
    category: "TypeScript",
    author: "Virgile Ader",
    tags: ["TypeScript", "Best Practices", "Types", "Development"],
    featured: true,
  },
  {
    id: "3",
    title: "Tailwind CSS : Créer des composants réutilisables",
    excerpt:
      "Apprenez à structurer vos composants Tailwind pour une maintenance optimale. Design system, variables CSS et bonnes pratiques pour vos projets.",
    content: `
# Tailwind CSS : Créer des composants réutilisables

Tailwind CSS révolutionne la façon dont nous stylons nos applications, mais comment créer des composants réutilisables ?

## Le problème de la duplication

Sans structure, on se retrouve avec :

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Bouton 1
</button>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Bouton 2
</button>
\`\`\`

## Solution 1 : Composants React

\`\`\`jsx
function Button({ children, variant = 'primary', size = 'md', ...props }) {
  const baseClasses = 'font-bold rounded transition-colors'

  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
  }

  const sizes = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4',
    lg: 'py-3 px-6 text-lg'
  }

  return (
    <button
      className={\`\${baseClasses} \${variants[variant]} \${sizes[size]}\`}
      {...props}
    >
      {children}
    </button>
  )
}
\`\`\`

## Solution 2 : Classes CSS custom

\`\`\`css
@layer components {
  .btn {
    @apply font-bold py-2 px-4 rounded transition-colors;
  }

  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white;
  }

  .btn-secondary {
    @apply bg-gray-200 hover:bg-gray-300 text-gray-800;
  }
}
\`\`\`

## Design tokens

Utilisez des variables CSS pour la cohérence :

\`\`\`css
:root {
  --color-primary: 59 130 246;
  --color-secondary: 107 114 128;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
}
\`\`\`

Cette approche garantit un design system cohérent et maintenable !
    `,
    slug: "tailwind-composants-reutilisables",
    date: "2024-01-10",
    readTime: "5 min",
    category: "CSS",
    author: "Virgile Ader",
    tags: ["Tailwind", "CSS", "Components", "Design System"],
    featured: true,
  },
  {
    id: "4",
    title: "React Server Components : Le futur du développement React",
    excerpt:
      "Une plongée profonde dans les Server Components et leur impact sur l'architecture de vos applications React modernes.",
    content: `
# React Server Components : Le futur du développement React

Les React Server Components représentent un changement majeur dans l'architecture React.

## Qu'est-ce que les Server Components ?

Les Server Components s'exécutent côté serveur et envoient du JSX sérialisé au client.

\`\`\`jsx
// Server Component
async function BlogPost({ slug }) {
  const post = await fetchPost(slug) // Accès direct à la DB

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}
\`\`\`

## Avantages

1. **Performance** : Bundle JavaScript réduit
2. **Sécurité** : Code sensible reste sur le serveur
3. **SEO** : Contenu pré-rendu
4. **Accès direct** : Bases de données, APIs internes

## Client vs Server Components

\`\`\`jsx
// Server Component (par défaut)
async function ProductList() {
  const products = await db.products.findMany()
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

// Client Component
'use client'
function AddToCart({ productId }) {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    // Logique d'ajout au panier
  }

  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? 'Ajout...' : 'Ajouter au panier'}
    </button>
  )
}
\`\`\`

Les Server Components changent la donne pour les performances et l'architecture !
    `,
    slug: "react-server-components",
    date: "2024-01-08",
    readTime: "7 min",
    category: "React",
    author: "Virgile Ader",
    tags: ["React", "Server Components", "Architecture", "Performance"],
    featured: false,
  },
  {
    id: "5",
    title: "Optimisation des performances web : Guide pratique",
    excerpt:
      "Techniques concrètes pour améliorer les Core Web Vitals et l'expérience utilisateur de vos applications web.",
    content: `
# Optimisation des performances web : Guide pratique

La performance web est cruciale pour l'expérience utilisateur et le SEO.

## Core Web Vitals

Google mesure 3 métriques clés :

### 1. Largest Contentful Paint (LCP)
Temps de chargement du plus gros élément visible.

**Optimisations :**
- Optimiser les images (WebP, AVIF)
- Utiliser un CDN
- Précharger les ressources critiques

\`\`\`html
<link rel="preload" href="/hero-image.webp" as="image">
\`\`\`

### 2. First Input Delay (FID)
Temps de réponse à la première interaction.

**Optimisations :**
- Code splitting
- Lazy loading des composants
- Web Workers pour les tâches lourdes

\`\`\`javascript
// Code splitting avec React
const HeavyComponent = lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  )
}
\`\`\`

### 3. Cumulative Layout Shift (CLS)
Stabilité visuelle de la page.

**Optimisations :**
- Spécifier les dimensions des images
- Réserver l'espace pour le contenu dynamique

\`\`\`css
img {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9; /* Évite le layout shift */
}
\`\`\`

## Techniques avancées

### Service Workers
\`\`\`javascript
// Cache les ressources statiques
self.addEventListener('fetch', event => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    )
  }
})
\`\`\`

### Resource Hints
\`\`\`html
<link rel="dns-prefetch" href="//api.example.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="prefetch" href="/next-page.html">
\`\`\`

Ces optimisations amélioreront significativement vos métriques de performance !
    `,
    slug: "optimisation-performances-web",
    date: "2024-01-05",
    readTime: "9 min",
    category: "Performance",
    author: "Virgile Ader",
    tags: ["Performance", "Web Vitals", "Optimization", "UX"],
    featured: false,
  },
  {
    id: "6",
    title: "Design System avec shadcn/ui : Retour d'expérience",
    excerpt:
      "Comment nous avons mis en place un design system cohérent avec shadcn/ui dans nos projets clients.",
    content: `
# Design System avec shadcn/ui : Retour d'expérience

shadcn/ui a révolutionné notre approche des design systems.

## Pourquoi shadcn/ui ?

Contrairement aux bibliothèques traditionnelles, shadcn/ui :
- **Copy-paste** : Vous possédez le code
- **Customisable** : Modification totale possible
- **Type-safe** : TypeScript natif
- **Accessible** : ARIA intégré

## Installation et configuration

\`\`\`bash
npx shadcn-ui@latest init
\`\`\`

\`\`\`json
{
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  }
}
\`\`\`

## Structure du projet

\`\`\`
components/
├── ui/           # Composants shadcn/ui
│   ├── button.tsx
│   ├── input.tsx
│   └── card.tsx
├── forms/        # Composants métier
├── layout/       # Layout components
└── shared/       # Composants partagés
\`\`\`

## Customisation des tokens

\`\`\`css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
}
\`\`\`

## Composants personnalisés

\`\`\`tsx
// components/ui/card.tsx
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
\`\`\`

## Avantages constatés

1. **Développement accéléré** : +40% de vélocité
2. **Cohérence visuelle** : Design uniforme
3. **Maintenance simplifiée** : Un seul endroit à modifier
4. **Accessibilité** : Standards WCAG respectés

shadcn/ui nous a permis de créer des interfaces plus rapidement tout en maintenant une qualité élevée !
    `,
    slug: "design-system-shadcn-ui",
    date: "2024-01-03",
    readTime: "6 min",
    category: "Design",
    author: "Virgile Ader",
    tags: ["shadcn/ui", "Design System", "Components", "UI/UX"],
    featured: false,
  },
  {
    id: "7",
    title: "Maîtriser les React Hooks : Guide complet 2024",
    excerpt:
      "De useState à useCallback, découvrez tous les hooks React avec des exemples concrets et des patterns avancés.",
    content: `
# Maîtriser les React Hooks : Guide complet 2024

Les hooks ont transformé la façon dont nous écrivons du React.

## Les hooks essentiels

### useState
\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
\`\`\`

### useEffect
\`\`\`jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchUser(userId).then(setUser)
  }, [userId]) // Dépendance importante !

  if (!user) return <div>Loading...</div>

  return <div>{user.name}</div>
}
\`\`\`

## Hooks d'optimisation

### useMemo
\`\`\`jsx
function ExpensiveComponent({ items, filter }) {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter)
  }, [items, filter])

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
\`\`\`

### useCallback
\`\`\`jsx
function Parent() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(c => c + 1)
  }, []) // Pas de dépendances car on utilise la forme fonctionnelle

  return <Child onClick={handleClick} />
}
\`\`\`

## Hooks avancés

### useReducer
\`\`\`jsx
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, done: false }]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      )
    default:
      return state
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, [])

  return (
    <div>
      <button onClick={() => dispatch({ type: 'ADD_TODO', text: 'New todo' })}>
        Add Todo
      </button>
      {todos.map(todo => (
        <div key={todo.id} onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}>
          {todo.text} {todo.done ? '✓' : '○'}
        </div>
      ))}
    </div>
  )
}
\`\`\`

## Custom Hooks

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  )
}
\`\`\`

Les hooks rendent React plus puissant et expressif !
    `,
    slug: "maitriser-react-hooks-2024",
    date: "2024-01-01",
    readTime: "10 min",
    category: "React",
    author: "Virgile Ader",
    tags: ["React", "Hooks", "useState", "useEffect"],
    featured: false,
  },
  {
    id: "8",
    title: "CSS Grid vs Flexbox : Quand utiliser quoi ?",
    excerpt:
      "Comparaison détaillée entre CSS Grid et Flexbox avec des cas d'usage pratiques et des exemples concrets.",
    content: `
# CSS Grid vs Flexbox : Quand utiliser quoi ?

CSS Grid et Flexbox sont deux outils puissants pour le layout, mais quand utiliser l'un ou l'autre ?

## Flexbox : Layout 1D (ligne ou colonne)

### Cas d'usage ideaux :
- Navigation horizontale
- Centrage d'éléments
- Distribution d'espace
- Alignement d'items

\`\`\`css
/* Navigation flex */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

/* Centrage parfait */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
\`\`\`

### Card flexible
\`\`\`css
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-content {
  flex: 1; /* Prend tout l'espace disponible */
}

.card-footer {
  margin-top: auto; /* Pousse vers le bas */
}
\`\`\`

## CSS Grid : Layout 2D (lignes ET colonnes)

### Cas d'usage ideaux :
- Layouts complexes
- Grilles d'articles
- Interfaces dashboard
- Positionnement précis

\`\`\`css
/* Layout de page */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr 200px;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

### Grille responsive
\`\`\`css
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

/* Article principal prend plus de place */
.featured-article {
  grid-column: span 2;
  grid-row: span 2;
}
\`\`\`

## Comparaison pratique

| Critère | Flexbox | Grid |
|---------|---------|------|
| **Dimension** | 1D (ligne OU colonne) | 2D (lignes ET colonnes) |
| **Contrôle** | Items contrôlent leur taille | Container contrôle tout |
| **Alignment** | Excellent | Excellent |
| **Responsive** | Bon | Excellent |
| **Browser Support** | Excellent | Très bon |

## Exemples combinés

Souvent, on utilise les deux ensemble :

\`\`\`css
/* Grid pour le layout principal */
.app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Flex pour la navigation */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid pour le contenu */
.main {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
}

/* Flex pour les cards */
.card {
  display: flex;
  flex-direction: column;
}
\`\`\`

## Règle simple

- **Flexbox** : Quand vous pensez en termes de rangée OU colonne
- **Grid** : Quand vous pensez en termes de rangées ET colonnes

Les deux sont complémentaires et souvent utilisés ensemble dans un même projet !
    `,
    slug: "css-grid-vs-flexbox",
    date: "2023-12-28",
    readTime: "7 min",
    category: "CSS",
    author: "Virgile Ader",
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
    featured: false,
  },
  {
    id: "9",
    title: "Authentification JWT avec Next.js et TypeScript",
    excerpt:
      "Implémentez un système d'authentification sécurisé avec JWT, middleware et protection des routes.",
    content: `
# Authentification JWT avec Next.js et TypeScript

L'authentification est un aspect crucial de toute application. Voici comment l'implémenter proprement.

## Architecture générale

1. **Login** → Génération JWT
2. **JWT stocké** → HttpOnly cookie
3. **Middleware** → Vérification des routes protégées
4. **Refresh token** → Renouvellement automatique

## Configuration JWT

\`\`\`typescript
// lib/jwt.ts
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET!
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!

export interface JWTPayload {
  userId: string
  email: string
  role: string
}

export function signJWT(payload: JWTPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' })
}

export function signRefreshJWT(payload: JWTPayload) {
  return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '7d' })
}

export function verifyJWT(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload
  } catch {
    return null
  }
}

export function verifyRefreshJWT(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET) as JWTPayload
  } catch {
    return null
  }
}
\`\`\`

## API Routes

### Login
\`\`\`typescript
// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { signJWT, signRefreshJWT } from '@/lib/jwt'
import { getUserByEmail } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Vérifier l'utilisateur
    const user = await getUserByEmail(email)
    if (!user || !await bcrypt.compare(password, user.password)) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Générer les tokens
    const payload = { userId: user.id, email: user.email, role: user.role }
    const accessToken = signJWT(payload)
    const refreshToken = signRefreshJWT(payload)

    // Créer la response avec cookies sécurisés
    const response = NextResponse.json({ success: true, user: payload })

    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 15 * 60 // 15 minutes
    })

    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 // 7 jours
    })

    return response
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
\`\`\`

### Refresh Token
\`\`\`typescript
// app/api/auth/refresh/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { verifyRefreshJWT, signJWT } from '@/lib/jwt'

export async function POST(request: NextRequest) {
  const refreshToken = request.cookies.get('refreshToken')?.value

  if (!refreshToken) {
    return NextResponse.json({ error: 'No refresh token' }, { status: 401 })
  }

  const payload = verifyRefreshJWT(refreshToken)
  if (!payload) {
    return NextResponse.json({ error: 'Invalid refresh token' }, { status: 401 })
  }

  // Générer un nouveau access token
  const newAccessToken = signJWT(payload)

  const response = NextResponse.json({ success: true })
  response.cookies.set('accessToken', newAccessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 15 * 60
  })

  return response
}
\`\`\`

## Middleware pour la protection des routes

\`\`\`typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyJWT } from '@/lib/jwt'

export function middleware(request: NextRequest) {
  // Vérifier si la route nécessite une authentification
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('accessToken')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const payload = verifyJWT(token)
    if (!payload) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Ajouter les infos utilisateur aux headers
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-user-id', payload.userId)
    requestHeaders.set('x-user-email', payload.email)
    requestHeaders.set('x-user-role', payload.role)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*']
}
\`\`\`

## Hook pour l'authentification côté client

\`\`\`typescript
// hooks/useAuth.ts
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

interface User {
  userId: string
  email: string
  role: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Vérifier l'authentification au chargement
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me')
      if (response.ok) {
        const userData = await response.json()
        setUser(userData)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
        return true
      }
      return false
    } catch {
      return false
    }
  }

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
\`\`\`

## Composant de protection

\`\`\`typescript
// components/ProtectedRoute.tsx
'use client'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: string
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }

    if (!loading && user && requiredRole && user.role !== requiredRole) {
      router.push('/unauthorized')
    }
  }, [user, loading, requiredRole, router])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return null
  }

  if (requiredRole && user.role !== requiredRole) {
    return null
  }

  return <>{children}</>
}
\`\`\`

Cette architecture offre une authentification robuste et sécurisée !
    `,
    slug: "authentification-jwt-nextjs",
    date: "2023-12-25",
    readTime: "12 min",
    category: "Backend",
    author: "Virgile Ader",
    tags: ["JWT", "Auth", "Security", "Next.js"],
    featured: false,
  },
  {
    id: "10",
    title: "Progressive Web Apps (PWA) : Guide du débutant",
    excerpt:
      "Transformez votre application web en PWA pour offrir une expérience native sur mobile et desktop.",
    content: `
# Progressive Web Apps (PWA) : Guide du débutant

Les Progressive Web Apps combinent le meilleur du web et du mobile pour offrir une expérience utilisateur exceptionnelle.

## Qu'est-ce qu'une PWA ?

Une PWA est une application web qui utilise des technologies modernes pour offrir une expérience similaire à une app native :

- **Installation** sur l'écran d'accueil
- **Fonctionnement hors ligne**
- **Notifications push**
- **Accès aux APIs natives**

## Les composants essentiels

### 1. Service Worker

Le Service Worker agit comme un proxy entre votre app et le réseau :

\`\`\`javascript
// public/sw.js
const CACHE_NAME = 'my-pwa-v1'
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/logo.png'
]

// Installation
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  )
})

// Interception des requêtes
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retourne la version en cache ou fetch depuis le réseau
        return response || fetch(event.request)
      })
  )
})
\`\`\`

### 2. Web App Manifest

Le manifest définit comment l'app apparaît quand elle est installée :

\`\`\`json
// public/manifest.json
{
  "name": "Mon Application PWA",
  "short_name": "MonApp",
  "description": "Une super application progressive",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
\`\`\`

## Implémentation avec Next.js

### Configuration
\`\`\`javascript
// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 200,
        },
      },
    },
  ],
})

module.exports = withPWA({
  // Votre config Next.js
})
\`\`\`

### Enregistrement du Service Worker
\`\`\`typescript
// pages/_app.tsx ou app/layout.tsx
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration)
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    }
  }, [])

  return <Component {...pageProps} />
}
\`\`\`

## Fonctionnalités avancées

### Notifications Push
\`\`\`javascript
// Demander la permission
async function requestNotificationPermission() {
  const permission = await Notification.requestPermission()
  return permission === 'granted'
}

// Envoyer une notification
function showNotification(title, options) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification(title, {
        body: options.body,
        icon: '/icons/icon-192x192.png',
        badge: '/icons/badge-72x72.png',
        actions: [
          {
            action: 'open',
            title: 'Ouvrir l\'app'
          },
          {
            action: 'close',
            title: 'Fermer'
          }
        ]
      })
    })
  }
}
\`\`\`

### Détection de l'installation
\`\`\`javascript
let deferredPrompt

window.addEventListener('beforeinstallprompt', (e) => {
  // Empêche la popup d'installation par défaut
  e.preventDefault()
  deferredPrompt = e

  // Affiche votre propre bouton d'installation
  showInstallButton()
})

function showInstallButton() {
  const installButton = document.getElementById('install-button')
  installButton.style.display = 'block'

  installButton.addEventListener('click', () => {
    deferredPrompt.prompt()

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt')
      }
      deferredPrompt = null
    })
  })
}
\`\`\`

## Stratégies de cache

### Network First
Idéal pour du contenu dynamique :
\`\`\`javascript
self.addEventListener('fetch', event => {
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseClone = response.clone()
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseClone))
          return response
        })
        .catch(() => caches.match(event.request))
    )
  }
})
\`\`\`

### Cache First
Idéal pour les assets statiques :
\`\`\`javascript
self.addEventListener('fetch', event => {
  if (event.request.url.includes('/images/')) {
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    )
  }
})
\`\`\`

## Checklist PWA

- ✅ HTTPS obligatoire
- ✅ Manifest.json complet
- ✅ Service Worker enregistré
- ✅ Icônes aux bonnes tailles
- ✅ Responsive design
- ✅ Fonctionnement hors ligne
- ✅ Temps de chargement < 3s
- ✅ Navigation intuitive

Les PWAs offrent une alternative puissante aux apps natives !
    `,
    slug: "guide-pwa-debutant",
    date: "2023-12-22",
    readTime: "8 min",
    category: "Performance",
    author: "Virgile Ader",
    tags: ["PWA", "Mobile", "Service Worker", "Performance"],
    featured: false,
  },
  {
    id: "11",
    title: "Animations CSS modernes : De transitions à Framer Motion",
    excerpt:
      "Créez des animations fluides et performantes avec CSS, Web Animations API et Framer Motion.",
    content: `
# Animations CSS modernes : De transitions à Framer Motion

Les animations donnent vie à nos interfaces utilisateur et améliorent l'expérience globale.

## Transitions CSS

Les transitions permettent d'animer les changements de propriétés :

\`\`\`css
.button {
  background-color: #3b82f6;
  transform: scale(1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button:hover {
  background-color: #1d4ed8;
  transform: scale(1.05);
}

/* Courbes d'easing personnalisées */
.smooth-ease {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.bounce-ease {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
\`\`\`

## Animations avec @keyframes

Pour des animations plus complexes :

\`\`\`css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
\`\`\`

## Animations performantes

Utilisez les propriétés qui ne déclenchent pas de reflow :

\`\`\`css
/* ✅ Propriétés performantes */
.performant {
  transform: translateX(100px);
  opacity: 0.5;
  filter: blur(5px);
}

/* ❌ Propriétés coûteuses */
.couteux {
  left: 100px; /* Déclenche layout */
  width: 200px; /* Déclenche layout */
  box-shadow: 0 0 10px rgba(0,0,0,0.5); /* Déclenche paint */
}

/* Optimisation avec will-change */
.animated-element {
  will-change: transform, opacity;
}

.animated-element.animating {
  animation: complexAnimation 1s ease-out;
}

.animated-element.animation-done {
  will-change: auto; /* Libère les ressources */
}
\`\`\`

## Web Animations API

L'API JavaScript pour des animations plus flexibles :

\`\`\`javascript
// Animation simple
const element = document.querySelector('.element')

element.animate([
  { transform: 'translateX(0px)', opacity: 1 },
  { transform: 'translateX(300px)', opacity: 0 }
], {
  duration: 1000,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  fill: 'forwards'
})

// Animation avec contrôle
const animation = element.animate([
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' }
], {
  duration: 2000,
  iterations: Infinity
})

// Contrôles
animation.pause()
animation.play()
animation.reverse()

// Événements
animation.addEventListener('finish', () => {
  console.log('Animation terminée')
})
\`\`\`

## Intersection Observer pour les animations au scroll

\`\`\`javascript
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
    }
  })
}, observerOptions)

// Observer tous les éléments à animer
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el)
})
\`\`\`

\`\`\`css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}
\`\`\`

## React avec Framer Motion

Framer Motion simplifie les animations React :

\`\`\`jsx
import { motion, AnimatePresence } from 'framer-motion'

// Animation d'entrée
function FadeInComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <h1>Hello World!</h1>
    </motion.div>
  )
}

// Animation au hover
function HoverCard() {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="card"
    >
      Carte interactive
    </motion.div>
  )
}

// Animation de liste
function AnimatedList({ items }) {
  return (
    <motion.ul layout>
      <AnimatePresence>
        {items.map(item => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            layout
          >
            {item.name}
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  )
}

// Animation complexe avec variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

function StaggeredAnimation() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {[1, 2, 3, 4].map(i => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="item"
        >
          Item {i}
        </motion.div>
      ))}
    </motion.div>
  )
}
\`\`\`

## Hook personnalisé pour les animations

\`\`\`jsx
import { useEffect, useState } from 'react'

function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const [element, setElement] = useState(null)

  useEffect(() => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [element, threshold])

  return [setElement, isVisible]
}

// Usage
function AnimatedComponent() {
  const [ref, isVisible] = useScrollAnimation(0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      Contenu animé au scroll
    </motion.div>
  )
}
\`\`\`

## Performance et bonnes pratiques

### Débugger les animations
\`\`\`css
/* Visualiser les couches de composition */
* {
  outline: 1px solid red;
}

/* Forcer la création d'une couche */
.gpu-layer {
  transform: translateZ(0);
  /* ou */
  will-change: transform;
}
\`\`\`

### Réduire les animations sur les appareils lents
\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

\`\`\`javascript
// Détecter la préférence utilisateur
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

if (!prefersReducedMotion.matches) {
  // Appliquer les animations normales
  element.classList.add('animated')
}
\`\`\`

Les animations bien pensées améliorent significativement l'UX !
    `,
    slug: "animations-css-modernes",
    date: "2023-12-20",
    readTime: "9 min",
    category: "CSS",
    author: "Virgile Ader",
    tags: ["Animations", "CSS", "Framer Motion", "UI/UX"],
    featured: false,
  },
  {
    id: "12",
    title: "Testing en React : Jest, Testing Library et Cypress",
    excerpt:
      "Stratégies de test complètes pour vos applications React : tests unitaires, d'intégration et end-to-end.",
    content: `
# Testing en React : Jest, Testing Library et Cypress

Les tests sont essentiels pour maintenir une codebase de qualité et éviter les régressions.

## Pyramide des tests

1. **Tests unitaires** (70%) - Jest + Testing Library
2. **Tests d'intégration** (20%) - Testing Library
3. **Tests E2E** (10%) - Cypress

## Configuration Jest et Testing Library

### Installation
\`\`\`bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
\`\`\`

### Configuration Jest
\`\`\`javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
\`\`\`

\`\`\`javascript
// src/setupTests.js
import '@testing-library/jest-dom'

// Mock des APIs du navigateur
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
\`\`\`

## Tests unitaires

### Composant simple
\`\`\`jsx
// components/Button.jsx
function Button({ children, onClick, variant = 'primary', disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {children}
    </button>
  )
}

export default Button
\`\`\`

\`\`\`jsx
// components/__tests__/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('applies correct CSS class for variant', () => {
    render(<Button variant="secondary">Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-secondary')
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Click me</Button>)

    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
\`\`\`

### Test avec hooks
\`\`\`jsx
// hooks/useCounter.js
import { useState } from 'react'

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(initialValue)

  return { count, increment, decrement, reset }
}
\`\`\`

\`\`\`jsx
// hooks/__tests__/useCounter.test.js
import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../useCounter'

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0)
  })

  it('initializes with custom value', () => {
    const { result } = renderHook(() => useCounter(10))
    expect(result.current.count).toBe(10)
  })

  it('increments count', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })

  it('decrements count', () => {
    const { result } = renderHook(() => useCounter(5))

    act(() => {
      result.current.decrement()
    })

    expect(result.current.count).toBe(4)
  })

  it('resets to initial value', () => {
    const { result } = renderHook(() => useCounter(10))

    act(() => {
      result.current.increment()
      result.current.reset()
    })

    expect(result.current.count).toBe(10)
  })
})
\`\`\`

## Tests d'intégration avec API

\`\`\`jsx
// components/UserProfile.jsx
import { useState, useEffect } from 'react'

function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [userId])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!user) return <div>User not found</div>

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
\`\`\`

\`\`\`jsx
// components/__tests__/UserProfile.test.jsx
import { render, screen, waitFor } from '@testing-library/react'
import UserProfile from '../UserProfile'

// Mock fetch
global.fetch = jest.fn()

describe('UserProfile', () => {
  beforeEach(() => {
    fetch.mockClear()
  })

  it('displays loading initially', () => {
    fetch.mockImplementationOnce(() => new Promise(() => {})) // Never resolves

    render(<UserProfile userId="1" />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('displays user data when fetch succeeds', async () => {
    const mockUser = { name: 'John Doe', email: 'john@example.com' }
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockUser)
    })

    render(<UserProfile userId="1" />)

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('john@example.com')).toBeInTheDocument()
    })

    expect(fetch).toHaveBeenCalledWith('/api/users/1')
  })

  it('displays error when fetch fails', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'))

    render(<UserProfile userId="1" />)

    await waitFor(() => {
      expect(screen.getByText('Error: Network error')).toBeInTheDocument()
    })
  })
})
\`\`\`

## Tests avec Mock Service Worker (MSW)

\`\`\`javascript
// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.get('/api/users/:id', (req, res, ctx) => {
    const { id } = req.params

    if (id === '1') {
      return res(
        ctx.json({
          id: '1',
          name: 'John Doe',
          email: 'john@example.com'
        })
      )
    }

    return res(ctx.status(404), ctx.json({ message: 'User not found' }))
  }),

  rest.post('/api/users', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com'
      })
    )
  })
]
\`\`\`

\`\`\`javascript
// src/mocks/server.js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
\`\`\`

\`\`\`javascript
// src/setupTests.js
import '@testing-library/jest-dom'
import { server } from './mocks/server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
\`\`\`

## Tests E2E avec Cypress

### Installation
\`\`\`bash
npm install --save-dev cypress
\`\`\`

### Configuration
\`\`\`javascript
// cypress.config.js
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
\`\`\`

### Test E2E
\`\`\`javascript
// cypress/e2e/user-flow.cy.js
describe('User Authentication Flow', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('allows user to sign up and login', () => {
    // Sign up
    cy.get('[data-cy="signup-link"]').click()
    cy.get('[data-cy="email-input"]').type('test@example.com')
    cy.get('[data-cy="password-input"]').type('password123')
    cy.get('[data-cy="signup-button"]').click()

    // Verify redirect to dashboard
    cy.url().should('include', '/dashboard')
    cy.get('[data-cy="welcome-message"]').should('contain', 'Welcome')

    // Logout
    cy.get('[data-cy="logout-button"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')

    // Login
    cy.get('[data-cy="login-link"]').click()
    cy.get('[data-cy="email-input"]').type('test@example.com')
    cy.get('[data-cy="password-input"]').type('password123')
    cy.get('[data-cy="login-button"]').click()

    // Verify logged in
    cy.url().should('include', '/dashboard')
  })

  it('displays error for invalid credentials', () => {
    cy.get('[data-cy="login-link"]').click()
    cy.get('[data-cy="email-input"]').type('wrong@example.com')
    cy.get('[data-cy="password-input"]').type('wrongpassword')
    cy.get('[data-cy="login-button"]').click()

    cy.get('[data-cy="error-message"]')
      .should('be.visible')
      .and('contain', 'Invalid credentials')
  })
})
\`\`\`

### Custom Commands
\`\`\`javascript
// cypress/support/commands.js
Cypress.Commands.add('login', (email, password) => {
  cy.request({
    method: 'POST',
    url: '/api/auth/login',
    body: { email, password }
  }).then((response) => {
    window.localStorage.setItem('authToken', response.body.token)
  })
})

Cypress.Commands.add('createUser', (userData) => {
  cy.request({
    method: 'POST',
    url: '/api/users',
    body: userData,
    headers: {
      Authorization: \`Bearer \${window.localStorage.getItem('authToken')}\`
    }
  })
})

// Usage dans les tests
cy.login('admin@example.com', 'password')
cy.createUser({ name: 'Test User', email: 'test@example.com' })
\`\`\`

## Stratégies de test avancées

### Test Driven Development (TDD)
1. Écrire le test (qui échoue)
2. Écrire le code minimal pour passer le test
3. Refactoriser

### Snapshot Testing
\`\`\`jsx
it('matches snapshot', () => {
  const { container } = render(<Button variant="primary">Test</Button>)
  expect(container.firstChild).toMatchSnapshot()
})
\`\`\`

### Coverage reporting
\`\`\`bash
npm test -- --coverage --watchAll=false
\`\`\`

Cette approche multicouche garantit la qualité et la robustesse de votre application React !
    `,
    slug: "testing-react-jest-cypress",
    date: "2023-12-18",
    readTime: "11 min",
    category: "Testing",
    author: "Virgile Ader",
    tags: ["Testing", "Jest", "Cypress", "Quality"],
    featured: false,
  },
];

export const categories = [
  {
    name: "React",
    slug: "react",
    count: 0,
    description: "Tout sur React, Next.js et l'écosystème",
  },
  {
    name: "TypeScript",
    slug: "typescript",
    count: 0,
    description: "Types, bonnes pratiques et outils TypeScript",
  },
  {
    name: "CSS",
    slug: "css",
    count: 0,
    description: "Styles modernes, animations et design systems",
  },
  {
    name: "Performance",
    slug: "performance",
    count: 0,
    description: "Optimisation et Core Web Vitals",
  },
  {
    name: "Backend",
    slug: "backend",
    count: 0,
    description: "APIs, bases de données et architecture serveur",
  },
  {
    name: "Design",
    slug: "design",
    count: 0,
    description: "UI/UX, design systems et outils",
  },
  {
    name: "Testing",
    slug: "testing",
    count: 0,
    description: "Tests unitaires, intégration et end-to-end",
  },
];

// Calculer le nombre d'articles par catégorie
categories.forEach((category) => {
  category.count = articles.filter(
    (article) => article.category === category.name,
  ).length;
});

// Fonctions utilitaires
export function getArticlesByCategory(categorySlug: string) {
  const category = categories.find((cat) => cat.slug === categorySlug);
  if (!category) return [];
  return articles.filter((article) => article.category === category.name);
}

export function getFeaturedArticles() {
  return articles.filter((article) => article.featured).slice(0, 3);
}

export function getRecentArticles(limit = 6) {
  return articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Nouvelles fonctions ajoutées
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticles(): Article[] {
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter((article) =>
    article.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}

export function getRelatedArticles(
  currentSlug: string,
  limit: number = 3,
): Article[] {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];

  return articles
    .filter(
      (article) =>
        article.slug !== currentSlug &&
        (article.category === currentArticle.category ||
          article.tags.some((tag) => currentArticle.tags.includes(tag))),
    )
    .slice(0, limit);
}
