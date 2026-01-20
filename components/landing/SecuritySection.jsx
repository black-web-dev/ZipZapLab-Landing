import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, FileText, Key, Bell, GitBranch } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Валидация «наш/не наш»',
    description: 'Безопасные шаблоны на нерелевантные запросы.',
  },
  {
    icon: Users,
    title: 'Разграничение ролей',
    description: 'Админ / контент / оператор / руководитель.',
  },
  {
    icon: FileText,
    title: 'Логи в PostgreSQL',
    description: 'Полная история, а не «в файлах».',
  },
  {
    icon: Key,
    title: 'Управление секретами',
    description: 'Токены и пароли — не в коде.',
  },
  {
    icon: Bell,
    title: 'Мониторинг и алерты',
    description: 'Уведомления при сбоях в реальном времени.',
  },
  {
    icon: GitBranch,
    title: 'Test/Prod разделение',
    description: 'Безопасный перенос базы знаний.',
  },
];

export default function SecuritySection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neutral-300 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Безопасность
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Контроль и защита
              <br />
              <span className="text-neutral-400">прямо в архитектуре</span>
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              Безопасность встроена в продукт на уровне архитектуры, а не добавлена постфактум.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 auto-rows-fr">
              {features.map((feature, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-neutral-700/50 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-neutral-400">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl opacity-40" />
            
            <img 
              src="/security.png" 
              alt="Security"
              style={{
                width: '110%',
                height: 'auto',
                objectFit: 'contain',
                transform: 'translateX(-5%)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}