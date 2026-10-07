import React from 'react';
import { OfficialLogo } from './OfficialLogo';
import { NFCIndicator } from './NFCIndicator';
import { businessInfo } from '../data/links';
import { ChevronDown, Share2, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenShare?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenShare }) => {
  return (
    <header className="relative flex flex-col items-center text-center pt-8 pb-4 px-4 max-w-xl mx-auto w-full select-none">
      {/* Top micro bar with quick share button */}
      <div className="w-full flex items-center justify-between mb-4 px-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-medium text-amber-400/90 shadow-sm">
          <Sparkles className="w-3 h-3 text-[#FFB000]" />
          <span>Canal Oficial</span>
        </div>

        {onOpenShare && (
          <button
            onClick={onOpenShare}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-all duration-200 active:scale-95 cursor-pointer"
            aria-label="Compartilhar página oficial da A.S.S Distribuidora"
          >
            <Share2 className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
            <span>Compartilhar</span>
          </button>
        )}
      </div>

      {/* Official Centered Logo with breathing room */}
      <div className="mb-4">
        <OfficialLogo />
      </div>

      {/* NFC indicator below the logo */}
      <div className="mb-5">
        <NFCIndicator />
      </div>

      {/* Main Tagline & Brand Name */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2 leading-snug">
        Sua bebida,{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB000] via-[#FFC738] to-[#FFA000] drop-shadow-[0_2px_12px_rgba(255,176,0,0.3)]">
          a um toque de distância.
        </span>
      </h1>

      {/* Secondary Description */}
      <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-sm mx-auto mb-5 leading-relaxed">
        {businessInfo.description}
      </p>

      {/* Visual Direction Indicator: "Escolha uma opção abaixo" */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-zinc-900/80 via-zinc-900/60 to-zinc-900/80 border border-zinc-800/80 text-xs font-medium text-zinc-400 shadow-inner">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB000] animate-ping" />
        <span>{businessInfo.guidanceText}</span>
        <ChevronDown className="w-3.5 h-3.5 text-[#FFB000] animate-bounce" style={{ animationDuration: '2s' }} />
      </div>
    </header>
  );
};
