import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mic, ShieldCheck, Star, Search, PhoneCall, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Mic,
    title: 'Вопрос (текст/голос)',
    description: 'Распознавание и нормализация входящего сообщения в Telegram или web‑виджете.',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Проверка «наш/не наш»',
    description: 'Безопасный сценарий при нерелевантном запросе — агент не выдумывает.',
  },
  {
    number: '03',
    icon: Star,
    title: 'FAQ-first',
    description: 'Приоритет эталонного ответа эксперта. LLM только переформулирует.',
  },
  {
    number: '04',
    icon: Search,
    title: 'RAG‑поиск по документам',
    description: 'Сбор релевантных фрагментов и генерация ответа с цитатами.',
  },
  {
    number: '05',
    icon: PhoneCall,
    title: 'Эскалация на оператора',
    description: 'По кнопке или правилам: очередь, таймеры, контроль SLA.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neutral-300 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Как работает
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            5 шагов от вопроса до ответа
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Пользователь задаёт вопрос — агент отвечает по знаниям и передаёт человеку, когда нужно.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 auto-rows-fr">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex"
              >
                {/* Step Card */}
                <div className="relative group bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 backdrop-blur-sm rounded-2xl border border-neutral-700/50 p-6 w-full flex flex-col transition-all duration-300 hover:border-neutral-700/40 hover:shadow-xl hover:shadow-black/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/5 rounded-2xl transition-all duration-300" />
                  {/* Number Badge */}
                  <div className={`relative w-14 h-14 rounded-2xl bg-neutral-700/50 flex items-center justify-center mb-5 shadow-lg z-10`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Step Number */}
                  <span className="text-5xl font-bold text-neutral-700/40 absolute top-4 right-4 select-none group-hover:text-neutral-600/60 transition-colors">
                    {step.number}
                  </span>

                  <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed relative z-10 flex-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-black font-semibold h-12 px-8 shadow-lg shadow-white/20"
          >
            Показать на ваших документах
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}