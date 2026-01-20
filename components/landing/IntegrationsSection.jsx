import React from 'react';
import { motion } from 'framer-motion';
import { Send, Globe, Database, Activity, BarChart3, GitBranch } from 'lucide-react';
import MagicBento from '../MagicBento';

const MotionDiv = motion.div;

const integrations = [
  {
    icon: Send,
    name: 'Telegram‑бот',
    description: 'Текст и голос, команды, эскалации на оператора.',
  },
  {
    icon: Globe,
    name: 'Web‑виджет',
    description: 'Встраиваемый чат на сайте с теми же правилами качества.',
  },
  {
    icon: Database,
    name: 'PostgreSQL',
    description: 'Хранилище диалогов, логов, метаданных и источников знаний.',
  },
  {
    icon: Activity,
    name: 'Prometheus',
    description: 'Метрики качества, латентности, ошибок и эскалаций.',
  },
  {
    icon: BarChart3,
    name: 'Grafana',
    description: 'Дашборды и алерты для поддержки и команды.',
  },
  {
    icon: GitBranch,
    name: 'Jenkins CI/CD',
    description: 'Сборка, тесты и безопасные релизы без ручных шагов.',
  },
];

export default function IntegrationsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neutral-300 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Интеграции
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Каналы и инфраструктура
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Начните с одного канала — масштабируйтесь без смены архитектуры.
          </p>
        </MotionDiv>

        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={680}
          particleCount={12}
          glowColor="255, 255, 255"
          disableAnimations={false}
        />
      </div>
    </section>
  );
}