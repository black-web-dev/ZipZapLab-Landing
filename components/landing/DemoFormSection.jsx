import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, Sparkles, CheckCircle, Send } from 'lucide-react';

export default function DemoFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demo" className="relative py-24 lg:py-32 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neutral-300 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Запросить демо
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Посмотрите, как
              <br />
              <span className="text-neutral-400">ZipZap Agent работает</span>
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              Оставьте заявку, и мы покажем, как агент отвечает на ваших документах. 
              Бесплатная демонстрация занимает около 30 минут.
            </p>

            <ul className="space-y-4">
              {[
                'Загрузим ваши документы для демо',
                'Покажем работу RAG и FAQ-first',
                'Продемонстрируем админ-панель',
                'Ответим на все вопросы',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-neutral-300" />
                  </div>
                  <span className="text-neutral-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-x-0 top-0 h-96 bg-white/10 rounded-3xl blur-2xl opacity-40" />
            
            <div className="relative bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 backdrop-blur-xl rounded-3xl border border-neutral-600 p-6 lg:p-8 shadow-2xl shadow-black/30">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-neutral-700 flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-neutral-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Спасибо за заявку!</h3>
                  <p className="text-neutral-400">
                    Мы свяжемся с вами в течение рабочего дня.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label className="text-neutral-300 mb-2 block">Имя</Label>
                      <Input
                        placeholder="Иван"
                        className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-neutral-500"
                        required
                      />
                    </div>
                    <div>
                      <Label className="text-neutral-300 mb-2 block">Компания</Label>
                      <Input
                        placeholder="ООО «Компания»"
                        className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-neutral-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-slate-300 mb-2 block">Email</Label>
                    <Input
                      type="email"
                      placeholder="ivan@company.ru"
                      className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-neutral-500"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-slate-300 mb-2 block">Телефон</Label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-neutral-500"
                    />
                  </div>

                  <div>
                    <Label className="text-slate-300 mb-2 block">Расскажите о задаче</Label>
                    <Textarea
                      placeholder="Какую задачу хотите решить с помощью ZipZap Agent?"
                      rows={4}
                      className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-neutral-600 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white hover:bg-white/90 text-black font-semibold h-12 shadow-lg shadow-white/20"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-neutral-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}