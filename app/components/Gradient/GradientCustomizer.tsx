'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { FiCopy } from 'react-icons/fi';

const BackgroundCustomizer = () => {
  const [color1, setColor1] = useState('#1c4b4f');
  const [color2, setColor2] = useState('#350813');
  const [gradientDirection, setGradientDirection] = useState('to right');
  const [blackoutActive, setBlackoutActive] = useState(false);
  const [grainyActive, setGrainyActive] = useState(false);

  const gradientStyle: CSSProperties = {
    background: `linear-gradient(${gradientDirection}, ${color1}, ${color2})`,
    position: 'relative',
    overflow: 'hidden',
    opacity: blackoutActive ? 0.3 : 1, // Adicionando a opacidade do blackout
  };

  const grainyStyle: CSSProperties = grainyActive
    ? {
      content: '""',
      backgroundColor: 'transparent',
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'repeat',
      backgroundSize: '182px',
      opacity: 0.12,
      top: 0,
      left: 0,
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 0,
    }
    : {};

  const toggleBlackout = () => {
    setBlackoutActive(!blackoutActive);
  };

  const toggleGrainy = () => {
    setGrainyActive(!grainyActive);
  };

  const generateTailwindCSS = () => {
    return `
      background: linear-gradient(${gradientDirection}, ${color1}, ${color2});
      ${blackoutActive ? `opacity: 0.3;` : ''}
      ${grainyActive
        ? `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E"); background-size: 182px; background-repeat: repeat; opacity: 0.12;`
        : ''
      }
    `;
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generateTailwindCSS());
    alert('Código copiado para a área de transferência!');
  };

  return (
    <div className="w-[800px] mx-auto rounded-lg rounded-[8px] p-12 border border-stroke-1">
      <h1 className="text-2xl font-semibold mb-8 mt-4 text-center text-white">Background Customizer</h1>

      <div className="flex flex-col gap-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Color 1:</label>
            <div className="relative">
              <input
                type="color"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="w-full h-[30px] cursor-pointer rounded-[15px] appearance-none border-none outline-none rounded-md bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-white">Color 2:</label>
            <div className="relative">
              <input
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="w-full h-[30px] cursor-pointer rounded-[15px] appearance-none border-none outline-none rounded-md bg-transparent"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-4 mb-12">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-4 text-white">Gradient Direction:</label>
            <select
              value={gradientDirection}
              onChange={(e) => setGradientDirection(e.target.value)}
              className="w-full h-22 p-4 border cursor-pointer border-stroke-1 bg-transparent text-white rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option className="text-white bg-[#050505]" value="to right">Left to Right</option>
              <option className="text-white bg-[#050505]" value="to left">Right to Left</option>
              <option className="text-white bg-[#050505]" value="to top">Bottom to Top</option>
              <option className="text-white bg-[#050505]" value="to bottom">Top to Bottom</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-4 text-white">Blackout Effect:</label>
            <div
              className={`w-full h-22 p-4 border cursor-pointer border-stroke-1 bg-transparent rounded-[8px] ${blackoutActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
              onClick={toggleBlackout}
            >
              {blackoutActive ? 'On' : 'Off'}
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-4 text-white">Grainy Effect:</label>
            <div
              className={`w-full h-22 p-4 border cursor-pointer border-stroke-1 bg-transparent rounded-[8px] ${grainyActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
              onClick={toggleGrainy}
            >
              {grainyActive ? 'On' : 'Off'}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-medium mb-6 text-center text-white">Preview</h2>
        <div
          className="w-full h-[150px] rounded-[8px] shadow-inner overflow-hidden"
          style={gradientStyle}
        >
          {grainyActive && <div style={grainyStyle}></div>}
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center gap-8">
          <h2 className="text-xl font-medium mb-6 text-center text-white">Generated Tailwind Code</h2>
          <button
            onClick={handleCopyToClipboard}
            className="text-white hover:text-blue-400 transition-colors"
          >
            <FiCopy size={20} />
          </button>
        </div>
        <div className="relative p-4 rounded-md">
          <code className="block p-12 rounded-[8px] border border-stroke-1 max-h-[150px] overflow-y-auto text-white">
            {generateTailwindCSS()}
          </code>
        </div>
      </div>
    </div>
  );
};

export default BackgroundCustomizer;
