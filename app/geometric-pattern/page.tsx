import { Metadata } from 'next';
import SimpleGeometricPattern from '../components/BackgroundGenerators/GeometricPattern/SimpleGeometricPattern';


export const metadata: Metadata = {
  title: 'Geometric Pattern Generator - BacksEasy',
  description: 'Create dynamic geometric patterns with CSS. Generate animated triangles, hexagons, circles, and lines with customizable colors and movement.',
  keywords: 'geometric patterns, CSS patterns, animated backgrounds, pattern generator, web design, geometric shapes',
  openGraph: {
    title: 'Geometric Pattern Generator - BacksEasy',
    description: 'Create dynamic geometric patterns with CSS. Generate animated triangles, hexagons, circles, and lines with customizable colors and movement.',
    type: 'website',
    url: 'https://backseasy.com/geometric-pattern',
    images: [
      {
        url: 'https://backseasy.com/seoBack.png',
        width: 1200,
        height: 630,
        alt: 'Geometric Pattern Generator - BacksEasy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geometric Pattern Generator - BacksEasy',
    description: 'Create dynamic geometric patterns with CSS. Generate animated patterns with customizable colors and movement.',
    images: ['https://backseasy.com/seoBack.png'],
  },
  alternates: {
    canonical: 'https://backseasy.com/geometric-pattern',
  },
};

export default function GeometricPatternPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Geometric Pattern Generator",
    "description": "Create dynamic geometric patterns with CSS. Generate animated triangles, hexagons, circles, and lines with customizable colors and movement.",
    "url": "https://backseasy.com/geometric-pattern",
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
      
      <div className="min-h-screen bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              📐 <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Geometric Pattern</span> Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Crie padrões geométricos dinâmicos com CSS. 
              Gere triângulos, hexágonos, círculos e linhas animados com cores e movimento personalizáveis.
            </p>
          </div>

          <SimpleGeometricPattern />

          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 border border-stroke-1 rounded-lg">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Múltiplos Padrões</h3>
                <p className="text-gray-400">Escolha entre triângulos, hexágonos, círculos, linhas, diamantes e muito mais.</p>
              </div>
              
              <div className="p-6 border border-stroke-1 rounded-lg">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Animações Suaves</h3>
                <p className="text-gray-400">Padrões animados que se movem de forma fluida e hipnotizante.</p>
              </div>
              
              <div className="p-6 border border-stroke-1 rounded-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Controle Preciso</h3>
                <p className="text-gray-400">Ajuste tamanho, velocidade, rotação e opacidade para resultados perfeitos.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
