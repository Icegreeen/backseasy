

import { Metadata } from 'next';
import StableParticleSystem from '../components/BackgroundGenerators/ParticleSystem/StableParticleSystem';

export const metadata: Metadata = {
  title: 'Particle System Generator - BacksEasy',
  description: 'Create interactive particle systems for your websites. Generate JavaScript code for animated particles including stars, bubbles, and fire effects.',
  keywords: 'particle system, animated particles, JavaScript particles, interactive effects, web animation, particle generator',
  openGraph: {
    title: 'Particle System Generator - BacksEasy',
    description: 'Create interactive particle systems for your websites. Generate JavaScript code for animated particles including stars, bubbles, and fire effects.',
    type: 'website',
    url: 'https://backseasy.com/particle-system',
    images: [
      {
        url: 'https://backseasy.com/seoBack.png',
        width: 1200,
        height: 630,
        alt: 'Particle System Generator - BacksEasy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Particle System Generator - BacksEasy',
    description: 'Create interactive particle systems for your websites. Generate JavaScript code for animated particles.',
    images: ['https://backseasy.com/seoBack.png'],
  },
  alternates: {
    canonical: 'https://backseasy.com/particle-system',
  },
};

export default function ParticleSystemPage() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ✨ Particle System Generator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Crie sistemas de partículas interativos para seus websites. 
          </p>
        </div>
      </div>

      <div className="mx-auto px-16 max-w-[1800px] mb-12 border border-stroke-1 my-8 rounded-out p-16">
        <StableParticleSystem />
      </div>
    </div>
  );
}
