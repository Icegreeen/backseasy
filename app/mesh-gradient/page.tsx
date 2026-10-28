import { Metadata } from 'next';
import SimpleMeshGradient from '../components/BackgroundGenerators/MeshGradient/SimpleMeshGradient';
import GeneratorShell from "@/components/GeneratorShell";

export const metadata: Metadata = {
  title: 'Mesh Gradient Generator',
  description: 'Create stunning mesh gradients with multiple control points. Generate CSS code for modern, smooth gradient backgrounds perfect for web design.',
  keywords: 'mesh gradient, gradient generator, CSS gradients, background generator, web design, modern gradients',
  openGraph: {
    title: 'Mesh Gradient Generator',
    description: 'Create stunning mesh gradients with multiple control points. Generate CSS code for modern, smooth gradient backgrounds.',
    type: 'website',
    url: 'https://backseasy.com/mesh-gradient/',
    images: [
      {
        url: 'https://backseasy.com/seoBack.png',
        width: 1200,
        height: 630,
        alt: 'Mesh Gradient Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mesh Gradient Generator',
    description: 'Create stunning mesh gradients with multiple control points. Generate CSS code for modern, smooth gradient backgrounds.',
    images: ['https://backseasy.com/seoBack.png'],
  },
  alternates: {
    canonical: 'https://backseasy.com/mesh-gradient/',
  },
};

export default function MeshGradientPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Mesh Gradient Generator",
    "description": "Create stunning mesh gradients with multiple control points. Generate CSS code for modern, smooth gradient backgrounds perfect for web design.",
    "url": "https://backseasy.com/mesh-gradient/",
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
      "Multiple control points",
      "Real-time preview",
      "CSS code generation",
      "Color picker",
      "Intensity control",
      "Position adjustment"
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
      <GeneratorShell id="mesh" title="Mesh Gradient Generator" description="Layer multiple color points into a smooth mesh gradient and copy the CSS.">
        <SimpleMeshGradient />
      </GeneratorShell>
    </>
  );
}
