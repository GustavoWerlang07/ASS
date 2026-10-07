import React, { useState } from 'react';
import beveragesBgImg from '../assets/beverages-bg.jpg';

export const BackgroundGlow: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(beveragesBgImg);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Real luxury beverages background image with soft cinematic blur */}
      <div className="absolute -inset-4 overflow-hidden">
        <img
          src={imgSrc}
          onError={() => {
            if (imgSrc !== '/beverages-bg.jpg') {
              setImgSrc('/beverages-bg.jpg');
            }
          }}
          alt=""
          className="w-full h-full object-cover object-center filter blur-[6px] brightness-[0.42] contrast-[1.12] scale-105 transform"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Deep dark gradient overlay ensuring 100% black luxury feel */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#050505]/92 via-[#050505]/80 to-[#050505]/95"
        style={{ backgroundColor: 'rgba(5, 5, 5, 0.75)' }}
        aria-hidden="true" 
      />

      {/* Subtle warm amber lighting tint inspired by cold beer & whiskey tones */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,176,0,0.12)_0%,transparent_70%)] blur-2xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* Soft vignette on edges */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,5,0.9)_100%)] pointer-events-none"
        aria-hidden="true" 
      />
    </div>
  );
};
