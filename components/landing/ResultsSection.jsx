import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, AlertCircle, CheckCircle2, RefreshCw, Brain, ShieldAlert, Clock } from 'lucide-react';

const problems = [
  {
    problem: {
      icon: RefreshCw,
      title: 'Операторы тонут в повторах',
      description: 'Одни и те же вопросы отнимают время для сложных кейсов.',
    },
    solution: {
      icon: CheckCircle2,
      title: 'Агент закрывает типовые обращения',
      description: 'Telegram и web‑виджет работают 24/7, операторы только для сложных.',
    },
  },
  {
    problem: {
      icon: Brain,
      title: 'Модель «фантазирует»',
      description: 'LLM выдаёт уверенные, но ложные ответы.',
    },
    solution: {
      icon: ShieldAlert,
      title: 'Коэффициенты семантической',
      description: 'Валидация и настраиваемая схожесть гарантируют опору на источники.',
    },
  },
  {
    problem: {
      icon: Clock,
      title: 'Нет контроля эскалаций',
      description: 'Заявки теряются, SLA нарушается, клиенты уходят.',
    },
    solution: {
      icon: AlertCircle,
      title: 'Очередь + таймеры + алерты',
      description: 'SLA‑дашборд показывает просроченные и напоминает руководителю.',
    },
  },
];

export default function ProblemsSection() {
  return (
    <section id="problems" className="relative py-24 lg:py-32 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neutral-300 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Проблемы и решения
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Когда поддержка растёт,
            <br />
            <span className="text-neutral-400">знания расползаются</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            ZipZap Agent превращает документы и опыт экспертов в управляемый канал 
            самообслуживания — с контролем качества и SLA.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col"
            >
              {/* Problem Card */}
              <motion.div 
                className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/20 rounded-2xl border border-neutral-700/50 p-6 mb-4 shadow-lg shadow-black/20 flex-1 flex flex-col relative overflow-hidden group/card"
                whileHover={{ scale: 1.02, borderColor: 'rgba(163, 163, 163, 0.6)' }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <motion.div 
                  className="w-12 h-12 rounded-2xl bg-neutral-700/50 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.problem.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.problem.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.problem.description}</p>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center py-2">
                <motion.div 
                  className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700/50 flex items-center justify-center"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              {/* Solution Card */}
              <motion.div 
                className="bg-gradient-to-br from-neutral-700/20 to-neutral-800/10 rounded-2xl border border-neutral-700/50 p-6 mt-4 shadow-lg shadow-black/20 flex-1 flex flex-col relative overflow-hidden group/card"
                whileHover={{ scale: 1.02, borderColor: 'rgba(163, 163, 163, 0.6)' }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <motion.div 
                  className="w-12 h-12 rounded-2xl bg-neutral-700/50 flex items-center justify-center mb-4"
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.solution.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.solution.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.solution.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}