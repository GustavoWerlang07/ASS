import React from 'react';

interface OfficialLogoProps {
  className?: string;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({ className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Ambient warm amber back-glow behind the logo */}
      <div 
        className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-[#FFB000]/20 via-[#FFA000]/10 to-transparent blur-2xl pointer-events-none opacity-80" 
        aria-hidden="true"
      />

      {/* Condensation & Ice Sheen Subtle Halo */}
      <div 
        className="absolute -inset-1 rounded-full bg-gradient-to-b from-[#FFB000]/30 via-transparent to-[#FFB000]/10 blur-sm pointer-events-none"
        aria-hidden="true" 
      />

      {/* Official Circular Logo Frame */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-b from-[#FFB000] via-[#D49000] to-[#805500] shadow-[0_12px_36px_rgba(0,0,0,0.85),0_0_24px_rgba(255,176,0,0.35)] transition-transform duration-300 hover:scale-[1.02]">
        {/* Inner black containment with fine glass reflection */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-[#050505] flex items-center justify-center">
          {/* Official logo image uploaded by the client */}
          <img
            src="/logo.jpg"
            alt="Logomarca oficial A.S.S Distribuidora de Bebidas"
            className="w-full h-full object-cover select-none"
            loading="eager"
            decoding="async"
          />

          {/* Discreet diagonal glass reflection */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-white/[0.18] pointer-events-none"
            aria-hidden="true" 
          />
        </div>
      </div>
    </div>
  );
};
