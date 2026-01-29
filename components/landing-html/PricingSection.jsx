import React from 'react';
import Reveal from '@/components/landing/Reveal';
import SectionHeader from '@/components/landing-html/SectionHeader';

const plans = [
  {
    badge: 'Базовый',
    name: 'Стандарт',
    desc: 'Для регулярной поддержки в Telegram и управляемого качества',
    features: [
      'Telegram-бот: текст + голос, контекст диалога',
      'Ответы по документам (RAG) + ссылки на источники',
      'Фильтр «наш / не наш вопрос» (безопасный отказ)',
      'Эскалация на оператора (кнопка + уведомления)',
      'Логи диалогов + метаданные (источники/скоринг)',
      'Кандидаты в FAQ (поиск повторов)',
      'Добавление в FAQ «в 1 клик»',
      'Мониторинг и алерты (базовый)',
    ],
    cta: { label: 'Запросить демо', variant: 'secondary' },
  },
  {
    badge: 'Продвинутый',
    name: 'Эксперт',
    desc: 'Для сложной техподдержки L2/L3 с доказательностью и разбором ответов',
    featured: true,
    features: [
      'Всё из тарифа «Стандарт»',
      'Режим строгой доказательности (нет источника → отказ/эскалация)',
      'Трассировка ответа (provenance: какие фрагменты повлияли)',
      'FAQ-first: эталон эксперта приоритетнее LLM',
      'Очередь качества: хорошо / сомнительно / неверно',
      'SLA-контроль эскалаций (зависшие диалоги)',
      'Отчёт «контент-дыры» (что спрашивают, а в БЗ нет)',
    ],
    cta: { label: 'Запросить демо', variant: 'primary' },
  },
  {
    badge: 'Enterprise',
    name: 'Корпоративный',
    desc: 'Для требований по ИБ, контурам, интеграциям и SLA',
    enterprise: true,
    features: [
      'Всё из тарифа «Эксперт»',
      'Private cloud / On-prem развёртывание',
      'SSO / LDAP + роли и доступы (RBAC)',
      'Аудит и экспорт данных (логи/источники/трассировки)',
      'Интеграции: Service Desk / CRM / 1C / BI',
      'Webhooks + API (расширенные сценарии)',
      'Расширенный SLA + выделенный менеджер',
    ],
    cta: { label: 'Запросить демо', variant: 'secondary' },
  },
];

const ctaClasses = {
  primary:
    'inline-flex w-full items-center justify-center rounded-lg bg-[linear-gradient(to_right,#00FFB0,#00BFFF)] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_12px_rgba(0,191,255,0.4)]',
  secondary:
    'inline-flex w-full items-center justify-center rounded-lg border border-[#00BFFF] bg-[#1A2D47] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1C304A]',
};

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-12 sm:py-20 text-slate-100">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeader
          tag="Тарифы"
          title="Выберите подходящий план"
          description="От пилота до enterprise — гибкие тарифы под ваши задачи и масштаб"
          light
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Reveal key={plan.name}>
              <div
                className={[
                  'relative flex h-full flex-col rounded-xl border p-8',
                  'bg-[#1e293b] border-[#00BFFF]/80 shadow-[0_0_20px_rgba(0,191,255,0.08)]',
                  plan.featured ? 'border-[#00BFFF] shadow-[0_0_24px_rgba(0,191,255,0.15)]' : '',
                  plan.enterprise ? 'border-dashed' : '',
                ].join(' ')}
              >
                {plan.featured ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[linear-gradient(to_right,#00FFB0,#00BFFF)] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Популярный
                  </div>
                ) : null}
                <span
                  className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                  style={{
                    backgroundColor: '#1E3F4A',
                    backgroundImage: 'linear-gradient(135deg, #00E5FF, #00FFB0)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.5)) drop-shadow(0 0 16px rgba(0, 255, 176, 0.25))',
                  }}
                >
                  {plan.badge}
                </span>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-[#A0AEC0]">{plan.desc}</p>
                <div className="mt-6">
                  <div
                    className="text-3xl font-extrabold"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #00E5FF, #00FFB0)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    По запросу
                  </div>
                  <div className="text-sm text-[#A0AEC0]">свяжитесь с нами</div>
                </div>
                <div className="mt-6 flex-1">
                  <h4 className="mb-3 border-b border-slate-500/50 pb-2 text-xs font-semibold uppercase tracking-widest text-white">
                    Включено
                  </h4>
                  <ul className="space-y-2 text-sm text-[#A0AEC0]">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-white">
                        <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-[#00FFB0]" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a href="#demo" className={ctaClasses[plan.cta.variant]}>
                    {plan.cta.label}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center text-sm text-[#A0AEC0]">
          Все цены указаны без НДС. Возможна оплата по счёту для юридических лиц.
        </Reveal>
      </div>
    </section>
  );
}
