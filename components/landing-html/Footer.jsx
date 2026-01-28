import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/30 py-12">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6">
        <a href="#hero" className="flex items-center gap-3 text-lg font-bold text-slate-100">
          <svg viewBox="0 0 36 36" fill="none" className="h-7 w-7">
            <circle cx="18" cy="18" r="16" stroke="url(#lgf)" strokeWidth="2" />
            <path d="M12 18h12M18 12v12" stroke="url(#lgf)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="18" r="2" fill="#06b6d4" />
            <circle cx="24" cy="18" r="2" fill="#10b981" />
            <defs>
              <linearGradient id="lgf" x1="0" y1="0" x2="36" y2="36">
                <stop stopColor="#06b6d4" />
                <stop offset="1" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
          ZipZap Agent
        </a>
        <div className="flex flex-wrap gap-6 text-sm text-slate-400">
          <a href="#features" className="hover:text-white">Возможности</a>
          <a href="#pricing" className="hover:text-white">Тарифы</a>
          <a href="#admin" className="hover:text-white">Настройки</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#demo" className="hover:text-white">Демо</a>
        </div>
        <p className="text-sm text-slate-400">© 2025 ZipZap Lab. Все права защищены.</p>
      </div>
    </footer>
  );
}
