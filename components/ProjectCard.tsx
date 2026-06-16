'use client';

import Link from 'next/link';
import { useRef } from 'react';
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
  const labelRef = useRef<HTMLSpanElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  // Desktop-only cursor label, positioned imperatively to avoid re-rendering
  // the card on every pointer move.
  const isCoarse = () =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  const onEnter = () => {
    if (isCoarse() || !ref.current || !labelRef.current) return;
    rectRef.current = ref.current.getBoundingClientRect();
    labelRef.current.style.opacity = '1';
  };

  const onMove = (e: React.MouseEvent) => {
    const label = labelRef.current;
    const rect = rectRef.current;
    if (!label || !rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    label.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  };

  const onLeave = () => {
    if (labelRef.current) labelRef.current.style.opacity = '0';
  };

  return (
    <Link
      ref={ref}
      href={`/projetos/${project.slug}`}
      className="group relative block"
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <Frame
        image={project.hero}
        aspect={project.hero.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}
        sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'}
        priority={priority}
        hover
      />
      {/* Cursor label — desktop only, hidden until hover */}
      <span
        ref={labelRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 hidden whitespace-nowrap bg-accent px-3 py-1.5 font-display text-[0.65rem] uppercase tracking-label text-primary-fg opacity-0 transition-opacity duration-200 ease-editorial md:block"
      >
        Ver projeto
      </span>

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
