import React from 'react';
import Reveal from '@/components/landing/Reveal';
import SectionHeader from '@/components/landing-html/SectionHeader';

const steps = [
  {
    title: 'Вопрос (текст/голос)',
    desc: 'Распознавание и нормализация входящего сообщения в Telegram или web‑виджете.',
  },
  {
    title: 'Проверка «наш/не наш»',
    desc: 'Безопасный сценарий при нерелевантном запросе — агент не выдумывает.',
  },
  {
    title: 'FAQ-first',
    desc: 'Приоритет эталонного ответа эксперта. LLM только переформулирует.',
  },
  {
    title: 'RAG‑поиск по документам',
    desc: 'Сбор релевантных фрагментов и генерация ответа с цитатами.',
  },
  {
    title: 'Эскалация на оператора',
    desc: 'По кнопке или правилам: очередь, таймеры, контроль SLA.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          tag="Как работает"
          title="5 шагов от вопроса до ответа"
          description="Пользователь задаёт вопрос — агент отвечает по знаниям и передаёт человеку, когда нужно."
        />
        <div className="space-y-4">
          {steps.map((step, index) => (
            <Reveal key={step.title}>
              <div className="flex items-start gap-6 rounded-xl border border-white/5 bg-[#1e293b] p-6 transition hover:border-cyan-400/60">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500 text-lg font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-100">{step.title}</h3>
                  <p className="text-slate-300">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <a
            href="#demo"
            className="inline-flex items-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-400/30 transition hover:-translate-y-0.5"
          >
            Показать на ваших документах
          </a>
        </Reveal>
      </div>
    </section>
  );
}
