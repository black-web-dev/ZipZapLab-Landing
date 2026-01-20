import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Bot, Search, Star, PhoneCall, Mic, Activity, MessageSquare } from 'lucide-react';

const demoNavItems = [
  { label: 'RAG‑поиск', icon: Search },
  { label: 'FAQ‑база', icon: Star },
  { label: 'Эскалации', icon: PhoneCall },
  { label: 'Голосовой ввод', icon: Mic },
  { label: 'Аналитика', icon: Activity },
  { label: 'Мультиканальность', icon: MessageSquare },
];

const floatingIcons = [
  {
    icon: Bot,
    label: 'AI',
    position: { top: '-12%', left: '8%' },
    rotation: -8,
    zIndex: 20,
    delay: 0,
    duration: 3,
  },
  {
    icon: Search,
    label: 'RAG',
    position: { top: '-6%', right: '15%' },
    rotation: 12,
    zIndex: 0,
    delay: 0.3,
    duration: 3.5,
  },
  {
    icon: Star,
    label: 'FAQ',
    position: { bottom: '-15%', left: '12%' },
    rotation: -15,
    zIndex: 20,
    delay: 0.6,
    duration: 4,
  },
  {
    icon: PhoneCall,
    label: 'Эскалация',
    position: { bottom: '-5%', right: '18%' },
    rotation: 10,
    zIndex: 0,
    delay: 0.9,
    duration: 3.2,
  },
  {
    icon: Mic,
    label: 'Голос',
    position: { top: '15%', left: '-12%' },
    rotation: -12,
    zIndex: 20,
    delay: 1.2,
    duration: 3.8,
  },
  {
    icon: Activity,
    label: 'Аналитика',
    position: { top: '32%', right: '-10%' },
    rotation: 18,
    zIndex: 0,
    delay: 1.5,
    duration: 3.3,
  },
  {
    icon: MessageSquare,
    label: 'Каналы',
    position: { bottom: '28%', left: '-9%' },
    rotation: -5,
    zIndex: 20,
    delay: 1.8,
    duration: 3.6,
  },
];

// Typing effect component
function TypingText({ text, delay = 0, speed = 50 }) {
  const [displayedText, setDisplayedText] = React.useState('');
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span className="text-white/90">
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-4 bg-white/90 ml-0.5 align-middle"
        />
      )}
    </span>
  );
}

export default function VideoSection() {
  return (
    <section id="demo" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Как работает <span className="text-neutral-400">AI‑агент</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Демонстрация реального запроса: от вопроса клиента до эскалированного решения — агент по справочной базе, FAQ и маршрутизации.
          </p>
        </div>

        <div className="mx-auto max-w-5xl relative">
          {/* Floating Icon Blocks - Desktop */}
          {floatingIcons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={`desktop-${idx}`}
                className="absolute hidden lg:block"
                style={{
                  ...item.position,
                  transform: `rotate(${item.rotation}deg)`,
                  zIndex: item.zIndex,
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: item.rotation }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                  y: [0, -15, 0],
                  scale: [1, 1.05, 1],
                  rotate: [item.rotation, item.rotation + 2, item.rotation],
                }}
                transition={{
                  opacity: {
                    duration: item.duration,
                    repeat: Infinity,
                    delay: item.delay,
                  },
                  y: {
                    duration: item.duration,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: 'easeInOut',
                  },
                  scale: {
                    duration: item.duration,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: 'easeInOut',
                  },
                  rotate: {
                    duration: item.duration * 1.5,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: 'easeInOut',
                  },
                }}
              >
                <div className="group relative">
                  <div className="backdrop-blur-sm bg-neutral-800/80 border border-neutral-700/50 rounded-xl p-4 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:bg-neutral-800/90 hover:border-neutral-600/70 flex flex-col items-center">
                    <IconComponent className="w-8 h-8 text-white mb-2" />
                    <p className="text-xs text-neutral-300 whitespace-nowrap font-medium text-center">
                      {item.label}
                    </p>
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 rounded-xl" />
                </div>
              </motion.div>
            );
          })}

          <div className="relative backdrop-blur-md bg-neutral-800/30 border border-neutral-700/50 rounded-2xl p-3 sm:p-4 shadow-lg shadow-black/20 z-10">
            <div className="relative overflow-hidden rounded-xl bg-black">
              <video
                className="w-full h-auto"
                src="/ai_agent_demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="pointer-events-none absolute inset-0 opacity-0 md:opacity-100">
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-neutral-900/60 border border-neutral-700/50 px-3 py-1.5 text-xs text-neutral-200">
                  <PlayCircle className="w-4 h-4" />
                  ai_agent_demo.mp4
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-700/50">
              <motion.p 
                className="text-sm text-neutral-300 mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Возможности AI‑агента:
              </motion.p>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-sm">
                {demoNavItems.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <React.Fragment key={item.label}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: idx * 0.15 + 0.3,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="flex items-center gap-1.5 group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="flex-shrink-0"
                        >
                          <IconComponent className="w-4 h-4 text-neutral-400 group-hover/item:text-white transition-colors" />
                        </motion.div>
                        <TypingText 
                          text={item.label} 
                          delay={idx * 0.15 + 0.5}
                          speed={30}
                        />
                      </motion.div>
                      {idx !== demoNavItems.length - 1 ? (
                        <motion.span 
                          className="text-neutral-500"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.15 + 0.8 }}
                        >
                          ·
                        </motion.span>
                      ) : null}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Icon Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:hidden mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {floatingIcons.slice(0, 6).map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={`mobile-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="backdrop-blur-sm bg-neutral-800/80 border border-neutral-700/50 rounded-xl p-4 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:bg-neutral-800/90 hover:border-neutral-600/70 flex flex-col items-center">
                    <IconComponent className="w-8 h-8 text-white mb-2" />
                    <p className="text-xs text-neutral-300 text-center font-medium">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

