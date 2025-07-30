import { Suspense } from "react";
import {
  getAllArticles,
  getFeaturedArticles,
  getRecentArticles,
  categories,
} from "@/lib/articles";
import PostCard, { PostCardHorizontal } from "@/components/PostCard";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  TrendingUp,
  Star,
  Filter,
  Grid3X3,
  List,
  Calendar,
  Clock,
  Eye,
  Zap,
  Code,
  Palette,
  Rocket,
  Database,
  Paintbrush,
  TestTube,
} from "lucide-react";
import Link from "next/link";

const categoryIcons: { [key: string]: any } = {
  react: Code,
  typescript: Zap,
  css: Palette,
  performance: Rocket,
  backend: Database,
  design: Paintbrush,
  testing: TestTube,
};

const categoryColors: { [key: string]: string } = {
  react: "bg-blue-500",
  typescript: "bg-blue-600",
  css: "bg-pink-500",
  performance: "bg-green-500",
  backend: "bg-purple-500",
  design: "bg-orange-500",
  testing: "bg-red-500",
};

export const metadata = {
  title: "Tous les articles - MiniBlog | Virgile Ader",
  description:
    "Découvrez tous mes articles sur le développement web : React, Next.js, TypeScript, CSS et bien plus. Guides, tutoriels et bonnes pratiques.",
  keywords:
    "articles, blog, développement web, React, Next.js, TypeScript, tutoriels",
};

export default function ArticlesPage() {
  const allArticles = getAllArticles();
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getRecentArticles(8);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/20 dark:via-background dark:to-purple-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-indigo-600" />
                <Badge variant="secondary" className="px-3 py-1">
                  {allArticles.length} articles publiés
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Tous mes articles
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explorez ma collection complète d'articles sur le développement
                web moderne. Guides pratiques, tutoriels détaillés et retours
                d'expérience.
              </p>
            </div>

            {/* Recherche */}
            <div className="max-w-2xl mx-auto">
              <Suspense
                fallback={
                  <div className="h-12 bg-muted rounded-lg animate-pulse" />
                }
              >
                <SearchBar />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold">{allArticles.length}</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>

              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold">
                  {featuredArticles.length}
                </div>
                <div className="text-sm text-muted-foreground">En vedette</div>
              </div>

              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                  <Grid3X3 className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold">{categories.length}</div>
                <div className="text-sm text-muted-foreground">Catégories</div>
              </div>

              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold">2.5k+</div>
                <div className="text-sm text-muted-foreground">Lectures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Articles en vedette
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  Mes contenus les plus populaires et appréciés
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <PostCard
                  key={article.slug}
                  title={article.title}
                  excerpt={article.excerpt}
                  slug={article.slug}
                  date={new Date(article.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                  readTime={article.readTime}
                  category={article.category}
                  author={article.author}
                  featured={article.featured}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Quick Access */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Explorer par catégorie
              </h2>
              <p className="text-muted-foreground">
                Trouvez rapidement ce qui vous intéresse
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.slice(0, 8).map((category) => {
                const Icon = categoryIcons[category.slug] || Code;
                const colorClass =
                  categoryColors[category.slug] || "bg-gray-500";

                return (
                  <Link
                    key={category.slug}
                    href={`/categories/${category.slug}`}
                    className="group"
                  >
                    <div className="p-4 rounded-xl border border-border/50 bg-background hover:bg-muted/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                            {category.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {category.count} article
                            {category.count > 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center">
              <Link href="/categories">
                <Button variant="outline">
                  Voir toutes les catégories
                  <Grid3X3 className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <List className="w-5 h-5 text-blue-500" />
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Tous les articles
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  {allArticles.length} articles triés par date de publication
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Plus récents
                </Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-6">
              {allArticles.map((article, index) => (
                <div key={article.slug} className="group">
                  <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-border/50 bg-background hover:bg-muted/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {/* Article Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary" className="text-xs">
                              {article.category}
                            </Badge>
                            {article.featured && (
                              <Badge variant="outline" className="text-xs">
                                <Star className="w-3 h-3 mr-1" />
                                Vedette
                              </Badge>
                            )}
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            <Link href={`/articles/${article.slug}`}>
                              {article.title}
                            </Link>
                          </h3>

                          <p className="text-muted-foreground leading-relaxed line-clamp-2">
                            {article.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(article.date).toLocaleDateString(
                              "fr-FR",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              },
                            )}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>
                            {Math.floor(Math.random() * 1000) + 100} vues
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {article.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{article.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex md:flex-col gap-2 md:justify-center">
                      <Link
                        href={`/articles/${article.slug}`}
                        className="flex-1 md:flex-none"
                      >
                        <Button className="w-full group">
                          Lire l'article
                          <BookOpen className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {index < allArticles.length - 1 && (
                    <Separator className="my-6 opacity-30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 sm:p-12 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm shadow-xl text-center space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Ne ratez aucun article
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Recevez mes derniers articles directement dans votre boîte
                  mail. Pas de spam, promis !
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
                Rejoignez les 2,500+ développeurs qui me font confiance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
