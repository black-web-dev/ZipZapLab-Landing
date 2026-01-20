import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Откуда агент берёт ответы: из документов или из модели?',
    answer: 'Агент строит ответы на основе ваших документов и FAQ. LLM используется для формулировки, но смысл берётся из источников. Это исключает «фантазии» модели.',
  },
  {
    question: 'Что происходит, если вопрос «не про нас»?',
    answer: 'Классификация «наш/не наш» распознаёт нерелевантные запросы и выдаёт безопасный шаблонный ответ вместо выдумывания.',
  },
  {
    question: 'Как работает FAQ-first?',
    answer: 'Если вопрос совпадает с эталонным FAQ выше порога схожести, именно этот ответ становится приоритетным. Документация используется как дополнение.',
  },
  {
    question: 'Можно ли давать ссылки на первоисточник?',
    answer: 'Да, агент автоматически добавляет ссылки на PDF/инструкции. Также можно включить прямые цитаты из документов.',
  },
  {
    question: 'Как обновлять знания?',
    answer: 'Админ загружает документы через панель: конвертация в Markdown → векторизация → попадание в индекс. Контент‑менеджер работает с FAQ и очередями качества.',
  },
  {
    question: 'Как система находит «Кандидатов в FAQ»?',
    answer: 'Модуль кластеризации группирует похожие вопросы по эмбеддингам. Если кластер превышает порог частоты — он становится кандидатом в FAQ.',
  },
  {
    question: 'Как работает эскалация?',
    answer: 'Пользователь нажимает «Связаться с оператором» → диалог попадает в очередь → операторы получают уведомление → «кто первый взял — тот ведёт».',
  },
  {
    question: 'Где оператор отвечает пользователю?',
    answer: 'Прямо в Telegram — с историей диалога, командами /forward и /end. Отдельная операторская панель не требуется.',
  },
];

function FAQItem({ faq, index, isOpen, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-neutral-800 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-5 flex items-start justify-between gap-4 text-left group"
      >
        <span className="text-base font-medium text-white group-hover:text-neutral-300 transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-neutral-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-neutral-300' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-neutral-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-neutral-300 text-sm font-semibold tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Частые вопросы
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-40" />
          
          <div className="relative bg-neutral-800/40 backdrop-blur-sm rounded-2xl border border-neutral-700/50 p-6 lg:p-8 shadow-xl shadow-black/20">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                index={idx}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}