'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NebulaEffect() {
  const [size, setSize] = useState(400);
  const [speed, setSpeed] = useState(8);
  const [blur, setBlur] = useState(70);
  const [opacity, setOpacity] = useState(1);
  const [color1, setColor1] = useState('#6e20ff');
  const [color2, setColor2] = useState('#ef7be9');

  const generatedCode = `
    <div style={{
      width: '${size}px',
      height: '400px',
      filter: 'blur(${blur}px)',
      backgroundImage: 'linear-gradient(${color1}, ${color2})',
      animation: 'rotate ${speed}s linear infinite',
      opacity: '${opacity}',
      borderRadius: '30% 70% 70% 30%/30% 30% 70% 70%',
    }} />
  `;

  const fullCode = `
    <style>
      @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
    ${generatedCode}
  `;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullCode.trim());
  };

  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center text-white p-4 gap-12">
      <div className="flex-1 flex items-center justify-center border border-stroke-1 rounded-out relative overflow-hidden min-h-[635px]">
        <div
          className="rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
          style={{
            width: `${Math.min(size, 800)}px`,
            height: '400px',
            filter: `blur(${blur}px)`,
            backgroundImage: `linear-gradient(${color1}, ${color2})`,
            animation: `rotate ${Math.max(5, speed)}s linear infinite`,
            opacity: opacity,
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </div>

      <div className="w-full md:w-2/5 flex flex-col">
        <div className="p-[20px] rounded-lg shadow-md text-gray-100 border border-stroke-1 rounded-out ">
          <h2 className="text-lg font-semibold mb-6">Effect Customizer:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col">
              <span className="font-semibold">Size:</span>
              <input
                type="range"
                min="300"
                max="800"
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
                className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent"
              />
              <span className="text-sm text-gray-400">{size}px</span>
            </label>

            <label className="flex flex-col">
              <span className="font-semibold">Speed:</span>
              <input
                type="range"
                min="5"
                max="50"
                value={speed}
                onChange={(e) => setSpeed(parseInt(e.target.value))}
                className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent"
              />
              <span className="text-sm text-gray-400">{speed}s</span>
            </label>

            <label className="flex flex-col">
              <span className="font-semibold">Blur:</span>
              <input
                type="range"
                min="0"
                max="200"
                value={blur}
                onChange={(e) => setBlur(parseInt(e.target.value))}
                className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent"
              />
              <span className="text-sm text-gray-400">{blur}px</span>
            </label>

            <label className="flex flex-col">
              <span className="font-semibold">Opacity:</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent"
              />
              <span className="text-sm text-gray-400">{opacity}</span>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <label className="flex flex-col">
              <span className="font-semibold">Color 1:</span>
              <input
                type="color"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="w-full cursor-pointer"
              />
            </label>

            <label className="flex flex-col">
              <span className="font-semibold">Color 2:</span>
              <input
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="w-full cursor-pointer"
              />
            </label>
          </div>
        </div>

        <div className="w-full mt-12 p-[20px] rounded-lg shadow-md text-gray-100 border border-stroke-1 rounded-out">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-semibold">Generated Code:</h2>
            <div className='flex gap-6'>
              <Link href={'https://backseasy.com/projects/blurred'}>
                <button className="border px-4 py-2 border-[#14532d] text-[#22c55e] rounded-[8px] hover:opacity-70">
                  Tutorial
                </button>
              </Link>
              <button
                onClick={copyToClipboard}
                className="border px-4 py-2 border-[#14532d] text-[#22c55e] rounded-[8px] hover:opacity-70"
              >
                Copy Code
              </button>
              </div>
          </div>
          <pre className="border border-stroke-1 rounded-[10px] p-4 overflow-x-auto text-sm text-gray-100">
            <code>{generatedCode}</code>
          </pre>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}