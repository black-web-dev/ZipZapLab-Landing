import React, { useState } from 'react';
import SectionHeader from '@/components/landing-html/SectionHeader';
import Reveal from '@/components/landing/Reveal';

const faqs = [
  {
    q: 'Откуда агент берёт ответы: из документов или из модели?',
    a: 'Агент строит ответы на основе ваших документов и FAQ. LLM используется для формулировки, но смысл берётся из источников. Это исключает «фантазии» модели.',
  },
  {
    q: 'Что происходит, если вопрос «не про нас»?',
    a: 'Классификация «наш/не наш» распознаёт нерелевантные запросы и выдаёт безопасный шаблонный ответ вместо выдумывания.',
  },
  {
    q: 'Как работает FAQ-first?',
    a: 'Если вопрос совпадает с эталонным FAQ выше порога схожести, именно этот ответ становится приоритетным. Документация используется как дополнение.',
  },
  {
    q: 'Можно ли давать ссылки на первоисточник?',
    a: 'Да, агент автоматически добавляет ссылки на PDF/инструкции. Также можно включить прямые цитаты из документов.',
  },
  {
    q: 'Как обновлять знания?',
    a: 'Админ загружает документы через панель: конвертация в Markdown → векторизация → попадание в индекс. Контент‑менеджер работает с FAQ и очередями качества.',
  },
  {
    q: 'Как система находит «Кандидатов в FAQ»?',
    a: 'Модуль кластеризации группирует похожие вопросы по эмбеддингам. Если кластер превышает порог частоты — он становится кандидатом в FAQ.',
  },
  {
    q: 'Как работает эскалация?',
    a: 'Пользователь нажимает «Связаться с оператором» → диалог попадает в очередь → операторы получают уведомление → «кто первый взял — тот ведёт».',
  },
  {
    q: 'Где оператор отвечает пользователю?',
    a: 'Прямо в Telegram — с историей диалога, командами /forward и /end. Отдельная операторская панель не требуется.',
  },
  {
    q: 'Какие метрики доступны?',
    a: 'Релевантность RAG, время ответа, покрытие источников, SLA эскалаций, очереди качества. Всё доступно в Grafana‑дашбордах.',
  },
  {
    q: 'Как устроены мониторинг и алерты?',
    a: 'Prometheus собирает метрики, Grafana визуализирует, алерты настраиваются на падение бота, просрочку SLA и критические ошибки.',
  },
  {
    q: 'Как обеспечивается стабильность релизов?',
    a: 'CI/CD в Jenkins + автотесты + регрессионные прогоны на эталонных вопросах + quality gate по метрикам. Если качество падает — релиз блокируется.',
  },
  {
    q: 'Какой вариант поставки доступен?',
    a: 'Облако, on‑prem или гибридная модель — в зависимости от требований безопасности и инфраструктуры заказчика.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-slate-50 py-12 sm:py-20 text-slate-900">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeader tag="FAQ" title="Частые вопросы" light />
        <div className="mx-auto max-w-[800px] space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={item.q}>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left text-sm sm:text-base font-semibold text-slate-900 transition hover:bg-cyan-50"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <span>{item.q}</span>
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-5 w-5 text-cyan-500 transition ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className={`${isOpen ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden transition-all`}>
                    <div className="px-4 sm:px-6 pb-6 text-slate-500 text-sm sm:text-base">{item.a}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
