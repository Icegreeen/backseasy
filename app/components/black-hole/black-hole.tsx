import React from 'react';

function BlackHole() {
  return (
    <div className="">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        src="/black-hole.webm"
        className="absolute w-[1400px] max-w-none z-[-1] blur-[1px] contrast-125 rotate-[15deg] -top-[30px] left-[150px]"
      />
      {/* ( ͡° ͜ʖ ͡°) God knows your intentions */}
    </div>
  );
}

export default BlackHole;
