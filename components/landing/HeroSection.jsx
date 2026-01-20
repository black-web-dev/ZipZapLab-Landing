import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LaserFlow from '@/components/LaserFlow';
import { Check, ArrowRight, Sparkles, Bot, MessageSquare, Users } from 'lucide-react';


const features = [
  'RAG‑ответы с цитатами и ссылками на первоисточник',
  'FAQ-first: эталонные ответы экспертов приоритетнее',
  'Эскалации на оператора с SLA‑контролем',
  'Полная управляемость: модель, пороги, маршрутизация',
];

export default function HeroSection() {
  const revealImgRef = useRef(null);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[15%] hidden xl:block"
      >
        <div className="p-4 rounded-2xl bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm border border-neutral-700/50 shadow-xl">
          <Bot className="w-8 h-8 text-neutral-300" />
        </div>
      </motion.div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Badge className="bg-neutral-700/50 text-neutral-200 border-neutral-600 px-4 py-1.5 text-sm font-medium mb-6 cursor-default">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="w-3.5 h-3.5 mr-2" />
                </motion.div>
                AI Support Agent
              </Badge>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-clip-text text-transparent">
                ZipZap Agent
              </span>
              <br />
              <span className="text-neutral-100">агент техподдержки</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed mb-8 max-w-xl">
              Работает в Telegram и на сайте, поддерживает текст и голос, даёт управляемое качество:
              пороги релевантности, FAQ-first, логи и мониторинг.
            </p>

            <ul className="space-y-2 mb-10">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neutral-700/80 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-neutral-300 text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black font-semibold text-base h-12 px-8 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 transition-all"
                >
                  Запросить демо
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-600 bg-transparent text-white hover:bg-neutral-800 hover:border-neutral-500 h-12 px-8"
                >
                  Админ‑панель
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div
        className='h-full w-full absolute top-0 left-0 overflow-hidden'
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', `${x}px`);
            el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
          }
        }}
        onMouseLeave={() => {
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', '-9999px');
            el.style.setProperty('--my', '-9999px');
          }
        }}
      >
        <LaserFlow
          horizontalBeamOffset={0.2}
          verticalBeamOffset={-0.0}
          horizontalSizing={0.5}
          flowStrength={0.25}
          fogIntensity={0.45}
          fogScale={0.2}
          fogFallSpeed={0.4}
          falloffStart={0.9}
          decay={1}
          color="#ae9ef8"
        />

        <div style={{
          position: 'absolute',
          top: '50%',
          left: '46%',
          transform: 'translateX(-0%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          zIndex: 6
        }}>
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-black backdrop-blur-xl rounded-3xl border-1 border-[#ae9ef8] p-6 shadow-[0_0_15px_3px_rgba(207,158,255,0.5)]">
                {/* Chat Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-neutral-700/50 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    <Bot className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-medium">ZipZap Agent</p>
                    <p className="text-sm text-neutral-300">● Онлайн</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-end"
                  >
                    <div className="bg-white text-black rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[80%]">
                      <p className="text-sm font-medium">Как настроить интеграцию с CRM?</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex justify-start"
                  >
                    <div className="bg-neutral-700/50 text-white rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                      <p className="text-sm leading-relaxed">
                        Для интеграции с CRM перейдите в Настройки → Интеграции → CRM.
                        Подробная инструкция: <span className="text-neutral-200 underline">docs.zipzap.io/crm</span>
                      </p>
                      <p className="text-xs text-neutral-400 mt-2">📄 Источник: Руководство интеграций v2.1</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="flex justify-end"
                  >
                    <div className="bg-white text-black rounded-2xl rounded-tr-md px-4 py-2.5">
                      <p className="text-sm font-medium">Спасибо! 👍</p>
                    </div>
                  </motion.div>
                </div>

                {/* Input */}
                <div className="mt-4 pt-4 border-t border-neutral-700/50">
                  <div className="flex items-center gap-3 bg-neutral-800/50 rounded-xl px-4 py-3">
                    <input
                      type="text"
                      placeholder="Введите сообщение..."
                      className="flex-1 bg-transparent text-sm text-neutral-300 placeholder:text-neutral-500 outline-none"
                      disabled
                    />
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 top-8 bg-gradient-to-br from-neutral-800/95 to-neutral-900/95 backdrop-blur-xl rounded-xl border border-neutral-600 p-4 shadow-xl shadow-black/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">85%</p>
                    <p className="text-xs text-neutral-400">автоответов</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <img
          ref={revealImgRef}
          src="/background.webp"
          alt="Reveal effect"
          style={{
            position: 'absolute',
            width: '100%',
            top: '-50%',
            zIndex: 5,
            mixBlendMode: 'lighten',
            opacity: 0.3,
            pointerEvents: 'none',
            '--mx': '-9999px',
            '--my': '-9999px',
            WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat'
          }}
          horizontalSizing={0.5}
          verticalSizing={2}
          wispDensity={1}
          wispSpeed={15}
          wispIntensity={5}
          flowSpeed={0.35}
          flowStrength={0.25}
          fogIntensity={0.45}
          fogScale={0.3}
          fogFallSpeed={0.6}
          decay={1.1}
          falloffStart={1.2}
        />
      </div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
          x: [0, -15, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-40 left-[10%] hidden xl:block"
      >
        <div className="p-4 rounded-2xl bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm border border-neutral-700/50 shadow-xl">
          <MessageSquare className="w-8 h-8 text-neutral-300" />
        </div>
      </motion.div>
    </section>
  );
}