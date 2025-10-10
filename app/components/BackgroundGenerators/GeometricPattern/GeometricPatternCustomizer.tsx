'use client';

import { useState, useEffect } from 'react';

export default function GeometricPatternCustomizer() {
  const [isClient, setIsClient] = useState(false);
  const [settings, setSettings] = useState({
    pattern: 'triangles',
    color1: '#0db7ff',
    color2: '#4e00ff',
    size: 40,
    speed: 15,
    animated: true,
    opacity: 1,
    rotation: 0
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const generatePatternCSS = () => {
    const { pattern, color1, color2, size, speed, animated, opacity, rotation } = settings;
    
    let patternCSS = '';
    
    switch(pattern) {
      case 'triangles':
        patternCSS = `
    linear-gradient(45deg, ${color1} 25%, transparent 25%),
    linear-gradient(-45deg, ${color2} 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, ${color1} 75%),
    linear-gradient(-45deg, transparent 75%, ${color2} 75%)`;
        break;
      case 'hexagons':
        patternCSS = `
    radial-gradient(circle at ${size/2}px ${size/2}px, ${color1} ${size/4}px, transparent ${size/4}px),
    radial-gradient(circle at ${size}px 0px, ${color2} ${size/4}px, transparent ${size/4}px)`;
        break;
      case 'circles':
        patternCSS = `
    radial-gradient(circle at 25% 25%, ${color1} 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, ${color2} 2px, transparent 2px)`;
        break;
      case 'lines':
        patternCSS = `
    linear-gradient(90deg, ${color1} 1px, transparent 1px),
    linear-gradient(${color2} 1px, transparent 1px)`;
        break;
      case 'diamonds':
        patternCSS = `
    linear-gradient(45deg, ${color1} 25%, transparent 25%),
    linear-gradient(-45deg, ${color1} 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, ${color2} 75%),
    linear-gradient(-45deg, transparent 75%, ${color2} 75%)`;
        break;
      case 'dots':
        patternCSS = `
    radial-gradient(circle at 50% 50%, ${color1} 1px, transparent 1px)`;
        break;
      case 'waves':
        patternCSS = `
    radial-gradient(ellipse at center, ${color1} 0%, transparent 50%),
    radial-gradient(ellipse at center, ${color2} 0%, transparent 50%)`;
        break;
      case 'grid':
        patternCSS = `
    linear-gradient(90deg, ${color1} 1px, transparent 1px),
    linear-gradient(0deg, ${color2} 1px, transparent 1px)`;
        break;
    }

    const animationCSS = animated ? `
  animation: movePattern ${speed}s linear infinite;` : '';

    const rotationCSS = rotation !== 0 ? `
  transform: rotate(${rotation}deg);` : '';

    return `.geometric-pattern {
  background: ${patternCSS};
  background-size: ${size}px ${size}px;
  opacity: ${opacity};${animationCSS}${rotationCSS}
}

${animated ? `@keyframes movePattern {
  0% { background-position: 0 0, 0 ${size/2}px, ${size/2}px -${size/2}px, -${size/2}px 0px; }
  100% { background-position: ${size}px ${size}px, ${size}px ${size*1.5}px, ${size*1.5}px ${size/2}px, ${size/2}px ${size}px; }
}` : ''}`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatePatternCSS());
      alert('Código copiado com sucesso!');
    } catch (err) {
      console.error('Erro ao copiar código:', err);
    }
  };

  const getPatternStyle = () => {
    const { pattern, color1, color2, size, animated, opacity, rotation } = settings;
    
    let patternCSS = '';
    
    switch(pattern) {
      case 'triangles':
        patternCSS = `
          linear-gradient(45deg, ${color1} 25%, transparent 25%),
          linear-gradient(-45deg, ${color2} 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, ${color1} 75%),
          linear-gradient(-45deg, transparent 75%, ${color2} 75%)
        `;
        break;
      case 'hexagons':
        patternCSS = `
          radial-gradient(circle at ${size/2}px ${size/2}px, ${color1} ${size/4}px, transparent ${size/4}px),
          radial-gradient(circle at ${size}px 0px, ${color2} ${size/4}px, transparent ${size/4}px)
        `;
        break;
      case 'circles':
        patternCSS = `
          radial-gradient(circle at 25% 25%, ${color1} 2px, transparent 2px),
          radial-gradient(circle at 75% 75%, ${color2} 2px, transparent 2px)
        `;
        break;
      case 'lines':
        patternCSS = `
          linear-gradient(90deg, ${color1} 1px, transparent 1px),
          linear-gradient(${color2} 1px, transparent 1px)
        `;
        break;
      case 'diamonds':
        patternCSS = `
          linear-gradient(45deg, ${color1} 25%, transparent 25%),
          linear-gradient(-45deg, ${color1} 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, ${color2} 75%),
          linear-gradient(-45deg, transparent 75%, ${color2} 75%)
        `;
        break;
      case 'dots':
        patternCSS = `
          radial-gradient(circle at 50% 50%, ${color1} 1px, transparent 1px)
        `;
        break;
      case 'waves':
        patternCSS = `
          radial-gradient(ellipse at center, ${color1} 0%, transparent 50%),
          radial-gradient(ellipse at center, ${color2} 0%, transparent 50%)
        `;
        break;
      case 'grid':
        patternCSS = `
          linear-gradient(90deg, ${color1} 1px, transparent 1px),
          linear-gradient(0deg, ${color2} 1px, transparent 1px)
        `;
        break;
    }

    return {
      background: patternCSS,
      backgroundSize: `${size}px ${size}px`,
      opacity: opacity,
      transform: rotation !== 0 ? `rotate(${rotation}deg)` : 'none',
      animation: animated ? `movePattern ${settings.speed}s linear infinite` : 'none'
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
          100% { background-position: ${settings.size}px ${settings.size}px; }
        }
      `}</style>
      <div className="w-full max-w-6xl mx-auto p-8">
        <h1 className="text-white text-2xl mb-8 text-center">Geometric Pattern Customizer</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview Area */}
          <div className="border border-stroke-1 rounded-out overflow-hidden min-h-[400px]">
            <div 
              className="w-full h-full"
              style={{
                background: settings.pattern === 'triangles' ? `
                  linear-gradient(45deg, ${settings.color2} 25%, transparent 25%),
                  linear-gradient(-45deg, ${settings.color2} 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, ${settings.color2} 75%),
                  linear-gradient(-45deg, transparent 75%, ${settings.color2} 75%),
                  ${settings.color1}
                ` : settings.pattern === 'circles' ? `
                  radial-gradient(circle at 50% 50%, ${settings.color2} 15%, transparent 15%),
                  ${settings.color1}
                ` : settings.pattern === 'lines' ? `
                  linear-gradient(0deg, transparent 24%, ${settings.color2} 25%, ${settings.color2} 26%, transparent 27%),
                  linear-gradient(90deg, transparent 24%, ${settings.color2} 25%, ${settings.color2} 26%, transparent 27%),
                  ${settings.color1}
                ` : `
                  linear-gradient(45deg, ${settings.color2} 25%, transparent 25%),
                  ${settings.color1}
                `,
                backgroundSize: `${settings.size}px ${settings.size}px`,
                opacity: settings.opacity,
                transform: settings.rotation !== 0 ? `rotate(${settings.rotation}deg)` : 'none',
                animation: settings.animated ? `movePattern ${settings.speed}s linear infinite` : 'none'
              }}
            />
          </div>

          {/* Controls Area */}
          <div className="border border-stroke-1 rounded-out p-6">
            <h2 className="text-white text-xl mb-6">Controls</h2>
        
        {/* Pattern Presets */}
        <div className="mb-6">
          <h3 className="font-semibold mb-4 text-text-1">Presets Rápidos</h3>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setSettings(prev => ({ 
                ...prev, 
                pattern: 'triangles',
                color1: '#0db7ff', 
                color2: '#4e00ff'
              }))}
              className="p-2 border border-stroke-1 rounded-out text-text-1 hover:bg-fg-1 transition-colors text-xs"
            >
              Triangles
            </button>
            <button
              onClick={() => setSettings(prev => ({ 
                ...prev, 
                pattern: 'hexagons',
                color1: '#667eea', 
                color2: '#764ba2'
              }))}
              className="p-2 border border-stroke-1 rounded-out text-text-1 hover:bg-fg-1 transition-colors text-xs"
            >
              Hexagons
            </button>
            <button
              onClick={() => setSettings(prev => ({ 
                ...prev, 
                pattern: 'circles',
                color1: '#f093fb', 
                color2: '#f5576c'
              }))}
              className="p-2 border border-stroke-1 rounded-out text-text-1 hover:bg-fg-1 transition-colors text-xs"
            >
              Circles
            </button>
            <button
              onClick={() => setSettings(prev => ({ 
                ...prev, 
                pattern: 'lines',
                color1: '#4facfe', 
                color2: '#00f2fe'
              }))}
              className="p-2 border border-stroke-1 rounded-out text-text-1 hover:bg-fg-1 transition-colors text-xs"
            >
              Lines
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col">
            <span className="font-semibold text-text-1">Padrão:</span>
            <select
              value={settings.pattern}
              onChange={(e) => setSettings(prev => ({ ...prev, pattern: e.target.value }))}
              className="w-full h-10 p-2 border border-stroke-1 bg-transparent text-white rounded-out appearance-none focus:outline-none"
            >
              <option value="triangles">Triângulos</option>
              <option value="hexagons">Hexágonos</option>
              <option value="circles">Círculos</option>
              <option value="lines">Linhas</option>
              <option value="diamonds">Diamantes</option>
              <option value="dots">Pontos</option>
              <option value="waves">Ondas</option>
              <option value="grid">Grid</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="font-semibold text-text-1">Tamanho:</span>
            <input
              type="range"
              min="20"
              max="100"
              value={settings.size}
              onChange={(e) => setSettings(prev => ({ ...prev, size: parseInt(e.target.value) }))}
              className="w-full h-2 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
            />
            <span className="text-xs text-text-1-subtle">{settings.size}px</span>
          </label>

          <label className="flex flex-col">
            <span className="font-semibold text-text-1">Cor 1:</span>
            <input
              type="color"
              value={settings.color1}
              onChange={(e) => setSettings(prev => ({ ...prev, color1: e.target.value }))}
              className="w-full h-8 border border-stroke-1 rounded-out cursor-pointer bg-transparent"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold text-text-1">Cor 2:</span>
            <input
              type="color"
              value={settings.color2}
              onChange={(e) => setSettings(prev => ({ ...prev, color2: e.target.value }))}
              className="w-full h-8 border border-stroke-1 rounded-out cursor-pointer bg-transparent"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold text-text-1">Velocidade:</span>
            <input
              type="range"
              min="5"
              max="30"
              value={settings.speed}
              onChange={(e) => setSettings(prev => ({ ...prev, speed: parseInt(e.target.value) }))}
              className="w-full h-2 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
            />
            <span className="text-xs text-text-1-subtle">{settings.speed}s</span>
          </label>

          <label className="flex flex-col">
            <span className="font-semibold text-text-1">Opacidade:</span>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={settings.opacity}
              onChange={(e) => setSettings(prev => ({ ...prev, opacity: parseFloat(e.target.value) }))}
              className="w-full h-2 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
            />
            <span className="text-xs text-text-1-subtle">{settings.opacity}</span>
          </label>

          <label className="flex flex-col">
            <span className="font-semibold text-text-1">Rotação:</span>
            <input
              type="range"
              min="0"
              max="360"
              value={settings.rotation}
              onChange={(e) => setSettings(prev => ({ ...prev, rotation: parseInt(e.target.value) }))}
              className="w-full h-2 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
            />
            <span className="text-xs text-text-1-subtle">{settings.rotation}°</span>
          </label>
        </div>

        <div className="space-y-4 mt-6">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={settings.animated}
              onChange={(e) => setSettings(prev => ({ ...prev, animated: e.target.checked }))}
              className="w-4 h-4 text-brand-blue bg-transparent border-stroke-1 rounded focus:ring-brand-blue"
            />
            <span className="text-text-1">Animado</span>
          </label>
        </div>
      </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">Code:</h2>
        <pre className="p-4 w-full border border-stroke-1 rounded-out bg-transparent text-sm overflow-auto text-text-1">
          {generatePatternCSS()}
        </pre>
        <div className="flex justify-center mt-6">
          <button
            onClick={copyToClipboard}
            className="border w-[150px] px-4 text-center py-2 border-green text-green rounded-out hover:opacity-70"
          >
            Copy Code
          </button>  
        </div>      
          </div>
        </div>
    </>
  );
}
