import React from 'react';
import { OfficialLogo } from './OfficialLogo';
import { businessInfo } from '../data/links';
import { ChevronDown, Share2 } from 'lucide-react';

interface HeaderProps {
  onOpenShare?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenShare }) => {
  return (
    <header className="relative flex flex-col items-center text-center pt-6 pb-3 px-4 max-w-xl mx-auto w-full select-none">
      {/* Top micro bar with quick share button */}
      <div className="w-full flex items-center justify-between mb-3 px-1">
        <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
          Distribuidora Oficial
        </span>

        {onOpenShare && (
          <button
            onClick={onOpenShare}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Compartilhar página oficial da A.S.S Distribuidora"
          >
            <Share2 className="w-3.5 h-3.5 text-zinc-400" />
            <span>Compartilhar</span>
          </button>
        )}
      </div>

      {/* Official Centered Logo with breathing room */}
      <div className="mb-4">
        <OfficialLogo />
      </div>

      {/* Main Brand Statement: "QUALIDADE E ALTO PADRÃO" (Single Line) */}
      <h1 className="text-[17px] min-[390px]:text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide uppercase text-white mb-1.5 leading-tight whitespace-nowrap">
        QUALIDADE E{' '}
        <span className="text-[#FFB000]">
          ALTO PADRÃO
        </span>
      </h1>

      {/* Secondary Description */}
      <p className="text-sm sm:text-base text-zinc-300 font-normal max-w-sm mx-auto mb-4 leading-relaxed">
        {businessInfo.description}
      </p>

      {/* Sober Direction Indicator: "Escolha uma opção abaixo" */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-400 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB000]" />
        <span>{businessInfo.guidanceText}</span>
        <ChevronDown className="w-3.5 h-3.5 text-[#FFB000]" />
      </div>
    </header>
  );
};
