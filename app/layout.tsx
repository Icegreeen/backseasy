import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import DeferredAnalytics from "@/components/DeferredAnalytics";

const outfit = Outfit({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: "#000000",
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
  manifest: "/manifest.json",
  alternates: {
    types: {
      "application/rss+xml": "https://backseasy.com/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
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
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="bg-[#000] text-white min-h-screen flex flex-col items-center w-full gap-2 py-24 px-[clamp(16px,3vw,40px)] overflow-x-hidden">
        {process.env.NODE_ENV === "development" && (
          // Só em dev: remove Service Workers e caches antigos deste origin (evita servir JS velho depois de mudanças)
          <script
            dangerouslySetInnerHTML={{
              __html:
                "(function(){try{if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(r){r.forEach(function(x){x.unregister()})})}if(window.caches){caches.keys().then(function(k){k.forEach(function(n){caches.delete(n)})})}}catch(e){}})();",
            }}
          />
        )}
        <Starfield />
        <Nav />
        <main className="w-full flex-1 flex flex-col items-center gap-2">{children}</main>
        <Footer />
        <DeferredAnalytics gaId="G-JKC1QKPHY4" />
      </body>
    </html>
  );
}