import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-10 bg-[#050505]">
      {/* Top Center Amber Atmospheric Aura (Golden Warmth behind Header) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[450px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,176,0,0.14)_0%,rgba(255,140,0,0.06)_45%,transparent_70%)] blur-3xl opacity-90"
        aria-hidden="true"
      />

      {/* Subtle Night Cold Frost Glow (Top-Right / Ice effect) */}
      <div 
        className="absolute top-20 right-[-10%] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-[radial-gradient(circle_at_center,rgba(100,180,255,0.04)_0%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      {/* Subtle Bottom Amber Reflection */}
      <div 
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[380px] sm:w-[500px] h-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,176,0,0.08)_0%,transparent_70%)] blur-3xl opacity-75"
        aria-hidden="true"
      />

      {/* Micro-dot subtle pattern reminiscent of cold condensation droplets */}
      <div 
        className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Edge Vignette */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.85)_100%)]"
        aria-hidden="true"
      />
    </div>
  );
};
