'use client';

import { useState, useEffect } from 'react';

export default function ThreeDimensionalCustomizer() {
  const [isClient, setIsClient] = useState(false);
  const [settings, setSettings] = useState({
    shape: 'cube',
    color1: '#0db7ff',
    color2: '#4e00ff',
    color3: '#BC4DFF',
    rotationSpeed: 10,
    perspective: 1000,
    scale: 1,
    position: 'center'
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const generate3DCSS = () => {
    const { shape, color1, color2, color3, rotationSpeed, perspective, scale, position } = settings;
    
    let shapesCSS = '';
    
    if (shape === 'cube') {
      shapesCSS = `
  .cube-3d {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%) scale(${scale});
    animation: rotate3d ${20/rotationSpeed}s infinite linear;
  }
  
  .face {
    position: absolute;
    width: 100px;
    height: 100px;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
  
  .face-front { background: ${color1}; transform: rotateY(0deg) translateZ(50px); }
  .face-back { background: ${color2}; transform: rotateY(180deg) translateZ(50px); }
  .face-right { background: ${color1}; transform: rotateY(90deg) translateZ(50px); }
  .face-left { background: ${color2}; transform: rotateY(-90deg) translateZ(50px); }
  .face-top { background: ${color3}; transform: rotateX(90deg) translateZ(50px); }
  .face-bottom { background: ${color3}; transform: rotateX(-90deg) translateZ(50px); }`;
    } else if (shape === 'sphere') {
      shapesCSS = `
  .sphere-3d {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, ${color1}, ${color2});
    transform: translate(-50%, -50%) scale(${scale});
    animation: rotate3d ${20/rotationSpeed}s infinite linear;
    box-shadow: 
      inset -20px -20px 50px rgba(0,0,0,0.3),
      inset 20px 20px 50px rgba(255,255,255,0.1);
  }`;
    } else if (shape === 'pyramid') {
      shapesCSS = `
  .pyramid-3d {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%) scale(${scale});
    animation: rotate3d ${20/rotationSpeed}s infinite linear;
  }
  
  .pyramid-face {
    position: absolute;
    width: 0;
    height: 0;
  }
  
  .pyramid-front { 
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid ${color1};
    transform: translateZ(25px);
  }
  .pyramid-back { 
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid ${color2};
    transform: translateZ(-25px) rotateY(180deg);
  }
  .pyramid-left { 
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid ${color1};
    transform: translateX(-25px) rotateY(-90deg);
  }
  .pyramid-right { 
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid ${color2};
    transform: translateX(25px) rotateY(90deg);
  }`;
    }

    return `.background-3d {
  width: 100%;
  height: 100%;
  perspective: ${perspective}px;
  transform-style: preserve-3d;
  position: relative;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}
${shapesCSS}

@keyframes rotate3d {
  0% { transform: translate(-50%, -50%) scale(${scale}) rotateX(0deg) rotateY(0deg); }
  100% { transform: translate(-50%, -50%) scale(${scale}) rotateX(360deg) rotateY(360deg); }
}`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generate3DCSS());
      alert('Código copiado com sucesso!');
    } catch (err) {
      console.error('Erro ao copiar código:', err);
    }
  };

  const renderShape = () => {
    const { shape, color1, color2, color3, scale, rotationSpeed } = settings;
    
    if (shape === 'cube') {
      return (
        <>
          <style jsx>{`
            .cube-3d {
              position: absolute;
              top: 50%;
              left: 50%;
              transform-style: preserve-3d;
              transform: translate(-50%, -50%) scale(${scale});
              animation: rotate3d ${20/rotationSpeed}s infinite linear;
            }
            
            .face {
              position: absolute;
              width: 100px;
              height: 100px;
              border: 2px solid rgba(255, 255, 255, 0.3);
            }
            
            .face-front { transform: rotateY(0deg) translateZ(50px); }
            .face-back { transform: rotateY(180deg) translateZ(50px); }
            .face-right { transform: rotateY(90deg) translateZ(50px); }
            .face-left { transform: rotateY(-90deg) translateZ(50px); }
            .face-top { transform: rotateX(90deg) translateZ(50px); }
            .face-bottom { transform: rotateX(-90deg) translateZ(50px); }
            
            @keyframes rotate3d {
              0% { transform: translate(-50%, -50%) scale(${scale}) rotateX(0deg) rotateY(0deg); }
              100% { transform: translate(-50%, -50%) scale(${scale}) rotateX(360deg) rotateY(360deg); }
            }
          `}</style>
          <div className="cube-3d">
            <div className="face face-front" style={{ background: color1 }}></div>
            <div className="face face-back" style={{ background: color2 }}></div>
            <div className="face face-right" style={{ background: color1 }}></div>
            <div className="face face-left" style={{ background: color2 }}></div>
            <div className="face face-top" style={{ background: color3 }}></div>
            <div className="face face-bottom" style={{ background: color3 }}></div>
          </div>
        </>
      );
    } else if (shape === 'sphere') {
      return (
        <>
          <style jsx>{`
            .sphere-3d {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 150px;
              height: 150px;
              border-radius: 50%;
              box-shadow: 
                inset -20px -20px 50px rgba(0,0,0,0.3),
                inset 20px 20px 50px rgba(255,255,255,0.1);
              transform: translate(-50%, -50%) scale(${scale});
              animation: rotate3d ${20/rotationSpeed}s infinite linear;
            }
            
            @keyframes rotate3d {
              0% { transform: translate(-50%, -50%) scale(${scale}) rotateX(0deg) rotateY(0deg); }
              100% { transform: translate(-50%, -50%) scale(${scale}) rotateX(360deg) rotateY(360deg); }
            }
          `}</style>
          <div 
            className="sphere-3d" 
            style={{ 
              background: `radial-gradient(circle at 30% 30%, ${color1}, ${color2})`
            }}
          ></div>
        </>
      );
    } else if (shape === 'pyramid') {
      return (
        <>
          <style jsx>{`
            .pyramid-3d {
              position: absolute;
              top: 50%;
              left: 50%;
              transform-style: preserve-3d;
              transform: translate(-50%, -50%) scale(${scale});
              animation: rotate3d ${20/rotationSpeed}s infinite linear;
            }
            
            .pyramid-face {
              position: absolute;
              width: 0;
              height: 0;
            }
            
            @keyframes rotate3d {
              0% { transform: translate(-50%, -50%) scale(${scale}) rotateX(0deg) rotateY(0deg); }
              100% { transform: translate(-50%, -50%) scale(${scale}) rotateX(360deg) rotateY(360deg); }
            }
          `}</style>
          <div className="pyramid-3d">
            <div className="pyramid-face pyramid-front" style={{ 
              borderLeft: '50px solid transparent',
              borderRight: '50px solid transparent',
              borderBottom: `100px solid ${color1}`,
              transform: 'translateZ(25px)'
            }}></div>
            <div className="pyramid-face pyramid-back" style={{ 
              borderLeft: '50px solid transparent',
              borderRight: '50px solid transparent',
              borderBottom: `100px solid ${color2}`,
              transform: 'translateZ(-25px) rotateY(180deg)'
            }}></div>
            <div className="pyramid-face pyramid-left" style={{ 
              borderLeft: '50px solid transparent',
              borderRight: '50px solid transparent',
              borderBottom: `100px solid ${color1}`,
              transform: 'translateX(-25px) rotateY(-90deg)'
            }}></div>
            <div className="pyramid-face pyramid-right" style={{ 
              borderLeft: '50px solid transparent',
              borderRight: '50px solid transparent',
              borderBottom: `100px solid ${color2}`,
              transform: 'translateX(25px) rotateY(90deg)'
            }}></div>
          </div>
        </>
      );
    }
  };

  if (!isClient) {
    return (
      <div className="w-full max-w-6xl mx-auto p-8">
        <h1 className="text-white text-2xl mb-8 text-center">3D Background Customizer</h1>
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
    <div className="w-full max-w-6xl mx-auto p-8">
      <h1 className="text-white text-2xl mb-8 text-center">3D Background Customizer</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Preview Area */}
        <div className="border border-stroke-1 rounded-out overflow-hidden min-h-[400px]">
          <div 
            className="w-full h-full relative"
            style={{ perspective: `${settings.perspective}px` }}
          >
            {renderShape()}
          </div>
        </div>

        {/* Controls Area */}
        <div className="border border-stroke-1 rounded-out p-6">
          <h2 className="text-white text-xl mb-6">Controls</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col">
            <span className="font-semibold text-text-1">Forma:</span>
            <select
              value={settings.shape}
              onChange={(e) => setSettings(prev => ({ ...prev, shape: e.target.value }))}
              className="w-full h-10 p-2 border border-stroke-1 bg-transparent text-white rounded-out appearance-none focus:outline-none"
            >
              <option value="cube">Cubo</option>
              <option value="sphere">Esfera</option>
              <option value="pyramid">Pirâmide</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="font-semibold text-text-1">Perspectiva:</span>
            <input
              type="range"
              min="500"
              max="2000"
              value={settings.perspective}
              onChange={(e) => setSettings(prev => ({ ...prev, perspective: parseInt(e.target.value) }))}
              className="w-full h-2 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
            />
            <span className="text-xs text-text-1-subtle">{settings.perspective}px</span>
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
            <span className="font-semibold text-text-1">Cor 3:</span>
            <input
              type="color"
              value={settings.color3}
              onChange={(e) => setSettings(prev => ({ ...prev, color3: e.target.value }))}
              className="w-full h-8 border border-stroke-1 rounded-out cursor-pointer bg-transparent"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold text-text-1">Velocidade:</span>
            <input
              type="range"
              min="1"
              max="20"
              value={settings.rotationSpeed}
              onChange={(e) => setSettings(prev => ({ ...prev, rotationSpeed: parseInt(e.target.value) }))}
              className="w-full h-2 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
            />
            <span className="text-xs text-text-1-subtle">{settings.rotationSpeed}</span>
          </label>

          <label className="flex flex-col">
            <span className="font-semibold text-text-1">Escala:</span>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={settings.scale}
              onChange={(e) => setSettings(prev => ({ ...prev, scale: parseFloat(e.target.value) }))}
              className="w-full h-2 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
            />
            <span className="text-xs text-text-1-subtle">{settings.scale}x</span>
          </label>
        </div>

        <div className="space-y-4 mt-6">
          <h3 className="font-semibold text-text-1">Presets</h3>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setSettings(prev => ({ 
                ...prev, 
                color1: '#0db7ff', 
                color2: '#4e00ff', 
                color3: '#BC4DFF' 
              }))}
              className="p-2 border border-stroke-1 rounded-out text-text-1 hover:bg-fg-1 transition-colors text-sm"
            >
              Neon
            </button>
            <button
              onClick={() => setSettings(prev => ({ 
                ...prev, 
                color1: '#667eea', 
                color2: '#764ba2', 
                color3: '#f093fb' 
              }))}
              className="p-2 border border-stroke-1 rounded-out text-text-1 hover:bg-fg-1 transition-colors text-sm"
            >
              Purple
            </button>
            <button
              onClick={() => setSettings(prev => ({ 
                ...prev, 
                color1: '#ffecd2', 
                color2: '#fcb69f', 
                color3: '#ff8a80' 
              }))}
              className="p-2 border border-stroke-1 rounded-out text-text-1 hover:bg-fg-1 transition-colors text-sm"
            >
              Sunset
            </button>
          </div>
        </div>
      </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">Code:</h2>
        <pre className="p-4 w-full border border-stroke-1 rounded-out bg-transparent text-sm overflow-auto text-text-1">
          {generate3DCSS()}
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
  );
}
