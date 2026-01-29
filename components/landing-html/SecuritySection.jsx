import React from 'react';
import Reveal from '@/components/landing/Reveal';
import SectionHeader from '@/components/landing-html/SectionHeader';

const items = [
  { title: '🔐 Валидация «наш/не наш»', desc: 'Безопасные шаблоны на нерелевантные запросы.' },
  { title: '👥 Разграничение ролей', desc: 'Админ / контент / оператор / руководитель.' },
  { title: '📋 Логи в PostgreSQL', desc: 'Полная история, а не «в файлах».' },
  { title: '🔑 Управление секретами', desc: 'Токены и пароли — не в коде.' },
  { title: '🔔 Мониторинг и алерты', desc: 'Уведомления при сбоях в реальном времени.' },
  { title: '🔄 Test/Prod разделение', desc: 'Безопасный перенос базы знаний.' },
];

export default function SecuritySection() {
  return (
    <section id="security" className="bg-slate-50 py-12 sm:py-20 text-slate-900">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeader
          tag="Безопасность"
          title="Контроль и защита прямо в архитектуре продукта"
          light
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 h-full">
          {items.map((item) => (
            <Reveal key={item.title}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-lg shadow-black/5">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
