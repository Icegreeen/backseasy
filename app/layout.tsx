import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const outfit = Outfit({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://back.com"),
  title: "Backseasy",
  description: "Make the best background for your aplications.",
  keywords: [
    "Backgrounds",
    "TailwindCSS",
    "Tailwind",
    "NextJS",
    "Vue",
    "React",
    "Nuxt",
    "Javascript",
    "Typescript"
  ],
  authors: [{ name: "Flávio", url: "https://github.com/Icegreeen" }],
  creator: "Flavio",
  publisher: "Flavio",
  openGraph: {
    title: "Backseasy",
    description: "Make the best background for your aplications.",
    url: "",
    siteName: "backseasy",
    images: [
      {
        url: "/seoCover.png",
      },
    ],
    locale: "en_US",
    type: "website",
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
      <body className="bg-[#050505] text-white flex flex-col items-center w-screen gap-24 p-48 max-[630px]:px-[20px] overflow-x-hidden">
        <Nav />
        {children}
        <Footer />
        <div className="w-[35rem] h-[30rem] animate-spin-slow bg-[#6227b0]  opacity-40 rounded-full blur-[400px] absolute bottom-[80%] left-[86%] -z-50"></div>
        <div className="w-[35rem] h-[30rem] animate-spin-slow bg-[#6227b0] opacity-20 rounded-full blur-[400px] absolute bottom-[40%] left-[36%] -z-50"></div>
        <div className="w-[35rem] h-[30rem] animate-spin-slow bg-[#6227b0] opacity-40 rounded-full blur-[400px] absolute bottom-[-40%] left-[35%] -z-50"></div>

        <div className="w-[35rem] h-[30rem] animate-spin-slow bg-[#6227b0] opacity-40 rounded-full blur-[400px] absolute bottom-[-150%] left-[-15%] -z-50"></div>
      </body>
    </html>
  );
}
