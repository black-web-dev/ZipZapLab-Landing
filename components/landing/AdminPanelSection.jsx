import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Settings, Brain, Target, MessageSquare, Bell, Save, RefreshCw } from 'lucide-react';

export default function AdminPanelSection() {
  return (
    <section id="admin" className="relative py-24 lg:py-32 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neutral-300 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Админ‑панель
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Тонкие настройки для
            <br />
            <span className="text-neutral-400">управления качеством</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Настраивайте поведение агента как production‑систему: параметрами, порогами и регламентами.
          </p>
        </motion.div>

        {/* Admin Panel Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-neutral-800/20 rounded-3xl blur-2xl opacity-40" />

          <div className="animated-border bg-linear-to-br from-neutral-900/95 to-black/95 backdrop-blur-xl rounded-3xl p-px lg:p-px shadow-2xl shadow-black/50">
            <div className='bg-black rounded-3xl p-5 lg:p-7'>
              {/* Panel Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    <Settings className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Конфигурация агента</h3>
                    <p className="text-sm text-neutral-400">Последнее обновление: 2 часа назад</p>
                  </div>
                </div>
                <Badge className="bg-neutral-700 text-white border-neutral-600">
                  ● Активен
                </Badge>
              </div>

              {/* Settings Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Model Settings */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="w-5 h-5 text-neutral-300" />
                    <h4 className="font-semibold text-white">Модель и параметры RAG</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-neutral-400 block mb-2">LLM‑модель</label>
                      <Select defaultValue="gpt4o">
                        <SelectTrigger className="bg-neutral-900/80 border-neutral-700 text-white hover:bg-neutral-800/80">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-900 border-neutral-700">
                          <SelectItem value="gpt4o" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">GPT-4o</SelectItem>
                          <SelectItem value="gpt4omini" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">GPT-4o-mini</SelectItem>
                          <SelectItem value="claude" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">Claude 3.5 Sonnet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm text-neutral-400">Размер фрагмента (токены)</label>
                        <span className="text-sm text-neutral-300">512</span>
                      </div>
                      <Slider defaultValue={[512]} max={1024} step={64} className="w-full" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm text-neutral-400">Макс. фрагментов из индекса</label>
                        <span className="text-sm text-neutral-300">5</span>
                      </div>
                      <Slider defaultValue={[5]} max={10} step={1} className="w-full" />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="text-sm text-neutral-400">Включить цитаты в ответ</label>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                {/* Quality Thresholds */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-neutral-300" />
                    <h4 className="font-semibold text-white">Пороги качества</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm text-neutral-400">Общий порог схожести</label>
                        <span className="text-sm text-neutral-300">0.75</span>
                      </div>
                      <Slider defaultValue={[75]} max={100} step={5} className="w-full" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm text-neutral-400">Порог для FAQ</label>
                        <span className="text-sm text-neutral-300">0.85</span>
                      </div>
                      <Slider defaultValue={[85]} max={100} step={5} className="w-full" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm text-neutral-400">Порог дедупликации</label>
                        <span className="text-sm text-neutral-300">0.90</span>
                      </div>
                      <Slider defaultValue={[90]} max={100} step={5} className="w-full" />
                    </div>
                  </div>
                </div>

                {/* FAQ Settings */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="w-5 h-5 text-neutral-300" />
                    <h4 className="font-semibold text-white">FAQ и кандидаты</h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-neutral-400">Включить FAQ-first</label>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="text-sm text-neutral-400">Авто‑кластеризация</label>
                      <Switch defaultChecked />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm text-neutral-400">Мин. повторов для кандидата</label>
                        <span className="text-sm text-neutral-300">3</span>
                      </div>
                      <Slider defaultValue={[3]} max={10} step={1} className="w-full" />
                    </div>
                  </div>
                </div>

                {/* Escalation Settings */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Bell className="w-5 h-5 text-neutral-300" />
                    <h4 className="font-semibold text-white">Настройки эскалаций</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm text-neutral-400">SLA первого ответа (мин)</label>
                        <span className="text-sm text-neutral-300">15</span>
                      </div>
                      <Slider defaultValue={[15]} max={60} step={5} className="w-full" />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="text-sm text-neutral-400">Алерты супервайзеру</label>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="text-sm text-neutral-400">Напоминания операторам</label>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-neutral-800/50">
                <Button variant="outline" className="border-neutral-600 bg-transparent text-white hover:bg-neutral-800 hover:border-neutral-500">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Перезапустить агента
                </Button>
                <Button className="bg-white hover:bg-white/90 text-black font-semibold shadow-lg shadow-white/20">
                  <Save className="w-4 h-4 mr-2" />
                  Сохранить конфигурацию
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}