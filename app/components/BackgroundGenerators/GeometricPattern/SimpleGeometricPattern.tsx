'use client';

import { useState, useEffect } from 'react';

export default function SimpleGeometricPattern() {
  const [isClient, setIsClient] = useState(false);
  const [settings, setSettings] = useState({
    pattern: 'triangles',
    color1: '#0db7ff',
    color2: '#4e00ff',
    size: 40,
    animated: true,
    speed: 15
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getPatternStyle = () => {
    const { pattern, color1, color2, size, animated, speed } = settings;
    
    let background = '';
    
    switch (pattern) {
      case 'triangles':
        background = `
          linear-gradient(45deg, ${color2} 25%, transparent 25%),
          linear-gradient(-45deg, ${color2} 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, ${color2} 75%),
          linear-gradient(-45deg, transparent 75%, ${color2} 75%),
          ${color1}
        `;
        break;
      case 'circles':
        background = `
          radial-gradient(circle at 50% 50%, ${color2} 15%, transparent 15%),
          ${color1}
        `;
        break;
      case 'lines':
        background = `
          linear-gradient(0deg, transparent 24%, ${color2} 25%, ${color2} 26%, transparent 27%),
          linear-gradient(90deg, transparent 24%, ${color2} 25%, ${color2} 26%, transparent 27%),
          ${color1}
        `;
        break;
      case 'dots':
        background = `
          radial-gradient(circle at 50% 50%, ${color2} 10%, transparent 11%),
          ${color1}
        `;
        break;
      default:
        background = color1;
    }

    return {
      background,
      backgroundSize: `${size}px ${size}px`,
      animation: animated ? `movePattern ${speed}s linear infinite` : 'none'
    };
  };

  if (!isClient) {
    return (
      <div className="w-full max-w-6xl mx-auto p-8">
        <h1 className="text-white text-2xl mb-8 text-center">Geometric Pattern Customizer</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border border-stroke-1 rounded-out overflow-hidden min-h-[400px] bg-gray-800">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white">Loading...</span>
            </div>
          </div>
          <div className="border border-stroke-1 rounded-out p-6">
            <h2 className="text-white text-xl mb-6">Controls</h2>
            <div className="text-white">Loading controls...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        @keyframes movePattern {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
      `}</style>
      <div className="w-full max-w-6xl mx-auto p-8">
        <h1 className="text-white text-2xl mb-8 text-center">Geometric Pattern Customizer</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview Area */}
          <div className="border border-stroke-1 rounded-out overflow-hidden min-h-[400px]">
            <div 
              className="w-full h-full"
              style={getPatternStyle()}
            />
          </div>
          
          {/* Controls */}
          <div className="border border-stroke-1 rounded-out p-6">
            <h2 className="text-white text-xl mb-6">Controls</h2>
            
            <div className="space-y-6">
              {/* Pattern Selection */}
              <div>
                <label className="block text-white mb-2">Padrão:</label>
                <select
                  value={settings.pattern}
                  onChange={(e) => setSettings(prev => ({ ...prev, pattern: e.target.value }))}
                  className="w-full h-10 p-2 border border-stroke-1 bg-transparent text-white rounded-out appearance-none focus:outline-none"
                >
                  <option value="triangles">Triângulos</option>
                  <option value="circles">Círculos</option>
                  <option value="lines">Linhas</option>
                  <option value="dots">Pontos</option>
                </select>
              </div>

              {/* Colors */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Cor 1:</label>
                  <input
                    type="color"
                    value={settings.color1}
                    onChange={(e) => setSettings(prev => ({ ...prev, color1: e.target.value }))}
                    className="w-full h-10 border border-stroke-1 rounded-out cursor-pointer bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Cor 2:</label>
                  <input
                    type="color"
                    value={settings.color2}
                    onChange={(e) => setSettings(prev => ({ ...prev, color2: e.target.value }))}
                    className="w-full h-10 border border-stroke-1 rounded-out cursor-pointer bg-transparent"
                  />
                </div>
              </div>

              {/* Size */}
              <div>
                <label className="block text-white mb-2">Tamanho: {settings.size}px</label>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={settings.size}
                  onChange={(e) => setSettings(prev => ({ ...prev, size: parseInt(e.target.value) }))}
                  className="w-full h-2 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
                />
              </div>

              {/* Speed */}
              <div>
                <label className="block text-white mb-2">Velocidade: {settings.speed}s</label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={settings.speed}
                  onChange={(e) => setSettings(prev => ({ ...prev, speed: parseInt(e.target.value) }))}
                  className="w-full h-2 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
                />
              </div>

              {/* Animation Toggle */}
              <div>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={settings.animated}
                    onChange={(e) => setSettings(prev => ({ ...prev, animated: e.target.checked }))}
                    className="w-4 h-4 text-brand-blue bg-transparent border-stroke-1 rounded focus:ring-brand-blue"
                  />
                  <span className="text-white">Animado</span>
                </label>
              </div>

              {/* Presets */}
              <div>
                <label className="block text-white mb-2">Presets:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSettings(prev => ({
                      ...prev,
                      pattern: 'triangles',
                      color1: '#0db7ff',
                      color2: '#4e00ff'
                    }))}
                    className="p-2 border border-stroke-1 rounded-out text-white hover:bg-fg-1 transition-colors text-sm"
                  >
                    Neon
                  </button>
                  <button
                    onClick={() => setSettings(prev => ({
                      ...prev,
                      pattern: 'circles',
                      color1: '#667eea',
                      color2: '#764ba2'
                    }))}
                    className="p-2 border border-stroke-1 rounded-out text-white hover:bg-fg-1 transition-colors text-sm"
                  >
                    Purple
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
