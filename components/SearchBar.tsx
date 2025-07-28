"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X, TrendingUp, Clock, Hash } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
}

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({
  className,
  placeholder = "Rechercher des articles...",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mock data pour la démo
  const mockResults: SearchResult[] = [
    {
      id: "1",
      title: "Guide complet de Next.js 15",
      excerpt:
        "Découvrez toutes les nouveautés de Next.js 15 avec des exemples pratiques",
      category: "React",
      date: "2024-01-15",
      slug: "guide-nextjs-15",
    },
    {
      id: "2",
      title: "TypeScript : Bonnes pratiques 2024",
      excerpt: "Les meilleures pratiques TypeScript pour des projets robustes",
      category: "TypeScript",
      date: "2024-01-10",
      slug: "typescript-bonnes-pratiques",
    },
    {
      id: "3",
      title: "Tailwind CSS et composants réutilisables",
      excerpt: "Comment créer des composants modulaires avec Tailwind CSS",
      category: "CSS",
      date: "2024-01-05",
      slug: "tailwind-composants",
    },
  ];

  const trendingSearches = [
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "React Hooks",
    "shadcn/ui",
  ];

  // Simulation de recherche
  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const filtered = mockResults.filter(
          (result) =>
            result.title.toLowerCase().includes(query.toLowerCase()) ||
            result.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            result.category.toLowerCase().includes(query.toLowerCase()),
        );
        setResults(filtered);
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query]);

  // Fermer au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Raccourci clavier Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (event.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch?.(query);
      setIsOpen(false);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    inputRef.current?.focus();
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full max-w-2xl mx-auto", className)}
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-blue-500 transition-colors" />

          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className="pl-10 pr-20 h-12 text-base border-border/50 focus:border-blue-500 transition-all duration-200 group"
          />

          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
            {query && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="h-7 w-7 p-0 hover:bg-muted"
              >
                <X className="h-3 w-3" />
              </Button>
            )}
            <Badge
              variant="outline"
              className="text-xs px-2 py-1 hidden sm:inline-flex"
            >
              ⌘K
            </Badge>
          </div>
        </div>
      </form>

      {/* Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-background border border-border/50 rounded-lg shadow-xl shadow-black/5 dark:shadow-white/5 z-50 max-h-96 overflow-hidden">
          {query.length === 0 ? (
            // Trending searches
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  Recherches populaires
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((term) => (
                  <Button
                    key={term}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setQuery(term);
                      onSearch?.(term);
                      setIsOpen(false);
                    }}
                    className="h-8 px-3 text-sm hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20"
                  >
                    <Hash className="h-3 w-3 mr-1" />
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            // Search results
            <div className="max-h-80 overflow-y-auto">
              {isLoading ? (
                <div className="p-4 text-center">
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    Recherche en cours...
                  </div>
                </div>
              ) : results.length > 0 ? (
                <div className="p-2">
                  {results.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => {
                        setIsOpen(false);
                        // Navigation vers l'article
                      }}
                      className="w-full text-left p-3 rounded-md hover:bg-muted/50 transition-colors group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {result.title}
                          </h4>
                          <Badge variant="secondary" className="text-xs">
                            {result.category}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {result.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{result.date}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    Aucun résultat trouvé
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Essayez avec d'autres mots-clés
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
