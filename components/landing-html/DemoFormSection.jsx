import React, { useMemo, useState } from 'react';
import Reveal from '@/components/landing/Reveal';
import SectionHeader from '@/components/landing-html/SectionHeader';

const TELEGRAM_BOT_TOKEN = '8466344197:AAGtPGtp23743Ask5amUEv0sZSfVgPoIYMQ';
const TELEGRAM_CHAT_ID = '393343171';
const USE_TELEGRAM = true;

const chips = [
  'FAQ-first ответы',
  'С цитатами источников',
  'SLA под контролем',
  'Тонкая настройка',
  'Telegram + web‑виджет',
  'Логи и метрики',
];

async function sendToTelegram(formData) {
  const message = `🚀 Запрос демо ZipZap Agent

👤 Контактная информация:
━━━━━━━━━━━━━━━━━━━━
• Имя: ${formData.name}
• Компания: ${formData.company}
• Email: ${formData.email}
• Телефон: ${formData.phone || 'Не указан'}
• Роль: ${formData.role}

⚙️ Параметры пилота:
━━━━━━━━━━━━━━━━━━━━
• Канал: ${formData.channel}
• Контур: ${formData.deployment}

📚 Источники знаний:
${formData.sources || 'Не указано'}

💬 Комментарий:
${formData.comment || 'Нет комментариев'}

📅 Дата: ${new Date().toLocaleString('ru-RU')}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });
    const result = await response.json();
    if (!result.ok) throw new Error(result.description || 'Telegram API error');
    return true;
  } catch (error) {
    console.error('Telegram send error:', error);
    alert('Ошибка отправки в Telegram. Попробуйте позже или свяжитесь напрямую: sales@zipzaplab.ru');
    return false;
  }
}

function sendViaEmail(formData) {
  const subject = encodeURIComponent(`Запрос демо ZipZap Agent - ${formData.company}`);
  const body = encodeURIComponent(
    `Запрос демо ZipZap Agent

Контактная информация:
━━━━━━━━━━━━━━━━━━━━
Имя и фамилия: ${formData.name}
Компания: ${formData.company}
Email: ${formData.email}
Телефон: ${formData.phone || 'Не указан'}
Роль: ${formData.role}

Параметры пилота:
━━━━━━━━━━━━━━━━━━━━
Канал для пилота: ${formData.channel}
Контур поставки: ${formData.deployment}

Источники знаний:
━━━━━━━━━━━━━━━━━━━━
${formData.sources || 'Не указано'}

Комментарий:
━━━━━━━━━━━━━━━━━━━━
${formData.comment || 'Нет комментариев'}

---
Отправлено через форму на сайте ZipZap Agent
Дата: ${new Date().toLocaleString('ru-RU')}`,
  );

  const mailtoLink = `mailto:sales@zipzaplab.ru?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
}

