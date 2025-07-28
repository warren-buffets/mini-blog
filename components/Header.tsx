import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Github, Twitter } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-white font-bold text-sm">M</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl">MiniBlog</span>
              <Badge
                variant="secondary"
                className="hidden sm:inline-flex text-xs"
              >
                Beta
              </Badge>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              Accueil
            </Link>
            <Link
              href="/articles"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              Articles
            </Link>
            <Link
              href="/categories"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              Catégories
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              À propos
            </Link>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="#search">
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Search className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://github.com" target="_blank">
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#newsletter">
              <Button size="sm" className="ml-2">
                Newsletter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
