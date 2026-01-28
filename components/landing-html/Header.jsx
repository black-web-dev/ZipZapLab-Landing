import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { href: '#problems', label: 'Проблемы' },
  { href: '#how', label: 'Как работает' },
  { href: '#features', label: 'Возможности' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#admin', label: 'Настройки' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = useMemo(
    () => navItems.map((item) => item.href.replace('#', '')),
    [],
  );

  useEffect(() => {
    const onScroll = () => {
      let current = '';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled
          ? 'border-b border-white/5 bg-[#0f172a]/90 backdrop-blur shadow-lg shadow-black/10'
          : 'bg-transparent'
        }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3 text-lg font-bold text-slate-100">
          <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
            <circle cx="18" cy="18" r="16" stroke="url(#lg)" strokeWidth="2" />
            <path d="M12 18h12M18 12v12" stroke="url(#lg)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="18" r="2" fill="#06b6d4" />
            <circle cx="24" cy="18" r="2" fill="#10b981" />
            <circle cx="18" cy="12" r="2" fill="#06b6d4" />
            <circle cx="18" cy="24" r="2" fill="#10b981" />
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="36" y2="36">
                <stop stopColor="#06b6d4" />
                <stop offset="1" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
          ZipZap Agent
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={[
                  'relative text-sm transition-colors',
                  isActive ? 'text-slate-100' : 'text-slate-400 hover:text-slate-100',
                  'after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all',
                  isActive ? 'after:w-full' : 'hover:after:w-full',
                ].join(' ')}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#demo"
            className="inline-flex items-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-400/30 transition hover:-translate-y-0.5"
          >
            Запросить демо
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-100 md:hidden"
          type="button"
          aria-label="Меню"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </nav>

      <div className={open ? 'block md:hidden' : 'hidden md:hidden'}>
        <div className="border-t border-white/5 bg-[#0f172a] px-6 py-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="#demo"
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-400/30"
              onClick={() => setOpen(false)}
            >
              Запросить демо
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
