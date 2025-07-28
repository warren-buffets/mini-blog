"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface PostCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  author?: string;
  featured?: boolean;
  className?: string;
}

export default function PostCard({
  title,
  excerpt,
  slug,
  date,
  readTime,
  category,
  author = "MiniBlog",
  featured = false,
  className,
}: PostCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/articles/${slug}`);
  };

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/categories/${category.toLowerCase()}`);
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <Card
        className={cn(
          "h-full transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5",
          "hover:-translate-y-1 border-border/50 hover:border-border",
          featured && "border-2 border-blue-200 dark:border-blue-800 shadow-md",
          className,
        )}
      >
        <CardContent className="p-0">
          {/* Image placeholder with gradient */}
          <div className="relative h-48 rounded-t-lg overflow-hidden">
            <div
              className={cn(
                "absolute inset-0 transition-transform duration-300 group-hover:scale-105",
                featured
                  ? "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
                  : "bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800",
              )}
            />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge
                variant={featured ? "default" : "secondary"}
                className="shadow-sm cursor-pointer hover:scale-105 transition-transform"
                onClick={handleCategoryClick}
              >
                {category}
              </Badge>
            </div>

            {/* Featured Badge */}
            {featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-white text-blue-600 hover:bg-white shadow-sm">
                  ✨ Featured
                </Badge>
              </div>
            )}

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h3
              className={cn(
                "font-bold leading-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400",
                featured ? "text-xl" : "text-lg",
              )}
            >
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-muted-foreground leading-relaxed line-clamp-3">
              {excerpt}
            </p>

            {/* Read more */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Lire la suite
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>

              {/* Interaction indicators */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                  Nouveau
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Variant pour les articles en liste horizontale
export function PostCardHorizontal({
  title,
  excerpt,
  slug,
  date,
  readTime,
  category,
  author = "MiniBlog",
  className,
}: PostCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/articles/${slug}`);
  };

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/categories/${category.toLowerCase()}`);
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <Card
        className={cn(
          "transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5",
          "hover:-translate-y-0.5 border-border/50 hover:border-border",
          className,
        )}
      >
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row">
            {/* Image */}
            <div className="relative w-full sm:w-48 h-32 sm:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute top-3 left-3">
                <Badge
                  variant="secondary"
                  className="text-xs shadow-sm cursor-pointer hover:scale-105 transition-transform"
                  onClick={handleCategoryClick}
                >
                  {category}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 sm:p-6">
              <div className="space-y-3">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg leading-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  Lire la suite
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
