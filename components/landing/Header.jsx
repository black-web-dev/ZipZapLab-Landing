import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Проблемы', href: '#problems' },
  { label: 'Как работает', href: '#how-it-works' },
  { label: 'Возможности', href: '#features' },
  { label: 'Команда', href: '#team' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-neutral-900/80 backdrop-blur-xl shadow-lg shadow-black/10'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <img src="/logo.png" alt="ZipZap Lab" className="h-16 w-auto select-none" draggable="false" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm text-neutral-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                className="px-4 py-2 text-neutral-300 hover:text-white! hover:bg-white/5 transition-all duration-300 rounded-md font-medium"
              >
                Админ‑панель
              </button>
              <Button className="relative bg-white hover:bg-white/90 text-black font-semibold transition-all duration-300">
                <span className="relative z-10">Запросить демо</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-neutral-900/95 backdrop-blur-xl border-b border-neutral-800 p-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="px-4 py-3 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-neutral-800 mt-2 space-y-2">
                  <button className="w-full justify-start text-left px-4 py-2 text-neutral-300 hover:text-white! hover:bg-white/5 rounded-md transition-all font-medium">
                    Админ‑панель
                  </button>
                  <Button className="w-full bg-white hover:bg-white/90 text-black font-semibold transition-all">
                    Запросить демо
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}