import React from 'react';

interface NFCIndicatorProps {
  className?: string;
}

export const NFCIndicator: React.FC<NFCIndicatorProps> = ({ className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111]/90 backdrop-blur-md border border-[#FFB000]/30 shadow-[0_4px_16px_rgba(0,0,0,0.6),0_0_12px_rgba(255,176,0,0.12)] transition-all duration-300 hover:border-[#FFB000]/60 ${className}`}
      role="status"
      aria-label="Conectado via NFC ou QR Code em segundos"
    >
      {/* Smartphone + NFC waves micro-visual */}
      <div className="relative flex items-center justify-center text-[#FFB000]">
        {/* Smartphone body */}
        <svg
          className="w-3.5 h-3.5 text-[#FFB000] relative z-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
        </svg>

        {/* Radiating NFC Waves */}
        <div className="relative -ml-0.5 flex items-center">
          <svg
            className="w-3.5 h-3.5 text-[#FFB000]/90 animate-pulse"
            style={{ animationDuration: '2s' }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M8.5 7.5a6 6 0 0 1 0 9" />
            <path d="M12.5 5a10 10 0 0 1 0 14" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Live status beacon */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB000] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB000]" />
      </span>

      {/* Copy */}
      <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-zinc-300">
        Conectado em segundos.
      </span>
    </div>
  );
};
