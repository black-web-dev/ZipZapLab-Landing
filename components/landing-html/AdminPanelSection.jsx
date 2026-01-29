import React, { useState } from 'react';
import { BarChart3, HelpCircle, Layers, Settings, UserCog } from 'lucide-react';
import Reveal from '@/components/landing/Reveal';
import SectionHeader from '@/components/landing-html/SectionHeader';

const menu = [
  { id: 'model', label: 'Модель и RAG', Icon: Layers },
  { id: 'thresholds', label: 'Пороги качества', Icon: BarChart3 },
  { id: 'faq-settings', label: 'FAQ и кандидаты', Icon: HelpCircle },
  { id: 'escalation-settings', label: 'Эскалации', Icon: UserCog },
  { id: 'system', label: 'Система', Icon: Settings },
];

function Toggle({ defaultOn = true }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn((prev) => !prev)}
      className={[
        'relative h-7 w-12 rounded-full transition',
        on ? 'bg-cyan-400' : 'bg-white/10',
      ].join(' ')}
    >
      <span
        className={[
          'absolute top-1 h-5 w-5 rounded-full bg-white transition',
          on ? 'left-6' : 'left-1',
        ].join(' ')}
      />
    </button>
  );
}

export default function AdminPanelSection() {
  const [active, setActive] = useState('model');
  const [thresholds, setThresholds] = useState({
    overall: 0.75,
    faq: 0.85,
    routing: 0.7,
    dedup: 0.9,
  });

  return (
    <section id="admin" className="bg-slate-50 py-12 sm:py-20 text-slate-900">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeader
          tag="Админ‑панель"
          title="Тонкие настройки для управления качеством"
          description="Настраивайте поведение агента как production‑систему: параметрами, порогами и регламентами."
          light
        />
        <Reveal>
          <div className="grid overflow-hidden rounded-xl border border-slate-800 bg-[#1e293b] lg:grid-cols-[240px_1fr]">
            <aside className="border-r border-slate-800 bg-slate-900/40 p-6">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Меню</h4>
              <div className="flex flex-col gap-2">
                {menu.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={[
                      'flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm transition',
                      active === item.id
                        ? 'bg-cyan-400/15 text-cyan-300'
                        : 'text-slate-400 hover:bg-white/5 hover:text-slate-200',
                    ].join(' ')}
                    onClick={() => setActive(item.id)}
                  >
                    <item.Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {item.label}
                  </button>
                ))}
              </div>
            </aside>
            <div className="p-8">
              {active === 'model' && (
                <div>
                  <h3 className="mb-6 text-xl font-semibold text-slate-100">Модель и параметры RAG</h3>
                  <div className="mb-6">
                    <label className="mb-2 block text-sm text-slate-400">LLM‑модель</label>
                    <select className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none">
                      <option>Anthropic Claude</option>
                      <option>Сбер GigaChat</option>
                      <option>GPT</option>
                    </select>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-slate-400">Размер фрагмента (токены)</label>
                      <input
                        type="number"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                        defaultValue="512"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-400">Перекрытие фрагментов</label>
                      <input
                        type="number"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                        defaultValue="50"
                      />
                    </div>
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-slate-400">Макс. фрагментов из индекса</label>
                      <input
                        type="number"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                        defaultValue="5"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-400">Макс. фрагментов из документа</label>
                      <input
                        type="number"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                        defaultValue="3"
                      />
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                      <span className="text-sm text-slate-300">Включить цитаты в ответ</span>
                      <Toggle />
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                      <span className="text-sm text-slate-300">Использовать весь индекс</span>
                      <Toggle />
                    </div>
                  </div>
                </div>
              )}

              {active === 'thresholds' && (
                <div>
                  <h3 className="mb-6 text-xl font-semibold text-slate-100">Пороги качества</h3>
                  <div className="space-y-5">
                    {[
                      { key: 'overall', label: 'Общий порог схожести', value: thresholds.overall },
                      { key: 'faq', label: 'Порог для FAQ', value: thresholds.faq },
                      { key: 'routing', label: 'Порог маршрутизации', value: thresholds.routing },
                      { key: 'dedup', label: 'Порог дедупликации', value: thresholds.dedup },
                    ].map((item) => (
                      <div key={item.key}>
                        <label className="mb-2 block text-sm text-slate-400">
                          {item.label}:{' '}
                          <span className="ml-2 rounded bg-cyan-400 px-2 py-1 text-xs text-white">
                            {item.value.toFixed(2)}
                          </span>
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={item.value}
                          onChange={(event) => setThresholds((prev) => ({ ...prev, [item.key]: Number(event.target.value) }))}
                          className="w-full accent-cyan-400"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active === 'faq-settings' && (
                <div>
                  <h3 className="mb-6 text-xl font-semibold text-slate-100">FAQ и кандидаты</h3>
                  <div className="mb-6 flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                    <span className="text-sm text-slate-300">Включить FAQ-first</span>
                    <Toggle />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-slate-400">Мин. повторов для кандидата</label>
                      <input
                        type="number"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                        defaultValue="3"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-400">Порог схожести кластера</label>
                      <input
                        type="number"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                        defaultValue="0.8"
                        step="0.05"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                    <span className="text-sm text-slate-300">Авто‑кластеризация новых вопросов</span>
                    <Toggle />
                  </div>
                </div>
              )}

              {active === 'escalation-settings' && (
                <div>
                  <h3 className="mb-6 text-xl font-semibold text-slate-100">Настройки эскалаций</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-slate-400">SLA первого ответа (мин)</label>
                      <input
                        type="number"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                        defaultValue="5"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-400">SLA закрытия (мин)</label>
                      <input
                        type="number"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                        defaultValue="30"
                      />
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                      <span className="text-sm text-slate-300">Алерты супервайзеру при просрочке</span>
                      <Toggle />
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                      <span className="text-sm text-slate-300">Напоминания операторам</span>
                      <Toggle />
                    </div>
                  </div>
                </div>
              )}

              {active === 'system' && (
                <div>
                  <h3 className="mb-6 text-xl font-semibold text-slate-100">Системные настройки</h3>
                  <div className="mb-6">
                    <label className="mb-2 block text-sm text-slate-400">Системный промпт</label>
                    <textarea
                      className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                      rows="4"
                      defaultValue="Отвечай строго по документам. Если информации нет — предложи связаться с оператором. Используй деловой стиль."
                    />
                  </div>
                  <div className="mb-6">
                    <label className="mb-2 block text-sm text-slate-400">Макс. длина истории (символы)</label>
                    <input
                      type="number"
                      className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                      defaultValue="4000"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button className="rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-white">
                      Сохранить конфигурацию
                    </button>
                    <button className="rounded-xl border-2 border-cyan-400 px-6 py-3 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/10">
                      Перезапустить агента
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
