import React from 'react';
import { Zap, Send, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Проблемы', href: '#problems' },
  { label: 'Как работает', href: '#how-it-works' },
  { label: 'Возможности', href: '#features' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <img src="/logo.png" alt="ZipZap Lab" className="h-16 w-auto select-none" draggable="false" />
            </a>
            <p className="text-neutral-400 mb-6 max-w-md">
              AI-агент техподдержки, который отвечает по вашей базе знаний. 
              Работает в Telegram и на сайте, поддерживает текст и голос.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-neutral-300 hover:bg-neutral-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-neutral-300 hover:bg-neutral-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Навигация</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-neutral-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-neutral-400">
                <Mail className="w-5 h-5 text-neutral-300 flex-shrink-0 mt-0.5" />
                <span>hello@zipzap.io</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-5 h-5 text-neutral-300 flex-shrink-0 mt-0.5" />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} ZipZap Agent. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-400 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-400 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}