import { Metadata } from 'next';
import ThreeDimensionalCustomizer from '../components/BackgroundGenerators/ThreeDimensional/ThreeDimensionalCustomizer';
import GeneratorShell from "@/components/GeneratorShell";

export const metadata: Metadata = {
  title: '3D Background Generator',
  description: 'Create stunning 3D backgrounds with CSS transforms. Generate rotating cubes, spheres, and pyramids with customizable colors and animations.',
  keywords: '3D background, CSS 3D transforms, rotating shapes, 3D animation, web design, perspective effects',
  openGraph: {
    title: '3D Background Generator',
    description: 'Create stunning 3D backgrounds with CSS transforms. Generate rotating cubes, spheres, and pyramids with customizable colors and animations.',
    type: 'website',
    url: 'https://backseasy.com/3d-background/',
    images: [
      {
        url: 'https://backseasy.com/seoBack.png',
        width: 1200,
        height: 630,
        alt: '3D Background Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D Background Generator',
    description: 'Create stunning 3D backgrounds with CSS transforms. Generate rotating shapes with customizable colors and animations.',
    images: ['https://backseasy.com/seoBack.png'],
  },
  alternates: {
    canonical: 'https://backseasy.com/3d-background/',
  },
};

export default function ThreeDBackgroundPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "3D Background Generator",
    "description": "Create stunning 3D backgrounds with CSS transforms. Generate rotating cubes, spheres, and pyramids with customizable colors and animations.",
    "url": "https://backseasy.com/3d-background/",
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
      "Multiple 3D shapes",
      "CSS 3D transforms",
      "Customizable colors",
      "Rotation animations",
      "Perspective control",
      "Scale adjustment"
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
      <GeneratorShell id="3d" title="3D Background Generator" description="Rotating cubes, spheres and pyramids built with CSS 3D transforms.">
        <ThreeDimensionalCustomizer />
      </GeneratorShell>
    </>
  );
}
