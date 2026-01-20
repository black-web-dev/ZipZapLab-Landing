import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Star, Shield, Timer, Activity, Settings, RefreshCw, CheckCircle
} from 'lucide-react';

const benefits = [
  {
    icon: FileText,
    title: 'По источникам',
    description: 'Ответ строится по документам/FAQ, не по «общим знаниям».',
  },
  {
    icon: Star,
    title: 'FAQ-first',
    description: 'Единая «правда» эксперта для повторяющихся вопросов.',
  },
  {
    icon: Shield,
    title: 'Защита от выдумок',
    description: '«Наш/не наш» отсекает нерелевантные запросы.',
  },
  {
    icon: Timer,
    title: 'SLA‑контроль',
    description: 'Таймеры, алерты, дашборд «кто не отвечает».',
  },
  {
    icon: Activity,
    title: 'Трассировка',
    description: 'Логируется вопрос, ответ, релевантность, источники.',
  },
  {
    icon: Settings,
    title: 'Тонкая настройка',
    description: 'Пороги, лимиты, чанкинг, дедупликация.',
  },
  {
    icon: RefreshCw,
    title: 'Контент‑процесс',
    description: 'Кандидаты в FAQ + очереди сомнительных ответов.',
  },
  {
    icon: CheckCircle,
    title: 'Надёжные релизы',
    description: 'Автотесты, регрессия, quality gate.',
  },
];

export default function WhyUsSection() {
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
            Почему мы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Сильны там,
            <br />
            <span className="text-neutral-400">где чат‑боты ломаются</span>
          </h2>
        </motion.div>

        {/* Benefits Grid - Strictly Aligned with Connecting Lines */}
        <div className="relative">
          {/* Connecting Dashed Lines SVG */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {/* Connect adjacent cards */}
            {benefits.map((_, idx) => {
              if (idx === benefits.length - 1) return null;
              
              const row = Math.floor(idx / 4);
              const col = idx % 4;
              const nextRow = Math.floor((idx + 1) / 4);
              const nextCol = (idx + 1) % 4;
              
              // Connect horizontally adjacent cards
              const isHorizontalAdjacent = row === nextRow && Math.abs(col - nextCol) === 1;
              // Connect vertically adjacent cards  
              const isVerticalAdjacent = col === nextCol && Math.abs(row - nextRow) === 1;
              
              if (!isHorizontalAdjacent && !isVerticalAdjacent) return null;
              
              // Calculate positions - grid has 4 columns, approximate positions
              // Card centers: col 0 = 12.5%, col 1 = 37.5%, col 2 = 62.5%, col 3 = 87.5%
              const cardCenterX = [12.5, 37.5, 62.5, 87.5];
              const cardCenterY = [25, 75]; // Two rows
              
              const x1 = cardCenterX[col];
              const y1 = cardCenterY[row];
              const x2 = cardCenterX[nextCol];
              const y2 = cardCenterY[nextRow];
              
              return (
                <motion.line
                  key={`line-${idx}`}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="6,4"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: idx * 0.1 + 0.3,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                />
              );
            })}
          </svg>

          {/* Strictly Aligned Card Layout */}
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" style={{ zIndex: 1 }}>
            {benefits.map((benefit, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: idx * 0.08,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="flex relative"
                >
                  <div className={`w-full backdrop-blur-sm rounded-2xl border p-5 lg:p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 flex flex-col relative overflow-hidden group/benefit ${
                    isEven 
                      ? 'bg-neutral-800/80 border-neutral-700/60 hover:bg-neutral-900/90 hover:border-blue-500/30' 
                      : 'bg-neutral-700/60 border-neutral-600/60 hover:bg-neutral-800/80 hover:border-purple-500/30'
                  }`}>
                    {/* Glowing border effect on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/benefit:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-xl" />
                    </div>
                    
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover/benefit:opacity-100"
                      animate={{
                        background: [
                          'radial-gradient(circle at 0% 0%, rgba(59,130,246,0.1) 0%, transparent 50%)',
                          'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.1) 0%, transparent 50%)',
                          'radial-gradient(circle at 100% 100%, rgba(59,130,246,0.1) 0%, transparent 50%)',
                          'radial-gradient(circle at 0% 100%, rgba(139,92,246,0.1) 0%, transparent 50%)',
                          'radial-gradient(circle at 0% 0%, rgba(59,130,246,0.1) 0%, transparent 50%)',
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    
                    {/* Icon with glow effect */}
                    <motion.div 
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-neutral-700/50 to-neutral-800/50 flex items-center justify-center mb-4 relative group-hover/benefit:shadow-lg group-hover/benefit:shadow-blue-500/30 transition-shadow duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <benefit.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white relative z-10" />
                      <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-md opacity-0 group-hover/benefit:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    
                    <h3 className="text-base lg:text-lg font-semibold text-white mb-2 relative z-10">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-400 text-xs lg:text-sm leading-relaxed relative z-10">
                      {benefit.description}
                    </p>
                    
                    {/* Subtle connecting line indicator */}
                    {idx < benefits.length - 1 && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 opacity-0 group-hover/benefit:opacity-30 transition-opacity duration-300">
                        <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rotate-45 origin-center" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}