import { Metadata } from 'next';
import ThreeDimensionalCustomizer from '../components/BackgroundGenerators/ThreeDimensional/ThreeDimensionalCustomizer';

export const metadata: Metadata = {
  title: '3D Background Generator - BacksEasy',
  description: 'Create stunning 3D backgrounds with CSS transforms. Generate rotating cubes, spheres, and pyramids with customizable colors and animations.',
  keywords: '3D background, CSS 3D transforms, rotating shapes, 3D animation, web design, perspective effects',
  openGraph: {
    title: '3D Background Generator - BacksEasy',
    description: 'Create stunning 3D backgrounds with CSS transforms. Generate rotating cubes, spheres, and pyramids with customizable colors and animations.',
    type: 'website',
    url: 'https://backseasy.com/3d-background',
    images: [
      {
        url: 'https://backseasy.com/seoBack.png',
        width: 1200,
        height: 630,
        alt: '3D Background Generator - BacksEasy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D Background Generator - BacksEasy',
    description: 'Create stunning 3D backgrounds with CSS transforms. Generate rotating shapes with customizable colors and animations.',
    images: ['https://backseasy.com/seoBack.png'],
  },
  alternates: {
    canonical: 'https://backseasy.com/3d-background',
  },
};

export default function ThreeDBackgroundPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "3D Background Generator",
    "description": "Create stunning 3D backgrounds with CSS transforms. Generate rotating cubes, spheres, and pyramids with customizable colors and animations.",
    "url": "https://backseasy.com/3d-background",
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
      
      <div className="min-h-screen bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              🎲 <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">3D Background</span> Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Crie backgrounds 3D impressionantes com transformações CSS. 
              Gere cubos, esferas e pirâmides rotativos com cores e animações personalizáveis.
            </p>
          </div>

          <ThreeDimensionalCustomizer />

          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 border border-stroke-1 rounded-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Múltiplas Formas</h3>
                <p className="text-gray-400">Escolha entre cubos, esferas e pirâmides com diferentes estilos e comportamentos.</p>
              </div>
              
              <div className="p-6 border border-stroke-1 rounded-lg">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Cores Personalizáveis</h3>
                <p className="text-gray-400">Controle cada face e elemento com cores únicas para criar combinações únicas.</p>
              </div>
              
              <div className="p-6 border border-stroke-1 rounded-lg">
                <div className="text-3xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold mb-2">Controle Total</h3>
                <p className="text-gray-400">Ajuste velocidade, perspectiva, escala e posição para resultados perfeitos.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
