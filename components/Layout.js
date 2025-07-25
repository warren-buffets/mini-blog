import Link from 'next/link';

/**
 * Composant Layout qui englobe toutes les pages.
 * Il fournit une barre de navigation simple en haut de l’écran
 * et un conteneur principal pour le contenu.
 *
 * @param {Object} props Les propriétés du composant
 * @param {React.ReactNode} props.children Le contenu de la page
 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex space-x-4">
          <Link href="/">
            {/* anchor is necessary for older Next.js versions */}
            <a className="hover:underline">Accueil</a>
          </Link>
          <Link href="/about">
            <a className="hover:underline">À propos</a>
          </Link>
        </div>
      </nav>
      <main className="container mx-auto p-4 flex-1 w-full">
        {children}
      </main>
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Mon mini blog
      </footer>
    </div>
  );
}
