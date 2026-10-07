import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-xl mx-auto py-6 px-4 text-center select-none pb-10">
      <div className="flex flex-col items-center justify-center gap-1 text-zinc-500 text-xs">
        <p className="font-semibold text-zinc-400 tracking-wide">
          A.S.S Distribuidora de Bebidas
        </p>
        <p className="text-[11px] text-zinc-500">
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
