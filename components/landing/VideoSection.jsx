import React from 'react';
import { motion as Motion } from 'framer-motion';
import { MessageSquare, FileText, Shield } from 'lucide-react';

const featureCards = [
  {
    icon: MessageSquare,
    title: 'Диалог в реальном времени',
    description: 'Мгновенные ответы на вопросы пользователей',
  },
  {
    icon: FileText,
    title: 'Ссылки на источники',
    description: 'Каждый ответ с цитатами из документов',
  },
  {
    icon: Shield,
    title: 'Защита от галлюцинаций',
    description: 'Агент не выдумывает — только факты',
  },
];

export default function VideoSection() {
  return (
    <section id="demo" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 cursor-default mb-6"
          >
            Демонстрация
          </Motion.span>
          <Motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Посмотрите, как это работает
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Видео-демонстрация работы AI-агента в реальном времени: от вопроса пользователя до точного ответа с цитатами из документов.
          </Motion.p>
        </div>

        {/* Two-column: video left, feature cards right */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-20 items-center max-w-6xl mx-auto h-full">
          {/* Video player */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-neutral-600/50 shadow-xl shadow-black/30 bg-neutral-900/50 ring-1 ring-white/5"
          >
            <div className="relative overflow-hidden rounded-2xl bg-black aspect-video">
              <video
                className="w-full h-full object-cover"
                src="/ai_agent_demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls
              />
            </div>
          </Motion.div>

          {/* Feature cards */}
          <div className="flex flex-col justify-center gap-4">
            {featureCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <Motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className="rounded-xl border border-neutral-600/50 bg-neutral-800/40 p-5 shadow-lg backdrop-blur-sm hover:border-cyan-500/30 hover:bg-neutral-800/60 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-cyan-400/90 border border-cyan-400/30 bg-cyan-400/5">
                      <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{card.title}</h3>
                      <p className="text-sm text-neutral-400">{card.description}</p>
                    </div>
                  </div>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

