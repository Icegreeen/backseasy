'use client';

import { useState } from 'react';

export default function SimpleMeshGradient() {
  const [controlPoints, setControlPoints] = useState([
    { x: 100, y: 100, color: '#000000', intensity: 0.5 },
    { x: 0, y: 0, color: '#1e002e', intensity: 0.1 }
  ]);

  const [baseGradient, setBaseGradient] = useState({
    color1: '#0a0a0f',
    color2: '#1a0a2e',
    direction: '135deg'
  });

  const updateControlPoint = (index: number, field: string, value: string | number) => {
    setControlPoints(prev => prev.map((point, i) =>
      i === index ? { ...point, [field]: value } : point
    ));
  };

  const addControlPoint = () => {
    if (controlPoints.length < 5) {
      setControlPoints(prev => [
        ...prev,
        {
          x: Math.floor(Math.random() * 100),
          y: Math.floor(Math.random() * 100),
          color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          intensity: 0.5
        }
      ]);
    }
  };

  const removeControlPoint = (index: number) => {
    setControlPoints(prev => prev.filter((_, i) => i !== index));
  };

  const generateMeshCSS = () => {
    const meshGradients = controlPoints.map(point => 
      `radial-gradient(circle at ${point.x}% ${point.y}%, ${point.color} ${point.intensity * 50}%, transparent 70%)`
    ).join(',\n    ');

    return `background:
  ${meshGradients},
  linear-gradient(${baseGradient.direction}, ${baseGradient.color1} 0%, ${baseGradient.color2} 100%);`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateMeshCSS());
      alert("Code copied successfully!");
    } catch (err) {
      console.error('Error copying code:', err);
    }
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 border border-stroke-1 rounded-out overflow-hidden h-[610px]">
          <div 
            className="w-full h-full"
            style={{
              background: `
                ${controlPoints.map(point => 
                  `radial-gradient(circle at ${point.x}% ${point.y}%, ${point.color} ${point.intensity * 50}%, transparent 70%)`
                ).join(', ')},
                linear-gradient(${baseGradient.direction}, ${baseGradient.color1} 0%, ${baseGradient.color2} 100%)
              `
            }}
          />
        </div>
        
        <div className="border border-stroke-1 rounded-out p-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-lg">Control Points</h2>
            <button
              onClick={addControlPoint}
              className="px-12 py-1.5 border border-stroke-1 text-green rounded-out hover:opacity-70 text-sm"
            >
              + Add Point
            </button>
          </div>

          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {controlPoints.map((point, index) => (
              <div key={index} className="p-3 border border-stroke-1 rounded-out p-8">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-white font-medium text-sm">Point: {index + 1}</h4>
                  {controlPoints.length > 1 && (
                    <button
                      onClick={() => removeControlPoint(index)}
                      className="text-red text-xs hover:opacity-70"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-white text-xs mb-1">Color:</label>
                    <input
                      type="color"
                      value={point.color}
                      onChange={(e) => updateControlPoint(index, 'color', e.target.value)}
                      className="w-full h-[25px] bg-transparent rounded-out cursor-pointer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-xs mb-1">Intensity: {point.intensity}</label>
                    <input
                      type="range"
                      min="0.1"
                      max="1"
                      step="0.1"
                      value={point.intensity}
                      onChange={(e) => updateControlPoint(index, 'intensity', parseFloat(e.target.value))}
                      className="w-full h-1 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
                    />
                  </div>
                  
                  <div className='flex w-full'>
                    <div className='w-1/2'>
                      <label className="block text-white text-xs mb-1">Position X: {point.x}%</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={point.x}
                        onChange={(e) => updateControlPoint(index, 'x', parseInt(e.target.value))}
                        className="w-full h-1 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
                      />
                    </div>
                    
                    <div className='w-1/2'>
                      <label className="block text-white text-xs mb-1">Position Y: {point.y}%</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={point.y}
                        onChange={(e) => updateControlPoint(index, 'y', parseInt(e.target.value))}
                        className="w-full h-1 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
                      />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2 text-white text-sm">Ready to use:</h3>
            <pre className="p-6 w-full border border-stroke-1 rounded-out bg-transparent text-xs overflow-auto text-white max-h-[190px]">
              {generateMeshCSS()}
            </pre>
            <button
              onClick={copyToClipboard}
              className="mt-2 w-full mt-6 px-3 py-1.5 border border-green text-green rounded-out hover:opacity-70 text-sm"
            >
              📋 Copy Full Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

