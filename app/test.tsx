'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function BackgroundGenerator() {
  const [gridSize, setGridSize] = useState(79);
  const [strokeColor, setStrokeColor] = useState("white");
  const [opacity, setOpacity] = useState(0.25);
  const [shadowOpacity, setShadowOpacity] = useState(0.5);
  const [shadowBlur, setShadowBlur] = useState(100);
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [circleEffect, setCircleEffect] = useState(0.5);
  const [squareFillOpacity, setSquareFillOpacity] = useState(0.25);

  const svgCode = `
    <svg viewBox="0 0 960 637" fill="0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="${shadowBlur}" result="blur" />
          <feFlood flood-color="black" flood-opacity="${shadowOpacity}" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="circleEffect" cx="50%" cy="50%" r="50%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="black" stop-opacity="${circleEffect}" />
          <stop offset="100%" stop-color="transparent" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#circleEffect)" />
      <g mask="url(#mask0)">
        ${[...Array(8)].map((_, row) =>
          [...Array(9)].map((_, col) =>
            `<rect x="${col * gridSize}" y="${row * gridSize}" width="${gridSize}" height="${gridSize}" stroke="${strokeColor}" fill="white" fill-opacity="${squareFillOpacity}" filter="url(#shadow)" />`
          ).join("\n")
        ).join("\n")}
      </g>
    </svg>
  `;

  return (
    <div className="flex h-[500px] w-[1000px]  bg-gray-900 text-white p-6">
      {/* Preview Section */}
      <div className="flex-1 flex items-center justify-center border border-gray-700 relative overflow-hidden" style={{ backgroundColor }}>
        <svg viewBox="0 0 960 637" fill="0" className="absolute w-full h-full opacity-40">
          <rect width="100%" height="100%" fill="url(#circleEffect)" />
          <g mask="url(#mask0)">
            {[...Array(8)].map((_, row) =>
              [...Array(9)].map((_, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={col * gridSize}
                  y={row * gridSize}
                  width={gridSize}
                  height={gridSize}
                  stroke={strokeColor}
                  fill="white"
                  fillOpacity={squareFillOpacity}
                  filter="url(#shadow)"
                />
              ))
            )}
          </g>
        </svg>
      </div>
      
      {/* Controls Panel */}
      <div className="w-80 p-4 flex flex-col gap-4 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Background Grid Generator</h2>
        
        <label className="text-sm">Grid Size</label>
        <input type="range" min="40" max="100" value={gridSize} onChange={(e) => setGridSize(Number(e.target.value))} className="w-full" />

        <label className="text-sm">Stroke Color</label>
        <input type="color" value={strokeColor} onChange={(e) => setStrokeColor(e.target.value)} className="w-full" />

        <label className="text-sm">Opacity</label>
        <input type="range" min="0" max="1" step="0.05" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full" />
        
        <label className="text-sm">Shadow Opacity</label>
        <input type="range" min="0" max="1" step="0.05" value={shadowOpacity} onChange={(e) => setShadowOpacity(Number(e.target.value))} className="w-full" />
        
        <label className="text-sm">Shadow Blur</label>
        <input type="range" min="10" max="200" step="10" value={shadowBlur} onChange={(e) => setShadowBlur(Number(e.target.value))} className="w-full" />
        
        <label className="text-sm">Background Color</label>
        <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} className="w-full" />
        
        <label className="text-sm">Circle Effect Opacity</label>
        <input type="range" min="0" max="1" step="0.05" value={circleEffect} onChange={(e) => setCircleEffect(Number(e.target.value))} className="w-full" />

        <label className="text-sm">Square Fill Opacity</label>
        <input type="range" min="0" max="1" step="0.05" value={squareFillOpacity} onChange={(e) => setSquareFillOpacity(Number(e.target.value))} className="w-full" />
        
        <Textarea className="w-full h-40 bg-gray-700 p-2" readOnly value={svgCode} />
        <Button onClick={() => navigator.clipboard.writeText(svgCode)}>Copy Code</Button>
      </div>
    </div>
  );
}
