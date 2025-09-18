import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const outfit = Outfit({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://backseasy.com"),
  title: {
    default: "Backseasy - Free Background Generator for Web Designers & Developers",
    template: "%s | Backseasy - Background Generator"
  },
  description: "Create stunning, customizable backgrounds for websites and apps instantly! Free CSS gradient generator, animated backgrounds, glassmorphism effects, and modern UI patterns. Perfect for designers and developers.",
  keywords: [
    "background generator",
    "CSS gradient generator",
    "free background maker",
    "website background creator",
    "animated backgrounds",
    "glassmorphism generator",
    "tailwind CSS backgrounds",
    "next.js backgrounds",
    "web design tools",
    "UI/UX backgrounds",
    "custom backgrounds",
    "gradient backgrounds",
    "animated CSS backgrounds",
    "modern web backgrounds",
    "frontend design tools",
    "background patterns",
    "SVG backgrounds",
    "3D web backgrounds",
    "dark mode backgrounds",
    "minimalist backgrounds",
    "professional backgrounds",
    "responsive backgrounds",
    "mobile-friendly backgrounds",
    "high-performance backgrounds",
    "open source background tool",
    "developer tools",
    "design system backgrounds",
    "creative backgrounds",
    "interactive backgrounds",
    "parallax backgrounds"
  ],
  authors: [{ name: "Flávio Aquila", url: "https://github.com/Icegreeen" }],
  creator: "Flavio Aquila",
  publisher: "Backseasy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/favicon.svg",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://backseasy.com",
    languages: {
      "en-US": "https://backseasy.com",
      "pt-BR": "https://backseasy.com/pt-BR",
    },
    types: {
      "application/rss+xml": "https://backseasy.com/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://backseasy.com",
    siteName: "Backseasy",
    title: "Backseasy - Free Background Generator for Web Designers & Developers",
    description: "Create stunning, customizable backgrounds for websites and apps instantly! Free CSS gradient generator, animated backgrounds, and modern UI patterns.",
    images: [
      {
        url: "https://backseasy.com/seoBack.png",
        width: 1200,
        height: 630,
        alt: "Backseasy - Free Background Generator Tool",
        type: "image/png",
      },
      {
        url: "https://backseasy.com/seoBack.png",
        width: 1200,
        height: 630,
        alt: "Backseasy Background Examples",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Backseasy",
    creator: "@FlavioAquila",
    title: "Backseasy - Free Background Generator for Web Designers & Developers",
    description: "Create stunning, customizable backgrounds for websites and apps instantly! Free CSS gradient generator, animated backgrounds, and modern UI patterns.",
    images: ["https://backseasy.com/seoBack.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "7dViSr2b9UG4Q41X5i-3U2ii-MO4je52CwcQeOd0GRg",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Backseasy",
    "description": "Free background generator for web designers and developers. Create stunning, customizable backgrounds with CSS gradients, animations, and modern UI patterns.",
    "url": "https://backseasy.com",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Person",
      "name": "Flavio Aquila",
      "url": "https://github.com/Icegreeen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Backseasy",
      "url": "https://backseasy.com"
    },
    "keywords": "background generator, CSS gradients, web design, UI/UX, frontend tools, animated backgrounds",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareVersion": "1.0.0",
    "dateCreated": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "Backseasy Background Generator",
      "description": "Create and customize beautiful backgrounds for websites and applications",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Web Browser"
    }
  };

  return (
    <html lang="en" className={outfit.className}>
      <GoogleAnalytics gaId="G-JKC1QKPHY4" />
      <meta name="google-site-verification" content="7dViSr2b9UG4Q41X5i-3U2ii-MO4je52CwcQeOd0GRg" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <body className="bg-[#000] text-white flex flex-col items-center w-screen gap-2 p-24 max-[630px]:px-[20px] overflow-x-hidden">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}