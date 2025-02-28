'use client'

import React, { useState } from 'react';
import Image from "next/image";

const FrostedGlassGenerator: React.FC = () => {
  const [blur, setBlur] = useState('6px');
  const [opacity, setOpacity] = useState('0.1');
  const [shadowIntensity, setShadowIntensity] = useState('0.4');
  const [gradient, setGradient] = useState<'light' | 'dark' | 'none'>('dark');
  const [color, setColor] = useState('#ffffff');
  const [saturation, setSaturation] = useState(109);
  const [grainyActive, setGrainyActive] = useState(false);
  const [grainyOpacity, setGrainyOpacity] = useState(0.2); // Novo estado para opacidade do granulado

  // Define o fundo granulado com opacidade ajustável
  const grainyBackground = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='${grainyOpacity}'/%3E%3C/svg%3E")`;

  const gradientBackground =
    gradient === 'light'
      ? 'linear-gradient(to top right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))'
      : gradient === 'dark'
        ? 'linear-gradient(to top right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))'
        : 'none';

  const combinedBackground = grainyActive
    ? `${gradientBackground}, ${grainyBackground}`
    : gradientBackground;

  const generatedCSS = `
  .frosted-glass {
    backdrop-filter: blur(${blur}) saturate(${saturation}%);
    -webkit-backdrop-filter: blur(${blur}) saturate(${saturation}%);
    background-color: ${color}CC; // color with opacity -> (CC = 80%)
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 30px rgba(0, 0, 0, ${shadowIntensity});
    background-image: ${combinedBackground};
    background-size: ${grainyActive ? 'cover, 182px' : 'cover'};
    background-repeat: ${grainyActive ? 'no-repeat, repeat' : 'no-repeat'};
  }
  `;

  const handleIconClick = () => {
    const colorInput = document.querySelector('input[type="color"]') as HTMLInputElement;
    if (colorInput) {
      colorInput.click();
    }
  };

  return (
    <div className="w-full rounded-[8px] p-8 rounded-lg shadow-md text-gray-100">
      <h1 className="text-[18px] font-bold text-gray-100 mb-6 text-start">
        Frosted Glass Effect
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[30px]">
        {/* Pré-visualizações */}
        <div
          className="frosted-glass-preview w-full h-[400px] p-6 rounded-lg shadow-md flex items-center justify-center"
          style={{
            backgroundImage:
              'url(https://github.com/user-attachments/assets/bb052fda-d221-411e-b244-2d352c4cba2e)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
          }}
        >
          <div
            className="frosted-glass w-full max-w-[800px] h-[300px] rounded-lg shadow-lg flex items-center justify-center"
            style={{
              backdropFilter: `blur(${blur}) saturate(${saturation}%)`,
              WebkitBackdropFilter: `blur(${blur}) saturate(${saturation}%)`,
              backgroundColor: `${color}${Math.floor(parseFloat(opacity) * 255)
                .toString(16)
                .padStart(2, '0')}`,
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: `inset 0 0 30px rgba(0, 0, 0, ${shadowIntensity})`,
              backgroundImage: combinedBackground,
              backgroundSize: grainyActive ? 'cover, 182px' : 'cover',
              backgroundRepeat: grainyActive ? 'no-repeat, repeat' : 'no-repeat',
              padding: '20px',
              color: '#333',
              transition: 'all 0.3s ease',
            }}
          >
            <p className="text-lg text-white">Preview 1</p>
          </div>
        </div>

        <div
          className="frosted-glass-preview w-full h-[400px] p-6 rounded-lg shadow-md flex items-center justify-center"
          style={{
            backgroundImage:
              'url(https://github.com/user-attachments/assets/9abefce5-3d52-449a-a7e4-e728d2974bf1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
          }}
        >
          <div
            className="frosted-glass w-full max-w-[800px] h-[300px] rounded-lg shadow-lg flex items-center justify-center"
            style={{
              backdropFilter: `blur(${blur}) saturate(${saturation}%)`,
              WebkitBackdropFilter: `blur(${blur}) saturate(${saturation}%)`,
              backgroundColor: `${color}${Math.floor(parseFloat(opacity) * 255)
                .toString(16)
                .padStart(2, '0')}`,
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: `inset 0 0 30px rgba(0, 0, 0, ${shadowIntensity})`,
              backgroundImage: combinedBackground,
              backgroundSize: grainyActive ? 'cover, 182px' : 'cover',
              backgroundRepeat: grainyActive ? 'no-repeat, repeat' : 'no-repeat',
              padding: '20px',
              color: '#333',
              transition: 'all 0.3s ease',
            }}
          >
            <p className="text-lg text-white">Preview 2</p>
          </div>
        </div>

        {/* Layout dos Controles e Código Gerado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <div className="flex-1 p-6 rounded-lg shadow-md text-gray-100">
            <h2 className="text-lg font-semibold mb-8">Effect Customizer:</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <label className="flex flex-col mb-4">
                <span className="font-semibold">Blur Amount:</span>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={parseInt(blur)}
                  onChange={(e) => setBlur(`${e.target.value}px`)}
                  className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent"
                />
                <span className="text-sm text-gray-400">{blur}</span>
              </label>

              <label className="flex flex-col mb-4">
                <span className="font-semibold">Opacity:</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={parseFloat(opacity)}
                  onChange={(e) => setOpacity(e.target.value)}
                  className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent"
                />
                <span className="text-sm text-gray-400">{opacity}</span>
              </label>

              <label className="flex flex-col mb-4">
                <span className="font-semibold">Shadow Intensity:</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={parseFloat(shadowIntensity)}
                  onChange={(e) => setShadowIntensity(e.target.value)}
                  className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent"
                />
                <span className="text-sm text-gray-400">{shadowIntensity}</span>
              </label>

              <label className="flex flex-col mb-4">
                <span className="font-semibold">Saturation:</span>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={saturation}
                  onChange={(e) => setSaturation(Number(e.target.value))}
                  className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent"
                />
                <span className="text-sm text-gray-400">{saturation}%</span>
              </label>

              {/* Controle para Opacidade do Granulado */}
              <label className="flex flex-col mb-4">
                <span className="font-semibold">Granule Opacity:</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={grainyOpacity}
                  onChange={(e) => setGrainyOpacity(parseFloat(e.target.value))}
                  className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent"
                />
                <span className="text-sm text-gray-400">{grainyOpacity}</span>
              </label>


              {/* Toggle para o efeito granulado */}
              <label className="flex items-center mb-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={grainyActive}
                  onChange={() => setGrainyActive(!grainyActive)}
                  className="mr-2 w-[20px] rounded-full cursor-pointer"
                />
                <span className="font-semibold">Granulated Effect</span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col mb-4">
                <span className="font-semibold">Gradient Background:</span>
                <div className="flex space-x-2 mt-4">
                  {['light', 'dark', 'none'].map((type: any) => (
                    <button
                      key={type}
                      onClick={() => setGradient(type)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${gradient === type ? 'border w-[100px] cursor-pointer border-stroke-1 text-white rounded-[10px]' : 'w-[100px] text-gray-300'
                        } hover:bg-blue-500 focus:outline-none`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex flex-col mb-4">
                <span className="font-semibold">Color:</span>
                <div className='flex gap-8 justify-start items-center'>
                  <div className="relative flex items-center">
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-[50px] h-[50px] absolute opacity-0 cursor-pointer"
                      style={{ zIndex: 2 }}
                    />
                    <Image
                      src="/palette.svg"
                      alt="Palette Icon"
                      width={40}
                      height={40}
                      className="cursor-pointer z-1"
                      onClick={handleIconClick}
                    />
                  </div>
                  <span className="text-sm text-gray-400">{color}</span>
                </div>
              </label>
            </div>

          </div>

          {/* Código Gerado */}
          <div className="flex-1 p-6 shadow-md text-gray-100">
            <div className='flex justify-start gap-4 items-center mb-12'>
              <h2 className="text-lg font-semibold ">Generated CSS:</h2> <button
                onClick={() => navigator.clipboard.writeText(generatedCSS)}
                className="border text-center p-2 border-[#14532d] text-[#22c55e] rounded-[8px] w-[100px] hover:opacity-70 "
              >
                Copy CSS
              </button>
            </div>
            <pre className="border border-stroke-1 rounded-[10px] p- overflow-x-auto text-sm text-gray-100">
              <code>{generatedCSS}</code>
            </pre>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FrostedGlassGenerator;
