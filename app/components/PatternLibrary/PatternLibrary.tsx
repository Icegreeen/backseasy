'use client'

import { useState } from 'react';
import dynamic from 'next/dynamic';

const BlackHoleCustomizer = dynamic(() => import("../../black-hole/background-customizatizer"), {
  ssr: false,
  loading: () => null
});

const NebulaEffect = dynamic(() => import("../NebulaEffect/NebulaEffect"), {
  ssr: false,
  loading: () => null
});

const BackgroundCustomizer = dynamic(() => import("../Gradient/GradientCustomizer"), {
  ssr: false,
  loading: () => null
});

const FrostedGlassGenerator = dynamic(() => import("../Gradient/FrostedGlassBackground"), {
  ssr: false,
  loading: () => null
});

const StableParticleSystem = dynamic(() => import("../BackgroundGenerators/ParticleSystem").then(mod => ({ default: mod.StableParticleSystem })), {
  ssr: false,
  loading: () => null
});

const SimpleMeshGradient = dynamic(() => import("../BackgroundGenerators/MeshGradient/SimpleMeshGradient"), {
  ssr: false,
  loading: () => null
});

type PatternCategory = 'blackhole' | 'nebula' | 'particle' | 'mesh' | 'gradient' | 'frosted';

export default function PatternLibrary() {
  const [activeCategory, setActiveCategory] = useState<PatternCategory>('blackhole');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const categories = [
    { id: 'blackhole' as PatternCategory, label: 'Black Hole' },
    { id: 'nebula' as PatternCategory, label: 'Nebula' },
    { id: 'particle' as PatternCategory, label: 'Particle System' },
    { id: 'mesh' as PatternCategory, label: 'Mesh Gradient' },
    { id: 'gradient' as PatternCategory, label: 'Gradient' },
    { id: 'frosted' as PatternCategory, label: 'Frosted Glass' },
  ];

  const renderContent = () => {
    switch (activeCategory) {
      case 'blackhole':
        return <BlackHoleCustomizer />;
      case 'nebula':
        return <NebulaEffect /> ;
      case 'particle':
        return <StableParticleSystem />;
      case 'mesh':
        return <SimpleMeshGradient />;
      case 'gradient':
        return <BackgroundCustomizer />;
      case 'frosted':
        return <FrostedGlassGenerator />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto flex flex-col gap-8 relative" style={{ isolation: 'isolate' }}>
      <div className="flex flex-wrap gap-2 md:gap-4 relative -mt-12 border border-stroke-1 my-18 rounded-out p-12" style={{ zIndex: 20 }}>
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => {
                if (activeCategory !== category.id) {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setActiveCategory(category.id);
                    setTimeout(() => setIsTransitioning(false), 50);
                  }, 150);
                }
              }}
              className={`
                px-16 py-6 md:px-16 py-2 rounded-lg text-sm md:text-base font-medium relative 
                border transition-[background-color,border-color] duration-200 ease-in-out
                ${
                  isActive
                    ? 'bg-gray-900/20 border-stroke-1 text-white rounded-out'
                    : 'text-white hover:text-text-1-subtle border-transparent'
                }
              `}
              style={{ pointerEvents: 'auto', zIndex: 20 }}
            >
              <span className="relative">
                {category.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white"></span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      <div className="w-full min-h-[400px] relative -mt-16" style={{ zIndex: 1, isolation: 'isolate' }}>
        <div 
          className="relative transition-opacity duration-300 ease-in-out"
          style={{ opacity: isTransitioning ? 0 : 1 }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
}