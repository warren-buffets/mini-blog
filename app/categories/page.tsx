import { categories } from "@/lib/articles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Zap,
  Palette,
  Rocket,
  Database,
  Paintbrush,
  TestTube,
  Grid3X3,
  TrendingUp,
  BookOpen,
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
  react: "from-blue-500 to-blue-600",
  typescript: "from-blue-600 to-indigo-600",
  css: "from-pink-500 to-rose-500",
  performance: "from-green-500 to-emerald-600",
  backend: "from-purple-500 to-violet-600",
  design: "from-orange-500 to-amber-500",
  testing: "from-red-500 to-pink-500",
};

export const metadata = {
  title: "Catégories - MiniBlog",
  description:
    "Explorez nos articles par catégories : React, TypeScript, CSS, Performance, Backend, Design et Testing.",
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Grid3X3 className="w-6 h-6 text-blue-600" />
                <Badge variant="secondary" className="px-3 py-1">
                  {categories.length} catégories disponibles
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Explorez par catégorie
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Trouvez rapidement les sujets qui vous intéressent et plongez
                dans nos guides spécialisés sur chaque technologie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => {
                const Icon = categoryIcons[category.slug] || Code;
                const colorClass =
                  categoryColors[category.slug] || "from-gray-500 to-gray-600";

                return (
                  <Link
                    key={category.slug}
                    href={`/categories/${category.slug}`}
                    className="group"
                  >
                    <div className="relative p-8 rounded-2xl border border-border/50 bg-background hover:bg-muted/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-2 overflow-hidden">
                      {/* Background gradient */}
                      <div
                        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClass} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                      />

                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass} mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="space-y-4 relative z-10">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {category.name}
                            </h3>
                            <Badge variant="outline" className="text-sm">
                              {category.count} articles
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {category.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <Button
                            variant="ghost"
                            className="p-0 h-auto text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300"
                          >
                            Voir les articles →
                          </Button>

                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <TrendingUp className="w-4 h-4" />
                            <span>Populaire</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Stats Section */}
            <div className="mt-16 p-8 rounded-2xl bg-muted/30 border border-border/50">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold">Statistiques du blog</h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg mb-3">
                      <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">
                      {categories.reduce((total, cat) => total + cat.count, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Articles totaux
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg mb-3">
                      <Grid3X3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">
                      {categories.length}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Catégories
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg mb-3">
                      <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">
                      2.5k+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Lecteurs mensuels
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
