'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import { categories, projects } from '@/lib/projects';

export default function ProjectsGallery() {
  const [active, setActive] = useState<(typeof categories)[number]>('Todos');

  const filtered =
    active === 'Todos' ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filters */}
      <div
        role="tablist"
        aria-label="Filtrar por categoria"
        className="flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-6"
      >
        {categories.map((cat) => {
          const selected = cat === active;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={selected}
              type="button"
              onClick={() => setActive(cat)}
              className={`font-display text-xs uppercase tracking-label transition-colors duration-300 ${
                selected ? 'text-accent' : 'text-muted hover:text-text'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Asymmetric editorial grid */}
      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-16 md:mt-20 md:grid-cols-2 md:gap-y-28">
        {filtered.map((project, idx) => (
          <Reveal
            key={project.slug}
            className={idx % 3 === 1 ? 'md:mt-24' : ''}
          >
            <ProjectCard project={project} priority={idx === 0} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-20 text-center text-muted">Nenhum projeto nesta categoria.</p>
      )}
    </div>
  );
}
