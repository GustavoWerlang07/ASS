import React from 'react';
import { businessInfo, mainLinks } from '../data/links';
import { Heart, MessageCircle, Instagram, MapPin, Star } from 'lucide-react';

export const ClosingSection: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'whatsapp':
        return <MessageCircle className="w-4 h-4 text-[#25D366]" />;
      case 'instagram':
        return <Instagram className="w-4 h-4 text-[#E1306C]" />;
      case 'maps':
        return <MapPin className="w-4 h-4 text-[#4285F4]" />;
      case 'google-review':
        return <Star className="w-4 h-4 text-[#FFB000] fill-[#FFB000]" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto mt-8 mb-6 px-4 text-center">
      {/* Decorative separator line with center amber diamond */}
      <div className="relative flex items-center justify-center my-6" aria-hidden="true">
        <div className="w-full border-t border-zinc-800/80" />
        <div className="absolute px-3 bg-[#050505]">
          <div className="w-2 h-2 rotate-45 bg-[#FFB000] shadow-[0_0_8px_#FFB000]" />
        </div>
      </div>

      <div className="p-5 sm:p-6 rounded-2xl bg-[#0D0D0D]/90 border border-zinc-800/80 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
        <h3 className="text-sm sm:text-base font-bold text-white tracking-wide uppercase mb-3 text-zinc-200">
          {businessInfo.closingTitle}
        </h3>

        {/* Small quick social shortcut pills */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 flex-wrap mb-5">
          {mainLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Acessar ${link.title}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
            >
              {getIcon(link.platform)}
              <span>{link.title}</span>
            </a>
          ))}
        </div>

        {/* Thank You Note */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium">
          <Heart className="w-3.5 h-3.5 text-[#FFB000] fill-[#FFB000]" />
          <span>{businessInfo.closingMessage}</span>
        </div>
      </div>
    </section>
  );
};