export default function DemoFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: 'Руководитель поддержки',
    channel: 'Telegram',
    deployment: 'Облако',
    sources: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const sourcesCount = formData.sources.length;
  const commentCount = formData.comment.length;

  const isEmailValid = useMemo(
    () => (!formData.email ? false : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)),
    [formData.email],
  );

  const onChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Укажите имя';
    if (!formData.company.trim()) nextErrors.company = 'Укажите компанию';
    if (!isEmailValid) nextErrors.email = 'Укажите корректный email';
    if (sourcesCount > 500) nextErrors.sources = 'Максимум 500 символов (~1 страница)';
    if (commentCount > 2000) nextErrors.comment = 'Максимум 2000 символов (~1 страница)';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSending(true);
    let sent = false;
    if (USE_TELEGRAM && TELEGRAM_BOT_TOKEN !== 'YOUR_BOT_TOKEN_HERE') {
      sent = await sendToTelegram(formData);
    } else {
      sendViaEmail(formData);
      sent = true;
    }
    setSending(false);
    setSubmitted(sent);
  };

  return (
    <section id="demo" className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          tag="Демо"
          title="Покажем ZipZap Agent на ваших документах"
          description="Подключим канал, загрузим документы, настроим FAQ-first и покажем эскалации со SLA."
        />
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-8">
          <form
            onSubmit={onSubmit}
            className="mx-auto max-w-[600px] rounded-2xl bg-white p-8 text-slate-900 shadow-2xl shadow-black/10"
          >
            {!submitted ? (
              <>
                <h3 className="text-xl font-semibold">Запрос демо</h3>
                <p className="mt-2 text-sm text-slate-500">Заполните форму — мы свяжемся в течение рабочего дня.</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-500">Имя и фамилия *</label>
                    <input
                      type="text"
                      className={`w-full rounded-lg border px-4 py-3 text-sm ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
                      value={formData.name}
                      onChange={onChange('name')}
                    />
                    {errors.name ? <p className="mt-1 text-xs text-red-500">{errors.name}</p> : null}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-500">Компания *</label>
                    <input
                      type="text"
                      className={`w-full rounded-lg border px-4 py-3 text-sm ${errors.company ? 'border-red-400' : 'border-slate-200'}`}
                      value={formData.company}
                      onChange={onChange('company')}
                    />
                    {errors.company ? <p className="mt-1 text-xs text-red-500">{errors.company}</p> : null}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-500">Email *</label>
                    <input
                      type="email"
                      className={`w-full rounded-lg border px-4 py-3 text-sm ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
                      value={formData.email}
                      onChange={onChange('email')}
                    />
                    {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email}</p> : null}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-500">Телефон</label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={onChange('phone')}
                    />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-500">Роль</label>
                    <select
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
                      value={formData.role}
                      onChange={onChange('role')}
                    >
                      <option>Руководитель поддержки</option>
                      <option>ИТ / DevOps</option>
                      <option>Продукт</option>
                      <option>Безопасность</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div className="hidden md:block" />
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-500">Канал для пилота</label>
                    <select
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
                      value={formData.channel}
                      onChange={onChange('channel')}
                    >
                      <option>Telegram</option>
                      <option>Web‑виджет</option>
                      <option>Оба</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-500">Контур поставки</label>
                    <select
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
                      value={formData.deployment}
                      onChange={onChange('deployment')}
                    >
                      <option>Облако</option>
                      <option>On-prem</option>
                      <option>Гибрид</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm text-slate-500">Источники знаний (кратко)</label>
                  <input
                    type="text"
                    className={`w-full rounded-lg border px-4 py-3 text-sm ${errors.sources ? 'border-red-400' : 'border-slate-200'}`}
                    placeholder="PDF, инструкции, регламенты, FAQ..."
                    maxLength={500}
                    value={formData.sources}
                    onChange={onChange('sources')}
                  />
                  <div className="mt-1 text-xs text-slate-400">
                    <span className="text-slate-500">{sourcesCount}</span>/500 символов
                  </div>
                  {errors.sources ? <p className="mt-1 text-xs text-red-500">{errors.sources}</p> : null}
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm text-slate-500">Комментарий</label>
                  <textarea
                    className={`w-full rounded-lg border px-4 py-3 text-sm ${errors.comment ? 'border-red-400' : 'border-slate-200'}`}
                    placeholder="Какие темы критичны? Где цена ошибки высокая?"
                    maxLength={2000}
                    rows={4}
                    value={formData.comment}
                    onChange={onChange('comment')}
                  />
                  <div className="mt-1 text-xs text-slate-400">
                    <span className="text-slate-500">{commentCount}</span>/2000 символов
                  </div>
                  {errors.comment ? <p className="mt-1 text-xs text-red-500">{errors.comment}</p> : null}
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-white"
                  disabled={sending}
                >
                  {sending ? 'Отправка...' : 'Запросить демо и пилот'}
                </button>
              </>
            ) : (
              <div className="py-10 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900">Заявка отправлена!</h4>
                <p className="mt-2 text-sm text-slate-500">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
