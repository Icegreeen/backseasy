import { Metadata } from 'next';
import SimpleMeshGradient from '../components/BackgroundGenerators/MeshGradient/SimpleMeshGradient';

export const metadata: Metadata = {
  title: 'Mesh Gradient Generator - BacksEasy',
  description: 'Create stunning mesh gradients with multiple control points. Generate CSS code for modern, smooth gradient backgrounds perfect for web design.',
  keywords: 'mesh gradient, gradient generator, CSS gradients, background generator, web design, modern gradients',
  openGraph: {
    title: 'Mesh Gradient Generator - BacksEasy',
    description: 'Create stunning mesh gradients with multiple control points. Generate CSS code for modern, smooth gradient backgrounds.',
    type: 'website',
    url: 'https://backseasy.com/mesh-gradient',
    images: [
      {
        url: 'https://backseasy.com/seoBack.png',
        width: 1200,
        height: 630,
        alt: 'Mesh Gradient Generator - BacksEasy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mesh Gradient Generator - BacksEasy',
    description: 'Create stunning mesh gradients with multiple control points. Generate CSS code for modern, smooth gradient backgrounds.',
    images: ['https://backseasy.com/seoBack.png'],
  },
  alternates: {
    canonical: 'https://backseasy.com/mesh-gradient',
  },
};

export default function MeshGradientPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Mesh Gradient Generator",
    "description": "Create stunning mesh gradients with multiple control points. Generate CSS code for modern, smooth gradient backgrounds perfect for web design.",
    "url": "https://backseasy.com/mesh-gradient",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "BacksEasy",
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
      
      <div className="w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-8">
              🌈 Mesh Gradient Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create modern mesh gradients with multiple control points.
            </p>
          </div>
        </div>

        <div className="mx-auto px-16 max-w-[1800px] mb-12 border border-stroke-1 my-8 rounded-out p-16">
          <SimpleMeshGradient />
        </div>

        
      </div>
    </>
  );
}
