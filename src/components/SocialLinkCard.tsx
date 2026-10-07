import React from 'react';
import { LinkItem } from '../data/links';
import { PlatformIcon3D } from './PlatformIcon3D';
import { ArrowUpRight, ChevronRight, Star } from 'lucide-react';

interface SocialLinkCardProps {
  link: LinkItem;
  index: number;
}

export const SocialLinkCard: React.FC<SocialLinkCardProps> = ({ link, index }) => {
  const isSpecial = link.isSpecial || link.platform === 'google-review';

  // Specific hover border styles & glows based on platform
  const getPlatformStyles = () => {
    switch (link.platform) {
      case 'whatsapp':
        return {
          hoverBorder: 'hover:border-[#25D366]/70 focus-visible:border-[#25D366]',
          hoverShadow: 'hover:shadow-[0_12px_32px_rgba(37,211,102,0.22),0_0_1px_rgba(37,211,102,0.8)]',
          badgeBg: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/50',
          arrowHoverColor: 'group-hover:text-[#25D366] group-hover:border-[#25D366]/60',
          actionBg: 'group-hover:bg-[#25D366]/10',
        };
      case 'instagram':
        return {
          hoverBorder: 'hover:border-[#E1306C]/70 focus-visible:border-[#E1306C]',
          hoverShadow: 'hover:shadow-[0_12px_32px_rgba(225,48,108,0.22),0_0_1px_rgba(225,48,108,0.8)]',
          badgeBg: 'bg-pink-950/80 text-pink-300 border-pink-800/50',
          arrowHoverColor: 'group-hover:text-[#E1306C] group-hover:border-[#E1306C]/60',
          actionBg: 'group-hover:bg-[#E1306C]/10',
        };
      case 'maps':
        return {
          hoverBorder: 'hover:border-[#4285F4]/70 focus-visible:border-[#4285F4]',
          hoverShadow: 'hover:shadow-[0_12px_32px_rgba(66,133,244,0.22),0_0_1px_rgba(66,133,244,0.8)]',
          badgeBg: 'bg-blue-950/80 text-blue-300 border-blue-800/50',
          arrowHoverColor: 'group-hover:text-[#4285F4] group-hover:border-[#4285F4]/60',
          actionBg: 'group-hover:bg-[#4285F4]/10',
        };
      case 'google-review':
        return {
          hoverBorder: 'hover:border-[#FFB000] focus-visible:border-[#FFB000]',
          hoverShadow: 'hover:shadow-[0_14px_36px_rgba(255,176,0,0.35),0_0_2px_rgba(255,176,0,0.9)]',
          badgeBg: 'bg-amber-950/90 text-[#FFB000] border-[#FFB000]/60 shadow-[0_0_12px_rgba(255,176,0,0.25)]',
          arrowHoverColor: 'group-hover:text-[#FFB000] group-hover:border-[#FFB000]',
          actionBg: 'group-hover:bg-[#FFB000]/20',
        };
      default:
        return {
          hoverBorder: 'hover:border-zinc-500',
          hoverShadow: 'hover:shadow-lg',
          badgeBg: 'bg-zinc-800 text-zinc-300 border-zinc-700',
          arrowHoverColor: 'group-hover:text-white',
          actionBg: 'group-hover:bg-white/10',
        };
    }
  };

  const styles = getPlatformStyles();

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.ariaLabel}
      style={{ animationDelay: `${index * 80}ms` }}
      className={`group relative w-full flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 ease-out select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000] focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer ${
        isSpecial
          ? 'bg-gradient-to-r from-[#171306] via-[#120F04] to-[#1A1505] border-2 border-[#FFB000]/70 shadow-[0_8px_28px_rgba(255,176,0,0.22)] hover:border-[#FFB000]'
          : 'bg-gradient-to-r from-[#121212] via-[#0E0E0E] to-[#121212] border border-zinc-800/80 shadow-[0_6px_20px_rgba(0,0,0,0.6)]'
      } ${styles.hoverBorder} ${styles.hoverShadow}`}
    >
      {/* Subtle background glow for special card */}
      {isSpecial && (
        <div 
          className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#FFB000]/30 to-amber-600/30 blur-sm opacity-50 group-hover:opacity-80 transition-opacity -z-10" 
          aria-hidden="true"
        />
      )}

      {/* Condensation light reflection sweep on hover */}
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none overflow-hidden" 
        aria-hidden="true" 
      />

      {/* LEFT: 3D Platform Icon */}
      <div className="shrink-0 relative">
        <PlatformIcon3D platform={link.platform} size="md" />
      </div>

      {/* CENTER: Title, Subtitle and Badges */}
      <div className="flex-1 min-w-0 text-left py-0.5">
        {/* Top Meta Line with optional badge */}
        <div className="flex items-center gap-2 mb-1">
          {link.badge && (
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border ${styles.badgeBg}`}
            >
              {link.badge}
            </span>
          )}

          {isSpecial && (
            <span className="inline-flex items-center gap-0.5 text-xs text-[#FFB000] font-semibold animate-pulse">
              5.0
            </span>
          )}
        </div>

        {/* Title */}
        <div className="flex items-center gap-1.5">
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-white transition-colors">
            {link.title}
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors truncate">
          {link.subtitle}
        </p>

        {/* For Google Review: 5 Stars with subtle micro-shimmer */}
        {link.platform === 'google-review' && (
          <div className="flex items-center gap-1 mt-1.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((starIdx) => (
              <Star
                key={starIdx}
                className="w-3.5 h-3.5 fill-[#FFB000] text-[#FFB000] drop-shadow-[0_0_4px_rgba(255,176,0,0.6)] transition-transform duration-200 group-hover:scale-110"
                style={{
                  transitionDelay: `${starIdx * 40}ms`,
                }}
              />
            ))}
            <span className="text-[11px] text-zinc-400 ml-1.5 font-medium group-hover:text-amber-200">
              Clique para avaliar
            </span>
          </div>
        )}
      </div>

      {/* RIGHT: Action Indicator / Glowing Chevron */}
      <div className="shrink-0 pl-1">
        <div
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition-all duration-300 group-hover:translate-x-1 ${styles.arrowHoverColor} ${styles.actionBg}`}
        >
          {isSpecial ? (
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          )}
        </div>
      </div>
    </a>
  );
};
