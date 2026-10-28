import React from 'react';

// Tom quente (Gargantua / Interestelar): gira o roxo do video para laranja/amarelo
const WARM = "hue-rotate-[138deg] saturate-[1.25] sepia-[.4] brightness-[1.08]";

const DEFAULT_CLASS =
  "absolute w-[1400px] max-w-none z-[-1] blur-[1px] contrast-125 rotate-[15deg] -top-[30px] left-[150px]";

function BlackHole({ className = DEFAULT_CLASS }: { className?: string }) {
  return (
    <div className="">
      <video aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        src="/black-hole.webm"
        className={`${className} ${WARM}`}
      />
      {/* ( ͡° ͜ʖ ͡°) God knows your intentions */}
    </div>
  );
}

export default BlackHole;
