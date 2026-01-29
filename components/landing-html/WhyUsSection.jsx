import React from 'react';
import Reveal from '@/components/landing/Reveal';
import SectionHeader from '@/components/landing-html/SectionHeader';

const items = [
  { title: '📄 По источникам', desc: 'Ответ строится по документам/FAQ, не по «общим знаниям».' },
  { title: '⭐ FAQ-first', desc: 'Единая «правда» эксперта для повторяющихся вопросов.' },
  { title: '🛡️ Защита от выдумок', desc: '«Наш/не наш» отсекает нерелевантные запросы.' },
  { title: '⏱️ SLA‑контроль', desc: 'Таймеры, алерты, дашборд «кто не отвечает».' },
  { title: '📊 Трассировка', desc: 'Логируется вопрос, ответ, релевантность, источники.' },
  { title: '🎛️ Тонкая настройка', desc: 'Пороги, лимиты, чанкинг, дедупликация.' },
  { title: '🔄 Контент‑процесс', desc: 'Кандидаты в FAQ + очереди сомнительных ответов.' },
  { title: '✅ Надёжные релизы', desc: 'Автотесты, регрессия, quality gate.' },
];

export default function WhyUsSection() {
  return (
    <section id="why" className="py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeader tag="Почему мы" title="Сильны там, где чат‑боты ломаются" />
        <div className="grid gap-6 md:grid-cols-3 h-full">
          {items.map((item) => (
            <Reveal key={item.title}>
              <div className="h-full rounded-xl border border-white/5 bg-[#1e293b] p-6">
                <h3 className="mb-2 text-lg font-semibold text-slate-100">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
