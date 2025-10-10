export default function TestParticlePage() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <h1 className="text-white text-xl mb-6 text-center">Test Particle Page</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 border border-stroke-1 rounded-out overflow-hidden h-[350px] relative">
          <div className="w-full h-full bg-black flex items-center justify-center">
            <p className="text-white">Test Canvas Area</p>
          </div>
        </div>
        
        <div className="border border-stroke-1 rounded-out p-4">
          <h2 className="text-white text-lg mb-4">Test Controls</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-1 text-sm">Test Range</label>
              <input
                type="range"
                min="10"
                max="200"
                defaultValue="100"
                className="w-full h-1 border border-stroke-1 rounded-out appearance-none cursor-pointer bg-transparent"
              />
            </div>
            
            <div>
              <label className="block text-white mb-1 text-sm">Test Color:</label>
              <input
                type="color"
                defaultValue="#4ecdc4"
                className="w-full h-8 border border-stroke-1 rounded-out cursor-pointer bg-transparent"
              />
            </div>

            <button className="w-full px-4 py-2 border border-green text-green rounded-out">
              Test Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

