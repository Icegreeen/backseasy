import { Metadata } from 'next';
import SimpleGeometricPattern from '../components/BackgroundGenerators/GeometricPattern/SimpleGeometricPattern';
import GeneratorShell from "@/components/GeneratorShell";


export const metadata: Metadata = {
  title: 'Geometric Pattern Generator',
  description: 'Create dynamic geometric patterns with CSS. Generate animated triangles, hexagons, circles, and lines with customizable colors and movement.',
  keywords: 'geometric patterns, CSS patterns, animated backgrounds, pattern generator, web design, geometric shapes',
  openGraph: {
    title: 'Geometric Pattern Generator',
    description: 'Create dynamic geometric patterns with CSS. Generate animated triangles, hexagons, circles, and lines with customizable colors and movement.',
    type: 'website',
    url: 'https://backseasy.com/geometric-pattern/',
    images: [
      {
        url: 'https://backseasy.com/seoBack.png',
        width: 1200,
        height: 630,
        alt: 'Geometric Pattern Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geometric Pattern Generator',
    description: 'Create dynamic geometric patterns with CSS. Generate animated patterns with customizable colors and movement.',
    images: ['https://backseasy.com/seoBack.png'],
  },
  alternates: {
    canonical: 'https://backseasy.com/geometric-pattern/',
  },
};

export default function GeometricPatternPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Geometric Pattern Generator",
    "description": "Create dynamic geometric patterns with CSS. Generate animated triangles, hexagons, circles, and lines with customizable colors and movement.",
    "url": "https://backseasy.com/geometric-pattern/",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Backseasy",
      "url": "https://backseasy.com"
    },
    "featureList": [
      "Multiple pattern types",
      "Animated patterns",
      "CSS code generation",
      "Customizable colors",
      "Size adjustment",
      "Rotation control"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <GeneratorShell id="geometric" title="Geometric Pattern Generator" description="Animated triangles, hexagons, circles and lines with custom colors and movement.">
        <SimpleGeometricPattern />
      </GeneratorShell>
    </>
  );
}
