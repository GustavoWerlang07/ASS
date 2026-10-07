import React from 'react';
import { LinkItem } from '../data/links';
import { PlatformIcon3D } from './PlatformIcon3D';
import { ArrowUpRight, ChevronRight, Star } from 'lucide-react';

interface SocialLinkCardProps {
  link: LinkItem;
  index: number;
}

export const SocialLinkCard: React.FC<SocialLinkCardProps> = ({ link }) => {
  const isSpecial = link.isSpecial || link.platform === 'google-review';

  // SOBER, HIGH-END STYLES FOR EACH PLATFORM
  const getPlatformStyles = () => {
    switch (link.platform) {
      case 'whatsapp':
        return {
          hoverBorder: 'hover:border-[#25D366]/60',
          hoverShadow: 'hover:shadow-[0_8px_24px_rgba(37,211,102,0.18)]',
          badgeBg: 'bg-emerald-950/70 text-emerald-400 border-emerald-800/40',
          arrowHoverColor: 'group-hover:text-[#25D366] group-hover:border-[#25D366]/50',
          actionBg: 'group-hover:bg-[#25D366]/10',
        };
      case 'instagram':
        return {
          hoverBorder: 'hover:border-[#E1306C]/60',
          hoverShadow: 'hover:shadow-[0_8px_24px_rgba(225,48,108,0.18)]',
          badgeBg: 'bg-pink-950/70 text-pink-300 border-pink-800/40',
          arrowHoverColor: 'group-hover:text-[#E1306C] group-hover:border-[#E1306C]/50',
          actionBg: 'group-hover:bg-[#E1306C]/10',
        };
      case 'maps':
        return {
          hoverBorder: 'hover:border-[#4285F4]/60',
          hoverShadow: 'hover:shadow-[0_8px_24px_rgba(66,133,244,0.18)]',
          badgeBg: 'bg-blue-950/70 text-blue-300 border-blue-800/40',
          arrowHoverColor: 'group-hover:text-[#4285F4] group-hover:border-[#4285F4]/50',
          actionBg: 'group-hover:bg-[#4285F4]/10',
        };
      case 'google-review':
        return {
          hoverBorder: 'hover:border-[#FFB000]',
          hoverShadow: 'hover:shadow-[0_8px_28px_rgba(255,176,0,0.25)]',
          badgeBg: 'bg-amber-950/80 text-[#FFB000] border-[#FFB000]/50',
          arrowHoverColor: 'group-hover:text-[#FFB000] group-hover:border-[#FFB000]',
          actionBg: 'group-hover:bg-[#FFB000]/15',
        };
      default:
        return {
          hoverBorder: 'hover:border-zinc-600',
          hoverShadow: 'hover:shadow-md',
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
      className={`group relative w-full flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl transition-colors duration-200 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000] cursor-pointer ${
        isSpecial
          ? 'bg-[#120F04]/90 border-2 border-[#FFB000]/70 shadow-[0_6px_22px_rgba(0,0,0,0.7)] hover:border-[#FFB000]'
          : 'bg-[#101010]/90 border border-zinc-800 shadow-[0_4px_16px_rgba(0,0,0,0.6)]'
      } ${styles.hoverBorder} ${styles.hoverShadow}`}
    >
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
            <span className="inline-flex items-center gap-0.5 text-xs text-[#FFB000] font-semibold">
              5.0
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
          {link.title}
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-zinc-400 truncate">
          {link.subtitle}
        </p>

        {/* For Google Review: 5 Stars without animations */}
        {link.platform === 'google-review' && (
          <div className="flex items-center gap-1 mt-1.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((starIdx) => (
              <Star
                key={starIdx}
                className="w-3.5 h-3.5 fill-[#FFB000] text-[#FFB000]"
              />
            ))}
            <span className="text-[11px] text-zinc-400 ml-1.5 font-medium">
              Clique para avaliar
            </span>
          </div>
        )}
      </div>

      {/* RIGHT: Action Indicator */}
      <div className="shrink-0 pl-1">
        <div
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border border-zinc-800 bg-zinc-900/90 text-zinc-400 transition-colors duration-200 ${styles.arrowHoverColor} ${styles.actionBg}`}
        >
          {isSpecial ? (
            <ArrowUpRight className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </div>
      </div>
    </a>
  );
};
