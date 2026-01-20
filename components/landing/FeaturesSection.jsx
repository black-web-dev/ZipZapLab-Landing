import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, Bot, Mic, Search, Link2, Quote, Star, Lightbulb, Layers,
  Users, Clock, LayoutDashboard, Filter, BarChart3, CheckCircle, Activity,
  Database, Bell
} from 'lucide-react';

const categories = [
  {
    id: 'channels',
    label: 'Каналы',
    features: [
      { icon: Bot, title: 'Telegram‑бот', description: 'Текст и голос, команды /start, /help, «вызвать оператора», «новый диалог».' },
      { icon: MessageSquare, title: 'Web‑виджет', description: 'Чат на сайте с той же логикой ответа и эскалаций.' },
      { icon: Mic, title: 'Голосовые сообщения', description: 'STT‑распознавание для удобства мобильных пользователей.' },
    ],
  },
  {
    id: 'rag',
    label: 'RAG‑ответы',
    features: [
      { icon: Search, title: 'Семантический поиск', description: 'RAG по смыслу вопроса, а не по ключевым словам.' },
      { icon: Link2, title: 'Ссылки на источники', description: 'Автоматические ссылки на PDF/инструкции.' },
      { icon: Quote, title: 'Цитаты в ответе', description: 'Опционально — прямые цитаты из документов.' },
    ],
  },
  {
    id: 'faq',
    label: 'FAQ‑контур',
    features: [
      { icon: Star, title: 'Приоритет эталона', description: 'FAQ-first: ответ эксперта — источник истины.' },
      { icon: Lightbulb, title: 'Кандидаты в FAQ', description: 'Авто‑выявление повторяющихся вопросов.' },
      { icon: Layers, title: 'Кластеризация', description: 'Группировка похожих вопросов по смыслу.' },
    ],
  },
  {
    id: 'escalations',
    label: 'Эскалации',
    features: [
      { icon: Users, title: 'Очередь эскалаций', description: 'Статусы ожидания и работы, защита от дублей.' },
      { icon: Clock, title: 'Таймеры SLA', description: 'Напоминания операторам, алерты супервайзеру.' },
      { icon: LayoutDashboard, title: 'SLA‑дашборд', description: 'Активные диалоги, время ожидания, "просроченные" вопросы.' },
    ],
  },
  {
    id: 'quality',
    label: 'Качество',
    features: [
      { icon: Filter, title: 'Классификация запросов', description: '«Наш/не наш» + безопасный шаблон.' },
      { icon: BarChart3, title: 'Метрики RAG', description: 'Релевантность, покрытие, время на запрос.' },
      { icon: CheckCircle, title: 'Разметка качества', description: 'Хороший / сомнительный / неправильный.' },
    ],
  },
  {
    id: 'observability',
    label: 'Наблюдаемость',
    features: [
      { icon: Activity, title: 'Prometheus + Grafana', description: 'Мониторинг и дашборды из коробки.' },
      { icon: Database, title: 'Логи в PostgreSQL', description: 'Полная история с метаданными.' },
      { icon: Bell, title: 'Алерты при сбоях', description: 'Уведомления в реальном времени.' },
    ],
  },
];

export default function FeaturesSection() {
  const [activeCategory, setActiveCategory] = useState('channels');

  const currentFeatures = categories.find(c => c.id === activeCategory)?.features || [];

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-neutral-300 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Возможности
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Не чат‑бот, а
            <br />
            <span className="text-neutral-400">управляемая система поддержки</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Знания → качество → эскалации → аналитика
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-white text-black shadow-lg shadow-white/20'
                  : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-700/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-6 auto-rows-fr"
          >
            {currentFeatures.map((feature, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex"
                >
                  <div className={`w-full backdrop-blur-sm rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 flex flex-col relative overflow-hidden group/feature ${
                    isEven 
                      ? 'bg-neutral-800/80 border-neutral-700/60 hover:bg-neutral-900/90 hover:border-neutral-600' 
                      : 'bg-neutral-700/60 border-neutral-600/60 hover:bg-neutral-800/80 hover:border-neutral-500'
                  }`}>
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover/feature:opacity-100 blur-xl transition-opacity duration-500"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    <div className="w-12 h-12 rounded-2xl bg-neutral-700/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}