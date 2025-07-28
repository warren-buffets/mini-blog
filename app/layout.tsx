import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DevTools from "@/components/DevTools";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "MiniBlog - L'art du développement web",
    template: "%s | MiniBlog",
  },
  description:
    "Découvrez les dernières tendances, tutoriels et bonnes pratiques du développement moderne. De React à l'IA, explorons ensemble l'avenir du web.",
  keywords: [
    "développement web",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "CSS",
    "tutoriels",
    "blog technique",
  ],
  authors: [{ name: "MiniBlog Team" }],
  creator: "MiniBlog",
  publisher: "MiniBlog",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://miniblog.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://miniblog.dev",
    title: "MiniBlog - L'art du développement web",
    description:
      "Découvrez les dernières tendances, tutoriels et bonnes pratiques du développement moderne.",
    siteName: "MiniBlog",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MiniBlog - Blog de développement web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MiniBlog - L'art du développement web",
    description:
      "Découvrez les dernières tendances, tutoriels et bonnes pratiques du développement moderne.",
    images: ["/og-image.jpg"],
    creator: "@miniblog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Tailwind CSS via CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Configuration Tailwind */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
              darkMode: ['class'],
              theme: {
                extend: {
                  colors: {
                    border: 'hsl(214.3 31.8% 91.4%)',
                    input: 'hsl(214.3 31.8% 91.4%)',
                    ring: 'hsl(221.2 83.2% 53.3%)',
                    background: 'hsl(0 0% 100%)',
                    foreground: 'hsl(222.2 84% 4.9%)',
                    primary: {
                      DEFAULT: 'hsl(221.2 83.2% 53.3%)',
                      foreground: 'hsl(210 40% 98%)',
                    },
                    secondary: {
                      DEFAULT: 'hsl(210 40% 96%)',
                      foreground: 'hsl(222.2 84% 4.9%)',
                    },
                    destructive: {
                      DEFAULT: 'hsl(0 84.2% 60.2%)',
                      foreground: 'hsl(210 40% 98%)',
                    },
                    muted: {
                      DEFAULT: 'hsl(210 40% 96%)',
                      foreground: 'hsl(215.4 16.3% 46.9%)',
                    },
                    accent: {
                      DEFAULT: 'hsl(210 40% 96%)',
                      foreground: 'hsl(222.2 84% 4.9%)',
                    },
                    popover: {
                      DEFAULT: 'hsl(0 0% 100%)',
                      foreground: 'hsl(222.2 84% 4.9%)',
                    },
                    card: {
                      DEFAULT: 'hsl(0 0% 100%)',
                      foreground: 'hsl(222.2 84% 4.9%)',
                    },
                  },
                  borderRadius: {
                    lg: '0.5rem',
                    md: '0.375rem',
                    sm: '0.25rem',
                  },
                  fontFamily: {
                    sans: ['Inter', 'system-ui', 'sans-serif'],
                  },
                  animation: {
                    'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                    'scroll': 'scroll 2s ease-in-out infinite',
                    'floating': 'floating 3s ease-in-out infinite',
                    'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  },
                  keyframes: {
                    fadeInUp: {
                      'from': { opacity: '0', transform: 'translateY(20px)' },
                      'to': { opacity: '1', transform: 'translateY(0)' }
                    },
                    scroll: {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(8px)' }
                    },
                    floating: {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-10px)' }
                    }
                  }
                }
              }
            }
          `,
          }}
        />

        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Theme color */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />

        {/* Favicon (optionnel - pas d'erreur si manquant) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "MiniBlog",
              description: "Blog de développement web moderne",
              url: "https://miniblog.dev",
              author: {
                "@type": "Organization",
                name: "MiniBlog Team",
              },
              publisher: {
                "@type": "Organization",
                name: "MiniBlog",
              },
            }),
          }}
        />
      </head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "flex flex-col",
          inter.variable,
        )}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium"
        >
          Aller au contenu principal
        </a>

        {/* Header */}
        <Header />

        {/* Main content */}
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Development tools */}
        <DevTools />
      </body>
    </html>
  );
}
