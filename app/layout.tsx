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
  maximumScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://backseasy.com"),
  title: "Backseasy",
  description: "Make the best background for your applications.",
  icons: {
    apple: "/favicon.svg",
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  keywords: [
    "Backgrounds",
    "TailwindCSS",
    "Tailwind",
    "NextJS",
    "Vue",
    "React",
    "Nuxt",
    "Javascript",
    "Typescript",
    "Component library",
    "CSS backgrounds",
    "HTML5 backgrounds",
    "Web design",
    "UI/UX design",
    "Responsive backgrounds",
    "Gradient backgrounds",
    "Pattern backgrounds",
    "Animated backgrounds",
    "Custom backgrounds",
    "Website backgrounds",
    "Graphic design",
    "Front-end development",
    "Web development",
    "SVG backgrounds",
    "Parallax backgrounds",
    "Modern web design",
    "Creative backgrounds",
    "Web animation",
    "Design systems",
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
    title: "Backseasy",
    description: "Make the best background for your applications.",
    url: "https://backseasy.com",
    siteName: "Backseasy",
    images: [
      {
        url: "/seoCover.png",
      },
    ],
    locale: "en_US",
    type: "website",
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
        <div className="w-[35rem] h-[30rem] animate-spin-slow bg-[#6227b0] opacity-40 rounded-full blur-[400px] absolute bottom-[80%] left-[86%] -z-50"></div>
        <div className="w-[35rem] h-[30rem] animate-spin-slow bg-[#6227b0] opacity-20 rounded-full blur-[400px] absolute bottom-[40%] left-[36%] -z-50"></div>
      </body>
    </html>
  );
}
