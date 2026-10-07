import React, { useState } from 'react';
import { X, Check, Copy, Share2, MessageCircle } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'A.S.S Distribuidora de Bebidas',
          text: 'Acesse todos os contatos da A.S.S Distribuidora de Bebidas!',
          url: currentUrl,
        });
      } catch {
        // user cancelled or failed
      }
    } else {
      handleCopy();
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Confira os canais da A.S.S Distribuidora de Bebidas:\n${currentUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-t-3xl sm:rounded-2xl bg-[#121212] border border-zinc-800 p-6 shadow-2xl animate-in slide-in-from-bottom duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#FFB000]" />
            <h2 id="share-modal-title" className="text-base font-bold text-white">
              Compartilhar Canal
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-zinc-400 my-4">
          Envie o link oficial da A.S.S Distribuidora de Bebidas para amigos ou grupos.
        </p>

        <div className="space-y-2.5">
          {/* WhatsApp direct share */}
          <button
            onClick={handleWhatsAppShare}
            type="button"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm transition-all duration-200 active:scale-95 cursor-pointer shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-4 h-4 text-black fill-black" />
            <span>Enviar no WhatsApp</span>
          </button>

          {/* Native share if available */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              type="button"
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-zinc-300" />
              <span>Outros Aplicativos</span>
            </button>
          )}

          {/* Copy Link button */}
          <button
            onClick={handleCopy}
            type="button"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-[#FFB000]/60 text-zinc-200 hover:text-white font-medium text-sm transition-all duration-200 active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Link Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-400" />
                <span>Copiar Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
