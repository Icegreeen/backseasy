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
  title: "Backseasy",
  description: "Easily generate, customize, and download stunning backgrounds for your websites, applications, and UI/UX projects. Create professional designs with modern gradients, patterns, and animations!",
  icons: {
    apple: "/favicon.svg",
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  keywords: [
    "Background generator",
    "Custom backgrounds for websites",
    "CSS gradient backgrounds",
    "Next.js background library",
    "Tailwind CSS backgrounds",
    "Web design aesthetics",
    "Modern UI backgrounds",
    "Frontend background",
    "SVG and vector backgrounds",
    "Parallax scrolling backgrounds",
    "Web development backgrounds",
    "Interactive CSS backgrounds",
    "Minimalist web design backgrounds",
    "Dynamic website backgrounds",
    "Custom animated backgrounds",
    "Dark mode backgrounds",
    "3D web backgrounds",
    "Glassmorphism backgrounds",
    "Neumorphism UI backgrounds",
    "Blurry and frosted glass backgrounds",
    "Lightweight CSS backgrounds",
    "Optimized backgrounds for performance",
    "Creative frontend visuals",
    "High-quality web backgrounds",
    "JavaScript background effects",
    "CSS-only animated backgrounds",
    "Liquid-style backgrounds",
    "Professional UI/UX backgrounds",
    "Seamless pattern backgrounds",
    "Best background generators for web",
    "AI-powered background generator",
    "Lottie animated backgrounds",
    "Micro-interactions in backgrounds",
  ],
  alternates: {
    canonical: "https://backseasy.com",
    languages: {
      "en-US": "https://backseasy.com/en-US",
    },
    media: {
      "only screen and (max-width: 600px)": "https://backseasy.com/mobile",
    },
    types: {
      "application/rss+xml": "https://backseasy.com/rss",
    },
  },
  authors: [{ name: "Flávio", url: "https://github.com/Icegreeen" }],
  creator: "Flavio Aquila",
  publisher: "Flavio Aquila",
  openGraph: {
    title: "Backseasy - The Ultimate Background Generator",
    description: "Create, customize, and export professional backgrounds for your projects with ease. Free and easy-to-use background generator for designers and developers.",  
    url: "https://backseasy.com",
    siteName: "Backseasy",
    images: [
      {
        url: "/seoBack.png",
        width: 1200,
        height: 630,
        alt: "Backseasy - Background Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Backseasy - The Ultimate Background Generator",
    description: "Generate high-quality backgrounds for websites and apps in seconds! Explore gradients, animations, and modern UI/UX patterns.",
    site: "@Backseasy",
    creator: "@FlavioAquila",
    images: ["https://backseasy.com/seoBack.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <GoogleAnalytics gaId="G-JKC1QKPHY4" />
      <meta name="google-site-verification" content="7dViSr2b9UG4Q41X5i-3U2ii-MO4je52CwcQeOd0GRg" />
      <body className="bg-[#050505] text-white flex flex-col items-center w-screen gap-2 p-24 max-[630px]:px-[20px] overflow-x-hidden">
        <Nav />
        {children}
        <Footer />
        <div className="w-[35rem] h-[30rem] animate-spin-slow bg-[#ffffff] opacity-40 rounded-full blur-[400px] absolute bottom-[80%] left-[86%] -z-50"></div>
        <div className="w-[35rem] h-[30rem] animate-spin-slow bg-[#6227b0] opacity-20 rounded-full blur-[400px] absolute bottom-[40%] left-[36%] -z-50"></div>
      </body>
    </html>
  );
}