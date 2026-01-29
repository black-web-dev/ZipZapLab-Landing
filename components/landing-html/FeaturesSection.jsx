import React, { useState } from "react";
import Reveal from "@/components/landing/Reveal";
import SectionHeader from "@/components/landing-html/SectionHeader";

const tabs = [
  {
    id: "channels",
    label: "Каналы",
    items: [
      {
        title: "Telegram‑бот",
        desc: "Текст и голос, команды /start, /help, «вызвать оператора», «новый диалог».",
      },
      {
        title: "Web‑виджет",
        desc: "Чат на сайте с той же логикой ответа и эскалаций.",
      },
      {
        title: "Голосовые сообщения",
        desc: "STT‑распознавание для удобства мобильных пользователей.",
      },
    ],
  },
  {
    id: "rag",
    label: "RAG‑ответы",
    items: [
      {
        title: "Семантический поиск",
        desc: "RAG по смыслу вопроса, а не по ключевым словам.",
      },
      {
        title: "Ссылки на источники",
        desc: "Автоматические ссылки на PDF/инструкции.",
      },
      {
        title: "Цитаты в ответе",
        desc: "Опционально — прямые цитаты из документов.",
      },
    ],
  },
  {
    id: "faq-first",
    label: "FAQ‑контур",
    items: [
      {
        title: "Приоритет эталона",
        desc: "FAQ-first: ответ эксперта — источник истины.",
      },
      {
        title: "Кандидаты в FAQ",
        desc: "Авто‑выявление повторяющихся вопросов.",
      },
      {
        title: "Кластеризация",
        desc: "Группировка похожих вопросов по смыслу.",
      },
    ],
  },
  {
    id: "escalation",
    label: "Эскалации",
    items: [
      {
        title: "Очередь эскалаций",
        desc: "Статусы ожидания и работы, защита от дублей.",
      },
      {
        title: "Таймеры SLA",
        desc: "Напоминания операторам, алерты супервайзеру.",
      },
      {
        title: "SLA‑дашборд",
        desc: 'Активные диалоги, время ожидания, "просроченные" вопросы.',
      },
    ],
  },
  {
    id: "quality",
    label: "Качество",
    items: [
      {
        title: "Классификация запросов",
        desc: "«Наш/не наш» + безопасный шаблон.",
      },
      {
        title: "Метрики RAG",
        desc: "Релевантность, покрытие, время на запрос.",
      },
      {
        title: "Разметка качества",
        desc: "Хороший / сомнительный / неправильный.",
      },
    ],
  },
  {
    id: "observability",
    label: "Наблюдаемость",
    items: [
      {
        title: "Prometheus + Grafana",
        desc: "Мониторинг и дашборды из коробки.",
      },
      { title: "Логи в PostgreSQL", desc: "Полная история с метаданными." },
      { title: "Алерты при сбоях", desc: "Уведомления в реальном времени." },
    ],
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState("channels");
  const current = tabs.find((tab) => tab.id === active) || tabs[0];

  return (
    <section id="features" className="bg-slate-50 py-12 sm:py-20 text-slate-900">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeader
          tag="Возможности"
          title="Не чат‑бот, а управляемая система поддержки"
          description="Знания → качество → эскалации → аналитика"
          light
        />
        <Reveal>
          <div className="flex overflow-x-auto gap-2 border-b border-slate-200 pb-4 snap-x snap-mandatory [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={[
                  "rounded-xl px-4 py-2.5 text-sm font-medium transition shrink-0 snap-start",
                  active === tab.id
                    ? "bg-gradient-to-br from-cyan-400 to-emerald-500 text-white"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900",
                ].join(" ")}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3 h-full">
          {current.items.map((item) => (
            <Reveal key={item.title}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-lg shadow-black/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
