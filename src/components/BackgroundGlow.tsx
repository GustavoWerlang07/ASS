import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-10 bg-[#050505]">
      {/* Real luxury beverages background image with soft cinematic blur */}
      <div className="absolute -inset-4 overflow-hidden">
        <img
          src="/beverages-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center filter blur-[6px] brightness-[0.42] contrast-[1.12] scale-105 transform"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Deep dark gradient overlay ensuring perfect legibility and sober luxury feel */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/75 to-[#050505]/95"
        aria-hidden="true" 
      />

      {/* Subtle warm amber lighting tint inspired by cold beer & whiskey tones */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,176,0,0.12)_0%,transparent_70%)] blur-2xl"
        aria-hidden="true" 
      />

      {/* Soft vignette on edges */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,5,0.85)_100%)]"
        aria-hidden="true" 
      />
    </div>
  );
};
