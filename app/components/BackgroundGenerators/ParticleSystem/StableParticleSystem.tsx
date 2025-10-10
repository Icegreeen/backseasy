'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

export default function StableParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<any[]>([]);
  
  const [settings, setSettings] = useState({
    count: 100,
    speed: 1,
    color: '#FF8C00',
    size: 3,
    type: 'stars'
  });

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }, []);

  const createParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particlesRef.current = [];
    for (let i = 0; i < settings.count; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * settings.speed * 2,
        vy: (Math.random() - 0.5) * settings.speed * 2,
        size: Math.random() * settings.size + 1
      });
    }
  }, [settings.count, settings.speed, settings.size]);

    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      const spikes = 5;
      const outerRadius = size;
      const innerRadius = size * 0.4;
      let rot = Math.PI / 2 * 3;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(x, y - outerRadius);
      for (let i = 0; i < spikes; i++) {
        ctx.lineTo(x + Math.cos(rot) * outerRadius, y + Math.sin(rot) * outerRadius);
        rot += step;
        ctx.lineTo(x + Math.cos(rot) * innerRadius, y + Math.sin(rot) * innerRadius);
        rot += step;
      }
      ctx.closePath();
      ctx.fill();
    };

    const drawBubble = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.fill();
    };

    const drawFire = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, 'rgba(255, 165, 0, 1)');
      gradient.addColorStop(0.5, 'rgba(255, 69, 0, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    };

  const drawParticle = useCallback((ctx: CanvasRenderingContext2D, particle: any) => {
    ctx.fillStyle = settings.color;

    if (settings.type === 'stars') {
      drawStar(ctx, particle.x, particle.y, particle.size);
    } else if (settings.type === 'bubbles') {
      drawBubble(ctx, particle.x, particle.y, particle.size);
    } else if (settings.type === 'fire') {
      drawFire(ctx, particle.x, particle.y, particle.size);
    } else {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [settings.color, settings.type]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      particle.y = Math.max(0, Math.min(canvas.height, particle.y));

      drawParticle(ctx, particle);
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [drawParticle]);

  const startAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    initializeCanvas();
    createParticles();
    animate();
  }, [initializeCanvas, createParticles, animate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation();
    }, 100);
    
    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startAnimation]);

  useEffect(() => {
    createParticles();
  }, [createParticles]);

  useEffect(() => {
    const handleResize = () => {
      initializeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initializeCanvas, createParticles]);

  const generateJavaScriptCode = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Particle System</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow: hidden;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        }

        #particleCanvas {
          display: block;
          width: 100vw;
          height: 100vh;
        }
      </style>
    </head>
    <body>
      <canvas id="particleCanvas"></canvas>

      <script>
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');

        let particles = [];
        const particleCount = ${settings.count};
        const particleSize = ${settings.size};
        const particleColor = '${settings.color}';
        const particleSpeed = ${settings.speed};
        const particleType = '${settings.type}';

        const initParticles = () => {
          particles = [];
          for (let i = 0; i < particleCount; i++) {
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              vx: (Math.random() - 0.5) * particleSpeed * 2,
              vy: (Math.random() - 0.5) * particleSpeed * 2,
              size: Math.random() * particleSize + 1
            });
          }
        };

        const drawStar = (ctx, x, y, size) => {
          const spikes = 5;
          const outerRadius = size;
          const innerRadius = size * 0.4;
          let rot = Math.PI / 2 * 3;
          const step = Math.PI / spikes;

          ctx.beginPath();
          ctx.moveTo(x, y - outerRadius);
          for (let i = 0; i < spikes; i++) {
            ctx.lineTo(x + Math.cos(rot) * outerRadius, y + Math.sin(rot) * outerRadius);
            rot += step;
            ctx.lineTo(x + Math.cos(rot) * innerRadius, y + Math.sin(rot) * innerRadius);
            rot += step;
          }
          ctx.closePath();
          ctx.fill();
        };

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            particle.x = Math.max(0, Math.min(canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(canvas.height, particle.y));

            ctx.fillStyle = particleColor;
            ctx.shadowColor = particleColor;
            ctx.shadowBlur = 10;
            
            if (particleType === 'stars') {
              drawStar(ctx, particle.x, particle.y, particle.size);
            } else if (particleType === 'fire') {
              ctx.globalAlpha = 0.8;
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
              ctx.fill();
              ctx.globalAlpha = 1;
            } else if (particleType === 'bubbles') {
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
              ctx.strokeStyle = particleColor;
              ctx.lineWidth = 2;
              ctx.stroke();
            } else {
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
              ctx.fill();
            }
          });

          requestAnimationFrame(animate);
        };

        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          initParticles();
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();
      </script>
    </body>
    </html>`;
};

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateJavaScriptCode());
      alert("Code copied successfully!");
    } catch (err) {
      console.error('Error copying code:', err);
    }
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 border border-stroke-1 rounded-out overflow-hidden h-[575px]">
          <canvas
            ref={canvasRef}
            className="w-full h-full bg-black"
            style={{ background: '' }}
          />
        </div>
        
        <div className="border border-stroke-1 p-16 rounded-out">
          <h2 className="text-white text-lg mb-4">Controls</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-1 text-sm">Particles: {settings.count}</label>
              <input
                type="range"
                min="10"
                max="500"
                value={settings.count}
                onChange={(e) => setSettings(prev => ({ ...prev, count: parseInt(e.target.value) }))}
                className="w-full h-1 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
              />
            </div>
            
            <div>
              <label className="block text-white mb-1 text-sm">Speed: {settings.speed}</label>
              <input
                type="range"
                min="0.1"
                max="5"
                step="0.1"
                value={settings.speed}
                onChange={(e) => setSettings(prev => ({ ...prev, speed: parseFloat(e.target.value) }))}
                className="w-full h-1 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
              />
            </div>
            
            <div>
              <label className="block text-white mb-1 text-sm">Color:</label>
              <input
                type="color"
                value={settings.color}
                onChange={(e) => setSettings(prev => ({ ...prev, color: e.target.value }))}
                className="w-full bg-black h-[20px] rounded-24 cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-white mb-1 text-sm">Size: {settings.size}px</label>
              <input
                type="range"
                min="1"
                max="10"
                value={settings.size}
                onChange={(e) => setSettings(prev => ({ ...prev, size: parseInt(e.target.value) }))}
                className="w-full h-1 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
              />
            </div>

            <div>
              <label className="block text-white mb-1 text-sm">Type:</label>
              <select
                value={settings.type}
                onChange={(e) => setSettings(prev => ({ ...prev, type: e.target.value }))}
                className="w-full h-[30px] px-8 py-2 border border-stroke-1 bg-black text-white rounded-out cursor-pointer focus:outline-none focus:border-blue-500"
              >
                <option value="stars">Stars</option>
                <option value="bubbles">Bubbles</option>
                <option value="fire">Fire</option>
                <option value="circles">Circles</option>
              </select>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2 text-white text-sm">Ready to use:</h3>
              <pre className="p-3 w-full border border-stroke-1 rounded-out bg-transparent text-xs overflow-auto text-white max-h-[190px]">
                {generateJavaScriptCode()}
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
    </div>
  );
}
