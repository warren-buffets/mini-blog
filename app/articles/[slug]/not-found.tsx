import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileX, Home } from "lucide-react";

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto text-center space-y-8 p-6">
        {/* Icône d'erreur */}
        <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
          <FileX className="w-12 h-12 text-muted-foreground" />
        </div>

        {/* Message d'erreur */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            Article non trouvé
          </h1>
          <p className="text-lg text-muted-foreground">
            Désolé, l'article que vous recherchez n'existe pas ou a été déplacé.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/articles">
            <Button variant="outline" className="group w-full sm:w-auto">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Voir tous les articles
            </Button>
          </Link>

          <Link href="/">
            <Button className="w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
