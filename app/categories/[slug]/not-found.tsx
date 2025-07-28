import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Grid3X3, Home } from "lucide-react";

export default function CategoryNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto text-center space-y-8 p-6">
        <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
          <Grid3X3 className="w-12 h-12 text-muted-foreground" />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            Catégorie non trouvée
          </h1>
          <p className="text-lg text-muted-foreground">
            Désolé, cette catégorie n'existe pas ou a été supprimée.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/categories">
            <Button variant="outline" className="group w-full sm:w-auto">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Voir toutes les catégories
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
