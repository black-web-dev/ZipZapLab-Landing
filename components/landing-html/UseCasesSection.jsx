import React from 'react';
import Reveal from '@/components/landing/Reveal';
import SectionHeader from '@/components/landing-html/SectionHeader';

const items = [
  { title: '👥 Поддержка пользователей', desc: 'Инструкции, регламенты, спецификации.' },
  { title: '🤝 Партнёры и инсталляторы', desc: 'Документация и типовые кейсы.' },
  { title: '💻 Внутренняя ИТ‑поддержка', desc: '«Как получить доступ», «как настроить».' },
  { title: '🔧 Инженеры и выездные', desc: 'Быстрые ответы по техдокам, включая голос.' },
  { title: '🎓 Онбординг сотрудников', desc: 'FAQ-first по корпоративным правилам.' },
  { title: '📈 Контроль качества', desc: 'Очередь сомнительных + кандидаты в FAQ.' },
];

export default function UseCasesSection() {
  return (
    <section id="cases" className="bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader tag="Сценарии" title="Один продукт — много линий поддержки" light />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Reveal key={item.title}>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg shadow-black/5">
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
