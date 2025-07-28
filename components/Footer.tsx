"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Rss,
  Heart,
  ArrowUp,
  Send,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-muted/30 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="border-b border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Restez informé</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Recevez les derniers articles et tutoriels directement dans
                votre boîte mail. Pas de spam, juste du contenu de qualité.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 h-11"
              />
              <Button className="px-6 h-11 group">
                S'abonner
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Plus de 2,500+ développeurs nous font confiance.
              <Link
                href="/privacy"
                className="underline hover:text-foreground transition-colors"
              >
                Politique de confidentialité
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl">MiniBlog</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Votre source de confiance pour les dernières tendances en
              développement web. Des tutoriels pratiques aux analyses
              approfondies.
            </p>

            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                Fait avec <Heart className="w-3 h-3 mx-1 text-red-500" /> en
                France
              </Badge>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Navigation</h4>
            <nav className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/articles", label: "Tous les articles" },
                { href: "/categories", label: "Catégories" },
                { href: "/about", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Catégories</h4>
            <nav className="space-y-3">
              {[
                { href: "/category/react", label: "React & Next.js" },
                { href: "/category/typescript", label: "TypeScript" },
                { href: "/category/css", label: "CSS & Design" },
                { href: "/category/backend", label: "Backend" },
                { href: "/category/tools", label: "Outils" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal & Social Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Légal & Social</h4>
            <nav className="space-y-3">
              {[
                { href: "/privacy", label: "Confidentialité" },
                { href: "/terms", label: "Conditions" },
                { href: "/sitemap", label: "Plan du site" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="pt-2">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Rss className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="opacity-50" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 MiniBlog. Tous droits réservés.
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/rss"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Flux RSS
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="h-8 w-8 p-0 group"
            >
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
