import React from 'react';
import Reveal from '@/components/landing/Reveal';
import SectionHeader from '@/components/landing-html/SectionHeader';

const items = [
  {
    title: '📉 Снижение нагрузки',
    desc: 'Типовые вопросы закрываются автоматически — операторы работают со сложными кейсами.',
  },
  {
    title: '🎯 Консистентность ответов',
    desc: 'FAQ-first и ссылки на источники обеспечивают единый стандарт.',
  },
  {
    title: '✅ Меньше ошибок',
    desc: 'Пороги релевантности и разметка качества снижают число «неправильных» ответов.',
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeader tag="Результаты" title="Поддержка быстрее, стабильнее, дешевле" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 h-full">
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
