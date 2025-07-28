import { Suspense } from "react";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import PostCard, { PostCardHorizontal } from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  Star,
  Zap,
  Code,
  Palette,
  Rocket,
} from "lucide-react";
import Link from "next/link";

// Mock data pour la démo
const featuredPosts = [
  {
    title: "Guide complet de Next.js 15 : Toutes les nouveautés",
    excerpt:
      "Découvrez les dernières fonctionnalités de Next.js 15, du nouveau compilateur Turbo aux améliorations de performance. Un guide pratique avec des exemples concrets.",
    slug: "guide-nextjs-15",
    date: "15 Jan 2024",
    readTime: "8 min",
    category: "React",
    featured: true,
  },
  {
    title: "TypeScript : 10 bonnes pratiques pour 2024",
    excerpt:
      "Maîtrisez TypeScript avec ces techniques avancées. Types utilitaires, patterns de design et optimisations pour des projets plus robustes.",
    slug: "typescript-bonnes-pratiques-2024",
    date: "12 Jan 2024",
    readTime: "6 min",
    category: "TypeScript",
  },
  {
    title: "Tailwind CSS : Créer des composants réutilisables",
    excerpt:
      "Apprenez à structurer vos composants Tailwind pour une maintenance optimale. Design system, variables CSS et bonnes pratiques.",
    slug: "tailwind-composants-reutilisables",
    date: "10 Jan 2024",
    readTime: "5 min",
    category: "CSS",
  },
];

const recentPosts = [
  {
    title: "React Server Components : Le futur du développement React",
    excerpt:
      "Une plongée profonde dans les Server Components et leur impact sur l'architecture de vos applications React.",
    slug: "react-server-components",
    date: "8 Jan 2024",
    readTime: "7 min",
    category: "React",
  },
  {
    title: "Optimisation des performances web : Guide pratique",
    excerpt:
      "Techniques concrètes pour améliorer les Core Web Vitals et l'expérience utilisateur de vos applications.",
    slug: "optimisation-performances-web",
    date: "5 Jan 2024",
    readTime: "9 min",
    category: "Performance",
  },
  {
    title: "Design System avec shadcn/ui : Retour d'expérience",
    excerpt:
      "Comment nous avons mis en place un design system cohérent avec shadcn/ui dans nos projets.",
    slug: "design-system-shadcn-ui",
    date: "3 Jan 2024",
    readTime: "6 min",
    category: "Design",
  },
];

const categories = [
  { name: "React", count: 12, icon: Code, color: "bg-blue-500" },
  { name: "TypeScript", count: 8, icon: Zap, color: "bg-blue-600" },
  { name: "CSS", count: 6, icon: Palette, color: "bg-pink-500" },
  { name: "Performance", count: 4, icon: Rocket, color: "bg-green-500" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Search Section - Centré et moderne */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Que recherchez-vous ?
              </h2>
              <p className="text-muted-foreground">
                Explorez notre collection d'articles et tutoriels
              </p>
            </div>

            <Suspense
              fallback={
                <div className="h-12 bg-muted rounded-lg animate-pulse" />
              }
            >
              <SearchBar />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <Badge variant="secondary" className="px-3 py-1">
                  Articles en vedette
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                Les articles les plus populaires
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez nos meilleurs contenus, sélectionnés pour leur qualité
                et leur impact sur la communauté des développeurs.
              </p>
            </div>

            {/* Featured Articles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredPosts.map((post, index) => (
                <PostCard
                  key={post.slug}
                  {...post}
                  className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Explorez par catégorie
              </h2>
              <p className="text-muted-foreground">
                Trouvez rapidement les sujets qui vous intéressent
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.name}
                    href={`/category/${category.name.toLowerCase()}`}
                    className="group"
                  >
                    <div className="p-6 rounded-lg border border-border/50 bg-background hover:bg-muted/50 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {category.count} articles
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Articles récents
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  Les dernières publications de notre équipe
                </p>
              </div>

              <Button variant="outline" className="group self-start">
                Voir tous les articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Recent Articles List */}
            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <div key={post.slug}>
                  <PostCardHorizontal {...post} />
                  {index < recentPosts.length - 1 && (
                    <Separator className="mt-6 opacity-50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 sm:p-12 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm shadow-xl shadow-black/5 dark:shadow-white/5 text-center space-y-6">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl" />

              <div className="relative z-10 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Restez à jour avec MiniBlog
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Recevez nos meilleurs articles directement dans votre boîte
                    mail. Rejoignez plus de 2,500 développeurs qui nous font
                    confiance.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="flex-1 px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button size="lg" className="px-8">
                    S'abonner
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  Pas de spam. Désabonnement en un clic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
