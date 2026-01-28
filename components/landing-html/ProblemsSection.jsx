import React from 'react';
import Reveal from '@/components/landing/Reveal';
import SectionHeader from '@/components/landing-html/SectionHeader';

const problems = [
  {
    problem: 'Операторы тонут в повторах',
    problemDesc: 'Одни и те же вопросы отнимают время, которое нужно для сложных кейсов.',
    solution: 'Агент закрывает типовые обращения',
    solutionDesc: 'Telegram и web‑виджет работают 24/7, операторы подключаются только к сложным.',
  },
  {
    problem: 'Модель «фантазирует»',
    problemDesc: 'LLM выдаёт уверенные, но ложные ответы — пользователь разочарован.',
    solution: 'Коэффициенты семантической близости отсекают нерелевантное',
    solutionDesc: 'Валидация вопроса и настраиваемая семантическая близость гарантируют опору на источники.',
  },
  {
    problem: 'Нет контроля эскалаций',
    problemDesc: 'Заявки теряются, SLA нарушается, клиенты уходят.',
    solution: 'Очередь + таймеры + алерты',
    solutionDesc: 'SLA‑дашборд показывает, кто из операторов-экспертов не отвечает, и напоминает руководителю.',
  },
];

export default function ProblemsSection() {
  return (
    <section id="problems" className="bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          tag="Проблемы и решения"
          title="Когда поддержка растёт, знания расползаются"
          description="ZipZap Agent превращает документы и опыт экспертов в управляемый канал самообслуживания — с контролем качества и SLA."
          light
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {problems.map((item) => (
            <Reveal key={item.problem}>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg shadow-black/5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.problem}</h3>
                    <p className="text-slate-500">{item.problemDesc}</p>
                  </div>
                </div>
                <div className="py-4 text-center text-2xl text-cyan-500">↓</div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.solution}</h3>
                    <p className="text-slate-500">{item.solutionDesc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
