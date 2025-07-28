import { getArticleBySlug, articles, getRelatedArticles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PostCard from "@/components/PostCard";
import MarkdownRenderer from "@/components/MarkdownRenderer"; // ← Import du nouveau composant

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: `${article.title} | MiniBlog - Virgile Ader`,
    description: article.excerpt,
    keywords: article.tags.join(", "),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug);

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec navigation */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/articles">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Retour aux articles
            </Button>
          </Link>
        </div>
      </header>

      {/* Article principal */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header de l'article */}
          <header className="space-y-8 mb-12">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit text-sm px-3 py-1">
                {article.category}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                {article.title}
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{article.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(article.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} de lecture</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <Separator />
          </header>

          {/* Contenu de l'article avec le nouveau renderer */}
          <div className="mb-16">
            <MarkdownRenderer content={article.content} />
          </div>

          {/* Footer de l'article */}
          <footer className="mt-16 space-y-8">
            <Separator />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 bg-muted/30 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">VA</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{article.author}</h3>
                  <p className="text-muted-foreground">
                    Développeur Full-Stack passionné par les technologies web
                    modernes
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Link href="/about">
                  <Button variant="outline" size="sm">
                    En savoir plus
                  </Button>
                </Link>
                <Link href="/articles">
                  <Button size="sm">Plus d'articles</Button>
                </Link>
              </div>
            </div>

            {/* Articles similaires */}
            {relatedArticles.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-2xl font-bold">Articles similaires</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <PostCard
                      key={relatedArticle.slug}
                      title={relatedArticle.title}
                      excerpt={relatedArticle.excerpt}
                      slug={relatedArticle.slug}
                      date={new Date(relatedArticle.date).toLocaleDateString(
                        "fr-FR",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                      readTime={relatedArticle.readTime}
                      category={relatedArticle.category}
                      author={relatedArticle.author}
                      featured={relatedArticle.featured}
                    />
                  ))}
                </div>
              </section>
            )}
          </footer>
        </div>
      </article>
    </div>
  );
}
