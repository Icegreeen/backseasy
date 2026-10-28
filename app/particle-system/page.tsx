

import { Metadata } from 'next';
import StableParticleSystem from '../components/BackgroundGenerators/ParticleSystem/StableParticleSystem';
import GeneratorShell from "@/components/GeneratorShell";

export const metadata: Metadata = {
  title: 'Particle System Generator',
  description: 'Create interactive particle systems for your websites. Generate JavaScript code for animated particles including stars, bubbles, and fire effects.',
  keywords: 'particle system, animated particles, JavaScript particles, interactive effects, web animation, particle generator',
  openGraph: {
    title: 'Particle System Generator',
    description: 'Create interactive particle systems for your websites. Generate JavaScript code for animated particles including stars, bubbles, and fire effects.',
    type: 'website',
    url: 'https://backseasy.com/particle-system/',
    images: [
      {
        url: 'https://backseasy.com/seoBack.png',
        width: 1200,
        height: 630,
        alt: 'Particle System Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Particle System Generator',
    description: 'Create interactive particle systems for your websites. Generate JavaScript code for animated particles.',
    images: ['https://backseasy.com/seoBack.png'],
  },
  alternates: {
    canonical: 'https://backseasy.com/particle-system/',
  },
};

export default function ParticleSystemPage() {
  return (
    <GeneratorShell id="particles" title="Particle System Generator" description="Interactive stars, bubbles and fire. Tweak the particles and copy the JavaScript.">
      <StableParticleSystem />
    </GeneratorShell>
  );
}
