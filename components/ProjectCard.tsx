'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import Frame from '@/components/Frame';
import type { Project } from '@/lib/projects';

type ProjectCardProps = {
  project: Project;
  /** First card in the viewport gets priority loading. */
  priority?: boolean;
  sizes?: string;
};

export default function ProjectCard({ project, priority, sizes }: ProjectCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = el.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link
      ref={ref}
      href={`/projetos/${project.slug}`}
      className="group relative block"
      onMouseMove={onMove}
      onMouseLeave={() => setCursor(null)}
    >
      <Frame
        image={project.hero}
        aspect={project.hero.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}
        sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'}
        priority={priority}
        hover
      />
      {/* Cursor label — desktop only */}
      {cursor && (
        <span
          aria-hidden
          className="pointer-events-none absolute z-10 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-accent px-3 py-1.5 font-display text-[0.65rem] uppercase tracking-label text-primary-fg md:block"
          style={{ left: cursor.x, top: cursor.y }}
        >
          Ver projeto
        </span>
      )}

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-light tracking-tight text-text">
          {project.name}
        </h3>
        <span className="eyebrow shrink-0">{project.year}</span>
      </div>
      <p className="mt-1 text-sm text-muted">
        {project.category} — {project.location}
      </p>
    </Link>
  );
}
