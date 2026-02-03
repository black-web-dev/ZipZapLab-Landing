import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LaserFlow from "@/components/LaserFlow";
import IOSPhoneComponent from "@/components/landing/IOSPhoneComponent";
import {
  Check,
  ArrowRight,
  Sparkles,
  Bot,
  MessageSquare,
  Users,
} from "lucide-react";

const features = [
  "RAG‑ответы с цитатами и ссылками на первоисточник",
  "FAQ-first: эталонные ответы экспертов приоритетнее",
  "Эскалации на оператора с SLA‑контролем",
  "Полная управляемость: модель, пороги, маршрутизация",
];

export default function HeroSection() {
  const revealImgRef = useRef(null);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col-reverse lg:flex-row">
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] hidden xl:block"
      >
        <div className="p-4 rounded-2xl bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm border border-neutral-700/50 shadow-xl">
          <Bot className="w-8 h-8 text-neutral-300" />
        </div>
      </motion.div>

      <div className="relative z-0 w-full max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-8 -mt-10 lg:mt-0 pt-0 pb-12 sm:pb-16 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center mx-6 lg:mx-0">
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
            >
              <div className="hidden lg:inline-flex mb-3 sm:mb-5 items-center gap-1.5 sm:gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-cyan-300 cursor-default">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.div>
                AI Support Agent
              </div>
            </motion.div>

            <h1 className="hidden lg:block text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-clip-text text-transparent">
                ZipZap Agent
              </span>
              <br />
              <span className="text-neutral-100">агент техподдержки</span>
            </h1>

            <p className="text-base lg:text-2xl text-neutral-400 leading-relaxed mb-5 sm:mb-8 max-w-xl sm:max-w-2xl">
              Работает в Telegram и на сайте, поддерживает текст и голос, даёт
              управляемое качество: пороги релевантности, FAQ-first, логи и
              мониторинг.
            </p>

            <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-10">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-cyan-400/60 flex items-center justify-center mt-0.5">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span className="text-neutral-300 text-sm lg:text-base">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="flex flex-col lg:flex-row gap-2 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full lg:w-auto h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 px-4 py-2 sm:px-7 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-cyan-400/30 transition hover:-translate-y-0.5"
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  Запросить демо
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className="w-full lg:w-auto inline-flex h-12 items-center justify-center rounded-lg sm:rounded-xl border-2 border-cyan-400 px-4 py-2 sm:px-7 sm:py-3 text-sm sm:text-base font-semibold text-cyan-200 text-center transition hover:bg-cyan-400/10"
                  onClick={() => document.getElementById('admin')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  Админ‑панель
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div
        className="h-full lg:h-[110%] w-full lg:w-2/3 relative lg:absolute lg:top-0 lg:left-1/3 lg:right-0 overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty("--mx", `${x}px`);
            el.style.setProperty("--my", `${y}px`);
          }
        }}
        onMouseLeave={() => {
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty("--mx", "-9999px");
            el.style.setProperty("--my", "-9999px");
          }
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(1.1) contrast(1.1) saturate(0.9)",
            opacity: 1,
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 98%)",
            WebkitMaskComposite: "intersect",
            maskComposite: "intersect",
          }}
        />

        <div className="lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[400%] h-[50%]">
          <LaserFlow
            horizontalBeamOffset={0}
            verticalBeamOffset={0.015}
            horizontalSizing={0.4}
            verticalSizing={0.9}
            flowStrength={0.2}
            fogIntensity={0.2}
            fogScale={0.5}
            fogFallSpeed={0.5}
            wispIntensity={0.6}
            falloffStart={0.6}
            flowSpeed={0.2}
            wispSpeed={15}
            wispDensity={8}
            decay={0.5}
            color="#B18DE0"
          />
        </div>

        <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-[130%] h-full">
          <LaserFlow
            horizontalBeamOffset={0.078}
            verticalBeamOffset={0.36}
            horizontalSizing={0.4}
            verticalSizing={0.8}
            flowStrength={0.15}
            fogIntensity={0.2}
            fogScale={0.5}
            fogFallSpeed={0.5}
            wispIntensity={1}
            falloffStart={0.5}
            flowSpeed={0.2}
            wispSpeed={15}
            wispDensity={4}
            decay={0.5}
            color="#B18DE0"
          />
        </div>

        <div className="relative py-24 lg:py-0 lg:absolute w-full lg:w-full lg:top-[13%] left-1/2 lg:left-[60%] -translate-x-1/2 flex flex-col lg:flex-row items-center justify-center text-white text-sm sm:text-2xl z-[6]">
          <div className="lg:hidden w-[90%] px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mb-3 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-cyan-300 cursor-default">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.div>
                  AI Support Agent
                </div>
              </motion.div>

              <h1 className="relative z-20 hero-neon-text text-2xl sm:text-4xl font-bold text-white leading-[1.1] mb-6 sm:mb-10">
                ZipZap Agent
                <br />
                агент техподдержки
              </h1>
              <style>{`
                .hero-neon-text {
                  color: #fff;
                  text-shadow: 0 0 5px #B18DE0, 0 0 10px #B18DE0, 0 0 20px #B18DE0, 0 0 40px #B18DE0, 0 0 80px #B18DE0;
                  animation: hero-neon-glow 3s infinite alternate;
                }
                @keyframes hero-neon-glow {
                  0% {
                    text-shadow: 0 0 5px #B18DE0, 0 0 10px #B18DE0, 0 0 20px #B18DE0, 0 0 40px #B18DE0, 0 0 80px #B18DE0;
                  }
                  50% {
                    text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 80px #00d4ff, 0 0 160px #00d4ff;
                  }
                  100% {
                    text-shadow: 0 0 5px #B18DE0, 0 0 10px #B18DE0, 0 0 20px #B18DE0, 0 0 40px #B18DE0, 0 0 80px #B18DE0;
                  }
                }
              `}</style>
            </motion.div>
          </div>

          {/* iOS Phone Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] mx-auto"
          >
            <IOSPhoneComponent />
          </motion.div>
        </div>

        <img
          ref={revealImgRef}
          src="/background.webp"
          alt="Reveal effect"
          style={{
            position: "absolute",
            width: "110%",
            maxWidth: "110%",
            top: "0%",
            zIndex: 5,
            mixBlendMode: "lighten",
            opacity: 0.3,
            pointerEvents: "none",
            "--mx": "-9999px",
            "--my": "-9999px",
            WebkitMaskImage:
              "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
            maskImage:
              "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-40 left-[10%] hidden xl:block"
      >
        <div className="p-4 rounded-2xl bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm border border-neutral-700/50 shadow-xl">
          <MessageSquare className="w-8 h-8 text-neutral-300" />
        </div>
      </motion.div>
    </section>
  );
}
