import React from 'react';

interface PlatformIcon3DProps {
  platform: 'whatsapp' | 'instagram' | 'maps' | 'google-review';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PlatformIcon3D: React.FC<PlatformIcon3DProps> = ({
  platform,
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  }[size];

  switch (platform) {
    case 'whatsapp':
      return (
        <div
          className={`relative ${sizeClasses} flex items-center justify-center rounded-2xl p-0.5 select-none transition-transform duration-300 group-hover:scale-105 ${className}`}
          style={{
            background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.4) 0%, rgba(18, 140, 126, 0.2) 100%)',
            boxShadow: '0 8px 24px -4px rgba(37, 211, 102, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
          }}
        >
          {/* Inner 3D Container */}
          <div className="relative w-full h-full rounded-[14px] bg-gradient-to-br from-[#25D366] via-[#20BD5A] to-[#128C7E] flex items-center justify-center overflow-hidden shadow-inner border border-white/20">
            {/* Top Gloss Reflection */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-[14px] pointer-events-none" />
            
            {/* Ambient inner rim */}
            <div className="absolute inset-0 rounded-[14px] ring-1 ring-inset ring-white/25 pointer-events-none" />

            {/* Official WhatsApp Icon Silhouette with 3D Drop Shadow */}
            <svg
              className="w-7 h-7 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
        </div>
      );

    case 'instagram':
      return (
        <div
          className={`relative ${sizeClasses} flex items-center justify-center rounded-2xl p-0.5 select-none transition-transform duration-300 group-hover:scale-105 ${className}`}
          style={{
            background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.45) 0%, rgba(253, 29, 29, 0.3) 50%, rgba(247, 119, 55, 0.35) 100%)',
            boxShadow: '0 8px 24px -4px rgba(225, 48, 108, 0.38), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
          }}
        >
          {/* Inner 3D Container with Instagram official vibrant radial/diagonal gradient */}
          <div
            className="relative w-full h-full rounded-[14px] flex items-center justify-center overflow-hidden shadow-inner border border-white/25"
            style={{
              background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
            }}
          >
            {/* Top Gloss Reflection */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-[14px] pointer-events-none" />
            
            {/* Ambient inner rim */}
            <div className="absolute inset-0 rounded-[14px] ring-1 ring-inset ring-white/20 pointer-events-none" />

            {/* Official Instagram Camera Logo with 3D Drop Shadow */}
            <svg
              className="w-7 h-7 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)] relative z-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      );

    case 'maps':
      return (
        <div
          className={`relative ${sizeClasses} flex items-center justify-center rounded-2xl p-0.5 select-none transition-transform duration-300 group-hover:scale-105 ${className}`}
          style={{
            background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.45) 0%, rgba(52, 168, 83, 0.3) 100%)',
            boxShadow: '0 8px 24px -4px rgba(66, 133, 244, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.35)',
          }}
        >
          {/* Inner 3D Container with Maps style dark-glass depth */}
          <div className="relative w-full h-full rounded-[14px] bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] flex items-center justify-center overflow-hidden shadow-inner border border-white/20">
            {/* Map grid lines aesthetic subtle overlay */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4285F4_1px,transparent_1px)] [background-size:6px_6px] pointer-events-none" />
            
            {/* Top Gloss Reflection */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent rounded-t-[14px] pointer-events-none" />

            {/* Official Google Maps Pin 3D Multi-color */}
            <svg
              className="w-7 h-7 relative z-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              {/* Map pin base with Google colors */}
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                fill="url(#mapsGradientPin)"
              />
              <circle cx="12" cy="9" r="2.8" fill="#0A0A0A" />
              <circle cx="12" cy="9" r="2" fill="#FFFFFF" />

              <defs>
                <linearGradient id="mapsGradientPin" x1="5" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#EA4335" />
                  <stop offset="0.45" stopColor="#FBBC05" />
                  <stop offset="0.75" stopColor="#34A853" />
                  <stop offset="1" stopColor="#4285F4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      );

    case 'google-review':
      return (
        <div
          className={`relative ${sizeClasses} flex items-center justify-center rounded-2xl p-0.5 select-none transition-transform duration-300 group-hover:scale-105 ${className}`}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 176, 0, 0.6) 0%, rgba(251, 188, 5, 0.4) 50%, rgba(234, 67, 53, 0.25) 100%)',
            boxShadow: '0 8px 26px -2px rgba(255, 176, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.5)',
          }}
        >
          {/* Inner 3D Container with Gold/Google Glass */}
          <div className="relative w-full h-full rounded-[14px] bg-gradient-to-br from-[#1A1505] via-[#120F02] to-[#0A0800] flex items-center justify-center overflow-hidden shadow-inner border border-[#FFB000]/40">
            {/* Top Gloss Reflection */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-[14px] pointer-events-none" />
            
            {/* Ambient golden glow */}
            <div className="absolute inset-0 bg-[#FFB000]/10 pointer-events-none" />

            {/* Google G Logo Multi-color */}
            <svg
              className="w-7 h-7 relative z-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.14C3.25 21.36 7.34 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.59H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.41l4.03-3.14z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.64 1.25 6.59l4.03 3.14c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
          </div>
        </div>
      );

    default:
      return null;
  }
};
