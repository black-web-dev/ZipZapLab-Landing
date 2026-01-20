import React from 'react';
import ChromaGrid from '@/components/ChromaGrid';

const items = [
  {
    image: "https://i.pravatar.cc/300?img=5",
    title: "Mike Chen",
    subtitle: "Backend‑инженер",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image: "https://i.pravatar.cc/300?img=8",
    title: "Sarah Johnson",
    subtitle: "Frontend‑разработчик",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=9",
    title: "Anna Petrova",
    subtitle: "Backend‑инженер",
    handle: "@annapetrova",
    borderColor: "#F59E42",
    gradient: "linear-gradient(180deg, #F59E42, #000)",
    url: "https://linkedin.com/in/annapetrova"
  },
  {
    image: "https://i.pravatar.cc/300?img=11",
    title: "Anna Petrova",
    subtitle: "Backend‑инженер",
    handle: "@annapetrova",
    borderColor: "#F59E42",
    gradient: "linear-gradient(180deg, #F59E42, #000)",
    url: "https://linkedin.com/in/annapetrova"
  }
];

export default function TeamProfilesSection() {
  return (
    <section id="team" className="relative py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Наша команда
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
            Познакомьтесь с людьми, которые создают продукт.
          </p>
        </div>

        <div style={{ height: '600px', position: 'relative' }}>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </section>
  );
}

