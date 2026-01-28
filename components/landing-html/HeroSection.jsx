import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    let particles = [];
    let animationId;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.min(50, Math.floor(canvas.width / 25));
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(6,182,212,0.6)';
      ctx.strokeStyle = 'rgba(6,182,212,0.15)';
      ctx.lineWidth = 1;

      particles.forEach((p, i) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.globalAlpha = 1 - d / 120;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      if (!prefersReducedMotion) animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    const onResize = () => {
      resize();
      createParticles();
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        <div className="grid items-start gap-9 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              AI Support Agent
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-[3.3rem]">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">
                ZipZap Agent
              </span>{' '}
              — агент техподдержки, который отвечает по вашей базе знаний
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
              Работает в Telegram и на сайте, поддерживает текст и голос, даёт управляемое качество: пороги релевантности,
              FAQ-first, логи и мониторинг.
            </p>
            <ul className="mb-10 space-y-3 text-slate-200">
              {[
                'RAG‑ответы по базе знаний с цитатами и ссылками на первоисточник',
                'FAQ-first: эталонные ответы экспертов имеют приоритет',
                'Эскалации на оператора: очередь, таймеры, алерты и SLA‑дашборд',
                'Полная управляемость: модель, чанкинг, пороги, маршрутизация',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="#demo"
                className="inline-flex items-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-400/30 transition hover:-translate-y-0.5"
              >
                Запросить демо
              </a>
              <a
                href="#admin"
                className="inline-flex items-center rounded-xl border-2 border-cyan-400 px-7 py-3 text-base font-semibold text-cyan-200 transition hover:bg-cyan-400 hover:text-[#0f172a]"
              >
                Админ‑панель
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[725px] overflow-hidden rounded-xl border border-cyan-400/30 shadow-2xl shadow-cyan-400/20 lg:translate-x-[3cm] lg:scale-110">
              <div className="absolute inset-[-2px] -z-10 rounded-[calc(0.75rem+2px)] bg-gradient-to-br from-cyan-400 to-emerald-500 opacity-50" />
              <video autoPlay muted loop playsInline controls preload="auto" className="block w-full rounded-xl">
                <source src="/ai_agent_demo.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>
          </div>
        </div>
        <img
          src="/under_construction.png"
          alt="Сайт в разработке"
          className="absolute right-[calc((100vw-1400px)/2+1.5rem)] top-[118px] z-10 h-auto max-w-[209px] rounded-lg shadow-lg shadow-black/30 max-[968px]:relative max-[968px]:right-auto max-[968px]:top-auto max-[968px]:mx-auto max-[968px]:mt-6 max-[968px]:block"
        />
      </div>
    </section>
  );
}
