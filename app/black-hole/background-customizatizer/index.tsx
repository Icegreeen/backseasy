'use client'

import { useState } from "react";
import HeroExample from "./HeroExample";

export default function BlackHoleCustomizer() {
  const [size, setSize] = useState(50);
  const [coreSize, setCoreSize] = useState(40);
  const [outerSize, setOuterSize] = useState(80);
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#3b3a3a");
  const [color3, setColor3] = useState("#000");
  const [blur, setBlur] = useState(10);
  const [position, setPosition] = useState("bottom");

  const gradientStyle = {
    backgroundImage: `radial-gradient(circle at ${position}, ${color1} ${coreSize}%, ${color2} ${size}%, ${color3} ${outerSize}%)`,
    filter: `blur(${blur}px)`,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
  };

  const generatedCode = `
    <section
      className="flex flex-col items-center h-screen"
      style={{
        backgroundImage: ` + "`" + gradientStyle.backgroundImage + "`" + `,
        filter: ` + "`" + gradientStyle.filter + "`" + `
      }}
    >
      {your component or page}
    </section>
  `; 

  const copyToClipboard = async () => {
    try {
      const textToCopy = generatedCode.trim(); 
      await navigator.clipboard.writeText(textToCopy);
      alert("Código copiado com sucesso!");
    } catch (err) {
      console.error("Erro ao copiar código:", err);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center text-white p-6 gap-12">
      <div className="flex-1 flex items-center justify-center border border-stroke-1 rounded-[10px] relative overflow-hidden min-h-[640px] w-[500px]">
        <div className="absolute w-full h-full" style={{...gradientStyle, position: "absolute" as const}} />
            <div className="relative z-10 hidden md:block">
                <HeroExample />
            </div>
        </div>

      <div className="w-full md:w-2/5 flex border border-stroke-1 my-8 rounded-out flex-col p-[16px] text-white rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-6">Black hole customization:</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col">
            <span className="font-semibold">Size circle principal:</span>
            <input type="range" min="10" max="50" value={coreSize} onChange={(e) => setCoreSize(Number(e.target.value))} className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent" />
          </label>
          
          <label className="flex flex-col">
            <span className="font-semibold">Size gradiente:</span>
            <input type="range" min="30" max="100" value={size} onChange={(e) => setSize(Number(e.target.value))} className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent" />
          </label>
          
          <label className="flex flex-col">
            <span className="font-semibold">Size color external:</span>
            <input type="range" min="50" max="150" value={outerSize} onChange={(e) => setOuterSize(Number(e.target.value))} className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent" />
          </label>
          
          <label className="flex flex-col">
            <span className="font-semibold">Intensive bluer:</span>
            <input type="range" min="0" max="20" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent" />
          </label>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mt-6">
          <label className="flex flex-col my-4">
            <span className="font-semibold">Color internal:</span>
            <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent" />
          </label>
          
          <label className="flex flex-col my-4">
            <span className="font-semibold">Color middle</span>
            <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent" />
          </label>
          
          <label className="flex flex-col my-4">
            <span className="font-semibold">Color external:</span>
            <input type="color" value={color3} onChange={(e) => setColor3(e.target.value)} className="w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent" />
          </label>
        </div>

        <div className="flex-auto">
            <label className="block text-sm font-medium mb-4 text-white">Position:</label>
            <select
              value={position} onChange={(e) => setPosition(e.target.value)}
              className="w-full h-22 p-6 border cursor-pointer border-stroke-1 bg-transparent text-white rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option className="text-white bg-[#050505]" value="top">Top</option>
              <option className="text-white bg-[#050505]" value="center">Center</option>
              <option className="text-white bg-[#050505]" value="bottom">Bottom</option>
            </select>
          </div>
        
        <h2 className="text-lg font-semibold mt-6 mb-4">Code:</h2>
        <pre className="p-2 w-full h-2 border border-stroke-1 rounded-[10px] appearance-none cursor-pointer bg-transparent rounded text-sm overflow-auto">
            {generatedCode}
        </pre>
        <div className="flex justify-center mt-12">
        <button
                onClick={copyToClipboard}
                className="border w-[150px] px-4 text-center py-2 border-[#14532d] text-[#22c55e] rounded-[8px] hover:opacity-70"
              >
                Copy Code
            </button>  
        </div>      
      </div>
    </div>
  );
}