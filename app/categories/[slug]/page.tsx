import { getArticlesByCategory, categories } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PostCard, { PostCardHorizontal } from "@/components/PostCard";
import { Separator } from "@/components/ui/separator";

const categoryIcons: { [key: string]: any } = {
  react: "⚛️",
  typescript: "🔷",
  css: "🎨",
  performance: "🚀",
  backend: "⚙️",
  design: "✨",
  testing: "🧪",
};

const categoryColors: { [key: string]: string } = {
  react: "from-blue-500 to-blue-600",
  typescript: "from-blue-600 to-indigo-600",
  css: "from-pink-500 to-rose-500",
  performance: "from-green-500 to-emerald-600",
  backend: "from-purple-500 to-violet-600",
  design: "from-orange-500 to-amber-500",
  testing: "from-red-500 to-pink-500",
};

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Générer les paramètres statiques pour le build
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

// Metadata pour le SEO
export async function generateMetadata({ params }: CategoryPageProps) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) {
    return {
      title: "Catégorie non trouvée",
    };
  }

  return {
    title: `${category.name} - Articles | MiniBlog - Virgile Ader`,
    description: `${category.description}. ${category.count} articles disponibles sur ${category.name}.`,
    keywords: `${category.name}, articles, tutoriels, développement web`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(params.slug);
  const colorClass =
    categoryColors[category.slug] || "from-gray-500 to-gray-600";
  const icon = categoryIcons[category.slug] || "📝";

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec navigation */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/categories">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Retour aux catégories
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section de la catégorie */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Icône de catégorie */}
            <div className="relative">
              <div
                className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${colorClass} shadow-2xl`}
              >
                <span className="text-4xl">{icon}</span>
              </div>
              <div
                className={`absolute -inset-4 bg-gradient-to-br ${colorClass} opacity-20 rounded-3xl blur-xl`}
              ></div>
            </div>

            {/* Contenu */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {articles.length} article{articles.length > 1 ? "s" : ""}{" "}
                  disponible{articles.length > 1 ? "s" : ""}
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Articles {category.name}
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles de la catégorie */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {articles.length > 0 ? (
              <div className="space-y-12">
                {/* Statistiques */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border/40">
                  <div className="flex items-center gap-4">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <span className="text-lg font-semibold">
                      {articles.length} article{articles.length > 1 ? "s" : ""}{" "}
                      trouvé{articles.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Trié par date de publication
                  </div>
                </div>

                {/* Liste des articles */}
                <div className="space-y-8">
                  {articles.map((article, index) => (
                    <div key={article.slug}>
                      <PostCardHorizontal
                        title={article.title}
                        excerpt={article.excerpt}
                        slug={article.slug}
                        date={new Date(article.date).toLocaleDateString(
                          "fr-FR",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )}
                        readTime={article.readTime}
                        category={article.category}
                        author={article.author}
                      />
                      {index < articles.length - 1 && (
                        <Separator className="mt-8 opacity-30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 space-y-6">
                <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">
                    Aucun article pour le moment
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Les articles sur {category.name} arrivent bientôt. En
                    attendant, découvrez nos autres catégories !
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/categories">
                    <Button variant="outline">
                      Voir toutes les catégories
                    </Button>
                  </Link>

                  <Link href="/articles">
                    <Button>Parcourir tous les articles</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Autres catégories suggérées */}
      {articles.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Découvrez aussi
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories
                  .filter((cat) => cat.slug !== params.slug && cat.count > 0)
                  .slice(0, 3)
                  .map((suggestedCategory) => {
                    const suggestedColorClass =
                      categoryColors[suggestedCategory.slug] ||
                      "from-gray-500 to-gray-600";
                    const suggestedIcon =
                      categoryIcons[suggestedCategory.slug] || "📝";

                    return (
                      <Link
                        key={suggestedCategory.slug}
                        href={`/categories/${suggestedCategory.slug}`}
                        className="group"
                      >
                        <div className="p-6 rounded-xl border border-border/50 bg-background hover:bg-muted/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                          <div
                            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${suggestedColorClass} mb-4 group-hover:scale-110 transition-transform`}
                          >
                            <span className="text-xl">{suggestedIcon}</span>
                          </div>

                          <h3 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {suggestedCategory.name}
                          </h3>

                          <p className="text-sm text-muted-foreground mb-3">
                            {suggestedCategory.count} article
                            {suggestedCategory.count > 1 ? "s" : ""}
                          </p>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto text-blue-600"
                          >
                            Voir →
                          </Button>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
