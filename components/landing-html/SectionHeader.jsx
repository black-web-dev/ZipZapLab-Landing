import React from 'react';
import Reveal from '@/components/landing/Reveal';

export default function SectionHeader({ tag, title, description, light = false }) {
  const tagClass = light ? 'bg-cyan-400/15 text-cyan-600' : 'bg-cyan-400/10 text-cyan-300';
  const titleClass = light ? 'text-slate-900' : 'text-slate-100';
  const descClass = light ? 'text-slate-500' : 'text-slate-300';
  return (
    <Reveal>
      <div className="mx-auto mb-12 max-w-[700px] text-center">
        <span className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tagClass}`}>
          {tag}
        </span>
        <h2 className={`mb-4 text-xl font-bold sm:text-2xl md:text-4xl ${titleClass}`}>{title}</h2>
        {description ? <p className={`text-base sm:text-lg ${descClass}`}>{description}</p> : null}
      </div>
    </Reveal>
  );
}
