import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Стандарт',
    subtitle: 'Базовый',
    description: 'Для регулярной поддержки в Telegram и управляемого качества',
    price: 'По запросу',
    priceNote: 'свяжитесь с нами',
    features: [
      'Telegram-бот: текст + голос, контекст диалога',
      'Ответы по документам (RAG) + ссылки на источники',
      'Фильтр «наш / не наш вопрос»',
      'Эскалация на оператора',
      'Логи диалогов + метаданные',
      'Кандидаты в FAQ (поиск повторов)',
      'Добавление в FAQ «в 1 клик»',
      'Мониторинг и алерты (базовый)',
    ],
    popular: false,
  },
  {
    name: 'Эксперт',
    subtitle: 'Продвинутый',
    description: 'Для сложной техподдержки L2/L3 с доказательностью',
    price: 'По запросу',
    priceNote: 'свяжитесь с нами',
    features: [
      'Всё из тарифа «Стандарт»',
      'Режим строгой доказательности',
      'Трассировка ответа (provenance)',
      'FAQ-first: эталон эксперта приоритетнее LLM',
      'Очередь качества: хорошо / сомнительно / неверно',
      'SLA-контроль эскалаций',
      'Отчёт «контент-дыры»',
    ],
    popular: true,
  },
  {
    name: 'Корпоративный',
    subtitle: 'Enterprise',
    description: 'Для требований по ИБ, контурам, интеграциям и SLA',
    price: 'Индивидуально',
    priceNote: 'по запросу',
    features: [
      'Всё из тарифа «Эксперт»',
      'Private cloud / On-prem развёртывание',
      'SSO / LDAP + роли и доступы (RBAC)',
      'Аудит и экспорт данных',
      'Интеграции: Service Desk / CRM / 1C / BI',
      'Webhooks + API (расширенные сценарии)',
      'Расширенный SLA + выделенный менеджер',
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neutral-300 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Тарифы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Выберите подходящий план
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            От пилота до enterprise — гибкие тарифы под ваши задачи и масштаб
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-white text-black font-semibold px-4 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Популярный
                  </Badge>
                </div>
              )}

              <div className={`h-full w-full rounded-2xl p-6 lg:p-8 transition-all duration-300 flex flex-col ${
                plan.popular 
                  ? 'bg-gradient-to-br from-neutral-700/60 to-neutral-800/60 border-2 border-white/40 shadow-2xl shadow-white/10' 
                  : idx % 2 === 0
                    ? 'bg-neutral-800/80 border border-neutral-700/60 hover:bg-neutral-900/90 hover:border-neutral-600 hover:shadow-lg hover:shadow-black/20'
                    : 'bg-neutral-700/60 border border-neutral-600/60 hover:bg-neutral-800/80 hover:border-neutral-500 hover:shadow-lg hover:shadow-black/20'
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <span className="text-sm text-neutral-400">{plan.subtitle}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-2">{plan.name}</h3>
                  <p className="text-sm text-neutral-400">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8 pb-8 border-b border-neutral-700/50">
                  <p className="text-3xl font-bold text-white">{plan.price}</p>
                  <p className="text-sm text-neutral-400">{plan.priceNote}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neutral-700 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-neutral-300" />
                      </div>
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-white hover:bg-white/90 text-black font-semibold shadow-lg shadow-white/20' 
                      : 'bg-neutral-700 hover:bg-neutral-600 text-white'
                  }`}
                >
                  Запросить демо
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-neutral-500 mt-8">
          Все цены указаны без НДС. Возможна оплата по счёту для юридических лиц.
        </p>
      </div>
    </section>
  );
}