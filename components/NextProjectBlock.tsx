import Link from 'next/link';
import Frame from '@/components/Frame';
import type { Project } from '@/lib/projects';

export default function NextProjectBlock({ project }: { project: Project }) {
  return (
    <Link href={`/projetos/${project.slug}`} className="group relative block h-[70vh] overflow-hidden">
      <Frame
        image={project.hero}
        aspect="aspect-auto"
        className="!aspect-auto h-full"
        sizes="100vw"
        hover
      />
      <div className="absolute inset-0 bg-bg/40 transition-colors duration-700 ease-editorial group-hover:bg-bg/25" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="eyebrow text-text/80">Próximo projeto</p>
        <p className="mt-4 font-display text-4xl font-light tracking-tight text-text md:text-6xl">
          {project.name}
        </p>
        <span className="mt-6 font-display text-xs uppercase tracking-label text-text/90">
          {project.category} — {project.location}
        </span>
      </div>
    </Link>
  );
}
