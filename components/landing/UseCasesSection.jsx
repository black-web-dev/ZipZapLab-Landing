import React from 'react';
import { motion } from 'framer-motion';
import { Users, Handshake, Laptop, Wrench, GraduationCap, BarChart } from 'lucide-react';

const useCases = [
  {
    icon: Users,
    title: 'Поддержка пользователей',
    description: 'Инструкции, регламенты, спецификации.',
  },
  {
    icon: Handshake,
    title: 'Партнёры и инсталляторы',
    description: 'Документация и типовые кейсы.',
  },
  {
    icon: Laptop,
    title: 'Внутренняя ИТ‑поддержка',
    description: '«Как получить доступ», «как настроить».',
  },
  {
    icon: Wrench,
    title: 'Инженеры и выездные',
    description: 'Быстрые ответы по техдокам, включая голос.',
  },
  {
    icon: GraduationCap,
    title: 'Онбординг сотрудников',
    description: 'FAQ-first по корпоративным правилам.',
  },
  {
    icon: BarChart,
    title: 'Контроль качества',
    description: 'Очередь сомнительных + кандидаты в FAQ.',
  },
];

export default function UseCasesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neutral-300 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Сценарии
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Один продукт —
            <br />
            <span className="text-neutral-400">много линий поддержки</span>
          </h2>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-fr">
          {useCases.map((useCase, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex"
              >
                <div className={`w-full backdrop-blur-sm rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 flex flex-col ${
                  isEven 
                    ? 'bg-neutral-800/80 border-neutral-700/60 hover:bg-neutral-900/90 hover:border-neutral-600' 
                    : 'bg-neutral-700/60 border-neutral-600/60 hover:bg-neutral-800/80 hover:border-neutral-500'
                }`}>
                  <div className="w-12 h-12 rounded-2xl bg-neutral-700/50 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}