import React from 'react';
import Reveal from '@/components/landing/Reveal';
import SectionHeader from '@/components/landing-html/SectionHeader';

const items = [
  { title: 'Telegram‑бот', desc: 'Текст и голос, команды, рабочее место оператора.' },
  { title: 'Web‑виджет', desc: 'Встраиваемый чат с единой логикой качества.' },
  { title: 'PostgreSQL', desc: 'Хранение данных, логов и метаданных.' },
  { title: 'Prometheus', desc: 'Сбор метрик и мониторинг.' },
  { title: 'Grafana', desc: 'Визуализация и дашборды.' },
  { title: 'Jenkins CI/CD', desc: 'Автоматизация релизов и тестов.' },
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeader
          tag="Интеграции"
          title="Каналы и инфраструктура"
          description="Начните с одного канала — масштабируйтесь без смены архитектуры."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 h-full">
          {items.map((item) => (
            <Reveal key={item.title}>
              <div className="h-full rounded-xl border border-white/5 bg-[#1e293b] p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500 text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
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
